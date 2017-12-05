/**
 * Created by 银鹏 on 2016/8/21.
 */
(function () {
    /**
     * main function
     * @param {string} url jsonp接口地址
     * @param {*} data 请求jsonp时需要携带的参数
     * @param {string} jsonpcallback server提供的请求参数名称
     * @param {Function} callback 请求成功的回调函数
     */
    function jsonp(url, data, jsonpcallback, callback) {
        // 1 生成函数名
        var cbName = 'cb' + counter++;
        // 生成全局函数名
        var globalMethodName = 'window.jsonp.' + cbName;
        // 2 生成全局函数体
        window.jsonp[cbName] = function (data) {
            // data为服务器返回的数据
            try {
                callback(data);
            } finally {
                // 不管callback有没有报错,都执行complete方法
                complete();
            }
        };
        // 把参数拼接到url上
        url = tools.padStringToURL(url, data);
        // 把josnpcallback和全局函数名拼接到url上
        url = tools.padStringToURL(url, jsonpcallback + '=' + globalMethodName);

        // 动态创建script标签
        var script = document.createElement('script');
        // 把script标签设置为异步请求
        script.async = 'async';
        // 把url赋值到src上
        script.src = url;
        // 防止加载jsonp接口失败
        script.onerror = function () {
            complete();
        };

        // 清空script标签和全局函数
        function complete() {
            script.parentNode.removeChild(script);
            delete window.jsonp[cbName];
        }

        // 因为如果html没有加载完成 那么document就是null
        // 所以拼接script标签之前先判断html是否加载完成
        function appendScript() {
            document.body.appendChild(script);
        }

        // 检验html是否加载完成
        if (document.readyState === 'complete') {
            appendScript();
        } else {
            if (window.addEventListener) {
                window.addEventListener('load', function () {
                    appendScript();
                }, false)
            } else {
                window.attachEvent('onload', function () {
                    appendScript();
                });
            }
        }
    }

    // jsonp暴露全局环境中
    this.jsonp = jsonp;
    // 计数器,用来保证不被缓存
    var counter = 1;

    var tools = {
        /**
         * 把data格式化请求参数
         * @param {*} data 待格式化的数据
         */
        encodeDataToURIString: function (data) {
            if (typeof data === 'string') {
                return data;
            }
            if (data === undefined || data === null) {
                return '';
            }
            if (Object.prototype.toString.call(data) === '[object Object]') {
                var arr = [];
                for (var n in data) {
                    if (!data.hasOwnProperty(n)) continue;
                    arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
                }
                return arr.join('&');
            }
            return data.toString();
        },
        /**
         * 往url上拼接参数
         * @param {string} url 请求地址
         * @param {string} padString 等待拼接的数据
         */
        padStringToURL: function (url, padString) {
            padString = tools.encodeDataToURIString(padString);
            if (!padString) {
                return url;
            }
            var hasWenhao = /\?/.test(url);
            // 因为三元运算符的优先级最低,所以先用括号包起来,让三元运算符先执行.
            return url + (hasWenhao ? '&' : '?') + padString
        }
    }
})();
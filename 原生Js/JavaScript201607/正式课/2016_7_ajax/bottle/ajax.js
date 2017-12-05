/**
 * Created by 银鹏 on 2016/8/20.
 */
(function () {
    /*{
     // ajax请求地址
     url: '',
     // http方法
     method: 'get',
     // 发送的参数
     data: {},
     // 是否为异步请求
     async: true,
     // 是否缓存请求
     cache: false,
     // 格式化服务器返回的数据
     dataType: 'json',
     // 自定义请求首部
     headers: {},
     // ajax成功回调
     success: function () {

     },
     // ajax失败回调
     error: function () {

     }
     }*/

    // eval错误
    //EvalError
    // 范围错误
    //RangeError
    // 引用错误
    //ReferenceError
    // 语法错误
    //SyntaxError
    // 类型错误
    //TypeError
    // uri格式错误
    //URIError

    /**
     * ajax执行逻辑
     * @param {Object} settings 配置对象
     */
    function ajax(settings) {
        // 判断参数类型是否合法
        if (!tools.isType(settings, 'Object')) {
            throw new TypeError('参数类型错误');
        }
        // step 1 获取ajax对象
        var xhr = tools.getXHR();
        // 用户没有传入http方法,默认为get方法
        !settings.method && (settings.method = 'get');
        // 用户没有传输async,默认设置为true
        settings.async === undefined && (settings.async = true);

        // 判断是否为get系方法
        var isGet = /^get|delete|head$/ig.test(settings.method);

        // 把参数格式化为请求参数
        if (settings.data) {
            settings.data = tools.encodeDataToURIString(settings.data);
        }

        // 1.1 如果为get方法,得把data拼接到url上
        if (isGet && settings.data) {
            settings.url = tools.padStringToURL(settings.url, settings.data);
            // 因为get系 的send方法不需要传参数,所以把data设置为null
            settings.data = null;
        }

        // 1.2 如果不走强缓存,往url拼接随机数
        if (settings.cache === false) {
            var random = Math.random().toString(36).slice(2);
            settings.url = tools.padStringToURL(settings.url, random);
        }

        // step 2
        xhr.open(settings.method, settings.url, settings.async);

        // 2.1 自定义请求首部
        if (tools.isType(settings.headers, 'Object') && xhr.setRequestHeader) {
            for (var n in settings.headers) {
                if (!settings.headers.hasOwnProperty(n)) continue;
                xhr.setRequestHeader(n, settings.headers[n]);
            }
        }

        // step 3 接收响应
        xhr.onreadystatechange = function () {
            // 判断http事务是否完成
            if (xhr.readyState === 4) {
                // 获取响应主体
                var response = xhr.responseText;
                // 判断状态码是否为2开头或者为304
                if (/^2\d{2}$/.test(xhr.status) || xhr.status === 304) {
                    // 判断是否需要将响应主体格式化为json对象
                    if (response&&/^json$/ig.test(settings.dataType)) {
                        // 为了防止JONS.parse出错
                        try {
                            response = tools.JSONParse(response);
                        } catch (ex) {
                            settings.error(response, ex);
                            return;
                        }
                    }
                    settings.success(response);
                } else if (/^[45]\d{2}$/.test(xhr.status)) {
                    settings.error(response, xhr.status);
                }
            }
        };

        // step 4
        xhr.send(settings.data);
    };


    var tools = {
        /**
         * 利用惰性函数获取ajax对象
         */
        getXHR: (function () {
            var list = [function () {
                return new XMLHttpRequest()
            },
                function () {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                },
                function () {
                    return new ActiveXObject('Msxml2.XMLHTTP');
                },
                function () {
                    return new ActiveXObject('Msxml3.XMLHTTP');
                }];

            var xhr = null;
            while (xhr = list.shift()) {
                try {
                    xhr();
                    return xhr;
                } catch (ex) {

                } finally {

                }
            }
            throw new ReferenceError('当前浏览器不支持ajax');
        })(),
        /**
         * 判断类型
         * @param {*} data 需要判断类型的数据
         * @param {string} type 类型
         * @return {boolean} 判断类型是否符合
         */
        isType: function (data, type) {
            return Object.prototype.toString.call(data) === '[object ' + type + ']';
        },
        /**
         * 把一个对象格式化为请求参数的格式
         * @param data 需要格式化为请求参数格式的对象
         * @return {string} 请求参数
         */
        encodeDataToURIString: function (data) {
            // 判断参数data是否为字符串,如果是字符串直接返回.因为该方法的目的就是返回字符串,data已经是一个字符串就没有必要在计算,所以直接返回.
            if (tools.isType(data, 'String')) {
                return data;
            }
            // {a:1,b:2} => [a=1,b=2] => a=1&b=2
            if (tools.isType(data, 'Object')) {
                var arr = [];
                for (var n in data) {
                    if (!data.hasOwnProperty(n)) continue;
                    // encodeURIComponent 将非英文字符 转换为URI格式字符串
                    // 珠峰培训 => %E7%8F%A0%E5%B3%B0
                    // 因为URL中不能存在非英文字符
                    arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
                }
                return arr.join('&');
            }

            return String(data);
        },
        /**
         * 往url上拼接字符串
         * @param {string} url 请求地址
         * @param {string} padString 待拼接的字符串
         * @return {string} 拼接之后的url
         */
        padStringToURL: function (url, padString) {
            padString = tools.encodeDataToURIString(padString);
            // 判断url中是否含有问号(?)
            // 如果有问号 说明当前url中存在请求参数.否则不存在请求参数
            /**
             * www.baidu.com?a=1&b=2    c=3  该情况需加&
             * www.baidu.com    d=4    该情况需要加?
             */
            return url + (/\?/.test(url) ? '&' : '?') + padString;
        },
        /**
         * 将json字符串格式化为json对象
         * @param {string} JSONString 待格式化的字符串
         * @return {JSON} 格式化完成之后的JSON对象
         */
        JSONParse: function (JSONString) {
            if (window.JSON) {
                return JSON.parse(JSONString);
            }
            // return eval('(' + JSONString + ')');
            return (new Function('return ' + JSONString))();
        }
    };
    this.ajax = ajax;
})();
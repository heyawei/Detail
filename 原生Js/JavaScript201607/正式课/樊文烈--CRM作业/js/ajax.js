;(function () {
    function createXHR() {
        var xhr = null, ary = [
            function () {
                return new XMLHttpRequest();
            },
            function () {
                return new ActiveXObject('Microsoft.XMLHttp');
            },
            function () {
                return new ActiveXObject('Msxml2.XMLHttp');
            },
            function () {
                return new ActiveXObject('Msxml3.XMLHttp');
            }
        ];
        var flag = 0; //用来标识数组中的函数有没有执行成功  如果没有，那么说明该浏览器不支持ajax
        for (var i = 0, len = ary.length; i < len; i++) {
            var tempFn = ary[i];
            try {
                xhr = tempFn();
                createXHR = tempFn;
                flag++;
                break;
            } catch (e) {
                //跳过
            }
        }
        if (flag === 0) {
            throw new Error('Your borswer is not support ajax');
        }
        return xhr;
    }

    function ajax(options) {
        //定义一个默认对象，用来传参
        var _dafault = {
            url: null,
            type: 'get',
            async: true,
            data: null,
            dataType: 'json',
            success: null
        };
        //如果传入了参数，就需要把默认参数给修改了 循环一下options  这里要判断一下key是不是opations的私有属性
        for(var key in options){
           options.hasOwnProperty(key) ?  _dafault[key] = options[key] : null;
        }
        var xhr = createXHR();
        //如果是get方式，需要解决默认缓存问题，通过Math.random()
        //但是如果传入的url有参数，那么就不能用?了,而是用&来连接，所以需要判断一下
        var code = _dafault.url.indexOf('?') > -1 ? '&' : '?';
        if (_dafault.type === 'get') {
            _dafault.url += code + '_=' + Math.random().toFixed(6);
        }
        xhr.open(_dafault.type, _dafault.url, _dafault.async);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && /2\d{2}.test(xhr.status)/) {
                var con = xhr.responseText;
                if (_dafault.dataType === 'json') {
                    con = 'JSON' in window ? JSON.parse(con) : eval('(' + con + ')');
                }
                //到这一步我们需要使用这个返回的值
                _dafault.success && _dafault.success.call(xhr,con);
            }
        };
        xhr.send(_dafault.data);
    }

    window.ajax =ajax;
})();
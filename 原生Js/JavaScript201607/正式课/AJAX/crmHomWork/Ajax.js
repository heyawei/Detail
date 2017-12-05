// -> 创建AJAX对象，兼容所有的浏览器，使用惰性思想进行封装处理
function createXHR() {
    var xhr = null, flag = 0;
    //-->我们把创建AJAX对象的四种方式存放在四个不同的小方法中，然后循环数据分别执行每一个小方法，如果遇到一个执行没有报错，说明当前这个小方法是兼容这个浏览器的，此时我们把createXHR重写，让其等于这个小方法，以后执行createXHR都是在执行这个兼容的小方法
    var ary = [
        function () {
            return new XMLHttpRequest;
        },
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxml3.XMLHTTP");
        },
    ];
    for (var i = 0, len = ary.length; i < len; i++) {
        var tempFn = ary[i];
        try {
            xhr = tempFn(); //->如果执行不保错说明当前这个方法兼容，结束循环，并且重新的把createXHR进行赋值

            flag++;
            createXHR = tempFn;
            break;
        } catch (e) {
        }
    }
    if (flag === 0) {
        throw new Error("your browser is not support ajax!")
    }
    return xhr;
}

//-->封装一个AJAX请求数据的方法，以后只要是请求数据，我们直接的调取这个方法执行即可
function ajax(options) {
    var _default = {
        url: null, //请求地址
        type: 'get', //请求方式
        dataType: 'json', //请求回来的数据内容格式，默认JSON格式的对象(如果写的是JSON,需要在AJAX把请求回来的字符串转换为JSON格式的对象)
        async: true, // 采用同步还是异步
        data: null,  //设置请求主体中的内容(传递进来的是字符串)
        success: null   //请求成功后执行的回调函数
    }
    // 把用户自己传递进来的某些属性的参数值覆盖默认的参数值，这样_default容纳
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            _default[key] = options[key];
        }
    }
    var xhr = createXHR();
    if (_default.type == "get") {
        var code = _default.url.indexOf("?") > -1 ? '&' : "?";
        _default.url += code + "_=" + Math.random();
    }
    xhr.open(_default.type, _default.url, _default.async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var text = xhr.responseText;
            if (_default.dataType === "json") {
                text = "JSON" in window ? JSON.parse(text) : eval("(" + text + ")");
            }
            _default.success && _default.success.call(xhr, text);

        }
    }
    xhr.send(_default.data);
}

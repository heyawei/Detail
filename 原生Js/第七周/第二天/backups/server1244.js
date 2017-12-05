var http = require('http'),
    url = require('url'),
    fs = require('fs');
var server1 = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;
    var conFile = '';
    var suffixMIME = '';
    if (pathname === '/原生Js.html') {
        conFile = fs.readFileSync('./原生Js.html', 'utf-8');
        suffixMIME = 'text/html';
    }
    if (pathname === '/css/原生Js.css') {
        conFile = fs.readFileSync('./css/原生Js.css', 'utf-8');
        suffixMIME = 'text/css';
    }
    //->不管客户端请求的是什么,我们返回的都是代码字符串,在IE下,如果JS或者CSS等以字符串返回,IE浏览器不能自己去识别解析(谷歌是可以的)=>所以需要我们在内容返回之前告诉IE浏览器我们返回的内容是什么类型的(设定返回内容的MIME类型/重新配置响应头信息)
    /*response.writeHead(200, {'content-type': 'text/html;charset=utf-8;'});*/
    response.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8;'});
    response.end(conFile);
});
server1.listen(80, function () {
    console.log('server is success,listening on 80 port!');
});











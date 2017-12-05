var http = require("http"),
    url = require("url"),
    fs = require("fs");
var server1 = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;




    var reg = /\.(HTML|CSS|JS|ICO)/i;
    if (reg.test(pathname)) {
        var suffix = reg.exec(pathname)[1].toUpperCase();
        var suffixMIME = suffix === 'HTML' ? 'text/html' : (suffix === 'CSS' ? 'text/css' : 'text/javascript');
        try {
            var conFile = fs.readFileSync('.' + pathname, 'utf-8');
            response.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8;'});
            response.end(conFile);
        } catch (e) {
            response.writeHead(404, {'content-type': 'text/plain;charset=utf-8;'});
            response.end('request file is not found!');
        }
        return;
    }
});
server1.listen(80, function () {
    console.log("server is success,listening on 80 port!");
});





//2、编写AJAX代码，获取服务器端的时间
var xhr = new XMLHttpRequest;
xhr.open("head", "/qianduan/temp.txt", true);//->只能是异步不能是同步 最好使用HEAD请求
xhr.onreadystatechange = function () {
    if(!/^2\d{2}$/.test(xhr.status)) return;
    if (xhr.readyState === 2) {
        var serverTime = xhr.getResponseHeader("Date");//->这样直接获取的时间是格林尼治时间(GMT) 北京时间是GMT+0800，并且数据格式是一个字符串
        console.log(new Date(serverTime));
    }
};
xhr.send(null);

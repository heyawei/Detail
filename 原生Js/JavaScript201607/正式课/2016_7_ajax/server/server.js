var PORT = 3000;

// 引入http模块,实现http服务器
var http = require('http');
// 引入url模块,把请求起始行第二部分 格式化为对象
var url = require('url');
// 文件处理, fileStream的缩写
var fs = require('fs');
var mine = require('./mime').types;
// 解析路径
var path = require('path');

// 创建http服务器,回调函数的两个参数 对象http的请求和响应
var server = http.createServer(function (request, response) {
    // 把请求的url格式化为对象
    var urlInfo = url.parse(request.url);
    // 获取请求路径
    var pathname = urlInfo.pathname;
    var realPath = path.join("../assets", pathname);
    // 获取后缀名
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    // 读取文件,判断文件是否存在
    fs.exists(realPath, function (exists) {
        if (!exists) {
            // 第一个参数写入http状态码
            // 第二个参数 http响应首部
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            // 写入http响应主体
            response.write("This request URL " + pathname + " was not found on this server.");
            // 发送http响应
            response.end();
        } else {
            // 如果存在 则读取该文件
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    if(/login\.html/.test(realPath)){
                        response.writeHead(302, {
                            'Location':'/getXHR.html'
                        });
                    }else{
                        response.writeHead(200, {
                            'Content-Type': contentType
                        });
                    }

                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
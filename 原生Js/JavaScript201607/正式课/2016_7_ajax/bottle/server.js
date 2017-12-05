/**
 * Created by 银鹏 on 2016/8/21.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
// ?a=1&b=2 => {a:1,b:2}

var bottleList = [];

var server = http.createServer(function (request, response) {
    var urlInfo = url.parse(request.url, true);
    var pathname = urlInfo.pathname;
    // 捡瓶子
    if (pathname === '/getBottle') {
        // 获取随机索引,索引的区间为[0,bottleList.length)
        var index = Math.floor(Math.random() * bottleList.length);
        try {
            // 把根据随机索引得到的内容 转换为json字符串
            var bottle = JSON.stringify(bottleList[index]);
            // 如果没有格式化失败 返回浏览器200
            response.writeHead(200);
            // 把获取到的漂流瓶返回给浏览器
            response.end(bottle);
        } catch (ex) {
            // 格式错误直接返回给浏览器500
            response.writeHead(500);
            response.end();
        }
    } else if (pathname === '/throwBottle') {
        // 扔瓶子
        var data = '';
        request.on('data', function (chunk) {
            data += chunk;
        });
        request.on('end', function () {
            // a=1&b=2  => {a:1,b:2}
            // data为浏览器发送过来的数据,格式为content=sadfasdf
            // 使用querystring.parse 将请求参数格式化为对象
            // content=sadfasdf => {'content':'sadfasdf'}
            data = querystring.parse(data);
            // 判断data的content是否有值
            if (data.content) {
                // 把data push到数组中
                bottleList.push(data);
            }
            // 成功返回给浏览器200
            response.writeHead(200);
            response.end();
        });
    } else if (pathname === '/sameOrigin') {
        // name=xxx&a=1&b=2; {name:'xxx',a:1,b:2}
        // 获取url的请求参数
        var name = urlInfo.query.name;
        name || (name = 'defaultValue');
        // name = aaa
        response.end(name + '("hello world")');
        // => aaa('hello world')返回给浏览器
        //response.end('var ' + name + '="hello world"');
    } else if (pathname === '/cors') {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': 'http://localhost:63342'
            //'Access-Control-Allow-Origin': '*'
        });
        response.end('"hello cors"');
    } else {
        pathname = pathname.slice(1);
        fs.exists(pathname, function (exists) {
            if (!exists) {
                response.writeHead(404);
                response.end('file not found on ' + pathname);
            } else {
                fs.readFile(pathname, function (err, data) {
                    if (err) {
                        response.writeHead(500);
                        response.end('server internal error');
                    } else {
                        response.writeHead(200);
                        response.end(data);
                    }
                });
            }
        })
    }
});

server.listen(12345, function () {
    console.log('server start over');
});
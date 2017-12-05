var http = require("http"), url = require("url"), fs = require("fs");
var server1 = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true),
        pathName = urlObj.pathname,
        query = urlObj.query;

    //->资源文件请求处理
    var reg = /\.(HTML|CSS|JS|ICO)/i;
    if (reg.test(pathName)) {
        var suffix = reg.exec(pathName)[1].toUpperCase();
        var suffixMIME = suffix === "HTML" ? "text/html" : (suffix === "CSS" ? 'text/css' : "text/javascript");

        try {
            var conFile = fs.readFileSync("." + pathName, 'utf-8');
            response.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8;'});
            response.end(conFile);
        } catch (e) {
            response.writeHead(404, {'content-type': 'text/plain;charset=utf-8;'});
            response.end("request file is not found!");
        }
        return;
    }
    var customData = fs.readFileSync("./json/custom.json", 'utf-8');
    customData.length === 0 ? customData = '[]' : null;
    customData = JSON.parse(customData);

    var result = {code: 1, msg: "失败", data: null};
    var customId = null;
    //->1 获取所有的客户信息。
    if (pathName === "/getList") {
        if (customData.length > 0) {
            result = {code: 0, msg: "成功", data: customData};
        }
        response.writeHead(200, {'content-type': 'application/json;charset:utf-8;'});
        response.end(JSON.stringify(result));
        return;
    }
    //-> 2 获取指定的客户信息
    if (pathName === "/getInfo") {
        customId = query['customId'];
        //console.log(customId);
        customData.forEach(function (item, index) {
            if (item['id'] == customId) {
                result = {code: 0, msg: "成功", data: item};
            }
        });
        response.writeHead(200, {'content-type': 'application/json;charset:utf-8;'});
        response.end(JSON.stringify(result));
        return;
    }

    if (pathName === "/addInfo") {
        var str = "";
        request.on('data', function (chunk) {
            str += chunk;
        });
        request.on('end', function () { // data正在一点点儿获取 chunk每次请求回来的一点儿
            var data = JSON.parse(str);
            data['id'] = query['customId'];
            customData.push(data);
            fs.writeFileSync("./json/custom.json", JSON.stringify(customData), "utf-8");
            result = {code: 0, msg: "成功"};
            response.writeHead(200, {'content-type': 'application/json;charset:utf-8;'});
            response.end(JSON.stringify(result));
            return;
        });
    }
    //-->修改信息
    if(pathName ==="/updateInfo"){
        var str = "";
        request.on('data', function (chunk) {
            str += chunk;
        });
        request.on('end', function () {
            var data = JSON.parse(str);
            var dataId = data['id']
            var i = dataId - 1;
            customData.splice(i, 1);
            customData.push(data);
            fs.writeFileSync("./json/custom.json", JSON.stringify(customData), "utf-8");
            result = {code: 0, msg: "成功"};
            response.writeHead(200, {'content-type': 'application/json;charset:utf-8;'});
            response.end(JSON.stringify(result));
            return;
        });
    }
    //-->删除信息
    if(pathName ==="/removeInfo"){
        var str = "", flag= false;
        customId = query['customId'];
        customData.forEach(function (item, index) {
            if (item['id'] == customId) {
                var i =parseInt(item['id'])-1;
                customData.splice(i,1);
                fs.writeFileSync("./json/custom.json",JSON.stringify(customData),'utf-8');
                result = {code: 0, msg: "成功", data: item};
            }
        });
        response.writeHead(200, {'content-type': 'application/json;charset:utf-8;'});
        response.end(JSON.stringify(result));
    }
});
server1.listen(80, function () {
    console.log("server is success ,listening on 80 port!");
});

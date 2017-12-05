var http = require('http'),
    url = require('url'),
    fs = require('fs');
var server1 = http.createServer(function (request,response){
    //把请求url中的字段转换成键值对的方式  一般常用pathname，query
    var urlObj = url.parse(request.url,true),
        pathname = urlObj.pathname,
        query = urlObj.query;

    var reg = /\.(js|html|css|ico)/i;
    if (reg.test(pathname)) {
        var suffix = reg.exec(pathname)[1].toLowerCase();
        var suffixMIME = suffix === 'html' ? 'text/html' : (suffix === 'css') ? 'text/css' : 'text/javascript';
        try{
            var conFile = fs.readFileSync('.'+pathname,'utf-8');
            response.writeHead(200,{'content-type':suffixMIME+';charset=utf-8'});
            response.end(conFile);
        } catch(e){
            response.writeHead(404,{'content-type':'text/plain;charset=utf-8'});
            response.end('404,not found')
        }
        return;
    }
    var jsonDataUrl = './json/userinfo.json';
    var userData = fs.readFileSync(jsonDataUrl,'utf-8');
    //如果jso文件里面是空的，那么用JSON.parse()转换会报错
    userData.length === 0 ? userData = [] : null;
    userData = JSON.parse(userData);
    var result = {
        code: 1,
        msg: '失败',
        data:null
    };
    var userId = null;
    //1)获取所有的客户信息 GET
    if (pathname === '/getList') {
        if (userData.length > 0) {
            result = {
                code:0,
                msg:'成功',
                data:userData
            };
        }
        response.writeHead(200,{'content-type':'text/plain;charset=utf-8'});
        response.end(JSON.stringify(result));
        return;
    }
    //2)获取指定用户的信息 GET
    if (pathname === '/getInfo') {
        userId = query.id;
        result ={
            code:0,
            msg:'用户不存在',
            data:null
        };
        userData.forEach(function (item,index){
            if (item.id === userId) {
                result ={
                    code: 0,
                    msg: '成功',
                    data:item
                }
            }
        });
        response.writeHead(200,{'content-type':'text/plain;charset=utf-8'});
        response.end(JSON.stringify(result));
        return;
    }
    //3)增加用户 POST
    if (pathname === '/addInfo') {
        var str ='';
        request.on('data',function (chunk){
            str += chunk;
        });
        request.on('end',function (){
            var data = JSON.parse(str);
            data.id = userData.length === 0 ? 1 :parseFloat(userData[userData.length-1]['id'])+1;
            userData.push(data);
            fs.writeFileSync(jsonDataUrl,JSON.stringify(userData),'utf-8');
            result = {
                code:0,
                msg:'成功'
            }
            response.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
            response.end(JSON.stringify(result));
        });
        return;
    }
    //4) 删除用户 GET
    if (pathname === '/removeInfo') {
        userId = query.id;
        for(var i = 0; i< userData.length; i++){
            if (userData[i]['id'] == userId) {
                userData.splice(i,1);
                break;
            }
        }
        fs.writeFileSync(jsonDataUrl,JSON.stringify(userData),'utf-8');
        result ={
            code:0,
            msg:'删除成功'
        };
        response.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
        response.end(JSON.stringify(result));
        //return;
    }
    //5) 修改用户 POST
    if (pathname=== '/updateInfo') {
        str = '';
        request.on('data',function (chunk){
            str += chunk;
        });
        request.on('end',function (){
            if (str.length === 0) {
                response.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
                result = {
                    code:1,
                    msg:'修改失败了'
                };
                response.end(JSON.stringify(result));
                return;
            }
            var flag = false;
            var data = JSON.parse(str);
            for(var i = 0,len = userData.length; i< len; i++){
                if (userData[i]['id'] == data['id']) {
                    userData[i] = data;
                    flag = true;
                    break;
                }
            }
            result.msg = '修改失败，需要修改的用户不存在';
            if (flag) {
                fs.writeFileSync(jsonDataUrl,JSON.stringify(userData),'utf-8');
                result = {
                    code:0,
                    msg:'修改成功'
                };
                response.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
                response.end(JSON.stringify(result));
            }

        });
        return;
    }
    response.writeHead(404, {'content-type': 'text/plain;charset=utf-8'});
    response.end('请求的API不存在');

});
server1.listen(80,function (){
    console.log('listen is success');
});
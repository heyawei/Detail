var http=require('http');
url=require('url');
fs=require('fs');
var server1=http.createServer(function(request,response){
    var urlObj=url.parse(request.url,true);
    pathname=urlObj.pathname;
        require=urlObj.require;
    var reg=/\.(HTML|CSS|JS|ICO)/i;
    if(reg.test(pathname)){
        
    }





})
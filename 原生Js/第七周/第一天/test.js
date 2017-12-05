var a = 12;
var b = 13;
var c = a;
a = b;
b = c;
console.log(a, b);

/*使用安装的LESS模块*/
var aa = require('less');
aa.render();
function createXHR (){
   var xhr=null;
    flag=false;
    ary=[
        function(){
            return new XMLHttpRequest;
        },
        function(){
            return new ActiveXObject('Microsoft.XMLHTTP')
        },
        function(){
            return new ActiveXObject('Msxm12.XMLHTTP')
        },
        function(){
            return new ActiveXObject('Msxm13.XMLHTTP')
        },
    ];
    for(var i=0;len=ary.length;i<len,i++){
        var curFn=ary[i];
        try {
            xhr=curFn();
            createXHR=curFn;
            flag=true;
            break;
        }catch (e){

        }
    }
    if(!flag){
        throw new Error('')
    }
return xhr;
}
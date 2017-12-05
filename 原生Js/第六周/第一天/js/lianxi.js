function EventEmitter(){};
EventEmitter.prototype.on=function(type,fn){
  if(!this['aEmitter'+type]){
      this['aEmitter'+type]=[];
  }
    var a=this['aEmitter'+type];
    for(var i=0;i< a.length;i++){
        if(a[i]==fn)return;
    }
    a.push(fn);
};
EventEmitter.prototype.fire=function(type,e){
    var a=this['aEmitter'+type];
    if(a && a.length){
        for(var i=0;i< a.length;i++){
            if(a[i]==='function'){
              a[i].call(this,e)
            }else {
                a[i].splice(i,1);
                i--;
            }
        }
    }
};
EventEmitter.prototype.off=function(type,fn){
    var a=this['aEmitter'+type];
    if(a && a.length){
        for(var i=0;i< a.length;i++){
            if(a[i]==fn){
                a[i]=null;
                break;
            }
        }
    }
}
function on(ele,type,fn){
    if(/^self/.test(type)){
        if(!ele[type]){
            ele[type]=[];
        }
        var a=ele[type];
        for(var i=0;i< a.length;i++){
            if(a[i]==fn)return;
        }
        a.push(fn)
    }else {
        if(ele.addEventListener){
            ele.addEventListener(type,fn,false);
        }else {
            if(!ele['aEvent'+type]){
                ele['aEvent'+type]=[];
                ele.attachEvent('on'+type,function(){
                    run.call(ele)
                })
            };
            var a=ele['aEvent'+type];
            for(var i=0;i< a.length;i++){
                if(a[i]==fn) return;
            }
            a.push(fn);
        }
    }
};
function run(){
    var e=e||window.event;
    var type= e.type;
    e.target= e.srcElement;
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
    e.preventDefault=function(){
        e.returnValue=false;
    };
    e.stopPropagation=function(){
        e.cancelable=true;
    };
    var a=this['aEvent'+type];
    if(a && a.length){
        for(var i=0;i< a.length;i++){
            if(typeof a[i]==='function'){
                a[i].call(this,e);
            }else {
                a[i].splice(i,1);
                i--;
            }
        }
    }
};
function off(ele,type,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(type,fn,false)
    }
    var a=ele['aEvent'+type];
    if(a && a.length){
        for(var i=0;i< a.length;i++){
          if(a[i]==fn){
              a[i]=null;
              break;
          }
        }
    }
};
function fire(type,e){

}
function processThis(type,e){

}
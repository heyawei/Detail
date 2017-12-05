/**
 * Created by xiao lei on 2016/9/8.
 */
/*var firstPage={//我这就是天猫的首页部分
    tab:function(){
        var aA=utils.getByClass('class名')
    },
    lazyImg:function(){

    },
    pubulic:function(){

    }
};*/
var ary=[1,2,1,2,3,4,2,3,3];
Array.prototype.rmSame=function(){
    for(var i=0; i<this.length; i++){
        var cur=this[i];
        for(var j=i+1; j<this.length; j++){
            if(cur==this[j]){
                this.splice(i,1);
                i--;
            }
        }
    }
    return this;
};
console.log(ary.rmSame().sort(function(a,b){return a-b})) ;

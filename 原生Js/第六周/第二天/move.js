var aLi=document.getElementsByTagName('li');
for(var i=aLi.length-1;i>=0;i--){
    var oLi=aLi[i];
oLi.style.left=(oLi.l=oLi.offsetLeft)+'px';

}
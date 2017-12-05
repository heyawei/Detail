
var tab=document.getElementById('tab');
var thead=tab.tHead;
var tCells=thead.rows[0].cells;
var tbody=tab.tBodies[0];
var tbodyRows=tbody.rows;
var utils={
    listToArray:function(likeArray){
        var ary=[];
        try{
            ary=[].prototype.slice.call(likeArray);
        }catch (e){
            for(var i=0;i<likeArray.length;i++){
                ary.push(likeArray[i])
            }
        }
        return ary;
    },
    jsonParse:function(jsonStr){
      return "JSON" in window?JSON.parse(jsonStr):eval("("+jsonStr+")")
    }
};

(function(){
   function getData(){
       var xhr=new XMLHttpRequest();
       xhr.open('get','data.txt',false);
       xhr.onreadystatechange=function(){
           if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
               window.data=utils.jsonParse(xhr.responseText)
           }
       }
      xhr.send(null)
   }
    getData();

    function bindData(){
        var frg=document.createDocumentFragment();
        for(var i=0;i<data.length;i++){
           var cur=data[i];
            var tr=document.createElement('tr');
            for(var  key in cur){
                var td=document.createElement('td');
                if(key==='sex'){
                    td.innerHTML=cur['sex']===1?'男':'女';
                }
                td.innerHTML=cur[key];
                tr.appendChild(td);
            }
            frg.appendChild(tr);
        }
        tbody.appendChild(frg);
        frg=null;
    }
    bindData();

    function change(){
        for(var i=0;i<tbodyRows.length;i++){
            tbodyRows[i].className=i%2?'bg':null;
        }
    }
    change();

    function sort(n){
        for(var i=0;i<tCells.length;i++){
            tCells[i].flag=i==n?tCells[i].flag*-1:-1;
        }
        var ary=utils.listToArray(tbodyRows);
        ary.sort(function(a,b){
            a= a.cells[n].innerHTML;
            b= b.cells[n].innerHTML;
            if(isNaN(a)||isNaN(b)){
               return a.localeCompare(b)*tCells[n].flag;
            }
            return (a-b)*tCells[n].flag;
        });
        var frg=document.createDocumentFragment();
        for(var i=0;i<ary.length;i++){
           frg.appendChild(ary[i]);
        }
        tbody.appendChild(frg);
        change();
    };
    for(var i=0;i<tCells.length;i++){
        if(tCells[i].className==='cursor'){
            tCells[i].index=i;
            tCells[i].f=-1;
            tCells[i].onclick=function(){
                sort(this.index)
            }
        }
    }
})();
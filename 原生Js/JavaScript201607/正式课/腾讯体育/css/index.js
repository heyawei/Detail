/**
 * Created by lz on 2016/8/31.
 */
//计算每一个区域的高度；
~function(){
    //JQ：innerWidth/innerHeight/outerWidth/outerHeight
    function changeHeight(){
        var winH=$(window).innerHeight(),
            $conBody=$('y.conBody');
        $conBody.css('height',winH - 64 - 20 - 20);
    }
    $(window).on('resize',changeHeight);
    $menu.css('height',h - 2)
}();
//menu render
var menuRender=(function(){
    //准备需要绑定的数据：一般项目中是从服务器端获取的，
    var  ary=[{'title':'NBA','HASH':'nba','columnId':'100000'},
        {'title':'中超','HASH':'cs1','columnId':'208'},
        {'title':'亚冠','HASH':'anc','columnId':'605'},
        {'title':'欧冠','HASH':'uc1','columnId':'5'},
        {'title':'英超','HASH':'p1','columnId':'8'},
        {'title':'西甲','HASH':'laliga','columnId':'23'},
        {'title':'意甲','HASH':'seriea','columnId':'21'},
        {'title':'德甲','HASH':'bundesliga','columnId':'22'},
        {'title':'欧洲世预赛','HASH':'wcp-eu','columnId':'336'},
        {'title':'亚洲世预赛','HASH':'wcp-as','columnId':'341'},
     {'title':'南美世预赛','HASH':'wcp-sa','columnId':'342'},
     {'title':'法甲','HASH':'l1','columnId':'24'},
        {'title':'CBA','HASH':'cba','columnId':'100008'},
        {'title':'综合','HASH':'others','columnId':'100002'},
        {'title':'NFL','HASH':'nf1','columnId':'100005'}
    ];
    function bandEvent(){
      //把页面中的模板嵌入到的HTML字符串获取到
        var menuTemplate=$('#menuTemplate').html();
        var result=ejs.render(menuTemplate,{menuData:})
    }
  return  {} ;
})();

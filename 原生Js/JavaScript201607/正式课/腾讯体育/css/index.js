/**
 * Created by lz on 2016/8/31.
 */
//����ÿһ������ĸ߶ȣ�
~function(){
    //JQ��innerWidth/innerHeight/outerWidth/outerHeight
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
    //׼����Ҫ�󶨵����ݣ�һ����Ŀ���Ǵӷ������˻�ȡ�ģ�
    var  ary=[{'title':'NBA','HASH':'nba','columnId':'100000'},
        {'title':'�г�','HASH':'cs1','columnId':'208'},
        {'title':'�ǹ�','HASH':'anc','columnId':'605'},
        {'title':'ŷ��','HASH':'uc1','columnId':'5'},
        {'title':'Ӣ��','HASH':'p1','columnId':'8'},
        {'title':'����','HASH':'laliga','columnId':'23'},
        {'title':'���','HASH':'seriea','columnId':'21'},
        {'title':'�¼�','HASH':'bundesliga','columnId':'22'},
        {'title':'ŷ����Ԥ��','HASH':'wcp-eu','columnId':'336'},
        {'title':'������Ԥ��','HASH':'wcp-as','columnId':'341'},
     {'title':'������Ԥ��','HASH':'wcp-sa','columnId':'342'},
     {'title':'����','HASH':'l1','columnId':'24'},
        {'title':'CBA','HASH':'cba','columnId':'100008'},
        {'title':'�ۺ�','HASH':'others','columnId':'100002'},
        {'title':'NFL','HASH':'nf1','columnId':'100005'}
    ];
    function bandEvent(){
      //��ҳ���е�ģ��Ƕ�뵽��HTML�ַ�����ȡ��
        var menuTemplate=$('#menuTemplate').html();
        var result=ejs.render(menuTemplate,{menuData:})
    }
  return  {} ;
})();

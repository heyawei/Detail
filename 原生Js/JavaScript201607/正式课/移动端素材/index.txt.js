/**
 * Created by lz on 2016/9/3.
 */
var bannerRender=(function(){

    var $banner=$('.banner');
    $wrapper=$banner.children('.wrapper');
    $slideList=$wrapper.children('.slide');
    $imgList=$wrapper.find('img');
    var step=1;
    function lazyImg(){
        var $cur=$slideList.eq(step);
        var $tar=$cur.add($cur.prev()).add($cur.next());
        $tar.each(function(index,item){
            var $img=$(item).children('img');
            if($img.attr('isLoad')==='true'){
                return ;
            }
            var oImg=new Image;
            oImg.src=$img.attr('data-src');
            oImg.onload=function(){
                $img.attr('src',this.src).css('display','block');
                oImg=null;
            }
        })
    }
    return {
        init:function(){
            minL=-($slideList.length-1)*winW;
           $wrapper.css('width',$slideList.length*winW) ;
            $slideList.css('width',winW);
            lazyImg();
        }
    }
});
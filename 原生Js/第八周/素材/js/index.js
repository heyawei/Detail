/**
 * Created by lz on 2016/12/24.
 */

var desw = 640;
var winW = document.documentElement.clientWidth;
document.documentElement.style.fontSize = winW / desw * 100 + 'px';
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop:true,
    onTransitionEnd: function (swiper) {
        var slides = swiper.slides;
        var curIndex = swiper.activeIndex;
        var lastIndexSlide = slides.length - 1;
        var trueIndexSlide = slides.length - 2;
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            if (curIndex == index) {
                switch (index) {
                    case 0:
                        item.id = 'page' + trueIndexSlide;
                        break;
                    case lastIndexSlide:
                        item.id = 'page1';
                        break;
                    default:
                        item.id = 'page' + curIndex
                }
            }
        })
    }
});
var music = document.querySelector('.music');
var beyond = document.querySelector('#beyond');
window.setTimeout(function () {
    beyond.play();
    beyond.addEventListener('canplay',function(){
        music.className='music musicCur'
    })

}, 1000);
music.addEventListener('click',function(){
    if(beyond.paused){
        beyond.play();
        music.className='music musicCur'
    }else {
        beyond.pause();
        music.className='music';
        music.style.opacity=1;
    }
},false)
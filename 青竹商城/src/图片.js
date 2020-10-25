function changeImg(a) {//a代表要切换第几张图片
    $('.outer0 .imgList li').eq(a).fadeIn  (500).siblings().fadeOut(500);
    //焦点跟随
    $('.outer0 .focusList span').eq(a).addClass('active').siblings().removeClass('active');
}
var step = 0;
var timer;
//自动切换
function autoPlay() {
    timer =  setInterval(function () {
        step++;
        if(step===3){
            step = 0;
        }
        changeImg(step);
    },2000);
}
autoPlay();
//点击焦点切换对应索引的哪一张
$('.outer0 .focusList span').click(function () {
    step = $(this).index();
    changeImg(step);
});

//数量加
$(".outer10.inter2221").on("click",".add",function () {
    var count = (this).child(".count") + 1;
    // var count = parseInt($(this).siblings(".count").html()) + 1;
    console.log(count);
    // $(this).siblings(".count").html(count);
    // total(this);
});
//数量减
$(".outer10.inter222").on("click",".sub",function () {
    var count = parseInt($(this).siblings(".count").html()) - 1;
    $(this).siblings(".count").html(count);
    total(this);
});

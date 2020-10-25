//全选
$(".checkAll").click(function () {
    if($(this).prop("checked")){
        $(":checkbox").prop("checked",true);
    }
    else{
        $(":checkbox").prop("checked",false);
    }
    lTotal();
});
//单选
$(".check").click(function () {
    console.log($(".outer9 ul :checked").length);
    console.log($(".outer9 ul li").length);
    if($(".outer9 ul :checked").length === $(".outer9 ul li").length){
        $(".checkAll").prop("checked",true);
    }
    else{
        $(".checkAll").prop("checked",false);
    }
    lTotal();
});
//数量加
$("ul").on("click",".add",function () {
    var count = parseInt($(this).siblings(".count").html()) + 1;
    console.log(count);
    $(this).siblings(".count").html(count);
    total(this);
    lTotal();
});
//数量减
$("ul").on("click",".sub",function () {
    var count = parseInt($(this).siblings(".count").html()) - 1;
    $(this).siblings(".count").html(count);
    total(this);
    lTotal();
});
//小计
function total(ele) {
    var price = parseInt($(ele).siblings(".price").html());
    var count = parseInt($(ele).siblings(".count").html());
    var total = price * count;
    $(ele).siblings(".total").html(total);
}
//总计
function lTotal() {
    var totalCount = 0;
    var totalPrice = 0;
    $("ul :checked").each(function () {
        totalCount += parseInt($(this).siblings(".count").html());
        totalPrice += parseInt($(this).siblings(".total").html());
    });
    $('.totalCount').html(totalCount);
    $('.totalPrice').html(totalPrice);
}
//删除
$(".outer9 .del").click(function () {
    $(this).parents("li").remove();
    if( $(".outer9 ul li").length === 0){
        $(" .outer9 .inter3").hide();
        $(" .outer9 .inter22").hide();
        $(".outer9 .checkAll").prop('checked',false);
        $(" .outer9 .inter23").show();
    }
});
$(".outer9 .ss1").click(function () {
    ($("ul :checked")).parents("li").remove();
    if( $(".outer9 ul li").length === 0){
        $(" .outer9 .inter3").hide();
        $(" .outer9 .inter22").hide();
        $(" .outer9 .inter23").show();
    }
});


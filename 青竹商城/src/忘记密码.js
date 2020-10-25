var form = document.getElementsByTagName("form")[0];
var username = form.username;
var s1 = document.getElementById("s1");
var submit = form.submit;
var input = form.getElementsByTagName("input");
username.onblur = function () {
    var reg = /^1[345789]\d{9}$/;
    var reg0 = /^\w{5,20}@\w{2,6}\.com(.cn)?$/;
    var reg1 = reg.test(this);
    var reg2 = reg0.test(this);
    if(reg1 || reg2){
        this.setAttribute("flag",1);
    }
    else{
        this.setAttribute("flag",0);
    }
    fn2(s1,this);
};
username.onfocus = function () {
    fn1(s1);

};
function fn1(span) {
    span.style.transform = "translate(0,-20px)";
    span.style.fontSize = "10px";
    span.style.color = "#7390fe";
    span.style.padding = "0 2px";
}
function fn2(span,that) {
    if(that.value === ''){
        span.style.transform = "translate(0,0)";
        span.style.fontSize = "16px";
        span.style.color = "#b0b0b0";
    }
}
submit.onclick = function () {
    var sum = 0;
    for (var i = 0; i < input.length-1;i++){
        sum += Number(input[i].getAttribute('flag'));
    }
    // if(sum !== 1){
    //     return false;
    // }
    if(sum !== 1){
               console.log("false");
        return false;
    }
    else{
     console.log("true");
     }
};
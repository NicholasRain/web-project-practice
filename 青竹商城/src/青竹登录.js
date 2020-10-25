var form = document.getElementsByTagName("form")[0];
var username = form.username;
var password = form.password;
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var submit = document.getElementById("submit");
var input = form.getElementsByTagName("input");
username.onblur = function () {
    fn(this);
    fn2(s1,this);
};
password.onblur = function () {
    fn(this);
    fn2(s2,this);
};
function fn(receive) {
    var str = receive.value;
    var reg;
    switch (receive.name) {
        case "username":
            // reg = /^[a-zA-Z\u4100-\u9fa5\w]{4,16}$/;
            reg = /^1[345789]\d{9}$/;
            break;
        case "password":
            reg = /^\w{6,40}$/;
            break;
    }
    var reg1 = reg.test(str);
    if(reg1){
        receive.setAttribute("flag",1);
        // receive.style.border = "2px solid green";
    }
    else{
        receive.setAttribute("flag",0);
        // receive.style.border = "2px solid red";
    }
}
submit.onclick = function () {
    var sum = 0;
    for (var i = 0; i < input.length-1;i++){
        sum += Number(input[i].getAttribute('flag'));
    }
    if(sum !== 2){
        return false;
    }
};
function fn1(span) {
    span.style.transform = "translate(0,-20px)";
    span.style.fontSize = "10px";
    span.style.color = "#7390fe";
    span.style.padding = "0 2px";
}
username.onfocus = function () {
    fn1(s1);
}
password.onfocus = function () {
    fn1(s2);
}
function fn2(span,that) {
    if(that.value === ''){
        span.style.transform = "translate(0,0px)";
        span.style.fontSize = "16px";
        span.style.color = "#b0b0b0";
    }
}
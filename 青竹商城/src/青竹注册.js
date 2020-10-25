var form = document.getElementsByTagName("form")[0];
var username = form.username;
var div1 = form.getElementsByClassName("div1")[0];
var code = form.code;
var password = form.password;
var repassword = form.repassword;
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var sp1 = document.getElementById("sp1");
var submit = document.getElementById("submit");
var input = form.getElementsByTagName("input");
username.onblur = function () {
    fn(this);
    fn2(s1,this);
};
code.onblur = function () {
    fn(this);
    fn2(sp1,this);
};
password.onblur = function () {
    fn(this);
    fn2(s2,this);
};
repassword.onblur = function () {
    fn2(s3,this);
    var str = this.value;
    if(password.value === this.value){
        this.setAttribute("flag",1);
        // this.style.border = "2px solid green";
    }
    else{
        this.setAttribute("flag",0);
        // this.style.border = "2px solid red";
    }

};

function fn(receive) {
    var str = receive.value;
    var reg;
    switch (receive.name) {
        case "username":
            reg = /^[a-zA-Z\w]{4,16}$/;
            break;
        case "code":
            reg = /^[a-zA-Z\d]{4,6}$/;
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
    if(sum !== 3 || sum !== 4){
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
};
password.onfocus = function () {
    fn1(s2);
};
repassword.onfocus = function () {
    fn1(s3);
};
code.onfocus = function () {
    fn1(sp1);
};
function fn2(span,that) {
    if(that.value === ''){
        span.style.transform = "translate(0,0)";
        span.style.fontSize = "16px";
        span.style.color = "#b0b0b0";
    }
}

username.oninput = function () {
    var reg = /^1[345789]\d{9}$/;
    console.log(reg.test(this.value));
    if(reg.test(this.value)){
        div1.style.display = "block";
        // console.log('a');
    }
    else{
        div1.style.display = "none";
        // console.log('b');
    }
};
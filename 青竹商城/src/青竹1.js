var outer1 = document.getElementsByClassName("outer1")[0];
var left = outer1.getElementsByClassName("zuo")[0];
var right = outer1.getElementsByClassName("you")[0];
var ul = outer1.getElementsByTagName("ul")[0];
console.log(ul);
// var str = 0;
var count = 0;
right.onclick = function () {
    count ++;
    if(count == 4){
        count = 0;
    }
    ul.style.left = -285 * count + "px";
}
left.onclick = function () {
    // str += -285;
    // ul.style.transform = "translate(" +str+ "px)";
    count --;
    if(count == -1){
        count = 3;
    }
    ul.style.left = -285 * count + "px";
}


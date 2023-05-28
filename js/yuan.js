var wrap = document.getElementById("wrap");
var pic = document.getElementById("wrap").getElementsByClassName("slide");
var list = document.getElementById("list").getElementsByTagName("li");
var index = 1;
var index1 = 0;
var timer = null;
var timer1 = null;
pic[0].style.opacity = 1;
timer = setInterval(autoplay, 4000);

function autoplay() {
    if (index >= pic.length) index = 0;
    index1 = index;
    changePic(index);
    index++;
}
for (var i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        clearInterval(timer);
        index = parseInt(this.innerText) - 1;
        changePic(index);
        index++;
        timer = setInterval(autoplay, 3000);
    };
};

function changePic(curIndex) {
    //清空
    for (var i = 0; i < pic.length; i++) {
        pic[i].style.opacity = 0;
        list[i].className = "";
    }
    changeOpacity(curIndex);
    list[curIndex].className = "on";
}

function changeOpacity(curIndex) {
    var x = parseFloat(pic[curIndex].style.opacity);
    pic[curIndex].style.opacity = 0.5+ x;
    if (parseFloat(pic[curIndex].style.opacity) <= 1) {
        timer1 = setTimeout(function () {
            changeOpacity(curIndex);
        }, 1);
    }
    else
        clearTimeout(timer1);
}


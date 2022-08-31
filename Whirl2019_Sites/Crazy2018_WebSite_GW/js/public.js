function Bomb(msg, time) { //提示弹出层
    //封装的弹框方法，
    //msg为必传参数，调用方法如下Bomb(msg,time)或者Bomb(msg)
    //time可传，可不传，如果需要自己控制显示时间那么需要传，如果不传则默认为1000毫秒；
    if (time == undefined || time == "" || time == null) {
        time = 1500
    }
    var str = "<div class='PromptBox'>" + msg + "</div>"
    $("body").append(str)
    setTimeout(function () {
        $(".PromptBox").remove();
    }, time)
}

//提示弹出层2
function Bomb2(msg, time) { 
    //封装的弹框方法，
    //msg为必传参数，调用方法如下Bomb(msg,time)或者Bomb(msg)
    //time可传，可不传，如果需要自己控制显示时间那么需要传，如果不传则默认为1000毫秒；
    if (time == undefined || time == "" || time == null) {
        time = 1500
    }
    var str = "<div class='PromptBox2'>" + msg + "</div>"
    $("body").append(str)
    setTimeout(function () {
        $(".PromptBox2").remove();
    }, time)
}
function Bomb3(msg, time) {
    //封装的弹框方法，
    //msg为必传参数，调用方法如下Bomb(msg,time)或者Bomb(msg)
    //time可传，可不传，如果需要自己控制显示时间那么需要传，如果不传则默认为1000毫秒；
    if (time == undefined || time == "" || time == null) {
        time = 1500
    }
    var str = "<div class='PromptBox3'>" + msg + "</div>"
    $("body").append(str)
    setTimeout(function () {
        $(".PromptBox3").remove();
    }, time)
}
//加载动画方法一
function load() { //加载动画开始调用
    var LoadStr = "<div class='LoadBox'>" +
            "<div class='spinner'>" +
                "<div class='rect1'></div>" +
                "<div class='rect2'></div>" +
                "<div class='rect3'></div>" +
                "<div class='rect4'></div>" +
                "<div class='rect5'></div>" +
            "</div>" +
        "</div>"
    $("body").append(LoadStr)
}

function loadEnd() {//加载动画结束调用
    $(".LoadBox").remove();
}

function getUrlParams(par) {
    if (par == '')
        return null;
    var reg = new RegExp("(^|&)" + par + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return r[2];

    return null;
}

//加载动画方法二
function load2() {//加载动画开始调用
    var LoadStr = "<div class='LoadBox1'>" +
            "<div class='spinner1'>" +
              "<div class='bounce1'></div>" +
              "<div class='bounce2'></div>" +
              "<div class='bounce3'></div>" +
            "</div>" +
        "</div>"
    $("body").append(LoadStr)
}

function loadEnd2() {//加载动画结束调用
    $(".LoadBox1").remove();
}

//图片查看器
function PictureView(url) {
    var ViewStr = "<div class='PictureViewBox'>" +
                "<div class='imgBox'>" +
                    "<img src='" + url + "' class=''/>"
    "</div>"
    "</div>"
    $("body").append(ViewStr)
}
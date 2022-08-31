window.onload=function(){
    var imgArr = [
        { "path": "image/Downimg/lb1.jpg" },
        { "path": "image/Downimg/lb2.jpg" },
        { "path": "image/Downimg/lb3.jpg" },
        { "path": "image/Downimg/lb4.jpg" },
        { "path": "image/Downimg/lb5.jpg" },
        { "path": "image/Downimg/lb6.jpg" },
        { "path": "image/Downimg/lb7.jpg" }
    ];
    var size=[
        { "top": 80, "left": 0, "width": 200, "height": 420,"zIndex":1,"opacity":0},
        {"top":80,"left":0,"width":200,"height":420,"zIndex":2,"opacity":40},
        {"top":50,"left":150,"width":300,"height":540,"zIndex":3,"opacity":70},
        {"top":0,"left":300,"width":335,"height":580,"zIndex":4,"opacity":100},
        { "top": 50, "left": 450, "width": 300, "height": 540,"zIndex":3,"opacity":70},
        { "top": 80, "left": 700, "width": 200, "height": 420,"zIndex":2,"opacity":40},
        { "top": 80, "left": 700, "width": 200, "height": 420,"zIndex":1,"opacity":0}
    ];
    var imgSum=imgArr.length;
    var wrap=document.getElementById('wrap');
    var cont=wrap.firstElementChild || wrap.firstChild;
    var btnArr=wrap.getElementsByTagName('a');
    var falg=true;
    var speed=7000;
    wrap.onmouseover=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='block';
        }
        clearInterval(wrap.timer);
    }
    wrap.onmouseout=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='none';
        }
        wrap.timer=setInterval(function(){
             move(true);
         },speed);
    }
    for (var i=0;i<imgSum;i++) {
        var lis=document.createElement('li');             
         lis.style.cssText='top:'+size[i].top+'px;'+'left:'+size[i].left+'px;'+'width:'+size[i].width+'px;'+'z-index:'+size[i].zIndex+';'+'height:'
         +size[i].height+'px;'+'opacity:'+size[i].opacity+';';
        lis.style.backgroundImage='url('+imgArr[i].path+')';
        cont.appendChild(lis);
    }
    var liArr=cont.children;
    move();
    wrap.timer=setInterval(function(){
        move(true);
    },speed);
    btnArr[1].onclick=function(){
        if (falg) {
            move(true);
        }
    }
    btnArr[0].onclick=function(){
        if (falg) {
            move(false);
        }
    }
    function move(bool){
        if(bool!=undefined){
            if(bool){
                size.unshift(size.pop());
            }else {
                size.push(size.shift());
            }
        }
        for (var i=0;i<liArr.length;i++) {
            animate(liArr[i],size[i],function(){
                falg=true;
            });
        }
    }
}
(function(){
    //鼠标移入个人网银登录背景图片颜色变化
    var as=document.querySelectorAll(".login>a");
    for(var i=0;i<as.length;i++){
        as[i].onmousemove=function(){
            this.style.background="#F4944A";
        };
        as[i].onmouseout=function(){
            this.style.background="#B9B9B9";
        }
    }
})();

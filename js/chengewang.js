(function(){
    //顶部导航条鼠标移入移出效果
    function over(selector){
        var li=document.querySelector(selector);
        var a=li.getElementsByTagName("a")[0];
        li.onmouseover=function(){
            a.className="hover";
            this.lastElementChild.style.display="block";
        };
        li.onmouseout=function(){
            a.className="";
            this.lastElementChild.style.display="";
        }
    }
    over(".register");
    over(".allbusness");
    over(".more");

    //广告轮播效果
    var wrap=document.getElementById('wrap'),
        pic=document.getElementById('pic'),
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;
    // 定义并调用自动播放函数
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer=setInterval(autoplay,3000);
    // 定义图片切换函数
    function autoplay(){
        index++;
        if(index>=list.length){
            index=0;
        }
        changeoptions(index);
    }
    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover=function(){
        clearInterval(timer);
    };
    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout=function(){
        timer=setInterval(autoplay,3000);
    };
    // 遍历所有数字导航实现点击切换至对应的图片
    for(var i=0;i<list.length;i++){
        list[i].id=i;
        list[i].onclick=function(){
            clearInterval(timer);
            changeoptions(this.id);
        }
    }
    function changeoptions(curindex){
        for(var j=0;j<list.length;j++){
            list[j].className='';
            pic.style.top=0;
        }
        list[curindex].className='active';
        pic.style.top=-curindex*380+'px';
        index=curindex;
    }

    //广告轮播中全部业务鼠标移入效果
    var lis=document.querySelectorAll("#allbusiness>ul>li.active");
    var ul=document.getElementById("#allbusiness>ul");
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover= function () {
            this.firstElementChild.nextElementSibling.style.backgroundPosition="0 0";
            this.lastElementChild.style.display="block";
        };
        lis[i].onmouseout= function () {
            this.firstElementChild.nextElementSibling.style.backgroundPosition="0 -11px";
            this.lastElementChild.style.display="none";
        }
    }
    var p=document.querySelector("#allbusiness>p");
    var uls=document.querySelectorAll("#allbusiness>ul>li.active ul");
    p.onmouseover= function () {
        for(var i=0;i<uls.length;i++){
            uls[i].style.display="block";
        }
    };
    //p.onmouseout= function () {
    //    for(var i=0;i<uls.length;i++){
    //        uls[i].style.display="none";
    //    }
    //}

    //橙e发货宝鼠标移入图片移动效果
    var imgs=document.querySelectorAll("#e-product img");
    for(var i=0;i<imgs.length;i++){
        imgs[i].onmouseover= function () {
            this.className="moveLeft";
        };
        imgs[i].onmouseout= function () {
            this.className="moveRight";
        }
    }

    //发货宝表单
    function myClick(selector) {
        var input=document.querySelector(selector);
        var div=document.querySelector(selector+"+.city");
        var as=document.querySelectorAll(selector+"+.city .areaTitle a:not(.but)");
        var uls=document.querySelectorAll(selector+"+.city .container ul");
        input.onclick= function () {
            if(div.style.display=="block"){
                div.style.display="none";
            }else{
                div.style.display="block";
            }

        };
        for(var i=0;i<as.length;i++){
            as[i].onclick= function (e) {
                e.preventDefault();
                var tar=e.target;
                var li=tar.parentNode;
                document.querySelector(selector+"+.city .areaTitle .active").className="";
                li.className="active";
                var className=tar.className;
                for(var i=0;i<uls.length;i++){
                    var uli=uls[i];
                    if(uli==document.querySelector(selector+"+.city .container ."+className)){
                        uli.style.display="block";
                    }else{
                        uli.style.display="none";
                    }
                }
            }
        }
    }
    myClick(".startAddr");
    myClick(".endAddr");
    function move(selector){
        var input=document.querySelector(selector);
        input.onfocus= function () {
            this.nextElementSibling.className="moveRight";
            this.nextElementSibling.style.color="#222";
            this.nextElementSibling.style.fontStyle='normal';
        };
        input.onblur= function () {
            this.nextElementSibling.className="moveLeft";
            this.nextElementSibling.style.color="#bbb";
            this.nextElementSibling.style.fontStyle='italic';
        }
    }
    move(".weight");
    move(".volume");

    //橙e财富轮播效果
    var wraps = document.querySelector(".wraps"),
     next = document.querySelector(".moveRight"),
     prev = document.querySelector(".moveLeft"),
     div = document.querySelector(".cflist"),
     moved = 0,
     liWidth=273,
     timers = null;
    next.onclick = function () {
        next_pic();
    };
    prev.onclick = function () {
        prev_pic();
    };
    function next_pic () {
        moved++;
        if(moved > 0){
            moved = 0;
        }
       wraps.style.left=moved*liWidth+"px";
    }
    function prev_pic () {
        moved--;
        if(moved < 0){
            moved = 1;
        }
        wraps.style.left=-moved*liWidth+"px";
    }
    function autoPlay () {
        timers = setInterval(function () {
            prev_pic();
        },3000);
    }
    autoPlay();
    div.onmouseenter = function () {
        clearInterval(timers);
    };
    div.onmouseleave = function () {
        autoPlay();
    };

    //联盟合作鼠标移入图片移动效果
    var dls=document.querySelectorAll("#cooperation dl");
    for(var i=0;i<dls.length;i++){
        dls[i].onmouseover= function () {
            var img=this.firstElementChild.firstElementChild.firstElementChild;
            var a=this.lastElementChild.firstElementChild;
            img.className="moveLeft";
            a.style.color="#FF5600";
        };
        dls[i].onmouseout= function () {
            var img=this.firstElementChild.firstElementChild.firstElementChild;
            var a=this.lastElementChild.firstElementChild;
            img.className="moveRight";
            a.style.color="#222";
        }
    }
    //侧边栏浮动广告条鼠标移入效果
    var rLis=document.querySelectorAll("#floatRight li ");
    for(var i=0;i<rLis.length;i++){
        rLis[i].onmouseover= function () {
            this.className="act";
            this.lastElementChild.style.display="block";

        };
        rLis[i].onmouseout= function () {
            this.className="";
            this.lastElementChild.style.display="none";
        }
    }
    function hover(selector){
        var ps=document.querySelectorAll(selector+" .set p");
        var divs=document.querySelectorAll(selector+" .erweima div");
        var index=0;
        for(var i=0;i<ps.length;i++){
            ps[i].onmouseover= function () {
                //this.index=i;
                document.querySelector(selector+" .set .act").className="";
                this.className="act";
                for(var i=0;i<divs.length;i++){
                    if(divs[i].index==index){
                        divs[i].className="act";
                        document.querySelector(selector+" .erweima .act").className="";
                    }
                }
            };
            ps[i].onmouseout=function(){
                this.className="act";

            }
        }
    }
    hover(".weixin");
    hover(".app");
})();

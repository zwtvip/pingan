(function(){
    //顶部导航条鼠标移入移出效果
    var lis=document.querySelectorAll("#top-main li.active");
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            this.lastElementChild.style.display="block";
            var a=this.getElementsByTagName("a")[0];
            a.className="box";
        };
        lis[i].onmouseout=function(){
            this.lastElementChild.style.display="";
            var a=this.getElementsByTagName("a")[0];
            a.className="";
        }
    }
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
        pic.style.top=-curindex*330+'px';
        index=curindex;
    }
    //更多登录服务
    var a=document.querySelector("#more-register>a");
    a.onclick=function(){
        if(this.lastElementChild.innerHTML=="登录更多服务"){
        this.nextElementSibling.style.display="block";
            this.lastElementChild.innerHTML="收起";

        }else if(this.lastElementChild.innerHTML=="收起"){
            this.nextElementSibling.style.display="";
            this.lastElementChild.innerHTML="登录更多服务";
        }
    };
    //左侧信用卡广告轮播效果
    var slider=document.getElementById('slider'),
        cards=document.getElementById('cards'),
        cardList=document.getElementById('cardList').getElementsByTagName('li'),
        moved=0,
        timers=null;
    // 定义并调用自动播放函数
    if(timers){
        clearInterval(timers);
        timers=null;
    }
    timers=setInterval(play,3000);
    // 定义图片切换函数
    function play(){
        moved++;
        if(moved>=cardList.length){
            moved=0;
        }
        changeindex(moved);
    }
    // 鼠标划过整个容器时停止自动播放
    slider.onmouseover=function(){
        clearInterval(timers);
    };
    // 鼠标离开整个容器时继续播放至下一张
    slider.onmouseout=function(){
        timers=setInterval(play,3000);
    };
    // 遍历所有数字导航实现点击切换至对应的图片
    for(var i=0;i<cardList.length;i++){
        cardList[i].id=i;
        cardList[i].onclick=function(){
            clearInterval(timers);
            changeindex(this.id);
        }
    }
    function changeindex(curindex){
        for(var j=0;j<cardList.length;j++){
            cardList[j].className='';
            cards.style.left=0;
        }
        cardList[curindex].className='current';
        cards.style.left=-curindex*176+'px';
        moved=curindex;
    }

    //优惠快讯、特惠商户 城市切换效果
    function show(selector){
        var ul=document.querySelector(selector+" .sel ul");
        var li=document.querySelector(selector+" .sel li:first-child");
        var lis=document.querySelectorAll(selector+" .sel li:not(:first-child)");
        var uls=document.querySelectorAll(selector+" .title ul");
        ul.onclick= function () {
            if(this.className==""){
                this.className="hover";
            }else{
                ul.className="";
            }
            for(var i=0;i<lis.length;i++){
                var lisi=lis[i];
                var disp=lisi.style.display;
                lisi.style.display=disp=="block"?"none":"block";
                lisi.onclick= function () {
                    var text=li.firstElementChild.innerHTML;
                    li.firstElementChild.innerHTML=this.innerHTML;
                    this.innerHTML=text;
                    var className=li.className;
                    li.className=this.className;
                    this.className=className;
                    for(var i=0;i<uls.length;i++){
                        var uli = uls[i];
                        var name=li.className;
                        if(uli === document.querySelector(selector+" ."+name+"_content")){
                            uli.style.display = "block";
                        } else {
                            uli.style.display = "none";
                        }
                    }
                }
            }
        }
    }
    show(".favorable");
    show(".preference");

    //右侧理财工具等切换效果
    function over(selector){
        var lis=document.querySelectorAll(selector+">li");
        //遍历li
        for(var i=0;i<lis.length;i++){
            lis[i].onmouseover=function(){
                document.querySelector(selector+" .active").className="";
                this.className="active";
            };
            lis[i].onmouseout=function(){
                this.className="active ";
            }
        }
        //查找触发事件元素
        var as=document.querySelectorAll(selector+">li>a");
        //遍历所有a元素
        for(var i=0;i<as.length;i++){
            //   绑定事件触发函数
            as[i].onmouseover=function(){
                //    遍历所有container下所有ul
                var uls=document.querySelectorAll(selector+"+.container>ul");
                for(var i=0;i<uls.length;i++){
                    uls[i].style.display="none";
                }
                var i=this.href.lastIndexOf("#");
                var id=this.href.slice(i);
                document.querySelector(id).style.display="block";
            }

        }
    }
    over(".fenQi");
    over(".gongGao");

})();

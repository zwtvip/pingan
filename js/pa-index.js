//顶部导航条鼠标移入移出效果
(function(){
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

})();
//搜索框银行下拉菜单
(function(){
    var div=document.querySelector(".bank-box");
    div.onmousemove=function(){
        this.lastElementChild.className="open";
    };
    div.onmouseout=function(){
        this.lastElementChild.className="close";
    }
})();

//导航栏鼠标移入效果
(function(){
    var lis=document.querySelectorAll("#cateBox>li:not(:first-child)");
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            this.lastElementChild.style.display='block';
        };
        lis[i].onmouseout=function(){
            this.lastElementChild.style.display='none';
        }

    }
})();
//通知公告轮播和广告轮播
(function(){
    //通知公告轮播
    window.onload=function(){
        var speed= 1.5e3,time=0.7e3,step=30/0.7e3,moved= 0, timer=null,
            ul=document.querySelector(".stage ul"),
            list=ul.children,
            scroller=function(){
                timer=setInterval(function(){
                    var top = 0;
                    moved++;
                    ul.style.top =moved*30 + "px";
                    //动画效果,在700ms内向上移动的距离
                    for(var i=0;i<time;i++){
                        setTimeout(function(){
                            ul.style.top="-"+top+"px";
                            top = top + step;
                        },i)
                    }
                    setTimeout(function() {
                        var li=document.createElement("li"),a=document.createElement("a"),
                            lis=ul.getElementsByTagName("li");
                        a.innerHTML=lis[0].firstElementChild.innerHTML;
                        li.appendChild(a);
                        ul.removeChild(lis[0]);
                        ul.appendChild(li);
                        ul.style.top = "0px";
                    },time)
                },speed);//等待时间
            };
        scroller();
        ul.onmouseover = function() {
            clearInterval(timer);
            timer=null;
        };
        ul.onmouseout = function() {
            scroller();
        };
    };
    //关闭公告通知按钮
    var span=document.getElementById("close");
    span.onclick=function(){
        this.parentNode.parentNode.style.display="none";
    };
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
})();


//登录更多服务弹出框
(function(){
    var div=document.querySelector("#more-register");
    div.onmousemove=function(){
        this.children[0].children[0].style.borderRightColor="#FF850E";
        this.lastElementChild.style.display="block";
    };
    div.onmouseout=function(){
        this.children[0].children[0].style.borderRightColor="#999";
        var div=this.lastElementChild;
        div.onmouseout=function(){
            this.style.display="none";
        }
    }
})();
//一楼中间标签页切换效果
(function(){
    //查找事件触发元素
    var lis=document.querySelectorAll(".bank-new>li");
    //遍历li
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            document.querySelector(".bank-new .active")
            .className="";
            this.className="active";
        };
        lis[i].onmouseout=function(){
            this.className="active ";
        }
    }
    //查找触发事件元素
    var as=document.querySelectorAll(".bank-new a");
    //遍历所有a元素
    for(var i=0;i<as.length;i++){
        //   绑定事件触发函数
        as[i].onmouseover=function(){
        //    遍历所有container下所有div
            var divs=document.querySelectorAll(".bank-new+.container>div");
            for(var i=0;i<divs.length;i++){
                divs[i].style.display="none";
            }
            var i=this.href.lastIndexOf("#");
            var id=this.href.slice(i);
            document.querySelector(id).style.display="block";
        }
    }
})();
//二楼中间标签页切换效果
(function(){
    //查找事件触发元素
    var lis=document.querySelectorAll(".financial>li");
    //遍历li
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            document.querySelector(".financial .active")
                .className="";
            this.className="active";
        };
        lis[i].onmouseout=function(){
            this.className="active ";
        }
    }
    //查找触发事件元素
    var as=document.querySelectorAll(".financial a");
    //遍历所有a元素
    for(var i=0;i<as.length;i++){
        //   绑定事件触发函数
        as[i].onmouseover=function(){
            //    遍历所有container下所有div
            var divs=document.querySelectorAll(".financial+.container>div");
            for(var i=0;i<divs.length;i++){
                divs[i].style.display="none";
            }
            var i=this.href.lastIndexOf("#");
            var id=this.href.slice(i);
            console.log(id);
            document.querySelector(id).style.display="block";
        }
    }
})();
//底部资讯公告标签页切换效果
(function(){
    //查找事件触发元素
    var lis=document.querySelectorAll("#announcement-navbar>li");
    //遍历li
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            document.querySelector("#announcement-navbar .active")
                .className="";
            this.className="active";
        }
        lis[i].onmouseout=function(){
            this.className="active ";
        }
    }
    //查找触发事件元素
    var as=document.querySelectorAll("#announcement-navbar a");
    //遍历所有a元素
    for(var i=0;i<as.length;i++){
        //   绑定事件触发函数
        as[i].onmouseover=function(){
            //    遍历所有container下所有ul
            var uls=document.querySelectorAll(".container>ul");
            for(var i=0;i<uls.length;i++){
                uls[i].style.display="none";
            }
            var i=this.href.lastIndexOf("#");
            var id=this.href.slice(i);
            console.log(id);
            document.querySelector(id).style.display="block";
        }
    }
})();

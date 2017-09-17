(function(){
    window.onload=function(){
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
            pic.style.top=-curindex*264+'px';
            index=curindex;
        }
    };
    //鼠标移入个人网银登录背景图片颜色变化
    var a=document.querySelector(".login>a");
    a.onmousemove=function(){
        this.style.background="#F4944A";
    };
    a.onmouseout=function(){
        this.style.background="#B9B9B9";
    };
    //快速行动入口鼠标移入和移出背景图片变换效果
    var lis=document.querySelectorAll(".fast-login li");
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            this.firstElementChild.lastElementChild.style.backgroundPosition="0 -285px";
            this.firstElementChild.lastElementChild.firstElementChild.style.backgroundPosition="-218px -198px";
        };
        lis[i].onmouseout=function(){
            this.firstElementChild.lastElementChild.style.backgroundPosition="0 -253px";
            this.firstElementChild.lastElementChild.firstElementChild.style.backgroundPosition="-218px -166px";
        }
    }
    //个人业务二级菜单
    //鼠标移入换一级菜单下拉背景图片
    //查找事件触发元素
    var lis=document.querySelectorAll("#cate-box>li");
    for(var i=0;i<lis.length;i++){
        //绑定事件处理函数
        lis[i].onmouseover=function(){
            this.firstElementChild.lastElementChild.style.backgroundPosition="-150px -350px";
        };
        lis[i].onmouseout=function(){
            this.firstElementChild.lastElementChild.style.backgroundPosition="-150px -319px";
        }
    }
    //鼠标点击右侧图标实现二级菜单伸缩
    //查找事件触发元素
    var lis=document.querySelectorAll("#cate-box>li");
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(e){
            e.preventDefault();
            if(this.className=="open"){
                this.className="";
                this.firstElementChild.lastElementChild.style.backgroundPosition="-150px -319px";
                this.onmouseover=function(){
                this.firstElementChild.lastElementChild.style.backgroundPosition="-150px -350px";
                };
                this.onmouseout=function(){
                this.firstElementChild.lastElementChild.style.backgroundPosition="-150px -319px";
                }
            }else{
                var openLi=document.querySelector("#cate-box .open");
                if(openLi!=null) openLi.className="";
                this.className="open";
                this.firstElementChild.lastElementChild.style.backgroundPosition="-1px -600px";
                this.onmouseover=function(){
                    this.firstElementChild.lastElementChild.style.backgroundPosition="-1px -600px";
                };
                this.onmouseout=function(){
                    this.firstElementChild.lastElementChild.style.backgroundPosition="-1px -568px";
                };
                openLi.firstElementChild.lastElementChild.style.backgroundPosition="-150px -319px";
                openLi.onmouseover=function(){
                    openLi.firstElementChild.lastElementChild.style.backgroundPosition="-150px -350px";
                };
                openLi.onmouseout=function(){
                    openLi.firstElementChild.lastElementChild.style.backgroundPosition="-150px -319px";
                };

            }
        }
    }
})();
(function(){
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
        lis[i].onclick=function(){
            //查找要改变的元素
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

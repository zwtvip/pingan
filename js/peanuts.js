(function(){
    //行业动态标签栏切换效果
    //查找事件触发元素
    //查找事件触发元素
    var as=document.querySelectorAll("#industry-trends span a");
    for(var i=0;i<as.length;i++){
        as[i].onclick=function(){
            document.querySelector("#industry-trends span .active").className="";
            this.className="active";
            var uls=document.querySelectorAll("#industry-trends>div ul");
            for(var i=0;i<uls.length;i++){
                uls[i].style.display="none";
            }
            var i=this.href.lastIndexOf("#");
            var id=this.href.slice(i);
            document.querySelector(id).style.display="block";
        }
    }
})();

(function () {
    //表单验证
    var table=document.querySelector(".ftable_a");
    var inputs=document.querySelectorAll(".ftable_a .num");
        for(var i=0;i<inputs.length;i++){
            inputs[i].onfocus= function () {
                this.nextElementSibling.firstElementChild.style.display="block";
                vali(this,/^6[2][123][025]\d{12}|\d{3}?$/);
            };
            inputs[i].onblur= function () {
                this.nextElementSibling.lastElementChild.style.display="block";
            }
        }
    function vali(txt,reg){
        var div1=txt.nextElementSibling.firstElementChild;
        var div2=txt.nextElementSibling.lastElementChild;
        if(reg.test(txt.value)){
            div1.style.display="none"
        }else{
            div2.style.display="block"
        }
    }
})();

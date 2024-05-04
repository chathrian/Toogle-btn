document.addEventListener("DOMContentLoaded",function(){
    const checkbox = document.getElementById("check");
    const container=document.querySelector(".container");
    checkbox.addEventListener("change",function(){
        if(this.checked){
            container.style.backgroundColor = "red";
        }
        else{
            container.style.backgroundColor = "aliceblue";
        }
    });
});
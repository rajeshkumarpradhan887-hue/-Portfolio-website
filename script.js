const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",function(){

links.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});


window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#1e293b";

header.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

}

else{

header.style.background="#0f172a";

header.style.boxShadow="none";

}

});
let paginas = document.querySelectorAll("section");
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let option = document.querySelector("header span");
let sidebar = document.querySelector(".sidebar");
let mais = document.querySelector(".details1");

 
botao1.onclick = function(){
    paginas[1].style.transform = "translateX(0)";
}

botao2.onclick = function(){
    paginas[1].style.transform = "translateX(-100%)";
}

option.onpointerenter = function(){
    sidebar.style.display= "block";
    mais.onclick = function(){
        paginas[2].style.transform="translateX(0)";
    }
    
 }   

sidebar.onpointerleave = function(){
    sidebar.style.display= "none";
 }

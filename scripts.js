let paginas = document.querySelectorAll("section");
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let option = document.querySelector("header span");
let sidebar = document.querySelector(".sidebar");

botao1.onclick = function(){
    console.log("pg1");
    paginas[1].style.transform = "translateX(0)";
}

botao2.onclick = function(){
    console.log("pg2");
    paginas[2].style.transform = "translateX(0)";
}

option.onpointerenter = function(){
    sidebar.style.display= "block";
    
 }   

sidebar.onpointerleave = function(){
    sidebar.style.display= "none";
 }

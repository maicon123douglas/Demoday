let paginas = document.querySelectorAll("section");
let botao1 = document.querySelector("#botao1");
let btnVoltar = document.querySelector(".btnVoltar");
let option = document.querySelector("header span");
let sidebar = document.querySelector(".sidebar");
let mais = document.querySelector(".details1");
let missao = document.querySelector(".missao");
let cadastro = document.querySelector(".Cadastro1");
let home = document.querySelector(".home");
let botaoCadastrar = document.querySelector(".botaoCadastrar");
let duvidas = document.querySelector(".duvidas");
let cadastro2 = document.querySelector(".Cadastro2");
 
botao1.onclick = function(){
    paginas[1].style.transform = "translateX(0)";
}

btnVoltar.onclick = function(){
    paginas[4].style.transform = "translateX(-100%)";
    paginas[3].style.transform="translateX(-100%)";
    paginas[2].style.transform="translateX(-100%)";
    paginas[1].style.transform = "translateX(-100%)";
}

option.onpointerenter = function(){
    sidebar.style.display= "block";
    mais.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(0)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    missao.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(0)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    cadastro.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(0)";
    }
    home.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    duvidas.onclick = function(){
        paginas[5].style.transform = "translateX(-100%)";
        paginas[4].style.transform = "translateX(0)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)";
    }
    cadastro2.onclick = function(){
        paginas[5].style.transform = "translateX(0)";
        paginas[4].style.transform = "translateX(-100%)";
        paginas[3].style.transform="translateX(-100%)";
        paginas[2].style.transform="translateX(-100%)";
        paginas[1].style.transform = "translateX(-100%)"; 
    }
    
 }   

sidebar.onpointerleave = function(){
    sidebar.style.display= "none";
 }

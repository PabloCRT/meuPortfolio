function abrirMenu(){
    let imagemMenu = document.getElementById("imgHamb");
    let botao = document.getElementById("botao");
    let caixaNav = document.getElementById("nav");
    let novaURL1 = "images/xHamb.png";

    imagemMenu.src = novaURL1

    caixaNav.style.right="0"
    caixaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "fecharMenu()")
}

function fecharMenu(){
    let imagemMenu = document.getElementById("imgHamb");
    let botao = document.getElementById("botao");
    let caixaNav = document.getElementById("nav");
    let novaURL = "images/menuHamb.png";

    imagemMenu.src = novaURL
    novaURL.onload

    caixaNav.style.right="-50%"
    caixaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "abrirMenu()")
}

function fecharAposClick(){
    let imagemMenu = document.getElementById("imgHamb");
    let link = document.getElementById("botao");
    let caixaNav = document.getElementById("nav");
    let novaURL = "images/menuHamb.png";

    imagemMenu.src = novaURL
    novaURL.onload

    caixaNav.style.right="-50%"
    caixaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "abrirMenu()")
}

function navegacao(){
    const redes = document.getElementById('contatos');

    redes.style.background="black"
}

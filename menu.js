function abrirMenu(){
    let imagemMenu = document.getElementById("imgMenu");
    let botao = document.getElementById("botaoMenu");
    let caixaNav = document.getElementById("caixaNav");
    let novaURL = "assets/xHamb.png";

    imagemMenu.src = novaURL
    novaURL.onload

    caixaNav.style.right="0"
    caixaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "fecharMenu()")
}

function fecharMenu(){
    let imagemMenu = document.getElementById("imgMenu");
    let botao = document.getElementById("botaoMenu");
    let caixaNav = document.getElementById("caixaNav");
    let novaURL = "assets/menuHamb.png";

    imagemMenu.src = novaURL
    novaURL.onload

    caixaNav.style.right="-50%"
    caixaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "abrirMenu()")
}

function fecharAposClick(){
    let imagemMenu = document.getElementById("imgMenu");
    let botao = document.getElementById("botaoMenu");
    let caixaNav = document.getElementById("caixaNav");
    let novaURL = "assets/menuHamb.png";

    imagemMenu.src = novaURL
    novaURL.onload

    caixaNav.style.right="-50%"
    caixaNav.style.transition=".5s all"

    botao.setAttribute('onclick', "abrirMenu()")
}
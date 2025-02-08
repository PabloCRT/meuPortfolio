/** Parte das linguagens. Esse código faz com que uma janela se abra a partir do onclick de um elemento (INÍCIO) */
function janela(){
    let botao = document.getElementById("botao");
    let seta = document.getElementById("seta");
    let imagem = document.getElementById("imgGhost");
    
    imagem.style.opacity="1"
    seta.style.rotate="180deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost").src = "assets/exeHTML.png";

    botao.setAttribute('onclick', "fechar()"); /** Troca a função do evento onclick */
}
function fechar(){
    let botao = document.getElementById("botao");
    let seta = document.getElementById("seta");
    let imagem = document.getElementById("imgGhost");
    
    imagem.style.opacity="0"
    seta.style.rotate="360deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost").src = " ";

    botao.setAttribute('onclick', "janela()");/** Troca a função do evento onclick */
}



function janela2(){
    let botao = document.getElementById("botao2");
    let seta = document.getElementById("seta2");
    let imagem = document.getElementById("imgGhost2");
    
    imagem.style.opacity="1"
    seta.style.rotate="180deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost2").src = "assets/exeCSS.jpg";

    botao.setAttribute('onclick', "fechar2()"); /** Troca a função do evento onclick */
}
function fechar2(){
    let botao = document.getElementById("botao2");
    let seta = document.getElementById("seta2");
    let imagem = document.getElementById("imgGhost2");
    
    imagem.style.opacity="0"
    seta.style.rotate="360deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost2").src = " ";

    botao.setAttribute('onclick', "janela2()");/** Troca a função do evento onclick */
}



function janela3(){
    let botao = document.getElementById("botao3");
    let seta = document.getElementById("seta3");
    let imagem = document.getElementById("imgGhost3");
    
    imagem.style.opacity="1"
    seta.style.rotate="180deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost3").src = "assets/exeJS.jpg";

    botao.setAttribute('onclick', "fechar3()"); /** Troca a função do evento onclick */
}
function fechar3(){
    let botao = document.getElementById("botao3");
    let seta = document.getElementById("seta3");
    let imagem = document.getElementById("imgGhost3");
    
    imagem.style.opacity="0"
    seta.style.rotate="360deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost3").src = " ";

    botao.setAttribute('onclick', "janela3()");/** Troca a função do evento onclick */
}



function janela4(){
    let botao = document.getElementById("botao4");
    let seta = document.getElementById("seta4");
    let imagem = document.getElementById("imgGhost4");
    
    imagem.style.opacity="1"
    seta.style.rotate="180deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost4").src = "assets/exeKT.jpg";

    botao.setAttribute('onclick', "fechar4()"); /** Troca a função do evento onclick */
}
function fechar4(){
    let botao = document.getElementById("botao4");
    let seta = document.getElementById("seta4");
    let imagem = document.getElementById("imgGhost4");
    
    imagem.style.opacity="0"
    seta.style.rotate="360deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost4").src = " ";

    botao.setAttribute('onclick', "janela4()");/** Troca a função do evento onclick */
}



function janela5(){
    let botao = document.getElementById("botao5");
    let seta = document.getElementById("seta5");
    let imagem = document.getElementById("imgGhost5");
    
    imagem.style.opacity="1"
    seta.style.rotate="180deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost5").src = "assets/exePY.png";

    botao.setAttribute('onclick', "fechar5()"); /** Troca a função do evento onclick */
}
function fechar5(){
    let botao = document.getElementById("botao5");
    let seta = document.getElementById("seta5");
    let imagem = document.getElementById("imgGhost5");
    
    imagem.style.opacity="0"
    seta.style.rotate="360deg"
    seta.style.transition=".5s ease"

    document.getElementById("imgGhost5").src = " ";

    botao.setAttribute('onclick', "janela5()");/** Troca a função do evento onclick */
}
/** Parte das linguagens. Esse código faz com que uma janela se abra a partir do onclick de um elemento (FIM) */
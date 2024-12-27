window.addEventListener('scroll', function(){
    const elemento = document.getElementById('linkInt');

    if(this.window.scrollY === 0){
        elemento.style.opacity="0"
        elemento.style.transition=".5s ease"
    }

    else{
        elemento.style.opacity="1"
        elemento.style.transition=".5s ease"
    }
})

window.addEventListener('scroll', function(){
    const navBar = this.document.getElementById('navBar');

    if(this.window.scrollY === 0){
        navBar.style.backgroundColor="transparent"
        navBar.style.boxShadow="0px 0px 0px"
    }
    else{
        navBar.style.backgroundColor="rgb(196, 208, 219)"
        navBar.style.zIndex="1001"
        navBar.style.height="10vh"
        navBar.style.transition="ease .5s"
        navBar.style.boxShadow="0px 5px 10px rgb(171, 182, 192)"
    }
})

/** Parte do scroll suave após apertar o link na navBar (INÍCIO) */
function scrollToTop(){
    const corpo = document.getElementById("corpo")
    corpo.style.scrollBehavior="smooth"

    window.scrollTo(0, 0);
}
/** Parte do scroll suave após apertar o link na navBar (FIM) */
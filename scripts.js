window.addEventListener('scroll', function(){
    const elemento = this.document.getElementById('linkInt');
    const contrato = this.document.getElementById('contrate');
    const navBar = this.document.getElementById('navBar');
    const navegacao1 = this.document.getElementById('navegacao1');
    const navegacao2 = this.document.getElementById('navegacao2');
    const navegacao3 = this.document.getElementById('navegacao3');
    const navegacao4 = this.document.getElementById('navegacao4');

    if(this.window.scrollY === 0){
        elemento.style.opacity="0"
        elemento.style.transition=".5s ease"

        navegacao1.style.opacity="0"
        navegacao1.style.transition=".5s ease"
        navegacao2.style.opacity="0"
        navegacao2.style.transition=".5s ease"
        navegacao3.style.opacity="0"
        navegacao3.style.transition=".5s ease"
        navegacao4.style.opacity="0"
        navegacao4.style.transition=".5s ease"

        contrato.style.opacity="1"

        navBar.style.backgroundColor="transparent"
        navBar.style.boxShadow="0px 0px 0px"
    }

    else{
        elemento.style.opacity="1"
        elemento.style.transition=".5s ease"

        navegacao1.style.opacity="1"
        navegacao1.style.transition=".5s ease"
        navegacao2.style.opacity="1"
        navegacao2.style.transition=".5s ease"
        navegacao3.style.opacity="1"
        navegacao3.style.transition=".5s ease"
        navegacao4.style.opacity="1"
        navegacao4.style.transition=".5s ease"
        
        contrato.style.opacity="0"
        contrato.style.transition=".5s ease"

        navBar.style.backgroundColor="rgb(8, 8, 8)"
        navBar.style.zIndex="1001"
        navBar.style.height="10vh"
        navBar.style.transition="ease .5s"
        navBar.style.boxShadow="0px 5px 10px black"
    }
});

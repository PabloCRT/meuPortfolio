
//Não terminado...

window.addEventListener('scroll', () => {
    const elementoObservado = document.querySelector('.containerMaisProjetos');

    if(elementoObservado){
        const gatilho = window.innerHeight / 2;
        const distanciaTopo = elementoObservado.getBoundingClientRect().top;

        if(distanciaTopo < gatilho){
            elementoObservado.classList.add('projeto-esquerda-view');
        }
    }
})

//Não terminado...

window.addEventListener('scroll', () => {
    const elementoObservado = document.querySelectorAll('.esquerda');

    forEach((el) => (elementoObsservado) {
        if(elementoObservado){
            const gatilho = window.innerHeight / 2;
            const distanciaTopo = elementoObservado.getBoundingClientRect().top;
    
            if(distanciaTopo < gatilho){
                elementoObservado.classList.add('projeto-esquerda-view');
            }
        }
    });
})

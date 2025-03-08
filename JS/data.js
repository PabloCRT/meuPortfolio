window.addEventListener('load', function(){
        //conseguindo data atual
        const data = new Date()
        const mes = String(data.getMonth() + 1).padStart(2, '0') //jan = 0 -> 1, 1 -> 01
        const ano = data.getFullYear() //ano
    
        //data nascimento
    
        const mesNascimento = 8;
        const anoNascimento = 2006;
    
        // processamento
    
        const diferencaMes = mes - mesNascimento //diferença de meses do mês atual e de nascimento
        const diferencaAno = ano - anoNascimento //diferença de anos do ano atual e de nascimento
    
        if(diferencaMes >= 0){
            document.getElementById('idade').innerHTML = diferencaAno
        }
    
        else if(diferencaMes < 0){
            document.getElementById('idade').innerHTML = diferencaAno - 1
        }
})
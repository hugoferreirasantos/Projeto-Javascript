const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if ( nome !== ''  &&  altura !== ''  &&  peso !== ''){
    
         const valorIMC = (peso / (altura * altura)).toFixed(1);
    
        let classificacao = '';
    
        if ( valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25){
            classificacao = 'com o peso ideal. Parabéns !!!';
        }else if(valorIMC < 30){
            classificacao = 'acima do peso';
        }else if(valorIMC < 35){
            classificacao = 'com Obesidade grau I';
        }else if(valorIMC < 40){
            classificacao = 'com Obesidade grau II. Procure um médico com urgência.';
        }else{
            classificacao = 'com Obesidade grau III. Procure um médico com urgência.'
        }
           
        
        
        resultado.textContent = `${nome} o seu IMC é ${valorIMC} e você está ${classificacao}`;
    
    }else{
        resultado = 'Preencha todos os campos !!!';


    }

}   
calcular.addEventListener('click', imc);
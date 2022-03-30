var  Celsius = parseFloat(prompt("Temperatura em Graus Celsius"));
var Fahrenheit = parseFloat (prompt("Temperatura em Graus Fahrenheit"));


const fahrenheit = (Celsius * 1.8) + 32;
const  celsius = 5 * (Fahrenheit - 32) / 9;

document.write("Temperatura em graus Celsius = ", celsius );
document.write("Temperatura em graus fahrenheit =  ", fahrenheit);




























/*const calcular = document.getElementById('calcular');




function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').valur;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if ( nome !== ''  &&  altura !== ''  &&  peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);
   
       let classificacao = '';
   
       if ( valorIMC < 18.5){
           classificacao = 'abaixo do peso.';
       }else if (valorIMC < 25){
           classificacao = 'com o peso ideal. Parabéns !!!';
       }
          resultado.textContent = `${nome} o seu IMC é ${valorIMC} e você está ${classificacao}`;
   
    }else{
         resultado = 'Preencha todos os campos !!!';
        }
    
    }   
    calcular.addEventListener('click', imc); */















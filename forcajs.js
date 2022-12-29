const calcular = document.getElementById('calcular');

function calc(){
const inputnome = document.getElementById('inputnome').value;
const inputaltura = document.getElementById('inputaltura').value;
const inputpeso = document.getElementById('inputpeso').value;
const resultado = document.getElementById('tr');



if (inputnome != '' && inputaltura != '' && inputpeso != '') {
      
     const valorimc = (inputpeso / (inputaltura * inputaltura)).toFixed(1);

     let texto = '' ;

     if (valorimc <= 18.5){
        texto =', de acordo com o calculo imc você esta abaixo do peso, seu imc e: ';
     }
     else if (valorimc >= 18.6 && valorimc<= 24.99) {
      texto =', de acordo com o calculo imc você esta com o peso ideal, seu imc e: ';
     }
     else if (valorimc >= 25 && valorimc<= 29.99) {
      texto =', de acordo com o calculo imc você esta com sobrepeso, seu imc e: ';
     }
     else if (valorimc >= 30 && valorimc<= 34.99) {
      texto =', de acordo com o calculo imc você esta com obesidade (grau I), seu imc e: ';
     }
     else if (valorimc >= 35 && valorimc<= 39.99) {
      texto =', de acordo com o calculo imc você esta com obesidade (grau II), seu imc e: ';
     }
     else if (valorimc >= 40) {
      texto =', de acordo com o calculo imc você esta com obesidade (grau III), seu imc e: ';
     }
     resultado.textContent = `${inputnome}${texto}${valorimc}`;

     }
     else{
      resultado.textContent = 'Preencha todos os campos!!!';
     }

}

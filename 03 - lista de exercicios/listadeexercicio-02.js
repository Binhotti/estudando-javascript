/* 

2) IMC 

Formula do IMC: peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condição:
- Abaixo de 18.5 - Abaixo do peso;
- Entre 18.5 e 25 - Peso normal;
- Entre 25 e 30 - Acima do peso;
- Entre 30 e 40 - Obeso;
- Acima de 40 - Obesidade grave;

*/

const peso = 58;
const altura = 1.52;

const imc = peso / Math.pow(altura, 2)

console.log(`Seu IMC é de: ${imc.toFixed(2)}`);

if (imc < 18.5 ) {
    console.log('Você está abaixo do peso!');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você está no peso ideal!');
} else if (imc > 25 && imc < 30) {
    console.log('Você está acima do peso!');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso');
} else {
    console.log('Você está em obesidade grave');
}


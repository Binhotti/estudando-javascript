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

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Você está abaixo do peso!";
  } else if (imc >= 18.5 && imc < 25) {
    return "Você está no peso ideal!";
  } else if (imc > 25 && imc < 30) {
    return "Você está acima do peso!";
  } else if (imc >= 30 && imc < 40) {
    return "Você está obeso";
  } else {
    return "Você está em obesidade grave";
  }
}

// Main
(function () {
  const peso = 58;
  const altura = 1.52;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
  console.log(`Seu IMC é de: ${imc.toFixed(2)}`);
})();


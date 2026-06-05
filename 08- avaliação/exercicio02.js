/* Faça um progrmaa que receba N (quantidade de números) e seus respectivos valores
Imprima o maior número par e o menor número impar

    Exemplo: 
        Entrada: 
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Maior número impar: 1
*/

const { gets, print } = require("./funcoes-auxiliares-ex2");

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;
for (let i = 0; i < n; i++) {
  const numero = gets();

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === 0) {
      menorNumeroImpar = numero;
    } else if (numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print("Maior número par: " + maiorNumeroPar);
print("Menor número ímpar: " + menorNumeroImpar);

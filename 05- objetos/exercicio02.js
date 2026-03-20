/* 
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarIMC() {
    const IMC = this.calcularIMC();

    if (IMC < 18.5) {
      return "Você está abaixo do peso!";
    } else if (IMC >= 18.5 && IMC < 25) {
      return "Você está no peso ideal!";
    } else if (IMC > 25 && IMC < 30) {
      return "Você está acima do peso!";
    } else if (IMC >= 30 && IMC < 40) {
      return "Você está obeso";
    } else {
      return "Você está em obesidade grave";
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classificarIMC());

const vitor = new Pessoa("Vitor", 65, 1.7);
console.log(vitor.classificarIMC());

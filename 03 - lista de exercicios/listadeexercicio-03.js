/* 
    3) elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequeado.

    Código condição de pagamento:
    - Á vista débito, recebe 10% de desconto;
    - Á vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta + juros de 10%
*/

const precoEtiqueta = 100;
const opcaoDePagamento = 4;

if (opcaoDePagamento === 1) {
  const precoFinal = precoEtiqueta * (1 - 10 / 100);
  console.log(precoFinal);
  console.log("Você recebeu 10% de desconto");
} else if (opcaoDePagamento === 2 ) {
  const precoFinal = precoEtiqueta * (1 - 15 / 100);
  console.log(precoFinal);
  console.log("Você recebeu 15% de desconto");
} else if (opcaoDePagamento === 3) {
    console.log('Sem desconto!');
} else {
    const precoFinal = precoEtiqueta * (1 + 10 / 100);
    console.log(precoFinal.toFixed(2));
    console.log('Preço normal + 10% de juros');
}

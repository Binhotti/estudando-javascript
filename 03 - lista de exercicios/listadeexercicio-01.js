/* 

1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e a sua classificação coforme a tabela abaixo: 

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação: 
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média maior que 7, passou de semestre;

*/

const nota1 = 5;
const nota2 = 5;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média foi ${media}`);

if (media < 5) {
    console.log('Você foi reprovado!');
} else if (media >= 5 && media <= 7 ) {
    console.log('Você está de recuperação!');
} else {
    console.log('Você está aprovado!');
}


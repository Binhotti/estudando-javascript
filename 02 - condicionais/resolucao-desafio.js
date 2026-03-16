const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const tipoCombustivel = 'gasolina'; // ou 'gasolina'
const distanciaEmKM = 100;

const litrosConsumidos = distanciaEmKM / kmPorLitro;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel === 'gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    console.log('Tipo de combustível inválido.');
}

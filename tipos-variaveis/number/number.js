const meuNumero = 123456.789012;
const passarNumeroParaString = meuNumero.toString();
console.log('Passado para STring: ', typeof passarNumeroParaString);

const quatroCasasDecimais = meuNumero.toFixed(4);
console.log(quatroCasasDecimais);

console.log('Para float: ', parseFloat(passarNumeroParaString));

console.log('Para inteiro: ', parseInt(passarNumeroParaString));

var variavel = "Oi";
console.log(variavel.length);

const splitTexto = 'Textão para ser cortado'.split('a');
console.log('Texto cortado: ', splitTexto);

const replaceTexto = 'Texto para ser substituído aqui'.replace('T', 't');
console.log('Trocando letras: ', replaceTexto);

const sliceTexto = 'Texto para fazer slice aqui'.slice(-1);
console.log('Texto fatiado: ', sliceTexto);

const allWOutLastChar = 'Texto para fazer slice aqui'.slice(0, -1);
console.log('Texto da primeira menos a última letra: ', allWOutLastChar);

const secondToEnd = 'Texto para fazer slice aqui'.slice(1);
console.log('Da segunda letra ao final', secondToEnd);

const twoCharsBeforeFirstPos = 'Texto de teste'.substr(0, 2);
console.log('As duas primeiras letras: ', twoCharsBeforeFirstPos);
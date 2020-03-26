const arr = [1, 2, 3];
console.log(arr);
const array1 = new Array(4);
console.log(array1);
const arra = new Array(4, 5, 6, 7, 8, 9, 10);
console.log(arra);
const pessoas = Array.of("Juninh", "Silva", "Lais");
console.log(pessoas);
const arrayMisto = Array.of(1, 2, 3, "4", "5");
console.log(arrayMisto);

/* const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);
console.log(divArray.length); */

//push
arra.push(7);
console.log(arra);

//pop
var removido = arra.pop();
console.log(removido, arra);

//unshift e shift
arr.unshift(0);
console.log(arr);
removido = arr.shift();
console.log(removido, arr);

//concat
const concatenados = arr.concat(arra);
console.log(concatenados);

//slice
var sliced = arr.slice(0, 2);
console.log(sliced);
sliced = arr.slice(2);
console.log(sliced);
sliced = arr.slice(-1);
console.log(sliced);
sliced = arr.slice(-2);
console.log(sliced);

//splice
var spliced = arr.splice(0, 2);
console.log(spliced);
spliced = arr.splice(2);
console.log(spliced);
spliced = arr.splice(-1);
console.log(spliced);
spliced = arr.splice(-2);
console.log(spliced);
arr.splice(0, 1, 'first')
console.log(arr);

//iteração
//foreach
arra.forEach((element, index) => {
    console.log(index + 1 + " - " + element);
});

//map
arra.map(a => {
    a **= 2;
    console.log(a);
});


//flat
const arrayInterno = [1, 2, 3, [4, 5, 6]];
novoArrayInterno = arrayInterno.flat(2);
console.log(novoArrayInterno);

console.log(novoArrayInterno.flatMap(value => [value * 2]));

//keys values, entries
const arrayKeys = novoArrayInterno;
const arrayIterator = arrayKeys.keys();
const arrayValues = arrayKeys.values();
const arrayEntries = arrayKeys.entries();

for (let index = 0; index <= arrayKeys.length; index++) {
    console.log(arrayIterator.next());
    console.log(arrayValues.next());
    console.log(arrayEntries.next());
}

//find findIndex
var maior = arra.find(value => value > 2);
console.log(maior);

maior = arra.findIndex(value => value >= 2);
console.log(maior);

//filter
const maiores = arra.filter(value => value >= 2);
console.log(maiores);

console.log(arra.indexOf(5));
console.log(arra.lastIndexOf(7));

//includes
console.log(arra.includes(5));
console.log(arra.includes(0));

//some every
console.log(arra.some(value => value % 3 === 0));
console.log(arra.every(value => value % 3 === 0));

//sort reverse join reduce
console.log(arra.sort((a, b) => b - a));
console.log(arra.reverse());
console.log(arra.join(' -- '));
console.log(arra.reduce((total, value) => total += value, 0));
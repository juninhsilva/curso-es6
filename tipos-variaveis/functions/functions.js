function fn() {
    return 'minha função';
}

console.log(fn());
 
const arrow = () => 'minha arrow function';
console.log(arrow());
const arrowSoma = () => {
    let a = b = 2;
    return a + b;
}

console.log(arrowSoma());

fn.propridade = 'minha propriedade';
console.log(fn());
console.log(fn.propridade);

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);
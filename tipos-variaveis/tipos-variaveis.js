//escopo global
var variavel = 10;
let letVar = 'Oi';
const constante = 'Sou uma constante';

console.log(variavel);
console.log(letVar);
console.log(constante);


function funcao() {
    //escopo de função
    console.log(`Valor dentro da função: ${variavel}`);

    if (true) {
        //escopo de bloco;
        //o var só tem escopo global ou de função
        //let tem escopo de bloco
        var variavel = 11;
        console.log(`Valor dentro do IF: ${variavel}`);
    }

    if (true) {
        //escopo de bloco;
        //o var só tem escopo global ou de função
        //let tem escopo de bloco
        let varzinha = 12;
        console.log(`Valor dentro do IF: ${varzinha}`);
    }
    console.log(`Valor fora do IF: ${variavel}`);
    //dá erro por conta do escopo
    //console.log(`Valor fora do IF: ${varzinha}`);
}

funcao();

const persons = ['Gui', 'Pedro', 'Jeniffer'];
persons.push('Ana Clara');
persons.push('Ana Luisa');

persons.shift();

persons[0] = 'Isabella';

console.log('Array final: ', persons);
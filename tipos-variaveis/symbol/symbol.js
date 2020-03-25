const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2);

const symbol11 = Symbol('nome1');
const symbol22 = Symbol('nome2');

const usuario = {
    [symbol11]: 'Juninh',
    [symbol22]: 'Silva',
    age: 30
}
console.log(usuario);

for (const key in usuario) {
    if (usuario.hasOwnProperty(key)) {
        console.log(usuario[key]);

    }
}

console.log(Object.keys(usuario));
console.log(Object.values(usuario));
console.log(Object.getOwnPropertySymbols(usuario));
console.log(Reflect.ownKeys(usuario));

const direcoes = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};

console.log(direcoes);
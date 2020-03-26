//herança é baseada em protótipos
'use strict';
const texto = 'Hello, protótipo';
texto.split('');
console.log(texto);

class Animal {
    constructor() {
        this.qtdPatas = 4;
    }
}

/* function Cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
}
 */

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.morde = morde;
    }
}
const cachorro = new Cachorro(true);
console.log(cachorro.qtdPatas, cachorro.morde);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

class Fisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }
}

const junior = new Fisica('Juninh Silva', '09038206682');
console.log(junior.nome, junior.cpf);
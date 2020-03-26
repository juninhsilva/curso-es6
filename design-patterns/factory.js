//factory pattern
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
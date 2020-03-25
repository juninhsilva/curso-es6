const generos = { MASCULINO: Symbol('M'), FEMININO: Symbol('F') };
const pessoas = [
    {
        nome: 'Juninh Silva',
        genero: generos.MASCULINO,
        idade: 30
    }, {
        nome: 'Maria',
        genero: generos.FEMININO,
        idade: 17
    }, {
        nome: 'Claudia',
        genero: generos.FEMININO,
        idade: 28
    }
];

console.log(pessoas.length);

console.log(Array.isArray(pessoas));

pessoas.forEach(pessoa => {
    console.log(pessoa.nome + ' - ' + pessoa.genero.toString() + ' - ' + pessoa.idade);
});

const filtrado = pessoas.filter(pessoa => pessoa.genero === generos.MASCULINO);
console.log(filtrado);

const pessoasComCurso = pessoas.map(pessoa => {
    pessoa.curso = 'Introdução ao JS';
    return pessoa;
});
console.log(pessoasComCurso);
const usuario = {
    nome: 'Juninh',
    sobrenome: 'Silva'
};

function getNomeCompleto(usuario) {
    return {
        ...usuario,
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome} `
    }
}

const usuarioComNomeCompleto = getNomeCompleto(usuario);
console.log(usuarioComNomeCompleto);

const students = [
    {
        name: 'Juninh',
        grade: 10
    },
    {
        name: 'Maria',
        grade: 9
    },
    {
        name: 'Camila',
        grade: 8
    },
    {
        name: 'Ana Paula',
        grade: 7
    }
];

function getApprovedStudents(list) {
    return list.filter(student => student.grade >= 7.5);
}

console.log('Aprovados');
console.log(getApprovedStudents(students));

console.log('Lista Normal');
console.log(students);
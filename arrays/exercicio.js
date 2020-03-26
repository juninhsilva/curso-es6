const colaboradores = [
    { nome: "Cris", horasTrabalhadas: 220 },
    { nome: "Rebeca", horasTrabalhadas: 210 }
];

function adicionaSalario(colaborador) {
    const salario = colaborador.horasTrabalhadas * 50;
    colaborador.salario = salario;
    return {
        salario: salario
    };
}

const colaboradoresComSalario = colaboradores.map(adicionaSalario);
console.log(colaboradoresComSalario);

const frutas = ["amora", "laranja", "melancia", "acerola"];
console.log(frutas.sort());
console.log(frutas.reverse());

const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];
console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));

const frutas2 = ["amora", ["laranja", ["melancia"], "acerola"]];
console.log(frutas2.flat(2));

var frutas3 = ["melancia", "laranja", "acerola"];
console.log(frutas3.shift());
frutas3 = ["melancia", "laranja", "acerola"];
console.log(frutas3.pop());
frutas3 = ["melancia", "laranja", "acerola"];
console.log(frutas3.slice(2, 1));
frutas3 = ["melancia", "laranja", "acerola"];
console.log(frutas3.splice(2, 1));
frutas3 = ["melancia", "laranja", "acerola"];
console.log(frutas3.unshift());

const person = ["Cris"];
person.push("James", "Jenny");
person.push("John");
console.log(person);

const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];
const familiaFilho = familiaPai.concat(familiaMae);
console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);


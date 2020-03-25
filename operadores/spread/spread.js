var partes = ['ombro', 'cabeça'];
var musica = ['joelhos', ...partes, 'e', 'pés'];
function fn(x, y, z) {
    console.log(x, y, z);
}

var args = [0, 1, 2];

fn(...args);

var meuCarro = { marca: 'GM', modelo: 'Monza' };
console.log('marca' in meuCarro);
console.log('modelo' in meuCarro);
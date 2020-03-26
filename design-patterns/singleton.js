//singleton pattern
var SETTINGS = {
    api: 'http://localhost:8080',
    timeout: 3000
}

console.log(SETTINGS);


function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}

const linux = MyApp.call({ nome: 'linux' });
const windows = MyApp.call({ nome: 'windows' });
console.log(linux);
console.log(windows);
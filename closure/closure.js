//escopo léxico

function init() {
    const exemplo = 'Essa variável';

    return function () {
        console.log(`1 - O valor é: ${exemplo} - 1 `);

        return function () {
            console.log(`2 - O valor é: ${exemplo} - 2 `);

            return function () {
                console.log(`3 - O valor é: ${exemplo} - 3`);
            }
        }
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();
initFn3();
console.log("Tudo de uma vez.");
init()()()();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (numero) => {

    numero = parseFloat(numero);

    while (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
        rl.question('Ingrese un número: ', (nuevoNumero) => {
            numero = parseFloat(nuevoNumero);
        });
    }

    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }

    rl.close();
});
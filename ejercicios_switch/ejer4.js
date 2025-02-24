const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (numero) => {
    
    numero = parseFloat(numero);

    
    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
    } else {
      
        switch (numero % 2) {
            case 0:
                console.log("El número es par.");
                break;
            case 1:
                console.log("El número es impar.");
                break;
            default:
                console.log("El número no es válido.");
        }
    }

    rl.close();
});
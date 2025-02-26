const readline = require('readline');

// Función para determinar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

// Función para manejar la interacción con el usuario
function interactuarConUsuario() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Ingrese un número: ', (numero) => {
        // Convertir la entrada a número
        numero = parseInt(numero);

        // Determinar si es par o impar usando la función
        const mensaje = esParOImpar(numero);

        // Mostrar el resultado
        console.log(mensaje);

        // Cerrar la interfaz readline
        rl.close();
    });
}

// Llamar a la función para iniciar la interacción
interactuarConUsuario();
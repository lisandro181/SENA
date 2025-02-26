function calcularAyuda(genero, edad) {
    let ayuda;

    if (genero === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayuda = 100000;
        } else {
            ayuda = 0;
        }
    } else {
        ayuda = 40000;
    }

    return ayuda; 

function mostrarMensaje(genero, edad) {

    let ayuda = calcularAyuda(genero, edad);

    console.log(`El valor de ayuda mensual es: $${ayuda}.`);
}

let genero = "femenino";
let edad = 35;

mostrarMensaje(genero, edad);
}
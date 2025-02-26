function calcularCosto(dias) {
    let costo;

    if (dias === 15) {
        costo = 18000;
    } else if (dias === 30) {
        costo = 35000;
    } else if (dias === 90) {
        costo = 86000;
    } else {
        costo = "No válido";
    }

    return costo;
}

function mostrarMensaje(dias, costo) {
    console.log(`El costo por ${dias} días es: $${costo}.`);
}

let dias = 30;

let costo = calcularCosto(dias);

mostrarMensaje(dias, costo);
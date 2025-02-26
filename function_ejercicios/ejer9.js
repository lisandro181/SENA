function esTrianguloValido(angulo1, angulo2, angulo3) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        return "El triángulo es válido.";
    } else {
        return "El triángulo no es válido.";
    }
}

function mostrarMensaje(angulo1, angulo2, angulo3) {

    let mensaje = esTrianguloValido(angulo1, angulo2, angulo3);

    console.log(mensaje);
}

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

mostrarMensaje(angulo1, angulo2, angulo3);
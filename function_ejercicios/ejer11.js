function determinarMensaje(pitido, discoGira) {
    if (pitido && discoGira) {
        return "Póngase en contacto con el técnico de apoyo.";
    } else if (pitido && !discoGira) {
        return "Verificar contactos de la unidad.";
    } else if (!pitido && !discoGira) {
        return "Traiga la computadora para repararla en la central.";
    } else {
        return "Compruebe las conexiones de altavoces.";
    }
}

function mostrarMensaje(pitido, discoGira) {

    let mensaje = determinarMensaje(pitido, discoGira);

    console.log(mensaje);
}

let pitido = true;
let discoGira = false;
mostrarMensaje(pitido, discoGira);
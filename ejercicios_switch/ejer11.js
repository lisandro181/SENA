let pitido = true;
let discoGira = false;

switch (true) {
    case (pitido && discoGira):
        console.log("Póngase en contacto con el técnico de apoyo.");
        break;
    case (pitido && !discoGira):
        console.log("Verificar contactos de la unidad.");
        break;
    case (!pitido && !discoGira):
        console.log("Traiga la computadora para repararla en la central.");
        break;
    default:
        console.log("Compruebe las conexiones de altavoces.");
        break;
}
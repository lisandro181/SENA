let dias = 30;
let costo;

switch (dias) {
    case 15:
        costo = 18000;
        break;
    case 30:
        costo = 35000;
        break;
    case 90:
        costo = 86000;
        break;
    default:
        costo = "No válido";
        break;
}

console.log(`El costo por ${dias} días es: $${costo}.`);
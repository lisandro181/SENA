let operador = "Tigo";
let minutos = 10;
let costoFijo, costoMinuto, costoDatos;

switch (operador) {
    case "Tigo":
        costoFijo = 45000;
        costoMinuto = 200;
        costoDatos = 12000;
        break;
    case "Claro":
        costoFijo = 30000;
        costoMinuto = 100;
        costoDatos = 18000;
        break;
    case "Movistar":
        costoFijo = 40000;
        costoMinuto = 250;
        costoDatos = 8000;
        break;
    default:
        console.log("Operador no reconocido.");
        break;
}

let total = costoFijo + (minutos * costoMinuto) + costoDatos;
console.log(`Costo total: $${total}.`);

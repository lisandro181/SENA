function calcularCostoTotal(operador, minutos) {
    let costoFijo, costoMinuto, costoDatos;

    if (operador === "Tigo") {
        costoFijo = 45000;
        costoMinuto = 200;
        costoDatos = 12000;
    } else if (operador === "Claro") {
        costoFijo = 30000;
        costoMinuto = 100;
        costoDatos = 18000;
    } else if (operador === "Movistar") {
        costoFijo = 40000;
        costoMinuto = 250;
        costoDatos = 8000;
    } else {
        return "Operador no válido.";
    }

    let total = costoFijo + (minutos * costoMinuto) + costoDatos;
    return total;
}

function mostrarMensaje(operador, minutos) {

    let total = calcularCostoTotal(operador, minutos);

    if (typeof total === "number") {
        console.log(`Costo total: $${total}.`);
    } else {
        console.log(total); 
    }
}

let operador = "Tigo";
let minutos = 10;

mostrarMensaje(operador, minutos);
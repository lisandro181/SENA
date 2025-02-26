function calcularCostoTotal(tipoLavadora, cantidad, horas) {
    let costoBase = tipoLavadora === 1 ? 4000 : 3000;
    let total = cantidad * horas * costoBase;

    if (cantidad > 3) {
        total *= 0.97; 
    }

    return total;
}

function mostrarMensaje(tipoLavadora, cantidad, horas, total) {
    console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${total}.`);
}

let tipoLavadora = 1;
let cantidad = 4;
let horas = 5;

let total = calcularCostoTotal(tipoLavadora, cantidad, horas);

mostrarMensaje(tipoLavadora, cantidad, horas, total);
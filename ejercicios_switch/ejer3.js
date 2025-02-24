let tipoLavadora = 1;
let cantidad = 4;
let horas = 5;
let costoBase;
let total;

switch (tipoLavadora) {
    case 1:
        costoBase = 4000;
        break;
    case 2:
        costoBase = 3000;
        break;
    default:
        console.log("Tipo de lavadora no válido.");
        break;
}


total = cantidad * horas * costoBase;

switch (true) {
    case cantidad > 3:
        total *= 0.97; 
        break;
    default:
        break;
}

console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${total}.`);
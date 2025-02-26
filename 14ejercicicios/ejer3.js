let tipoLavadora = 1; 
let cantidad = 4;
let horas = 5;
let costoBase = tipoLavadora === 1 ? 4000 : 3000;
let total = cantidad * horas * costoBase;

if (cantidad > 3) {
    total *= 0.97; 
}

console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${total}.`);
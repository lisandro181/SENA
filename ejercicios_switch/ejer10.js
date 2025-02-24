let copias = 600;
let precioPorCopia;
let total;

switch (true) {
    case (copias < 500):
        precioPorCopia = 120;
        break;
    case (copias < 750):
        precioPorCopia = 100;
        break;
    case (copias < 1000):
        precioPorCopia = 80;
        break;
    default:
        precioPorCopia = 50;
        break;
}

total = copias * precioPorCopia;
console.log(`Precio por copia: $${precioPorCopia}. Total: $${total}.`);
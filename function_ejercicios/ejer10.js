function calcularPrecioYTotal(copias) {
    let precioPorCopia;

    if (copias < 500) {
        precioPorCopia = 120;
    } else if (copias < 750) {
        precioPorCopia = 100;
    } else if (copias < 1000) {
        precioPorCopia = 80;
    } else {
        precioPorCopia = 50;
    }

    let total = copias * precioPorCopia;

    return { precioPorCopia, total }; 
}

function mostrarMensaje(copias) {

    let resultado = calcularPrecioYTotal(copias);

    console.log(`Precio por copia: $${resultado.precioPorCopia}. Total: $${resultado.total}.`);
}

let copias = 600;

mostrarMensaje(copias);
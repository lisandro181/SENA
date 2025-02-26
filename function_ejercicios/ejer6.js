function encontrarMayor(num1, num2, num3) {
    return Math.max(num1, num2, num3); 
}

function mostrarMensaje(mayor) {
    console.log(`El número mayor es ${mayor}.`);
}

let num1 = 5;
let num2 = 10;
let num3 = 7;

let mayor = encontrarMayor(num1, num2, num3);

mostrarMensaje(mayor);
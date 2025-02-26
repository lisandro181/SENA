function calcularSalario(horas) {
    if (horas <= 10) {
        return horas * 30000;
    } else {
        return horas * 33000;
    }
}

function mostrarMensaje(nombre, horas, salario) {
    console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
}

// Datos de entrada
let nombre = "Lisandro";
let horas = 15;

let salario = calcularSalario(horas);

mostrarMensaje(nombre, horas, salario);
let nombre;
let horas;
let salarioTotal;

while (true) {
    nombre = prompt("Ingrese el nombre del empleado:");
    horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));

    if (horas >= 0) {
        break; 
    } else {
        console.log("Por favor, ingrese un número de horas válido (mayor o igual a 0).");
    }
}

if (horas >= 1 && horas <= 10) {
    salarioTotal = horas * 30000;
} else if (horas > 10) {
    salarioTotal = horas * 33000;
} else {
    salarioTotal = 0;

console.log(`El salario de ${nombre} por trabajar ${horas} horas es: $${salarioTotal}`);
}

let nombre = "Lisandro";
let horas = 18; 
let salarioTotal;

switch (true) {
    case (horas >= 1 && horas <= 10):
        salarioTotal = horas * 30000;
        break;
    case (horas > 10):
        salarioTotal = horas * 33000;
        break;
    default:
        salarioTotal = 0;
        break;
}

console.log(`El salario de ${nombre} por trabajar ${horas} horas es: $${salarioTotal}`);
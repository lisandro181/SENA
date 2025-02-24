let fisica = 7;
let quimica = 8;
let biologia = 6;
let matematicas = 9;
let informatica = 8;

let suma = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (suma / 50) * 100;
let calificacion;

while (true) {
    if (porcentaje <= 59.9) {
        calificacion = "Mala";
        break;
    } else if (porcentaje <= 80) {
        calificacion = "Buena";
        break;
    } else {
        calificacion = "Excelente";
        break;
    }
}

console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
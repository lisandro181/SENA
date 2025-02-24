let genero = "femenino";
let edad = 35;
let ayuda;

switch (true) {
    case (genero === "femenino" && edad > 50):
        ayuda = 120000;
        break;
    case (genero === "femenino" && edad >= 30 && edad <= 50):
        ayuda = 100000;
        break;
    case (genero === "femenino"):
        ayuda = 0;
        break;
    default:
        ayuda = 40000;
        break;
}

console.log(`El valor de ayuda mensual es: $${ayuda}.`);
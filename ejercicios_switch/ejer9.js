let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

switch (true) {
    case (angulo1 + angulo2 + angulo3 === 180):
        console.log("El triángulo es válido.");
        break;
    default:
        console.log("El triángulo no es válido.");
        break;
}
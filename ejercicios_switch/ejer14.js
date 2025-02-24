let tamaño = "grande";
let ingredientes = ["tocineta", "queso"];
let costoBase, costoIngredientes = 0;

switch (tamaño) {
    case "pequeño":
        costoBase = 6000;
        break;
    default:
        costoBase = 12000;
        break;
}

for (let ingrediente of ingredientes) {
    switch (ingrediente) {
        case "tocineta":
            costoIngredientes += 3000;
            break;
        case "pavo":
            costoIngredientes += 3000;
            break;
        case "queso":
            costoIngredientes += 2500;
            break;
    }
}

let total = costoBase + costoIngredientes;
console.log(`Costo total del sándwich: $${total}.`);

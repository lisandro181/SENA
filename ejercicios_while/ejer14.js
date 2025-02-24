let tamaño = "grande";
let ingredientes = [];
let costoBase, costoIngredientes = 0;

switch (tamaño) {
    case "pequeño":
        costoBase = 6000;
        break;
    default:
        costoBase = 12000;
        break;
}

let agregarIngrediente = true;
while (agregarIngrediente) {
    let ingrediente = prompt("Ingrese un ingrediente (tocineta, pavo, queso) o escriba 'parar' para terminar: ");
    
    if (ingrediente.toLowerCase() === "parar") {
        agregarIngrediente = false;
    } else {
        ingredientes.push(ingrediente);
    }
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

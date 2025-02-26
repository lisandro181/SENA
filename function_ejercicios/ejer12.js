function verificarDefectuoso(modelo) {

    const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

    if (modelosDefectuosos.includes(modelo)) {
        return "Su automóvil está defectuoso, llevar a garantía.";
    } else {
        return "Su automóvil no está defectuoso.";
    }
}

function mostrarMensaje(modelo) {

    let mensaje = verificarDefectuoso(modelo);

    console.log(mensaje);
}

let modelo = 195;

mostrarMensaje(modelo);
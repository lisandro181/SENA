let modelo = 195;

switch (true) {
    case [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780].includes(modelo):
        console.log("Su automóvil está defectuoso, llevar a garantía.");
        break;
    default:
        console.log("Su automóvil no está defectuoso.");
        break;
}
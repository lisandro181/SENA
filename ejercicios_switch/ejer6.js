let num1 = 5;
let num2 = 10;
let num3 = 7;
let mayor = num1; 

switch (true) {
    case num2 > mayor:
        mayor = num2;
        break;
    case num3 > mayor:
        mayor = num3;
        break;
}

console.log(`El número mayor es ${mayor}.`);
let num1 = 5;
let num2 = 10;
let num3 = 7;
let mayor = num1; 


let i = 1;
while (i <= 2) {
    if (i === 1 && num2 > mayor) {
        mayor = num2;
    } else if (i === 2 && num3 > mayor) {
        mayor = num3;
    }
    i++;
}

console.log(`El número mayor es ${mayor}.`);
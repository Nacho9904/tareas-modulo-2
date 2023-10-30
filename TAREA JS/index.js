//Suma 3+5//
let Suma = 3 + 5

console.log ('El resultado de la suma es:', Suma)


const nombreUsuario = prompt("¿Cuál es tu nombre?");


console.log("Hola " , nombreUsuario);


let num1 = parseInt(prompt("¿Cuál es el primer número?"));


let num2 = parseInt(prompt("¿Cuál es el primer número?"));

let Suma2 = num1 + num2
console.log("La suma es: ", Suma2);




const n1 = prompt("Introduce el primer número: ");
const n2 = prompt("Introduce el segundo número: ");


let mayorN = n1;


if (n2 > mayorN) {
  mayorN = n2;
}


console.log("El número mayor es: " , mayorN);


//hay que hacer lo mismo que arriba solo que con 3 numeros//


const n3 = parseInt(prompt("Introduce el primer número para compararlo con los siguientes 2: "));
const n4 = parseInt(prompt("Introduce el segundo número para compararlo con el anterior y con el proximo: "));
const n5 = parseInt(prompt("Introduce el tercer número para compararlo con los 2 anteriores: "));


let mayorNum = n3;


if (n4 > mayorNum) {
  mayorNum = n4;
}
if (n5 > mayorNum) {
  mayorNum = n3;
}


console.log("El número mayor es: ", mayorNum);


const numero = prompt("Introduce un número: ");


if (numero % 2 === 0) {
 
  console.log("El número es divisible por 2");
} else {
  
  console.log("El número no es divisible por 2");
}
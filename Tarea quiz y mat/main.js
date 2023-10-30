let num1 = parseInt(prompt('¿Cuál es el primer número?'));
let num2 = parseInt(prompt('¿Cuál es el segundo número?'));
let num3 = parseInt(prompt('¿Cuál es el último número?'))


let menor = num1;
if (num2 < menor) {
  menor = num2;
}
if (num3 < menor) {
  menor = num3;
}


let mayor = num1;
if (num2 > mayor) {
  mayor = num2;
}
if (num3 > mayor) {
  mayor = num3;
}
let raiz = Math.sqrt(num2)

console.log("El menor número es: " + menor);
console.log("El mayor número es: " + mayor);
console.log('La raiz cuadrada del segundo número es:' + raiz)


let nombreCompleto = prompt('Ingrese su nombre completo:')

console.log (nombreCompleto.split(8))
console.log (nombreCompleto.charAt(6).toUpperCase(0,1))
console.log (nombreCompleto.charAt(7).toUpperCase(7))
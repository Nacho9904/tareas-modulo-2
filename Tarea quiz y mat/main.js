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

let nombreYapellido =nombreCompleto.split(' ')

let nombre = nombreYapellido  [ 0 ]
let apellido = nombreYapellido  [ 1 ]

nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)


console.log (nombreYapellido)
console.log (nombre, apellido)
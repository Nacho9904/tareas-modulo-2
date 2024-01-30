/* Ejercicio 1 */

/* let meses = new Array( 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')

console.log(meses) */



/* Ejercicio 2 */

/* 
function gestionarCiudades() {
    var ciudades = [];
  
    while (true) {
      var ciudad = prompt("Ingrese el nombre de una ciudad:");
  
      if (ciudad === null) {
      
        alert("Ciudades ingresadas: " + ciudades);
        break;
      } else if (ciudad.trim() !== "") {
        
        ciudades.push(ciudad);
      }
    }
  
   
    console.log("Longitud del arreglo: " + ciudades.length);
  
   
    document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
    document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
    document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");
  
    ciudades[1] = "Barcelona";
    ciudades.push("París");
  
    console.log("Elemento en la segunda posición: " + ciudades[1]);
  
   

    console.log("Arreglo actualizado: " + ciudades);
  }
 
  gestionarCiudades(); */



/*   Ejercicio 3 */


/* function simularLanzamientos() {
    var conteoSumas = new Array(11).fill(0); 
  
    for (var i = 0; i < 50; i++) {
      var dado1 = Math.floor(Math.random() * 6) + 1;
      var dado2 = Math.floor(Math.random() * 6) + 1;
  
      var suma = dado1 + dado2;
  
      conteoSumas[suma - 2]++;
    }
  

    console.log("Número de apariciones de cada suma:");
    for (var j = 2; j <= 12; j++) {
      console.log("Suma " + j + ": " + conteoSumas[j - 2]);
    }
  }
 
  simularLanzamientos();

 */



/*   EJERCICIO 4 */
/* 
function parOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }

  var numeroEvaluado = Number(prompt('Elija un numero para determinar si es par o impar'))
  var resultado = parOImpar(numeroEvaluado);
  console.log(resultado) */



/* Ejercicio 5 */

/* 
function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
      console.log("La cadena está formada solo por minúsculas.");
    } else {
      console.log("La cadena es una mezcla de mayúsculas y minúsculas.");
    }
  }
  
let hola1 = 'HOLA'
let hola2 = 'hola'
let hola3 = 'HoLa'
  
  analizarCadena(hola1);
  analizarCadena(hola2);
  analizarCadena(hola3);
 */




/*   Ejercicio 6 */

/* function calcularPerimetroRectangulo(lado1, lado2) {
    return 2 * (lado1 + lado2);
  }
  

  var lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del rectángulo:"));
  var lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del rectángulo:"));
  
  
  if (!isNaN(lado1) && !isNaN(lado2) && lado1 > 0 && lado2 > 0) {
    
    var perimetro = calcularPerimetroRectangulo(lado1, lado2);
  
   
    console.log("El perímetro del rectángulo es: " + perimetro);
  } else {
    console.log("Valores ingresados no válidos. Por favor, ingrese números positivos.");
  }
 */



/*   Ejercicio 7 */

/* 
function mostrarTablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");
  
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  
  // Solicitar al usuario ingresar un número
  var numeroIngresado = parseFloat(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
  
  // Verificar si se ingresó un número válido
  if (!isNaN(numeroIngresado)) {
    // Llamar a la función para mostrar la tabla de multiplicar
    mostrarTablaMultiplicar(numeroIngresado);
  } else {
    console.log("Valor ingresado no válido. Por favor, ingrese un número.");
  } */

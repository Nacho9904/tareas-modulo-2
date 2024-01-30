/* Ejercicio 1 */
/*  let edad = prompt('Ingrese su edad')


 if (edad<18) {
    alert('No puedes conducir')
 } else {
    alert('si puedes conducir')
 }
 
/*  Ejercicio 2 */

/* let nota = prompt ('Ingrese una nota en forma de numero')


if (nota >= 0 && nota <= 2) {
  alert('Muy deficiente')
  
}else if (nota >= 3 && nota <= 4) {
  alert('Insuficiente')
}else if (nota >= 5 && nota <= 6) {
  alert('Suficiente')
}else if (nota == 7) {
  alert('Bien')
}else if (nota >= 8 && nota <= 9) {
  alert('Notable')

}else if (nota == 10) {
  alert('sobresaliente')
} */
  
/*  Ejercicio 3 */

/* let listado =  [ ]
let lista
do {
    lista = prompt('Ingrese una palabra para la lista')
    listado.push(lista)
}while(lista)

console.log (listado) */


/* ejercicio 4 */
/* var sumaTotal = 0;

while (true) {
  
  var input = prompt("Ingrese un número:");
  if (input === null) {
    alert("Suma total de los números introducidos: " + sumaTotal);
    break;
  } else {
    var numero = parseFloat(input);
    if (!isNaN(numero)) {
      sumaTotal += numero;
    } else {
      alert("Por favor, ingrese un número válido.");
    }
  }
}
 */



/* ejercicio 5 */


/* function calcularLetraDNI() {
  while (true) {
   
    var input = prompt("Ingrese el número de DNI (de 0 a 99999999):");

    
    if (input === null) {
      alert("Gracias por usar la calculadora de letra de DNI.");
      break;
    }

   
    var numeroDNI = parseInt(input);

   
    if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
      
      var resto = numeroDNI % 23;

   
      var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    
      var letraDNI = letras[resto];

      alert("La letra de DNI correspondiente al número " + numeroDNI + " es: " + letraDNI);
    } else {
      alert("Por favor, ingrese un número de DNI válido.");
    }
  }
}

calcularLetraDNI();
 */

/* Ejercicio 6 */
/* 
function imprimirPiramide() {
  for (var i = 1; i <= 30; i++) {
    var linea = '';
    
    for (var j = 1; j <= i; j++) {
      linea += i;
    }

    
    document.write();
  }
}


imprimirPiramide(); */




/* Ejercicio 8 */



/* ejercicio 9 */

 
/* function escribirNumeros() {
  for (var i = 1; i <= 500; i++) {
    var resultado = i;

    // Verificar si es múltiplo de 4 y/o 9
    if (i % 4 == 0) {
      resultado += " (Múltiplo de 4)";
    }
    else if (i % 9 == 0) {
      resultado += " (Múltiplo de 9)";
    }

    // Imprimir el resultado
    console.log(resultado);

    // Mostrar una línea horizontal después de cada 5 líneas
    if (i % 5 == 0) {
      console.log("----------------------------------------------------------------");
    }
  }
}
escribirNumeros(); */ 


/* Ejercicio 11 */

/* function encontrarPersonaMayor() {
  var edades = [];
  var nombres = [];

  
  for (var i = 1; i <= 3; i++) {
    var edad = prompt("Ingrese la edad de la persona " + i + ":");
    var nombre = prompt("Ingrese el nombre de la persona " + i + ":");


    edad = parseInt(edad);


    if (!isNaN(edad)) {
      edades.push(edad);
      nombres.push(nombre);
    } else {
      alert("Por favor, ingrese una edad válida.");
      
      i--;
    }
  }


  var indiceMayor = 0;
  for (var j = 1; j < edades.length; j++) {
    if (edades[j] > edades[indiceMayor]) {
      indiceMayor = j;
    }
  }

  
  alert("La persona mayor es: " + nombres[indiceMayor]);
}


encontrarPersonaMayor(); */



/* ejercicio 12 */

/* let ruleta = Math.random(1-99)


alert(ruleta) */


/* ejercicio 13 */

/* let frase = prompt('Ingrese una frase corta')


frase = frase.toUpperCase()

console.log (frase)
 */

/* ejercicio 14 */

/* let texto = prompt("Introduce un texto: ");


let textoConGuiones = "";


for (let i = 0; i < texto.length; i++) {
  
  textoConGuiones += texto[i];

  if (i < texto.length - 1) {
    textoConGuiones += "-";
  }
}

console.log(textoConGuiones);
   */



/* ejercicio 15 */
/* 
function contarVocales() {

  var texto = prompt("Ingrese un texto:");


  if (texto !== null) {
   
    texto = texto.toLowerCase();


    var contadorVocales = 0;


    for (var i = 0; i < texto.length; i++) {
      var caracter = texto.charAt(i);

      if ("aeiou".indexOf(caracter) !== -1) {
        contadorVocales++;
      }
    }


    alert("El número de vocales en el texto es: " + contadorVocales);
  } else {
    alert("Operación cancelada. No se ingresó ningún texto.");
  }
}


contarVocales(); */


/* Ejercicio 16 */

/* function textoAlReves() {
  var cadena = prompt("Ingrese una cadena de texto:");


  if (cadena !== null) {
  
    var cadenaAlReves = cadena.split('').reverse().join('');


    alert("La cadena al revés es: " + cadenaAlReves);
  } else {

    alert("Operación cancelada. No se ingresó ninguna cadena de texto.");
  }
}


textoAlReves(); */




/* Ejercicio 17 */
/* function primeraVocal() {
 
  var texto = prompt("Ingrese un texto:");

 
  if (texto !== null) {
 
    texto = texto.toLowerCase();


    var posicion = -1;
    for (var i = 0; i < texto.length; i++) {
      var caracter = texto.charAt(i);

      if ("aeiou".indexOf(caracter) !== -1) {
        posicion = i + 1; 
        break;
      }
    }

   
    if (posicion !== -1) {
      alert("La posición de la primera vocal es: " + posicion);
    } else {
      alert("No se encontraron vocales en el texto.");
    }
  } else {
  
    alert("Operación cancelada. No se ingresó ningún texto.");
  }
}


primeraVocal(); */
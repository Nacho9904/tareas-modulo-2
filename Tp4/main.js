/* Ejericicio 1 */
/* 
var auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
  
 
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log("El auto está ahora encendido.");
      } else {
        console.log("El auto ya está encendido.");
      }
    },
  
   
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log("El auto está ahora apagado.");
      } else {
        console.log("El auto ya está apagado.");
      }
    }
  };
  
  
  auto.encender(); 
  auto.apagar();   
  auto.encender();  */


/*   Ejercicio 2 */

/* var cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log("Se ingresaron $" + cantidad + " a la cuenta.");
      } else {
        console.log("Por favor, ingrese una cantidad válida.");
      }
    },
  
    extraer: function(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log("Se retiraron $" + cantidad + " de la cuenta.");
      } else {
        console.log("Fondos insuficientes o cantidad inválida.");
      }
    },
  
    informar: function() {
      console.log("Información de la cuenta:");
      console.log("Titular: " + this.titular);
      console.log("Saldo actual: $" + this.saldo);
    }
  }; */
  

/*   Ejercicio 3 */
/* 


 /*  class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
 
    modificarDimensiones(nuevoAlto, nuevoAncho) {
      this.alto = nuevoAlto;
      this.ancho = nuevoAncho;
      console.log("Dimensiones modificadas: Alto =", this.alto, ", Ancho =", this.ancho);
    }
  
    mostrarPropiedades() {
      console.log("Propiedades del rectángulo - Alto:", this.alto, ", Ancho:", this.ancho);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  function obtenerEntradaUsuario(mensaje) {
    return parseFloat(prompt(mensaje));
  }
 
  const altoUsuario = obtenerEntradaUsuario("Ingrese el alto del rectángulo:");
  const anchoUsuario = obtenerEntradaUsuario("Ingrese el ancho del rectángulo:");
  
  const miRectangulo = new Rectangulo(altoUsuario, anchoUsuario);
  
  miRectangulo.mostrarPropiedades();
  console.log("Perímetro:", miRectangulo.calcularPerimetro());
  console.log("Área:", miRectangulo.calcularArea());
  
  const nuevoAltoUsuario = obtenerEntradaUsuario("Ingrese el nuevo alto del rectángulo:");
  const nuevoAnchoUsuario = obtenerEntradaUsuario("Ingrese el nuevo ancho del rectángulo:");
  
  miRectangulo.modificarDimensiones(nuevoAltoUsuario, nuevoAnchoUsuario);
  
  miRectangulo.mostrarPropiedades();
  console.log("Nuevo perímetro:", miRectangulo.calcularPerimetro());
  console.log("Nuevo área:", miRectangulo.calcularArea());
 */


  /* Ejercicio 4 */

/* 
  class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log(`Código: ${this.codigo}`);
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Precio: ${this.precio}`);
    }
  }

  const productos = [
    new Producto("123456789", "Televisión", 1000),
    new Producto("987654321", "Ordenador", 2000),
    new Producto("012345678", "Teléfono", 500),
  ];


  productos.forEach((producto) => {
    producto.imprimeDatos();
  });

 */



  







/* Ejercicio 5 */
'no funciona no se porque '
/* 
  class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, anoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anoNacimiento = anoNacimiento;
    }
  
    mostrarGeneracion() {
      const anoActual = new Date().getFullYear();
     const generacion = (anoActual - this.anoNacimiento) / 10;
  
      let mensaje, rasgo;
      switch (generacion) {
        case 1:
          rasgo = "Nacieron en la década de los 2000. Son nativos digitales y están completamente conectados a la tecnología.";
          break;
        case 2:
          rasgo = "Nacieron en la década de los 1990. Son la primera generación que creció con Internet y las redes sociales.";
          break;
        case 3:
          rasgo = "Nacieron en la década de los 1980. Son la generación X, que se caracteriza por su individualismo y su rechazo a las normas.";
          break;
        case 4:
          rasgo = "Nacieron en la década de los 1970. Son la generación Y, que se caracteriza por su optimismo y su espíritu emprendedor.";
          break;
        case 5:
          rasgo = "Nacieron en la década de los 1960. Son la generación del baby boom, que se caracteriza por su optimismo y su confianza en el futuro.";
          break;
        default:
          rasgo = "No se puede determinar la generación.";
          break;
      }
  
      mensaje = `La persona pertenece a la generación ${generacion}, que se caracteriza por ${rasgo}`;
      console.log(mensaje); 
    }
  }
  

  const persona = new Persona(
    "Juan Pérez",
    25,
    "48906120",
    "H",
    75,
    1.80,
    1999
  );

   */

/*   Ejercicio 6 */

'no lo pude hacer'






/* Ejercicio 7 */
/* 
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  equals(otro) {
    return this.nombre === otro.nombre;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.contactos = new Array(tamanio);
    this.contador = 0;
  }

  anadirContacto(contacto) {
    if (this.contador === this.contactos.length) {
      console.log("La agenda está llena");
      return false;
    }

    this.contactos[this.contador] = contacto;
    this.contador++;
    return true;
  }

  existeContacto(contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i] !== null && this.contactos[i].equals(contacto)) {
        return true;
      }
    }
    return false;
  }

  listarContactos() {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i] !== null) {
        console.log(`Nombre: ${this.contactos[i].nombre}, Teléfono: ${this.contactos[i].telefono}`);
      }
    }
  }

  buscarContacto(nombre) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i] !== null && this.contactos[i].nombre === nombre) {
        console.log(`Nombre: ${this.contactos[i].nombre}, Teléfono: ${this.contactos[i].telefono}`);
        return;
      }
    }
    console.log("El contacto no existe");
    return null;
  }

  eliminarContacto(contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i] !== null && this.contactos[i].equals(contacto)) {
        this.contactos[i] = null;
        return true;
      }
    }
    return false;
  }

  agendaLlena() {
    return this.contador === this.contactos.length;
  }

  huecosLibres() {
    return this.contactos.length - this.contador;
  }
}

function menu() {
  console.log("Agenda telefónica");
  console.log("1. Añadir contacto");
  console.log("2. Buscar contacto");
  console.log("3. Listar contactos");
  console.log("4. Eliminar contacto");
  console.log("5. Salir");

  let accion = parseInt(prompt("Elige una opción: "));

  switch (accion) {
    case 1:
      añadirContacto();
      break;
    case 2:
      buscarContacto();
      break;
    case 3:
      listarContactos();
      break;
    case 4:
      eliminarContacto();
      break;
    case 5:
      exit();
      break;
    default:
      console.log("Opción no válida");
      break;
  }
}

function añadirContacto() {
  let nombre = prompt("Nombre: ");
  let telefono = prompt("Teléfono: ");

  let contacto = new Contacto(nombre, telefono);

  if (agenda.anadirContacto(contacto)) {
    console.log("Contacto añadido correctamente");
  } else {
    console.log("La agenda está llena");
  }
}

function buscarContacto() {
  let nombre = prompt("Nombre: ");

  let contacto = new Contacto(nombre);

  if (contacto !== null && agenda.buscarContacto(contacto)) {
    console.log("Contacto encontrado");
  } else {
    console.log("El contacto no existe");
  }
}


const agenda = new Agenda();

/* añadir contacto */
/* const contacto = new Contacto("Juan Pérez", "666 123 456");
agenda.anadirContacto(contacto);

/* buscarlo (Usar juan perez con acento en el prompt) */
/* const nombre = prompt("Nombre: ");
const contactoEncontrado = agenda.buscarContacto(nombre);

if (contactoEncontrado !== null) {
  console.log("Contacto encontrado");
} else {
  console.log("El contacto no existe");
}
 */

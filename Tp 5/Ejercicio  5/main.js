/* ejercicio 5 */

var cronometro = {
  horas: 0,
  minutos: 0,
  segundos: 0,
  pausado: true,
};

function actualizarCronometro() {
  if (!cronometro.pausado) {
    cronometro.segundos++;
    if (cronometro.segundos >= 60) {
      cronometro.minutos++;
      cronometro.segundos = 0;
    }
    if (cronometro.minutos >= 60) {
      cronometro.horas++;
      cronometro.minutos = 0;
    }
  }

  // Selección por etiquetas
  var tiempoElement = document.getElementById("tiempo");
  tiempoElement.textContent = cronometro.horas.toString().padStart(2, "0") + ":" +
                              cronometro.minutos.toString().padStart(2, "0") + ":" +
                              cronometro.segundos.toString().padStart(2, "0");
}



document.querySelector("#iniciar").addEventListener("click", function() {
  cronometro.pausado = false;
  actualizarCronometro();
});

document.querySelector("#reset").addEventListener("click", function() {
  cronometro.horas = 0;
  cronometro.minutos = 0;
  cronometro.segundos = 0;
  cronometro.pausado = false;
  actualizarCronometro();
});


document.querySelector("#pausar").addEventListener("click", function() {
  cronometro.pausado = !cronometro.pausado;
});

setInterval(actualizarCronometro, 1000);

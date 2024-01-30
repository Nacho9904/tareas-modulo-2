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
  
    var tiempoElement = document.getElementById("tiempo");
    tiempoElement.textContent = cronometro.horas.toString().padStart(2, "0") + ":" +
                                cronometro.minutos.toString().padStart(2, "0") + ":" +
                                cronometro.segundos.toString().padStart(2, "0");
  }

  document.querySelector("#iniciar").addEventListener("click", function() {
    
    var tiempoInicio = parseInt(document.querySelector("#tiempoInicio").value);
  
    
    cronometro.segundos = tiempoInicio;
    cronometro.minutos = Math.floor(tiempoInicio / 60);
    cronometro.horas = Math.floor(tiempoInicio / (60 * 60));
  
    cronometro.pausado = false;
  
    setInterval(actualizarCronometro, 1000);
  });
  
  document.querySelector("#pausar").addEventListener("click", function() {
    cronometro.pausado = true;
  });
  
  document.querySelector("#reset").addEventListener("click", function() {
    cronometro.horas = 0;
    cronometro.minutos = 0;
    cronometro.segundos = 0;
    cronometro.pausado = true;
  
    actualizarCronometro();
  });
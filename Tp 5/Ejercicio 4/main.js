function actualizarReloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
    
    $("#fecha").text(fecha.toLocaleDateString());
    $("#hora").text(hora + ":" + minutos + ":" + segundos)
  }

  setInterval(actualizarReloj, 1000);
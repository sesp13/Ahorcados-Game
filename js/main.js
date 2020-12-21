$(document).ready(function () {
  let jugador = JSON.parse($("#jugador").val());
  let palabraSecreta = jugador.frase;
  palabraSecreta = palabraSecreta.toLowerCase();
  crearLetrasRestantes();
  encenderLetrasRestantes();
  generarPalabraSecreta(palabraSecreta);
});

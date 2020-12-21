$(document).ready(function () {
  let jugador = JSON.parse($("#jugador").val());
  let palabraSecreta = jugador.frase;
  palabraSecreta = palabraSecreta.toLowerCase();
  localStorage.setItem('jugador', JSON.stringify(jugador));
  crearLetrasRestantes();
  encenderLetrasRestantes();
  generarPalabraSecreta(palabraSecreta);
});

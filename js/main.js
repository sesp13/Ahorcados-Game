$(document).ready(function(){
    let palabraSecreta = "Margarita le va a dar una moto a sebas";
    palabraSecreta = palabraSecreta.toLowerCase();
    crearLetrasRestantes();
    encenderLetrasRestantes();
    generarPalabraSecreta(palabraSecreta);
});
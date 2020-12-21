<?php include_once 'partials/header.php';
include_once 'helpers/setGame.php';
if (isset($_GET['index'])) {
    $jugador = $espicificaciones[$_GET['index']];
    $jugadorJson = json_encode($jugador, JSON_UNESCAPED_UNICODE);
    echo "<input type='hidden' id='jugador' value='$jugadorJson'>";
} else {
    header("Location:index.php");
}
?>
<!-- Parte de pistas -->
<section>
    <h2>Bienvenido!</h2>
    <p class="intro-text">Tienes hasta 6 fallos para poder adivinar a la frase, buena suerte! :D</p>
</section>
<hr>
<!-- Fin de pistas -->

<!-- Parte principal -->
<main class="row">
    <div class="col-md-3" id="ahorcado-div">
        <img src="assets/img/step-0.png" alt="Imagen de ahorcado" id="ahorcado-img">
    </div>
    <!-- abecedario -->
    <div class="col-md-9" id="alphabet">
        <h2>Letras Disponibles</h2>
        <div id="letrasRestantes">
        </div>
        <hr>
        <h2>Letras usadas</h2>
        <div id="letrasUsadas">
        </div>
        <hr>
        <!-- frase armada -->
        <h2>Has adivinado ...</h2>
        <div id="letrasOcultas"></div>
        <!-- Fin frase armada -->
    </div>
    <!-- fin abecedario -->
</main>
<!-- Fin parte principal -->

<a href="index.php">Volver al menú principal</a>

<?php include_once 'partials/footer.php' ?>
<script src="js/game.js"></script>
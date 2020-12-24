<?php include_once 'partials/header.php';
include_once 'helpers/setGame.php';
?>
<p class="intro-text">Bienvenido al ahorcadito! por favor escoge alguno de estas frases disponibles para jugar</p>
<div class="row">
    <?php foreach ($espicificaciones as $index => $jugador) : ?>
        <div class="col-md-4">
            <p class="word-link">
                <a href="game.php?index=<?php echo $index ?>" class="frase" id="frase-<?php echo $index ?>">
                    Frase <?php echo $index + 1 ?>
                </a>
            </p>
        </div>
    <?php endforeach; ?>
</div>
<button class="btn btn-success" onclick="reiniciarFrases()">Reiniciar Frases</button>
<?php include_once 'partials/footer.php' ?>
<script src="js/main.js"></script>
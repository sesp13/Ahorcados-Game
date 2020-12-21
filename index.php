<?php include_once 'partials/header.php';
include_once 'helpers/setGame.php';
?>
<p class="intro-text">Bienvenido al ahorcadito! por favor escoge alguno de estas frases disponibles para jugar</p>

<?php foreach ($espicificaciones as $index => $jugador) : ?>
    <p class="word-link">
        <a href="game.php?index=<?php echo $index ?>">
            Frase <?php echo $index + 1 ?>
        </a>
    </p>
<?php endforeach; ?>
<?php include_once 'partials/footer.php' ?>
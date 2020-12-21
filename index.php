<?php include_once 'partials/header.php' ?>
<h1 class="text-center">El ahorcadito</h1>
<!-- Parte de pistas -->
<section>
    <h2>Pistas</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam natus,
        itaque fugiat vitae commodi labore earum. Illum inventore quia perspiciatis accusantium itaque, iste,
        assumenda totam impedit tempora recusandae expedita tempore!
    </p>
</section>
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


<?php include_once 'partials/footer.php' ?>
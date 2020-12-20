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
    <div class="col-6" id="ahorcado-div">
        <img src="assets/img/step-6.png" alt="Imagen de ahorcado">
    </div>
    <!-- abecedario -->
    <div class="col-6" id="alphabet">
        <h2>Letras Disponibles</h2>
        <div id="letrasRestantes">
        </div>
        <h2>Letras usadas</h2>
        <div id="letrasUsadas">

        </div>
    </div>
    <!-- fin abecedario -->
</main>
<!-- Fin parte principal -->

<!-- Frase armada -->
<section>
    <h2>Has adivinado ...</h2>
    <span>_</span>
</section>
<!-- Frase armada -->

<?php include_once 'partials/footer.php' ?>
function alfabetoArray() {
  return [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "¿",
    "?",
    "!",
    "¡"
  ];
}

function crearLetrasRestantes() {
  let selector = $("#letrasRestantes");
  let alfabeto = alfabetoArray();
  alfabeto.forEach((letra, index) => {
    let plantilla = `
        <span letra="${letra}" index="${index}"class="letra letra-restante" id="restante-${index}">
        ${letra}
        </span>`;
    selector.append(plantilla);
  });
}

function encenderLetrasRestantes() {
  $(".letra-restante").click(function () {
    let elemento = $(this);
    var letra = elemento.attr("letra");
    var index = elemento.attr("index");
    escribirLetraUsada(letra, index);
    revelarLetraSecreta(letra);
    elemento.hide();
  });
}

function escribirLetraUsada(letra, index) {
  let selector = $("#letrasUsadas");
  let plantilla = `
    <span letra="${letra}" class="letra letra-usada" id="restante-${index}">
    ${letra}
    </span>`;
  selector.append(plantilla);
}

function generarPalabraSecreta(frase) {
  let selector = $("#letrasOcultas");
  let fraseArray = frase.split(" ");
  fraseArray.forEach((palabra) => {
    let plantillaPalabra = "<div class='palabra'>";
    palabraArray = palabra.split("");
    palabraArray.forEach((letra) => {
      let plantilla = ``;
      if (comprobarCaracteresEspeciales(letra)) {
        plantilla = `<span class="letra">${letra}</span>`;
      } else {
        plantilla = `
      <span class="letra-oculta letra-oculta-${letra}"> 
      _
      </span>
      `;
      }
      plantillaPalabra += plantilla;
    });
    plantillaPalabra += "</div>";
    selector.append(plantillaPalabra);
  });
}

function comprobarCaracteresEspeciales(letra) {
  let caracteres = [
    ",",
    "!",
    "¡",
    ".",
    ":",
    "(",
    ")",
    "+",
    "-",
    ";",
    "[",
    "]",
    "'",
  ];
  return caracteres.includes(letra);
}

function revelarLetraSecreta(letra) {
  var letras = $(`.letra-oculta-${letra}`);
  if (letras.length > 0) {
    letras.each(function (index) {
      let elemento = $(this);
      elemento.removeClass("letra-oculta");
      elemento.removeClass(`letra-oculta-${letra}`);
      elemento.addClass("letra");
      elemento.text(letra);
      comprobarGanador();
    });
  } else {
    mostrarEquivocacion();
  }
}

function mostrarEquivocacion() {
  let selector = $("#ahorcado-img");
  let fuente = selector.attr("src");

  switch (fuente) {
    case "assets/img/step-0.png":
      selector.attr("src", "assets/img/step-1.png");
      break;
    case "assets/img/step-1.png":
      selector.attr("src", "assets/img/step-2.png");
      break;
    case "assets/img/step-2.png":
      selector.attr("src", "assets/img/step-3.png");
      break;
    case "assets/img/step-3.png":
      selector.attr("src", "assets/img/step-4.png");
      break;
    case "assets/img/step-4.png":
      selector.attr("src", "assets/img/step-5.png");
      break;
    case "assets/img/step-5.png":
      selector.attr("src", "assets/img/step-6.png");
      mostrarPerdida();
      break;
  }
}

function mostrarPerdida() {
  let jugador = JSON.parse(localStorage.getItem("jugador"));
  Swal.fire({
    title: "Oops",
    text: "Has perdido el juego",
    icon: "error",
  }).then(() => {
    alertaFinalJugador();
  });
}

function comprobarGanador() {
  let selector = $(".letra-oculta");
  if (selector.length <= 0) {
    Swal.fire({
      title: "Buen trabajo!",
      text: "Has ganado y adivinaste la palabra",
      icon: "success",
    }).then(() => {
      alertaFinalJugador();
    });
  }
}

function alertaFinalJugador() {
  let jugador = JSON.parse(localStorage.getItem("jugador"));
  let plantillaJugador = `
    <div class="container">
      <ul>
        <li>La persona de la frase era: ${jugador.nombre}</li>
        <li>La frase era: "<span class="font-italic">${jugador.frase}</span>" </li>
      </ul>
    </div>
  `;
  Swal.fire({
    title: "Información final",
    html: plantillaJugador,
  }).then(() => {
    location.href = "index.php";
  });
}

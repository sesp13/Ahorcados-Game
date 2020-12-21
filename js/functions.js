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
    palabraArray = palabra.split("");
    palabraArray.forEach((letra) => {
      let plantilla = `
        <span class="letra-oculta letra-oculta-${letra}"> 
          _
        </span>
      `;
      selector.append(plantilla);
    });
    selector.append("<span class='letra-espacio'></span>");
  });
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

function mostrarPerdida(){
  alert("Has perdido!");
}
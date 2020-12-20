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
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
}

function crearLetrasRestantes() {
  let selector = $("#letrasRestantes");
  let alfabeto = alfabetoArray();
  alfabeto.forEach((letra, index) => {
    let plantilla = `
        <span letra="${letra}" index="${index}"class="letra-restante" id="restante-${index}">
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
    elemento.hide();
  });
}

function escribirLetraUsada(letra, index) {
  let selector = $("#letrasUsadas");
  let plantilla = `
    <span letra="${letra}" class="letra" id="restante-${index}">
    ${letra}
    </span>`;
  selector.append(plantilla);
}

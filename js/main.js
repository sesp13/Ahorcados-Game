let listado = localStorage.getItem("listado-frases");
if (listado != null) {
  listado = JSON.parse(listado);
  listado.forEach((elemento) => {
    $(elemento).hide();
  });
}

$(".frase").click(function (event) {
  event.preventDefault();
  let listado = localStorage.getItem("listado-frases");
  let selector = $(this);
  if (listado == null) {
    listado = ["#" + selector.attr("id")];
    localStorage.setItem("listado-frases", JSON.stringify(listado));
  } else {
    listado = JSON.parse(listado);
    listado.push("#" + selector.attr("id"));
    localStorage.setItem("listado-frases", JSON.stringify(listado));
  }
});

function reiniciarFrases() {
  localStorage.removeItem("listado-frases");
  $(".frase").show("slow");
}

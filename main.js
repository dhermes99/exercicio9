$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
    const novoItem = $(`<li>${enderecoDaNovaImagem}</li>`);

    $(novoItem).appendTo("ul");
    $("#endereco-imagem-nova").val("");
  });

  $("#task-list").on("click", "li", function (e) {
    if (!$(e.target).is("button")) {
      $(this).find("span").toggleClass("line-through");
    }
  });

  $("#task-list").on("click", ".delete-btn", function (e) {
    e.stopPropagation();
    $(this).parent().remove();
  });

  $("#clear-tasks").on("click", function () {
    $("#task-list").empty();
  });
});

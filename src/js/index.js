const botoesCarrossel = document.querySelectorAll(".botao");
const imagensList = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelect();

    selecionaBotao(botao);

    esconderImagemAtiva();

    mostraImagemFundo(indice);
  });
});
function mostraImagemFundo(indice) {
  imagensList[indice].classList.add("ativa");
}

function selecionaBotao(botao) {
  botao.classList.add("select");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelect() {
  const botaoSelect = document.querySelector(".select");
  botaoSelect.classList.remove("select");
}

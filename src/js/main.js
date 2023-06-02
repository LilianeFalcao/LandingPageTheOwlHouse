function nComentario() {
  let li = document.createElement("li");
  let valorPreenchido = document.getElementById("newComentario").value;
  let text = document.createTextNode(valorPreenchido);
  li.appendChild(text);

  if (valorPreenchido === "") {
    alert("Digite um comentário!!");
  } else {
    document.getElementById("comentarios").appendChild(li);
  }

  document.getElementById("newComentario").value = "";
  li.className = "comentario";

  let borrar = document.createElement("p");
  borrar.innerHTML = "Borrar";
  borrar.className = "close";
  li.appendChild(borrar);

  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

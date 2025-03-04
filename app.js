let participantes = [];
let sorteado = [];


function agregarAmigo () {
  let nombre = document.getElementById("amigo").value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  participantes.push(nombre);
  console.log(`Amigo adicionado: ${nombre}`);
  console.log("Lista Amigos: ", participantes);
  document.getElementById("amigo").value = "";
  actualizarLista();
  }

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  participantes.forEach(none=> {
    let li = document.createElement("li");
    li.textContent = none;
    lista.appendChild(li);
  })

  console.log("Lista Amigos: ", participantes);

  }

function sortearAmigo() {
  if (participantes.length < 3) {
    alert("Este espacio debe llenarse con al menos 3 amigos.");
    return;
  }
  if (sorteado.length === participantes.length) {
    alert("Todos los amigos ya han sido sorteados.");
    return;
  }

  let amigoSorteado;
  do {
    let indiceSorteado = Math.floor(Math.random() * participantes.length);
    amigoSorteado = participantes[indiceSorteado];
  } while (sorteado.includes(amigoSorteado));

  sorteado.push(amigoSorteado);
  console.log(`Amigo sorteado: ${amigoSorteado}`);
  console.log("Lista sorteado", sorteado);
  document.getElementById("resultado").innerText = `Amigo sorteado: ${amigoSorteado}`;
  confetti ();
}
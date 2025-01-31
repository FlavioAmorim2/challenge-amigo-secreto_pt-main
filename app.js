//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    if (amigoInput.value.trim() === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Cria um novo item na lista
    const listItem = document.createElement("li");
    listItem.textContent = amigoInput.value; // Define o texto do item como o valor do input

    listaAmigos.appendChild(listItem);

    amigoInput.value = "";
}

function sortearAmigo() {
    const listaItens = document.querySelectorAll("li");

    if (listaItens.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const sorteando = Math.floor(Math.random() * listaItens.length);
    const nomeSorteado = listaItens[sorteando].textContent;

    document.getElementById('resultado').textContent = "Nome Sorteado: " + nomeSorteado;
}



function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const texto = tarefaInput.value.trim();

    if (texto !== "") {
        const lista = document.getElementById('lista');
        const item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
        tarefaInput.value = "";
    }
}

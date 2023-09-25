//Declarar Array pra guardar as informações
const Lista = []

// Configurar os dados para o localstorage
const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];  
const setBanco = (Lista) => localStorage.setItem('todoList', JSON.stringify(Lista));

const limparTarefas = () => {
    const lista = document.getElementById('todoList');
    while(lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('label');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <section>${tarefa}</section>
        <input type="button" value="X" data-indice=${indice}
    `;
    document.getElementById('todoList').appendChild('novoItem')
}
const AtualizarTela = () => {
    limparTarefas();
    const chama = getBanco();
    chama.forEach((item, indice) => item.tarefa, item.status, item.indice);
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;

    if(texto === 'Enter') {
        const chama = getBanco();
        chama.push({'tarefa' : texto, 'status':''});
        setBanco(Lista);
        AtualizarTela();
        evento.target.value = '';
    }
}
document.getElementById('novoItem').addEventListener('keypress', inserirItem);
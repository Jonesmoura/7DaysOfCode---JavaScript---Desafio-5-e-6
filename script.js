let frutas = []
let verduras = []
let doces = []
let itensBasicos = []
let grupos = [
    'frutas',
    'verduras',
    'doces',
    'itensBasicos'
]

let AddlistaSimouNao = document.querySelector('#AddlistaSimouNao')
let dadosEntrada = document.querySelector('.InputsItemNovo')
let nomeItem = document.querySelector('[data-nome]')
let grupo = document.querySelector('#grupo')
let resposta = document.querySelector('#pLista')
let okBtn = document.querySelector('#ok-btn')
let perguntaExclusao = document.querySelector('#PerguntaExclusao')
let dadosExclusao = document.querySelector('[data-exclusao]')
let listaExcluirSouN = document.querySelector('#listaExcluirSouN')
let itemExclusao = document.querySelector('#itemExclusao')
let grupoExclusao = document.querySelector('#grupoExclusao')

//function para criar ul com o array grupos

function imprimirLista(grupoLista, GrupoListaString) {

    let lista = document.createElement('ul')
    lista.innerHTML = GrupoListaString.toUpperCase()
    lista.classList.add('TituloLista')

    for (i = 0; i < grupoLista.length; i++) {

        let itemLista = document.createElement('li')
        itemLista.innerHTML = grupoLista[i]
        itemLista.classList.add('itemLista')
        lista.appendChild(itemLista)
    }

    if (grupoLista.length > 0) {
        resposta.appendChild(lista)
    }

}

function mostrarlista() {

    if (AddlistaSimouNao.value == 'nao') {

        resposta.innerHTML = ''
        dadosEntrada.classList.add('toHide')
        imprimirLista(frutas, 'frutas')
        imprimirLista(verduras, 'verduras')
        imprimirLista(doces, 'doces')
        imprimirLista(itensBasicos, 'itensBasicos')
        resposta.classList.remove('toHide')
        perguntaExclusao.classList.remove('toHide')

    } else {

        dadosEntrada.classList.remove('toHide')
        resposta.classList.add('toHide')
        perguntaExclusao.classList.add('toHide')
        dadosExclusao.classList.add('toHide')

    }
}

function addItem() {
    if (grupo.value == 'frutas') {
        frutas.push(nomeItem.value)
    } else if (grupo.value == 'verduras') {
        verduras.push(nomeItem.value)
    } else if (grupo.value == 'doces') {
        doces.push(nomeItem.value)
    } else {
        itensBasicos.push(nomeItem.value)
    }

}

function mostrarFormExclusao() {

    if (listaExcluirSouN.value == 'sim') {

        dadosExclusao.classList.remove('toHide')

    }
}

function definirGrupo() {

    if (grupoExclusao.value == 'frutas') {
        removerItem(frutas, itemExclusao)
    } else if (grupoExclusao.value == 'verduras') {
        removerItem(verduras, itemExclusao)
    } else if (grupoExclusao.value == 'doces') {
        removerItem(doces, itemExclusao)
    } else {
        removerItem(itensBasicos, itemExclusao)
    }

}

function removerItem(grupoExc, item) {

    if (grupoExc.indexOf(item.value) == -1) {

        alert('Item não encontrado!')

    } else {

        grupoExc.splice(grupoExc.indexOf(item.value), 1)
        alert(`o item ${item.value} foi excluido da lista, responda novamente a primeira pergunta para atualizar a lista.`)

    }

}

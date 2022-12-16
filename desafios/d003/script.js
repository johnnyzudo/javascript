addEventListener('click', clicou)

function clicou() {
    let numero = parseInt(prompt('Digite um número inteiro qualquer'))
    window.alert(`Antes de ${numero}, temos o número ${numero - 1}.
Depois de ${numero}, temos o número ${numero + 1}.`)
}
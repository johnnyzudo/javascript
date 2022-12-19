addEventListener('click', clicou)

// window.confirm(`Antes de mais nada. Quanto está a cotação do dólar agora?`) 
// n1.toLocaleString(pt-br), {style: 'currency', 'currency', 'BRL'}

window.confirm(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function clicou() {
    temperatura = prompt('Quantos R$ você tem na carteira?')
}
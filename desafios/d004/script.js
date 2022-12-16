addEventListener('click', clicou)

function clicou() {
    let produto = prompt('Que produto você está comprando?')
    let preco = prompt(`Quanto custa o(a) ${produto} que você está comprando?`)
    let valor = prompt(`Qual foi o valor que você deu para pagar o ${produto}?`)
    window.alert(`Você comprou o ${produto} que custou R$${preco}.
Deu R$${valor} em dinheiro e vai receber R$${valor - preco} de troco.
Volte sempre!`)
}
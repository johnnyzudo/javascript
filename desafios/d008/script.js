addEventListener('click', clicou)

function clicou() {
    let produto = prompt('Qual é o produto que você está comprando?')
    let preco = prompt(`Qual é o preço do(a) ${produto}?`)

    desconto = preco / 10
    total = preco - desconto

    document.write(`<h2>Calculando desconto de 10% para ${produto}.</h2>
    O preço original era R$${preco}.
    <br>Você acaba de ganhar R$${desconto} de desconto (-10%)!
    <br>No fim, você vai pagar R$${total} no produto ${produto}!`)
}
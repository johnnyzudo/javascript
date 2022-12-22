addEventListener('click', clicou)

function clicou() {
    let precoant = parseInt(prompt('Qual era o preço anterior do produto?'))
    let precoatual = parseInt(prompt('Qual é o preço atual do produto?'))

    document.write(`<h2>Analisando os valores informados</h2>
    O produto custava R$${precoant},00 e agora custa R$${precoatual},00.<br><br>`)

    let mais = (precoatual - precoant) / precoant * 100
    let menos = (precoant - precoatual) / precoatual * 100

    if (precoatual > precoant) {
        document.write(`Hoje o produto está mais caro.
        <br><br>O preço subiu R$${precoatual - precoant},00 em relação ao preço anterior.
        <br><br>Uma variação de ${mais.toFixed(1)}% para cima.`)
    } else {
        document.write(`Hoje o produto está mais barato.
        <br><br>O preço baixou R$${precoant - precoatual},00 em relação ao preço anterior.
        <br><br>Uma variação de ${menos.toFixed(1)}% para baixo.`)
    }
}
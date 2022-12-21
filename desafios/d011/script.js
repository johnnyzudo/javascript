addEventListener('click', clicou)

function clicou() {
    ano = parseInt(prompt('Qual é o ano que você quer verificar?'))
    //let quatro = ano / 4
    //let cem = ano / 100

    document.write(`<h2>Analisando o ano de ${ano}...</h2>`)

    if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
        document.write(`O ano de ${ano} É BISSEXTO \u{2705}`)
    } else {
        document.write(`O ano ${ano} NÃO É BISSEXTO \u{274C}`)
    }
}
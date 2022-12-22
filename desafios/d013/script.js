addEventListener('click', clicou)

function clicou() {
    let nome = prompt('Qual é o nome do aluno?')
    let notaum = parseFloat(prompt(`Primeira nota de ${nome}:`))
    let notadois = parseFloat(prompt(`Segunda nota de ${nome}:`))
    let media = (notaum + notadois) / 2

    document.write(`MÉDIA: ABAIXO DE 3,0 | SITUAÇÃO: REPROVADO.
    <br><br>ENTRE 3,0 E 6,0 | SITUAÇÃO: RECUPERAÇÃO.
    <br><br>ACIMA DE 6,0 | SITUAÇÃO: APROVADO.<br><br>`)

    if (media <= 3) {
        document.write(`Média do aluno ${nome}: ${media}. | Situação: REPROVADO!`)
    } else if (media >= 3 && media <= 6) {
        document.write(`Média do aluno ${nome}: ${media}. | Situação: RECUPERAÇÃO!`)
    } else {
        document.write(`Média do aluno ${nome}: ${media}. | Situação: APROVADO!`)
    }
}
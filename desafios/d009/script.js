addEventListener('click', clicou)

function clicou() {
    let nome = prompt('Qual é o nome do funcionário?')
    let sal = parseFloat(prompt(`Qual é o salário de ${nome}?`))
    let por = parseInt(prompt(`O salário de ${nome} será ajustado em qual porcentagem?`))

    porajus = por * sal / 100
    salajus = sal + porajus

    document.write(`<h2>${nome} recebeu um aumento salarial!</h2>
    <br><br>O salário atual era de R$${sal}.
    <br><br>Com um aumento de ${por}%, o salário irá aumentar ${porajus} no próximo mês.
    <br><br>E a partir daí, ${nome} passará a ganhar ${salajus}!`)
}
addEventListener('click', clicou)

function clicou() {
    let nome = window.prompt('Qual é o seu nome?')
    let idade = window.prompt(`Olá, ${nome}! Quantos anos você tem?`)
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} de idade!`)
}
addEventListener('click', clicou)

function clicou() {
    
    let a = parseInt(prompt('Qual o valor de a?'))
    let b = parseInt(prompt('Qual o valor de b?'))
    let c = parseInt(prompt('Qual o valor de c?'))


    let res = b * b - 4 * a * c

    document.write(`Resolvendo Bhaskara
    A equação atual é ${a}x² + ${b}x + ${c} = 0
    O cálculo realizado será Δ = ${b}² - 4 . ${a} . ${c}
    O valor calculado foi Δ = ${res}`)
}
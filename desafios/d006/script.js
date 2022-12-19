addEventListener('click', clicou)
let temperatura = document.getElementById('graus')

function clicou() {
    temperatura = parseInt(prompt('Por gentileza, digite uma temperatura em °C (Celsius).'))

    document.write(`<h2>A temperatura de ${temperatura}°C corresponde a...</h2>
    ${temperatura + 273}°K (Kelvin)!
    <br><br>${(temperatura * 9 / 5) + 32}°F (Fahrenheit)!`)
}
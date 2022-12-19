addEventListener('click', converter)

let res = document.getElementById('conversor')

function converter() {
    distancia = prompt('Digite a distância em metros (m).')
    document.write(

        `<h1>A distância de ${distancia} metros, corresponde a...</h1>
        ${distancia * 1000} quilômetros (Km).
        <br><br>${distancia * 0.01} hectrômetros (Hm).
        <br><br>${distancia * 10} decâmetros (Dam).
        <br><br>${distancia / 10 } decímetros (dm).
        <br><br>${distancia / 100} centímetros (cm).
        <br><br>${distancia / 1000} milímetros (mm).`)
} 
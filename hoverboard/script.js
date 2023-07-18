//Variables 
const contenedor = document.getElementById('contenedor')
const colores = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const cuadrados = 500

//crea cuadrados y agrega hover y out de mouse
for (let i=0; i < cuadrados; i++){
    const cuadroF = document.createElement('div')
    cuadroF.classList.add('cuadrado')

    cuadroF.addEventListener('mouseover', ()=> ponerColor(cuadroF))
    cuadroF.addEventListener('mouseout', ()=> sacarColor(cuadroF))

    contenedor.appendChild(cuadroF)
}

//pone color a cuadrado
function ponerColor(elemento){
    const color = getRandomColor()
    elemento.style.background=color
    elemento.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

//saca color a cuadrado
function sacarColor(elemento){
    elemento.style.background = '#1d1d1d'
    elemento.style.boxShadow = '0 0 2px #000'

}

//obtiene color aleatorio
function getRandomColor() {
    return colores[Math.floor(Math.random() * colores.length)]
}
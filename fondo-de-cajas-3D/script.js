// Variables HTML
const contenedorHTML = document.getElementById('cajas')
const btnHTML = document.getElementById('btn')

//Agrega clase XXL
btnHTML.addEventListener('click', ()=> contenedorHTML.classList.toggle('xxl'))

//Crea divs, agrega clase caja y los ubica
function crearCaja(){
    for (let i = 0; i < 4; i++){
        for (let j = 0; j  < 4; j++) {
            const cajaDiv = document.createElement('div')
            cajaDiv.classList.add('caja')
            cajaDiv.style.backgroundPosition= `${-j * 125}px ${-i * 125}px`
            contenedorHTML.appendChild(cajaDiv)
            
        }
    }
}

crearCaja()

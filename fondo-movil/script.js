//Variables
const body = document.body
const mover = document.querySelectorAll('.mover')
const izq = document.getElementById('izq')
const der = document.getElementById('der')

let moverActivo = 0

//Si se toca derecha
der.addEventListener('click', () => {
    moverActivo++
  
    if (moverActivo > mover.length - 1) {
      moverActivo = 0
    }
  
    setFondoBody()
    setClaseActivo()
  })

//Si se toca Izquierda
izq.addEventListener('click', () => {
    moverActivo--
  
    if (moverActivo < 0) {
      moverActivo = mover.length - 1
    }
  
    setFondoBody()
    setClaseActivo()
  })

//pone fondo al body
setFondoBody()


//Le asigna la misma imagen del div .mover
function setFondoBody(){
    body.style.backgroundImage= mover[moverActivo].style.backgroundImage
}

//quita y da la clase .activo
function setClaseActivo(){
    mover.forEach((movimiento) => movimiento.classList.remove('activo'))

    mover[moverActivo].classList.add('activo')
}
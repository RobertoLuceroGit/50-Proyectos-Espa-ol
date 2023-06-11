//se definen las variables segun html
const progreso = document.getElementById('progreso')
const anterior = document.getElementById('atras')
const siguiente = document.getElementById('siguiente')
const circulos = document.querySelectorAll('.circulo')


//posicion inicial de progress bar
let posicionActual = 1

//efecto de progreso - invoca a actualizar
siguiente.addEventListener('click', ()=>{
    posicionActual++
    //if para evitar desfase
    if(posicionActual > circulos.length){
        posicionActual=circulos.length
    }
    //invoca funcion
    actualizar()
})

//efecto de retroceso - invoca actualizar
anterior.addEventListener('click',()=>{
    posicionActual--
    //if para evitar desfase
    if(posicionActual<1){
        posicionActual=1
    }
    //invoca actualizar
    actualizar()
})

//funcion actualizar 
function actualizar(){
    //for each para agregar o quitar clase activo de html
    circulos.forEach((circulo, index)=>{
        if(index < posicionActual){
            circulo.classList.add('activo')
        }
        else{
            circulo.classList.remove('activo')
        }
    })

    //variable de todos las clases .activo
    const activos = document.querySelectorAll('.activo')
    
    //efecto de barra segun porcentaje
    progreso.style.width = (activos.length - 1)/(circulos.length - 1) * 100+'%'

    //control de botones cuando llega a algun extremo
    if (posicionActual === 1){
        anterior.disabled = true
    }
    else if (posicionActual === circulos.length){
        siguiente.disabled = true
    }
    else{
        anterior.disabled = false
        siguiente.disabled = false
    }
}


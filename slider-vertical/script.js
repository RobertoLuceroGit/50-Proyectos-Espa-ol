//Variables de html
const slideContenedor = document.querySelector('.slider-contenedor')
const sliderIzq = document.querySelector('.slider-izq')
const sliderDer = document.querySelector('.slider-der')
const btnArriba = document.querySelector('.btn-arriba')
const btnAbajo = document.querySelector('.btn-abajo')
const largo = sliderDer.querySelectorAll('div').length

let slideActivoIndex = 0

//Ajusta el tamaño del contenedor para que se ajuste al numero de slides
sliderIzq.style.top = `-${(largo - 1) * 100}vh`

//invocacion funcion
btnArriba.addEventListener('click', () => cambiarSlide('arriba'))
btnAbajo.addEventListener('click', () => cambiarSlide('abajo'))

//cambia los lados segun corresponda usando index
function cambiarSlide (direccion){
    const sliderHeight = slideContenedor.clientHeight

    if(direccion === 'arriba'){
        slideActivoIndex++
        if(slideActivoIndex > largo -1){
            slideActivoIndex=0
        }
    }
    else if (direccion === 'abajo'){
        slideActivoIndex--
        if(slideActivoIndex < 0 ){
            slideActivoIndex = largo -1
        }
    }

    sliderDer.style.transform = `translateY(-${slideActivoIndex * sliderHeight}px)`
    sliderIzq.style.transform = `translateY(${slideActivoIndex * sliderHeight}px)`
}

//variables HTML
const numerosHTML = document.querySelectorAll('.numeros span')
const contador = document.querySelector('.contador')
const finalMsj = document.querySelector('.final')
const replay = document.querySelector('#replay')

//Inicia la animación al cargar el documento
animacionON()

//Función para resetar DOM
function resetDOM(){
    contador.classList.remove('hide')
    finalMsj.classList.remove('show')

    numerosHTML.forEach((num) => {
        num.classList.value = ''
    })

    numerosHTML[0].classList.add('in')
}

//Animacion de conteo
function animacionON (){
    numerosHTML.forEach((num, idx) =>{
        const ultimo = numerosHTML.length - 1

        num.addEventListener('animationend', (e)=>{
            if(e.animationName === 'goIn' && idx !== ultimo){
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            } else{
                contador.classList.add('hide')
                finalMsj.classList.add('show')
            }
        })
    })
}

//Funciones apenas se ejecuta pagina
replay.addEventListener('click',() =>{
    resetDOM()
    animacionON()
})
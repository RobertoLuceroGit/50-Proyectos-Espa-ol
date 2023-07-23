//Variables HTML
const ratingHTML = document.querySelectorAll('.rating')
const ratingContenedorHTML = document.querySelector('.rating-contenedor')
const btnHTML = document.querySelector('#enviar')
const panel = document.querySelector('#panel')
let rating = 'satisfecho'

//Cambia seleccion de rating
ratingContenedorHTML.addEventListener('click', (e) =>{
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling){
        sacarActivo()
        e.target.parentNode.classList.add('activo')
        rating = e.target.nextElementSibling.innerHTML
    }
    else if (
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ){
        sacarActivo()
        e.target.parentNode.classList.add('activo')
        rating = e.target.innerHTML 
    }
})

//Mensaje de recibido feedback
btnHTML.addEventListener('click', (e) =>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Gracias!</strong>
    <br>
    <strong>Feedback: ${rating}</strong>
    <p>Archivaremos su respuesta para mejoras futuras</p>`
})

//Sacar activo funcion
function sacarActivo(){
    for(let i = 0; i < ratingHTML.length; i++){
        ratingHTML[i].classList.remove('activo')
    }
}

//Variables html
const cambios = document.querySelectorAll('.cambio')
const tiempo = document.querySelector('#tiempo')
const dinero = document.querySelector('#dinero')
const felicidad = document.querySelector('#felicidad')
//Se invoca funcion cuando hay cambio
cambios.forEach(cambio => cambio.addEventListener('change', (e)=> cambiosFuncion(e.target)))

//verifica checked y los desmarca
function cambiosFuncion(clickeado){
    if (tiempo.checked && dinero.checked && felicidad.checked){
        if(tiempo === clickeado){
            felicidad.checked = false
        }
        if(dinero === clickeado){
            tiempo.checked = false
        }
        if(felicidad === clickeado){
            dinero.checked = false
        }
    }
}
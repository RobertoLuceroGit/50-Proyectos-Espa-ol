//variables
const textoHTML = document.getElementById('texto')
const velocidadHTML = document.getElementById('velocidad')
const texto = 'Oid mortales, el grito sagrado, libertad, libertad, libertad...'
let index = 1
let velocidad = 300/velocidadHTML.value 

//invoca funcion
escribir()

//Escribe en html el texto 
function escribir(){
    textoHTML.innerText = texto.slice(0,index)
    index++
    //reinicio
    if (index  > texto.length){
        index=1
    }
    setTimeout(escribir, velocidad)
}
//velocidad segun el numero
velocidadHTML.addEventListener('input',(e) => velocidad=300/e.target.value )
// A la variable carta se le asigna todos las clases .carta del index
const carta = document.querySelectorAll('.carta')


carta.forEach( carta=>{                     //Crea foreach para cada carta
    carta.addEventListener('click', ()=>{   //cuando se clickea una carta...
    removerClasesActivas()                  //...invoca funcion para remover clases a las demas
    carta.classList.add('active')           //.carta se le agrega clase .active
    })
})

function removerClasesActivas (){
    carta.forEach(carta=>{
        carta.classList.remove('active') //Remueve clase .active de otras cartas
    })
}
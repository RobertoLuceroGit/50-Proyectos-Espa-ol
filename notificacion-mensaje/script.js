//variables de html
const boton = document.getElementById('boton')
const notificacion = document.getElementById('notificacion')

//mensajes
const mensajes = [
    '¡Hola! ¿Cómo estás?',
    'Mujeres cerca tuyo quieren hablarte',
    'Andas solo esta tarde?',
    'Buscate a alguien real',
]

//tipo de mensaje
const tipo = ['info','success', 'error']

//invoca notificacion
boton.addEventListener('click', () => crearNotificacion())

//funcion de notificacion
function crearNotificacion(mensaje=null, tipo=null){
    //Crea un div, lke da clase y tipo
    const notif = document.createElement('div')
    notif.classList.add('notificacion')
    notif.classList.add(tipo ? tipo : getRandomTipo())

    //le agrega mensaje y lo agrega con append
    notif.innerText = mensaje ? mensaje : getRandomMensaje()
    notificacion.appendChild(notif)

    //cada 3seg se borra mensaje
    setTimeout(()=> {
        //notificacion.removeChild(notif);
        notif.remove()
    },3000)
}

//funciones que devuelven random
function getRandomMensaje(){
    return mensajes[Math.floor(Math.random()*mensajes.length)]
}
function getRandomTipo(){
    return tipo[Math.floor(Math.random()* tipo.length)]
}
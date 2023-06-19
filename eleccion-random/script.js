//asigna div'opcion' y textarea
const opcionEl = document.getElementById('opcion')
const textarea = document.getElementById('textarea')

//enfoca textarea
textarea.focus()

//cuando se suelte una tecla, entra el evento
textarea.addEventListener('keyup', (e) =>{
    //invoca crearopcion enviando lo del textarea
    crearOpcion(e.target.value)

    //si es Enter se limpia textarea e invoca funcion
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)

        //invoca eleccion random
        eleccionRandom()
    }
})

//Funcion
function crearOpcion(texto){
    //crea array con cadenas no vacias, separadas en coma
    const opciones = texto.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    //Se limpia div'opcion'
    opcionEl.innerHTML=''

    //se crea span, asigna clase, texto y lo agrega al div'opcion
    opciones.forEach(opc => {
        const opcEl = document.createElement('span')
        opcEl.classList.add('opcion')
        opcEl.innerText= opc
        opcionEl.appendChild(opcEl)
        });
}

//funcion
function eleccionRandom(){
    const tiempo = 30

    //1-cada 100 ms sucede...
    const intervalo = setInterval(()=>{
        //se elige opcion
        const randomOpcion = elegirOpcion()

        //si tiene algo la ilumina y apaga opcion cada 100ms
        if(randomOpcion !== undefined){
            iluminarON(randomOpcion)

            setTimeout(() => {
                iluminarOFF(randomOpcion)
            }, 100)
        }
    }, 100)

    //otro settime final
    setTimeout(()=>{
        //se limpia intervalo anterior
        clearInterval(intervalo)
       
        //se selecciona la opcion final
        setTimeout(()=>{
            const randomOpcion = elegirOpcion()
            iluminarON(randomOpcion)
        },100)

    },tiempo*100)
}

//Elige opciones al azar de las opciones
function elegirOpcion(){
    const op = document.querySelectorAll('.opcion')
    return op[Math.floor(Math.random()*op.length)]
}

//ilumina opcion
function iluminarON (elemento){
    elemento.classList.add('brillo')
}

//apaga opcion
function iluminarOFF (elemento){
    elemento.classList.remove('brillo')
}
//variables 
const pantallaHTML = document.querySelectorAll('.pantalla')
const eleccionBtnHTML = document.querySelectorAll('.eleccion-btn')
const startBtnHTML = document.getElementById('start-btn')
const contenedorHTML = document.getElementById('juego-contenedor')
const tiempoHTML = document.getElementById('tiempo')
const puntajeHTML = document.getElementById('puntaje')
const mensajeHTML = document.getElementById('mensaje')
let seg = 0
let puntaje = 0
let insectoSeleccionado={}

//Boton Start
startBtnHTML.addEventListener("click",()=> pantallaHTML[0].classList.add('up'))

//eleccion insecto
eleccionBtnHTML.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        insectoSeleccionado = {src , alt}
        pantallaHTML[1].classList.add('up')
        setTimeout(crearInsecto,1000)
        startJuego()
    })
})

//empezar juego
function startJuego(){ 
    setInterval(aumentarTiempo,1000)
}

//aumentar tiempo
function aumentarTiempo(){
    let m = Math.floor(seg / 60)
    let s = seg % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    tiempoHTML.innerHTML = `Tiempo: ${m}:${s}`
    seg++
}

//crea insecto
function crearInsecto(){
    const insecto = document.createElement('div')
    insecto.classList.add('insecto')
    const {x ,y} = getUbicacion()
    insecto.style.top = `${y}px`
    insecto.style.left = `${x}px`
    insecto.innerHTML = `<img src="${insectoSeleccionado.src}" alt="${insectoSeleccionado.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insecto.addEventListener('click', tomarInsecto)

    contenedorHTML.appendChild(insecto)
}

//Genera ubicacion aleatoriamente 
function getUbicacion() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

//click al insecto
function tomarInsecto() {
    aumentarPuntaje()
    this.classList.add('punto')
    setTimeout(() => this.remove(), 2000)
    agregarInsecto()
}
//Agrega 2 insectos
function agregarInsecto() {
    setTimeout(crearInsecto, 1000)
    setTimeout(crearInsecto, 1500)
}
//incrementar puntaje
function aumentarPuntaje() {
    puntaje++
    if(puntaje > 19) {
        mensajeHTML.classList.add('visible')
    }
    puntajeHTML.innerHTML = `Puntaje: ${puntaje}`
}
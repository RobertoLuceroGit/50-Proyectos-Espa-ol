// Variables preguntas y respuestas = PYR
const pyr = [
    {
        pregunta: "Que lenguaje corre en una web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correcta: "d",
    },
    {
        pregunta: "Que significa las siglas CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Corre Sarpado Sapo",
        correcta: "b",
    },
    {
        pregunta: "Que significan las siglas HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hoy Tomo Merca Loca",
        correcta: "a",
    },
    {
        pregunta: "En que año fue lanzado JavaScript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Ponele que ninguna",
        correcta: "b",
    },
];
// variables HTML

const contenedorHTML = document.getElementById('contenedor')
const respuestaHTML = document.querySelectorAll('.respuesta')
const preguntaHTML = document.getElementById('pregunta')
const a_HTML = document.getElementById('a-texto')
const b_HTML = document.getElementById('b-texto')
const c_HTML = document.getElementById('c-texto')
const d_HTML = document.getElementById('d-texto')
const enviarHTML = document.getElementById('enviar')

let actualPYR = 0
let puntaje = 0

cargarPYR()

//Borra pregunta vieja & carga nueva data
function cargarPYR (){
    deseleccionarRtas()

    const preguntaNueva = pyr[actualPYR]

    preguntaHTML.innerHTML = preguntaNueva.pregunta
    a_HTML.innerHTML = preguntaNueva.a
    b_HTML.innerHTML = preguntaNueva.b
    c_HTML.innerHTML = preguntaNueva.c
    d_HTML.innerHTML = preguntaNueva.d

}

//deselcciona respuesta
function deseleccionarRtas(){
    respuestaHTML.forEach(rta => rta.checked = false)
}

//obtener respuesta seleccionada
function getSeleccion(){
    let respuestaF

    respuestaHTML.forEach(rta =>{
        if (rta.checked){
            respuestaF = rta.id
        }
    })

    return respuestaF
}

//Eviar respuesta y actualizar HTML
enviarHTML.addEventListener('click', ()=>{
    const respuestaF = getSeleccion()

    if(respuestaF){
        if(respuestaF === pyr[actualPYR].correcta){
            puntaje++
        }
        
        actualPYR++

        if(actualPYR < pyr.length){
            cargarPYR()
        } else{
            contenedorHTML.innerHTML = `
                <h2>Respondiste ${puntaje}/${pyr.length} respuestas correctas</h2>

                <button onclick="location.reload()">Hazlo de nuevo!</button>
            `
        }
    }
})
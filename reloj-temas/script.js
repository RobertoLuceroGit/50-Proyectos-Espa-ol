//variables
const hora0 = document.querySelector('.hora')
const minuto0 = document.querySelector('.minuto')
const segundo0 = document.querySelector('.segundo')
const tiempo0 = document.querySelector('.tiempo')
const fecha0 = document.querySelector('.fecha')
const cambio = document.querySelector('.cambiar')

const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic" ]

//cambio de modo
cambio.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('oscuro'))
    {html.classList.remove('oscuro')
    e.target.innerHTML = 'Modo Oscuro'
    }
    else{
        html.classList.add('oscuro')
        e.target.innerHTML = 'Modo Luminoso'
    }
})

//tiempo
function setTiempo(){
    const tiempo = new Date();
    const mes = tiempo.getMonth()
    const dia = tiempo.getDay()
    const fecha = tiempo.getDate()
    const hora = tiempo.getHours()
    const horaPorReloj = hora >= 13 ? hora % 12 : hora;
    const minutos = tiempo.getMinutes()
    const segundos = tiempo.getSeconds()
    const meridiem = hora >= 12 ? 'PM' : 'AM'

    hora0.style.transform = `translate(-50%, -100%) rotate(${scale(horaPorReloj, 0, 12, 0, 360)}deg)`
    minuto0.style.transform = `translate(-50%, -100%) rotate(${scale(minutos, 0, 60, 0, 360)}deg)`
    segundo0.style.transform = `translate(-50%, -100%) rotate(${scale(segundos, 0, 60, 0, 360)}deg)`

    tiempo0.innerHTML = `${horaPorReloj}:${minutos < 10 ? `0${minutos}` : minutos} ${meridiem}`
    fecha0.innerHTML = `${dias[dia]}, ${meses[mes]} <span class="circulo">${fecha}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
//rotacion agujas
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//llamado de funciones
setTiempo()

setInterval(setTiempo, 1000)
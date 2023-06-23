//variables de html
const canvas = document.getElementById('canvas')
const aumentarBtn = document.getElementById('aumentar')
const reducirBtn = document.getElementById('reducir')
const grosor0 = document.getElementById('grosor')
const color0 = document.getElementById('color')
const borrar0 = document.getElementById('borrar')

//contexto de canva
const ctx = canvas.getContext('2d')

//variables de script
let grosor1 = 10
let presionado= false
color0.value = 'black'
let color1 = color0.value
let x
let y

//Linea cuando mouse es apretado
canvas.addEventListener('mousedown', (e) => {
    presionado = true

    x = e.offsetX
    y = e.offsetY
})

//se suelta mouse
document.addEventListener('mouseup',(e)=>{
    presionado = false

    x = undefined
    y = undefined
})

//movimiento del cursor en el canvas
canvas.addEventListener('mousemove', (e)=>{
    if(presionado){
        const x2 = e.offsetX
        const y2 = e.offsetY

        dibujarCirculo(x2,y2)
        dibujarLinea(x,y,x2,y2)

        x=x2
        y=y2

    }
})

//dibuja un circulo al hacer click 
function dibujarCirculo(x,y){
    ctx.beginPath()
    ctx.arc(x,y,grosor1,0,Math.PI*2);
    ctx.fillStyle = color1
    ctx.fill();
}

 function dibujarLinea(x,y,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color1
    ctx.lineWidth = size * 2
    ctx.stroke()
 }

 function pantallaTamano(){
    grosor0.innerText = grosor1
 }

 aumentarBtn.addEventListener('click',() =>{
    grosor1 += 5
    if(grosor1 > 50){
        grosor1 = 50
    }

    pantallaTamano()
 })

 reducirBtn.addEventListener('click', ()=>{
     grosor1 -= 5
    if(grosor1< 5) {
        grosor1 = 5
    }
    pantallaTamano()
    
})


color0.addEventListener('change', (e) => color1 = e.target.value)

borrar0.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
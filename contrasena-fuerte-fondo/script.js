//variablesHTML
const contrasenaHTML = document.getElementById('contrasena')
const fondoHTML = document.getElementById('fondo')

contrasenaHTML.addEventListener('input', (e)=>{
    const input = e.target.value
    const largo = input.length
    const borroso = 20 - largo *2
    fondoHTML.style.filter = `blur(${borroso}px)`
})
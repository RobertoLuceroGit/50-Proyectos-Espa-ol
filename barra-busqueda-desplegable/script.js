//Declarar variables y asignarles la clase de html
const buscar = document.querySelector('.buscar')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//Funcion cuando se hace click en boton, agrega y quita clase .activo
btn.addEventListener('click', () => {
    buscar.classList.toggle('activo')
    input.focus()
})
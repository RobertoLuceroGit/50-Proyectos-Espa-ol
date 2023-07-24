//Varibales HTML
const abrirHTML = document.querySelector('.abrir-btn')
const cerrarHTML = document.querySelector('.cerrar-btn')
const nav = document.querySelectorAll('.nav')

//Agrega y quita clase visible
abrirHTML.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

cerrarHTML.addEventListener('click',()=>{
    nav.forEach(elemento =>elemento.classList.remove('visible'))
})
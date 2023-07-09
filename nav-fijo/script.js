//Declaramos variable e invocamos funcion
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fijarNav)

//Funcion agregar o quitar clase .activo
function fijarNav(){
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('activo')
    } else {
        nav.classList.remove('activo')
    }
}
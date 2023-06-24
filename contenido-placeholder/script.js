//Variables de html
const header = document.getElementById('header')
const titulo = document.getElementById('titulo')
const extracto = document.getElementById('extracto')
const perfil_img = document.getElementById('perfil-img')
const nombre = document.getElementById('nombre')
const fecha = document.getElementById('fecha')

const fondos_animados = document.querySelectorAll('.animacion-bg')
const textos_animados = document.querySelectorAll('.animacion-bg-text')

//invoca funcion
setTimeout(getInfo,2500);

//agrega elementos al html 
function getInfo(){
    
  header.innerHTML =
  '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
titulo.innerHTML = 'Lorem ipsum dolor sit amet'
extracto.innerHTML =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
perfil_img.innerHTML =
  '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
nombre.innerHTML = 'Jhon Cena Messi'
fecha.innerHTML = 'Jun 12, 1492'
//elimina mivimiento cuando carga
fondos_animados.forEach((bg) => bg.classList.remove('animacion-bg'))
textos_animados.forEach((bg) => bg.classList.remove('animacion-bg-text'))
}
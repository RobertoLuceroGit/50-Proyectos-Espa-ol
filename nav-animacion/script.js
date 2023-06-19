//variables cambio y nav
const cambio = document.getElementById('cambio')
const nav = document.getElementById('nav')

//cada click cambia entre clase activo o no en div
cambio.addEventListener('click', ()=> nav.classList.toggle('activo'))
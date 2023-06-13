//Selecciona los botones abrir y cerrar de html
const abrir = document.getElementById('abrir')
const cerrar = document.getElementById('cerrar')

//Selecciona la clase contenedor
const contenedor = document.querySelector('.contenedor')

//Agrega y quita la clase ver-nav a los botones abrir o cerrar
abrir.addEventListener('click',()=> contenedor.classList.add('ver-nav'))
cerrar.addEventListener('click',()=> contenedor.classList.remove('ver-nav'))
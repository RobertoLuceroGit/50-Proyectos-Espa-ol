//a cambioS se le asigna todas las clases .faq-cambio
const cambios = document.querySelectorAll('.faq-cambio')

//Por cara click se agrega a faq-cambio la clase activo
cambios.forEach(cambio => {
    cambio.addEventListener('click', () => {
        cambio.parentNode.classList.toggle('activo')
    })
})
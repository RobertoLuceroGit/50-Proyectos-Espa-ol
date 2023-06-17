//Se declaran variables para izquierda derecha y contendor
const izq = document.querySelector('.izquierda')
const der = document.querySelector('.derecha')
const contenedor = document.querySelector('.contenedor')

//evento cuando se pasa por encima mouse (hover) para izquierda
izq.addEventListener('mouseenter', () => contenedor.classList.add('hover-izq'))
izq.addEventListener('mouseleave', () => contenedor.classList.remove('hover-izq'))

//evento cuando se pasa por encima mouse (hover) para derecha
der.addEventListener('mouseenter', () => contenedor.classList.add('hover-der'))
der.addEventListener('mouseleave', () => contenedor.classList.remove('hover-der'))

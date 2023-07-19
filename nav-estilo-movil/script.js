//variables
const contenido = document.querySelectorAll('.contenido')
const listaItems = document.querySelectorAll('nav ul li')

//saca y cambia activo y show
listaItems.forEach((item, idx) =>{
    item.addEventListener('click', () => {  
        esconderContenido()
        esconderItems()

        item.classList.add('activo')
        contenido[idx].classList.add('show')
    })
})

//esconden items y contenido
function esconderContenido(){
    contenido.forEach(conte => conte.classList.remove('show'))
}

function esconderItems(){
    listaItems.forEach(it => it.classList.remove('activo'))
}
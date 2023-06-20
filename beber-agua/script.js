//asigna a variables el valor de html
const copaChica = document.querySelectorAll('.copa-chica')
const litros = document.getElementById('litros')
const porcentaje = document.getElementById('porcentaje')
const restante = document.getElementById('restante')

//actualiza copa grande
actualizarCopaGrande()

//por cada click en copa chica llena las necesarias
copaChica.forEach((copa, idx) => {
    copa.addEventListener('click', () => llenarCopas(idx))
})

//Llenar copas
function llenarCopas(idx){
    //verifica si las copas estan llenas
    if(idx ===7 && copaChica[idx].classList.contains("lleno"))
        idx--
    else if(copaChica[idx].classList.contains('lleno')&& !copaChica[idx].nextElementSibling.classList.contains('lleno'))
    {idx--}

    //llena y vacia copas
    copaChica.forEach((copa2, idx2) => {
        if(idx2 <= idx) {
            copa2.classList.add('lleno')
        }
        else{
            copa2.classList.remove('lleno')
        }
    })

    //invoca funcion para copa grande
    actualizarCopaGrande()
}

//Copa Grande
function actualizarCopaGrande(){
    //copas llenas y tamaño
    const copasLlenas = document.querySelectorAll('.copa-chica.lleno').length
    const copasTotales = copaChica.length

    //si esta vacio no muestra nada, si no las llena segun division
    //Parte azul
    if(copasLlenas === 0){
        porcentaje.style.visibility='hidden'
        porcentaje.style.height = 0
    } else {
        porcentaje.style.visibility = 'visible'
        porcentaje.style.height = `${copasLlenas / copasTotales * 330}px`
        porcentaje.innerText = `${copasLlenas / copasTotales * 100}%`
    }

    //Parte blanca
    if(copasLlenas === copasTotales){
        restante.style.visibility = 'hidden'
        restante.style.height = 0
    } else {
        restante.style.visibility = 'visible'
        litros.innerText = `${2 - (250 * copasLlenas / 1000)}L`
    }
}
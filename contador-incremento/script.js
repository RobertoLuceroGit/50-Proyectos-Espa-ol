//selecciona todos los contadores
const contar = document.querySelectorAll('.contador')

//por cada uno realiza forEach
contar.forEach(num => {
    //al num o contador se le asigna 0
    num.innerText = '0'

    //funcion y efecto contador
    const actualizarContador = () => {
        //se obtiene el valor del contador de html
        //se asigna a taget y c
        const target = +num.getAttribute('data-target')
        const c = +num.innerText

        //se calcula cantidad a incrementar
        const subir = target/200

        //si no llego al objetivo entra a if
        if(c < target) {
            //cada ms se llama a actualizar contador
            //y se asigna el texto a num
            num.innerText =`${Math.ceil(c + subir)}`
            setTimeout(actualizarContador, 1)
        }
        //llega a objetivo o target
        else{ num.innerText=target}
    }

    //empieza recursividad
    actualizarContador()
})
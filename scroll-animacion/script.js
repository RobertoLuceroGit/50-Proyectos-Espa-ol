//se asigna a cajas todas las .caja del html
const cajas = document.querySelectorAll('.caja')

//Se agrega que al scroll se active funcion ver cajas
window.addEventListener('scroll', verCajas)

//se invoca ver cajas
verCajas()

function verCajas (){
    //define altura maxima al bajar
    const al_Bajar = window.innerHeight / 5 * 4

    //por cada caja en Cajas
    cajas.forEach(caja => {
        //a caja_Tope se le asigna si esta en el fondo
        const caja_Tope = caja.getBoundingClientRect().top 

        // si la caja no esta maximo le agrega la clase
        if (caja_Tope < al_Bajar){
            caja.classList.add('mostrar')
        }

        //si no se la quita
        else {
            caja.classList.remove('mostrar')
        }

})
}
//asigna fondo y cargador a variables
const cargador = document.querySelector('.cargador')
const fondo = document.querySelector('.fondo')
//variable de carga
let carga = 0
//intervalo que invocca funcion borroso
let int = setInterval(borroso, 30)

//funcion borroso
function borroso (){
    carga++
    //if de carga
    if(carga > 99){
        clearInterval(int);
    }

    //funcion de carga usa escala
    cargador.innerText=`${carga}%`
    cargador.style.opacity = escala(carga,0,100,1,0)
    fondo.style.filter = `blur(${escala(carga, 0, 100, 30, 0)}px)`

}

//Funcion escala
const escala = (num, min_n, max_n, salida_min, salida_max) => {
    return ((num - min_n)*(salida_max - salida_min)) / (max_n - min_n) + salida_min
}
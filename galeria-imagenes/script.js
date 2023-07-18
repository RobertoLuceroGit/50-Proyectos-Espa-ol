//Variables HTML
const imgs = document.getElementById('imgs')
const anteriorHTML = document.getElementById('anterior')
const siguienteHTML = document.getElementById('siguiente')
const img = document.querySelectorAll('#imgs img')
let indexImg=0; //Variable para el indice de la imagen actual en el

let intervalo = setInterval(play, 2000)

//cambia imagen sube index
function play(){
    indexImg++
    cambiarImagen()
}

//actualiza index y mueve imagen
function cambiarImagen(){
    if (indexImg>img.length -1) 
        {indexImg = 0}
    else if (indexImg <0)
        {indexImg=img.length-1}

    imgs.style.transform=`translateX(${-indexImg * 500}px)`
}

//reinicia intervalo
function resetearIntervalo (){
    clearInterval(intervalo);
    intervalo = setInterval(play, 2000)
}

//click de anterior y siguiente
anteriorHTML.addEventListener('click',()=>{
    indexImg--
    cambiarImagen();
    resetearIntervalo ()
})
siguienteHTML.addEventListener('click',() => {
    indexImg++;
    cambiarImagen ();
    resetearIntervalo ()});

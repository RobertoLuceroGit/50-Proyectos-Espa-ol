//Crea Array de nombre de sonidos
const sonidos = ['aplauso','boo','sorpresa','tada','victoria','error']

//Foreach para cada sonido
sonidos.forEach(sonido => {
    //crea btn y le asigna clase .btn
    const btn = document.createElement('button')
    btn.classList.add('btn')
    
    //texto de cada btn
    btn.innerText = sonido

    //accion al click de cada btn
    btn.addEventListener('click', () => {
        //invoca parar sonido
        pararSonido()

        //play a btn 
        document.getElementById(sonido).play()
    })

    //se crean hijos en div 'botones'
    document.getElementById('botones').appendChild(btn)

})

//funcion 
function pararSonido(){
    sonidos.forEach(sonido => {
        //variable referida a btn actual
        const musica = document.getElementById(sonido)

        musica.pause()
        musica.currentTime= 0
    })
}
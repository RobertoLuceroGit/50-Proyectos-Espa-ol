//variable de cuadros 
const lleno = document.querySelector('.lleno')
const vacios = document.querySelectorAll('.vacio')

//si esta lleno llama evento
lleno.addEventListener('dragstart', arrastre)
lleno.addEventListener('dragend', soltar)

//por cada cuadro vacio llama eventos
for(const vacio of vacios){
    vacio.addEventListener('dragover',sacar )
    vacio.addEventListener('dragenter',entrar )
    vacio.addEventListener('dragleave',dejar )
    vacio.addEventListener('drop',tirar )
}

//funciones de cuadro lleno
function arrastre(){
    this.className += ' tomar'
    setTimeout(() => this.className = 'invisible', 0)
}

function soltar(){
    this.className = 'lleno'
}

//funciones de cuadros vacios - for
function sacar(e) {
    e.preventDefault()
}

function entrar (e){
     e.preventDefault()
     this.className += ' arrastrar'
}

function dejar(){
    this.className ='vacio'
}
function tirar (){
    this.className = 'vacio'
    this.append(lleno)
}
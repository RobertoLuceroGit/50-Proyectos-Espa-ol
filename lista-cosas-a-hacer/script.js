//variables HTML
const form = document.getElementById('form')
const input = document.getElementById('input')
const pendienteHTML = document.getElementById('pendientes')
//Obtiene tareas
const pendientes = JSON.parse(localStorage.getItem('lista'))
//agrega tareas
if(pendientes){
    pendientes.forEach(tarea => addTarea(tarea))
}
//envia tarea a agregar
form.addEventListener('submit', (e)=>{
    e.preventDefault() //evita que se recargue la pagina al enviar el form
    addTarea()

})

//agrega tarea a la lista
function addTarea(tareaF){
    let textoTarea = input.value 

    if(tareaF){
        textoTarea = tareaF.text
    }

    //crea tarea
    if(textoTarea){
        const tareaF2 = document.createElement('li')
        if(tareaF && tareaF.completed){
            tareaF2.classList.add("completo")
        }

        tareaF2.innerHTML = textoTarea
        //tarea completa
        tareaF2.addEventListener('click', ()=>{
            tareaF2.classList.toggle('completo')
            actualizarLista()
        })
        //remover tarea
        tareaF2.addEventListener('contextmenu', (e) =>{
            e.preventDefault();
            tareaF2.remove()
            actualizarLista()
        })

        //agrega y actualiza lista
        pendienteHTML.appendChild(tareaF2)
        input.value = ''
        actualizarLista()

    }
}

//actualiza lista
function actualizarLista(){
    let pendiente = document.querySelectorAll('li')

    const lista = []

    //agrega a lista las tareas
    pendiente.forEach(tarea=>{
        lista.push({
            text: tarea.innerText,
            completed: tarea.classList.contains('completo')
        })
    })

    localStorage.setItem('lista', JSON.stringify(lista))
}
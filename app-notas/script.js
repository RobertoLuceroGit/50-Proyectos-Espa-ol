//variables
const agregarHTML = document.getElementById('add')
const notes = JSON.parse(localStorage.getItem('notes'))

//
if (notes){
    notes.forEach(nota => agregarNota(nota));
}

//
agregarHTML.addEventListener('click', () => agregarNota())

function agregarNota(texto = ''){
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="herramientas">
        <button class="editar"><i class="fas fa-edit"></i></button>
        <button class="borrar"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${texto ? "" : "hidden"}"></div>
    <textarea class="${texto ? "hidden" : ""}"></textarea>
    `

    const editarBtn = note.querySelector('.editar')
    const borrarBtn = note.querySelector('.borrar')
    const main = note.querySelector('.main')
    const textareaVar = note.querySelector('textarea')

    textareaVar.value = texto
    main.innerHTML = marked(texto)

    borrarBtn.addEventListener('click', () => {
        note.remove()

        updateNota()
    })

    editarBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textareaVar.classList.toggle('hidden')
    })

    textareaVar.addEventListener('input', (e) => {
        const {value} = e.target
        main.innerHTML = marked(value)
        updateNota()
    })

    document.body.appendChild(note)
}

function updateNota(){
    const notasTexto = document.querySelectorAll('textarea')

    const notes = []

    notasTexto.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}
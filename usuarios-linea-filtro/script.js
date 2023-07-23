//Variables HTML
const resultadoHTML = document.getElementById('resultado')
const filtroHTML = document.getElementById('filtro')
const listaItems = []

//funciones invocacion
getData()
filtroHTML.addEventListener('input', (e)=> filtrarData(e.target.value))

//Funcion para obtener usuarios
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Limpiar resultados
    resultadoHTML.innerHTML = ''

    //crea elemento por cada usuario
    results.forEach(user => {
        const li = document.createElement('li')

        listaItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="usuario-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        resultadoHTML.appendChild(li)
    })
}

//filtro
function filtrarData(buscarTermino){
    listaItems.forEach(item =>{
        if ( item.innerText.toLowerCase().includes( buscarTermino.toLowerCase() ) ){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
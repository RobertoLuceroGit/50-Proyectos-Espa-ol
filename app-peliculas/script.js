//variables de API
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&language=es-ES'
const IMG_PACK = 'https://image.tmdb.org/t/p/w1280'
const BUSCAR_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

//Variables de html
const main = document.getElementById('main')
const form = document.getElementById('form')
const buscar = document.getElementById('buscar')

//Obtener peliculas iniciales
getPelis(API_URL)

//Se obtiene pelis iniciales desde url
async function getPelis(url){
    const respuesta = await fetch(url)
    const data = await respuesta.json()

    //muestra pelis con las ya obtenidas de url en .json
    mostrarPeliculas(data.results)
}

//mostrar peliculas
function mostrarPeliculas(pelicula){
    //limpia main
    main.innerHTML=''

    //por cada pelicula
    //crea objeto peli
    //peliEl crea un div con clase .pelicula
    //por cada Peliel crea el html
    pelicula.forEach((peli) => {
        const { title, poster_path, vote_average, overview  } = peli

        const peliEl = document.createElement('div')
        peliEl.classList.add('pelicula')

        peliEl.innerHTML = `
            <img src="${IMG_PACK + poster_path}" alt="${title}">
            <div class="pelicula-info">
          <h3>${title}</h3>
          <span class="${getVotacion(vote_average)}">${vote_average}</span>
            </div>
            <div class="vista">
          <h3>Vista</h3>
          ${overview }
        </div>
        `
        main.appendChild(peliEl)
    })
}

//funcion de votacion devuelve color
function getVotacion(voto){
    if(voto >= 8) {
        return 'verde'
    } else if(voto >= 5) {
        return 'naranja'
    } else {
        return 'rojo'
    }
}

//Por cada submit ejecuta preventDefault
//Obtiene pelis y terminos sino, recarga
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const buscarTermino = buscar.value

    if(buscarTermino && buscarTermino !== ''){
        getPelis(BUSCAR_API + buscarTermino)

        buscar.value= ''
    }
    else{
        window.location.reload()
    }
})
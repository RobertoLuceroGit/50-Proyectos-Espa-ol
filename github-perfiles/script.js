//API
const APIURL = 'https://api.github.com/users/'

//variables de html
const main = document.getElementById('main')
const form = document.getElementById('form')
const buscar = document.getElementById('buscar')

//eventos del DOM
async function getUsuario(nombreUsuario){
    try{
        const {data} = await axios(APIURL + nombreUsuario)
        
        crearCartaUsuario(data)
        getRepos(nombreUsuario)
    }
    catch (error){
        if(error.response.status == 404){
            crearCartaError('No se encuentra el perfil buscado')
        }
    }
}

//get repos de git
async function getRepos(username){
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        agregarReposACarta(data)
    } catch(err) {
        crearCartaError('Problemas buscando repos')
    }
}

//crea el html del usuario
function crearCartaUsuario (usuario){
    const usuarioID = usuario.name || usuario.login
    const usuarioBio = usuario.bio ? `<p>${usuario.bio}</p>` : ''
    const cartaHTML = `
    <div class="carta">
    <div>
      <img src="${usuario.avatar_url}" alt="${usuario.name}" class="avatar">
    </div>
    <div class="usuario-info">
      <h2>${usuarioID}</h2>
      ${usuarioBio}
      <ul>
        <li>${usuario.followers} <strong>Seguidores </strong></li>
        <li>${usuario.following} <strong>Seguidos </strong></li>
        <li>${usuario.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cartaHTML
}

//Error si no encuentra
function crearCartaError (msg){
    const cartaHTML =`
    <div class="carta">
        <h1>${msg}</h1>
    </div>
`
main.innerHTML=cartaHTML;
}

//agregar repos a carta
function agregarReposACarta(repos){
    const reposEl = document.getElementById('repos')

    repos
        .slice(0,5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name
            
            reposEl.appendChild(repoEl)
        })
}


//buscar usuario
form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const usuario1 = buscar.value

    if(usuario1) {
        getUsuario(usuario1)

        buscar.value = ''
    }
})
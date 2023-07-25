//Variables 
const contenedor = document.querySelector('.contenedor')
const fotosURL = 'https://source.unsplash.com/random/'
const filas = 5
const recarga = document.querySelector('.titulo')

for (let i = 0; i < filas*3; i++) {
    const imgFoto = document.createElement('img')
    imgFoto.src = `${fotosURL}${getRandomSize()}`
    contenedor.appendChild(imgFoto)
    
}

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}

recarga.addEventListener('click', ()=>{
    location.reload()
    
})
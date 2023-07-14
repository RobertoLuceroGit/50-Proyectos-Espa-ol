const like = document.querySelector('.like')
const veces = document.querySelector('#veces')

let clickTiempo = 0
let clickVeces =0

like.addEventListener('click', (e)=>{
    if(clickTiempo === 0){
        clickTiempo = new Date().getTime()
    }
    else{
        if((new Date().getTime()-clickTiempo)<800){
            crearCorazon(e)
            clickTiempo =0
        }
        else{
            clickTiempo = new Date().getTime()
        }
    }
})

const crearCorazon = (e) =>{
    const corazon=document.createElement("i")
    //corazon.classList="fas fa-heart"
    corazon.classList.add('fas')
    corazon.classList.add('fa-heart')


    const x= e.clientX
    const y= e.clientY

    const izqFondo = e.target.offsetLeft
    const topFondo = e.target.offsetTop

    const xDentro= x - izqFondo
    const yDentro= y - topFondo

    corazon.style.top = `${yDentro}px`
    corazon.style.left = `${xDentro}px`

    like.appendChild(corazon)

    veces.innerHTML = ++clickVeces

    setTimeout(() => corazon.remove(), 1000)

}
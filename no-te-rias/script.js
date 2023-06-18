//declaracion de variables chiste y boton
const chisteEl = document.getElementById('chiste')
const chisteBtn = document.getElementById('chiste-btn')

//al btn se genera un chiste cuando se hace click
chisteBtn.addEventListener("click", generarChiste)

//invoca funcion
generarChiste()

//Usando ASYNC Y AWAIT
async function generarChiste(){
    //config tiene la propiedad headers
    //header tiene propiedad accept para el fetch
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }

    //fecth recibe URL y config - al completarse se asigna a res
    const res = await fetch ('https://icanhazdadjoke.com',config)

    //se asigna el valor json a data
    const data = await res.json()

    //a chiste de html se le asigna data
    //osea, el chiste de la api
    chisteEl.innerHTML = data.joke
}

/* Pos si interesa el de Chuk Nurris

async function generarChiste() {
  const res = await fetch('https://api.chucknorris.io/jokes/random?category=español');
  const data = await res.json();
  const chiste = data.value;
  
  chisteEl.innerHTML = chiste;
}

*/
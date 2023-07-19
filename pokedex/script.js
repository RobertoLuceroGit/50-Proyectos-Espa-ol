//variables
const contenedorHTML = document.getElementById('poke-contenedor')
const contadorPokedex = 151
const colores ={
    fire: '#F05030',
    grass: '#78C850',
    electric: '#F8D030',
    water: '#3899F8',
    ground: '#E9D6A4',
    rock: '#B8A058',
    fairy: '#E79FE7',
    poison: '#B058A0',
    bug: '#A8B820',
    dragon: '#7860E0',
    psychic: '#F870A0',
    flying: '#98A8F0',
    fighting: '#A05038',
    normal: '#A8A090',
    steel: '#A8A8C0',
    ghost: '#6060B0',
    ice: '#58C8E0',
    dark: '#7A5848'

}

const tipos = Object.keys(colores)

// Función asincrónica para obtener los datos de los Pokémon
const fetchPokemon = async () =>{
    for(let i =1; i<= contadorPokedex; i++){
        await getPokemon(i)
    }
}

// Función asincrónica para obtener los datos de un Pokémon específico
const getPokemon = async(id)=> {
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    crearPokemonCarta(data)
}

// Función para crear una tarjeta de Pokémon y mostrarla en el contenedor
function crearPokemonCarta (pokemon0){
    const pokemonF = document.createElement('div')
    pokemonF.classList.add('pokemon')

    // Obtiene el nombre y el ID del Pokémon
    const nombre = pokemon0.name[0].toUpperCase() + pokemon0.name.slice(1)
    const id = pokemon0.id.toString().padStart(3, '0')

    // Obtiene los tipos de Pokémon
    const poke_tipos = [];
    pokemon0.types.forEach(tipo => {
        poke_tipos.push(tipo.type.name);
        }); 
    const tipoF = poke_tipos.join(" / ");

    const tipo = tipos.find(type => poke_tipos.indexOf(type) > -1)
    const color = colores[tipo]

    // Establece el color de fondo de la tarjeta de Pokémon
    if (poke_tipos.length === 2) {
        const tipo1 = tipos.indexOf(poke_tipos[0]);
        const tipo2 = tipos.indexOf(poke_tipos[1]);
        pokemonF.style.backgroundImage = `linear-gradient(to right, ${colores[tipos[tipo1]]}, ${colores[tipos[tipo2]]})`;
        pokemonF.classList.add('doble-tipo');
      } else {
        pokemonF.style.backgroundColor = color;
      }

    

    // Crea el contenido HTML de la tarjeta de Pokémon
    const pokemonInnerHTML = `
    <div class="img-contenedor">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon0.id}.png" alt="${nombre}">
    </div>
    <div class="info">
        <span class="numero">#${id}</span>
        <h3 class="nombre">${nombre}</h3>
        <small class="tipo">Tipo: <span>${tipoF}</span> </small>
    </div>
    `

    // Agrega el contenido HTML a la tarjeta de Pokémon
    pokemonF.innerHTML = pokemonInnerHTML

    // Agrega la tarjeta de Pokémon al contenedor principal
    contenedorHTML.appendChild(pokemonF)
}   

// Inicia la obtención de datos de los Pokémon
fetchPokemon()

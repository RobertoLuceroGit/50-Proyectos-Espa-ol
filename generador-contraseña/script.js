//Variables html
const resultadoHTML = document.getElementById('resultado')
const largoHTML = document.getElementById('largo')
const mayusculaHTML = document.getElementById('mayus')
const minusculasHTML = document.getElementById('minus')
const numerosHTML = document.getElementById('nums')
const simbolosHTML = document.getElementById('simbol')
const generarHTML = document.getElementById('generar')
const copiarHTML = document.getElementById('copiar')



//Objeto invoca funciones 
const randomFunc = {
    minus: getRandomMinus,
    mayus: getRandomMayus,
    nums: getRandomNums,
    simbol: getRandomSimbol
  };
  

//Copiar en portapapeles
copiarHTML.addEventListener('click', () =>{
    const textarea = document.createElement('textarea')
    const contra = resultadoHTML.innerText;

    if(!contra){return}

    
    navigator.clipboard.writeText(contra)
    alert('Contraseña copiada en portapapeles')
})

//Verifica condiciones y genera contraseña
generarHTML.addEventListener('click',()=>{
    const largo = +largoHTML.value 
    const minusChk = minusculasHTML.checked
    const mayusChk = mayusculaHTML.checked
    const numsChk = numerosHTML.checked
    const simbolChk = simbolosHTML.checked

    resultadoHTML.innerText = generarContra(minusChk, mayusChk, numsChk, simbolChk, largo)
})

//Genera contraseña
function generarContra(minusF, mayusF, numsF, simbolF, largoF){
    let resultadoF=''
    const contador = minusF + mayusF + numsF + simbolF
    const arreglo = [{minusF}, {mayusF}, {numsF}, {simbolF}].filter(item => Object.values(item)[0])

    if (contador === 0){ return ''}

    for(let i=0; i< largoF; i+= contador){
        arreglo.forEach(type =>{
            const nombre = Object.keys(type)[0]
            resultadoF += randomFunc[nombre]()
        })
    }

    const contraFinal = resultadoF.slice(0,largoF)
    return contraFinal
}

//Funciones randoms
function getRandomMinus() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomMayus() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNums() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSimbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
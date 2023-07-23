//Variables html
const codigo = document.querySelectorAll('.codigo')
codigo[0].focus()

//foreach para presionar numeros o borrar
codigo.forEach((cod, index) =>{
    cod.addEventListener('keydown', (e)=>{
        if(e.key >= 0 && e.key <= 9)
        {
            codigo[index].value = ''
            setTimeout(()=> codigo[index + 1].focus(), 10)
        }
        else if (e.key === 'Backspace'){
            setTimeout(()=> codigo[index - 1].focus(),10)
        }
    })
})
//Selecciona todos los btns
const btns = document.querySelectorAll('.onda')

//Por cada boton y cada click se ejecuta la funcion
btns.forEach(boton => {
    boton.addEventListener('click', function (e) {
        //coordenadas del click
        const x = e.pageX
        const y = e.pageY
        
        //coordenadas del btn
        const btnTop=e.target.offsetTop
        const btnLeft=e.target.offsetLeft

        //se resta coordenadas para dar posicion
        const posicionX = x - btnLeft
        const posicionY = y- btnTop

        //se crea ciruclo que se da efecto en css
        const circulo = document.createElement('span')
        circulo.classList.add("circulo")
        circulo.style.top = posicionY + 'px'
        circulo.style.left = posicionX + 'px'
        
        //se agrega como hijo del btn
        this.appendChild(circulo)
        //se define tiempo
        setTimeout(()=> circulo.remove(),250)
    })
})
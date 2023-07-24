//variables 
const rango = document.getElementById('range')

//evento al input
rango.addEventListener('input', (e) => {
    //toma valores de html
    const valor = +e.target.value
    const label = e.target.nextElementSibling
    //toma valores maximos para slide y label
    const rango_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')
    //asigna valores
    const num_width = +rango_width.substring(0, rango_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)
    //valores maximos y minimos
    const max = +e.target.max
    const min = +e.target.min
    //se asigna el left al HTML
    const left = valor * (num_width / max) - num_label_width / 2 + escala(valor, min, max, 10, -10)
    label.style.left = `${left}px`

    // a label se le cambia texto
    label.innerHTML = valor
})

//funcion escala de ecuacion left
const escala = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
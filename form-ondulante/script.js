//Se asignan a labels todos los label
const labels = document.querySelectorAll(".form-control label")

//por cada label le asigna a cada letra un span con efecto
labels.forEach(label => {
    label.innerHTML= label.innerText
    .split('')
    .map((letra,idx)=> `<span style="transition-delay:${idx * 100}ms">${letra}</span>`)
    .join('');
})
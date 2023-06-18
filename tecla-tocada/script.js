//a insertar se le asigna el elemento
const insertar = document.getElementById('insertar')

//por cada tecla tocada...
window.addEventListener('keydown',(evento) => {

    //...dentro del html se agrega el codigo
    //crea los 3 div y asigna evento.(accion)
    //
    //Para el 1er div
    //Si la tecla tiene valor ' ' muestra 'espacio!'
    //si no, muestra el valor de la tecla

    insertar.innerHTML=`
    <div class="tecla">
        ${evento.key === ' ' ? 'Espacio!' : evento.key} 
        <small>Tecla tocada</small>
    </div>
  
    <div class="tecla">
        ${evento.keyCode}
        <small>Codigo de tecla</small>
    </div>
  
    <div class="tecla">
        ${evento.code}
        <small>Evento de codigo</small>
    </div>
    `
} )
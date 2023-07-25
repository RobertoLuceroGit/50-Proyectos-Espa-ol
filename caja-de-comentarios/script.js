//variables HTML
const contenedorHTML = document.querySelector('.contenedor')
const testimonioHTML = document.querySelector('.testimonio')
const usuarioImgHTML = document.querySelector('.img-usuario')
const nombreHTML = document.querySelector('.nombre-usuario')
const rolHTML = document.querySelector('.rol')

//testimonios
const testimonios=[
    {
        nombre: 'Miyah Myles',
        rol: 'Marketing',
        foto:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        texto:
          "He trabajado literalmente con cientos de desarrolladores de HTML/CSS y debo decir que el primer lugar lo ocupa este tipo. Este tipo es un desarrollador increíble. Hace hincapié en un código bueno y limpio y presta atención a los detalles. Me encantan los desarrolladores que respetan todos y cada uno de los aspectos de un diseño cuidadosamente pensado y hacen todo lo posible para ponerlo en código. Va más allá y transforma el ARTE en PÍXELES, sin fallas, siempre",
      },
      {
        nombre: 'Jun Cho',
        rol: 'Software Engineer',
        foto: 'https://randomuser.me/api/portraits/men/44.jpg',
        texto:
          'Este chico es un increíble desarrollador frontend que entregó la tarea exactamente como la necesitábamos, hágase un favor y contrátelo, no se sentirá decepcionado por el trabajo entregado. Hará un esfuerzo adicional para asegurarse de que esté satisfecho con su proyecto. ¡Seguramente volveré a trabajar con él!',
      },
      {
        nombre: 'Iido Niskanen',
        rol: 'Data Entry',
        foto: 'https://randomuser.me/api/portraits/men/68.jpg',
        texto:
          "Este tipo es un gran trabajador. La comunicación también fue muy buena con él y fue muy receptivo todo el tiempo, algo que no es fácil de encontrar en muchos freelancers. Sin duda repetiremos con él.",
      },
      {
        nombre: 'Renee Sims',
        rol: 'Receptionista',
        foto: 'https://randomuser.me/api/portraits/men/65.jpg',
        texto:
          "Este tipo hace todo lo que puede para hacer el trabajo y hacerlo bien. Esta es la segunda vez que lo contrato y lo volveré a contratar en el futuro.",
      },
      {
        nombre: 'Jonathan Nunfiez',
        rol: 'diseñador Grafico',
        foto: 'https://randomuser.me/api/portraits/men/43.jpg',
        texto:
          "Tenía mis preocupaciones de que, debido a un plazo ajustado, este proyecto no se puede realizar. Pero este tipo demostró que estaba equivocado, no solo entregó un trabajo sobresaliente, sino que logró entregarlo 1 día antes de la fecha límite. Y cuando le pedí algunas revisiones, las hizo en MINUTOS. Tengo muchas ganas de volver a trabajar con él y lo recomiendo totalmente. ¡Gracias de nuevo!",
      },
      {
        nombre: 'Sasha Ho',
        rol: 'Contadora',
        foto:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        texto:
          'Esta mujer es un diseñador y desarrollador front-end de primer nivel. Se comunica bien, trabaja rápido y produce un trabajo de calidad. ¡Hemos tenido la suerte de trabajar con él!',
      },
      {
        nombre: 'Veeti Seppanen',
        rol: 'Director',
        foto: 'https://randomuser.me/api/portraits/men/97.jpg',
        texto:
          'Este chico es un profesional de TI joven y talentoso, proactivo y responsable, con una fuerte ética de trabajo. Es muy fuerte en conversiones PSD2HTML y tecnología HTML/CSS. Aprende rápido, ansioso por aprender nuevas tecnologías. Está enfocado y tiene la buena dinámica para lograr fechas de vencimiento y resultados sobresalientes.',
      },
]

//index
let idx = 1

//actualizar testimonio segun variable e idx
function actualizarTestimonio(){
    const {nombre, rol, foto, texto }= testimonios[idx]
    testimonioHTML.innerHTML = texto
    usuarioImgHTML.src = foto
    nombreHTML.innerHTML = nombre
    rolHTML.innerHTML = rol

    idx++

    if(idx>testimonios.length -1){
        idx=0
    }
}

//intervalo tiempo
setInterval(actualizarTestimonio,10000)
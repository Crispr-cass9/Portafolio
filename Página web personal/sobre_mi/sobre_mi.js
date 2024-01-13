function agregar_delay_menu(lista, booleano){
    if (booleano){
        lista.forEach((elemento, index) =>{
            elemento.style.animationDelay = `${(index+1)/40}s`
            elemento.classList.add('iniciar_animacion_almohadilla');
            elemento.classList.remove('quitar_animacion_almohadilla');

        })
    }

    else{
        lista.forEach((elemento, index) =>{
            elemento.style.animationDelay = `${(index+1)/40}s`;
            elemento.classList.add('quitar_animacion_almohadilla');
            elemento.classList.remove('iniciar_animacion_almohadilla');
        })
    }
    
}

function animar_letras_menu(elemento_nav, lista_hijos){
    elemento_nav.addEventListener('mouseover', ()=>{
        agregar_delay_menu(lista_hijos, true)
    })
    elemento_nav.addEventListener('mouseout', ()=>{
        lista_hijos.forEach((elemento) => {
            agregar_delay_menu(lista_hijos, false)
        });
    })
}






let porcentaje = document.getElementById('porcentaje');
window.onscroll = function () {
  var y = window.scrollY;
  var x = window.innerHeight;
  console.log(y,x)
  porcentaje.innerHTML=`${Math.round(y*100/(2100-x))}`;
};



// 6370 -> 100%
// y -> x






// Inicio animacion texto circular


let circulo = document.getElementById("texto_redondeado");
let array_circulo = circulo.textContent.split("");
circulo.textContent = "";

for (let i = 0; i < array_circulo.length; i++) {
    circulo.innerHTML +=
        '<span style="transform: rotate(' +
        i * 9.2307 +
        'deg">' +
        array_circulo[i] +
        "</span>";
}

// Fin animacion texto circular






// Inicio animacion texto efecto máquina escribir

const typed = new Typed(".efecto_maquina", {
    strings: [
        "<span class='texto_animado_maquina'>¡Hola, bienvenido!</span>",
        "<span class='texto_animado_maquina'>Hi, welcome!</span>",
        "<span class='texto_animado_maquina'>Bonjour, bienvenue!</span>",
        "<span class='texto_animado_maquina'>こんにちはようこそ (^_^.)</span>",
        "<span class='texto_animado_maquina'>欢迎</span>"
    ],
    typeSpeed: 75,
    backDelay: 1000,
    loop: true,
    loopCount: false
});

// Fin animación texto efecto máquina escribir






// Agregar animacion a la almohadilla de los datos

let todos_los_datos = document.querySelectorAll('.contenedores>.contenedor_datos')
let todas_las_almohadillas = document.querySelectorAll('.almohadilla')

// Con esto de abajo transformamos el texto de la clase almohadilla a un texto letra por letra el cual tendrá la clase letra
todos_los_datos.forEach((contenedor_datos, index) => {
    let array_letras_almohadillas = todas_las_almohadillas[index].innerHTML.split('')
    todas_las_almohadillas[index].innerHTML=" "
    todas_las_almohadillas[index].textContent=" "

    array_letras_almohadillas.forEach((elemento) =>{
        todas_las_almohadillas[index].innerHTML += '<span class="letra">'+elemento+'</span>'
    })
});

let datos_sobre_mi = document.getElementById('datos_sobre_mi')
let letras_datos_sobre_mi = document.querySelectorAll('#datos_sobre_mi>div>.letra')
animar_letras_menu(datos_sobre_mi, letras_datos_sobre_mi)

let pasa_tiempos = document.getElementById('pasa_tiempos')
let letras_pasa_tiempos = document.querySelectorAll('#pasa_tiempos>div>.letra')
animar_letras_menu(pasa_tiempos, letras_pasa_tiempos)

let albumes = document.getElementById('albumes')
let letras_albumes = document.querySelectorAll('#albumes>div>.letra')
animar_letras_menu(albumes, letras_albumes)

let videojuegos = document.getElementById('videojuegos')
let letras_videojuegos = document.querySelectorAll('#videojuegos>div>.letra')
animar_letras_menu(videojuegos, letras_videojuegos)

let informacion_personal = document.getElementById('informacion_personal')
let letras_informacion_personal = document.querySelectorAll('#informacion_personal>div>.letra')
animar_letras_menu(informacion_personal, letras_informacion_personal)

let otros_gustos = document.getElementById('otros_gustos')
let letras_otros_gustos = document.querySelectorAll('#otros_gustos>div>.letra')
animar_letras_menu(otros_gustos, letras_otros_gustos)

// INICIO DE LIBRERIA SWIPER PARA ALBUMES
var TrandingSlider = new Swiper('.tranding_slider', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 1,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
// FIN DE LIBRERIA SWIPER PARA ALBUMES

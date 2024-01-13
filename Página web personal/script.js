

// Animacion de letras de fondo
function agregar_delay(lista, booleano){
    if (booleano){
        lista.forEach((elemento, index) =>{
            elemento.style.animationDelay = `${(index+1)/100}s`
            elemento.classList.add('iniciar_animacion');
            elemento.classList.remove('quitar_letras');

        })
    }

    else{
        lista.forEach((elemento, index) =>{
            elemento.style.animationDelay = `${(index+1)/70}s`;
            elemento.classList.remove('iniciar_animacion');
            elemento.classList.add('quitar_letras');
        })
    }
    
}

function esperar_hover(elemento_nav, texto_fondo, lista_hijos){
    elemento_nav.addEventListener('mouseover', ()=>{
        agregar_delay(lista_hijos, true)
        texto_fondo.style.display='flex'
    })
    elemento_nav.addEventListener('mouseout', ()=>{
        lista_hijos.forEach((elemento) => {
            agregar_delay(lista_hijos, false)
        });
    })
}

// Fin animacion letras de fondo

// Inicio animacion letras de menu

function agregar_delay_menu(lista, booleano){
    if (booleano){
        lista.forEach((elemento, index) =>{
            elemento.style.animationDelay = `${(index+1)/100}s`
            elemento.classList.add('iniciar_animacion_menu');
            elemento.classList.remove('quitar_animacion_menu');

        })
    }

    else{
        lista.forEach((elemento, index) =>{
            elemento.style.animationDelay = `${(index+1)/70}s`;
            elemento.classList.add('quitar_animacion_menu');
            elemento.classList.remove('iniciar_animacion_menu');
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

// Fin animacion letras de menu
let fondo_sobre_mi = document.getElementById('fondo_sobre_mi')
let sobre_mi = document.getElementById('sobre_mi')
let fondo_sobre_mi_con_hijos = document.querySelectorAll('#fondo_sobre_mi>.letra')
let sobre_mi_con_hijos = document.querySelectorAll('#sobre_mi>.letra')
animar_letras_menu(sobre_mi, sobre_mi_con_hijos)
esperar_hover(sobre_mi, fondo_sobre_mi , fondo_sobre_mi_con_hijos)


let contacto = document.getElementById('contacto')
let fondo_contacto = document.getElementById('fondo_contacto')
let fondo_contacto_con_hijos = document.querySelectorAll('#fondo_contacto>.letra')
let contacto_con_hijos = document.querySelectorAll('#contacto>.letra')
animar_letras_menu(contacto, contacto_con_hijos)
esperar_hover(contacto, fondo_contacto , fondo_contacto_con_hijos)


let otros_trabajos = document.getElementById('otros_trabajos')
let fondo_otros_trabajos = document.getElementById('fondo_otros_trabajos')
let fondo_otros_trabajos_con_hijos = document.querySelectorAll('#fondo_otros_trabajos>.letra')
let otros_trabajos_con_hijos = document.querySelectorAll('#otros_trabajos>.letra')
animar_letras_menu(otros_trabajos, otros_trabajos_con_hijos)
esperar_hover(otros_trabajos, fondo_otros_trabajos, fondo_otros_trabajos_con_hijos)


let esta_web = document.getElementById('esta_web')
let fondo_esta_web = document.getElementById('fondo_esta_web')
let fondo_esta_web_con_hijos = document.querySelectorAll('#fondo_esta_web>.letra')
let esta_web_con_hijos = document.querySelectorAll('#esta_web>.letra')
animar_letras_menu(esta_web, esta_web_con_hijos)
esperar_hover(esta_web, fondo_esta_web, fondo_esta_web_con_hijos)

let redes = document.getElementById('redes')
let fondo_redes = document.getElementById('fondo_redes')
let fondo_redes_con_hijos = document.querySelectorAll('#fondo_redes>.letra')
let redes_con_hijos = document.querySelectorAll('#redes>.letra')
animar_letras_menu(redes, redes_con_hijos)
esperar_hover(redes, fondo_redes, fondo_redes_con_hijos)

let especial = document.getElementById('especial')
let fondo_especial = document.getElementById('fondo_especial')
let especial_con_hijos = document.querySelectorAll('#especial>.letra')
let fondo_especial_con_hijos = document.querySelectorAll('#fondo_especial>.letra')
esperar_hover(especial, fondo_especial, fondo_especial_con_hijos)
animar_letras_menu(especial, especial_con_hijos)


let pantalla_principal = document.getElementById('pantalla_principal')

Array_de_menu = [sobre_mi, contacto, otros_trabajos, esta_web, redes, especial]
rutas = ['./sobre_mi/sobre_mi.html', './contacto/contacto.html', './otros_trabajos/otros_trabajos.html', './Esta_web/esta_web.html', './redes/redes.html', 'https://www.youtube.com/watch?v=EE-xtCF3T94']

function redireccionar(index){
    location.href =rutas[index];
}

Array_de_menu.forEach((elemento,index) => {
    elemento.addEventListener('click', ()=>{
        pantalla_principal.classList.add('menu_seleccionado')
        setTimeout(() => {
            redireccionar(index);
          }, 800);
    })
});
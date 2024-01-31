let padre = document.getElementsByClassName("lineas");
let areaClick = document.getElementsByClassName("contenedorIconoMenu");
let contador = 0;

areaClick[0].addEventListener('click', ()=>{
    contador++
    for (i=0; i < padre.length; i++){
        let linea = i + 1;
        if (contador%2 != 0){
            padre[i].classList.add('animacionLinea' + linea);
            padre[i].classList.remove('revertir' + linea);         
        } else {
            padre[i].classList.remove('animacionLinea' + linea);
            padre[i].classList.add('revertir' + linea);
        }
    }

})

let menu = document.getElementById('check');
let contenedor_tarjetas = document.getElementById('contenedor_tarjetas');

menu.addEventListener( 'change' , ()=>{
    if (menu.checked){
        contenedor_tarjetas.style.zIndex='-10'
    }
    else{
        setTimeout(function(){
            contenedor_tarjetas.style.zIndex='10'
        }, 1500)
    }
})
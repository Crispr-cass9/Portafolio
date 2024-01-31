class carrito{

    constructor(elemento, costo){
        this.elemento = elemento;
        this.costo = costo
        this.carrito = {elemento: costo}
        this.total = 0
    }

    agregar_elemento(elemento, costo) {
    }
}

let btn = document.querySelectorAll('.btn_siguiente');
let btn_volver = document.querySelectorAll('.btn_volver')
let ubicacion = [1, 2, 3, 4]
actual=0

let primer_paso = document.getElementById('contenedor_formulario_info')
let segundo_paso = document.getElementById('contenedor_formulario_suscripcion')
let tercer_paso = document.getElementById('contenedor_formulario_extras')
let numeros_pasos = document.querySelectorAll('.numero')

btn.forEach(element => {
    element.addEventListener('click', ()=>{
        actual++
        if (actual == 0){
            primer_paso.style.display ='flex'
            segundo_paso.style.display ='none'
            tercer_paso.style.display ='none'
            btn_volver[0].classList.remove('mostrar')
            btn_volver[1].classList.remove('mostrar')
            btn_volver[2].classList.remove('mostrar')
            btn_volver[3].classList.add('mostrar')

        }

        if (actual == 1){
            primer_paso.style.display='none'
            segundo_paso.style.display='flex'
            tercer_paso.style.display ='none'
            btn_volver[0].classList.remove('mostrar')
            btn_volver[1].classList.add('mostrar')
            btn_volver[2].classList.add('mostrar')
            btn_volver[3].classList.add('mostrar')


        }

        if (actual == 2){
            primer_paso.style.display='none'
            segundo_paso.style.display='none'
            tercer_paso.style.display ='flex'
            btn_volver[0].classList.remove('mostrar')
            btn_volver[1].classList.add('mostrar')
            btn_volver[2].classList.add('mostrar')
            btn_volver[3].classList.add('mostrar')
            comprobar_mensual(mensual)
        }



        numeros_pasos.forEach(numero => {
            numero.classList.remove('paso_actual')
        });
        numeros_pasos[actual].classList.add('paso_actual')
    })

});

btn_volver.forEach(element => {
    element.addEventListener('click', ()=>{
        actual--
        if (actual == 0){
            primer_paso.style.display='flex'
            segundo_paso.style.display='none'
            tercer_paso.style.display ='none'
            btn_volver[0].classList.remove('mostrar')
            btn_volver[1].classList.remove('mostrar')
            btn_volver[2].classList.remove('mostrar')
            btn_volver[3].classList.add('mostrar')

        }

        if (actual == 1){
            primer_paso.style.display='none'
            segundo_paso.style.display='flex'
            tercer_paso.style.display ='none'
            btn_volver[0].classList.remove('mostrar')
            btn_volver[1].classList.add('mostrar')
            btn_volver[2].classList.add('mostrar')
            btn_volver[3].classList.add('mostrar')

        }

        if (actual == 2){
            primer_paso.style.display='none'
            segundo_paso.style.display='none'
            tercer_paso.style.display ='flex'
            btn_volver[0].classList.remove('mostrar')
            btn_volver[1].classList.add('mostrar')
            btn_volver[2].classList.add('mostrar')
            btn_volver[3].classList.add('mostrar')
            comprobar_mensual(mensual)
        }

        numeros_pasos.forEach(numero => {
            numero.classList.remove('paso_actual')
        });
        numeros_pasos[actual].classList.add('paso_actual')
    })

});


// Validación Formulario

const expresiones = {
    nombre: /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)){1,75}$/,
    correo: /^\S+@\S+\.\S+/,
    numero: /^[+]?(\d+\s?){7,17}/
}

let inputs = document.querySelectorAll('.contenedor_input>div>input')
let formulario = document.getElementById('formulario_info')

validacion = (evento) => {
    switch (evento.target.id) {
        case "nombre":
            if (expresiones.nombre.test(evento.target.value)){
                document.getElementById('entrada_nombre').classList.remove('mensaje_invalido')
                document.getElementById('icono_error_nombre').classList.remove('mostrar')
                document.getElementById('nombre').classList.remove('input_invalido')
            }
            else{
                console.log(evento.target)
                document.getElementById('entrada_nombre').classList.add('mensaje_invalido')
                document.getElementById('icono_error_nombre').classList.add('mostrar')
                document.getElementById('nombre').classList.add('input_invalido')

            }
        break

        case "email":
            if (expresiones.correo.test(evento.target.value)){
                document.getElementById('entrada_email').classList.remove('mensaje_invalido')
                document.getElementById('icono_error_email').classList.remove('mostrar')
                document.getElementById('email').classList.remove('input_invalido')
            }
            else{
                console.log(evento.target)
                document.getElementById('entrada_email').classList.add('mensaje_invalido')
                document.getElementById('icono_error_email').classList.add('mostrar')
                document.getElementById('email').classList.add('input_invalido')

            }
        break

        case "numero":
            if (expresiones.numero.test(evento.target.value)){
                document.getElementById('entrada_numero').classList.remove('mensaje_invalido')
                document.getElementById('icono_error_numero').classList.remove('mostrar')
                document.getElementById('numero').classList.remove('input_invalido')
            }
            else{
                document.getElementById('entrada_numero').classList.add('mensaje_invalido')
                document.getElementById('icono_error_numero').classList.add('mostrar')
                document.getElementById('numero').classList.add('input_invalido')
            }
        break
    }

}

inputs.forEach(entrada => {
    entrada.addEventListener('keyup', validacion)
});


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
})

// Código control de segunda parte
let mensual_o_anual = document.querySelector('#mensual_anual')
let bola_input_radio = document.querySelector('#bola_input_radio')
let texto_mensual = document.querySelector('.texto_mensual')
let texto_anual = document.querySelector('.texto_anual')
let precios = document.querySelectorAll('.precio_plan')
let ofertas = document.querySelectorAll('.oferta')
let mensual=true;

let contenedores_planes = document.querySelectorAll('.planes')

contenedores_planes.forEach((element, index) => {
    element.addEventListener('click', (e)=>{
        console.log(e)
        element.classList.add('plan_seleccionado')
        contenedores_planes[(index+1)%3].classList.remove('plan_seleccionado')
        contenedores_planes[(index+2)%3].classList.remove('plan_seleccionado')

    })
});



mensual_o_anual.addEventListener('click', ()=>{
    mensual=!mensual;
    permiso = true;
    
    

    if (mensual){
        console.log('Se ejecuta esta parte')
        bola_input_radio.classList.remove('mover_bola')
        texto_mensual.classList.add('checkeado')
        texto_anual.classList.remove('checkeado')
        precios[0].innerHTML='$9/mes'
        precios[1].innerHTML='$12/mes'
        precios[2].innerHTML='$15/mes'
        ofertas.forEach(element => {
            element.classList.remove('mostrar')
        });

    }
    else{
        console.log('Se ejecuta esta otra parte')
        bola_input_radio.classList.add('mover_bola')
        texto_mensual.classList.remove('checkeado')
        texto_anual.classList.add('checkeado')
        precios[0].innerHTML='$90/año'
        precios[1].innerHTML='$120/año'
        precios[2].innerHTML='$150/año'
        ofertas.forEach(element => {
            element.classList.add('mostrar')
        });
        
    }
})

// Código de menú extras

let botones_extras = document.querySelectorAll(".btn_extras")
let contenedores_extras = document.querySelectorAll(".extra")
let precios_extras = document.querySelectorAll(".precio_extra")

function comprobar_mensual(mensual){
    if (mensual){
        precios_extras[0].innerHTML="$1/mes"
        precios_extras[1].innerHTML="$2/mes"
        precios_extras[2].innerHTML="$2/mes"
    
    }
    else{
        precios_extras[0].innerHTML="$10/año"
        precios_extras[1].innerHTML="$20/año"
        precios_extras[2].innerHTML="$20/año"
    }
}


contenedores_extras.forEach((extra, index) => {
    console.log(extra)
    extra.addEventListener('click', () => {
        botones_extras[index].checked=!botones_extras[index].checked
        if (botones_extras[index].checked){
            contenedores_extras[index].classList.add('extra_seleccionado')
        }
        else{
            contenedores_extras[index].classList.remove('extra_seleccionado')
        }
    })
});

function comprobar_selecciones(lista) {
    
}


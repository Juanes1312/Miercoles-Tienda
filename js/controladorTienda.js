/*
// controlando etiquetas

// crear una variable para guardar etiqueta
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

// como modificar el texto de una etiqueta
etiquetaTitulo.textContent="La doble aa"

// controlando navbar
let etiquetaNavbar = document.getElementById("navbar")
// console.log(etiquetaNavbar) se muestra en la consola
etiquetaNavbar.textContent="Linea"

// controlando una imagen
let etiquetaFoto = document.getElementById("fotogal")
etiquetaFoto.src="img/2.png"

// cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")   */





import { ampliarInformacionProducto } from "./ampliarinfo.js";
import { llenarTienda } from "./llenadoTienda.js";

// creo producto vacio
let producto={}

// llamado a llenado tienda
llenarTienda()

// rutina para ampliar informacion 
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

// rutina para añadir al carrito de compras
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){

    carrito.push(producto)
    
})

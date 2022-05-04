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

//referencia al modal 
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))
// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)


// rutina para ampliar informacion 
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){

        // cargar informacion del producto dentro del modal
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

// rutina para añadir al carrito de compras
let carrito=[]
let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){

    //Debo capturar la cantidad y agregarla al producto
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad

    // agrego el producto al carrito
    carrito.push(producto)

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })   

    let capsula=document.getElementById("capsula") 
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalinfo.hide()
    
})

//rutina para limpiar
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(){

    carrito=[]

    let capsula=document.getElementById("capsula") 
    capsula.classList.add("invisible")

})

//rutina para ver el carrito
let botonVerCarrito=document.getElementById("verCarrito")
botonVerCarrito.addEventListener("click",function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById("basecarro")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let titulo=document.createElement("h3")
        titulo.classList.add("text-center")
        titulo.textContent=producto.titulo

        let cantidad=document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent="Cantidad: "+producto.cantidad

        let precio=document.createElement("h4")
        precio.classList.add("text-center")
        precio.textContent="Precio: $"+producto.precio

        let subtotal=document.createElement("h4")
        subtotal.classList.add("text-center")
        subtotal.textContent="Subtotal: $"+producto.cantidad*producto.precio


        // resultado = resultado + producto.cantidad*producto.precio


        //PADRES E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(titulo)
        columna2.appendChild(cantidad)
        columna2.appendChild(precio)
        columna2.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })
    let totalCompra = document.getElementById("total")
    totalCompra.textContent= "Total: "+producto.cantidad*producto.precio



    modalcompra.show()

})

/*let etiquetaBoton=document.getElementById("boton")

etiquetaBoton.addEventListener("click",cambiarFoto)
function cambiarFoto(){

    // console.log("estoy haciendo click")
    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="buenos dias señor"
}*/

let offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
let offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})

let etiquetaTitulo=document.getElementById("imagen2")

etiquetaTitulo.addEventListener("mouseover",cambiarTitulo)
function cambiarTitulo(){

    let etiquetaTitulo=document.getElementById("titulo2")
    etiquetaTitulo.textContent="Comprar ahora"
}

let etiquetaTitulo1=document.getElementById("imagen2")

etiquetaTitulo1=addEventListener("mouseleave",cambiar)
function cambiar(){
    
    let etiquetaTitulo1=document.getElementById("titulo2")
    etiquetaTitulo1.textContent="productos"
}

let btnRegistro=document.getElementById("botonRegistro")
btnRegistro.addEventListener("click",function(){

    offcanvass.hide()

})

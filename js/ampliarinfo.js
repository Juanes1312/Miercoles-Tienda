// rutina para ampliar la informacion del producto 

      export  function ampliarInformacionProducto(evento){

        let producto={}

        // lleno la informacion del producto
        producto.foto=evento.target.parentElement.querySelector("img").src
        producto.titulo=evento.target.parentElement.querySelector("h3").textContent
        producto.descripcion=evento.target.parentElement.querySelector("p").textContent
        producto.precio=evento.target.parentElement.querySelector("h4").textContent

        let fotoInfo = document.getElementById("fotoInfo")
        fotoInfo.src=evento.target.parentElement.querySelector("img").src
        
        let tituloInfo = document.getElementById("nombreInfo")
        tituloInfo.textContent=evento.target.parentElement.querySelector("h3").textContent

        let descripcionInfo = document.getElementById("descripcionInfo")
        descripcionInfo.textContent=evento.target.parentElement.querySelector("p").textContent

        let precioInfo = document.getElementById("precioInfo")
        precioInfo.textContent=evento.target.parentElement.querySelector("h4").textContent

        // devolver el producto generado
        return producto
      }
// rutina para ampliar la informacion del producto 

      export  function ampliarInformacionProducto(evento){

        let producto={}

        // lleno la informacion del producto
        producto.foto=evento.target.parentElement.querySelector("img").src
        producto.nommbre=evento.target.parentElement.querySelector("h4")

        let fotoinfo=document.getElementById("fotoinfo")
        fotoinfo.src=evento.target.parentElement.querySelector("img").src
        
        let tituloFoto =document.getElementById("nombreInfo")
        tituloFoto.textContent=evento.target.parentElement.querySelector("h4")

        // devolver el producto generado
        return producto
      }
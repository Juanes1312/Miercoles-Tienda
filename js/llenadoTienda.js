// creando arreglo productos 
export function llenarTienda(){

let productos=[

    {foto: 'img/basicahombre.jpg',nombre:"Camisetas Hombre",precio:35000,descripcion:"Camiseta cuello rendo para hombre",},
    {foto:'img/polohombre.jpg',nombre:"Camisetas tipo Polo Hombre",precio:38000,descripcion:"Camiseta tipo polo para hombre"},
    {foto:'img/basicadama.jpg',nombre:"Camisetas Dama",precio:25000,descripcion:"Camiseta basica para dama"},
    {foto:'img/jeanhombre.jpg',nombre:"Blue Jeans Hombre",precio:80000,descripcion:"Blue Jean bota tuvo para hombre"},
    {foto:'img/jeandama.jpg',nombre:"Blue Jeans Dama",precio:70000,descripcion:"Blue Jean de dama bota campana"},
    {foto:'img/buzohombre.jpg',nombre:"Buzos para Hombre",precio:50000,descripcion:"Buzos para Hombre en variedad de colores"},
    {foto:'img/buzodama.jpg',nombre:"Buzos para Dama",precio:45000,descripcion:"Buzos para Dama en variedad de colores"},
    {foto:'img/accesorioshombre.png',nombre:"Accesorios para Hombre",descripcion:"Accesorios variados para hombre"},
    {foto:'img/accesoriosdama.jpg',nombre:"Accesorios para Dama",descripcion:"Accesorios variados para dama"},
    {foto:'img/desc.png',nombre:"Prendas en Descuento",descripcion:"Variedad de prendas y accesorios para hombre y dama en descuento "},

]


// 1. creo  una variable para almacenar la base para pintar
let fila=document.getElementById("fila")
productos.forEach(function(producto){
    // console.log(producto)

    // 2. pintando etiquetas

    // div con la clase col
    let columna=document.createElement("div")
    columna.classList.add("col")

    // div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    // img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top","p-2","h-100")
    foto.src=producto.foto

    // h3 con la clase text-center titulo
    
    let titulo=document.createElement("h3")
    titulo.classList.add("card-body","text-center")
    titulo.textContent=producto.nombre

    // p con la clase text-center descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center","m-3")
    descripcion.textContent=producto.descripcion

    // h con la clase text-center precio
    let costo=document.createElement("h4",)
    costo.classList.add("card-footer","text-center","text-muted")
    costo.textContent=producto.precio

    // boton
    let boton=document.createElement("boton")
    boton.classList.add("btn","btn-warning","animate__animated","animate__lightSpeedInRight","m-2")
    boton.style="background-color: darkmagenta; color: white; border-color: gold;"
    boton.setAttribute("type","button")
    boton.textContent="Ver Todos"

    // 3. padres e hijos 
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(costo)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
}

/* como recorrer un arreglo con JS
 1. tener un arreglo

productos.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio)
})*/
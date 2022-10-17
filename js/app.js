
let productos = [
    {id:1, nombre:"Pantalón Nina", imagen:"https://images.pexels.com/photos/7588165/pexels-photo-7588165.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 5000, disponible: true, prenda:"Pantalon", color:"Celeste", cantidad : 1},
    {id:2, nombre:"Sweater Suecia", imagen:"https://images.pexels.com/photos/3626312/pexels-photo-3626312.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4000, disponible: true, prenda:"Sweater", color:"Verde", cantidad : 1},
    {id:3, nombre:"Falda Amapola", imagen:"https://images.pexels.com/photos/12823102/pexels-photo-12823102.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4500, disponible: true, prenda:"Falda", color:"Negro", cantidad : 1},
]
//ARRAY DEL CARRITO
let carritoDeCompras = [];

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('carritoDeCompras')){
        carritoDeCompras = JSON.parse(localStorage.getItem('carritoDeCompras'))
        actualizarCarrito();
    }
})

let containerProductos = document.getElementById("containerProductos");
containerProductos.className = "d-flex flex-row justify-content-around";

/*fetch("productos.json")
    .then((resp)=>resp.json())
    .then((productos)=>{
        productos.forEach((producto)=>{
            let container = document.createElement("div");
    container.innerHTML = `
    <img src="${producto.imagen}" style="width: 18rem;">
    <h3>${producto.nombre}</h3>
    <p>$ ${producto.precio}</p>
    <button id="agregar ${producto.id}">Agregar al carrito</button> `;
    containerProductos.appendChild(container);

    const boton = document.getElementById(`agregar ${producto.id}`);

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
        
        Swal.fire({
            icon : "success",
            title : 'Has anadido una prenda al carrito',
            timer : 3000,
            showConfirmButton : false,
        })
    })
})
    })
*/
productos.forEach(producto => {
    let container = document.createElement("div");
    container.innerHTML = `
    <img src="${producto.imagen}" style="width: 18rem;">
    <h3>${producto.nombre}</h3>
    <p>$ ${producto.precio}</p>
    <button id="agregar ${producto.id}">Agregar al carrito</button> `;
    containerProductos.appendChild(container);

    const boton = document.getElementById(`agregar ${producto.id}`);

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
        
        Swal.fire({
            icon : "success",
            title : 'Has anadido una prenda al carrito',
            timer : 3000,
            showConfirmButton : false,
        })
    })

})

let containerFiltros = document.getElementById("containerFiltros");

let sinFiltro = document.createElement("div");
sinFiltro.innerHTML = `
<button id="noFiltro">Sin Filtro</button>
`;
containerFiltros.appendChild(sinFiltro);

let filtro1 = document.createElement("div");
filtro1.innerHTML = `
<button id="filtroPantalones">Pantalones</button>
`;
containerFiltros.appendChild(filtro1);

let filtro2 = document.createElement("div");
filtro2.innerHTML = `
<button id="filtroSweater">Sweaters</button>
`;
containerFiltros.appendChild(filtro2);

let filtro3 = document.createElement("div");
filtro3.innerHTML = `
<button id="filtroFaldas">Faldas</button>
`;
containerFiltros.appendChild(filtro3);

let filtro4 = document.createElement("div");
filtro4.innerHTML = `
<button id="filtroNegro">Color negro</button>
`;
containerFiltros.appendChild(filtro4);

let filtro5 = document.createElement("div");
filtro5.innerHTML = `
<button id="filtroVerde">Color verde</button>
`;
containerFiltros.appendChild(filtro5);

let filtro6 = document.createElement("div");
filtro6.innerHTML = `
<button id="filtroCeleste">Color celeste</button>
`;
containerFiltros.appendChild(filtro6);

const noFiltro = document.getElementById("noFiltro");
noFiltro.addEventListener("click", () => {
    containerProductos.innerHTML = "";
    productos.forEach(producto => {
        let container = document.createElement("div");
        container.innerHTML = `
        <img src="${producto.imagen}" style="width: 18rem;">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button id="agregar ${producto.id}">Agregar al carrito</button> `;
        containerProductos.appendChild(container);
    
        const boton = document.getElementById(`agregar ${producto.id}`);
    
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            
            Swal.fire({
                icon : "success",
                title : 'Has anadido una prenda al carrito',
                timer : 3000,
                showConfirmButton : false,
            })
        })
    
    })
})

const boton1 = document.getElementById("filtroPantalones");
boton1.addEventListener("click", () => {
    const pantalones = productos.filter(p => p.prenda == "Pantalon");
    console.log(pantalones);
    containerProductos.innerHTML = "";
    pantalones.forEach(producto => {
        let container = document.createElement("div");
        container.innerHTML = `
        <img src="${producto.imagen}" style="width: 18rem;">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button id="agregar ${producto.id}">Agregar al carrito</button> `;
        containerProductos.appendChild(container);
    
        const boton = document.getElementById(`agregar ${producto.id}`);
    
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            
            Swal.fire({
                icon : "success",
                title : 'Has anadido una prenda al carrito',
                timer : 3000,
                showConfirmButton : false,
            })
        })
    
    })
})

const boton2 = document.getElementById("filtroSweater");
boton2.addEventListener("click", () => {
    const sweater = productos.filter(p => p.prenda == "Sweater");
    console.log(sweater);
    containerProductos.innerHTML = "";
    sweater.forEach(producto => {
        let container = document.createElement("div");
        container.innerHTML = `
        <img src="${producto.imagen}" style="width: 18rem;">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button id="agregar ${producto.id}">Agregar al carrito</button> `;
        containerProductos.appendChild(container);
    
        const boton = document.getElementById(`agregar ${producto.id}`);
    
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            
            Swal.fire({
                icon : "success",
                title : 'Has anadido una prenda al carrito',
                timer : 3000,
                showConfirmButton : false,
            })
        })
    
    })
})

const boton3 = document.getElementById("filtroFaldas");
boton3.addEventListener("click", () => {
    const faldas = productos.filter(p => p.prenda ==  "Falda");
    console.log(faldas);
    containerProductos.innerHTML = "";
    faldas.forEach(producto => {
        let container = document.createElement("div");
        container.innerHTML = `
        <img src="${producto.imagen}" style="width: 18rem;">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button id="agregar ${producto.id}">Agregar al carrito</button> `;
        containerProductos.appendChild(container);
    
        const boton = document.getElementById(`agregar ${producto.id}`);
    
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            
            Swal.fire({
                icon : "success",
                title : 'Has anadido una prenda al carrito',
                timer : 3000,
                showConfirmButton : false,
            })
        })
    
    })
})

const boton4 = document.getElementById("filtroNegro");
boton4.addEventListener("click", () => {
    const negro = productos.filter(p => p.color ==  "Negro");
    console.log(negro);
    containerProductos.innerHTML = "";
    negro.forEach(producto => {
        let container = document.createElement("div");
        container.innerHTML = `
        <img src="${producto.imagen}" style="width: 18rem;">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button id="agregar ${producto.id}">Agregar al carrito</button> `;
        containerProductos.appendChild(container);
    
        const boton = document.getElementById(`agregar ${producto.id}`);
    
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            
            Swal.fire({
                icon : "success",
                title : 'Has anadido una prenda al carrito',
                timer : 3000,
                showConfirmButton : false,
            })
        })
    
    })
})

const boton5 = document.getElementById("filtroVerde");
boton5.addEventListener("click", () => {
    const verde = productos.filter(p => p.color == "Verde");
    console.log(verde);
    containerProductos.innerHTML = "";
    verde.forEach(producto => {
        let container = document.createElement("div");
        container.innerHTML = `
        <img src="${producto.imagen}" style="width: 18rem;">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button id="agregar ${producto.id}">Agregar al carrito</button> `;
        containerProductos.appendChild(container);
    
        const boton = document.getElementById(`agregar ${producto.id}`);
    
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            
            Swal.fire({
                icon : "success",
                title : 'Has anadido una prenda al carrito',
                timer : 3000,
                showConfirmButton : false,
            })
        })
    
    })
})

const boton6 = document.getElementById("filtroCeleste");
boton6.addEventListener("click", () => {
    const celeste = productos.filter(p => p.color == "Celeste");
    console.log(celeste);
    containerProductos.innerHTML = "";
    celeste.forEach(producto => {
        let container = document.createElement("div");
        container.innerHTML = `
        <img src="${producto.imagen}" style="width: 18rem;">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button id="agregar ${producto.id}">Agregar al carrito</button> `;
        containerProductos.appendChild(container);
    
        const boton = document.getElementById(`agregar ${producto.id}`);
    
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            
            Swal.fire({
                icon : "success",
                title : 'Has anadido una prenda al carrito',
                timer : 3000,
                showConfirmButton : false,
            })
        })
    
    })
})



const agregarAlCarrito = (prodId) => {
    const yaEstaEnCarrito = carritoDeCompras.some((prod) => prod.id === prodId);
    if (yaEstaEnCarrito){
        const prod = carritoDeCompras.map (prod =>{
            if(prod.id === prodId){
                prod.cantidad++
            }   
        })
    }else{
    const item = productos.find((prod) => prod.id === prodId);
    carritoDeCompras.push(item);
    console.log(carritoDeCompras);
    }
    actualizarCarrito();
    }



    const eliminarDelCarrito = (prodId) => { 
    const item = carritoDeCompras.find((prod) => prod.id === prodId);
    const indice = carritoDeCompras.indexOf(item);
    carritoDeCompras.splice(indice, 1);
    console.log(carritoDeCompras);
    actualizarCarrito();}


let contenidoCarrito = document.getElementById("contenidoCarrito");
const actualizarCarrito = () => {
    contenidoCarrito.innerHTML = "";
    carritoDeCompras.forEach((prod) => {
        const carritoContent = document.createElement('div');
        carritoContent.innerHTML = `
    <h3>${prod.nombre}</h3>
    <p>$${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    <button onclick="eliminarDelCarrito(${prod.id})"  type="button">Eliminar del carrito 🗑</button>
    `;
    contenidoCarrito.appendChild(carritoContent)

    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras));
    
    
})

let total = carritoDeCompras.reduce((acc, prod) => acc + prod.precio * prod.cantidad , 0);
console.log(carritoDeCompras);


totalCompra.innerHTML = `<h4>Total a pagar $${total}</h4>`;

}


let compraTotal = document.getElementById("compraTotal");
let totalCompra = document.createElement("div");

compraTotal.appendChild(totalCompra);


const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    carritoDeCompras.length =  0;
    actualizarCarrito();
})

//repetido
let total = carritoDeCompras.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);



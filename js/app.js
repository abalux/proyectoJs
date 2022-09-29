//ARRAY DEL STOCK
let productos = [
    {id:1, nombre:"Pantalón Nina", imagen:"https://images.pexels.com/photos/7588165/pexels-photo-7588165.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 5000, disponible: true, prenda:"Jean slouchy con roturas", color:"Celeste nevado", cantidad : 1},
    {id:2, nombre:"Sweater Suecia", imagen:"https://images.pexels.com/photos/3626312/pexels-photo-3626312.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4000, disponible: true, prenda:"Sweater amplio con cuello de tortuga", color:"Verde esmeralda", cantidad : 1},
    {id:3, nombre:"Falda Amapola", imagen:"https://images.pexels.com/photos/12823102/pexels-photo-12823102.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4500, disponible: true, prenda:"Falda midi", color:"Estampado negro y blanco", cantidad : 1},
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
        agregarAlCarrito(producto.id)
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

//metodos de pago del total
    let pago = document.getElementById("metodosDePago");
let comprarTarjeta = document.getElementById("tarjeta");
let compraTarjeta = document.getElementById("lugarTarjeta");
let unaCuota = document.getElementById("1cuota");
let lugarUnaCuota = document.getElementById("lugarUnaCuota");
let tresCuotas = document.getElementById("3cuotas");
let lugarTresCuotas = document.getElementById("lugarTresCuotas");
let seisCuotas = document.getElementById("6cuotas");
let lugarSeisCuotas = document.getElementById("lugarSeisCuotas");
let doceCuotas = document.getElementById("12cuotas");
let lugarDoceCuotas = document.getElementById("lugarDoceCuotas");
let comprarDebito = document.getElementById("debito");
let compraDebito = document.getElementById("lugarDebito");
let comprarTransferencia = document.getElementById("transferencia");
let compraTransferencia = document.getElementById("lugarTransferencia");



    let buttons = document.createElement('div');
    buttons.className = "d-flex flex-row justify-content-around";
    buttons.innerHTML = `<button id="tarjeta" type="button">Pagar con TARJETA</button>
    <button id="debito" type="button">Pagar con DÉBITO</button>
    <button id="transferencia" type="button">Pagar con TRANSFERENCIA BANCARIA</button>
    `;
    //pago.appendChild(buttons);
pago.appendChild(buttons);

//para comprar con tarjeta

    comprarTarjeta.addEventListener("click",() => {
    let divTarjeta = document.createElement("div");
    divTarjeta.innerHTML = `<h2>"Usted ha elegido la opción de pagar con Tarjeta de crédito, por favor elija en cuantas cuotas quiere pagar la compra"</h2>
    <button id="1cuota" type="button">1 CUOTA</button>
    <button id="3cuotas" type="button">3 CUOTAS</button>
    <button id="6cuotas" type="button">6 CUOTAS</button>
    <button id="12cuotas" type="button">12 CUOTAS</button>`;
    compraTarjeta.appendChild(divTarjeta);


//para comprar con tarjeta de credito -1 cuota

unaCuota.addEventListener("click", () =>{
    let cuotaUno = document.createElement("div");
    cuotaUno.innerHTML = `
    <p>El total a pagar es una cuota de $${total}</p>
    `;
    lugarUnaCuota.appendChild(cuotaUno);
});

//para comprar con tarjeta de credito- 3 cuotas

tresCuotas.addEventListener("click", () =>{
    let tresCuotass = parseInt(total / 3);
    let cuotaTres = document.createElement("div");
    cuotaTres.innerHTML = `
    <p>El total a pagar son tres cuotas sin interés de $${tresCuotass} cada una.</p>
    `;
    lugarTresCuotas.appendChild(cuotaTres);
});


//para comprar con tarjeta de crédito- 6 cuotas

seisCuotas.addEventListener("click", () =>{
    let seisCuotass = parseInt((total * 1.10) / 6);
    let cuotaSeis = document.createElement("div");
    cuotaSeis.innerHTML = `
    <p>El total a pagar son 6 cuotas con interés de $${seisCuotass} cada una.</p>
    `;
    lugarSeisCuotas.appendChild(cuotaSeis);
});

//para comprar con tarjeta de credito-12 cuotas

doceCuotas.addEventListener("click", () =>{
    let doceCuotass = parseInt((total * 1.15) / 12);
    let cuotaDoce = document.createElement("div");
    cuotaDoce.innerHTML = `
    <p>El total a pagar son 12 cuotas con interés de $${doceCuotass} cada una.</p>
    `;
    lugarDoceCuotas.appendChild(cuotaDoce);
    
})

})


//para comprar con debito

comprarDebito.addEventListener("click", () => {
    let divDebito = document.createElement("div");
    let descuentoEfectivo = parseFloat(total * 0.9);
    divDebito.innerHTML = `<p>Usted ha elegido la opción de pagar con Tarjeta de débito, por lo que se le otorga un descuento del 10% en el total de la compra.</p>
    <p>El total a pagar es el monto de $${descuentoEfectivo}</p>`;
compraDebito.appendChild(divDebito);
})

//para comprar con transferencia

comprarTransferencia.addEventListener("click", () => {
    let divTransferencia = document.createElement("div");
    let descuentoTransferencia = parseFloat(total * 0.9);
    divTransferencia.innerHTML = `<p>Usted ha elegido la opción de pagar por Transferencia Bancaria, por lo que se le otorga un descuento del 10% en el total de la compra.</p>
    <p>El total a pagar es el monto de $${descuentoTransferencia}</p>`;
compraTransferencia.appendChild(divTransferencia);
})


let productos = [
    {id:1, nombre:"Pantalón Nina", imagen:"https://images.pexels.com/photos/7588165/pexels-photo-7588165.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 5000, disponible: true, prenda:"Jean slouchy con roturas", color:"Celeste nevado"},
    {id:2, nombre:"Sweater Suecia", imagen:"https://images.pexels.com/photos/3626312/pexels-photo-3626312.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4000, disponible: true, prenda:"Sweater amplio con cuello de tortuga", color:"Verde esmeralda"},
    {id:3, nombre:"Falda Amapola", imagen:"https://images.pexels.com/photos/12823102/pexels-photo-12823102.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4500, disponible: true, prenda:"Falda midi", color:"Estampado negro y blanco"},
]

//Utilizo el local storage con json
const productosStr = JSON.stringify(productos);
localStorage.setItem("Productos", productosStr);

const productoss= JSON.parse(localStorage.getItem("Productos"));
console.log(productoss);
//


let carritoDeCompras = [];

let containerProductos = document.getElementById("containerProductos");
productos.forEach(producto => {
    let container = document.createElement("div");
    container.innerHTML = `
    <img src="${producto.imagen}" style="width: 18rem;">
    <h3>${producto.nombre}</h3>
    <p>$ ${producto.precio}</p>
    `;

    containerProductos.appendChild(container);

    let comprarButton = document.createElement("button");
    comprarButton.innerText = "Anadir al carrito";

    containerProductos.appendChild(comprarButton);

    comprarButton.addEventListener("click", () =>{
        carritoDeCompras.push({
            nombre : producto.nombre,
            precio : producto.precio,
            id : producto.id,
        });
        console.log(carritoDeCompras);

    })
});

let carritoCompras = document.getElementById("carritoCompras");
let contenidoCarrito = document.getElementById("contenidoCarrito");

carritoCompras.addEventListener("click", () =>{
    contenidoCarrito.innerHTML = "";
    contenidoCarrito.style.display = "flex";
    let carritoHeader = document.createElement("div");
    carritoHeader.innerHTML = `
    <h1>Carrito de Compras</h1>
    `;
    contenidoCarrito.appendChild(carritoHeader);

    let exitButton = document.createElement("h2");
    exitButton.innerText = "X";
    exitButton.addEventListener("click", () =>{
        contenidoCarrito.style.display = "none";
    })

    carritoHeader.appendChild(exitButton);
    
    carritoDeCompras.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        `;
    contenidoCarrito.appendChild(carritoContent);
    })
    
    let total = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0);
    
    let totalCompra = document.createElement("div");
    totalCompra.innerHTML = `<h4>Total a pagar $${total}</h4>`;
    contenidoCarrito.appendChild(totalCompra);


    //let pago = document.getElementById("metodosDePago");

    let buttons = document.createElement('div');
    buttons.className = "d-flex flex-row justify-content-around";
    buttons.innerHTML = `<button id="tarjeta" type="button">Pagar con TARJETA</button>
    <button id="debito" type="button">Pagar con DÉBITO</button>
    <button id="transferencia" type="button">Pagar con TRANSFERENCIA BANCARIA</button>
    `;
    //pago.appendChild(buttons);
    contenidoCarrito.appendChild(buttons);

let comprarTarjeta = document.getElementById("tarjeta");
let compraTarjeta = document.getElementById("lugarTarjeta");
comprarTarjeta.addEventListener("click",() => {
    let divTarjeta = document.createElement("div");
    divTarjeta.innerHTML = `<h2>"Usted ha elegido la opción de pagar con Tarjeta de crédito, por favor elija en cuantas cuotas quiere pagar la compra"</h2>
    <button id="1cuota" type="button">1 CUOTA</button>
    <button id="3cuotas" type="button">3 CUOTAS</button>
    <button id="6cuotas" type="button">6 CUOTAS</button>
    <button id="12cuotas" type="button">12 CUOTAS</button>`;
compraTarjeta.appendChild(divTarjeta);
contenidoCarrito.appendChild(compraTarjeta);

let unaCuota = document.getElementById("1cuota");
let lugarUnaCuota = document.getElementById("lugarUnaCuota");
unaCuota.addEventListener("click", () =>{
    let cuotaUno = document.createElement("div");
    cuotaUno.innerHTML = `
    <p>El total a pagar es una cuota de $${total}</p>
    `;
    lugarUnaCuota.appendChild(cuotaUno);
    contenidoCarrito.appendChild(lugarUnaCuota);
});

let tresCuotas = document.getElementById("3cuotas");
let lugarTresCuotas = document.getElementById("lugarTresCuotas");
tresCuotas.addEventListener("click", () =>{
    let tresCuotass = parseInt(total / 3);
    let cuotaTres = document.createElement("div");
    cuotaTres.innerHTML = `
    <p>El total a pagar son tres cuotas sin interés de $${tresCuotass} cada una.</p>
    `;
    lugarTresCuotas.appendChild(cuotaTres);
    contenidoCarrito.appendChild(lugarTresCuotas);
});

let seisCuotas = document.getElementById("6cuotas");
let lugarSeisCuotas = document.getElementById("lugarSeisCuotas");
seisCuotas.addEventListener("click", () =>{
    let seisCuotass = parseInt((total * 1.10) / 6);
    let cuotaSeis = document.createElement("div");
    cuotaSeis.innerHTML = `
    <p>El total a pagar son 6 cuotas con interés de $${seisCuotass} cada una.</p>
    `;
    lugarSeisCuotas.appendChild(cuotaSeis);
    contenidoCarrito.appendChild(lugarSeisCuotas);
});

let doceCuotas = document.getElementById("12cuotas");
let lugarDoceCuotas = document.getElementById("lugarDoceCuotas");
doceCuotas.addEventListener("click", () =>{
    let doceCuotass = parseInt((total * 1.15) / 12);
    let cuotaDoce = document.createElement("div");
    cuotaDoce.innerHTML = `
    <p>El total a pagar son 12 cuotas con interés de $${doceCuotass} cada una.</p>
    `;
    lugarDoceCuotas.appendChild(cuotaDoce);
    contenidoCarrito.appendChild(lugarDoceCuotas);
    
})

})




let comprarDebito = document.getElementById("debito");
let compraDebito = document.getElementById("lugarDebito");
comprarDebito.addEventListener("click", () => {
    let divDebito = document.createElement("div");
    let descuentoEfectivo = parseFloat(total * 0.9);
    divDebito.innerHTML = `<h2>"Usted ha elegido la opción de pagar con Tarjeta de débito, por lo que se le otorga un descuento del 10% en el total de la compra."</h2>
    <h3>El total a pagar es el monto de $${descuentoEfectivo}</h3>`;
compraDebito.appendChild(divDebito);
contenidoCarrito.appendChild(compraDebito);
})

let comprarTransferencia = document.getElementById("transferencia");
let compraTransferencia = document.getElementById("lugarTransferencia");
comprarTransferencia.addEventListener("click", () => {
    let divTransferencia = document.createElement("div");
    let descuentoTransferencia = parseFloat(total * 0.9);
    divTransferencia.innerHTML = `<h2>"Usted ha elegido la opción de pagar por Transferencia Bancaria, por lo que se le otorga un descuento del 10% en el total de la compra."</h2>
    <h3>El total a pagar es el monto de $${descuentoTransferencia}</h3>`;
compraTransferencia.appendChild(divTransferencia);
contenidoCarrito.appendChild(compraTransferencia);
})

})








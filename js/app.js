let productos = [
    {id:1, nombre:"Pantalón Nina", imagen:"https://images.pexels.com/photos/7588165/pexels-photo-7588165.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 5000, disponible: true, prenda:"Jean slouchy con roturas", color:"Celeste nevado"},
    {id:2, nombre:"Sweater Suecia", imagen:"https://images.pexels.com/photos/3626312/pexels-photo-3626312.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4000, disponible: true, prenda:"Sweater amplio con cuello de tortuga", color:"Verde esmeralda"},
    {id:3, nombre:"Falda Amapola", imagen:"https://images.pexels.com/photos/12823102/pexels-photo-12823102.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 4500, disponible: true, prenda:"Falda midi", color:"Estampado negro y blanco"},
]

let deposito = document.querySelector(".containerProductos");
deposito.className = "d-flex flex-row justify-content-around";
for (producto of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<img src=${producto.imagen} style="width: 18rem;" alt="">
                            <h3>${producto.nombre}</h3>
                            <h4>Precio: $${producto.precio}</h4>
                            <p>Descripción: ${producto.prenda}</p>
                            <p>Color: ${producto.color}</p>
                            <button id="${producto.id}" type="button">Agregar al carrito</button>`;
    deposito.appendChild(contenedor);
} 
let carritoCompra = [];
let botonComprar = document.getElementById(`${producto.id}`);

botonComprar.addEventListener(`click`, () => {
    agregarAlCarrito();

})
function agregarAlCarrito() {
    carritoCompra.push(`${producto.nombre}`);
    console.log(carritoCompra);
}









//
let nombreCompleto = prompt("Este es el shop online de Dina's, por favor para mejor atención ingrese su nombre completo. Si quiere salir presione ESC.");
while ((nombreCompleto == "") || (nombreCompleto == " ")){
    alert("Estimado cliente, eso no es un nombre válido. Por favor ingrese su nombre.");
    nombreCompleto = prompt("Ingrese su nombre completo esta vez por favor.");
}

if(nombreCompleto == "ESC"){
    alert("Esperamos su compra pacientemente, muchas gracias.")
}else{
    let respuestaNombre = "Hola" + " " + nombreCompleto;
    alert(respuestaNombre);
    alert("Bienvenido/a al carrito de compras");
    alert("A continuación le mostramos los productos y sus precios");
    for (Producto of productos){
    alert(Producto.nombre +" " + Producto.precio);
    }
    alert("Recuerde que se pueden anadir hasta 2 prendas por compra");
    let producto1 = parseInt(prompt("Ingrese el monto del producto a comprar"));
    alert("Usted ha ingresado el monto de " + producto1);
    let producto2 = parseInt(prompt("Ingresar otro monto de producto a comprar"));
    let resultado = producto1 + producto2;
    alert("El monto total de la compra es" + " " + resultado);
    if (resultado >= 2000){
    alert("Estimado cliente " + nombreCompleto + ", gracias a su compra superior a $2000, le otorgamos el envío a domicilio sin cargo.");
    }
    efectuarCompra();
    function efectuarCompra(){
    let salida = prompt("Si estas seguro de efectuar la compra escribe SÍ");
    if ((salida == "Sí") || (salida == "SÍ") || (salida == "si" ) || (salida == "SI") || (salida == "Si")){
    pagoCompra();
    }else{
    alert("Esperaremos pacientemente su compra, muchas gracias.");
    }
    }

    function pagoCompra(){
    let respuesta = prompt("Cómo quiere pagar el monto total de compra? Ingrese TARJETA, DEBITO, TRANSFERENCIA o MP (MERCADO PAGO) en mayuscula dependiendo del método de pago que elija y será redirigido");
    switch (respuesta) {
    case "TARJETA":
        alert("Usted ha elegido la opción de pagar con tarjeta de crédito, a continuación elija en cuantas cuotas quiere pagar");
        let cuotas = prompt("Puedes pagar en 1, 3, 6 y 12 cuotas. Por favor ingrese el número que desea, tenga en cuenta que si elige 6 tendrá un recargo del 10%, y si elige 12 un recargo del 15%.");
        switch (cuotas) {
            case "1":
                alert("El total a pagar es una cuota de $" + resultado);
                break;
            case "3":
                let tresCuotas = parseInt(resultado/ 3);
                alert("El total a pagar son tres cuotas sin interés de $" + tresCuotas + " cada una.");
                break;
            case "6":
                let seisCuotas = parseInt((resultado * 1.10) / 6);
                alert("El total a pagar son 6 cuotas con interés de $" + seisCuotas + " cada una.");
                break;
            case "12":
                let doceCuotas = parseInt((resultado * 1.15) / 12);
                alert("El total a pagar son 12 cuotas con interés de $" + doceCuotas + " cada una.");
                break;
        }break;    
    case "DEBITO":
        alert("Usted ha elegido la opción de pagar con Tarjeta de débito, por lo que se le otorga un descuento del 10% en el total de la compra.");
        let descuentoEfectivo = parseFloat(resultado * 0.9);
        alert("El total a pagar es el monto de $" + descuentoEfectivo);
        break;
    case "TRANSFERENCIA":
        alert("Usted ha elegido la opción de pagar por Transferencia Bancaria, por lo que se le otorga un descuento del 10% en el total de la compra.");
        let descuentoTransferencia = parseFloat(resultado * 0.9);
        alert("El total a pagar es el monto de $" + descuentoTransferencia);
        break;
    case "MP":
        alert("Usted ha elegido la opción de pagar a través de la aplicación Mercado Pago, a continuación elija en cuantas cuotas quiere pagar");
        let cuotas2 = prompt("Puedes pagar en 1, 3, 6 y 12 cuotas. Por favor ingrese el número que desea, tenga en cuenta que si elige 6 tendrá un recargo del 10%, y si elige 12 un recargo del 15%.");
        switch (cuotas2) {
            case "1":
                alert("El total a pagar es una cuota de $" + resultado);
                break;
            case "3":
                let tresCuotas = parseInt(resultado / 3);
                alert("El total a pagar son tres cuotas sin interés de $" + tresCuotas + " cada una.");
                break;
            case "6":
                let seisCuotas = parseInt((resultado * 1.10) / 6);
                alert("El total a pagar son 6 cuotas con interés de $" + seisCuotas + " cada una.");
                break;
            case "12":
                let doceCuotas = parseInt((resultado * 1.15) / 12);
                alert("El total a pagar son 12 cuotas con interés de $" + doceCuotas + " cada una.");
                break;
        }
        break;
    default:
        alert("Lo sentimos, no aceptamos ese método de pago, por favor intente con otro.");
        let otroPago = prompt("Desea ingresar otro medio de pago? Ingrese (en mayúsculas) SI para continuar u otra palabra para salir.");
        alert("Usted ha dicho: "+ otroPago);
        if(otroPago == "SI"){
            pagoCompra();
        }else{
            alert("Esperaremos pacientemente su compra, muchas gracias.")
        }
        break;
    }
}
}





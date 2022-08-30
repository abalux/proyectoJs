let nombreCompleto = prompt("Este es el shop online de Dina's, por favor para mejor atención ingrese su nombre completo");
while ( nombreCompleto == "" ){
    alert("Estimado cliente, eso no es un nombre válido. Por favor ingrese su nombre.");
    nombreCompleto = prompt("Ingrese su nombre completo esta vez por favor.");
}
let respuestaNombre = "Hola" + " " + nombreCompleto;
alert(respuestaNombre);

alert("Bienvenido/a al carrito de compras, en breve comenzaremos");
let producto1 = parseInt(prompt("Ingrese el monto del producto a comprar"));
alert("Usted ha ingresado el monto de " + producto1);
let producto2 = parseInt(prompt("Ingresar otro monto de producto a comprar"));
let resultado = producto1 + producto2;
alert("El monto total de la compra es" + " " + resultado);
if (resultado >= 2000){
    alert("Estimado cliente " + nombreCompleto + ", gracias a su compra superior a $2000, le otorgamos el envío a domicilio sin cargo.");
    }


function pagoCompra(){
    let respuesta = prompt("Cómo quiere pagar el monto total de compra?");
    switch (respuesta) {
    case "1":
        alert("Usted ha elegido la opción de pagar con tarjeta de crédito, a continuación elija en cuantas cuotas quiere pagar");
        let cuotas = prompt("Puedes pagar en 1, 3, 6 y 12 cuotas. Por favor ingrese el número que desea, tenga en cuenta que si elige 6 tendrá un recargo del 10%, y si elige 12 un recargo del 15%.");
        switch (cuotas) {
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
        }break;    
    case "2":
        alert("Usted ha elegido la opción de pagar con Tarjeta de débito, por lo que se le otorga un descuento del 10% en el total de la compra.");
        let descuentoEfectivo = parseFloat(resultado * 0.9);
        alert("El total a pagar es el monto de $" + descuentoEfectivo);
        break;
    default:
        alert("Lo sentimos, no aceptamos ese método de pago, por favor intente con otro.");
        break;
}
}

let salida = prompt("Si estas seguro de efectuar la compra escribe SÍ");
if ((salida == "Sí") || (salida == "SÍ") || (salida == "si" ) || (salida == "SI")){
    pagoCompra();
}else{
    alert("Esperaremos pacientemente su compra, muchas gracias.");
}



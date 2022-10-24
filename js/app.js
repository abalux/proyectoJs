
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

fetch("productos.json")
    .then((resp)=>resp.json())
    .then((productos)=>{
        productos.forEach((producto)=>{
            let container = document.createElement("div");
            container.classList = "pe-2 ps-2 pb-5 pt-2";
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

let containerFiltros = document.getElementById("containerFiltros");

let sinFiltro = document.createElement("div");
sinFiltro.innerHTML = `
<button class="mt-2 mb-2 filterBtn" id="noFiltro">Sin Filtro</button>
`;
containerFiltros.appendChild(sinFiltro);

let filtro1 = document.createElement("div");
filtro1.innerHTML = `
<button class="mb-1 mt-1 filterBtn" id="filtroPantalones">Pantalones</button>
`;
containerFiltros.appendChild(filtro1);

let filtro2 = document.createElement("div");
filtro2.innerHTML = `
<button class="mb-1 mt-1 filterBtn" id="filtroSweater">Sweaters</button>
`;
containerFiltros.appendChild(filtro2);

let filtro3 = document.createElement("div");
filtro3.innerHTML = `
<button class="mb-1 mt-1 filterBtn" id="filtroFaldas">Faldas</button>
`;
containerFiltros.appendChild(filtro3);

let filtro4 = document.createElement("div");
filtro4.innerHTML = `
<button class="mt-1 mb-1 filterBtn" id="filtroNegro">Color negro</button>
`;
containerFiltros.appendChild(filtro4);

let filtro5 = document.createElement("div");
filtro5.innerHTML = `
<button class="mt-1 mb-1 filterBtn" id="filtroVerde">Color verde</button>
`;
containerFiltros.appendChild(filtro5);

let filtro6 = document.createElement("div");
filtro6.innerHTML = `
<button class="mt-1 mb-1 filterBtn" id="filtroCeleste">Color celeste</button>
`;
containerFiltros.appendChild(filtro6);

const noFiltro = document.getElementById("noFiltro");
noFiltro.addEventListener("click", () => {
    containerProductos.innerHTML = "";
    productos.forEach(producto => {
        let container = document.createElement("div");
        container.classList = "pe-2 ps-2 pb-5 pt-2";
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
        container.classList = "pb-5 pt-2";
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
        container.classList = "pb-5 pt-2";
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
        container.classList = "pb-5 pt-2";
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
        container.classList = "pb-5 pt-2";
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
        container.classList = "pb-5 pt-2";
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
        container.classList = "pb-5 pt-2";
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


//formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}Grupo`).classList.remove('formularioGrupo-incorrecto');
		document.getElementById(`${campo}Grupo`).classList.add('formularioGrupo-correcto');
		document.querySelector(`#${campo}Grupo i`).classList.add('fa-check-circle');
		document.querySelector(`#${campo}Grupo i`).classList.remove('fa-times-circle');
		document.querySelector(`#${campo}Grupo .formularioInput-error`).classList.remove('formularioInput-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}Grupo`).classList.add('formularioGrupo-incorrecto');
		document.getElementById(`${campo}Grupo`).classList.remove('formularioGrupo-correcto');
		document.querySelector(`#${campo}Grupo i`).classList.add('fa-times-circle');
		document.querySelector(`#${campo}Grupo i`).classList.remove('fa-check-circle');
		document.querySelector(`#${campo}Grupo .formularioInput-error`).classList.add('formularioInput-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`password2Grupo`).classList.add('formularioGrupo-incorrecto');
		document.getElementById(`password2Grupo`).classList.remove('formularioGrupo-correcto');
		document.querySelector(`#password2Grupo i`).classList.add('fa-times-circle');
		document.querySelector(`#password2Grupo i`).classList.remove('fa-check-circle');
		document.querySelector(`#password2Grupo .formularioInput-error`).classList.add('formularioInput-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`password2Grupo`).classList.remove('formularioGrupo-incorrecto');
		document.getElementById(`password2Grupo`).classList.add('formularioGrupo-correcto');
		document.querySelector(`#password2Grupo i`).classList.remove('fa-times-circle');
		document.querySelector(`#password2Grupo i`).classList.add('fa-check-circle');
		document.querySelector(`#password2Grupo .formularioInput-error`).classList.remove('formularioInput-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formularioMensaje-exito').classList.add('formularioMensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formularioMensaje-exito').classList.remove('formularioMensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formularioGrupo-correcto').forEach((icono) => {
			icono.classList.remove('formularioGrupo-correcto');
		});
	} else {
		document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo');
	}
});


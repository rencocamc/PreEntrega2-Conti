let fin = false;
let carrito = "";
let valorTotal = 0;

class Bebida {
    constructor (nombre, marca, precio){
        this.nombre=nombre;
        this.marca=marca;
        this.precio=precio;
    }
}

let Fernet = new Bebida("Fernet", "Branca", 560);
let Ron = new Bebida("Ron", "Captain Morgan", 450);
let Gin = new Bebida("Gin", "Taqueray", 690);

let Coca = new Bebida("Coca", "Coca cola", 120);
let Pomelo = new Bebida("Pomelo", "Schweppes", 130);;
let Tonica = new Bebida("Tónica", "Schweppes", 160);



const suma = (a,b) => a+b;

function pedirYValidarInt(menor, mayor, descripcion) {
    let dato; 
    do{
        dato = parseInt(prompt(descripcion))
        if (dato<menor || dato>mayor || isNaN(dato)){
            alert("El valor ingresado está fuera del rango de opciones, intente nuevamente.");
        }
    } while (dato<menor || dato>mayor || isNaN(dato));
    return dato;
}

function pedirYValidarString(descripcion) {
    let dato; 
    do{
        dato = prompt(descripcion)
        if (dato == ""){
            alert("Intente nuevamente.");
        }
    } while (dato == "");
    return dato;
}

alert("Bienvenido al Almacén de Bebidas!\nPresione aceptar para iniciar su pedido.");

//Loop principal
while (!fin) {
    let opMenu = pedirYValidarInt(1,4,"Ingrese el número para acceder a la opción que desea del menú:\n1-Bebidas\n2-Ver carrito\n3-Vaciar carrito\n4-Finalizar compra\n");
    //Menú principal
    switch (opMenu) {
        case 1:
            let tipoId = pedirYValidarInt(1,3,"Ingrese el número del tipo de bebida que desea agregar:\n1-Bebidas alcoholicas\n2-Bebidas dulces\n3-Volver atrás\n");
            let cant;
            //Tipos de bebidas
            switch (tipoId) {
                case 1:
                    let alcoholId = pedirYValidarInt(1,4,`Ingrese el número de la bebida alcoholica que desea agregar:\n1-Fernet $${precioFernet}\n2-Ron $${precioRon}\n3-Gin $${precioGin}\n4-Volver atrás\n`);
                    if(alcoholId == 4) break;
                    cant = pedirYValidarInt(1,99,"Ingrese la cantidad:\n")
                    switch (alcoholId) {
                        case 1:
                            carrito = carrito+`${cant} Fernet $${precioFernet*cant}\n`;
                            valorTotal = suma(valorTotal,precioFernet*cant);
                            break;
                        case 2:
                            carrito = carrito+`${cant} Ron $${precioRon*cant}\n`;
                            valorTotal = suma(valorTotal,precioRon*cant);
                            break;
                        case 3:
                            carrito = carrito+`${cant} Gin $${precioGin*cant}\n`;
                            valorTotal = suma(valorTotal,precioGin*cant);
                            break;
                        default:
                            break;
                    }
                    break;
                case 2:
                    let dulceId = pedirYValidarInt(1,4,`Ingrese el número de la bebida dulce que desea agregar:\n1-Coca $${precioCoca}\n2-Pomelo $${precioPomelo}\n3-Tónica $${precioTonica}\n4-Volver atrás\n`)
                    if(dulceId == 4) break;
                    cant = pedirYValidarInt(1,99,"Ingrese la cantidad:\n")
                    switch (dulceId) {
                        case 1:
                            carrito = carrito+`${cant} Coca $${precioCoca*cant}\n`;
                            valorTotal = suma(valorTotal,precioCoca*cant);;
                            break;
                        case 2:
                            carrito = carrito+`${cant} Pomelo $${precioPomelo*cant}\n`;
                            valorTotal = suma(valorTotal,precioPomelo*cant);
                            break;
                        case 3:
                            carrito = carrito+`${cant} Tónica $${precioTonica*cant}\n`;
                            valorTotal = suma(valorTotal,precioTonica*cant);
                            break;
                        default:
                            break;
                    }
                    break;
                case 3:
                    break;
                default:
                    break;
            }
            break;
        case 2:
            if (carrito == "") {
                alert("Su carrito está vacio")
            } else {
                alert(`Su carrito contiene:\n${carrito}\nTotal: $${valorTotal}`)
            }
            break;
        case 3:
            if (carrito == "") {
                alert("Su carrito está vacio")
            } else {
                if (pedirYValidarInt(1,2,"Está seguro/a que desea vaciar el carrito?\n1-Si\n2-No\n") == 1) {
                    carrito = "";
                    valorTotal = 0;
                    alert(`Su carrito fue vaciado`)
                }
            }
            break;
        case 4:
            if (valorTotal != 0) {
                let nombre = pedirYValidarString("Ingrese su nombre.\n");
                let direccion = pedirYValidarString("Ingrese su dirección.\n");
                alert(`${nombre}, tu pedido fue realizado con éxito!\nEl valor total es de $${valorTotal}, y te lo enviaremos a ${direccion}.\nGracias por comprar en el Almacén de Bebidas!`)
                fin = true;
            }else{
                alert(`Gracias por visitar el Almacén de Bebidas!`)
                fin = true;
            }
            break;
        default:
            break;
    }
}

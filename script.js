const suma = (a,b) => a+b;

class Bebida {
    constructor (nombre, marca, precio){
        this.nombre=nombre;
        this.marca=marca;
        this.precio=precio;
    }

    toString(){
        return this.nombre+" "+this.marca+" $"+this.precio;
    }
}

class ItemCarrito {
    constructor(bebida, cant){
        this.bebida=bebida;
        this.cant=cant; 
    }

    toString(){
        return this.cant+" - "+this.bebida.toString();
    }
}

class Carrito {
    constructor(){
        this.total = 0;
        this.arrayCarrito = [];
    }

    agregarItem(bebida, cant){
        if(this.arrayCarrito == [] || !this.arrayCarrito.some((item)=> item.bebida == bebida)){
            this.arrayCarrito.push(new ItemCarrito(bebida, cant));
        }else{
            let aux = this.arrayCarrito.find((item)=> item.bebida == bebida)
            aux.cant = suma(aux.cant, cant);
        }
        this.total = suma(this.total,(bebida.precio)*cant);
    }
    
    toString(){
        let aux = "";
        for (let i = 0; i < this.arrayCarrito.length; i++) {
            aux = aux + this.arrayCarrito[i].toString()+"\n";
            
        }
        return aux +"\nValor total: $"+this.total;
    }
}

let fernet = new Bebida("Fernet", "Branca", 560);
let ron = new Bebida("Ron", "Captain Morgan", 450);
let gin = new Bebida("Gin", "Taqueray", 690);

let coca = new Bebida("Cola", "Coca cola", 120);
let pomelo = new Bebida("Pomelo", "Schweppes", 130);
let tonica = new Bebida("Tónica", "Schweppes", 160);

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
let fin = false;
let carrito = new Carrito();

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
                    let alcoholId = pedirYValidarInt(1,4,`Ingrese el número de la bebida alcoholica que desea agregar:\n1-${fernet.toString()}\n2-${ron.toString()}\n3-${gin.toString()}\n4-Volver atrás\n`);
                    if(alcoholId == 4) break;
                    cant = pedirYValidarInt(1,99,"Ingrese la cantidad:\n")
                    switch (alcoholId) {
                        case 1:
                            carrito.agregarItem(fernet,cant);
                            break;
                        case 2:
                            carrito.agregarItem(ron,cant);
                            break;
                        case 3:
                            carrito.agregarItem(gin,cant);
                            break;
                        default:
                            break;
                    }
                    break;
                case 2:
                    let dulceId = pedirYValidarInt(1,4,`Ingrese el número de la bebida dulce que desea agregar:\n1-${coca.toString()}\n2-${pomelo.toString()}\n3-${tonica.toString()}\n4-Volver atrás\n`)
                    if(dulceId == 4) break;
                    cant = pedirYValidarInt(1,99,"Ingrese la cantidad:\n")
                    switch (dulceId) {
                        case 1:
                            carrito.agregarItem(coca,cant);
                            break;
                        case 2:
                            carrito.agregarItem(pomelo,cant);
                            break;
                        case 3:
                            carrito.agregarItem(tonica,cant);
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
            if (carrito.total == 0) {
                alert("Su carrito está vacio")
            } else {
                alert(`Su carrito contiene:\n${carrito.toString()}`)
            }
            break;
        case 3:
            if (carrito.total == 0) {
                alert("Su carrito está vacio")
            } else {
                if (pedirYValidarInt(1,2,"Está seguro/a que desea vaciar el carrito?\n1-Si\n2-No\n") == 1) {
                    carrito.arrayCarrito = [];
                    carrito.total = 0;
                    alert(`Su carrito fue vaciado`)
                }
            }
            break;
        case 4:
            if (carrito.total != 0) {
                let nombre = pedirYValidarString("Ingrese su nombre.\n");
                let direccion = pedirYValidarString("Ingrese su dirección.\n");
                alert(`${nombre}, tu pedido fue realizado con éxito!\nEl valor total es de $${carrito.total}, y te lo enviaremos a ${direccion}.\n`)
            }
            alert(`Gracias por visitar el Almacén de Bebidas!`)
            fin = true;
            break;
        default:
            break;
    }
}

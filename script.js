alert("Bienvenido al Almacén de Bebidas!\nPresione aceptar para iniciar su pedido.");

let fin = false;
let carrito = "";
let precio = 0;

function pedirYValidarInt(menor, mayor, descripcion) {
    let dato; 
    do{
        dato = parseInt(prompt(descripcion))
        if (dato<menor || dato>mayor || isNaN(dato)){
            alert("El valor ingresado está fuera del rango de opciones, intente nuevamente.");
        }
    } while (dato<menor || dato>mayor);
    return dato;
}

//Loop principal

while (!fin) {
    let opMenu = pedirYValidarInt(1,3,"Ingrese el número para acceder a la opción que desea del menú:\n1-Bebidas\n2-Ver carrito\n3-Finalizar compra")
    switch (opMenu) {
        case 1:
            
            break;
        case 2:
            alert(`Su carrito contiene:\n ${carrito}`)
            break;
        case 3:
            alert("")
            fin = true;
            break;
        default:
            break;
    }
}

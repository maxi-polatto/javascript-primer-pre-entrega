let bienvenida = " HOLA BIENVENIDO A TODOS los DIAS "
alert(bienvenida);

function datosPersonales() {
    let nombre = prompt("Compartinos tu nombre:");
    let apellido = prompt("y tu apellido:");
    let direccion = prompt("de donde sos ?");
      
    alert("Listo !! " + nombre + " " + apellido + ", ya podes ingresar tu codigo");
}
  
datosPersonales();


let ingresoTienda=false;
let ingresoProveedores=false;


for (let i = 2; i >= 0; i--) {
    
    let ingresoCodigo =parseInt(prompt("ingresa tu codigo"));
 
 if (ingresoCodigo >= 1000) {
    alert("ESTAS EN NUESTRA TIENDA");
    ingresoTienda=true
    break;
}

else if (ingresoCodigo < 1000) {
        alert("INGRESASTE A ZONA PROVEEDORES");
        !ingresoProveedores
}
else {
    alert("error ingrese codigo valido")

} 
}
if (ingresoTienda){
let tortas= 5500;
let eclairs= 1000;
let croissants= 500;
let chocolates= 5000;
let total = 0;

let opcionCompra = prompt("Que te gustaria Comprar: \n1- Tortas.  \n2- Eclairs.  \n3- Croissants  \n4- Chocolates. \n5- total . \n Presiona x para finalizar compra.");
while (opcionCompra != "x") {

    switch (opcionCompra) {
        case "1":
            alert("elegiste torta $: " + tortas);
            let udsTortas = parseInt(prompt("decinos cuantas unidades queres?"))

            total += tortas*udsTortas;
            break;
        case "2":
            alert("elegiste eclairs $: "+eclairs);
            let udsEclaires = parseInt(prompt("decinos cuantas unidades queres?"))
            total += eclairs*udsEclaires;
            break;
        case "3":
            alert("elegiste croissant $: "+croissants);
            let udsCroisantes = parseInt(prompt("decinos cuantas unidades queres?"))
            total += eclairs*udsCroisantes;
            
            break;
        case "4":
            alert("elegiste chocolates $: "+chocolates);
            let udsChocolates =parseInt(prompt("decinos cuantas unidades queres?"))
            total += chocolates*udsChocolates;
            break;
        case "5":
            alert("total $: " + total);
            break;
        default:
            alert("la opcion no es valida");
            break;
    }
    
    opcionCompra = prompt("Que te gustaria Comprar: \n1 - Tortas.  \n2 - Eclairs.  \n3 -Croissants  \n4 -Chocolates. \n5 -total . \n Presiona x para finalizar compra.");
}
if (opcionCompra === "x") {
    alert("`Tu total es: $" + total);
  }
}

else{
    alert("no pudiste ingresar llamanos 0800 todos los dias")
}


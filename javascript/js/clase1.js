/* 

             ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗         
             ██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝         
             ██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║            
        ██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║            
        ╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██║        ██║            
         ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝            
                                                                                              
██╗███╗   ██╗████████╗██████╗  ██████╗ ██████╗ ██╗   ██╗ ██████╗ ██████╗██╗ ██████╗ ███╗   ██╗
██║████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔════╝██╔════╝██║██╔═══██╗████╗  ██║
██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║  ██║██║   ██║██║     ██║     ██║██║   ██║██╔██╗ ██║
██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║  ██║██║   ██║██║     ██║     ██║██║   ██║██║╚██╗██║
██║██║ ╚████║   ██║   ██║  ██║╚██████╔╝██████╔╝╚██████╔╝╚██████╗╚██████╗██║╚██████╔╝██║ ╚████║
╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                                                                                              

*/


alert("ventana emergente");
console.log("Texto de consola");

/*VARIABLES */

let nombre="Mariano"; /*string o cadena de caracteres */

var numero=18; /*numérico */

const PI=3.1416; /*numérico constante */

let hayClases=true; /*boolerano */

console.log((numero+25)+" "+nombre); /* concatenar y sumar */

console.log(hayClases); /*true */

let esFeriado=false;


/* CONDICIONALES*/

/* si...sino */

if (5 > 3){
  console.log("5 es mayor a 3");
} else {
  console.log("5 no es mayor a 3");
} 

console.log((5 > 3)? "5 es mayor a 3":"5 no es mayor a 3"); /*Ternario*/

if ((hayClases == true) && esFeriado != true ){
  console.log("Me conecto a la videollamada")
}else{
  console.log("no me conecto a la videollamada")
}

if ( 25 < 32 || 12 > 20) { /*uso de OPERADORES CONDICIONALES*/
  console.log("Se cumplió la condición")
}

/* MANEJO DE TEXTO */
/*CONCATENAMIENTO */
let saludo = "Hola, como estás?"
let saludar = saludo +" "+ nombre;
console.log(saludar);


/*capturar en una variable el id del contenedor de bootstrap para poder interactuar con HTML */
let elemento = document.getElementById("principal");

/* ver en la consola el contenido completo de la variable elemento */
console.log(elemento);

/* la variable ingresa contenido HTML en el contenedor*/
elemento.innerHTML="<h1 class='text-centetr bg-info'>"+saludar+"</h1><p>.innerHTML</p>";

/* OTRA ALTERNATIVA la variable ingresa contenido HTML en el contenedor*/
document.write("<h1 class='text-center bg-info'>"+saludar+"</h1><p>document.write</p>");

document.write("<div class='container'><div class='row' id='principal'><h1 class='text-center bg-info'>"+saludar+"</h1><p>document.write</p></div></div>");
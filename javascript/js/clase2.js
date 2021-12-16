
/*


             ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗                     
             ██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝                     
             ██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║                        
        ██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║                        
        ╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██║        ██║                        
         ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝                        
                                                                                                          
██╗███╗   ██╗████████╗██████╗  ██████╗ ██████╗ ██╗   ██╗ ██████╗ ██████╗██╗ ██████╗ ███╗   ██╗    ██████╗ 
██║████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔════╝██╔════╝██║██╔═══██╗████╗  ██║    ╚════██╗
██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║  ██║██║   ██║██║     ██║     ██║██║   ██║██╔██╗ ██║     █████╔╝
██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║  ██║██║   ██║██║     ██║     ██║██║   ██║██║╚██╗██║    ██╔═══╝ 
██║██║ ╚████║   ██║   ██║  ██║╚██████╔╝██████╔╝╚██████╔╝╚██████╗╚██████╗██║╚██████╔╝██║ ╚████║    ███████╗
╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝
                                                                                                          


*/


//alert("Hola Mundo!")/*Ventana emergente*/

console.log("Estamos en la consola") // mensaje en consola



/*VARIABLES*/

let nombre = "Luis Navas";/*tipo string*/

var numero = 10;/*Numerica*/

const PI = 3.1416;/*float */

let hayClases = true;/**boolean */

console.log((numero + 25) + " " + nombre)

console.log(hayClases)

console.log(5 > 8)

let esFeriado = false;


/*ESTRUCTURA DE CONTROL IF*/

/*si - sino */

/*ejemplo 1*/
if (8 >= 8) {/*si es verdadera, ejecuta*/
console.log("es correcto!")
} else {/*se es falso, ejecuta*/
console.log('No es correcto!')
}

/* se puede hacer lo mismo en una sola lína que tiene las 3 instrucciones */
console.log((5 > 3) ? "Es correcto 5 > 3" : "No es correcto");/*Ternario*/


/*ejemplo 2*/
if ((hayClases == true) && (esFeriado != true)) {/*para que sea true se tienen que cumplir ambas condiciones*/
console.log('Me conecto a la videollamada!')
} else {
console.log('No me conecto a la videollamada!')
}

/*USO DE OPERADORES CONDICIONALES */
if (25 < 32 || 12 > 20) {/*se cumple una de las dos condiciones*/
console.log('Se cumplió la condición')
}


/*MANEJO DE STRINGS o CADENA DE TEXTO*/

let saludo = "Hola, cómo estás? "
let saludar = saludo + nombre; /*se concatenan dos variables String*/


/*



██╗███╗   ██╗████████╗███████╗██████╗  █████╗  ██████╗ ██████╗██╗ ██████╗ ███╗   ██╗                                              
██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝██║██╔═══██╗████╗  ██║                                              
██║██╔██╗ ██║   ██║   █████╗  ██████╔╝███████║██║     ██║     ██║██║   ██║██╔██╗ ██║                                              
██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗██╔══██║██║     ██║     ██║██║   ██║██║╚██╗██║                                              
██║██║ ╚████║   ██║   ███████╗██║  ██║██║  ██║╚██████╗╚██████╗██║╚██████╔╝██║ ╚████║                                              
╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝          

                                                                                                                                  
██╗  ██╗████████╗███╗   ███╗██╗         ██╗   ██╗         ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
██║  ██║╚══██╔══╝████╗ ████║██║         ╚██╗ ██╔╝         ██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
███████║   ██║   ██╔████╔██║██║          ╚████╔╝          ██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║   
██╔══██║   ██║   ██║╚██╔╝██║██║           ╚██╔╝      ██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   
██║  ██║   ██║   ██║ ╚═╝ ██║███████╗       ██║       ╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██║        ██║   
╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝       ╚═╝        ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
                                                                                                                                  

*/


/* lo primero. se crea una variable a la que se le asigna el objeto identificado con su ID*/
/* se define la variable elemento contiene al contenedor del documento cuyo ID sea "principal" */

let elemento = document.getElementById("principal"); 


/* 

███████╗███████╗ ██████╗██████╗ ██╗██████╗ ██╗██████╗     ███████╗███╗   ██╗         ██╗███████╗                     
██╔════╝██╔════╝██╔════╝██╔══██╗██║██╔══██╗██║██╔══██╗    ██╔════╝████╗  ██║         ██║██╔════╝                     
█████╗  ███████╗██║     ██████╔╝██║██████╔╝██║██████╔╝    █████╗  ██╔██╗ ██║         ██║███████╗                     
██╔══╝  ╚════██║██║     ██╔══██╗██║██╔══██╗██║██╔══██╗    ██╔══╝  ██║╚██╗██║    ██   ██║╚════██║                     
███████╗███████║╚██████╗██║  ██║██║██████╔╝██║██║  ██║    ███████╗██║ ╚████║    ╚█████╔╝███████║                     
╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═══╝     ╚════╝ ╚══════╝      


██╗███╗   ███╗██████╗ ██████╗ ██╗███╗   ███╗██╗██████╗     ███████╗███╗   ██╗    ██╗  ██╗████████╗███╗   ███╗██╗     
██║████╗ ████║██╔══██╗██╔══██╗██║████╗ ████║██║██╔══██╗    ██╔════╝████╗  ██║    ██║  ██║╚══██╔══╝████╗ ████║██║     
██║██╔████╔██║██████╔╝██████╔╝██║██╔████╔██║██║██████╔╝    █████╗  ██╔██╗ ██║    ███████║   ██║   ██╔████╔██║██║     
██║██║╚██╔╝██║██╔═══╝ ██╔══██╗██║██║╚██╔╝██║██║██╔══██╗    ██╔══╝  ██║╚██╗██║    ██╔══██║   ██║   ██║╚██╔╝██║██║     
██║██║ ╚═╝ ██║██║     ██║  ██║██║██║ ╚═╝ ██║██║██║  ██║    ███████╗██║ ╚████║    ██║  ██║   ██║   ██║ ╚═╝ ██║███████╗
╚═╝╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝
                                                                                                                     
 */

/* Metodo 1 */
/* la variable ingresa contenido HTML en el contenedor*/
elemento.innerHTML = "<h1 class='text-center bg-info'>" + saludar + "</h1>"; 

/*Metodo 2 */
/* OTRA ALTERNATIVA la variable ingresa contenido HTML en el contenedor*/
document.write("<div class='container'><div class='row' id='principal'><h1 class='text-center bg-info'>" + saludar + "</h1></div></div>"); 


/*Metodo 2.1 */
/*Templates literales altGr+}  */
document.write(`
<div class="container"><div class="row" id="principal">
<h1 class='text-center bg-info'> ${saludar}</h1></div></div>"
`);






/*USA UNA VENTANA EMERGENTE PARA QUE EL NAVEGANTE INGRESE TEXTO*/


let mensaje = prompt("Escribe aqui el texto que vas a insertar en la pagina");

elemento.innerHTML = mensaje;

/*OTRO EJEMPLO - MENU DE COMIDAS RAPIDAS*/

/*
al cargarse la página, saldrá una ventanita que dirá un mensaje 
y permitirá ingresar una respuesta.
esa respuestas saldrá en la consola del navegador
*/

/*
let mensaje = prompt("Menú \n 1. Papas fritas \n 2. Milanesa con fritas \n 3. Milanesa Napolitana con fritas");
console.log(mensaje);
*/

/*
 conforme a lo ingresado, además, saldrá una respuesta pero 
 ahora en el navegador.
 */ 


/*
Usando la estructura de control IF
 */ 

/*
if(mensaje === "1"){
elemento.innerHTML="<p>Disfruta de tus Papas!</p>";
}else if(mensaje === "2"){
elemento.innerHTML="<p>Disfruta de tus Papas y tu Milanesa!</p>";
}else if(mensaje === "3"){
elemento.innerHTML="<p>Disfruta de la mejor Milanesa!</p>";
}else{
elemento.innerHTML="No es una opción el valor tipeado!"
}

 */ 

/*
Usando la estructura de control SWITCH
 */ 

/*

switch (mensaje) {
case "1":
elemento.innerHTML="<p>Disfruta de tus Papas!</p>";
break; Deja el switch
case  "2":
elemento.innerHTML="<p>Disfruta de tus Papas y tu Milanesa!</p>";
break;
case  "3":
elemento.innerHTML="<p>Disfruta de tus Papas y tu Milanesa!</p>";
break;
default:
elemento.innerHTML="No es una opción el valor tipeado!"
let mensaje = prompt("Menú \n 1. Papas fritas \n 2. Milanesa con fritas \n 3. Milanesa Napolitana con fritas");
}
*/






/*CONVERSIONES */

/*para utilizar la información que se le solicita al navegante, 
un string, un texto, hay que convertirlo a a numero o int  */

/* defino e inicializo dos variables con una solicitud prompt,
la cual es el parámetro del método parteInt() /* 

/*
let num = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
*/

/*
let resultado = "<p>El resultado de: " + num + " y " + num2 +" es: " + (num +num2)+ "</p>";
elemento.innerHTML=resultado;
elemento.innerHTML+="Hola"
*/
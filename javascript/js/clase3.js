
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






/*



███╗   ███╗ █████╗ ███╗   ██╗███████╗     ██╗ ██████╗     ██████╗ ███████╗    ██╗███╗   ██╗███████╗ ██████╗ ██████╗ ███╗   ███╗ █████╗  ██████╗██╗ ██████╗ ███╗   ██╗                   
████╗ ████║██╔══██╗████╗  ██║██╔════╝     ██║██╔═══██╗    ██╔══██╗██╔════╝    ██║████╗  ██║██╔════╝██╔═══██╗██╔══██╗████╗ ████║██╔══██╗██╔════╝██║██╔═══██╗████╗  ██║                   
██╔████╔██║███████║██╔██╗ ██║█████╗       ██║██║   ██║    ██║  ██║█████╗      ██║██╔██╗ ██║█████╗  ██║   ██║██████╔╝██╔████╔██║███████║██║     ██║██║   ██║██╔██╗ ██║                   
██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══╝  ██   ██║██║   ██║    ██║  ██║██╔══╝      ██║██║╚██╗██║██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║██╔══██║██║     ██║██║   ██║██║╚██╗██║                   
██║ ╚═╝ ██║██║  ██║██║ ╚████║███████╗╚█████╔╝╚██████╔╝    ██████╔╝███████╗    ██║██║ ╚████║██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║██║  ██║╚██████╗██║╚██████╔╝██║ ╚████║                   
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝ ╚════╝  ╚═════╝     ╚═════╝ ╚══════╝    ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    


 
██╗███╗   ██╗ ██████╗ ██████╗ ███████╗███████╗ █████╗ ██████╗  █████╗     ██████╗  ██████╗ ██████╗     ███╗   ██╗ █████╗ ██╗   ██╗███████╗ ██████╗  █████╗ ██████╗  ██████╗ ██████╗     
██║████╗  ██║██╔════╝ ██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██╔═══██╗██╔══██╗    ████╗  ██║██╔══██╗██║   ██║██╔════╝██╔════╝ ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗    
██║██╔██╗ ██║██║  ███╗██████╔╝█████╗  ███████╗███████║██║  ██║███████║    ██████╔╝██║   ██║██████╔╝    ██╔██╗ ██║███████║██║   ██║█████╗  ██║  ███╗███████║██║  ██║██║   ██║██████╔╝    
██║██║╚██╗██║██║   ██║██╔══██╗██╔══╝  ╚════██║██╔══██║██║  ██║██╔══██║    ██╔═══╝ ██║   ██║██╔══██╗    ██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══╝  ██║   ██║██╔══██║██║  ██║██║   ██║██╔══██╗    
██║██║ ╚████║╚██████╔╝██║  ██║███████╗███████║██║  ██║██████╔╝██║  ██║    ██║     ╚██████╔╝██║  ██║    ██║ ╚████║██║  ██║ ╚████╔╝ ███████╗╚██████╔╝██║  ██║██████╔╝╚██████╔╝██║  ██║    
╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝    
                                                                                                                                                                                        


*/

/*defino e inicializo una variable con el texto que me ingresen el navegante*/     
let nombre = prompt("Ingresá tu nombre!");

/*identifico el elemento que voy a usar: <div id="principal"> */
let miDiv = document.getElementById("principal");

/*lo imprimo ahí */
miDiv.innerHTML="Hola"+" "+nombre;





/*
OTRO EJEMPLO: OPERAR MATEMATICAMENTE DOS NUMEROS INGRESADOS POR  EL NAVEGANTE
*/




/*identifico el elemento que voy a usar */
let btn = document.getElementById("btn");

/*agrego Y le agrego un evento: EJECUTAR UNA FUNCION al hacer click */
btn.addEventListener('click',sumar);

/*CALLBACK: función que llama a otra función */


function sumar(){
    /*declaro e inicializo 3 variables locales ingresadas por ventanita con boton */
    let num = Number(prompt("Ingresa tu primer número!"));
    let num2 = Number(prompt("Ingresa tu segundo número!"));
    let operacion = prompt("Escribí la operacion a  realizar \n + para sumar\n - para restar\n * para multiplicar \n / para dividir")

    /*declaro e inicializo variable locales para almacenar el resultado de la operacion seleccionada y para que la siguiente estructura de control pueda usarla. */
    let resultado=0;
    switch (operacion) {
 
        case "+": /*elección */
            resultado = num + num2; /*operacion */
            miDiv.innerHTML +="<p> El resultado de la suma de "+num +" y "+num2+ " es: " + resultado + "</p>"; /*impresion en el html */
            break;

        case "-":
            resultado = num - num2;
            miDiv.innerHTML +="<p> El resultado de la resta de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;

        case "/":
            resultado = num / num2;
            miDiv.innerHTML +="<p> El resultado de la División de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;

        case "*":
                resultado = num * num2;
                miDiv.innerHTML +="<p> El resultado de la Multiplicación de "+num +" y "+num2+ " es: " + resultado + "</p>";
                break;
        default:
            
            break;
    }
    
}
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



/*identifico el elemento que voy a usar: <div id="principal"> */
let elemento = document.getElementById("principal");



/*identifico el elemento que voy a usar */
let btn=document.getElementById("btn"); /*Tomamos control del boton */
document.addEventListener('click',ejemplo) /*Agregamos funcion al click*/




function ejemplo(){ /*y asi es la funcion mas simple de JS*/
    alert('Imprimo un texto cuando  haces click')
  };


/*



███████╗ ██████╗ ██████╗ ███╗   ███╗██╗   ██╗██╗      █████╗ ██████╗ ██╗ ██████╗                          
██╔════╝██╔═══██╗██╔══██╗████╗ ████║██║   ██║██║     ██╔══██╗██╔══██╗██║██╔═══██╗                         
█████╗  ██║   ██║██████╔╝██╔████╔██║██║   ██║██║     ███████║██████╔╝██║██║   ██║                         
██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║██║   ██║██║     ██╔══██║██╔══██╗██║██║   ██║                         
██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║██║  ██║██║╚██████╔╝                         
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝      


██╗███╗   ██╗██╗ ██████╗██╗ ██████╗     ██████╗ ███████╗    ███████╗███████╗███████╗██╗ ██████╗ ███╗   ██╗
██║████╗  ██║██║██╔════╝██║██╔═══██╗    ██╔══██╗██╔════╝    ██╔════╝██╔════╝██╔════╝██║██╔═══██╗████╗  ██║
██║██╔██╗ ██║██║██║     ██║██║   ██║    ██║  ██║█████╗      ███████╗█████╗  ███████╗██║██║   ██║██╔██╗ ██║
██║██║╚██╗██║██║██║     ██║██║   ██║    ██║  ██║██╔══╝      ╚════██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
██║██║ ╚████║██║╚██████╗██║╚██████╔╝    ██████╔╝███████╗    ███████║███████╗███████║██║╚██████╔╝██║ ╚████║
╚═╝╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝ ╚═════╝     ╚═════╝ ╚══════╝    ╚══════╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
   

*/


/*Vamos a subir un formulario de inicio de sesion en diseñado HTML, subido con Javascript */


/*Usamos el evento load renderizamos el formulario */

/* tomamos el control de la ventana que va a manejar el inicio de sesion. un formulario html.*/
window.addEventListener('load',function(){ /*Agregamos funcion al cargar*/
    elemento.innerHTML=`
   
    <form action="#">

       <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
       </div>

       <div class="mb-3">
           <label for="exampleInputPassword1" class="form-label">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword1">
       </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
             <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>





    <!-- BOTON CON EVENTO-->

<!--

██████   ██████  ████████  ██████  ███    ██      ██████  ██████  ███    ██     ███████ ██    ██ ███████ ███    ██ ████████  ██████  
██   ██ ██    ██    ██    ██    ██ ████   ██     ██      ██    ██ ████   ██     ██      ██    ██ ██      ████   ██    ██    ██    ██ 
██████  ██    ██    ██    ██    ██ ██ ██  ██     ██      ██    ██ ██ ██  ██     █████   ██    ██ █████   ██ ██  ██    ██    ██    ██ 
██   ██ ██    ██    ██    ██    ██ ██  ██ ██     ██      ██    ██ ██  ██ ██     ██       ██  ██  ██      ██  ██ ██    ██    ██    ██ 
██████   ██████     ██     ██████  ██   ████      ██████  ██████  ██   ████     ███████   ████   ███████ ██   ████    ██     ██████  
                                                                                                                                     
                                                                                                                                     

-->

    <button type="button" id="btn" class="btn btn-primary" onclick="entrar()">Entrar</button>



  </form>
    `;
});




/*
solo un ejemplo de 
 █████  ██████  ██████   █████  ██    ██ 
██   ██ ██   ██ ██   ██ ██   ██  ██  ██  
███████ ██████  ██████  ███████   ████   
██   ██ ██   ██ ██   ██ ██   ██    ██    
██   ██ ██   ██ ██   ██ ██   ██    ██    
                                         
                                         

*/

/*ejemplo de ARRAY */
let usuarios=["Luis","Fede",40];



/*vamos a usar un objeto para chequear la información que nos ingrese */


/*
ejemplo de uso de 
 ██████  ██████       ██ ███████ ████████  ██████  
██    ██ ██   ██      ██ ██         ██    ██    ██ 
██    ██ ██████       ██ █████      ██    ██    ██ 
██    ██ ██   ██ ██   ██ ██         ██    ██    ██ 
 ██████  ██████   █████  ███████    ██     ██████  
en el formulario de inicio de sesion

 */                                                  
                                                  

/*ejemplo de OBJETO */
/*Este objeto se llama "usuario" y sus propieades son datos personales. 
Tiene un metodo que compara los datos propios con otros para determinar si son los mismos o no.*/
let usuario = {
   /*tiene propiedades */
    name:"Luis Navas",
    email:'luis.navas@bue.edu.ar',
    pass:'123456',
    /*tiene un metodo que ayuda a validar el usuario y la contraseña*/
    validar:(e,p)=>{
        if(e === usuario.email && p === usuario.pass){
            return true;
        }else{
            return false;
        }
    }    
};





/* funcion /evento que se ejecuta al tocar el boton del formulario 

███████ ██          ███████ ██    ██ ███████ ███    ██ ████████  ██████  
██      ██          ██      ██    ██ ██      ████   ██    ██    ██    ██ 
█████   ██          █████   ██    ██ █████   ██ ██  ██    ██    ██    ██ 
██      ██          ██       ██  ██  ██      ██  ██ ██    ██    ██    ██ 
███████ ███████     ███████   ████   ███████ ██   ████    ██     ██████  
                                                                         
                                                                         

*/


function entrar(){
    //e.preventDefault();

    let email = document.getElementById("exampleInputEmail1").value; /* .value capturar la info ingresada*/
    let pass = document.getElementById("exampleInputPassword1").value; /* .value capturar la info ingresada*/
    

    /*EJEMPLO de cómo se usa el método de un objeto*/

    let entra = usuario.validar(email,pass); /* se inicializa una variable que va a almacernar la respuesta booleana: si corresponde el dato ingresado con el almacenado*/
    if(entra){
        elemento.innerHTML=`
            <h1>Administración</h1>
            <p>Bienvenid@ ${usuario.name}</p>
        `; /* imprimir en el div id=principal*/
    }
    
}
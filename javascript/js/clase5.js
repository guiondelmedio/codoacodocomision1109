
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





/* se define la variable elemento contiene al contenedor del documento cuyo ID sea "principal" */
let elemento = document.querySelector("#principal");






/**EJEMPLO DE USO DE ARRAYS --------*/
let mascotas = []; /* defino un array vacio */


/*asignando valores posiciones/índices*/
// mascotas[0]= "Loro"; 
// mascotas[1] = "Perro";

//LA FUNCION PUSH -> agrega un elemento al final del array, por si no sabes qué cantidad hay.
//mascotas.push("Gallo");


//comillas francesas AltGr+} = `


//¿Cómo imprimir un array JS dentro de un documento HTML?
//elemento.innerHTML = `<p>${mascotas}</p>`;
//elemento.innerHTML = `<p>${mascotas[1]}</p>`;

//¿Qué longitud tiene el array y como imprimirlo?
//elemento.innerHTML = `<p> Hay ${mascotas.length} mascotas </p>`;


//¿Cómo recorrer el array, imprimiendo la información de cada posición?
/*
for (let a = 0; a < mascotas.length; a++) {
  elemento.innerHTML += `<p>la mascota nro ` + a + ` es ${mascotas[a]}</p>`;
  //se le agrega una concatenación += para que la linea de codigo se vaya agregando a lo anterior y se imprima todo
}
*/






/*


███████╗██╗ ██████╗██╗  ██╗ █████╗     ██╗   ██╗                                         
██╔════╝██║██╔════╝██║  ██║██╔══██╗    ╚██╗ ██╔╝                                         
█████╗  ██║██║     ███████║███████║     ╚████╔╝                                          
██╔══╝  ██║██║     ██╔══██║██╔══██║      ╚██╔╝                                           
██║     ██║╚██████╗██║  ██║██║  ██║       ██║                                            
╚═╝     ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝       ╚═╝ 
                                          

███████╗ ██████╗ ██████╗ ███╗   ███╗██╗   ██╗██╗      █████╗ ██████╗ ██╗ ██████╗         
██╔════╝██╔═══██╗██╔══██╗████╗ ████║██║   ██║██║     ██╔══██╗██╔══██╗██║██╔═══██╗        
█████╗  ██║   ██║██████╔╝██╔████╔██║██║   ██║██║     ███████║██████╔╝██║██║   ██║        
██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║██║   ██║██║     ██╔══██║██╔══██╗██║██║   ██║        
██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║██║  ██║██║╚██████╔╝        
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝  


██████╗ ███████╗    ███╗   ███╗ █████╗ ███████╗ ██████╗ ██████╗ ████████╗ █████╗ ███████╗
██╔══██╗██╔════╝    ████╗ ████║██╔══██╗██╔════╝██╔════╝██╔═══██╗╚══██╔══╝██╔══██╗██╔════╝
██║  ██║█████╗      ██╔████╔██║███████║███████╗██║     ██║   ██║   ██║   ███████║███████╗
██║  ██║██╔══╝      ██║╚██╔╝██║██╔══██║╚════██║██║     ██║   ██║   ██║   ██╔══██║╚════██║
██████╔╝███████╗    ██║ ╚═╝ ██║██║  ██║███████║╚██████╗╚██████╔╝   ██║   ██║  ██║███████║
╚═════╝ ╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚══════╝
                                                                                         


*/





/*

█████   ██████  ██████  ███████  ██████   █████  ██████  
██   ██ ██       ██   ██ ██      ██       ██   ██ ██   ██ 
███████ ██   ███ ██████  █████   ██   ███ ███████ ██████  
██   ██ ██    ██ ██   ██ ██      ██    ██ ██   ██ ██   ██ 
██   ██  ██████  ██   ██ ███████  ██████  ██   ██ ██   ██ 
                                                          
                                                          
*/






// FUNCION FLECHA para AGREGAR CADA MASCOTA-------------al array de objetos de mascotas !--------------------------------------------------------------------------------
const agregarMascota = () => {

  // definimos una varibale que capture todo del elemento que contenga un input, como el de un formulario
  let datos = document.querySelectorAll("input");

  //creo variable local "consulta" vacía, para levantar la info de los radios del formulario "urgencia" o "consulta"
  let consulta = "";

  if (datos[6].checked) {
    consulta = "urgencia";
  } else {
    consulta = "consulta"
  }
  console.log(consulta);


  //Vamos a definir una variable que la información de la cada mascota{propietario,especie,raza,edad,tamaño,imagen,tipoConsulta}
  //A cada valor de cada posición de input guardado en la variable array datos. 
  let mascota = {
    propietario: datos[0].value,
    especie: datos[1].value,
    raza: datos[2].value,
    edad: datos[3].value,
    peso: datos[4].value,
    src: datos[5].value,
    consulta: consulta
  };

  /*esto es lo último, agregar el objeto mascota al final del arreglo de objetos */
  mascotas.push(mascota);

  mostrarMascotas();
};






/*



 ██████  █████  ███    ███ ██████  ██  █████  ██████  
██      ██   ██ ████  ████ ██   ██ ██ ██   ██ ██   ██ 
██      ███████ ██ ████ ██ ██████  ██ ███████ ██████  
██      ██   ██ ██  ██  ██ ██   ██ ██ ██   ██ ██   ██ 
 ██████ ██   ██ ██      ██ ██████  ██ ██   ██ ██   ██ 
                                                      
                                                      


*/






// FUNCION FLECHA para  CAMBIAR DATOS de una MASCOTA----------------------------------------------------------------------------------------------------
//------------------------------------
// a esta funcion se le pasa un parametro
const cambiarDatos = (c) => {

  // definimos una varibale que capture todo del elemento que contenga un input, como el de un formulario
  let datos = document.querySelectorAll("input");

  /* creamos una variable local para almacenar el resultado de una futura operacion */
  let consulta = "";


  /*pasamos el valor booleano de los radios a un texto equivalente */
  if (datos[6].checked) {
    consulta = "urgencia";
  } else {
    consulta = "consulta"
  }

  /*salida de consola de navegador */
  console.log(consulta);

  /*agreamos el dato al objeto */
  let mascota = {
    propietario: datos[0].value,
    especie: datos[1].value,
    raza: datos[2].value,
    edad: datos[3].value,
    peso: datos[4].value,
    src: datos[5].value,
    consulta: consulta
  };

  mascotas[c] = mascota;

  mostrarMascotas();

};



/*


███    ███  ██████  ██████  ██ ███████ ██  ██████  █████  ██████  
████  ████ ██    ██ ██   ██ ██ ██      ██ ██      ██   ██ ██   ██ 
██ ████ ██ ██    ██ ██   ██ ██ █████   ██ ██      ███████ ██████  
██  ██  ██ ██    ██ ██   ██ ██ ██      ██ ██      ██   ██ ██   ██ 
██      ██  ██████  ██████  ██ ██      ██  ██████ ██   ██ ██   ██ 
                                                                  
                                                                  

*/





/* FUNCION FLECHA para  MODIFICAR DATOS de un objeto MASCOTA */
//que se usa cuando se muestra la mascota (¿se modifica esta o se agrega una nueva?)

// a esta funcion se le pasa un parametro
const modificarM = (b) => {

// se crea una variable local que almacena el valor de la posicion indicada del array mascotas
  let mascota = mascotas[b];

// variable vacia
  let consulta = "";

//vamos a mostrar el formulario, imprimiendo en este los valores ingresados de la mascota en cuestion
  if (mascota.consulta == "consulta") {
    consulta = `
    <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="tipo" id="urgencia" >
        <label class="form-check-label" for="urgencia">Urgencia</label>
      </div>

      <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="tipo" id="consulta" checked>
        <label class="form-check-label" for="consulta">Consulta</label>
      </div>`
  } else {
    consulta = `  
    <div class="mb-3 form-check">
      <input type="radio" class="form-check-input" name="tipo" id="urgencia" checked >
      <label class="form-check-label" for="urgencia">Urgencia</label>
    </div>
    
    <div class="mb-3 form-check">
      <input type="radio" class="form-check-input" name="tipo" id="consulta" >
      <label class="form-check-label" for="consulta">Consulta</label>
    </div>`
  }

  console.log(consulta)

  elemento.innerHTML = `
  <form>

    <div class="mb-3">
      <label for="prop" class="form-label"> Propietario </label>
      <input type="text" class="form-control" id="prop" value="${mascota.propietario}">
    </div>

    <div class="mb-3">
      <label for="especie" class="form-label">Especie</label>
      <input type="text" class="form-control" id="especie" value="${mascota.especie}">
    </div>

  <div class="mb-3">
      <label for="raza" class="form-label">Raza</label>
      <input type="text" class="form-control" id="raza" value="${mascota.raza}">
  </div>

  <div class="mb-3">
    <label for="edad" class="form-label">Edad</label>
    <input type="text" class="form-control" id="edad" value="${mascota.edad}">
  </div>

  <div class="mb-3">
    <label for="peso" class="form-label">Peso</label>
    <input type="text" class="form-control" id="peso" value="${mascota.peso}">
  </div>

  <div class="mb-3">
    <label for="img" class="form-label">Imagen</label>
    <input type="text" class="form-control" id="img" value="${mascota.src}">
  </div>

  ${consulta}

  <button type="button" onclick="cambiarDatos(${b})" class="btn btn-primary" id="btn">MODIFICAR DATOS</button>

</form>
  `;
}; 


/*


███    ███  ██████  ███████ ████████ ██████   █████  ██████  
████  ████ ██    ██ ██         ██    ██   ██ ██   ██ ██   ██ 
██ ████ ██ ██    ██ ███████    ██    ██████  ███████ ██████  
██  ██  ██ ██    ██      ██    ██    ██   ██ ██   ██ ██   ██ 
██      ██  ██████  ███████    ██    ██   ██ ██   ██ ██   ██ 
                                                             
                                                             

 */




/* FUNCION FLECHA para MOSTRAR MASCOTA */

// Vamos a crear una funcion que, cuando se ejecute, imprima en HTML todOs los objetos mascotas con sus propiedades.
// Ademas, agregamos agregamos bootstrap en los atributos de cada contenedor HTML

const mostrarMascotas = () => {

  /*antes de ejecutar el "for" que va a imprimir todas las mascotas, limpiamos el código. */

  elemento.innerHTML = "";

  /*recorremos el array de objetos mascotas, imprimiendo en HTML cada mascota en forma de CARD de BOOTSTRAP */
  for (let a = 0; a < mascotas.length; a++) {
    elemento.innerHTML += `
        <div class="card mr-4" style="width: 18rem;">
            <img src="${mascotas[a].src}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Propietario: ${mascotas[a].propietario}</h5>
            <p class="card-text">Especie: ${mascotas[a].especie}</p>
            <p class="card-text">Raza: ${mascotas[a].raza}</p>
            <p class="card-text">Edad: ${mascotas[a].edad}</p>
            <p class="card-text">Peso: ${mascotas[a].peso}</p>
            <p class="card-text">Tipo de consulta: ${mascotas[a].consulta}</p>

            <!-- EL BOTON PARA AGREGAR UNA NUEVA MASCOTA -->
            <a href="#" class="btn btn-primary" onclick="CrearFormulario()">Agregar otra mascota</a>
          

            <!-- EL BOTON PARA AGREGAR UNA MODIFICAR LOS DATOS DE ESTA MASCOTA -->
            <a href="#" class="btn btn-primary" onclick="modificarM(${a})">Modificar Datos</a>
                                  <!-- se le pasa el indice del objeto-->
          </div>
      </div>
        `;
  }
};




/*


███████  ██████  ██████  ███    ███ ██    ██ ██       █████  ██████  ██  ██████      ██   ██ ████████ ███    ███ ██      
██      ██    ██ ██   ██ ████  ████ ██    ██ ██      ██   ██ ██   ██ ██ ██    ██     ██   ██    ██    ████  ████ ██      
█████   ██    ██ ██████  ██ ████ ██ ██    ██ ██      ███████ ██████  ██ ██    ██     ███████    ██    ██ ████ ██ ██      
██      ██    ██ ██   ██ ██  ██  ██ ██    ██ ██      ██   ██ ██   ██ ██ ██    ██     ██   ██    ██    ██  ██  ██ ██      
██       ██████  ██   ██ ██      ██  ██████  ███████ ██   ██ ██   ██ ██  ██████      ██   ██    ██    ██      ██ ███████ 
                                                                                                                         
                                                                                                                         

*/




/* LO ULTIMO -> FUNCION FLECHA para MOSTRAF  FORMULARIO EN HTML ---y---para levantar los datos */
const CrearFormulario = () => {
  elemento.innerHTML = `
    <form>

    <div class="mb-3">
        <label for="prop" class="form-label"> Propietario </label>
        <input type="text" class="form-control" id="prop">
    </div>

    <div class="mb-3">
      <label for="especie" class="form-label">Especie</label>
      <input type="text" class="form-control" id="especie">
    </div>

    <div class="mb-3">
      <label for="raza" class="form-label">Raza</label>
      <input type="text" class="form-control" id="raza">
    </div>

    <div class="mb-3">
      <label for="edad" class="form-label">Edad</label>
      <input type="text" class="form-control" id="edad">
    </div>

    <div class="mb-3">
      <label for="peso" class="form-label">Peso</label>
      <input type="text" class="form-control" id="peso">
    </div>

    <div class="mb-3">
      <label for="img" class="form-label">Imagen</label>
      <input type="text" class="form-control" id="img">
    </div>
 



    <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="tipo" id="urgencia">
        <label class="form-check-label" for="urgencia">Urgencia</label>
    </div>

    <div class="mb-3 form-check">
      <input type="radio" class="form-check-input" name="tipo" id="consulta" checked>
      <label class="form-check-label" for="consulta">Consulta</label>
    </div>




    <button type="button" class="btn btn-primary" id="btn">Agregar Datos</button>


  </form>
    `;


  //Vamos a agregar una mascota cada vez que se haga click en el boton del formulario
  //Esto es un evento
  document.getElementById("btn").addEventListener('click', agregarMascota);


};




/**
 



███████      ██ ███████  ██████ ██    ██  ██████ ██  ██████  ███    ██ 
██           ██ ██      ██      ██    ██ ██      ██ ██    ██ ████   ██ 
█████        ██ █████   ██      ██    ██ ██      ██ ██    ██ ██ ██  ██ 
██      ██   ██ ██      ██      ██    ██ ██      ██ ██    ██ ██  ██ ██ 
███████  █████  ███████  ██████  ██████   ██████ ██  ██████  ██   ████ 
                                                                       
                                                                       


 */




/* llamada al metodo "crear formulario", que imprime el formulario */
CrearFormulario();

// let numeros =[5,78,98,77];
// console.log(numeros.indexOf(77))

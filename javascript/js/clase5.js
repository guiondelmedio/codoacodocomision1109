let elemento = document.querySelector("#principal");
/* se crea una variable que contiene el elemento html determinado por el id*/




/**ARREGLOS -----------------------------------------------------------------------------------------*/
let mascotas = []; /*Arreglo vacio */
/*asignando valores posisciones/índices*/
// mascotas[0]= "Loro"; 
// mascotas[0]="Loro grande"
// mascotas[1] = "Perro";



//Funcion push -> agrega un elemento al final del array si no sabes qué cantidad hay.
//mascotas.push("Gallo");



//comillas francesas AltGr+} = `
//¿Cómo imprimir la variable array dentro de un elemento html?
//elemento.innerHTML = `<p>${mascotas}</p>`;
//elemento.innerHTML = `<p>${mascotas[1]}</p>`;

//¿Qué longitud tiene el array y como imprimirlo?
//elemento.innerHTML = `<p> Hay ${mascotas.length} mascotas </p>`;


//¿Cómo recorrer el arreglo, elemento por elemento?
/*
for (let a = 0; a < mascotas.length; a++) {
  elemento.innerHTML += `<p>la mascota nro ` + a + ` es ${mascotas[a]}</p>`;
  //se le agrega una concatenación += para que la linea de codigo se vaya agregando a lo anterior y se imprima todo
}
*/





// funcion flecha para AGREGAR MASCOTA-------------al array de mascotas--------------------------------------------------------------------------------
const agregarMascota = () => {

  let datos = document.querySelectorAll("input");
  // asignamos una varibale que capture los elementos input de un formulario

  //creo variable "consulta" vacía, para levantar la info de los radios de formulario "urgencia" o "consulta"
  let consulta = "";

  if (datos[6].checked) {
    consulta = "urgencia";
  } else {
    consulta = "consulta"
  }
  console.log(consulta);


  //CLASE {propietario,especie,raza,edad,tamaño,imagen,tipoConsulta}
  //vamos a guardar los valores de cada posición de input guardado en la variable array datos. 
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

// funcion para  CAMBIAR DATOS MASCOTA----------------------------------------------------------------------------------------------------
//------------------------------------

const cambiarDatos = (c) => {
  let datos = document.querySelectorAll("input");

  let consulta = "";
  if (datos[6].checked) {
    consulta = "urgencia";
  } else {
    consulta = "consulta"
  }
  console.log(consulta);

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



// funcion para  MODIFICAR DATOS MASCOTA---------que se usa cuando se muestra la mascota (¿se modifica esta o se agrega una nueva?)---------------------------------------------------------------------------------------
//--------------------------------------

const modificarM = (b) => {
// a esta funcion se le pasa un parametro
  let mascota = mascotas[b];
// se crea una variable que almacena el valor de la posicion indicada 
  let consulta = "";
// variable vacia
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

  <button type="button" onclick="cambiarDatos(${b})" class="btn btn-primary" id="btn">Modificar</button>

</form>
  `;
}; 



// funcion flecha para MOSTRAR MASCOTA ----------------------------------------------------------------------------------------------------

// funcion flecha. Vamos a crear una funcion que, cuando se ejecute, imprima en html todas los objetos mascotas con sus propiedades.
//agregamos bootstrap
const mostrarMascotas = () => {

  elemento.innerHTML = "";
/*antes de ejecutar el "for" que va a imprimir todas las mascotas, limpiamos el código. */

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
          <a href="#" class="btn btn-primary" onclick="CrearFormulario()">Agregar otra mascota</a>
          
          <a href="#" class="btn btn-primary" onclick="modificarM(${a})">Modificar Datos</a>
                                  <!-- se le pasa el indice del objeto-->
          </div>
      </div>
        `;
  }
};




// funcion flecha para CREAR  FORMULARIO --------------------------para levantar los datos----------------------------------------------------

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



  document.getElementById("btn").addEventListener('click', agregarMascota);
  //Vamos a agregar una mascota cada vez que se haga click en el boton


};

/* llamada al metodo "crear formulario", que imprime el formulario */
CrearFormulario();

// let numeros =[5,78,98,77];
// console.log(numeros.indexOf(77))

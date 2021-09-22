
    <script>
      alert("ventana emergente");
      console.log("Texto de consola");
      /*Variables */
      let nombre="Mariano Devia"; /*string o cadena de caracteres */
      var numero=18; /*numérico */
      const PI=3.1416; /*numérico constante */
      let hayClases=true; /*boolerano */
      console.log((numero+25)+" "+nombre); /* concatenar y sumar */
      console.log(hayClases);
      let esFeriado=false;
      /* condicionales*/
      /* si...sino */

      if (5>3){
            console.log("5 es mayor a 3");
      } else {
            console.log("5 no es mayor a 3");
      } 

      console.log((5>3)? "5 es mayor a 3":"5 no es mayor a 3"); /*Ternario*/

      if ((hayClases == true) && esFeriado != true ){
          console.log("Me conecto a la videollamada")
      }else{
          console.log("no me conecto a la videollamada")
      }
      
      if ( 25 < 32 || 12 > 20) { /*se cumple solo una condicióm*/
          console.log("Se cumplió la condición")
      }

      let saludo = "Hola, como estás?"
      let saludar = saludo +" "+ nombre;
      conole.log(saludar);
    </script>

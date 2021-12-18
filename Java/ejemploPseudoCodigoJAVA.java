SEUDOCÓDIGO A MODO DE EJEMPLO:

INICIO Principal()                  // definimos el inicio del programa
    AlumnoNuevo = nuevo Alumno()    // llamamos a la clase Alumno, generando el objeto
    AlumnoNuevo.obtener()          // Utilizamos el metodo obtener()  de Alumno

FIN Principal

CLASE Alumno                       //Creamos la clase alumno
    Atributos                       //Definimos sus atributos
        NOMBRE: CADENA                  
        APELLIDO: CADENA
        EDAD: ENTERO

    METODO Obtener()                // Dentro de la clase, creamos el metodo Obtener
        Mostrar ("Ingrese nombre")
        Ingresar(NOMBRE)

        Mostrar ("Ingrese apellido")
        Ingresar(APELLIDO)

        Mostrar ("Ingrese edad")
        Ingresar(EDAD)
    Hasta que EDAD > 0
    FIN METODO

FIN CLASE
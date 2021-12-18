
package personal;

/*HERENCIA -> EXTENDS */
public class Departamento extends Personal{
    public String depto;
    
    public Departamento (String nombre, String apellido, int edad, String depto){
        super(nombre,apellido,edad);
        this.depto=depto;
        
    }
    public String MostrarDatos(){
    return "Nombre: "+nombre+"\n Apellido: "+apellido+
            "\n Edad: "+edad+" Sueldo "+this.getSueldo()+
            "\n Pertenece al departamento: "+ depto;
    }
    
}

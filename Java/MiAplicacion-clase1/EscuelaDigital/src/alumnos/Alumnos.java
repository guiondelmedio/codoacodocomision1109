
package alumnos;


public class Alumnos {
    public String nombre, apellido, email, curso;
    private String dni,telefono;
    
    
    /*getters and setters*/

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    
    
    public Alumnos (String nombre,String email,String curso){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.curso=curso;
        
    }
    /*reformular metodo*/
    public boolean rendirExamen(String curso, String materia, String tema, float nota){
        if (nota > 6){
            return true;
        }
        else return false;
    }
    
}


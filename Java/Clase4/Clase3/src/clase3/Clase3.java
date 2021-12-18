
package clase3;

import personal.Departamento;
import personal.Personal;


public class Clase3 {


    public static void main(String[] args) {
        System.out.println("El valor máximo de un tipo de dato int es: "+Integer.MAX_VALUE);
        
        Personal persona = new Personal ("Luis","Navas",48);
        persona.setSueldo(250000);
        Personal administrativo=new Personal("Juan","Perez",43);
        administrativo.setSueldo(80000);
        Personal mantenimiento=new Personal("Roque","Nievas",42);
        mantenimiento.setSueldo(60000);
        System.out.println("El sueldo para el personal administrativo es: "+administrativo.getSueldo());
        System.out.println("El sueldo para el personal de mantenimiento es: "+mantenimiento.getSueldo());  
    
        Departamento it= new Departamento("Veronica","Furlan",32,"Desarrrollo");
       
        it.setSueldo(500000);
        System.out.println(it.nombre +" está ganando "+it.getSueldo());
        
        it.depto="Gerencia General";
        it.MostrarDatos();
        
    }
    
}

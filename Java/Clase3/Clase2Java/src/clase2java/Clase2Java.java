
package clase2java;

import java.util.Scanner;


public class Clase2Java {


    public static void main(String[] args) {
        Scanner entradadetexto = new Scanner(System.in);
        
        System.out.println("Ingrese su nombre de usuario: ");
        String nombre = entradadetexto.nextLine();
        System.out.println("Ingrese su nombre de contraseña: ");
        String pass = entradadetexto.nextLine();
        
        
        Ingreso ing = new Ingreso();
        ing.setUsuario(nombre);
        ing.setPass(pass);
        
         System.out.println(ing.Validar());
        
        

        
    }
    
}

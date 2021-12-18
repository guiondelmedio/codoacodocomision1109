
package mi_aplicacion;

import niveles.Niveles;

public class Mi_aplicacion {

    
    public static void main(String[] args) {
        /*aqui es donde se ejecuta la aplicacion*/
        
        
        Juego jugador1 = new Juego(0,3,"ak47","Juan","Netbeans"); 
        Juego jugador2 = new Juego(0,3,"ak47","Pedro","Netbeans"); 

        /*sout*/
        System.out.println("Soy"+jugador1.personaje);
        System.out.println(jugador2.personaje);
        System.out.println(jugador1.mostrar_vidas());
       
        Niveles niveles= new Niveles("media","principiante","dos");
        
        niveles.setDificultad("principiante");
        
        System.out.println(niveles.getDificultad());
        
        
        jugador1.vidas=jugador1.vidas--;

        if(jugador1.vidas==0){
            System.out.println(niveles.reiniciar());
        }
        
    }
    
}

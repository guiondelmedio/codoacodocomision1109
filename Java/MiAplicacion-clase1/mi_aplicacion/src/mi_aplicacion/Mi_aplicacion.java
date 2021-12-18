
package mi_aplicacion;

public class Mi_aplicacion {

    
    public static void main(String[] args) {
        /*aqui es donde se ejecuta la aplicacion*/
        
        
        Juego jugador1 = new Juego(0,3,"ak47","Juan","Netbeans"); 
        Juego jugador2 = new Juego(0,3,"ak47","Pedro","Netbeans"); 

        /*sout*/
        System.out.println(jugador1.personaje);
        System.out.println(jugador2.personaje);
        System.out.println(jugador1.mostrar_vidas());
       
        // TODO code application logic here
    }
    
}

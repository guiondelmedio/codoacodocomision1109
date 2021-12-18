
package mi_aplicacion;

public class Juego {
    /*variables*/
    public int puntos, vidas;
    public String armas, personaje, enemigos;
    
    /*método constructor de objetos*/
    Juego(int puntos, int vidas,String armas,String personaje, String enemigos){
        this.puntos=puntos;
        this.vidas=vidas;
        this.armas=armas;
        this.personaje=personaje;
        this.enemigos=enemigos;
    }
    
    /*método*/
    public String mostrar_vidas(){
        return "El jugador"+this.personaje+" tiene "+this.vidas+" vidas";
        
    }
}

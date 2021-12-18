/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package niveles;

/**
 *
 * @author Buen día
 */
public class Niveles {
    
    
    /*encapsulamiento*/
    
    private String dificultad;
    
    /*funcion getter*/

    public String getDificultad() {
        return dificultad;
    }
    
    /*método setter*/
    public void setDificultad(String dificultad) {
        this.dificultad = dificultad;
    }
    
    
    
    
    
    public String experiencia;
    public String checkpoint;
    
    public Niveles( String dificultad, String experiencia, String checkpoint){
        
         this.dificultad=dificultad;
        this.experiencia=experiencia;
        this.checkpoint=checkpoint;
        
    }
    public String reiniciar(){
        return "Has vuelto al nivel: "+this.checkpoint;
        
    }
    
}

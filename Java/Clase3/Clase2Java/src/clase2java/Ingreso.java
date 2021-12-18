
package clase2java;


public class Ingreso {
    
    private String usuario, pass;

    private String miUsuario="Luis";
    private String miPass="1234";

    
    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    
    
    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }


    public Ingreso(){}
    
    
    public Ingreso(String usuario, String pass){
        this.usuario=usuario;
        this.pass=pass;
    }
    
    public boolean Validar(){
        if(miUsuario.equals(this.usuario) && miPass.equals(this.pass)){
            return true;
        }else{
            return false;
        }
    }
    
}
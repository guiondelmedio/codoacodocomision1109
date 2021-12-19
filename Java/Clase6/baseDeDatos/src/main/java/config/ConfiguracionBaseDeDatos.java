/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package config;

import java.sql.*;

/**
 *
 * @author Buen día
 */
public class ConfiguracionBaseDeDatos {
    public String driver="com.mysql.jdbc.Driver";
    public Connection getConection(){
        Connection conexion=null;
        try{
            conexion = DriverManager.getConnection ("jdbc:mysql//localhost:3306/comision1109");
        }
        catch(SQLException e){
            System.out.println(e.toString());
        }
        return conexion;
    }
    public static void main(String[] args) {
        System.out.println("Hola");
    }
    
}

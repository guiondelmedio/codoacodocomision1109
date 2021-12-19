<%-- 
    Document   : alumnos
    Created on : 19 dic. 2021, 00:39:57
    Author     : Buen día
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Listado de Alumnos</title>
    </head>
    <body>
        <h1>Listado de Alumnos</h1>
        <div class="container">
            <div class="row">
                <a class="btn btn-primary col-md-4 m-4" href="AlumnosControler?accion=nuevo">Agregar Alumno</a>
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                                                        <th>MODIFICAR</th>
                                                        <th>ELIMINAR</th>
                        </tr>
                        <!-- http://localhost:8080/escuelaDigital/Vistas/alumnos.jsp -->
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>

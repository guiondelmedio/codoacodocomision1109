<%-- 
    Document   : modificar
    Created on : 19 dic. 2021, 00:40:09
    Author     : Buen día
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Modificar registro</title>
    </head>
    <body>
        <%
            String id = request.getParameter("id");
            int mid;
            mid = Integer.parseInt(id);
            Alumnos resultado=null;
            AlumnosDAO alumnosDao = new AlumnosDAO();
            resultado = alumnosDao.mostrarAlumno(mid);
        %>
     <h1 class="text-center">Modificar Registro</h1>
        <!-- agregar el id oculto -->
        <div class="container">
            <div class="row d-flex justify-content-center">
                <form class="p-5 w-50" action="AlumnosController?accion=actualizar"
                      method="POST">
                    <div class="mb-3">
                        <label for="id" class="form-label"></label>
                        <input type="hidden" class="form-control" id="id"
                               name="id" value="<%=resultado.getId()%>"/>
                    </div>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre"
                               name="nombre" value="<%=resultado.getNombres()%>"/>
                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="apellido"
                               name="apellido" value="<%=resultado.getApellidos()%>"/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email"
                               name="email" value="<%=resultado.getEmail()%>"/>
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="telefono"
                               name="telefono" value="<%=resultado.getTelefono()%>"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar</button>
                    
                </form>
            </div>
        </div>
    </body>
</html>

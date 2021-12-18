<%-- 
    Document   : usodeJSP
    Created on : 18 dic. 2021, 20:03:19
    Author     : Buen día
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
      
        <%
        /*embeber codigo de JAVA*/
        String saludo="Hola";
        String nombre="Luis";
        %>
     <h1>Mi página </h1>
     <p><%= 
         new java.util.Date()
         
        %>
     </p>
     <p><%= 
         saludo +" "+nombre
         %> </p>
    </body>
</html>

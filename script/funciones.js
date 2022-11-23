function guardar(){
    //Recogemos datos del formulario
        let obj={
            id:$("#id").val(),
            nombreCatalogo:$("#nombreCatalogo").val(),
            ipServidor:$("#ip").val(),
            nombreServidor:$("#nombreServidor").val(),
            ciclo:$("#ciclo").val(),      
            consola:$("#consola").val(),  
            programa:$("#programa").val(), 
            semana:$("#semana").val(), 
            tecnologia:$("#tecnologia").val()
        };
       
        let dataToSend=JSON.stringify(obj);
        $.ajax({
            url:"http://129.151.125.88:8080/api/Client/save",
            type:"POST",
            data:dataToSend,
            datatype:"JSON",
            contentType:"application/JSON",
            success:function(respuesta){            
                $("#id").empty("");
                $("#nombreCatalogo").empty("");
                $("#ip").empty("");
                $("#nombreServidor").empty("");
                $("#ciclo").empty("");
                $("#consola").empty("");
                $("#programa").empty("");
                $("#semana").empty("");
                $("#tecnologia").empty("");
                console.log(respuesta);
                alert("Registro guardado");
               
            }
        });
      }
    
    
    function editar(){
    
        let obj={
            id:$("#id").val(),
            nombreCatalogo:$("#nombreCatalogo").val(),
            ipServidor:$("#ip").val(),
            nombreServidor:$("#nombreServidor").val(),
            ciclo:$("#ciclo").val(),      
            consola:$("#consola").val(),  
            programa:$("#programa").val(), 
            semana:$("#semana").val(), 
            tecnologia:$("#tecnologia").val()
        };
        
        let dataToSend=JSON.stringify(obj);
        $.ajax({
            url:"http://129.151.125.88:8080/api/Client/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            success:function(respuesta){
                $("#resultado").empty(); //que es
                $("#id").empty("");
                $("#nombreCatalogo").empty("");
                $("#ip").empty("");
                $("#nombreServidor").empty("");
                $("#ciclo").empty("");
                $("#consola").empty("");
                $("#programa").empty("");
                $("#semana").empty("");
                $("#tecnologia").empty("");
                console.log(respuesta);
                getinfo("");
                //alert("Registro Actualizado");
            }
        });
    }
    
    function borrar(idRegistro){
    
        let obj={
            id:idRegistro
        };
        
        let dataToSend=JSON.stringify(obj);
        $.ajax({
            url:"http://129.151.125.88:8080/api/client/"+idRegistro,
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            success:function(respuesta){           
                console.log(respuesta);
                getinfo();
                alert("Se ha eliminado");
            }
        });
    }
    
    
    function getRegistro(idRegistro){
        
        $.ajax({
            url:"http://129.151.125.88:8080/api/Client/"+idRegistro,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                var item=respuesta;
               
                $("#nombreCatalogo").val(item.nombreCatalogo);
                $("#ip").val(item.ip);
                $("#nombreServidor").val(item.nombreServidor);          
                $("#ciclo").val(item.ciclo);
                $("#consola").val(item.consola);
                $("#programa").val(item.programa);
                $("#semana").val(item.semana);
                $("#tecnologia").val(item.tecnologia);               
            }
        });
    }
    
    
    function getAll(){
        $.ajax({
            url:"http://129.151.125.88:8080/api/Client/all",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta.length);
                mostrarTabla(respuesta);
               
            }
        });
    }
    
    
    function mostrarTabla(items){
    
    
        let table="<table border=1> <th>Id</th> <th>Nombre</th> <th>IP</th> <th>Servidor</th> <th>Ciclo</th> <th>Consola</th> <th>Programa</th> <th>Semana</th> <th>Tecnologia</th> <th>Delete</th> <th>Obtener</th>";
        for(var i=0; i < items.length; i++){
           
            table+="<tr>";
            table+="<td>"+items[i].idClient+"</td>";
            table+="<td>"+items[i].nombreCatalogo+"</td>";
            table+="<td>"+items[i].ip+"</td>";
            table+="<td>"+items[i].nombreServidor+"</td>";
            table+="<td>"+items[i].ciclo+"</td>";
            table+="<td>"+items[i].consola+"</td>";
            table+="<td>"+items[i].programa+"</td>";
            table+="<td>"+items[i].semana+"</td>";
            table+="<td>"+items[i].tecnologia+"</td>";
            table+="<td> <button onclick='deleteinfo("+items[i].idClient+")'>Borrar</button></td>";
            table+="<td> <button onclick='getregistro("+items[i].idClient+")'>Obtener</button></td>";
            table+="</tr>";
            table+="</div>";
           
        }
        table+="</table>";
        $("#resultado").html(table);
     
    }
    
    
    // en la pagina HTML% debemos tener el formulario y la tabla
    
    <body>
    
    <section class="form-register">
    
    Name:<input class="controls" type="text" id="name" placeholder="name"  /><br/>
    Email: <input class="controls" type="text" id="email"placeholder="email" />  <br/>
    Password: <input class="controls" type="password" id="password"placeholder="password" /><br/>
    Age: <input class="controls" type="number" id="age" placeholder="age"/> <br/>
    
    <br/>
     
    <button class="botons" onclick="guardar()"> Crear </button>
    <button class="botons" onclick="editar()"> Actualizar </button>
    <button class="botons" onclick="getAll()"> Consultar </button>
    
    
    
    <div id="resultado"></div>
    
    </section>
    </body>
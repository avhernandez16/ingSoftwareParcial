let urlRest = 'https://gc28f183a191bc4-bdcatalogo.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/catalogo/catalogo';

$(document).ready(function() {
    cargarDatosTable();
});


$('#agregarC').on("click", function(event){
    event.preventDefault();
});

function cargarDatosTable() {
    $.ajax({
        url: urlRest,
        type: 'GET',
        datatype:'JSON',
        success:function(response) {
            let myItems = response.items;
            let valor = '';
            for (var i = 0; i < myItems.length; i++) {
                valor += '<tr>'+
                '<td>'+myItems[i].nombre+'</td>'+
                '<td>'+myItems[i].ip+'</td>'+
                '<td>'+myItems[i].servidor+'</td>'+
                '<td>'+myItems[i].ciclo+'</td>'+
                '<td>'+myItems[i].consola+'</td>'+
                '<td>'+myItems[i].programa+'</td>'+
                '<td>'+myItems[i].semana+'</td>'+
                '<td>'+myItems[i].tecnologia+'</td>'+                
                '<td>'+
                    '<button onclick="cargarFormulario('+myItems[i].ip+')" type="button" class="agregar">Detalles</button>'+                    
                '</td>'+
                '</tr>';           
            }
            $('#data').html(valor);
        }
    });
}

function cargarFormulario(idIP) {
    $.ajax({
        url: urlRest+'/'+idIP,
        type: 'GET',
        datatype: 'JSON',
        success: function(response) {
            let myItem = response.items[0];
            $('#nombre').val(myItem.nombre);
            $('#ciclo').val(myItem.ciclo);
            $('#semana').val(myItem.semana);
            $('#ip').val(myItem.ip);
            $('#servidor').val(myItem.servidor);
            $('#consola').val(myItem.consola);
            $('#programa').val(myItem.programa);
            $('#tecnologia').val(myItem.tecnologia);

            
            let valor = '<input id="btnActualizar" type="submit" onclick="actualizar('+myItem.ip+')" value="Actualizar" class="modificar">';          
            $('#btnFormulario').html(valor);

            $('#ip').prop('disabled', true);
 
        }
    });
}

function actualizar(idIP) {
    let datosFormulario = {   

        nombre: $('#nombre').val(),
        ip: idIP,
        servidor: $('#servidor').val(),
        ciclo: $('#ciclo').val(),
        consola: $('#consola').val(),
        programa: $('#programa').val(),
        semana: $('#semana').val(),
        tecnologia: $('#tecnologia').val()
    };

    let datosFormularioJson = JSON.stringify(datosFormulario);

    $.ajax({
        url: urlRest,
        type: 'PUT',
        data: datosFormularioJson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            cargarDatosTable();
            limpiarFormulario();
        }
    });
       
}

function limpiarFormulario() {
    $('#agregarC')[0].reset();
}
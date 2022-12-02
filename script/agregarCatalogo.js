let urlRest = 'https://gc28f183a191bc4-bdcatalogo.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/catalogo/catalogo';

function crear() {
    let datosFormulario = {
        nombre: $('#nombre').val(),
        ip: $('#ip').val(),
        servidor: $('#ciclo').val(),
        ciclo: $('#ciclo').val(),
        consola: $('#consola').val(),
        programa: $('#programa').val(),
        semana: $('#semana').val(),
        tecnologia: $('#tecnologia').val()
    };

    let datosFormularioJson = JSON.stringify(datosFormulario);

    $.ajax({
        url: urlRest,
        type: 'POST',
        data: datosFormularioJson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);            
            limpiarFormulario();
        }
    });
}

function limpiarFormulario() {
    $('#agregarC')[0].reset();
}


// function guardar() {
//     var nombre = document.getElementById('txtNombre');
//     var ciclo = document.getElementById('txtApellido');    
//     var telefono = document.getElementById('txtTelefono');

//     $('#txtApellido').on('change',function(){
//         var apellido = $(this).find('option:selected').text();
//     });

//     var detalle = {
//         method: "POST",
//         body: JSON.stringify({
//             "nombre": nombre.value,
//             "apellido": ciclo.value,
//             "telefono": telefono.value
//         })
//     }


//     fetch("http://www.raydelto.org/agenda.php", detalle)
//         .then(function (respuesta) {
//             return respuesta.json();
//         })
//         .then(function (respuesta) {
//             var estado = document.getElementById('estado');
//             if (respuesta.exito === true) {
//                 estado.innerHTML = "Cinta agregada";
//             } else {
//                 estado.innerHTML = "Hubo un problema al enviar datos";
//             }
//         });
// }
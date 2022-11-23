function guardar() {
    var nombre = document.getElementById('txtNombre');
    var ciclo = document.getElementById('txtApellido');    
    var telefono = document.getElementById('txtTelefono');

    // $('#txtApellido').on('change',function(){
    //     var apellido = $(this).find('option:selected').text();
    // });

    var detalle = {
        method: "POST",
        body: JSON.stringify({
            "nombre": nombre.value,
            "apellido": ciclo.value,
            "telefono": telefono.value
        })
    }


    fetch("http://www.raydelto.org/agenda.php", detalle)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (respuesta) {
            var estado = document.getElementById('estado');
            if (respuesta.exito === true) {
                estado.innerHTML = "Cinta agregada";
            } else {
                estado.innerHTML = "Hubo un problema al enviar datos";
            }
        });
}
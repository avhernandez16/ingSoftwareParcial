function obtenerDatos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(respuesta){
        return respuesta.json();
    }).then(function(mostrarData(data)){
        const mostrarData = (data)=>{
           console.log(data)
           let body =''
           for(let i=0; i<data.length; i++){
                body+=<tr></tr>
           } 
        }
    })
}


// function obtenerDatos(){
//     fetch("http://www.raydelto.org/agenda.php")
//     .then(function(respuesta){
//         return respuesta.json();
//     }).then(function(respuesta){
//         var nombre = document.getElementById('nombre');
//         nombre.innerHTML = respuesta[1].nombre;
//     })
// }
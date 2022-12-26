$("#verNoticias").click(function(event){
    
    fetch('http://localhost:8080/news')
    .then(response => response.json())
    .then(data => mostrarNoticias(data))
    .catch(error => console.log(error))
    
    const mostrarNoticias=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> 
            <td>${data[i].id}</td> 
            <td>${data[i].titulo}</td>
            <td>${data[i].fecha}</td><td>${data[i].username}</td> 
            <td>${data[i].categoria_id.id}</td>
            <td>${data[i].url}</td>
            <td>${data[i].resumen}</td>
              <td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> 
              <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td>
              </tr>`
        }
        document.getElementById('dataTienda').innerHTML=body
    }
})
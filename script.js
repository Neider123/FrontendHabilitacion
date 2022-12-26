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
            <td>${data[i].fecha}</td>
            <td>${data[i].categoria_id.id}</td>
            <td>${data[i].url}</td>
            <td>${data[i].resumen}</td>
              <td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> 
              <td><button class="btn btn-danger" onclick="deleteNews(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td>
              </tr>`
        }
        document.getElementById('dataTienda').innerHTML=body
    }
})


$("#agregarNoticias").click(function(event){
    $("#contenedorU").load('formularioNoticia.html')
})


function deleteNews(id){
       
    fetch('http://localhost:8080/news/'+id,{
        method:'DELETE',
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(response=>response.json())
    .then(data=>{
        Swal.fire({
            icon: 'success',
            title: 'Movimiento Eliminado',
            text: news,
            timer: 1000,
            footer: '<p class="fw-bolder" >Noticias UFPS</p>'
          })

    

    })
    .catch(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo eliminar movimiento!',
            timer:1000,
            footer: '<a href="">Why do I have this issue?</a>'
        })
    })

}



/** 
function registrarNoticias() {

    var titulo = document.getElementById('titulo').value;
    var desarrollo = document.getElementById('desarrollo').value;
    var fecha = document.getElementById('fecha').value;
    var categoria_id = document.getElementById('categoria').value;
    var url = document.getElementById('url').value;
    var resumen = document.getElementById('resumen').value;
    let fecha=new Date();
    const news = {
        titulo: titulo,
        desarrollo : desarrollo,
        fecha : fecha,
        categoria_id : categoria_id,
        url:url,
        resumem:resumen,
    }
    console.log(news)
    fetch('http://localhost:8080/news', {
        method: 'POST',
        body: JSON.stringify(news),
        headers: {
            "Content-type": "application/json"
        }

    }).then(res => res.json())
        .then(news => console.log(news))

}

*/

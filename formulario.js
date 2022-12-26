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
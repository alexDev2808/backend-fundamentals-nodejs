// 1 Importar express

const express = require('express');

// 2 Crear instancia de un servidor
const app = express();

// 3 Declaracion de rutas
// Un metodo/verbo Http es una accion que puede realizar un backend
// GET, POST, PUT, DELETE, PATCH, OPTION, HEAD, TRACE, CONNECT

// Para registrar una ruta
// instancia.metodo(ruta, handler)

app.get('/', function(request, response) {
    // send es write() y send()
    response.send("Hola express");
});

app.get('/about', function(req, res) {
    res.sendFile(`${__dirname}/about.html`);
});
// * es una ruta comodin(cualquiera que no sea las de arriba)
app.get("*", function(req, res) {
    res.sendFile(`${__dirname}/404.html`);
});

// 4 Escuchar puerto
app.listen(8080, function() {
    console.log('Escuchando en el puerto 8080');
});
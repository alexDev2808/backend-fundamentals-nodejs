const http = require("node:http");

const server = http.createServer(function (request, response) {

    response.write("Hola mundo")

    response.end()
})

// Escuchar peticiones
server.listen(8080, function() {
    console.log("Servidor escuchando en el puerto 8080");
});
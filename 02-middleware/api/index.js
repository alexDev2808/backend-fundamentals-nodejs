const express = require('express');

const app = express();

const db = [
    {
        id: 1,
        name: 'Gansito',
        price: 20,
    },
    {
        id: 2,
        name: 'Coca-cola',
        price: 16,
    },
    {
        id: 3,
        name: 'Sabritas',
        price: 19,
    },
    {
        id: 4,
        name: 'Chips',
        price: 17,
    },
];

// Obtener todos los productos
app.get('/productos', function(req, res) {
    // .json convierte los objetos JS a JSON
    res.json(db);
});


// Obtener un producto en especifico

// Un API tiene 4 maneras de recibir parametros:
// 1 Pedazo de URL
// 2 Query String (en la URL)
// 3 Encabezados
// 4 Body de la peticion
// ruta/:variable -> dinamico
app.get('/productos/:id', function(req, res) {
    // Recuperando la variable :id de la URL como una cadena de texto
    const id = req.params.id;
    const producto = db.find(x => x.id.toString() === id);
    res.json(producto);
});

app.listen(8080, function() {
    console.log("Escuchando en el puerto 8080");
}); 
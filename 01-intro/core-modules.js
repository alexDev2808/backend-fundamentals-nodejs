// Core Modules son paquetes o modulos
// que vienen incluidos en la instalacion de Node

// Se utiliza una funcion especial llamada "require"
// para "importar" las funciones o modulos que queremos utilizar

// CommonJS
const os = require("node:os")

// EcmaScript 6
// import os from "node:os"

console.log(os.platform());
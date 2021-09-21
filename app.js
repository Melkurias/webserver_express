const http = require('http');
const express = require('express');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: "Roberto",
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log("Escuchando puerto: 8080");
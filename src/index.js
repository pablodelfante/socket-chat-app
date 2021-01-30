// REQUERIMIENTOSS
// requiero expres
const express = require('express');
const app = express();
// import { app2 } from "express";??

// requiero servidor node http para io
const http = require('http').createServer(app);
// le paso el server http a io
const io = require('socket.io')(http);
// defino puerto
const port = process.env.PORT || 8080;

// MIDELWARES
// static es mi via de montaje para archivos estaticos
app.use('/static', express.static(__dirname + '/public'));


// PRIMER RUTA
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// MENSAJES
const messages = [];
// MI EJEMPLO IO
io.on('connection', (socket) => {
    // una vez conectado el socket...
    console.log('alguien se ha conectado');
    socket.on('newMessage', msg => {
        console.log('mandaron', msg);
        messages.push(msg);
    });
});

// ESCUCHA DE PUERTO
http.listen(port, () => {
    console.log(`Corriento en http://localhost:${port}`);
});

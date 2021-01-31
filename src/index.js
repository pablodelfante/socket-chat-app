// REQUERIMIENTOSS
// requiero expres
const express = require('express');
const app = express();
// import { app2 } from "express";??

// requiero servidor node http para io
const http = require('http').createServer(app);
// le paso el server http a io
const io = require('socket.io')(http);

const cookieParser = require('cookie-parser')

// defino puerto
const port = process.env.PORT || 8080;

// MIDELWARES
// static es mi via de montaje para archivos estaticos
app.use('/static', express.static(__dirname + '/public'));

// sesion
app.set('title', 'My Site')
app.get('title') // "My Site"
app.use(cookieParser())


// RUTAS
// login
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
// chat
app.get('/chat:param', (req, res) => {
    console.log(req.params.param);
    res.sendFile(__dirname + '/index.html');

    // seteo la cookie desde el backend
    res.cookie('prueba',req.params.param);
});//fin de /chat


// MENSAJES
const messages = [];
// MI EJEMPLO IO
io.on('connection', (socket) => {
    // una vez conectado el socket...
    console.log('alguien se ha conectado');


    socket.on('newMessage', msg => {
        console.log(msg)
        // envio ultimo mensaje a todos!
        io.emit('message', msg);
    });
});


// ESCUCHA DE PUERTO
http.listen(port, () => {
    console.log(`Corriento en http://localhost:${port}`);
});

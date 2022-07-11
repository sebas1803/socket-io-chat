const express = require('express');
const app = express();

const http = require('http');

const server = http.createServer(app);

server.listen(3000);

app.use(express.static('public'));

const io = require('socket.io')(server);

io.on('connect', function (socket) {
    console.log('Nueva conexion con id: ' + socket.id);

    socket.on('datos_usuarios', function (datos) {
        console.log('Usuario: ' + datos.usuario);
        console.log('Correo: ' + datos.correo);
        io.emit('nuevo_usuario', {user: datos.usuario});
    });
});
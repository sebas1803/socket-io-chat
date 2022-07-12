const socket = io();

socket.on('nuevo_usuario', function (datos) {
    console.log('Nuevo usuario conectado: ' + datos.user)
});

socket.on('nuevo_mensaje', function (datos) {
    $('#message-container').append('<label><strong>' + datos.user + ': ' + '</strong></label><p>' + datos.mensaje + '</p>')
});

function login(correo, usuario) {
    socket.emit('datos_usuarios', { correo: correo, usuario: usuario });
}

function enviar_msj(mensaje, usuario) {
    socket.emit('send_mensaje', { mensaje: mensaje, usuario: usuario });
}
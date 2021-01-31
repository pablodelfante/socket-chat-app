// SCRIPTS DEL INDEX
var socket = io();

//  VARIABLES
const message = document.getElementById('message');
const form = document.getElementById('form');
const containerMsg = document.getElementById('container-msg');

// my render
function render(msg) {
    const render =
        `<li>${msg}</li>`;

    containerMsg.innerHTML += render;
    // muevo scrooll
    window.scrollTo(0, document.body.scrollHeight);
}

//  ENVIO MENSAJE
form.addEventListener('submit', function (e) {
    e.preventDefault();
    socket.emit('newMessage', `<strong>${cookie.get('alias')}:</strong> ${message.value}`);
    // vacio campo
    message.value = '';

});

//  ESCUCHO MENSAJES
socket.on('message', (msg) => {
    render(msg);
});
// --------------------------



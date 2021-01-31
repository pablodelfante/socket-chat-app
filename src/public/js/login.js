// SCRIPTS DEL LOGIN

const formLogin = document.getElementById('form-login');
const inputLogin = document.getElementById('input-login');
formLogin.addEventListener('submit', addAlias);

function addAlias(e) {
    e.preventDefault();
    // me mate aca eh
    window.location = `/chat${inputLogin.value}`;
}
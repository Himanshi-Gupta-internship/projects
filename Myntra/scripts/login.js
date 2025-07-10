const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');
const error = document.getElementById('error');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const credentials = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password')
    };

    let userTypeEmail = email.value;
    let userTypePassword = password.value;

    if (userTypeEmail === credentials.email && userTypePassword === credentials.password) {
        window.location.href = 'http://127.0.0.1:5500/index.html'
    }
    else {
        error.innerText = 'Invalid Credential! ';
        email.value = '';
        password.value = '';
    }
});
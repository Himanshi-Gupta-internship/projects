const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
try{
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    email.value='';
    password.value='';
    window.location.href = 'http://127.0.0.1:5500/pages/login.html';
}catch(error){
    alert(error.message)
}
});
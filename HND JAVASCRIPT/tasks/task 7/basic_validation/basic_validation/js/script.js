let btn = document.getElementById('btn');
btn.addEventListener('click', validate);

function validate() {
    
    let userName = document.getElementById('uName');
    let pwd = document.getElementById('pwd');

    if (userName.value === '' && pwd.value === '') {
        let error = document.querySelector('.error');
        error.innerText = "The Fields Cant Be Empty";

    } else if (userName.value === 'admin' && Number (pwd.value) === 123) {
        window.location.href = 'loggedIn.html';
    } else {
        window.location.href = 'logInDenied.html';
    }
}
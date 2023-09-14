let logIn = document.getElementById('btn');
logIn.addEventListener('click', validate);

function validate() {
    
    let userName = document.getElementById('uName');
    let pwd = doument.getElementById('pwd');

    if (userName.value === '' && pwd.value === '') {
        let error = document.querySelector('.error');
        error.innerHTML = "The Fields Cant Be Empty";

    } else if (userName.value === 'admin' && Number (pwde.value) === 123) {
        window.location.href = 'loggedIn.html';
    } else {
        window.location.href = 'logInDenied.html';
    }
}
// Wait until the document is ready
document.addEventListener('DOMContentLoaded', function() {

    // Get input fields and buttons
    const emailField = document.getElementById('email');
    const usernameField = document.getElementById('username');
    const form = document.querySelector('form');
    const resetButton = document.getElementById('btn');
    const emailError = document.getElementById('emailerror');
    const unameError = document.getElementById('unameerror');

    // Validate form on submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateEmail(emailField.value) && validateUsername(usernameField.value)) {
            window.location.href = 'subbed.html';
        }
    });

    // Reset fields when reset button is clicked
    resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        let fields = document.querySelectorAll('.field');
        for (let field of fields) {
            field.value = '';
        }
    });

    // Check email format
    function validateEmail(email) {
        // Thank you stack overflow for this i was searching for a while trying to figure out how to validate it XD
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailPattern.test(email)) {
            emailError.textContent = '';
            return true;
        } else {
            emailError.textContent = 'Invalid email.';
            return false;
        }
    }

    // Check username (only letters and numbers)
    function validateUsername(username) {
        // Same with this one it just makes sure no aditional symbols can be added to the username or email to make sure it follows the requirements
        let usernamePattern = /^[a-zA-Z0-9]+$/;
        if (usernamePattern.test(username)) {
            unameError.textContent = '';
            return true;
        } else {
            unameError.textContent = 'Invalid username.';
            return false;
        }
    }
});
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the necessary elements
    const generateButton = document.getElementById('genbtn');
    const counterOutput = document.getElementById('counter_output');
    const randomNumberOutput = document.getElementById('rand_num');
    const greaterLessOutput = document.getElementById('greater_less');
    const imageOutput = document.getElementById('image');
    const resetButton = document.getElementById('reset');

    let buttonClickCounter = 0;  // Global variable to keep track of button clicks
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Attach event listener to the green button
    generateButton.addEventListener('click', function() {
        buttonClickCounter++;
        const randNum = Math.floor(Math.random() * 26) + 1; // Generate random number between 1 and 26
        const alphabetImage = alphabet[randNum - 1];

        // Display the random number
        randomNumberOutput.textContent = randNum;

        // Display the counter
        counterOutput.textContent = buttonClickCounter;

        // Display the appropriate message based on the random number using logical operators
        if (randNum > 0 && randNum < 13) {
            greaterLessOutput.textContent = ` ${randNum} and is less than 13`;
        } else if (randNum > 13 && randNum <= 26) {
            greaterLessOutput.textContent = ` ${randNum} and is greater than 13`;
        } else if (randNum === 13) {
            greaterLessOutput.textContent = ` ${randNum} and is equal to 13`;
        }

        // Display the corresponding image from the alphabet
        imageOutput.innerHTML = `<img src="images/${alphabetImage}.png" alt="${alphabetImage}" />`;
    });

    // Attach event listener to the reset button
    resetButton.addEventListener('click', function() {
        buttonClickCounter = 0;
        randomNumberOutput.textContent = '';
        counterOutput.textContent = '';
        greaterLessOutput.textContent = '';
        imageOutput.innerHTML = '';
    });

});
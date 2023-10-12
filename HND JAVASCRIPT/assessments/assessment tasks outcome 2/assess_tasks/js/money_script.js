// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the necessary elements
    const currencyInput = document.getElementById('currency');
    const calculateButton = document.getElementById('currencybtn');
    const output50 = document.getElementById('output50');
    const output20 = document.getElementById('output20');
    const output10 = document.getElementById('output10');
    const warningMessage = document.getElementById('warning'); // Added this line

    // Attach an event listener to the calculate button
    calculateButton.addEventListener('click', function() {
        let amount = parseFloat(currencyInput.value);
        
        // Validate if input is not a number or empty
        if (isNaN(amount) || currencyInput.value.trim() === '') {
            warningMessage.textContent = 'Please enter a valid amount.'; // Modified this line
            return;
        } else {
            warningMessage.textContent = ''; // Clear the warning message if input is valid
        }

        calculateChange(amount);
    });

    // Function to calculate the number of 50p, 20p, and 10p coins.
    function calculateChange(amount) {
        // Convert £'s to pence for easier calculation
        let amountInPence = amount * 100;

        // Calculate the number of 50p coins
        let num50p = Math.floor(amountInPence / 50);

        // Calculate the number of 20p coins for the remaining amount after 50p coins
        let remainderAfter50p = amountInPence % 50;
        let num20p = Math.floor(remainderAfter50p / 20);
        
        // Calculate the number of 10p coins for the remaining amount after 20p coins
        let remainderAfter20p = remainderAfter50p % 20;
        let num10p = Math.floor(remainderAfter20p / 10);

        // Update the output paragraphs
        output50.textContent = `Number of 50p coins in £${amount} is: ${num50p}`;
        output20.textContent = `Number of 20p coins in £${amount} is: ${num20p}`;
        output10.textContent = `Number of 10p coins in £${amount} is: ${num10p}`;
    }

});
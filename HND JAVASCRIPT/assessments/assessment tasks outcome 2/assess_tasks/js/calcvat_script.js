// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Get references to elements from the page
    const calcButton = document.getElementById('calcbtn');
    const resetButton = document.getElementById('reset');
    const amountInput = document.getElementById('amount');
    const vatInput = document.getElementById('vat');
    const totalInput = document.getElementById('total');

    // Attach a click event to the 'Calculate VAT' button
    calcButton.addEventListener('click', function() {
        calculateVAT(amountInput.value);
    });

    // Attach a click event to the 'Reset' button
    resetButton.addEventListener('click', function() {
        resetFields();
    });

    /**
     * Function to calculate the VAT and Grand Total.
     * @param {string} amount - Amount input by the user.
     */
    function calculateVAT(amount) {
        // Set the VAT rate
        let vatRate = 0.22;
        
        // Validate the amount to make sure its not left empty or an incorrect value was entered such as "four" instead of 4.
        if(isNaN(amount) || amount.trim() === '') {
            alert('Please enter a valid amount.');
            return;
        }
        
        // Calculate VAT and Grand Total
        let vatAmount = parseFloat(amount) * vatRate;
        let grandTotal = parseFloat(amount) + vatAmount;

        // Update the input fields
        vatInput.value = vatAmount.toFixed(2);
        totalInput.value = grandTotal.toFixed(2);
    }

    // Function to reset all input fields.
    function resetFields() {
        let inputs = document.querySelectorAll('.details');
        
        // Loop through each input and reset its value
        for(let input of inputs) {
            input.value = '';
        }
    }
});
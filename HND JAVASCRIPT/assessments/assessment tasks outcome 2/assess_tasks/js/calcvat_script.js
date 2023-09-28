document.addEventListener('DOMContentLoaded', function () {
    // return all elements with a specific value so it can be used in the javascript
    const calcButton = document.getElementById('calcbtn');
    const resetButton = document.getElementById('reset');
    const amountInput = document.getElementById('amount');
    const vatInput = document.getElementById('vat');
    const totalInput = document.getElementById('total');

    calcButton.addEventListener('click', function() {
        calculateVAT(amountInput.value);
    });

    resetButton.addEventListener('click', function() {
        resetFields();
    });

    // As shown below this function calculates the VAT of the amount by timesing the original amount by 0.22 and adding it to the initial amount to generate the grand total
    function calculateVAT(amount) {
        let vatRate = 0.22;
        
        // Check if the input value is a number
        if(isNaN(amount) || amount.trim() === '') {
            alert('Please enter a valid amount.');
            return;
        }
        
        let vatAmount = parseFloat(amount) * vatRate;
        let grandTotal = parseFloat(amount) + vatAmount;

        vatInput.value = vatAmount.toFixed(2);
        totalInput.value = grandTotal.toFixed(2);
    }

    function resetFields() {
        let inputs = document.querySelectorAll('.details');
        
        // Using a loop to clear all input fields with class 'details'
        for(let input of inputs) {
            input.value = '';
        }
    }
});
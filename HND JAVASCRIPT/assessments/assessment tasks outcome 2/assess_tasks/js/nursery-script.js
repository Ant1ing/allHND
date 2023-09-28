document.addEventListener('DOMContentLoaded', function() {

    // Get references to elements from the page
    const selectMenu = document.getElementById('menuselect');
    const resetButton = document.getElementById('rst');
    const messageOutput = document.getElementById('msgout');

    // Event listener for the dropdown menu
    selectMenu.addEventListener('change', function() {
        // Convert to upper case
        let selectedDay = selectMenu.value.toUpperCase(); 
        displayRhyme(selectedDay);
    });

    // Event listener for the reset button
    resetButton.addEventListener('click', function() {
        // Clear the displayed message
        messageOutput.textContent = ''; 
        // Reset the dropdown selection
        selectMenu.value = ''; 
    });

    function displayRhyme(day) {
        let message;
        const validDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];

        if (validDays.includes(day)) {
            switch(day) {
                case 'MONDAY':
                    message = "Monday's child is fair of face.";
                    break;
                case 'TUESDAY':
                    message = "Tuesday's child is full of grace.";
                    break;
                case 'WEDNESDAY':
                    message = "Wednesday's child is full of woe.";
                    break;
                case 'THURSDAY':
                    message = "Thursday's child has far to go.";
                    break;
                case 'FRIDAY':
                    message = "Friday's child is loving and giving.";
                    break;
            }
        } else {
            message = "Please select a valid day.";
        }

        // Display the rhyme
        messageOutput.textContent = message; 
    }
});
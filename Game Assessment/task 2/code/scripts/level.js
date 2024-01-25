$(document).ready(function() {
    // Arrays to store the limb and slot elements and their associated data
    const limbs = [];
    const slots = [];
    let correctPlacements = 0; // Counter to track the number of correctly placed limbs

    // Function to display the player's name, retrieved from local storage
    function displayPlayerName() {
        const playerName = localStorage.getItem('playerName');
        if (playerName) {
            // Update the greeting container with the player's name
            const greetingContainer = document.getElementById('greeting-container');
            if (greetingContainer) {
                greetingContainer.innerHTML = `<h2>Hello, ${playerName} 👋</h2>`;
            }
        }
    }

    // Function to initialize limbs and slots by selecting elements with class 'limb' and 'slot'
    function initializeGameElements() {
        $('.limb').each(function() {
            // Store each limb element and its corresponding data-limb-number
            const limbNumber = $(this).data('limb-number');
            limbs.push({ element: $(this), number: limbNumber });
        });

        $('.slot').each(function() {
            // Store each slot element and its corresponding data-slot-number
            const slotNumber = $(this).data('slot-number');
            slots.push({ element: $(this), number: slotNumber });
        });

        // Setup draggable and droppable functionality for limbs and slots
        setupDragAndDrop();
    }

    // Function to enable drag and drop functionality
    function setupDragAndDrop() {
        // Make each limb draggable
        limbs.forEach(limb => {
            limb.element.draggable({
                revert: 'invalid', // Limb reverts to original position if not placed correctly
                start: function() { $(this).css('z-index', '10'); }, // Bring to front when dragging
                stop: function() { $(this).css('z-index', '1'); } // Reset z-index after dragging
            });
        });

        // Make each slot droppable
        slots.forEach(slot => {
            slot.element.droppable({
                tolerance: 'intersect', // Limb must intersect with slot to be considered a drop
                accept: function(draggable) {
                    // Only accept limb if its data matches the slot number
                    return slot.number === draggable.data('limb-number');
                },
                drop: function(event, ui) {
                    // Handle the limb drop event
                    const droppedLimb = ui.draggable;
                    // Check if the dropped limb matches the slot
                    if (slot.number === droppedLimb.data('limb-number')) {
                        alignLimbToSlot(droppedLimb, slot.element); // Align limb to slot
                        correctPlacements++; // Increment correct placement count
                        updateStars('images/star2.png'); // Add a star for each correct placement
                        checkCompletion(); // Check if all limbs are placed correctly
                    }
                }
            });
        });
    }

    // Function to add a star to the stars container
    function updateStars(imagePath) {
        const star = $('<img>').attr('src', imagePath).addClass('star');
        $('#stars-container').append(star);
    }

    // Function to align the limb to the center of the slot and disable further dragging
    function alignLimbToSlot(limb, slot) {
        limb.position({ 
            my: "center", 
            at: "center", 
            of: slot 
        });
        limb.draggable('disable'); // Disable dragging of the limb after it's correctly placed
    }

    // Function to check if all limbs have been correctly placed
    function checkCompletion() {
        if (correctPlacements === limbs.length) {
            // Hide 'before' image, slots, and limbs, then show 'after' image and continue button
            $('.asset-before').hide();
            $('.slot').hide();
            $('.limb').hide();
            $('.asset-after').show();
            $('#continueButton').show();
        }
    }

    // Event handler for the continue button to navigate to the next level
    $('#continueButton').click(function() {
        const nextLevel = $(this).data('next-level');
        if (nextLevel) {
            window.location.href = nextLevel; // Redirect to the URL of the next level
        } 
    });

    // Initialize the game by displaying player name and setting up game elements
    displayPlayerName();
    initializeGameElements();
    
});
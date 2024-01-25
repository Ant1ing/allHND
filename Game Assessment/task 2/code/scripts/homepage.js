// Set the default game level.
let selectedLevel = 1;

// Add event listeners after the page loads.
document.addEventListener('DOMContentLoaded', () => {
    // Start game when button clicked.
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    // Open level selector when button clicked.
    document.getElementById('level-selector-btn').addEventListener('click', openLevelSelector);
    // Close level selector when home button clicked.
    document.getElementById('homebutton').addEventListener('click', closeLevelSelector);
    // Save player name when submitted.
    document.getElementById('submit-name').addEventListener('click', storeName);
});

// Save player's name in local storage.
function storeName() {
    const playerName = document.getElementById('player-name').value;
    localStorage.setItem('playerName', playerName);
    console.log(`Name stored: ${playerName}`);
}

// Function to start the game.
function startGame() {
    selectLevel(selectedLevel);
}

// Show level selector screen and load stars.
function openLevelSelector() {
    toggleDisplay('start-page', 'none');
    toggleDisplay('level-chooser', 'flex');
    loadStarsForLevels();
}

// Load stars for each level from local storage
function loadStarsForLevels() {
    for (let i = 1; i <= 5; i++) {
        const starsForLevel = localStorage.getItem(`starsForLevel${i}`) || 0;
        const starsContainer = document.getElementById(`starsForLevel${i}`);
        starsContainer.innerHTML = `${starsForLevel}/4 <img src="images/star2.png" class="star-icon" />`;
    }
}
// Go back to the start page.
function closeLevelSelector() {
    toggleDisplay('start-page', 'flex');
    toggleDisplay('level-chooser', 'none');
}

// Navigate to the selected game level.
function selectLevel(level) {
    window.location.href = `level${level}.html`;
}

// Change the display style of an element.
function toggleDisplay(elementId, displayStyle) {
    document.getElementById(elementId).style.display = displayStyle;
}
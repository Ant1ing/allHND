let selectedLevel = 1;

function startGame() {
    // Navigate to the selected level page when "Start Game" is pressed
    selectLevel(selectedLevel)
}

function openLevelSelector() {
    // Hide the start page when opening the level selector
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('level-chooser').style.display = 'flex';
}

function closeLevelSelector() {
    // Show the start page when closing the level selector
    document.getElementById('start-page').style.display = 'flex';
    document.getElementById('level-chooser').style.display = 'none';
}

function selectLevel(level) {
    // Navigate to the selected level page
    window.location.href = `level${level}.html`;
}
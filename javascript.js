const darkToggleButton = document.getElementById('theme-mode-toggle');
const body = document.body;

// Function to update button text based on the current mode
function updateButtonText() {
    if (body.classList.contains('light-mode')) {
        darkToggleButton.textContent = 'Toggle Dark Mode';
    } else {
        darkToggleButton.textContent = 'Toggle Light Mode';
    }
}

// Set initial button text based on the default mode
updateButtonText();

// On click, toggle the light-mode class theme and update the button text
darkToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    updateButtonText();
});
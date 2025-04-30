// Dark mode toggle button
const darkToggleButton = document.getElementById('theme-mode-toggle');
const body = document.body;

// Function to update button text based on the current mode
function updateButtonText() {
    if (body.classList.contains('light-mode')) {
        darkToggleButton.textContent = 'Toggle Dark Theme';
    } else {
        darkToggleButton.textContent = 'Toggle Light Theme';
    }
}

// Set initial button text based on the default mode
updateButtonText();

// On click, toggle the light-mode class theme and update the button text
darkToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    updateButtonText();
});

// Modal
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Add click event to all project images
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src; // Set the modal image source to the clicked image
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
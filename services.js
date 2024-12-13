// Select all portfolio images
const portfolioImages = document.querySelectorAll('.portfolio-grid img');
const body = document.querySelector('body');

// Create modal container
const modal = document.createElement('div');
modal.classList.add('image-modal');
modal.style.display = 'none'; // Initially hidden
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <img src="" alt="Portfolio Image">
        <button class="prev" aria-label="Previous Image">&lt;</button>
        <button class="next" aria-label="Next Image">&gt;</button>
    </div>
`;

// Append modal to body
body.appendChild(modal);

// Modal elements
const modalImage = modal.querySelector('.modal-content img');
const closeModal = modal.querySelector('.close');
const prevButton = modal.querySelector('.prev');
const nextButton = modal.querySelector('.next');

// Initialize current image index
let currentIndex = 0;

// Open modal when an image is clicked
portfolioImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        openModal(image.src, image.alt);
    });
});

// Open modal function
function openModal(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt;
    modal.style.display = 'flex'; // Show the modal
    body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal function
function closeModalHandler() {
    modal.style.display = 'none'; // Hide the modal
    body.style.overflow = 'auto'; // Enable background scrolling
}

// Show previous image
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
    const prevImage = portfolioImages[currentIndex];
    openModal(prevImage.src, prevImage.alt);
}

// Show next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % portfolioImages.length;
    const nextImage = portfolioImages[currentIndex];
    openModal(nextImage.src, nextImage.alt);
}

// Event listeners for modal
closeModal.addEventListener('click', closeModalHandler); // Close modal on "X" button click
prevButton.addEventListener('click', showPreviousImage); // Navigate to previous image
nextButton.addEventListener('click', showNextImage); // Navigate to next image

// Close modal on clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Close modal on pressing the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModalHandler();
    }
});
// Smooth scroll to the booking section
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}

// Banner Slider Functionality
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideImages = document.querySelectorAll('.banner-image');

let currentIndex = 0; // Track the current slide index
const slideCount = slideImages.length;

// Function to move to a specific slide
const goToSlide = (index) => {
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
};

// Function to go to the next slide
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
};

// Function to go to the previous slide
const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(currentIndex);
};

// Auto-slide functionality
let slideInterval = setInterval(nextSlide, 4000);

// Pause auto-slide on mouse enter and resume on mouse leave
slides.addEventListener('mouseenter', () => clearInterval(slideInterval));
slides.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 4000));

// Event listeners for navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

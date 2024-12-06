// Select elements
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;

// Show the active slide and dot
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Next Slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start
  showSlide(currentIndex);
}

// Previous Slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the end
  showSlide(currentIndex);
}

// Dot Navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Auto Slide (every 4 seconds)
setInterval(nextSlide, 4000);

// Button Listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Show the initial slide
showSlide(currentIndex);

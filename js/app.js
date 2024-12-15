// Get modal elements
const modal = document.getElementById("fullscreen-modal");
const img = document.getElementById("notice-image");
const modalImg = document.getElementById("fullscreen-img");
const closeBtn = document.querySelector(".close-btn");

// Show modal when image is clicked
img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when user clicks outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Get the modal
const modal = document.getElementById("popup-modal");

// Get the <span> element to close the modal
const closeButton = document.querySelector(".close");

// Show the modal when the webpage loads
window.onload = () => {
  modal.style.display = "block";
};

// Close modal when the close button is clicked
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

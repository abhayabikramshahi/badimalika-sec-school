// Password for uploading and deleting
const UPLOAD_PASSWORD = "puspa123";

// Load stored images from localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    const imageGallery = document.getElementById("image-gallery");
    storedImages.forEach((src, index) => {
        addImageToGallery(src, index);
    });
});

// Function to handle the upload
function handleUpload() {
    const userPassword = prompt("Enter the password to upload an image:");
    if (userPassword === UPLOAD_PASSWORD) {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
                    storedImages.push(e.target.result);
                    localStorage.setItem('uploadedImages', JSON.stringify(storedImages));
                    addImageToGallery(e.target.result, storedImages.length - 1);
                    alert(`File "${file.name}" has been uploaded successfully.`);
                };
                reader.readAsDataURL(file);
            } else {
                alert("No file selected.");
            }
        };
        fileInput.click();
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// Function to add an image to the gallery
function addImageToGallery(src, index) {
    const imageGallery = document.getElementById("image-gallery");
    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.alt = `Image ${index}`;
    imgElement.style.width = "210px";
    imgElement.style.height = "297px";
    imgElement.style.margin = "10px";
    imgElement.style.cursor = "pointer";
    imgElement.dataset.index = index;
    imgElement.addEventListener("click", () => openFullScreen(src, index));
    imageGallery.appendChild(imgElement);
}

// Function to open the image in full screen
function openFullScreen(src, index) {
    const fullScreenView = document.getElementById("full-screen-view");
    const fullScreenImage = document.getElementById("full-screen-image");
    fullScreenImage.src = src;
    fullScreenImage.dataset.index = index;
    fullScreenView.style.display = "flex";
}

// Function to close the full-screen view
function closeFullScreen() {
    document.getElementById("full-screen-view").style.display = "none";
}

// Function to delete the image
function deleteImage() {
    const userPassword = prompt("Enter the password to delete this image:");
    if (userPassword === UPLOAD_PASSWORD) {
        const fullScreenImage = document.getElementById("full-screen-image");
        const indexToDelete = fullScreenImage.dataset.index;
        const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
        storedImages.splice(indexToDelete, 1);
        localStorage.setItem('uploadedImages', JSON.stringify(storedImages));
        document.getElementById("image-gallery").innerHTML = "";
        storedImages.forEach((src, index) => {
            addImageToGallery(src, index);
        });
        closeFullScreen();
        alert("Image deleted successfully.");
    } else {
        alert("Incorrect password. Cannot delete the image.");
    }
}

// Attach the function to the button in the HTML
const uploadButton = document.querySelector(".upload button");
if (uploadButton) {
    uploadButton.addEventListener("click", handleUpload);
}

// Event listeners for full screen close and delete buttons
document.getElementById("close-fullscreen").addEventListener("click", closeFullScreen);
document.getElementById("delete-image").addEventListener("click", deleteImage);


// Block right-click menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Disable right-click
});

// Block F12 (DevTools) key and Ctrl+Shift+I combination
document.addEventListener('keydown', function(e) {
    // Block F12 (DevTools) key
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
    }
    // Block Ctrl + Shift + J (DevTools console)
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }
});

// Detect and prevent the opening of devtools
(function() {
    var devtoolsOpen = false;
    var threshold = 160;

    // Monitor for developer tools opening
    setInterval(function() {
        const width = window.outerWidth - window.innerWidth;
        const height = window.outerHeight - window.innerHeight;
        if ((width > threshold || height > threshold) && !devtoolsOpen) {
            devtoolsOpen = true;
            alert("Developer Tools are not allowed!"); // Alert or handle as needed
        } else if (width <= threshold && height <= threshold && devtoolsOpen) {
            devtoolsOpen = false;
        }
    }, 1000);
})();

// Correct password for upload
const correctPasswordForUpload = 'admin123';

// DOM Elements
const uploadNoticeBtn = document.getElementById('uploadNoticeBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const submitNoticeBtn = document.getElementById('submitNoticeBtn');
const headingSelect = document.getElementById('headingSelect');
const headingInput = document.getElementById('heading');
const descriptionInput = document.getElementById('description');
const imageInput = document.getElementById('imageInput');
const noticeList = document.getElementById('noticeList');

// Load notices from localStorage and display them
const loadNotices = () => {
    const notices = JSON.parse(localStorage.getItem('notices')) || [];
    noticeList.innerHTML = ''; // Clear existing notices

    notices.forEach((notice, index) => {
        const noticeDiv = document.createElement('div');
        noticeDiv.classList.add('notice');
        noticeDiv.innerHTML = `
            <${notice.tag}>${notice.heading}</${notice.tag}>
            <img src="${notice.image}" alt="Notice Image" class="notice-image">
            <p>${notice.description}</p>
            <button class="delete-btn" onclick="deleteNotice(${index})">Delete</button>
        `;
        noticeList.appendChild(noticeDiv);
    });
};

// Submit the notice form with password protection
submitNoticeBtn.addEventListener('click', () => {
    // Password prompt before upload
    const password = prompt('Enter password to upload notice:');
    if (password !== correctPasswordForUpload) return alert('Incorrect password!');

    const tag = headingSelect.value;
    const heading = headingInput.value.trim();
    const description = descriptionInput.value.trim();
    const file = imageInput.files[0];

    if (!heading || !description) {
        alert('Please fill in all fields.');
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const notice = {
            tag,
            heading,
            description,
            image: file ? reader.result : ''  // Image is optional
        };

        // Save the new notice to localStorage
        const notices = JSON.parse(localStorage.getItem('notices')) || [];
        notices.push(notice);
        localStorage.setItem('notices', JSON.stringify(notices));

        // Reload notices to display
        loadNotices();

        // Show success message
        alert('Notice uploaded successfully and is now live on the website.');

        // Close the popup
        popup.style.display = 'none';
        overlay.style.display = 'none';
    };

    if (file) {
        reader.readAsDataURL(file);  // If there's an image, read it as a Data URL
    } else {
        reader.onload();  // If no image, trigger the load without reading a file
    }
});

// Open popup to upload a new notice
uploadNoticeBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

// Close popup when clicking the overlay
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Delete notice from localStorage
function deleteNotice(index) {
    const password = prompt('Enter password to delete:');
    if (password !== correctPasswordForUpload) return alert('Incorrect password!');

    const notices = JSON.parse(localStorage.getItem('notices')) || [];
    notices.splice(index, 1);
    localStorage.setItem('notices', JSON.stringify(notices));

    // Reload notices to reflect the deletion
    loadNotices();
}

// Initial call to load notices
loadNotices();

// Block right-click menu (optional)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Disable right-click
});

// Block F12 (DevTools) key and Ctrl+Shift+I combination (optional)
document.addEventListener('keydown', function (e) {
    // Block F12 (DevTools) key
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
    }
    // Block Ctrl + Shift + J (DevTools console)
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }
});

// Detect and prevent the opening of devtools (optional)
(function () {
    var devtoolsOpen = false;
    var threshold = 160;

    // Monitor for developer tools opening
    setInterval(function () {
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

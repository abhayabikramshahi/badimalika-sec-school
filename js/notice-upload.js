// Correct password for upload
const correctPasswordForUpload = 'admin123';

// DOM Elements (same as before)
const uploadNoticeBtn = document.getElementById('uploadNoticeBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const submitNoticeBtn = document.getElementById('submitNoticeBtn');
const headingSelect = document.getElementById('headingSelect');
const headingInput = document.getElementById('heading');
const descriptionInput = document.getElementById('description');
const imageInput = document.getElementById('imageInput');
const noticeList = document.getElementById('noticeList');
const fullscreen = document.getElementById('fullscreen');
const closeFullscreen = document.getElementById('closeFullscreen');

// Load notices from Firebase and display them
const loadNotices = () => {
    const noticesRef = db.ref('notices');
    noticesRef.once('value', (snapshot) => {
        const notices = snapshot.val() || [];
        noticeList.innerHTML = ''; // Clear existing notices

        Object.values(notices).forEach((notice, index) => {
            const noticeDiv = document.createElement('div');
            noticeDiv.classList.add('notice');
            noticeDiv.innerHTML = `
                <${notice.tag}>${notice.heading}</${notice.tag}>
                <img src="${notice.image}" alt="Notice Image" class="notice-image">
                <p>${notice.description}</p>
                <button class="delete-btn" onclick="deleteNotice(${index})">Delete</button>
            `;
            
            noticeDiv.querySelector('img').addEventListener('click', () => viewFullScreen(notice));
            noticeList.appendChild(noticeDiv);
        });
    });
};

// View notice in full screen (same as before)
const viewFullScreen = (notice) => {
    fullscreen.style.display = 'flex';
    fullscreen.innerHTML = `
        <button class="close-fullscreen" id="closeFullscreenBtn">Close</button>
        <img src="${notice.image}" alt="Full Image">
    `;
    document.getElementById('closeFullscreenBtn').addEventListener('click', closeFullScreen);
};

// Close full-screen view (same as before)
const closeFullScreen = () => fullscreen.style.display = 'none';

// Delete notice after password verification (same as before)
const deleteNotice = (index) => {
    const password = prompt('Enter password to delete:');
    if (password !== correctPasswordForUpload) return alert('Incorrect password!');

    const noticesRef = db.ref('notices');
    noticesRef.once('value', (snapshot) => {
        const notices = snapshot.val() || [];
        const noticeKey = Object.keys(notices)[index];

        // Remove notice from Firebase
        noticesRef.child(noticeKey).remove().then(() => loadNotices());
    });
};

// Submit the notice form with password protection
submitNoticeBtn.addEventListener('click', () => {
    const password = prompt('Enter password to upload notice:');
    if (password !== correctPasswordForUpload) return alert('Incorrect password!');

    const tag = headingSelect.value;
    const heading = headingInput.value.trim();
    const description = descriptionInput.value.trim();
    const file = imageInput.files[0];

    if (!heading || !description || !file) {
        alert('Please fill in all fields.');
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        const notice = {
            tag,
            heading,
            description,
            image: reader.result
        };

        const noticesRef = db.ref('notices');
        const newNoticeRef = noticesRef.push();
        newNoticeRef.set(notice).then(() => {
            loadNotices();
            // Close the popup
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });
    };

    reader.readAsDataURL(file);
});

// Open popup to upload a new notice (same as before)
uploadNoticeBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

// Close popup when clicking the overlay (same as before)
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Initial call to load notices
loadNotices();

// Block right-click menu (same as before)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Disable right-click
});

// Block F12 (DevTools) key and Ctrl+Shift+I combination (same as before)
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

// Detect and prevent the opening of devtools (same as before)
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

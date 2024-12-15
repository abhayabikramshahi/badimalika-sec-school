    const hamburger = document.querySelector('.hamburger');
    const items = document.querySelector('.items');

    // Toggle visibility of menu on click
    hamburger.addEventListener('click', () => {
        items.classList.toggle('active');
    });

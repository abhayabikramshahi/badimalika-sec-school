document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
    this.classList.toggle('active');
});

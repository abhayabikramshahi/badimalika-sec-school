setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('a').style.display = 'none';
    document.querySelector('.hero-section').style.display = 'none';
}, 2000);
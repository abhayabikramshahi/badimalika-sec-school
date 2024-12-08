document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownContent = item.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

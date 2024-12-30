  // Mobile Menu Toggle
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });

  // Mobile Dropdown Toggles
  document.getElementById('mobile-academics-btn').addEventListener('click', () => {
    const dropdown = document.getElementById('mobile-academics');
    dropdown.classList.toggle('hidden');
  });

  document.getElementById('mobile-activities-btn').addEventListener('click', () => {
    const dropdown = document.getElementById('mobile-activities');
    dropdown.classList.toggle('hidden');
  });
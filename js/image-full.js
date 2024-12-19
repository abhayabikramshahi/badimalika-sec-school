function showFullscreen(imageSrc) {
    const viewer = document.getElementById('fullscreenViewer');
    const fullscreenImage = document.getElementById('fullscreenImage');
  
    fullscreenImage.src = imageSrc;
    viewer.style.display = 'flex';
  }
  
  function closeFullscreen() {
    const viewer = document.getElementById('fullscreenViewer');
    viewer.style.display = 'none';
  }
  
   // Slider Functionality
   const slider = document.getElementById('slider');
   const slides = slider.children;
   const dots = document.querySelectorAll('.dot');
   const prev = document.getElementById('prev');
   const next = document.getElementById('next');

   let index = 0;

   function updateSlider() {
     // Update slide position
     slider.style.transform = `translateX(-${index * 100}%)`;

     // Update dots
     dots.forEach((dot, dotIndex) => {
       dot.classList.remove('bg-gray-800');
       dot.classList.add('bg-gray-300');
       if (dotIndex === index) {
         dot.classList.add('bg-gray-800');
       }
     });
   }

   function goToNextSlide() {
     index = (index + 1) % slides.length;
     updateSlider();
   }

   function goToPrevSlide() {
     index = (index - 1 + slides.length) % slides.length;
     updateSlider();
   }

   next.addEventListener('click', goToNextSlide);
   prev.addEventListener('click', goToPrevSlide);

   dots.forEach((dot) => {
     dot.addEventListener('click', () => {
       index = parseInt(dot.getAttribute('data-index'));
       updateSlider();
     });
   });

   // Auto-Slide (Optional)
   setInterval(goToNextSlide, 5000); // Change slides every 5 seconds
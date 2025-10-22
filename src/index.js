import './index.css';

// History Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const prevBtn = document.querySelector('.history__nav-btn--prev');
  const nextBtn = document.querySelector('.history__nav-btn--next');
  let currentSlide = 0;

  // Function to update active slide
  function setActiveSlide(index) {
    // Remove active class from all items
    timelineItems.forEach(item => {
      item.classList.remove('timeline-item--active');
    });

    // Add active class to current item
    if (timelineItems[index]) {
      timelineItems[index].classList.add('timeline-item--active');
      currentSlide = index;
    }
  }

  // Timeline items click handlers
  timelineItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      setActiveSlide(index);
    });
  });

  // Previous button handler
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIndex = currentSlide > 0 ? currentSlide - 1 : timelineItems.length - 1;
      setActiveSlide(newIndex);
    });
  }

  // Next button handler
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIndex = currentSlide < timelineItems.length - 1 ? currentSlide + 1 : 0;
      setActiveSlide(newIndex);
    });
  }

  // Go to top button functionality
  const goToTopBtn = document.getElementById('goToTop');
  if (goToTopBtn) {
    goToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

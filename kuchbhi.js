document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  let scrollAmount = 0;
  const slideWidth = slider.clientWidth;

  rightButton.addEventListener('click', () => {
      scrollAmount += slideWidth;
      if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0;
      }
      slider.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });

  leftButton.addEventListener('click', () => {
      scrollAmount -= slideWidth;
      if (scrollAmount < 0) {
          scrollAmount = slider.scrollWidth - slideWidth;
      }
      slider.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});


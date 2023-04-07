const carouselInner = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.indicator');
let activeIndex = 0;
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    indicators[activeIndex].classList.remove('active');
    indicator.classList.add('active');
    activeIndex = index;
  });
});

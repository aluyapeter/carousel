window.onload = function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  };

const faqsBtn = document.getElementById("faqs-question-btn");


faqsBtn.addEventListener("click", function () {
  let faqsAns = document.getElementById("faqs-answer");

  if (faqsAns.style.display = "none") {
    faqsAns.style.display = "block"
  } else if (faqsAns.style.display = "block") {
    faqsAns.style.display = "none"
  }
})
// carousel indicator

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


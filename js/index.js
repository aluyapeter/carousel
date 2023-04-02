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
// faqsBtn.addEventListener("click", function () {
//   let faqsAns = document.getElementById("faqs-answer");

//   if (faqsAns.style.display = "block") {
//     faqsAns.style.display = "none";
//   }
// })

// const dropdownToggle = document.querySelector('.dropdown-toggle');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// dropdownToggle.addEventListener('click', () => {
//   dropdownMenu.classList.toggle('show');
// });

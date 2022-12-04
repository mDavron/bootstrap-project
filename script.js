
  $(document).ready(function () {
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });

// scroll top element scripts here
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 3000) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active')
  }

})
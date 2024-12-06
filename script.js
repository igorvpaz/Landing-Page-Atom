const swiper = new Swiper('.swiper', {
  loop: true, // Ativar looping
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

AOS.init({
  duration: 2000
});

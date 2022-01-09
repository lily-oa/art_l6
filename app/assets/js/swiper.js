//首頁輪播
//設定輪播圖片間距
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
});
/*---------------------------------------------- */
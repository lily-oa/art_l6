//動畫及表單驗證
AOS.init();
$(function(){
  AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true,
  });

  resetForm();
  checkSubscriptionValue();

  //訂閱成功
  $('.js-subscription-btn').on('click', function() {
    $('.js-subscription-input').val('');
    $(this).prop('disabled', true);
    swalFn('成功訂閱');
  });
  
});

/*---------------------------------------------- */
// loader-inner
$(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  $(".loader-inner").loaders();
  $('body').css('overflow', 'hidden');
  setTimeout(function () {
    $('body').css('overflow', 'auto');
    $(".loading").fadeOut(600);
  }, 800);
});

/*---------------------------------------------- */
// 按下"前往登入"按鈕後
$('.js-sign-in-modal-btn').on('click', () => {
  signInModal.show();
  signUpModal.hide();
});

// detail.html 按下"收藏展覽"按鈕後
$('.js-collert-btn').on('click', function(){
  const btnContent = $(this).text();
  swal.fire({
    text: '已加入收藏',
  });

  if(btnContent === '收藏展覽'){
    console.log(btnContent);
    $(this).text('展覽已收藏').removeClass('btn-outline-primary').addClass('btn-secondary');
  } else {
    console.log(btnContent);
    $(this).text('收藏展覽').removeClass('btn-secondary').addClass('btn-outline-primary');
  }
});

// detail.html 按下"購買票卷"按鈕後
$('.js-add-cart').on('click', function(){
  swal.fire({
    text: '展覽已加入購物車',
  });
});

// 每個頁面當按下右下方的 "^" 返迴最上方的按鈕時
// toUpBtn.ejs
$('#btnColorChange').on('click', function(){
  $(this).toggleClass('bg-secondary');
});

/*---------------------------------------------- */
// banner-index.ejs "購買票卷"按鈕買
function addTicket(showName = '展覽') {
  swal.fire({
    title: showName,
    inputLabel: '你想購買幾張票卷？',
    icon: 'question',
    input: 'range',
    inputAttributes:{
      min: 1,
      max: 10,
      step: 1,
    },
    inputValue: 1,
  });
}

/*---------------------------------------------- */
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
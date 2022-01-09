"use strict";

//動畫及表單驗證
AOS.init();
$(function () {
  AOS.init({
    offset: 200,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 1000,
    // values from 0 to 3000, with step 50ms
    once: true
  });
  resetForm();
  checkSubscriptionValue(); //訂閱成功

  $('.js-subscription-btn').on('click', function () {
    $('js-subscription-input').val('');
    $(this).prop('disabled', true);
    swal.fire({
      text: '訂閱成功'
    });
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

$('.js-sign-in-modal-btn').on('click', function () {
  signInModal.show();
  signUpModal.hide();
}); // detail.html 按下"收藏展覽"按鈕後

$('.js-collert-btn').on('click', function () {
  var btnContent = $(this).text();
  swal.fire({
    text: '已加入收藏'
  });

  if (btnContent === '收藏展覽') {
    console.log(btnContent);
    $(this).text('展覽已收藏').removeClass('btn-outline-primary').addClass('btn-secondary');
  } else {
    console.log(btnContent);
    $(this).text('收藏展覽').removeClass('btn-secondary').addClass('btn-outline-primary');
  }
}); // detail.html 按下"購買票卷"按鈕後

$('.js-add-cart').on('click', function () {
  swal.fire({
    text: '展覽已加入購物車'
  });
}); // 每個頁面當按下右下方的 "^" 返迴最上方的按鈕時
// toUpBtn.ejs

$('#btnColorChange').on('click', function () {
  $(this).toggleClass('bg-secondary');
});
/*---------------------------------------------- */
// banner-index.ejs "購買票卷"按鈕買

function addTicket() {
  var showName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '展覽';
  swal.fire({
    title: showName,
    inputLabel: '你想購買幾張票卷？',
    icon: 'question',
    input: 'range',
    inputAttributes: {
      min: 1,
      max: 10,
      step: 1
    },
    inputValue: 1
  });
}
/*---------------------------------------------- */
//首頁輪播
//設定輪播圖片間距


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
/*---------------------------------------------- */
"use strict";

//表單驗證
function resetForm() {
  var allInputs = document.querySelectorAll('input');
  var allErrorMsg = document.querySelectorAll('.js-validate-msg');
  var allSubmitBtn = document.querySelectorAll('.js-form-submit-btn');
  var classStyle = ['border-danger', 'animate__animated', 'animate__headShake'];
  allInputs.forEach(function (input) {
    $(input).val('');
    $(input).removeClass(classStyle);
  });
  allErrorMsg.forEach(function (msg) {
    $(msg).text('');
    $(msg).removeClass('d-block');
  });
  allSubmitBtn.forEach(function (btn) {
    $(btn).siblings('.disabled-style').removeClass('d-none');
  });
}

function validationForm() {
  validationEmail();
  validationPassword();
} //信箱驗證


function validationEmail() {
  var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-user-email';
  var data = {
    inputs: document.querySelectorAll(dom),
    rule: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
    msg: '格式錯誤'
  };
  validationAllInputsFn(data);
} //密碼驗證


function validationPassword() {
  var data = {
    inputs: document.querySelectorAll('.js-user-password'),
    rule: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]{1})[A-Za-z\d@#$!%*?&]{8,}$/,
    msg: '須 8 碼以上含大、小寫英文、數字和特殊符號'
  };
  validationAllInputsFn(data);
} //


function validationAllInputsFn(data) {
  var inputs = data.inputs,
      rule = data.rule,
      msg = data.msg;
  inputs.forEach(function (input) {
    $(input).on('input propertychange', function () {
      var errorName = $(input).attr('name');
      var inputDatas = {
        input: $(this),
        inputValue: $(this).val(),
        rule: rule,
        errorName: errorName,
        errorCustomMsg: "".concat(errorName).concat(msg)
      };
      checkInputDate(inputDatas);
    });
  });
}

function validationInputFn(data) {
  var inputs = data.inputs,
      rule = data.rule,
      msg = data.msg;
  $(inputs).on('input propertychange', function () {
    var errorName = $(inputs).attr('name');
    var inputDatas = {
      input: $(this),
      inputValue: $(this).val(),
      rule: rule,
      errorName: errorName,
      errorCustomMsg: "".concat(errorName).concat(msg)
    };
    checkInputDate(inputDatas);
  });
}

function checkInputDate(obj) {
  var borderStyle = ['border-danger', 'animate__animated', 'animate__headShake'];
  var input = obj.input,
      inputValue = obj.inputValue,
      rule = obj.rule,
      errorName = obj.errorName,
      errorCustomMsg = obj.errorCustomMsg;
  var errorMsg = $(input).next();

  if (!rule.test(inputValue)) {
    input.addClass(borderStyle);
    $(errorMsg).addClass('d-block');

    if (inputValue === '') {
      $(errorMsg).text("".concat(errorName, "\u70BA\u5FC5\u586B"));
    } else {
      $(errorMsg).text(errorCustomMsg);
    }
  } else {
    input.removeClass(borderStyle);
    $(errorMsg).removeClass('d-block');
  }
} //----------------------------------------------------  
// subscribe.ejs 關於 "訂閱" 


$('.js-subscription-input').on('input propertychange', function () {
  var borderStyle = ['border-danger', 'border-2', 'animate__animated', 'animate__headShake'];
  var inputValue = $(this).val();
  var rule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  var errorName = $(this).attr('name');
  var errorMsg = $('.js-subscription-msg');
  var errorCustomMsg = "".concat(errorName, " \u683C\u5F0F\u932F\u8AA4");

  if (inputValue === '') {
    $(this).removeClass(borderStyle);
    $(errorMsg).removeClass('d-block');
    $('.js-subscription-btn').prop('disabled', true);
  } else if (!rule.test(inputValue)) {
    $(this).addClass(borderStyle);
    $(errorMsg).addClass('d-block');
    $(errorMsg).text(errorCustomMsg);
    $('.js-subscription-btn').prop('disabled', true);
  } else {
    $(this).removeClass(borderStyle);
    $(errorMsg).removeClass('d-block');
    $('.js-subscription-btn').prop('disabled', false);
  }
});

function checkSubscriptionValue() {
  var errorMsg = $('.js-subscription-msg');

  if ($('.js-subscription-input').val() === '') {
    $('.js-subscription-btn').prop('disabled', true);
    $(errorMsg).removeClass('d-block');
  }
}
"use strict";

// sweetalert 設定值 modal.js
var signInModal = new bootstrap.Modal($('.js-sign-in-modal'));
var signUpModal = new bootstrap.Modal($('.js-sign-up-modal'));
var forgotPasswordModal = new bootstrap.Modal($('#forgotPasswordModal'));
resetForm();
validationForm();
$('.js-sign-in-modal-btn').on('click', function () {
  resetForm();
  signInModal.show();
  signUpModal.hide();
});
$('.js-sign-up-modal-btn').on('click', function () {
  resetForm();
  signInModal.hide();
  signUpModal.show();
});
$('.forgotPasswordModal-btn').on('click', function () {
  resetForm();
  signInModal.hide();
  forgotPasswordModal.show();
}); //登入成功訊息

$('.js-modal-login-check').on('submit', function (event) {
  event.preventDefault();
  signInModal.hide();
  swal.fire({
    icon: 'success',
    title: '登入成功',
    text: '模擬訊息'
  });
}); //註冊一個帳號成功訊息

$('.js-modal-sign-up-check').on('submit', function (event) {
  event.preventDefault();
  signUpModal.hide();
  swal.fire({
    icon: 'success',
    title: '註冊成功',
    text: '模擬訊息'
  });
}); // 重設密碼連結寄出訊息

$('.searchPassword-check').on('submit', function (event) {
  event.preventDefault();
  forgotPasswordModal.hide();
  swal.fire({
    icon: 'success',
    title: '重設密碼連結已寄出',
    text: '模擬訊息'
  });
});
"use strict";

function swalFn(msg) {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: msg,
    toast: true,
    showConfirmButton: false,
    timer: 1800
  });
}
//# sourceMappingURL=all.js.map

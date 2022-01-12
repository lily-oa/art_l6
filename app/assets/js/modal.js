// sweetalert 設定值 modal.js

const signInModal = new bootstrap.Modal($('.js-sign-in-modal'));
const signUpModal = new bootstrap.Modal($('.js-sign-up-modal'));
const forgotPasswordModal = new bootstrap.Modal($('#forgotPasswordModal'));
resetForm();
validationForm();

$('.js-sign-in-modal-btn').on('click', () => {
  resetForm();
  signInModal.show();
  signUpModal.hide();
});

$('.js-sign-up-modal-btn').on('click', () => {
  resetForm();
  signInModal.hide();
  signUpModal.show();
});

$('.forgotPasswordModal-btn').on('click', () => {
  resetForm();
  signInModal.hide();
  forgotPasswordModal.show();
});

$('.js-modal-login-check').on('submit', function(event) {
  event.preventDefault();
  signInModal.hide();
  swalFn('登入成功');
});

//註冊一個帳號成功訊息
$('.js-modal-sign-up-check').on('submit', function(event) {
  event.preventDefault();
  signUpModal.hide();
  swalFn('註冊成功');
});

// 重設密碼連結寄出訊息
$('.searchPassword-check').on('submit', function(event){
  event.preventDefault();
  forgotPasswordModal.hide();
  swal.fire({
    icon: 'success',
    title: '重設密碼連結已寄出',
    text: '模擬訊息',
  });
});

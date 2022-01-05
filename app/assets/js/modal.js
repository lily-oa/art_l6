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
  signInModal.hide();
  forgotPasswordModal.show();
});

//登入成功訊息
$('.js-modal-login-check').on('submit', function(event){
  event.preventDefault();
  signInModal.hide();
  swal.fire({
    icon: 'success',
    title: '登入成功',
    text: '模擬訊息', 
  });
});

//註冊一個帳號成功訊息
$('.js-modal-sign-up-check').on('submit', function(event){
  event.preventDefault();
  signUpModal.hide();
  swal.fire({
    icon: 'success',
    title: '註冊成功',
    text: '模擬訊息',
  });
});
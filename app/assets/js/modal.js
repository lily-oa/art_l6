// sweetalert 設定值 modal.js

const loginModal = new bootstrap.Modal($('#loginModal'));
const registerModal = new bootstrap.Modal($('#registerModal'));
const forgotPasswordModal = new bootstrap.Modal($('#forgotPasswordModal'));
resetForm();
validationForm();

$('.forgotPasswordModal-btn').on('click', () => {
  loginModal.hide();
  forgotPasswordModal.show();
});

$('.registerModal-btn').on('click', () => {
  loginModal.hide();
  registerModal.show();
});

//登入成功訊息
$('.loginModal-check').on('submit', function(event){
  event.preventDefault();
  loginModal.hide();
  swal.fire({
    icon: 'success',
    title: '登入成功',
    text: '模擬訊息', 
  });
});

//註冊一個帳號成功訊息
$('.registerModal-check').on('submit', function(event){
  event.preventDefault();
  registerModal.hide();
  swal.fire({
    icon: 'success',
    title: '註冊成功',
    text: '模擬訊息',
  });
});
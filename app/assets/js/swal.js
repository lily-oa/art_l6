// 修改 sweetaler2 彈跳訊息的內容及樣式
function swalFn(msg) {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: msg,
    toast: true,
    showConfirmButton: false,
    timer: 1800,
  });
}
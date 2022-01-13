//表單驗證
function resetForm() {
  const allInputs = document.querySelectorAll('input');
  const allErrorMsg = document.querySelectorAll('.js-validate-msg');
  const allSubmitBtn = document.querySelectorAll('.js-form-submit-btn');
  const allSubmitBtn = document.querySelectorAll('.js-form-submit-btn-2');
  const classStyle = ['border-danger', 'animate__animated', 'animate__headShake'];

  allInputs.forEach((input) => {
    $(input).val('');
    $(input).removeClass(classStyle);
  });

  allErrorMsg.forEach((msg) => {
    $(msg).text('');
    $(msg).removeClass('d-block');
  });

  allSubmitBtn.forEach((btn) => {
    $(btn).siblings('.disabled-style').removeClass('d-none');
  });

}


function validationForm() {
  validationEmail();
  validationPassword();
  validationUserName();
  validationPhone();
}

//信箱驗證
function validationEmail(dom = '.js-user-email') {
  const data = {
    inputs: document.querySelectorAll(dom),
    rule: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
    msg: '格式錯誤',
  };
  validationAllInputsFn(data);
}
//密碼驗證
function validationPassword() {
  const data = {
    inputs: document.querySelectorAll('.js-user-password'),
    rule: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]{1})[A-Za-z\d@#$!%*?&]{8,}$/,
    msg: '須 8 碼以上含大、小寫英文、數字和特殊符號',
  };
  validationAllInputsFn(data);
}
//用戶名稱驗證
function validationUserName() {
  const userNameInputs = document.querySelectorAll('.js-user-name');

  userNameInputs.forEach((input) => {
    $(input).on('input propertychange', function() {
      const errorName =  $(input).attr('name');
      const inputDatas = {
        input: $(this),
        inputValue: $(this).val(),
        rule: /^[A-Za-z \u4e00-\u9fa5]{2,}$/,
        symbolRule: /[!@#$%^&*()_+-=`~\\\/[\]{}0-9]/,
        errorName: errorName,
      }
      checkUserName(inputDatas);
    });
  });
}
//手機驗證
function validationPhone() {
  const data = {
    inputs: document.querySelectorAll('.js-user-phone'),
    rule: /^09\d{8}$/,
    msg: '格式錯誤，須為 09 開頭的 10 碼數字',
  };
  validationAllInputsFn(data);
}
/*-----------------------尚有信用卡部份未寫----------------------*/

/*-----------------------------------------------------------*/
//
function validationAllInputsFn(data) {
  const { inputs, rule, msg } = data;

  inputs.forEach((input) => {
    $(input).on('input propertychange', function() {
      const errorName =  $(input).attr('name');
      const inputDatas = {
        input: $(this),
        inputValue: $(this).val(),
        rule: rule,
        errorName: errorName,
        errorCustomMsg: `${errorName}${msg}`,
      }
      checkInputDate(inputDatas);
    });
  });
}
function validationInputFn(data) {
  const { inputs, rule, msg } = data;

  $(inputs).on('input propertychange', function() {
    const errorName =  $(inputs).attr('name');
    const inputDatas = {
      input: $(this),
      inputValue: $(this).val(),
      rule: rule,
      errorName: errorName,
      errorCustomMsg: `${errorName}${msg}`,
    }
    checkInputDate(inputDatas);
  });
}

function checkInputDate(obj) {
  const borderStyle = ['border-danger', 'animate__animated', 'animate__headShake'];
  const { input, inputValue, rule, errorName, errorCustomMsg } = obj;
  const errorMsg = $(input).next();

  if(!rule.test(inputValue)) {
    input.addClass(borderStyle);
    $(errorMsg).addClass('d-block');

    if (inputValue === '') {
      $(errorMsg).text(`${errorName}為必填`);
    } else {
      $(errorMsg).text(errorCustomMsg);
    }
  } else {
    input.removeClass(borderStyle);
    $(errorMsg).removeClass('d-block');
  }
}
function checkUserName(obj) {
  const borderStyle = ['border-danger', 'animate__animated', 'animate__headShake'];
  const { input, inputValue, rule, symbolRule, errorName } = obj;
  const errorMsg = $(input).next();

  if (!rule.test(inputValue)) {
    input.addClass(borderStyle);
    $(errorMsg).addClass('d-block');

    if(symbolRule.test(inputValue)) {
      console.log(symbolRule.test(inputValue));
      $(errorMsg).text(`${errorName}不得含特殊符號或數字`);
    } else if(inputValue === '') {
      $(errorMsg).text(`${errorName}為必填`);
    } else if (inputValue.length <= 1) {
      input.addClass(borderStyle);
      $(errorMsg).addClass('d-block');
      $(errorMsg).text(`${errorName}須超過兩個字以上`);
    }
  } else {
    input.removeClass(borderStyle);
    $(errorMsg).removeClass('d-block');
  }
}

//----------------------------------------------------  
//關於信用上及表單送出時按鈕的變化

$('.js-modal-login-check').on('change', function() {
  const formInputs = document.querySelectorAll('.js-modal-login-input');
  checkFormValue(formInputs);
});

function checkFormValue(inputs) {
  const submitBtn = $('.js-form-submit-btn');
  let inputValueTrue = 0;

  inputs.forEach(function(input) {
    if (input.value !== '') {
      inputValueTrue += 1;
    }
  });

  if (inputValueTrue === inputs.length) {
    $(submitBtn).siblings('.disabled-style').addClass('d-none');
  } else {
    $(submitBtn).siblings('.disabled-style').removeClass('d-none');
  }

};

/*----------------------Sign up 表單-------------------------*/
$('.js-modal-sign-up-check').on('change', function() {
  const formInputs = document.querySelectorAll('.js-modal-sign-up-input');
  checkFormValue(formInputs);
});

function checkFormValue(inputs) {
  const submitBtn = $('.js-form-submit-btn-2');
  let inputValueTrue = 0;

  inputs.forEach(function(input) {
    if (input.value !== '') {
      inputValueTrue += 1;
    }
  });

  if (inputValueTrue === inputs.length) {
    $(submitBtn).siblings('.disabled-style').addClass('d-none');
  } else {
    $(submitBtn).siblings('.disabled-style').removeClass('d-none');
  }

};




















//----------------------------------------------------  
// subscribe.ejs 關於 "訂閱" 
$('.js-subscription-input').on('input propertychange', function() {
  const borderStyle = ['border-danger', 'border-2', 'animate__animated', 'animate__headShake'];
  const inputValue = $(this).val();
  const rule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  const errorName =  $(this).attr('name');
  const errorMsg = $('.js-subscription-msg');
  const errorCustomMsg = `${errorName} 格式錯誤`;

  if (inputValue === '') {
    $(this).removeClass(borderStyle);
    $(errorMsg).removeClass('d-block');
    $('.js-subscription-btn').prop('disabled', true);

  } else if(!rule.test(inputValue)) {
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
  const errorMsg = $('.js-subscription-msg');

  if($('.js-subscription-input').val() === '') {
    $('.js-subscription-btn').prop('disabled', true);
    $(errorMsg).removeClass('d-block');
  }
}
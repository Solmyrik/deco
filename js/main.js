function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const inputItem = document.querySelectorAll('._input');
const placeholder = document.querySelectorAll('._placeholder');

let recentValue = '';

inputItem.forEach((e, i) => {
  e.addEventListener('focus', () => {
    if (e == document.activeElement) {
      placeholder[i].style.display = 'block';
      recentValue = e.placeholder;
      e.placeholder = '';
    }
  });
});

inputItem.forEach((e, i) => {
  e.addEventListener('focusout', (element) => {
    console.log(element);
    if (e.value.length > 1) {
      e.style.color = '#151a21';
    }
    placeholder[i].style.display = 'none';
    inputItem[i].placeholder = recentValue;
  });
});

function maskNumber() {
  let phoneInputs = document.querySelectorAll('input[data-tel-input]');

  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  };

  let onPhonePaste = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  let onPhoneInput = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = '';

    if (!inputNumbersValue) {
      return (input.value = '');
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9', '1', '2', '3', '4', '5', '6', '0'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] != '7') inputNumbersValue = '7' + inputNumbersValue;
      let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      formattedInputValue = input.value = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  let onPhoneKeyDown = function (e) {
    let inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = '';
    }
  };
  for (let phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
}

maskNumber();

const upButtons = document.querySelectorAll('.footer__up');
upButtons.forEach((button) => {
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

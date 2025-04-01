const requestPopupBtn = document.querySelector('.request-popup__btn');
const carrouselPopupBtn = document.querySelector('.carrousel__btn');
const patternBtn = document.querySelector('.pattern_btn');

requestPopupBtn.addEventListener('click', requestPopupActive);
carrouselPopupBtn.addEventListener('click', requestPopupPas);
patternBtn.addEventListener('click', handlePatternForm);

function requestPopupActive() {
  if (emailValidate() === 0) {
    togglePopupVisibility(1);
  }
}

function requestPopupPas() {
  togglePopupVisibility(0);
}

function togglePopupVisibility(index) {
  const requestPopup = document.querySelectorAll('.request-popup');
  requestPopup.forEach((popup, i) => {
    popup.classList.toggle('active', i === index);
  });
}

function emailValidate() {
  let errorCount = 0;

  const numberInput = document.querySelectorAll('.number-input');
  const nameInput = document.querySelectorAll('.name-input');
  const checkbox = document.querySelectorAll('._checkbox-wallet');

  errorCount += validateField(nameInput[0], nameInput[0].value.length < 1);
  errorCount += validateField(numberInput[0], numberInput[0].value.length !== 18);
  errorCount += validateCheckbox(checkbox[1], '._fake-wallet:nth-of-type(2)');

  return errorCount;
}

function validateField(input, hasError) {
  if (hasError) {
    input.classList.add('error');
    showError(1);
    return 1;
  } else {
    input.classList.remove('error');
    return 0;
  }
}

function validateCheckbox(checkbox, fakeInputSelector) {
  if (!checkbox.checked) {
    const fakeInput = document.querySelector(fakeInputSelector);
    fakeInput.classList.add('error');
    showError(1);
    return 1;
  } else {
    const fakeInput = document.querySelector(fakeInputSelector);
    fakeInput.classList.remove('error');
    return 0;
  }
}

function showError(index) {
  const errorForms = document.querySelectorAll('._error-form');
  errorForms[index].classList.add('active');
}

function handlePatternForm(e) {
  e.preventDefault();
  let errorCount = 0;

  const popupThanksFake = document.querySelector('.popup-thanks-fake');
  const patternNumber = document.querySelector('.patternnumberinput');
  const patternName = document.querySelector('.patternnameinput');
  const checkbox = document.querySelectorAll('._checkbox-wallet');

  errorCount += validateField(patternName, patternName.value.length < 1);
  errorCount += validateField(patternNumber, patternNumber.value.length !== 18);
  errorCount += validateCheckbox(checkbox[0], '._fake-wallet:nth-of-type(1)');

  if (errorCount === 0) {
    patternNumber.value = '';
    patternName.value = '';
    hideError();
    patternBtn.classList.add('popup-link');
    popupThanksFake.click();
  }
}

function hideError() {
  const errorForms = document.querySelectorAll('._error-form');
  errorForms.forEach((form) => form.classList.remove('active'));
}

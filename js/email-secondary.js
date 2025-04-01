const forms = document.querySelectorAll('.request-popup__form');
const numberInputs = document.querySelectorAll('.number-input');
const nameInputs = document.querySelectorAll('.name-input');
const formButtons = document.querySelectorAll('.btn-form');
const checkboxes = document.querySelectorAll('._checkbox-wallet');
const errorForms = document.querySelectorAll('._error-form');
const fakeInputs = document.querySelectorAll('._fake-wallet');

formButtons.forEach((btn) => {
  btn.addEventListener('click', validateForm);
});

function validateForm(e) {
  e.preventDefault();
  const popupThanksFake = document.querySelector('.popup-thanks-fake');
  let hasError = false;

  hasError = hasError || validateInput(nameInputs[0], nameInputs[0].value.length < 1);
  hasError = hasError || validateInput(numberInputs[0], numberInputs[0].value.length !== 18);
  hasError = hasError || validateCheckbox(checkboxes[0], fakeInputs[0]);

  if (!hasError) {
    clearInputs();
    popupThanksFake.click();
  }
}

function validateInput(input, isError) {
  if (isError) {
    input.classList.add('error');
    error();
    return true;
  } else {
    input.classList.remove('error');
    return false;
  }
}

function validateCheckbox(checkbox, fakeInput) {
  if (!checkbox.checked) {
    fakeInput.classList.add('error');
    error();
    return true;
  } else {
    fakeInput.classList.remove('error');
    return false;
  }
}

function error() {
  errorForms[0].classList.add('active');
}

function clearError() {
  errorForms[0].classList.remove('active');
}

function clearInputs() {
  nameInputs[0].value = '';
  numberInputs[0].value = '';
  clearError();
}

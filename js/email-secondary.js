// form
const form = document.querySelectorAll('.request-popup__form');
const numberInput = document.querySelectorAll('.number-input');
const nameInput = document.querySelectorAll('.name-input');
const formBtn = document.querySelectorAll('.btn-form');
const checkbox = document.querySelectorAll('._checkbox-wallet');
const errorForm = document.querySelectorAll('._error-form');
const fakeInput = document.querySelectorAll('._fake-wallet');

if (formBtn) {
  formBtn.forEach((btn) => {
    btn.addEventListener('click', valideForm);
  });
}

function valideForm() {
  // console.log(nameInput[0].value);
  if (nameInput[0].value.length < 1) {
    error();
    nameInput[0].classList.add('error');
  } else {
    nameInput[0].classList.remove('error');
  }
  if (numberInput[0].value.length != 18) {
    error();
    numberInput[0].classList.add('error');
  } else {
    numberInput[0].classList.remove('error');
  }
  if (!checkbox[0].checked) {
    error();
    fakeInput[0].classList.add('error');
  } else {
    fakeInput[0].classList.remove('error');
  }
}
function error() {
  errorForm[0].classList.add('active');
}

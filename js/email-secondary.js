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
  const popupThanksFake = document.querySelector('.popup-thanks-fake');
  let quantity = 0;
  if (nameInput[0].value.length < 1) {
    error();
    nameInput[0].classList.add('error');
    quantity++;
  } else {
    nameInput[0].classList.remove('error');
  }
  if (numberInput[0].value.length != 18) {
    error();
    numberInput[0].classList.add('error');
    quantity++;
  } else {
    numberInput[0].classList.remove('error');
  }
  if (!checkbox[0].checked) {
    error();
    fakeInput[0].classList.add('error');
    quantity++;
  } else {
    fakeInput[0].classList.remove('error');
  }
  if (quantity == 0) {
    nameInput[0].value = '';
    numberInput[0].value = '';
    errorInviteDelete();
    popupThanksFake.click();
  }
}
function error() {
  errorForm[0].classList.add('active');
}
function errorInviteDelete() {
  const errorForm = document.querySelectorAll('._error-form');
  errorForm[0].classList.remove('active');
}

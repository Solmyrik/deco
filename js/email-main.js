const requestPopupBtn = document.querySelector('.request-popup__btn');
const carrouselPopupBtn = document.querySelector('.carrousel__btn ');

requestPopupBtn.addEventListener('click', requestPopupActive);
carrouselPopupBtn.addEventListener('click', requestPopupPas);

function requestPopupActive() {
  let next = emailvalide();

  console.log(next);

  if (next == 0) {
    const requestPopup = document.querySelectorAll('.request-popup');
    requestPopup[0].classList.remove('active');
    requestPopup[1].classList.add('active');
  }
}
function requestPopupPas() {
  const requestPopup = document.querySelectorAll('.request-popup');
  requestPopup[1].classList.remove('active');
  requestPopup[0].classList.add('active');
}

function emailvalide() {
  let quantity = 0;
  const numberInput = document.querySelectorAll('.number-input');
  const nameInput = document.querySelectorAll('.name-input');
  const formBtn = document.querySelectorAll('.btn-form');
  const checkbox = document.querySelectorAll('._checkbox-wallet');
  const fakeInput = document.querySelectorAll('._fake-wallet');
  console.log(checkbox);

  if (nameInput[0].value.length < 1) {
    error();
    nameInput[0].classList.add('error');
    quantity++;
  } else {
    nameInput[0].classList.remove('error');
  }
  if (numberInput[0].value.length != 18) {
    error();
    quantity++;
    numberInput[0].classList.add('error');
  } else {
    numberInput[0].classList.remove('error');
  }
  if (!checkbox[1].checked) {
    error();
    fakeInput[1].classList.add('error');
    quantity++;
  } else {
    fakeInput[1].classList.remove('error');
  }
  return quantity;
}
function error() {
  const errorForm = document.querySelectorAll('._error-form');
  console.log(errorForm);
  errorForm[1].classList.add('active');
}

/////

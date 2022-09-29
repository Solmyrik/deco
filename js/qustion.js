const questionItems = document.querySelectorAll('.popup-question__item');
const btnPrev = document.querySelector('.popup-question__btn_prev');
const btnNext = document.querySelector('.popup-question__btn_next');
const variants = document.querySelectorAll('.popup-question__variants');

let step = 0;

btnNext.addEventListener('click', nextStep);
btnPrev.addEventListener('click', prevStep);

function nextStep() {
  if (step == 0) {
    btnPrev.classList.add('active');
  }
  if (step == 6) {
    questionItems[6].classList.remove('active');
    questionItems[0].classList.add('active');
    step = 0;
  }
  if (setVariant[step] != null || step > 3) {
    if (step < 4) {
      deleteError();
    }

    questionItems[step].classList.remove('active');
    questionItems[step + 1].classList.add('active');
    step++;
    if (step < 4) {
      variant();
    }
    console.log(step);
    if (step == 5) {
      btnPrev.style.display = 'none';
      btnNext.style.display = 'none';
      const popupQuistionBtn = document.querySelector('.popup-question__btn');
      popupQuistionBtn.addEventListener('click', valideQuestionForm);
    }
    progress();
  } else {
    errorVarian();
  }
}
function prevStep() {
  if (step == 1) {
    btnPrev.classList.remove('active');
  }
  if (step > 0) {
    questionItems[step].classList.remove('active');
    questionItems[step - 1].classList.add('active');
    step--;
    variant();
    progress();
  }
}

let setVariant = {
  0: null,
  1: null,
  2: null,
  3: null,
};
console.log(step);
function variant() {
  for (let i = 0; i < variants[step].childElementCount; i++) {
    let currentVarian = variants[step].children[i];
    currentVarian.addEventListener('click', (e) => {
      if (setVariant[step] != null) {
        if (i != setVariant[step]) {
          variants[step].children[setVariant[step]].classList.remove('active');
          currentVarian.classList.add('active');
          setVariant[step] = i;
        }
      } else {
        currentVarian.classList.add('active');
        setVariant[step] = i;
      }
    });
  }
}
variant();
function counter() {
  const decrement = document.querySelector('.popup-question__decrement');
  const increment = document.querySelector('.popup-question__increment');
  const number = document.querySelector('.popup-question__number');
  increment.addEventListener('click', () => {
    const num = number.textContent;
    number.textContent = Number(num) + 1;
  });
  decrement.addEventListener('click', () => {
    const num = number.textContent;
    if (num > 0) {
      number.textContent = Number(num) - 1;
    }
  });
}
counter();
function progress() {
  const stripe = document.querySelector('.popup-question__stripe');
  let currentProgress = 20 * step;
  stripe.style.width = currentProgress + '%';
}
function errorVarian() {
  const error = document.querySelectorAll('.popup-question__error');
  error[step].classList.add('active');
}
function deleteError() {
  const error = document.querySelectorAll('.popup-question__error');
  error[step].classList.remove('active');
}

function valideQuestionForm() {
  let quantity = 0;
  const numberInput = document.querySelectorAll('.number-input_q');
  const nameInput = document.querySelectorAll('.name-input_q');
  const checkbox = document.querySelectorAll('._checkbox-wallet');
  const fakeInput = document.querySelectorAll('._fake-wallet');
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
  if (!checkbox[2].checked) {
    error();
    fakeInput[2].classList.add('error');
    quantity++;
  } else {
    fakeInput[2].classList.remove('error');
  }
  if (quantity == 0) {
    questionItems[step].classList.remove('active');
    questionItems[step + 1].classList.add('active');
    step++;
  }
}

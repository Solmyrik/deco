const questionItems = document.querySelectorAll('.popup-question__item');
const btnPrev = document.querySelector('.popup-question__btn_prev');
const btnNext = document.querySelector('.popup-question__btn_next');
const variants = document.querySelectorAll('.popup-question__variants');

let step = 0;

let setVariant = {
  0: null,
  1: null,
  2: null,
  3: null,
};

btnNext.addEventListener('click', nextStep);
btnPrev.addEventListener('click', prevStep);

function nextStep() {
  if (step === 0) {
    btnPrev.classList.add('active');
  }

  if (step === 6) {
    questionItems[6].classList.remove('active');
    questionItems[0].classList.add('active');
    step = 0;
    return;
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

    if (step === 5) {
      toggleNavigationButtons(false);
    }

    progress();
  } else {
    errorVariantShow();
  }
}

function toggleNavigationButtons(show) {
  btnPrev.style.display = show ? 'block' : 'none';
  btnNext.style.display = show ? 'block' : 'none';
}

function prevStep() {
  if (step === 1) {
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
    if (num > 1) {
      number.textContent = Number(num) - 1;
    }
  });
}

function progress() {
  const stripe = document.querySelector('.popup-question__stripe');
  let currentProgress = 20 * step;
  stripe.style.width = currentProgress + '%';
}

function errorVariantShow() {
  const error = document.querySelectorAll('.popup-question__error');
  error[step].classList.add('active');
}

function deleteError() {
  const error = document.querySelectorAll('.popup-question__error');
  error[step].classList.remove('active');
}

variant();
counter();

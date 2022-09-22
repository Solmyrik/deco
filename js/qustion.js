const questionItems = document.querySelectorAll('.popup-question__item');
const btnPrev = document.querySelector('.popup-question__btn_prev');
const btnNext = document.querySelector('.popup-question__btn_next');
const variants = document.querySelectorAll('.popup-question__variants');

let step = 0;

btnNext.addEventListener('click', nextStep);
btnPrev.addEventListener('click', prevStep);

function nextStep() {
  if (setVariant[step] || step > 3) {
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
    }
    progress();
  } else {
    errorVarian();
  }
}
function prevStep() {
  questionItems[step].classList.remove('active');
  questionItems[step - 1].classList.add('active');
  step--;
  variant();
  progress();
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

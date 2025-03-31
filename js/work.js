const buttonsPagination = document.querySelectorAll('.work__pagination');
const workItems = document.querySelectorAll('.work__items');

let five = false;
let activePagination = 0;

if (buttonsPagination && buttonsPagination.length) {
  buttonsPagination.forEach((button) => {
    button.addEventListener('click', activeBtn);
  });
}

function activeBtn(e) {
  let current = e.target;
  if (!current.classList.contains('active')) {
    let index = e.target.textContent.replace('0', '');
    if (index == '...') {
      index = 2;
    }

    if (five === true && index !== 5 && index !== 6) {
      buttonsPagination[1].textContent = '02';
      buttonsPagination[2].classList.remove('none');
      buttonsPagination[5].classList.add('none');
      five = false;
    }

    buttonsPagination[activePagination].classList.remove('active');
    current.classList.add('active');
    activePagination = index - 1;
    activeWork(activePagination);

    window.scrollTo({
      top: 0,
    });

    if (index === 5) {
      buttonsPagination[1].textContent = '...';
      buttonsPagination[2].classList.add('none');
      buttonsPagination[5].classList.remove('none');
      five = true;
    }
  }
}

function activeWork(index) {
  workItems.forEach((item) => {
    item.classList.remove('active');
  });
  workItems[index].classList.add('active');
}

const buttons = document.querySelectorAll('.work__pagination');
const workItems = document.querySelectorAll('.work__items');
let five = false;
let activePagination = 0;
buttons.forEach((button) => {
  button.addEventListener('click', activeBtn);
});
function activeBtn(e) {
  let current = e.target;
  if (!current.classList.contains('active')) {
    let index = e.target.textContent.replace('0', '');
    if (index == '...') {
      index = 2;
    }

    if (five == true && index != 5 && index != 6) {
      buttons[1].textContent = '02';
      buttons[2].classList.remove('none');
      buttons[5].classList.add('none');
      five = false;
    }
    buttons[activePagination].classList.remove('active');
    current.classList.add('active');
    activePagination = index - 1;
    activeWork(activePagination);
    window.scrollTo({
      top: 0,
    });
    if (index == 5) {
      buttons[1].textContent = '...';
      buttons[2].classList.add('none');
      buttons[5].classList.remove('none');
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

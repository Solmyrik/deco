const buttons = document.querySelectorAll('.work__pagination');
const workItems = document.querySelectorAll('.work__items');
let activePagination = 0;
buttons.forEach((button) => {
  button.addEventListener('click', activeBtn);
});
function activeBtn(e) {
  let current = e.target;
  if (!current.classList.contains('active')) {
    let index = e.target.textContent.replace('0', '');
    buttons[activePagination].classList.remove('active');
    current.classList.add('active');
    activePagination = index - 1;
    activeWork(activePagination);
  }
}
function activeWork(index) {
  workItems.forEach((item) => {
    item.classList.remove('active');
  });
  workItems[index].classList.add('active');
}

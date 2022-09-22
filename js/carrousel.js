const images = document.querySelectorAll('.carrousel__img');
const number = document.querySelectorAll('.carrousel__number');
const child1 = images[0].children;
const child2 = images[1].children;
const child3 = images[2].children;
const child4 = images[3].children;
const index = [
  1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3,
  4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
  1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3,
  4, 5, 6, 1, 2, 3, 4, 5, 6,
];
let i = 1;

// child1[0].src = 'img/carrousel/2.jpg';

setInterval(() => {
  console.log('ok');
  images[0].classList.add('anime-left');
  images[1].classList.add('anime-center');
  images[2].classList.add('anime-right');
  images[3].classList.add('anime-on');
  setTimeout(() => {
    addIndex();
  }, 4100);
}, 6000);

// let i = 1;
// function addClass() {
//   setTimeout(() => {
//     console.log('click');
//     images[0].classList.add('anime-left');
//     addIndex(i);
//   }, 5000);
// }

function addIndex() {
  //   console.log(i);
  child1[0].src = `img/carrousel/${index[i]}.png`;
  child2[0].src = `img/carrousel/${index[i + 1]}.png`;
  child3[0].src = `img/carrousel/${index[i + 2]}.png`;
  child4[0].src = `img/carrousel/${index[i + 3]}.png`;
  number[0].textContent = `${'0' + index[i]}.`;
  number[1].textContent = `${'0' + index[i + 1]}.`;
  number[2].textContent = `${'0' + index[i + 2]}.`;
  number[3].textContent = `${'0' + index[i + 3]}.`;
  images[0].classList.remove('anime-left');
  images[1].classList.remove('anime-center');
  images[2].classList.remove('anime-right');
  images[3].classList.remove('anime-on');
  i++;
}
// addClass();
// addClass();
// addClass();

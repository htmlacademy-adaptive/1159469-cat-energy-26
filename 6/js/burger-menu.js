let buttonToogle = document.querySelector('.toogle');
let navMain = document.querySelector('.main-nav');

navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--nojs');
buttonToogle.classList.remove('toogle--nojs');


buttonToogle.addEventListener('click', function () {
  buttonToogle.classList.toggle('toogle--active');
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

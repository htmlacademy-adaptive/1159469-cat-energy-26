let sliderControl = document.querySelector('.slider__control');
let catBefore = document.querySelector('.slider__gallery--before');
let catAfter = document.querySelector('.slider__gallery--after');
let sliderWrapper = document.querySelector('.slider__wrapper');
let sliderBlock = document.querySelector('.results__slider');

sliderControl.onmousedown = function(event) {

  sliderBlock.appendChild(sliderControl);
  sliderControl.style.top = event.pageY - (sliderControl.style.height / 2) + 'px';
  sliderControl.style.transform = 'translateY(-50%)';
  sliderControl.style.height = sliderWrapper.clientHeight + 'px';

  function moveAt(event) {
    sliderControl.style.left = event.pageX + 'px';
  };

  sliderWrapper.onmousemove = function(event) {
    moveAt(event);
    let x = event.offsetX;
    catAfter.style.clipPath = 'polygon(' + x + 'px 0, 100% 0, 100% 100%, ' + x + 'px 100%)';
    catBefore.style.clipPath = 'polygon(0 0, ' + x + 'px 0, ' + x + 'px 100%, 0 100%)';
  };

  sliderControl.onmouseup = function() {
    sliderControl.onmouseup = null;
  };

  document.onmouseup = function() {
    sliderWrapper.onmousemove = null;
  };
};

sliderControl.ondragstart = function() {
  return false;
};

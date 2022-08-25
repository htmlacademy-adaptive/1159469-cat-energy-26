let sliderControl = document.querySelector('.slider__control');
let catAfter = document.querySelector('.slider__gallery--after');
let sliderWrapper = document.querySelector('.slider__wrapper');

sliderWrapper.onmousedown = function(event) {
  let x = event.offsetX;
  sliderControl.style.left = x + 'px';
  catAfter.style.clipPath = 'polygon(' + x + 'px 0%, 100% 0%, 100% 100%, ' + x + 'px 100%)';
}

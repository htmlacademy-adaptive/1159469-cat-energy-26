let sliderControl=document.querySelector(".slider__control"),catAfter=document.querySelector(".slider__gallery--after"),sliderWrapper=document.querySelector(".slider__wrapper");sliderWrapper.onmousedown=function(e){let r=e.offsetX;sliderControl.style.left=r+"px",catAfter.style.clipPath="polygon("+r+"px 0%, 100% 0%, 100% 100%, "+r+"px 100%)"};
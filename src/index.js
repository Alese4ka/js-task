import './style.css';

let offset = 0; 
let count = 3;
let position = 372;
let pic = document.querySelectorAll('.carousel__wrapper__pic-all');
let dots = document.querySelectorAll('.dot');
let slider = document.querySelector('.carousel__wrapper__pic');  
const sliderNext = document.querySelector('.carousel__wrapper__arrow-next');  
const sliderPrev = document.querySelector('.carousel__wrapper__arrow-prev');    

let mediaQuery = window.matchMedia('(max-width: 768px)');
let slideIndex = 1;
showSlides(slideIndex);

sliderNext.addEventListener('click', () => nextSlide());
sliderPrev.addEventListener('click', () => previousSlide());

function nextSlide(n) {
  showSlides(slideIndex += 1);
}

function previousSlide(n) {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  if (n > pic.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = pic.length;
    offset = (count+2)*position; 
    if (offset < 0) {
      offset = position*count;
    }
    slider.style.left = -offset + 'px'
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel__dots_active', '');
    }
    dots[slideIndex - 1].className += ' carousel__dots_active';
  }
  if (n > 1) {
    offset = (n-1)*position; 
    if (offset < 0) {
      offset = position*count;
    }
    slider.style.left = -offset + 'px'
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel__dots_active', '');
    }
    dots[slideIndex - 1].className += ' carousel__dots_active';
  }
  if (n === 1) {
    offset = 0; 
    if (offset < 0) {
      offset = position*count;
    }
    slider.style.left = -offset + 'px'
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel__dots_active', '');
    }
    dots[slideIndex - 1].className += ' carousel__dots_active';
  }
  if (n > count*2) {
    offset = 0; 
    if (offset < 0) {
      offset = position*count;
    }
      slider.style.left = -offset + 'px'
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel__dots_active', '');
    }
    dots[slideIndex-1].className += ' carousel__dots_active';
  }
};       

let initialPoint;
let finalPoint;

document.addEventListener('touchstart', function(event) {
  initialPoint=event.changedTouches[0];
}, false);

document.addEventListener('touchend', function(event) {
  finalPoint=event.changedTouches[0];
  let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
  if (mediaQuery.matches) {
    if (xAbs > 20 || yAbs > 20) {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX){
          offset = offset + position;
          if (offset >  position*count) {
            offset = 0;
          }
          slider.style.left = -offset + 'px';
        }
        else {
          offset = offset - position; 
          if (offset < 0) {
            offset = position*count;
          }
          slider.style.left = -offset + 'px';
        }
      }
    }
  }
}, false);
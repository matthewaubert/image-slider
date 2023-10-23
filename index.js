// cache DOM
const images = document.querySelectorAll('.carousel-slides > img');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

// add event listeners
next.addEventListener('click', showNext);
previous.addEventListener('click', showPrevious);
dots.forEach(dot => dot.addEventListener('click', showSlide));

let count = 0;

// advance to next slide
function showNext() {
  toggleVisible(); // remove 'visible' from current img
  count = (count + 1) % images.length; // increment count
  toggleVisible(); // add 'visible' to current img
}

// retreat to previous slide
function showPrevious() {
  toggleVisible(); // remove 'visible' from current img
  count === 0 ? count = images.length - 1 : count--; // decrement count
  toggleVisible(); // add 'visible' to current img
}

// show slide related to dot clicked
function showSlide() {
  toggleVisible(); // remove 'visible' from current img
  count = Number(this.dataset.for); // change count to data.for attribute
  toggleVisible(); // add 'visible' to current img
}

// toggle visibility of input el
function toggleVisible() {
  images[count].classList.toggle('visible');
  dots[count].classList.toggle('active');
}

function initSlideshow() {
  setInterval(showNext, 5000);
}

initSlideshow();

// export { showNext, showPrevious, showSlide, initSlideshow };
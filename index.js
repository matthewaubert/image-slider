// cache DOM
const images = document.querySelectorAll('.carousel-slides > img');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

// funcs...
const carouselControls = (function() {
  let count = 0;

  function next() {
    toggleVisible(images[count]); // remove visible from current img
    count = (count + 1) % images.length; // increment count
    toggleVisible(images[count]); // add visible to current img
  }
  
  function previous() {
    toggleVisible(images[count]); // remove visible from current img
    count === 0 ? count = images.length - 1 : count--; // decrement count
    toggleVisible(images[count]);  // add visible to current img
  }

  // toggle visible of current el
  function toggleVisible(el) {
    el.classList.toggle('visible');
  }

  return { next, previous };
})();

// add event listeners
next.addEventListener('click', carouselControls.next);
previous.addEventListener('click', carouselControls.previous);
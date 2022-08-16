const leftButtonElement = document.querySelector('.left-slide');
const rightButtonElement = document.querySelector('.right-slide');
const slideElements = document.querySelectorAll('.slide-block');

const onLeftButtonClick = () => {
  slideElements.forEach((slide, i) => {
    if(slide.classList.contains('slide-active') && i > 0) {
      slide.classList.remove('slide-active');
      slideElements[i - 1].classList.add('slide-active');
    }
  })
}

const onRightButtonClick = () => {
  let j = 0;
  slideElements.forEach((slide, i) => {
    if(slide.classList.contains('slide-active') && i < slideElements.length - 1 && j === 0) {
      slide.classList.remove('slide-active');
      slideElements[i + 1].classList.add('slide-active');
      j++;
    }
  })
}

const startIndexSlider = () => {
  leftButtonElement.addEventListener('click', onLeftButtonClick);
  rightButtonElement.addEventListener('click', onRightButtonClick);
}

export {startIndexSlider};

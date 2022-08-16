const navContainerElement = document.querySelector('.info-navigation-list');
const deliveryElements = document.querySelectorAll('.delivery');
const navigationItemElements = document.querySelectorAll('.info-navigation-item');
const navigationButtonElements = document.querySelectorAll('.info-navigation-link');

const onNavClick = (evt) => {
  if(evt.target.classList.contains('info-navigation-link')) {
    deliveryElements.forEach((deliveryElement, i) => {
      deliveryElement.classList.remove('delivery-active');
      navigationItemElements[i].classList.remove('opened');
      navigationButtonElements[i].classList.add('background-line');
      console.log(evt.target);
    })

    deliveryElements.forEach((deliveryElement) => {

      if(deliveryElement.classList.contains(evt.target.dataset.type)) {
        console.log(evt.target.dataset.type);
        deliveryElement.classList.add('delivery-active');
        evt.target.classList.remove('background-line');
        evt.target.parentNode.classList.add('opened');
      }
    })
  }

}

const startDeliveryMenu = () => {
  navContainerElement.addEventListener('click', onNavClick);
}

export {startDeliveryMenu}

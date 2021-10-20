'use strict';

const popupBlock = document.querySelector('.popup-log-in-or-sign-in');
const closePopupButton = document.querySelector('.close-icon');

const closePopupWindow = () => {
    popupBlock.style.opacity = "0";
    popupBlock.style.visibility = "hidden";
}

closePopupButton.addEventListener('click', closePopupWindow);
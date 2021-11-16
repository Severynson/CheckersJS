'use strict';

const popupBlock = document.querySelector('.popup-log-in-or-sign-in');
const closePopupButton = document.querySelector('.close-icon');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const logInConfirmBtn = document.querySelector('.log-in-confirm-btn');
const StartNewGameBtn = document.querySelector('.start-new-game-btn');
const mainMenuNumOne = document.querySelector('.main-menu-n-1');

let userDataBase = [["Severyn", "111"], ["Ivan", "222"], ["Nina", "333"]];

const closePopupWindow = () => {
    popupBlock.style.opacity = "0";
    popupBlock.style.visibility = "hidden";
}

closePopupButton.addEventListener('click', closePopupWindow);

const logIn = () => {
    userDataBase.forEach(function(person, index, pArr) {
        if (person[0] === usernameInput.value && person[1] === passwordInput.value) {
            popupBlock.style.opacity = "0";
    popupBlock.style.visibility = "hidden";
        } else if (index + 1 === userDataBase.length) {
            passwordInput.value = '';
            passwordInput.placeholder = "something isn't correct"
    
            usernameInput.value = '';
            usernameInput.placeholder = "something isn't correct"
        }
    })
}

logInConfirmBtn.addEventListener('click', logIn);

const startNewGame = () => {
    mainMenuNumOne.style.opacity = "0";
    mainMenuNumOne.style.visibility = "hidden";
}

StartNewGameBtn.addEventListener('click', startNewGame);
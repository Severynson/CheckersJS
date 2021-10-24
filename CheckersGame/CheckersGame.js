// import Checker from "./CreateCheckers.js";

// White checkers
const cell2 = document.querySelector('.cell-2');
const cell4 = document.querySelector('.cell-4');
const cell6 = document.querySelector('.cell-6');
const cell8 = document.querySelector('.cell-8');
const cell9 = document.querySelector('.cell-9');
const cell11 = document.querySelector('.cell-11');
const cell13 = document.querySelector('.cell-13');
const cell15 = document.querySelector('.cell-15');
const cell18 = document.querySelector('.cell-18');
const cell20 = document.querySelector('.cell-20');
const cell22 = document.querySelector('.cell-22');
const cell24 = document.querySelector('.cell-24');




const activeCell = document.querySelectorAll('.active-cell');
const activeCellArr = Array.from(activeCell);

//     cell2.style.backgroundColor = "blue";

function readeActualCell () {
    const cellIdentifireClass = this.className.split(' ')[0];
    console.log(cellIdentifireClass);
}

activeCellArr.forEach(checkClassOnClick);

function checkClassOnClick (item) {
    // console.log(item.className.split(' ')[0]);
    let actualCell = item.className.split(' ')[0];
    // console.log(actualCell);
    let actualCelll = document.querySelector(`.${actualCell}`);
    // console.log(actualCelll);
    actualCelll.addEventListener('click', readeActualCell);
}

const Checker = function (cellName) {
    this.cellName = cellName;
};


Checker.prototype.createCheckers = function  () {

    const starEmoji = document.createElement('p');
    starEmoji.textContent = '★';
    starEmoji.style.height = "40px";
    starEmoji.style.width = "40px";
    starEmoji.style.fontSize = "50px";
    starEmoji.style.margin = "5px 0px 0px 9px";

    let checkerDivElement = document.createElement('div');
    checkerDivElement.style.backgroundColor = "yellow";
    checkerDivElement.style.height = "60px";
    checkerDivElement.style.width = "60px";
    checkerDivElement.style.margin = '-13px 0px 0px 4px';
    checkerDivElement.style.display = "grid";
    checkerDivElement.style.borderRadius = "50%";
    checkerDivElement.style.cursor = "pointer";
    checkerDivElement.appendChild(starEmoji);
    this.cellName.appendChild(checkerDivElement);
}

const cell2Checker = new Checker(cell2);
cell2Checker.createCheckers();
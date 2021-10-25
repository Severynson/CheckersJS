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

function readeActualCell () {
    const cellIdentifireClass = this.className.split(' ')[0];
    console.log(cellIdentifireClass);
    let actualCheckerDivElement = document.querySelector(`.${cellIdentifireClass}-checker-div-element`)
    actualCheckerDivElement.parentNode.removeChild(actualCheckerDivElement);
}

// Buttons add loop;
activeCellArr.forEach(checkClassOnClick);
function checkClassOnClick (item) {
    let actualCellClass = item.className.split(' ')[0];
    let actualCellElement = document.querySelector(`.${actualCellClass}`);
    actualCellElement.addEventListener('click', readeActualCell);
}

// CheckerConstructor;
const Checker = function (cellName, checkerColor) {
    this.cellName = cellName;
    this.checkerColor = checkerColor;
};

// Creating checkers function
Checker.prototype.createCheckers = function  () {

    const starEmoji = document.createElement('p');
    starEmoji.textContent = '★';
    starEmoji.style.height = "40px";
    starEmoji.style.width = "40px";
    starEmoji.style.fontSize = "50px";
    starEmoji.style.margin = "5px 0px 0px 9px";

    let checkerDivElement = document.createElement('div');

    // cell-00-checker-div-element
    checkerDivElement.className = `${this.cellName.className.split(' ')[0]}-checker-div-element`;
    console.log(this.cellName.className.split(' ')[0]);
    checkerDivElement.style.backgroundColor = this.checkerColor;
    checkerDivElement.style.height = "60px";
    checkerDivElement.style.width = "60px";
    checkerDivElement.style.margin = '-13px 0px 0px 4px';
    checkerDivElement.style.display = "grid";
    checkerDivElement.style.borderRadius = "50%";
    checkerDivElement.style.cursor = "pointer";
    checkerDivElement.appendChild(starEmoji);
    this.cellName.appendChild(checkerDivElement);
}




let cell2Checker = new Checker(cell2, "white");
cell2Checker.createCheckers();
const cell4Checker = new Checker(cell4, "white");
cell4Checker.createCheckers();
const cell6Checker = new Checker(cell6, "white");
cell6Checker.createCheckers();
const cell8Checker = new Checker(cell8, "white");
cell8Checker.createCheckers();

// Find avalible checker on cell position:
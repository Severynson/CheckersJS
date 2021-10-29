"use strict";
const putChecker = function () {
    cell1Checker.parentNode.removeChild(cell1Checker);
    let cellXChecker = new Checker(clickedDiv, cell1CheckerColor);
    cellXChecker.createCheckers();
};


const secondPartAnaliz = function () {
    return true;
}



const LRDiagonalsCheck = function (cellToCheck) {
        const checkForNearCellsLeftD = function (item, index, arr) {
        (item == cellToCheck) && (cell1LeftD = [...arr])
        };
        
          let leftDiagonalsObj = diagonals.leftDiagonals;
          for (var key in leftDiagonalsObj) {
            leftDiagonalsObj[key].forEach(checkForNearCellsLeftD);
          }
      
        const checkForNearCellsRightD = function (item, index, arr) {
          (item == cellToCheck) && (cell1RightD = [...arr])
        };
      
          let rightDiagonalsObj = diagonals.rightDiagonals;
          for (var key in rightDiagonalsObj) {
            rightDiagonalsObj[key].forEach(checkForNearCellsRightD);
          }
        
      };

    var cell1ID;
    var cell1Checker;
    var cell1CheckerColor;
    var cell1LeftD;
    var cell1RightD;
    var diagonalsCell1Classes;

const analizePosition = function (clickedDiv) {
    cell1ID = clickedDiv.className.split(' ')[0];
    cell1Checker = document.querySelector(`.${cell1ID}-checker-div-element`);
    cell1CheckerColor = `${cell1Checker.style.backgroundColor}`;
    cell1Checker.parentNode.lastChild.style.opacity = "0.7";
    LRDiagonalsCheck(cell1ID);
        diagonalsCell1Classes  = [
            ...cell1LeftD,
            ...cell1RightD,
          ];
      console.log(diagonalsCell1Classes)
}

  let counter = 0;
  let clickedDiv;
  const mainFunc = function () {
      counter++
      clickedDiv  = this;
      if (counter % 2) {
          // Choose checker for step and analize it's place:
        analizePosition(clickedDiv);
      } else {
          console.log("counter = !%2")
          secondPartAnaliz() && putChecker();
      }
  }
  

const checkClassOnClick = (item) => {
    let actualCellClass = item.className.split(" ")[0];
    let actualCellElement = document.querySelector(`.${actualCellClass}`);
    actualCellElement.addEventListener("click", mainFunc);
  }

 activeCellArr.forEach(checkClassOnClick);
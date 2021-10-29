"use strict";

const deleteBetween = function () {
    console.log('delete');
    cellsBetween.forEach((el) => {
        let cellXChecker = document.querySelector(`.${el}-checker-div-element`);
        cellXChecker && cellXChecker.parentNode.removeChild(cellXChecker);
    })
}

const putChecker = function () {
    cell1Checker.parentNode.removeChild(cell1Checker);
    let cellXChecker = new Checker(clickedDiv, cell1CheckerColor);
    cellXChecker.createCheckers();
    return true;
};


 var cell1DivIndex;
 var cell2DivIndex;
 var stepDiagonal;
 var cellsBetween = [];

const secondPartAnaliz = function () {
    let clickedDivID = clickedDiv.className.split(' ')[0];
    // deleteBetweenChecker = true;
    // return deleteBetweenChecker;
     const betweenToDelete = (diagonal) => {
        // console.log(diagonal)
        stepDiagonal = diagonal;
        diagonal.forEach((el, i) => {
            el.includes(cell1ID) && (cell1DivIndex = i);
        })
        diagonal.forEach((el, i) => {
            el.includes(clickedDivID) && (cell2DivIndex = i);
        })
      }

    cell1LeftD.includes(clickedDivID) && betweenToDelete(cell1LeftD);
    cell1RightD.includes(clickedDivID) && betweenToDelete(cell1RightD);
    
      console.log(cell1DivIndex);
      console.log(cell2DivIndex);
      console.log(stepDiagonal);

      
      cellsBetween = stepDiagonal.slice(cell1DivIndex+1, cell2DivIndex);
      (cellsBetween.length === 0) && (cellsBetween = stepDiagonal.slice(cell2DivIndex+1, cell1DivIndex));
      console.log(cellsBetween)

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
          secondPartAnaliz() && putChecker() && deleteBetween();
      }
  }
  

const checkClassOnClick = (item) => {
    let actualCellClass = item.className.split(" ")[0];
    let actualCellElement = document.querySelector(`.${actualCellClass}`);
    actualCellElement.addEventListener("click", mainFunc);
  }

 activeCellArr.forEach(checkClassOnClick);
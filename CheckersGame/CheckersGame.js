"use strict";

    // -------- Buttons-add-loop -----------;
    activeCellArr.forEach(checkClassOnClick);
    function checkClassOnClick(item) {
      let actualCellClass = item.className.split(" ")[0];
      let actualCellElement = document.querySelector(`.${actualCellClass}`);
      actualCellElement.addEventListener("click", MainFunc);
    }

////////////////////////////////////////////////////////////
///////////////// Main Function ////////////////////////////
////////////////////////////////////////////////////////////

var selectedCheckerColor;
let countTime = 0;
 let diagonalCellClasses;
function MainFunc() {
  // Counting actual side to make it's move:
  countTime++;
  console.log(countTime);
  // Reading-Cell-ID-Clas
    let actualDiv = this;
  if (countTime % 2) {
     takeCheckerAndThinkWhatToDo(actualDiv);
       diagonalCellClasses = [
    ...acceptedCellsForPutLeftD,
    ...acceptedCellsForPutRightD,
  ];
   scanerForPresenceOfCheckersOnDiagonal(diagonalCellClasses);
  // console.log(cellsConteiningChecker);

  let actualDivIDClass = actualDiv.classList[0];
  check4NearCellsForAnoterTeamCheckers (actualDivIDClass, acceptedCellsForPutLeftD, acceptedCellsForPutRightD); 

  } else {
    thinkAndPutCheckerIfCheckGoesCorrect(actualDiv, diagonalCellClasses);
  }


}

//////////////////////////////////////////////////////
////////////////////// Diagonal Surch ////////////////
//////////////////////////////////////////////////////

const rulesCheck = function (cellCheck) {
  const checkForNearCellsLeftD = function (item, index, arr) {
    if (item == cellCheck) {
      return (acceptedCellsForPutLeftD = [...arr]);
    }
  };

  function checkForLeftDiagonal() {
    let leftDiagonalObj = diagonals.leftDiagonal;
    for (var key in leftDiagonalObj) {
      leftDiagonalObj[key].forEach(checkForNearCellsLeftD);
    }
  }

  checkForLeftDiagonal();

  const checkForNearCellsRightD = function (item, index, arr) {
    if (item == cellCheck) {
      return (acceptedCellsForPutRightD = [...arr]);
    }
  };

  function checkForRightDiagonal() {
    let rightDiagonalObj = diagonals.rightDiagonal;
    for (var key in rightDiagonalObj) {
      rightDiagonalObj[key].forEach(checkForNearCellsRightD);
    }
  }
  checkForRightDiagonal();
};

function takeCheckerAndThinkWhatToDo (actualDiv) {
    // takeCheckerAndThinkWhatToDo ();
    const cellIdentifireClass = actualDiv.className.split(" ")[0];
    // Selecting checker on click
    var actualCheckerDivElement = document.querySelector(
      `.${cellIdentifireClass}-checker-div-element`
    );
    // Check Color Of Avalible Checker:
    selectedCheckerColor = `${actualCheckerDivElement.style.backgroundColor}`;
    // Checking ruels of game and syncroning act with them:
    rulesCheck(cellIdentifireClass);
    // Deleting ckecker that selected to be replaced:
    actualCheckerDivElement.parentNode.removeChild(actualCheckerDivElement);
}

function thinkAndPutCheckerIfCheckGoesCorrect (actualDiv, diagonalCellClasses) {
  const cellIdentifireClass = actualDiv.className.split(" ")[0];
  let cellToAddChecker = document.querySelector(`.${cellIdentifireClass}`);
  // console.log(cellIdentifireClass);
  // console.log(cellToAddChecker);
 
  if (diagonalCellClasses.includes(cellIdentifireClass)) {


    //Creating Checker
  let cellXChecker = new Checker(cellToAddChecker, selectedCheckerColor);
  cellXChecker.createCheckers();
  } else {
    countTime = 1
    thinkAndPutCheckerIfCheckGoesCorrect();
  }
}

let cellsConteiningChecker = [];
function scanerForPresenceOfCheckersOnDiagonal (diagonalCellClasses) {
  
  diagonalCellClasses.forEach((classID) => {
      let div = document.querySelector(`.${classID}`)
    if (div.childElementCount === 1) {
    cellsConteiningChecker.push(div.classList[0])
    return cellsConteiningChecker;
    }
  })
}

function check4NearCellsForAnoterTeamCheckers (ourCell, leftDCells, rightDCells) {
  console.log(leftDCells);
  console.log(rightDCells);
  console.log(ourCell)

  var twoNearesCellsLD;

  leftDCells.forEach((el, i, arr) => {
    if (el === ourCell) {
     console.log(twoNearesCellsLD = [arr[i-2], arr[i-1], arr[i+1], arr[i+2]]);
      return twoNearesCellsLD;
    }
  })

  var twoNearesCellsRD;

  rightDCells.forEach((el, i, arr) => {
    if (el === ourCell) {
      console.log(twoNearesCellsRD = [arr[i-2], arr[i-1], arr[i+1], arr[i+2]]);
      return twoNearesCellsRD;
    }
  })

}
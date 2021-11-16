"use strict";
// -------- Buttons-add-loop -----------;

function checkClassOnClick(item) {
  let actualCellClass = item.className.split(" ")[0];
  let actualCellElement = document.querySelector(`.${actualCellClass}`);
  actualCellElement.addEventListener("click", MainFunc);
}

activeCellArr.forEach(checkClassOnClick);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// Main Function ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var selectedCheckerColor;
let countTime = 0;
let diagonalCellClasses;
var acceptedCellsForPutLeftD;
var acceptedCellsForPutRightD;
let cellsConteiningChecker = [];
var actualCheckerDivElement;
var twoNearesCellsLD;
var twoNearesCellsRD;
var fourNearesCells;
var cellIdentifireClass;

function MainFunc() {
  // Counting actual side to make it's move:
  countTime++;
  // Reading-Cell-ID-Clas
  let actualDiv = this;
  if (countTime % 2) {
    takeCheckerAndThinkWhatToDo(actualDiv);
    diagonalCellClasses = [
      ...acceptedCellsForPutLeftD,
      ...acceptedCellsForPutRightD,
    ];
    scanerForPresenceOfCheckersOnDiagonal(diagonalCellClasses);
    let actualDivIDClass = actualDiv.classList[0];
    check4NearCellsForAnoterTeamCheckers(
      actualDivIDClass,
      acceptedCellsForPutLeftD,
      acceptedCellsForPutRightD
    );
    // twoNearesCellsLD and twoNearesCellsRD returned now
  } else {
    thinkAndPutCheckerIfCheckGoesCorrect(actualDiv, diagonalCellClasses);
  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function takeCheckerAndThinkWhatToDo(actualDiv) {
  cellIdentifireClass = actualDiv.className.split(" ")[0];
  // Selecting checker on click
  actualCheckerDivElement = document.querySelector(
    `.${cellIdentifireClass}-checker-div-element`
  );
  // Check Color Of Avalible Checker:
  selectedCheckerColor = `${actualCheckerDivElement.style.backgroundColor}`;
  // Checking ruels of game and syncroning act with them:
  return2ArraysWithClassesOfDiagonals(cellIdentifireClass);
  // Deleting ckecker that selected to be replaced:
  // actualCheckerDivElement.parentNode.lastChild.style.backgroundColor = "#e9ecef";
  actualCheckerDivElement.parentNode.lastChild.style.opacity = "0.7";
  console.log(`actualCheckerDivElement`);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Diagonal Surch ///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const return2ArraysWithClassesOfDiagonals = function (cellCheck) {
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function scanerForPresenceOfCheckersOnDiagonal(diagonalCellClasses) {
  diagonalCellClasses.forEach((classID) => {
    let div = document.querySelector(`.${classID}`);
    if (div.childElementCount === 1) {
      cellsConteiningChecker.push(div.classList[0]);
      return cellsConteiningChecker;
    }
  });
}

function check4NearCellsForAnoterTeamCheckers(
  ourCell,
  leftDCells,
  rightDCells
) {

  leftDCells.forEach((el, i, arr) => {
    if (el === ourCell) {(twoNearesCellsLD = [arr[i - 2], arr[i - 1], arr[i + 1], arr[i + 2]]);
      return twoNearesCellsLD;
    }
  });

  rightDCells.forEach((el, i, arr) => {
    if (el === ourCell) {(twoNearesCellsRD = [arr[i - 2], arr[i - 1], arr[i + 1], arr[i + 2]]);
      return twoNearesCellsRD;
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function thinkAndPutCheckerIfCheckGoesCorrect(actualDiv, diagonalCellClasses) {
  let cellToPutIdentifireClass = actualDiv.className.split(" ")[0];
  console.log(cellToPutIdentifireClass)
  let cellToAddChecker = document.querySelector(`.${cellToPutIdentifireClass}`);


  let eightNearesCells = [...twoNearesCellsLD, ...twoNearesCellsRD];
  console.log(eightNearesCells)
  // console.log(cellsConteiningChecker)
  // console.log(cellIdentifireClass)
  console.log(cellToPutIdentifireClass)
  // console.log(diagonalCellClasses)
  // console.log(cellToAddChecker)



  const simplWalkCells = [eightNearesCells[1], eightNearesCells[2], eightNearesCells[5], eightNearesCells[6]]
  const damageWalk = [eightNearesCells[0], eightNearesCells[3], eightNearesCells[4], eightNearesCells[7]];
  checkEightNearCellsForCheckersOn(eightNearesCells);
  console.log(avalibilityOfCheckersForSimplCh);
  console.log(damageWalk)
  if (simplWalkCells.includes(cellToPutIdentifireClass) && !cellsConteiningChecker.includes(cellToPutIdentifireClass)) {
    actualCheckerDivElement.parentNode.removeChild(actualCheckerDivElement);
    let cellXChecker = new Checker(cellToAddChecker, selectedCheckerColor);
    cellXChecker.createCheckers();
  } else if (damageWalk.includes(cellToPutIdentifireClass) && cellsConteiningChecker.includes(eightNearesCells[1])) {
    actualCheckerDivElement.parentNode.removeChild(actualCheckerDivElement);
    let cellXChecker = new Checker(cellToAddChecker, selectedCheckerColor);
    cellXChecker.createCheckers();
  } else {
  
    countTime = 1;
    thinkAndPutCheckerIfCheckGoesCorrect();
  }


  // if (diagonalCellClasses.includes(cellToPutIdentifireClass)) {
  //   // console.log(diagonalCellClasses)
  //   // console.log(actualDiv)
  //   //Deleling Old checker
  //   actualCheckerDivElement.parentNode.removeChild(actualCheckerDivElement);
  //   //Creating Checker
  //   let cellXChecker = new Checker(cellToAddChecker, selectedCheckerColor);
  //   cellXChecker.createCheckers();
  // } else {
  
  //   countTime = 1;
  //   thinkAndPutCheckerIfCheckGoesCorrect();
  // }
}

var avalibilityOfCheckersForSimplCh = [];

function checkEightNearCellsForCheckersOn (eightNearesCells) {
  eightNearesCells = [];
  eightNearesCells.forEach((el) => {
    if (cellsConteiningChecker.includes(el)) {
      avalibilityOfCheckersForSimplCh.push(true);
    } else {
      avalibilityOfCheckersForSimplCh.push(false);
    }
  })
  return avalibilityOfCheckersForSimplCh;
}


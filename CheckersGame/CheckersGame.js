"use strict";

    // -------- Buttons-add-loop -----------;
    activeCellArr.forEach(checkClassOnClick);
    function checkClassOnClick(item) {
      let actualCellClass = item.className.split(" ")[0];
      let actualCellElement = document.querySelector(`.${actualCellClass}`);
      actualCellElement.addEventListener("click", readeActualCell);
    }

////////////////////////////////////////////////////////////
///////////////// Main Function ////////////////////////////
////////////////////////////////////////////////////////////

var selectedCheckerColor;
let countTime = 0;
function readeActualCell() {
  // Counting actual side to make it's move:
  countTime++;
  // Reading-Cell-ID-Clas
  const cellIdentifireClass = this.className.split(" ")[0];
  if (countTime % 2) {
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
  } else {
    let cellToAddChecker = document.querySelector(`.${cellIdentifireClass}`);
    console.log(cellIdentifireClass);

    console.log(cellToAddChecker);
    //Creating Checker
    let cellXChecker = new Checker(cellToAddChecker, selectedCheckerColor);
    cellXChecker.createCheckers();
  }

  console.log(acceptedCellsForPutLeftD);
  console.log(acceptedCellsForPutRightD);
  let acceptedCellsForPut = [
    ...acceptedCellsForPutLeftD,
    ...acceptedCellsForPutRightD,
  ];
  console.log(acceptedCellsForPut);
}

//////////////////////////////////////////////////////
////////////////////// Diagonal Surch ////////////////
//////////////////////////////////////////////////////

const rulesCheck = function (cellCheck) {
  const checkForNearCellsLeftD = function (item, index, arr) {
    if (item == cellCheck) {
      console.log(arr[index]);
      console.log(arr[index + 1]);
      console.log(arr[index - 1]);
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
      console.log(arr[index]);
      console.log(arr[index + 1]);
      console.log(arr[index - 1]);
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

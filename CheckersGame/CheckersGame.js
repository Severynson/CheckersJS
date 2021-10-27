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
 let acceptedCellsForPut;
function MainFunc() {
  // Counting actual side to make it's move:
  countTime++;
  // Reading-Cell-ID-Clas
    let actualDiv = this;
  if (countTime % 2) {
     takeCheckerAndThinkWhatToDo(actualDiv);
       acceptedCellsForPut = [
    ...acceptedCellsForPutLeftD,
    ...acceptedCellsForPutRightD,
  ];
  } else {
    thinkAndPutCheckerIfCheckGoesCorrect(actualDiv, acceptedCellsForPut);
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

function thinkAndPutCheckerIfCheckGoesCorrect (actualDiv, acceptedCellsForPut) {
  const cellIdentifireClass = actualDiv.className.split(" ")[0];
  let cellToAddChecker = document.querySelector(`.${cellIdentifireClass}`);
  console.log(cellIdentifireClass);
  console.log(cellToAddChecker);

  if (cellIdentifireClass === acceptedCellsForPut) {
  //Creating Checker
  let cellXChecker = new Checker(cellToAddChecker, selectedCheckerColor);
  cellXChecker.createCheckers();
  console.log(acceptedCellsForPut)
  }
}
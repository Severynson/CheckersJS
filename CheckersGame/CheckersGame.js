"use strict";

// White checkers
const cell2 = document.querySelector(".cell-2");
const cell4 = document.querySelector(".cell-4");
const cell6 = document.querySelector(".cell-6");
const cell8 = document.querySelector(".cell-8");
const cell9 = document.querySelector(".cell-9");
const cell11 = document.querySelector(".cell-11");
const cell13 = document.querySelector(".cell-13");
const cell15 = document.querySelector(".cell-15");
const cell18 = document.querySelector(".cell-18");
const cell20 = document.querySelector(".cell-20");
const cell22 = document.querySelector(".cell-22");
const cell24 = document.querySelector(".cell-24");

// Red checkers
const cell41 = document.querySelector(".cell-41");
const cell43 = document.querySelector(".cell-43");
const cell45 = document.querySelector(".cell-45");
const cell47 = document.querySelector(".cell-47");
const cell50 = document.querySelector(".cell-50");
const cell52 = document.querySelector(".cell-52");
const cell54 = document.querySelector(".cell-54");
const cell56 = document.querySelector(".cell-56");
const cell57 = document.querySelector(".cell-57");
const cell59 = document.querySelector(".cell-59");
const cell61 = document.querySelector(".cell-61");
const cell63 = document.querySelector(".cell-63");

// Oter cells

const cell34 = document.querySelector(".cell-34");
const cell25 = document.querySelector(".cell-25");
const cell36 = document.querySelector(".cell-36");
const cell27 = document.querySelector(".cell-27");
const cell38 = document.querySelector(".cell-38");
const cell29 = document.querySelector(".cell-39");
const cell40 = document.querySelector(".cell-40");
const cell31 = document.querySelector(".cell-31");

// Object for explanation for JS what is diagonal.
const diagonals = {
  leftDiagonal: {
    1: ['cell-57'],
    2: ['cell-59', 'cell50', 'cell41'],
    3: ['cell-61', 'cell-52', 'cell-43', 'cell-34', 'cell-25'],
    4: ['cell-63', 'cell-54', 'cell-45', 'cell-36', 'cell-27', 'cell-18', 'cell-9'],
    5: ['cell-56', 'cell-47', 'cell-38', 'cell-29', 'cell-20', 'cell-11', 'cell-2'],
    6: ['cell-40', 'cell-31', 'cell-22', 'cell-13', 'cell-4'],
    7: ['cell-24', 'cell-15', 'cell-6'],
    8: ['cell-8']
  },
  rightDiagonal: {
    1: ['cell-63', 'cell-56'],
    2: ['cell-61', 'cell-54', 'cell-47', 'cell-40'],
    3: ['cell-59', 'cell-52', 'cell-45', 'cell-38', 'cell-31', 'cell-24'],
    4: ['cell-57', 'cell-50', 'cell-43', 'cell-36', 'cell-29', 'cell-22', 'cell-15', 'cell-8'],
    5: ['cell-41', 'cell-34', 'cell-27', 'cell-20', 'cell-13', 'cell-6'],
    6: ['cell-25', 'cell-18', 'cell-11', 'cell-4'],
    7: ['cell-9', 'cell-2']
  }
}

// CheckerConstructor;
const Checker = function (cellName, checkerColor) {
  this.cellName = cellName;
  this.checkerColor = checkerColor;
};

// Creating checkers function
Checker.prototype.createCheckers = function () {
  const starEmoji = document.createElement("p");
  starEmoji.textContent = "★";
  starEmoji.style.height = "40px";
  starEmoji.style.width = "40px";
  starEmoji.style.fontSize = "50px";
  starEmoji.style.margin = "5px 0px 0px 9px";

  let checkerDivElement = document.createElement("div");

  // cell-00-checker-div-element
  checkerDivElement.className = `${
    this.cellName.className.split(" ")[0]
  }-checker-div-element`;
  checkerDivElement.style.backgroundColor = this.checkerColor;
  checkerDivElement.style.height = "60px";
  checkerDivElement.style.width = "60px";
  checkerDivElement.style.margin = "-13px 0px 0px 4px";
  checkerDivElement.style.display = "grid";
  checkerDivElement.style.borderRadius = "50%";
  checkerDivElement.style.cursor = "pointer";

  checkerDivElement.appendChild(starEmoji);
  this.cellName.appendChild(checkerDivElement);
};

// White checkers
let cell2Checker = new Checker(cell2, "white");
cell2Checker.createCheckers();
const cell4Checker = new Checker(cell4, "white");
cell4Checker.createCheckers();
const cell6Checker = new Checker(cell6, "white");
cell6Checker.createCheckers();
const cell8Checker = new Checker(cell8, "white");
cell8Checker.createCheckers();
const cell9Checker = new Checker(cell9, "white");
cell9Checker.createCheckers();
const cell11Checker = new Checker(cell11, "white");
cell11Checker.createCheckers();
const cell13Checker = new Checker(cell13, "white");
cell13Checker.createCheckers();
const cell15Checker = new Checker(cell15, "white");
cell15Checker.createCheckers();
const cell18Checker = new Checker(cell18, "white");
cell18Checker.createCheckers();
const cell20Checker = new Checker(cell20, "white");
cell20Checker.createCheckers();
const cell22Checker = new Checker(cell22, "white");
cell22Checker.createCheckers();
const cell24Checker = new Checker(cell24, "white");
cell24Checker.createCheckers();

// Red checkers
const cell41Checker = new Checker(cell41, "#d9480f");
cell41Checker.createCheckers();
const cell43Checker = new Checker(cell43, "#d9480f");
cell43Checker.createCheckers();
const cell45Checker = new Checker(cell45, "#d9480f");
cell45Checker.createCheckers();
const cell47Checker = new Checker(cell47, "#d9480f");
cell47Checker.createCheckers();
const cell50Checker = new Checker(cell50, "#d9480f");
cell50Checker.createCheckers();
const cell52Checker = new Checker(cell52, "#d9480f");
cell52Checker.createCheckers();
const cell54Checker = new Checker(cell54, "#d9480f");
cell54Checker.createCheckers();
const cell56Checker = new Checker(cell56, "#d9480f");
cell56Checker.createCheckers();
const cell57Checker = new Checker(cell57, "#d9480f");
cell57Checker.createCheckers();
const cell59Checker = new Checker(cell59, "#d9480f");
cell59Checker.createCheckers();
const cell61Checker = new Checker(cell61, "#d9480f");
cell61Checker.createCheckers();
const cell63Checker = new Checker(cell63, "#d9480f");
cell63Checker.createCheckers();

// ----------------- Functions --------------------------------

const activeCell = document.querySelectorAll(".active-cell");
const activeCellArr = Array.from(activeCell);

// -------- Buttons-add-loop -----------;
activeCellArr.forEach(checkClassOnClick);
function checkClassOnClick(item) {
  let actualCellClass = item.className.split(" ")[0];
  let actualCellElement = document.querySelector(`.${actualCellClass}`);
  actualCellElement.addEventListener("click", readeActualCell);
}


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
    console.log(cellToAddChecker);
    //Creating Checker
    let cellXChecker = new Checker(cellToAddChecker, selectedCheckerColor);
    cellXChecker.createCheckers();
  }
  
  console.log(acceptedCellsForPutLeftD);
  console.log(acceptedCellsForPutRightD);
}

  


var acceptedCellsForPutLeftD;
var acceptedCellsForPutRightD;


const rulesCheck = function (cellCheck) {


const checkForNearCellsLeftD = function (item, index, arr) {
     
  if (item == cellCheck) {
          console.log(arr[index])
          console.log(arr[index+1])
          console.log(arr[index-1])
          return acceptedCellsForPutLeftD = [arr[index], arr[index-1], arr[index+1]];
        }
        
        
    }


  function checkForLeftDiagonal () {
  let leftDiagonalObj = diagonals.leftDiagonal;
   
 for (var key in leftDiagonalObj) {
      // console.log(key);
      // console.log(leftDiagonalObj[key]);
      leftDiagonalObj[key].forEach(checkForNearCellsLeftD);
      // console.log(acceptedCellsForPut)
      // acceptedCellsForPut = acceptedCellsForPutLeftD;
      // console.log(acceptedCellsForPutLeftD)
    }
  }

checkForLeftDiagonal()





const checkForNearCellsRightD = function (item, index, arr) {
     
  if (item == cellCheck) {
          console.log(arr[index])
          console.log(arr[index+1])
          console.log(arr[index-1])
          return acceptedCellsForPutRightD = [arr[index], arr[index-1], arr[index+1]];
        }
        
        
    }


  function checkForRightDiagonal () {
  let rightDiagonalObj = diagonals.rightDiagonal;
   
 for (var key in rightDiagonalObj) {
      // console.log(key);
      // console.log(leftDiagonalObj[key]);
      rightDiagonalObj[key].forEach(checkForNearCellsRightD);
      // console.log(acceptedCellsForPut)
      // acceptedCellsForPut = acceptedCellsForPutLeftD;
      // console.log(acceptedCellsForPutLeftD)
    }
  }

checkForRightDiagonal()





//   function checkForRightDiagonal () {
// let rightDiagonalObj = diagonals.rightDiagonal;
//     for (var key in rightDiagonalObj) {
//      rightDiagonalObj[key].forEach(checkForNearCells);
//     }
//   }

}







 
   





// const diagonals = {
//   leftDiagonal: {
//     1: [cell57],
//     2: [cell59, cell50, cell41],
//     3: [cell61, cell52, cell43, cell34, cell25],
//     4: [cell63, cell54, cell45, cell36, cell27, cell18, cell9],
//     5: [cell56, cell47, cell38, cell29, cell20, cell11, cell2],
//     6: [cell40, cell31, cell22, cell13, cell4],
//     7: [cell24, cell15, cell6],
//     8: [cell8]
//   },
//   rightDiagonal: {
//     1: [cell63, cell56],
//     2: [cell61, cell54, cell47, cell40],
//     3: [cell59, cell52, cell45, cell38, cell31, cell24],
//     4: [cell57, cell50, cell43, cell36, cell29, cell22, cell15, cell8],
//     5: [cell41, cell34, cell27, cell20, cell13, cell6],
//     6: [cell25, cell18, cell11, cell4],
//     7: [cell9, cell2]
//   }
// }

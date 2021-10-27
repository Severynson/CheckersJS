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

const activeCell = document.querySelectorAll(".active-cell");
const activeCellArr = Array.from(activeCell);

var acceptedCellsForPutLeftD;
var acceptedCellsForPutRightD;
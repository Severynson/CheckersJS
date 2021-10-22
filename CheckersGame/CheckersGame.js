const cell9 = document.querySelector('.cell-9');
const cell2 = document.querySelector('.cell-2');
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
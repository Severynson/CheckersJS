const cell9 = document.querySelector('.cell-9');
const cell2 = document.querySelector('.cell-2');
const activeCell = document.querySelectorAll('.active-cell');
const activeCellArr = Array.from(activeCell);

//     cell2.style.backgroundColor = "blue";

function readeActualCell () {
    const identifireClass = this.className.split(' ')[0];
    console.log(identifireClass);
}
// document.querySelectorAll('.active-cell').forEach(e){e.addEventListener('click', readeActualCell)}

// activecellArr.forEach((e) => e.className[0].addEventListener('click', readeActualCell));

activeCellArr.forEach(checkClassOnClick);

function checkClassOnClick (item) {
    // console.log(item.className.split(' ')[0]);
    let actualCell = item.className.split(' ')[0];
    // console.log(actualCell);
    let actualCelll = document.querySelector(`.${actualCell}`);
    // console.log(actualCelll);
    actualCelll.addEventListener('click', readeActualCell);
}

const Checker = function (cellName) {
    this.cellName = cellName;
};


Checker.prototype.createCheckers = function  () {

    const starEmoji = document.createElement('p');
    starEmoji.textContent = '★';
    starEmoji.style.height = "40px";
    starEmoji.style.width = "40px";
    starEmoji.style.fontSize = "50px";
    starEmoji.style.margin = "5px 0px 0px 9px";

    let checkerDivElement = document.createElement('div');
    checkerDivElement.style.backgroundColor = "yellow";
    checkerDivElement.style.height = "60px";
    checkerDivElement.style.width = "60px";
    checkerDivElement.style.margin = '-13px 0px 0px 4px';
    checkerDivElement.style.display = "grid";
    checkerDivElement.style.borderRadius = "50%";
    checkerDivElement.style.cursor = "pointer";
    checkerDivElement.appendChild(starEmoji);
    this.appendChild(checkerDivElement);
}


// export default Checker;  
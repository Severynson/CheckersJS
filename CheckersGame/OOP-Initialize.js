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
    checkerDivElement.style.opacity = "0.9999999";
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
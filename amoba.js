var board = [];
var boardWrapper = document.getElementById("board");
var breakPoint = [];
var isWinner = false;
var whichSign = "";
var sameColorCount = 1;
var turn = document.getElementById("turn");
var linebreak = document.createElement("br");


Init();
var clickCount = 0;

function Init() {
    for (var i = 0; i < 10; i++) {
        var rowWrapper = document.createElement("div");
        rowWrapper.className = "row";
        boardWrapper.appendChild(linebreak);
        boardWrapper.appendChild(rowWrapper);


        for (var k = 0; k < 10; k++) {
            var field = {
                HtmlElement: document.createElement("div")
            }
            field.HtmlElement.id = k + "_" + i;
            field.HtmlElement.className = "field";
            field.HtmlElement.addEventListener("click", function (e) {
                var reset = function () {
                    for (var i = 0; i < board.length; i++) {
                        board[i].HtmlElement.className = "field";
                    }
                    clickCount = 0;
                };
                if (clickCount === 100) {
                    alert("Draw");
                    reset();
                    return;
                }

                if (!this.className.includes("clicked")) {
                    this.className += " clicked";
                    whichSign = clickCount % 2 === 0 ? "X" : "O";
                    turn = document.getElementById("turn").innerHTML = clickCount % 2 === 0 ? "O turn" : "X turn";
                    this.className += " " + whichSign;
                    this.innerHTML = whichSign;
                    clickCount++;
                    var coords = this.id.split("_");
                    var x = parseInt(coords[0]);
                    var y = parseInt(coords[1]);

                    sameColorCount = 1;
                    for (xTmp = x - 1; xTmp >= 0; xTmp--) {
                        var tmpFieldLeft = document.getElementById(xTmp + "_" + y);
                        if (tmpFieldLeft.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }
                    for (xTmp = x + 1; xTmp < 10; xTmp++) {
                        var tmpFieldRight = document.getElementById(xTmp + "_" + y);
                        if (tmpFieldRight.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }
                    if (sameColorCount >= 5) {
                        isWinner = true;
                    }

                    sameColorCount = 1;
                    for (yTmp = y - 1; yTmp >= 0; yTmp--) {
                        var tmpFieldVerticalUp = document.getElementById(x + "_" + yTmp);
                        if (tmpFieldVerticalUp.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }
                    for (yTmp = y + 1; yTmp < 10; yTmp++) {
                        var tmpFieldVerticalDown = document.getElementById(x + "_" + yTmp);
                        if (tmpFieldVerticalDown.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }
                    if (sameColorCount >= 5) {
                        isWinner = true;
                    }

                    sameColorCount = 1;
                    for (xTmp = x - 1, yTmp = y - 1; xTmp >= 0 && yTmp >= 0; xTmp--, yTmp--) {
                        var tmpFieldLeftUp = document.getElementById(xTmp + "_" + yTmp);
                        if (tmpFieldLeftUp.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }
                    for (xTmp = x + 1, yTmp = y + 1; xTmp < 10 && yTmp < 10; xTmp++, yTmp++) {
                        var tmpFieldRightDown = document.getElementById(xTmp + "_" + yTmp);
                        if (tmpFieldRightDown.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }

                    if (sameColorCount >= 5) {
                        isWinner = true;
                    }

                    sameColorCount = 1;
                    for (xTmp = x - 1, yTmp = y + 1; xTmp >= 0 && yTmp < 10; xTmp--, yTmp++) {
                        var tmpFieldLeftDown = document.getElementById(xTmp + "_" + yTmp);
                        if (tmpFieldLeftDown.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }
                    for (xTmp = x + 1, yTmp = y - 1; xTmp < 10 && yTmp >= 0; xTmp++, yTmp--) {
                        var tmpFieldRightUp = document.getElementById(xTmp + "_" + yTmp);
                        if (tmpFieldRightUp.className.includes(whichSign)) {
                            sameColorCount++;
                        }
                        else {
                            break;
                        }
                    }

                    if (sameColorCount >= 5) {
                        isWinner = true;
                    }

                    if (isWinner) {
                        alert(whichSign + " is the winner");
                        resetBoard();
                    }
                }
            });
            rowWrapper.appendChild(field.HtmlElement);
            board.push(field);
        }
    }
}

function resetBoard() {
  location.reload();
}

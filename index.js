var sign = "X";
const button = document.querySelectorAll(".button");
const reset = document.querySelector("#reset");
const turn = document.querySelector("#turn");
var xMove = [];
var yMove = [];
const winMove = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
];
reset.addEventListener("click", () => {
  for (let i = 0; i < button.length; i++) {
    for (let j = 0; j < button[i].children.length; j++) {
      button[i].children[j].children[0].innerHTML = "";
      button[i].children[j].children[0].style.backgroundColor = "#eedce4";
      button[i].children[j].children[0].style.color = "black";
      button[i].children[j].children[0].disabled = false;
      sign = "X";
      turn.innerHTML = "";

      xMove = [];
      yMove = [];
    }
  }
});
for (let i = 0; i < button.length; i++) {
  for (let j = 0; j < button[i].children.length; j++) {
    button[i].children[j].addEventListener("click", (e) => {
      let audio = new Audio("audioEffect.mpeg");
      audio.play();
      turn.innerHTML = `Player ${sign === "X" ? "O" : "X"}'s turn `;
      turn.style.paddingBlock = "10px";
      turn.style.color = "white";
      turn.style.letterSpacing = "1px";
      if (sign === "X") {
        e.target.innerHTML = "X";
        button[i].children[j].children[0].disabled = true;
        button[i].children[j].children[0].style.backgroundColor = "#0A174E";
        button[i].children[j].children[0].style.color = "#F5D042";
        sign = "O";
        xMove.push([i, j]);
      } else {
        e.target.innerHTML = "O";
        button[i].children[j].children[0].disabled = true;
        button[i].children[j].children[0].style.backgroundColor = "#A4193D";
        button[i].children[j].children[0].style.color = "#FFDFB9";
        sign = "X";
        yMove.push([i, j]);
      }
      if (yMove.length >= 3) {
        let threeArray = [];
        for (let i = 0; i < yMove.length; i++) {
          for (let j = i + 1; j < yMove.length; j++) {
            for (let k = j + 1; k < yMove.length; k++) {
              threeArray.push([yMove[i], yMove[j], yMove[k]]);
            }
          }
        }
        for (let i = 0; i < threeArray.length; i++) {
          for (let j = 0; j < winMove.length; j++) {
            if (
              threeArray[i].sort().toString() == winMove[j].sort().toString()
            ) {
              alert(`${sign === "X" ? "O" : "X"} Win`);

              xMove = [];
              yMove = [];
            }
          }
        }
      }

      if (xMove.length >= 3) {
        let threeArray = [];
        for (let i = 0; i < xMove.length; i++) {
          for (let j = i + 1; j < xMove.length; j++) {
            for (let k = j + 1; k < xMove.length; k++) {
              threeArray.push([xMove[i], xMove[j], xMove[k]]);
            }
          }
        }
        for (let i = 0; i < threeArray.length; i++) {
          for (let j = 0; j < winMove.length; j++) {
            if (
              threeArray[i].sort().toString() == winMove[j].sort().toString()
            ) {
              xMove = [];
              yMove = [];
              alert(`${sign === "X" ? "O" : "X"} Win`);
            }
          }
        }
      }
    });
  }
}

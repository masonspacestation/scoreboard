let pineapplePoints = 0
let anchoviesPoints = 0


// pineapple stuff
function increasePineapple() {
  pineapplePoints += 1
  console.log("Pineapple ", pineapplePoints);
  drawPineappleScore()
}

function decreasePineapple() {
  pineapplePoints -= 1
  console.log("Pineapple ", pineapplePoints);
  drawPineappleScore()
}

function extraPineapple() {
  pineapplePoints += 2
  console.log("Pineapple ", pineapplePoints);
  drawPineappleScore()
}

function drawPineappleScore() {
  let pineappleScore = document.getElementById("pineappleScore");
  pineappleScore.innerText = pineapplePoints.toString();
  checkScore()
}


// anchovies stuff
function increaseAnchovies() {
  anchoviesPoints += 1
  console.log("Anchovies ", anchoviesPoints);
  drawAnchovieScore()
}

function decreaseAnchovies() {
  anchoviesPoints -= 1
  console.log("Anchovies ", anchoviesPoints);
  drawAnchovieScore()
}

function extraAnchovies() {
  anchoviesPoints += 2
  console.log("Anchovies ", anchoviesPoints);
  drawAnchovieScore()
}

function drawAnchovieScore() {
  let anchoviesScore = document.getElementById("anchoviesScore");
  anchoviesScore.innerText = anchoviesPoints.toString();
  checkScore()
}

// game end
function checkScore() {
  if (pineapplePoints >= 8) {
    console.log("Pineapple it is")
    window.alert("Pineapple it is")
    resetScore()
  } else if
    (anchoviesPoints >= 8) {
    console.log("Anchovies. . . Really?")
    window.alert("Anchovies. . . Really?")
    resetScore()
  }
}

function resetScore() {
  pineapplePoints = 0
  anchoviesPoints = 0
  drawPineappleScore()
  drawAnchovieScore()
}
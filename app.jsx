let pineapplePoints = 0
let antiPineapplePoints = 0


function increasePineapple() {
  pineapplePoints += 1
  console.log("Pineapple ", pineapplePoints);
  drawPineappleScore()
}


function increaseAntiPineapple() {
  antiPineapplePoints += 1
  console.log("No Thanks ", antiPineapplePoints);
}

function decreasePineapple() {
  pineapplePoints -= 1
  console.log("Pineapple ", pineapplePoints);
  drawPineappleScore()
}

function decreaseAntiPineapple() {
  antiPineapplePoints -= 1
  console.log("No Thanks ", antiPineapplePoints);
}

function drawPineappleScore() {
  let pineappleScore = document.getElementById("pineappleScore");
  console.log("pS ", pineappleScore)
  pineappleScore.innerText = pineapplePoints.toString();
}

function drawAntiPineappleScore() {
  let antiPineappleScore = document.getElementById("antiPineappleScore");
  console.log("pS ", antiPineappleScore)
  antiPineappleScore.innerText = antiPineapplePoints.toString();
}

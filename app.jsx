
loadToppings()

let toppings = [
  {
    topping: "pineapple",
    points: 0,
  },
  {
    topping: "anchovies",
    points: 0,
  }
]

let toppingP = toppings[0]
let toppingA = toppings[1]

// pineapple stuff
function increasePineapple() {
  toppingP.points += 1
  console.log("Pineapple ", toppingP.points);
  drawPineappleScore()
}

function decreasePineapple() {
  toppingP.points -= 1
  console.log("Pineapple ", toppingP.points);
  drawPineappleScore()
}

function extraPineapple() {
  toppingP.points += 2
  console.log("Pineapple ", toppingP.points);
  drawPineappleScore()
}

function drawPineappleScore() {
  let pineappleScore = document.getElementById("pineappleScore");
  pineappleScore.innerText = toppingP.points.toString();
  console.log(toppingP.topping, toppingP.points)
  saveToppings()
  checkScore()
}


// anchovies stuff
function increaseAnchovies() {
  toppingA.points += 1
  console.log("Anchovies ", toppingA.points);
  drawAnchovieScore()
}

function decreaseAnchovies() {
  toppingA.points -= 1
  console.log("Anchovies ", toppingA.points);
  drawAnchovieScore()
}

function extraAnchovies() {
  toppingA.points += 2
  console.log("Anchovies ", toppingA.points);
  drawAnchovieScore()
}

function drawAnchovieScore() {
  let anchoviesScore = document.getElementById("anchoviesScore");
  anchoviesScore.innerText = toppingA.points.toString();
  console.log(toppingA.topping, toppingA.points)
  saveToppings()
  checkScore()
}

// game end
function checkScore() {
  if (toppingP.points >= 8) {
    window.alert("Pineapple it is")
    document.getElementById("pineapple-wins").classList.remove("d-none")
    document.getElementById("reset-button").classList.remove("d-none")
  } if
    (toppingA.points >= 8) {
    window.alert("Anchovies. . . Really?")
    document.getElementById("anchovies-wins").classList.remove("d-none")
    document.getElementById("reset-button").classList.remove("d-none")
  }
}

function resetScore() {
  toppingP.points = 0
  toppingA.points = 0
  drawPineappleScore()
  drawAnchovieScore()
  document.getElementById("reset-button").classList.add("d-none")
  document.getElementById("pineapple-wins").classList.add("d-none")
  document.getElementById("anchovies-wins").classList.add("d-none")
}

function loadToppings() {
  let toppingsData = JSON.parse(window.localStorage.getItem("toppings"))
}

function saveToppings() {
  window.localStorage.setItem("toppings", JSON.stringify(toppings))
}


loadToppings()
saveToppings()
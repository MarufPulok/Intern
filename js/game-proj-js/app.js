let level = document.getElementById("level");
let target = document.getElementById("target");
let myButton = document.getElementById("btn");
let score = document.getElementById("score");
let totalScore = document.getElementById("totalScore");
let popup = document.getElementById("pop-up");
let popupTitle = document.getElementById("pop-up-title");
let popupText = document.getElementById("pop-up-text");
let popupButton = document.getElementById("pop-up-btn");
popupScore = document.getElementById("pop-up-score");
popupTarget = document.getElementById("pop-up-target"); 

let initialScore = 0;
let initAttempt = 0;
let targetValue = 0;
let currentLevel = 1;

targetGenerator();
attemptGenerator();

function attemptGenerator() {
  let attempt = document.getElementById("attempts");
  initAttempt = Math.floor(Math.random() * 26);
  attempt.textContent = `You've Got: ${initAttempt} attempts!`;
  if (initAttempt === 0) {
    gameOver();
    clearScreen();
    score.textContent = `Circles Generated: 0`;
  }
}

myButton.addEventListener("click", function () {
  let scoreValue = circleGenerator();
  score.textContent = `Circles Generated: ${scoreValue}`;
  incrementScore(scoreValue);
  generateCircles(scoreValue);
  decrementAttempt(scoreValue);
});

function decrementAttempt(scoreValue) {
  initAttempt--;
  document.getElementById(
    "attempts"
  ).textContent = `You've Got: ${initAttempt} attempts left!`;

  if (initAttempt === 0 && initialScore !== targetValue) {
    generateCircles(scoreValue);
    gameOver();
    clearScreen();
    score.textContent = `Circles Generated: 0`;
    initAttempt = 0;
    attemptGenerator();
    targetGenerator();
    initialScore = 0;
    totalScore.textContent = `Total Score: ${initialScore}`;
  } else if (initAttempt >= 0 && initialScore === targetValue) {
    // setTimeout(function () {
    //   alert("You've Won! Press OK to go to the next level");
    // }, 500);
    //generate popup
    popup.style.display = "block";

    popupTitle.textContent = "You've Won!";
    popupScore.textContent = `Your Score was: ${initialScore}`;
    popupTarget.textContent = `Target was: ${targetValue}`;
    popupText.textContent = `You've got ${initAttempt} attempts left!`;
    // popupText.textContent = "Press OK to go to the next level";
    popupButton.addEventListener("click", function () {
      popup.style.display = "none";
    });
    clearScreen();
    score.textContent = `Circles Generated: 0`;
    initAttempt = 0;
    incrementLevel();
    targetGenerator();
    attemptGenerator();
    initialScore = 0;
    totalScore.textContent = `Total Score: ${initialScore}`;
  }
 else if (initAttempt >= 0 && initialScore > targetValue) {
    gameOver();
    clearScreen();
    score.textContent = `Circles Generated: 0`;
    initAttempt = 0;
    attemptGenerator();
    targetGenerator();
    initialScore = 0;
    totalScore.textContent = `Total Score: ${initialScore}`;
  }
}

function incrementScore(n) {
  initialScore += n;
  totalScore.textContent = `Total Score: ${initialScore}`;
}

function incrementLevel() {

  currentLevel++;
  level.textContent = `Level: ${currentLevel}`;
}

function targetGenerator() {
  // return Math.floor(Math.random()*26) + 25
  targetValue = Math.floor(Math.random() * 26) + 25;
  target.textContent = `Target: ${targetValue}`;
}

function circleGenerator() {
  return Math.floor(Math.random() * 5) + 1;
}

function generateCircles(n) {
  let circleContainer = document.getElementById("circleContainer");
  for (let i = 0; i < n; i++) {
    let circle = document.createElement("div");
    circle.className = "circle";
    circleContainer.appendChild(circle);
  }
}

function clearScreen() {
  let circleContainer = document.getElementById("circleContainer");
  circleContainer.innerHTML = "";
}

// console.log(circleGenerator())
// console.log(targetGenerator())
function gameOver() {
  // setTimeout(function () {
  //   alert("Game Over! Press OK to restart the game");
  // }, 500);
  //generate popup
  popup.style.display = "block";
  popupTitle.textContent = "Game Over!";
  popupTarget.textContent = `Target was: ${targetValue}`;
  popupScore.textContent = `Your Score was: ${initialScore}`;
  popupText.textContent = `You've got ${initAttempt} attempts left!`;
  popupButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

}

//  Selection Part

const form = document.querySelector("form");
const numInput = document.querySelector(".numInput");
const submitButton = document.querySelector(".submitButton");
const resultbox = document.querySelector(".resultbox");
const resultText = document.querySelector(".resultText");
const scoreText = document.querySelector(".scoreText");
const roundText = document.querySelector(".roundText");
const restartButton = document.querySelector(".restartButton");

// Initializing Values

let totoalWins = 0;
let totoalLoss = 0;
let totoalAttempts = 5;
let attempts = 1;

// Input Part

form.addEventListener("submit", (event) => {
  event.preventDefault();
  resultCheck(numInput.value);
  setTimeout(() => {
    numInput.value = "";
  }, 1000);
  if (attempts > 4) {
    numInput.disabled = true;
    submitButton.style.display = "none";
    restartButton.style.display = "block";
  } else {
    attempts++;
  }
});

// Random Number Generator

const randomizer = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
};

// Result Calculation and execution

const resultCheck = (guessedNumber) => {
  let generatedNumber = randomizer(5);

  if (guessedNumber == generatedNumber) {
    resultText.innerHTML = `You Guessed Correct!`;
    resultText.style.color = "green";
    totoalWins++;
  } else {
    resultText.innerHTML = `You Guessed Wrong! The number was ${generatedNumber}`;
    resultText.style.color = "red";
    totoalLoss++;
  }

  // Scoreboard

  scoreText.innerHTML = `Wins: ${totoalWins} | Losts: ${totoalLoss}`;
  roundText.innerHTML = `Round ${attempts}`;
};

//  Restart System

const restart = () => {
  totoalWins = 0;
  totoalLoss = 0;
  attempts = 1;
  submitButton.style.display = "block";
  restartButton.style.display = "none";
  numInput.disabled = false;
  scoreText.innerHTML = `Wins: ${totoalWins} | Losts: ${totoalLoss}`;
  roundText.innerHTML = `Round ${attempts}`;
};

restartButton.addEventListener("click", restart);

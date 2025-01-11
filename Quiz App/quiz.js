// Storing Data

const questionData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2, // Index of the correct answer in the options array
  },
  {
    question: "What is 5 + 4?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Wordsworth",
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: 1,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: 1,
  },
  {
    question: "Which element is represented by the symbol 'O'?",
    options: ["Oxygen", "Gold", "Osmium", "Opal"],
    correctAnswer: 0,
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: 1,
  },
  {
    question: "Which gas do plants primarily absorb during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
  },
];

// storing Values
let score = 0;
let pageIndex = 0;
// Setting Values
const startButton = document.querySelector(".startButton");
const container = document.querySelector(".container");
const scoreBoard = document.querySelector(".scoreBoard");
const finish = document.querySelector(".finish");
const nextPage = document.querySelector(".nextPage");
const resetButton = document.querySelector(".resetButton");
const choice = document.querySelectorAll(".choice");
const question = document.querySelector(".question");
// Initiate The main quiz
function initiateQuiz() {
  startButton.style.display = "none";
  container.style.display = "block";
}
// Function to display the current question, data and options
function displayPage() {
  question.innerHTML = questionData[pageIndex].question;
  choice.forEach((button, index) => {
    button.textContent = questionData[pageIndex].options[index];
    button.removeEventListener("click", checkAnswer);
    button.onclick = () => checkAnswer(button, index);
  });
}
// function after clicking the next button
function goNextPage() {
  pageIndex++;
  displayPage();
  choice.forEach((button, index) => {
    button.disabled = false;
    button.style.backgroundColor = "";
  });
}

function checkAnswer(button, index) {
  if (index == questionData[pageIndex].correctAnswer) {
    score++;
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
  choice.forEach((button, index) => {
    button.disabled = true; //Doesnt let you choose again
  });
  if (pageIndex < questionData.length - 1) {
    nextPage.style.display = "block";
  } else {
    //Shows you finish button instead of next if there is no more questionn
    nextPage.style.display = "none";
    finish.style.display = "block";
  }
}

function resetQuiz() {
  pageIndex = 0;
  score = 0;
  choice.forEach((button, index) => {
    button.disabled = false;
    button.style.backgroundColor = "";
  });
  displayPage();
}
function finishQuiz() {
  container.style.display = "none";
  scoreBoard.style.display = "block";
  scoreBoard.textContent = `You scored ${score} out of ${questionData.length}`;
}
displayPage();
resetButton.addEventListener("click", resetQuiz);
nextPage.addEventListener("click", goNextPage);
startButton.addEventListener("click", initiateQuiz);
finish.addEventListener("click", finishQuiz);

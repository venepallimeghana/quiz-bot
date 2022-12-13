const start = document.getElementById("quizStart");

const quizDisplay = document.getElementById("quizDisplay");
const quizQuestion = document.getElementById("quizQuestion");
const questionImage = document.getElementById("questionImage");
const quizProgress = document.getElementById("quizProgress");
const scoreDiv = document.getElementById("scoreContainer");

const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");

const imagePath = "./../images/";

const Qns = [
  {
    question: "Largest river in the world?",
    imgPath: imagePath + "nile.jpg",
    optionA: "Nile",
    optionB: "Amazon",
    optionC: "Congo",
    correct: "A",
  },
  {
    question: "No. of bones in human body?",
    imgPath: imagePath + "bones.jpg",
    optionA: "205",
    optionB: "206",
    optionC: "207",
    correct: "B",
  },
  {
    question: "Ph of blood?",
    imgPath: imagePath + "ph.png",
    optionA: "6.5",
    optionB: "8.3",
    optionC: "7.4",
    correct: "C",
  },
  {
    question: "Which country known as land of rising sun?",
    imgPath: imagePath + "rising-sun.jpg",
    optionA: "Japan",
    optionB: "Chile",
    optionC: "Spain",
    correct: "A",
  },
];

const lastQn = Qns.length - 1;
let currentQn = 0, count = 0, score = 0;

function displayQuestion() {
  let q = Qns[currentQn];
  choiceA.innerHTML = q.optionA;
  choiceB.innerHTML = q.optionB;
  choiceC.innerHTML = q.optionC;
  quizQuestion.innerHTML = "<p>" + q.question + "</p>";
  questionImage.innerHTML = "<img src=" + q.imgPath + ">";
}

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  displayQuestion();
  quizDisplay.style.display = "block";
  displayProgress();
}

function correctFn() {
  document.getElementById(currentQn).style.backgroundColor = "#0f0";
}

function wrongFn() {
  document.getElementById(currentQn).style.backgroundColor = "#f00";
}

function displayProgress() {
  for (let qIndex = 0; qIndex <= lastQn; qIndex++) {
    quizProgress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

function verifyResponse(answer) {
  if (answer == Qns[currentQn].correct) {
    score++;
    correctFn();
  } else {
    wrongFn();
  }
  count = 0;
  if (currentQn < lastQn) {
    currentQn++;
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  scoreDiv.style.display = "block";
  const result = Math.round((100 * score) / Qns.length);
  let img = "";
  if (result >= 80) img = "5.png";
  else if (result >= 60) img = "4.png";
  else if (result >= 40) img = "3.png";
  else if (result >= 20) img = "2.png";
  else img = "1.png";

  scoreDiv.innerHTML = "<img src=" + imagePath + img + ">";
  scoreDiv.innerHTML += "<p>" + result + "%</p>";
}

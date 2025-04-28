// Quiz Data
const quizData = [
  { question: "HTML এর ফুল ফর্ম কি?", a: "Hyper Trainer Marking Language", b: "Hyper Text Markup Language", c: "Hyper Text Manipulate Language", correct: "b" },
  { question: "CSS এর মাধ্যমে কি নিয়ন্ত্রণ করা হয়?", a: "Content", b: "Structure", c: "Design", correct: "c" },
  { question: "JavaScript কোন ধরনের ভাষা?", a: "Markup Language", b: "Programming Language", c: "Style Language", correct: "b" }
];

let currentQuestion = 0;
let score = 0;

// Show relevant section
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';

  if (sectionId === 'quiz-container') {
      loadQuiz();
  }
}

// Load Quiz
function loadQuiz() {
  const questionEl = quizData[currentQuestion];
  document.getElementById("quiz").innerHTML = `
      <h3>${questionEl.question}</h3>
      <input type="radio" name="answer" value="a"> ${questionEl.a} <br>
      <input type="radio" name="answer" value="b"> ${questionEl.b} <br>
      <input type="radio" name="answer" value="c"> ${questionEl.c}
  `;
}

// Submit Quiz
function submitQuiz() {
  const answers = document.getElementsByName("answer");
  let selectedAnswer;
  for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
          selectedAnswer = answers[i].value;
      }
  }
  if (selectedAnswer === quizData[currentQuestion].correct) {
      score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
      loadQuiz();
  } else {
      document.getElementById("result").innerHTML = `তোমার স্কোর: ${score}/${quizData.length}`;
  }
}

// Logout
function logout() {
  window.location.href = 'login.html';
}

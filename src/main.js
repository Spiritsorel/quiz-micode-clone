import "./style.css";
import { Questions } from "./questions";

console.log(Questions);

const app = document.querySelector("#app");

// console.log("red");

// setTimeout(() => {
//   app.style.background = "red";
// }, 1000);

// const colors = ["red", "blue", "yellow"];

// let i = 0;
// setInterval(() => {
//   app.style.background = colors[i];
//   i++;
//   if (i > colors.length - 1) {
//     i = 0;
//   }
// }, 2000);

// const firstChild = app.firstElementChild;

// console.log(firstChild);

// firstChild.style.background = "red";

//   Ajouter des elements

// Deconseille
// app.innerHTML = `<div>
//     <h1>
//         salut
//     </h1>
//     <input />
// </div>`;

// const div = document.createElement("div");

// const title = document.createElement("h1");
// const input = document.createElement("input");
// title.innerText = "Sorel";
// div.appendChild(title);
// div.appendChild(input);

// app.appendChild(div);

/////////////////// Action sur le bouton

const startButton = document.querySelector("#start");

// let i = 0;
// startButton.addEventListener("click", () => {
//   const question =
//     document.querySelector("#question") ?? document.createElement("p");
//   question.id = "question";
//   question.innerText = Questions[i].question;
//   app.insertBefore(question, startButton);

//   i++;
//   if (i > Questions.length - 1) {
//     question.remove();
//     i = 0;
//   }
// });

startButton.addEventListener("click", startQuiz);

// Methode d'affichage des questions
function startQuiz(event) {
  event.stopPropagation();
  let currentQuestion = 0;
  let score = 0;

  displayQuestion(currentQuestion);

  function clean() {
    while (app.firstElementChild) {
      app.firstElementChild.remove();
    }
    const progress = getProgressBar(Questions.length, currentQuestion);
    app.appendChild(progress);
  }

  function displayQuestion(index) {
    clean();
    const question = Questions[index];

    if (!question) {
      displayFinishMessage();
      return;
    }

    const title = getTitleElement(question.question);
    app.appendChild(title);
    const answersDiv = createAnswers(question.answers);
    app.appendChild(answersDiv);

    const submitButton = getSubmitButton();

    submitButton.addEventListener("click", submit);

    app.appendChild(submitButton);
  }
  //Methode d'affichage de message a la fin de la partie
  function displayFinishMessage() {
    const h1 = document.createElement("h1");
    h1.innerText = "Bravo ! Tu as termine le quiz.";
    const p = document.createElement("p");
    p.innerText = `Tu as eu ${score} sur ${Questions.length} point !`;

    app.appendChild(h1);
    app.appendChild(p);
  }

  // Gerer la submit Action
  function submit() {
    const selectedAnswer = app.querySelector('input[name="answer"]:checked');

    disableAllAnswers();

    const value = selectedAnswer.value;

    const question = Questions[currentQuestion];

    const isCorrect = question.correct === value;

    if (isCorrect) {
      score++;
    }

    showFeedback(isCorrect, question.correct, value);
    displayNextQuestionButton();

    const feedback = getFeedbackMessage(isCorrect, question.correct);
    app.appendChild(feedback);
  }

  function displayNextQuestionButton() {
    const TIMEOUT = 4000;
    let remainingTimeout = TIMEOUT;

    app.querySelector("button").remove();

    const getButtonText = () => `Next (${remainingTimeout / 1000}s)`;

    const nextButton = document.createElement("button");
    nextButton.innerText = getButtonText();

    app.appendChild(nextButton);

    const interval = setInterval(() => {
      remainingTimeout -= 1000;
      nextButton.innerText = getButtonText();
    }, 1000);

    const timeout = setTimeout(() => {
      handleNextQuestion();
    }, TIMEOUT);

    const handleNextQuestion = () => {
      clearInterval(interval);
      clearTimeout(timeout);
      currentQuestion++;
      displayQuestion(currentQuestion);
    };

    nextButton.addEventListener("click", () => {
      handleNextQuestion();
    });
  }

  // Methode d'affichage des questions
  function createAnswers(answers) {
    const answersDiv = document.createElement("div");

    answersDiv.classList.add("answers");

    for (const answer of answers) {
      const label = getAnswerElement(answer);
      answersDiv.appendChild(label);
    }

    return answersDiv;
  }
}

function getTitleElement(text) {
  const title = document.createElement("h3");
  title.innerText = text;
  return title;
}

function getAnswerElement(text) {
  const label = document.createElement("label");
  label.innerText = text;
  const input = document.createElement("input");
  const id = formatId(text);
  input.id = id;
  label.htmlFor = id;
  input.setAttribute("type", "radio");
  input.setAttribute("name", "answer");
  input.setAttribute("value", text);

  label.appendChild(input);

  return label;
}

// Methode d'affichage du boutton
function getSubmitButton() {
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";

  return submitButton;
}

function formatId(text) {
  return text.replaceAll(" ", "_").replaceAll('"', "'").toLowerCase();
}

function showFeedback(isCorrect, correct, answer) {
  const correctAnswerId = formatId(correct);
  const correctElement = document.querySelector(
    `label[for="${correctAnswerId}"]`
  );

  const selectedAnswerId = formatId(answer);
  const selectedElement = document.querySelector(
    `label[for="${selectedAnswerId}"]`
  );

  correctElement.classList.add("correct");
  selectedElement.classList.add(isCorrect ? "correct" : "incorrect");
}

function getFeedbackMessage(isCorrect, correct) {
  const paragraph = document.createElement("p");
  paragraph.innerText = isCorrect
    ? "Bravo ! Tu as eu la bonne reponse"
    : `Desole... mais la bonne reponse etait ${correct}`;

  return paragraph;
}

function getProgressBar(max, value) {
  const progress = document.createElement("progress");
  progress.setAttribute("max", max);
  progress.setAttribute("value", value);
  return progress;
}

function disableAllAnswers() {
  const radioInputs = document.querySelectorAll(`input[type="radio"]`);

  for (const radio of radioInputs) {
    radio.disabled = true;
  }
}

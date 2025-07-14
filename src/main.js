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

const correctSound = new Audio("/sounds/correct.mp3");
correctSound.volume = 1;

const wrongSound = new Audio("/sounds/wrong.mp3");
wrongSound.volume = 1;

startButton.addEventListener("click", () => {
  // Débloquer l'audio à la première interaction
  correctSound.play().catch(() => {});
  correctSound.pause();
  correctSound.currentTime = 0;

  wrongSound.play().catch(() => {});
  wrongSound.pause();
  wrongSound.currentTime = 0;

  displayCategoryMenu();
});

function displayCategoryMenu() {
  startButton.remove(); // Retire le bouton Start

  const categories = [...new Set(Questions.map((q) => q.category))];

  const title = document.createElement("h2");
  title.innerText = "Choisis une catégorie :";
  app.appendChild(title);

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category;
    button.addEventListener("click", () => startQuiz(category));
    app.appendChild(button);
  });
}

// Methode d'affichage des questions
function startQuiz(category) {
  let timerInterval;
  let timeLeft = 10;
  let currentQuestion = 0;
  let score = 0;

  const questionsByCategory = Questions.filter((q) => q.category === category);

  displayQuestion(currentQuestion);

  function clean() {
    while (app.firstElementChild) {
      app.firstElementChild.remove();
    }
    const progress = getProgressBar(
      questionsByCategory.length,
      currentQuestion
    );
    app.appendChild(progress);
  }

  function displayQuestion(index) {
    clean();
    const question = questionsByCategory[index];

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
    startTimer();
  }

  function startTimer() {
    timeLeft = 10;

    const timerDisplay = document.createElement("p");
    timerDisplay.id = "timer";
    timerDisplay.innerText = `Temps restant : ${timeLeft}s`;
    app.appendChild(timerDisplay);

    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = `Temps restant : ${timeLeft}s`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        autoSubmit(); // Forcer la validation automatique
      }
    }, 1000);
  }

  function autoSubmit() {
    const selectedAnswer = app.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      // Si aucune réponse choisie, passe à la question suivante
      displayNextQuestionButton();
      return;
    }
    submit(); // Sinon, on valide normalement
  }

  //Methode d'affichage de message a la fin de la partie
  function displayFinishMessage() {
    const h1 = document.createElement("h1");
    h1.innerText = "Bravo ! Tu as termine le quiz.";
    const p = document.createElement("p");
    p.innerText = `Tu as eu ${score} sur ${questionsByCategory.length} point !`;

    const retryButton = document.createElement("button");
    retryButton.innerText = "Rejouer";
    retryButton.addEventListener("click", () => {
      while (app.firstChild) app.firstChild.remove();
      displayCategoryMenu(); // Reviens à la sélection de catégorie
    });

    app.appendChild(h1);
    app.appendChild(p);
    app.appendChild(retryButton);
  }

  // Gerer la submit Action
  function submit() {
    clearInterval(timerInterval);
    const selectedAnswer = app.querySelector('input[name="answer"]:checked');

    disableAllAnswers();

    const value = selectedAnswer.value;

    const question = questionsByCategory[currentQuestion];

    const isCorrect = question.correct === value;

    if (isCorrect) {
      score++;
    }

    if (isCorrect) {
      correctSound.currentTime = 0;
      correctSound.play().catch((err) => {
        console.warn("Erreur de lecture du son correct :", err);
      });
    } else {
      wrongSound.currentTime = 0;
      wrongSound.play().catch((err) => {
        console.warn("Erreur de lecture du son incorrect :", err);
      });
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

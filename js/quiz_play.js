
/**
 * Vgl. https://youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF
 *
 * **/
const questionBox = document.getElementById("quiz_question");
const optionButtons = Array.from(document.getElementsByClassName("quiz_choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const progressBar = document.getElementById("progressBarFull");

let currentQuestionData = {};
let acceptingAnswers = false;
let userScore = 0;
let questionCounter = 0;
let availableQuestions = [];
let allQuestions = [];

fetch("questions.json")
    .then(response => response.json())
    .then(loadedQuestions => {
        allQuestions = loadedQuestions;
        startQuiz();
    })
    .catch(error => {
        console.error(error);
    });

const MAX_QUESTIONS = 10;
const CORRECT_POINTS = 10;

function startQuiz() {
    questionCounter = 0;
    userScore = 0;
    availableQuestions = [...allQuestions];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", userScore);
        return window.location.assign("/quiz_q_end.html");
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    progressBar.style.width = `${(questionCounter / MAX_QUESTIONS) * 80}%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestionData = availableQuestions[questionIndex];
    questionBox.innerText = currentQuestionData.question;
    optionButtons.forEach(button => {
        const buttonNumber = button.dataset["number"];
        button.innerText = currentQuestionData[`choice${buttonNumber}`];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

optionButtons.forEach(button => {
    button.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedButton = e.target;
        const selectedAnswer = selectedButton.dataset["number"];
        const classToApply = selectedAnswer == currentQuestionData.answer ? "correct" : "incorrect";
        if (classToApply === "correct") {
            incrementScore(CORRECT_POINTS);
        }
        selectedButton.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedButton.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

function incrementScore(points) {
    userScore += points;
    scoreText.innerText = userScore;
}

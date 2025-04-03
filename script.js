const questions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: "H2O",
        explanation: "Water consists of two hydrogen atoms and one oxygen atom."
    },
    {
        question: "What is the strongest type of intermolecular force?",
        options: ["London-Dispersion forces", "Hydrogen Bonding","Ion-Dipole forces","Dipole-Dipole"],
        correctAnswer: "Hydrogen Bonding",
        explanation: "Hydrogen bonding is the strongest as it involves an extremly polar bond from a hydrogen atom with a highly electronegative atom, such as O,N, or F."
    },
   
    // Add up to 60 questions...
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        alert(`Quiz completed! Your final score is ${score}/${questions.length}`);
        return;
    }

    const questionObj = questions[currentQuestionIndex];

    document.getElementById("question-text").innerText = questionObj.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionObj.options.forEach(option => {
        optionsContainer.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${option}"> ${option}
            </label><br>
        `;
    });

    document.getElementById("explanation").innerText = "";
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    const explanationElement = document.getElementById("explanation");

    if (selectedOption.value === questionObj.correctAnswer) {
        score++;
        explanationElement.innerText = `✅ Correct! ${questionObj.explanation}`;
    } else {
        explanationElement.innerText = `❌ Incorrect. ${questionObj.explanation}`;
    }

    document.getElementById("score-tracker").innerText = `Score: ${score}`;

    currentQuestionIndex++;
document.getElementById("explanation").innerHTML += `<br><button onclick="loadQuestion()">Next Question</button>`;
}

function startQuiz() {
    // Hide the start section and show the quiz
    document.getElementById("start-section").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    
    // Load the first question
    loadQuestion();
}

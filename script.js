const questions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: "H2O",
        explanation: "Water consists of two hydrogen atoms and one oxygen atom."
    },
    {
        question: "What is the strongest type of intermolecular force from the following?",
        options: ["London-Dispersion forces", "Hydrogen Bonding", "idiot guy", "Dipole-Dipole"],
        correctAnswer: "Hydrogen Bonding",
        explanation: "Hydrogen bonding is the strongest as it involves an extremely polar bond from a hydrogen atom with a highly electronegative atom, such as O, N, or F."
    },
    {
        question: "CaF2(s) ←→ Ca2+(aq) + 2F −(aq)  ΔH> 0 Dissolution of the slightly soluble salt CaF2 is shown by the equation above. Which of the following changes will decrease [Ca2+] in a saturated solution of CaF2, and why? Assume that after each change some CaF2(s) remains in contact with the solution.",
        options: ["Allowing some of the water to evaporate from the solution, because more CaF 2(s) will precipitate", "Adding 0.1 M HNO3(aq), because some F−(aq) ions will become protonated", "Adding 0.1 M NaNO3(aq), because additional liquid will dilute the solution", "Adding NaF(s), because the reaction will proceed toward reactants"],
        correctAnswer: "Adding NaF(s), because the reaction will proceed toward reactants",
        explanation: "Adding NaF would cause the F ions to have their concentrations increased, and due to Le Chatelier's Principle, the reaction would shift in the opposite direction to reduce the concentration of F to go back to equilibrium, decreasing the concentration of Ca2+ in the process."
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

    document.getElementById("explanation").innerText = ""; // Clear previous explanation

    // Re-enable the submit button for the next question
    const submitButton = document.querySelector("button[onclick='checkAnswer()']");
    submitButton.disabled = false;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    const explanationElement = document.getElementById("explanation");
    const submitButton = document.querySelector("button[onclick='checkAnswer()']");

    // Disable the submit button after it's clicked
    submitButton.disabled = true;

    if (selectedOption.value === questionObj.correctAnswer) {
        score++;
        explanationElement.innerText = `✅ Correct! ${questionObj.explanation}`;
    } else {
        explanationElement.innerText = `❌ Incorrect. ${questionObj.explanation}`;
    }

    document.getElementById("score-tracker").innerText = `Score: ${score}`;

    // Add the "Next Question" button after the answer is checked
    document.getElementById("explanation").innerHTML += `<br><button onclick="loadQuestion()">Next Question</button>`;
}

function startQuiz() {
    // Hide the start section and show the quiz
    document.getElementById("start-section").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    
    // Load the first question
    loadQuestion();
}

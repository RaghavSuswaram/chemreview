const questions = [
  {
    question: "1. What is the strongest type of intermolecular force from the following?",
    options: ["London-Dispersion forces", "Hydrogen Bonding", "Oxygen-Bonding", "Dipole-Dipole"],
    correctAnswer: "Hydrogen Bonding",
    explanation: "Hydrogen bonding is the strongest among these because it involves a highly polar bond between hydrogen and electronegative atoms like O, N, or F."
  },
  {
    question: "2. CaF2(s) ←→ Ca2+(aq) + 2F−(aq)  ΔH > 0. Which change will decrease [Ca2+] in a saturated CaF2 solution, and why?",
    options: [
      "Allowing some water to evaporate, causing more CaF2(s) to precipitate",
      "Adding 0.1 M HNO3, protonating F− ions",
      "Adding 0.1 M NaNO3, diluting the solution",
      "Adding NaF(s), shifting equilibrium toward reactants"
    ],
    correctAnswer: "Adding NaF(s), shifting equilibrium toward reactants",
    explanation: "Adding NaF increases F− concentration, shifting equilibrium to the left (reactants) and decreasing Ca2+ concentration per Le Chatelier's Principle."
  },
  {
    question: "3. Which species acts as the Lewis base in the reaction: NH3 + BF3 → NH3BF3?",
    options: ["NH3", "BF3", "NH3BF3", "Both act as Lewis acids"],
    correctAnswer: "NH3",
    explanation: "NH3 donates a lone pair (electron pair donor), acting as the Lewis base."
  },
  {
    question: "4. What is the hybridization of the central atom in SO3?",
    options: ["sp", "sp2", "sp3", "sp3d"],
    correctAnswer: "sp2",
    explanation: "SO3 has trigonal planar geometry with three regions of electron density, indicating sp2 hybridization."
  },
  {
    question: "5. Calculate the standard Gibbs free energy change (ΔG°) at 298 K for a reaction with ΔH° = -40 kJ/mol and ΔS° = -100 J/mol·K. Is the reaction spontaneous at this temperature?",
    options: [
      "ΔG° = -10 kJ/mol, spontaneous",
      "ΔG° = +10 kJ/mol, non-spontaneous",
      "ΔG° = -70 kJ/mol, spontaneous",
      "ΔG° = +70 kJ/mol, non-spontaneous"
    ],
    correctAnswer: "ΔG° = -10 kJ/mol, spontaneous",
    explanation: "ΔG° = ΔH° - TΔS° = -40,000 J/mol - 298*(-100 J/mol·K) = -40,000 + 29,800 = -10.2 kJ/mol, which is negative, so the reaction is spontaneous."
  },
  {
    question: "6. For the reaction 2NO2 ⇌ N2O4, the equilibrium constant Kc = 0.144 at 25°C. What is the equilibrium concentration of NO2 if the initial concentration of NO2 is 0.50 M and no N2O4 is present initially?",
    options: [
      "0.42 M",
      "0.29 M",
      "0.36 M",
      "0.25 M"
    ],
    correctAnswer: "0.42 M",
    explanation: "Set up an ICE table and solve the quadratic equation; equilibrium [NO2] ≈ 0.42 M."
  },
  {
    question: "7. Which of the following statements about buffer solutions is FALSE?",
    options: [
      "Buffers resist changes in pH when small amounts of acid or base are added",
      "Buffers contain a weak acid and its conjugate base",
      "Buffers maintain a constant pH regardless of the amount of acid or base added",
      "The pH of a buffer depends on the ratio of acid to conjugate base concentrations"
    ],
    correctAnswer: "Buffers maintain a constant pH regardless of the amount of acid or base added",
    explanation: "Buffers only resist pH changes with small additions; large amounts can overwhelm the buffer."
  },
  {
    question: "8. In electrochemistry, what does a positive standard reduction potential (E°) indicate about a half-reaction?",
    options: [
      "It is more likely to be oxidized",
      "It is more likely to be reduced",
      "It is in equilibrium",
      "It has no net electron transfer"
    ],
    correctAnswer: "It is more likely to be reduced",
    explanation: "A positive E° means the species has a greater tendency to gain electrons (be reduced)."
  },
  {
    question: "9. Which of the following best describes the rate-determining step in a reaction mechanism?",
    options: [
      "The fastest step",
      "The step with the lowest activation energy",
      "The slowest step",
      "The step with the most products"
    ],
    correctAnswer: "The slowest step",
    explanation: "The rate-determining step limits the overall reaction rate because it is the slowest step."
  },
  {
    question: "10. What is the main reason that real gases deviate from ideal gas behavior at high pressure?",
    options: [
      "Gas particles have negligible volume",
      "Gas particles experience attractive forces",
      "Gas particles have elastic collisions",
      "Gas particles move randomly"
    ],
    correctAnswer: "Gas particles experience attractive forces",
    explanation: "At high pressure, intermolecular attractions cause deviations from ideal gas behavior."
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showFinalScore();
    return;
  }

  const questionObj = questions[currentQuestionIndex];
  document.getElementById("question-text").innerText = questionObj.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  questionObj.options.forEach(option => {
    optionsContainer.innerHTML += `
      <label>
        <input type="radio" name="answer" value="${option}" />
        ${option}
      </label>
    `;
  });

  document.getElementById("explanation").innerText = "";
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("submit-btn").style.display = "inline-block";

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.remove();
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  document.getElementById("submit-btn").disabled = true;

  const questionObj = questions[currentQuestionIndex];
  const explanationElement = document.getElementById("explanation");

  if (selectedOption.value === questionObj.correctAnswer) {
    score++;
    explanationElement.innerText = `✅ Correct! ${questionObj.explanation}`;
  } else {
    explanationElement.innerText = `❌ Incorrect. ${questionObj.explanation}`;
  }

  document.getElementById("score-tracker").innerText = `Score: ${score}`;

  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.innerText = "Next Question";
  nextBtn.style.marginTop = "15px";
  nextBtn.onclick = () => {
    currentQuestionIndex++;
    loadQuestion();
  };

  explanationElement.appendChild(document.createElement("br"));
  explanationElement.appendChild(nextBtn);

  document.getElementById("submit-btn").style.display = "none";
}

function startQuiz() {
  document.getElementById("start-section").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("result-section").style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("score-tracker").innerText = `Score: 0`;
  loadQuestion();
}

function showFinalScore() {
  const predictedScore = Math.ceil(score / 2);
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-section").style.display = "block";
  document.getElementById("final-score").innerText = `${predictedScore} / 5`;
}

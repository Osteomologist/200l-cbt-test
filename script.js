const questions = [

{
question: "Which nerve supplies the deltoid muscle?",
options: ["Radial", "Median", "Axillary", "Ulnar"],
answer: 2
},

{
question: "The femur is found in the upper limb.",
options: ["True", "False"],
answer: 1
}

];

let currentQuestion = 0;

const questionContainer = document.getElementById("question-container");

function loadQuestion() {

const q = questions[currentQuestion];

questionContainer.innerHTML = `
<h2>${q.question}</h2>

${q.options.map(option =>
`
<button>${option}</button>
`
).join("")}
`;

}

loadQuestion();

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
let answers = [];

const questionContainer = document.getElementById("question-container");
const questionNumber = document.getElementById("question-number");
const questionGrid = document.getElementById("question-grid");

function loadQuestion(){

const q = questions[currentQuestion];

questionNumber.innerHTML =
`Question ${currentQuestion + 1} of ${questions.length}`;

questionContainer.innerHTML = `

<h2>${q.question}</h2>

${q.options.map((option,index)=>

`
<button class="option-btn"
onclick="selectAnswer(${index})">

${option}

</button>
`

).join("")}
`;

}

function selectAnswer(index){

answers[currentQuestion] = index;

document.querySelectorAll(".q-box")[currentQuestion]
.style.background = "green";

}

document.getElementById("next-btn")
.addEventListener("click",()=>{

if(currentQuestion < questions.length - 1){

currentQuestion++;
loadQuestion();

}

});

document.getElementById("prev-btn")
.addEventListener("click",()=>{

if(currentQuestion > 0){

currentQuestion--;
loadQuestion();

}

});

function loadPalette(){

questions.forEach((q,index)=>{

questionGrid.innerHTML += `

<div class="q-box"
onclick="jumpQuestion(${index})">

${index + 1}

</div>
`;

});

}

function jumpQuestion(index){

currentQuestion = index;
loadQuestion();

}

loadPalette();
loadQuestion();

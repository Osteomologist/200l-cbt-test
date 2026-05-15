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
let answers = new Array(questions.length).fill(null);

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
onclick="selectAnswer(${index})"
style="
background:
${answers[currentQuestion] === index ? '#4CAF50' : '#e6e6e6'}
">

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

loadQuestion();

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


// TIMER

let timeLeft = 1800;

const timer = document.getElementById("timer");

setInterval(()=>{

let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;

timer.innerHTML =
`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

timeLeft--;

if(timeLeft < 0){

submitTest();

}

},1000);


// SUBMIT FUNCTION

function submitTest(){

let score = 0;

questions.forEach((q,index)=>{

if(answers[index] === q.answer){

score++;

}

});

questionContainer.innerHTML = `

<h1>Test Completed</h1>

<h2>Your Score: ${score}/${questions.length}</h2>

`;

document.querySelector(".buttons").style.display = "none";
document.querySelector(".palette").style.display = "none";

}

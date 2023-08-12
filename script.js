const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame);

const nextButton = document.getElementById('next-btn');

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
let shuffledQuestions, currectQuestIndex;

nextButton.addEventListener('click', ()=>{
    currectQuestIndex++;
    setNextQues();
})

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questionsArray.sort(()=>Math.random() - .5);
    questionContainer.classList.remove('hide');currectQuestIndex = 0;
    setNextQues();
}

function setNextQues(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestIndex]);
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion(question){
    //console.log(question);
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        console.log(answer.text);
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtons.children).forEach(button=>{
        setStatusClass(button , button.dataset.correct);
    }) 
    if(currectQuestIndex + 1 < shuffledQuestions.length){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element , correct) {
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questionsArray = [
    {
        question:'What is 12 + 21?',
        answers: [
            {text: '33', correct: true},
            {text: '23', correct: false},
            {text: '32', correct: false},
            {text: '88', correct: false}
        ]
    },
    {
        question:'Who is Ramanujan?',
        answers: [
            {text: 'Musician', correct: false},
            {text: 'Actor', correct: false},
            {text: 'Mathematician', correct: true},
            {text: 'Magician', correct: false}
        ]
    }
]
import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber+1)*10+'%'
}

function nextQuestion(choiceNumber){
  if(currentNumber === questions.length-1){
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value // mbti = '' + 선택하는 답변의 value (반복)
  currentNumber = currentNumber + 1
  renderQuestion()
}

function showResultPage(){
  location.href = '/results.html?mbti=' +mbti //다른 페이지로 이동하는 기능. html 뒤에는 전달할 mbti변수
}

choice1El.addEventListener('click', function(){
  nextQuestion(0) //숫자가 nextQuestion 함수의 choiceNumber로 들어감
})
choice2El.addEventListener('click', function(){
  nextQuestion(1)
})

renderQuestion()
nextQuestion()
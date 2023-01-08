const quizData = [
  {
    question: '1. What is the capital of Australia?',
    a: 'New Delhi',
    b: 'Canberra',
    c: 'Seoul',
    d: 'Moscow',
    correct: 'b'
  },

  {
    question: '2. Which country is home to the Great Barrier Reef?',
    a: 'Philippines',
    b: 'Japan',
    c: 'Australia',
    d: 'Indonesia',
    correct: 'c'
  },
    
  {
    question: '3. What is the highest mountain in Europe?',
    a: 'Mount Kazbek',
    b: 'Shkhara',
    c: 'Mount Elbrus',
    d: 'Dykh-Tau',
    correct: 'c'
  },

  {
    question: '4. What is the longest river in Africa?',
    a: 'Nile River',
    b: 'Congo',
    c: 'Yellow River',
    d: 'Amazon River',
    correct: 'a'
  },
    
  {
    question: '5. In which country is the Taj Mahal located?',
    a: 'Malaysia',
    b: 'Sri Lanka',
    c: 'Philippines',
    d: 'India',
    correct: 'd'
  },
    
  {
    question: '6. What is the capital of Canada?',
    a: 'Toronto',
    b: 'Beijing',
    c: 'Ottawa',
    d: 'Hong Kong',
    correct: 'c'
  },
    
  {
    question: '7. Which country is home to the Andes mountain range?',
    a: 'South America',
    b: 'Africa',
    c: 'Asia',
    d: 'Europe',
    correct: 'a'
  },
    
  {
    question: '8. What is the largest lake in the world by volume?',
    a: 'Great Bear Lake',
    b: 'Lake Baikal',
    c: 'Lake Victoria',
    d: 'Lake Superior',
    correct: 'b'
  },
    
  {
    question: '9. What is the capital of China?',
    a: 'Manila',
    b: 'Beijing',
    c: 'Kyoto',
    d: 'Tokyo',
    correct: 'b'
  },
    
  {
    question: '10. Which country is home to the Serengeti National Park?',
    a: 'Beringan',
    b: 'Philppines',
    c: 'Tanzania',
    d: 'Mexico',
    correct: 'c'
  }
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

function getSelected() {


  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  })
}



submitBtn.addEventListener("click", () => {
  
  const answer = getSelected();

  if (answer) {
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        // TODO: show results
        quiz.innerHTML = `<h2>You got ${score}/${quizData.length} correct answers.</h2>
        
        <button onclick="location.reload()">Do you want to try again?</button>`;
      }
  }
});
const quizDB = [
    {
      question: "Q1: Which of the following is not a type of music notation?",
      a: "Standard notation",
      b: "Tab notation",
      c: "Morse code notation",
      d: "Graphics notation",
      ans: "ans3"
    },
    {
      question: "Q2: What is the most common time signature in classical music?",
      a: "3/4",
      b: "4/4",
      c: "5/4",
      d: "6/8",
      ans: "ans2"
    },
    {
      question: "Q3: Which of the following is not a type of instrument in a symphony orchestra?",
      a: "Violin",
      b: "Piano",
      c: "Harp",
      d: "Theremin",
      ans: "ans4"
    },
    {
      question: "Q4: What is the most common key in pop music?",
      a: "C Major",
      b: "G Major",
      c: "D Major",
      d: "A Major",
      ans: "ans1"
    },
    {
      question: "Q5: Which of the following is not a type of chord?",
      a: "Major",
      b: "Minor",
      c: "Diminished",
      d: "Flat",
      ans: "ans4"
    },
    {
      question: "Q6: Which of the following is not a type of music genre?",
      a: "Jazz",
      b: "Blues",
      c: "Rock",
      d: "Applesauce",
      ans: "ans4"
    },
    {
      question: "Q7: Which of the following is not a type of music theory?",
      a: "Harmony",
      b: "Counterpoint",
      c: "Form",
      d: "Cooking",
      ans: "ans4"
    },
    {
      question: "Q8: What is the most common tempo marking in classical music?",
      a: "Allegro",
      b: "Andante",
      c: "Adagio",
      d: "Moderato",
      ans: "ans1"
    },
    {
      question: "Q9: Which of the following is not a type of musical form?",
      a: "Sonata",
      b: "Symphony",
      c: "Concerto",
      d: "Spaghetti",
      ans: "ans4"
    },
    {
      question: "Q10: Which of the following is not a type of music notation software?",
      a: "Sibelius",
      b: "Finale",
      c: "MuseScore",
      d: "Microsoft Word",
      ans: "ans4"
    },
    {
      question: "Q11: Which artist is known for coining the term 'Surrealism'?",
      a: "Pablo Picasso",
      b: "Salvador Dali",
      c: "Vincent van Gogh",
      d: "Henri Matisse",
      ans: "ans2"
    },
    {
      question: "Q12: Which movement is associated with the use of abstract forms and shapes in art?",
      a: "Impressionism",
      b: "Expressionism",
      c: "Futurism",
      d: "Cubism",
      ans: "ans4"
    },
    {
      question: "Q13: Which artist is known for painting the work 'The Persistence of Memory'?",
      a: "Pablo Picasso",
      b: "Salvador Dali",
      c: "Vincent van Gogh",
      d: "Henri Matisse",
      ans: "ans2"
    },
    {
      question: "Q14: Which artist is known for creating the painting 'The Scream'?",
      a: "Vincent van Gogh",
      b: "Salvador Dali",
      c: "Edvard Munch",
      d: "Claude Monet",
      ans: "ans3"
    },
    {
      question: "Q15: What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      a: "Impressionism",
      b: "Expressionism",
      c: "Fauvism",
      d: "Cubism",
      ans: "ans3"
    },
    {
      question: "Q16: What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      a: "Impressionism",
      b: "Futurism",
      c: "Surrealism",
      d: "Abstract Expressionism",
      ans: "ans2"
    },
    {
      question: "Q17: Which artist is known for creating the painting 'Water Lilies'?",
      a: "Claude Monet",
      b: "Paul Cezanne",
      c: "Paul Gauguin",
      d: "Paul Klee",
      ans: "ans1"
    },
    {
      question: "Q18: Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      a: "Henri Matisse",
      b: "Vincent van Gogh",
      c: "Salvador Dali",
      d: "Pablo Picasso",
      ans: "ans4"
    },
    {
      question: "Q19: Which artist is known for creating the painting 'Guernica'?",
      a: "Claude Mone",
      b: "Paul Cezanne",
      c: "Pablo Picasso",
      d: "Vincent van Gogh",
      ans: "ans3"
    },
    {
      question: "Q20: Which artist is known for creating the sculpture 'The Thinker'?",
      a: "Auguste Rodin",
      b: "Alexander Calder",
      c: "Jean Arp",
      d: "Henry Moore",
      ans: "ans1"
    },
    {
      question: "Q21: What is the correct syntax for an if statement in Python?",
      a: "if (condition):",
      b: "if condition",
      c: "if: condition",
      d: "if condition:",
      ans: "ans2"
    },
    {
      question: "Q22: Which of the following is not a data type in JavaScript?",
      a: "String",
      b: "Number",
      c: "Boolean",
      d: "ArrayList",
      ans: "ans4"
    },
    {
      question: "Q23: Which of the following is used to declare a variable in Java?",
      a: "var",
      b: "let",
      c: "const",
      d: "int",
      ans: "ans4"
    },
    {
      question: "Q24: What is the correct syntax for a for loop in C#?",
      a: "for i = 0 to 10",
      b: "for (i = 0; i <= 10; i++)",
      c: "for (int i = 0; i <= 10)",
      d: "for i in range(0, 10)",
      ans: "ans2"
    },
    {
      question: "Q25: Which of the following is not a looping structure in PHP?",
      a: "while",
      b: "for",
      c: "do-while",
      d: "foreach",
      ans: "ans4"
    },
    {
      question: "Q26: Which of the following is not a valid operator in C++?",
      a: "+",
      b: "-",
      c: "*",
      d: "$",
      ans: "ans4"
    },
    {
      question: "Q27: In which programming language is 'print' used for displaying output?",
      a: "Python",
      b: "JavaScript",
      c: "Java",
      d: "C++",
      ans: "ans1"
    },
    {
      question: "Q28: What is the correct syntax for a function in Ruby?",
      a: "function name()",
      b: "def name",
      c: "function name",
      d: "def name()",
      ans: "ans4"
    },
    {
      question: "Q29: Which of the following is not a type of variable in Swift?",
      a: "Int",
      b: "String",
      c: "Double",
      d: "Object",
      ans: "ans4"
    },
    {
      question: "Q30: In which programming language is '#' used for commenting?",
      a: "Python",
      b: "JavaScript",
      c: "Java",
      d: "C++",
      ans: "ans4"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;

let score = 0;

const loadQuestion = () => {
  
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false );   //all selected tick are remove
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer == quizDB[questionCount].ans){
    score++;
  };

  questionCount++;                            //  quation count increse

  deselectAll();

  if(questionCount < quizDB.length){
    loadQuestion();
  }else{

    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()"> Solve Again </button>
    `;

    showScore.classList.remove('scoreArea');
  }

});


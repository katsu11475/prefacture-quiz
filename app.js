const quiz = [
  {
    question: '群馬県の県庁所在地は？',
    answers: [
      '群馬市',
      '前橋市',
      '高崎市',
      '熊谷市',
    ],
    correct: '前橋市'
  },  {
    question: '三重県の県庁所在地は？',
    answers: [
      '三重市',
      '津市',
      '大津市',
      '四日市市',
    ],
    correct: '津市'
  },  {
    question: '長野県の県庁所在地は？',
    answers: [
      '松本市',
      '塩尻市',
      '長野市',
      '善光寺市',
    ],
    correct: '長野市'
  }
];
const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizlength){
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score +'/' + quizlength +'です！');
  }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
  });
  handlerIndex++;
}


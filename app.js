import {names, imgs} from "./data.mjs";

const makeRndNumArray = (min, max, count) => {
  const array = [];
  let num = 0;
  while (num < count){
      let rndNum = Math.floor(Math.random() * (max + 1 - min)) + min;
      if (array.indexOf(rndNum) === -1 ){
          array.push(rndNum);
          num = num + 1;
      };
  };
  return(array);
};
//console.log(makeRndNumArray(0,47,10));

const makeOptions = (answer, optionNum) => {
  const array = makeRndNumArray(0, 46, optionNum);
  array.push(answer);
  return(array);    
};

const covertArray = (req, res)  => {
  const convertedArray = [];
  for(let i = 0; i < req.length + 1; i ++ ){
    let count = req[i];
    let converted = res[count];
    convertedArray.push(converted);
  };
  return(convertedArray);
};

const makeQuestions = (questionNum, optionNum) => {
  const answers =makeRndNumArray(0, 46, questionNum);
  let questions = [];
  for (let i = 0; i < answers.length; i ++) {
      let question = {};
      let answer = answers[i];
      question.img = imgs[answer];
      question.answer = names[answer];
      const optionArray = makeOptions(answer, optionNum - 1);
      const sorted =optionArray.sort();
      const options = covertArray(sorted, names);
      question.options = options;
      questions.push(question);
  };
  return(questions);
};

const quiz = makeQuestions(10, 4);
//console.log(quiz);

const $window = window;
const $doc = document;
const $question = $doc.getElementById('question');
const $buttons = $doc.getElementsByClassName
('btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

//console.log(question);
//console.log(question.img);

const init = () => {
  const question = quiz[quizCount];
  $question.src = question.img
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = question.options[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    $window.alert('クイズ終了！');
    //showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].answer){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].options.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
};
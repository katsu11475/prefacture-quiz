const question = '群馬県の県庁所在地は？';

const answers = [
  '群馬市',
  '前橋市',
  '高崎市',
  '熊谷市',
];

const correct = '前橋市';

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3 ];

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  if(correct === document.getElementsByTagName('button')[0].textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});


import {names, imgs} from "./data.js";

const rndNums = [];

const makeRndNum = (min, max, count, lists) => {
    for (let i = 0; i < count; i++) {
        let rndNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        lists.push(rndNum);
    }
};

makeRndNum(0, 46, 4, rndNums);
console.log(rndNums);

const makeQuestion = (lists) => {
    document.getElementById('question').src = imgs[lists[0]];
    for (let i = 0; i < 4; i ++){
    const list = lists[i]
    document.getElementsByTagName('button')[i].textContent = names[list];
    };
};

makeQuestion(rndNums);


const makeRndNumArray = (min, max, count, array) => {
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

const addDummyAnswers = (answer, count) => {
    const array = [];
    array.push(answer);
    makeRndNumArray(0, 46, count, array);
    return(array);    
};


const makeQuestion = (question, option) => {
    const answers = [];
    makeRndNumArray(0, 46, question, answers);
    let questions = [];
    for (i = 0; i < answers.length; i ++) {
        let question = {};
        let answer = answers[i];
        question.answer = answer;
        const options = addDummyAnswers(answer, option - 1);
        const sortedOptions =options.sort();
        question.option = sortedOptions;
        questions.push(question);
    };
    return(questions);
};

const quiz = makeQuestion(10, 4);

console.log(quiz);
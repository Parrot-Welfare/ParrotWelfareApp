import { Answer } from "./Answer.js";
import { Question } from "./Question.js";
import { questionData } from "./data.js";

let question1 = new Question(questionData[0].id, questionData[0].text, questionData[0].domain, questionData[0].answers);
console.log(question1.text);

let question = document.getElementById("question");
question.innerText = question1.text;

for (let answer in question1.answers) {
    let answerInput = document.createElement('input');
    answerInput.type = 'radio';
    answerInput.id = answer.id;
    answerInput.name = question1.id;
    answerInput.value = answer.id;

    let answerLabel = document.createElement('label');
    answerLabel.for = answer.id;
    answerLabel.innerText = answer.text;

    question.appendChild(answerInput);
    question.appendChild(answerLabel);

}
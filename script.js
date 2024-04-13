import { Answer } from "./Answer.js";
import { Question } from "./Question.js";
import { questionData } from "./data.js";


let question1 = new Question(questionData[0].id, questionData[0].text, questionData[0].domain, questionData[0].answers);
 

let question = document.getElementById("question");
question.innerText = question1.text;

for (let i = 0; i < question1.answers.length; i++) {
    let answer = new Answer(question1.answers[i].id, question1.answers[i].text, question1.answers[i].points, question1.answers[i].leadsTo)

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
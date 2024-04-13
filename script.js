import { Answer } from "./Answer.js";
import { Question } from "./Question.js";


import questionData from "./data.js";
// let questionData = [
//     {
//         id: "q1",
//         text: "How many hours does your parrot spend out of the cage?",
//         domain: "Environmental enrichment",
//         lvl: 1,
//         answers: [
//             {
//                 id: "q1a1",
//                 text: "Less than 4 h",
//                 points: 0,
//                 leadsTo:"q2"
//             },
//             {
//                 id: "q1a2",
//                 text: "More than 4 h",
//                 points: 5
//             }
//         ]
//     },
//     {
//         id: "q2",
//         text: "How large is the cage of your parrot?",
//         domain: "Environmental enrichment",
//         lvl: 2,
//         answers: [
//             {
//                 id: "q2a1",
//                 text: "Less than 0.5 m2",
//                 points: 0
//             },
//             {
//                 id: "q2a2",
//                 text: "0.5 – 1 m2",
//                 points: 2
//             },
//             {
//                 id: "q2a3",
//                 text: "1 – 2 m3",
//                 points: 3
//             },
//             {
//                 id: "q2a3",
//                 text: "More than 2 m3",
//                 points: 3
//             }
//         ]
//     }
// ]


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
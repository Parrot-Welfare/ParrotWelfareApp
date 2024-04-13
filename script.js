import { Answer } from "./Answer.js";
import { Question } from "./Question.js";
import { questionData } from "./data.js";


let question1 = new Question(questionData[0].id, questionData[0].text, questionData[0].domain, questionData[0].answers);
 

// let question = document.getElementById("question");
// question.innerText = question1.text;

// for (let i = 0; i < question1.answers.length; i++) {
//     let answer = new Answer(question1.answers[i].id, question1.answers[i].text, question1.answers[i].points, question1.answers[i].leadsTo)

//     let answerInput = document.createElement('input');
//     answerInput.type = 'radio';
//     answerInput.id = answer.id;
//     answerInput.name = question1.id;
//     answerInput.value = answer.id;

//     let answerLabel = document.createElement('label');
//     answerLabel.for = answer.id;
//     answerLabel.innerText = answer.text;

//     question.appendChild(answerInput);
//     question.appendChild(answerLabel);

// }

const addQuestion = function(id) {
    console.log("addQuestion")
    let question = questionData.find(q => q.id == id);
    let form = document.getElementById('questionnaire');
    let p = document.createElement('p');
    p.innerHTML = question.text;
    form.appendChild(p);
    question.answers.forEach(answer => {
        let answer = new Answer(answer.id, answer.text, answer.points, answer.leadsTo)
        let answerInput = document.createElement("INPUT");
        answerInput.type = 'radio';
        answerInput.id = answer.id;
        answerInput.name = question.id;
        answerInput.value = answer.id;

        let answerLabel = document.createElement('label');
        answerLabel.for = answer.id;
        answerLabel.innerText = answer.text;

        form.appendChild(answerInput);
        form.appendChild(answerLabel);

        

        if(answer.leadsTo) {
            input.addEventListener('click', function() {
                console.log(answer);
                addQuestion(answer.leadsTo);
            });
        }

        form.appendChild(input);
        let label = document.createElement('label');
        label.innerHTML = answer.text;
        form.appendChild(label);
    });
}

addQuestion(question1.id)
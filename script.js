import { Answer } from "./Answer.js";
import { Question } from "./Question.js";
import { questionData } from "./data.js";


let question1 = new Question(questionData[0].id, questionData[0].text, questionData[0].domain, questionData[0].answers);
let addedQuestions = [];
document.getElementById('domain-name').innerText = question1.domain;

const addQuestion = function(question) {

    if (addedQuestions.find(q => q.id === question.id)) return;

    let form = document.getElementById('questionnaire');
    let div = document.createElement('div');
    div.id = question.id;
    form.appendChild(div);
        
    let p = document.createElement('p');
    p.innerHTML = question.text;
    div.appendChild(p);
    addedQuestions.push(question);

    question.answers.forEach(answ => {
        let answer = new Answer(answ.id, answ.text, answ.points, answ.leadsTo)
        let answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.id = answer.id;
        answerInput.name = question.id;
        answerInput.value = answer.id;

        let answerLabel = document.createElement('label');
        answerLabel.for = answer.id;
        answerLabel.innerText = answer.text;
        
        div.appendChild(answerInput);
        div.appendChild(answerLabel);        

        
        answerInput.addEventListener('change', function() {
            if(answerInput.checked) {
                if (answer.leadsTo) {
                    let nextQ = questionData.find(elem => elem.id === answer.leadsTo);                    
                    addQuestion(new Question(nextQ.id, nextQ.text, nextQ.domain, nextQ.answers));                    
                }  
                else { // TODO: generalize this for larger trees - whole tree might need removal of more divs
                    if (form.lastChild.id !== div.id) {
                        form.removeChild(form.lastChild);
                        addedQuestions.pop();
                    }
                }    
            }
              
       
        });
    });
}

addQuestion(question1);
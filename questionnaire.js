import { questionData } from "./data.js";
/*
[
{id:q1, ans:[{id:a1,lt:q2}]},
{id:q2, ans:[{id:a1,lt:q4}]},
{id:q3, ans:[{id:a1, lt:q4}]},
{id:q4, ans:[{id:a1}]}
]
*/
export const addQuestion = function(id, addedQuestions=[]) {
    if(addedQuestions.find(elem => elem.id === id)) {
        console.log('already exists');
    }
    let q = questionData.find(q => q.id == id);
    let form = document.getElementById('questionnaire');
    let p = document.createElement('p');
    p.innerHTML = q.text;
    form.appendChild(p);
    addedQuestions.push(id);

    q.answers.forEach(answer => {
        let input = document.createElement("INPUT");
        input.setAttribute("type", "radio");
        input.setAttribute("id", answer.id);
        input.setAttribute("name", q.id);
        input.setAttribute("value", answer.id);

        if(answer.leadsTo) {
            input.addEventListener('click', function() {
                console.log(answer);
                addQuestion(answer.leadsTo, addedQuestions);
            });
        }

        form.appendChild(input);
        let label = document.createElement('label');
        label.innerHTML = answer.text;
        form.appendChild(label);
    });
}
export const addedQuestions = [];
export const createQuestionnaire = function(questions) {
    let root = questions.find(q => q.lvl == 1);
    addQuestion(root.id, addedQuestions);
}

createQuestionnaire(questionData);
{/* <input type="radio" id="answer-id" name="question-id" value="answer-id"></input>
        <label for="answer-id">less than 4 hours</label> */}
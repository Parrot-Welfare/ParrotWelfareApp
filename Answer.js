import { Question } from "./Question.js";

export class Answer {
    id;
    text;
    points;
    parentQuestion;
    childQuestion

    constructor(id, text, domain, answers) {
        this.id = id;
        this.text = text;
        this.domain = domain;
        this.answers = answers;
    }

}
import { Answer } from "./Answer.js";

export class Question {
    id;
    text;
    domain;
    answers = [];

    constructor(id, text, domain, answers) {
        this.id = id;
        this.text = text;
        this.domain = domain;
        this.answers = answers;
    }

}
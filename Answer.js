import { Question } from "./Question.js";

export class Answer {
    id;
    text;
    points;
    //parentQuestion;
    leadsTo; //childQuestion

    constructor(id, text, points, leadsTo) {
        this.id = id;
        this.text = text;
        this.points = points;
        this.leadsTo = leadsTo;
    }

}
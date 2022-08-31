export default class SpinResultChoice {
    private _questions;
    private _answer;
    constructor(questions?: number[]);
    get questions(): number[];
    set questions(value: number[]);
    get answer(): number;
    set answer(value: number);
}

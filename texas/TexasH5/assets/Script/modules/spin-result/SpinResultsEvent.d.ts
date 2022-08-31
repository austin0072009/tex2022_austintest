export default class SpinResultsEvent {
    private _code;
    private _value;
    constructor(code: number, value: number);
    get code(): number;
    set code(value: number);
    get value(): number;
    set value(value: number);
}

export default class SpinResultMockChess {
    private _code;
    private _assets;
    constructor(code: number, assets?: number);
    get code(): number;
    set code(value: number);
    get assets(): number;
    set assets(value: number);
}

import { SpinResultsEvent } from ".";
export default class SpinResultsSymbolEvent {
    private _code;
    private _assets;
    private _postion;
    private _events;
    constructor(code: number, assets: number, position: number, events: SpinResultsEvent[]);
    get code(): number;
    get assets(): number;
    get position(): number;
    get events(): SpinResultsEvent[];
}

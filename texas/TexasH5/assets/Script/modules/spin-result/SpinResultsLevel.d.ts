import SpinResultsUpgrade from "./SpinResultsUpgrade";
export default class SpinResultsLevel {
    private _level;
    private _currentValue;
    private _totalValue;
    private _upgrade;
    constructor(level: number, currentValue: number, totalValue: number, upgrade: SpinResultsUpgrade);
    get level(): number;
    set level(value: number);
    get currentValue(): number;
    set currentValue(value: number);
    get totalValue(): number;
    set totalValue(value: number);
    get upgrade(): SpinResultsUpgrade;
    set upgrade(value: SpinResultsUpgrade);
}

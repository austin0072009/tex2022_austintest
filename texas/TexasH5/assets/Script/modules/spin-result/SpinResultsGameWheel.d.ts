import { SpinResultsWheel } from "./SpinResultsWheel";
export default class SpinResultsGameWheel {
    private _winCoins;
    private _totalCoins;
    private _productId;
    private _productCode;
    private _productPrice;
    private _awardCollectId;
    private _wheel;
    constructor(wheel: SpinResultsWheel, winCoins: number, totalCoins: number, productId: string, productCode: string, productPrice: number, awardCollectId: string);
    get winCoins(): number;
    set winCoins(value: number);
    get totalCoins(): number;
    set totalCoins(value: number);
    get productId(): string;
    set productId(value: string);
    get productCode(): string;
    set productCode(value: string);
    get productPrice(): number;
    set productPrice(value: number);
    get awardCollectId(): string;
    set awardCollectId(value: string);
    get wheel(): SpinResultsWheel;
    set wheel(value: SpinResultsWheel);
}

export default class SpinResultsRankInfo {
    private _userId;
    private _name;
    private _headImageUrl;
    private _headFrameImageUrl;
    private _point;
    private _number;
    constructor(userId: number, name: string, headImageUrl: string, headFrameImageUrl: string, point: number, num: number);
    get userId(): number;
    set userId(value: number);
    get name(): string;
    set name(value: string);
    get headImageUrl(): string;
    set headImageUrl(value: string);
    get headFrameImageUrl(): string;
    set headFrameImageUrl(value: string);
    get point(): number;
    set point(value: number);
    get number(): number;
    set number(value: number);
}

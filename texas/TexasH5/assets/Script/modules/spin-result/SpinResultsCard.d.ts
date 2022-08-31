export default class SpinResultsCard {
    private _id;
    private _imageUrl;
    private _isNew;
    private _count;
    constructor(_id: string, _imageUrl: string, _isNew: boolean, _count: number);
    /**
     * 卡牌ID
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsCard
     */
    get id(): string;
    set id(value: string);
    /**
     * 卡牌图片地址
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsCard
     */
    get imageUrl(): string;
    set imageUrl(value: string);
    /**
     * 是否是新出现的卡牌
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsCard
     */
    get isNewCard(): boolean;
    set isNewCard(value: boolean);
    /**
     * 持有数量
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsCard
     */
    get cardCount(): number;
    set cardCount(value: number);
}

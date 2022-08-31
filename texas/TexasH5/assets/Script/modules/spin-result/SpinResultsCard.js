"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
let SpinResultsCard = class SpinResultsCard {
    constructor(_id, _imageUrl, _isNew, _count) {
        this._id = _id;
        this._imageUrl = _imageUrl;
        this._isNew = _isNew;
        this._count = _count;
    }
    /**
     * 卡牌ID
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsCard
     */
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    /**
     * 卡牌图片地址
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsCard
     */
    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(value) {
        this._imageUrl = value;
    }
    /**
     * 是否是新出现的卡牌
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsCard
     */
    get isNewCard() {
        return this._isNew;
    }
    set isNewCard(value) {
        this._isNew = value;
    }
    /**
     * 持有数量
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsCard
     */
    get cardCount() {
        return this._count;
    }
    set cardCount(value) {
        this._count = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsCard.prototype, "id", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsCard.prototype, "imageUrl", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultsCard.prototype, "isNewCard", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsCard.prototype, "cardCount", null);
SpinResultsCard = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [String, String, Boolean, Number])
], SpinResultsCard);
exports.default = SpinResultsCard;

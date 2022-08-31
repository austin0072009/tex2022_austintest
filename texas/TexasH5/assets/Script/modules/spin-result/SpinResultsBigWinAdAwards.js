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
let SpinResultsBigWinAdAwards = class SpinResultsBigWinAdAwards {
    constructor(_awardId, _points, _coins, _countdown) {
        this._awardId = _awardId;
        this._points = _points;
        this._coins = _coins;
        this._countdown = _countdown;
    }
    /**
     * 奖励ID
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsBigWinAdAwards
     */
    get awardId() {
        return this._awardId;
    }
    set awardId(value) {
        this._awardId = value;
    }
    /**
     * 获得的游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */
    get points() {
        return this._points;
    }
    set points(value) {
        this._points = value;
    }
    /**
     * 奖励的金币
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsBigWinAdAwards
     */
    get coins() {
        return this._coins;
    }
    set coins(value) {
        this._coins = value;
    }
    /**
     * 弹窗倒计时, 单位秒
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsBigWinAdAwards
     */
    get countdown() {
        return this._countdown;
    }
    set countdown(value) {
        this._countdown = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsBigWinAdAwards.prototype, "awardId", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsBigWinAdAwards.prototype, "points", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsBigWinAdAwards.prototype, "coins", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsBigWinAdAwards.prototype, "countdown", null);
SpinResultsBigWinAdAwards = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [String, Number, Number, Number])
], SpinResultsBigWinAdAwards);
exports.default = SpinResultsBigWinAdAwards;

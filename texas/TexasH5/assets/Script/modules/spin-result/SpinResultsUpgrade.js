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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const SpinResultsGame_1 = __importDefault(require("./SpinResultsGame"));
let SpinResultsUpgrade = class SpinResultsUpgrade {
    constructor(level, award, vipRatio, awardCollectId) {
        this._level = level;
        this._award = award;
        this._vipRatio = vipRatio;
        this._awardCollectId = awardCollectId;
        this._unlockedGames = [];
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
    get award() {
        return this._award;
    }
    set award(value) {
        this._award = value;
    }
    get vipRatio() {
        return this._vipRatio;
    }
    set vipRatio(value) {
        this._vipRatio = value;
    }
    get awardCollectId() {
        return this._awardCollectId;
    }
    set awardCollectId(value) {
        this._awardCollectId = value;
    }
    get maxBet() {
        return this._maxBet;
    }
    set maxBet(value) {
        this._maxBet = value;
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
     * 大升级弹窗倒计时
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */
    get countdown() {
        return this._countdown;
    }
    set countdown(value) {
        this._countdown = value;
    }
    /**
     * 解锁的关卡
     *
     * @readonly
     * @type {SpinResultsGame[]}
     * @memberof SpinResultsUpgrade
     */
    get unlockedGames() {
        return this._unlockedGames;
    }
    set unlockedGames(value) {
        this._unlockedGames = value;
    }
    /**
     * 添加解锁关卡
     *
     * @param {string} gameId 关卡ID
     * @param {string} gameCode 关卡代号
     * @param {boolean} isFree 是否免费
     * @param {boolean} hasJackpot 是否有奖池
     * @param {string} jackpot 奖池金额
     * @param {string} jackpot2 奖池金额
     * @param {SpinResultsGameStatus} status 关卡状态
     * @param {boolean} isTopGame
     * @param {boolean} isVertical
     * @param {number} orderNum
     * @param {string} version
     * @returns {void}
     * @memberof SpinResultsUpgrade
     */
    addUnlockedGame(gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version) {
        const game = new SpinResultsGame_1.default(gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version);
        this._unlockedGames.push(game);
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsGame_1.default),
    __metadata("design:type", Array)
], SpinResultsUpgrade.prototype, "_unlockedGames", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsUpgrade.prototype, "level", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsUpgrade.prototype, "award", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsUpgrade.prototype, "vipRatio", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsUpgrade.prototype, "awardCollectId", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsUpgrade.prototype, "maxBet", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsUpgrade.prototype, "points", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsUpgrade.prototype, "countdown", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsGame_1.default),
    class_transformer_1.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsUpgrade.prototype, "unlockedGames", null);
SpinResultsUpgrade = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, Number, Number, String])
], SpinResultsUpgrade);
exports.default = SpinResultsUpgrade;

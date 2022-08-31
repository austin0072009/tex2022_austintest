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
const SpinResultsGameStatus_1 = require("./SpinResultsGameStatus");
let SpinResultsGame = class SpinResultsGame {
    constructor(_id, _code, _isFree, _hasJackpot, _jackpot, _jackpot2, _status, _isTopGame, _isVertical, _orderNumber, _version) {
        this._id = _id;
        this._code = _code;
        this._isFree = _isFree;
        this._hasJackpot = _hasJackpot;
        this._jackpot = _jackpot;
        this._jackpot2 = _jackpot2;
        this._status = _status;
        this._isTopGame = _isTopGame;
        this._isVertical = _isVertical;
        this._orderNumber = _orderNumber;
        this._version = _version;
    }
    /**
     * 关卡ID
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    /**
     * 关卡代号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    /**
     * 奖池金额1
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get jackpot() {
        return this._jackpot;
    }
    set jackpot(value) {
        this._jackpot = value;
    }
    /**
     * 奖池金额2
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get jackpot2() {
        return this._jackpot2;
    }
    set jackpot2(value) {
        this._jackpot2 = value;
    }
    /**
     * 是否有奖池
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get hasJackpot() {
        return this._hasJackpot;
    }
    set hasJackpot(value) {
        this._hasJackpot = value;
    }
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get isFree() {
        return this._isFree;
    }
    set isFree(value) {
        this._isFree = value;
    }
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    /**
     * 是否置顶游戏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get isTopGame() {
        return this._isTopGame;
    }
    set isTopGame(value) {
        this._isTopGame = value;
    }
    /**
     * 是否竖屏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get isVertical() {
        return this._isVertical;
    }
    set isVertical(value) {
        this._isVertical = value;
    }
    /**
     * 关卡顺序，解锁等级
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */
    get orderNumber() {
        return this._orderNumber;
    }
    set orderNumber(value) {
        this._orderNumber = value;
    }
    /**
     * 版本号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGame.prototype, "id", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGame.prototype, "code", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGame.prototype, "jackpot", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGame.prototype, "jackpot2", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultsGame.prototype, "hasJackpot", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultsGame.prototype, "isFree", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsGame.prototype, "status", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultsGame.prototype, "isTopGame", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultsGame.prototype, "isVertical", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsGame.prototype, "orderNumber", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGame.prototype, "version", null);
SpinResultsGame = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [String, String, Boolean, Boolean, String, String, Number, Boolean, Boolean, Number, String])
], SpinResultsGame);
exports.default = SpinResultsGame;

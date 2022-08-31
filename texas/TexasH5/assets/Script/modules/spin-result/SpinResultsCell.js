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
const SpinResultsSymbol_1 = __importDefault(require("./SpinResultsSymbol"));
const SpinResultsWheel_1 = __importDefault(require("./SpinResultsWheel"));
const SpinResultsEvent_1 = __importDefault(require("./SpinResultsEvent"));
const class_transformer_1 = require("class-transformer");
let SpinResultCell = class SpinResultCell extends SpinResultsSymbol_1.default {
    constructor(code, fixed, mockCodes, assets, extraCode, extraAssets, extraPosition, wheel, events, isHoldWin) {
        super(code, assets);
        this._fixed = fixed;
        this._mockCodes = mockCodes;
        this._extraCode = extraCode;
        this._extraAssets = extraAssets;
        this._extraPosition = extraPosition;
        this._wheel = wheel;
        this._events = events;
        this._isHoldWin = isHoldWin;
    }
    /**
     * 获取棋子是否固定
     */
    get fixed() {
        return this._fixed;
    }
    /**
     * 设置棋子是否固定
     */
    set fixed(value) {
        this._fixed = value;
    }
    /**
     * 获取假冒棋子
     */
    get mockCodes() {
        return this._mockCodes;
    }
    /**
     * 设置假冒棋子
     */
    set mockCodes(value) {
        this._mockCodes = value;
    }
    /**
     * 获取假冒棋子个数
     */
    get mockCodeCount() {
        if (!this._mockCodes) {
            return 0;
        }
        return this._mockCodes.length;
    }
    /**
     * 获取额外棋子
     */
    get extraCode() {
        return this._extraCode;
    }
    /**
     * 设置额外棋子
     */
    set extraCode(value) {
        this._extraCode = value;
    }
    /**
     * 获取额外资产
     */
    get extraAssets() {
        return this._extraAssets;
    }
    /**
     * 设置额外资产
     */
    set extraAssets(value) {
        this._extraAssets = value;
    }
    /**
     * 获取额外棋子位置
     */
    get extraPosition() {
        return this._extraPosition;
    }
    /**
     * 设置额外棋子位置
     */
    set extraPosition(value) {
        this._extraPosition = value;
    }
    /**
     * 获取转盘
     */
    get wheel() {
        return this._wheel;
    }
    /**
     * 设置转盘
     */
    set wheel(value) {
        this._wheel = value;
    }
    /**
     * 获取事件
     */
    get events() {
        return this._events;
    }
    /**
     * 设置事件
     */
    set events(value) {
        this._events = value;
    }
    get isHoldWin() {
        return this._isHoldWin;
    }
    set isHoldWin(value) {
        this._isHoldWin = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultCell.prototype, "fixed", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultCell.prototype, "mockCodes", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultCell.prototype, "extraCode", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultCell.prototype, "extraAssets", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultCell.prototype, "extraPosition", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", SpinResultsWheel_1),
    __metadata("design:paramtypes", [SpinResultsWheel_1])
], SpinResultCell.prototype, "wheel", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultCell.prototype, "events", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultCell.prototype, "isHoldWin", null);
SpinResultCell = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, Boolean, Array, Number, Number, Number, Number, SpinResultsWheel_1, Array, Boolean])
], SpinResultCell);
exports.default = SpinResultCell;

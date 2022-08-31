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
const SpinResultsGameMode_1 = require("./SpinResultsGameMode");
const SpinResultsWheel_1 = __importDefault(require("./SpinResultsWheel"));
const SpinResultChoice_1 = __importDefault(require("./SpinResultChoice"));
const class_transformer_1 = require("class-transformer");
const class_transformer_2 = require("class-transformer");
const _1 = null;//require(".");
let SpinResultsFreeTrigger = class SpinResultsFreeTrigger {
    constructor(gameMode, count, total, wheels, choices, events) {
        this._wheels = [];
        this._choices = [];
        this._events = [];
        this._gameMode = gameMode;
        this._count = count;
        this._total = total;
        this._wheels = wheels;
        this._choices = choices;
        this._events = events;
    }
    /**
     * 获取游戏类型
     */
    get gameMode() {
        return this._gameMode;
    }
    /**
     * 设置游戏类型
     */
    set gameMode(value) {
        this._gameMode = value;
    }
    /**
     * 获取次数
     */
    get count() {
        return this._count;
    }
    /**
     * 设置次数
     */
    set count(value) {
        this._count = value;
    }
    /**
     * 获取总次数
     */
    get total() {
        return this._total;
    }
    /**
     * 设置总次数
     */
    set total(value) {
        this._total = value;
    }
    /**
     * 获取转盘（比如小猪转棋盘数和wild列数）
     */
    get wheels() {
        return this._wheels;
    }
    /**
     * 设置转盘
     */
    set wheels(value) {
        this._wheels = value;
    }
    /**
     * 获取选择（比如宙斯选择freespin次数）
     */
    get choices() {
        return this._choices;
    }
    /**
     * 设置选择
     */
    set choices(value) {
        this._choices = value;
        if (!this._choices) {
            this._choices = [];
        }
    }
    /**
     * 获取事件（比如埃及free spin转盘翻倍）
     */
    get events() {
        return this._events;
    }
    /**
     * 设置事件
     */
    set events(value) {
        this._events = value;
        if (!this._events) {
            this._events = [];
        }
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsWheel_1.default),
    __metadata("design:type", Array)
], SpinResultsFreeTrigger.prototype, "_wheels", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultChoice_1.default),
    __metadata("design:type", Array)
], SpinResultsFreeTrigger.prototype, "_choices", void 0);
__decorate([
    class_transformer_1.Type(() => _1),
    __metadata("design:type", Array)
], SpinResultsFreeTrigger.prototype, "_events", void 0);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsFreeTrigger.prototype, "gameMode", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsFreeTrigger.prototype, "count", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsFreeTrigger.prototype, "total", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsWheel_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsFreeTrigger.prototype, "wheels", null);
__decorate([
    class_transformer_1.Type(() => SpinResultChoice_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsFreeTrigger.prototype, "choices", null);
__decorate([
    class_transformer_1.Type(() => _1),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsFreeTrigger.prototype, "events", null);
SpinResultsFreeTrigger = __decorate([
    class_transformer_2.Exclude(),
    __metadata("design:paramtypes", [Number, Number, Number, Array, Array, Array])
], SpinResultsFreeTrigger);
exports.default = SpinResultsFreeTrigger;

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
/**
 * spin结果转盘数据
 */
const class_transformer_1 = require("class-transformer");
const SpinResultsWheeItem_1 = __importDefault(require("./SpinResultsWheeItem"));
let SpinResultsWheel = class SpinResultsWheel {
    /**
     * 构造函数
     * @param values 值
     * @param finalValue 最终值
     */
    constructor(values, finalValue) {
        this._values = [];
        this._finalValue = null;
        this._finalPosition = -1;
        this._values = values;
        this._finalValue = finalValue;
    }
    /**
     * 获取转盘值
     */
    get values() {
        return this._values;
    }
    /**
     * 设置转盘值
     */
    set values(value) {
        this._values = value;
        if (!this._values) {
            this._values = [];
        }
        if (this._finalValue) {
            this._finalPosition = this._values.findIndex((v) => v.value === this._finalValue.value);
        }
    }
    /**
     * 获取最终值
     */
    get finalValue() {
        return this._finalValue;
    }
    /**
     * 设置最终值
     */
    set finalValue(value) {
        this._finalValue = value;
        if (this._values) {
            this._finalPosition = this._values.findIndex((v) => v == value);
        }
    }
    /**
     * 获取最终位置
     */
    get finalPosition() {
        return this._finalPosition;
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsWheeItem_1.default),
    __metadata("design:type", Array)
], SpinResultsWheel.prototype, "_values", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsWheeItem_1.default),
    __metadata("design:type", SpinResultsWheeItem_1.default)
], SpinResultsWheel.prototype, "_finalValue", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsWheel.prototype, "values", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", SpinResultsWheeItem_1.default),
    __metadata("design:paramtypes", [SpinResultsWheeItem_1.default])
], SpinResultsWheel.prototype, "finalValue", null);
SpinResultsWheel = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Array, SpinResultsWheeItem_1.default])
], SpinResultsWheel);
exports.default = SpinResultsWheel;

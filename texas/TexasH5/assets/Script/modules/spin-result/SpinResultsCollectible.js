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
let SpinResultsCollectible = class SpinResultsCollectible {
    constructor(code, value, maxValue) {
        this._code = code;
        this._value = value;
        this._maxValue = maxValue;
    }
    /**
     * 获取编码
     */
    get code() {
        return this._code;
    }
    /**
     * 设置编码
     */
    set code(value) {
        this._code = value;
    }
    /**
     * 获取当前值
     */
    get value() {
        return this._value;
    }
    /**
     * 设置当前值
     */
    set value(value) {
        this._value = value;
    }
    /**
     * 获取最大值
     */
    get maxValue() {
        return this._maxValue;
    }
    /**
     * 设置最大值
     */
    set maxValue(value) {
        this._maxValue = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsCollectible.prototype, "code", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsCollectible.prototype, "value", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsCollectible.prototype, "maxValue", null);
SpinResultsCollectible = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, Number, Number])
], SpinResultsCollectible);
exports.default = SpinResultsCollectible;

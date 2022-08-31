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
/**
 * 转盘选项
 *
 * @class SpinResultsWheelItem
 */
let SpinResultsWheelItem = class SpinResultsWheelItem {
    /**
     * Creates an instance of SpinResultsWheelItem.
     * @param {number} value 值
     * @param {number} assets 资产
     * @memberof SpinResultsWheelItem
     */
    constructor(value, assets) {
        this._value = value;
        this._assets = assets;
    }
    /**
     * 获取值
     *
     * @type {number}
     * @memberof SpinResultsWheelItem
     */
    get value() {
        return this._value;
    }
    /**
     * 设置值
     *
     * @memberof SpinResultsWheelItem
     */
    set value(value) {
        this._value = value;
    }
    /**
     * 获取资产
     *
     * @type {number}
     * @memberof SpinResultsWheelItem
     */
    get assets() {
        return this._assets;
    }
    /**
     * 设置资产
     *
     * @memberof SpinResultsWheelItem
     */
    set assets(value) {
        this._assets = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsWheelItem.prototype, "value", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsWheelItem.prototype, "assets", null);
SpinResultsWheelItem = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, Number])
], SpinResultsWheelItem);
exports.default = SpinResultsWheelItem;

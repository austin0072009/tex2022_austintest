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
const SpinResultsUpgrade_1 = __importDefault(require("./SpinResultsUpgrade"));
const class_transformer_2 = require("class-transformer");
let SpinResultsLevel = class SpinResultsLevel {
    constructor(level, currentValue, totalValue, upgrade) {
        this._level = level;
        this._currentValue = currentValue;
        this._totalValue = totalValue;
        this._upgrade = upgrade;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
    get currentValue() {
        return this._currentValue;
    }
    set currentValue(value) {
        this._currentValue = value;
    }
    get totalValue() {
        return this._totalValue;
    }
    set totalValue(value) {
        this._totalValue = value;
    }
    get upgrade() {
        return this._upgrade;
    }
    set upgrade(value) {
        this._upgrade = value;
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsUpgrade_1.default),
    __metadata("design:type", SpinResultsUpgrade_1.default)
], SpinResultsLevel.prototype, "_upgrade", void 0);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsLevel.prototype, "level", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsLevel.prototype, "currentValue", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsLevel.prototype, "totalValue", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsUpgrade_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsUpgrade_1.default),
    __metadata("design:paramtypes", [SpinResultsUpgrade_1.default])
], SpinResultsLevel.prototype, "upgrade", null);
SpinResultsLevel = __decorate([
    class_transformer_2.Exclude(),
    __metadata("design:paramtypes", [Number, Number, Number, SpinResultsUpgrade_1.default])
], SpinResultsLevel);
exports.default = SpinResultsLevel;

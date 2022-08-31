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
const SpinResultsRankInfo_1 = __importDefault(require("./SpinResultsRankInfo"));
const class_transformer_1 = require("class-transformer");
const class_transformer_2 = require("class-transformer");
let SpinResultsTour = class SpinResultsTour {
    constructor(status, countdown, totalMinutes, award, mine, myPrev, ranks) {
        this._status = status;
        this._countdown = countdown;
        this._totalMinutes = totalMinutes;
        this._award = award;
        this._mine = mine;
        this._myPrev = myPrev;
        this._ranks = ranks;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get countdown() {
        return this._countdown;
    }
    set countdown(value) {
        this._countdown = value;
    }
    get totalMinutes() {
        return this._totalMinutes;
    }
    set totalMinutes(value) {
        this._totalMinutes = value;
    }
    get award() {
        return this._award;
    }
    set award(value) {
        this._award = value;
    }
    get mine() {
        return this._mine;
    }
    set mine(value) {
        this._mine = value;
    }
    get myPrev() {
        return this._myPrev;
    }
    set myPrev(value) {
        this._myPrev = value;
    }
    get ranks() {
        return this._ranks;
    }
    set ranks(value) {
        this._ranks = value;
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsRankInfo_1.default),
    __metadata("design:type", SpinResultsRankInfo_1.default)
], SpinResultsTour.prototype, "_mine", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsRankInfo_1.default),
    __metadata("design:type", SpinResultsRankInfo_1.default)
], SpinResultsTour.prototype, "_myPrev", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsRankInfo_1.default),
    __metadata("design:type", Array)
], SpinResultsTour.prototype, "_ranks", void 0);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsTour.prototype, "status", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsTour.prototype, "countdown", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsTour.prototype, "totalMinutes", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsTour.prototype, "award", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsRankInfo_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsRankInfo_1.default),
    __metadata("design:paramtypes", [SpinResultsRankInfo_1.default])
], SpinResultsTour.prototype, "mine", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsRankInfo_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsRankInfo_1.default),
    __metadata("design:paramtypes", [SpinResultsRankInfo_1.default])
], SpinResultsTour.prototype, "myPrev", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsRankInfo_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsTour.prototype, "ranks", null);
SpinResultsTour = __decorate([
    class_transformer_2.Exclude(),
    __metadata("design:paramtypes", [Number, Number, Number, Array, SpinResultsRankInfo_1.default,
        SpinResultsRankInfo_1.default, Array])
], SpinResultsTour);
exports.default = SpinResultsTour;

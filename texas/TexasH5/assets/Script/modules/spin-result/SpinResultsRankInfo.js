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
let SpinResultsRankInfo = class SpinResultsRankInfo {
    constructor(userId, name, headImageUrl, headFrameImageUrl, point, num) {
        this._userId = userId;
        this._name = name;
        this._headImageUrl = headImageUrl;
        this._headFrameImageUrl = headFrameImageUrl;
        this._point = point;
        this._number = num;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get headImageUrl() {
        return this._headImageUrl;
    }
    set headImageUrl(value) {
        this._headImageUrl = value;
    }
    get headFrameImageUrl() {
        return this._headFrameImageUrl;
    }
    set headFrameImageUrl(value) {
        this._headFrameImageUrl = value;
    }
    get point() {
        return this._point;
    }
    set point(value) {
        this._point = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsRankInfo.prototype, "userId", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsRankInfo.prototype, "name", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsRankInfo.prototype, "headImageUrl", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsRankInfo.prototype, "headFrameImageUrl", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsRankInfo.prototype, "point", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsRankInfo.prototype, "number", null);
SpinResultsRankInfo = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, String, String, String, Number, Number])
], SpinResultsRankInfo);
exports.default = SpinResultsRankInfo;

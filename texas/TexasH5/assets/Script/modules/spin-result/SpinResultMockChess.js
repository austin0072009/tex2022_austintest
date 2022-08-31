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
let SpinResultMockChess = class SpinResultMockChess {
    constructor(code, assets) {
        this._code = code;
        this._assets = assets;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get assets() {
        return this._assets;
    }
    set assets(value) {
        this._assets = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultMockChess.prototype, "code", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultMockChess.prototype, "assets", null);
SpinResultMockChess = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, Number])
], SpinResultMockChess);
exports.default = SpinResultMockChess;

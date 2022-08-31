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
let SpinResultsSymbol = class SpinResultsSymbol {
    constructor(code, assets, position) {
        this._code = code;
        this._assets = assets;
        this._position = position;
    }
    /**
     * 获取结果棋子编码
     */
    get code() {
        return this._code;
    }
    /**
     * 设置结果棋子编码
     *
     */
    set code(value) {
        this._code = value;
    }
    /**
     * 获取棋子上的资产（比如金币数、freespin次数）
     */
    get assets() {
        return this._assets;
    }
    /**
     * 设置棋子上的资产（比如金币数、freespin次数）
     */
    set assets(value) {
        this._assets = value;
    }
    /**
     * 获取棋子位置
     */
    get position() {
        return this._position;
    }
    /**
     * 设置棋子位置
     */
    set position(value) {
        this._position = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsSymbol.prototype, "code", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsSymbol.prototype, "assets", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsSymbol.prototype, "position", null);
SpinResultsSymbol = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, Number, Number])
], SpinResultsSymbol);
exports.default = SpinResultsSymbol;

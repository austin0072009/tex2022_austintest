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
const _1 = __importDefault(require("./SpinResultsWheel"));
const class_transformer_1 = require("class-transformer");
const class_transformer_2 = require("class-transformer");
let SpinResultsGameWheel = class SpinResultsGameWheel {
    constructor(wheel, winCoins, totalCoins, productId, productCode, productPrice, awardCollectId) {
        this._wheel = wheel;
        this._winCoins = winCoins;
        this._totalCoins = totalCoins;
        this._productId = productId;
        this._productCode = productCode;
        this._productPrice = productPrice;
        this._awardCollectId = awardCollectId;
    }
    get winCoins() {
        return this._winCoins;
    }
    set winCoins(value) {
        this._winCoins = value;
    }
    get totalCoins() {
        return this._totalCoins;
    }
    set totalCoins(value) {
        this._totalCoins = value;
    }
    get productId() {
        return this._productId;
    }
    set productId(value) {
        this._productId = value;
    }
    get productCode() {
        return this._productCode;
    }
    set productCode(value) {
        this._productCode = value;
    }
    get productPrice() {
        return this._productPrice;
    }
    set productPrice(value) {
        this._productPrice = value;
    }
    get awardCollectId() {
        return this._awardCollectId;
    }
    set awardCollectId(value) {
        this._awardCollectId = value;
    }
    get wheel() {
        return this._wheel;
    }
    set wheel(value) {
        this._wheel = value;
    }
};
__decorate([
    class_transformer_1.Type(() => _1),
    __metadata("design:type", _1)
], SpinResultsGameWheel.prototype, "_wheel", void 0);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsGameWheel.prototype, "winCoins", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsGameWheel.prototype, "totalCoins", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGameWheel.prototype, "productId", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGameWheel.prototype, "productCode", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsGameWheel.prototype, "productPrice", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpinResultsGameWheel.prototype, "awardCollectId", null);
__decorate([
    class_transformer_1.Type(() => _1),
    class_transformer_2.Expose(),
    __metadata("design:type", _1),
    __metadata("design:paramtypes", [_1])
], SpinResultsGameWheel.prototype, "wheel", null);
SpinResultsGameWheel = __decorate([
    class_transformer_2.Exclude(),
    __metadata("design:paramtypes", [_1, Number, Number, String, String, Number, String])
], SpinResultsGameWheel);
exports.default = SpinResultsGameWheel;

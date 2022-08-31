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
let SpinResultsEvent = class SpinResultsEvent {
    constructor(code, value) {
        this._code = code;
        this._value = value;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsEvent.prototype, "code", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsEvent.prototype, "value", null);
SpinResultsEvent = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Number, Number])
], SpinResultsEvent);
exports.default = SpinResultsEvent;

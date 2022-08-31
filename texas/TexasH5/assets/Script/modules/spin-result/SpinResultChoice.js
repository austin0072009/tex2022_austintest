"use strict";
require("reflect-metadata");
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
let SpinResultChoice = class SpinResultChoice {
    constructor(questions) {
        this._questions = [];
        this._answer = 0;
        this.questions = questions;
    }
    get questions() {
        return this._questions;
    }
    set questions(value) {
        this._questions = value;
        if (!this._questions) {
            this._questions = [];
        }
    }
    get answer() {
        return this._answer;
    }
    set answer(value) {
        this._answer = value;
    }
};
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultChoice.prototype, "questions", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultChoice.prototype, "answer", null);
SpinResultChoice = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Array])
], SpinResultChoice);
exports.default = SpinResultChoice;

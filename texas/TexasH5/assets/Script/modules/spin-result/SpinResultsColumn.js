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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpinResultsCell_1 = __importDefault(require("./SpinResultsCell"));
const SpinResultsConst_1 = __importDefault(require("./SpinResultsConst"));
const class_transformer_1 = require("class-transformer");
let SpinResultsColumn = class SpinResultsColumn {
    constructor(cells, isHoldWin) {
        this._cells = [];
        this._codes = [];
        this._stopCodes = [];
        this._replaceCodes = [];
        this._isHoldWin = false;
        this._isHoldWin = isHoldWin;
        this.cells = cells;
    }
    get cells() {
        return this._cells;
    }
    set cells(value) {
        this._cells = value;
        this._codes = [];
        this._stopCodes = [];
        this._replaceCodes = [];
        if (!this._cells) {
            this._cells = [];
        }
        for (let i = 0; i < this._cells.length; i++) {
            const cell = this._cells[i];
            this._codes.push(cell.code);
            let replace = this.getReplaceCodes(cell.code, cell.mockCodes);
            this._stopCodes.push(replace.stopCode);
            this._replaceCodes.push(replace.replaceCodes);
        }
    }
    getReplaceCodes(code, mockCodes) {
        let stopCode = SpinResultsConst_1.default.NO_MOCK_CODE;
        let replaceCodes = [];
        let noReplaceCodesPosition = [];
        for (let i = 0; i < mockCodes.length; i++) {
            if (mockCodes[i] === SpinResultsConst_1.default.NO_MOCK_CODE) {
                noReplaceCodesPosition.push(i);
            }
            else {
                replaceCodes.push(mockCodes[i]);
            }
        }
        if (replaceCodes.length == 0) {
            return { stopCode: code, replaceCodes: mockCodes };
        }
        stopCode = replaceCodes.shift();
        replaceCodes.push(code);
        for (let i = 0; i < noReplaceCodesPosition.length; i++) {
            replaceCodes.splice(noReplaceCodesPosition[i], 0, SpinResultsConst_1.default.NO_MOCK_CODE);
        }
        return { stopCode: stopCode, replaceCodes: replaceCodes };
    }
    get codes() {
        return this._codes;
    }
    get isHoldWin() {
        return this._isHoldWin;
    }
    set isHoldWin(value) {
        this._isHoldWin = value;
    }
    get replaceCodes() {
        return this._replaceCodes;
    }
    get stopCodes() {
        return this._stopCodes;
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsCell_1.default),
    __metadata("design:type", Array)
], SpinResultsColumn.prototype, "_cells", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => SpinResultsCell_1.default),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsColumn.prototype, "cells", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinResultsColumn.prototype, "isHoldWin", null);
SpinResultsColumn = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Array, Boolean])
], SpinResultsColumn);
exports.default = SpinResultsColumn;

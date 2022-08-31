"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpinResultsSymbolEvent {
    constructor(code, assets, position, events) {
        this._events = [];
        this._code = code;
        this._assets = assets;
        this._postion = position;
        this._events = events;
        if (!this._events) {
            this._events = [];
        }
    }
    get code() {
        return this._code;
    }
    get assets() {
        return this._assets;
    }
    get position() {
        return this._postion;
    }
    get events() {
        return this._events;
    }
}
exports.default = SpinResultsSymbolEvent;

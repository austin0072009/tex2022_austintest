"use strict";
cc._RF.push(module, 'af9c9RXLWZDFZtoo0yGQ2a5', 'EventParameter');
// Script/modules/@mogafa/fairygui-component/lib/analytics/EventParameter.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var EventParameter = /** @class */ (function () {
    function EventParameter(name, value) {
        this._name = name;
        this._value = value;
    }
    Object.defineProperty(EventParameter.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventParameter.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        class_transformer_1.Expose()
    ], EventParameter.prototype, "name", null);
    __decorate([
        class_transformer_1.Expose()
    ], EventParameter.prototype, "value", null);
    EventParameter = __decorate([
        class_transformer_1.Exclude()
    ], EventParameter);
    return EventParameter;
}());
exports.default = EventParameter;

cc._RF.pop();
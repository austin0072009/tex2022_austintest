"use strict";
cc._RF.push(module, 'd2301/0sBNEiK6Cs1hAdbTY', 'FramefuncManager');
// Script/Common/FramefuncManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../BaseFrame/ViewBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FramefuncManager = /** @class */ (function (_super) {
    __extends(FramefuncManager, _super);
    function FramefuncManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FramefuncManager.Add = function (frameFunc) {
        this.frameFuncList.push(frameFunc);
    };
    FramefuncManager.update = function () {
        for (var i = 0; i < this.frameFuncList.length; i++) {
            if (this.frameFuncList[i]()) {
                this.frameFuncList.splice(i, 1);
                i--;
            }
            try {
                if (this.frameFuncList[i]()) {
                    this.frameFuncList.splice(i, 1);
                    i--;
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    };
    FramefuncManager = __decorate([
        ccclass
    ], FramefuncManager);
    return FramefuncManager;
}(ViewBase_1.default));
exports.default = FramefuncManager;

cc._RF.pop();
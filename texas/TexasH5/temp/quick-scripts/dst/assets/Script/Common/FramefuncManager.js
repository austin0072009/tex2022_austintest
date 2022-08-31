
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/FramefuncManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEZyYW1lZnVuY01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFRO0lBQXREOztJQW1DQyxDQUFDO0lBaENnQixvQkFBRyxHQUFqQixVQUFrQixTQUFrQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR2EsdUJBQU0sR0FBcEI7UUFFSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ2xEO1lBRUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzNCO2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxFQUFFLENBQUM7YUFDUDtZQUVELElBQ0E7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzNCO29CQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsQ0FBQyxFQUFFLENBQUM7aUJBQ1A7YUFDSjtZQUNELE9BQU8sR0FBRyxFQUNWO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FHSjtJQUNMLENBQUM7SUFsQ2dCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbUNuQztJQUFELHVCQUFDO0NBbkNGLEFBbUNFLENBbkM0QyxrQkFBUSxHQW1DcEQ7a0JBbkNtQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uL0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lZnVuY01hbmFnZXIgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZnJhbWVGdW5jTGlzdDogRnVuY3Rpb25bXTtcblxuICAgIHB1YmxpYyBzdGF0aWMgQWRkKGZyYW1lRnVuYzpGdW5jdGlvbil7XG4gICAgICAgIHRoaXMuZnJhbWVGdW5jTGlzdC5wdXNoKGZyYW1lRnVuYyk7XG4gICAgfVxuICAgIFxuXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGUoKTp2b2lkXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnJhbWVGdW5jTGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUZ1bmNMaXN0W2ldKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUZ1bmNMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVGdW5jTGlzdFtpXSgpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZUZ1bmNMaXN0LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgIH1cbiB9XG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/NumberOfKind/NumberOfKind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '233276gyYdIQZaFcPg36pID', 'NumberOfKind');
// Script/modules/@slotsmaster/ui-common/lib/NumberOfKind/NumberOfKind.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberOfKind = void 0;
var FguiComponentBase_1 = require("../../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var NumberOfKindSpine_1 = require("./NumberOfKindSpine");
var NumberOfKind = /** @class */ (function (_super) {
    __extends(NumberOfKind, _super);
    function NumberOfKind() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NumberOfKind.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberOfKind.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberOfKind.prototype, "componentName", {
        get: function () {
            return "NumberOfKind";
        },
        enumerable: false,
        configurable: true
    });
    NumberOfKind.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.makeFullScreen();
        this._numberOfKindNode = this.fguiComponent.getChild("numberOfKind").node;
        this._numberOfKindBgNode = this.fguiComponent.getChild("numberOfKindBg").node;
        this._numberOfKindSpine = new NumberOfKindSpine_1.default(this._numberOfKindNode);
        this._numberOfKindBgSpine = new NumberOfKindSpine_1.default(this._numberOfKindBgNode);
        this.addChild(this._numberOfKindSpine);
        this.addChild(this._numberOfKindBgSpine);
    };
    /**
     * 执行NUMBER OF KIND SPINE动画
     * @param kindNumber //* 类型数字 5 - 5 Of kind / 6 - 6 of kind
     */
    NumberOfKind.prototype.executeNumberOfKind = function (kindNumber) {
        if (kindNumber === 5 || kindNumber === 6) {
            this._numberOfKindBgSpine.kindCycleBg(kindNumber);
            this._numberOfKindSpine.kindCycle(kindNumber);
        }
    };
    return NumberOfKind;
}(FguiComponentBase_1.default));
exports.NumberOfKind = NumberOfKind;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxOdW1iZXJPZktpbmRcXE51bWJlck9mS2luZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0dBQTZGO0FBQzdGLHlEQUFvRDtBQUVwRDtJQUFrQyxnQ0FBaUI7SUFBbkQ7O0lBcUNBLENBQUM7SUEvQkcsc0JBQWMsNkNBQW1CO2FBQWpDO1lBQ0ksT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxxQ0FBVzthQUF6QjtZQUNJLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsdUNBQWE7YUFBM0I7WUFDSSxPQUFPLGNBQWMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVTLDRDQUFxQixHQUEvQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDBDQUFtQixHQUExQixVQUEyQixVQUFrQjtRQUN6QyxJQUFJLFVBQVUsS0FBSyxDQUFDLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXJDQSxBQXFDQyxDQXJDaUMsMkJBQWlCLEdBcUNsRDtBQXJDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEZndWlDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9AbW9nYWZhL2ZhaXJ5Z3VpLWNvbXBvbmVudC9saWIvRmd1aUNvbXBvbmVudEJhc2VcIjtcbmltcG9ydCBOdW1iZXJPZktpbmRTcGluZSBmcm9tIFwiLi9OdW1iZXJPZktpbmRTcGluZVwiO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyT2ZLaW5kIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgIHByaXZhdGUgX251bWJlck9mS2luZE5vZGU6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBfbnVtYmVyT2ZLaW5kU3BpbmU6IE51bWJlck9mS2luZFNwaW5lO1xuICAgIHByaXZhdGUgX251bWJlck9mS2luZEJnTm9kZTogY2MuTm9kZTtcbiAgICBwcml2YXRlIF9udW1iZXJPZktpbmRCZ1NwaW5lOiBOdW1iZXJPZktpbmRTcGluZTtcblxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHYW1lQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJOdW1iZXJPZktpbmRcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm1ha2VGdWxsU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuX251bWJlck9mS2luZE5vZGUgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJudW1iZXJPZktpbmRcIikubm9kZTtcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZLaW5kQmdOb2RlID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibnVtYmVyT2ZLaW5kQmdcIikubm9kZTtcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZLaW5kU3BpbmUgPSBuZXcgTnVtYmVyT2ZLaW5kU3BpbmUodGhpcy5fbnVtYmVyT2ZLaW5kTm9kZSk7XG4gICAgICAgIHRoaXMuX251bWJlck9mS2luZEJnU3BpbmUgPSBuZXcgTnVtYmVyT2ZLaW5kU3BpbmUodGhpcy5fbnVtYmVyT2ZLaW5kQmdOb2RlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9udW1iZXJPZktpbmRTcGluZSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbnVtYmVyT2ZLaW5kQmdTcGluZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5omn6KGMTlVNQkVSIE9GIEtJTkQgU1BJTkXliqjnlLtcbiAgICAgKiBAcGFyYW0ga2luZE51bWJlciAvLyog57G75Z6L5pWw5a2XIDUgLSA1IE9mIGtpbmQgLyA2IC0gNiBvZiBraW5kXG4gICAgICovXG4gICAgcHVibGljIGV4ZWN1dGVOdW1iZXJPZktpbmQoa2luZE51bWJlcjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChraW5kTnVtYmVyID09PSA1IHx8IGtpbmROdW1iZXIgPT09IDYpIHtcbiAgICAgICAgICAgIHRoaXMuX251bWJlck9mS2luZEJnU3BpbmUua2luZEN5Y2xlQmcoa2luZE51bWJlcik7XG4gICAgICAgICAgICB0aGlzLl9udW1iZXJPZktpbmRTcGluZS5raW5kQ3ljbGUoa2luZE51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/analytics/EmptyLogEventReporter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8a0drlWkpOxYpRAIOjnLh7', 'EmptyLogEventReporter');
// Script/modules/@mogafa/fairygui-component/lib/analytics/EmptyLogEventReporter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyLogEventReporter = /** @class */ (function () {
    function EmptyLogEventReporter() {
    }
    Object.defineProperty(EmptyLogEventReporter, "instance", {
        get: function () {
            if (EmptyLogEventReporter._instance == null) {
                EmptyLogEventReporter._instance = new EmptyLogEventReporter();
            }
            return EmptyLogEventReporter._instance;
        },
        enumerable: false,
        configurable: true
    });
    EmptyLogEventReporter.prototype.initialize = function () { };
    EmptyLogEventReporter.prototype.logEvent = function (name, parameterName, parameterValue) {
        var rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            rest[_i - 3] = arguments[_i];
        }
    };
    return EmptyLogEventReporter;
}());
exports.default = EmptyLogEventReporter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcYW5hbHl0aWNzXFxFbXB0eUxvZ0V2ZW50UmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBY0EsQ0FBQztJQVpHLHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0ksSUFBSSxxQkFBcUIsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN6QyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO2FBQ2pFO1lBQ0QsT0FBTyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFDRCwwQ0FBVSxHQUFWLGNBQW9CLENBQUM7SUFLckIsd0NBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxhQUFtQixFQUFFLGNBQW9CO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7SUFBRyxDQUFDO0lBQ3JGLDRCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRSZXBvcnRlciBmcm9tIFwiLi9FdmVudFJlcG9ydGVyXCI7XG5pbXBvcnQgRXZlbnRQYXJhbWV0ZXIgZnJvbSBcIi4vRXZlbnRQYXJhbWV0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wdHlMb2dFdmVudFJlcG9ydGVyIGltcGxlbWVudHMgRXZlbnRSZXBvcnRlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBFdmVudFJlcG9ydGVyO1xuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogRXZlbnRSZXBvcnRlciB7XG4gICAgICAgIGlmIChFbXB0eUxvZ0V2ZW50UmVwb3J0ZXIuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIEVtcHR5TG9nRXZlbnRSZXBvcnRlci5faW5zdGFuY2UgPSBuZXcgRW1wdHlMb2dFdmVudFJlcG9ydGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVtcHR5TG9nRXZlbnRSZXBvcnRlci5faW5zdGFuY2U7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKTogdm9pZCB7fVxuICAgIGxvZ0V2ZW50KG5hbWU6IGFueSk6IHZvaWQ7XG4gICAgbG9nRXZlbnQobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJOYW1lOiBzdHJpbmcsIHBhcmFtZXRlclZhbHVlOiBudW1iZXIpOiB2b2lkO1xuICAgIGxvZ0V2ZW50KG5hbWU6IHN0cmluZywgcGFyYW1ldGVyTmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgICBsb2dFdmVudChuYW1lOiBzdHJpbmcsIC4uLnBhcmFtZXRlcnM6IEV2ZW50UGFyYW1ldGVyW10pOiB2b2lkO1xuICAgIGxvZ0V2ZW50KG5hbWU6IGFueSwgcGFyYW1ldGVyTmFtZT86IGFueSwgcGFyYW1ldGVyVmFsdWU/OiBhbnksIC4uLnJlc3Q6IGFueVtdKSB7fVxufVxuIl19
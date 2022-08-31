
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/analytics/mogafa/mogafaReportableObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45d557o0hpN2qrVevdFh476', 'mogafaReportableObject');
// Script/modules/@mogafa/fairygui-component/lib/analytics/mogafa/mogafaReportableObject.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventParameter_1 = require("../EventParameter");
var MogafaReportableObject = /** @class */ (function () {
    function MogafaReportableObject(eventName, trigger, subGameId, subGameVersion) {
        this.extraParameters = [];
        this.timestamp = new Date().getTime();
        this.eventName = eventName;
        this.trigger = trigger;
        this.subGameId = subGameId;
        this.subGameVersion = subGameVersion;
    }
    MogafaReportableObject.prototype.addEventParameters = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        for (var i = 0; i < parameters.length; i++) {
            this.extraParameters.push(parameters[i]);
        }
    };
    MogafaReportableObject.prototype.toEventParameters = function () {
        var parameters = [];
        for (var propertyName in this) {
            var property = this[propertyName];
            if (typeof property == "function" || propertyName == "eventName") {
                continue;
            }
            if (Array.isArray(property)) {
                parameters.push(new EventParameter_1.default(propertyName, JSON.stringify(property)));
            }
            else {
                parameters.push(new EventParameter_1.default(propertyName, property));
            }
        }
        var parameter = new Map();
        parameter.set(this.eventName, parameters);
        return parameter;
    };
    return MogafaReportableObject;
}());
exports.default = MogafaReportableObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcYW5hbHl0aWNzXFxtb2dhZmFcXG1vZ2FmYVJlcG9ydGFibGVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBK0M7QUFHL0M7SUFRSSxnQ0FBWSxTQUFpQixFQUFFLE9BQWUsRUFBRSxTQUFrQixFQUFFLGNBQXVCO1FBQ3ZGLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsbURBQWtCLEdBQWxCO1FBQW1CLG9CQUErQjthQUEvQixVQUErQixFQUEvQixxQkFBK0IsRUFBL0IsSUFBK0I7WUFBL0IsK0JBQStCOztRQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFDRCxrREFBaUIsR0FBakI7UUFDSSxJQUFJLFVBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQzNCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsQyxJQUFJLE9BQU8sUUFBUSxJQUFJLFVBQVUsSUFBSSxZQUFZLElBQUksV0FBVyxFQUFFO2dCQUM5RCxTQUFTO2FBQ1o7WUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSx3QkFBYyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvRTtpQkFBTTtnQkFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQWMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUMvRDtTQUNKO1FBQ0QsSUFBSSxTQUFTLEdBQWtDLElBQUksR0FBRyxFQUE0QixDQUFDO1FBQ25GLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxQyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcG9ydGFibGVPYmplY3QgZnJvbSBcIi4uL3JlcG9ydGFibGVPYmplY3RcIjtcbmltcG9ydCBFdmVudFBhcmFtZXRlciBmcm9tIFwiLi4vRXZlbnRQYXJhbWV0ZXJcIjtcbmltcG9ydCBBc3NldCBmcm9tIFwiLi9hc3NldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2dhZmFSZXBvcnRhYmxlT2JqZWN0IGltcGxlbWVudHMgUmVwb3J0YWJsZU9iamVjdCB7XG4gICAgZXZlbnROYW1lOiBzdHJpbmc7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG4gICAgdHJpZ2dlcjogc3RyaW5nO1xuICAgIHN1YkdhbWVJZDogc3RyaW5nO1xuICAgIHN1YkdhbWVWZXJzaW9uOiBzdHJpbmc7XG4gICAgZXh0cmFQYXJhbWV0ZXJzOiBFdmVudFBhcmFtZXRlcltdO1xuICAgIGFzc2V0czogQXNzZXRbXTtcbiAgICBjb25zdHJ1Y3RvcihldmVudE5hbWU6IHN0cmluZywgdHJpZ2dlcjogc3RyaW5nLCBzdWJHYW1lSWQ/OiBzdHJpbmcsIHN1YkdhbWVWZXJzaW9uPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXh0cmFQYXJhbWV0ZXJzID0gW107XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgICAgICB0aGlzLnN1YkdhbWVJZCA9IHN1YkdhbWVJZDtcbiAgICAgICAgdGhpcy5zdWJHYW1lVmVyc2lvbiA9IHN1YkdhbWVWZXJzaW9uO1xuICAgIH1cbiAgICBhZGRFdmVudFBhcmFtZXRlcnMoLi4ucGFyYW1ldGVyczogRXZlbnRQYXJhbWV0ZXJbXSk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFQYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9FdmVudFBhcmFtZXRlcnMoKTogTWFwPHN0cmluZywgRXZlbnRQYXJhbWV0ZXJbXT4ge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogRXZlbnRQYXJhbWV0ZXJbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PSBcImZ1bmN0aW9uXCIgfHwgcHJvcGVydHlOYW1lID09IFwiZXZlbnROYW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMucHVzaChuZXcgRXZlbnRQYXJhbWV0ZXIocHJvcGVydHlOYW1lLCBKU09OLnN0cmluZ2lmeShwcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5wdXNoKG5ldyBFdmVudFBhcmFtZXRlcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcmFtZXRlcjogTWFwPHN0cmluZywgRXZlbnRQYXJhbWV0ZXJbXT4gPSBuZXcgTWFwPHN0cmluZywgRXZlbnRQYXJhbWV0ZXJbXT4oKTtcbiAgICAgICAgcGFyYW1ldGVyLnNldCh0aGlzLmV2ZW50TmFtZSwgcGFyYW1ldGVycyk7XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgfVxufVxuIl19
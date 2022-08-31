
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/analytics/mogafa/mogafaCommonEventParameter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'edb108/JQ5Ds6vKi9bfy4Sr', 'mogafaCommonEventParameter');
// Script/modules/@mogafa/fairygui-component/lib/analytics/mogafa/mogafaCommonEventParameter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventParameter_1 = require("../EventParameter");
var MogafaCommonEventParameter = /** @class */ (function () {
    function MogafaCommonEventParameter(appId, requestId, userId, os, osVersion, deviceModel, deviceLanguage, deviceTimezone, clientVersion, network, natural, abGroup, appsflyerId, adId) {
        this.appId = appId;
        this.requestId = requestId;
        this.userId = userId;
        this.os = os;
        this.osVersion = osVersion;
        this.deviceModel = deviceModel;
        this.deviceLanguage = deviceLanguage;
        this.deviceTimezone = deviceTimezone;
        this.clientVersion = clientVersion;
        this.network = network;
        this.natural = natural;
        this.abGroup = abGroup;
        if (!this.abGroup) {
            this.abGroup = [];
        }
        this.appsflyerId = appsflyerId;
        this.adId = adId;
        this.extraParameters = [];
        this.events = [];
    }
    MogafaCommonEventParameter.prototype.addEventParameters = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        for (var i = 0; i < parameters.length; i++) {
            this.extraParameters.push(parameters[i]);
        }
    };
    MogafaCommonEventParameter.prototype.addAbGroupParameters = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        for (var i = 0; i < parameters.length; i++) {
            this.abGroup.push(parameters[i]);
        }
    };
    MogafaCommonEventParameter.prototype.addEvent = function (event) {
        if (event) {
            this.events.push(event);
        }
    };
    MogafaCommonEventParameter.prototype.clearEvents = function () {
        this.events = [];
    };
    MogafaCommonEventParameter.prototype.toEventParameters = function () {
        var parameterNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameterNames[_i] = arguments[_i];
        }
        var parameters = [];
        for (var propertyName in this) {
            var property = this[propertyName];
            if (typeof property == "function" || parameterNames.indexOf(propertyName) === -1) {
                continue;
            }
            if (Array.isArray(property)) {
                parameters.push(new EventParameter_1.default(propertyName, JSON.stringify(property)));
            }
            else {
                parameters.push(new EventParameter_1.default(propertyName, property));
            }
        }
        return parameters;
    };
    return MogafaCommonEventParameter;
}());
exports.default = MogafaCommonEventParameter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcYW5hbHl0aWNzXFxtb2dhZmFcXG1vZ2FmYUNvbW1vbkV2ZW50UGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsb0RBQStDO0FBRS9DO0lBaUJJLG9DQUNJLEtBQWEsRUFDYixTQUFpQixFQUNqQixNQUFjLEVBQ2QsRUFBVSxFQUNWLFNBQWlCLEVBQ2pCLFdBQW1CLEVBQ25CLGNBQXNCLEVBQ3RCLGNBQXNCLEVBQ3RCLGFBQXFCLEVBQ3JCLE9BQWUsRUFDZixPQUFnQixFQUNoQixPQUF5QixFQUN6QixXQUFtQixFQUNuQixJQUFZO1FBRVosSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELHVEQUFrQixHQUFsQjtRQUFtQixvQkFBK0I7YUFBL0IsVUFBK0IsRUFBL0IscUJBQStCLEVBQS9CLElBQStCO1lBQS9CLCtCQUErQjs7UUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBQ0QseURBQW9CLEdBQXBCO1FBQXFCLG9CQUErQjthQUEvQixVQUErQixFQUEvQixxQkFBK0IsRUFBL0IsSUFBK0I7WUFBL0IsK0JBQStCOztRQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDRCw2Q0FBUSxHQUFSLFVBQVMsS0FBdUI7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFDRCxnREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELHNEQUFpQixHQUFqQjtRQUFrQix3QkFBMkI7YUFBM0IsVUFBMkIsRUFBM0IscUJBQTJCLEVBQTNCLElBQTJCO1lBQTNCLG1DQUEyQjs7UUFDekMsSUFBSSxVQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxLQUFLLElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtZQUMzQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEMsSUFBSSxPQUFPLFFBQVEsSUFBSSxVQUFVLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDOUUsU0FBUzthQUNaO1lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQWMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0U7aUJBQU07Z0JBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHdCQUFjLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7U0FDSjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxpQ0FBQztBQUFELENBdEZBLEFBc0ZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbW9uRXZlbnRQYXJhbWV0ZXIgZnJvbSBcIi4uL2NvbW1vbkV2ZW50UGFyYW1ldGVyXCI7XG5pbXBvcnQgUmVwb3J0YWJsZU9iamVjdCBmcm9tIFwiLi4vcmVwb3J0YWJsZU9iamVjdFwiO1xuaW1wb3J0IEV2ZW50UGFyYW1ldGVyIGZyb20gXCIuLi9FdmVudFBhcmFtZXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2dhZmFDb21tb25FdmVudFBhcmFtZXRlciBpbXBsZW1lbnRzIENvbW1vbkV2ZW50UGFyYW1ldGVyIHtcbiAgICBhcHBJZDogc3RyaW5nO1xuICAgIGFwcHNmbHllcklkOiBzdHJpbmc7XG4gICAgYWRJZDogc3RyaW5nO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGRldmljZU1vZGVsOiBzdHJpbmc7XG4gICAgcmVxdWVzdElkOiBzdHJpbmc7XG4gICAgb3M6IHN0cmluZztcbiAgICBvc1ZlcnNpb246IHN0cmluZztcbiAgICBkZXZpY2VUaW1lem9uZTogc3RyaW5nO1xuICAgIGRldmljZUxhbmd1YWdlOiBzdHJpbmc7XG4gICAgY2xpZW50VmVyc2lvbjogc3RyaW5nO1xuICAgIG5ldHdvcms6IHN0cmluZztcbiAgICBuYXR1cmFsOiBib29sZWFuO1xuICAgIGV2ZW50czogUmVwb3J0YWJsZU9iamVjdFtdO1xuICAgIGFiR3JvdXA6IEV2ZW50UGFyYW1ldGVyW107XG4gICAgZXh0cmFQYXJhbWV0ZXJzOiBFdmVudFBhcmFtZXRlcltdO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBhcHBJZDogc3RyaW5nLFxuICAgICAgICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgICAgICAgdXNlcklkOiBzdHJpbmcsXG4gICAgICAgIG9zOiBzdHJpbmcsXG4gICAgICAgIG9zVmVyc2lvbjogc3RyaW5nLFxuICAgICAgICBkZXZpY2VNb2RlbDogc3RyaW5nLFxuICAgICAgICBkZXZpY2VMYW5ndWFnZTogc3RyaW5nLFxuICAgICAgICBkZXZpY2VUaW1lem9uZTogc3RyaW5nLFxuICAgICAgICBjbGllbnRWZXJzaW9uOiBzdHJpbmcsXG4gICAgICAgIG5ldHdvcms6IHN0cmluZyxcbiAgICAgICAgbmF0dXJhbDogYm9vbGVhbixcbiAgICAgICAgYWJHcm91cDogRXZlbnRQYXJhbWV0ZXJbXSxcbiAgICAgICAgYXBwc2ZseWVySWQ6IHN0cmluZyxcbiAgICAgICAgYWRJZDogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0SWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLm9zID0gb3M7XG4gICAgICAgIHRoaXMub3NWZXJzaW9uID0gb3NWZXJzaW9uO1xuICAgICAgICB0aGlzLmRldmljZU1vZGVsID0gZGV2aWNlTW9kZWw7XG4gICAgICAgIHRoaXMuZGV2aWNlTGFuZ3VhZ2UgPSBkZXZpY2VMYW5ndWFnZTtcbiAgICAgICAgdGhpcy5kZXZpY2VUaW1lem9uZSA9IGRldmljZVRpbWV6b25lO1xuICAgICAgICB0aGlzLmNsaWVudFZlcnNpb24gPSBjbGllbnRWZXJzaW9uO1xuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICB0aGlzLm5hdHVyYWwgPSBuYXR1cmFsO1xuICAgICAgICB0aGlzLmFiR3JvdXAgPSBhYkdyb3VwO1xuICAgICAgICBpZiAoIXRoaXMuYWJHcm91cCkge1xuICAgICAgICAgICAgdGhpcy5hYkdyb3VwID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBzZmx5ZXJJZCA9IGFwcHNmbHllcklkO1xuICAgICAgICB0aGlzLmFkSWQgPSBhZElkO1xuICAgICAgICB0aGlzLmV4dHJhUGFyYW1ldGVycyA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIH1cbiAgICBhZGRFdmVudFBhcmFtZXRlcnMoLi4ucGFyYW1ldGVyczogRXZlbnRQYXJhbWV0ZXJbXSk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFQYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQWJHcm91cFBhcmFtZXRlcnMoLi4ucGFyYW1ldGVyczogRXZlbnRQYXJhbWV0ZXJbXSk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWJHcm91cC5wdXNoKHBhcmFtZXRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50KGV2ZW50OiBSZXBvcnRhYmxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgfVxuICAgIHRvRXZlbnRQYXJhbWV0ZXJzKC4uLnBhcmFtZXRlck5hbWVzOiBzdHJpbmdbXSk6IEV2ZW50UGFyYW1ldGVyW10ge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogRXZlbnRQYXJhbWV0ZXJbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PSBcImZ1bmN0aW9uXCIgfHwgcGFyYW1ldGVyTmFtZXMuaW5kZXhPZihwcm9wZXJ0eU5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5wdXNoKG5ldyBFdmVudFBhcmFtZXRlcihwcm9wZXJ0eU5hbWUsIEpTT04uc3RyaW5naWZ5KHByb3BlcnR5KSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnB1c2gobmV3IEV2ZW50UGFyYW1ldGVyKHByb3BlcnR5TmFtZSwgcHJvcGVydHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgICB9XG59XG4iXX0=
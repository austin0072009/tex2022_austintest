"use strict";
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
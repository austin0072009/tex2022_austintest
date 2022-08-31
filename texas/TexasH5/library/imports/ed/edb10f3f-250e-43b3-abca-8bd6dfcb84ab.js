"use strict";
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
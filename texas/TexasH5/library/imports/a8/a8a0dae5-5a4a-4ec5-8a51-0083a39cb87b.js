"use strict";
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/analytics/EventReporter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2824cUahE5Fmp4AXRSlZoJ9', 'EventReporter');
// Script/modules/@mogafa/fairygui-component/lib/analytics/EventReporter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReporterIocContainerName = void 0;
exports.EventReporterIocContainerName = "LogEventReporter";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcYW5hbHl0aWNzXFxFdmVudFJlcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdhLFFBQUEsNkJBQTZCLEdBQVcsa0JBQWtCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRQYXJhbWV0ZXIgZnJvbSBcIi4vRXZlbnRQYXJhbWV0ZXJcIjtcbmltcG9ydCBDb21tb25FdmVudFBhcmFtZXRlciBmcm9tIFwiLi9jb21tb25FdmVudFBhcmFtZXRlclwiO1xuaW1wb3J0IFJlcG9ydGFibGVPYmplY3QgZnJvbSBcIi4vcmVwb3J0YWJsZU9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IEV2ZW50UmVwb3J0ZXJJb2NDb250YWluZXJOYW1lOiBzdHJpbmcgPSBcIkxvZ0V2ZW50UmVwb3J0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBFdmVudFJlcG9ydGVyIHtcbiAgICBpbml0aWFsaXplKGNvbW1vblBhcmFtZXRlcjogQ29tbW9uRXZlbnRQYXJhbWV0ZXIpOiB2b2lkO1xuICAgIGxvZ0V2ZW50KHJlcG9ydGFibGVPYmplY3Q6IFJlcG9ydGFibGVPYmplY3QpOiB2b2lkO1xuICAgIGxvZ0V2ZW50KG5hbWU6IHN0cmluZyk6IHZvaWQ7XG4gICAgbG9nRXZlbnQobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJOYW1lOiBzdHJpbmcsIHBhcmFtZXRlclZhbHVlOiBudW1iZXIpOiB2b2lkO1xuICAgIGxvZ0V2ZW50KG5hbWU6IHN0cmluZywgcGFyYW1ldGVyTmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgICBsb2dFdmVudChuYW1lOiBzdHJpbmcsIC4uLnBhcmFtZXRlcnM6IEV2ZW50UGFyYW1ldGVyW10pOiB2b2lkO1xufVxuIl19
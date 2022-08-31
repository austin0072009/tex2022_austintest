
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsGameStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb2a7zjQ05DfJQCY5NbLj9k', 'SpinResultsGameStatus');
// Script/modules/spin-result/SpinResultsGameStatus.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 关卡状态
 *
 * @export
 * @enum {number}
 */

var SpinResultsGameStatus;

(function (SpinResultsGameStatus) {
  /**
   * 正常
   */
  SpinResultsGameStatus[SpinResultsGameStatus["Normal"] = 0] = "Normal";
  /**
   * 未开放
   */

  SpinResultsGameStatus[SpinResultsGameStatus["NotOpen"] = 1] = "NotOpen";
  /**
   * 禁用
   */

  SpinResultsGameStatus[SpinResultsGameStatus["Disabled"] = 2] = "Disabled";
})(SpinResultsGameStatus = exports.SpinResultsGameStatus || (exports.SpinResultsGameStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNHYW1lU3RhdHVzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiU3BpblJlc3VsdHNHYW1lU3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQyxxQkFBSjs7QUFDQSxDQUFDLFVBQVVBLHFCQUFWLEVBQWlDO0FBQzlCO0FBQ0o7QUFDQTtBQUNJQSxFQUFBQSxxQkFBcUIsQ0FBQ0EscUJBQXFCLENBQUMsUUFBRCxDQUFyQixHQUFrQyxDQUFuQyxDQUFyQixHQUE2RCxRQUE3RDtBQUNBO0FBQ0o7QUFDQTs7QUFDSUEsRUFBQUEscUJBQXFCLENBQUNBLHFCQUFxQixDQUFDLFNBQUQsQ0FBckIsR0FBbUMsQ0FBcEMsQ0FBckIsR0FBOEQsU0FBOUQ7QUFDQTtBQUNKO0FBQ0E7O0FBQ0lBLEVBQUFBLHFCQUFxQixDQUFDQSxxQkFBcUIsQ0FBQyxVQUFELENBQXJCLEdBQW9DLENBQXJDLENBQXJCLEdBQStELFVBQS9EO0FBQ0gsQ0FiRCxFQWFHQSxxQkFBcUIsR0FBR0YsT0FBTyxDQUFDRSxxQkFBUixLQUFrQ0YsT0FBTyxDQUFDRSxxQkFBUixHQUFnQyxFQUFsRSxDQWIzQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIOWFs+WNoeeKtuaAgVxuICpcbiAqIEBleHBvcnRcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbnZhciBTcGluUmVzdWx0c0dhbWVTdGF0dXM7XG4oZnVuY3Rpb24gKFNwaW5SZXN1bHRzR2FtZVN0YXR1cykge1xuICAgIC8qKlxuICAgICAqIOato+W4uFxuICAgICAqL1xuICAgIFNwaW5SZXN1bHRzR2FtZVN0YXR1c1tTcGluUmVzdWx0c0dhbWVTdGF0dXNbXCJOb3JtYWxcIl0gPSAwXSA9IFwiTm9ybWFsXCI7XG4gICAgLyoqXG4gICAgICog5pyq5byA5pS+XG4gICAgICovXG4gICAgU3BpblJlc3VsdHNHYW1lU3RhdHVzW1NwaW5SZXN1bHRzR2FtZVN0YXR1c1tcIk5vdE9wZW5cIl0gPSAxXSA9IFwiTm90T3BlblwiO1xuICAgIC8qKlxuICAgICAqIOemgeeUqFxuICAgICAqL1xuICAgIFNwaW5SZXN1bHRzR2FtZVN0YXR1c1tTcGluUmVzdWx0c0dhbWVTdGF0dXNbXCJEaXNhYmxlZFwiXSA9IDJdID0gXCJEaXNhYmxlZFwiO1xufSkoU3BpblJlc3VsdHNHYW1lU3RhdHVzID0gZXhwb3J0cy5TcGluUmVzdWx0c0dhbWVTdGF0dXMgfHwgKGV4cG9ydHMuU3BpblJlc3VsdHNHYW1lU3RhdHVzID0ge30pKTtcbiJdfQ==
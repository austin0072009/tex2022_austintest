
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsGameMode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcb25QrUZBKdaQRehRLT6YY', 'SpinResultsGameMode');
// Script/modules/spin-result/SpinResultsGameMode.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 游戏模式
 */

var SpinResultsGameMode;

(function (SpinResultsGameMode) {
  /**
   * 普通模式
   */
  SpinResultsGameMode[SpinResultsGameMode["Normal"] = 0] = "Normal";
  /**
   * freespin模式
   */

  SpinResultsGameMode[SpinResultsGameMode["FreeSpin"] = 1] = "FreeSpin";
  /**
   * respin模式
   */

  SpinResultsGameMode[SpinResultsGameMode["Respin"] = 2] = "Respin";
  /**
   * bonus模式
   */

  SpinResultsGameMode[SpinResultsGameMode["Bonus"] = 3] = "Bonus";
  /**
  * OneMore模式
  */

  SpinResultsGameMode[SpinResultsGameMode["Bonus"] = 4] = "OneMore";
})(SpinResultsGameMode = exports.SpinResultsGameMode || (exports.SpinResultsGameMode = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNHYW1lTW9kZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNwaW5SZXN1bHRzR2FtZU1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlDLG1CQUFKOztBQUNBLENBQUMsVUFBVUEsbUJBQVYsRUFBK0I7QUFDNUI7QUFDSjtBQUNBO0FBQ0lBLEVBQUFBLG1CQUFtQixDQUFDQSxtQkFBbUIsQ0FBQyxRQUFELENBQW5CLEdBQWdDLENBQWpDLENBQW5CLEdBQXlELFFBQXpEO0FBQ0E7QUFDSjtBQUNBOztBQUNJQSxFQUFBQSxtQkFBbUIsQ0FBQ0EsbUJBQW1CLENBQUMsVUFBRCxDQUFuQixHQUFrQyxDQUFuQyxDQUFuQixHQUEyRCxVQUEzRDtBQUNBO0FBQ0o7QUFDQTs7QUFDSUEsRUFBQUEsbUJBQW1CLENBQUNBLG1CQUFtQixDQUFDLFFBQUQsQ0FBbkIsR0FBZ0MsQ0FBakMsQ0FBbkIsR0FBeUQsUUFBekQ7QUFDQTtBQUNKO0FBQ0E7O0FBQ0lBLEVBQUFBLG1CQUFtQixDQUFDQSxtQkFBbUIsQ0FBQyxPQUFELENBQW5CLEdBQStCLENBQWhDLENBQW5CLEdBQXdELE9BQXhEO0FBQ0M7QUFDTDtBQUNBOztBQUNJQSxFQUFBQSxtQkFBbUIsQ0FBQ0EsbUJBQW1CLENBQUMsT0FBRCxDQUFuQixHQUErQixDQUFoQyxDQUFuQixHQUF3RCxTQUF4RDtBQUNILENBckJELEVBcUJHQSxtQkFBbUIsR0FBR0YsT0FBTyxDQUFDRSxtQkFBUixLQUFnQ0YsT0FBTyxDQUFDRSxtQkFBUixHQUE4QixFQUE5RCxDQXJCekIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiDmuLjmiI/mqKHlvI9cbiAqL1xudmFyIFNwaW5SZXN1bHRzR2FtZU1vZGU7XG4oZnVuY3Rpb24gKFNwaW5SZXN1bHRzR2FtZU1vZGUpIHtcbiAgICAvKipcbiAgICAgKiDmma7pgJrmqKHlvI9cbiAgICAgKi9cbiAgICBTcGluUmVzdWx0c0dhbWVNb2RlW1NwaW5SZXN1bHRzR2FtZU1vZGVbXCJOb3JtYWxcIl0gPSAwXSA9IFwiTm9ybWFsXCI7XG4gICAgLyoqXG4gICAgICogZnJlZXNwaW7mqKHlvI9cbiAgICAgKi9cbiAgICBTcGluUmVzdWx0c0dhbWVNb2RlW1NwaW5SZXN1bHRzR2FtZU1vZGVbXCJGcmVlU3BpblwiXSA9IDFdID0gXCJGcmVlU3BpblwiO1xuICAgIC8qKlxuICAgICAqIHJlc3BpbuaooeW8j1xuICAgICAqL1xuICAgIFNwaW5SZXN1bHRzR2FtZU1vZGVbU3BpblJlc3VsdHNHYW1lTW9kZVtcIlJlc3BpblwiXSA9IDJdID0gXCJSZXNwaW5cIjtcbiAgICAvKipcbiAgICAgKiBib251c+aooeW8j1xuICAgICAqL1xuICAgIFNwaW5SZXN1bHRzR2FtZU1vZGVbU3BpblJlc3VsdHNHYW1lTW9kZVtcIkJvbnVzXCJdID0gM10gPSBcIkJvbnVzXCI7XG4gICAgIC8qKlxuICAgICAqIE9uZU1vcmXmqKHlvI9cbiAgICAgKi9cbiAgICBTcGluUmVzdWx0c0dhbWVNb2RlW1NwaW5SZXN1bHRzR2FtZU1vZGVbXCJCb251c1wiXSA9IDRdID0gXCJPbmVNb3JlXCI7XG59KShTcGluUmVzdWx0c0dhbWVNb2RlID0gZXhwb3J0cy5TcGluUmVzdWx0c0dhbWVNb2RlIHx8IChleHBvcnRzLlNwaW5SZXN1bHRzR2FtZU1vZGUgPSB7fSkpO1xuIl19
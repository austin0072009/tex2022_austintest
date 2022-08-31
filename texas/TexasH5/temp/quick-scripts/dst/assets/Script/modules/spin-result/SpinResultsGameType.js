
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsGameType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b55e4c04b9NoKpbygmXULir', 'SpinResultsGameType');
// Script/modules/spin-result/SpinResultsGameType.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SpinResultsGameType;

(function (SpinResultsGameType) {
  SpinResultsGameType[SpinResultsGameType["Normal"] = 0] = "Normal";
  SpinResultsGameType[SpinResultsGameType["FreeSpin"] = 1] = "FreeSpin";
  SpinResultsGameType[SpinResultsGameType["Respin"] = 2] = "Respin";
  SpinResultsGameType[SpinResultsGameType["Bonus"] = 3] = "Bonus";
})(SpinResultsGameType = exports.SpinResultsGameType || (exports.SpinResultsGameType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNHYW1lVHlwZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNwaW5SZXN1bHRzR2FtZVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0EsSUFBSUMsbUJBQUo7O0FBQ0EsQ0FBQyxVQUFVQSxtQkFBVixFQUErQjtBQUM1QkEsRUFBQUEsbUJBQW1CLENBQUNBLG1CQUFtQixDQUFDLFFBQUQsQ0FBbkIsR0FBZ0MsQ0FBakMsQ0FBbkIsR0FBeUQsUUFBekQ7QUFDQUEsRUFBQUEsbUJBQW1CLENBQUNBLG1CQUFtQixDQUFDLFVBQUQsQ0FBbkIsR0FBa0MsQ0FBbkMsQ0FBbkIsR0FBMkQsVUFBM0Q7QUFDQUEsRUFBQUEsbUJBQW1CLENBQUNBLG1CQUFtQixDQUFDLFFBQUQsQ0FBbkIsR0FBZ0MsQ0FBakMsQ0FBbkIsR0FBeUQsUUFBekQ7QUFDQUEsRUFBQUEsbUJBQW1CLENBQUNBLG1CQUFtQixDQUFDLE9BQUQsQ0FBbkIsR0FBK0IsQ0FBaEMsQ0FBbkIsR0FBd0QsT0FBeEQ7QUFDSCxDQUxELEVBS0dBLG1CQUFtQixHQUFHRixPQUFPLENBQUNFLG1CQUFSLEtBQWdDRixPQUFPLENBQUNFLG1CQUFSLEdBQThCLEVBQTlELENBTHpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTcGluUmVzdWx0c0dhbWVUeXBlO1xuKGZ1bmN0aW9uIChTcGluUmVzdWx0c0dhbWVUeXBlKSB7XG4gICAgU3BpblJlc3VsdHNHYW1lVHlwZVtTcGluUmVzdWx0c0dhbWVUeXBlW1wiTm9ybWFsXCJdID0gMF0gPSBcIk5vcm1hbFwiO1xuICAgIFNwaW5SZXN1bHRzR2FtZVR5cGVbU3BpblJlc3VsdHNHYW1lVHlwZVtcIkZyZWVTcGluXCJdID0gMV0gPSBcIkZyZWVTcGluXCI7XG4gICAgU3BpblJlc3VsdHNHYW1lVHlwZVtTcGluUmVzdWx0c0dhbWVUeXBlW1wiUmVzcGluXCJdID0gMl0gPSBcIlJlc3BpblwiO1xuICAgIFNwaW5SZXN1bHRzR2FtZVR5cGVbU3BpblJlc3VsdHNHYW1lVHlwZVtcIkJvbnVzXCJdID0gM10gPSBcIkJvbnVzXCI7XG59KShTcGluUmVzdWx0c0dhbWVUeXBlID0gZXhwb3J0cy5TcGluUmVzdWx0c0dhbWVUeXBlIHx8IChleHBvcnRzLlNwaW5SZXN1bHRzR2FtZVR5cGUgPSB7fSkpO1xuIl19
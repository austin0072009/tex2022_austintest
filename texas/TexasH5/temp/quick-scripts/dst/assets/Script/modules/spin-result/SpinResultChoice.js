
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultChoice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33e33DXXE5BmImEebVBCn+C', 'SpinResultChoice');
// Script/modules/spin-result/SpinResultChoice.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require("reflect-metadata");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var class_transformer_1 = require("class-transformer");

var SpinResultChoice = /*#__PURE__*/function () {
  function SpinResultChoice(questions) {
    this._questions = [];
    this._answer = 0;
    this.questions = questions;
  }

  _createClass(SpinResultChoice, [{
    key: "questions",
    get: function get() {
      return this._questions;
    },
    set: function set(value) {
      this._questions = value;

      if (!this._questions) {
        this._questions = [];
      }
    }
  }, {
    key: "answer",
    get: function get() {
      return this._answer;
    },
    set: function set(value) {
      this._answer = value;
    }
  }]);

  return SpinResultChoice;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultChoice.prototype, "questions", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultChoice.prototype, "answer", null);

SpinResultChoice = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Array])], SpinResultChoice);
exports["default"] = SpinResultChoice;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdENob2ljZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiX19tZXRhZGF0YSIsImsiLCJ2IiwibWV0YWRhdGEiLCJleHBvcnRzIiwidmFsdWUiLCJjbGFzc190cmFuc2Zvcm1lcl8xIiwiU3BpblJlc3VsdENob2ljZSIsInF1ZXN0aW9ucyIsIl9xdWVzdGlvbnMiLCJfYW5zd2VyIiwiRXhwb3NlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJOdW1iZXIiLCJFeGNsdWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0FBLE9BQU8sQ0FBQyxrQkFBRCxDQUFQOztBQUNBLElBQUlDLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsQ0FBQyxHQUFH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UyxPQUFwQixFQUQwQixFQUUxQmYsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNZLEtBQUQsQ0FBdEIsQ0FGZ0IsQ0FBRCxFQUcxQkwsZ0JBSDBCLENBQTdCO0FBSUFILE9BQU8sV0FBUCxHQUFrQkcsZ0JBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzEgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5sZXQgU3BpblJlc3VsdENob2ljZSA9IGNsYXNzIFNwaW5SZXN1bHRDaG9pY2Uge1xuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9ucykge1xuICAgICAgICB0aGlzLl9xdWVzdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5fYW5zd2VyID0gMDtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvbnM7XG4gICAgfVxuICAgIGdldCBxdWVzdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbnM7XG4gICAgfVxuICAgIHNldCBxdWVzdGlvbnModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcXVlc3Rpb25zID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fcXVlc3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWVzdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgYW5zd2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5zd2VyO1xuICAgIH1cbiAgICBzZXQgYW5zd2VyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Fuc3dlciA9IHZhbHVlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0Q2hvaWNlLnByb3RvdHlwZSwgXCJxdWVzdGlvbnNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRDaG9pY2UucHJvdG90eXBlLCBcImFuc3dlclwiLCBudWxsKTtcblNwaW5SZXN1bHRDaG9pY2UgPSBfX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4Y2x1ZGUoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5XSlcbl0sIFNwaW5SZXN1bHRDaG9pY2UpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3BpblJlc3VsdENob2ljZTtcbiJdfQ==
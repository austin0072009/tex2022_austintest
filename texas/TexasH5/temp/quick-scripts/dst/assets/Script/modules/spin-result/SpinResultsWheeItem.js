
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsWheeItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52b5fTnwP5AW4TVH9rfIs1d', 'SpinResultsWheeItem');
// Script/modules/spin-result/SpinResultsWheeItem.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
/**
 * 转盘选项
 *
 * @class SpinResultsWheelItem
 */


var SpinResultsWheelItem = /*#__PURE__*/function () {
  /**
   * Creates an instance of SpinResultsWheelItem.
   * @param {number} value 值
   * @param {number} assets 资产
   * @memberof SpinResultsWheelItem
   */
  function SpinResultsWheelItem(value, assets) {
    this._value = value;
    this._assets = assets;
  }
  /**
   * 获取值
   *
   * @type {number}
   * @memberof SpinResultsWheelItem
   */


  _createClass(SpinResultsWheelItem, [{
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * 设置值
     *
     * @memberof SpinResultsWheelItem
     */
    ,
    set: function set(value) {
      this._value = value;
    }
    /**
     * 获取资产
     *
     * @type {number}
     * @memberof SpinResultsWheelItem
     */

  }, {
    key: "assets",
    get: function get() {
      return this._assets;
    }
    /**
     * 设置资产
     *
     * @memberof SpinResultsWheelItem
     */
    ,
    set: function set(value) {
      this._assets = value;
    }
  }]);

  return SpinResultsWheelItem;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsWheelItem.prototype, "value", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsWheelItem.prototype, "assets", null);

SpinResultsWheelItem = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number])], SpinResultsWheelItem);
exports["default"] = SpinResultsWheelItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNXaGVlSXRlbS5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNsYXNzX3RyYW5zZm9ybWVyXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNXaGVlbEl0ZW0iLCJhc3NldHMiLCJfdmFsdWUiLCJfYXNzZXRzIiwiRXhwb3NlIiwiTnVtYmVyIiwicHJvdG90eXBlIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsQ0FBQyxHQUFHSSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJaLFVBQWpCLEVBQTZC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QUFWOztBQUtBTixvQkFBb0IsR0FBR3hCLFVBQVUsQ0FBQyxDQUM5QnNCLG1CQUFtQixDQUFDUyxPQUFwQixFQUQ4QixFQUU5QmYsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNhLE1BQUQsRUFBU0EsTUFBVCxDQUF0QixDQUZvQixDQUFELEVBRzlCTCxvQkFIOEIsQ0FBakM7QUFJQUosT0FBTyxXQUFQLEdBQWtCSSxvQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzEgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG4vKipcbiAqIOi9rOebmOmAiemhuVxuICpcbiAqIEBjbGFzcyBTcGluUmVzdWx0c1doZWVsSXRlbVxuICovXG5sZXQgU3BpblJlc3VsdHNXaGVlbEl0ZW0gPSBjbGFzcyBTcGluUmVzdWx0c1doZWVsSXRlbSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBTcGluUmVzdWx0c1doZWVsSXRlbS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YC8XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFzc2V0cyDotYTkuqdcbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNXaGVlbEl0ZW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXNzZXRzKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IGFzc2V0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5YC8XG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1doZWVsSXRlbVxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7lgLxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1doZWVsSXRlbVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5botYTkuqdcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzV2hlZWxJdGVtXG4gICAgICovXG4gICAgZ2V0IGFzc2V0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fzc2V0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u6LWE5LqnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNXaGVlbEl0ZW1cbiAgICAgKi9cbiAgICBzZXQgYXNzZXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IHZhbHVlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzV2hlZWxJdGVtLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNXaGVlbEl0ZW0ucHJvdG90eXBlLCBcImFzc2V0c1wiLCBudWxsKTtcblNwaW5SZXN1bHRzV2hlZWxJdGVtID0gX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeGNsdWRlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXIsIE51bWJlcl0pXG5dLCBTcGluUmVzdWx0c1doZWVsSXRlbSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c1doZWVsSXRlbTtcbiJdfQ==
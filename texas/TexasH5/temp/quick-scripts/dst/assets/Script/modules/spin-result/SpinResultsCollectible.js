
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsCollectible.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '308a0GZNq5G0a3YjXACLV5n', 'SpinResultsCollectible');
// Script/modules/spin-result/SpinResultsCollectible.js

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

var SpinResultsCollectible = /*#__PURE__*/function () {
  function SpinResultsCollectible(code, value, maxValue) {
    this._code = code;
    this._value = value;
    this._maxValue = maxValue;
  }
  /**
   * 获取编码
   */


  _createClass(SpinResultsCollectible, [{
    key: "code",
    get: function get() {
      return this._code;
    }
    /**
     * 设置编码
     */
    ,
    set: function set(value) {
      this._code = value;
    }
    /**
     * 获取当前值
     */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * 设置当前值
     */
    ,
    set: function set(value) {
      this._value = value;
    }
    /**
     * 获取最大值
     */

  }, {
    key: "maxValue",
    get: function get() {
      return this._maxValue;
    }
    /**
     * 设置最大值
     */
    ,
    set: function set(value) {
      this._maxValue = value;
    }
  }]);

  return SpinResultsCollectible;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsCollectible.prototype, "code", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsCollectible.prototype, "value", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsCollectible.prototype, "maxValue", null);

SpinResultsCollectible = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number, Number])], SpinResultsCollectible);
exports["default"] = SpinResultsCollectible;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNDb2xsZWN0aWJsZS5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNsYXNzX3RyYW5zZm9ybWVyXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNDb2xsZWN0aWJsZSIsImNvZGUiLCJtYXhWYWx1ZSIsIl9jb2RlIiwiX3ZhbHVlIiwiX21heFZhbHVlIiwiRXhwb3NlIiwiTnVtYmVyIiwicHJvdG90eXBlIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsQ0FBQyxHQUFHSSxPQUFPLENBQUND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QUFoQixDQUZILEVBR1BmLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDZSxNQUFELENBQXRCLENBSEgsQ0FBRCxFQUlQUCxzQkFBc0IsQ0FBQ1EsU0FKaEIsRUFJMkIsT0FKM0IsRUFJb0MsSUFKcEMsQ0FBVjs7QUFLQWhDLFVBQVUsQ0FBQyxDQUNQc0IsbUJBQW1CLENBQUNRLE1BQXBCLEVBRE8sRUFFUGQsVUFBVSxDQUFDLGFBQUQsRUFBZ0JlLE1BQWhCLENBRkgsRUFHUGYsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNlLE1BQUQsQ0FBdEIsQ0FISCxDQUFELEVBSVBQLHNCQUFzQixDQUFDUSxTQUpoQixFQUkyQixVQUozQixFQUl1QyxJQUp2QyxDQUFWOztBQUtBUixzQkFBc0IsR0FBR3hCLFVBQVUsQ0FBQyxDQUNoQ3NCLG1CQUFtQixDQUFDVyxPQUFwQixFQURnQyxFQUVoQ2pCLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDZSxNQUFELEVBQVNBLE1BQVQsRUFBaUJBLE1BQWpCLENBQXRCLENBRnNCLENBQUQsRUFHaENQLHNCQUhnQyxDQUFuQztBQUlBSixPQUFPLFdBQVAsR0FBa0JJLHNCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMSA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmxldCBTcGluUmVzdWx0c0NvbGxlY3RpYmxlID0gY2xhc3MgU3BpblJlc3VsdHNDb2xsZWN0aWJsZSB7XG4gICAgY29uc3RydWN0b3IoY29kZSwgdmFsdWUsIG1heFZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9tYXhWYWx1ZSA9IG1heFZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnvJbnoIFcbiAgICAgKi9cbiAgICBnZXQgY29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rue8lueggVxuICAgICAqL1xuICAgIHNldCBjb2RlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5b2T5YmN5YC8XG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruW9k+WJjeWAvFxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmnIDlpKflgLxcbiAgICAgKi9cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhWYWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5pyA5aSn5YC8XG4gICAgICovXG4gICAgc2V0IG1heFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21heFZhbHVlID0gdmFsdWU7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNDb2xsZWN0aWJsZS5wcm90b3R5cGUsIFwiY29kZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNDb2xsZWN0aWJsZS5wcm90b3R5cGUsIFwidmFsdWVcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzQ29sbGVjdGlibGUucHJvdG90eXBlLCBcIm1heFZhbHVlXCIsIG51bGwpO1xuU3BpblJlc3VsdHNDb2xsZWN0aWJsZSA9IF9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhjbHVkZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyLCBOdW1iZXIsIE51bWJlcl0pXG5dLCBTcGluUmVzdWx0c0NvbGxlY3RpYmxlKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNwaW5SZXN1bHRzQ29sbGVjdGlibGU7XG4iXX0=
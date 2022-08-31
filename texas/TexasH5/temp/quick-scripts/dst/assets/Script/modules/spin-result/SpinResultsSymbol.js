
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsSymbol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcf6c89Rc1BI4teLS75+mSt', 'SpinResultsSymbol');
// Script/modules/spin-result/SpinResultsSymbol.js

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

var SpinResultsSymbol = /*#__PURE__*/function () {
  function SpinResultsSymbol(code, assets, position) {
    this._code = code;
    this._assets = assets;
    this._position = position;
  }
  /**
   * 获取结果棋子编码
   */


  _createClass(SpinResultsSymbol, [{
    key: "code",
    get: function get() {
      return this._code;
    }
    /**
     * 设置结果棋子编码
     *
     */
    ,
    set: function set(value) {
      this._code = value;
    }
    /**
     * 获取棋子上的资产（比如金币数、freespin次数）
     */

  }, {
    key: "assets",
    get: function get() {
      return this._assets;
    }
    /**
     * 设置棋子上的资产（比如金币数、freespin次数）
     */
    ,
    set: function set(value) {
      this._assets = value;
    }
    /**
     * 获取棋子位置
     */

  }, {
    key: "position",
    get: function get() {
      return this._position;
    }
    /**
     * 设置棋子位置
     */
    ,
    set: function set(value) {
      this._position = value;
    }
  }]);

  return SpinResultsSymbol;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsSymbol.prototype, "code", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsSymbol.prototype, "assets", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsSymbol.prototype, "position", null);

SpinResultsSymbol = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number, Number])], SpinResultsSymbol);
exports["default"] = SpinResultsSymbol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNTeW1ib2wuanMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiX19tZXRhZGF0YSIsImsiLCJ2IiwibWV0YWRhdGEiLCJleHBvcnRzIiwidmFsdWUiLCJjbGFzc190cmFuc2Zvcm1lcl8xIiwicmVxdWlyZSIsIlNwaW5SZXN1bHRzU3ltYm9sIiwiY29kZSIsImFzc2V0cyIsInBvc2l0aW9uIiwiX2NvZGUiLCJfYXNzZXRzIiwiX3Bvc2l0aW9uIiwiRXhwb3NlIiwiTnVtYmVyIiwicHJvdG90eXBlIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsQ0FBQyxHQUFHSSxPQUFPLENBQUND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RUFBZ0JnQixNQUFoQixDQUZILEVBR1BoQixVQUFVLENBQUMsbUJBQUQsRUFBc0IsQ0FBQ2dCLE1BQUQsQ0FBdEIsQ0FISCxDQUFELEVBSVBSLGlCQUFpQixDQUFDUyxTQUpYLEVBSXNCLFFBSnRCLEVBSWdDLElBSmhDLENBQVY7O0FBS0FqQyxVQUFVLENBQUMsQ0FDUHNCLG1CQUFtQixDQUFDUyxNQUFwQixFQURPLEVBRVBmLFVBQVUsQ0FBQyxhQUFELEVBQWdCZ0IsTUFBaEIsQ0FGSCxFQUdQaEIsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNnQixNQUFELENBQXRCLENBSEgsQ0FBRCxFQUlQUixpQkFBaUIsQ0FBQ1MsU0FKWCxFQUlzQixVQUp0QixFQUlrQyxJQUpsQyxDQUFWOztBQUtBVCxpQkFBaUIsR0FBR3hCLFVBQVUsQ0FBQyxDQUMzQnNCLG1CQUFtQixDQUFDWSxPQUFwQixFQUQyQixFQUUzQmxCLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDZ0IsTUFBRCxFQUFTQSxNQUFULEVBQWlCQSxNQUFqQixDQUF0QixDQUZpQixDQUFELEVBRzNCUixpQkFIMkIsQ0FBOUI7QUFJQUosT0FBTyxXQUFQLEdBQWtCSSxpQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzEgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5sZXQgU3BpblJlc3VsdHNTeW1ib2wgPSBjbGFzcyBTcGluUmVzdWx0c1N5bWJvbCB7XG4gICAgY29uc3RydWN0b3IoY29kZSwgYXNzZXRzLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLl9jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5fYXNzZXRzID0gYXNzZXRzO1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnu5Pmnpzmo4vlrZDnvJbnoIFcbiAgICAgKi9cbiAgICBnZXQgY29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rue7k+aenOaji+WtkOe8lueggVxuICAgICAqXG4gICAgICovXG4gICAgc2V0IGNvZGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29kZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmo4vlrZDkuIrnmoTotYTkuqfvvIjmr5TlpoLph5HluIHmlbDjgIFmcmVlc3BpbuasoeaVsO+8iVxuICAgICAqL1xuICAgIGdldCBhc3NldHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hc3NldHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruaji+WtkOS4iueahOi1hOS6p++8iOavlOWmgumHkeW4geaVsOOAgWZyZWVzcGlu5qyh5pWw77yJXG4gICAgICovXG4gICAgc2V0IGFzc2V0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hc3NldHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5qOL5a2Q5L2N572uXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruaji+WtkOS9jee9rlxuICAgICAqL1xuICAgIHNldCBwb3NpdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzU3ltYm9sLnByb3RvdHlwZSwgXCJjb2RlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c1N5bWJvbC5wcm90b3R5cGUsIFwiYXNzZXRzXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c1N5bWJvbC5wcm90b3R5cGUsIFwicG9zaXRpb25cIiwgbnVsbCk7XG5TcGluUmVzdWx0c1N5bWJvbCA9IF9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhjbHVkZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyLCBOdW1iZXIsIE51bWJlcl0pXG5dLCBTcGluUmVzdWx0c1N5bWJvbCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c1N5bWJvbDtcbiJdfQ==
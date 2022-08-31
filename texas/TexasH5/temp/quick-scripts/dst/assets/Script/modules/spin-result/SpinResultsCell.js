
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '193d300cU1Gp6CVvC07Umb6', 'SpinResultsCell');
// Script/modules/spin-result/SpinResultsCell.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SpinResultsSymbol_1 = __importDefault(require("./SpinResultsSymbol"));

var SpinResultsWheel_1 = __importDefault(require("./SpinResultsWheel"));

var SpinResultsEvent_1 = __importDefault(require("./SpinResultsEvent"));

var class_transformer_1 = require("class-transformer");

var SpinResultCell = /*#__PURE__*/function (_SpinResultsSymbol_1$) {
  _inheritsLoose(SpinResultCell, _SpinResultsSymbol_1$);

  function SpinResultCell(code, fixed, mockCodes, assets, extraCode, extraAssets, extraPosition, wheel, events, isHoldWin) {
    var _this;

    _this = _SpinResultsSymbol_1$.call(this, code, assets) || this;
    _this._fixed = fixed;
    _this._mockCodes = mockCodes;
    _this._extraCode = extraCode;
    _this._extraAssets = extraAssets;
    _this._extraPosition = extraPosition;
    _this._wheel = wheel;
    _this._events = events;
    _this._isHoldWin = isHoldWin;
    return _this;
  }
  /**
   * 获取棋子是否固定
   */


  _createClass(SpinResultCell, [{
    key: "fixed",
    get: function get() {
      return this._fixed;
    }
    /**
     * 设置棋子是否固定
     */
    ,
    set: function set(value) {
      this._fixed = value;
    }
    /**
     * 获取假冒棋子
     */

  }, {
    key: "mockCodes",
    get: function get() {
      return this._mockCodes;
    }
    /**
     * 设置假冒棋子
     */
    ,
    set: function set(value) {
      this._mockCodes = value;
    }
    /**
     * 获取假冒棋子个数
     */

  }, {
    key: "mockCodeCount",
    get: function get() {
      if (!this._mockCodes) {
        return 0;
      }

      return this._mockCodes.length;
    }
    /**
     * 获取额外棋子
     */

  }, {
    key: "extraCode",
    get: function get() {
      return this._extraCode;
    }
    /**
     * 设置额外棋子
     */
    ,
    set: function set(value) {
      this._extraCode = value;
    }
    /**
     * 获取额外资产
     */

  }, {
    key: "extraAssets",
    get: function get() {
      return this._extraAssets;
    }
    /**
     * 设置额外资产
     */
    ,
    set: function set(value) {
      this._extraAssets = value;
    }
    /**
     * 获取额外棋子位置
     */

  }, {
    key: "extraPosition",
    get: function get() {
      return this._extraPosition;
    }
    /**
     * 设置额外棋子位置
     */
    ,
    set: function set(value) {
      this._extraPosition = value;
    }
    /**
     * 获取转盘
     */

  }, {
    key: "wheel",
    get: function get() {
      return this._wheel;
    }
    /**
     * 设置转盘
     */
    ,
    set: function set(value) {
      this._wheel = value;
    }
    /**
     * 获取事件
     */

  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
    /**
     * 设置事件
     */
    ,
    set: function set(value) {
      this._events = value;
    }
  }, {
    key: "isHoldWin",
    get: function get() {
      return this._isHoldWin;
    },
    set: function set(value) {
      this._isHoldWin = value;
    }
  }]);

  return SpinResultCell;
}(SpinResultsSymbol_1["default"]);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultCell.prototype, "fixed", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultCell.prototype, "mockCodes", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultCell.prototype, "extraCode", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultCell.prototype, "extraAssets", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultCell.prototype, "extraPosition", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", SpinResultsWheel_1), __metadata("design:paramtypes", [SpinResultsWheel_1])], SpinResultCell.prototype, "wheel", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultCell.prototype, "events", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultCell.prototype, "isHoldWin", null);

SpinResultCell = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Boolean, Array, Number, Number, Number, Number, SpinResultsWheel_1, Array, Boolean])], SpinResultCell);
exports["default"] = SpinResultCell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNDZWxsLmpzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNwaW5SZXN1bHRzU3ltYm9sXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNXaGVlbF8xIiwiU3BpblJlc3VsdHNFdmVudF8xIiwiY2xhc3NfdHJhbnNmb3JtZXJfMSIsIlNwaW5SZXN1bHRDZWxsIiwiY29kZSIsImZpeGVkIiwibW9ja0NvZGVzIiwiYXNzZXRzIiwiZXh0cmFDb2RlIiwiZXh0cmFBc3NldHMiLCJleHRyYVBvc2l0aW9uIiwid2hlZWwiLCJldmVudHMiLCJpc0hvbGRXaW4iLCJfZml4ZWQiLCJfbW9ja0NvZGVzIiwiX2V4dHJhQ29kZSIsIl9leHRyYUFzc2V0cyIsIl9leHRyYVBvc2l0aW9uIiwiX3doZWVsIiwiX2V2ZW50cyIsIl9pc0hvbGRXaW4iLCJFeHBvc2UiLCJCb29sZWFuIiwicHJvdG90eXBlIiwiQXJyYXkiLCJOdW1iZXIiLCJFeGNsdWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFB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UEcsY0FBYyxDQUFDcUIsU0FKUixFQUltQixPQUpuQixFQUk0QixJQUo1QixDQUFWOztBQUtBbkQsVUFBVSxDQUFDLENBQ1A2QixtQkFBbUIsQ0FBQ29CLE1BQXBCLEVBRE8sRUFFUGpDLFVBQVUsQ0FBQyxhQUFELEVBQWdCb0MsS0FBaEIsQ0FGSCxFQUdQcEMsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNvQyxLQUFELENBQXRCLENBSEgsQ0FBRCxFQUlQdEIsY0FBYyxDQUFDcUIsU0FKUixFQUltQixRQUpuQixFQUk2QixJQUo3QixDQUFWOztBQUtBbkQsVUFBVSxDQUFDLENBQ1A2QixtQkFBbUIsQ0FBQ29CLE1BQXBCLEVBRE8sRUFFUGpDLFVBQVUsQ0FBQyxhQUFELEVBQWdCa0MsT0FBaEIsQ0FGSCxFQUdQbEMsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNrQyxPQUFELENBQXRCLENBSEgsQ0FBRCxFQUlQcEIsY0FBYyxDQUFDcUIsU0FKUixFQUltQixXQUpuQixFQUlnQyxJQUpoQyxDQUFWOztBQUtBckIsY0FBYyxHQUFHOUIsVUFBVSxDQUFDLENBQ3hCNkIsbUJBQW1CLENBQUN5QixPQUFwQixFQUR3QixFQUV4QnRDLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDcUMsTUFBRCxFQUFTSCxPQUFULEVBQWtCRSxLQUFsQixFQUF5QkMsTUFBekIsRUFBaUNBLE1BQWpDLEVBQXlDQSxNQUF6QyxFQUFpREEsTUFBakQsRUFBeUQxQixrQkFBekQsRUFBNkV5QixLQUE3RSxFQUFvRkYsT0FBcEYsQ0FBdEIsQ0FGYyxDQUFELEVBR3hCcEIsY0FId0IsQ0FBM0I7QUFJQVAsT0FBTyxXQUFQLEdBQWtCTyxjQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU3BpblJlc3VsdHNTeW1ib2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c1N5bWJvbFwiKSk7XG5jb25zdCBTcGluUmVzdWx0c1doZWVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNXaGVlbFwiKSk7XG5jb25zdCBTcGluUmVzdWx0c0V2ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNFdmVudFwiKSk7XG5jb25zdCBjbGFzc190cmFuc2Zvcm1lcl8xID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpO1xubGV0IFNwaW5SZXN1bHRDZWxsID0gY2xhc3MgU3BpblJlc3VsdENlbGwgZXh0ZW5kcyBTcGluUmVzdWx0c1N5bWJvbF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGNvZGUsIGZpeGVkLCBtb2NrQ29kZXMsIGFzc2V0cywgZXh0cmFDb2RlLCBleHRyYUFzc2V0cywgZXh0cmFQb3NpdGlvbiwgd2hlZWwsIGV2ZW50cywgaXNIb2xkV2luKSB7XG4gICAgICAgIHN1cGVyKGNvZGUsIGFzc2V0cyk7XG4gICAgICAgIHRoaXMuX2ZpeGVkID0gZml4ZWQ7XG4gICAgICAgIHRoaXMuX21vY2tDb2RlcyA9IG1vY2tDb2RlcztcbiAgICAgICAgdGhpcy5fZXh0cmFDb2RlID0gZXh0cmFDb2RlO1xuICAgICAgICB0aGlzLl9leHRyYUFzc2V0cyA9IGV4dHJhQXNzZXRzO1xuICAgICAgICB0aGlzLl9leHRyYVBvc2l0aW9uID0gZXh0cmFQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5fd2hlZWwgPSB3aGVlbDtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLl9pc0hvbGRXaW4gPSBpc0hvbGRXaW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaji+WtkOaYr+WQpuWbuuWumlxuICAgICAqL1xuICAgIGdldCBmaXhlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpeGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7mo4vlrZDmmK/lkKblm7rlrppcbiAgICAgKi9cbiAgICBzZXQgZml4ZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZml4ZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5YGH5YaS5qOL5a2QXG4gICAgICovXG4gICAgZ2V0IG1vY2tDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vY2tDb2RlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5YGH5YaS5qOL5a2QXG4gICAgICovXG4gICAgc2V0IG1vY2tDb2Rlcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tb2NrQ29kZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5YGH5YaS5qOL5a2Q5Liq5pWwXG4gICAgICovXG4gICAgZ2V0IG1vY2tDb2RlQ291bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW9ja0NvZGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9ja0NvZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6aKd5aSW5qOL5a2QXG4gICAgICovXG4gICAgZ2V0IGV4dHJhQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhQ29kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u6aKd5aSW5qOL5a2QXG4gICAgICovXG4gICAgc2V0IGV4dHJhQ29kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9leHRyYUNvZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6aKd5aSW6LWE5LqnXG4gICAgICovXG4gICAgZ2V0IGV4dHJhQXNzZXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFBc3NldHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rumineWklui1hOS6p1xuICAgICAqL1xuICAgIHNldCBleHRyYUFzc2V0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9leHRyYUFzc2V0cyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bpop3lpJbmo4vlrZDkvY3nva5cbiAgICAgKi9cbiAgICBnZXQgZXh0cmFQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhUG9zaXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rumineWkluaji+WtkOS9jee9rlxuICAgICAqL1xuICAgIHNldCBleHRyYVBvc2l0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2V4dHJhUG9zaXRpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6L2s55uYXG4gICAgICovXG4gICAgZ2V0IHdoZWVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2hlZWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rui9rOebmFxuICAgICAqL1xuICAgIHNldCB3aGVlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl93aGVlbCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bkuovku7ZcbiAgICAgKi9cbiAgICBnZXQgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7kuovku7ZcbiAgICAgKi9cbiAgICBzZXQgZXZlbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaXNIb2xkV2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNIb2xkV2luO1xuICAgIH1cbiAgICBzZXQgaXNIb2xkV2luKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzSG9sZFdpbiA9IHZhbHVlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxuXSwgU3BpblJlc3VsdENlbGwucHJvdG90eXBlLCBcImZpeGVkXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQXJyYXldKVxuXSwgU3BpblJlc3VsdENlbGwucHJvdG90eXBlLCBcIm1vY2tDb2Rlc1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdENlbGwucHJvdG90eXBlLCBcImV4dHJhQ29kZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdENlbGwucHJvdG90eXBlLCBcImV4dHJhQXNzZXRzXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0Q2VsbC5wcm90b3R5cGUsIFwiZXh0cmFQb3NpdGlvblwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFNwaW5SZXN1bHRzV2hlZWxfMSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTcGluUmVzdWx0c1doZWVsXzFdKVxuXSwgU3BpblJlc3VsdENlbGwucHJvdG90eXBlLCBcIndoZWVsXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQXJyYXldKVxuXSwgU3BpblJlc3VsdENlbGwucHJvdG90eXBlLCBcImV2ZW50c1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXG5dLCBTcGluUmVzdWx0Q2VsbC5wcm90b3R5cGUsIFwiaXNIb2xkV2luXCIsIG51bGwpO1xuU3BpblJlc3VsdENlbGwgPSBfX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4Y2x1ZGUoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlciwgQm9vbGVhbiwgQXJyYXksIE51bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgU3BpblJlc3VsdHNXaGVlbF8xLCBBcnJheSwgQm9vbGVhbl0pXG5dLCBTcGluUmVzdWx0Q2VsbCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0Q2VsbDtcbiJdfQ==
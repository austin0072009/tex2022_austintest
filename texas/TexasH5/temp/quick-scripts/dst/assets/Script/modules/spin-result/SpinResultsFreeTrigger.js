
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsFreeTrigger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fcb33JMqFH5a14MXDRZjGq', 'SpinResultsFreeTrigger');
// Script/modules/spin-result/SpinResultsFreeTrigger.js

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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SpinResultsGameMode_1 = require("./SpinResultsGameMode");

var SpinResultsWheel_1 = __importDefault(require("./SpinResultsWheel"));

var SpinResultChoice_1 = __importDefault(require("./SpinResultChoice"));

var class_transformer_1 = require("class-transformer");

var class_transformer_2 = require("class-transformer");

var _1 = null; //require(".");

var SpinResultsFreeTrigger = /*#__PURE__*/function () {
  function SpinResultsFreeTrigger(gameMode, count, total, wheels, choices, events) {
    this._wheels = [];
    this._choices = [];
    this._events = [];
    this._gameMode = gameMode;
    this._count = count;
    this._total = total;
    this._wheels = wheels;
    this._choices = choices;
    this._events = events;
  }
  /**
   * 获取游戏类型
   */


  _createClass(SpinResultsFreeTrigger, [{
    key: "gameMode",
    get: function get() {
      return this._gameMode;
    }
    /**
     * 设置游戏类型
     */
    ,
    set: function set(value) {
      this._gameMode = value;
    }
    /**
     * 获取次数
     */

  }, {
    key: "count",
    get: function get() {
      return this._count;
    }
    /**
     * 设置次数
     */
    ,
    set: function set(value) {
      this._count = value;
    }
    /**
     * 获取总次数
     */

  }, {
    key: "total",
    get: function get() {
      return this._total;
    }
    /**
     * 设置总次数
     */
    ,
    set: function set(value) {
      this._total = value;
    }
    /**
     * 获取转盘（比如小猪转棋盘数和wild列数）
     */

  }, {
    key: "wheels",
    get: function get() {
      return this._wheels;
    }
    /**
     * 设置转盘
     */
    ,
    set: function set(value) {
      this._wheels = value;
    }
    /**
     * 获取选择（比如宙斯选择freespin次数）
     */

  }, {
    key: "choices",
    get: function get() {
      return this._choices;
    }
    /**
     * 设置选择
     */
    ,
    set: function set(value) {
      this._choices = value;

      if (!this._choices) {
        this._choices = [];
      }
    }
    /**
     * 获取事件（比如埃及free spin转盘翻倍）
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

      if (!this._events) {
        this._events = [];
      }
    }
  }]);

  return SpinResultsFreeTrigger;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsWheel_1["default"];
}), __metadata("design:type", Array)], SpinResultsFreeTrigger.prototype, "_wheels", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultChoice_1["default"];
}), __metadata("design:type", Array)], SpinResultsFreeTrigger.prototype, "_choices", void 0);

__decorate([class_transformer_1.Type(function () {
  return _1;
}), __metadata("design:type", Array)], SpinResultsFreeTrigger.prototype, "_events", void 0);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsFreeTrigger.prototype, "gameMode", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsFreeTrigger.prototype, "count", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsFreeTrigger.prototype, "total", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsWheel_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsFreeTrigger.prototype, "wheels", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultChoice_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsFreeTrigger.prototype, "choices", null);

__decorate([class_transformer_1.Type(function () {
  return _1;
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsFreeTrigger.prototype, "events", null);

SpinResultsFreeTrigger = __decorate([class_transformer_2.Exclude(), __metadata("design:paramtypes", [Number, Number, Number, Array, Array, Array])], SpinResultsFreeTrigger);
exports["default"] = SpinResultsFreeTrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNGcmVlVHJpZ2dlci5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJleHBvcnRzIiwidmFsdWUiLCJTcGluUmVzdWx0c0dhbWVNb2RlXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNXaGVlbF8xIiwiU3BpblJlc3VsdENob2ljZV8xIiwiY2xhc3NfdHJhbnNmb3JtZXJfMSIsImNsYXNzX3RyYW5zZm9ybWVyXzIiLCJfMSIsIlNwaW5SZXN1bHRzRnJlZVRyaWdnZXIiLCJnYW1lTW9kZSIsImNvdW50IiwidG90YWwiLCJ3aGVlbHMiLCJjaG9pY2VzIiwiZXZlbnRzIiwiX3doZWVscyIsIl9jaG9pY2VzIiwiX2V2ZW50cyIsIl9nYW1lTW9kZSIsIl9jb3VudCIsIl90b3RhbCIsIlR5cGUiLCJBcnJheSIsInByb3RvdHlwZSIsIkV4cG9zZSIsIk51bWJlciIsIkV4Y2x1ZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUksVUFBUSxTQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDbkYsTUFBSUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQWxCO0FBQUEsTUFBMEJDLENBQUMsR0FBR0gsQ0FBQyxHQUFHLENBQUosR0FBUUgsTUFBUixHQUFpQkUs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O0FBQUEsQ0FBekIsQ0FETyxFQUVQRSxtQkFBbUIsQ0FBQ2tCLE1BQXBCLEVBRk8sRUFHUGhDLFVBQVUsQ0FBQyxhQUFELEVBQWdCOEIsS0FBaEIsQ0FISCxFQUlQOUIsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUM4QixLQUFELENBQXRCLENBSkgsQ0FBRCxFQUtQZCxzQkFBc0IsQ0FBQ2UsU0FMaEIsRUFLMkIsU0FMM0IsRUFLc0MsSUFMdEMsQ0FBVjs7QUFNQS9DLFVBQVUsQ0FBQyxDQUNQNkIsbUJBQW1CLENBQUNnQixJQUFwQixDQUF5QjtBQUFBLFNBQU1kLEVBQU47QUFBQSxDQUF6QixDQURPLEVBRVBELG1CQUFtQixDQUFDa0IsTUFBcEIsRUFGTyxFQUdQaEMsVUFBVSxDQUFDLGFBQUQsRUFBZ0I4QixLQUFoQixDQUhILEVBSVA5QixVQUFVLENBQUMsbUJBQUQsRUFBc0IsQ0FBQzhCLEtBQUQsQ0FBdEIsQ0FKSCxDQUFELEVBS1BkLHNCQUFzQixDQUFDZSxTQUxoQixFQUsyQixRQUwzQixFQUtxQyxJQUxyQyxDQUFWOztBQU1BZixzQkFBc0IsR0FBR2hDLFVBQVUsQ0FBQyxDQUNoQzhCLG1CQUFtQixDQUFDb0IsT0FBcEIsRUFEZ0MsRUFFaENsQyxVQUFVLENBQUMsbUJBQUQsRUFBc0IsQ0FBQ2lDLE1BQUQsRUFBU0EsTUFBVCxFQUFpQkEsTUFBakIsRUFBeUJILEtBQXpCLEVBQWdDQSxLQUFoQyxFQUF1Q0EsS0FBdkMsQ0FBdEIsQ0FGc0IsQ0FBRCxFQUdoQ2Qsc0JBSGdDLENBQW5DO0FBSUFULE9BQU8sV0FBUCxHQUFrQlMsc0JBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBTcGluUmVzdWx0c0dhbWVNb2RlXzEgPSByZXF1aXJlKFwiLi9TcGluUmVzdWx0c0dhbWVNb2RlXCIpO1xuY29uc3QgU3BpblJlc3VsdHNXaGVlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzV2hlZWxcIikpO1xuY29uc3QgU3BpblJlc3VsdENob2ljZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRDaG9pY2VcIikpO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMSA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzIgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5jb25zdCBfMSA9IG51bGw7Ly9yZXF1aXJlKFwiLlwiKTtcbmxldCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyID0gY2xhc3MgU3BpblJlc3VsdHNGcmVlVHJpZ2dlciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZU1vZGUsIGNvdW50LCB0b3RhbCwgd2hlZWxzLCBjaG9pY2VzLCBldmVudHMpIHtcbiAgICAgICAgdGhpcy5fd2hlZWxzID0gW107XG4gICAgICAgIHRoaXMuX2Nob2ljZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuX2dhbWVNb2RlID0gZ2FtZU1vZGU7XG4gICAgICAgIHRoaXMuX2NvdW50ID0gY291bnQ7XG4gICAgICAgIHRoaXMuX3RvdGFsID0gdG90YWw7XG4gICAgICAgIHRoaXMuX3doZWVscyA9IHdoZWVscztcbiAgICAgICAgdGhpcy5fY2hvaWNlcyA9IGNob2ljZXM7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IGV2ZW50cztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5ri45oiP57G75Z6LXG4gICAgICovXG4gICAgZ2V0IGdhbWVNb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU1vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rua4uOaIj+exu+Wei1xuICAgICAqL1xuICAgIHNldCBnYW1lTW9kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9nYW1lTW9kZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmrKHmlbBcbiAgICAgKi9cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5qyh5pWwXG4gICAgICovXG4gICAgc2V0IGNvdW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaAu+asoeaVsFxuICAgICAqL1xuICAgIGdldCB0b3RhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7mgLvmrKHmlbBcbiAgICAgKi9cbiAgICBzZXQgdG90YWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdG90YWwgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6L2s55uY77yI5q+U5aaC5bCP54yq6L2s5qOL55uY5pWw5ZKMd2lsZOWIl+aVsO+8iVxuICAgICAqL1xuICAgIGdldCB3aGVlbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aGVlbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rui9rOebmFxuICAgICAqL1xuICAgIHNldCB3aGVlbHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fd2hlZWxzID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlumAieaLqe+8iOavlOWmguWumeaWr+mAieaLqWZyZWVzcGlu5qyh5pWw77yJXG4gICAgICovXG4gICAgZ2V0IGNob2ljZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaG9pY2VzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7pgInmi6lcbiAgICAgKi9cbiAgICBzZXQgY2hvaWNlcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jaG9pY2VzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fY2hvaWNlcykge1xuICAgICAgICAgICAgdGhpcy5fY2hvaWNlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluS6i+S7tu+8iOavlOWmguWfg+WPimZyZWUgc3Bpbui9rOebmOe/u+WAje+8iVxuICAgICAqL1xuICAgIGdldCBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruS6i+S7tlxuICAgICAqL1xuICAgIHNldCBldmVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNXaGVlbF8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFNwaW5SZXN1bHRzRnJlZVRyaWdnZXIucHJvdG90eXBlLCBcIl93aGVlbHNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0Q2hvaWNlXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgU3BpblJlc3VsdHNGcmVlVHJpZ2dlci5wcm90b3R5cGUsIFwiX2Nob2ljZXNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBfMSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgU3BpblJlc3VsdHNGcmVlVHJpZ2dlci5wcm90b3R5cGUsIFwiX2V2ZW50c1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyLnByb3RvdHlwZSwgXCJnYW1lTW9kZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNGcmVlVHJpZ2dlci5wcm90b3R5cGUsIFwiY291bnRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzRnJlZVRyaWdnZXIucHJvdG90eXBlLCBcInRvdGFsXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzV2hlZWxfMS5kZWZhdWx0KSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyLnByb3RvdHlwZSwgXCJ3aGVlbHNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdENob2ljZV8xLmRlZmF1bHQpLFxuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5XSlcbl0sIFNwaW5SZXN1bHRzRnJlZVRyaWdnZXIucHJvdG90eXBlLCBcImNob2ljZXNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gXzEpLFxuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5XSlcbl0sIFNwaW5SZXN1bHRzRnJlZVRyaWdnZXIucHJvdG90eXBlLCBcImV2ZW50c1wiLCBudWxsKTtcblNwaW5SZXN1bHRzRnJlZVRyaWdnZXIgPSBfX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4Y2x1ZGUoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlciwgTnVtYmVyLCBOdW1iZXIsIEFycmF5LCBBcnJheSwgQXJyYXldKVxuXSwgU3BpblJlc3VsdHNGcmVlVHJpZ2dlcik7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyO1xuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsWheel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d9a1JGSdFg4mTzfcHqBNk', 'SpinResultsWheel');
// Script/modules/spin-result/SpinResultsWheel.js

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
/**
 * spin结果转盘数据
 */

var class_transformer_1 = require("class-transformer");

var SpinResultsWheeItem_1 = __importDefault(require("./SpinResultsWheeItem"));

var SpinResultsWheel = /*#__PURE__*/function () {
  /**
   * 构造函数
   * @param values 值
   * @param finalValue 最终值
   */
  function SpinResultsWheel(values, finalValue) {
    this._values = [];
    this._finalValue = null;
    this._finalPosition = -1;
    this._values = values;
    this._finalValue = finalValue;
  }
  /**
   * 获取转盘值
   */


  _createClass(SpinResultsWheel, [{
    key: "values",
    get: function get() {
      return this._values;
    }
    /**
     * 设置转盘值
     */
    ,
    set: function set(value) {
      var _this = this;

      this._values = value;

      if (!this._values) {
        this._values = [];
      }

      if (this._finalValue) {
        this._finalPosition = this._values.findIndex(function (v) {
          return v.value === _this._finalValue.value;
        });
      }
    }
    /**
     * 获取最终值
     */

  }, {
    key: "finalValue",
    get: function get() {
      return this._finalValue;
    }
    /**
     * 设置最终值
     */
    ,
    set: function set(value) {
      this._finalValue = value;

      if (this._values) {
        this._finalPosition = this._values.findIndex(function (v) {
          return v == value;
        });
      }
    }
    /**
     * 获取最终位置
     */

  }, {
    key: "finalPosition",
    get: function get() {
      return this._finalPosition;
    }
  }]);

  return SpinResultsWheel;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsWheeItem_1["default"];
}), __metadata("design:type", Array)], SpinResultsWheel.prototype, "_values", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsWheeItem_1["default"];
}), __metadata("design:type", SpinResultsWheeItem_1["default"])], SpinResultsWheel.prototype, "_finalValue", void 0);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsWheel.prototype, "values", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", SpinResultsWheeItem_1["default"]), __metadata("design:paramtypes", [SpinResultsWheeItem_1["default"]])], SpinResultsWheel.prototype, "finalValue", null);

SpinResultsWheel = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Array, SpinResultsWheeItem_1["default"]])], SpinResultsWheel);
exports["default"] = SpinResultsWheel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNXaGVlbC5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJleHBvcnRzIiwidmFsdWUiLCJjbGFzc190cmFuc2Zvcm1lcl8xIiwicmVxdWlyZSIsIlNwaW5SZXN1bHRzV2hlZUl0ZW1fMSIsIlNwaW5SZXN1bHRzV2hlZWwiLCJ2YWx1ZXMiLCJmaW5hbFZhbHVlIiwiX3ZhbHVlcyIsIl9maW5hbFZhbHVlIiwiX2ZpbmFsUG9zaXRpb24iLCJmaW5kSW5kZXgiLCJUeXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJFeHBvc2UiLCJFeGNsdWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFJLFVBQVEsU0FBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLE1BQUlDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFsQjtBQUFBLE1BQTBCQyxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLElBQUksS0FBSyxJQUFULEdBQWdCQSxJQUFJLEdBQUdLLE1BQU0sQ0FBQ0Msd0JBQVAsQ0FBZ0NSLE1BQWhDLEVBQXdDQyxHQUF4QyxDQUF2QixHQUFzRUMsSUFBckg7QUFBQSxNQUEySE8sQ0FBM0g7QUFDQSxNQUFJLE9BQU9DLE9B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UHBCLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDb0IsS0FBRCxDQUF0QixDQUhILENBQUQsRUFJUFIsZ0JBQWdCLENBQUNTLFNBSlYsRUFJcUIsUUFKckIsRUFJK0IsSUFKL0IsQ0FBVjs7QUFLQXJDLFVBQVUsQ0FBQyxDQUNQeUIsbUJBQW1CLENBQUNhLE1BQXBCLEVBRE8sRUFFUHRCLFVBQVUsQ0FBQyxhQUFELEVBQWdCVyxxQkFBcUIsV0FBckMsQ0FGSCxFQUdQWCxVQUFVLENBQUMsbUJBQUQsRUFBc0IsQ0FBQ1cscUJBQXFCLFdBQXRCLENBQXRCLENBSEgsQ0FBRCxFQUlQQyxnQkFBZ0IsQ0FBQ1MsU0FKVixFQUlxQixZQUpyQixFQUltQyxJQUpuQyxDQUFWOztBQUtBVCxnQkFBZ0IsR0FBRzVCLFVBQVUsQ0FBQyxDQUMxQnlCLG1CQUFtQixDQUFDYyxPQUFwQixFQUQwQixFQUUxQnZCLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDb0IsS0FBRCxFQUFRVCxxQkFBcUIsV0FBN0IsQ0FBdEIsQ0FGZ0IsQ0FBRCxFQUcxQkMsZ0JBSDBCLENBQTdCO0FBSUFMLE9BQU8sV0FBUCxHQUFrQkssZ0JBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNwaW7nu5Pmnpzovaznm5jmlbDmja5cbiAqL1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMSA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IFNwaW5SZXN1bHRzV2hlZUl0ZW1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c1doZWVJdGVtXCIpKTtcbmxldCBTcGluUmVzdWx0c1doZWVsID0gY2xhc3MgU3BpblJlc3VsdHNXaGVlbCB7XG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICogQHBhcmFtIHZhbHVlcyDlgLxcbiAgICAgKiBAcGFyYW0gZmluYWxWYWx1ZSDmnIDnu4jlgLxcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXMsIGZpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgICAgIHRoaXMuX2ZpbmFsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9maW5hbFBvc2l0aW9uID0gLTE7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy5fZmluYWxWYWx1ZSA9IGZpbmFsVmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlui9rOebmOWAvFxuICAgICAqL1xuICAgIGdldCB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rui9rOebmOWAvFxuICAgICAqL1xuICAgIHNldCB2YWx1ZXModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZmluYWxQb3NpdGlvbiA9IHRoaXMuX3ZhbHVlcy5maW5kSW5kZXgoKHYpID0+IHYudmFsdWUgPT09IHRoaXMuX2ZpbmFsVmFsdWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluacgOe7iOWAvFxuICAgICAqL1xuICAgIGdldCBmaW5hbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluYWxWYWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5pyA57uI5YC8XG4gICAgICovXG4gICAgc2V0IGZpbmFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZmluYWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5fdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLl9maW5hbFBvc2l0aW9uID0gdGhpcy5fdmFsdWVzLmZpbmRJbmRleCgodikgPT4gdiA9PSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5pyA57uI5L2N572uXG4gICAgICovXG4gICAgZ2V0IGZpbmFsUG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5hbFBvc2l0aW9uO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNXaGVlSXRlbV8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFNwaW5SZXN1bHRzV2hlZWwucHJvdG90eXBlLCBcIl92YWx1ZXNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c1doZWVJdGVtXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFNwaW5SZXN1bHRzV2hlZUl0ZW1fMS5kZWZhdWx0KVxuXSwgU3BpblJlc3VsdHNXaGVlbC5wcm90b3R5cGUsIFwiX2ZpbmFsVmFsdWVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5XSlcbl0sIFNwaW5SZXN1bHRzV2hlZWwucHJvdG90eXBlLCBcInZhbHVlc1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFNwaW5SZXN1bHRzV2hlZUl0ZW1fMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1NwaW5SZXN1bHRzV2hlZUl0ZW1fMS5kZWZhdWx0XSlcbl0sIFNwaW5SZXN1bHRzV2hlZWwucHJvdG90eXBlLCBcImZpbmFsVmFsdWVcIiwgbnVsbCk7XG5TcGluUmVzdWx0c1doZWVsID0gX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeGNsdWRlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheSwgU3BpblJlc3VsdHNXaGVlSXRlbV8xLmRlZmF1bHRdKVxuXSwgU3BpblJlc3VsdHNXaGVlbCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c1doZWVsO1xuIl19
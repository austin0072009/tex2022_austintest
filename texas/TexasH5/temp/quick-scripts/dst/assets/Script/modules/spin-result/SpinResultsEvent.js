
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31384DkiDNKZ4WTV7P4Hv42', 'SpinResultsEvent');
// Script/modules/spin-result/SpinResultsEvent.js

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

var SpinResultsEvent = /*#__PURE__*/function () {
  function SpinResultsEvent(code, value) {
    this._code = code;
    this._value = value;
  }

  _createClass(SpinResultsEvent, [{
    key: "code",
    get: function get() {
      return this._code;
    },
    set: function set(value) {
      this._code = value;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this._value = value;
    }
  }]);

  return SpinResultsEvent;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsEvent.prototype, "code", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsEvent.prototype, "value", null);

SpinResultsEvent = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number])], SpinResultsEvent);
exports["default"] = SpinResultsEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNFdmVudC5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNsYXNzX3RyYW5zZm9ybWVyXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNFdmVudCIsImNvZGUiLCJfY29kZSIsIl92YWx1ZSIsIkV4cG9zZSIsIk51bWJlciIsInByb3RvdHlwZSIsIkV4Y2x1ZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUksVUFBUSxTQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDbkYsTUFBSUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQWxCO0FBQUEsTUFBMEJDLENBQUMsR0FBR0gsQ0FBQyxHQUFHLENBQUosR0FBUUgsTUFBUixHQUFpQkUsSUFBSSxLQUFLLElBQVQsR0FBZ0JBLElBQUksR0FBR0ssTUFBTSxDQUFDQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLE1BQTJITyxDQUEzSDtBQUNBLE1BQUksT0FBT0MsT0FBUCxLQUFtQixRQUFuQixJQUErQixPQUFPQSxPQUFPLENBQUNDLFFBQWYsS0FBNEIsVUFBL0QsRUFBMkVMLENBQUMsR0FBR0ksT0FBTyxDQUFDQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFB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Y2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzEgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5sZXQgU3BpblJlc3VsdHNFdmVudCA9IGNsYXNzIFNwaW5SZXN1bHRzRXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKGNvZGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGU7XG4gICAgfVxuICAgIHNldCBjb2RlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzRXZlbnQucHJvdG90eXBlLCBcImNvZGVcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzRXZlbnQucHJvdG90eXBlLCBcInZhbHVlXCIsIG51bGwpO1xuU3BpblJlc3VsdHNFdmVudCA9IF9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhjbHVkZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyLCBOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNFdmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c0V2ZW50O1xuIl19
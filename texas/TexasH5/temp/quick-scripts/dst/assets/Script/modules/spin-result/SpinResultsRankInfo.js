
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsRankInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62f1fX7XvpOlLJKa6p/3qJM', 'SpinResultsRankInfo');
// Script/modules/spin-result/SpinResultsRankInfo.js

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

var SpinResultsRankInfo = /*#__PURE__*/function () {
  function SpinResultsRankInfo(userId, name, headImageUrl, headFrameImageUrl, point, num) {
    this._userId = userId;
    this._name = name;
    this._headImageUrl = headImageUrl;
    this._headFrameImageUrl = headFrameImageUrl;
    this._point = point;
    this._number = num;
  }

  _createClass(SpinResultsRankInfo, [{
    key: "userId",
    get: function get() {
      return this._userId;
    },
    set: function set(value) {
      this._userId = value;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: "headImageUrl",
    get: function get() {
      return this._headImageUrl;
    },
    set: function set(value) {
      this._headImageUrl = value;
    }
  }, {
    key: "headFrameImageUrl",
    get: function get() {
      return this._headFrameImageUrl;
    },
    set: function set(value) {
      this._headFrameImageUrl = value;
    }
  }, {
    key: "point",
    get: function get() {
      return this._point;
    },
    set: function set(value) {
      this._point = value;
    }
  }, {
    key: "number",
    get: function get() {
      return this._number;
    },
    set: function set(value) {
      this._number = value;
    }
  }]);

  return SpinResultsRankInfo;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsRankInfo.prototype, "userId", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsRankInfo.prototype, "name", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsRankInfo.prototype, "headImageUrl", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsRankInfo.prototype, "headFrameImageUrl", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsRankInfo.prototype, "point", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsRankInfo.prototype, "number", null);

SpinResultsRankInfo = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, String, String, String, Number, Number])], SpinResultsRankInfo);
exports["default"] = SpinResultsRankInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNSYW5rSW5mby5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNsYXNzX3RyYW5zZm9ybWVyXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNSYW5rSW5mbyIsInVzZXJJZCIsIm5hbWUiLCJoZWFkSW1hZ2VVcmwiLCJoZWFkRnJhbWVJbWFnZVVybCIsInBvaW50IiwibnVtIiwiX3VzZXJJZCIsIl9uYW1lIiwiX2hlYWRJbWFnZVVybCIsIl9oZWFkRnJhbWVJbWFnZVVybCIsIl9wb2ludCIsIl9udW1iZXIiLCJFeHBvc2UiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJTdHJpbmciLCJFeGNsdWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFJLFVBQVEsU0FBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLE1BQUlDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFsQjtBQUFBLE1BQTBCQyxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLElBQUksS0FBSyxJQUFULEdBQWdCQSxJQUFJLEdBQUdLLE1BQU0sQ0FBQ0Msd0JBQVAsQ0FBZ0NSLE1BQWhDLEVBQXdDQyxHQUF4QyxDQUF2QixHQUFzRUMsSUFBckg7QUFBQSxNQUEySE8sQ0FBM0g7QUFDQSxN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QUFELEVBQWdCd0IsTUFBaEIsQ0FGSCxFQUdQeEIsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUN3QixNQUFELENBQXRCLENBSEgsQ0FBRCxFQUlQaEIsbUJBQW1CLENBQUNlLFNBSmIsRUFJd0IsbUJBSnhCLEVBSTZDLElBSjdDLENBQVY7O0FBS0F2QyxVQUFVLENBQUMsQ0FDUHNCLG1CQUFtQixDQUFDZSxNQUFwQixFQURPLEVBRVByQixVQUFVLENBQUMsYUFBRCxFQUFnQnNCLE1BQWhCLENBRkgsRUFHUHRCLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDc0IsTUFBRCxDQUF0QixDQUhILENBQUQsRUFJUGQsbUJBQW1CLENBQUNlLFNBSmIsRUFJd0IsT0FKeEIsRUFJaUMsSUFKakMsQ0FBVjs7QUFLQXZDLFVBQVUsQ0FBQyxDQUNQc0IsbUJBQW1CLENBQUNlLE1BQXBCLEVBRE8sRUFFUHJCLFVBQVUsQ0FBQyxhQUFELEVBQWdCc0IsTUFBaEIsQ0FGSCxFQUdQdEIsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNzQixNQUFELENBQXRCLENBSEgsQ0FBRCxFQUlQZCxtQkFBbUIsQ0FBQ2UsU0FKYixFQUl3QixRQUp4QixFQUlrQyxJQUpsQyxDQUFWOztBQUtBZixtQkFBbUIsR0FBR3hCLFVBQVUsQ0FBQyxDQUM3QnNCLG1CQUFtQixDQUFDbUIsT0FBcEIsRUFENkIsRUFFN0J6QixVQUFVLENBQUMsbUJBQUQsRUFBc0IsQ0FBQ3NCLE1BQUQsRUFBU0UsTUFBVCxFQUFpQkEsTUFBakIsRUFBeUJBLE1BQXpCLEVBQWlDRixNQUFqQyxFQUF5Q0EsTUFBekMsQ0FBdEIsQ0FGbUIsQ0FBRCxFQUc3QmQsbUJBSDZCLENBQWhDO0FBSUFKLE9BQU8sV0FBUCxHQUFrQkksbUJBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjbGFzc190cmFuc2Zvcm1lcl8xID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpO1xubGV0IFNwaW5SZXN1bHRzUmFua0luZm8gPSBjbGFzcyBTcGluUmVzdWx0c1JhbmtJbmZvIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQsIG5hbWUsIGhlYWRJbWFnZVVybCwgaGVhZEZyYW1lSW1hZ2VVcmwsIHBvaW50LCBudW0pIHtcbiAgICAgICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5faGVhZEltYWdlVXJsID0gaGVhZEltYWdlVXJsO1xuICAgICAgICB0aGlzLl9oZWFkRnJhbWVJbWFnZVVybCA9IGhlYWRGcmFtZUltYWdlVXJsO1xuICAgICAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLl9udW1iZXIgPSBudW07XG4gICAgfVxuICAgIGdldCB1c2VySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gICAgfVxuICAgIHNldCB1c2VySWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdXNlcklkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaGVhZEltYWdlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVhZEltYWdlVXJsO1xuICAgIH1cbiAgICBzZXQgaGVhZEltYWdlVXJsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2hlYWRJbWFnZVVybCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaGVhZEZyYW1lSW1hZ2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFkRnJhbWVJbWFnZVVybDtcbiAgICB9XG4gICAgc2V0IGhlYWRGcmFtZUltYWdlVXJsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2hlYWRGcmFtZUltYWdlVXJsID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50O1xuICAgIH1cbiAgICBzZXQgcG9pbnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcG9pbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlcjtcbiAgICB9XG4gICAgc2V0IG51bWJlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9udW1iZXIgPSB2YWx1ZTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c1JhbmtJbmZvLnByb3RvdHlwZSwgXCJ1c2VySWRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzUmFua0luZm8ucHJvdG90eXBlLCBcIm5hbWVcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzUmFua0luZm8ucHJvdG90eXBlLCBcImhlYWRJbWFnZVVybFwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTdHJpbmddKVxuXSwgU3BpblJlc3VsdHNSYW5rSW5mby5wcm90b3R5cGUsIFwiaGVhZEZyYW1lSW1hZ2VVcmxcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzUmFua0luZm8ucHJvdG90eXBlLCBcInBvaW50XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c1JhbmtJbmZvLnByb3RvdHlwZSwgXCJudW1iZXJcIiwgbnVsbCk7XG5TcGluUmVzdWx0c1JhbmtJbmZvID0gX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeGNsdWRlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXIsIFN0cmluZywgU3RyaW5nLCBTdHJpbmcsIE51bWJlciwgTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzUmFua0luZm8pO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3BpblJlc3VsdHNSYW5rSW5mbztcbiJdfQ==
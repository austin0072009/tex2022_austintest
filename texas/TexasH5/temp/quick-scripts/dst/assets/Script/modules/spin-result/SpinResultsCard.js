
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38471Zu2jlHF7kV6CEemUNs', 'SpinResultsCard');
// Script/modules/spin-result/SpinResultsCard.js

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

var SpinResultsCard = /*#__PURE__*/function () {
  function SpinResultsCard(_id, _imageUrl, _isNew, _count) {
    this._id = _id;
    this._imageUrl = _imageUrl;
    this._isNew = _isNew;
    this._count = _count;
  }
  /**
   * 卡牌ID
   *
   * @readonly
   * @type {string}
   * @memberof SpinResultsCard
   */


  _createClass(SpinResultsCard, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
    /**
     * 卡牌图片地址
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsCard
     */

  }, {
    key: "imageUrl",
    get: function get() {
      return this._imageUrl;
    },
    set: function set(value) {
      this._imageUrl = value;
    }
    /**
     * 是否是新出现的卡牌
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsCard
     */

  }, {
    key: "isNewCard",
    get: function get() {
      return this._isNew;
    },
    set: function set(value) {
      this._isNew = value;
    }
    /**
     * 持有数量
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsCard
     */

  }, {
    key: "cardCount",
    get: function get() {
      return this._count;
    },
    set: function set(value) {
      this._count = value;
    }
  }]);

  return SpinResultsCard;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsCard.prototype, "id", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsCard.prototype, "imageUrl", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsCard.prototype, "isNewCard", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsCard.prototype, "cardCount", null);

SpinResultsCard = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [String, String, Boolean, Number])], SpinResultsCard);
exports["default"] = SpinResultsCard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNDYXJkLmpzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiZXhwb3J0cyIsInZhbHVlIiwiY2xhc3NfdHJhbnNmb3JtZXJfMSIsInJlcXVpcmUiLCJTcGluUmVzdWx0c0NhcmQiLCJfaWQiLCJfaW1hZ2VVcmwiLCJfaXNOZXciLCJfY291bnQiLCJFeHBvc2UiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJCb29sZWFuIiwiTnVtYmVyIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsQ0FBQyxHQUFHSSxPQUFPLENBQUNDLFFBQVIs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SSxlQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMSA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmxldCBTcGluUmVzdWx0c0NhcmQgPSBjbGFzcyBTcGluUmVzdWx0c0NhcmQge1xuICAgIGNvbnN0cnVjdG9yKF9pZCwgX2ltYWdlVXJsLCBfaXNOZXcsIF9jb3VudCkge1xuICAgICAgICB0aGlzLl9pZCA9IF9pZDtcbiAgICAgICAgdGhpcy5faW1hZ2VVcmwgPSBfaW1hZ2VVcmw7XG4gICAgICAgIHRoaXMuX2lzTmV3ID0gX2lzTmV3O1xuICAgICAgICB0aGlzLl9jb3VudCA9IF9jb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Y2h54mMSURcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzQ2FyZFxuICAgICAqL1xuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBzZXQgaWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Y2h54mM5Zu+54mH5Zyw5Z2AXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c0NhcmRcbiAgICAgKi9cbiAgICBnZXQgaW1hZ2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbWFnZVVybDtcbiAgICB9XG4gICAgc2V0IGltYWdlVXJsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlVXJsID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYr+aWsOWHuueOsOeahOWNoeeJjFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzQ2FyZFxuICAgICAqL1xuICAgIGdldCBpc05ld0NhcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc05ldztcbiAgICB9XG4gICAgc2V0IGlzTmV3Q2FyZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc05ldyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjIHmnInmlbDph49cbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzQ2FyZFxuICAgICAqL1xuICAgIGdldCBjYXJkQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgICB9XG4gICAgc2V0IGNhcmRDb3VudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzQ2FyZC5wcm90b3R5cGUsIFwiaWRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzQ2FyZC5wcm90b3R5cGUsIFwiaW1hZ2VVcmxcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxuXSwgU3BpblJlc3VsdHNDYXJkLnByb3RvdHlwZSwgXCJpc05ld0NhcmRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzQ2FyZC5wcm90b3R5cGUsIFwiY2FyZENvdW50XCIsIG51bGwpO1xuU3BpblJlc3VsdHNDYXJkID0gX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeGNsdWRlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTdHJpbmcsIFN0cmluZywgQm9vbGVhbiwgTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzQ2FyZCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c0NhcmQ7XG4iXX0=
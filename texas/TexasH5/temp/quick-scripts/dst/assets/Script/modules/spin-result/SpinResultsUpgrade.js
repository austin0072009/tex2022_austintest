
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsUpgrade.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a99340pPehJDY2eRwD5qH3a', 'SpinResultsUpgrade');
// Script/modules/spin-result/SpinResultsUpgrade.js

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

var class_transformer_1 = require("class-transformer");

var SpinResultsGame_1 = __importDefault(require("./SpinResultsGame"));

var SpinResultsUpgrade = /*#__PURE__*/function () {
  function SpinResultsUpgrade(level, award, vipRatio, awardCollectId) {
    this._level = level;
    this._award = award;
    this._vipRatio = vipRatio;
    this._awardCollectId = awardCollectId;
    this._unlockedGames = [];
  }

  var _proto = SpinResultsUpgrade.prototype;

  /**
   * 添加解锁关卡
   *
   * @param {string} gameId 关卡ID
   * @param {string} gameCode 关卡代号
   * @param {boolean} isFree 是否免费
   * @param {boolean} hasJackpot 是否有奖池
   * @param {string} jackpot 奖池金额
   * @param {string} jackpot2 奖池金额
   * @param {SpinResultsGameStatus} status 关卡状态
   * @param {boolean} isTopGame
   * @param {boolean} isVertical
   * @param {number} orderNum
   * @param {string} version
   * @returns {void}
   * @memberof SpinResultsUpgrade
   */
  _proto.addUnlockedGame = function addUnlockedGame(gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version) {
    var game = new SpinResultsGame_1["default"](gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version);

    this._unlockedGames.push(game);
  };

  _createClass(SpinResultsUpgrade, [{
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(value) {
      this._level = value;
    }
  }, {
    key: "award",
    get: function get() {
      return this._award;
    },
    set: function set(value) {
      this._award = value;
    }
  }, {
    key: "vipRatio",
    get: function get() {
      return this._vipRatio;
    },
    set: function set(value) {
      this._vipRatio = value;
    }
  }, {
    key: "awardCollectId",
    get: function get() {
      return this._awardCollectId;
    },
    set: function set(value) {
      this._awardCollectId = value;
    }
  }, {
    key: "maxBet",
    get: function get() {
      return this._maxBet;
    },
    set: function set(value) {
      this._maxBet = value;
    }
    /**
     * 获得的游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */

  }, {
    key: "points",
    get: function get() {
      return this._points;
    },
    set: function set(value) {
      this._points = value;
    }
    /**
     * 大升级弹窗倒计时
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */

  }, {
    key: "countdown",
    get: function get() {
      return this._countdown;
    },
    set: function set(value) {
      this._countdown = value;
    }
    /**
     * 解锁的关卡
     *
     * @readonly
     * @type {SpinResultsGame[]}
     * @memberof SpinResultsUpgrade
     */

  }, {
    key: "unlockedGames",
    get: function get() {
      return this._unlockedGames;
    },
    set: function set(value) {
      this._unlockedGames = value;
    }
  }]);

  return SpinResultsUpgrade;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsGame_1["default"];
}), __metadata("design:type", Array)], SpinResultsUpgrade.prototype, "_unlockedGames", void 0);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "level", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "award", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "vipRatio", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsUpgrade.prototype, "awardCollectId", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "maxBet", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "points", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "countdown", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsGame_1["default"];
}), class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsUpgrade.prototype, "unlockedGames", null);

SpinResultsUpgrade = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number, Number, String])], SpinResultsUpgrade);
exports["default"] = SpinResultsUpgrade;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNVcGdyYWRlLmpzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNsYXNzX3RyYW5zZm9ybWVyXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNHYW1lXzEiLCJTcGluUmVzdWx0c1VwZ3JhZGUiLCJsZXZlbCIsImF3YXJkIiwidmlwUmF0aW8iLCJhd2FyZENvbGxlY3RJZCIsIl9sZXZlbCIsIl9hd2FyZCIsIl92aXBSYXRpbyIsIl9hd2FyZENvbGxlY3RJZCIsIl91bmxvY2tlZEdhbWVzIiwiYWRkVW5sb2NrZWRHYW1lIiwiZ2FtZUlkIiwiZ2FtZUNvZGUiLCJpc0ZyZWUiLCJoYXNKYWNrcG90IiwiamFja3BvdCIsImphY2twb3QyIiwic3RhdHVzIiwiaXNUb3BHYW1lIiwiaXNWZXJ0aWNhbCIsIm9yZGVyTnVtIiwidmVyc2lvbiIsImdhbWUiLCJwdXNoIiwiX21heEJldCIsIl9wb2ludHMiLCJfY291bnRkb3duIiwiVHlwZSIsIkFycmF5IiwicHJvdG90eXBlIiwiRXhwb3NlIiwiTnVtYmVyIiwiU3RyaW5nIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFu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QWtCSyxrQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzEgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5jb25zdCBTcGluUmVzdWx0c0dhbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c0dhbWVcIikpO1xubGV0IFNwaW5SZXN1bHRzVXBncmFkZSA9IGNsYXNzIFNwaW5SZXN1bHRzVXBncmFkZSB7XG4gICAgY29uc3RydWN0b3IobGV2ZWwsIGF3YXJkLCB2aXBSYXRpbywgYXdhcmRDb2xsZWN0SWQpIHtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5fYXdhcmQgPSBhd2FyZDtcbiAgICAgICAgdGhpcy5fdmlwUmF0aW8gPSB2aXBSYXRpbztcbiAgICAgICAgdGhpcy5fYXdhcmRDb2xsZWN0SWQgPSBhd2FyZENvbGxlY3RJZDtcbiAgICAgICAgdGhpcy5fdW5sb2NrZWRHYW1lcyA9IFtdO1xuICAgIH1cbiAgICBnZXQgbGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgICB9XG4gICAgc2V0IGxldmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xldmVsID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBhd2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F3YXJkO1xuICAgIH1cbiAgICBzZXQgYXdhcmQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXdhcmQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHZpcFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlwUmF0aW87XG4gICAgfVxuICAgIHNldCB2aXBSYXRpbyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92aXBSYXRpbyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYXdhcmRDb2xsZWN0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hd2FyZENvbGxlY3RJZDtcbiAgICB9XG4gICAgc2V0IGF3YXJkQ29sbGVjdElkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2F3YXJkQ29sbGVjdElkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtYXhCZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhCZXQ7XG4gICAgfVxuICAgIHNldCBtYXhCZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWF4QmV0ID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+W+l+eahOa4uOaIj+enr+WIhlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNVcGdyYWRlXG4gICAgICovXG4gICAgZ2V0IHBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50cztcbiAgICB9XG4gICAgc2V0IHBvaW50cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wb2ludHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5aSn5Y2H57qn5by556qX5YCS6K6h5pe2XG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1VwZ3JhZGVcbiAgICAgKi9cbiAgICBnZXQgY291bnRkb3duKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRkb3duO1xuICAgIH1cbiAgICBzZXQgY291bnRkb3duKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZG93biA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDop6PplIHnmoTlhbPljaFcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtTcGluUmVzdWx0c0dhbWVbXX1cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNVcGdyYWRlXG4gICAgICovXG4gICAgZ2V0IHVubG9ja2VkR2FtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmxvY2tlZEdhbWVzO1xuICAgIH1cbiAgICBzZXQgdW5sb2NrZWRHYW1lcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91bmxvY2tlZEdhbWVzID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOino+mUgeWFs+WNoVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWVJZCDlhbPljaFJRFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lQ29kZSDlhbPljaHku6Plj7dcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRnJlZSDmmK/lkKblhY3otLlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGhhc0phY2twb3Qg5piv5ZCm5pyJ5aWW5rGgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGphY2twb3Qg5aWW5rGg6YeR6aKdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGphY2twb3QyIOWlluaxoOmHkeminVxuICAgICAqIEBwYXJhbSB7U3BpblJlc3VsdHNHYW1lU3RhdHVzfSBzdGF0dXMg5YWz5Y2h54q25oCBXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1RvcEdhbWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmVydGljYWxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb3JkZXJOdW1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvblxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1VwZ3JhZGVcbiAgICAgKi9cbiAgICBhZGRVbmxvY2tlZEdhbWUoZ2FtZUlkLCBnYW1lQ29kZSwgaXNGcmVlLCBoYXNKYWNrcG90LCBqYWNrcG90LCBqYWNrcG90Miwgc3RhdHVzLCBpc1RvcEdhbWUsIGlzVmVydGljYWwsIG9yZGVyTnVtLCB2ZXJzaW9uKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgU3BpblJlc3VsdHNHYW1lXzEuZGVmYXVsdChnYW1lSWQsIGdhbWVDb2RlLCBpc0ZyZWUsIGhhc0phY2twb3QsIGphY2twb3QsIGphY2twb3QyLCBzdGF0dXMsIGlzVG9wR2FtZSwgaXNWZXJ0aWNhbCwgb3JkZXJOdW0sIHZlcnNpb24pO1xuICAgICAgICB0aGlzLl91bmxvY2tlZEdhbWVzLnB1c2goZ2FtZSk7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c0dhbWVfMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBTcGluUmVzdWx0c1VwZ3JhZGUucHJvdG90eXBlLCBcIl91bmxvY2tlZEdhbWVzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzVXBncmFkZS5wcm90b3R5cGUsIFwibGV2ZWxcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzVXBncmFkZS5wcm90b3R5cGUsIFwiYXdhcmRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzVXBncmFkZS5wcm90b3R5cGUsIFwidmlwUmF0aW9cIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzVXBncmFkZS5wcm90b3R5cGUsIFwiYXdhcmRDb2xsZWN0SWRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzVXBncmFkZS5wcm90b3R5cGUsIFwibWF4QmV0XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c1VwZ3JhZGUucHJvdG90eXBlLCBcInBvaW50c1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNVcGdyYWRlLnByb3RvdHlwZSwgXCJjb3VudGRvd25cIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNHYW1lXzEuZGVmYXVsdCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQXJyYXldKVxuXSwgU3BpblJlc3VsdHNVcGdyYWRlLnByb3RvdHlwZSwgXCJ1bmxvY2tlZEdhbWVzXCIsIG51bGwpO1xuU3BpblJlc3VsdHNVcGdyYWRlID0gX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeGNsdWRlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBTdHJpbmddKVxuXSwgU3BpblJlc3VsdHNVcGdyYWRlKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNwaW5SZXN1bHRzVXBncmFkZTtcbiJdfQ==
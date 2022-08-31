"use strict";
cc._RF.push(module, '92f93XllPJHGrCvd0y2anXn', 'SpinResultsChess');
// Script/modules/spin-result/SpinResultsChess.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SpinResultsChess = /*#__PURE__*/function () {
  function SpinResultsChess(code, assets, position) {
    this._code = code;
    this._assets = assets;
    this._position = position;
  }
  /**
   * 获取结果棋子编码
   */


  _createClass(SpinResultsChess, [{
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

  return SpinResultsChess;
}();

exports["default"] = SpinResultsChess;

cc._RF.pop();
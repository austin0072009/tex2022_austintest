"use strict";
cc._RF.push(module, 'fb2a7zjQ05DfJQCY5NbLj9k', 'SpinResultsGameStatus');
// Script/modules/spin-result/SpinResultsGameStatus.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 关卡状态
 *
 * @export
 * @enum {number}
 */

var SpinResultsGameStatus;

(function (SpinResultsGameStatus) {
  /**
   * 正常
   */
  SpinResultsGameStatus[SpinResultsGameStatus["Normal"] = 0] = "Normal";
  /**
   * 未开放
   */

  SpinResultsGameStatus[SpinResultsGameStatus["NotOpen"] = 1] = "NotOpen";
  /**
   * 禁用
   */

  SpinResultsGameStatus[SpinResultsGameStatus["Disabled"] = 2] = "Disabled";
})(SpinResultsGameStatus = exports.SpinResultsGameStatus || (exports.SpinResultsGameStatus = {}));

cc._RF.pop();
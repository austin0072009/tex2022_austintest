"use strict";
cc._RF.push(module, 'dcb25QrUZBKdaQRehRLT6YY', 'SpinResultsGameMode');
// Script/modules/spin-result/SpinResultsGameMode.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 游戏模式
 */

var SpinResultsGameMode;

(function (SpinResultsGameMode) {
  /**
   * 普通模式
   */
  SpinResultsGameMode[SpinResultsGameMode["Normal"] = 0] = "Normal";
  /**
   * freespin模式
   */

  SpinResultsGameMode[SpinResultsGameMode["FreeSpin"] = 1] = "FreeSpin";
  /**
   * respin模式
   */

  SpinResultsGameMode[SpinResultsGameMode["Respin"] = 2] = "Respin";
  /**
   * bonus模式
   */

  SpinResultsGameMode[SpinResultsGameMode["Bonus"] = 3] = "Bonus";
  /**
  * OneMore模式
  */

  SpinResultsGameMode[SpinResultsGameMode["Bonus"] = 4] = "OneMore";
})(SpinResultsGameMode = exports.SpinResultsGameMode || (exports.SpinResultsGameMode = {}));

cc._RF.pop();
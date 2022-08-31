"use strict";
cc._RF.push(module, '14103uk5tZBGp7uzSuX5bsa', 'LobbyModel');
// GameHall/script/Lobby/LobbyModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LobbyModel = /** @class */ (function () {
    function LobbyModel() {
        this.ageninfo = null;
        this.isHomePage = true;
        this.TexSitdownData = null;
        this.redpacketData = null;
        /**vip 等级 */
        this.vipLevel = 0;
        /**赛事排名 */
        this.matchRank = {};
        /**弹窗公告 */
        this.notice = [];
        /**跑马灯 */
        this.broadnotice = [];
        /**背包数据 */
        this.bagpackData = [];
        /**是否设置支付密码 */
        this.isSetPayPassword = false;
        this.vipAddress = "";
    }
    LobbyModel.prototype.Init = function () { };
    LobbyModel.prototype.ClearData = function () {
    };
    return LobbyModel;
}());
exports.default = LobbyModel;

cc._RF.pop();
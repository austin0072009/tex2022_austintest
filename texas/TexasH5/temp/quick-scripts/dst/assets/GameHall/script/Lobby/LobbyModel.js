
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/LobbyModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXExvYmJ5TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO1FBV1csYUFBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixtQkFBYyxHQUFVLElBQUksQ0FBQztRQUM3QixrQkFBYSxHQUFxQixJQUFJLENBQUM7UUE2QjlDLFlBQVk7UUFDTCxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBSTVCLFVBQVU7UUFDSCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXRCLFVBQVU7UUFDSCxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRTdCLFNBQVM7UUFDRixnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUVsQyxVQUFVO1FBQ0gsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFLcEMsY0FBYztRQUNQLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUtsQyxlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRW5DLENBQUM7SUFMVSx5QkFBSSxHQUFYLGNBQXNCLENBQUM7SUFDaEIsOEJBQVMsR0FBaEI7SUFDQSxDQUFDO0lBR0wsaUJBQUM7QUFBRCxDQXZFQSxBQXVFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9vbUluZm9TRCB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL2NzX2Jhc2VcIjtcbmltcG9ydCB7IHNjX2dldGFnZW50aW5mbywgdGFza2xpc3QsIHNjX21vYmlsZXBob25lbnVtLCBUYWJsZVJvb21JbmZvVGV4LCBzY19nZXR1c2VydmlwaW5mbywgdmlwQ29uZmlnLCBDb21wZXRlSW5mbywgUmFua0luZm8sIG5vdGljZSwgc2NfZXh0ZW5kcmVkaW5mbywgc2NfZ2V0ZW1haWxsaXN0LCBQcm9wSW5mbyB9IGZyb20gXCIuL0xvYmJ5TmV0RGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2JieU1vZGVsIHtcbiAgICBwdWJsaWMgbGV2ZWw6IFJvb21JbmZvU0Q7XG4gICAgcHVibGljIGxldmVsbGlzdDogUm9vbUluZm9TRFtdO1xuICAgIC8v5omA5pyJ5ri45oiP6YO957uf5LiA5L2/55SoIGxvYmJ55LiK55qEIGdhbWVpZCB0YWJsZWlkIGxldmVsaWQgIE1hdGNoQ29kZVxuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0bnVibWVyOiBzdHJpbmcvL+ahjOWtkOaIv+mXtOWPt1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIE1hdGNoQ29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtYXhDb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBiYXNlcmF0ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhZ2VuaW5mbzogc2NfZ2V0YWdlbnRpbmZvID0gbnVsbDtcbiAgICBwdWJsaWMgaXNIb21lUGFnZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIFRleFNpdGRvd25EYXRhOiBhbnlbXSA9IG51bGw7XG4gICAgcHVibGljIHJlZHBhY2tldERhdGE6IHNjX2V4dGVuZHJlZGluZm8gPSBudWxsO1xuXG4gICAgLyoq546p5a625Lq65pWwICovXG4gICAgcHVibGljIHBsYXllckNvdW50OiBudW1iZXI7XG4gICAgLyoq5oi/6Ze05Y+3ICovXG4gICAgcHVibGljIHRudW1iZXI6IHN0cmluZ1xuXG4gICAgcHVibGljIF9pc1N0YXJ0ZWQ6IGJvb2xlYW47XG4gICAgLyoq5piv6Z2g5qGM57yW5Y+36L+b5YWl55qEICovXG4gICAgcHVibGljIF9hZGRieXRhYmxlbnVtOiBib29sZWFuO1xuICAgIHB1YmxpYyBfYWRkdGFibGVpZDogbnVtYmVyO1xuICAgIC8qKuahjOWtkCAqL1xuICAgIHB1YmxpYyB0YWJsZUxpc3Q6IFRhYmxlUm9vbUluZm9UZXhbXTtcblxuICAgIC8qKuafpeivoueahCB1c2VySWQgKi9cbiAgICBwdWJsaWMgcXVlcnlVc2VySWQ6IG51bWJlcjtcbiAgICAvKirku7vliqHliJfooajmlbDmja4gKi9cbiAgICBwdWJsaWMgdGFza2xpc3Q6IHRhc2tsaXN0W107XG4gICAgLyoq5aS05YOP5qGGICovXG4gICAgcHVibGljIGhlYWRGcmFtZTogc3RyaW5nO1xuICAgIC8qKumTtuihjOWNoee7keWumuS/oeaBryAqL1xuICAgIHB1YmxpYyBtb2JpbGVwaG9uZW46IHNjX21vYmlsZXBob25lbnVtO1xuXG4gICAgLyoq546p5a62VklQ5L+h5oGvICovXG4gICAgcHVibGljIHZpcEluZm86IHNjX2dldHVzZXJ2aXBpbmZvO1xuXG4gICAgLyoqdmlwIOeahOmFjee9ruS/oeaBryAqL1xuICAgIHB1YmxpYyB2aXBDb25maWc6IHZpcENvbmZpZztcblxuICAgIC8qKnZpcCDnrYnnuqcgKi9cbiAgICBwdWJsaWMgdmlwTGV2ZWw6IG51bWJlciA9IDA7XG5cbiAgICAvKiros73kuovmlbjmk5ogKi9cbiAgICBwdWJsaWMgbWF0Y2hEYXRhOiBDb21wZXRlSW5mb1tdO1xuICAgIC8qKui1m+S6i+aOkuWQjSAqL1xuICAgIHB1YmxpYyBtYXRjaFJhbmsgPSB7fTtcblxuICAgIC8qKuW8ueeql+WFrOWRiiAqL1xuICAgIHB1YmxpYyBub3RpY2U6IG5vdGljZVtdID0gW107XG5cbiAgICAvKirot5Hpqaznga8gKi9cbiAgICBwdWJsaWMgYnJvYWRub3RpY2U6IG5vdGljZVtdID0gW107XG5cbiAgICAvKirog4zljIXmlbDmja4gKi9cbiAgICBwdWJsaWMgYmFncGFja0RhdGE6IFByb3BJbmZvW10gPSBbXTtcblxuICAgIC8qKumCruS7tua2iOaBryAqL1xuICAgIHB1YmxpYyBlbWFpbEluZm86IHNjX2dldGVtYWlsbGlzdDtcblxuICAgIC8qKuaYr+WQpuiuvue9ruaUr+S7mOWvhueggSAqL1xuICAgIHB1YmxpYyBpc1NldFBheVBhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgSW5pdCgpOiB2b2lkIHsgfVxuICAgIHB1YmxpYyBDbGVhckRhdGEoKTogdm9pZCB7XG4gICAgfVxuICAgIHB1YmxpYyB2aXBBZGRyZXNzOiBzdHJpbmcgPSBcIlwiO1xuXG59Il19
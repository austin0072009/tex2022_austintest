"use strict";
cc._RF.push(module, '98934RDxJpLK6ZlSo0mYwQx', 'LanguageConfig');
// GameHall/script/Lobby/LanguageConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageConfig = void 0;
var AppConst_1 = require("../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
/**
 * @description  jttext簡體中文  fttext繁體中文  englishtext英語
 */
var LanguageConfig = /** @class */ (function () {
    function LanguageConfig() {
    }
    LanguageConfig.getLanguageById = function (languageId) {
        var str = "";
        for (var key in this.t_language) {
            if (Object.prototype.hasOwnProperty.call(this.t_language, key)) {
                if (languageId == Number(key)) {
                    var element = this.t_language[key];
                    switch (AppConst_1.AppConst.languageType) {
                        case 1:
                            str = element.fttext;
                            break;
                        case 2:
                            str = element.jttext;
                            break;
                        case 3:
                            str = element.englishtext;
                            break;
                        default:
                            break;
                    }
                    return str;
                }
            }
        }
        return str;
    };
    LanguageConfig.t_language = {
        10001: { "jttext": "连接服务器失败，请检查网络", "fttext": "連接服務器失敗，請檢查網絡！", "englishtext": "" },
        10101: { "jttext": "修改成功", "fttext": "修改成功", "englishtext": "" },
        10102: { "jttext": "已经是此头像", "fttext": "已經是此頭像", "englishtext": "" },
        10103: { "jttext": "金币不足，修改失败", "fttext": "金幣不足，修改失敗", "englishtext": "" },
        10104: { "jttext": "未找到对应头像框", "fttext": "未找到對應頭像框", "englishtext": "" },
        10105: { "jttext": "昵称重复", "fttext": "暱稱重複", "englishtext": "" },
        10106: { "jttext": "已经是此头像", "fttext": "已經是此頭像", "englishtext": "" },
        10107: { "jttext": "已经是此头像框", "fttext": "已經是此頭像框", "englishtext": "" },
        10108: { "jttext": "修改失败", "fttext": "修改失敗", "englishtext": "" },
        11001: { "jttext": "发展下线即可解锁红包", "fttext": "發展下線即可解鎖紅包", "englishtext": "" },
        11002: { "jttext": "基金不足", "fttext": "基金不足", "englishtext": "" },
        11003: { "jttext": "余额不足", "fttext": "餘額不足", "englishtext": "" },
        11004: { "jttext": "社区不存在", "fttext": "社區不存在", "englishtext": "" },
        11005: { "jttext": "输入不正确", "fttext": "輸入不正確", "englishtext": "" },
        11006: { "jttext": "没有找到该房间", "fttext": "沒有找到該房間", "englishtext": "" },
        11007: { "jttext": "无战绩数据", "fttext": "無戰績數據", "englishtext": "" },
        11008: { "jttext": "获取战绩失败", "fttext": "獲取戰績失敗", "englishtext": "" },
        11009: { "jttext": "活动已结束", "fttext": "活動已結束", "englishtext": "" },
        12001: { "jttext": "请输入完整的6位数密码", "fttext": "請輸入完整的6位數密碼", "englishtext": "" },
        12002: { "jttext": "两次输入的密码不一致", "fttext": "兩次輸入的密碼不一致", "englishtext": "" },
        12003: { "jttext": "输入的密码格式不对", "fttext": "輸入的密碼格式不對", "englishtext": "" },
        12004: { "jttext": "设置支付密码成功", "fttext": "設置支付密碼成功", "englishtext": "" },
        12005: { "jttext": "已经设置过初始密码", "fttext": "已經設置過初始密碼", "englishtext": "" },
        13001: { "jttext": "游戏正在下载中，不允许同时下载，请耐心等待！", "fttext": "遊戲正在下載中，不允許同時下載，請耐心等待！", "englishtext": "" },
    };
    return LanguageConfig;
}());
exports.LanguageConfig = LanguageConfig;

cc._RF.pop();
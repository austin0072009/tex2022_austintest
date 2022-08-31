
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/LanguageConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXExhbmd1YWdlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUF1RjtBQUV2Rjs7R0FFRztBQUNIO0lBQUE7SUEyREEsQ0FBQztJQTNCaUIsOEJBQWUsR0FBN0IsVUFBOEIsVUFBa0I7UUFDNUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQzVELElBQUksVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDM0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDckMsUUFBUSxtQkFBUSxDQUFDLFlBQVksRUFBRTt3QkFDM0IsS0FBSyxDQUFDOzRCQUNGLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUNyQixNQUFNO3dCQUNWLEtBQUssQ0FBQzs0QkFDRixHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDckIsTUFBTTt3QkFDVixLQUFLLENBQUM7NEJBQ0YsR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7NEJBQzFCLE1BQU07d0JBQ1Y7NEJBQ0ksTUFBTTtxQkFDYjtvQkFDRCxPQUFPLEdBQUcsQ0FBQztpQkFDZDthQUNKO1NBQ0o7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUF4RGEseUJBQVUsR0FBRztRQUN2QixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBRW5GLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ2hFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ3BFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQzFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ3hFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ2hFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ3BFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ3RFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBRWhFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQzVFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ2hFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ2hFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ2xFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ2xFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ3RFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ2xFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ3BFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBRWxFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQzlFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQzVFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQzFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBQ3hFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFO1FBRTFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRTtLQUN2RyxDQUFBO0lBNkJMLHFCQUFDO0NBM0RELEFBMkRDLElBQUE7QUEzRFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAganR0ZXh057Ch6auU5Lit5paHICBmdHRleHTnuYHpq5TkuK3mlocgIGVuZ2xpc2h0ZXh06Iux6KqeXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VDb25maWcge1xyXG4gICAgcHVibGljIHN0YXRpYyB0X2xhbmd1YWdlID0ge1xyXG4gICAgICAgIDEwMDAxOiB7IFwianR0ZXh0XCI6IFwi6L+e5o6l5pyN5Yqh5Zmo5aSx6LSl77yM6K+35qOA5p+l572R57ucXCIsIFwiZnR0ZXh0XCI6IFwi6YCj5o6l5pyN5YuZ5Zmo5aSx5pWX77yM6KuL5qqi5p+l57ay57Wh77yBXCIsIFwiZW5nbGlzaHRleHRcIjogXCJcIiB9LFxyXG5cclxuICAgICAgICAxMDEwMTogeyBcImp0dGV4dFwiOiBcIuS/ruaUueaIkOWKn1wiLCBcImZ0dGV4dFwiOiBcIuS/ruaUueaIkOWKn1wiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuICAgICAgICAxMDEwMjogeyBcImp0dGV4dFwiOiBcIuW3sue7j+aYr+atpOWktOWDj1wiLCBcImZ0dGV4dFwiOiBcIuW3sue2k+aYr+atpOmgreWDj1wiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuICAgICAgICAxMDEwMzogeyBcImp0dGV4dFwiOiBcIumHkeW4geS4jei2s++8jOS/ruaUueWksei0pVwiLCBcImZ0dGV4dFwiOiBcIumHkeW5o+S4jei2s++8jOS/ruaUueWkseaVl1wiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuICAgICAgICAxMDEwNDogeyBcImp0dGV4dFwiOiBcIuacquaJvuWIsOWvueW6lOWktOWDj+ahhlwiLCBcImZ0dGV4dFwiOiBcIuacquaJvuWIsOWwjeaHiemgreWDj+ahhlwiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuICAgICAgICAxMDEwNTogeyBcImp0dGV4dFwiOiBcIuaYteensOmHjeWkjVwiLCBcImZ0dGV4dFwiOiBcIuaaseeosemHjeikh1wiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuICAgICAgICAxMDEwNjogeyBcImp0dGV4dFwiOiBcIuW3sue7j+aYr+atpOWktOWDj1wiLCBcImZ0dGV4dFwiOiBcIuW3sue2k+aYr+atpOmgreWDj1wiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuICAgICAgICAxMDEwNzogeyBcImp0dGV4dFwiOiBcIuW3sue7j+aYr+atpOWktOWDj+ahhlwiLCBcImZ0dGV4dFwiOiBcIuW3sue2k+aYr+atpOmgreWDj+ahhlwiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuICAgICAgICAxMDEwODogeyBcImp0dGV4dFwiOiBcIuS/ruaUueWksei0pVwiLCBcImZ0dGV4dFwiOiBcIuS/ruaUueWkseaVl1wiLCBcImVuZ2xpc2h0ZXh0XCI6IFwiXCIgfSxcclxuXHJcbiAgICAgICAgMTEwMDE6IHsgXCJqdHRleHRcIjogXCLlj5HlsZXkuIvnur/ljbPlj6/op6PplIHnuqLljIVcIiwgXCJmdHRleHRcIjogXCLnmbzlsZXkuIvnt5rljbPlj6/op6PpjpbntIXljIVcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDI6IHsgXCJqdHRleHRcIjogXCLln7rph5HkuI3otrNcIiwgXCJmdHRleHRcIjogXCLln7rph5HkuI3otrNcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDM6IHsgXCJqdHRleHRcIjogXCLkvZnpop3kuI3otrNcIiwgXCJmdHRleHRcIjogXCLppJjpoY3kuI3otrNcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDQ6IHsgXCJqdHRleHRcIjogXCLnpL7ljLrkuI3lrZjlnKhcIiwgXCJmdHRleHRcIjogXCLnpL7ljYDkuI3lrZjlnKhcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDU6IHsgXCJqdHRleHRcIjogXCLovpPlhaXkuI3mraPnoa5cIiwgXCJmdHRleHRcIjogXCLovLjlhaXkuI3mraPnorpcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDY6IHsgXCJqdHRleHRcIjogXCLmsqHmnInmib7liLDor6XmiL/pl7RcIiwgXCJmdHRleHRcIjogXCLmspLmnInmib7liLDoqbLmiL/plpNcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDc6IHsgXCJqdHRleHRcIjogXCLml6DmiJjnu6nmlbDmja5cIiwgXCJmdHRleHRcIjogXCLnhKHmiLDnuL7mlbjmk5pcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDg6IHsgXCJqdHRleHRcIjogXCLojrflj5bmiJjnu6nlpLHotKVcIiwgXCJmdHRleHRcIjogXCLnjbLlj5bmiLDnuL7lpLHmlZdcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTEwMDk6IHsgXCJqdHRleHRcIjogXCLmtLvliqjlt7Lnu5PmnZ9cIiwgXCJmdHRleHRcIjogXCLmtLvli5Xlt7LntZDmnZ9cIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcblxyXG4gICAgICAgIDEyMDAxOiB7IFwianR0ZXh0XCI6IFwi6K+36L6T5YWl5a6M5pW055qENuS9jeaVsOWvhueggVwiLCBcImZ0dGV4dFwiOiBcIuiri+i8uOWFpeWujOaVtOeahDbkvY3mlbjlr4bnorxcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTIwMDI6IHsgXCJqdHRleHRcIjogXCLkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7RcIiwgXCJmdHRleHRcIjogXCLlhanmrKHovLjlhaXnmoTlr4bnorzkuI3kuIDoh7RcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTIwMDM6IHsgXCJqdHRleHRcIjogXCLovpPlhaXnmoTlr4bnoIHmoLzlvI/kuI3lr7lcIiwgXCJmdHRleHRcIjogXCLovLjlhaXnmoTlr4bnorzmoLzlvI/kuI3lsI1cIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTIwMDQ6IHsgXCJqdHRleHRcIjogXCLorr7nva7mlK/ku5jlr4bnoIHmiJDlip9cIiwgXCJmdHRleHRcIjogXCLoqK3nva7mlK/ku5jlr4bnorzmiJDlip9cIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcbiAgICAgICAgMTIwMDU6IHsgXCJqdHRleHRcIjogXCLlt7Lnu4/orr7nva7ov4fliJ3lp4vlr4bnoIFcIiwgXCJmdHRleHRcIjogXCLlt7LntpPoqK3nva7pgY7liJ3lp4vlr4bnorxcIiwgXCJlbmdsaXNodGV4dFwiOiBcIlwiIH0sXHJcblxyXG4gICAgICAgIDEzMDAxOiB7IFwianR0ZXh0XCI6IFwi5ri45oiP5q2j5Zyo5LiL6L295Lit77yM5LiN5YWB6K645ZCM5pe25LiL6L2977yM6K+36ICQ5b+D562J5b6F77yBXCIsIFwiZnR0ZXh0XCI6IFwi6YGK5oiy5q2j5Zyo5LiL6LyJ5Lit77yM5LiN5YWB6Kix5ZCM5pmC5LiL6LyJ77yM6KuL6ICQ5b+D562J5b6F77yBXCIsIFwiZW5nbGlzaHRleHRcIjogXCJcIiB9LFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFuZ3VhZ2VCeUlkKGxhbmd1YWdlSWQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy50X2xhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy50X2xhbmd1YWdlLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2VJZCA9PSBOdW1iZXIoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnRfbGFuZ3VhZ2Vba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKEFwcENvbnN0Lmxhbmd1YWdlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBlbGVtZW50LmZ0dGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBlbGVtZW50Lmp0dGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBlbGVtZW50LmVuZ2xpc2h0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbn0iXX0=
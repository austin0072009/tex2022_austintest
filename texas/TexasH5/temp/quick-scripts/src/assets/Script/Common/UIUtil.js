"use strict";
cc._RF.push(module, '6b5c6UVXQ1GWb8SVQX1ZpRM', 'UIUtil');
// Script/Common/UIUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPrefs = exports.UIUtil = void 0;
var BaseFrameNative_1 = require("../../Script/BaseFrameNative");
var CommonCtr_1 = require("../BaseFrame/CommonCtr");
var HttpHelpEx_1 = require("./Managers/HttpHelpEx");
var UIUtil = /** @class */ (function () {
    function UIUtil() {
    }
    UIUtil.formatNumber = function (_val) {
        return +(_val / 100).toFixed(2).slice(0, -1);
    };
    UIUtil.formatNumber100 = function (_val) {
        var strNum = (_val / 100).toString();
        0.06;
        var str = strNum.indexOf(".") >= 0 ? strNum.split(".")[1] : "";
        if (str.length != 0 && str.substring(0, 1) != "0") {
            return Number.parseFloat((_val / 100).toFixed(2).slice(0, -1));
        }
        else {
            return UIUtil.NumberToInt(_val / 100);
        }
    };
    UIUtil.formatNumber100ToK = function (val) {
        var _val = UIUtil.formatNumber100(val);
        if (_val < 1000) {
            return _val + "";
        }
        var strNum = (_val / 1000).toString();
        var str = strNum.indexOf(".") >= 0 ? strNum.split(".")[1] : "";
        var num = 0;
        if (str.length != 0 && str.substring(0, 1) != "0") {
            return Number.parseFloat((_val / 1000).toFixed(2).slice(0, -1)) + "K";
        }
        else {
            return UIUtil.NumberToInt(_val / 1000) + "K";
        }
    };
    UIUtil.isNumber = function (text) {
        var n = Number(text);
        if (!isNaN(n)) {
            return true;
        }
        else {
            return false;
        }
    };
    // 加载图片
    UIUtil.loadImage = function (loader, resNameorurl, packageName) {
        var httptype = false;
        var httpHead = false;
        if (resNameorurl.startsWith("http"))
            httptype = true;
        if (resNameorurl.indexOf("fordlc/wechat") != -1) {
            httpHead = true;
            resNameorurl = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + resNameorurl;
        }
        if (httptype || httpHead) {
            loader.url = resNameorurl;
        }
        else {
            var res_url = fgui.UIPackage.getItemURL(packageName, resNameorurl);
            loader.url = res_url;
        }
    };
    // 加载商城图片
    UIUtil.loadShopImage = function (loader, resNameorurl, packageName) {
        var httptype = false;
        var httpHead = false;
        if (resNameorurl.startsWith("http"))
            httptype = true;
        if (resNameorurl.indexOf("fordlc/wechat") != -1) {
            httpHead = true;
            resNameorurl = BaseFrameNative_1.BaseFrameNative.serverlistItem.api2 + resNameorurl;
        }
        if (httptype || httpHead) {
            loader.url = resNameorurl;
        }
        else {
            var res_url = fgui.UIPackage.getItemURL(packageName, resNameorurl);
            loader.url = res_url;
        }
    };
    // 添加搜索路径
    UIUtil.addSearchPaths = function (path) {
        var pathList = jsb.fileUtils.getSearchPaths();
        for (var index = 0; index < pathList.length; index++) {
            var tempPath = pathList[index];
            if (tempPath == path) {
                return;
            }
        }
        // 没有加到搜索路径
        pathList.unshift(path);
        jsb.fileUtils.setSearchPaths(pathList);
    };
    /// <summary>
    /// Image 变灰开关
    /// </summary>
    /// <param name="target"></param>
    /// <param name="flag"></param>
    UIUtil.ImageGreyToggle = function (target, flag) {
        if (target == null)
            return;
        target.grayed = flag;
    };
    //影藏节点下的子节点
    UIUtil.HideChildren = function (com, isShow) {
        if (isShow === void 0) { isShow = false; }
        if (com == null)
            return;
        for (var i = 0; i < com._children.length; i++) {
            com._children[i].visible = isShow;
        }
    };
    //文本长度限制
    UIUtil.SetLimitTxt = function (txt, content, length) {
        if (length === void 0) { length = 6; }
        if (txt != null) {
            txt.text = this.getNickNameSub(content, length);
        }
    };
    UIUtil.getNickNameSub = function (str, _length) {
        if (this.strLength(str) <= _length) {
            return str;
        }
        var resStr = "";
        var cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                cnt += 2;
            }
            else {
                cnt++;
            }
            resStr += str.substring(i, i + 1);
            if (cnt >= _length)
                break;
        }
        return resStr;
    };
    UIUtil.strLength = function (str) {
        var cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255)
                cnt += 2;
            else
                cnt++;
        }
        return cnt;
    };
    /// <summary>
    /// 根据秒数获取00：00格式的string
    /// </summary>
    /// <param name="seconds"></param>
    /// <returns></returns>
    UIUtil.getStringTime = function (seconds) {
        var hou = UIUtil.NumberToInt(seconds / (60 * 60 * 24));
        var min = UIUtil.NumberToInt((seconds % (60 * 60 * 24)) / 60);
        var strresult = "";
        var sec = UIUtil.NumberToInt(seconds % 60);
        if (hou > 0) {
            if (hou < 10) {
                strresult = strresult + "0" + hou + ":";
            }
            else {
                strresult = strresult + "" + hou + ":";
            }
        }
        if (min > 0) {
            if (min < 10) {
                strresult = strresult + "0" + min + ":";
            }
            else {
                strresult = strresult + "" + min + ":";
            }
        }
        else {
            strresult = strresult + "00:";
        }
        if (sec > 0) {
            if (sec < 10) {
                strresult = strresult + "0" + sec;
            }
            else {
                strresult = strresult + "" + sec;
            }
        }
        else {
            strresult = strresult + "00";
        }
        return strresult;
    };
    //数组拼接
    UIUtil.Concat = function (arr1, arr2) {
        if (arr1 == null)
            arr1 = [];
        if (arr2 == null)
            arr2 = [];
        arr2.forEach(function (element) {
            arr1.push(element);
        });
        return arr1;
    };
    /**验证字符串是否为数字 */
    UIUtil.checkNumber = function (value) {
        var reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(value)) {
            return true;
        }
        return false;
    };
    //文字渐变,优先使用value
    UIUtil.TextGradient = function (topColor, bottomColor, value, textField) {
        if (value === void 0) { value = ""; }
        var str = "";
        if (textField != null) {
            textField.ubbEnabled = true;
            str = textField.text;
        }
        str = value == null || value == "" ? str : value;
        var strColor = "[color=" + topColor + "," + bottomColor + "]" + str + "[/color]";
        if (textField)
            textField.text = strColor;
        return strColor;
    };
    //小数转整形,Math.floot会进一位
    UIUtil.NumberToInt = function (num) {
        var strNum = num.toString();
        return Number.parseInt(strNum);
    };
    // 客服功能
    UIUtil.kefuFunction = function (callBack) {
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetLogolist";
        var params = {};
        HttpHelpEx_1.default.instance.post(url, params)
            .then(function (res) {
            console.log("---GetLogolist---", res);
            if (res.code == 1) {
                // cc.sys.openURL(res.curl);
                callBack(res.curl);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取客服信息失败");
            }
        }).catch(function (err) {
            console.log("---err---", err);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取客服信息失败");
        });
    };
    //富文本才能显示表情图片  imgUrl：ui://包名/图片
    UIUtil.prototype.EmojiToHtml = function (imgUrl, height, width) {
        if (height === void 0) { height = 50; }
        if (width === void 0) { width = 50; }
        return "<img src=\"" + imgUrl + "\" height=\"" + height + "\" width=\"" + width + "\"></img>";
    };
    return UIUtil;
}());
exports.UIUtil = UIUtil;
var PlayerPrefs = /** @class */ (function () {
    function PlayerPrefs() {
    }
    PlayerPrefs.SetInt = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    PlayerPrefs.SetString = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    PlayerPrefs.GetInt = function (key, value) {
        var _val = cc.sys.localStorage.getItem(key);
        if (_val != null) {
            return Number.parseInt(_val);
        }
        else {
            this.SetInt(key, value);
            return value;
        }
    };
    PlayerPrefs.GetString = function (key, value) {
        var _val = cc.sys.localStorage.getItem(key);
        if (_val != null && _val != "") {
            return _val;
        }
        else {
            this.SetString(key, value);
            return value;
        }
    };
    return PlayerPrefs;
}());
exports.PlayerPrefs = PlayerPrefs;

cc._RF.pop();
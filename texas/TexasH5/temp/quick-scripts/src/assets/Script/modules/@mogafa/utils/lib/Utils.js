"use strict";
cc._RF.push(module, '0528eJw79tGQ5l3rluimqlh', 'Utils');
// Script/modules/@mogafa/utils/lib/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 数字分割
     * @param number 转换目标值
     * @param places 保留小数点
     */
    Utils.formatNumberToInt = function (number, places) {
        if (places === void 0) { places = 0; }
        places = places || 0;
        var thousand = ",";
        var negative = number < 0 ? "-" : "", i = parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) + "", j = (j = i.length) > 3 ? j % 3 : 0;
        return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand);
    };
    /**
     * 转换为计数单位数据
     * @param num
     */
    Utils.numToCountingNnit = function (num) {
        if (num < 1000) {
            return num + "";
        }
        else if (num >= 1000000000) {
            return num / 1000000000 + "B";
        }
        else if (num >= 1000000) {
            return num / 1000000 + "M";
        }
        else if (num >= 1000) {
            return num / 1000 + "K";
        }
    };
    /**
     * 转换为普通数据
     * @param num
     */
    Utils.CountingNnitToNum = function (str) {
        str = str + "";
        var unit = str.substr(str.length - 1, str.length);
        if (unit == "K" || unit == "k") {
            var num = str.substr(0, str.length - 1);
            return Number(num) * 1000;
        }
        else if (unit == "M" || unit == "m") {
            var _num = str.substr(0, str.length - 1);
            return Number(_num) * 1000000;
        }
        else if (unit == "B" || unit == "b") {
            var _num2 = str.substr(0, str.length - 1);
            return Number(_num2) * 1000000000;
        }
    };
    /**
     * 加载Spine动画
     * @param url 全路径
     * @param node 添加到某节点
     * @calFun
     * @param ifPreAlpha 是否开始贴图预乘
     */
    Utils.addSpine = function (url, node, calFun, ifPreAlpha) {
        if (ifPreAlpha === void 0) { ifPreAlpha = false; }
        var spine = null;
        cc.loader.loadRes(url, sp.SkeletonData, function (err, res) {
            spine = node.addComponent(sp.Skeleton);
            spine.skeletonData = res;
            spine.premultipliedAlpha = ifPreAlpha;
            if (spine)
                calFun(spine);
        });
    };
    Utils.create = function (time, startPointX, startPointY, endPointX, endPointY, height, angle) {
        // 把角度转换为弧度
        var radian = (angle * 3.14159) / 180;
        // 第一个控制点为抛物线左半弧的中点
        var q1x = startPointX + (endPointX - startPointX) / 4;
        var q1 = cc.v2(q1x, height + startPointY + Math.cos(radian) * q1x);
        // 第二个控制点为整个抛物线的中点
        var q2x = startPointX + (endPointX - startPointX) / 2;
        var q2 = cc.v2(q2x, height + startPointY + Math.cos(radian) * q2x);
        // 曲线配置
        return cc.bezierTo(time, [q1, q2, cc.v2(endPointX, endPointY)]);
    };
    //生成UUID
    Utils.generateUUID = function () {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var uuid = [], i;
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4";
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16);
                uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join("");
    };
    //将带","转化为number
    Utils.strToNumber = function (str) {
        var strArr = str.split(",");
        var newStr = "";
        strArr.forEach(function (i) {
            newStr += i;
        });
        return Number(newStr);
    };
    //将数字转为有","隔开数据格式
    Utils.numToStr = function (number) {
        var coin = String(number).split("");
        var newCoin = "";
        var curindex = 0;
        for (var index = coin.length - 1; index >= 0; index--) {
            var element = coin[index];
            if (curindex == 3) {
                newCoin += ",";
                curindex = 0;
            }
            curindex++;
            newCoin += element;
        }
        var reverse = function (str) {
            return str.split("").reverse().join("");
        };
        return reverse(newCoin);
    };
    //限制字符串为指定长度
    Utils.subStrLen = function (str, len) {
        var strLength = 0;
        var strLen = 0;
        var strCut = "";
        strLen = str.length;
        for (var i = 0; i < strLen; i++) {
            var a = str.charAt(i);
            strLength++;
            if (escape(a).length > 4) {
                strLength++;
            }
            strCut = strCut.concat(a);
            if (strLength >= len) {
                strCut = strCut.concat("..");
                return strCut;
            }
        }
        if (strLength < len) {
            return str;
        }
        return "?";
    };
    /**
     * 格式化秒为时、分、秒
     * @param value
     */
    Utils.prototype.formatSeconds = function (value) {
        if (value <= 0) {
            cc.error("倒计时不能小于等于0");
            return;
        }
        var h = Math.floor(value / 3600) < 10 ? "0" + Math.floor(value / 3600) : Math.floor(value / 3600);
        var m = Math.floor((value / 60) % 60) < 10 ? "0" + Math.floor((value / 60) % 60) : Math.floor((value / 60) % 60);
        var s = Math.floor(value % 60) < 10 ? "0" + Math.floor(value % 60) : Math.floor(value % 60);
        return {
            hour: h,
            minute: m,
            second: s,
        };
    };
    Utils.getTimeString = function (timer) {
        var second = Math.floor(timer % 60) < 10 ? "0" + Math.floor(timer % 60) : Math.floor(timer % 60);
        var minute = Math.floor((timer / 60) % 60) < 10 ? "0" + Math.floor((timer / 60) % 60) : Math.floor((timer / 60) % 60);
        var hour = Math.floor(timer / 3600) < 10 ? "0" + Math.floor(timer / 3600) : Math.floor(timer / 3600);
        var timeStr = "";
        timeStr = hour.toString() + ":" + minute.toString() + ":" + second.toString();
        return timeStr;
    };
    return Utils;
}());
exports.Utils = Utils;

cc._RF.pop();
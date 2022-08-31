import { BaseFrameNative } from "../../Script/BaseFrameNative";
import { CommonCtr } from "../BaseFrame/CommonCtr";
import HttpHelpEx from "./Managers/HttpHelpEx";

export class UIUtil {
    public static formatNumber(_val: number): number {
        return +(_val / 100).toFixed(2).slice(0, -1);
    }


    public static formatNumber100(_val: number): number {
        let strNum = (_val / 100).toString(); 0.06
        let str = strNum.indexOf(".") >= 0 ? strNum.split(".")[1] : "";
        if (str.length != 0 && str.substring(0, 1) != "0") {
            return Number.parseFloat((_val / 100).toFixed(2).slice(0, -1));
        } else {
            return UIUtil.NumberToInt(_val / 100);
        }
    }

    public static formatNumber100ToK(val: number): string {
        let _val = UIUtil.formatNumber100(val);
        if (_val < 1000) {
            return _val + "";
        }

        let strNum = (_val / 1000).toString();
        let str = strNum.indexOf(".") >= 0 ? strNum.split(".")[1] : "";
        let num = 0;
        if (str.length != 0 && str.substring(0, 1) != "0") {
            return Number.parseFloat((_val / 1000).toFixed(2).slice(0, -1)) + "K";
        } else {
            return UIUtil.NumberToInt(_val / 1000) + "K";
        }
    }

    public static isNumber(text: string) {
        let n = Number(text);
        if (!isNaN(n)) {
            return true;
        } else {
            return false;
        }
    }

    // 加载图片
    public static loadImage(loader: fgui.GLoader, resNameorurl: string, packageName?: string) {
        let httptype: boolean = false;
        let httpHead: boolean = false;
        if (resNameorurl.startsWith("http")) httptype = true;
        if (resNameorurl.indexOf("fordlc/wechat") != -1) {
            httpHead = true;
            resNameorurl = BaseFrameNative.serverlistItem.apiAdress + resNameorurl;
        }

        if (httptype || httpHead) {
            loader.url = resNameorurl;
        } else {
            let res_url = fgui.UIPackage.getItemURL(packageName, resNameorurl);
            loader.url = res_url;
        }
    }

    // 加载商城图片
    public static loadShopImage(loader: fgui.GLoader, resNameorurl: string, packageName?: string) {
        let httptype: boolean = false;
        let httpHead: boolean = false;
        if (resNameorurl.startsWith("http")) httptype = true;
        if (resNameorurl.indexOf("fordlc/wechat") != -1) {
            httpHead = true;
            resNameorurl = BaseFrameNative.serverlistItem.api2 + resNameorurl;
        }
        if (httptype || httpHead) {
            loader.url = resNameorurl;
        } else {
            let res_url = fgui.UIPackage.getItemURL(packageName, resNameorurl);
            loader.url = res_url;
        }
    }

    // 添加搜索路径
    public static addSearchPaths(path: string) {
        let pathList = jsb.fileUtils.getSearchPaths();
        for (let index = 0; index < pathList.length; index++) {
            let tempPath = pathList[index];
            if (tempPath == path) {
                return;
            }
        }
        // 没有加到搜索路径
        pathList.unshift(path);
        jsb.fileUtils.setSearchPaths(pathList);
    }

    /// <summary>
    /// Image 变灰开关
    /// </summary>
    /// <param name="target"></param>
    /// <param name="flag"></param>
    public static ImageGreyToggle(target: fgui.GObject, flag: boolean) {
        if (target == null) return;
        target.grayed = flag
    }

    //影藏节点下的子节点
    public static HideChildren(com: fgui.GComponent, isShow: boolean = false) {
        if (com == null) return;
        for (var i = 0; i < com._children.length; i++) {
            com._children[i].visible = isShow;
        }

    }

    //文本长度限制
    public static SetLimitTxt(txt: fgui.GTextField, content: string, length: number = 6) {
        if (txt != null) {
            txt.text = this.getNickNameSub(content, length);
        }
    }
    public static getNickNameSub(str: string, _length: number): string {
        if (this.strLength(str) <= _length) {
            return str;
        }

        let resStr = "";
        let cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                cnt += 2;
            }
            else {
                cnt++;
            }
            resStr += str.substring(i, i + 1);

            if (cnt >= _length) break;
        }
        return resStr;
    }
    public static strLength(str) {
        var cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255)
                cnt += 2;
            else
                cnt++;
        }
        return cnt;
    }


    /// <summary>
    /// 根据秒数获取00：00格式的string
    /// </summary>
    /// <param name="seconds"></param>
    /// <returns></returns>
    public static getStringTime(seconds: number): string {
        let hou = UIUtil.NumberToInt(seconds / (60 * 60 * 24));
        let min = UIUtil.NumberToInt((seconds % (60 * 60 * 24)) / 60);
        let strresult = "";
        let sec = UIUtil.NumberToInt(seconds % 60);
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
    }

    //数组拼接
    public static Concat<T>(arr1: T[], arr2: T[]): T[] {
        if (arr1 == null) arr1 = [];
        if (arr2 == null) arr2 = [];
        arr2.forEach(element => {
            arr1.push(element);
        });
        return arr1;
    }

    /**验证字符串是否为数字 */
    public static checkNumber(value: any) {
        let reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(value)) {
            return true;
        }
        return false;
    }

    //文字渐变,优先使用value
    public static TextGradient(topColor: string, bottomColor: string, value: string = "", textField?: fgui.GTextField): string {
        let str = "";
        if (textField != null) {
            textField.ubbEnabled = true;
            str = textField.text;
        }
        str = value == null || value == "" ? str : value;
        let strColor = "[color=" + topColor + "," + bottomColor + "]" + str + "[/color]";
        if (textField) textField.text = strColor;
        return strColor;
    }

    //小数转整形,Math.floot会进一位
    public static NumberToInt(num: number): number {
        let strNum: string = num.toString();
        return Number.parseInt(strNum);
    }

    // 客服功能
    public static kefuFunction(callBack: Function) {
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetLogolist";
        let params = {}
        HttpHelpEx.instance.post(url, params)
            .then((res) => {
                console.log("---GetLogolist---", res);
                if (res.code == 1) {
                    // cc.sys.openURL(res.curl);
                    callBack(res.curl);
                } else {
                    CommonCtr.instance.view.ShowTipLabel("获取客服信息失败");
                }
            }).catch((err) => {
                console.log("---err---", err)
                CommonCtr.instance.view.ShowTipLabel("获取客服信息失败");
            })
    }

    //富文本才能显示表情图片  imgUrl：ui://包名/图片
    public EmojiToHtml(imgUrl: string, height: number = 50, width: number = 50): string {
        return `<img src="${imgUrl}" height="${height}" width="${width}"></img>`
    }
}

export class PlayerPrefs {
    public static SetInt(key: string, value: number) {
        cc.sys.localStorage.setItem(key, value);
    }

    public static SetString(key: string, value: string) {
        cc.sys.localStorage.setItem(key, value);
    }

    public static GetInt(key: string, value: number): number {
        let _val: string = cc.sys.localStorage.getItem(key);
        if (_val != null) {
            return Number.parseInt(_val);
        } else {
            this.SetInt(key, value);
            return value;
        }
    }

    public static GetString(key: string, value: string): string {
        let _val: string = cc.sys.localStorage.getItem(key);
        if (_val != null && _val != "") {
            return _val;
        } else {
            this.SetString(key, value);
            return value;
        }
    }
}
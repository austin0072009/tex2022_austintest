"use strict";
cc._RF.push(module, 'cbc65C3oFNEDYYCcxUti0tK', 'Res');
// Script/BaseFrame/Res.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Res = void 0;
var Res = /** @class */ (function () {
    function Res() {
    }
    Object.defineProperty(Res, "Singleton", {
        //单例
        get: function () {
            if (!this._instance) {
                this._instance = new Res();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /// <summary>
    /// 释放一个资源
    /// </summary>
    /// <param name="obj"></param>
    Res.prototype.destroy = function (obj, flag) {
        if (flag === void 0) { flag = true; }
        if (obj == null)
            return;
        obj.parent = null;
        obj.destroy();
        obj = null;
    };
    /// <summary>
    /// 特效资源加载接口， 目前发现只有角色战斗特效调用此接口，以后特效需要都通过此接口调用
    /// change by jsw
    /// </summary>
    /// <param name="name"></param>
    /// <param name="path"></param>
    /// <returns></returns>
    Res.prototype.LoadEffect = function (name, lifeValue) {
        if (lifeValue === void 0) { lifeValue = 1; }
        if (name == "")
            return null;
        // string[] arr = name.split('/');
        // if (arr.Length > 1)
        // {
        //     name = arr[arr.Length - 1];
        // } 
        // return EffectAssetManager.Singleton.GetEffectAsset(name, lifeValue);
        return null;
    };
    /// <summary>
    /// 得到共享纹理
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    Res.prototype.GetShareTexture = function (name, isEffectTex) {
        if (isEffectTex === void 0) { isEffectTex = false; }
        // return ShareTextureManager.Singleton.GetTexture(name, isEffectTex);
        return null;
    };
    /// <summary>
    /// 设置image对象的sprite 动态设置图集资源必须通过此接口 
    /// </summary>
    Res.prototype.SetImageSprite1 = function (ui_icon, packageName, url) {
        if (ui_icon == null)
            return false;
        var iconurl = fgui.UIPackage.getItemURL(packageName, url);
        ui_icon.url = iconurl;
        return false;
    };
    /// <summary>
    /// 这个方法以后要被弃用。
    /// add by jsw
    /// </summary>
    Res.prototype.SetImageSprite = function (image, altasName, spName, addRef) {
        if (addRef === void 0) { addRef = true; }
        // return UIAtlasManager.Singleton.SetSprite(image, altasName, spName, addRef);
        return null;
    };
    return Res;
}());
exports.Res = Res;

cc._RF.pop();
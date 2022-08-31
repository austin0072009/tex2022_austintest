
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/Res.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUtJO0lBR0EsQ0FBQztJQUdELHNCQUFXLGdCQUFTO1FBRHBCLElBQUk7YUFDSjtZQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7YUFDNUI7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCw4QkFBOEI7SUFDdEIscUJBQU8sR0FBZixVQUFpQixHQUFXLEVBQUksSUFBbUI7UUFBbkIscUJBQUEsRUFBQSxXQUFtQjtRQUUvQyxJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQ1gsT0FBTztRQUNQLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUNmLHdCQUFVLEdBQWxCLFVBQXFCLElBQVcsRUFBSSxTQUFvQjtRQUFwQiwwQkFBQSxFQUFBLGFBQW9CO1FBRXBELElBQUksSUFBSSxJQUFJLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztRQUNoQixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLElBQUk7UUFDSixrQ0FBa0M7UUFDbEMsS0FBSztRQUNMLHVFQUF1RTtRQUN2RSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUNmLDZCQUFlLEdBQXZCLFVBQXlCLElBQVcsRUFBSyxXQUEyQjtRQUEzQiw0QkFBQSxFQUFBLG1CQUEyQjtRQUVoRSxzRUFBc0U7UUFDdEUsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdELGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztJQUNMLDZCQUFlLEdBQXhCLFVBQTBCLE9BQW9CLEVBQUksV0FBa0IsRUFBRSxHQUFVO1FBRTVFLElBQUksT0FBTyxJQUFJLElBQUk7WUFBSSxPQUFPLEtBQUssQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDTCw0QkFBYyxHQUF2QixVQUF5QixLQUFxQixFQUFJLFNBQWdCLEVBQUksTUFBYSxFQUFJLE1BQXFCO1FBQXJCLHVCQUFBLEVBQUEsYUFBcUI7UUFFeEcsK0VBQStFO1FBQy9FLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUF3RkwsVUFBQztBQUFELENBNUtBLEFBNEtDLElBQUE7QUE1S1ksa0JBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSBcInRpbWVyc1wiO1xuIFxuXG5leHBvcnQgY2xhc3MgUmVzXG57XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJlczsgLy/nsbvlnovkuLrov5nkuKrnsbsgXG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcbiAgICB7ICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy/ljZXkvotcbiAgICBzdGF0aWMgZ2V0IFNpbmdsZXRvbigpIFxuICAgIHtcbiAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfSBcbiBcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOmHiuaUvuS4gOS4qui1hOa6kFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwib2JqXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgIGRlc3Ryb3koIG9iajpjYy5Ob2RlLCAgIGZsYWc6Ym9vbGVhbiA9IHRydWUpOnZvaWRcbiAgICB7XG4gICAgICAgIGlmIChvYmogPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG9iai5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgb2JqLmRlc3Ryb3koKTtcbiAgICAgICAgb2JqID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeJueaViOi1hOa6kOWKoOi9veaOpeWPo++8jCDnm67liY3lj5HnjrDlj6rmnInop5LoibLmiJjmlpfnibnmlYjosIPnlKjmraTmjqXlj6PvvIzku6XlkI7nibnmlYjpnIDopoHpg73pgJrov4fmraTmjqXlj6PosIPnlKhcbiAgICAvLy8gY2hhbmdlIGJ5IGpzd1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwibmFtZVwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwicGF0aFwiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgIExvYWRFZmZlY3QoICBuYW1lOnN0cmluZywgICBsaWZlVmFsdWU6bnVtYmVyID0gMSkgOmNjLk9iamVjdFxuICAgIHtcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAvLyBzdHJpbmdbXSBhcnIgPSBuYW1lLnNwbGl0KCcvJyk7XG4gICAgICAgIC8vIGlmIChhcnIuTGVuZ3RoID4gMSlcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgbmFtZSA9IGFyclthcnIuTGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIH0gXG4gICAgICAgIC8vIHJldHVybiBFZmZlY3RBc3NldE1hbmFnZXIuU2luZ2xldG9uLkdldEVmZmVjdEFzc2V0KG5hbWUsIGxpZmVWYWx1ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5b6X5Yiw5YWx5Lqr57q555CGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJuYW1lXCI+PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHB1YmxpYyAgR2V0U2hhcmVUZXh0dXJlKCBuYW1lOnN0cmluZyAsICAgaXNFZmZlY3RUZXggOmJvb2xlYW49IGZhbHNlKTpjYy5UZXh0dXJlMkRcbiAgICB7XG4gICAgICAgIC8vIHJldHVybiBTaGFyZVRleHR1cmVNYW5hZ2VyLlNpbmdsZXRvbi5HZXRUZXh0dXJlKG5hbWUsIGlzRWZmZWN0VGV4KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiuvue9rmltYWdl5a+56LGh55qEc3ByaXRlIOWKqOaAgeiuvue9ruWbvumbhui1hOa6kOW/hemhu+mAmui/h+atpOaOpeWPoyBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyAgIFNldEltYWdlU3ByaXRlMSggdWlfaWNvbjpmZ3VpLkdMb2FkZXIsICAgcGFja2FnZU5hbWU6c3RyaW5nLCB1cmw6c3RyaW5nICk6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgaWYgKHVpX2ljb24gPT0gbnVsbCAgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBpY29udXJsID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbVVSTChwYWNrYWdlTmFtZSwgdXJsKTtcbiAgICAgICAgdWlfaWNvbi51cmwgPSBpY29udXJsOyBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi/meS4quaWueazleS7peWQjuimgeiiq+W8g+eUqOOAglxuICAgIC8vLyBhZGQgYnkganN3XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgICBTZXRJbWFnZVNwcml0ZSggaW1hZ2U6ZmFpcnlndWkuR0ltYWdlLCAgIGFsdGFzTmFtZTpzdHJpbmcsICAgc3BOYW1lOnN0cmluZywgICBhZGRSZWYgOmJvb2xlYW49IHRydWUpOmJvb2xlYW5cbiAgICB7XG4gICAgICAgIC8vIHJldHVybiBVSUF0bGFzTWFuYWdlci5TaW5nbGV0b24uU2V0U3ByaXRlKGltYWdlLCBhbHRhc05hbWUsIHNwTmFtZSwgYWRkUmVmKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gLy8vIDxzdW1tYXJ5PlxuICAgIC8vIC8vLyDmqKHlnovkuJPnlKjliqDovb3mlrnms5UgXG4gICAgLy8gLy8vIDwvc3VtbWFyeT5cbiAgICAvLyAvLy8gPHBhcmFtIG5hbWU9XCJuYW1lXCI+PC9wYXJhbT5cbiAgICAvLyAvLy8gPHBhcmFtIG5hbWU9XCJwYXRoXCI+PC9wYXJhbT5cbiAgICAvLyAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIC8vIHB1YmxpYyBHYW1lT2JqZWN0IEluc3RhbnRpYXRlTW9kZWwoc3RyaW5nIG5hbWUpXG4gICAgLy8ge1xuICAgIC8vICAgICBVbml0eUVuZ2luZS5PYmplY3QgdG1wb2JqID0gTW9kZWxBc3NldE1hbmFnZXIuU2luZ2xldG9uLkdldE1vZGVsKG5hbWUpOy8vbG9hZEFsbGNsaXDmmoLml7bkuI3lvIDmlL4gLy9TY2VuZUV4LkN1cnJlbnQuTG9hZENoYXJhY3RvclN5bmMobmFtZSk7ICAvL2NoYW5nZSBieSBqc3dcbiAgICAvLyAgICAgaWYgKHRtcG9iaiAhPSBudWxsKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICAvL2lmIChwb3MgIT0gbnVsbCAmJiByb3RhdGlvbiAhPSBudWxsKSBHYW1lT2JqZWN0Lkluc3RhbnRpYXRlKHRtcG9iaiwgcG9zLlZhbHVlLCByb3RhdGlvbi5WYWx1ZSkgYXMgR2FtZU9iamVjdDsgICAgXG4gICAgLy8gICAgICAgICByZXR1cm4gR2FtZU9iamVjdC5JbnN0YW50aWF0ZSh0bXBvYmopIGFzIEdhbWVPYmplY3Q7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBEZWJ1Zy5Mb2dFcnJvcihcImNhbiBub3QgZmluZCBtb2RlbDogXCIgKyBuYW1lKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIHB1YmxpYyBHYW1lT2JqZWN0IEluc3RhbnRpYXRlTW9kZWxhbmRUZXgoc3RyaW5nIG5hbWUpXG4gICAgLy8ge1xuICAgIC8vICAgICBNYXRlcmlhbCBtYXRlcmlhbCA9IE1vZGVsQXNzZXRNYW5hZ2VyLlNpbmdsZXRvbi5HZXRNYXRlcmlhbEFzc2V0KFwibWFoam9uZ3RpbGVfbW9iaWxlX3VubGl0XCIpOyAgLy9hZGQgYnkganN3ICAgIGNtYXRfXG4gICAgLy8gICAgIFVuaXR5RW5naW5lLk9iamVjdCB0bXBvYmogPSBNb2RlbEFzc2V0TWFuYWdlci5TaW5nbGV0b24uR2V0TW9kZWwobmFtZSk7Ly9sb2FkQWxsY2xpcOaaguaXtuS4jeW8gOaUviAvL1NjZW5lRXguQ3VycmVudC5Mb2FkQ2hhcmFjdG9yU3luYyhuYW1lKTsgIC8vY2hhbmdlIGJ5IGpzd1xuICAgIC8vICAgICBpZiAodG1wb2JqICE9IG51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIC8vaWYgKHBvcyAhPSBudWxsICYmIHJvdGF0aW9uICE9IG51bGwpIEdhbWVPYmplY3QuSW5zdGFudGlhdGUodG1wb2JqLCBwb3MuVmFsdWUsIHJvdGF0aW9uLlZhbHVlKSBhcyBHYW1lT2JqZWN0OyAgICBcbiAgICAvLyAgICAgICAgIEdhbWVPYmplY3QgX3RlbXAgPSBHYW1lT2JqZWN0Lkluc3RhbnRpYXRlKHRtcG9iaikgYXMgR2FtZU9iamVjdDtcbiAgICAvLyAgICAgICAgIE1lc2hSZW5kZXJlciBfdG1yID0gX3RlbXAuR2V0Q29tcG9uZW50PE1lc2hSZW5kZXJlcj4oKTtcbiAgICAvLyAgICAgICAgIF90bXIuc2hhcmVkTWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAvLyAgICAgICAgIHJldHVybiBfdGVtcDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIERlYnVnLkxvZ0Vycm9yKFwiY2FuIG5vdCBmaW5kIG1vZGVsOiBcIiArIG5hbWUpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gcHVibGljIFVuaXR5RW5naW5lLk9iamVjdCBHZXRPYmplY3Qoc3RyaW5nIG5hbWUpXG4gICAgLy8ge1xuICAgIC8vICAgICByZXR1cm4gTW9kZWxBc3NldE1hbmFnZXIuU2luZ2xldG9uLkdldE1vZGVsKG5hbWUpO1xuICAgIC8vIH1cblxuICAgIC8vIC8vYWRkIGJ5IGpzd1xuICAgIC8vIHB1YmxpYyBHYW1lT2JqZWN0IEluc3RhbnRpYXRlQ0VmZmVjdChzdHJpbmcgbmFtZSwgVmVjdG9yMz8gcG9zID0gbnVsbCwgUXVhdGVybmlvbj8gcm90YXRpb24gPSBudWxsKVxuICAgIC8vIHtcbiAgICAvLyAgICAgVW5pdHlFbmdpbmUuT2JqZWN0IHRtcG9iaiA9IExvYWRFZmZlY3QobmFtZSk7XG4gICAgLy8gICAgIGlmICh0bXBvYmogIT0gbnVsbClcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgaWYgKHBvcyAhPSBudWxsICYmIHJvdGF0aW9uICE9IG51bGwpXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIEdhbWVPYmplY3QuSW5zdGFudGlhdGUodG1wb2JqLCBwb3MuVmFsdWUsIHJvdGF0aW9uLlZhbHVlKSBhcyBHYW1lT2JqZWN0O1xuICAgIC8vICAgICAgICAgZWxzZSBpZiAocG9zICE9IG51bGwgJiYgcm90YXRpb24gPT0gbnVsbClcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gR2FtZU9iamVjdC5JbnN0YW50aWF0ZSh0bXBvYmosIHBvcy5WYWx1ZSwgUXVhdGVybmlvbi5pZGVudGl0eSkgYXMgR2FtZU9iamVjdDtcbiAgICAvLyAgICAgICAgIHJldHVybiBHYW1lT2JqZWN0Lkluc3RhbnRpYXRlKHRtcG9iaikgYXMgR2FtZU9iamVjdDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIERlYnVnLkxvZ0Vycm9yKFwiY2FuIG5vdCBmaW5kIGVmZmVjdDogXCIgKyBuYW1lKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIEdhbWVPYmplY3QgSW5zdGFudGlhdGVNb2RsZVNwaW5lKHN0cmluZyBuYW1lLCBUcmFuc2Zvcm0gcGFyZW50ID0gbnVsbCxWZWN0b3IzPyBwb3MgPSBudWxsLCBWZWN0b3IzPyBzY2FsZSA9IG51bGwsIFF1YXRlcm5pb24/IHJvdGF0aW9uID0gbnVsbClcbiAgICAvLyB7XG4gICAgLy8gICAgIEdhbWVPYmplY3QgdG1wb2JqID0gTW9kZWxBc3NldE1hbmFnZXIuU2luZ2xldG9uLkdldE1vZGVsKG5hbWUpO1xuICAgIC8vICAgICBpZiAodG1wb2JqICE9IG51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIEdhbWVPYmplY3Qgb2JqID0gR2FtZU9iamVjdC5JbnN0YW50aWF0ZSh0bXBvYmoudHJhbnNmb3JtLkdldENoaWxkKDApLmdhbWVPYmplY3QpIGFzIEdhbWVPYmplY3Q7XG4gICAgLy8gICAgICAgICBpZiAob2JqICE9IG51bGwpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgb2JqLlNldEFjdGl2ZSh0cnVlKTtcbiAgICAvLyAgICAgICAgICAgICBvYmoudHJhbnNmb3JtLnBhcmVudCA9IHBhcmVudDtcbiAgICAvLyAgICAgICAgICAgICBvYmoudHJhbnNmb3JtLmxvY2FsU2NhbGUgPSBzY2FsZSAhPSBudWxsID8gKFZlY3RvcjMpc2NhbGUgOiBWZWN0b3IzLm9uZTtcbiAgICAvLyAgICAgICAgICAgICBvYmoudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBwb3MgIT0gbnVsbCA/IChWZWN0b3IzKXBvcyA6IFZlY3RvcjMuemVybztcbiAgICAvLyAgICAgICAgICAgICBvYmoudHJhbnNmb3JtLnJvdGF0aW9uID0gcm90YXRpb24gIT0gbnVsbCA/IChRdWF0ZXJuaW9uKXJvdGF0aW9uIDogUXVhdGVybmlvbi5pZGVudGl0eTsgICAgICAgICBcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIERlYnVnLkxvZ0Vycm9yKFwiY2FuIG5vdCBmaW5kIG1vZGVsOiBcIiArIG5hbWUpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cbn0iXX0=
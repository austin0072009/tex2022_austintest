
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/InstanceGameObjectCache.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eff64DiqK1KGqw5sbyNIng5', 'InstanceGameObjectCache');
// Games/texas/script/View/InstanceGameObjectCache.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InstanceGameObjectCache = /** @class */ (function () {
    function InstanceGameObjectCache() {
        this.maxCount = 50;
        this.clearHeroFlag = 0;
        this.maxCountDict = new Map();
        this.itemDict = new Map();
    }
    //设置某一类资源的最大缓存个数
    InstanceGameObjectCache.prototype.SetGameobjectMaxCount = function (resName, count) {
        if (resName != null) {
            resName = resName.toLowerCase();
        }
        this.maxCountDict.set(resName, count);
    };
    InstanceGameObjectCache.prototype.GetGameobjectMaxCount = function (resName) {
        if (resName != null) {
            resName = resName.toLowerCase();
        }
        if (this.maxCountDict.has(resName)) {
            return this.maxCountDict.get(resName);
        }
        return this.maxCount;
    };
    InstanceGameObjectCache.prototype.GetCurCount = function (resName) {
        if (resName != null) {
            resName = resName.toLowerCase();
        }
        var list;
        list = this.itemDict.get(resName);
        if (list != null) {
            return list.length;
        }
        return 0;
    };
    //重置最大资源个数为默认值
    InstanceGameObjectCache.prototype.ResetMaxCount = function () {
        this.maxCountDict.clear();
    };
    //放入一个           
    InstanceGameObjectCache.prototype.PushItem = function (item, resName) {
        if (item != null) {
            if (resName != null) {
                resName = resName.toLowerCase();
            }
            else {
                return;
            }
            var max = this.maxCountDict.has(resName) ? this.maxCountDict.get(resName) : this.maxCount;
            var list = void 0;
            list = this.itemDict.get(resName);
            if (list == null) {
                list = [];
                this.itemDict.set(resName, list);
            }
            //防止外部多次push调用时，添加相同的对象
            if (list.indexOf(item) == -1) {
                if (list.length < max) {
                    item.visible = false;
                    item.node.position = cc.v3(50000, 50000, 0);
                    list.push(item);
                }
                else {
                    console.log("超过缓存容量的直接释放掉");
                    item.node.destroy();
                }
            }
            item = null;
        }
    };
    //推出一个
    InstanceGameObjectCache.prototype.PopItem = function (key) {
        var popItem = null;
        if (key != null) {
            key = key.toLowerCase();
        }
        var list;
        list = this.itemDict.get(key);
        if (list != null && list.length > 0) {
            popItem = list[list.length - 1];
            list.pop(); //list.RemoveAt(list.length - 1);
        }
        if (popItem != null && popItem.visible == false) {
            popItem.visible = true;
        }
        return popItem;
    };
    //特殊的地方会要求删除已经存在的对象
    InstanceGameObjectCache.prototype.DestroyExistItem = function (item, resName) {
        if (item == null)
            return;
        if (resName != null) {
            resName = resName.toLowerCase();
        }
        var list;
        list = this.itemDict.get(resName);
        if (list != null && list.indexOf(item) >= 0) {
            list.splice(list.indexOf(item), 1);
        }
        console.log("3超过缓存容量的直接释放掉");
        item.node.destroy();
    };
    InstanceGameObjectCache.prototype.cleanAll = function () {
        this.itemDict.forEach(function (list, key) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] != null)
                    list[i].node.destroy(); // GameObject.DestroyImmediate(list[i]);
            }
        });
        this.maxCountDict.clear();
    };
    InstanceGameObjectCache.prototype.clearSomeObj = function () {
        this.itemDict.forEach(function (list, key) {
            // #if UNITY_ANDROID
            // int count = Mathf.Min(list.Count / 5 + 1, list.Count);
            // #else
            var count = Math.min(list.length / 2 + 1, list.length);
            // #endif
            if (count > 0) {
                count = list.length - count;
                for (var i = list.length - 1; i >= count; i--) {
                    if (list[i] != null) {
                        console.log("2超过缓存容量的直接释放掉2");
                        list[i].node.destroy(); //GameObject.DestroyImmediate(list[i]);
                    }
                    list.splice(i, 1);
                }
            }
        });
    };
    InstanceGameObjectCache.prototype.clearSomeHeroObj = function () {
        if (this.clearHeroFlag++ < 3) {
            return;
        }
        this.clearHeroFlag = 0;
        //hero判断条件为只有一个
        this.itemDict.forEach(function (list, key) {
            var count = Math.min(list.length / 2 + 1, list.length);
            if (count == 1) {
                if (list[0] != null && list[0].name.toLowerCase().indexOf("hero") >= 0)
                    list[0].node.destroy(); // GameObject.DestroyImmediate(list[0]);
                list = [];
            }
        });
    };
    InstanceGameObjectCache.prototype.contains = function (key) {
        if (key != null) {
            key = key.toLowerCase();
        }
        var list;
        list = this.itemDict.get(key);
        return list != null && list.length > 0;
    };
    return InstanceGameObjectCache;
}());
exports.default = InstanceGameObjectCache;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXEluc3RhbmNlR2FtZU9iamVjdENhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFLSTtRQUhPLGFBQVEsR0FBRyxFQUFFLENBQUM7UUE2SWIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUF6SXRCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ1QsdURBQXFCLEdBQTVCLFVBQTZCLE9BQWUsRUFBRSxLQUFhO1FBQ3ZELElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FBRTtRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLHVEQUFxQixHQUE1QixVQUE2QixPQUFlO1FBQ3hDLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FBRTtRQUN6RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLDZDQUFXLEdBQWxCLFVBQW1CLE9BQWU7UUFDOUIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUFFO1FBQ3pELElBQUksSUFBb0IsQ0FBQztRQUN6QixJQUFJLEdB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QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDbEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLHdDQUF3QztnQkFDbkUsSUFBSSxHQUFHLEVBQUUsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMENBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3ZCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FBRTtRQUM3QyxJQUFJLElBQW9CLENBQUM7UUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQXZLQSxBQXVLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFuY2VHYW1lT2JqZWN0Q2FjaGUge1xuICAgIHByaXZhdGUgbWF4Q291bnREaWN0OiBNYXA8c3RyaW5nLCBudW1iZXI+Oy8vc3RyaW5nOuWvueixoeeahOWQjeWtl++8jGludDror6Xnsbvlr7nosaHog73lpJ/nvJPlrZjnmoTmnIDlpKfkuKrmlbDjgIIgIFxuICAgIHB1YmxpYyBtYXhDb3VudCA9IDUwO1xuICAgIHB1YmxpYyBpdGVtRGljdDogTWFwPHN0cmluZywgZmd1aS5HT2JqZWN0W10+O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1heENvdW50RGljdCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICAgIHRoaXMuaXRlbURpY3QgPSBuZXcgTWFwPHN0cmluZywgZmd1aS5HT2JqZWN0W10+KCk7XG4gICAgfVxuXG4gICAgLy/orr7nva7mn5DkuIDnsbvotYTmupDnmoTmnIDlpKfnvJPlrZjkuKrmlbBcbiAgICBwdWJsaWMgU2V0R2FtZW9iamVjdE1heENvdW50KHJlc05hbWU6IHN0cmluZywgY291bnQ6IG51bWJlcikge1xuICAgICAgICBpZiAocmVzTmFtZSAhPSBudWxsKSB7IHJlc05hbWUgPSByZXNOYW1lLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgdGhpcy5tYXhDb3VudERpY3Quc2V0KHJlc05hbWUsIGNvdW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0R2FtZW9iamVjdE1heENvdW50KHJlc05hbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGlmIChyZXNOYW1lICE9IG51bGwpIHsgcmVzTmFtZSA9IHJlc05hbWUudG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICBpZiAodGhpcy5tYXhDb3VudERpY3QuaGFzKHJlc05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXhDb3VudERpY3QuZ2V0KHJlc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWF4Q291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIEdldEN1ckNvdW50KHJlc05hbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIGlmIChyZXNOYW1lICE9IG51bGwpIHsgcmVzTmFtZSA9IHJlc05hbWUudG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICBsZXQgbGlzdDogZmd1aS5HT2JqZWN0W107XG4gICAgICAgIGxpc3QgPSB0aGlzLml0ZW1EaWN0LmdldChyZXNOYW1lKTtcbiAgICAgICAgaWYgKGxpc3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy/ph43nva7mnIDlpKfotYTmupDkuKrmlbDkuLrpu5jorqTlgLxcbiAgICBwdWJsaWMgUmVzZXRNYXhDb3VudCgpIHtcbiAgICAgICAgdGhpcy5tYXhDb3VudERpY3QuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvL+aUvuWFpeS4gOS4qiAgICAgICAgICAgXG4gICAgcHVibGljIFB1c2hJdGVtKGl0ZW06IGZndWkuR09iamVjdCwgcmVzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChyZXNOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXNOYW1lID0gcmVzTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbWF4ID0gdGhpcy5tYXhDb3VudERpY3QuaGFzKHJlc05hbWUpID8gdGhpcy5tYXhDb3VudERpY3QuZ2V0KHJlc05hbWUpIDogdGhpcy5tYXhDb3VudDtcblxuICAgICAgICAgICAgbGV0IGxpc3Q6IGZndWkuR09iamVjdFtdO1xuICAgICAgICAgICAgbGlzdCA9IHRoaXMuaXRlbURpY3QuZ2V0KHJlc05hbWUpO1xuICAgICAgICAgICAgaWYgKGxpc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1EaWN0LnNldChyZXNOYW1lLCBsaXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/pmLLmraLlpJbpg6jlpJrmrKFwdXNo6LCD55So5pe277yM5re75Yqg55u45ZCM55qE5a+56LGhXG4gICAgICAgICAgICBpZiAobGlzdC5pbmRleE9mKGl0ZW0pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUucG9zaXRpb24gPSBjYy52Myg1MDAwMCwgNTAwMDAsIDApO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui2hei/h+e8k+WtmOWuuemHj+eahOebtOaOpemHiuaUvuaOiVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/mjqjlh7rkuIDkuKpcbiAgICBwdWJsaWMgUG9wSXRlbShrZXk6IHN0cmluZyk6IGZndWkuR09iamVjdCB7XG4gICAgICAgIGxldCBwb3BJdGVtOiBmZ3VpLkdPYmplY3QgPSBudWxsO1xuICAgICAgICBpZiAoa2V5ICE9IG51bGwpIHsga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgbGV0IGxpc3Q6IGZndWkuR09iamVjdFtdO1xuICAgICAgICBsaXN0ID0gdGhpcy5pdGVtRGljdC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBvcEl0ZW0gPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBsaXN0LnBvcCgpOyAvL2xpc3QuUmVtb3ZlQXQobGlzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3BJdGVtICE9IG51bGwgJiYgcG9wSXRlbS52aXNpYmxlID09IGZhbHNlKSB7XG4gICAgICAgICAgICBwb3BJdGVtLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcEl0ZW07XG4gICAgfVxuXG5cblxuICAgIC8v54m55q6K55qE5Zyw5pa55Lya6KaB5rGC5Yig6Zmk5bey57uP5a2Y5Zyo55qE5a+56LGhXG4gICAgcHVibGljIERlc3Ryb3lFeGlzdEl0ZW0oaXRlbTogZmd1aS5HT2JqZWN0LCByZXNOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHJlc05hbWUgIT0gbnVsbCkgeyByZXNOYW1lID0gcmVzTmFtZS50b0xvd2VyQ2FzZSgpOyB9XG4gICAgICAgIGxldCBsaXN0OiBmZ3VpLkdPYmplY3RbXTtcbiAgICAgICAgbGlzdCA9IHRoaXMuaXRlbURpY3QuZ2V0KHJlc05hbWUpO1xuICAgICAgICBpZiAobGlzdCAhPSBudWxsICYmIGxpc3QuaW5kZXhPZihpdGVtKSA+PSAwKSB7XG4gICAgICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiM+i2hei/h+e8k+WtmOWuuemHj+eahOebtOaOpemHiuaUvuaOiVwiKTtcbiAgICAgICAgaXRlbS5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBjbGVhbkFsbCgpIHtcbiAgICAgICAgdGhpcy5pdGVtRGljdC5mb3JFYWNoKChsaXN0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0W2ldICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGxpc3RbaV0ubm9kZS5kZXN0cm95KCk7Ly8gR2FtZU9iamVjdC5EZXN0cm95SW1tZWRpYXRlKGxpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYXhDb3VudERpY3QuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTb21lT2JqKCkge1xuICAgICAgICB0aGlzLml0ZW1EaWN0LmZvckVhY2goKGxpc3QsIGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gI2lmIFVOSVRZX0FORFJPSURcbiAgICAgICAgICAgIC8vIGludCBjb3VudCA9IE1hdGhmLk1pbihsaXN0LkNvdW50IC8gNSArIDEsIGxpc3QuQ291bnQpO1xuICAgICAgICAgICAgLy8gI2Vsc2VcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE1hdGgubWluKGxpc3QubGVuZ3RoIC8gMiArIDEsIGxpc3QubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vICNlbmRpZlxuICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gbGlzdC5sZW5ndGggLSBjb3VudDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IGNvdW50OyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIy6LaF6L+H57yT5a2Y5a656YeP55qE55u05o6l6YeK5pS+5o6JMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RbaV0ubm9kZS5kZXN0cm95KCk7IC8vR2FtZU9iamVjdC5EZXN0cm95SW1tZWRpYXRlKGxpc3RbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFySGVyb0ZsYWcgPSAwO1xuICAgIHB1YmxpYyBjbGVhclNvbWVIZXJvT2JqKCkge1xuICAgICAgICBpZiAodGhpcy5jbGVhckhlcm9GbGFnKysgPCAzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckhlcm9GbGFnID0gMDtcblxuICAgICAgICAvL2hlcm/liKTmlq3mnaHku7bkuLrlj6rmnInkuIDkuKpcbiAgICAgICAgdGhpcy5pdGVtRGljdC5mb3JFYWNoKChsaXN0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE1hdGgubWluKGxpc3QubGVuZ3RoIC8gMiArIDEsIGxpc3QubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbMF0gIT0gbnVsbCAmJiBsaXN0WzBdLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiaGVyb1wiKSA+PSAwKVxuICAgICAgICAgICAgICAgICAgICBsaXN0WzBdLm5vZGUuZGVzdHJveSgpOy8vIEdhbWVPYmplY3QuRGVzdHJveUltbWVkaWF0ZShsaXN0WzBdKTtcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWlucyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoa2V5ICE9IG51bGwpIHsga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgbGV0IGxpc3Q6IGZndWkuR09iamVjdFtdO1xuICAgICAgICBsaXN0ID0gdGhpcy5pdGVtRGljdC5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/LocalStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d74bGRrZNFz5374acjdKFU', 'LocalStorage');
// Script/Common/LocalStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
/*
 * @Description: 本地存储
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-04-27 12:26:13
 * @LastEditors: sin2021
 * @LastEditTime: 2020-04-28 11:08:09
 */
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.localStorageTable = {};
    }
    LocalStorage.getInstance = function () {
        if (!this.instance) {
            this.instance = new LocalStorage();
        }
        return this.instance;
    };
    LocalStorage.prototype.getItem = function (key) {
        var sysValue = cc.sys.localStorage.getItem(key);
        if (sysValue) {
            cc.sys.localStorage.removeItem(key);
            this.setItem(key, sysValue);
        }
        return this.localStorageTable[key];
    };
    LocalStorage.prototype.setItem = function (key, value) {
        var sysValue = cc.sys.localStorage.getItem(key);
        if (sysValue) {
            cc.sys.localStorage.removeItem(key);
        }
        var oldValue = this.localStorageTable[key];
        if (oldValue != value) {
            this.localStorageTable[key] = value;
        }
        cc.sys.localStorage.setItem(key, value);
    };
    LocalStorage.prototype.removeItem = function (key) {
        this.localStorageTable[key] = null;
        cc.sys.localStorage.removeItem(key);
    };
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXExvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0g7SUFBQTtRQUNZLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztJQW9DM0MsQ0FBQztJQWxDaUIsd0JBQVcsR0FBekI7UUFFSSxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDakI7WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUyxHQUFHO1FBQ1IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ2xELElBQUksUUFBUSxFQUFHO1lBQ1gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUUsR0FBRyxDQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUyxHQUFHLEVBQUUsS0FBSztRQUNmLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUNsRCxJQUFJLFFBQVEsRUFBRztZQUNYLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUN6QztRQUNELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUM3QyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUc7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFFLEdBQUcsQ0FBRSxHQUFHLEtBQUssQ0FBQztTQUN6QztRQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBWSxHQUFHO1FBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IOacrOWcsOWtmOWCqFxuICogQFZlcnNpb246IENvY29zQ3JlYXRvciBWMi4yLjJcbiAqIEBBdXRvcjogc2luMjAyMVxuICogQERhdGU6IDIwMjAtMDQtMjcgMTI6MjY6MTNcbiAqIEBMYXN0RWRpdG9yczogc2luMjAyMVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wNC0yOCAxMTowODowOVxuICovXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZVRhYmxlOiBvYmplY3QgPSB7fTtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlOkxvY2FsU3RvcmFnZTtcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6TG9jYWxTdG9yYWdlXG4gICAge1xuICAgICAgICBpZighdGhpcy5pbnN0YW5jZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKCBrZXkgKSB7XG4gICAgICAgIGxldCBzeXNWYWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgga2V5ICk7XG4gICAgICAgIGlmKCBzeXNWYWx1ZSApIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgga2V5ICk7XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW0oIGtleSwgc3lzVmFsdWUgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2VUYWJsZVsga2V5IF07XG4gICAgfVxuICAgIFxuICAgIHNldEl0ZW0oIGtleSwgdmFsdWUgKSB7XG4gICAgICAgIGxldCBzeXNWYWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgga2V5ICk7XG4gICAgICAgIGlmKCBzeXNWYWx1ZSApIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgga2V5ICk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9sZFZhbHVlID0gdGhpcy5sb2NhbFN0b3JhZ2VUYWJsZVsga2V5IF07XG4gICAgICAgIGlmKCBvbGRWYWx1ZSAhPSB2YWx1ZSApIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlVGFibGVbIGtleSBdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCBrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKCBrZXkgKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlVGFibGVba2V5XSA9IG51bGw7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgga2V5KTtcbiAgICB9XG59Il19
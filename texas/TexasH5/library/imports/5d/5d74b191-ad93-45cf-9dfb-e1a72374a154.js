"use strict";
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
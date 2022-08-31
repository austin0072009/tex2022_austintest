
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/GameStage/SlotGameStage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22b16Xg+MtGHIhIDLxz4ssU', 'SlotGameStage');
// Script/modules/@mogafa/slots/lib/GameStage/SlotGameStage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxHYW1lU3RhZ2VcXFNsb3RHYW1lU3RhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5SZXN1bHRzR2FtZU1vZGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNHYW1lTW9kZVwiO1xuXG5cblxuXG4vKipcbiAqIHNsb3TmuLjmiI/mjqXlj6NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIFNsb3RHYW1lU3RhZ2Uge1xuICAgIC8qKlxuICAgICAqIOW9k+WJjea4uOaIj+exu+Wei1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1cnJlbnRHYW1lTW9kZTogU3BpblJlc3VsdHNHYW1lTW9kZTtcbiAgICAvKipcbiAgICAgKiDop6blj5HlhY3otLnmuLjmiI/nsbvlnovvvIzlpoLmnpzmsqHmnInop6blj5HliJnkuLpudWxsXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnJlZU1vZGVUcmlnZ2VyOiBTcGluUmVzdWx0c0dhbWVNb2RlO1xuXG4gICAgY2hlY2tDb2luRW5vdWdoKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog54K55Ye7c3BpbuaMiemSruWQjuivt+axgizlpoLmnpzluKbmnInmrKHmlbAs5YiZ6KGo56S654K55Ye75LqG6Ieq5Yqoc3BpblxuICAgICAqIEBwYXJhbSB0aW1lcyDmrKHmlbAsLTHooajnpLrkuI3pmZDmrKHmlbBcbiAgICAgKi9cbiAgICBzcGluQ2xpY2sodGltZXM/OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIOW9k+aUtuWIsOivt+axgue7k+aenOaXtuiwg+eUqFxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICAgICAqIEBwYXJhbSB0YXJnZXQg55uu5qCHXG4gICAgICovXG4gICAgb25TcGluUmVzdWx0c1JlY2VpdmVkKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiDmuIXmpZrlvZPmlLbliLDor7fmsYLnu5Pmnpzml7bosIPnlKjnmoTnm5HlkKxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOebruagh1xuICAgICAqL1xuICAgIG9mZlNwaW5SZXN1bHRzUmVjZWl2ZWQobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIOa4healmuaJgOacieW9k+aUtuWIsOivt+axgue7k+aenOaXtuiwg+eUqOeahOebkeWQrFxuICAgICAqL1xuICAgIGNsZWFyU3BpblJlc3VsdHNSZWNlaXZlZCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIOebkeWQrOa4uOaIj+eKtuaAgeWPmOWMllxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciDlm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOebruagh1xuICAgICAqL1xuICAgIG9uU3RhdHVzQ2hhbmdlZChsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICog5Y+W5raI55uR5ZCs5ri45oiP54q25oCB5Y+Y5YyWXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIOWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSB0YXJnZXQg55uu5qCHXG4gICAgICovXG4gICAgb2ZmU3RhdHVzQ2hhbmdlZChsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICog5Y+W5raI5omA5pyJ55uR5ZCs5ri45oiP54q25oCB55qE5Y+Y5YyWXG4gICAgICovXG4gICAgY2xlYXJTdGF0dXNDaGFuZ2VkKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICog5qOA5p+l6YeR5biB5piv5ZCm6Laz5aSf5LqL5Lu2XG4gICAgICovXG4gICAgb25TcGluQ2hlY2tDb2luKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZDtcbiAgICBvZmZTcGluQ2hlY2tDb2luKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZDtcbiAgICBjbGVhclNwaW5DaGVja0NvaW4oKTogdm9pZDtcbn1cbiJdfQ==
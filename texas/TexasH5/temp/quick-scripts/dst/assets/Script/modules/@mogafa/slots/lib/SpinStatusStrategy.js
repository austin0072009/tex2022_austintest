
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SpinStatusStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08a1e+DyblHTKr6Q2lp7b57', 'SpinStatusStrategy');
// Script/modules/@mogafa/slots/lib/SpinStatusStrategy.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTcGluU3RhdHVzU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsb3RHYW1lU3RhZ2VTdGF0dXMgfSBmcm9tIFwiLi9HYW1lU3RhZ2UvU2xvdEdhbWVTdGFnZVN0YXR1c1wiO1xuaW1wb3J0IHsgU3BpblR5cGUgfSBmcm9tIFwiLi9TcGluVHlwZVwiO1xuXG5pbXBvcnQgeyBCb3R0b21CYXJTcGluU3RhdXMgfSBmcm9tIFwiLi9Cb3R0b21CYXIvQm90dG9tQmFyU3BpblN0YXVzXCI7XG5pbXBvcnQgU3BpblJlc3VsdHNGcmVlVHJpZ2dlciBmcm9tIFwiLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNGcmVlVHJpZ2dlclwiO1xuaW1wb3J0IHsgU3BpblJlc3VsdHNHYW1lTW9kZSB9IGZyb20gXCIuLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0dhbWVNb2RlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIFNwaW5TdGF0dXNTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICog6I635Y+Wc3BpbueKtuaAgVxuICAgICAqXG4gICAgICogQHBhcmFtIGdhbWVTdGF0dXMg5ri45oiP54q25oCBXG4gICAgICogQHBhcmFtIHNwaW5UeXBlIHNwaW7nsbvlnotcbiAgICAgKiBAcGFyYW0gZnJlZUdhbWVUcmlnZ2VyIOWFjei0uea4uOaIj+inpuWPkeWZqFxuICAgICAqIEByZXR1cm5zIGVuYWJsZeS4unRydWXooajnpLrmjInpkq7lj6/nlKjvvIxzcGluU3RhdXPkuLrmjInpkq7nirbmgIFcbiAgICAgKi9cbiAgICBnZXRTcGluU3RhdHVzKFxuICAgICAgICBnYW1lU3RhdHVzOiBTbG90R2FtZVN0YWdlU3RhdHVzLFxuICAgICAgICBzcGluVHlwZTogU3BpblR5cGUsXG4gICAgICAgIGZyZWVHYW1lVHJpZ2dlcjogU3BpblJlc3VsdHNGcmVlVHJpZ2dlcixcbiAgICAgICAgbmV4dEdhbWVNb2RlOiBTcGluUmVzdWx0c0dhbWVNb2RlXG4gICAgKTogeyBlbmFibGU6IGJvb2xlYW47IHNwaW5TdGF0dXM6IEJvdHRvbUJhclNwaW5TdGF1cyB9O1xufVxuIl19
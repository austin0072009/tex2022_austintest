
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/IocContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'beb5bWyWwFAVK8XAga5XxUq', 'IocContainer');
// Script/modules/@mogafa/fairygui-component/lib/IocContainer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var IocContainer = /** @class */ (function () {
    function IocContainer() {
    }
    Object.defineProperty(IocContainer, "container", {
        get: function () {
            if (IocContainer._container == null) {
                IocContainer._container = new inversify_1.Container();
            }
            return IocContainer._container;
        },
        enumerable: false,
        configurable: true
    });
    return IocContainer;
}());
exports.default = IocContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcSW9jQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBSXRDO0lBQUE7SUFRQSxDQUFDO0lBTkcsc0JBQVcseUJBQVM7YUFBcEI7WUFDSSxJQUFJLFlBQVksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUNqQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO2FBQzdDO1lBQ0QsT0FBTyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBQ0wsbUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJpbnZlcnNpZnlcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElvY0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2NvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHN0YXRpYyBnZXQgY29udGFpbmVyKCk6IENvbnRhaW5lciB7XG4gICAgICAgIGlmIChJb2NDb250YWluZXIuX2NvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICBJb2NDb250YWluZXIuX2NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSW9jQ29udGFpbmVyLl9jb250YWluZXI7XG4gICAgfVxufVxuIl19
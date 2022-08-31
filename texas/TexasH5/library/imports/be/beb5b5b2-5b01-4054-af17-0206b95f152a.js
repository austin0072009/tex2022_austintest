"use strict";
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
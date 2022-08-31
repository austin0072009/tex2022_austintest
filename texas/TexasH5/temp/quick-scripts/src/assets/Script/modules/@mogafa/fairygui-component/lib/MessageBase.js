"use strict";
cc._RF.push(module, 'b52cfrptN9PJ5d2zPqCt62D', 'MessageBase');
// Script/modules/@mogafa/fairygui-component/lib/MessageBase.ts

"use strict";
/*
 * @Author: 田鑫
 * @Date: 2020-07-31 13:37:25
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-08-05 13:49:18
 * @Version: CocosCreator V2.2.2
 * @Description: notice基类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FguiComponentBase_1 = require("./FguiComponentBase");
var MessageBase = /** @class */ (function (_super) {
    __extends(MessageBase, _super);
    function MessageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageBase;
}(FguiComponentBase_1.default));
exports.default = MessageBase;

cc._RF.pop();
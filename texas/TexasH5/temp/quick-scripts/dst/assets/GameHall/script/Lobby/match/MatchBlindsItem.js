
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchBlindsItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c53022chRpE0bLrLTVcutUv', 'MatchBlindsItem');
// GameHall/script/Lobby/match/MatchBlindsItem.ts

"use strict";
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
/**
 * @description 賽事盲注表信息 item
 */
var MatchBlindsItem = /** @class */ (function (_super) {
    __extends(MatchBlindsItem, _super);
    function MatchBlindsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchBlindsItem.prototype.onConstruct = function () {
        this.level = this.getChild("level").asTextField;
        this.small = this.getChild("small").asTextField;
        this.big = this.getChild("big").asTextField;
        this.ante = this.getChild("ante").asCom;
    };
    /**设置数据 */
    MatchBlindsItem.prototype.setData = function (data) {
        this.level.text = data.level + '';
        this.small.text = data.basegamble + '';
        this.big.text = data.Maxblind + '';
        this.ante.text = data.pregamble + '';
    };
    return MatchBlindsItem;
}(fgui.GButton));
exports.default = MatchBlindsItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaEJsaW5kc0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0dBRUc7QUFDSDtJQUE2QyxtQ0FBWTtJQUF6RDs7SUF3QkEsQ0FBQztJQWZhLHFDQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBQ0QsVUFBVTtJQUNILGlDQUFPLEdBQWQsVUFBZSxJQUFtQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBR0wsc0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxDQXhCNEMsSUFBSSxDQUFDLE9BQU8sR0F3QnhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4YXNMZXZlSW5mbyB9IGZyb20gXCIuLi9Mb2JieU5ldERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6LO95LqL55uy5rOo6KGo5L+h5oGvIGl0ZW1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoQmxpbmRzSXRlbSBleHRlbmRzIGZndWkuR0J1dHRvbiB7XHJcbiAgICAvKirnrYnnuqcqL1xyXG4gICAgcHJpdmF0ZSBsZXZlbDogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgLyoq5bCP55uyICovXHJcbiAgICBwcml2YXRlIHNtYWxsOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirlpKfnm7IgKi9cclxuICAgIHByaXZhdGUgYmlnOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirliY3ms6ggKi9cclxuICAgIHByaXZhdGUgYW50ZTogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmdldENoaWxkKFwibGV2ZWxcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5zbWFsbCA9IHRoaXMuZ2V0Q2hpbGQoXCJzbWFsbFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmJpZyA9IHRoaXMuZ2V0Q2hpbGQoXCJiaWdcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5hbnRlID0gdGhpcy5nZXRDaGlsZChcImFudGVcIikuYXNDb207XHJcbiAgICB9XHJcbiAgICAvKirorr7nva7mlbDmja4gKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IFRleGFzTGV2ZUluZm8pIHtcclxuICAgICAgICB0aGlzLmxldmVsLnRleHQgPSBkYXRhLmxldmVsICsgJyc7XHJcbiAgICAgICAgdGhpcy5zbWFsbC50ZXh0ID0gZGF0YS5iYXNlZ2FtYmxlICsgJyc7XHJcbiAgICAgICAgdGhpcy5iaWcudGV4dCA9IGRhdGEuTWF4YmxpbmQgKyAnJztcclxuICAgICAgICB0aGlzLmFudGUudGV4dCA9IGRhdGEucHJlZ2FtYmxlICsgJyc7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==
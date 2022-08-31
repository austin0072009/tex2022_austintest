
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/entertainment/GameItemInEntertainment.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ec86hM0BVOsKaUhwNVx39P', 'GameItemInEntertainment');
// GameHall/script/Lobby/entertainment/GameItemInEntertainment.ts

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
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 娛樂 游戲item
 */
var GameItemInEntertainment = /** @class */ (function (_super) {
    __extends(GameItemInEntertainment, _super);
    function GameItemInEntertainment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameItemInEntertainment.prototype.onConstruct = function () {
        this.iconLoader = this.getChild("n0").asLoader;
        this.dark = this.getChild("dark").asImage;
        this.progressLabel = this.getChild("progressLabel").asTextField;
        this.progresssize = this.getChild("progresssize").asTextField;
    };
    GameItemInEntertainment.prototype.setData = function (gameId, icons, isUpdate) {
        this.gameId = gameId;
        this.icons = icons;
        this.iconLoader.url = "ui://Lobby/" + icons;
        this.dark.visible = isUpdate;
        this.dark.fillAmount = 1;
        this.progressLabel.text = '';
        this.progresssize.text = '';
    };
    GameItemInEntertainment.prototype.setProgress = function (size, totleSize) {
        if (totleSize == 0) {
            return;
        }
        var progress = size / totleSize;
        if (isNaN(progress)) {
            progress = 0;
        }
        console.log("this.gameId === ", this.gameId);
        this.progresssize.text = size + "kb/" + totleSize + "kb";
        this.dark.fillAmount = 1 - progress;
        this.progressLabel.text = Math.floor(progress * 100) + '%';
        if (progress >= 1) {
            this.progressLabel.text = '';
            this.progresssize.text = '';
            LobbyViewCtr_1.default.instance.view.entertainmentView.changedData(this.gameId);
        }
    };
    /**更新失败 */
    GameItemInEntertainment.prototype.updateFild = function () {
        this.dark.visible = true;
        this.dark.fillAmount = 1;
        this.progressLabel.text = '';
        this.progresssize.text = '';
    };
    return GameItemInEntertainment;
}(fgui.GButton));
exports.default = GameItemInEntertainment;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGVudGVydGFpbm1lbnRcXEdhbWVJdGVtSW5FbnRlcnRhaW5tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUUzQzs7R0FFRztBQUNIO0lBQXFELDJDQUFZO0lBQWpFOztJQW1EQSxDQUFDO0lBbERhLDZDQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNsRSxDQUFDO0lBT00seUNBQU8sR0FBZCxVQUFlLE1BQWMsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZDQUFXLEdBQWxCLFVBQW1CLElBQVksRUFBRSxTQUFpQjtRQUM5QyxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQixRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQU0sSUFBSSxXQUFNLFNBQVMsT0FBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRTNELElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDNUIsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekU7SUFDTCxDQUFDO0lBRUQsVUFBVTtJQUNILDRDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTCw4QkFBQztBQUFELENBbkRBLEFBbURDLENBbkRvRCxJQUFJLENBQUMsT0FBTyxHQW1EaEUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5aib5qiCIOa4uOaIsml0ZW1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJdGVtSW5FbnRlcnRhaW5tZW50IGV4dGVuZHMgZmd1aS5HQnV0dG9uIHtcclxuICAgIHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLmljb25Mb2FkZXIgPSB0aGlzLmdldENoaWxkKFwibjBcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgdGhpcy5kYXJrID0gdGhpcy5nZXRDaGlsZChcImRhcmtcIikuYXNJbWFnZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzTGFiZWwgPSB0aGlzLmdldENoaWxkKFwicHJvZ3Jlc3NMYWJlbFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzc2l6ZSA9IHRoaXMuZ2V0Q2hpbGQoXCJwcm9ncmVzc3NpemVcIikuYXNUZXh0RmllbGQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2FtZUlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaWNvbnM6IHN0cmluZztcclxuICAgIHB1YmxpYyBpY29uTG9hZGVyOiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIGRhcms6IGZndWkuR0ltYWdlO1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0xhYmVsOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzc2l6ZTogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgcHVibGljIHNldERhdGEoZ2FtZUlkOiBudW1iZXIsIGljb25zOiBzdHJpbmcsIGlzVXBkYXRlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lSWQgPSBnYW1lSWQ7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IGljb25zO1xyXG4gICAgICAgIHRoaXMuaWNvbkxvYWRlci51cmwgPSBcInVpOi8vTG9iYnkvXCIgKyBpY29ucztcclxuICAgICAgICB0aGlzLmRhcmsudmlzaWJsZSA9IGlzVXBkYXRlO1xyXG4gICAgICAgIHRoaXMuZGFyay5maWxsQW1vdW50ID0gMTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzTGFiZWwudGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NzaXplLnRleHQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UHJvZ3Jlc3Moc2l6ZTogbnVtYmVyLCB0b3RsZVNpemU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0b3RsZVNpemUgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHNpemUgLyB0b3RsZVNpemU7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb2dyZXNzKSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5nYW1lSWQgPT09IFwiLCB0aGlzLmdhbWVJZCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc3NpemUudGV4dCA9IGAke3NpemV9a2IvJHt0b3RsZVNpemV9a2JgO1xyXG4gICAgICAgIHRoaXMuZGFyay5maWxsQW1vdW50ID0gMSAtIHByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NMYWJlbC50ZXh0ID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIDEwMCkgKyAnJSc7XHJcblxyXG4gICAgICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NMYWJlbC50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NzaXplLnRleHQgPSAnJztcclxuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuZW50ZXJ0YWlubWVudFZpZXcuY2hhbmdlZERhdGEodGhpcy5nYW1lSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmm7TmlrDlpLHotKUgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVGaWxkKCkge1xyXG4gICAgICAgIHRoaXMuZGFyay52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRhcmsuZmlsbEFtb3VudCA9IDE7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0xhYmVsLnRleHQgPSAnJztcclxuICAgICAgICB0aGlzLnByb2dyZXNzc2l6ZS50ZXh0ID0gJyc7XHJcbiAgICB9XHJcblxyXG59Il19
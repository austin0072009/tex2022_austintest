"use strict";
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
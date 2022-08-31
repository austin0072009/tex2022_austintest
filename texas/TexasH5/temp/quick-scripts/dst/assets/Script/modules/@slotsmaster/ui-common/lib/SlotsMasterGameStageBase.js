
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/SlotsMasterGameStageBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18ff9fbg8pC4rda99AGqTDk', 'SlotsMasterGameStageBase');
// Script/modules/@slotsmaster/ui-common/lib/SlotsMasterGameStageBase.ts

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
var SlotGameStageBase_1 = require("../../../@mogafa/slots/lib/GameStage/SlotGameStageBase");
//import { CardGet } from "./Card/CardGet";
var SlotsMasterGameStageBase = /** @class */ (function (_super) {
    __extends(SlotsMasterGameStageBase, _super);
    function SlotsMasterGameStageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SlotsMasterGameStageBase.prototype, "adName", {
        get: function () {
            return this._adName;
        },
        set: function (value) {
            this._adName = value;
        },
        enumerable: false,
        configurable: true
    });
    SlotsMasterGameStageBase.prototype.createChildComponents = function () {
        //this._adPanel = this.addFguiComponent(AdBalloon);
        //this._cardView = this.addFguiComponent(CardGet);
        //this.$message = this.addFguiComponent(Message);
    };
    SlotsMasterGameStageBase.prototype.allChildCreated = function () {
        var _this = this;
        _super.prototype.allChildCreated.call(this);
        this.scheduleOnce(function () {
            _this.showPlane();
        }, 1);
    };
    /**
     * 周期性加载飞机广告
     */
    SlotsMasterGameStageBase.prototype.scheduleShowPlane = function () {
        this.scheduleOnce(this.showPlane, 5);
    };
    /**
     * 显示飞机
     */
    SlotsMasterGameStageBase.prototype.showPlane = function () {
        //this._adPanel.balloonShow(this.setTopBarPermission.bind(this), 1);
    };
    /**
     * 允许设置顶部栏
     * @param data
     */
    SlotsMasterGameStageBase.prototype.setTopBarPermission = function (data) {
        this.scheduleShowPlane();
        if (data.type === 0) {
            this.setTopBarCoin(data.award);
        }
        else {
            this.setTopBarIntegral(data.award);
        }
    };
    /**
     * 设置顶部栏金币
     * @param coin
     */
    SlotsMasterGameStageBase.prototype.setTopBarCoin = function (coin) {
        this.topBar.setUserCoins(coin);
    };
    /**
     * 设置顶部栏积分
     * @param integral
     */
    SlotsMasterGameStageBase.prototype.setTopBarIntegral = function (integral) {
        this.topBar.setUserIntegral(integral);
    };
    SlotsMasterGameStageBase.prototype.bigWinShow = function () {
        //* 存在广告
        if (SlotGameStageBase_1.default.spinResults.bigWinAdAwards) {
            this.win.onAdButtonClick(this.watchAdClick.bind(this, this.adComplete.bind(this)));
        }
        // this.adName = AppConst.AD_POSITION.AD_BIG_WIN_DOUBLE;
        _super.prototype.bigWinShow.call(this);
    };
    /**
     * 升级经验条增长完后的回调
     * @param upgrade
     */
    SlotsMasterGameStageBase.prototype.updateLevelCallback = function (upgrade) {
        _super.prototype.updateLevelCallback.call(this, upgrade);
        if (upgrade) {
            this.levelUp.onAdButtonClick(this.watchAdClick.bind(this, this.adComplete.bind(this)));
        }
    };
    /**
     * 广告看完后的回调
     */
    SlotsMasterGameStageBase.prototype.adComplete = function () {
        cc.log("Ad has been played successfully");
        //todo 根据对应的广告Id获取对应的奖励
    };
    /**
     * 广告点击事件
     * @param callback
     */
    SlotsMasterGameStageBase.prototype.watchAdClick = function (callback) {
        //跳转到广告  看完之后回调 然后关闭该界面
    };
    /**
     *获得卡片的时候调用
     * @param cardsData 卡片数据
     */
    SlotsMasterGameStageBase.prototype.cardViewShow = function (cardsData) {
        this.pauseSymbolBoard();
        // this._cardView.setData(cardsData, () => {
        //     this.continueSymbolBoard();
        // });
    };
    return SlotsMasterGameStageBase;
}(SlotGameStageBase_1.default));
exports.default = SlotsMasterGameStageBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxTbG90c01hc3RlckdhbWVTdGFnZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEZBQXVGO0FBS3ZGLDJDQUEyQztBQUMzQztJQUErRCw0Q0FBaUI7SUFBaEY7O0lBaUhBLENBQUM7SUE5R0csc0JBQWMsNENBQU07YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQXFCLEtBQWE7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7SUFLRCx3REFBcUIsR0FBckI7UUFDSSxtREFBbUQ7UUFDbkQsa0RBQWtEO1FBQ2xELGlEQUFpRDtJQUNyRCxDQUFDO0lBRUQsa0RBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkcsaUJBQU0sZUFBZSxXQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQ7O09BRUc7SUFDSyxvREFBaUIsR0FBekI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssNENBQVMsR0FBakI7UUFDSSxvRUFBb0U7SUFDeEUsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHNEQUFtQixHQUEzQixVQUE0QixJQUFTO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZ0RBQWEsR0FBckIsVUFBc0IsSUFBWTtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssb0RBQWlCLEdBQXpCLFVBQTBCLFFBQWdCO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFUyw2Q0FBVSxHQUFwQjtRQUNJLFFBQVE7UUFDUixJQUFJLDJCQUFpQixDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RjtRQUNELHdEQUF3RDtRQUN4RCxpQkFBTSxVQUFVLFdBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sc0RBQW1CLEdBQTdCLFVBQThCLE9BQTJCO1FBQ3JELGlCQUFNLG1CQUFtQixZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLDZDQUFVLEdBQWxCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzFDLHVCQUF1QjtJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssK0NBQVksR0FBcEIsVUFBcUIsUUFBa0I7UUFDbkMsdUJBQXVCO0lBRTNCLENBQUM7SUFFRDs7O09BR0c7SUFDTywrQ0FBWSxHQUF0QixVQUF1QixTQUE0QjtRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qiw0Q0FBNEM7UUFDNUMsa0NBQWtDO1FBQ2xDLE1BQU07SUFDVixDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQWpIQSxBQWlIQyxDQWpIOEQsMkJBQWlCLEdBaUgvRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFNsb3RHYW1lU3RhZ2VCYXNlIGZyb20gXCIuLi8uLi8uLi9AbW9nYWZhL3Nsb3RzL2xpYi9HYW1lU3RhZ2UvU2xvdEdhbWVTdGFnZUJhc2VcIjtcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4vQXBwQ29uc3RcIjtcbmltcG9ydCBTcGluUmVzdWx0c1VwZ3JhZGUgZnJvbSBcIi4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzVXBncmFkZVwiO1xuaW1wb3J0IFNwaW5SZXN1bHRzQ2FyZCBmcm9tIFwiLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNDYXJkXCI7XG5cbi8vaW1wb3J0IHsgQ2FyZEdldCB9IGZyb20gXCIuL0NhcmQvQ2FyZEdldFwiO1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU2xvdHNNYXN0ZXJHYW1lU3RhZ2VCYXNlIGV4dGVuZHMgU2xvdEdhbWVTdGFnZUJhc2Uge1xuXG4gICAgcHJpdmF0ZSBfYWROYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGdldCBhZE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkTmFtZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldCBhZE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9hZE5hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIC8vdGhpcy5fYWRQYW5lbCA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChBZEJhbGxvb24pO1xuICAgICAgICAvL3RoaXMuX2NhcmRWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KENhcmRHZXQpO1xuICAgICAgICAvL3RoaXMuJG1lc3NhZ2UgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgYWxsQ2hpbGRDcmVhdGVkKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5hbGxDaGlsZENyZWF0ZWQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93UGxhbmUoKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZGo5pyf5oCn5Yqg6L296aOe5py65bm/5ZGKXG4gICAgICovXG4gICAgcHJpdmF0ZSBzY2hlZHVsZVNob3dQbGFuZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaG93UGxhbmUsIDUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaYvuekuumjnuaculxuICAgICAqL1xuICAgIHByaXZhdGUgc2hvd1BsYW5lKCk6IHZvaWQge1xuICAgICAgICAvL3RoaXMuX2FkUGFuZWwuYmFsbG9vblNob3codGhpcy5zZXRUb3BCYXJQZXJtaXNzaW9uLmJpbmQodGhpcyksIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWFgeiuuOiuvue9rumhtumDqOagj1xuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRUb3BCYXJQZXJtaXNzaW9uKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjaGVkdWxlU2hvd1BsYW5lKCk7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9wQmFyQ29pbihkYXRhLmF3YXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9wQmFySW50ZWdyYWwoZGF0YS5hd2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pobbpg6jmoI/ph5HluIFcbiAgICAgKiBAcGFyYW0gY29pblxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0VG9wQmFyQ29pbihjb2luOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b3BCYXIuc2V0VXNlckNvaW5zKGNvaW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rumhtumDqOagj+enr+WIhlxuICAgICAqIEBwYXJhbSBpbnRlZ3JhbFxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0VG9wQmFySW50ZWdyYWwoaW50ZWdyYWw6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRvcEJhci5zZXRVc2VySW50ZWdyYWwoaW50ZWdyYWwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBiaWdXaW5TaG93KCk6IHZvaWQge1xuICAgICAgICAvLyog5a2Y5Zyo5bm/5ZGKXG4gICAgICAgIGlmIChTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cy5iaWdXaW5BZEF3YXJkcykge1xuICAgICAgICAgICAgdGhpcy53aW4ub25BZEJ1dHRvbkNsaWNrKHRoaXMud2F0Y2hBZENsaWNrLmJpbmQodGhpcywgdGhpcy5hZENvbXBsZXRlLmJpbmQodGhpcykpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmFkTmFtZSA9IEFwcENvbnN0LkFEX1BPU0lUSU9OLkFEX0JJR19XSU5fRE9VQkxFO1xuICAgICAgICBzdXBlci5iaWdXaW5TaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y2H57qn57uP6aqM5p2h5aKe6ZW/5a6M5ZCO55qE5Zue6LCDXG4gICAgICogQHBhcmFtIHVwZ3JhZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlTGV2ZWxDYWxsYmFjayh1cGdyYWRlOiBTcGluUmVzdWx0c1VwZ3JhZGUpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlTGV2ZWxDYWxsYmFjayh1cGdyYWRlKTtcbiAgICAgICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVcC5vbkFkQnV0dG9uQ2xpY2sodGhpcy53YXRjaEFkQ2xpY2suYmluZCh0aGlzLCB0aGlzLmFkQ29tcGxldGUuYmluZCh0aGlzKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bm/5ZGK55yL5a6M5ZCO55qE5Zue6LCDXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZENvbXBsZXRlKCk6IHZvaWQge1xuICAgICAgICBjYy5sb2coXCJBZCBoYXMgYmVlbiBwbGF5ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAvL3RvZG8g5qC55o2u5a+55bqU55qE5bm/5ZGKSWTojrflj5blr7nlupTnmoTlpZblirFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlub/lkYrngrnlh7vkuovku7ZcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBwcml2YXRlIHdhdGNoQWRDbGljayhjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgLy/ot7PovazliLDlub/lkYogIOeci+WujOS5i+WQjuWbnuiwgyDnhLblkI7lhbPpl63or6XnlYzpnaJcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAq6I635b6X5Y2h54mH55qE5pe25YCZ6LCD55SoXG4gICAgICogQHBhcmFtIGNhcmRzRGF0YSDljaHniYfmlbDmja5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FyZFZpZXdTaG93KGNhcmRzRGF0YTogU3BpblJlc3VsdHNDYXJkW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYXVzZVN5bWJvbEJvYXJkKCk7XG4gICAgICAgIC8vIHRoaXMuX2NhcmRWaWV3LnNldERhdGEoY2FyZHNEYXRhLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRpbnVlU3ltYm9sQm9hcmQoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuIl19
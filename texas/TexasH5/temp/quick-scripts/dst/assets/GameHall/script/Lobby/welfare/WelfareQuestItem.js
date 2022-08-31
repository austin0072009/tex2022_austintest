
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/welfare/WelfareQuestItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '186bdVXsl9Bt5CDiIaUDXjf', 'WelfareQuestItem');
// GameHall/script/Lobby/welfare/WelfareQuestItem.ts

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
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var WelfareQuestItem = /** @class */ (function (_super) {
    __extends(WelfareQuestItem, _super);
    function WelfareQuestItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelfareQuestItem.prototype.onConstruct = function () {
        this.gold = this.getChild("gold").asTextField;
        this.rwTitle = this.getChild("title").asTextField;
        this.desc = this.getChild("desc").asTextField;
        this.btn_Collect = this.getChild("btn_Collect").asButton;
        this.btn_complete = this.getChild("btn_complete").asButton;
        this.btn_Collect.onClick(this.collect, this);
        this.btn_complete.onClick(this.goComplete, this);
        this.typeController = this.getController("type");
        this.imageLoader = this.getChild("n0").asLoader;
        this.gold._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.rwTitle._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.desc._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.btn_Collect.getTextField()._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.btn_complete.getTextField()._label.cacheMode = cc.Label.CacheMode.CHAR;
    };
    /**领取 */
    WelfareQuestItem.prototype.collect = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('WelfareQuestItem', "button");
        LobbyViewCtr_1.default.instance.cs_award(this.taskid);
    };
    /**去完成 */
    WelfareQuestItem.prototype.goComplete = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('WelfareQuestItem', "button");
        var view = LobbyViewCtr_1.default.instance.view;
        view.welfareView && view.welfareView.Hide();
        if (this.tname.indexOf("设置") != -1 || this.tname.indexOf("更换") != -1) {
            view.showMyinfoView(); //设置
        }
        else if (this.tname.indexOf("充值") != -1) {
            view.showTopup(); //设置
        }
        else if (this.tname.indexOf("德州扑克") != -1) {
            view.barController.selectedIndex = 3;
        }
        else {
            view.barController.selectedIndex = 5;
            view.entertainmentView.Show();
        }
    };
    /**设置数据 */
    WelfareQuestItem.prototype.setData = function (data) {
        this.taskid = data.taskid;
        this.rwTitle.text = data.name; //任务名字
        this.tname = data.name;
        if (data.name.indexOf("签到") == -1) {
            this.desc.text = data.remark + "(" + data.current + "/" + data.total + ")"; //任务描述
        }
        else {
            this.desc.text = "" + data.remark; //任务描述
        }
        if (data.pic) {
            UIUtil_1.UIUtil.loadShopImage(this.imageLoader, data.pic);
        }
        if (data.iscomplate) {
            if (data.isaward) {
                this.typeController.setSelectedIndex(2);
            }
            else {
                this.typeController.setSelectedIndex(1);
            }
        }
        else {
            this.typeController.setSelectedIndex(0);
        }
        for (var i = 0; i < data.prizes.length; i++) {
            // if (data.prizes[i].type == 1) {
            //     this.gold.text = data.prizes[0].num + '';
            // } else if (data.prizes[i].type == 2) {
            //     this.gold.text = data.prizes[0].num * 1000 + '';
            // } else if (data.prizes[i].type == 3) {
            //     this.gold.text = data.prizes[0].num * 500 + '';
            // } else if (data.prizes[i].type == 4) {
            //     this.gold.text = data.prizes[0].num * 400 + '';
            // } else if (data.prizes[i].type == 5) {
            //     this.gold.text = data.prizes[0].num * 300 + '';
            // } else if (data.prizes[i].type == 6) {
            //     this.gold.text = data.prizes[0].num * 200 + '';
            // } else {
            this.gold.text = data.prizes[0].name + '';
            //}
        }
    };
    return WelfareQuestItem;
}(fgui.GButton));
exports.default = WelfareQuestItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHdlbGZhcmVcXFdlbGZhcmVRdWVzdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLDJEQUEwRDtBQUUxRCxnREFBMkM7QUFHM0M7SUFBOEMsb0NBQVk7SUFBMUQ7O0lBc0dBLENBQUM7SUFwRmEsc0NBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRWhELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IHRhc2tsaXN0IH0gZnJvbSBcIi4uL0xvYmJ5TmV0RGF0YVwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWxmYXJlUXVlc3RJdGVtIGV4dGVuZHMgZmd1aS5HQnV0dG9uIHtcclxuICAgIC8qKuWujOaIkOWlluWKseeahOmHkeminSAqL1xyXG4gICAgcHJpdmF0ZSBnb2xkOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirku7vliqHnmoTmoIfpopggKi9cclxuICAgIHByaXZhdGUgcndUaXRsZTogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgLyoq5Lu75Yqh55qE6K+m5oOFICovXHJcbiAgICBwcml2YXRlIGRlc2M6IGZndWkuR1RleHRGaWVsZDtcclxuICAgIC8qKumihuWPliAqL1xyXG4gICAgcHJpdmF0ZSBidG5fQ29sbGVjdDogZmd1aS5HQnV0dG9uO1xyXG4gICAgLyoq5Y675a6M5oiQICovXHJcbiAgICBwcml2YXRlIGJ0bl9jb21wbGV0ZTogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSB0eXBlQ29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByaXZhdGUgaW1hZ2VMb2FkZXI6IGZndWkuR0xvYWRlcjtcclxuICAgIC8qKuS7u+WKoee8luWPtyAqL1xyXG4gICAgcHVibGljIHRhc2tpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCkge1xyXG4gICAgICAgIHRoaXMuZ29sZCA9IHRoaXMuZ2V0Q2hpbGQoXCJnb2xkXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMucndUaXRsZSA9IHRoaXMuZ2V0Q2hpbGQoXCJ0aXRsZVwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmRlc2MgPSB0aGlzLmdldENoaWxkKFwiZGVzY1wiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmJ0bl9Db2xsZWN0ID0gdGhpcy5nZXRDaGlsZChcImJ0bl9Db2xsZWN0XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX2NvbXBsZXRlID0gdGhpcy5nZXRDaGlsZChcImJ0bl9jb21wbGV0ZVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl9Db2xsZWN0Lm9uQ2xpY2sodGhpcy5jb2xsZWN0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ0bl9jb21wbGV0ZS5vbkNsaWNrKHRoaXMuZ29Db21wbGV0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlciA9IHRoaXMuZ2V0Q29udHJvbGxlcihcInR5cGVcIik7XHJcbiAgICAgICAgdGhpcy5pbWFnZUxvYWRlciA9IHRoaXMuZ2V0Q2hpbGQoXCJuMFwiKS5hc0xvYWRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLnJ3VGl0bGUuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG4gICAgICAgIHRoaXMuZGVzYy5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcbiAgICAgICAgdGhpcy5idG5fQ29sbGVjdC5nZXRUZXh0RmllbGQoKS5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcbiAgICAgICAgdGhpcy5idG5fY29tcGxldGUuZ2V0VGV4dEZpZWxkKCkuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirpooblj5YgKi9cclxuICAgIHB1YmxpYyBjb2xsZWN0KGV2ZW50OiBmZ3VpLkV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuYnViYmxlcyA9IGZhbHNlO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2VsZmFyZVF1ZXN0SXRlbScsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19hd2FyZCh0aGlzLnRhc2tpZCk7XHJcbiAgICB9XHJcbiAgICAvKirljrvlrozmiJAgKi9cclxuICAgIHB1YmxpYyBnb0NvbXBsZXRlKGV2ZW50OiBmZ3VpLkV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuYnViYmxlcyA9IGZhbHNlO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2VsZmFyZVF1ZXN0SXRlbScsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCB2aWV3ID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXc7XHJcbiAgICAgICAgdmlldy53ZWxmYXJlVmlldyAmJiB2aWV3LndlbGZhcmVWaWV3LkhpZGUoKTtcclxuICAgICAgICBpZiAodGhpcy50bmFtZS5pbmRleE9mKFwi6K6+572uXCIpICE9IC0xIHx8IHRoaXMudG5hbWUuaW5kZXhPZihcIuabtOaNolwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2aWV3LnNob3dNeWluZm9WaWV3KCk7IC8v6K6+572uXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRuYW1lLmluZGV4T2YoXCLlhYXlgLxcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgdmlldy5zaG93VG9wdXAoKTsgLy/orr7nva5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG5hbWUuaW5kZXhPZihcIuW+t+W3nuaJkeWFi1wiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2aWV3LmJhckNvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlldy5iYXJDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPSA1O1xyXG4gICAgICAgICAgICB2aWV3LmVudGVydGFpbm1lbnRWaWV3LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6K6+572u5pWw5o2uICovXHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiB0YXNrbGlzdCkge1xyXG4gICAgICAgIHRoaXMudGFza2lkID0gZGF0YS50YXNraWQ7XHJcbiAgICAgICAgdGhpcy5yd1RpdGxlLnRleHQgPSBkYXRhLm5hbWU7IC8v5Lu75Yqh5ZCN5a2XXHJcbiAgICAgICAgdGhpcy50bmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICBpZiAoZGF0YS5uYW1lLmluZGV4T2YoXCLnrb7liLBcIikgPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjLnRleHQgPSBgJHtkYXRhLnJlbWFya30oJHtkYXRhLmN1cnJlbnR9LyR7ZGF0YS50b3RhbH0pYDsgIC8v5Lu75Yqh5o+P6L+wXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjLnRleHQgPSBgJHtkYXRhLnJlbWFya31gOyAgLy/ku7vliqHmj4/ov7BcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEucGljKSB7XHJcbiAgICAgICAgICAgIFVJVXRpbC5sb2FkU2hvcEltYWdlKHRoaXMuaW1hZ2VMb2FkZXIsIGRhdGEucGljKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmlzY29tcGxhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaXNhd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucHJpemVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChkYXRhLnByaXplc1tpXS50eXBlID09IDEpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ29sZC50ZXh0ID0gZGF0YS5wcml6ZXNbMF0ubnVtICsgJyc7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoZGF0YS5wcml6ZXNbaV0udHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmdvbGQudGV4dCA9IGRhdGEucHJpemVzWzBdLm51bSAqIDEwMDAgKyAnJztcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChkYXRhLnByaXplc1tpXS50eXBlID09IDMpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ29sZC50ZXh0ID0gZGF0YS5wcml6ZXNbMF0ubnVtICogNTAwICsgJyc7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoZGF0YS5wcml6ZXNbaV0udHlwZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmdvbGQudGV4dCA9IGRhdGEucHJpemVzWzBdLm51bSAqIDQwMCArICcnO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGRhdGEucHJpemVzW2ldLnR5cGUgPT0gNSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5nb2xkLnRleHQgPSBkYXRhLnByaXplc1swXS5udW0gKiAzMDAgKyAnJztcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChkYXRhLnByaXplc1tpXS50eXBlID09IDYpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ29sZC50ZXh0ID0gZGF0YS5wcml6ZXNbMF0ubnVtICogMjAwICsgJyc7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29sZC50ZXh0ID0gZGF0YS5wcml6ZXNbMF0ubmFtZSArICcnO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
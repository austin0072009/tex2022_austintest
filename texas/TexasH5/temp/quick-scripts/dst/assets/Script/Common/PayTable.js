
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/PayTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa22aMk1/pLDJ+//0w5+dAN', 'PayTable');
// Script/Common/PayTable.ts

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
var SoundMgr_1 = require("../modules/@mogafa/utils/lib/SoundMgr");
var Utils_1 = require("../modules/@mogafa/utils/lib/Utils");
var Popup_1 = require("../modules/@slotsmaster/ui-common/lib/Popup");
var PayTable = /** @class */ (function (_super) {
    __extends(PayTable, _super);
    function PayTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curBet = 0;
        return _this;
    }
    Object.defineProperty(PayTable.prototype, "curBet", {
        set: function (value) {
            this._curBet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "buttonOKName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "payTableListName", {
        get: function () {
            return "list";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "backToGameButtonName", {
        get: function () {
            return "backToGame";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "openRightPageButtonName", {
        get: function () {
            return "openRightPage";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "openLeftPageButtonName", {
        get: function () {
            return "openLeftPage";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "showPayTableEvent", {
        get: function () {
            return "showPayTable";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    PayTable.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._view = this.fguiComponent;
        this.node.on(this.showPayTableEvent, this.show, this);
        if (this.payTableListName) {
            this.payTableList = this.getChild(this.payTableListName).asList;
            this._curIndex = this.payTableList.getFirstChildInView();
        }
        if (this.backToGameButtonName) {
            this.backToGameButton = this.getChild(this.backToGameButtonName).asButton;
            this.backToGameButton.onClick(this.onBackToGameClick.bind(this));
        }
        if (this.openRightPageButtonName) {
            this.openRightPageButton = this.getChild(this.openRightPageButtonName).asButton;
            this.openRightPageButton.onClick(this.onOpenLeftPageClick.bind(this));
        }
        if (this.openLeftPageButtonName) {
            this.openLeftPageButton = this.getChild(this.openLeftPageButtonName).asButton;
            this.openLeftPageButton.onClick(this.onOpenRightPageClick.bind(this));
        }
    };
    PayTable.prototype.onBackToGameClick = function (listener, target) {
        SoundMgr_1.default.getInstance().playEffect("button");
        this.payTableList.scrollToView(0);
        this._curIndex = 0;
        _super.prototype.hide.call(this);
    };
    PayTable.prototype.onOpenRightPageClick = function (listener, target) {
        SoundMgr_1.default.getInstance().playEffect("button");
        this._curIndex = this.payTableList.scrollPane.currentPageX;
        this._curIndex--;
        if (this._curIndex >= 0) {
            this.jumpPointItem();
        }
    };
    PayTable.prototype.onOpenLeftPageClick = function (listener, target) {
        SoundMgr_1.default.getInstance().playEffect("button");
        this._curIndex = this.payTableList.scrollPane.currentPageX;
        this._curIndex++;
        if (this._curIndex <= this.payTableList.numChildren) {
            this.jumpPointItem();
        }
    };
    PayTable.prototype.jumpPointItem = function () {
        this.payTableList.scrollToView(this._curIndex, true);
        this.payTableList.itemIndexToChildIndex(this._curIndex);
    };
    PayTable.prototype.setData = function (json, curBets) {
        if (!json)
            return;
        this._json = json;
        this._curBet = curBets;
        var payTableTable = json.config;
        for (var i = 0; i < this.payTableList.numItems; i++) {
            var element = this.payTableList._children[i].asCom;
            if (element.name == "payTable") {
                var payTableTableData = payTableTable.payTable;
                var labelGroup = element.getChild("payTableData").asCom;
                for (var j = 0; j < labelGroup.numChildren; j++) {
                    //* 根据棋子的编码对应paytable返回数据的下标
                    var index = parseInt(labelGroup._children[j].name);
                    var revKey = Object.keys(payTableTableData[index]).reverse();
                    var str = "";
                    for (var k = 0; k < revKey.length; k++) {
                        str =
                            str +
                                revKey[k] +
                                "=" +
                                Utils_1.Utils.numToCountingNnit(payTableTableData[index][revKey[k]] * curBets / payTableTable.linecount) +
                                "\n"; // cc.cdd.MgrUser.curBets
                    }
                    labelGroup._children[j].text = str;
                }
            }
            if (element.name == "scatterMap") {
                var scatterMap = payTableTable.scatterMap;
                if (scatterMap) {
                    var labelGroup1 = element.getChild("scatterMapData").asCom;
                    for (var a = 0; a < labelGroup1.numChildren; a++) {
                        var index = parseInt(labelGroup1._children[a].name);
                        var data2 = scatterMap[index];
                        labelGroup1._children[a].text = data2;
                    }
                }
            }
            if (element.name == "jpMultipleMap") {
                var jpMultipleMap = payTableTable.jpMultipleMap;
                if (jpMultipleMap) {
                    var labelGroup2 = element.getChild("jpMultipleMapData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        var data2 = jpMultipleMap[index];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
            if (element.name == "zuesFeature") {
                var zuesFeature = payTableTable.zuesFeature;
                if (zuesFeature) {
                    var labelGroup2 = element.getChild("zuesFeatureData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        var data2 = zuesFeature[index];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
            if (element.name == "jackpot") {
                var jackpotData = payTableTable.jackpotData;
                if (jackpotData) {
                    var labelGroup2 = element.getChild("jackpotData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        var data2 = jackpotData[a];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
        }
    };
    PayTable.prototype.setPayTable = function () { };
    PayTable.prototype.show = function () {
        this.setData(this._json, this._curBet);
        _super.prototype.show.call(this);
    };
    return PayTable;
}(Popup_1.Popup));
exports.default = PayTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXFBheVRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCw0REFBMkQ7QUFDM0QscUVBQW9FO0FBR3BFO0lBQStDLDRCQUFLO0lBQXBEO1FBQUEscUVBMEtDO1FBdktXLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBdUtoQyxDQUFDO0lBdEtHLHNCQUFXLDRCQUFNO2FBQWpCLFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyw4QkFBUTthQUF0QjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGtDQUFZO2FBQTFCO1lBQ0ksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxrQ0FBWTthQUExQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFjLG1DQUFhO2FBQTNCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsc0NBQWdCO2FBQTlCO1lBQ0ksT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYywwQ0FBb0I7YUFBbEM7WUFDSSxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDZDQUF1QjthQUFyQztZQUNJLE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsNENBQXNCO2FBQXBDO1lBQ0ksT0FBTyxjQUFjLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx1Q0FBaUI7YUFBL0I7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QUFJLENBQUMsQ0FBQzt3QkFDcEQsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMvQixXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7cUJBQ3pDO2lCQUNKO2FBQ0o7WUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO2dCQUMzQixJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO2dCQUM1QyxJQUFJLFdBQVcsRUFBRTtvQkFDYixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDeEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzlDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwRCxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztxQkFDekM7aUJBQ0o7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUNNLDhCQUFXLEdBQWxCLGNBQTZCLENBQUM7SUFDOUIsdUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTFLQSxBQTBLQyxDQTFLOEMsYUFBSyxHQTBLbkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL21vZHVsZXMvQG1vZ2FmYS91dGlscy9saWIvU291bmRNZ3JcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL21vZHVsZXMvQG1vZ2FmYS91dGlscy9saWIvVXRpbHNcIjtcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvUG9wdXBcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQYXlUYWJsZSBleHRlbmRzIFBvcHVwIHtcbiAgICBwcml2YXRlIF92aWV3OiBmZ3VpLkdDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfanNvbjogW107XG4gICAgcHJpdmF0ZSBfY3VyQmV0OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzZXQgY3VyQmV0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY3VyQmV0ID0gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYW5pbU5vZGUoKTogY2MuTm9kZVtdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYnV0dG9uT0tOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGdvbGRHcm93TmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG5vcm1hbE51bU5hbWUoKTogc3RyaW5nW10ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYXlUYWJsZUxpc3ROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImxpc3RcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBiYWNrVG9HYW1lQnV0dG9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJiYWNrVG9HYW1lXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgb3BlblJpZ2h0UGFnZUJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwib3BlblJpZ2h0UGFnZVwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG9wZW5MZWZ0UGFnZUJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwib3BlbkxlZnRQYWdlXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgc2hvd1BheVRhYmxlRXZlbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwic2hvd1BheVRhYmxlXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY2xvc2VUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHBheVRhYmxlTGlzdGE6IGZndWkuR0dyb3VwO1xuICAgIHByb3RlY3RlZCBwYXlUYWJsZUxpc3Q6IGZndWkuR0xpc3Q7XG4gICAgcHJvdGVjdGVkIGJhY2tUb0dhbWVCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICBwcm90ZWN0ZWQgb3BlblJpZ2h0UGFnZUJ1dHRvbjogZmd1aS5HQnV0dG9uO1xuICAgIHByb3RlY3RlZCBvcGVuTGVmdFBhZ2VCdXR0b246IGZndWkuR0J1dHRvbjtcblxuICAgIHByaXZhdGUgX2N1ckluZGV4OiBudW1iZXI7XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5fdmlldyA9IHRoaXMuZmd1aUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5ub2RlLm9uKHRoaXMuc2hvd1BheVRhYmxlRXZlbnQsIHRoaXMuc2hvdywgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnBheVRhYmxlTGlzdE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucGF5VGFibGVMaXN0ID0gdGhpcy5nZXRDaGlsZCh0aGlzLnBheVRhYmxlTGlzdE5hbWUpLmFzTGlzdDtcbiAgICAgICAgICAgIHRoaXMuX2N1ckluZGV4ID0gdGhpcy5wYXlUYWJsZUxpc3QuZ2V0Rmlyc3RDaGlsZEluVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJhY2tUb0dhbWVCdXR0b25OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tUb0dhbWVCdXR0b24gPSB0aGlzLmdldENoaWxkKHRoaXMuYmFja1RvR2FtZUJ1dHRvbk5hbWUpLmFzQnV0dG9uO1xuICAgICAgICAgICAgdGhpcy5iYWNrVG9HYW1lQnV0dG9uLm9uQ2xpY2sodGhpcy5vbkJhY2tUb0dhbWVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcGVuUmlnaHRQYWdlQnV0dG9uTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuUmlnaHRQYWdlQnV0dG9uID0gdGhpcy5nZXRDaGlsZCh0aGlzLm9wZW5SaWdodFBhZ2VCdXR0b25OYW1lKS5hc0J1dHRvbjtcbiAgICAgICAgICAgIHRoaXMub3BlblJpZ2h0UGFnZUJ1dHRvbi5vbkNsaWNrKHRoaXMub25PcGVuTGVmdFBhZ2VDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcGVuTGVmdFBhZ2VCdXR0b25OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5MZWZ0UGFnZUJ1dHRvbiA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5vcGVuTGVmdFBhZ2VCdXR0b25OYW1lKS5hc0J1dHRvbjtcbiAgICAgICAgICAgIHRoaXMub3BlbkxlZnRQYWdlQnV0dG9uLm9uQ2xpY2sodGhpcy5vbk9wZW5SaWdodFBhZ2VDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJhY2tUb0dhbWVDbGljayhsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMucGF5VGFibGVMaXN0LnNjcm9sbFRvVmlldygwKTtcbiAgICAgICAgdGhpcy5fY3VySW5kZXggPSAwO1xuICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBvbk9wZW5SaWdodFBhZ2VDbGljayhsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuX2N1ckluZGV4ID0gdGhpcy5wYXlUYWJsZUxpc3Quc2Nyb2xsUGFuZS5jdXJyZW50UGFnZVg7XG4gICAgICAgIHRoaXMuX2N1ckluZGV4LS07XG4gICAgICAgIGlmICh0aGlzLl9jdXJJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBQb2ludEl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgb25PcGVuTGVmdFBhZ2VDbGljayhsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuX2N1ckluZGV4ID0gdGhpcy5wYXlUYWJsZUxpc3Quc2Nyb2xsUGFuZS5jdXJyZW50UGFnZVg7XG4gICAgICAgIHRoaXMuX2N1ckluZGV4Kys7XG4gICAgICAgIGlmICh0aGlzLl9jdXJJbmRleCA8PSB0aGlzLnBheVRhYmxlTGlzdC5udW1DaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5qdW1wUG9pbnRJdGVtKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBqdW1wUG9pbnRJdGVtKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBheVRhYmxlTGlzdC5zY3JvbGxUb1ZpZXcodGhpcy5fY3VySW5kZXgsIHRydWUpO1xuICAgICAgICB0aGlzLnBheVRhYmxlTGlzdC5pdGVtSW5kZXhUb0NoaWxkSW5kZXgodGhpcy5fY3VySW5kZXgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0RGF0YShqc29uOiBhbnksIGN1ckJldHM6IG51bWJlcikge1xuICAgICAgICBpZiAoIWpzb24pIHJldHVybjtcbiAgICAgICAgdGhpcy5fanNvbiA9IGpzb247XG4gICAgICAgIHRoaXMuX2N1ckJldCA9IGN1ckJldHM7XG4gICAgICAgIGxldCBwYXlUYWJsZVRhYmxlID0ganNvbi5jb25maWc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXlUYWJsZUxpc3QubnVtSXRlbXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGF5VGFibGVMaXN0Ll9jaGlsZHJlbltpXS5hc0NvbTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gXCJwYXlUYWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBheVRhYmxlVGFibGVEYXRhID0gcGF5VGFibGVUYWJsZS5wYXlUYWJsZTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxHcm91cCA9IGVsZW1lbnQuZ2V0Q2hpbGQoXCJwYXlUYWJsZURhdGFcIikuYXNDb207XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYWJlbEdyb3VwLm51bUNoaWxkcmVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8qIOagueaNruaji+WtkOeahOe8lueggeWvueW6lHBheXRhYmxl6L+U5Zue5pWw5o2u55qE5LiL5qCHXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGxhYmVsR3JvdXAuX2NoaWxkcmVuW2pdLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV2S2V5ID0gT2JqZWN0LmtleXMocGF5VGFibGVUYWJsZURhdGFbaW5kZXhdKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJldktleS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldktleVtrXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLm51bVRvQ291bnRpbmdObml0KHBheVRhYmxlVGFibGVEYXRhW2luZGV4XVtyZXZLZXlba11dICogY3VyQmV0cyAvIHBheVRhYmxlVGFibGUubGluZWNvdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cIjsgLy8gY2MuY2RkLk1nclVzZXIuY3VyQmV0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsR3JvdXAuX2NoaWxkcmVuW2pdLnRleHQgPSBzdHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcInNjYXR0ZXJNYXBcIikge1xuICAgICAgICAgICAgICAgIGxldCBzY2F0dGVyTWFwID0gcGF5VGFibGVUYWJsZS5zY2F0dGVyTWFwO1xuICAgICAgICAgICAgICAgIGlmIChzY2F0dGVyTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEdyb3VwMSA9IGVsZW1lbnQuZ2V0Q2hpbGQoXCJzY2F0dGVyTWFwRGF0YVwiKS5hc0NvbTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBsYWJlbEdyb3VwMS5udW1DaGlsZHJlbjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChsYWJlbEdyb3VwMS5fY2hpbGRyZW5bYV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBzY2F0dGVyTWFwW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsR3JvdXAxLl9jaGlsZHJlblthXS50ZXh0ID0gZGF0YTI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IFwianBNdWx0aXBsZU1hcFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGpwTXVsdGlwbGVNYXAgPSBwYXlUYWJsZVRhYmxlLmpwTXVsdGlwbGVNYXA7XG4gICAgICAgICAgICAgICAgaWYgKGpwTXVsdGlwbGVNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsR3JvdXAyID0gZWxlbWVudC5nZXRDaGlsZChcImpwTXVsdGlwbGVNYXBEYXRhXCIpLmFzQ29tO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGxhYmVsR3JvdXAyLm51bUNoaWxkcmVuOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGxhYmVsR3JvdXAyLl9jaGlsZHJlblthXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGpwTXVsdGlwbGVNYXBbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxHcm91cDIuX2NoaWxkcmVuW2FdLnRleHQgPSBkYXRhMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gXCJ6dWVzRmVhdHVyZVwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHp1ZXNGZWF0dXJlID0gcGF5VGFibGVUYWJsZS56dWVzRmVhdHVyZTtcbiAgICAgICAgICAgICAgICBpZiAoenVlc0ZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsR3JvdXAyID0gZWxlbWVudC5nZXRDaGlsZChcInp1ZXNGZWF0dXJlRGF0YVwiKS5hc0NvbTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBsYWJlbEdyb3VwMi5udW1DaGlsZHJlbjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChsYWJlbEdyb3VwMi5fY2hpbGRyZW5bYV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSB6dWVzRmVhdHVyZVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEdyb3VwMi5fY2hpbGRyZW5bYV0udGV4dCA9IGRhdGEyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImphY2twb3RcIikge1xuICAgICAgICAgICAgICAgIGxldCBqYWNrcG90RGF0YSA9IHBheVRhYmxlVGFibGUuamFja3BvdERhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGphY2twb3REYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEdyb3VwMiA9IGVsZW1lbnQuZ2V0Q2hpbGQoXCJqYWNrcG90RGF0YVwiKS5hc0NvbTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBsYWJlbEdyb3VwMi5udW1DaGlsZHJlbjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChsYWJlbEdyb3VwMi5fY2hpbGRyZW5bYV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBqYWNrcG90RGF0YVthXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsR3JvdXAyLl9jaGlsZHJlblthXS50ZXh0ID0gZGF0YTI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNldFBheVRhYmxlKCk6IHZvaWQgeyB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHRoaXMuX2pzb24sIHRoaXMuX2N1ckJldCk7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICB9XG59XG4iXX0=
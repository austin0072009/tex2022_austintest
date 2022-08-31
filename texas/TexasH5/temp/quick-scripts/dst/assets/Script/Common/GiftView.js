
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/GiftView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8fc6FPc/FOAqjMFmFxklaF', 'GiftView');
// Script/Common/GiftView.ts

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
exports.JContent = void 0;
var ViewBase_1 = require("../BaseFrame/ViewBase");
var GiftItem_1 = require("./GiftItem");
var JContent = /** @class */ (function () {
    function JContent() {
        this.playAnima = "";
        this.moveAnima = "";
    }
    return JContent;
}());
exports.JContent = JContent;
var GiftView = /** @class */ (function (_super) {
    __extends(GiftView, _super);
    function GiftView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Pos = 0;
        _this.SendChatFun = null;
        _this.giftMap = new Map();
        // private giftAnimaConfig: Map<string, JContent> = new Map<string, JContent>();
        _this.giftConfig = {
            "Tuoxie": { "playAnima": "21_To", "moveAnima": "21_Fly" },
            "daoju_dao": { "playAnima": "To", "moveAnima": "Fly" },
            "daoju_daquan": { "playAnima": "To", "moveAnima": "From" },
            "daoju_laolong": { "playAnima": "To", "moveAnima": "Fly" },
            "gunFrom": { "playAnima": "From", "moveAnima": "" },
            "hd_bingtong01": { "playAnima": "To", "moveAnima": "Fly" },
            "hd_daocha01": { "playAnima": "To", "moveAnima": "Fly" },
            "hd_ganbei01": { "playAnima": "To", "moveAnima": "Fly" },
            "hd_jidan01": { "playAnima": "To", "moveAnima": "Fly" },
            "hd_jiguanqiang01": { "playAnima": "animation", "moveAnima": "fly" },
            "hd_maobi01": { "playAnima": "To", "moveAnima": "Fly" },
            "hd_meigui01": { "playAnima": "To", "moveAnima": "Fly" },
            "hd_woshou01": { "playAnima": "To", "moveAnima": "Fly" },
            "hd_zhuaji01": { "playAnima": "To", "moveAnima": "Fly" },
            "hongbao": { "playAnima": "23_To", "moveAnima": "23_Fly" },
            "kiss": { "playAnima": "15", "moveAnima": "" },
            "mj": { "playAnima": "22_To", "moveAnima": "22_Fly" },
            "xihongshi": { "playAnima": "18", "moveAnima": "" },
            "yan": { "playAnima": "20_To", "moveAnima": "20_Fly" },
            "zan": { "playAnima": "16", "moveAnima": "" }
        };
        return _this;
    }
    Object.defineProperty(GiftView.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GiftView.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GiftView.prototype, "componentName", {
        get: function () {
            return "Gift";
        },
        enumerable: false,
        configurable: true
    });
    GiftView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        fgui.UIObjectFactory.setExtension("ui://Common/GiftItem", GiftItem_1.default);
        this.giftList = this.getChild("n1").asList;
        this.giftList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
    };
    GiftView.prototype.initListSize = function (width, height) {
        this.giftList.width = width;
        height && (this.giftList.height = height);
    };
    GiftView.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        this.addGift();
    };
    GiftView.prototype.addGift = function () {
        var _this = this;
        this.giftList.removeChildrenToPool();
        var praf = [];
        this.giftMap = new Map();
        var bundle = cc.assetManager.getBundle("GameCommon");
        bundle.loadDir("/Prefab", cc.Prefab, function (err, prefad) {
            if (!err) {
                // let temp2: {} = {}
                for (var i = 0; i < prefad.length; i++) {
                    if (i == 1 || i == 2) {
                        continue;
                    }
                    if (prefad[i].name == "gunto" || prefad[i].name == "hd_dapao01" || prefad[i].name == "hd_dapao01_end" || prefad[i].name == "hd_jiguanqiang01_end" || prefad[i].name == "gunto") {
                        continue;
                    }
                    // // 获取动画名字 生成配置
                    // let sk = cc.instantiate(prefad[i]).getComponent(sp.Skeleton);
                    // let animations = sk.skeletonData.skeletonJson.animations;
                    // let index: number = 0;
                    // let jcontent: JContent = new JContent();
                    // let temp: {} = {}
                    // for (const key in animations) {
                    //     if (index == 0) {
                    //         jcontent.playAnima = key;
                    //         temp["playAnima"] = key;
                    //     } else if (index == 1) {
                    //         jcontent.moveAnima = key;
                    //         temp["moveAnima"] = key;
                    //     }
                    //     index += 1;
                    // }
                    // this.giftAnimaConfig.set(prefad[i].name, jcontent);
                    // temp2[prefad[i].name] = temp;
                    var listItem = _this.giftList.addItemFromPool();
                    listItem.showGift(prefad[i]);
                    _this.giftMap.set(prefad[i].name, listItem);
                }
                // console.log("this.giftAnimaConfig == ", this.giftAnimaConfig);
                // console.log("temp2 == ", temp2);
                // console.log("temp2 == ", JSON.stringify(temp2));
            }
        });
    };
    GiftView.prototype.setFromNode = function (self, target) {
        this.selfNode = self;
        this.targetNode = target;
    };
    /**点击 */
    GiftView.prototype.onClickItem = function (item) {
        // this.parent.fguiComponent.visible = false;
        // this.ClickItem = item.createAnimationNode();
        this.SendChatFun(this.Pos, item.prefadAni.name);
    };
    GiftView.prototype.show_Gift = function (_selfNode, _targetNode, content) {
        console.log("----giftview show_Gift----");
        this.selfNode = _selfNode;
        this.targetNode = _targetNode;
        this.flyGift(this.giftMap.get(content).createAnimationNode(), this.giftConfig[content]);
    };
    /**
     * @description
     * @param  自己的节点
     * @param  目标的节点
     */
    GiftView.prototype.flyGift = function (node, m_list) {
        if (!node)
            return;
        var playName = m_list.playAnima;
        var moveName = m_list.moveAnima;
        this.targetNode.addChild(node);
        var spineAni = node.getComponent(sp.Skeleton);
        if (moveName != "") {
            spineAni.setAnimation(0, moveName, true);
            node.position = node.parent.convertToNodeSpaceAR(this.selfNode.parent.convertToWorldSpaceAR(this.selfNode.position));
            node.setPosition(node.position);
            var targetPosition = node.parent.convertToNodeSpaceAR(this.targetNode.parent.convertToWorldSpaceAR(this.targetNode.position));
            node.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(targetPosition.x, targetPosition.y)), cc.callFunc(function () {
                spineAni.setAnimation(0, playName, false);
                spineAni.setCompleteListener(function () {
                    spineAni.node.parent.removeChild(node);
                });
            })));
        }
        else {
            spineAni.setAnimation(0, playName, false);
            spineAni.setCompleteListener(function () {
                spineAni.node.parent.removeChild(node);
            });
        }
    };
    return GiftView;
}(ViewBase_1.default));
exports.default = GiftView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEdpZnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBNkM7QUFDN0MsdUNBQWtDO0FBRWxDO0lBQUE7UUFDSSxjQUFTLEdBQVcsRUFBRSxDQUFBO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDRCQUFRO0FBS3JCO0lBQXNDLDRCQUFRO0lBQTlDO1FBQUEscUVBOEpDO1FBcEpVLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUEwQixJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUNyRSxnRkFBZ0Y7UUFDeEUsZ0JBQVUsR0FBTztZQUNyQixRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7WUFDekQsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO1lBQ3RELGNBQWMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtZQUMxRCxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7WUFDMUQsU0FBUyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO1lBQ25ELGVBQWUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtZQUMxRCxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7WUFDeEQsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFF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QztnQkFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUwsZUFBQztBQUFELENBOUpBLEFBOEpDLENBOUpxQyxrQkFBUSxHQThKN0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uL0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuaW1wb3J0IEdpZnRJdGVtIGZyb20gXCIuL0dpZnRJdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBKQ29udGVudCB7XG4gICAgcGxheUFuaW1hOiBzdHJpbmcgPSBcIlwiXG4gICAgbW92ZUFuaW1hOiBzdHJpbmcgPSBcIlwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHYW1lQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHaWZ0XCI7XG4gICAgfVxuICAgIHB1YmxpYyBQb3M6IG51bWJlciA9IDA7XG4gICAgcHVibGljIFNlbmRDaGF0RnVuOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBnaWZ0TGlzdDogZmd1aS5HTGlzdDtcbiAgICBwcml2YXRlIGdpZnRNYXA6IE1hcDxzdHJpbmcsIEdpZnRJdGVtPiA9IG5ldyBNYXA8c3RyaW5nLCBHaWZ0SXRlbT4oKTtcbiAgICAvLyBwcml2YXRlIGdpZnRBbmltYUNvbmZpZzogTWFwPHN0cmluZywgSkNvbnRlbnQ+ID0gbmV3IE1hcDxzdHJpbmcsIEpDb250ZW50PigpO1xuICAgIHByaXZhdGUgZ2lmdENvbmZpZzoge30gPSB7XG4gICAgICAgIFwiVHVveGllXCI6IHsgXCJwbGF5QW5pbWFcIjogXCIyMV9Ub1wiLCBcIm1vdmVBbmltYVwiOiBcIjIxX0ZseVwiIH0sXG4gICAgICAgIFwiZGFvanVfZGFvXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJUb1wiLCBcIm1vdmVBbmltYVwiOiBcIkZseVwiIH0sXG4gICAgICAgIFwiZGFvanVfZGFxdWFuXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJUb1wiLCBcIm1vdmVBbmltYVwiOiBcIkZyb21cIiB9LFxuICAgICAgICBcImRhb2p1X2xhb2xvbmdcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIgfSxcbiAgICAgICAgXCJndW5Gcm9tXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJGcm9tXCIsIFwibW92ZUFuaW1hXCI6IFwiXCIgfSxcbiAgICAgICAgXCJoZF9iaW5ndG9uZzAxXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJUb1wiLCBcIm1vdmVBbmltYVwiOiBcIkZseVwiIH0sXG4gICAgICAgIFwiaGRfZGFvY2hhMDFcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIgfSxcbiAgICAgICAgXCJoZF9nYW5iZWkwMVwiOiB7IFwicGxheUFuaW1hXCI6IFwiVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCJGbHlcIiB9LFxuICAgICAgICBcImhkX2ppZGFuMDFcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIgfSxcbiAgICAgICAgXCJoZF9qaWd1YW5xaWFuZzAxXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJhbmltYXRpb25cIiwgXCJtb3ZlQW5pbWFcIjogXCJmbHlcIiB9LFxuICAgICAgICBcImhkX21hb2JpMDFcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIgfSxcbiAgICAgICAgXCJoZF9tZWlndWkwMVwiOiB7IFwicGxheUFuaW1hXCI6IFwiVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCJGbHlcIiB9LFxuICAgICAgICBcImhkX3dvc2hvdTAxXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJUb1wiLCBcIm1vdmVBbmltYVwiOiBcIkZseVwiIH0sXG4gICAgICAgIFwiaGRfemh1YWppMDFcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIgfSxcbiAgICAgICAgXCJob25nYmFvXCI6IHsgXCJwbGF5QW5pbWFcIjogXCIyM19Ub1wiLCBcIm1vdmVBbmltYVwiOiBcIjIzX0ZseVwiIH0sXG4gICAgICAgIFwia2lzc1wiOiB7IFwicGxheUFuaW1hXCI6IFwiMTVcIiwgXCJtb3ZlQW5pbWFcIjogXCJcIiB9LFxuICAgICAgICBcIm1qXCI6IHsgXCJwbGF5QW5pbWFcIjogXCIyMl9Ub1wiLCBcIm1vdmVBbmltYVwiOiBcIjIyX0ZseVwiIH0sXG4gICAgICAgIFwieGlob25nc2hpXCI6IHsgXCJwbGF5QW5pbWFcIjogXCIxOFwiLCBcIm1vdmVBbmltYVwiOiBcIlwiIH0sXG4gICAgICAgIFwieWFuXCI6IHsgXCJwbGF5QW5pbWFcIjogXCIyMF9Ub1wiLCBcIm1vdmVBbmltYVwiOiBcIjIwX0ZseVwiIH0sXG4gICAgICAgIFwiemFuXCI6IHsgXCJwbGF5QW5pbWFcIjogXCIxNlwiLCBcIm1vdmVBbmltYVwiOiBcIlwiIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0NvbW1vbi9HaWZ0SXRlbVwiLCBHaWZ0SXRlbSk7XG4gICAgICAgIHRoaXMuZ2lmdExpc3QgPSB0aGlzLmdldENoaWxkKFwibjFcIikuYXNMaXN0O1xuICAgICAgICB0aGlzLmdpZnRMaXN0Lm9uKGZndWkuRXZlbnQuQ0xJQ0tfSVRFTSwgdGhpcy5vbkNsaWNrSXRlbSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRMaXN0U2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5naWZ0TGlzdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICBoZWlnaHQgJiYgKHRoaXMuZ2lmdExpc3QuaGVpZ2h0ID0gaGVpZ2h0KTtcbiAgICB9XG4gICAgYWxsQ2hpbGRDcmVhdGVkKCkge1xuICAgICAgICBzdXBlci5hbGxDaGlsZENyZWF0ZWQoKTtcbiAgICAgICAgdGhpcy5hZGRHaWZ0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRHaWZ0KCkge1xuICAgICAgICB0aGlzLmdpZnRMaXN0LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XG4gICAgICAgIGxldCBwcmFmOiBjYy5QcmVmYWJbXSA9IFtdO1xuICAgICAgICB0aGlzLmdpZnRNYXAgPSBuZXcgTWFwPHN0cmluZywgR2lmdEl0ZW0+KCk7XG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiR2FtZUNvbW1vblwiKTtcbiAgICAgICAgYnVuZGxlLmxvYWREaXIoXCIvUHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFkOiBjYy5QcmVmYWJbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGVtcDI6IHt9ID0ge31cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZmFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDEgfHwgaSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmFkW2ldLm5hbWUgPT0gXCJndW50b1wiIHx8IHByZWZhZFtpXS5uYW1lID09IFwiaGRfZGFwYW8wMVwiIHx8IHByZWZhZFtpXS5uYW1lID09IFwiaGRfZGFwYW8wMV9lbmRcIiB8fCBwcmVmYWRbaV0ubmFtZSA9PSBcImhkX2ppZ3VhbnFpYW5nMDFfZW5kXCIgfHwgcHJlZmFkW2ldLm5hbWUgPT0gXCJndW50b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIOiOt+WPluWKqOeUu+WQjeWtlyDnlJ/miJDphY3nva5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHNrID0gY2MuaW5zdGFudGlhdGUocHJlZmFkW2ldKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYW5pbWF0aW9ucyA9IHNrLnNrZWxldG9uRGF0YS5za2VsZXRvbkpzb24uYW5pbWF0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgamNvbnRlbnQ6IEpDb250ZW50ID0gbmV3IEpDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0ZW1wOiB7fSA9IHt9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAoY29uc3Qga2V5IGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgamNvbnRlbnQucGxheUFuaW1hID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRlbXBbXCJwbGF5QW5pbWFcIl0gPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBqY29udGVudC5tb3ZlQW5pbWEgPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGVtcFtcIm1vdmVBbmltYVwiXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5naWZ0QW5pbWFDb25maWcuc2V0KHByZWZhZFtpXS5uYW1lLCBqY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRlbXAyW3ByZWZhZFtpXS5uYW1lXSA9IHRlbXA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gdGhpcy5naWZ0TGlzdC5hZGRJdGVtRnJvbVBvb2woKSBhcyBHaWZ0SXRlbTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2hvd0dpZnQocHJlZmFkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5naWZ0TWFwLnNldChwcmVmYWRbaV0ubmFtZSwgbGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuZ2lmdEFuaW1hQ29uZmlnID09IFwiLCB0aGlzLmdpZnRBbmltYUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZW1wMiA9PSBcIiwgdGVtcDIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVtcDIgPT0gXCIsIEpTT04uc3RyaW5naWZ5KHRlbXAyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZk5vZGU6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBjYy5Ob2RlO1xuXG5cbiAgICBwdWJsaWMgc2V0RnJvbU5vZGUoc2VsZjogY2MuTm9kZSwgdGFyZ2V0OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuc2VsZk5vZGUgPSBzZWxmO1xuICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDbGlja0l0ZW07XG4gICAgLyoq54K55Ye7ICovXG4gICAgcHVibGljIG9uQ2xpY2tJdGVtKGl0ZW06IEdpZnRJdGVtKSB7XG4gICAgICAgIC8vIHRoaXMucGFyZW50LmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLkNsaWNrSXRlbSA9IGl0ZW0uY3JlYXRlQW5pbWF0aW9uTm9kZSgpO1xuICAgICAgICB0aGlzLlNlbmRDaGF0RnVuKHRoaXMuUG9zLCBpdGVtLnByZWZhZEFuaS5uYW1lKTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIHNob3dfR2lmdChfc2VsZk5vZGU6IGNjLk5vZGUsIF90YXJnZXROb2RlOiBjYy5Ob2RlLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tZ2lmdHZpZXcgc2hvd19HaWZ0LS0tLVwiKTtcbiAgICAgICAgdGhpcy5zZWxmTm9kZSA9IF9zZWxmTm9kZTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gX3RhcmdldE5vZGU7XG4gICAgICAgIHRoaXMuZmx5R2lmdCh0aGlzLmdpZnRNYXAuZ2V0KGNvbnRlbnQpLmNyZWF0ZUFuaW1hdGlvbk5vZGUoKSwgdGhpcy5naWZ0Q29uZmlnW2NvbnRlbnRdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0gIOiHquW3seeahOiKgueCuVxuICAgICAqIEBwYXJhbSAg55uu5qCH55qE6IqC54K5XG4gICAgICovXG4gICAgcHVibGljIGZseUdpZnQobm9kZTogY2MuTm9kZSwgbV9saXN0OiBKQ29udGVudCkge1xuICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcblxuICAgICAgICBsZXQgcGxheU5hbWU6IHN0cmluZyA9IG1fbGlzdC5wbGF5QW5pbWE7XG4gICAgICAgIGxldCBtb3ZlTmFtZTogc3RyaW5nID0gbV9saXN0Lm1vdmVBbmltYTtcblxuICAgICAgICB0aGlzLnRhcmdldE5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIGxldCBzcGluZUFuaSA9IG5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgaWYgKG1vdmVOYW1lICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHNwaW5lQW5pLnNldEFuaW1hdGlvbigwLCBtb3ZlTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5zZWxmTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuc2VsZk5vZGUucG9zaXRpb24pKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLnRhcmdldE5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnRhcmdldE5vZGUucG9zaXRpb24pKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjUsIGNjLnYyKHRhcmdldFBvc2l0aW9uLngsIHRhcmdldFBvc2l0aW9uLnkpKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNwaW5lQW5pLnNldEFuaW1hdGlvbigwLCBwbGF5TmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNwaW5lQW5pLnNldENvbXBsZXRlTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzcGluZUFuaS5ub2RlLnBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwaW5lQW5pLnNldEFuaW1hdGlvbigwLCBwbGF5TmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgc3BpbmVBbmkuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BpbmVBbmkubm9kZS5wYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG59Il19
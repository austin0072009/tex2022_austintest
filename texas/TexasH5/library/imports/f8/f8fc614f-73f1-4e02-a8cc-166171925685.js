"use strict";
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
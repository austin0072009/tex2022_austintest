import ViewBase from "../BaseFrame/ViewBase";
import GiftItem from "./GiftItem";

export class JContent {
    playAnima: string = ""
    moveAnima: string = ""
}

export default class GiftView extends ViewBase {
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "Gift";
    }
    public Pos: number = 0;
    public SendChatFun: Function = null;
    private giftList: fgui.GList;
    private giftMap: Map<string, GiftItem> = new Map<string, GiftItem>();
    // private giftAnimaConfig: Map<string, JContent> = new Map<string, JContent>();
    private giftConfig: {} = {
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
    }

    createChildComponents() {
        super.createChildComponents();
        fgui.UIObjectFactory.setExtension("ui://Common/GiftItem", GiftItem);
        this.giftList = this.getChild("n1").asList;
        this.giftList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
    }

    public initListSize(width: number, height?: number) {
        this.giftList.width = width;
        height && (this.giftList.height = height);
    }
    allChildCreated() {
        super.allChildCreated();
        this.addGift();
    }
    public addGift() {
        this.giftList.removeChildrenToPool();
        let praf: cc.Prefab[] = [];
        this.giftMap = new Map<string, GiftItem>();
        let bundle = cc.assetManager.getBundle("GameCommon");
        bundle.loadDir("/Prefab", cc.Prefab, (err, prefad: cc.Prefab[]) => {
            if (!err) {
                // let temp2: {} = {}

                for (let i = 0; i < prefad.length; i++) {
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

                    let listItem = this.giftList.addItemFromPool() as GiftItem;
                    listItem.showGift(prefad[i]);
                    this.giftMap.set(prefad[i].name, listItem);
                }
                // console.log("this.giftAnimaConfig == ", this.giftAnimaConfig);
                // console.log("temp2 == ", temp2);
                // console.log("temp2 == ", JSON.stringify(temp2));
            }
        });
    }

    private selfNode: cc.Node;
    private targetNode: cc.Node;


    public setFromNode(self: cc.Node, target: cc.Node) {
        this.selfNode = self;
        this.targetNode = target;
    }

    private ClickItem;
    /**点击 */
    public onClickItem(item: GiftItem) {
        // this.parent.fguiComponent.visible = false;
        // this.ClickItem = item.createAnimationNode();
        this.SendChatFun(this.Pos, item.prefadAni.name);


    }

    public show_Gift(_selfNode: cc.Node, _targetNode: cc.Node, content: string) {
        console.log("----giftview show_Gift----");
        this.selfNode = _selfNode;
        this.targetNode = _targetNode;
        this.flyGift(this.giftMap.get(content).createAnimationNode(), this.giftConfig[content]);
    }

    /**
     * @description
     * @param  自己的节点
     * @param  目标的节点
     */
    public flyGift(node: cc.Node, m_list: JContent) {
        if (!node) return;

        let playName: string = m_list.playAnima;
        let moveName: string = m_list.moveAnima;

        this.targetNode.addChild(node);
        let spineAni = node.getComponent(sp.Skeleton);
        if (moveName != "") {
            spineAni.setAnimation(0, moveName, true);
            node.position = node.parent.convertToNodeSpaceAR(this.selfNode.parent.convertToWorldSpaceAR(this.selfNode.position));
            node.setPosition(node.position);
            let targetPosition = node.parent.convertToNodeSpaceAR(this.targetNode.parent.convertToWorldSpaceAR(this.targetNode.position));
            node.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(targetPosition.x, targetPosition.y)), cc.callFunc(() => {
                spineAni.setAnimation(0, playName, false);
                spineAni.setCompleteListener(() => {
                    spineAni.node.parent.removeChild(node);
                })
            })));
        } else {
            spineAni.setAnimation(0, playName, false);
            spineAni.setCompleteListener(() => {
                spineAni.node.parent.removeChild(node);
            })
        }
    }

}
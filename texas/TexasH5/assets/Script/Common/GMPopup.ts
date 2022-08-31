/*
 * @Description: Gm命令
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-04-22 11:11:36
 * @LastEditors: sin2021
 * @LastEditTime: 2020-09-03 14:11:59
 */
const { ccclass, property, menu } = cc._decorator;
@ccclass
export class GMPopup extends cc.Component {
    private curSpinLength: number;
    private timeArray: Array<number> = [];
    private input: cc.EditBox;

    onLoad() {
        this.input = this.node.getChildByName("editBox").getComponent(cc.EditBox);
        this.node.zIndex = 100;
        if (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS) {
            this.node.active = false;
        } else {
            this.node.active = true;
        }
    }

    clearEdit() {
        this.input.string = "";
    }

    close() {
        this.node.active = false;
    }

    show() {
        this.node.active = true;
    }

    inputText(): Array<number | string>[] {
        if (this.input && this.input != undefined) return this.gmCode(this.input.string);
    }

    testEditStrToArr(newStr) {
        let arr = newStr;
        if (newStr == undefined) {
            hands = [];
        } else {
            let splitOneArr = arr.split("|");
            var hands = [];
            this.curSpinLength = splitOneArr[0].length + 1;
            if (splitOneArr.length > 1) {
                let splitTwoArr = splitOneArr[0].split("&");
                if (splitOneArr[0].length < arr.length) {
                    arr = arr.substring(splitOneArr[0].length);
                } else {
                    arr = "";
                }
                for (let j = 0; j < splitTwoArr.length; j++) {
                    let hand = splitTwoArr[j].split(",");
                    for (let k = 0; k < hand.length; k++) {
                        hand[k] = Number(hand[k]);
                    }
                    hands.push(hand);
                }
            }

            if (hands.length == 0) {
                let newHand = splitOneArr[0].split(",");
                let newHandArr = [];
                for (let k = 0; k < newHand.length; k++) {
                    newHandArr.push(Number(newHand[k]));
                }
                hands.push(newHandArr);
            }
        }
        return hands;
    }

    testEditDelte() {
        if (this.input && this.input != undefined) this.input.string = "";
    }

    gmCode(str: string): number[][] {
        let hand: number[] = [];
        let hands: number[][] = [];
        if (str === "") {
            hands = [];
        } else {
            let splitStrArr: string[] = str.split("|");
            if (splitStrArr.length > 0) {
                hand = splitStrArr
                    .slice(0, 1)
                    .join(",")
                    .split(",")
                    .map((item) => Number(item));
                hands.push(hand);
                this.input.string = splitStrArr.slice(1, splitStrArr.length).join("|");
            } else {
                hands = [];
            }
        }
        return hands;
    }
}

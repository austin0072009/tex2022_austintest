/**支付宝充值详情 */
export default class ZfbDerails extends fgui.GComponent {
    private btn_next: fgui.GButton;
    /**类型  */
    private typeController: fgui.Controller;
    /**数量 */
    private numController: fgui.Controller;

    /**数量输入 */
    private numInput: fgui.GTextInput;

    protected onConstruct() {
        this.btn_next = this.getChild("n17").asButton;
        this.btn_next.onClick(this.next, this);
        this.typeController = this.getController("type");
        this.numController = this.getController("num");
        this.numInput = this.getChild("n10").asTextInput;
    }

    public next() {
        console.log("123213213123123")
        let type = this.typeController.selectedIndex;
        if (type == 0) {
            return;
        }
        let num = this.numController.selectedIndex;
        let inputNum = this.numInput.text;
        
    }
}
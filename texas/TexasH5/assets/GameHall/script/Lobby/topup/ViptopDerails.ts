/**vip充值详情 */
export default class ViptopDerails extends fgui.GComponent {
    private btn_server1: fgui.GButton;
    private btn_server2: fgui.GButton;

    protected onConstruct() {
        this.btn_server1 = this.getChild("server1").asButton;
        this.btn_server2 = this.getChild("server2").asButton;

        this.btn_server1.onClick(this.jump1, this);
        this.btn_server2.onClick(this.jump2, this);
    }

    public jump1() {

    }
    public jump2() {

    }

}
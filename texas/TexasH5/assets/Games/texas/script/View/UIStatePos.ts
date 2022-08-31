import UIStateBase from './UIStateBase';

export default class UIStatePos extends UIStateBase
{
    public isLocal = true;
    public postions:cc.Vec3[];

    OnLoadCompleted(){
        // this.node.active = false;
    }

    public SetState(state:number)
    {
        super.SetState(state);
        this.SetPos(state);
    }

    private SetPos(state:number)
    {
        if (state < 0) { return; }

        if (this.postions != null && this.postions.length > state )
        {
            if (this.isLocal)
            {
                this.node.position = this.postions[state];
            }
            else
            {
                this.node.position = this.postions[state];
            }
            
        }
    }

    // 把 node1移动到 node2的位置
    public moveN1toN2(node1: cc.Node, node2: cc.Node) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }
    // 获取把 node1移动到 node2位置后的坐标
    public convertNodeSpaceAR(node1: cc.Node, node2: cc.Node) {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }

    public Show(){
        this.node.active = true;
        super.Show();
    }

    public Hide(){
        super.Hide();
        this.node.active = false;
    }
}
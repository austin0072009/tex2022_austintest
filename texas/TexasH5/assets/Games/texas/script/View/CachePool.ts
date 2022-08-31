import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import InstanceGameObjectCache from "./InstanceGameObjectCache";
import { UIMoveMonoFgui } from "./UIMoveMono";

export default class CachePool extends ViewBase {
    private objPools: InstanceGameObjectCache = new InstanceGameObjectCache();

    OnLoadCompleted() {
        // console.log("====CachePool====");
        fgui.UIObjectFactory.setExtension("ui://Texas/ImgChipTemplete", UIMoveMonoFgui);
        if (this.objPools == null) {
            this.objPools = new InstanceGameObjectCache();
        }
    }

    AutoSetGoProperty() { }

    public GetCacheObject(name: string, parent: fgui.GComponent, templete: string = null): fgui.GObject {
        var obj: fgui.GObject = this.objPools.PopItem(name);
        if (obj == null && templete != null) {
            // console.log("====创建筹码");
            obj = fgui.UIPackage.createObject("Texas", templete, UIMoveMonoFgui)
            this.node.addChild(obj.node);
        }

        if (obj != null) {
            obj.name = name + obj.id;
            // console.log("====设置筹码，parent="+parent.name+" ,  obj = "+ obj.name);
            obj.node.parent = parent.node;
            obj.node.position = this.convertNodeSpaceAR(obj.node, parent.node);

        }

        return obj;
    }

    public DestroyObject(obj: fgui.GObject, isCache = true): fgui.GObject {
        if (obj == null) { return; }

        if (isCache) {
            // console.log("----删除筹码，CacheParent ="+CacheHelper.CacheParent);
            // obj.node.setParent(CacheHelper.CacheParent);
            this.objPools.PushItem(obj, obj.name);
        }
        else {
            this.objPools.DestroyExistItem(obj, obj.name);
        }
        obj = null;
    }

    public ClearAllCache() {
        this.objPools.cleanAll();
    }

    // 把 node1移动到 node2的位置
    public moveN1toN2(node1: cc.Node, node2: cc.Node) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }
    // 获取把 node1移动到 node2位置后的坐标
    public convertNodeSpaceAR(node1: cc.Node, node2: cc.Node): cc.Vec3 {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }
}






export class CacheHelper {
    private static cache: cc.Node = null;
    public static get CacheParent(): cc.Node {
        if (CacheHelper.cache == null) {
            // CacheHelper.CacheParent.destroy();// GameObject.DontDestroyOnLoad(this.CacheParent.gameObject);
            CacheHelper.cache = new cc.Node("_cache_");
        }
        return CacheHelper.cache;

    }
}
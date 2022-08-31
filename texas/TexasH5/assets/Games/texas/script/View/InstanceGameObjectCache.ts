export default class InstanceGameObjectCache {
    private maxCountDict: Map<string, number>;//string:对象的名字，int:该类对象能够缓存的最大个数。  
    public maxCount = 50;
    public itemDict: Map<string, fgui.GObject[]>;

    public constructor() {
        this.maxCountDict = new Map<string, number>();
        this.itemDict = new Map<string, fgui.GObject[]>();
    }

    //设置某一类资源的最大缓存个数
    public SetGameobjectMaxCount(resName: string, count: number) {
        if (resName != null) { resName = resName.toLowerCase(); }
        this.maxCountDict.set(resName, count);
    }

    public GetGameobjectMaxCount(resName: string): number {
        if (resName != null) { resName = resName.toLowerCase(); }
        if (this.maxCountDict.has(resName)) {
            return this.maxCountDict.get(resName);
        }

        return this.maxCount;
    }

    public GetCurCount(resName: string): number {
        if (resName != null) { resName = resName.toLowerCase(); }
        let list: fgui.GObject[];
        list = this.itemDict.get(resName);
        if (list != null) {
            return list.length;
        }

        return 0;
    }

    //重置最大资源个数为默认值
    public ResetMaxCount() {
        this.maxCountDict.clear();
    }

    //放入一个           
    public PushItem(item: fgui.GObject, resName: string) {
        if (item != null) {
            if (resName != null) {
                resName = resName.toLowerCase();
            }
            else {
                return;
            }

            let max = this.maxCountDict.has(resName) ? this.maxCountDict.get(resName) : this.maxCount;

            let list: fgui.GObject[];
            list = this.itemDict.get(resName);
            if (list == null) {
                list = [];
                this.itemDict.set(resName, list);
            }

            //防止外部多次push调用时，添加相同的对象
            if (list.indexOf(item) == -1) {
                if (list.length < max) {
                    item.visible = false;
                    item.node.position = cc.v3(50000, 50000, 0);
                    list.push(item);
                }
                else {
                    console.log("超过缓存容量的直接释放掉");
                    item.node.destroy();
                }
            }

            item = null;
        }
    }

    //推出一个
    public PopItem(key: string): fgui.GObject {
        let popItem: fgui.GObject = null;
        if (key != null) { key = key.toLowerCase(); }
        let list: fgui.GObject[];
        list = this.itemDict.get(key);
        if (list != null && list.length > 0) {
            popItem = list[list.length - 1];
            list.pop(); //list.RemoveAt(list.length - 1);
        }

        if (popItem != null && popItem.visible == false) {
            popItem.visible = true;
        }

        return popItem;
    }



    //特殊的地方会要求删除已经存在的对象
    public DestroyExistItem(item: fgui.GObject, resName: string) {
        if (item == null)
            return;
        if (resName != null) { resName = resName.toLowerCase(); }
        let list: fgui.GObject[];
        list = this.itemDict.get(resName);
        if (list != null && list.indexOf(item) >= 0) {
            list.splice(list.indexOf(item), 1);
        }
        console.log("3超过缓存容量的直接释放掉");
        item.node.destroy();
    }


    public cleanAll() {
        this.itemDict.forEach((list, key) => {
            for (var i = 0; i < list.length; i++) {
                if (list[i] != null)
                    list[i].node.destroy();// GameObject.DestroyImmediate(list[i]);
            }
        });
        this.maxCountDict.clear();
    }

    public clearSomeObj() {
        this.itemDict.forEach((list, key) => {
            // #if UNITY_ANDROID
            // int count = Mathf.Min(list.Count / 5 + 1, list.Count);
            // #else
            let count = Math.min(list.length / 2 + 1, list.length);
            // #endif
            if (count > 0) {
                count = list.length - count;
                for (var i = list.length - 1; i >= count; i--) {
                    if (list[i] != null) {
                        console.log("2超过缓存容量的直接释放掉2");
                        list[i].node.destroy(); //GameObject.DestroyImmediate(list[i]);
                    }
                    list.splice(i, 1);
                }
            }

        });
    }

    private clearHeroFlag = 0;
    public clearSomeHeroObj() {
        if (this.clearHeroFlag++ < 3) {
            return;
        }
        this.clearHeroFlag = 0;

        //hero判断条件为只有一个
        this.itemDict.forEach((list, key) => {
            let count = Math.min(list.length / 2 + 1, list.length);
            if (count == 1) {
                if (list[0] != null && list[0].name.toLowerCase().indexOf("hero") >= 0)
                    list[0].node.destroy();// GameObject.DestroyImmediate(list[0]);
                list = [];
            }
        });
    }

    public contains(key: string): boolean {
        if (key != null) { key = key.toLowerCase(); }
        let list: fgui.GObject[];
        list = this.itemDict.get(key);
        return list != null && list.length > 0;
    }
}
import ViewBase from "../BaseFrame/ViewBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FramefuncManager extends ViewBase {
    private static frameFuncList: Function[];

    public static Add(frameFunc:Function){
        this.frameFuncList.push(frameFunc);
    }
    

    public static update():void
    {
        for (var i = 0; i < this.frameFuncList.length; i++)
        {

            if (this.frameFuncList[i]())
            {
                this.frameFuncList.splice(i,1);
                i--;
            }

            try
            {
                if (this.frameFuncList[i]())
                {
                    this.frameFuncList.splice(i,1);
                    i--;
                }
            }
            catch (err)
            {
                console.log(err);
            }


        }
    }
 }

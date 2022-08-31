
export class TexQueueMessages {
    private static _texms: TexQueueMessages;

    static get instance(): TexQueueMessages {
        if (this._texms == null) {
            this._texms = new TexQueueMessages();
        }
        return this._texms;
    }
    //处理并发消息,消息名，数据
    public listMessages: TexQueueMsg[] = [];

    public AddTexMes(funName: string, _data: any, fun: Function) {
        console.error("添加消息队列：" + funName);
        let ms = new TexQueueMsg();
        ms.name = funName;
        ms.status = false;
        ms.data = _data;
        ms.fun = fun;
        this.listMessages.push(ms);
    }

    //是否可以执行下一个消息
    public isCanExeNext(): boolean {
        if (this.listMessages.length != 0 && this.listMessages[0].status == false) {
            return true;
        }
        return false;
    }

    public ExeNextMes() {
        if (this.listMessages.length > 0) {
            console.error("====执行消息：" + this.listMessages[0].name + "--->" + this.listMessages[0].data)
            this.listMessages[0].status = true;
            this.listMessages[0].fun(this.listMessages[0].data);
            this.listMessages.shift();
        }
    }

    public RemoveFirstMes() {
        if (this.listMessages.length > 0 && this.listMessages[0].status == true) this.listMessages.shift();
    }

    public removeAllMes() {
        this.listMessages = [];
    }
}


//并发消息
class TexQueueMsg {
    //消息名
    public name: string;
    //正在执行
    public status: boolean;

    public fun: Function;

    public data: any;
}
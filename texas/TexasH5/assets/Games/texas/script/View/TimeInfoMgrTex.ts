const { ccclass, property } = cc._decorator;

@ccclass
export default class TimeInfoMgrTex {
    private static _instance: TimeInfoMgrTex;
    private timer: any[] = [];
    static get instance(): TimeInfoMgrTex {
        if (this._instance == null) {
            this._instance = new TimeInfoMgrTex();
        }
        return this._instance;
    }

    public AddTimer(time: number, action: Function): Function {
        var fun: Function = null;
        let outtime = setTimeout(fun = () => {
            if (action != null) {
                action();
            }
        }, time * 1000);
        this.timer.push(outtime);
        return fun;
    }

    public addTimerNoCallback(timer: any) {
        this.timer.push(timer);
    }

    public removeTimer() {
        console.log("removeTimer");
        for (let index = 0; index < this.timer.length; index++) {
            let outtime = this.timer[index];
            console.log("removeTimer : ", outtime);

            if (outtime) {
                clearTimeout(outtime);
            }
        }
        this.timer = [];
    }
}

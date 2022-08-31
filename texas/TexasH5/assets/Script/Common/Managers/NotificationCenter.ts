/*
 * @Description: CocosCreator's global Event/Message Center.
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-03-31 11:05:24
 * @LastEditors: sin2021
 * @LastEditTime: 2020-03-31 11:44:02
 */
export class NotificationCenter {
    private eventTarget: cc.EventTarget = new cc.EventTarget();

    private static instance: NotificationCenter = null;
    public static get Instance(): NotificationCenter {
        if (this.instance == null) {
            this.instance = new NotificationCenter();
        }
        return this.instance;
    }

    /**
     * Listen to a notification
     * @param name 
     * @param callback 
     */
    public on(name: string, callback?: any, target?: any) {
        this.eventTarget.on(name, callback, target);
    }

    /**
     * Dispatch a notification
     * @param name 
     */
    public emit(name: string, arg1?: any) {
        this.eventTarget.emit(name, arg1);
    }

    /**
     * Cancel listen
     * @param name 
     */
    public off(name: string, callback?: Function, target?: any) {
        this.eventTarget.off(name, callback, target);
    }
}

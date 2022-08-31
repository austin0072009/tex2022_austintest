class TimeInfoServerEx
{
    public tick:number = 0;// CD开始计时          

}

/// <summary>
/// 时间事件结构
/// </summary>
class TimeFuncStruct
{
    /// <summary>
    /// 用于时间事件唯一ID 会自动增加 不需要手动赋值
    /// </summary>
    public  id:any;
    /// <summary>
    /// 时间事件触发的开始时间点 是Unity中的帧时间
    /// </summary>
    public  fStart:number;
    /// <summary>
    /// 时间事件执行的次数
    /// </summary>
    public  count:number;
    /// <summary>
    /// 防止不同场景后，延时函数的异常处理
    /// </summary>
    public  scene_name:string;
    /// <summary>
    /// 单个时间系统返回唯一ID
    /// </summary>
    public systemID:any;
}

export class Res
{

    private static _instance: Res; //类型为这个类
    private  ID:number;

    /// <summary>
    /// 同步服务器时间
    /// </summary>
    private  fTimeServer:number;
    private _dateServer:TimeInfoServerEx;
    /// <summary>
    /// 事件列表
    /// </summary>   
    private listTimer:TimeFuncStruct[] = [];

    private constructor()
    {
        this.fTimeServer = 0;
        this.ID = 5000; 
    }

    //单例
    static get Singleton() 
    {
      if (!this._instance) {
        this._instance = new Res();
      }
      return this._instance;
    }
    

    public get dateServer():TimeInfoServerEx
    {
        if (this._dateServer == null) this._dateServer = new TimeInfoServerEx();//初始化
        return this._dateServer;
    }

    public set dateServer(value:TimeInfoServerEx)
    {
        this._dateServer = value;
    }

    /// <summary>
    /// 心跳返回同步 服务器时间
    /// </summary>
    /// <param name="unixTime">服务器时间</param>
    public  OnServerTime( unixTime:number)
    { 
        if (unixTime > 0)
        {
            this.dateServer.tick = unixTime; //同步服务器时间 
        }
        this.fTimeServer = unixTime;
    }

    /// <summary>
    /// 取消 指定的时间事件 
    /// </summary>
    /// <param name="id"></param>
    public StopTimer( id:any)
    {
        let timer = this.listTimer.splice(this.listTimer.findIndex(item => item.id == id),1)
        if(timer == null)
        {
            return;
        }
        clearTimeout(timer[0].systemID)
    }

    public StopTimerScene( scenename:string)
    {
        for (let i = this.listTimer.length - 1; i >= 0; i--)
        {
            let timer:TimeFuncStruct = this.listTimer[i];
            if(timer == null)
            {
                continue;
            }
            if (timer.scene_name == scenename) 
            {  
                clearTimeout(timer[0].systemID)
                this.listTimer.splice(i,1);
            }
        }
    }

    /// <summary>
    /// 计时器
    /// </summary>
    /// <param name="tick">时间：毫秒计单位</param>
    /// <param name="action">时间回调函数</param>
    /// <param name="count">出发次数，-1无限制</param>
    /// <returns></returns>
    public AddTimer( tick:number,  action:Function, count:number =1,  scenename:string = ""):number
    {   
        this.ID++;
        let timer:TimeFuncStruct = new TimeFuncStruct();
        timer.id = this.ID;
        timer.count = count;
        timer.fStart = 0;
        timer.scene_name = scenename;
        let id = this.AddInterval(this.ID,tick,action,count);
        timer.systemID = id;
        
        this.listTimer.push(timer);
        return this.ID;
    }

    public AddInterval(ID:number,tick:number,  action:Function,count:number):any
    {
        var that = this;
        let sysID = setTimeout(()=>{
            action();
            let index:number =  this.listTimer.findIndex((item)=>{item.id == ID})
            if(count == -1)
            {

            }
            else if(count == 0)
            {
                this.listTimer.splice(this.listTimer.findIndex(item => item.id == ID),1)
                return;
            }
            else
            {
                count = count - 1
                this.listTimer[index].count = count;
            }
            let sysID = that.AddInterval(ID,tick,action,count)
            this.listTimer[index].systemID = sysID;
        },tick)
        return sysID;
    }
}
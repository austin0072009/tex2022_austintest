import ViewBase from "../BaseFrame/ViewBase";
 
const {ccclass, property} = cc._decorator;

@ccclass
export default class VoiceChatMono extends ViewBase {

    protected get packageResourceName(): string {
        return "bullfight";
    }
    protected get packageName(): string {
        return "bullfight";
    }
    protected get componentName(): string {
        return "bullfight";
    }
    private   mHasMicroPhonePermission:boolean = false;  //查看麦克风权限
    private  mDeviceName:string;
    private   mHasMicroPhone:boolean ;

    private   mCostTime:boolean;
    private   mFlag :boolean = false;
    private   mDisplayTime:number;
    public   mLoop:boolean 
    public   mLengthSec:number = 10;
    public   mFrequency:number = 8000;
    private  mAudioCli:cc.AudioClip;
    public   ui_btnYuYin:cc.Node;
    public  mRetirnVoice:Function;//Function<string>;

    public Awake() :void
    {
        this.mLengthSec = 10;
        this.mFrequency = 8000;
    }

    public   MyStart(  _retirnVoice:Function=null):void
    {
        //base.AutoSetGoProperty(this, gameObject);
        if (_retirnVoice != null)
        this.mRetirnVoice = _retirnVoice;
        this. mHasMicroPhonePermission = true;
        // 判断是否有麦克风 有则默认使用第一个
        // if (Microphone.devices.Length > 0)
        // {
        //     mDeviceName = Microphone.devices[0];
        //     mHasMicroPhone = true;
        // }
        // else
        // {
        //     mHasMicroPhone = false;
        // }
        // ZUIEventListener.OverWriteCallBack(ui_btnYuYin.gameObject, _OnVoiceDown, ZUIEventType.Down);
        // ZUIEventListener.OverWriteCallBack(ui_btnYuYin.gameObject, _OnVoiceUp, ZUIEventType.Up);
    }


    // Update is called once per frame
      Update():void
    {
        if (this.mFlag)
        {
            // mCostTime += Time.deltaTime;
            // if ((int)mCostTime > mDisplayTime)
            // {
            //     Debug.Log(mCostTime);
            //     mDisplayTime = (int)mCostTime;
            //     if (mCostTime > mLengthSec)
            //     {
            //         _OnVoiceUp(null, null);
            //     }
            // }
        }
    }

    // private   _OnVoiceDown(GameObject arg1, UnityEngine.EventSystems.PointerEventData arg2):void
    // {
    //     if (!mHasMicroPhonePermission)
    //     {
    //         Debuger.Log("没有麦克风权限");
    //         return;
    //     }
    //     if (!mHasMicroPhone)
    //     {
    //         Debuger.Log("没有插入麦克风");
    //         return;
    //     }

    //     mCostTime = 0;
    //     mFlag = true;
    //     mDisplayTime = 0;
    //     mAudioClip = Microphone.Start(mDeviceName, mLoop, mLengthSec, mFrequency);       //44100
    // }

    // private   _OnVoiceUp(GameObject arg1, UnityEngine.EventSystems.PointerEventData arg2):void
    // {
    //     if (!mHasMicroPhonePermission || !mHasMicroPhone)
    //         return;

    //     mFlag = false;

    //     Microphone.End(mDeviceName);

    //     if (mCostTime < 1)
    //         return;

    //     if (mCostTime > mAudioClip.length)
    //         mCostTime = mAudioClip.length;

    //     float[] data = AudioClipConverter.Trim(mAudioClip, mCostTime);
    //     if (data == null)
    //         return;
    //     byte[] voice = AudioClipConverter.AudioClipToBytes(data);
    //     if (voice == null || voice.Length == 0)
    //         return;
        
    //     //发送的语言内容转换
    //     string str = AudioClipConverter.BytesToString(voice);

    //     if (mRetirnVoice != null)
    //     {
    //         mRetirnVoice(str);
    //     }
 
    // }
  

}

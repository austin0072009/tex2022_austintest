import { setTimeout } from "timers";
 

export class Res
{

    private static _instance: Res; //类型为这个类 

    private constructor()
    {  
        
    }

    //单例
    static get Singleton() 
    {
      if (!this._instance) {
        this._instance = new Res();
      }
      return this._instance;
    } 
 
    /// <summary>
    /// 释放一个资源
    /// </summary>
    /// <param name="obj"></param>
    public  destroy( obj:cc.Node,   flag:boolean = true):void
    {
        if (obj == null)
            return;
            obj.parent = null;
            obj.destroy();
        obj = null;
    }

    /// <summary>
    /// 特效资源加载接口， 目前发现只有角色战斗特效调用此接口，以后特效需要都通过此接口调用
    /// change by jsw
    /// </summary>
    /// <param name="name"></param>
    /// <param name="path"></param>
    /// <returns></returns>
    public  LoadEffect(  name:string,   lifeValue:number = 1) :cc.Object
    {
        if (name == "")
            return null;
        // string[] arr = name.split('/');
        // if (arr.Length > 1)
        // {
        //     name = arr[arr.Length - 1];
        // } 
        // return EffectAssetManager.Singleton.GetEffectAsset(name, lifeValue);
        return null;
    }

    /// <summary>
    /// 得到共享纹理
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    public  GetShareTexture( name:string ,   isEffectTex :boolean= false):cc.Texture2D
    {
        // return ShareTextureManager.Singleton.GetTexture(name, isEffectTex);
        return null;
    }


    /// <summary>
    /// 设置image对象的sprite 动态设置图集资源必须通过此接口 
    /// </summary>
    public   SetImageSprite1( ui_icon:fgui.GLoader,   packageName:string, url:string ):boolean
    {
        if (ui_icon == null  ) return false;
        let iconurl = fgui.UIPackage.getItemURL(packageName, url);
        ui_icon.url = iconurl; 
        
        return false;
    }

    /// <summary>
    /// 这个方法以后要被弃用。
    /// add by jsw
    /// </summary>
    public   SetImageSprite( image:fairygui.GImage,   altasName:string,   spName:string,   addRef :boolean= true):boolean
    {
        // return UIAtlasManager.Singleton.SetSprite(image, altasName, spName, addRef);
        return null;
    }

    // /// <summary>
    // /// 模型专用加载方法 
    // /// </summary>
    // /// <param name="name"></param>
    // /// <param name="path"></param>
    // /// <returns></returns>
    // public GameObject InstantiateModel(string name)
    // {
    //     UnityEngine.Object tmpobj = ModelAssetManager.Singleton.GetModel(name);//loadAllclip暂时不开放 //SceneEx.Current.LoadCharactorSync(name);  //change by jsw
    //     if (tmpobj != null)
    //     {
    //         //if (pos != null && rotation != null) GameObject.Instantiate(tmpobj, pos.Value, rotation.Value) as GameObject;    
    //         return GameObject.Instantiate(tmpobj) as GameObject;
    //     }
    //     else
    //     {
    //         Debug.LogError("can not find model: " + name);
    //         return null;
    //     }
    // }
    // public GameObject InstantiateModelandTex(string name)
    // {
    //     Material material = ModelAssetManager.Singleton.GetMaterialAsset("mahjongtile_mobile_unlit");  //add by jsw    cmat_
    //     UnityEngine.Object tmpobj = ModelAssetManager.Singleton.GetModel(name);//loadAllclip暂时不开放 //SceneEx.Current.LoadCharactorSync(name);  //change by jsw
    //     if (tmpobj != null)
    //     {
    //         //if (pos != null && rotation != null) GameObject.Instantiate(tmpobj, pos.Value, rotation.Value) as GameObject;    
    //         GameObject _temp = GameObject.Instantiate(tmpobj) as GameObject;
    //         MeshRenderer _tmr = _temp.GetComponent<MeshRenderer>();
    //         _tmr.sharedMaterial = material;
    //         return _temp;
    //     }
    //     else
    //     {
    //         Debug.LogError("can not find model: " + name);
    //         return null;
    //     }
    // }
    // public UnityEngine.Object GetObject(string name)
    // {
    //     return ModelAssetManager.Singleton.GetModel(name);
    // }

    // //add by jsw
    // public GameObject InstantiateCEffect(string name, Vector3? pos = null, Quaternion? rotation = null)
    // {
    //     UnityEngine.Object tmpobj = LoadEffect(name);
    //     if (tmpobj != null)
    //     {
    //         if (pos != null && rotation != null)
    //             return GameObject.Instantiate(tmpobj, pos.Value, rotation.Value) as GameObject;
    //         else if (pos != null && rotation == null)
    //             return GameObject.Instantiate(tmpobj, pos.Value, Quaternion.identity) as GameObject;
    //         return GameObject.Instantiate(tmpobj) as GameObject;
    //     }
    //     else
    //     {
    //         Debug.LogError("can not find effect: " + name);
    //         return null;
    //     }
    // }

    // public GameObject InstantiateModleSpine(string name, Transform parent = null,Vector3? pos = null, Vector3? scale = null, Quaternion? rotation = null)
    // {
    //     GameObject tmpobj = ModelAssetManager.Singleton.GetModel(name);
    //     if (tmpobj != null)
    //     {
    //         GameObject obj = GameObject.Instantiate(tmpobj.transform.GetChild(0).gameObject) as GameObject;
    //         if (obj != null)
    //         {
    //             obj.SetActive(true);
    //             obj.transform.parent = parent;
    //             obj.transform.localScale = scale != null ? (Vector3)scale : Vector3.one;
    //             obj.transform.localPosition = pos != null ? (Vector3)pos : Vector3.zero;
    //             obj.transform.rotation = rotation != null ? (Quaternion)rotation : Quaternion.identity;         
    //         }

    //         return obj;
    //     }
    //     else
    //     {
    //         Debug.LogError("can not find model: " + name);
    //         return null;
    //     }

    // }
}
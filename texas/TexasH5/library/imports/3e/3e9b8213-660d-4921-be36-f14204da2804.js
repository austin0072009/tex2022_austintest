"use strict";
cc._RF.push(module, '3e9b8ITZg1JIb428UIE2igE', 'ToolsEx');
// Script/Common/ToolsEx.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolsEx = void 0;
var CryptoJS = require("crypto");
var ToolsEx = /** @class */ (function () {
    function ToolsEx() {
    }
    Object.defineProperty(ToolsEx, "Singleton", {
        //单例
        get: function () {
            if (!this._instance) {
                this._instance = new ToolsEx();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /// <summary>
    /// Get the rootmost object of the specified game object.
    /// </summary>
    ToolsEx.prototype.GetRoot = function (go) {
        //let t = go.node;
        var t = null;
        for (;;) {
            var parent = go.parent;
            if (parent == null)
                break;
            t = parent;
        }
        return t;
    };
    /// <summary>
    /// 是否包含激活的子对象
    /// </summary>
    ToolsEx.prototype.HasActiveChild = function (trans) {
        if (trans == null)
            return false;
        var len = trans.node.childrenCount;
        for (var i = 0; i < len; ++i) {
            if (trans.node.children[i].active)
                return true;
        }
        return false;
    };
    ToolsEx.prototype.GetMiddlePosition = function (vlist) {
        if (vlist == null || vlist.length == 0 || vlist.length == 1)
            return cc.v3(0, 0, 0);
        var rev = cc.v3(0, 0, 0);
        while (vlist.length != 1) {
            rev = this.GetMiddlePositionEx(vlist[0], vlist[1]);
            vlist.shift();
            vlist[0] = rev;
        }
        return rev;
    };
    ToolsEx.prototype.GetMiddlePositionEx = function (v1, v2) {
        var rev = cc.v3(0, 0, 0);
        var v2_v1 = cc.v3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
        rev = cc.v3((v1.x + v2_v1.x) / 2, (v1.y + v2_v1.y) / 2, (v1.z + v2_v1.z) / 2);
        return rev;
    };
    ToolsEx.prototype.DecryptCryptoJS = function (data, _key) {
        var key = CryptoJS.enc.Utf8.parse(_key); //fucktheworld
        var iv = CryptoJS.enc.Utf8.parse(key);
        var decrypted = CryptoJS.AES.decrypt(data, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted;
    };
    ToolsEx.prototype.EncryptionPWD = function (pwd) {
        var str = "fdjf,jkgfkl";
        var byte1 = this.strToByte(str);
        var byte2 = this.strToByte(pwd);
        var arr = [];
        var i;
        var len;
        for (i = 0, len = byte2.length; i < len; i++) {
            arr[i] = byte2[i];
        }
        arr[i++] = 163;
        arr[i++] = 172;
        arr[i++] = 161;
        arr[i++] = 163;
        for (var j = 0, lens = byte1.length; j < lens; j++) {
            arr[i] = byte1[j];
            i++;
        }
        var pwdbyte = CryptoJS.createHash('md5').update(Buffer.from(arr)).digest("hex");
        return pwdbyte;
    };
    ToolsEx.prototype.strToByte = function (str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            }
            else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    };
    /// <summary>
    /// 如果已存则COPY值   此方法仅能在编辑器下使用
    /// </summary>
    //     public static T CopyComponent<T>(T original, GameObject destination) where T : Component
    //     {
    //         System.Type type = original.GetType();
    //         Component copy = null;
    // #if UNITY_EDITOR
    //         copy = destination.GetComponent(type);
    //         if (copy == null) { copy = destination.AddComponent(type); }
    //         if (copy == null)
    //         {
    //             Debug.LogError(" copy == null");
    //             return null;
    //         }
    //         if (UnityEditorInternal.ComponentUtility.CopyComponent(original))
    //         {
    //             if (UnityEditorInternal.ComponentUtility.PasteComponentValues(copy))
    //             {
    //                 //Debug.Log("DONE");
    //             }
    //         }
    // #endif
    // #if UNITY_IPHONE || UNITY_ANDROID  
    //         copy = destination.AddComponent(type);
    //         System.Reflection.FieldInfo[] fields = type.GetFields();
    //         foreach (System.Reflection.FieldInfo field in fields)
    //         {
    //             field.SetValue(copy, field.GetValue(original));
    //         }
    // #endif
    //         return copy as T;
    //     }
    /// <summary>
    /// Oblique Frustum
    /// </summary>
    /// <param name="horizObl">在1或-1之间</param>
    /// <param name="vertObl"></param>
    /// <param name="cam"></param>
    // public static void SetObliqueness(float horizObl, float vertObl, Camera cam)
    // {
    //     Matrix4x4 mat = cam.projectionMatrix;
    //     mat[0, 2] = horizObl;
    //     mat[1, 2] = vertObl;
    //     cam.projectionMatrix = mat;
    // }
    // /// <summary>
    /// 设置局部旋转
    /// </summary>
    /// <param name="tf"></param>
    /// <param name="rot"></param>
    // public static void SetLocalRotation(Transform tf, Vector3 rot)
    // {
    //     Quaternion qua = new Quaternion();
    //     qua.eulerAngles = new Vector3(rot.x, rot.y, rot.z);
    //     tf.localRotation = qua;
    // }
    /// <summary>
    /// 全局种子， 用静态才有用
    /// </summary>
    // private static int Seeds = 0;
    /// <summary>
    /// add by jsw 20140120
    /// </summary>
    /// <param name="min">可以取下界值</param>
    /// <param name="max">不能取上界值</param>
    /// <returns></returns>
    // public static int GetRandom(int min, int max)
    // {
    //     object obj = new object();
    //     lock (obj)
    //     {
    //         Seeds += Convert.ToInt32(DateTime.Now.Ticks & 0xffff);
    //         Seeds = Seeds * (Seeds / 7);
    //         if (max < min)
    //         {
    //             return min;
    //         }
    //         if (Seeds >= int.MaxValue)
    //         {
    //             return 0;
    //         }
    //     }
    //     return new System.Random(Seeds).Next(min, max);
    // }
    // public static int GetRandomRemove(int min, int max, int remove)
    // {
    //     if (max == min) return 0;
    //     int r = 0;
    //     do
    //     {
    //         r = GetRandom(min, max);
    //     }
    //     while (r == remove);
    //     return r;
    // }
    /// <summary>
    /// 不支持Flash或4.6以前版本。 Finds the specified component on the game object or one of its parents.
    /// </summary>
    // public static T FindInParents<T>(Transform trans) where T : Component
    // {
    //     if (trans == null) return null;
    //     return trans.GetComponentInParent<T>();
    // }
    /// <summary>
    /// 不支持Flash或4.6以前版本。 Finds the specified component on the game object or one of its parents.
    /// </summary>
    // public static T FindInParents<T>(Transform trans, string eName) where T : Component
    // {
    //     if (trans == null) return null;
    //     foreach (T e in trans.GetComponentsInParent<T>(true))
    //     {
    //         if (e.gameObject.name == eName)
    //         {
    //             return e;
    //         }   
    //     }
    //     return null; 
    // }
    /// <summary>
    /// 用于反射不能手动输入类型的
    /// </summary>
    /// <param name="_go"></param>
    /// <param name="type"></param>
    /// <param name="elementName"></param>
    /// <returns></returns>
    // public static Component FindScriptInChild(GameObject _go, Type type, string elementName)
    // {
    //     if (_go == null) return null;
    //     //Debug.LogError("go:" + _go.name + "type:" + type + "eName:" + elementName);
    //     Component[] tempcom = _go.GetComponentsInChildren(type, true);
    //     //UnityEngine.Debug.Log(tempcom.Length + " tempcom.Length  elementName:" + elementName + " _go.active :" + _go.activeSelf);
    //     foreach (Component element in tempcom)
    //     {
    //         if (element.gameObject.name == elementName)
    //         {
    //             //UnityEngine.Debug.Log(element.name);
    //             return element;
    //         }
    //     }    
    //     return null;
    // }
    /// <summary>
    /// 获取第一个相同名称的组件
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <param name="elementName"></param>
    /// <returns></returns>
    // public static T FindScriptInChilds<T>(GameObject _go, string elementName) where T : Component
    // {
    //     if (_go == null) return null;
    //     T[] arr = _go.GetComponentsInChildren<T>(true);
    //     foreach (T element in arr)
    //     {
    //         if (element.gameObject.name == elementName)
    //         {
    //             return element;
    //         }            
    //     }
    //     return null;
    // }
    /// <summary>
    /// 根据组件名称 包含查找（模糊查找）反回对象列表
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <param name="elementName"></param>
    /// <returns></returns>
    // public static List<T> FindScriptsInChild<T>(GameObject _go, string elementName) where T : Component
    // {
    //     if (_go == null) return null;
    //     List<T> tlist = new List<T>();
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {
    //         if (element.gameObject.name.IndexOf(elementName) != -1)
    //         {
    //             tlist.Add(element);
    //         }
    //     }
    //     return tlist;
    // }
    /// <summary>
    /// 根据组件名称 包含查找（模糊查找）反回对象列表
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <param name="elementName"></param>
    /// <returns></returns>
    // public static List<T> FindScriptsInChild<T>(GameObject _go) where T : Component
    // {
    //     if (_go == null) return null;
    //     List<T> tlist = new List<T>();
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {          
    //             tlist.Add(element); 
    //     }
    //     return tlist;
    // }
    /// <summary>
    /// 找到第一个指定类型的脚本
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <returns></returns>
    // public static T FindScriptInChild<T>(GameObject _go) where T : Component
    // {
    //     if (_go == null) return null;
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {
    //         return element;
    //     }
    //     return null;
    // }
    /// <summary>
    /// 找到第一个指定类型的脚本
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <returns></returns>
    // public static T FindScriptInChild<T>(GameObject _go, string name) where T : Component
    // {
    //     if (_go == null) return null;
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {
    //         return element;
    //     }
    //     return null;
    // }
    /// <summary>
    /// 找到根节点下所有的指定脚本
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <returns></returns>
    // public static List<T> FindScriptInChilds<T>(GameObject _go) where T : Component
    // {
    //     if (_go == null) return null;
    //     List<T> tlist = new List<T>();
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {
    //         tlist.Add(element);
    //     }
    //     return tlist;
    // }
    // public static GameObject FindGameObject(GameObject rootObject, string goName)
    // {
    //     if (rootObject == null) return null;
    //     foreach (Transform t in rootObject.GetComponentsInChildren<Transform>(true))
    //     {
    //         if (t.gameObject.name == goName)// if (t.gameObject.name.Contains(goName))
    //         {
    //             return t.gameObject;
    //         }
    //     }
    //     return null;
    // } 
    /// <summary>
    /// 通过物体来找到脚本，查找 其子类的
    /// </summary>
    /// <typeparam name="T"> 类型</typeparam>
    /// <param name="_go"> 需要查找的物体</param>
    /// <returns></returns>
    // public static T FindScriptInChildren<T>(GameObject _go) where T : Component
    // {
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {
    //         return element;
    //     }
    //     return null;
    // }
    /// <summary>
    /// 通过物体来找到脚本，查找自身和其子类的
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <returns></returns>
    // public static T FindScriptSelf_Children<T>(GameObject _go, string name) where T : Component
    // {
    //     if (_go == null) return null;
    //     foreach (T element in _go.GetComponents<T>())
    //     {
    //         if (element.gameObject.name == name) return element;
    //     }
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {
    //         if (element.gameObject.name == name)  return element;
    //     }
    //     return null;
    // }
    /// <summary>
    /// 通过物体来找到脚本，查找自身和其子类的
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="_go"></param>
    /// <returns></returns>
    // public static T FindScriptSelf_Children<T>(GameObject _go) where T : Component
    // {
    //     if (_go == null) return null;
    //     foreach (T element in _go.GetComponents<T>())
    //     {
    //         return element;
    //     }
    //     foreach (T element in _go.GetComponentsInChildren<T>(true))
    //     {
    //         return element;
    //     }
    //     return null;
    // }
    /// <summary>
    /// 获取指定数的第几位的值 ，肯定小于10的值 
    /// </summary>
    /// <param name="num"></param>
    /// <param name="wei">0个，1十，2百</param>
    /// <returns>-1 是错误值 </returns>
    // public static int GetNumbyNum(int num, int wei)
    // {
    //     string strnum = num.ToString();
    //     if (wei >= strnum.Length) return -1;
    //     return Convert.ToInt32(strnum.Substring(wei, 1));
    // }
    /// <summary>
    /// 把秒 转换成 时间格式的字符串 如：01:10:56
    /// </summary>
    /// <param name="seconds">秒</param>
    /// <returns></returns>
    // public static string ConverttoData(int seconds)
    // {
    //     TimeSpan ts = new TimeSpan(0, 0, seconds);
    //     return string.Format("{0}:{1}:{2}", ts.Hours <= 9 ? "0" + ts.Hours : ""+ts.Hours ,
    //          ts.Minutes <= 9 ? "0" + ts.Minutes : "" + ts.Minutes,
    //          ts.Seconds <= 9 ? "0" + ts.Seconds : "" + ts.Seconds); 
    // }
    // public static string CoverttoCountdown(int seconds)
    // {
    //     TimeSpan ts = new TimeSpan(0, 0, 0, seconds);
    //     int h = ts.Days * 24 + ts.Hours;
    //     return string.Format("{0}:{1}:{2}", h <= 9 ? "0" + h : "" + h,
    //          ts.Minutes <= 9 ? "0" + ts.Minutes : "" + ts.Minutes,
    //          ts.Seconds <= 9 ? "0" + ts.Seconds : "" + ts.Seconds);
    // }
    // public static string coverttoDatetime(string timeStamp)
    // {
    //     DateTime dateTimeStart = TimeZone.CurrentTimeZone.ToLocalTime(new DateTime(1970, 1, 1));
    //     long lTime = long.Parse(timeStamp + "0000");
    //     TimeSpan toNow = new TimeSpan(lTime);
    //     return dateTimeStart.Add(toNow).ToString("yyyy-MM-dd HH:mm:ss");
    // }
    // public static string battleResult(int resultType)
    // {
    //     string res = "";
    //     //if (resultType == 0)
    //     //    res = BeanFactory.getLanguageContent(10061);
    //     //if (resultType == 1)
    //     //    res = BeanFactory.getLanguageContent(10063);
    //     //if (resultType == 2)
    //     //    res = BeanFactory.getLanguageContent(10040);
    //     //if (resultType == 3)
    //     //    res = BeanFactory.getLanguageContent(10062);
    //     return res;
    // }
    // public static string ConverttoDataALL(int sec)
    // {
    //     DateTime dt = new DateTime(0, 0, 0, 0, 0, sec);
    //     return dt.ToLongTimeString();
    // }
    /// <summary>
    /// 删除指定对象的所有子物体 
    /// </summary>
    /// <param name="go"></param>
    ToolsEx.prototype.ClearChildren = function (playerInfoNode, strtemplate) {
        if (playerInfoNode == null)
            return;
        //清空玩家信息列表
        var listToClear = [];
        for (var i = 0; i < playerInfoNode.node.childrenCount; i++) {
            var playerInfo = playerInfoNode.node.children[i];
            if (playerInfo.name != strtemplate) { //加入删除列表
                listToClear.push(playerInfo);
            }
        }
        listToClear.forEach(function (value) {
            value.destroy();
        });
    };
    return ToolsEx;
}());
exports.ToolsEx = ToolsEx;
//We are improving the documentation on Custom Defines, 
//and it's important to update these threads with the correct way of using them in the current versions of Unity.
//If you want to modify only global defines, you should use Scripting Define Symbols in Player Settings, because this will cover all the compilers.
//If you choose the .rsp files instead, you'll have to provide one file for every compiler Unity uses, 
//and you won't know when one or another compiler is used. To do this you must add a text file with the extra directives to the "Assets/" folder:
//[td]C#[/td]
//[td]<Project Path>/Assets/smcs.rsp[/td]
//[td]C# - Editor Scripts[/td]
//[td]<Project Path>/Assets/gmcs.rsp[/td]
//[td]UnityScript[/td]
//[td]<Project Path>/Assets/us.rsp[/td]
//[td]Boo[/td]
//[td]<Project Path>/Assets/boo.rsp[/td]
//As an example, if you include the single line "-define:UNITY_DEBUG" 
//in your smcs.rsp file the define UNITY_DEBUG will exist as a global define for C# scripts,
//except for Editor scripts. Every time you make changes to .rsp files you will need to recompile for them to be effective.
//You can do this by updating or reimporting a single script (.js, .cs or .boo) file. All this information is being added to our documentation.

cc._RF.pop();
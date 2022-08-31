
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/ToolsEx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (Buffer){
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

}).call(this,require("buffer").Buffer)
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHNcXFNjcmlwdFxcQ29tbW9uXFxUb29sc0V4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkM7SUFLSTtJQUdBLENBQUM7SUFHRCxzQkFBVyxvQkFBUztRQURwQixJQUFJO2FBQ0o7WUFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBR0QsYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxjQUFjO0lBRU4seUJBQU8sR0FBZixVQUFnQixFQUFrQjtRQUU5QixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsU0FDQTtZQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDdkIsSUFBSSxNQUFNLElBQUksSUFBSTtnQkFBRSxNQUFNO1lBQzFCLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVKLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztJQUNQLGdDQUFjLEdBQXJCLFVBQXNCLEtBQXFCO1FBRTFDLElBQUksS0FBSyxJQUFJLElBQUk7WUFDaEIsT0FBTyxLQUFLLENBQUM7UUFDZCxJQUFJLEdBQUcsR0FBVSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUN4QjtZQUNDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtnQkFDaEMsT0FBTyxJQUFJLENB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QUN0QixJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNqQztpQkFBTSxJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDakM7aUJBQU0sSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FB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
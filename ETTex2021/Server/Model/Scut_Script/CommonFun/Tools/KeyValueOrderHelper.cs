using System;
using System.Collections;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// FKFJ列表工具类
    /// </summary>
    public class KeyValueOrderHelper
    {

        public static List<KeyValSD> Order(List<KeyValSD> pvlist)
        {
            pvlist.Sort();
            return pvlist;
        }
      
    }
    public class KeyValSD: IComparable
    {
        public int pos;
        public int val;
        public List<int> card;
       
        int IComparable.CompareTo(object obj)
        {
            KeyValSD temp = (KeyValSD)obj;
            return this.val.CompareTo(temp.val);
        }
    }
}


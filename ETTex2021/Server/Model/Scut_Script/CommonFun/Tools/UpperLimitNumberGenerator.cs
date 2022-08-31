using ETModel.Framework.Common.Serialization;
using System;
using System.Collections.Generic;
using System.Text;

namespace ETModel
{
    /// <summary>
    /// 生成等长数字
    /// </summary>
    public class UpperLimitNumberGenerator
    {
        public NumberNode node;
        // static Random random= new Random();
        /// <summary>
        /// 获取指定长度的数字生成器
        /// </summary>
        /// <param name="len">数字长度</param>
        /// <returns></returns>
        public static UpperLimitNumberGenerator Generator(int len)
        {
            long max = (long)Math.Pow(10, len);
            long initmax = max;
            if (max > 0 && max < int.MaxValue)
            {
                int basevalue = GetBase(max);
                if (basevalue == max) { basevalue /= 10; }
                if (max >= basevalue * 9) max = basevalue * 9 - 1;
                var generator = new UpperLimitNumberGenerator((int)max);
                Console.WriteLine("nodecount:" + generator.node.getRemainCount() + ",   base:" + basevalue + ",   max:" + max + ",   initmax:" + initmax);
                return generator;
            }
            return null;
        }
        public NumberNode getNode()
        {
            return node;
        }

        // long max;
        public int nodeCount = 0;
        public int basevalue = 0;
        // HashSet<Integer> list = new HashSet<>();
        static int GetBase(long max)
        {
            int value = 1;
            long temp = max;
            for (int i = 0; i < 32 && temp / 10 > 0; i++)
            {
                temp /= 10;
                value *= 10;
            }
            return value;
        }
        /**
         * 
         */
        public UpperLimitNumberGenerator(int max, bool IsSetBaseValue = true)
        {
            if (max > 0)
            {
                long initmax = max;
                if (IsSetBaseValue) basevalue = GetBase(max);
                //if (basevalue == max) { basevalue /= 10; }
                //if (max >= basevalue * 9) max = basevalue * 9 - 1;
                Dictionary<int, int> map = new Dictionary<int, int>();
                for (int i = 2; i < 28; i++)
                {
                    for (int j = 2; j < 20; j++)
                    {
                        if ((long)Math.Pow(i, j) >= max)
                        {
                            map.Add(i, j);
                            break;
                        }
                    }
                }
                // int low = Integer.MAX_VALUE;
                int value1 = 0;
                int value2 = 0;
                long minPower = int.MaxValue;
                foreach (var item in map)
                {
                    // int num = Math.abs(item.getKey() - item.getValue());
                    long num = (long)Math.Pow(item.Key, item.Value);
                    if (minPower > num || (minPower == num && value2 > item.Value))
                    {
                        value1 = item.Key;
                        value2 = item.Value;
                        // low = num;
                        minPower = num;
                    }
                    // System.out.println("maplow:" + num + ", mapbase:" + item.getKey() + ", mappow:" + item.getValue()
                    // + ", max:" + (long) Math.pow(item.getKey(), item.getValue()));
                }
                int bv = value1;
                int pow = value2;
                // System.out.println("low:" + low + ",base:" + base + ",pow:" + pow + ", max:" + Math.pow(value1, value2));
                int powNum = (int)Math.Pow(value1, value2);
                // LimitBaseNumberGenerator.min = min;
                nodeCount = bv;
                node = new NumberNode(null, (int)max, nodeCount, pow, 0, max + 1, powNum, max);

            }
        }
        public bool recycle(long id)
        {
            if (id < basevalue || id - basevalue > node.max) return false;
            return node.recycle(id - basevalue);
        }

        public long generator()
        {
            return node.generator(0) + basevalue;
        }
        public bool exclude(long id)
        {
            int num = (int)id - basevalue;
            if (num >= 0 && num <= node.max)
            {
                bool result = node.exclude(num);
                //Console.WriteLine($"排除编号[{id}]后,剩余[{node.getRemainCount()}]个编号");
                return result;
            }
            return false;
        }
    }

    public class NumberNode
    {
        int nodecount;
        int basemax;
        int depth;
        public int remainCount;
        NumberNode[] nodes;
        int value = 1;
        public int InitCount;
        List<int> hasNum;
        int pow;
        int basevalue;
        public int max;
        NumberNode parent;

        public NumberNode(NumberNode parent, int basemax, int nodecount, int depth, int value, int remainCount, int pow, int max)
        {

            this.parent = parent;
            this.basemax = basemax;
            this.nodecount = nodecount;
            basevalue = pow / nodecount;
            // System.out.println("depth:" + depth + ", remainCount:" + remainCount + ", num:" + num
            // + ", BaseNodeCount:" + nodeCount + ", pow:" + pow + ", max:" + max + ", base:"
            // + base + ", nodeCount:" + (depth > 0 ? (int) (max / base + 1) : "0"));

            if (depth > 0)
            {
                this.nodes = new NumberNode[(int)(max / basevalue + 1)];
            }

            this.depth = depth;
            this.remainCount = remainCount;
            this.value = value;
            this.InitCount = remainCount;
            this.pow = pow;
            this.max = max;
        }
        public bool exclude(long id)
        {
            if (remainCount > 0)
            {
                if (InitCount > 1)
                {
                    int num = id > 0 ? (int)(id / basevalue) : 0;

                    if (nodes[num] == null)
                    {
                        if (num == nodes.Length - 1)
                        {
                            nodes[num] = new NumberNode(this, basemax, nodecount, depth - 1, num, max % basevalue + 1, basevalue, max % basevalue);
                        }
                        else
                        {
                            nodes[num] = new NumberNode(this, basemax, nodecount, depth - 1, num, basevalue, basevalue, basevalue - 1);
                        }
                        List<int> list = new List<int>();
                        for (int i = 0; i < nodes.Length; i++)
                        {
                            if (nodes[i] == null || nodes[i].remainCount > 0)
                            {
                                list.Add(i);
                            }
                        }
                        hasNum = list;
                    }
                    else if (nodes[num].InitCount <= 1) return false;
                    if (!nodes[num].exclude(id % basevalue)) return false;
                    remainCount--;
                    if (hasNum != null && nodes[num].remainCount <= 0) hasNum.Remove(num);
                    return true;
                }
                remainCount--; return true;
            }
            return false;
        }
        public long generator(long id)
        {
            if (remainCount > 0)
            {
                remainCount--;
                id = (id * nodecount) + value;
                if (depth > 0)
                {
                    if (InitCount > 1)
                    {
                        StringBuilder sb = new StringBuilder();
                        int num = -1;
                        if (hasNum != null && hasNum.Count > 0)
                        {
                            num = hasNum[RandomHelper.RandomNumber(0, hasNum.Count)];
                        }
                        else
                        {
                            num = RandomHelper.RandomNumber(0, nodes.Length);
                            if (nodes[num] != null && nodes[num].remainCount <= 0)
                            {
                                List<int> list = new List<int>();
                                for (int i = 0; i < nodes.Length; i++)
                                {
                                    if (nodes[i] == null || nodes[i].remainCount > 0)
                                    {
                                        list.Add(i);
                                    }
                                }
                                hasNum = list;
                                num = list[RandomHelper.RandomNumber(0, list.Count)];
                            }
                        }
                        if (nodes[num] == null)
                        {
                            // if (depth == 2 && num == 2) {
                            // System.out.println();
                            // }
                            if (num == nodes.Length - 1)
                            {
                                nodes[num] = new NumberNode(this, basemax, nodecount, depth - 1, num, max % basevalue + 1, basevalue, max % basevalue);
                            }
                            else
                            {
                                nodes[num] = new NumberNode(this, basemax, nodecount, depth - 1, num, basevalue, basevalue, basevalue - 1);
                            }
                        }
                        else if (depth == 1)
                        {
                            int x = 1;
                        }
                        id = nodes[num].generator(id);
                        if (hasNum != null && nodes[num].remainCount <= 0)
                        {
                            hasNum.Remove(num);
                        }
                        if (id < 0)
                        {
                            int x = 111;
                        }
                        return id;
                    }
                    else
                    {
                        id *= pow;
                        if (id < 0)
                        {
                            int x = 111;
                        }
                    }
                }
                if (id < 0)
                {
                    int x = 111;
                }
                return id;
            }
            else
            {
                return -1;
            }
        }

        public bool recycle(long id)
        {
            if (remainCount < InitCount && id <= basemax)
            {
                if (InitCount > 1)
                {
                    int num = (int)(id / basevalue);
                    if (num >= nodes.Length || num < 0)
                    {
                        int x = 12312;
                    }
                    NumberNode node = nodes[num];
                    if (node != null && node.recycle(id % basevalue))
                    {
                        remainCount++;
                        if (remainCount <= 1 && hasNum != null)
                        {
                            hasNum.Add(num);
                        }
                        if (node.InitCount == node.remainCount)
                        {
                            hasNum = null;
                            nodes[num] = null;
                        }
                        return true;
                    }
                }
                else if (remainCount == 0)
                {
                    remainCount++;
                    return true;
                }
            }
            return false;
        }

        public void printParents(NumberNode node)
        {
            NumberNode tempNode = this;
            List<NumberNode> nodes = new List<NumberNode>();
            while ((tempNode = tempNode.parent) != null)
            {
                nodes.Add(tempNode);
            }
            for (int i = nodes.Count - 1; i >= 0; i--)
            {
                Console.WriteLine(nodes[i].ToString());
            }
            Console.WriteLine(node.ToString());
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append('{');
            sb.Append("depth:" + depth).Append(',');
            sb.Append("num:" + value + ",");
            sb.Append("nodes:" + (nodes != null ? JsonUtils.Serialize(getNodesString()) : null) + ",");
            sb.Append("remainCount:" + remainCount + ",");
            sb.Append("initRemainCount:" + InitCount + ",");
            sb.Append("nodeCount" + nodecount + ",");
            sb.Append("hasNum:" + hasNum + ",");
            // sb.append("limitSta:" + limitSta + ",");
            // sb.append("limitEnd:" + limitEnd + ",");
            sb.Append("max:" + max + ",");
            sb.Append("pow:" + pow + ",");
            sb.Append("base:" + basevalue);
            sb.Append("}");
            return sb.ToString();
        }

        public string tojson()
        {
            return JsonUtils.Serialize(this);

            //JSONObject json = new JSONObject();
            //json.put("depth", depth);
            //json.put("remainCount", remainCount);
            //json.put("nodes", nodes != null ? getNodesString() : null);
            //json.put("num", value);
            //json.put("initRemainCount", initRemainCount);
            //json.put("nodeCount", nodeCount);
            //json.put("hasNum", hasNum);
            //// json.put("limitSta", limitSta);
            //// json.put("limitEnd", limitEnd);
            //json.put("pow", pow);
            //json.put("max", max);
            //json.put("base", base);
            //return json;
        }

        public string otherJson()
        {
            return JsonUtils.Serialize(this);
            ////JSONObject json = new JSONObject();
            //json.put("depth", depth);
            //json.put("remainCount", remainCount);
            //json.put("nodes", (nodes != null ? nodes.Length : 0));
            //json.put("num", value);
            //json.put("initRemainCount", initRemainCount);
            //json.put("nodeCount", basenodeCount);
            //json.put("hasNum", J hasNum);
            //json.put("limitSta", limitSta);
            //json.put("limitEnd", limitEnd);
            //json.put("pow", pow);
            //json.put("max", max);
            //json.put("base", bv);
            //return json;
        }

        List<int> getNodesString()
        {
            List<int> sb = new List<int>();
            int index = -1;
            int value = 0;
            if (nodes != null)
            {
                for (int i = 0; i < nodes.Length; i++)
                {
                    if (nodes[i] != null)
                    {
                        index = i;
                        value = nodes[i].value;
                    }
                }
                if (index > -1)
                {
                    for (int i = 0; i < nodes.Length; i++)
                    {
                        if (nodes[i] != null)
                        {
                            sb.Add(nodes[i].value);
                        }
                        else
                        {
                            sb.Add(value - (index - i));
                        }
                    }
                }
            }
            return sb;
        }

        public long getRemainCount()
        {
            return remainCount;
        }

        public void printChilds()
        {
            Console.WriteLine(this.ToString());
            foreach (NumberNode item in this.nodes)
            {
                Console.WriteLine(item.ToString());
            }
        }

        public void printChildAll()
        {
            Console.WriteLine(ToString());
            printChildAll(0);
        }

        public void printNumAll()
        {
            StringBuilder sb = new StringBuilder();
        }

        public void printChildCount()
        {
            Console.WriteLine("========= 剩余节点数量[" + getChildCount(0) + "] =========");
        }

        public int getChildCount(int count)
        {
            if (nodes != null)
            {
                foreach (NumberNode item in this.nodes)
                {
                    if (item != null)
                    {
                        count = item.getChildCount(count) + 1;
                    }
                }
            }
            return count;
        }

        void printChildAll(int depth)
        {
            if (nodes != null)
            {
                //System.out.println("======== 第[" + depth + "]层节点[" + value + "] ========");
                foreach (NumberNode item in this.nodes)
                {
                    if (item != null)
                    {
                        Console.WriteLine(item.ToString());
                    }
                }

                foreach (NumberNode item in this.nodes)
                {
                    if (item != null)
                    {
                        item.printChildAll(depth + 1);
                    }
                }
            }
        }
    }
}

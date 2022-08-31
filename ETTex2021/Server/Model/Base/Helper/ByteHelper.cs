using System;
using System.Text;

namespace ETModel
{
    public static class ByteHelper
    {
        public static string ToHex(this byte b)
        {
            return b.ToString("X2");
        }

        public static string ToHex(this byte[] bytes)
        {
            StringBuilder stringBuilder = new StringBuilder();
            foreach (byte b in bytes)
            {
                stringBuilder.Append(b.ToString("X2"));
            }
            return stringBuilder.ToString();
        }

        public static string ToHex(this byte[] bytes, string format)
        {
            StringBuilder stringBuilder = new StringBuilder();
            foreach (byte b in bytes)
            {
                stringBuilder.Append(b.ToString(format));
            }
            return stringBuilder.ToString();
        }

        public static string ToHex(this byte[] bytes, int offset, int count)
        {
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = offset; i < offset + count; ++i)
            {
                stringBuilder.Append(bytes[i].ToString("X2"));
            }
            return stringBuilder.ToString();
        }

        public static string ToStr(this byte[] bytes)
        {
            return Encoding.Default.GetString(bytes);
        }

        public static string ToStr(this byte[] bytes, int index, int count)
        {
            return Encoding.Default.GetString(bytes, index, count);
        }

        public static string Utf8ToStr(this byte[] bytes)
        {
            return Encoding.UTF8.GetString(bytes);
        }

        public static string Utf8ToStr(this byte[] bytes, int index, int count)
        {
            return Encoding.UTF8.GetString(bytes, index, count);
        }

        public static void WriteTo(this byte[] bytes, int offset, ulong num)
        {
            bytes[offset] = (byte)(num & 0xff);
            bytes[offset + 1] = (byte)((num & 0xff00) >> 8);
            bytes[offset + 2] = (byte)((num & 0xff0000) >> 16);
            bytes[offset + 3] = (byte)((num & 0xff000000) >> 24);
            bytes[offset + 4] = (byte)((num & 0xff00000000) >> 32);
            bytes[offset + 5] = (byte)((num & 0xff0000000000) >> 40);
            bytes[offset + 6] = (byte)((num & 0xff000000000000) >> 48);
            bytes[offset + 7] = (byte)((num >> 56) & 0xff);
        }

        public static void WriteTo(this byte[] bytes, int offset, long num)
        {
            bytes[offset] = (byte)(num & 0xff);
            bytes[offset + 1] = (byte)((num & 0xff00) >> 8);
            bytes[offset + 2] = (byte)((num & 0xff0000) >> 16);
            bytes[offset + 3] = (byte)((num & 0xff000000) >> 24);
            bytes[offset + 4] = (byte)((num & 0xff00000000) >> 32);
            bytes[offset + 5] = (byte)((num & 0xff0000000000) >> 40);
            bytes[offset + 6] = (byte)((num & 0xff000000000000) >> 48);
            bytes[offset + 7] = (byte)((num >> 56) & 0xff);
        }

        public static void WriteTo(this byte[] bytes, int offset, uint num)
        {
            bytes[offset] = (byte)(num & 0xff);
            bytes[offset + 1] = (byte)((num & 0xff00) >> 8);
            bytes[offset + 2] = (byte)((num & 0xff0000) >> 16);
            bytes[offset + 3] = (byte)((num & 0xff000000) >> 24);
        }

        public static void WriteTo(this byte[] bytes, int offset, int num)
        {
            bytes[offset] = (byte)(num & 0xff);
            bytes[offset + 1] = (byte)((num & 0xff00) >> 8);
            bytes[offset + 2] = (byte)((num & 0xff0000) >> 16);
            bytes[offset + 3] = (byte)((num & 0xff000000) >> 24);
        }

        public static void WriteTo(this byte[] bytes, int offset, byte num)
        {
            bytes[offset] = num;
        }

        public static void WriteTo(this byte[] bytes, int offset, short num)
        {
            bytes[offset] = (byte)(num & 0xff);
            bytes[offset + 1] = (byte)((num & 0xff00) >> 8);
        }

        public static void WriteTo(this byte[] bytes, int offset, ushort num)
        {
            bytes[offset] = (byte)(num & 0xff);
            bytes[offset + 1] = (byte)((num & 0xff00) >> 8);
        }
        public static void WriteTo(this byte[] bytes, int offset, float num)
        {
            //unsafe
            //{
            //    byte* pnum = (byte*)&num;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset] = *pnum;
            //}
            Array.Copy(BitConverter.GetBytes(num), 0, bytes, offset, 4);
        }
        public static void WriteTo(this byte[] bytes, int offset, double num)
        {
            //unsafe
            //{
            //    byte* pnum = (byte*)&num;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset++] = *pnum++;
            //    bytes[offset] = *pnum;
            //}
            Array.Copy(BitConverter.GetBytes(num), 0, bytes, offset, 8);
        }
        public static short ReadInt16(this byte[] bytes, int offset)
        {
            short num = bytes[offset];
            num += (short)(bytes[offset + 1] << 8);
            return num;
        }
        public static ushort ReadUInt16(this byte[] bytes, int offset)
        {
            ushort num = bytes[offset];
            num += (ushort)(bytes[offset + 1] << 8);
            return num;
        }
        public static int ReadInt32(this byte[] bytes, int offset)
        {
            int num = bytes[offset];
            num += bytes[offset + 1] << 8;
            num += bytes[offset + 2] << 16;
            num += bytes[offset + 3] << 24;
            return num;
        }
        public static uint ReadUInt32(this byte[] bytes, int offset)
        {
            uint num = bytes[offset];
            num += (uint)bytes[offset + 1] << 8;
            num += (uint)bytes[offset + 2] << 16;
            num += (uint)bytes[offset + 3] << 24;
            return num;
        }
        public static long ReadInt64(this byte[] bytes, int offset)
        {
            long num = bytes[offset];
            num += bytes[offset + 1] << 8;
            num += bytes[offset + 2] << 16;
            num += (long)bytes[offset + 3] << 24;
            num += (long)bytes[offset + 4] << 32;
            num += (long)bytes[offset + 5] << 40;
            num += (long)bytes[offset + 6] << 48;
            num += (long)bytes[offset + 7] << 56;
            return num;
        }

        public static ulong ReadUInt64(this byte[] bytes, int offset)
        {
            ulong num = bytes[offset];
            num += (ulong)bytes[offset + 1] << 8;
            num += (ulong)bytes[offset + 2] << 16;
            num += (ulong)bytes[offset + 3] << 24;
            num += (ulong)bytes[offset + 4] << 32;
            num += (ulong)bytes[offset + 5] << 40;
            num += (ulong)bytes[offset + 6] << 48;
            num += (ulong)bytes[offset + 7] << 56;
            return num;
        }

        public static float ReadSingle(this byte[] bytes, int offset)
        {
            //unsafe
            //{
            //    float num = 0;
            //    byte* pnum = (byte*)&num;
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum = bytes[offset];
            //    return num;
            //}
            return BitConverter.ToSingle(bytes, offset);
        }

        public static double ReadDouble(this byte[] bytes, int offset)
        {
            //unsafe
            //{
            //    double num = 0;
            //    byte* pnum = (byte*)&num;
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum++ = bytes[offset++];
            //    *pnum = bytes[offset];
            //    return num;
            //}
            return BitConverter.ToDouble(bytes, offset);
        }

    }
}
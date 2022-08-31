using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Crazy2018_Sys_Common
{
   public class NPOIExcel
    {

        private string _title;
        private string _sheetName;
        private string _filePath;

        /// <summary>
        /// 导出到Excel
        /// </summary>
        /// <param name="table"></param>
        /// <returns></returns>
        public static byte[] ToExcel<T>(List<T> lists, Dictionary<string, string> head, string workbookFile)
        {
            try
            {

                XSSFWorkbook workbook = new XSSFWorkbook();
                using (MemoryStream ms = new MemoryStream())
                {
                    var sheet = workbook.CreateSheet();
                    var headerRow = sheet.CreateRow(0);
                    bool h = false;
                    int j = 1;
                    Type type = typeof(T);
                    PropertyInfo[] properties = type.GetProperties();
                    foreach (T item in lists)
                    {
                        var dataRow = sheet.CreateRow(j);
                        int i = 0;
                        foreach (PropertyInfo column in properties)
                        {
                            if (!h)
                            {
                                if (head.Keys.Contains(column.Name))
                                {
                                    headerRow.CreateCell(i).SetCellValue(head[column.Name] == null ? column.Name : head[column.Name].ToString());
                                    dataRow.CreateCell(i).SetCellValue(column.GetValue(item, null) == null ? "" : column.GetValue(item, null).ToString());

                                }
                                else
                                {
                                    i -= 1;
                                }

                            }
                            else
                            {
                                if (head.Keys.Contains(column.Name))
                                {
                                    dataRow.CreateCell(i).SetCellValue(column.GetValue(item, null) == null ? "" : column.GetValue(item, null).ToString());
                                }
                                else
                                {
                                    i -= 1;
                                }

                            }
                            i++;
                        }
                        h = true;
                        j++;
                    }

                    workbook.Write(ms);
                    using (FileStream fs = new FileStream(workbookFile, FileMode.OpenOrCreate, FileAccess.ReadWrite))
                    {
                        byte[] data = ms.ToArray();
                        fs.Write(data, 0, data.Length);
                        fs.Flush();
                        return data;

                    }

                    

                    sheet = null;
                    headerRow = null;
                    workbook = null;
                }
            }
            catch (Exception ee)
            {
                string see = ee.Message;
                return null;
            }
        }

    }
}

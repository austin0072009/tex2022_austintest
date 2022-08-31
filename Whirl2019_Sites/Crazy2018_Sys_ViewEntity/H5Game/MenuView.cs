using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.H5Game
{
   public class MenuView
    {
        
        public int Id { get; set; }
        public int Parentid { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string  Icon { get; set; }
        public int Isdisplay { get; set; }
        public int Sort { get; set; }
        public string url { get; set; }
        public IList<MenuView> children = new List<MenuView>();
        public DateTime CreateTime { get; set; }
        public void Addchildren(MenuView node)
        {
            this.children.Add(node);
        }
    }
    public class OptionView
    {

        public int Id { get; set; }
        public int Parentid { get; set; }

        public string label { get; set; }
      
        public IList<OptionView> children = new List<OptionView>();
       
        public void Addchildren(OptionView node)
        {
            this.children.Add(node);
        }
    }


}

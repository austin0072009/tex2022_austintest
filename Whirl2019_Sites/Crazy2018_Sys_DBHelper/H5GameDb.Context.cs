﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Crazy2018_Sys_DBHelper
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class h5game_2021Entities : DbContextBase
    {
        public h5game_2021Entities()
            : base("h5game_2021Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<bankcardentities> bankcardentities { get; set; }
        public virtual DbSet<banktypeentities> banktypeentities { get; set; }
        public virtual DbSet<gameuser> gameuser { get; set; }
        public virtual DbSet<rechargechannels> rechargechannels { get; set; }
        public virtual DbSet<smsrecord> smsrecord { get; set; }
        public virtual DbSet<tactivecode> tactivecode { get; set; }
        public virtual DbSet<tactivity> tactivity { get; set; }
        public virtual DbSet<tagentgoldlog> tagentgoldlog { get; set; }
        public virtual DbSet<tauthinfo> tauthinfo { get; set; }
        public virtual DbSet<tautoeventlog> tautoeventlog { get; set; }
        public virtual DbSet<tbanklog> tbanklog { get; set; }
        public virtual DbSet<tbarrage> tbarrage { get; set; }
        public virtual DbSet<tbetinginfo> tbetinginfo { get; set; }
        public virtual DbSet<tchatlog> tchatlog { get; set; }
        public virtual DbSet<tclub> tclub { get; set; }
        public virtual DbSet<tcluballiance> tcluballiance { get; set; }
        public virtual DbSet<tclubapplylog> tclubapplylog { get; set; }
        public virtual DbSet<tclubfundlog> tclubfundlog { get; set; }
        public virtual DbSet<tclubgoldlog> tclubgoldlog { get; set; }
        public virtual DbSet<tclublevel> tclublevel { get; set; }
        public virtual DbSet<tclubusergoldlog> tclubusergoldlog { get; set; }
        public virtual DbSet<tcollectlog> tcollectlog { get; set; }
        public virtual DbSet<tcommodity> tcommodity { get; set; }
        public virtual DbSet<tdiamondchangelog> tdiamondchangelog { get; set; }
        public virtual DbSet<temail> temail { get; set; }
        public virtual DbSet<temp_entityhistory> temp_entityhistory { get; set; }
        public virtual DbSet<temtuseragent> temtuseragent { get; set; }
        public virtual DbSet<tentitycard> tentitycard { get; set; }
        public virtual DbSet<tentitycarddetails> tentitycarddetails { get; set; }
        public virtual DbSet<tentitycardtype> tentitycardtype { get; set; }
        public virtual DbSet<texchangelog> texchangelog { get; set; }
        public virtual DbSet<tgameinfo> tgameinfo { get; set; }
        public virtual DbSet<tgamelevelinfo> tgamelevelinfo { get; set; }
        public virtual DbSet<tgamerax> tgamerax { get; set; }
        public virtual DbSet<tgameuserrank> tgameuserrank { get; set; }
        public virtual DbSet<tgangcardlog> tgangcardlog { get; set; }
        public virtual DbSet<tgoldchangelog> tgoldchangelog { get; set; }
        public virtual DbSet<tgoldchangh5game> tgoldchangh5game { get; set; }
        public virtual DbSet<tgoldstatistics> tgoldstatistics { get; set; }
        public virtual DbSet<th5menu> th5menu { get; set; }
        public virtual DbSet<th5winloselog> th5winloselog { get; set; }
        public virtual DbSet<tjackpot> tjackpot { get; set; }
        public virtual DbSet<tjackpotaddlog> tjackpotaddlog { get; set; }
        public virtual DbSet<tjackpotlog> tjackpotlog { get; set; }
        public virtual DbSet<tjackpotstock> tjackpotstock { get; set; }
        public virtual DbSet<tjackpotstocklog> tjackpotstocklog { get; set; }
        public virtual DbSet<tjdbwagerlog> tjdbwagerlog { get; set; }
        public virtual DbSet<tlevellog> tlevellog { get; set; }
        public virtual DbSet<tnotice> tnotice { get; set; }
        public virtual DbSet<tonlineinfo> tonlineinfo { get; set; }
        public virtual DbSet<trank> trank { get; set; }
        public virtual DbSet<tredenvelopesconfig> tredenvelopesconfig { get; set; }
        public virtual DbSet<tredenvelopeslog> tredenvelopeslog { get; set; }
        public virtual DbSet<tredenvelopesreceivelog> tredenvelopesreceivelog { get; set; }
        public virtual DbSet<tredenvelopestask> tredenvelopestask { get; set; }
        public virtual DbSet<troomcardtemp> troomcardtemp { get; set; }
        public virtual DbSet<tserverconfig> tserverconfig { get; set; }
        public virtual DbSet<tslotconfig> tslotconfig { get; set; }
        public virtual DbSet<tstatisticsgold> tstatisticsgold { get; set; }
        public virtual DbSet<tsysconfig> tsysconfig { get; set; }
        public virtual DbSet<ttablegainlog> ttablegainlog { get; set; }
        public virtual DbSet<ttablehandnumlog> ttablehandnumlog { get; set; }
        public virtual DbSet<ttablehistorylog> ttablehistorylog { get; set; }
        public virtual DbSet<ttablelist> ttablelist { get; set; }
        public virtual DbSet<ttablelog> ttablelog { get; set; }
        public virtual DbSet<ttableloglist> ttableloglist { get; set; }
        public virtual DbSet<ttablerecorkmjlog> ttablerecorkmjlog { get; set; }
        public virtual DbSet<ttableuserlog> ttableuserlog { get; set; }
        public virtual DbSet<ttaxlog> ttaxlog { get; set; }
        public virtual DbSet<ttradeinfo> ttradeinfo { get; set; }
        public virtual DbSet<turntablelevel> turntablelevel { get; set; }
        public virtual DbSet<turntableprize> turntableprize { get; set; }
        public virtual DbSet<tuser> tuser { get; set; }
        public virtual DbSet<tuseragent2019> tuseragent2019 { get; set; }
        public virtual DbSet<tuseragent2020> tuseragent2020 { get; set; }
        public virtual DbSet<tuseragentlog> tuseragentlog { get; set; }
        public virtual DbSet<tusercontact> tusercontact { get; set; }
        public virtual DbSet<tusergamehand> tusergamehand { get; set; }
        public virtual DbSet<tuserinfoex> tuserinfoex { get; set; }
        public virtual DbSet<tuserjackpot> tuserjackpot { get; set; }
        public virtual DbSet<tuserprizelog> tuserprizelog { get; set; }
        public virtual DbSet<tuserrechargelog> tuserrechargelog { get; set; }
        public virtual DbSet<tusertempgoldlog> tusertempgoldlog { get; set; }
        public virtual DbSet<tuservipfreecount> tuservipfreecount { get; set; }
        public virtual DbSet<tuservipinfo> tuservipinfo { get; set; }
        public virtual DbSet<tvipauth> tvipauth { get; set; }
        public virtual DbSet<tvipinfo> tvipinfo { get; set; }
        public virtual DbSet<tvisitlimit> tvisitlimit { get; set; }
        public virtual DbSet<userranking> userranking { get; set; }
        public virtual DbSet<userrole> userrole { get; set; }
    }
}

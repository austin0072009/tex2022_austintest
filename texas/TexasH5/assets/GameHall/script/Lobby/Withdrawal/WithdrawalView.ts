import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 提现
 */
export default class WithdrawalView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "Withdrawal";
    }
    /**金币 */
    private ui_gold: fgui.GTextField = null;
    private ui_btn_break: fgui.GButton = null;
    private ui_btn_addGold: fgui.GButton = null;
    private ui_btn_bindTx: fgui.GButton = null;

    private ui_drawal1: fgui.GComponent = null;
    /**其他提现方式 */
    private ui_addTxcom: fgui.GComponent = null;
    /**提现申请 */
    private ui_Txsqcom: fgui.GComponent = null;
    /**验证支付密码 */
    private ui_yzTxsqcom: fgui.GComponent = null;


    private typeController: fgui.Controller;

    /**添加银行卡界面 */
    private ui_btn_cardaddGold: fgui.GButton = null;
    private ui_btn_cardbreak: fgui.GButton = null;
    private ui_cardgold: fgui.GTextField = null;


    /**绑定银行卡 */
    private ui_bindcard: fgui.GComponent = null;
    private ui_cardType: fgui.GComboBox = null;
    private ui_country: fgui.GComboBox = null;
    private ui_name: fgui.GTextInput = null;
    private ui_banknum: fgui.GTextInput = null;
    private ui_bankname: fgui.GComboBox = null;
    private ui_province: fgui.GComboBox = null;
    private ui_city: fgui.GComboBox = null;
    private ui_Subbranch: fgui.GTextInput = null;
    private ui_btn_bindCard: fgui.GButton = null;


    /**提现 */
    private ui_btn_tx: fgui.GButton = null;
    private ui_txBankName: fgui.GTextField = null;
    private ui_userzsname: fgui.GTextField = null;
    private ui_txGoldNum: fgui.GTextInput = null;


    private ui_btn_txbreak1: fgui.GButton = null;
    private ui_txjinText: fgui.GRichTextField = null;
    private ui_btn_othertx: fgui.GButton = null;

    private ui_btn_txqren: fgui.GButton = null;

    /**提现记录 */
    private ui_TxRecordPanel: fgui.GComponent = null;
    private ui_ListRecord: fgui.GList = null;
    private ui_recordNext: fgui.GButton = null;
    private ui_recordUp: fgui.GButton = null;
    private ui_btn_txRecord: fgui.GButton = null;

    /**验证支付密码 */
    private ui_payPwd: fgui.GComponent = null;
    private ui_btn_yzzfbreak1: fgui.GButton = null;
    private ui_btn_yzquxiao: fgui.GButton = null;
    private ui_btn_vconfirm: fgui.GButton = null;
    private ui_btn_inputbg: fgui.GLoader = null;
    private ui_pwd0: fgui.GTextInput = null;
    private ui_pwd1: fgui.GTextInput = null;
    private ui_pwd2: fgui.GTextInput = null;
    private ui_pwd3: fgui.GTextInput = null;
    private ui_pwd4: fgui.GTextInput = null;
    private ui_pwd5: fgui.GTextInput = null;
    private ui_inputLabel: fgui.GTextInput = null;
    public inputPwd: string = '';
    private type2Controller: fgui.Controller;
    /**省份 */
    private province;
    private provinceConfig = {
        1: ["北京", "上海", "重慶", "安徽", "福建", "甘肅", "廣東", "廣西", "貴州", "海南", "河北", "黑龍江",
            "河南", "香港", "湖北", "湖南", "江蘇", "江西", "吉林", "遼寧", "澳門", "內蒙古", "寧夏", "青海", "山東", "山西", "陝西",
            "四川", "臺灣", "天津", "新疆", "西藏", "雲南", "浙江"],
        2: ["北京", "上海", "重庆", "安徽", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "黑龙江",
            "河南", "香港", "湖北", "湖南", "江苏", "江西", "吉林", "辽宁", "澳门", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西",
            "四川", "台湾", "天津", "新疆", "西藏", "云南", "浙江"],
    }
    /**城市 */
    private city;
    private cityConfig = {
        1: [["東城區", "西城區", "崇文區", "宣武區", "朝陽區", "豐臺區", "石景山區", "海澱區", "門頭溝區", "房山區", "通州區", "順義區", "昌平區", "大興區", "懷柔區", "平穀區", "密雲縣", "延慶縣"],
        ["黃浦區", "盧灣區", "徐匯區", "長寧區", "靜安區", "普陀區", "虹口區", "楊浦區", "閔行區", "寶山區", "嘉定區", "浦東新區", "金山區", "松江區", "青浦區", "南匯區", "奉賢區", "崇明縣"],
        ["萬州區", "涪陵區", "渝中區", "大渡口區", "江北區", "沙坪壩區", "九龍坡區", "南岸區", "北碚區", "萬盛區", "雙橋區", "渝北區", "巴南區", "黔江區", "長壽區", "綦江縣", "潼南縣", "銅梁縣", "大足縣", "榮昌縣", "璧山縣", "梁平縣", "城口縣", "豐都縣", "墊江縣", "武隆縣", "忠縣", "開縣", "雲陽縣", "奉節縣", "巫山縣", "巫溪縣", "石柱土家族自治縣", "秀山土家族苗族自治縣", "酉陽土家族苗族自治縣", "彭水苗族土家族自治縣", "江津市", "合川市", "永川市", "南川市"],
        ["合肥市", "宿州市", "淮北市", "亳州市", "阜陽市", "蚌埠市", "淮南市", "滁州市", "馬鞍山市", "蕪湖市", "銅陵市", "安慶市", "黃山市", "六安市", "巢湖市", "池州市", "宣城市"],
        ["福州市", "南平市", "莆田市", "三明市", "泉州市", "廈門市", "漳州市", "龍岩市", "寧德市"],
        ["蘭州市", "嘉峪關市", "白銀市", "天水市", "武威市", "酒泉市", "張掖市", "慶陽市", "平涼市", "定西市", "隴南市", "臨夏州", "甘南州"],
        ["廣州市", "深圳市", "清遠市", "韶關市", "河源市", "梅州市", "潮州市", "汕頭市", "揭陽市", "汕尾市", "惠州市", "東莞市", "珠海市", "中山市", "江門市", "佛山市", "肇慶市", "雲浮市", "陽江市", "茂名市", "湛江市"],
        ["南寧市", "桂林市", "柳州市", "梧州市", "貴港市", "玉林市", "欽州市", "北海市", "防城港市", "崇左市", "百色市", "河池市", "來賓市", "賀州市"],
        ["貴陽市", "六盤水市", "遵義市", "安順市", "畢節地區", "銅仁地區", "黔東南州", "黔南州", "黔西南州"],
        ["海口", "儋縣", "陵水", "瓊海", "三亞", "通什", "萬寧"],
        ["石家莊市", "張家口市", "承德市", "秦皇島市", "唐山市", "廊坊市", "保定市", "衡水市", "滄州市", "邢臺市", "邯鄲市"],
        ["哈爾濱市", "齊齊哈爾市", "七臺河市", "黑河市", "大慶市", "鶴崗市", "伊春市", "佳木斯市", "雙鴨山市", "雞西市", "牡丹江市", "綏化市", "大興安嶺地區"],
        ["鄭州市", "開封市", "三門峽市", "洛陽市", "焦作市", "新鄉市", "鶴壁市", "安陽市", "濮陽市", "商丘市", "許昌市", "漯河市", "平頂山市", "南陽市", "信陽市", "周口市", "駐馬店市", "濟源市"],
        ["香港", "九龍", "新界"],
        ["武漢市", "十堰市", "襄樊市", "荊門市", "孝感市", "黃岡市", "鄂州市", "黃石市", "鹹寧市", "荊州市", "宜昌市", "隨州市", "省直轄縣級行政單位", "恩施州"],
        ["長沙市", "張家界市", "常德市", "益陽市", "岳陽市", "株洲市", "湘潭市", "衡陽市", "郴州市", "永州市", "邵陽市", "懷化市", "婁底市", "湘西州"],
        ["南京市", "徐州市", "連雲港市", "宿遷市", "淮安市", "鹽城市", "揚州市", "泰州市", "南通市", "鎮江市", "常州市", "無錫市", "蘇州市"],
        ["南昌市", "九江市", "景德鎮市", "鷹潭市", "新餘市", "萍鄉市", "贛州市", "上饒市", "撫州市", "宜春市", "吉安市"],
        ["長春市", "白城市", "松原市", "吉林市", "四平市", "遼源市", "通化市", "白山市", "延邊州"],
        ["瀋陽市", "朝陽市", "阜新市", "鐵嶺市", "撫順市", "本溪市", "遼陽市", "鞍山市", "丹東市", "大連市", "營口市", "盤錦市", "錦州市", "葫蘆島市"],
        ["澳門"],
        ["呼和浩特市", "包頭市", "烏海市", "赤峰市", "通遼市", "呼倫貝爾市", "鄂爾多斯市", "烏蘭察布市", "巴彥淖爾市", "興安盟", "錫林郭勒盟", "阿拉善盟"],
        ["銀川市", "石嘴山市", "吳忠市", "固原市", "中衛市"],
        ["西寧市", "海東地區", "海北州", "海南州", "黃南州", "果洛州", "玉樹州", "海西州"],
        ["濟南市", "青島市", "聊城市", "德州市", "東營市", "淄博市", "濰坊市", "煙臺市", "威海市", "日照市", "臨沂市", "棗莊市", "濟寧市", "泰安市", "萊蕪市", "濱州市", "菏澤市"],
        ["太原市", "朔州市", "大同市", "陽泉市", "長治市", "晉城市", "忻州市", "晉中市", "臨汾市", "呂梁市", "運城市"],
        ["西安市", "延安市", "銅川市", "渭南市", "咸陽市", "寶雞市", "漢中市", "榆林市", "安康市", "商洛市"],
        ["成都市", "廣元市", "綿陽市", "德陽市", "南充市", "廣安市", "遂寧市", "內江市", "樂山市", "自貢市", "瀘州市", "宜賓市", "攀枝花市", "巴中市", "達州市", "資陽市", "眉山市", "雅安市", "阿壩州", "甘孜州", "涼山州"],
        ["臺北", "基隆", "臺南", "臺中", "高雄", "屏東", "南投", "雲林", "新竹", "彰化", "苗栗", "嘉義", "花蓮", "桃園", "宜蘭", "臺東", "金門", "馬祖", "澎湖"],
        ["和平區", "河東區", "河西區", "南開區", "河北區", "紅橋區", "塘沽區", "漢沽區", "大港區", "東麗區", "西青區", "津南區", "北辰區", "武清區", "寶坻區", "寧河縣", "靜海縣", "薊縣"],
        ["烏魯木齊市", "克拉瑪依市", "自治區直轄縣級行政單位", "喀什地區", "阿克蘇地區", "和田地區", "吐魯番地區", "哈密地區", "克孜勒蘇柯州", "博爾塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城地區", "阿勒泰地區"],
        ["拉薩市", "那曲地區", "昌都地區", "林芝地區", "山南地區", "日喀則地區", "阿裏地區"],
        ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "麗江市", "思茅市", "臨滄市", "德宏州", "怒江州", "迪慶州", "大理州", "楚雄州", "紅河州", "文山州", "西雙版納州"],
        ["杭州市", "湖州市", "嘉興市", "舟山市", "寧波市", "紹興市", "衢州市", "金華市", "臺州市", "溫州市", "麗水市"]
        ],
        2: [["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县"],
        ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县"],
        ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "黔江区", "长寿区", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "江津市", "合川市", "永川市", "南川市"],
        ["合肥市", "宿州市", "淮北市", "亳州市", "阜阳市", "蚌埠市", "淮南市", "滁州市", "马鞍山市", "芜湖市", "铜陵市", "安庆市", "黄山市", "六安市", "巢湖市", "池州市", "宣城市"],
        ["福州市", "南平市", "莆田市", "三明市", "泉州市", "厦门市", "漳州市", "龙岩市", "宁德市"],
        ["兰州市", "嘉峪关市", "白银市", "天水市", "武威市", "酒泉市", "张掖市", "庆阳市", "平凉市", "定西市", "陇南市", "临夏州", "甘南州"],
        ["广州市", "深圳市", "清远市", "韶关市", "河源市", "梅州市", "潮州市", "汕头市", "揭阳市", "汕尾市", "惠州市", "东莞市", "珠海市", "中山市", "江门市", "佛山市", "肇庆市", "云浮市", "阳江市", "茂名市", "湛江市"],
        ["南宁市", "桂林市", "柳州市", "梧州市", "贵港市", "玉林市", "钦州市", "北海市", "防城港市", "崇左市", "百色市", "河池市", "来宾市", "贺州市"],
        ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节地区", "铜仁地区", "黔东南州", "黔南州", "黔西南州"],
        ["海口", "儋县", "陵水", "琼海", "三亚", "通什", "万宁"],
        ["石家庄市", "张家口市", "承德市", "秦皇岛市", "唐山市", "廊坊市", "保定市", "衡水市", "沧州市", "邢台市", "邯郸市"],
        ["哈尔滨市", "齐齐哈尔市", "七台河市", "黑河市", "大庆市", "鹤岗市", "伊春市", "佳木斯市", "双鸭山市", "鸡西市", "牡丹江市", "绥化市", "大兴安岭地区"],
        ["郑州市", "开封市", "三门峡市", "洛阳市", "焦作市", "新乡市", "鹤壁市", "安阳市", "濮阳市", "商丘市", "许昌市", "漯河市", "平顶山市", "南阳市", "信阳市", "周口市", "驻马店市", "济源市"],
        ["香港", "九龙", "新界"],
        ["武汉市", "十堰市", "襄樊市", "荆门市", "孝感市", "黄冈市", "鄂州市", "黄石市", "咸宁市", "荆州市", "宜昌市", "随州市", "省直辖县级行政单位", "恩施州"],
        ["长沙市", "张家界市", "常德市", "益阳市", "岳阳市", "株洲市", "湘潭市", "衡阳市", "郴州市", "永州市", "邵阳市", "怀化市", "娄底市", "湘西州"],
        ["南京市", "徐州市", "连云港市", "宿迁市", "淮安市", "盐城市", "扬州市", "泰州市", "南通市", "镇江市", "常州市", "无锡市", "苏州市"],
        ["南昌市", "九江市", "景德镇市", "鹰潭市", "新余市", "萍乡市", "赣州市", "上饶市", "抚州市", "宜春市", "吉安市"],
        ["长春市", "白城市", "松原市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "延边州"],
        ["沈阳市", "朝阳市", "阜新市", "铁岭市", "抚顺市", "本溪市", "辽阳市", "鞍山市", "丹东市", "大连市", "营口市", "盘锦市", "锦州市", "葫芦岛市"],
        ["澳门"],
        ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "呼伦贝尔市", "鄂尔多斯市", "乌兰察布市", "巴彦淖尔市", "兴安盟", "锡林郭勒盟", "阿拉善盟"],
        ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"],
        ["西宁市", "海东地区", "海北州", "海南州", "黄南州", "果洛州", "玉树州", "海西州"],
        ["济南市", "青岛市", "聊城市", "德州市", "东营市", "淄博市", "潍坊市", "烟台市", "威海市", "日照市", "临沂市", "枣庄市", "济宁市", "泰安市", "莱芜市", "滨州市", "菏泽市"],
        ["太原市", "朔州市", "大同市", "阳泉市", "长治市", "晋城市", "忻州市", "晋中市", "临汾市", "吕梁市", "运城市"],
        ["西安市", "延安市", "铜川市", "渭南市", "咸阳市", "宝鸡市", "汉中市", "榆林市", "安康市", "商洛市"],
        ["成都市", "广元市", "绵阳市", "德阳市", "南充市", "广安市", "遂宁市", "内江市", "乐山市", "自贡市", "泸州市", "宜宾市", "攀枝花市", "巴中市", "达州市", "资阳市", "眉山市", "雅安市", "阿坝州", "甘孜州", "凉山州"],
        ["台北", "基隆", "台南", "台中", "高雄", "屏东", "南投", "云林", "新竹", "彰化", "苗栗", "嘉义", "花莲", "桃园", "宜兰", "台东", "金门", "马祖", "澎湖"],
        ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟县"],
        ["乌鲁木齐市", "克拉玛依市", "自治区直辖县级行政单位", "喀什地区", "阿克苏地区", "和田地区", "吐鲁番地区", "哈密地区", "克孜勒苏柯州", "博尔塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城地区", "阿勒泰地区"],
        ["拉萨市", "那曲地区", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "阿里地区"],
        ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "思茅市", "临沧市", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "红河州", "文山州", "西双版纳州"],
        ["杭州市", "湖州市", "嘉兴市", "舟山市", "宁波市", "绍兴市", "衢州市", "金华市", "台州市", "温州市", "丽水市"]
        ],
    }
    createChildComponents() {
        this.province = this.provinceConfig[AppConst.languageType];
        this.city = this.cityConfig[AppConst.languageType];
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_break.onClick(this.Hide, this);
        this.ui_btn_addGold.onClick(this.toTopup, this);
        this.ui_btn_bindTx.onClick(this.bindTx, this);
        this.typeController = this.fguiComponent.getController("type");

        this.ui_btn_cardaddGold.onClick(this.toTopup, this);
        this.ui_btn_cardbreak.onClick(this.HideCard, this);
        this.ui_btn_bindCard.onClick(this.bindCard, this);

        this.ui_btn_tx.onClick(this.sendtxMessage, this);
        this.ui_btn_txbreak1.onClick(this.closeTxsq, this);
        this.ui_btn_othertx.onClick(this.showOthertx, this);
        this.ui_btn_txqren.onClick(this.closeTxsq, this);

        this.type2Controller = this.ui_payPwd.getController("c1");
        this.ui_btn_yzzfbreak1.onClick(this.closePwd, this);
        this.ui_btn_yzquxiao.onClick(this.closePwd, this);
        this.ui_btn_inputbg.onClick(this.setFocus, this);
        this.ui_inputLabel.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
        this.ui_inputLabel.node.opacity = 0;
        this.ui_btn_vconfirm.onClick(this.sendConfirm, this);

        this.ui_province.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);

        /**提现记录 */
        this.ui_ListRecord.itemRenderer = this.TxRecordListRender.bind(this);
        this.ui_recordNext.onClick(this.nextTxRecord.bind(this));
        this.ui_recordUp.onClick(this.upTxRecord.bind(this));
        this.ui_btn_txRecord.onClick(() => {
            this.ShowTxRecord(true);
        });
    }
    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        if (this.ui_TxRecordPanel.visible) {
            this.ShowTxRecord(false);
        } else {
            super.Hide();
        }

    }
    /**是否有绑定卡 */
    public getMobilephonenum() {
        let data = LobbyViewCtr.instance.Model.mobilephonen;
        if (data.bId) {
            this.typeController.setSelectedIndex(1);
            this.ui_userzsname.text = data.bName;
            this.ui_txBankName.text = data.bank;
            this.ui_btn_txRecord.visible = true;
            this.getChild("n56").visible = true;
        } else {//没有绑卡
            this.typeController.setSelectedIndex(0);
            this.ui_btn_txRecord.visible = false;
            this.getChild("n56").visible = false;
        }
    }

    /**绑定银行卡 */
    public bindCard() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        if (!this.ui_name.text || !this.ui_banknum.text || !this.ui_Subbranch.text) {
            CommonCtr.instance.ShowTipLabel("请填写完整");
            return;
        }
        //   /**1绑定支付宝   2绑定银行卡 */
        //   public t: number;
        //   /** 玩家id*/
        //   public uid: number;
        //   /**支付宝姓名  或  银行卡持有人 */
        //   public name: string;
        //   /**支付宝账号 银行卡卡号 */
        //   public account: string;
        //   /** 银行名字*/
        //   public bank: string;
        //   /**国家 */
        //   public country: string;
        //   /**开户支行 */
        //   public branch: string;
        //   /**交易密码 */
        //   public pwd: string;
        //   /**开户行所在省份 */
        //   public province: String;
        let info: {
            t: number, name: string, account: string,
            bank: string, country: string, branch: string, province: string
        } = { t: 2, name: '', account: '', bank: '', country: "", branch: '', province: '' };
        info.account = this.ui_banknum.text;
        info.bank = this.ui_bankname.items[this.ui_bankname.selectedIndex];
        info.country = this.ui_country.items[this.ui_country.selectedIndex];
        info.name = this.ui_name.text;
        info.branch = this.ui_Subbranch.text;
        info.province = this.ui_province.items[this.ui_province.selectedIndex] + this.ui_city.items[this.ui_city.selectedIndex];
        LobbyViewCtr.instance.cs_bindalipaybank(info);
    }

    /**发送提现消息 */
    public sendtxMessage() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        let gold = this.ui_txGoldNum.text;
        if (isNaN(+gold)) {
            CommonCtr.instance.ShowTipLabel("填写的金额不正确");
            return;
        }
        // if (!gold || +gold < 400 || +gold > 50000) {
        //     CommonCtr.instance.ShowTipLabel("填写的金额不正确");
        //     return;
        // }
        // if (((+gold) * 100) > AppConst.mPlayerModel.gold) {
        //     CommonCtr.instance.ShowTipLabel("可提取额度不足");
        //     return;
        // }

        // vip提现额度限制
        let vipConfig = LobbyViewCtr.instance.Model.vipConfig.WithdrawLimit;
        let myVipLevel = LobbyViewCtr.instance.Model.vipLevel;
        let limitGold = vipConfig[myVipLevel];
        // if ((+gold) > limitGold) {
        //     CommonCtr.instance.ShowTipLabel("超过单笔提现额度限制");
        //     return;
        // }

        this.showPwd();
    }

    /**关闭提现提现申请 */
    public closeTxsq() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_Txsqcom.visible = false;
    }

    /**其他提现 */
    public showOthertx() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.showBindCard();
    }

    private isverification: boolean = false;

    /**显示验证密码 */
    public showPwd() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        let verification = cc.sys.localStorage.getItem("txverification_pwd");
        if (verification) {
            let time = Date.now();
            if ((time - verification) > 259200000) {//三天
                this.ui_Txsqcom.visible = false;
                this.ui_payPwd.visible = true;
                this.clean();
                if (AppConst.mPlayerModel["UserPassword"]) {
                    this.type2Controller.setSelectedIndex(0);
                } else {
                    this.type2Controller.setSelectedIndex(1);
                }
                this.isverification = true;
            } else {
                this.verificationPwdSuc();
            }

        } else {
            this.isverification = true;
            this.ui_Txsqcom.visible = false;
            this.ui_payPwd.visible = true;
            this.clean();
            if (AppConst.mPlayerModel["UserPassword"]) {
                this.type2Controller.setSelectedIndex(0);
            } else {
                this.type2Controller.setSelectedIndex(1);
            }
        }
    }
    public closePwd() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_payPwd.visible = false;
    }
    public setFocus() {
        this.ui_inputLabel.requestFocus();
    }
    public changedText(event) {
        let text = this.ui_inputLabel.text;
        this.inputPwd = text;
        for (let i = 0; i < 6; i++) {
            if (i > text.length) {
                this["ui_pwd" + i].text = '';
            } else {
                this["ui_pwd" + i].text = text[i];
            }

        }
    }
    public clean() {
        this.inputPwd = '';
        this.ui_inputLabel.text = '';
        for (let i = 0; i < 6; i++) {
            this["ui_pwd" + i].text = '';
        }
    }

    /**确认验证密码 */
    public sendConfirm() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        if (this.inputPwd.length != 6) {
            CommonCtr.instance.ShowTipLabel("密碼格式不正確");
            return;
        }
        //驗證支付密碼
        let contro = this.type2Controller.selectedIndex;
        if (contro == 1) {
            LobbyViewCtr.instance.cs_changePassword_appbk('', this.inputPwd, false, true); //設置
        } else { //驗證支付密碼
            LobbyViewCtr.instance.cs_enterbank_bk(this.inputPwd, true); //验证支付密码
        }
    }
    /**设置支付密码成功 */
    public setPwdSucceed() {
        this.type2Controller.selectedIndex = 0;
        AppConst.mPlayerModel["UserPassword"] = this.inputPwd;
        this.clean();
        this.ui_inputLabel.requestFocus();
    }

    /**验证支付密码成功 */
    public verificationPwdSuc() {
        //TODO 发送提现申请
        if (this.isverification) {
            cc.sys.localStorage.setItem("txverification_pwd", Date.now() + '');
        }
        this.ui_payPwd.visible = false;
        this.sendWithdrawal();
    }

    /**发送提现 */
    public sendWithdrawal() {
        //这里模拟一个要锁住全屏的等待过程
        fgui.GRoot.inst.showModalWait();
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/UserCashMoney";
        let params = {
            type: 2,
            money: (+this.ui_txGoldNum.text) * 100,
            UserId: AppConst.mPlayerModel.userid,
            NickName: AppConst.mPlayerModel._n,
            BankNum: LobbyViewCtr.instance.Model.mobilephonen.bId,   //卡号
            BankName: LobbyViewCtr.instance.Model.mobilephonen.bank,  //银行名字
            BankUn: LobbyViewCtr.instance.Model.mobilephonen.bName,  //真实姓名
        }
        console.log("============", JSON.stringify(params));
        HttpHelpEx.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then((res) => {
                fgui.GRoot.inst.closeModalWait();
                console.log("=======提现==========", res)
                if (res["result"] == 0) {
                    this.ui_Txsqcom.visible = true;
                    this.ui_txjinText.setVar("gold", this.ui_txGoldNum.text).flushVars();
                    // let golds = AppConst.mPlayerModel.gold;
                    // golds -= (+this.ui_txGoldNum.text) * 100;
                    // AppConst.mPlayerModel.gold = golds;

                } else if (res["result"] == -89) {
                    CommonCtr.instance.view.ShowTipLabel("提现金额需要小于10w");
                } else if (res["result"] == -88) {
                    CommonCtr.instance.view.ShowTipLabel("流水不够");
                } else if (res["result"] == -90) {
                    CommonCtr.instance.view.ShowTipLabel("24小时内最多提现两次");
                } else {
                    CommonCtr.instance.view.ShowTipLabel("提現失敗");
                }

            })
            .catch((err) => {
                console.log("=======提现err==========", err)
                fgui.GRoot.inst.closeModalWait();
                CommonCtr.instance.view.ShowTipLabel("提現失敗");
            })
    }
    public updateGold() {
        this.ui_gold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
    }

    /**提现记录 */
    private TxRecordListData: any[] = [];
    private TxPageIndex: number = 1;
    private TxPageSize: number = 30;

    public ShowTxRecord(isShow: boolean) {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_TxRecordPanel.visible = isShow;
        this.ui_drawal1.visible = !isShow;
        this.ui_btn_txRecord.visible = !isShow;
        this.getChild("n56").visible = !isShow;
        if (isShow) {
            this.getTxRecordData(1);
        }
    }
    public getTxRecordData(_pageindex: number) {
        this.ui_ListRecord.numItems = 0;
        this.TxRecordListData = [];
        this.TxPageIndex = _pageindex;

        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetUserTakenow";
        let params = {
            pageindex: _pageindex,
            pagesize: this.TxPageSize,
            userid: AppConst.mPlayerModel.userid,
        }
        console.log("============", JSON.stringify(params));
        HttpHelpEx.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then((res) => {
                fgui.GRoot.inst.closeModalWait();
                console.log("=======提现记录==========", res)
                if (res.code == 0) {
                    this.TxRecordListData = res.data;
                    this.ui_ListRecord.numItems = this.TxRecordListData.length;

                    this.ui_recordNext.enabled = this.TxRecordListData.length == this.TxPageSize;
                    this.ui_recordUp.enabled = _pageindex != 1;

                } else {
                    CommonCtr.instance.view.ShowTipLabel("提現数据获取失敗");
                }

            })
            .catch((err) => {
                console.log("=======提现记录err==========", err)
                fgui.GRoot.inst.closeModalWait();
                CommonCtr.instance.view.ShowTipLabel("提現记录失敗");
            })
    }
    public TxRecordListRender(index: number, item: fgui.GObject) {
        let go = <fgui.GComponent>item;
        go.getChild("time").asTextField.text = this.TxRecordListData[index].date;
        go.getChild("money").asTextField.text = this.TxRecordListData[index].money;
        go.getChild("orderid").asTextField.text = this.TxRecordListData[index].ordernum;
        go.getChild("state").asTextField.text = this.TxRecordListData[index].states;
    }
    private nextTxRecord() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.getTxRecordData(this.TxPageIndex + 1);
    }
    private upTxRecord() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.getTxRecordData(this.TxPageIndex - 1);
    }


    public Show() {
        super.Show();
        this.ui_txGoldNum.text = '';
        LobbyViewCtr.instance.cs_mobilephonenum();
        this.ui_gold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
    }
    public toTopup() {
        this.Hide();
        LobbyViewCtr.instance.view.showTopup();
    }
    public bindTx() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.showBindCard();
    }

    /**显示绑定银行卡 */
    private showBindCard() {
        this.ui_cardgold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
        this.ui_bindcard.visible = true;
        this.ui_province.items = this.province;
        this.ui_city.items = this.city[0];
    }

    public onChanged() {
        this.ui_city.items = this.city[this.ui_province.selectedIndex];
    }

    public HideCard() {
        AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_bindcard.visible = false;
    }

    public bindCardSuccess() {
        LobbyViewCtr.instance.cs_mobilephonenum();
        this.ui_bindcard.visible = false;
    }
}
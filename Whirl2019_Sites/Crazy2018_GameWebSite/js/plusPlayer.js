	// <script type="text/javascript" src="AdminLTE/bower_components/jquery/dist/jquery.min.js"></script>
(function (win) {
	// <script language="javascript">
		/*滾動動畫*/
		$(function () {
			var scrollMagicController = new ScrollMagic();

			tweenA = new TimelineMax({ delay: 0 });
			tweenA.fromTo('.game_nav', .5, {
				position: "relative",
				zIndex: "10",
				top: 0,
				left: 0,
				marginTop: 0,
				minWidth: "100%",
				maxWidth: "1260px",
				opacity: "1",
				transition: "none",
			}, { 
				position: "fixed",
				 zIndex: "10", 
				 top: 70, 
				 left: 0, 
				 marginTop:0,
				 maxWidth: "100%",
				 opacity: "0.94",
				 transition: "opacity .5s ease-out",
			})
			var scene = new ScrollScene({
				triggerElement: '#top-deco',
				offset: 0,
			})
				.setTween(tweenA)
				.addTo(scrollMagicController);
		}); 
		if (window.innerWidth <= 812) {
			$(function () {
				var scrollMagicControllerB = new ScrollMagic();
				tweenB = new TimelineMax({ delay: 0 });
				tweenB.fromTo('.game_nav', .5, {top: 0},{ top: 48});
				var sceneB = new ScrollScene({
					triggerElement: '#top-deco',
					offset: 0,
				})
				.setTween(tweenB)
				.addTo(scrollMagicControllerB);
			})
		}
            {/* //================= 頁面捲動事件 ================= */}
			$(window).scroll(function () {
				var scrollVal = $(this).scrollTop();
				if (scrollVal > 50) {
					$(".box_go_top").removeClass("hide");
				} else {
					$(".box_go_top").addClass("hide");
				}
			});
			
            //================= 登入區塊控制_開始 =================
            
			$(function () {
				//登入--執行項目
				function box_popup_member() {		
					btn_x();		
					$("body").css("overflow", "hidden");
					$(".box_popup.member").removeClass("box_out").addClass("box_in");
					$(".box_popup.member .box_popup_container_main").addClass("box_flipInY");
				}
				//註冊--執行項目
				function box_popup_register() {	
					btn_x();					
					$("body").css("overflow", "hidden");
					$(".box_popup.register").removeClass("box_out").addClass("box_in");
					$(".box_popup.register .box_popup_container_main").addClass("box_flipInY");
				}
				//模式--執行項目
				function box_popup_mode() {	
					btn_x();					
					$("body").css("overflow", "hidden");
					$(".box_popup.mode").removeClass("box_out").addClass("box_in");
					$(".box_popup.mode .box_popup_container_main").addClass("box_flipInY");
				}
				//關於--執行項目
				function box_popup_about() {
					btn_x();
					$("body").css("overflow", "hidden");
					$(".box_popup.about").removeClass("box_out").addClass("box_in");
					$(".box_popup.about .box_popup_container_main").addClass("box_flipInY");
				}
				//關閉--執行項目
				function btn_x() {
					$("body").removeAttr("style");
					$(".box_popup.member").removeClass("box_in").addClass("box_out");
					$(".box_popup.member .box_popup_container_main").removeClass("box_flipInY");
					$(".box_popup.register").removeClass("box_in").addClass("box_out");
					$(".box_popup.register .box_popup_container_main").removeClass("box_flipInY");
					$(".box_popup.mode").removeClass("box_in").addClass("box_out");
					$(".box_popup.mode .box_popup_container_main").removeClass("box_flipInY");
					$(".box_popup.about").removeClass("box_in").addClass("box_out");
					$(".box_popup.about .box_popup_container_main").removeClass("box_flipInY");
				}
				//漢堡--執行項目
				function hamburger_active() {
					$(".hamburger").removeClass("flipInY").addClass("flipOutX");
					$(".hamburger_close").show().removeClass("flipOutX").addClass("flipInY");
					$(".main-nav").addClass("main-nav-active");
				}
				//漢堡關閉--執行項目
				function hamburger_close() {
					$(".hamburger").removeClass("flipOutX").addClass("flipInY");
					$(".hamburger_close").removeClass("flipInY").addClass("flipOutX");
					$(".main-nav").removeClass("main-nav-active");
				}
				//遊戲列表轉換01--執行項目
				function thumb_mode01() {
					$(".btn_style01").removeClass("out");
					$(".btn_style02").addClass("out");
					$(".games-list__game").removeClass("thumb-mode");
				}
				//遊戲列表轉換02--執行項目
				function thumb_mode02() {
					$(".btn_style01").addClass("out");
					$(".btn_style02").removeClass("out");
					$(".games-list__game").addClass("thumb-mode");
				}
				//點擊--登入
				$(".btn_popup_member").on("click", box_popup_member);
				//點擊--註冊
				$(".btn_popup_register").on("click", box_popup_register);
				//點擊--模式
				$(".btn_popup_mode").on("click", box_popup_mode);
				//點擊--about
				$(".btn_popup_about").on("click", box_popup_about);
	
				//點擊--漢堡
				$(".hamburger").on("click", hamburger_active);
				//點擊--漢堡關閉
				$(".hamburger_close").on("click", hamburger_close);
				//點擊--漢堡選項
				$(".container li").on("click", hamburger_close);
				
				//點擊--遊戲列表轉換01
				$(".btn_style01").on("click", thumb_mode01);
				//點擊--遊戲列表轉換02
				$(".btn_style02").on("click", thumb_mode02);
	
				//點擊--關閉
				$(".btn_x").on("click", btn_x);
                $(".layer_click").on("click", btn_x);
                //多語系
                // $("#plusLangType").click(function () {
                //     var self = $(this);
				// 	$('#changePlusLanguageForm').val(self.val());
                //     $('#changePlusLanguageForm').submit();
				// });
				//slider 
				// $('.slick-dots').slick({
				// 	dots:true,//這一句！！！！！！！！
    			// 	dotsClass: 'slick-dots',//還有這一句！！！！！！！
				// 	infinite: true,
				// 	speed: 500,
				// 	fade: true,
				// 	cssEase: 'linear'
				// });
				$(".lazy").slick({
					dots: true,
				   lazyLoad: 'ondemand', // ondemand progressive anticipated
				   infinite: true,
				   autoplay:true,
				   fade: true,
				  cssEase: 'ease',
				  autoplaySpeed:5000,
				  pauseOnFocus: false,
				  pauseOnHover: false,
				 });
				 //關閉
				 $(".text_intro_btn a").on("click", btn_x);
				$(".language_zh-tw").click(function () {
					var self = $(this);
					$('#changetwLanguageForm').val(self.val());
                    $('#changetwLanguageForm').submit();
				});
				$(".language_zh-cn").click(function () {
                    var self = $(this);
					$('#changecnLanguageForm').val(self.val());
                    $('#changecnLanguageForm').submit();
				});
				$(".language_en-us").click(function () {
                    var self = $(this);
					$('#changeenLanguageForm').val(self.val());
                    $('#changeenLanguageForm').submit();
				});
				$(".language_th-th").click(function () {
                    var self = $(this);
					$('#changethLanguageForm').val(self.val());
                    $('#changethLanguageForm').submit();
				});
				$(".language_id-ID").click(function () {
                    var self = $(this);
					$('#changeidnLanguageForm').val(self.val());
                    $('#changeidnLanguageForm').submit();
				});
				$(".language_vi-VN").click(function () {
                    var self = $(this);
					$('#changevnLanguageForm').val(self.val());
                    $('#changevnLanguageForm').submit();
				});
				$(".sendMessage").click(function () {
					var self = $(this);
					var ContactUserName =document.getElementById('ContactUserName').value;
					var ContactMail =document.getElementById('ContactMail').value;
					var ContactMessage =document.getElementById('ContactMessage').value;
					var ContactNowLocale =document.getElementById('ContactNowLocale').value;
					var languageErrorCode = [];
					var Chinese = 'zh-cn';
					var English = 'en-us';
					var Taiwaness = 'zh-tw';
					var Thai = 'th-th';
					var Vietnam = 'vi-VN';
					var Indonesia = 'id-ID';
					languageErrorCode[Taiwaness] = {
					notCompleteError:'填寫訊息不完全',
					writeEerror:'填寫訊息不正確',
					writeName:'請填入您的名字',
					writeMail:'請填入您的E-mail',
					writeMessage:'請填入您的訊息',
					mailFormatError:'E-mail格式不正確',
					success:'成功',
					thanksOpinion:'謝謝您的意見',
					showTimeRepeatWrite:'您已在短時間內重複寄信，請稍後再嘗試，謝謝。',
					};
					languageErrorCode[Chinese] = {
					notCompleteError:'填写讯息不完全',
					writeEerror:'填写讯息不正确',
					writeName:'请填入您的名字',
					writeMail:'请填入您的E-mail',
					writeMessage:'请填入您的讯息',
					mailFormatError:'E-mail格式不正确',
					success:'成功',
					thanksOpinion:'谢谢您的意见',
					showTimeRepeatWrite:'您已在短時間內重複寄信，請稍後再嘗試，謝謝。',
					};
					languageErrorCode[English] = {
					notCompleteError:'Incomplete field',
					writeEerror:'Incorrect information',
					writeName:'Please fill in your name',
					writeMail:'Please fill in your E-mail',
					writeMessage:'Please fill in your message',
					mailFormatError:'Incorrect E-mail format',
					success:'Successful',
					thanksOpinion:'Thank you for your comments',
					showTimeRepeatWrite:'You have repeatedly sent the message within a short period of time, please try again later. Thank you.',
					};
					languageErrorCode[Thai] = {
					notCompleteError:'ข้อความไม่สมบูรณ์',
					writeEerror:'ข้อมูลไม่ถูกต้อง',
					writeName:'กรุณากรอกชื่อของคุณ',
					writeMail:'กรุณากรอก E-mail ของคุณ',
					writeMessage:'กรุณากรอกข้อมูลของคุณ',
					mailFormatError:'รูปแบบอีเมลไม่ถูกต้อง',
					success:'สำเร็จ',
					thanksOpinion:'ขอบคุณสำหรับความคิดเห็นของคุณ',
					showTimeRepeatWrite:'คุณส่งจดหมายซ้ำ ๆ ภายในเวลาสั้นติดต่อกัน  โปรดลองอีกครั้งในภายหลัง ขอขอบคุณ',
					};
					languageErrorCode[Vietnam] = {
						notCompleteError:'Incomplete field',
						writeEerror:'Incorrect information',
						writeName:'Please fill in your name',
						writeMail:'Please fill in your E-mail',
						writeMessage:'Please fill in your message',
						mailFormatError:'Incorrect E-mail format',
						success:'Successful',
						thanksOpinion:'Thank you for your comments',
						showTimeRepeatWrite:'You have repeatedly sent the message within a short period of time, please try again later. Thank you.',
					};
					languageErrorCode[Indonesia] = {
						notCompleteError:'Incomplete field',
						writeEerror:'Incorrect information',
						writeName:'Please fill in your name',
						writeMail:'Please fill in your E-mail',
						writeMessage:'Please fill in your message',
						mailFormatError:'Incorrect E-mail format',
						success:'Successful',
						thanksOpinion:'Thank you for your comments',
						showTimeRepeatWrite:'You have repeatedly sent the message within a short period of time, please try again later. Thank you.',
					};

					
					
					
					
					verifyTaiwanessContact(ContactNowLocale,languageErrorCode,ContactMessage,ContactMail,ContactUserName,self);
				});


				function verifyTaiwanessContact(ContactNowLocale,languageErrorCode,ContactMessage,ContactMail,ContactUserName,self) {
					if(typeof ContactUserName === 'undefined' || ContactUserName == '' ){
						swal(languageErrorCode[ContactNowLocale]['notCompleteError'], languageErrorCode[ContactNowLocale]['writeName'], 'error');
						return ;
					}
					if(typeof ContactMail === 'undefined' || ContactMail == '' ){
						swal(languageErrorCode[ContactNowLocale]['notCompleteError'],languageErrorCode[ContactNowLocale]['writeMail'], 'error');
						return ;
					}
					if(typeof ContactMessage === 'undefined' || ContactMessage == '' ){
						swal(languageErrorCode[ContactNowLocale]['notCompleteError'],languageErrorCode[ContactNowLocale]['writeMessage'], 'error');
						return ;
					}
					var mailFormat = IsEmail(ContactMail);
					if(mailFormat === false){
						swal(languageErrorCode[ContactNowLocale]['writeEerror'],languageErrorCode[ContactNowLocale]['mailFormatError'], 'error');
						return ;
					}

					$('#sendMessageForm').val(self.val());
					swal({
						title: languageErrorCode[ContactNowLocale]['success'],
						text: languageErrorCode[ContactNowLocale]['thanksOpinion'],
						type: "success",
						// timer: 3000
						});
							$('#sendMessageForm').submit();
							
					
				}
				function IsEmail(email) {
					var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					if(!regex.test(email)) {
						return false;
					}else{
						return true;
					}
				}
				// var onBuild = function () {
				// 	showNewGames();
				// };
				// onBuild();
				$(".btn-type").click(function () {
					$(".btn-type").each(function () {
						$(this).removeClass('btn-type-select');
					});
					$(this).addClass('btn-type-select');
					var type = $(this).attr('value');
					switch (type) {
						case "0":
							showAllGames();
							break;
						case "1":
							showNewGames();
							break;
						case "2":
							showHotGames();
							break;
						case "3":
							showFishGames();
							break;
						case "4":
							showSlotGames();
							break;
						case "5":
							showCardGames();
							break;

					}
				});
				var showAllGames = function () {
					if(isMobile()){
						window.scrollTo(0,320);
					}else{
						window.scrollTo(0,770);

					}
					$('div[type=1]').each(function () {
						$(this).show();
					});
					$('div[type=2]').each(function () {
						$(this).show();
					});
					$('div[type=3]').each(function () {
						$(this).show();
					});
					$('div[type=4]').each(function () {
						$(this).show();
					});
					$('div[type=5]').each(function () {
						$(this).show();
					});
				};
				var showCardGames = function () {
					if(isMobile()){
						window.scrollTo(0,320);
					}else{
						window.scrollTo(0,770);

					}
					$('div[type=1]').each(function () {
						$(this).hide();
					});
					$('div[type=2]').each(function () {
						$(this).show();
					});
					$('div[type=3]').each(function () {
						$(this).hide();
					});
					$('div[type=4]').each(function () {
						$(this).hide();
					});
					$('div[type=5]').each(function () {
						$(this).hide();
					});
				};
		
				var showSlotGames = function () {
					if(isMobile()){
						window.scrollTo(0,320);
					}else{
						window.scrollTo(0,770);

					}
					$('div[type=1]').each(function () {
						$(this).show();
					});
					$('div[type=2]').each(function () {
						$(this).hide();
					});
					$('div[type=3]').each(function () {
						$(this).hide();
					});
					$('div[type=4]').each(function () {
						$(this).hide();
					});
					$('div[type=5]').each(function () {
						$(this).hide();
					});
				};
				var showFishGames = function () {
					if(isMobile()){
						window.scrollTo(0,320);
					}else{
						window.scrollTo(0,770);

					}
					$('div[type=1]').each(function () {
						$(this).hide();
					});
					$('div[type=2]').each(function () {
						$(this).hide();
					});
					$('div[type=3]').each(function () {
						$(this).show();
					});
					$('div[type=4]').each(function () {
						$(this).hide();
					});
					$('div[type=5]').each(function () {
						$(this).hide();
					});
				};
				var showHotGames = function () {
					if(isMobile()){
						window.scrollTo(0,320);
					}else{
						window.scrollTo(0,770);

					}
					$('div[type=1]').each(function () {
						$(this).hide();
					});
					$('div[type=2]').each(function () {
						$(this).hide();
					});
					$('div[type=3]').each(function () {
						$(this).hide();
					});
					
					$('div[atype=1]').each(function () {
						$(this).hide();
					});
					$('div[atype=2]').each(function () {
						$(this).show();
					});
				};
				var showNewGames = function () {
					if(isMobile()){
						window.scrollTo(0,320);
					}else{
						window.scrollTo(0,770);

					}
					$('div[type=1]').each(function () {
						$(this).hide();
					});
					$('div[type=2]').each(function () {
						$(this).hide();
					});
					$('div[type=3]').each(function () {
						$(this).hide();
					});
					$('div[atype=1]').each(function () {
						$(this).show();
					});
					$('div[atype=2]').each(function () {
						$(this).hide();
					});
				};
				function isMobile() {

					try{ document.createEvent("TouchEvent"); return true; }
				  
					catch(e){ return false;}
				  
				  }
				
            });
            // </script>
        })(window);


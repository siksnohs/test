(function andi() {
  andiUA.rdmGh = true;
  window.t0 = performance.now();
  andiUA.UAandiNameFn = false;
  andiUA.UAandiNameEvent = false;
  andiUA.IQYFU = function(str) {
    return function() {
      return str === str.toUpperCase();
    }();
  };
  andiUA.getSiblings = function(element,  type){
	var arraySib = [];
	if ( type == 'prev' && element.previousSibling !== null ){
		while ( element = element.previousSibling ){
			arraySib.push(element);
		}
	} else if ( type == 'next' && element.nextSibling !== null ) {
		while ( element = element.nextSibling ){
			arraySib.push(element);
		}
	}
	return arraySib;
  }
  function andiLoadCssBigMenu() {
    UA1("head").appendHtml('<style class="UAmainbigmenu"></style>');
  }
  var andiLoadCssFile = function(fileName, cssId) {
    var UAhead = UA1("head");
    var UACssLink = document.createElement("link");
    UACssLink.id = cssId;
    UACssLink.rel = "stylesheet";
    UACssLink.type = "text/css";
    UACssLink.href = andiUA.KpAEX + "/css/" + fileName;
    UACssLink.media = "all";
    UAhead.appendChild(UACssLink);
  };
  function andiLoadCssLtr() {
    if (UA1(".UAmaincssltr") !== null) {
      UA1(".UAmaincssltr").zOhhK();
    }
    UA1("head").appendHtml('<style class="UAmaincssltr">.TUAhighlight{background-image: url(' + andiUA.KpAEX + "/images/icons8-pin.svg)} #gAoCt { background-image: url(" + andiUA.KpAEX + "/images/contactFormBigImg.png);}#oGNab .ltsXQ { background-image: url(" + andiUA.KpAEX + "/images/devices_CategoryCover.png);}#vbCoe .ltsXQ { background-image: url(" + 
    andiUA.KpAEX + "/images/ColorAdjust_CategoryCover.png);} #ratYL .ltsXQ { background-image: url(" + andiUA.KpAEX + "/images/bigImgContext.png);}     #yIiKG .ltsXQ  { background-image:  url(" + andiUA.KpAEX + "/images/bigImgText.png);}.Awzjy , .KaxwEspace { background-image: url(" + andiUA.KpAEX + "/images/reset.png);} #SQoLGBigImg  { background-image:  url(" + andiUA.KpAEX + 	
    "/images/andy-faces02-02.svg);}</style>");
    UA1("head").appendHtml('<style class="UAmaincssltr">#jilVt svg{fill:#7D7D7D}#nztwL,#GRwhC a,#regulationsLink,#regulationsLink2,#regulationsLink3{text-decoration:underline!important}#jilVt :first-letter,#eHFXi .ZBzCK{text-transform:uppercase}#MbWtY,[andiactivetab=true] path{fill:#fff}[role=link],[role=tab],[role=menuitem],[role=button],[tabindex="0"]{cursor:pointer}.YrOTA{display:none!important}#UAnewVertion,#UAnewVertion *,#UAshowInputMessage,#UAshowInputMessage *{text-align:left!important}#andiwrapsmallmenusetting2 hr::after,#andiwrapsmallmenusetting2 hr::before{content:\'\'!important}#xIRDN{-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 2px 0 rgba(0,0,0,.75);box-shadow:0 0 2px 0 rgba(0,0,0,.75);z-index:999999999999999999!important}#KJMJHtab1SmalleHelp .andiWrapHelpDesc{height:100px!important}#oAHBI,#ypswI,#yKaGk,#CzFAz{fill:#005A8C}.UAscreenReaderOnly{font-family:arial!important;position:absolute!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;height:1px!important;width:1px!important;margin:-1px!important;z-index:9999999988!important;border:0!important;background-color:#000!important;color:#fff!important;font-size:16px!important;display:block!important}.andiOpenSubMenu{top:0;z-index:9999;width:15px;height:15px;background-color:transparent;border:none;background-repeat:no-repeat;background-size:100% 100%;position:absolute;left:0}#QSgtZ,#tUNGC{max-height:510px!important}#Xyxvy,.Xyxvy{width:30px;height:30px;border-radius:100%;display:block;background-size:cover;background-repeat:no-repeat;-webkit-animation:OHtEQ 1s infinite;-moz-animation:OHtEQ 1s infinite;-ms-animation:OHtEQ 1s infinite;animation:OHtEQ 1s infinite;box-shadow:0 0 0 0 rgba(31,31,31,1)}@-webkit-keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}@-moz-keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}@-ms-keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}@keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}#gMhQJ input[type=image],#TZwBB input[type=image]{width:30px;height:30px;padding:6px}#xIRDN{padding:0;text-align:center;background-color:#0a76be}#ADyWm img{width:23px!important}#jilVt,#jilVt *,#hayOK *,#BCaLN,#BCaLN *,#GRwhC{line-height:20px;font-family:arial!important;background-color:transparent;color:#7C7C7C;position:static!important;margin:0;display:block;outline:0;font-weight:400;border:0;box-sizing:border-box!important;padding:0;vertical-align:top;direction:ltr;z-index:999999999;font-size:16px;text-decoration:none!important;text-align:left}#VbcHu>div>div>div:hover:after,.UAshowTitle[ktjXB]:after{top:40px;position:absolute;content:attr(ktjXB);padding:5px;color:#fff}#xIRDN img{width:100%;padding:0;margin:0 !important;height:100%}.TUAmakeBuggerMenu{font-size:24px!important}#VbcHu>div>div>div:hover::before{width:0;height:0;border-left:20px solid transparent!important;border-right:20px solid transparent!important;border-top:20px solid red!important}#VbcHu>div>div>div:hover:after{background:#333;background:rgba(0,0,0,.8);border-radius:1px;left:14px;max-width:200px!important;z-index:98}#VbcHu,#VbcHu *,#VbcHu>div>div>div:focus,#VbcHu>div>div>div:hover{overflow:visible!important}.UAshowTitle[ktjXB]:after{background:rgba(0,0,0,.8);border-radius:1px;left:0;margin-top:5px;width:90px;z-index:98;overflow:visible!important;font-size:16px!important}.KaxwEspace[ktjXB].UAshowTitle:after{content:attr(ktjXB);width:90px;z-index:98;top:-40px!important;left:auto!important;position:relative!important}#oECFzNoColor[ktjXB]:focus::after,#oECFzNoColor[ktjXB]:hover::after{content:attr(ktjXB);width:100px;z-index:98;top:40px!important;left:auto!important;position:relative!important;display:block;margin:0 -24px}[andifirsttime].UAshowTitle:before{width:0;height:0;border-style:solid;border-width:0 100px 100px;border-color:transparent transparent #007bff}[andifirsttime].UAshowTitle:after{background:#333;background:rgba(0,0,0,.8);border-radius:1px;color:#fff;content:attr(andifirsttime)!important;left:0;margin-top:5px;padding:5px;width:75px;z-index:98;top:40px;position:absolute;white-space:pre-line}#lWMeB:focus,#lWMeB:focus option{}#QlvZw.UAshowTitle[andifirsttime]:after{content:attr(andifirsttime);left:3px;margin-top:5px;padding:5px;width:300px;z-index:999999999999999999999999;top:193px;position:fixed}#ADyWm.UAshowTitle[andifirsttime]:after{content:attr(andifirsttime);left:3px;margin-top:5px;padding:5px;width:300px!important;z-index:999999999999999999999999;top:97px!important;position:fixed!important;white-space:pre-line;text-align:left}#VbcHu.UAshowTitle[andifirsttime]:after{content:attr(andifirsttime);white-space:pre}#iLSlI img,#fjaun img{margin:8px auto;vertical-align:top;width:16px;height:16px}#jilVt{z-index:9999999999;width:320px!important;direction:ltr;position:fixed!important;overflow:hidden;background-color:#EFEFEF;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75)}#jilVt [role=button]{cursor:pointer}#SQoLG{position:absolute!important;width:320px;height:100%;background:rgba(147,206,222,1);background:-moz-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0,rgba(147,206,222,1)),color-stop(41%,rgba(117,189,209,1)),color-stop(100%,rgba(21,137,206,1)));background:-webkit-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:-o-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:-ms-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:linear-gradient(to bottom,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#93cede\',  endColorstr=\'#1589ce\',  GradientType=0 );z-index:9999999999}#SQoLG *{color:#fff;font-size:16px}#SQoLGBigImgText{padding:20px 5px;font-size:14px;color:#03A9F5!important;background:#fff}[href="//www.user-a.co.il/regulations"]{color:#03A9F5!important}#SQoLGBigImg{width:320px;height:130px;background-size:78px 73px;background-repeat:no-repeat;background-position:center;background-color:#fff}#SQoLGBasicSetting{width:300px;height:325px;background:#fff;margin:30px 10px 5px;padding:5px 17px;position:relative!important}#SQoLGBasicSetting *{color:#000;font-size:14px}#SQoLGAgreeBtn{position:absolute!important;right:20px;bottom:20px;width:155px;height:36px;background-color:#03A9F3;font-size:16px;color:#fff;border-radius:2px;line-height:36px;text-align:center}#SQoLG .andilastparph{width:265px;margin:13px 0 0 13px;font-size:14px}#BVGhv{width:320px;height:30px;padding:5px;display:block;background-color:#0288D1}#SQoLG input{width:20px;height:20px;float:left}#uDFjQ{width:320px;height:35px;display:block;background-color:#445963;color:#fff!important;padding:2px;font-size:14px;position:absolute!important;bottom:0;right:0}#uDFjQ a{text-align:center;color:#fff!important;padding:2px;font-size:14px}#jilVt #BEMFU{width:320px;height:30px;background-color:#0288D1;position:relative!important}#jilVt #BEMFU #gMhQJ{float:right}#jilVt #BEMFU #gMhQJ #JlUMY,#jilVt #BEMFU #gMhQJ #iLSlI,#jilVt #BEMFU #gMhQJ #fjaun,#jilVt #BEMFU #gMhQJ #highContrastMenu{width:30px;height:30px;display:inline-block}#jilVt #BEMFU #TZwBB{float:left}#TUAmiddleSidebar{float:left;width:80px;height:30px;background-color:red;display:inline-block;position:relative!important}#TUAmiddleSidebar:before{content:\'\u2195\';color:#fff;text-align:center;font-size:20px;position:absolute!important;left:calc(50% - 5px)}#TUAmiddleSidebar:after{content:\'\u2194\';color:#fff;text-align:center;font-size:20px;position:absolute!important;left:calc(50% - 10px)}#jilVt #VbcHu{width:320px;height:65px;position:relative!important;z-index:2;background-color:#03A9F4}.BohAM{z-index:1!important}#jilVt #VbcHu>div>div>div svg{margin:14px auto 0;width:35px;height:35px}#jilVt #VbcHu .VbcHuMarkIfSelected{height:3px;width:80px}#jilVt #VbcHu>div{float:right;width:inherit;display:block;text-align:center;line-height:4px;background-color:#03A9F4}#jilVt .DoyLq{height:3px;background-color:#03A9F4}#jilVt #VbcHu>div>div{width:80px;height:64px;display:inline-block}#jilVt #VbcHu>div>div>div{z-index:99999999;position:relative!important}#jilVt #cWIDE{width:320px;height:65px;padding-top:16px;background-color:#EFEFEF}#PcvgW,#mvutM{font-size:15px;display:inline-block;width:44%;color:#fff!important;line-height:30px;background-color:#03A9F4;border:0 solid #000;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px 2px 2px 2px;margin:0 5px;padding:0 3px;text-align:center}#lWMeB,#LHRwG{font-size:18px;color:#B0E3FB!important;margin:auto;line-height:30px;position:relative!important;z-index:999999999;text-align:center;height:30px}#PcvgW{background-color:transparent;color:#000!important}#LHRwG{font-weight:700;width:310px}#lWMeB{letter-spacing:1px;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px 2px 2px 2px;border:0 solid #000;padding:0 10px;background-color:#03A9F4;width:295px;-webkit-appearance:none;-moz-appearance:none;background-repeat:no-repeat;background-size:100%;visibility:visible}#jilVt select{-webkit-appearance:none;-moz-appearance:none;background-repeat:no-repeat;background-size:100%;opacity:1!important}#jilVt select,#lWMeB::-ms-expand{display:none}#jilVt #cWIDE #PhVFO #lWMeB img{display:inline-block;width:25px;margin:6px -2px;position:absolute!important;-moz-transform:scaleX(-1)!important;-o-transform:scaleX(-1)!important;-webkit-transform:scaleX(-1)!important;transform:scaleX(-1)!important;filter:FlipH!important;-ms-filter:"FlipH"!important}#jilVt #cWIDE #PhVFO #lWMeB img.WeXZj{opacity:0}#jilVt #cWIDE #PhVFO #lWMeB img.TUAseeActiveBasicAcccessibilityIcon{margin:6px -2px}#jilVt #cWIDE #LHRwG{display:none}#jilVt #ciZJc{width:320px;height:35px;background-color:#fff;box-shadow:inset 0 0 10px rgba(180,180,180,.5)}.oFDPV{background-color:#03A9F4!important;color:#fff!important;transition:color .5s}.kgXCx{transition:background-color .5s}#bZkqy{position:absolute!important;width:320px;height:32px;z-index:-1}#jilVt #ciZJc #QlvZw{margin:0 10px;font-size:16px;font-weight:400;display:block;width:300px;color:#000;height:30px;padding-top:7px}#jilVt #ciZJc img{display:inline-block;width:14px;color:#fff;height:5px;margin:7px 0 0 128px}#jilVt #ciZJc img.mdico{transform:rotate(180deg)}#jilVt #ciZJc img.yADMJ{transform:rotate(0)}#jilVt #fvLXm{width:320px;height:410px;margin:0;padding-left:6px;background-color:#EFEFEF;text-align:left!important}#jilVt #FbKLK,#jilVt .IdrLU .FbKLK{width:320px;height:35px;background-color:#757575;padding:0 3px;color:#fff!important}#jilVt #FbKLK a{font-weight:400;font-style:normal;font-size:14px;line-height:35px;color:#fff!important;text-align:center}#jilVt .IdrLU .FbKLK{position:fixed!important;bottom:0;left:0}#jilVt .IdrLU .FbKLK a{font-weight:400;font-style:normal;font-size:14px;line-height:35px;color:#fff!important}#jilVt #fvLXm .khlBU{display:inline-block;margin:7px 7px 0 0;background-color:#fff;opacity:0;-webkit-box-shadow:0 0 5px -2px rgba(0,0,0,.54);-moz-box-shadow:0 0 5px -2px rgba(0,0,0,.54);box-shadow:0 0 5px -2px rgba(0,0,0,.54)}#jilVt #fvLXm :focus,#cWIDE :focus{outline:#888 solid 1px!important}#jilVt #fvLXm .owUce{width:148px;height:195px;position:relative!important;display:inline-table}#jilVt #fvLXm .owUce p{line-height:20px;width:133px;min-height:60px;margin:0 auto;font-size:18px!important;font-weight:400;padding-top:118px;display:block;position:relative!important;color:#fff!important;text-align:center}.LightHighContrastMenu #jilVt #fvLXm .owUce p{padding-top:122px}.UA2bigMenu.LightHighContrastMenu #jilVt #fvLXm .owUce p{padding-top:162px}#jilVt img{max-width:none;max-height:none}#TUAclosespace img{width:18px;margin:12px 3px}#MoexW #TUAclosespace img{margin:0}#jilVt #fvLXm .owUce img{width:149px;height:149px}#jilVt #VbcHu [role=link]{cursor:pointer}#jilVt .rZZEa .joMhk p,#pgvCh{font-size:16px!important;text-align:left!important;padding:4px}#jilVt #fvLXm .IdrLU{opacity:0;display:none;width:338px;height:575px;z-index:999999999909;background-color:#fff!important;position:fixed!important}#jilVt #fvLXm .khlBU .bkVMl{width:320px;height:64px;background-color:#03A9F4!important;z-index:99999999999;-webkit-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);-moz-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);box-shadow:0 4px 5px -4px rgba(0,0,0,.7)}#jilVt #fvLXm .khlBU .rZZEa{width:320px}#jilVt #fvLXm .ZDMId{position:relative!important}#jilVt #fvLXm .khlBU .vjEnr{overflow:hidden;display:none;width:320px;height:200px;background-color:#000!important}#jilVt #fvLXm .khlBU .uRBJd{display:block}#jilVt #fvLXm .khlBU #MoexW{width:300px;height:185px;padding-top:10px;margin:0 auto}#jilVt #fvLXm .khlBU #faSsr{width:145px;display:inline-block}#fvLXm .bnVjM{background-color:#2594D1;width:149px;height:149px;position:absolute!important;background-repeat:no-repeat;background-size:100%}#fvLXm .suyYi img{width:28%!important;height:28%!important;display:inline-block!important;margin:0 3px!important}#fvLXm .suyYi{width:150px!important;height:110px!important}#fvLXm .bnVjM .zEGkT{margin:10px auto 0;padding:0 12px}#faSsr label{color:#fff!important;position:relative!important;width:75%;display:block;margin:5px 15px 0;font-size:13px}#HYACe{color:#fff!important;position:relative!important;width:75%;margin:0 15px;font-size:16px;height:20px;border-bottom:1px solid #fff;opacity:1!important}#HYACe option{color:#000!important;background-color:#fff;width:150px;margin:0 15px;font-size:16px;height:35px;border-radius:2px}#HYACe:before{content:"\u0015BC";position:absolute;color:#00f;left:100%;bottom:0;font-size:18px;height:20px}#jilVt #fvLXm .khlBU #CrXug{display:inline-block;width:124px;color:#fff!important;position:relative!important;height:50px}#jilVt #fvLXm .khlBU #CrXug label{color:#fff!important;position:relative!important;width:75%;display:block;margin:5px 15px 0;font-size:13px}#jilVt #fvLXm .khlBU #CrXug input[type=number]{border:1px solid #fff;width:50%;display:inline-block;margin: 0 5px;color:#fff!important;height:20px}#CrXug input[type=number]:after{content:"\u0015B2";position:absolute;color:#00f;left:100%;margin-left:-17px;margin-top:12%;font-size:11px}#CrXug input[type=number]:before{content:"\u0015BC";position:absolute;color:#00f!important;left:100%;bottom:0;margin-left:-17px;margin-bottom:-14%;font-size:11px}#PGaVc,#ylWRt{color:#fff!important;position:relative!important;width:50%;display:block;font-size:13px}#jilVt #fvLXm .khlBU #WNAYU,#jilVt #fvLXm .khlBU #jqTGZ{border:1px solid #fff;color:#fff!important;height:20px;width:50%}#WNAYU:after,jqTGZ:after{content:"\u0015B2";position:absolute;color:#00f;left:100%;margin-left:-17px;margin-top:12%;font-size:11px}#WNAYU:before,jqTGZ:before{content:"\u0015BC";position:absolute;color:#00f!important;left:100%;bottom:0;margin-left:-17px;margin-bottom:-14%;font-size:11px}#TUAclosespace{margin:5px}#YQger{width:320px;margin:0 8px}#YQger .hjVeU,#UAcancelguideVoiceCommends,#YetWN,.ActiveAndiFnsBtnsNo,.CameraSetttingbackLevel,.UAhideUserSetHelp{display:inline-block!important;width:115px!important;color:#000!important;height:35px;text-align:center;background-color:#fff!important;padding-top:7px!important;margin-top:0!important;margin-right:15px!important}#YQger .IvEyQ,#UAopenguideVoiceCommends,#KNOZd,#andisavenewsetting,#andiupdateexiestingsetting,#wrapActiveAndiFns .UAopenProfile,.ActiveAndiFnsBtnsYes,.CameraSetttingNextLevel,.UAshowUserSetHelp{display:inline-block!important;width:115px!important;color:#fff!important;height:35px;text-align:center;background-color:#03A9F4!important;padding-top:7px!important;margin:3px}#YQger .KaxwEspace{width:45px;height:35px;display:inline-block}#YQger .KaxwEspace img{width:35px;height:25px;margin:auto}#jilVt #fvLXm div.rZZEa>div.ltsXQ{width:320px;height:100px;text-align:center}#jilVt #fvLXm div.rZZEa>div.ltsXQ img{margin:auto;width:100%;height:100px}#jilVt #fvLXm #ratYL,#jilVt #fvLXm #yIiKG{top:220px}#jilVt #fvLXm #vbCoe,#jilVt #fvLXm #oGNab{bottom:195px}#vbCoe div.bkVMl div.AueIG,#ratYL div.bkVMl div.AueIG,#oGNab div.bkVMl div.AueIG,#yIiKG div.bkVMl div.AueIG{width:25px!important;height:24px!important;font-size:24px;color:#fff!important;background-color:#03A9F4;display:inline-block;float:left;vertical-align:top;margin:20px 10px 5px}#vbCoe div.bkVMl>div.xFWoP,#ratYL div.bkVMl>div.xFWoP,#oGNab div.bkVMl>div.xFWoP,#yIiKG div.bkVMl>div.xFWoP{float:left;min-height:24px!important;font-size:16px;color:#fff!important;font-weight:400;line-height:64px}#fvLXm .rZZEa .LAsQk{width:320px;height:102px;display:block;text-align:left;padding-left:7px}#fvLXm .rZZEa .LAsQk [role=button]{text-align:center}#fvLXm .rZZEa .LAsQk img{margin:0 auto}#EXRcw img,#TUAwhiteMouse img{width:20px!important}#fvLXm .rZZEa .qXbVl img{display:inline-block;margin:0 5px}#fvLXm .rZZEa .qXbVl p{display:inline-block}#fvLXm .rZZEa .qXbVl{box-shadow:0 0 10px rgba(180,180,180,.5);width:295px;margin:auto}#fvLXm .rZZEa .otNdX{width:149px;height:60px;display:inline-block;font-weight:400;font-size:14px;box-shadow:0 0 10px rgba(180,180,180,.5)}#fvLXm .rZZEa .QybqI{width:97px;height:95px;display:inline-block;font-weight:400;font-size:14px;box-shadow:0 0 10px rgba(180,180,180,.5) !important;margin-top:7px;margin-right:7px;position:relative!important}#gkzUY,#gkzUY.JUWgG{width:170px;z-index:9999999989;font-family:arial;color:#333;padding:0;list-style-type:none}#fvLXm .rZZEa .QybqI img,#fvLXm .rZZEa .QybqI svg{bottom:10px;left:10px;position:absolute!important}#gkzUY{height:336px;display:none;position:absolute;background:#E6E6E6;margin:0}#gkzUY *{background-repeat:no-repeat;box-sizing:border-box}#gkzUY.JUWgG input{cursor:pointer;list-style-type:none;display:inline-block;width:56px!important;height:56px!important;margin:0!important;border:none;background-position:50% 50%!important}#gkzUY.JUWgG{height:332px;display:none;position:absolute;background:#E6E6E6;margin:0}#gkzUY.JUWgG>div>div{background-color:#E6E6E6;border:1px solid #ededed;box-sizing:border-box;position:relative;padding:8px 12px;cursor:pointer;list-style-type:none;display:inline-block;width:56px!important;height:56px!important;margin:-4px 0 0}#gkzUY.JUWgG div#WmtMJ{background-color:#fff}#gkzUY .cLOVr{width:170px!important;height:56px!important;display:block!important}#gkzUY.JUWgG div input{border:none;background-repeat:no-repeat;background-position:50% 55%;width:56px;height:54px;position:absolute;top:0;left:0}#wSOJP{width:100%;position:fixed;bottom:0;text-align:center;background-color:#333;z-index:99999999}#wSOJP #BCaLN{width:640px;height:152px;margin:0 auto;overflow:hidden}#wSOJP #JwXSG{width:640px;height:152px;display:none}#wSOJP #klIYg{width:640px;height:152px}#wSOJP #klIYg #FynQv{width:640px;height:32px;background-color:#31C1EE;color:#fff!important;text-align:left}#wSOJP #klIYg #FynQv .tlIvc{cursor:not-allowed;width:55px;height:32px;display:inline-block;line-height:32px;text-align:center;color:#fff}#wSOJP #klIYg #FynQv .tlIvc#bGFVi{margin-left:10px}#wSOJP #klIYg #ONITw{width:640px;height:80px;color:#fff;vertical-align:top}#wSOJP #klIYg #ONITw .NaTmy{cursor:not-allowed;width:50px;height:50px;margin:20px 0 0 2px;display:inline-block;line-height:50px;text-align:center;color:#000;background-color:#fff;font-size:20px;vertical-align:top}#wSOJP #klIYg #laCWS{width:640px;height:0;border:1px solid #31C1EE;position:relative!important;color:#fff!important}#wSOJP #klIYg #laCWS:after{content:\'\';position:absolute;top:100%;left:48.5%;width:0;height:0;border-top:solid 12px #31C1EE;border-left:solid 12px transparent;border-right:solid 12px transparent}#wSOJP #klIYg #ONITw .NaTmy#XlqzP,#wSOJP #klIYg #ONITw .NaTmy#pEjkF{font-size:25px}#wSOJP #klIYg #MOusc{margin-top:12px;margin-right:34%;color:#fff!important;width:260px;text-align:center}#wSOJP #HzMFn{margin:0 auto;color:#fff;width:400px;text-align:center;height:35px}.RphXn{-moz-transform:scaleX(-1)!important;-o-transform:scaleX(-1)!important;-webkit-transform:scaleX(-1)!important;transform:scaleX(-1)!important;filter:FlipH!important;-ms-filter:"FlipH"!important}.AueIG{width:25px!important;height:24px!important;font-size:24px;color:#fff!important;display:inline-block;float:right;margin:15px 10px 0;vertical-align:top}#zgJkZ,#zHZQI{height:50px;margin:5px 0 0;display:inline-block}#oECFz{width:300px;height:165px;margin:0 auto}#zHZQI{width:223px}#zgJkZ{width:50px}#zHZQI .oECFzColor{margin:6px 3px 1px;display:inline-block;width:22px;height:22px;border-radius:17px}#zgJkZ .oECFzColor{margin:6px 3px 1px;display:inline-block;border:1px solid #fff;width:50px;height:50px;border-radius:50px;color:#fff!important;font-size:16px;padding:15px 12px}.nrnYA,h3.zStNQ{height:1px!important;width:1px!important;display:block!important}h3.zStNQ{margin:0!important;padding:0!important;font-size:1px!important;font-weight:400!important}.ORmKP,.nrnYA{background-color:#000!important;color:#fff!important;font-size:16px!important;font-family:arial!important}.nrnYA{position:absolute!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;margin:-1px!important;z-index:9999999988!important;border:0!important}.nrnYA:focus{clip:auto!important;height:auto!important;width:auto!important;overflow:visible!important;margin:0!important;padding:0 10px!important}.ORmKP{position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;z-index:9999999988;border:0;display:block}.ORmKP:focus{clip:auto!important;height:auto!important;width:auto!important;overflow:visible!important;margin:0!important;padding:0 10px!important}.ORmKP:active,.ORmKP:target{z-index:9999999988;top:auto;clip:auto;height:auto;width:auto;overflow:visible;margin:0;padding:0 10px}.WfBug{padding:0!important;margin:0!important;border:none!important}.ZWDCr,.vnbtL{overflow:hidden;border:0;background-color:#000!important;color:#fff!important;font-size:16px!important;display:block;position:absolute;clip:rect(0 0 0 0)}.vnbtL{font-family:arial!important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;display:block;z-index:9999999988}.vnbtL:focus{clip:auto!important;height:auto!important;width:auto!important;overflow:visible!important;margin:0!important;z-index:9999999988!important;padding:0 10px!important;top:auto!important}.vnbtL:active,.vnbtL:target{clip:auto;height:auto;width:auto;overflow:visible;margin:0;z-index:9999999988;top:auto}.ZWDCr:focus, .ZWDCr:focus-within{clip:auto !important;height:auto !important;width:auto !important;overflow:visible !important;margin:0 !important;padding:0 10px !important;}.ZWDCr:active{z-index:9999999988;top:auto}#QSgtZ :focus{outline:#888 solid 1px!important}#eHFXi{background-color:#333;height:226px;width:100%!important;position:fixed;text-align:center;padding:5px;margin:0 auto;bottom:0;z-index:999999999}#eHFXi #LXBSB{text-align:center;margin:auto;width:663px;background:#fff}#eHFXi #ncSEc{min-height:0;height:40px!important;margin:5px;padding:5px;width:96.5%;font:1em/1.5 Verdana,Sans-Serif;background:#fff;border:1px solid #333;float:left;-moz-border-radius:5px;-webkit-border-radius:5px;display:block;color:#000}#eHFXi #nSibfboard{display:inline-block;margin:0;padding:0;vertical-align:top;list-style:none}#eHFXi div[role=button]{font-size:14px;position:relative;float:left;margin:0 5px 5px 0;width:30px;height:30px;line-height:40px;text-align:center;background:#fff;border:1px solid #222;-moz-border-radius:5px;-webkit-border-radius:5px;color:#000!important}#nSibfboard div[role=button].CRRSy,#eHFXi #nSibfboard div[role=button].QhFEO,#eHFXi .geviL{width:70px!important}#nSibfboard div[role=button]:hover,#eHFXi #nSibfboard div[role=button]:focus{position:relative;top:1px;left:1px;border-color:#e5e5e5;cursor:pointer}#eHFXi div[role=button].TZDKMpslock,div[role=button].IbElw,div[role=button].QhFEO{clear:left}#eHFXi #nSibfboard div[role=button].TZDKMpslock{width:80px}#eHFXi #nSibfboard div[role=button].FiIOl{width:55px}#eHFXi #nSibfboard div[role=button].IbElw{width:95px}#eHFXi #nSibfboard div[role=button].TtZzB{width:77px}#eHFXi .aSmgH{margin-right:0}#eHFXi #KJMJHLang div[role=button].jSpEZ{height:30px;width:93px!important;display:block}#eHFXi #nSibfboard div[role=button].PkuNm{clear:left;width:548px}#wJebo,#HPZmg{border:1px solid #fff;height:100px;width:48%;margin:0 3px}#eHFXi .NLWxW{display:none}#eHFXi #KJMJHLang{display:inline-block;height:185px;width:95px!important}[id^=DRXXH]{width:20px;height:20px;position:absolute;z-index:99999}#pJIrA{height:auto}#PFaFV{position:absolute!important;top:0!important;right:0!important;padding:10px!important;font-size:16px!important;width:80%}#ZJSXb,#nztwL{font-size:14px;padding:5px;color:#fff!important}#WBNCR{text-align:center!important;width:19%!important;height:30px!important;margin-top:20px!important;position:absolute!important;top:0!important;left:0!important}#syeKB{width:300px;position:relative!important;margin:auto}#wJebo,#HPZmg{display:inline-block!important;color:#fff!important}#ZJSXb{z-index:2147483647!important}#nztwL{display:inline!important}.Awzjy{width:36px;height:36px;display:inline-block!important;margin:14px 5px 0 0!important;float:right;line-height:64px}.Awzjy img{width:36px;height:36px}#GRwhC{position:fixed!important;top:5px;right:5px;width:320px;z-index:9999999;background-color:#0288D1;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.85);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.85);box-shadow:0 0 2px 0 rgba(50,50,50,.85);padding:0 0 6px}#GRwhC *{box-sizing:border-box}#sAnbY{display:block;width:320px;height:30px}#GRwhC .yukgZ{display:inline-block!important;float:right;width:25px;height:25px;color:#fff!important;padding:5px;font-size:16px!important}#GRwhC #aWgWO h3,#GRwhC #aWgWO p{width:100%!important;margin:0!important;display:inline-block!important;font-size:16px!important}#GRwhC #hayOK{text-align:right;float:right!important;display:inline-block!important;width:30px;height:30px;padding:6px}#GRwhC #SLDoH{font-size:16px!important;display:inline-block!important;width:170px!important;height:35px;border:none;padding:0 5px}#GRwhC select{font-size:16px!important;display:inline-block!important;width:80px;height:30px;border:none;opacity:1!important}#GRwhC #hayOK img{display:inline-block!important}#GRwhC #iCVuF{background-color:#fff;height:35px;display:inline-block;width:310px!important;padding:0 5px;margin:0 5px}#GRwhC #aWgWO{width:310px;margin:5px;background-color:#fff}#GRwhC #aWgWO h3{padding:5px 0;font-weight:bolder;color:#000!important;float:right}#GRwhC #aWgWO p{padding:0;color:#000!important}#GRwhC h2{font-size:16px!important;padding:5px;color:#fff!important;display:inline-block!important;width:250px!important;float:left;margin:0!important}#GRwhC a{color:#00f!important;display:inline-block}#GRwhC hr{border:1px solid #ccc!important;margin:0!important}#aWgWOImgWrap{display:inline-block;width:15%;vertical-align:top;padding:5px;margin:15% auto 0}#aWgWOImgWrap img{width:40px;height:40px}#KJMJHvikiResultsCloseBtn{text-align:right;height:25px}#aWgWOCloseBtn{display:inline-block!important;width:25px;height:25px;color:#000!important;padding:5px;font-size:16px!important}#aWgWOTextWrap .companyName{float:right;margin:5px 0}#aWgWOTextWrap{display:inline-block;width:80%}#PSniF{width:320px;height:85px;background-color:#EFEFEF}#osLFe{width:320px;height:65px;padding-top:16px;background-color:#EFEFEF}#LNHvo{font-weight:400;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px 2px 2px 2px;border:0 solid #000;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75)}#YhDtt{width:320px;height:35px;background-color:#fff;box-shadow:inset 0 0 10px rgba(180,180,180,.5)}#bnKlS,#LAIbg{margin:0 10px;font-size:16px;font-weight:400;display:block;width:300px;color:#fff;height:30px;padding-top:7px;text-align:center}#JPJBz{height:444px}#LNHvo{font-size:19px;color:#fff!important;border-top:1px solid #fff;border-bottom:1px solid #fff;padding:0 10px;background-color:#0288D1;width:300px;margin:auto;line-height:50px;height:50px;text-align:center!important;position:relative!important}#IFEiM{background-color:#0288D1;width:320px;height:115px;padding-top:33px}#LNHvo img{max-width:none;min-width:0;display:inline-block;width:30px;line-height:50px;padding-top:12px;-moz-transform:scaleX(-1)!important;-o-transform:scaleX(-1)!important;-webkit-transform:scaleX(-1)!important;transform:scaleX(-1)!important;filter:FlipH!important;-ms-filter:"FlipH"!important}#HxpCr{height:410px;width:338px;overflow-x:hidden;overflow-y:visible;font-size:14px;background-color:#fff}#HxpCr .KSsgr{width:318px}#HxpCr .KSsgr .VDmCM{border-bottom:1px solid #ccc;padding:5px;font-size:14px;color:#000!important;position:relative!important}#HxpCr .KSsgr .Zrljr{display:none;padding:5px;font-size:14px;border-bottom:1px solid #ccc;color:#000!important}#HxpCr .KSsgr .Zrljr *{color:#000!important}#HxpCr .KSsgr .VDmCM img{min-width:0;max-width:none;width:15px;position:absolute!important;right:7px;top:10px}#HxpCr .KSsgr .VDmCM>div{width:calc(100% - 20px)}#gAoCt{position:relative!important;width:320px;height:115px}#gAoCt #YIRzs{position:absolute!important;margin:10px;bottom:0;color:#fff!important;font-size:16px;left:0}#YFJzt,#yCrCd{height:50px;width:49%;padding:12px 10px;font-size:18px;background-color:#0288D1!important;cursor:pointer}#tgGWn{width:320px;height:30px;background-color:#EEE;padding:5px 10px;color:#000!important}#DmrXy,#hYHUX{display:inline!important}#IULPc{width:320px;height:325px;padding:3px 10px;overflow:hidden;background-color:#fff}#TwIfU{width:320px;height:50px;background-color:#0288D1!important}#yCrCd{display:inline-block;text-align:left;color:#fff!important}#YFJzt{display:inline-block;text-align:right;color:#fff!important}#RmKVO{height:85px;width:300px;padding:10px 10px 0;font-size:14px}#PRxAh{overflow:hidden;width:1820px;margin-right:22px!important;padding-left:23px;font-size:14px}#PRxAh .mJoej{width:245px;height:180px;display:inline-block;margin:0 5px;float:left}#PRxAh .mJoej .wxYqU{width:245px;height:75px;background-color:#03A9F3;position:relative!important;font-size:14px;border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0}#PRxAh .mJoej[cykxa="2"],#PRxAh .mJoej[cykxa="4"]{display:none}#PRxAh .mJoej .wxYqU .YrOTA{position:absolute!important;right:10px;top:10px;width:20px;height:20px;display:block;text-decoration:underline;color:#fff!important;font-size:14px}#PRxAh .mJoej .wxYqU .fEqjh{display:block;text-decoration:underline;color:#fff!important;width:100%;height:100%;padding:10px 25px 0 15px;font-size:14px}#PRxAh .mJoej .EbTkc{width:245px;height:90px;background-color:#fff;-webkit-box-shadow:0 1px 5px -1px rgba(89,89,89,1);-moz-box-shadow:0 1px 5px -1px rgba(89,89,89,1);box-shadow:0 1px 5px -1px rgba(89,89,89,1);padding:20px 40px 0;font-size:14px;border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px}#PRxAh .mJoej .EbTkc [class^=kkeiq]{width:50px;height:50px;-webkit-box-shadow:0 1px 5px -1px rgba(89,89,89,1);-moz-box-shadow:0 1px 5px -1px rgba(89,89,89,1);box-shadow:0 1px 5px -1px rgba(89,89,89,1);display:inline-block;font-size:14px;margin:2px;text-align:center}#PRxAh .mJoej .EbTkc input[type=text],#PRxAh .mJoej .EbTkc textarea{border:none;border-bottom:1px solid #0288D1;width:210px;margin:0 -24px;font-size:14px}#PRxAh .mJoej .EbTkc .uPqNm{position:relative!important;margin:20px 0}#PRxAh .mJoej .EbTkc .uPqNm label{position:absolute!important;font-size:14px;margin-right:-20px}#RFjdP,#andiasd,.BohAM{position:relative!important}#PRxAh .mJoej .EbTkc .uPqNm input[type=text]{height:20px;font-size:14px}#PRxAh .mJoej .EbTkc .uPqNm textarea{min-height:40px;max-height:40px;font-size:14px}#wrapNavigateWithLetters *{line-height:100%;font-family:arial!important}.KRUNI{width:100%;text-align:left;font-size:14px;margin-right:20px!important}.hYaIS{font-size:14px!important;color:red!important;width:100%}#PRxAh .mJoej .EbTkc .KRUNI.veZPc{color:red!important;font-size:14px}#PRxAh .mJoej .EbTkc [aria-checked=true]{background-color:#03A9F4!important;color:#fff!important;transition:color .35s,background-color .35s}#MvQtQ,#wrapNavigateWithLettersbg{background-color:rgba(0,0,0,.65);z-index:9999999992;height:100%;width:100%}#RFjdP{overflow:hidden;display:block}#xPEGE,#JPRSV,#sDZbX,#hKyOI,#NWNWn,#MvQtQ,#cqUuD #YlCpH,#wrapNavigateWithLettersbg{position:absolute!important}[id^=QSgtZ]{width:339px;height:100%;overflow-y:scroll;overflow-x:hidden}[dztLI]:focus:after,[dztLI]:hover:after{left:auto}#loadAndiSystem{width:338px;height:640px;direction:ltr}#MvQtQ{top:30px}#wrapNavigateWithLetters{position:fixed!important;margin:25px auto;z-index:9999999999;border-radius:2px;color:#000;font-family:arial!important}#wrapNavigateWithLetters #NWNWntext ul li{padding:0 35px 0 0;color:#000;font-size:16px}#wrapNavigateWithLetters #NWNWntext{padding:10px 20% 0;text-align:left;font-size:16px;overflow:auto}#wrapNavigateWithLetters #NWNWntext ul{list-style-type:circle;list-style-position:inside}#NavigateWithLettersDonshowanymore{cursor:pointer;width:340px;margin:40px auto;background-color:#0288D1;padding:10px;border:1px solid #888;left:30px;font-size:20px;border-radius:5px}#NWNWn,#NWNWn #NWNWntext{background-color:rgba(255,255,255,1);border-radius:2px;z-index:9999999999}#wrapNavigateWithLetters .andicloseSaveOption{padding:5px;position:absolute!important;font-size:35px;cursor:pointer}#dXLgH,#andiuserheaderloginconnect{height:30px;color:#fff;padding:4px 0;display:inline-block}#NWNWn{margin:auto;width:296px;min-height:175px;left:4px;right:4px;top:100px}#NWNWn #NWNWntext{margin:30px auto 0;width:237px}#ZWsSL{text-align:center;margin-top:10px}#andiaddwhyoff,#rTtIv,#YetWN,#andidontaddwhyoff,#rOELB,#KNOZd,#andisavenewsetting,#andiupdateexiestingsetting{display:inline-block;width:120px;height:30px;text-align:center;padding-top:10px}#choosewhyoff{width:245px;text-align:center;margin:0 auto;border:1px solid #888;border-radius:2px}#andiloginsmallmenu,#lugTJ{display:inline-block;width:100%;height:100%}#dXLgH{width:70px}#andiuserheaderloginconnect{width:90px}#xPEGE.vKDQY #ZFdLI,#JPRSV.vKDQY #BeDAB,#ZFdLI:focus,#ZFdLI:hover,#BeDAB:focus,#BeDAB:hover{fill:#03A9F4}#YlCpH:hover~#sDZbX #cGvHB,#YlCpH:hover~#sDZbX #ZFdLI,#YlCpH:hover~#sDZbX #BeDAB,#pgvCh:hover~#sDZbX #cGvHB,#pgvCh:hover~#sDZbX #ZFdLI,#pgvCh:hover~#sDZbX #BeDAB{color:#03A9F4!important;fill:#03A9F4;font-weight:700}#cqUuD{position:relative!important;width:201px;height:95px;display:inline-block;font-size:14px;margin-top:7px;margin-right:7px;box-shadow:0 0 10px rgba(180,180,180,.5) !important;}#cqUuD svg{margin:0;padding:0}#cqUuD #YlCpH{bottom:10px;left:10px}#sDZbX{width:70%;bottom:10px;right:5px}#xPEGE,#JPRSV,#sDZbX svg{width:20px;height:20px;margin:0;padding:0;display:inline-block}#JPRSV{bottom:4px;left:5px}#xPEGE{bottom:4px;right:2px}#JJZzG{width:60%;margin:auto;position:relative!important}#cGvHB{margin:0 auto -11px;width:45px;text-align:center;cursor:pointer}#sjedp{background-color:#7d7d7d;width:100%;height:3px;margin:1px auto}#LMkvg{margin:0 auto 7px;width:3px;background-color:#7d7d7d;height:10px}div#sDZbX *{direction:ltr}#hKyOI{top:-20px;left:49%;display:none}#qlMvI{width:3px;height:10px;background-color:#F3427E}#xPEGE.vKDQY~#JJZzG #sjedp,#xPEGE:focus~#JJZzG #sjedp,#xPEGE:hover~#JJZzG #sjedp,#JPRSV.vKDQY~#JJZzG #sjedp,#JPRSV:focus~#JJZzG #sjedp,#JPRSV:hover~#JJZzG #sjedp{background-color:#03A9F4}#XjgPc{color:#F3427E!important;margin:0 -30%}#cGvHB:focus,#cGvHB:hover{color:#03A9F4!important;font-weight:bolder!important}.vjEnr [role=button]:focus,.vjEnr [role=button]:hover,.vjEnr input:focus,.vjEnr input:hover,.vjEnr select:focus,.vjEnr select:hover{outline:#fff solid 1px!important}.LAsQk .QybqI{border-radius:2px}.IdrLU .joMhk .xJGcA{color:#fff!important;background-color:#03A9F4!important}.IdrLU .joMhk .xJGcA>p{color:#fff!important}.IdrLU .joMhk .xJGcA svg{fill:#000}#yIiKG .RRnya{display:none!important}#yIiKG .xJGcA .RRnya,#RFjdP .tHEWd{color:#fff;position:absolute!important;bottom:10px!important;display:block!important}#yIiKG .xJGcA .RRnya{border:1px solid #fff!important;border-radius:35px!important;right:10px!important;width:25px;height:25px;padding-top:3px;padding-right:2px;padding-left:7px}#RFjdP .tHEWd{background-color:#03A9F4;right:0!important;width:46px;-webkit-border-top-left-radius:2px;-webkit-border-bottom-left-radius:2px;-moz-border-radius-topleft:2px;-moz-border-radius-bottomleft:2px;border-top-left-radius:2px;border-bottom-left-radius:2px;line-height:15px;font-size:14px!important;text-align:center}#kTUtq,#andiSetting,#andioffthissitetext,#andioffthissitewrapswitch,#andisetlangdefualt,#andisetlangtext,#dontrunonthissite{display:inline-block}#andiSetting{background-repeat:no-repeat;background-position:center;background-size:100%;width:40px;height:25px;-moz-transform:scaleX(-1)!important;-o-transform:scaleX(-1)!important;-webkit-transform:scaleX(-1)!important;transform:scaleX(-1)!important;filter:FlipH!important;-ms-filter:"FlipH"!important}#NWNWn :focus{outline:#000 solid 1px}img[src*="cVVzR.png"]{width:320px;height:115px}#KJMJHtab1middleHelp{display:none;width:320px;height:445px;margin:0;text-align:left!important;position:fixed!important;top:195px;z-index:99999999999;left:0;overflow:hidden;background:#fff}#KJMJHtab1middleHelp .TUAHelpchangetolivetext,#KJMJHtab1middleHelp .TUAHelpskipbtn{text-align:left;background:#fff!important;color:#000!important;font-size:16px;font-family:Arial;margin:2px}#KJMJHtab1middleHelp .TUAHelpskipbtn{position:absolute!important;top:3px;right:3px;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;font-weight:700;padding:3px 10px;text-decoration:none}#KJMJHtab1middleHelp .TUAHelpimg img{width:320px!important;height:445px!important}#KJMJHtab1SmalleHelp .TUAHelpskipbtn,#KJMJHtab1middleHelp .TUAHelpchangetolivetext{position:absolute!important;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-webkit-border-radius:3px;right:3px;font-weight:700;padding:3px 10px;text-decoration:none}#KJMJHtab1middleHelp .TUAHelpchangetolivetext{cursor:pointer;bottom:3px;-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-border-radius:3px;border-radius:3px}#KJMJHtab1SmalleHelp{display:none;width:306px;height:130px;margin:6px 4px 0;text-align:left!important;position:relative!important;z-index:99999999999;background:#fff;box-shadow:0 0 10px rgba(180,180,180,.5)}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext,#KJMJHtab1SmalleHelp .TUAHelpskipbtn{text-align:left;background:#fff!important;color:#000!important;font-size:16px;margin:2px}#KJMJHtab1SmalleHelp .TUAHelpskipbtn{top:3px;-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-border-radius:3px;border-radius:3px;font-family:Arial;display:none}#KJMJHtab1LargeHelp .TUAHelpskipbtn,#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext{-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);font-family:Arial;position:absolute!important}#KJMJHtab1SmalleHelp .TUAHelpimg img{width:306px!important;height:100px!important}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext{cursor:pointer;bottom:3px;right:3px;-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;font-weight:700;padding:3px 10px;text-decoration:none}#KJMJHtab1LargeHelp{display:none;width:320px;height:500px;text-align:left!important;position:fixed!important;z-index:99999999999;background:#fff;box-shadow:0 0 10px rgba(180,180,180,.5);left:0;top:0}#KJMJHtab1LargeHelp #BEMFUHelp{width:320px;height:30px;background-color:#0288D1}#KJMJHtab1LargeHelp #TUAcloseHelp{float:right;display:none}#KJMJHtab1LargeHelp #TUAcloseHelp input{width:20px;height:20px;padding:3px 3px 0}#KJMJHtab1LargeHelp #GFcVT{width:320px;height:35px;background-color:#757575;color:#fff!important;position:absolute;bottom:0}#KJMJHtab1LargeHelp #GFcVT a{font-weight:400;font-style:normal;font-size:14px;line-height:35px;color:#fff!important}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext,#KJMJHtab1LargeHelp .TUAHelpskipbtn{right:3px;background:#fff!important;color:#000!important;-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);font-size:16px;font-weight:700;padding:1px 5px;text-decoration:none;margin:2px;text-align:left}#KJMJHtab1LargeHelp .TUAHelpskipbtn{top:3px;box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-moz-border-radius:1px;-webkit-border-radius:1px;border-radius:1px;display:none}#KJMJHtab1LargeHelp .TUAHelpimg img{width:320px!important;height:445px!important}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext{cursor:pointer;position:absolute!important;bottom:38px;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-moz-border-radius:1px;-webkit-border-radius:1px;border-radius:1px;font-family:Arial}#VbcHu :focus,#BEMFU :focus{outline:#fff solid 2px!important}#NWNWn .andicloseSaveOption{padding:5px;position:absolute!important;right:5px}#andisetnametoset{direction:ltr;border-bottom:1px solid #888;border-radius:2px;font-size:14px}#dontrunonthissite{padding-top:4px}#chooseLang{border-radius:0;margin:2px auto;direction:rtl;border-bottom:1px solid #000;width:100%;padding:0;height:35px;background-color:transparent!important}#chooseLang option{color:#000;background-color:#fff}#changeLang{width:230px;margin:0 auto;border:1px solid #888;border-radius:5px}#vbCoe .ltsXQ,#ratYL .ltsXQ,#oGNab .ltsXQ,#yIiKG .ltsXQ,#gAoCt,.Awzjy,.KaxwEspace{background-size:100% 100%;background-repeat:no-repeat}#andiwrapsmallmenusetting2{position:absolute!important;width:230px;height:350px;background-color:#fff;top:35px;left:5px;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75)}#andiwrapsmallmenusetting2 hr{border:1px solid #999}#andiwrapsmallmenusetting2>div{width:230px;height:48px;line-height:48px;padding:10px;text-align:left}#andioffthissitetext{font-size:14px}#andisetlangtext{line-height:48px;font-size:14px}#andisetlangdefualt{float:right;line-height:48px;font-size:14px}#andioffthissitewrapswitch{position:relative!important;margin:3px 7px;width:30px;float:right}#andioffthissitewrapswitchpart1{position:absolute!important;right:-5px;top:2px;width:33px;height:14px;background:inherit;background-color:rgba(0,150,136,.498039215686275);border:none;border-radius:7px;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none}#highContrastMenu img{width:17px;margin:6px}#andioffthissitewrapswitchpart2{position:absolute!important;right:-5px;top:1px;border-radius:20px;width:17px;height:17px;background-color:green}#wrapMenuLang{width:320px;height:605px;position:absolute!important;top:0;background-color:#fff;z-index:9999999999}#andiMenuLangTopBar{width:320px;height:30px;background-color:#0288D1}#andiMenuLangMiddleBarPart1{width:320px;height:64px;background-color:#03A9F4!important;z-index:99999999999;-webkit-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);-moz-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);box-shadow:0 4px 5px -4px rgba(0,0,0,.7)}.andiMenuLangMiddleBarBackBtn{width:25px!important;height:24px!important;font-size:24px!important;color:#fff!important;display:inline-block;float:left;vertical-align:top;margin:20px 10px 5px!important}#andiMenuLangMiddleBarHeading{float:left;height:24px!important;font-size:16px;color:#fff!important;font-weight:400;line-height:64px}#wrapMenuLang .langChoose,#wrapMenuLang .langComeSoon,.andiMenuLangMiddleBarRadioBtn{line-height:50px!important;font-size:16px!important}.andiMenuLangMiddleBarRadioBtn{width:100%!important;height:50px!important;display:block;border-bottom:1px solid #888!important;text-align:left!important;padding:0 12px!important;margin:0!important}#wrapMenuLang .langComeSoon{float:right;color:#00f}#wrapMenuLang .langChoose{float:right;color:#00f;margin:0!important}.andiMenuLangMiddleBarWrapLang{padding:5px!important;position:relative!important}#andiMenuLangMiddleBarSaveBtn{background-color:#4D4D4D;color:#fff;font-weight:bolder;position:absolute!important;bottom:0;width:320px;height:50px;line-height:50px;left:0;text-align:center}#andiMenuLangMiddleBarWrapLang :focus,#andiwrapsmallmenusetting2 :focus{outline:#888 solid 3px!important}#andiCloseSaveBtn{width:50%;text-align:center;margin:8px auto 0;height:30px;padding-top:4px;border:1px solid #888;border-radius:5px}.IoVaWskipArea{font-family:arial!important;bottom:0;position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;z-index:9999999988;border:0;background-color:#000!important;color:#fff!important;font-size:16px!important;display:block}.IoVaWskipArea:focus{clip:auto;height:auto;width:auto;overflow:visible;margin:0;padding:0 10px}.Bvuob{background-color:rgba(0,0,0,.7);z-index:9999999;position:fixed}.HBQgA{position:relative;background-color:#fff;z-index:9999999999999;overflow:auto}[href="#KKolO"]{position:fixed!important;bottom:0!important}body.ANDIhighlight-is-active{pointer-events:none}.ANDIhighlight:hover,.ANDIhighlightFocus{box-shadow:0 0 0 99999px rgba(0,0,0,.35)!important;position:relative;z-index:9999;transition:box-shadow .65s}div.AueIG img{background-color:#03A9F4!important}#jilVt #Layer_1 path{fill:#fff!important}.rashe{position:relative;text-decoration:underline;text-decoration-style:double!important;text-decoration-color:#1DA1F2}.rashe:focus:after,.rashe:hover:after{display:block;left:-50%;position:absolute;z-index:9999;background-color:#000;margin:-16px 0 0;color:#fff;padding:3px;content:attr(aria-label)}#BrowerNavigationBar,#BrowerNavigationTab{background-color:#0288D1;height:30px;color:#fff}#BrowerNavigationBar>div,#BrowerNavigationClose,#BrowerNavigationTab{width:48px;margin:0;display:inline-block}[ScJKeImg]:focus,[ScJKeImg]:hover{transform:scale(1.3);transition:transform .5s}div#andiTestModeAlert { font-size: 15px; line-height: 120%; }#ZxBGV{min-width:550px;line-height:105%!important;position:fixed!important;color:#fff!important;background-color:#000!important;font-family:arial!important;z-index:9999999999!important;-webkit-border-radius:2px!important;-moz-border-radius:2px!important;border-radius:2px!important;-webkit-transition:all 50ms ease-in-out!important;-moz-transition:all 50ms ease-in-out!important;-ms-transition:all 50ms ease-in-out!important;-o-transition:all 50ms ease-in-out!important;transition:all 50ms ease-in-out!important;margin:20px 0 0}#wrapBrowerNavigation{width:100%;height:60px;position:fixed;top:0;z-index:999999999}#BrowerNavigationBar{width:100%;direction:ltr}#BrowerNavigationBar>div{float:left;height:30px;vertical-align:top}#BrowerNavigationTab{padding:6px 13px 0;top:30px;position:fixed;left:0}#BrowerNavigationTab i{margin:0 13px}#BrowerNavigationBack,#BrowerNavigationNext,#BrowerNavigationOpenSetting,#BrowerNavigationReload{padding:6px 13px 0}#BrowerNavigationURL{width:375px!important;height:30px}#BrowerNavigationURL input{width:250px!important;color:#000!important;height:25px;display:inline-block}#BrowerNavigationURL div{width:48px!important;color:#fff;margin:0 10px;display:inline-block}#BrowerNavigationClose{padding:6px 13px 0;float:right!important}#canvasLayers{opacity:1}#UACmouse{font-size:30px;text-shadow:1px 1px 5px #555;margin-top:0;position:fixed;z-index:999999999999999;width:13px;height:25px}#UAwrapCameraSetttingdetials{overflow:hidden;vertical-align:top;width:calc(100% - 330px);display:inline-block}#UAwrapCameraSetttingdetials .UAwrapCameraSetttingdetialsinner [class^=level]{overflow:scroll;overflow-y:scroll;overflow-x:hidden;padding:20px;vertical-align:top;display:inline-block;height:100%}#UAwrapCameraSetttingdetials .level2-1 label{width:30%;display:inline-block}#UAwrapCameraSetttingdetials .level2 label{width:48%;display:inline-block}#UAwrapCameraSetttingdetials [class^=level]{position:relative}#UAwrapCameraSetttingdetials [class^=level] h2{font-size:24px;color:#0288D1}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev{position:absolute;bottom:0;width:100%}#UAwrapCameraSetttingdetials .mousemovecrossscreen,#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div,.CameraSetttingEnd{display:inline-block;cursor:pointer;text-align:center;width:100px;height:35px;border-radius:3px;color:#fff}#UAwrapCameraSetttingdetials .CameraSetttingEnd{display:inline-block;cursor:pointer;text-align:center;width:185px!important;height:35px;border-radius:3px;color:#fff;padding:5px;margin:21px calc((100% - 165px)/ 2)}#UAwrapCameraSetttingdetials .mousemovecrossscreen{width:200px;font-size:25px;height:50px;padding:6px;margin:10px calc((100% - 200px)/ 2)}#UAwrapCameraSetttingdetials .cameracheckclick{margin:27%;width:200px;font-size:35px;height:50px}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div.CameraSetttingNextLevel,.CameraSetttingEnd,.mousemovecrossscreen{background-color:#00BFFF}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div.CameraSetttingNextLevel{float:right;margin:0 50px}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div.CameraSetttingbackLevel{background-color:#888!important;margin:0 50px;width:auto!important;padding:5px}#UAwrapCameraSetttingdetials .fa-mouse-pointer,.fa-hand-o-up{text-shadow:1px 1px 5px #555}#UAwrapCameraSetttingdetials .level2-1 .fa-hand-o-up,#UAwrapCameraSetttingdetials .level2-1 .fa-mouse-pointer{font-size:100px!important}#UAwrapCameraSetttingdetials *{box-sizing:border-box;vertical-align:top;direction:ltr;text-align:left;font-size:16px}#wrapCameraSetttingVideo{padding:10% 0 0;position:relative;width:320px;display:inline-block;height:100%}#UAwrapCameraSetttingdetials ol{margin:5px 30px;list-style-type:decimal}#UAwrapCameraSetttingdetials li{list-style-type:decimal}.cameraUAredSquare{background-color:red;width:60px;height:60px;position:fixed;z-index:999999999}#BrowerNavigationScrollDoan,#BrowerNavigationScrollUp{position:fixed;left:0;background-color:rgba(255,255,255,.45)!important}.UAwrapCameraSetttingdetialsinner>div{overflow:hidden!important}#videoCanvas{position:relative!important;z-index:99999999;right:0;bottom:0}#layer2{position:absolute!important;right:0;bottom:0}#wrapCameraSettting h2{margin:0 0 10px;color:#000!important}#cameraOpenContactForm{text-decoration:underline;color:#00f;font-weight:bolder;cursor:pointer}#UACmouseBG{position:absolute;top:0;left:0;background-color:#fff!important}#BrowerNavigationScrollUp{top:calc(80% - 50px)}#BrowerNavigationScrollDoan{top:calc(95% - 50px)}#closeCameraSetting{z-index:999999999999999999;position:absolute;font-size:40px;top:10px;right:10px}#RFjdP .vjEnr{position:fixed!important;bottom:0;top:auto!important}#wraplistvoicecommends,div#changePanelSetting{bottom:0!important;transition:height .25s ease 0s}#TUAreadsAloudWrap{z-index:999999999;width:300px;position:fixed;bottom:0;height:65px;left:calc(50% - 150px);direction:ltr}#TUAreadsAloudmenau [role=button]{width:48px;height:48px;display:inline-block;fill:#fff!important;cursor:pointer}#TUAreadsAloudmenauText{width:100%;height:15px;color:#fff;font-size:16px}.innertexttoread{padding:15px;margin-top:20px}.KJMJHreadsAloudSetting{width:70%;margin:auto}.KJMJHreadsAloudSetting label{display:inline-block;width:90%;font-size:16px;color:#000;font-weight:notmal;margin:5px 0}.KJMJHreadsAloudSetting h3{font-size:24px;text-align:center}.KJMJHreadsAloudSetting p{display:block;font-size:18px}.KJMJHreadsAloudSetting label input{display:inline-block;width:30%;font-size:16px}.KJMJHreadsAloudSetting label span{display:inline-block;width:70%;font-size:16px}.KJMJHreadsAloudSetting .TUAreadsAloudReset{margin:0 5px;text-decoration:underline;font-size:16px;cursor:pointer}.KJMJHreadsAloudSetting .IGuDeExmp{text-align:center;cursor:pointer}.TUAhighlight{font-size:24px;outline:#000 solid 1px;color:#000;background-color:#ff0;background-repeat:no-repeat;background-position:center right;background-size:20px;left:0;line-height:120%}.UAarrowAboveNumbersWrap{position:relative;display:inline-block;line-height:170%}.UAarrowAboveNumbers{position:absolute;top:-5px;width:30px;height:10px;background-size:100% 100%;background-repeat:no-repeat}#activeUserChooseSet,#loadingBSqsa,#menuMessageAlert,#saveUserChooseSet,div#changePanelSetting{position:absolute!important}div#changePanelSetting{width:100%;height:0}.spaceFnDownSave{color:red!important;font-weight:700!important;font-size:15px!important}#CrXug+.spaceFnDownSave{width:50%!important}#activeUserChooseSet,#saveUserChooseSet{width:40px;height:40px;border-radius:20px}#menuMessageAlert .closemenuMessageAlertAndiBtn{background-color:#03A9F3;color:#fff;text-align:center;margin:10px;padding:10px;border-radius:2px}#menuMessageAlert .closemenuMessageAlert:focus{outline:#fff solid 2px!important}#menuMessageAlert .closemenuMessageAlert{right:-20px;top:-20px;position:absolute!important;color:#fff;background-color:#000;padding:20px;font-size:25px}#VChelpCloseBtn,#panelToshowMainContentCloseBtn{position:fixed!important;z-index:99999999999999999999999}#menuMessageAlert h3{font-size:20px;text-align:center;padding:30px 0}#menuMessageAlert H4{font-size:15px;text-align:center;padding:20px 0}#menuMessageAlert .wrapText{padding:15px;height:100%;background-color:#fff;overflow:auto;direction:ltr}#menuMessageAlert{z-index:999999999;left:0;top:0;-webkit-box-shadow:0 0 0 9999px rgba(0,0,0,.75)!important;-moz-box-shadow:0 0 0 9999px rgba(0,0,0,.75)!important;box-shadow:0 0 0 9999px rgba(0,0,0,.75)!important;height:auto!important}.UAtextToShow:nth-child(3){padding-top:40px}#TUAshowMainContentWrap svg{width:40px}#TUAshowMainContentWrap{box-sizing:border-box;-webkit-box-shadow:0 0 6px 0 #000;box-shadow:0 0 6px 0 #000;z-index:999999999999;width:80px;right:10px;padding-top:5px;position:fixed;bottom:10px;background-color:#fff;height:90px;text-align:center}#TUAshowMainContentWrap p{margin:0;text-align:center;font-size:15px!important;line-height:16px!important}#TUAshowMainContentmenu [role=button]{width:48px;display:inline-block}#TUAreadsAloudmenau{text-align:center;width:300px;border:1px solid #fff;height:65px;margin:0 auto;background-color:#0288D1}#panelToshowMainContentCloseBtn{cursor:pointer;font-weight:bolder;margin:9px;font-size:30px;background-color:#000;color:#fff;padding:5px}#panelToShowText *{box-sizing:border-box}#panelToShowText{box-sizing:border-box;padding:15px;z-index:99999999;position:fixed;top:0;background-color:#fff;color:#000;font-size:16px;overflow:scroll;-webkit-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);-moz-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);box-shadow:0 0 5px 99999px rgba(0,0,0,.62);direction:ltr}.UAtextToShow{margin:10px;font-size:24px;line-height:120%;text-align:left}.wrapText img{text-align:center;margin:0 auto;display:block}#UserChooseSetAddMoreOption{position:relative!important;width:320px;margin:auto;background-color:#fff;height:140px}#UserChooseSetAddMoreOptionText{color:#000;TEXT-ALIGN:center;padding:25px 0 0}#UserChooseSetAddMoreOptionBtn{display:block;width:150px;text-align:center;border:1px solid #1689CE!important;margin:13px auto 0;padding:5px}#UserChooseSetAddMoreOptionBtn span{color:#1689CE;display:inline-block;margin:0 5px}div#wrapsetBtn [role=button]{display:inline-block;height:32px;width:auto;padding:6px 10px 0;margin:5px;color:#fff;background-color:#A1A1A1;border-radius:20px;transition:background-color .3s linear}div#wrapsetBtn *{display:inline-block!important}div#wrapsetBtn [role=button] p{font-size:13px;color:#fff;display:inline-block}div#wrapsetBtn [role=button] svg{height:20px!important;margin:0 3px 3px;fill:#fff;display:inline-block}.saveUserChooseSetLoadAnimateRightOn{-webkit-animation:rotationRightOn 750ms linear}@-webkit-keyframes rotationRightOn{from{-webkit-transform:rotate(-180deg)}to{-webkit-transform:rotate(-359deg)}}.saveUserChooseSetLoadAnimateLeftOn{-webkit-animation:rotationLeftOn 750ms linear}@-webkit-keyframes rotationLeftOn{from{-webkit-transform:rotate(180deg)}to{-webkit-transform:rotate(359deg)}}.saveUserChooseSetLoadAnimateRightOff{-webkit-animation:rotationRightOff 750ms linear}@-webkit-keyframes rotationRightOff{from{-webkit-transform:rotate(-359deg)}to{-webkit-transform:rotate(-180deg)}}.saveUserChooseSetLoadAnimateLeftOff{-webkit-animation:rotationLeftOff 750ms linear}@-webkit-keyframes rotationLeftOff{from{-webkit-transform:rotate(359deg)}to{-webkit-transform:rotate(180deg)}}#activeUserChooseSet svg:hover,.activeUserChooseSetOn svg{fill:#FC4482!important}#saveUserChooseSet:hover{color:#FC4482!important}#wrapsetBtn [role=button]:hover{background-color:#F98BB0!important}svg#svgreadableFont{height:17px!important}#changePanelSetting #MoexW{height:135px;margin:0 auto;padding-top:10px}#changePanelSetting #WNAYU{width:150px;color:#fff}#wrapOnOffSaveBtn{width:295px;margin:auto}#activeUserChooseSet{background-color:#fff;top:-20px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75);padding:7px 2px}#wrapUserChooseSet{width:320px;margin:auto}#wrappromoText{height:45px;width:295px;margin:auto}#wrapsetBtn{text-align:left;width:295px;margin:0 auto 35px}#saveUserChooseSet{color:#7D7D7D!important;left:0;opacity:0;z-index:-1;background-color:#fff;top:-20px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75);padding:11px 7.5px;font-size:35px}#VChelpInner table td,#VChelpInner table th{font-family:Arial,sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999}div#wrapimgsendformtanks img{margin:29px auto 0}div#wraptextsendformtanks{margin:20px 10px;text-align:center}div#backmainscreensendformtanks{margin:0 auto;width:250px;padding:10px;background-color:#0288D1!important;text-align:center;color:#fff}#VChelpInner table{border-collapse:collapse;border-spacing:0;border-color:#999;margin:0 auto}#VChelpInner table td{color:#444;background-color:#F7FDFA}#VChelpInner table th{font-weight:400;color:#fff;background-color:#26ADE4}#VChelpInner .saveNewVC{cursor:pointer;border:1px solid #26ADE4;background-color:#26ADE4;color:#fff;padding:3px;margin:5px 0;border-radius:2px;width:auto}#VChelp,#VChelpCloseBtn,#wrapActiveAndiFns{background-color:#fff}@media screen and (max-width:767px){#VChelpInner .tg,#VChelpInner .tg col{width:auto!important}#VChelpInner .tg-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:auto 0}}#VChelpCloseBtn{font-weight:bolder;margin:9px;font-size:30px}#VChelp{padding:15px;z-index:99999999;position:fixed;top:0;color:#000;font-size:16px;overflow:scroll;-webkit-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);-moz-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);box-shadow:0 0 5px 99999px rgba(0,0,0,.62);direction:rtl}#VCmessageToUser{z-index:99999999999999999;margin:0 20px;position:fixed;width:250px;top:65%;background-color:rgba(0,0,0,.75);border-radius:5px;color:#fff;padding:5px;word-wrap:break-word}.UAaskNeedUserSetHelp{color:#fff!important;margin-top:6px!important;text-align:left}.UAaskNeedUserSetHelpFns,.UAaskNeedUserSetHelpFns li{color:#fff!important}.UAshowUserSetHelp{margin:2px!important;width:auto!important;padding:7px!important}.wrapUAaskNeedUserSetHelp+#YQger{text-align:right!important;margin-right:23px!important}#KNOZd{display:inline-block;width:120px;text-align:center;height:40px!important;padding:0 5px!important}#changePanelSetting #MoexW{width:95%}#andiupdateexiestingsetting{height:auto}#oECFz .spaceFnDownSave{margin-top:12px}#wrapColorBullsFnDownSave{margin:0!important}#wrapActiveAndiFns{width:300px;font-size:16px;border-radius:2px;direction:ltr;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 2px 0 rgba(0,0,0,.75);box-shadow:0 0 2px 0 rgba(0,0,0,.75)}#wrapActiveAndiFns *{font-size:16px;text-align:left;color:#000;font-family:arial}#wrapActiveAndiFns img{display:inline-block;margin-top:12px;width:40px;height:40px}#wrapActiveAndiFns .ActiveAndiFnsText{width:calc(100% - 45px)!important;display:inline-block;vertical-align:top;padding-top:10px;line-height:120%;margin-bottom:20px}#wrapActiveAndiFns .ActiveAndiFnsBtnsNo,#wrapActiveAndiFns .ActiveAndiFnsBtnsYes,#wrapActiveAndiFns .UAopenProfile{height:40px!important;margin-bottom:10px;padding:8px 0 6px!important;cursor:pointer;box-sizing:border-box;vertical-align:top;text-align:center}#wrapActiveAndiFns .wrapActiveAndiFnsBtns{text-align:center}#wrapActiveAndiFns .ActiveAndiFnsBtnsYes,#wrapActiveAndiFns .UAopenProfile{width:150px!important}#wrapActiveAndiFns .ActiveAndiFnsBtnsNo{border:1px solid #03A9F4}#changePanelSetting .wrapUAaskNeedUserSetHelp1{height:35px;width:100%;background-color:#000;color:#fff;padding:10px;display:inline-block}#changePanelSetting .wrapUAaskNeedUserSetHelp1 .UAaskNeedUserSetHelpArrowUp{height:10px;width:20px;display:inline-block;float:right}#changePanelSetting .wrapUAaskNeedUserSetHelp1 .UAaskNeedUserSetHelpArrowUp img{height:10px;width:20px}#loadingBSqsa .wrapText{padding:0!important;height:100%;background-color:#fff;overflow:auto}#loadingBSqsa{z-index:999999999;left:0;top:0;-webkit-box-shadow:0 0 0 9999px rgba(0,0,0,.75);-moz-box-shadow:0 0 0 9999px rgba(0,0,0,.75);box-shadow:0 0 0 9999px rgba(0,0,0,.75)}.UAaddBtnReadAloud svg{position:absolute;top:0;left:0}.UAaddBtnReadAloud{display:none;width:38px;height:35px;background-color:#0288D1;color:#fff;position:relative;font-size:16px;padding:3px 0}.TUAhighlightEasyRead,.TUAhighlightEasyRead *{font-size:20px!important}.UAeasyReadOn [data-andiallelmwithtext]{line-height:160%}.UAaddBtnReadAloud .setTextState{vertical-align:top;padding:8px 0;display:inline-block;position:absolute;top:0;left:40px}.TUAhighlightEasyRead{outline:#000 solid 1px!important;color:#000!important;background-color:#ff0!important;background-repeat:no-repeat!important;background-position:center left!important;background-size:20px!important}.TUAhighlightEasyRead h1,.TUAhighlightEasyRead h2,.TUAhighlightEasyRead h3,.TUAhighlightEasyRead h4,.TUAhighlightEasyRead h5,.TUAhighlightEasyRead h6{font-size:24px!important}.UAarrowAboveNumbersWrap3:nth-child(even){background-color:red}.UAarrowAboveNumbersWrap3:nth-child(odd){background-color:#ff0}.UAtextToRead{margin:10px}#UAcancelguideVoiceCommends,#UAopenguideVoiceCommends{width:80%!important;border-radius:2px;margin:5px 0!important;display:block;padding:5px}#panelToShowTextCloseBtn{position:fixed;font-weight:bolder;margin:3px;font-size:16px;background-color:#000;color:#fff;padding:5px}#wrapopenguideVoiceCommends{text-align:center}#wrapopenguideVoiceCommends *{text-align:center;font-size:16px}#UAcancelguideVoiceCommends{text-decoration:underline;border:1px solid #0288D1}#menuMessageAlert ol li{list-style-position:outside!important;list-style:decimal;display:list-item;margin:0 10px}#wraplistvoicecommends{height:35px;margin:0 auto;text-align:center;font-size:16px;position:fixed!important;width:480px;z-index:999999999999999999999;left:calc(50% - 240px)}#wraplistvoicecommends *{text-align:left;font-size:16px}#voiceCommendpanel{overflow-x:hidden;overflow-y:scroll}#voiceCommendpanel table{margin:0 auto}#voiceCommendpanel table,#voiceCommendpanel table td,#voiceCommendpanel table th{border:1px solid #fff;border-collapse:collapse;padding:5px}#voiceCommendpanel h3{font-size:24px;margin:10px 5px 5px;color:#0288D1;font-weight:700}#voiceCommendpanel>div>table>tbody>tr>td:nth-child(1) p,#voiceCommendpanel>div>table>tbody>tr>td:nth-child(2) p,#voiceCommendpanel>div>table>tbody>tr>td:nth-child(3) p{color:#0288D1}#voiceCommendpanel table th,#voiceCommendpanel table th *{background-color:#ccc;color:#000}#voiceCommendpanel *{color:#fff}#wraplistvoicecommends .wrapUAaskNeedUserSetHelp2{height:35px;width:300px;background-color:#000;color:#fff;padding:10px;display:inline-block;text-align:center;box-sizing:border-box}#wraplistvoicecommends .wrapUAaskNeedUserSetHelp2 .UAaskNeedUserSetHelpArrowUp{height:10px;width:20px;display:inline-block;float:left}#wraplistvoicecommends .wrapUAaskNeedUserSetHelp2 .UAaskNeedUserSetHelpArrowUp img{height:10px;width:20px}#wraplistvoicecommends #voiceCommendpanel{display:block;width:480px;height:215px;background-color:#000}.ZWDCr.accessibleIframe:focus+iframe{margin-top:-50px}.accessibleIframe:focus+iframe{border:3px solid #0288D1}#wrapinnerHELPbtns{text-align:center}#wrapinnerHELPbtns>div{display:inline-block;box-sizing:border-box;padding:45px 0;width:150px;height:150px;text-align:center;background-color:#26ADE4;color:#fff;font-size:16px;margin:15px;vertical-align:top}#VChelpInner>h2{text-align:center;font-size:26px}#VChelpInner>p{text-align:center;font-size:16px;margin:0}#wrapfocommendslang,#wraprunguideVoiceCommendsHTML,#wraptablefocommends{display:none;opacity:0}#openVChelp{max-width:640px;margin:18px auto 0;padding:4px;box-sizing:border-box;vertical-align:top}#openVChelp span{vertical-align:top;display:inline-block;padding:5px 10px}#setannyanglang{padding-bottom:50px;display:block}#KmZzv{background-color:#000;color:#fff;text-align:center;display:block;font-size:16px;z-index:999999}</style>');
  }
  function andiLoadCssRtl() {
    if (UA1(".UAmaincssrtl") !== null) {
      UA1(".UAmaincssrtl").zOhhK();
    }
    UA1("head").appendHtml('<style class="UAmaincssrtl">#jilVt svg{fill:#7D7D7D}#nztwL,#GRwhC a,#regulationsLink,#regulationsLink2,#regulationsLink3{text-decoration:underline!important}#MbWtY,[andiactivetab=true] path{fill:#fff}#jilVt :first-letter,#eHFXi .ZBzCK{text-transform:uppercase}[role=link],[role=tab],[role=menuitem],[role=button],[tabindex="0"]{cursor:pointer}.YrOTA{display:none!important}#UAnewVertion,#UAnewVertion *,#UAshowInputMessage,#UAshowInputMessage *{text-align:right!important}#xIRDN{-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 2px 0 rgba(0,0,0,.75);box-shadow:0 0 2px 0 rgba(0,0,0,.75);z-index:99999999999999999999999!important}#andiwrapsmallmenusetting2 hr::after,#andiwrapsmallmenusetting2 hr::before{content:\'\'!important}#oAHBI,#ypswI,#yKaGk,#CzFAz{fill:#005A8C}.andiOpenSubMenu{top:0;z-index:9999;width:15px;height:15px;background-color:transparent;border:none;background-repeat:no-repeat;background-size:100% 100%;position:absolute;left:0}#QSgtZ,#tUNGC{max-height:510px!important}#Xyxvy,.Xyxvy{width:30px;height:30px;border-radius:100%;display:block;background-size:cover;background-repeat:no-repeat;-webkit-animation:OHtEQ 1s infinite;-moz-animation:OHtEQ 1s infinite;-ms-animation:OHtEQ 1s infinite;animation:OHtEQ 1s infinite;box-shadow:0 0 0 0 rgba(31,31,31,1)}@-webkit-keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}@-moz-keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}@-ms-keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}@keyframes OHtEQ{to{box-shadow:0 0 0 20px transparent}}#gMhQJ input[type=image],#TZwBB input[type=image]{width:30px;height:30px;padding:6px}#xIRDN{padding:0;text-align:center;background-color:#0a76be}#ADyWm img{width:23px!important}#jilVt{z-index:99999999999999999999999999!important}#jilVt,#jilVt *,#hayOK *,#BCaLN,#BCaLN *,#GRwhC{line-height:20px;font-family:arial!important;background-color:transparent;color:#7C7C7C;position:static!important;margin:0;display:block;outline:0;font-weight:400;border:0;box-sizing:border-box!important;padding:0;vertical-align:top;direction:rtl;z-index:999999999;font-size:16px;text-decoration:none!important;text-align:right}#VbcHu>div>div>div:hover::after,.UAshowTitle[ktjXB]::after{background:#333;top:40px;position:absolute;content:attr(ktjXB);z-index:98;color:#fff}#xIRDN img{width:100%;padding:0;margin:0 !important;height:100%}.TUAmakeBuggerMenu{font-size:24px!important}#VbcHu>div>div>div:hover::after{background:rgba(0,0,0,.8);border-radius:1px;right:17px;padding:5px;max-width:200px!important}#VbcHu,#VbcHu *,#VbcHu>div>div>div:focus,#VbcHu>div>div>div:hover{overflow:visible!important}.UAshowTitle[ktjXB]::after{background:rgba(0,0,0,.8);border-radius:1px;margin-top:5px;padding:5px;width:90px;overflow:visible!important;font-size:16px!important}.UAshowTitleUAshowTitle.KaxwEspace[ktjXB]::after{content:attr(ktjXB);width:90px;z-index:98;top:-40px!important;left:auto!important;position:relative!important}#oECFzNoColor[ktjXB]:focus::after,#oECFzNoColor[ktjXB]:hover::after{content:attr(ktjXB);width:100px;z-index:98;top:40px!important;left:auto!important;position:relative!important;display:block;margin:0 -24px}.UAshowTitle[andifirsttime]::before{width:0;height:0;border-style:solid;border-width:0 100px 100px;border-color:transparent transparent #007bff}[andifirsttime].UAshowTitle:after{background:#333;background:rgba(0,0,0,.8);border-radius:1px;color:#fff;content:attr(andifirsttime)!important;right:17px;margin-top:5px;padding:5px;width:75px;z-index:98;top:40px;position:absolute;white-space:pre-line}#lWMeB:focus,#lWMeB:focus option{}#ADyWm[andifirsttime].UAshowTitle:after,#QlvZw[andifirsttime].UAshowTitle:after{padding:5px!important;z-index:999999999999999999999999!important;content:attr(andifirsttime);right:10px!important}#QlvZw[andifirsttime].UAshowTitle:after{margin-top:5px!important;width:300px!important;top:193px!important;position:fixed!important;left:auto}#ADyWm[andifirsttime].UAshowTitle:after{margin-top:5px!important;width:300px!important;top:97px!important;position:fixed!important;white-space:pre-line!important;text-align:right!important}#VbcHu.UAshowTitle[andifirsttime]:after{content:attr(andifirsttime);white-space:pre!important}#VbcHu>div>div>div[andifirsttime].UAshowTitle:after{background:#333;background:rgba(0,0,0,.8);border-radius:1px;color:#fff;content:attr(andifirsttime)!important;right:10px!important;margin-top:5px;padding:5px;width:auto;z-index:98;top:40px;position:absolute;overflow:visible}#JlUMY:focus:after,#JlUMY:hover:after{left:17px!important}#iLSlI img,#fjaun img{margin:8px auto;vertical-align:top;width:16px;height:16px}#jilVt{width:320px!important;direction:rtl;position:fixed!important;overflow:hidden!important;background-color:#EFEFEF;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75)}#LNHvo,#PcvgW,#mvutM{-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75)}#jilVt [role=button]{cursor:pointer}#SQoLG{position:absolute!important;width:320px;height:100%;background:rgba(147,206,222,1);background:-moz-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0,rgba(147,206,222,1)),color-stop(41%,rgba(117,189,209,1)),color-stop(100%,rgba(21,137,206,1)));background:-webkit-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:-o-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:-ms-linear-gradient(top,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);background:linear-gradient(to bottom,rgba(147,206,222,1) 0,rgba(117,189,209,1) 41%,rgba(21,137,206,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#93cede\',  endColorstr=\'#1589ce\',  GradientType=0 );z-index:9999999999}#SQoLG *{color:#fff;font-size:16px}#SQoLGBigImgText{padding:20px 5px;font-size:14px;color:#03A9F5!important;background:#fff}[href="//www.user-a.co.il/regulations"]{color:#03A9F5!important}#SQoLGBigImg{width:320px;height:130px;background-size:78px 73px;background-repeat:no-repeat;background-position:center;background-color:#fff}#SQoLGBasicSetting{width:300px;height:325px;background:#fff;margin:30px 10px 5px;padding:5px 17px;position:relative!important}#SQoLGBasicSetting *{color:#000;font-size:14px}#SQoLGAgreeBtn{position:absolute!important;left:20px;bottom:20px;width:155px;height:36px;background-color:#03A9F3;font-size:16px;color:#fff;line-height:36px;text-align:center;border-radius:2px}#SQoLG .andilastparph{width:215px;margin:13px 13px 0 0;font-size:14px}#BVGhv{width:320px;height:30px;padding:5px;display:block;background-color:#0288D1}#SQoLG input{width:20px;height:20px;float:right}#uDFjQ{width:320px;height:35px;display:block;background-color:#445963;color:#fff!important;padding:2px;font-size:14px;position:absolute!important;bottom:0;left:0}#uDFjQ a{text-align:center;color:#fff!important;padding:2px;font-size:14px}#jilVt #BEMFU{width:320px;height:30px;background-color:#0288D1;position:relative!important}#jilVt #BEMFU #gMhQJ{float:left}#jilVt #BEMFU #gMhQJ #JlUMY,#jilVt #BEMFU #gMhQJ #iLSlI,#jilVt #BEMFU #gMhQJ #fjaun,#jilVt #BEMFU #gMhQJ #highContrastMenu{width:30px;height:30px;display:inline-block}#jilVt #BEMFU #TZwBB{float:right}#jilVt #VbcHu{width:320px;height:65px;background-color:#03A9F4;z-index:2;position:relative!important}.BohAM{z-index:1!important}#jilVt #VbcHu>div>div>div svg{margin:14px auto 0;width:35px;height:35px}#jilVt #VbcHu .VbcHuMarkIfSelected{height:3px;width:80px}#jilVt #VbcHu>div{float:left;width:inherit;display:block;text-align:center;line-height:4px;background-color:#03A9F4}#jilVt .DoyLq{height:3px;background-color:#03A9F4}#jilVt #VbcHu>div>div{width:80px;height:64px;display:inline-block}#jilVt #VbcHu>div>div>div{z-index:99999999;position:relative!important}#jilVt #cWIDE{width:320px;height:65px;padding-top:16px;background-color:#EFEFEF}#PcvgW,#mvutM{font-size:15px;display:inline-block;width:44%;color:#fff!important;line-height:30px;background-color:#03A9F4;border:0 solid #000;box-shadow:0 0 2px 0 rgba(50,50,50,.75);border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px 2px 2px 2px;margin:0 5px;padding:0 3px;text-align:center}#lWMeB,#LHRwG{font-size:18px;color:#B0E3FB!important;margin:auto;line-height:30px;position:relative!important;text-align:center;z-index:999999999;height:30px}#PcvgW{background-color:transparent;color:#000!important}#LHRwG{font-weight:700;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px 2px 2px 2px;width:320px}#lWMeB{letter-spacing:1px;border-radius:2px;border:0 solid #000;padding:0 10px;background-color:#03A9F4;width:295px;-webkit-appearance:none;-moz-appearance:none;background-repeat:no-repeat;background-size:100%;visibility:visible}#jilVt select{-webkit-appearance:none;-moz-appearance:none;background-repeat:no-repeat;background-size:100%;opacity:1!important}#jilVt select,#lWMeB::-ms-expand{display:none}#jilVt #cWIDE #PhVFO #lWMeB img{display:inline-block;width:25px;margin:6px -2px;position:absolute!important}#jilVt #cWIDE #PhVFO #lWMeB img.WeXZj{opacity:0}#jilVt #cWIDE #PhVFO #lWMeB img.TUAseeActiveBasicAcccessibilityIcon{margin:6px -2px}#jilVt #cWIDE #LHRwG{display:none}#jilVt #ciZJc{width:320px;height:35px;background-color:#fff;box-shadow:inset 0 0 10px rgba(180,180,180,.5)}.oFDPV{background-color:#03A9F4!important;color:#fff!important;transition:color .5s}.kgXCx{transition:background-color .5s}#bZkqy{position:absolute!important;width:320px;height:32px;z-index:-1}#jilVt #ciZJc #QlvZw{margin:0 10px;font-size:16px;font-weight:400;display:block;width:300px;color:#000;height:30px;padding-top:7px}#jilVt #ciZJc img{display:inline-block;width:14px;color:#fff;height:5px;margin:7px 128px 0 0}#jilVt #ciZJc img.mdico{transform:rotate(180deg)}#jilVt #ciZJc img.yADMJ{transform:rotate(0)}#jilVt #fvLXm{width:320px;height:410px;margin:0;padding-right:6px;background-color:#EFEFEF;text-align:right!important}#jilVt #FbKLK,#jilVt .IdrLU .FbKLK{width:320px;height:35px;background-color:#757575;padding:0 3px;color:#fff!important}#jilVt #FbKLK a{font-weight:400;font-style:normal;font-size:14px;line-height:35px;color:#fff!important;text-align:center}#jilVt .IdrLU .FbKLK{position:fixed!important;bottom:0;right:0}#jilVt .IdrLU .FbKLK a{font-weight:400;font-style:normal;font-size:14px;line-height:35px;color:#fff!important}#jilVt #fvLXm .khlBU{display:inline-block;margin:7px 0 0 7px;background-color:#fff;opacity:0;-webkit-box-shadow:0 0 5px -2px rgba(0,0,0,.54);-moz-box-shadow:0 0 5px -2px rgba(0,0,0,.54);box-shadow:0 0 5px -2px rgba(0,0,0,.54)}#jilVt #fvLXm .owUce{width:148px;height:195px;position:relative!important;display:inline-table}#jilVt #fvLXm .owUce p{line-height:20px;width:133px;min-height:60px;margin:0 auto;font-size:18px!important;font-weight:400;padding-top:118px;display:block;position:relative!important;color:#fff!important;text-align:center}.LightHighContrastMenu #jilVt #fvLXm .owUce p{padding-top:122px}.UA2bigMenu.LightHighContrastMenu #jilVt #fvLXm .owUce p{padding-top:162px}#jilVt img{max-width:none;max-height:none}#TUAclosespace img{width:18px;margin:12px 3px}#MoexW #TUAclosespace img{margin:0}#oECFz>[role=heading]{margin:14px 0 0}#jilVt #fvLXm .owUce img{width:149px;height:149px}#jilVt #VbcHu [role=link]{cursor:pointer}#jilVt .rZZEa .joMhk p,#pgvCh{font-size:16px!important;text-align:right!important;padding:4px!important}#jilVt #fvLXm .IdrLU{opacity:0;display:none;width:338px;height:575px;z-index:9999999990;background-color:#fff!important;position:fixed!important}#jilVt #fvLXm .khlBU .bkVMl{width:320px;height:64px;background-color:#03A9F4!important;z-index:99999999999;-webkit-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);-moz-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);box-shadow:0 4px 5px -4px rgba(0,0,0,.7)}.LightHighContrastMenu #jilVt #fvLXm .khlBU .bkVMl{background-color:#005A8C!important}#jilVt #fvLXm .khlBU .rZZEa{width:320px}#jilVt #fvLXm .ZDMId{position:relative!important}#jilVt #fvLXm .khlBU .vjEnr{overflow:hidden;display:none;width:320px;height:0;background-color:#000!important;margin-right:auto;}#jilVt #fvLXm :focus,#cWIDE :focus{outline:#888 solid 1px!important}#jilVt #fvLXm .khlBU .uRBJd{display:block}#jilVt #fvLXm .khlBU #MoexW{width:300px;height:185px;padding-top:10px;margin:0 auto}#jilVt #fvLXm .khlBU #faSsr{width:145px;display:inline-block}#fvLXm .bnVjM{width:149px;height:149px;position:absolute!important;background-color:#2594D1;background-repeat:no-repeat;background-size:100%}#YQger .KaxwEspace{width:45px;height:35px;display:inline-block}#YQger .KaxwEspace img{width:35px;height:25px;margin:auto}#fvLXm .suyYi img{width:28%!important;height:28%!important;display:inline-block!important;margin:0 3px!important}#fvLXm .suyYi{width:150px!important;height:110px!important}#fvLXm .bnVjM .zEGkT{margin:10px auto 0;padding:0 12px}#faSsr label{color:#fff!important;position:relative!important;width:75%;display:block;margin:5px 15px 0;font-size:13px}#HYACe{color:#fff!important;position:relative!important;width:75%;margin:0 15px;font-size:16px;height:20px;border-bottom:1px solid #fff;opacity:1!important}#HYACe:before{content:"\u0015BC";position:absolute;color:#00f;left:100%;bottom:0;font-size:18px;height:20px}#HYACe option{color:#000!important;background-color:#fff;width:150px;margin:0 15px;font-size:16px;height:35px;border-radius:2px}#jilVt #fvLXm .khlBU #CrXug{display:inline-block;width:124px;color:#fff!important;position:relative!important;height:50px}#jilVt #fvLXm .khlBU #CrXug label{color:#fff!important;position:relative!important;width:75%;display:block;margin:5px 15px 0;font-size:13px}#jilVt #fvLXm .khlBU #CrXug input[type=number]{border:1px solid #fff;width:50%;display:inline-block;margin: 0 5px;color:#fff!important;height:20px}#CrXug input[type=number]:after{content:"\u0015B2";position:absolute;color:#00f;left:100%;margin-left:-17px;margin-top:12%;font-size:11px}#CrXug input[type=number]:before{content:"\u0015BC";position:absolute;color:#00f!important;left:100%;bottom:0;margin-left:-17px;margin-bottom:-14%;font-size:11px}#PGaVc,#ylWRt{color:#fff!important;position:relative!important;width:50%;display:block;font-size:13px}#jilVt #fvLXm .khlBU #WNAYU,#jilVt #fvLXm .khlBU #jqTGZ{border:1px solid #fff;color:#fff!important;height:20px;width:50%}#WNAYU:after,jqTGZ:after{content:"\u0015B2";position:absolute;color:#00f;left:100%;margin-left:-17px;margin-top:12%;font-size:11px}#WNAYU:before,jqTGZ:before{content:"\u0015BC";position:absolute;color:#00f!important;left:100%;bottom:0;margin-left:-17px;margin-bottom:-14%;font-size:11px}#MoexW #TUAclosespace{margin:5px}#YQger{width:320px}#YQger .hjVeU,#UAcancelguideVoiceCommends,#YetWN,.ActiveAndiFnsBtnsNo,.CameraSetttingbackLevel,.UAhideUserSetHelp{display:inline-block!important;width:115px!important;color:#000!important;height:35px!important;text-align:center;background-color:#fff!important;padding-top:7px!important;margin-top:3px!important;border-radius:2px;margin-left:15px!important}#YQger .IvEyQ,#UAopenguideVoiceCommends,#KNOZd,#andisavenewsetting,#andiupdateexiestingsetting,.ActiveAndiFnsBtnsYes,.CameraSetttingNextLevel,.UAshowUserSetHelp{display:inline-block!important;width:115px!important;color:#fff!important;height:35px!important;text-align:center;background-color:#03A9F4!important;padding-top:7px!important;border-radius:2px;margin:3px!important}#jilVt #fvLXm div.rZZEa>div.ltsXQ{width:320px;height:100px;text-align:center}#jilVt #fvLXm div.rZZEa>div.ltsXQ img{margin:auto;width:100%;height:100px}#jilVt #fvLXm #yIiKG{top:220px;position:fixed}#jilVt #fvLXm #ratYL{top:220px}#jilVt #fvLXm #vbCoe,#jilVt #fvLXm #oGNab{bottom:195px}#vbCoe div.bkVMl div.AueIG,#ratYL div.bkVMl div.AueIG,#oGNab div.bkVMl div.AueIG,#yIiKG div.bkVMl div.AueIG{background-color:#03A9F4;width:25px!important;height:24px!important;font-size:24px;color:#fff!important;display:inline-block;float:right;margin:20px 10px 5px;vertical-align:top}#vbCoe div.bkVMl>div.xFWoP,#ratYL div.bkVMl>div.xFWoP,#oGNab div.bkVMl>div.xFWoP,#yIiKG div.bkVMl>div.xFWoP{float:right;min-height:24px!important;font-size:16px;color:#fff!important;display:inline-block;font-weight:400;line-height:64px}#fvLXm .rZZEa .LAsQk{width:320px;height:102px;display:block;text-align:right;padding-right:7px}#fvLXm .rZZEa .LAsQk [role=button]{text-align:center}#fvLXm .rZZEa .LAsQk img{margin:0 auto}#EXRcw img,#TUAwhiteMouse img{width:20px!important}#fvLXm .rZZEa .qXbVl img{display:inline-block;margin:0 5px}#fvLXm .rZZEa .qXbVl p{display:inline-block}#fvLXm .rZZEa .qXbVl{box-shadow:0 0 10px rgba(180,180,180,.5);width:295px;margin:auto}#fvLXm .rZZEa .otNdX{width:149px;height:60px;display:inline-block;font-weight:400;font-size:14px;box-shadow:0 0 10px rgba(180,180,180,.5)}#fvLXm .rZZEa .QybqI{width:97px;height:95px;display:inline-block;font-weight:400;font-size:14px;box-shadow:0 0 10px rgba(180,180,180,.5);margin-top:7px;margin-left:7px;position:relative!important}#fvLXm .rZZEa .QybqI img,#fvLXm .rZZEa .QybqI svg{bottom:10px;right:10px;position:absolute!important}#gkzUY,#gkzUY.JUWgG{width:170px;z-index:9999999989;position:absolute;font-family:arial;color:#333;padding:0;list-style-type:none}#gkzUY{height:336px;display:none;background:#E6E6E6;margin:0}#gkzUY *{background-repeat:no-repeat;box-sizing:border-box}#gkzUY.JUWgG input{cursor:pointer;list-style-type:none;display:inline-block;width:56px!important;height:56px!important;margin:0!important;border:none;background-position:50% 50%!important}#gkzUY.JUWgG{height:332px;display:none;background:#E6E6E6;margin:0}#gkzUY.JUWgG>div>div{background-color:#E6E6E6;border:1px solid #ededed;box-sizing:border-box;position:relative;padding:8px 12px;cursor:pointer;list-style-type:none;display:inline-block;width:56px!important;height:56px!important}#gkzUY.JUWgG div#WmtMJ{background-color:#fff}#gkzUY .cLOVr{width:170px!important;height:56px!important;display:block!important}#gkzUY.JUWgG div input{border:none;background-repeat:no-repeat;background-position:50% 55%;width:56px;height:54px;position:absolute;top:0;left:0}#wSOJP{width:100%;position:fixed;bottom:0;text-align:center;background-color:#333;z-index:99999999}#wSOJP #BCaLN{width:640px;height:152px;margin:0 auto;overflow:hidden}#wSOJP #JwXSG{width:640px;height:152px;display:none}#wSOJP #klIYg{width:640px;height:152px}#wSOJP #klIYg #FynQv{width:640px;height:32px;background-color:#31C1EE;color:#fff!important;text-align:left}#wSOJP #klIYg #FynQv .tlIvc{cursor:not-allowed;width:55px;height:32px;display:inline-block;line-height:32px;text-align:center;color:#fff}#wSOJP #klIYg #FynQv .tlIvc#bGFVi{margin-left:10px}#wSOJP #klIYg #ONITw{width:640px;height:80px;color:#fff;vertical-align:top}#wSOJP #klIYg #ONITw .NaTmy{width:50px;height:50px;margin:20px 0 0 2px;display:inline-block;line-height:50px;text-align:center;color:#000;background-color:#fff;font-size:20px;vertical-align:top}#wSOJP #klIYg #laCWS{width:640px;height:0;border:1px solid #31C1EE;position:relative!important;color:#fff!important}#wSOJP #klIYg #laCWS:after{content:\'\';position:absolute;top:100%;left:48.5%;width:0;height:0;border-top:solid 12px #31C1EE;border-left:solid 12px transparent;border-right:solid 12px transparent}#wSOJP #klIYg #ONITw .NaTmy#XlqzP,#wSOJP #klIYg #ONITw .NaTmy#pEjkF{font-size:25px}#wSOJP #klIYg #MOusc{margin-top:12px;margin-right:34%;color:#fff!important;width:260px;text-align:center}#wSOJP #HzMFn{margin:0 auto;color:#fff;width:400px;text-align:center;height:35px}.RphXn{-moz-transform:scaleX(-1)!important;-o-transform:scaleX(-1)!important;-webkit-transform:scaleX(-1)!important;transform:scaleX(-1)!important;filter:FlipH!important;-ms-filter:"FlipH"!important}.AueIG{width:25px!important;height:24px!important;font-size:24px;color:#fff!important;display:inline-block;float:right;margin:15px 10px 0;vertical-align:top}#zgJkZ,#zHZQI{height:50px;margin:5px 0 0;display:inline-block}#oECFz{width:300px;height:165px;margin:0 auto}#zHZQI{width:223px}#zgJkZ{width:50px}#zHZQI .oECFzColor{margin:6px 3px 1px;display:inline-block;width:22px;height:22px;border-radius:17px}#zgJkZ .oECFzColor{margin:6px 3px 1px;display:inline-block;border:1px solid #fff;width:50px;height:50px;border-radius:50px;color:#fff!important;font-size:16px;padding:15px 12px}h3.zStNQ{margin:0!important;padding:0!important;font-size:1px;width:1px!important;height:1px!important;display:block;font-weight:400}.ORmKP,.nrnYA,.UAscreenReaderOnly{background-color:#000!important;color:#fff!important;font-size:16px!important;font-family:arial!important}.nrnYA,.UAscreenReaderOnly{position:absolute!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;height:1px!important;width:1px!important;margin:-1px!important;z-index:9999999988!important;border:0!important;display:block!important}.nrnYA:focus{clip:auto!important;height:auto!important;width:auto!important;overflow:visible!important;margin:0!important;padding:0 10px!important}.ORmKP{position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;z-index:9999999988;border:0;display:block}.ORmKP:focus{clip:auto!important;height:auto!important;width:auto!important;overflow:visible!important;margin:0!important;padding:0 10px!important}.ORmKP:active,.ORmKP:target{z-index:9999999988;top:auto;clip:auto;height:auto;width:auto;overflow:visible;margin:0;padding:0 10px}.WfBug{padding:0!important;margin:0!important;border:none!important}.ZWDCr,.vnbtL{overflow:hidden;border:0;background-color:#000!important;color:#fff!important;font-size:16px!important;display:block;position:absolute;clip:rect(0 0 0 0)}.vnbtL{font-family:arial!important;height:1px;width:1px;margin:-1px;padding:0;z-index:9999999988}.vnbtL:focus{clip:auto!important;height:auto!important;width:auto!important;overflow:visible!important;margin:0!important;z-index:9999999988!important;padding:0 10px!important;top:auto!important}.vnbtL:active,.vnbtL:target{clip:auto;height:auto;width:auto;overflow:visible;margin:0;z-index:9999999988;top:auto}.ZWDCr:focus, .ZWDCr:focus-within{clip:auto !important;height:auto !important;width:auto !important;overflow:visible !important;margin:0 !important;padding:0 10px !important;}.ZWDCr:active{z-index:9999999988;top:auto}#eHFXi{background-color:#333;height:226px;width:100%!important;position:fixed;text-align:center;padding:5px;margin:0 auto;bottom:0;z-index:999999999}#eHFXi #LXBSB{text-align:center;margin:auto;width:663px;background:#fff}#eHFXi #ncSEc{min-height:0;height:40px!important;margin:5px;padding:5px;width:96.5%;font:1em/1.5 Verdana,Sans-Serif;background:#fff;border:1px solid #333;float:left;-moz-border-radius:5px;-webkit-border-radius:5px;display:block;color:#000}#eHFXi #nSibfboard{display:inline-block;margin:0;padding:0;vertical-align:top;list-style:none}#eHFXi div[role=button]{font-size:14px;position:relative;float:left;margin:0 5px 5px 0;width:30px;height:30px;line-height:40px;text-align:center;background:#fff;border:1px solid #222;-moz-border-radius:5px;-webkit-border-radius:5px;color:#000!important}#nSibfboard div[role=button].CRRSy,#eHFXi #nSibfboard div[role=button].QhFEO,#eHFXi .geviL{width:70px!important}#nSibfboard div[role=button]:hover,#eHFXi #nSibfboard div[role=button]:focus{position:relative;top:1px;left:1px;border-color:#e5e5e5;cursor:pointer}#eHFXi div[role=button].TZDKMpslock,div[role=button].IbElw,div[role=button].QhFEO{clear:left}#eHFXi #nSibfboard div[role=button].TZDKMpslock{width:80px}#eHFXi #nSibfboard div[role=button].FiIOl{width:55px}#eHFXi #nSibfboard div[role=button].IbElw{width:95px}#eHFXi #nSibfboard div[role=button].TtZzB{width:77px}#eHFXi .aSmgH{margin-right:0}#eHFXi #KJMJHLang div[role=button].jSpEZ{height:30px;width:93px!important;display:block}#eHFXi #nSibfboard div[role=button].PkuNm{clear:left;width:548px}#wJebo,#HPZmg{border:1px solid #fff;height:100px;width:48%;margin:0 3px}#eHFXi .NLWxW{display:none}#eHFXi #KJMJHLang{display:inline-block;height:185px;width:95px!important}[id^=DRXXH]{width:20px;height:20px;position:absolute;z-index:99999}#pJIrA{height:auto}#PFaFV{position:absolute!important;top:0!important;right:0!important;padding:10px!important;font-size:16px!important;width:80%}#ZJSXb,#nztwL{font-size:14px;padding:5px;color:#fff!important}#WBNCR{text-align:center!important;width:19%!important;height:30px!important;margin-top:20px!important;position:absolute!important;top:0!important;left:0!important}#syeKB{width:300px;position:relative!important;margin:auto}#wJebo,#HPZmg{display:inline-block!important;color:#fff!important}#ZJSXb{z-index:2147483647!important}#nztwL{display:inline!important}.Awzjy{width:36px;height:36px;display:inline-block!important;float:left;margin:14px 0 0 5px!important}.Awzjy img{width:36px;height:36px}#GRwhC{position:fixed!important;top:5px;left:5px;width:320px;z-index:9999999;background-color:#0288D1;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.85);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.85);box-shadow:0 0 2px 0 rgba(50,50,50,.85);padding:0 0 6px}#GRwhC *{box-sizing:border-box}#sAnbY{display:block;width:320px;height:30px}#GRwhC .yukgZ{display:inline-block!important;float:left;width:25px;height:25px;color:#fff!important;padding:5px;font-size:16px!important}#GRwhC #aWgWO h3,#GRwhC #aWgWO p{width:100%!important;margin:0!important;display:inline-block!important;font-size:16px!important}#GRwhC #hayOK{text-align:right;float:left!important;display:inline-block!important;width:30px;height:30px;padding:6px}#GRwhC #SLDoH{font-size:16px!important;display:inline-block!important;width:170px!important;height:35px;border:none;padding:0 5px}#GRwhC select{font-size:16px!important;display:inline-block!important;width:80px;height:30px;border:none;opacity:1!important}#GRwhC #hayOK img{display:inline-block!important}#GRwhC #iCVuF{background-color:#fff;height:35px;display:inline-block;width:310px!important;padding:0 5px;margin:0 5px}#GRwhC #aWgWO{width:310px;margin:5px;background-color:#fff}#GRwhC #aWgWO h3{padding:5px 0;font-weight:bolder;color:#000!important;float:right}#GRwhC #aWgWO p{padding:0;color:#000!important}#GRwhC h2{font-size:16px!important;padding:5px;color:#fff!important;display:inline-block!important;width:250px!important;float:right;margin:0!important}#GRwhC a{color:#00f!important;display:inline-block}#GRwhC hr{border:1px solid #ccc!important;margin:0!important}#aWgWOImgWrap{display:inline-block;width:15%;vertical-align:top;padding:5px;margin:15% auto 0}#aWgWOImgWrap img{width:40px;height:40px}#KJMJHvikiResultsCloseBtn{text-align:left;height:25px}#aWgWOCloseBtn{display:inline-block!important;width:25px;height:25px;color:#000!important;padding:5px;font-size:16px!important}#aWgWOTextWrap .companyName{float:left;margin:5px 0}#bnKlS,#LAIbg{margin:0 10px;font-weight:400;display:block;width:300px;padding-top:7px;text-align:center;height:30px;color:#fff}#aWgWOTextWrap{display:inline-block;width:80%}#PSniF{width:320px;height:85px;background-color:#EFEFEF}#osLFe{width:320px;height:65px;padding-top:16px;background-color:#EFEFEF}#LNHvo{font-weight:400;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px 2px 2px 2px;border:0 solid #000;box-shadow:0 0 2px 0 rgba(50,50,50,.75)}#YhDtt{width:320px;height:35px;background-color:#fff;box-shadow:inset 0 0 10px rgba(180,180,180,.5)}#LAIbg{font-size:16px}#JPJBz{height:444px}#QSgtZ :focus{outline:#888 solid 2px!important;border:none!important}#IFEiM{background-color:#0288D1;width:320px;height:115px;padding-top:33px}#LNHvo{font-size:19px;color:#fff!important;border-top:1px solid #fff;border-bottom:1px solid #fff;padding:0 10px;background-color:#0288D1;width:300px;margin:auto;line-height:50px;height:50px;text-align:center!important;position:relative!important}#LNHvo img{max-width:none;min-width:0;display:inline-block;width:30px;line-height:50px;padding-top:14px}#bnKlS{font-size:16px}#HxpCr{height:410px;width:338px;overflow-x:hidden;overflow-y:visible;font-size:14px;background-color:#fff}#HxpCr .KSsgr{width:318px}#HxpCr .KSsgr :focus{outline:#000 solid 1px}#HxpCr .KSsgr .VDmCM{padding:5px;font-size:14px;color:#000!important;position:relative!important;border-bottom:1px solid #ccc}#HxpCr .KSsgr .VDmCM img{min-width:0;max-width:none;width:15px;position:absolute!important;left:7px;top:10px}#HxpCr .KSsgr .VDmCM>div{width:calc(100% - 20px)}#HxpCr .KSsgr .Zrljr *{color:#000!important}#HxpCr .KSsgr .Zrljr{display:none;padding:5px;font-size:14px;border-bottom:1px solid #ccc;color:#000!important}#gAoCt{position:relative!important;width:320px;height:115px}#gAoCt #YIRzs{position:absolute!important;margin:10px;bottom:0;right:0;color:#fff!important;font-size:16px}#YFJzt,#yCrCd{height:50px;width:49%;padding:12px 10px;font-size:18px;cursor:pointer;background-color:#0288D1!important}#tgGWn{width:320px;height:30px;background-color:#EEE;padding:5px 10px;color:#000!important}#DmrXy,#hYHUX{display:inline!important}#IULPc{width:320px;height:325px;padding:3px 10px;overflow:hidden;background-color:#fff}#TwIfU{width:320px;height:50px;background-color:#0288D1!important}#yCrCd{display:inline-block;text-align:right;color:#fff!important}#YFJzt{display:inline-block;text-align:left;color:#fff!important}#RmKVO{height:85px;width:300px;padding:10px 10px 0;font-size:14px}#PRxAh{overflow:hidden;width:1820px;margin-right:22px;font-size:14px}#PRxAh .mJoej{width:245px;height:180px;display:inline-block;margin:0 5px;float:right}#PRxAh .mJoej .wxYqU{width:245px;height:75px;background-color:#03A9F3;position:relative!important;font-size:14px;border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0}#PRxAh .mJoej[cykxa="2"],#PRxAh .mJoej[cykxa="4"]{display:none}#PRxAh .mJoej .wxYqU .YrOTA{position:absolute!important;left:10px;top:10px;width:20px;height:20px;display:block;text-decoration:underline;font-size:14px;color:#fff!important}#PRxAh .mJoej .wxYqU .fEqjh{display:block;text-decoration:underline;color:#fff!important;width:100%;height:100%;padding:10px 25px 0 15px;font-size:14px}#PRxAh .mJoej .EbTkc{width:245px;height:90px;background-color:#fff;-webkit-box-shadow:0 1px 5px -1px rgba(89,89,89,1);-moz-box-shadow:0 1px 5px -1px rgba(89,89,89,1);box-shadow:0 1px 5px -1px rgba(89,89,89,1);padding:20px 40px 0;font-size:14px;border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px}#PRxAh .mJoej .EbTkc [class^=kkeiq]{width:50px;height:50px;-webkit-box-shadow:0 1px 5px -1px rgba(89,89,89,1);-moz-box-shadow:0 1px 5px -1px rgba(89,89,89,1);box-shadow:0 1px 5px -1px rgba(89,89,89,1);display:inline-block;font-size:14px;margin:2px;text-align:center}#PRxAh .mJoej .EbTkc input[type=text],#PRxAh .mJoej .EbTkc textarea{border:none;border-bottom:1px solid #0288D1;width:210px;margin:0 -24px;font-size:14px}#PRxAh .mJoej .EbTkc .uPqNm{position:relative!important;margin:20px 0}#PRxAh .mJoej .EbTkc .uPqNm label{position:absolute!important;font-size:14px;margin-right:-20px}#RFjdP,#andiasd,.BohAM{position:relative!important}#PRxAh .mJoej .EbTkc .uPqNm input[type=text]{height:20px;font-size:14px}#PRxAh .mJoej .EbTkc .uPqNm textarea{min-height:40px;font-size:14px;max-height:40px}.KRUNI{width:100%;text-align:left;font-size:14px;margin-right:20px!important}.hYaIS{font-size:14px!important;color:red!important;width:100%}#PRxAh .mJoej .EbTkc .KRUNI.veZPc{color:red!important;font-size:14px}#PRxAh .mJoej .EbTkc [aria-checked=true]{background-color:#03A9F4!important;color:#fff!important;transition:color .35s,background-color .35s}#MvQtQ,#sreachForAcromanetbg,#wrapNavigateWithLettersbg{background-color:rgba(0,0,0,.65);z-index:9999999992}#RFjdP{overflow:hidden;display:block}[id^=QSgtZ]{width:339px;height:100%;overflow-y:scroll;overflow-x:hidden}[dztLI]:focus:after,[dztLI]:hover:after{right:auto}#VbcHu>div>div>div:hover::before{width:0;height:0;border-left:20px solid transparent!important;border-right:20px solid transparent!important;border-top:20px solid red!important}#VbcHu>div>div>div:focus:before{width:0;height:0;border-style:solid!important;border-width:0 100px 100px!important;border-color:transparent transparent #007bff!important}#NWNWn,#sreachForAcromanet{width:296px;top:100px;left:4px;right:4px;border-radius:2px;background-color:rgba(255,255,255,1);margin:auto;position:absolute!important;z-index:9999999999}#loadAndiSystem{width:338px;height:640px;direction:rtl}#MvQtQ{position:absolute!important;top:30px;width:100%;height:100%}#sreachForAcromanetbg{position:absolute!important;width:100%;height:100%}#sreachForAcromanet{min-height:145px}#NWNWn{min-height:175px}#wrapNavigateWithLetters *{line-height:100%;font-family:arial!important}#wrapNavigateWithLetters{position:absolute!important;margin:25px auto;width:80%;min-height:145px;background-color:rgba(0,0,0,.8);left:4px;right:4px;z-index:9999999999;border-radius:2px;color:#fff;font-family:arial!important}#wrapNavigateWithLetters #NWNWntext{font-size:16px;direction:rtl;padding:0 20%;text-align:right;overflow:auto}#wrapNavigateWithLetters #NWNWntext ul li{padding:0 35px 0 0;color:#000;font-size:16px}#wrapNavigateWithLetters #NWNWntext ul{list-style-type:circle;list-style-position:inside}#wrapNavigateWithLetters .andicloseSaveOption{cursor:pointer;padding:5px;position:absolute!important;font-size:35px}#NavigateWithLettersDonshowanymore{cursor:pointer;width:340px;margin:40px auto;background-color:#0288D1;padding:10px;border:1px solid #888;border-radius:5px}#wrapNavigateWithLettersbg{position:absolute!important;width:100%;height:100%}#NWNWn #NWNWntext{margin:30px auto 0;width:237px;background-color:rgba(255,255,255,1);z-index:9999999999;border-radius:2px}#ZWsSL{text-align:center;margin-top:10px}#andiaddwhyoff,#YetWN,#andidontaddwhyoff,#KNOZd,#andisavenewsetting,#andiupdateexiestingsetting{display:inline-block;width:120px;height:30px;text-align:center;padding-top:10px;margin:3px}#choosewhyoff{width:245px;text-align:center;margin:0 auto;border:1px solid #888;border-radius:2px}#rTtIv,#rOELB{display:inline-block;width:120px;height:30px;text-align:center;padding-top:10px}#kTUtq{display:inline-block}#andiSetting{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:100%;width:40px;height:25px}#andiloginsmallmenu,#lugTJ{display:inline-block;width:100%;height:100%}#andiuserheaderloginconnect{display:inline-block;width:90px;height:30px;color:#fff;padding:4px 0}#dXLgH{display:inline-block;width:70px;height:30px;color:#fff;padding:3px 13px}#xPEGE.vKDQY #ZFdLI,#JPRSV.vKDQY #BeDAB,#ZFdLI:focus,#ZFdLI:hover,#BeDAB:focus,#BeDAB:hover{fill:#03A9F4}#YlCpH:hover~#sDZbX #cGvHB,#YlCpH:hover~#sDZbX #ZFdLI,#YlCpH:hover~#sDZbX #BeDAB,#pgvCh:hover~#sDZbX #cGvHB,#pgvCh:hover~#sDZbX #ZFdLI,#pgvCh:hover~#sDZbX #BeDAB{color:#03A9F4!important;fill:#03A9F4;font-weight:700}#cqUuD{position:relative!important;width:201px;height:95px;display:inline-block;font-size:14px;margin-top:7px;margin-left:7px;box-shadow:0 0 10px rgba(180,180,180,.5)}#cqUuD svg{margin:0;padding:0}#cqUuD #YlCpH{bottom:10px;right:10px;position:absolute!important}#sDZbX{width:70%;bottom:10px;left:5px;position:absolute!important}#xPEGE,#JPRSV,#sDZbX svg{width:20px;height:20px;margin:0;padding:0;display:inline-block}#JPRSV{position:absolute!important;bottom:4px;right:5px}#xPEGE{position:absolute!important;bottom:4px;left:2px}#JJZzG{width:60%;margin:auto;position:relative!important}#cGvHB{margin:0 auto -11px;width:45px;text-align:center;cursor:pointer}#sjedp{background-color:#7d7d7d;width:100%;height:3px;margin:1px auto}#LMkvg{margin:0 auto 7px;width:3px;background-color:#7d7d7d;height:10px}div#sDZbX *{direction:ltr}#hKyOI{position:absolute!important;top:-20px;right:49%;display:none;direction:rtl!important}#qlMvI{width:3px;height:10px;background-color:#F3427E}#xPEGE.vKDQY~#JJZzG #sjedp,#xPEGE:focus~#JJZzG #sjedp,#xPEGE:hover~#JJZzG #sjedp,#JPRSV.vKDQY~#JJZzG #sjedp,#JPRSV:focus~#JJZzG #sjedp,#JPRSV:hover~#JJZzG #sjedp{background-color:#03A9F4}#XjgPc{color:#F3427E!important;margin:0 -30%}#cGvHB:focus,#cGvHB:hover{color:#03A9F4!important;font-weight:bolder!important}.vjEnr [role=button]:focus,.vjEnr [role=button]:hover,.vjEnr input:focus,.vjEnr input:hover,.vjEnr select:focus,.vjEnr select:hover{outline:#fff solid 1px!important}.LAsQk .QybqI{border-radius:2px}.IdrLU .joMhk .xJGcA{color:#fff!important;background-color:#03A9F4!important}.IdrLU .joMhk .xJGcA p{color:#fff!important}.IdrLU .joMhk .xJGcA svg{fill:#000}#yIiKG .RRnya{display:none!important}#yIiKG .xJGcA .RRnya,#RFjdP .tHEWd{color:#fff;position:absolute!important;bottom:10px!important;display:block!important}#yIiKG .xJGcA .RRnya{border:1px solid #fff!important;border-radius:35px!important;left:10px!important;width:25px;height:25px;padding-top:3px;padding-right:4px;padding-left:2px}#RFjdP .tHEWd{background-color:#03A9F4;left:0!important;width:40px;height:15px;-webkit-border-top-right-radius:2px;-webkit-border-bottom-right-radius:2px;-moz-border-radius-topright:2px;-moz-border-radius-bottomright:2px;border-top-right-radius:2px;border-bottom-right-radius:2px;line-height:15px;font-size:14px!important;text-align:center}#NWNWn :focus{outline:#000 solid 1px}img[src*="cVVzR.png"]{width:320px;height:115px}#KJMJHtab1middleHelp{display:none;width:320px;height:445px;margin:0;text-align:right!important;position:fixed!important;top:195px;overflow:hidden;z-index:99999999999;right:0;background:#fff}#KJMJHtab1middleHelp .TUAHelpchangetolivetext,#KJMJHtab1middleHelp .TUAHelpskipbtn{position:absolute!important;text-align:right;color:#000!important;-moz-border-radius:3px;cursor:pointer}#KJMJHtab1middleHelp .TUAHelpskipbtn{top:3px;left:3px;background:#fff!important;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);font-size:16px;width:auto;-webkit-border-radius:3px;border-radius:3px;font-family:Arial;font-weight:700;padding:3px 10px;text-decoration:none;margin:2px}#KJMJHtab1SmalleHelp .TUAHelpskipbtn,#KJMJHtab1middleHelp .TUAHelpchangetolivetext{-webkit-border-radius:3px;font-size:16px;font-weight:700;padding:3px 10px;text-decoration:none;font-family:Arial}#KJMJHtab1middleHelp .TUAHelpimg img{width:320px!important;height:445px!important}#KJMJHtab1middleHelp .TUAHelpchangetolivetext{bottom:3px;left:3px;background:#fff!important;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;border-radius:3px;margin:2px}#KJMJHtab1SmalleHelp{display:none;width:306px;height:130px;margin:6px 4px 0;text-align:right!important;position:relative!important;z-index:99999999999;background:#fff;box-shadow:0 0 10px rgba(180,180,180,.5)}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext,#KJMJHtab1SmalleHelp .TUAHelpskipbtn{position:absolute!important;left:3px;text-align:right;background:#fff!important;color:#000!important;margin:2px}#KJMJHtab1SmalleHelp .andiWrapHelpDesc{height:100px!important}#KJMJHtab1SmalleHelp .TUAHelpskipbtn{top:3px;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-moz-border-radius:3px;border-radius:3px}#KJMJHtab1SmalleHelp .TUAHelpimg img{width:306px!important;height:100px!important}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext{cursor:pointer;bottom:3px;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);font-size:16px;width:auto;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;font-family:Arial;font-weight:700;padding:3px 10px;text-decoration:none}#KJMJHtab1LargeHelp{display:none;width:320px;height:500px;text-align:right!important;position:fixed!important;z-index:99999999999;background:#fff;box-shadow:0 0 10px rgba(180,180,180,.5);right:0;top:0}#KJMJHtab1LargeHelp #BEMFUHelp{width:320px;height:30px;background-color:#0288D1}#KJMJHtab1LargeHelp #TUAcloseHelp{float:left;display:none}#KJMJHtab1LargeHelp #TUAcloseHelp input{width:20px;height:20px;padding:3px 3px 0}#KJMJHtab1LargeHelp #GFcVT{width:320px;height:35px;background-color:#757575;color:#fff!important;position:absolute;bottom:0}#KJMJHtab1LargeHelp #GFcVT a{font-weight:400;font-style:normal;font-size:14px;line-height:35px;color:#fff!important}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext,#KJMJHtab1LargeHelp .TUAHelpskipbtn{left:3px;background:#fff!important;color:#000!important;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);font-size:16px;font-weight:700;padding:1px 5px;text-decoration:none;margin:2px;text-align:right;position:absolute!important}#KJMJHtab1LargeHelp .TUAHelpskipbtn{top:3px;-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-moz-border-radius:1px;-webkit-border-radius:1px;border-radius:1px;font-family:Arial;display:none}#KJMJHtab1LargeHelp .TUAHelpimg img{width:320px!important;height:445px!important}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext{cursor:pointer;bottom:38px;-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75);width:auto;-moz-border-radius:1px;-webkit-border-radius:1px;border-radius:1px;font-family:Arial}#VbcHu :focus,#BEMFU :focus{outline:#fff solid 2px!important}#NWNWn .andicloseSaveOption{padding:5px;position:absolute!important;left:5px}#andisetnametoset{direction:rtl;border-bottom:1px solid #888;border-radius:2px;font-size:14px}#dontrunonthissite{display:inline-block;padding-top:4px}#chooseLang{border-radius:0;margin:2px auto;direction:rtl;border-bottom:1px solid #000;width:100%;padding:0;height:35px;background-color:transparent!important}#chooseLang option{color:#000;background-color:#fff}#changeLang{width:230px;margin:0 auto;border:1px solid #888}#vbCoe .ltsXQ,#ratYL .ltsXQ,#oGNab .ltsXQ,#yIiKG .ltsXQ,#gAoCt,.Awzjy,.KaxwEspace{background-size:100% 100%;background-repeat:no-repeat}#andiwrapsmallmenusetting2{position:absolute!important;width:230px;height:350px;background-color:#fff;top:35px;right:5px;-webkit-box-shadow:0 0 2px 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 2px 0 rgba(50,50,50,.75)}#andiwrapsmallmenusetting2>div{width:230px;height:48px;line-height:48px;padding:10px;text-align:right}#andiwrapsmallmenusetting2 hr{border:1px solid #000}#andioffthissitetext{display:inline-block;font-size:14px}#andisetlangtext{line-height:48px;display:inline-block;font-size:14px}#andisetlangdefualt{float:left;line-height:48px;display:inline-block;font-size:14px}#andioffthissitewrapswitch{position:relative!important;display:inline-block;margin:3px 7px;width:30px;float:left}#andioffthissitewrapswitchpart1{position:absolute!important;left:-5px;top:1px;width:33px;height:14px;background:inherit;background-color:rgba(0,150,136,.498039215686275);border:none;border-radius:7px;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none}#highContrastMenu img{width:17px;margin:6px}#andioffthissitewrapswitchpart2{position:absolute!important;left:-5px;top:0;border-radius:20px;width:17px;height:17px;background-color:green}#wrapMenuLang{width:320px;height:605px;position:absolute!important;top:0;background-color:#fff;z-index:9999999999}#andiMenuLangTopBar{width:320px;height:30px;background-color:#0288D1}#andiMenuLangMiddleBarPart1{width:320px;height:64px;background-color:#03A9F4!important;z-index:99999999999;-webkit-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);-moz-box-shadow:0 4px 5px -4px rgba(0,0,0,.7);box-shadow:0 4px 5px -4px rgba(0,0,0,.7)}.andiMenuLangMiddleBarBackBtn{width:25px!important;height:24px!important;font-size:24px!important;color:#fff!important;display:inline-block;float:right;vertical-align:top;margin:20px 10px 5px!important}#andiMenuLangMiddleBarHeading{float:right;height:24px!important;font-size:16px;color:#fff!important;font-weight:400;line-height:64px}#wrapMenuLang .langChoose,#wrapMenuLang .langComeSoon,.andiMenuLangMiddleBarRadioBtn{line-height:50px!important;font-size:16px!important}.andiMenuLangMiddleBarRadioBtn{width:100%!important;height:50px!important;display:block;border-bottom:1px solid #888!important;text-align:right!important;padding:0 12px!important;margin:0!important}#wrapMenuLang .langComeSoon{float:left;color:#00f}#wrapMenuLang .langChoose{float:left;color:#00f;margin:0!important}.andiMenuLangMiddleBarWrapLang{padding:5px!important;position:relative!important}#andiMenuLangMiddleBarSaveBtn{background-color:#4D4D4D;color:#fff;font-weight:bolder;position:absolute!important;bottom:0;width:320px;height:50px;line-height:50px;text-align:center;right:0}#andiMenuLangMiddleBarWrapLang :focus,#andiwrapsmallmenusetting2 :focus{outline:#888 solid 3px!important}#andiCloseSaveBtn{width:50%;text-align:center;margin:8px auto 0;height:30px;padding-top:4px;border:1px solid #888;border-radius:5px}.IoVaWskipArea{font-family:arial!important;position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;z-index:9999999988;border:0;background-color:#000!important;color:#fff!important;font-size:16px!important;display:block}.IoVaWskipArea:focus{clip:auto;height:auto;width:auto;overflow:visible;margin:0;padding:0 10px}[href="#KKolO"]{position:fixed!important;bottom:0!important}.Bvuob{background-color:rgba(0,0,0,.7);z-index:9999999;position:fixed}.HBQgA{position:relative;background-color:#fff;z-index:9999999999999;overflow:auto}body.ANDIhighlight-is-active{pointer-events:none}.ANDIhighlight:hover,.ANDIhighlightFocus{box-shadow:0 0 0 99999px rgba(0,0,0,.35)!important;position:relative;z-index:9999;transition:box-shadow .65s}div.AueIG img{background-color:#03A9F4!important}#jilVt #Layer_1 path{fill:#fff!important}.rashe{position:relative;text-decoration:underline;text-decoration-style:double!important;text-decoration-color:#1DA1F2}.rashe:focus::after,.rashe:hover:after{display:block;left:-50%;position:absolute;z-index:9999;background-color:#000;margin:-16px 0 0;color:#fff;padding:3px;content:attr(aria-label)}div#andiTestModeAlert { font-size: 15px; line-height: 120%; }#BrowerNavigationBar,#BrowerNavigationTab{background-color:#0288D1;height:30px;color:#fff}[ScJKeImg]:focus,[ScJKeImg]:hover{transform:scale(1.3);transition:transform .5s}#ZxBGV{min-width:550px;line-height:105%!important;position:fixed!important;color:#fff!important;background-color:#000!important;font-family:arial!important;z-index:9999999999!important;-webkit-border-radius:2px!important;-moz-border-radius:2px!important;border-radius:2px!important;-webkit-transition:all 50ms ease-in-out!important;-moz-transition:all 50ms ease-in-out!important;-ms-transition:all 50ms ease-in-out!important;-o-transition:all 50ms ease-in-out!important;transition:all 50ms ease-in-out!important;margin:20px 0 0}#wrapBrowerNavigation{width:100%;height:60px;position:fixed;top:0;z-index:999999999}#BrowerNavigationBar{width:100%;direction:rtl}#BrowerNavigationBar>div{float:right;width:48px;height:30px;margin:0;display:inline-block;vertical-align:top}#BrowerNavigationTab{padding:6px 13px 0;margin:0;display:inline-block;width:48px;top:30px;position:fixed;right:0}#BrowerNavigationTab i{margin:0 13px}#BrowerNavigationBack,#BrowerNavigationNext,#BrowerNavigationOpenSetting,#BrowerNavigationReload{padding:6px 13px 0}#BrowerNavigationURL{width:375px!important;height:30px}#BrowerNavigationURL input{width:250px!important;color:#000;height:25px;display:inline-block}#BrowerNavigationURL div{width:48px!important;color:#fff;margin:0 10px;display:inline-block}#BrowerNavigationClose{padding:6px 13px 0;width:48px;margin:0;display:inline-block;float:left!important}#canvasLayers{opacity:1}#UACmouse{font-size:30px;text-shadow:1px 1px 5px #555;margin-top:0;position:fixed;z-index:999999999999999;width:13px;height:25px}#UAwrapCameraSetttingdetials{overflow:hidden;vertical-align:top;width:calc(100% - 330px);display:inline-block}#UAwrapCameraSetttingdetials .UAwrapCameraSetttingdetialsinner [class^=level]{overflow:scroll;overflow-y:scroll;overflow-x:hidden;padding:20px;vertical-align:top;display:inline-block;height:100%}#UAwrapCameraSetttingdetials .level2-1 label{width:30%;display:inline-block}#UAwrapCameraSetttingdetials .level2 label{width:48%;display:inline-block}#UAwrapCameraSetttingdetials [class^=level]{position:relative}#UAwrapCameraSetttingdetials [class^=level] h2{font-size:24px;color:#0288D1}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev{position:absolute;bottom:0;width:100%}#UAwrapCameraSetttingdetials .mousemovecrossscreen,#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div,.CameraSetttingEnd{display:inline-block;cursor:pointer;text-align:center;width:100px;height:35px;border-radius:3px;color:#fff}#UAwrapCameraSetttingdetials .CameraSetttingEnd{display:inline-block;cursor:pointer;text-align:center;width:165px;height:30px;border-radius:3px;color:#fff;padding:5px;margin:21px calc((100% - 165px)/ 2)}#UAwrapCameraSetttingdetials .mousemovecrossscreen{width:200px;font-size:25px;height:50px;padding:6px;margin:10px calc((100% - 200px)/ 2)}#UAwrapCameraSetttingdetials .cameracheckclick{margin:27%;width:200px;font-size:35px;height:50px}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div.CameraSetttingNextLevel,.CameraSetttingEnd,.mousemovecrossscreen{background-color:#00BFFF}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div.CameraSetttingNextLevel{float:left;margin:0 50px}#UAwrapCameraSetttingdetials .wrapBTNSnextPrev>div.CameraSetttingbackLevel{background-color:#888!important}#UAwrapCameraSetttingdetials .fa-mouse-pointer,.fa-hand-o-up{text-shadow:1px 1px 5px #555}#UAwrapCameraSetttingdetials .level2-1 .fa-hand-o-up,#UAwrapCameraSetttingdetials .level2-1 .fa-mouse-pointer{font-size:100px!important}#UAwrapCameraSetttingdetials *{box-sizing:border-box;vertical-align:top;direction:rtl;text-align:right;font-size:16px}#wrapCameraSetttingVideo{padding:10% 0 0;position:relative;width:320px;display:inline-block;height:100%}#UAwrapCameraSetttingdetials ol{margin:5px 30px;list-style-type:decimal}#UAwrapCameraSetttingdetials li{list-style-type:decimal}.cameraUAredSquare{background-color:red;width:60px;height:60px;position:fixed;z-index:999999999}#BrowerNavigationScrollDoan,#BrowerNavigationScrollUp{position:fixed;background-color:rgba(255,255,255,.45)!important;right:0}.UAwrapCameraSetttingdetialsinner>div{overflow:hidden!important}#videoCanvas{position:relative!important;left:0;bottom:0}#layer2{position:absolute!important;left:0;bottom:0}#wrapCameraSettting h2{margin:0 0 10px;color:#000!important}#cameraOpenContactForm{text-decoration:underline;color:#00f;font-weight:bolder;cursor:pointer}#UACmouseBG{position:absolute;top:0;left:0;background-color:#fff!important}#BrowerNavigationScrollUp{top:calc(80% - 50px)}#BrowerNavigationScrollDoan{top:calc(95% - 50px)}#closeCameraSetting{z-index:999999999999999999;position:absolute;font-size:40px;top:10px;left:10px}#RFjdP .vjEnr{position:fixed!important;bottom:0;top:auto!important}#TUAreadsAloudWrap{z-index:999999999;position:fixed;bottom:0;width:300px;height:65px;right:calc(50% - 150px);direction:rtl}#TUAreadsAloudmenau [role=button]{width:48px;height:48px;display:inline-block;fill:#fff!important;cursor:pointer}#TUAreadsAloudmenauText{width:100%;height:15px;color:#fff;font-size:16px}.KJMJHreadsAloudSetting{width:70%;margin:auto}.KJMJHreadsAloudSetting label{display:inline-block;width:90%;font-size:16px;color:#000;font-weight:notmal;margin:5px 0}.KJMJHreadsAloudSetting h3{font-size:24px;text-align:center}.KJMJHreadsAloudSetting p{display:block;font-size:18px}.KJMJHreadsAloudSetting label input{display:inline-block;width:30%;font-size:16px}.KJMJHreadsAloudSetting label span{display:inline-block;width:68%;font-size:16px}.KJMJHreadsAloudSetting .TUAreadsAloudReset{margin:0 5px;text-decoration:underline;font-size:16px;cursor:pointer}.KJMJHreadsAloudSetting .IGuDeExmp{text-align:center;cursor:pointer}.TUAhighlight{font-size:24px;outline:#000 solid 1px;color:#000;background-color:#ff0;background-repeat:no-repeat;background-position:center left;background-size:20px}.UAarrowAboveNumbersWrap{position:relative;display:inline-block;line-height:140%}.UAarrowAboveNumbers{position:absolute;top:-5px;width:30px;height:10px;background-size:100% 100%;background-repeat:no-repeat;left:0;line-height:120%}#activeUserChooseSet,#loadingBSqsa,#menuMessageAlert,#saveUserChooseSet,div#changePanelSetting{position:absolute!important}#activeUserChooseSet,#saveUserChooseSet{top:-20px;height:40px;border-radius:20px}#KmZzv{background-color:#000;color:#fff;text-align:center;display:block;font-size:16px;z-index:999999}div#changePanelSetting{bottom:0!important;transition:height .25s ease 0s;width:100%;height:0}.spaceFnDownSave{color:red!important;font-weight:700!important;font-size:15px!important}#CrXug+.spaceFnDownSave{width:50%!important}#menuMessageAlert .closemenuMessageAlertAndiBtn{background-color:#03A9F3;color:#fff;text-align:center;margin:10px;padding:10px;border-radius:2px}#menuMessageAlert .closemenuMessageAlert:focus{outline:#fff solid 2px!important}#menuMessageAlert .closemenuMessageAlert{left:-20px;top:-20px;position:absolute!important;color:#fff;background-color:#000;padding:20px;font-size:25px}#VChelpCloseBtn,#panelToshowMainContentCloseBtn{position:fixed!important;z-index:99999999999999999999999}#menuMessageAlert h3{font-size:20px;text-align:center;padding:30px 0}#menuMessageAlert H4{font-size:15px;text-align:center;padding:20px 0}#menuMessageAlert .wrapText{padding:15px;height:100%;background-color:#fff;overflow:auto;direction:rtl}#VChelp,#panelToShowText{z-index:99999999;top:0;overflow:scroll;position:fixed}#menuMessageAlert{z-index:999999999;left:0;top:0;-webkit-box-shadow:0 0 0 9999px rgba(0,0,0,.75)!important;-moz-box-shadow:0 0 0 9999px rgba(0,0,0,.75)!important;box-shadow:0 0 0 9999px rgba(0,0,0,.75)!important;height:auto!important}#UAwrapCameraSetttingdetials input[type=radio]{cursor:pointer;margin:0;-webkit-appearance:none;-webkit-margin-start:0;-webkit-margin-end:3px;display:inline-block;height:19px;position:relative;vertical-align:baseline;width:19px!important;background:#FFF;border-radius:100%;border:1px solid #dedede}#UAwrapCameraSetttingdetials input[type=radio]:checked::before{-webkit-margin-start:3px;background:#2f3239;border-radius:100%;content:\'\';display:inline-block;font-size:9px;height:9px;left:1px;opacity:1;position:absolute;top:0;vertical-align:top;width:9px;margin:4px}.UAtextToShow:nth-child(3){padding-top:40px}#TUAshowMainContentWrap svg{width:40px}#TUAshowMainContentWrap{box-sizing:border-box;-webkit-box-shadow:0 0 6px 0 #000;box-shadow:0 0 6px 0 #000;z-index:999999999999;width:80px;left:10px;padding-top:5px;position:fixed;bottom:10px;background-color:#fff;height:90px;text-align:center}#TUAshowMainContentWrap p{margin:0;text-align:center;font-size:15px!important;line-height:16px!important}#TUAshowMainContentmenu [role=button]{width:48px;display:inline-block}#TUAreadsAloudmenau{text-align:center;width:300px;border:1px solid #fff;height:65px;margin:0 auto;background-color:#0288D1}#panelToshowMainContentCloseBtn{cursor:pointer;font-weight:bolder;margin:9px;font-size:30px;background-color:#000;color:#fff;padding:5px}#panelToShowText *{box-sizing:border-box}#panelToShowText{box-sizing:border-box;background-color:#fff;color:#000;font-size:16px;-webkit-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);-moz-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);box-shadow:0 0 5px 99999px rgba(0,0,0,.62);direction:rtl}.UAtextToShow{margin:10px;font-size:24px;line-height:120%;text-align:right}.wrapText img{text-align:center;margin:0 auto;display:block}.innertexttoread{padding:15px;margin-top:20px}#UserChooseSetAddMoreOption{position:relative!important;width:320px;margin:auto;background-color:#fff;height:140px}#UserChooseSetAddMoreOptionText{color:#000;TEXT-ALIGN:center;padding:25px 0 0}#UserChooseSetAddMoreOptionBtn{display:block;width:150px;text-align:center;border:1px solid #1689CE!important;margin:13px auto 0;padding:5px}#UserChooseSetAddMoreOptionBtn span{color:#1689CE;display:inline-block;margin:0 5px}div#wrapsetBtn [role=button]{display:inline-block;height:32px;width:auto;padding:6px 10px 0;margin:5px;color:#fff;background-color:#A1A1A1;border-radius:20px;transition:background-color .3s linear}div#wrapsetBtn *{display:inline-block!important}div#wrapsetBtn [role=button] p{font-size:13px;color:#fff;display:inline-block}div#wrapsetBtn [role=button] svg{height:20px!important;margin:0 3px 3px;fill:#fff;display:inline-block}.saveUserChooseSetLoadAnimateRightOn{-webkit-animation:rotationRightOn 750ms linear}@-webkit-keyframes rotationRightOn{from{-webkit-transform:rotate(-180deg)}to{-webkit-transform:rotate(-359deg)}}.saveUserChooseSetLoadAnimateLeftOn{-webkit-animation:rotationLeftOn 750ms linear}@-webkit-keyframes rotationLeftOn{from{-webkit-transform:rotate(180deg)}to{-webkit-transform:rotate(359deg)}}.saveUserChooseSetLoadAnimateRightOff{-webkit-animation:rotationRightOff 750ms linear}@-webkit-keyframes rotationRightOff{from{-webkit-transform:rotate(-359deg)}to{-webkit-transform:rotate(-180deg)}}.saveUserChooseSetLoadAnimateLeftOff{-webkit-animation:rotationLeftOff 750ms linear}@-webkit-keyframes rotationLeftOff{from{-webkit-transform:rotate(359deg)}to{-webkit-transform:rotate(180deg)}}#activeUserChooseSet svg:hover,.activeUserChooseSetOn svg{fill:#FC4482!important}#saveUserChooseSet:hover{color:#FC4482!important}#wrapsetBtn [role=button]:hover{background-color:#F98BB0!important}svg#svgreadableFont{height:17px!important}#changePanelSetting #MoexW{height:135px;margin:0 auto;padding-top:10px}#changePanelSetting #WNAYU{width:150px;color:#fff}#wrapOnOffSaveBtn{width:295px;margin:auto}#activeUserChooseSet{background-color:#fff;width:40px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75);padding:7px 2px}#wrapUserChooseSet{width:320px;margin:auto}#wrappromoText{height:45px;width:295px;margin:auto}#wrapsetBtn{text-align:right;width:295px;margin:0 auto 35px}#saveUserChooseSet{color:#7D7D7D!important;right:0;opacity:0;z-index:-1;background-color:#fff;width:40px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75);padding:11px 7.5px;font-size:35px}#VChelpInner table td,#VChelpInner table th{font-family:Arial,sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999}div#wrapimgsendformtanks img{margin:29px auto 0}div#wraptextsendformtanks{margin:20px 10px;text-align:center}div#backmainscreensendformtanks{margin:0 auto;width:250px;padding:10px;background-color:#0288D1!important;text-align:center;color:#fff}#VChelpInner table{border-collapse:collapse;border-spacing:0;border-color:#999;margin:0 auto}#VChelpInner table td{color:#444;background-color:#F7FDFA}#VChelpInner table th{font-weight:400;color:#fff;background-color:#26ADE4}#VChelpInner .saveNewVC{cursor:pointer;border:1px solid #26ADE4;background-color:#26ADE4;color:#fff;padding:3px;margin:5px 0;border-radius:2px;width:auto}#VChelp,#VChelpCloseBtn,#wrapActiveAndiFns{background-color:#fff}@media screen and (max-width:767px){#VChelpInner table,#VChelpInner table col{width:auto!important}#VChelpInner{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:auto 0}}#VChelpCloseBtn{font-weight:bolder;margin:9px;font-size:30px}#VChelp{padding:15px;color:#000;font-size:16px;-webkit-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);-moz-box-shadow:0 0 5px 99999px rgba(0,0,0,.62);box-shadow:0 0 5px 99999px rgba(0,0,0,.62);direction:ltr}#VCmessageToUser{z-index:99999999999999999;margin:0 20px;position:fixed;width:250px;top:65%;background-color:rgba(0,0,0,.75);border-radius:5px;color:#fff;padding:5px;word-wrap:break-word}.UAaskNeedUserSetHelp{color:#fff!important;margin-top:6px!important;text-align:right}.UAaskNeedUserSetHelpFns,.UAaskNeedUserSetHelpFns li{color:#fff!important}.wrapUAaskNeedUserSetHelp+#YQger{text-align:left!important;margin-left:23px!important}.UAshowUserSetHelp{margin:2px!important;width:auto!important;padding:7px!important}#KNOZd{display:inline-block;width:120px;text-align:center;height:40px!important;padding:0 5px!important}#changePanelSetting #MoexW{width:95%}#andiupdateexiestingsetting{height:auto}#oECFz .spaceFnDownSave{margin-top:12px}#wrapColorBullsFnDownSave{margin:0!important}#wrapActiveAndiFns{width:300px;font-size:16px;border-radius:2px;direction:rtl;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 2px 0 rgba(0,0,0,.75);box-shadow:0 0 2px 0 rgba(0,0,0,.75)}#wrapActiveAndiFns *{font-size:16px;text-align:right;color:#000;font-family:arial}#wrapActiveAndiFns img{display:inline-block;margin-top:12px;width:40px;height:40px}#wrapActiveAndiFns .ActiveAndiFnsText{width:calc(100% - 45px)!important;display:inline-block;vertical-align:top;padding-top:10px;line-height:120%;margin-bottom:20px}#wrapActiveAndiFns .ActiveAndiFnsBtnsNo,#wrapActiveAndiFns .ActiveAndiFnsBtnsYes,#wrapActiveAndiFns .UAopenProfile{height:40px!important;margin-bottom:10px;padding:8px 0 6px!important;cursor:pointer;text-align:center;box-sizing:border-box;vertical-align:top}#wrapActiveAndiFns .ActiveAndiFnsBtnsYes,#wrapActiveAndiFns .UAopenProfile{width:150px!important}#wrapActiveAndiFns .ActiveAndiFnsBtnsNo{border:1px solid #03A9F4}#wrapActiveAndiFns .wrapActiveAndiFnsBtns{text-align:center}#changePanelSetting .wrapUAaskNeedUserSetHelp1{height:35px;width:100%;background-color:#000;color:#fff;padding:10px;display:inline-block}#changePanelSetting .wrapUAaskNeedUserSetHelp1 .UAaskNeedUserSetHelpArrowUp{height:10px;width:20px;display:inline-block;float:left}#changePanelSetting .wrapUAaskNeedUserSetHelp1 .UAaskNeedUserSetHelpArrowUp img{height:10px;width:20px}#loadingBSqsa .wrapText{padding:0!important;height:100%;background-color:#fff;overflow:auto}#loadingBSqsa{z-index:999999999;left:0;top:0;-webkit-box-shadow:0 0 0 9999px rgba(0,0,0,.75);-moz-box-shadow:0 0 0 9999px rgba(0,0,0,.75);box-shadow:0 0 0 9999px rgba(0,0,0,.75)}.UAaddBtnReadAloud svg{position:absolute;top:0;left:0}.UAaddBtnReadAloud{display:none;width:38px;height:35px;background-color:#0288D1;color:#fff;font-size:16px;position:relative;padding:3px 0}.TUAhighlightEasyRead,.TUAhighlightEasyRead *{font-size:20px!important}.UAeasyReadOn [data-andiallelmwithtext]{line-height:160%}.UAaddBtnReadAloud .setTextState{vertical-align:top;padding:8px 0;display:inline-block;position:absolute;top:0;left:40px}.TUAhighlightEasyRead{outline:#000 solid 1px!important;color:#000!important;background-color:#ff0!important;background-repeat:no-repeat!important;background-position:center left!important;background-size:20px!important}.TUAhighlightEasyRead h1,.TUAhighlightEasyRead h2,.TUAhighlightEasyRead h3,.TUAhighlightEasyRead h4,.TUAhighlightEasyRead h5,.TUAhighlightEasyRead h6{font-size:24px!important}.UAarrowAboveNumbersWrap3:nth-child(even){background-color:red}.UAarrowAboveNumbersWrap3:nth-child(odd){background-color:#ff0}.UAtextToRead{margin:10px}#UAcancelguideVoiceCommends,#UAopenguideVoiceCommends{width:80%!important;border-radius:2px;margin:5px 0!important;display:block;padding:5px}#panelToShowTextCloseBtn{position:fixed;font-weight:bolder;margin:3px;font-size:16px;background-color:#000;color:#fff;padding:5px}#wrapopenguideVoiceCommends{text-align:center}#wrapopenguideVoiceCommends *{text-align:center;font-size:16px}#UAcancelguideVoiceCommends{text-decoration:underline;border:1px solid #0288D1}#wraplistvoicecommends{height:35px;margin:0 auto;width:480px;text-align:center;font-size:16px;position:fixed!important;bottom:0!important;transition:height .25s ease 0s;z-index:999999999999999999999;right:calc(50% - 240px)}#wraplistvoicecommends *{text-align:right;font-size:16px}#VChelpInner>h2,#VChelpInner>p,#wrapinnerHELPbtns,#wrapinnerHELPbtns>div{text-align:center}#voiceCommendpanel{overflow-x:hidden;overflow-y:scroll}#voiceCommendpanel table{margin:0 auto}#voiceCommendpanel table,#voiceCommendpanel table td,#voiceCommendpanel table th{border:1px solid #fff;border-collapse:collapse;padding:5px}#voiceCommendpanel table th,#voiceCommendpanel table th *{background-color:#ccc;color:#000}#voiceCommendpanel h3{font-size:24px;margin:10px 5px 5px;color:#0288D1;font-weight:700}#voiceCommendpanel>div>table>tbody>tr>td:nth-child(1) p,#voiceCommendpanel>div>table>tbody>tr>td:nth-child(2) p,#voiceCommendpanel>div>table>tbody>tr>td:nth-child(3) p{color:#0288D1}#voiceCommendpanel *{color:#fff}#wraplistvoicecommends .wrapUAaskNeedUserSetHelp2{height:35px;width:300px;background-color:#000;color:#fff;padding:10px;display:inline-block;text-align:center;box-sizing:border-box}#wraplistvoicecommends .wrapUAaskNeedUserSetHelp2 .UAaskNeedUserSetHelpArrowUp{height:10px;width:20px;display:inline-block;float:left}#wraplistvoicecommends .wrapUAaskNeedUserSetHelp2 .UAaskNeedUserSetHelpArrowUp img{height:10px;width:20px}#wraplistvoicecommends #voiceCommendpanel{display:block;width:480px;height:215px;background-color:#000}#menuMessageAlert ol li{list-style-position:outside!important;list-style:decimal;display:list-item;margin:0 10px}.ZWDCr.accessibleIframe:focus+iframe{margin-top:-50px}.accessibleIframe:focus+iframe{border:3px solid #0288D1}#wrapinnerHELPbtns>div{display:inline-block;box-sizing:border-box;padding:45px 0;width:150px;height:150px;background-color:#26ADE4;color:#fff;font-size:16px;margin:15px;vertical-align:top}#VChelpInner>h2{font-size:26px}#VChelpInner>p{font-size:16px;margin:0}#wrapfocommendslang,#wraprunguideVoiceCommendsHTML,#wraptablefocommends{display:none;opacity:0}#openVChelp{max-width:640px;margin:18px auto 0;padding:4px;box-sizing:border-box;vertical-align:top}#openVChelp span{vertical-align:top;display:inline-block;padding:5px 10px}#setannyanglang{padding-bottom:50px;display:block}</style>');
    UA1("head").appendHtml('<style class="UAmaincssrtl">.TUAhighlight{background-image: url(' + andiUA.KpAEX + "/images/icons8-pin.svg)} #jilVt select:focus,\t#lWMeB:focus {}   #jilVt select,  \t#lWMeB {} #gAoCt { background-image: url(" + andiUA.KpAEX + "/images/contactFormBigImg.png);}#oGNab .ltsXQ { background-image: url(" + andiUA.KpAEX + "/images/devices_CategoryCover.png);}#vbCoe .ltsXQ { background-image: url(" + 
    andiUA.KpAEX + "/images/ColorAdjust_CategoryCover.png);}#ratYL .ltsXQ { background-image: url(" + andiUA.KpAEX + "/images/bigImgContext.png);}#yIiKG .ltsXQ { background-image: url(" + andiUA.KpAEX + "/images/bigImgText.png);}.Awzjy , .KaxwEspace { background-image: url(" + andiUA.KpAEX + "/images/reset.png);}#SQoLGBigImg { background-image: url(" + andiUA.KpAEX + "/images/andy-faces02-02.svg);}</style>");
  }
  andiUA.keys = {KBQEs:["search", "srch"], zTduJ:["required", "*"], NUytp:["\u05de\u05e1\u05e4\u05e8", "num", "number"], GydPD:["minlength"], GnhBC:["maxlength"], MSDaC:["mail", "\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9", "\u05de\u05d9\u05d9\u05dc"], khxNw:["name", "firstname", "fname", "\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9", "\u05e9\u05dd \u05de\u05dc\u05d0", "first name"], 
  Hnrfh:["lastname", "lname", "\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4", "last name"], pBBHW:["UserName", "User Name", "\u05e9\u05dd \u05de\u05ea\u05e9\u05de\u05e9"], ytJtP:["password", "pass", "\u05e1\u05d9\u05e1\u05de\u05d4"], edvpp:["password confirm", "passwordconfirm", "password_confirm", "confirm password", "confirmpassword", "confirm_password", "\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d4"], clZjy:["address"], 
  xfkWq:["country"], DkfIW:["city"], UBZhC:["street"], JRlun:["zip", "postcode"], IudEW:["POBox"], xfBjE:["phone", "telephone", "tel", "mobile", "fax", "\u05e4\u05e7\u05e1", "\u05e0\u05d9\u05d9\u05d3", "\u05de\u05d5\u05d1\u05d9\u05d9\u05dc", "\u05e1\u05dc\u05d5\u05dc\u05e8\u05d9"], ZBXLn:["prefix", "pref"], PwNyg:["date"], FPBjz:["yy", "yyyy", "\u05e9\u05e0\u05d4", "\u05e9\u05e0\u05ea \u05dc\u05d9\u05d3\u05d4", 
  "\u05e9\u05e0\u05ea", "year"], jiVvJ:["mm", "month", "\u05d7\u05d5\u05d3\u05e9"], BiKuO:["\u05d9\u05d5\u05dd", "day"], XlJJc:["cardmonth", "expdate_month", "expdatemonth"], SsEkb:["cardyear"], mVEto:["cc", "creditcard", "\u05d0\u05e9\u05e8\u05d0\u05d9", "\u05db\u05e8\u05d8\u05d9\u05e1", "cardno", "cardnumb", "card_Id"], CbgBX:["payments"], nhmJt:["cvv", "\u05e7\u05d5\u05d3 \u05d0\u05d1\u05d8\u05d7\u05ea \u05db\u05e8\u05d8\u05d9\u05e1", 
  "3 \u05e1\u05e4\u05e8\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05e0\u05d5\u05ea \u05d1\u05d2\u05d1 \u05d4\u05db\u05e8\u05d8\u05d9\u05e1"], dxIQF:["captcha", "accesscode"], UZHBl:["units", "amount", "quantity", "item"], OJVDM:["qjPfE", "msg", "textarea", "comments", "content", "description", "dscrpt"], qnlPh:["subject", "\u05d4\u05d5\u05d3\u05e2\u05d4"], QXTrB:["next", "leftarrow"], LDjnq:["prev", "rightarrow"], bRYKf:["scroll-top", 
  "to the top", "to-the-top", "scrollUp", "to-top", "totop", "#top"], wxKwe:["rubric", "title", "heading", "caption"]};
  andiUA.KNTQg = andiUA.tVXTx;
  
  if (andiUA.zZBgg == "he") {
		andiLoadCssRtl();
  } else if (andiUA.zZBgg == "ar") {
		andiLoadCssRtl();
  } else if (andiUA.zZBgg == "ru") {
		andiLoadCssLtr();
  } else {
		andiLoadCssLtr();      
  }
  
  andiUA.rcVSn = function(el) {
    if (!(el instanceof Element)) {
      return;
    }
    var path = [];
    while (el.nodeType === Node.ELEMENT_NODE) {
      var selector = el.nodeName.toLowerCase();
      if (el.id) {
        selector += "#" + el.id;
        path.unshift(selector);
        break;
      } else {
        var sib = el, nth = 1;
        while (sib = sib.previousElementSibling) {
          if (sib.nodeName.toLowerCase() == selector) {
            nth++;
          }
        }
        if (nth != 1) {
          selector += ":nth-of-type(" + nth + ")";
        }
      }
      path.unshift(selector);
      el = el.parentNode;
    }
    return path.join(" > ");
  };
  andiUA.rcVSn = function(el) {
    if (!(el instanceof Element)) {
      return;
    }
    var path = [];
    while (el.nodeType === Node.ELEMENT_NODE) {
      var selector = el.nodeName.toLowerCase();
      if (el.id) {
        selector += "#" + el.id;
        path.unshift(selector);
        break;
      } else {
        var sib = el, nth = 1;
        while (sib = sib.previousElementSibling) {
          if (sib.nodeName.toLowerCase() == selector) {
            nth++;
          }
        }
        if (nth != 1) {
          selector += ":nth-of-type(" + nth + ")";
        }
      }
      path.unshift(selector);
      el = el.parentNode;
    }
    return path.join(" > ");
  };
  andiUA.zEktm = function(LbWKm, yfCnv) {

    return function() {
      if (LbWKm) {
        if (window.innerWidth >= 600) {
          return true;
        }
      }
      if (yfCnv) {
        if (window.innerWidth < 600) {
          return true;
        }
      }
      return false;
    }(LbWKm, yfCnv);
  };
  andiUA.EglES = "";
  andiUA.QOBdC = function() {

    var uiWAD = localStorage.getItem("uiWAD");
    var qOizc = andiUA.KpAEX;
    var NteyS = {};
    NteyS.Png = {saHrw:qOizc + "/images/21.cur", ihgnb:qOizc + "/images/22.cur", fGaOj:qOizc + "/images/23.cur", pVZkH:qOizc + "/images/25.cur"}, NteyS.Svg = {xemef:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2016.0.4%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2215px%22%20height%3D%229.415px%22%20viewBox%3D%220%200%2015%209.415%22%20enable-background%3D%22new%200%200%2015%209.415%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cg%20enable-background%3D%22new%20%20%20%20%22%3E%0D%0A%09%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M13.866%2C1.164c0.163%2C0.163%2C0.244%2C0.356%2C0.244%2C0.579s-0.081%2C0.416-0.244%2C0.579L8.102%2C8.085%0D%0A%09%09C7.939%2C8.249%2C7.746%2C8.33%2C7.523%2C8.33c-0.223%2C0-0.417-0.081-0.579-0.244L1.181%2C2.322C1.018%2C2.159%2C0.936%2C1.965%2C0.936%2C1.743%0D%0A%09%09s0.082-0.416%2C0.245-0.579C1.343%2C1%2C1.536%2C0.919%2C1.759%2C0.919h11.528C13.51%2C0.919%2C13.703%2C1%2C13.866%2C1.164z%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3Cg%20enable-background%3D%22new%20%20%20%20%22%3E%0D%0A%09%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000000%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M13.866%2C1.164c0.163%2C0.163%2C0.244%2C0.356%2C0.244%2C0.579%0D%0A%09%09s-0.081%2C0.416-0.244%2C0.579L8.102%2C8.085C7.939%2C8.249%2C7.746%2C8.33%2C7.523%2C8.33c-0.223%2C0-0.417-0.081-0.579-0.244L1.181%2C2.322%0D%0A%09%09C1.018%2C2.159%2C0.936%2C1.965%2C0.936%2C1.743s0.082-0.416%2C0.245-0.579C1.343%2C1%2C1.536%2C0.919%2C1.759%2C0.919h11.528%0D%0A%09%09C13.51%2C0.919%2C13.703%2C1%2C13.866%2C1.164z%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E%0D%0A", 
    VxqGT:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2035%2035%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M21.773%2021.287l1.414%202.83c-.536%201.653-1.507%202.993-2.91%204.02-1.406%201.025-2.973%201.538-4.7%201.538-1.442%200-2.776-.358-4-1.074s-2.195-1.686-2.912-2.91c-.716-1.225-1.074-2.558-1.074-4%200-1.673.483-3.197%201.45-4.575.965-1.377%202.233-2.352%203.805-2.925l.236%201.816c-1.127.5-2.028%201.264-2.703%202.294-.674%201.03-1.012%202.16-1.012%203.39%200%201.71.607%203.173%201.823%204.388%201.215%201.216%202.678%201.823%204.388%201.823%201.165%200%202.24-.3%203.224-.9s1.747-1.41%202.287-2.433c.54-1.022.77-2.115.686-3.28zm7.598%201.387l.805%201.58-3.55%201.775c-.12.063-.254.096-.4.096-.37%200-.634-.16-.79-.485L22.12%2019.03h-6.543c-.222%200-.418-.076-.59-.23s-.27-.34-.297-.56l-1.33-10.8c-.02-.148.008-.343.082-.583.13-.472.393-.853.79-1.144s.846-.436%201.345-.436c.61%200%201.132.217%201.566.65s.652.957.652%201.567c0%20.64-.24%201.182-.722%201.63s-1.035.64-1.663.575l.513%204.007h5.864v1.774h-5.643l.222%201.774h6.31c.368%200%20.632.162.79.485l3.16%206.31%202.745-1.37z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    jRUVZ:qOizc + "/images/logo.png", IhwZN:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215.906%22%20height%3D%2221.992%22%20viewBox%3D%220%200%2015.906%2021.992%22%3E%0A%20%20%3Ccircle%20cx%3D%227.94%22%20cy%3D%227.968%22%20r%3D%227.834%22%2F%3E%0A%3C%2Fsvg%3E%0A", Back:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215.429%22%20height%3D%2218.411%22%20viewBox%3D%220%200%2015.429%2018.411%22%3E%0A%20%20%3Cpath%20d%3D%22M15.43%209.41v1.287c0%20.354-.11.658-.327.908-.218.252-.5.377-.85.377h-7.07l2.942%202.953c.255.24.382.543.382.904s-.127.662-.382.903l-.753.764c-.248.247-.55.37-.904.37-.35%200-.653-.123-.914-.37l-6.54-6.55c-.247-.247-.37-.55-.37-.903%200-.35.123-.653.37-.914l6.54-6.53c.254-.254.56-.38.914-.38.348%200%20.65.126.904.38l.753.744c.255.255.382.56.382.914s-.127.66-.382.914L7.182%208.125h7.07c.35%200%20.633.126.85.377.217.252.327.555.327.91z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    Next:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215.429%22%20height%3D%2218.411%22%20viewBox%3D%220%200%2015.429%2018.411%22%3E%0A%20%20%3Cpath%20d%3D%22M14.786%2010.055c0%20.36-.124.666-.372.914l-6.54%206.538c-.26.247-.565.37-.913.37-.34%200-.642-.123-.903-.37l-.753-.754c-.255-.254-.382-.56-.382-.914s.127-.66.382-.914l2.943-2.943H1.175c-.348%200-.63-.125-.85-.377-.217-.25-.325-.554-.325-.91V9.412c0-.353.108-.656.326-.908.218-.25.5-.377.85-.377h7.07L5.305%205.172c-.255-.24-.382-.542-.382-.903%200-.363.127-.664.382-.905l.753-.753c.255-.255.556-.382.904-.382.355%200%20.66.127.915.382l6.54%206.54c.247.233.37.534.37.903z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    njyJs:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215.429%22%20height%3D%2218.411%22%20viewBox%3D%220%200%2015.429%2018.411%22%3E%0A%20%20%3Cpath%20d%3D%22M15.178%2011.02c0%20.032-.004.056-.01.07-.43%201.793-1.326%203.248-2.692%204.363s-2.967%201.672-4.802%201.672c-.978%200-1.923-.184-2.837-.552s-1.73-.894-2.446-1.577l-1.295%201.296c-.127.127-.277.19-.452.19-.174%200-.324-.063-.452-.19-.127-.128-.19-.278-.19-.452v-4.5c0-.174.063-.324.19-.452.128-.127.278-.19.452-.19h4.5c.175%200%20.325.063.452.19.127.128.19.278.19.452s-.063.324-.19.452l-1.376%201.376c.476.44%201.015.783%201.617%201.024s1.23.362%201.878.362c.897%200%201.734-.22%202.512-.653.776-.435%201.4-1.033%201.868-1.797.073-.114.25-.506.532-1.176.054-.154.154-.23.302-.23h1.93c.086%200%20.16.03.225.096.064.062.096.14.096.226zm.25-8.038v4.5c0%20.174-.062.325-.19.452-.127.128-.277.19-.45.19h-4.5c-.176%200-.326-.062-.453-.19-.13-.126-.192-.278-.192-.452s.063-.324.19-.45l1.387-1.388c-.99-.918-2.16-1.376-3.506-1.376-.897%200-1.734.218-2.51.653-.778.436-1.4%201.036-1.87%201.8-.073.113-.25.505-.53%201.175-.055.154-.155.23-.303.23H.503c-.087%200-.162-.03-.226-.095S.18%207.89.18%207.804v-.07C.616%205.94%201.52%204.484%202.892%203.37c1.373-1.116%202.98-1.673%204.82-1.673.98%200%201.93.186%202.855.557.924.372%201.744.896%202.46%201.572l1.307-1.295c.127-.127.277-.19.452-.19.174%200%20.324.063.45.19.13.128.193.28.193.452z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    copy:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218.411%22%20viewBox%3D%220%200%2018%2018.411%22%3E%0A%20%20%3Cpath%20d%3D%22M17.036%204.27c.268%200%20.495.093.683.28s.28.415.28.682v12.215c0%20.268-.094.495-.28.683s-.416.28-.684.28H7.393c-.268%200-.495-.093-.683-.28s-.28-.415-.28-.683v-2.893H.963c-.268%200-.495-.094-.683-.28S0%2013.856%200%2013.59V6.84c0-.268.066-.562.2-.884.135-.32.295-.576.483-.764l4.1-4.1c.187-.187.44-.347.763-.48s.616-.2.884-.2h4.18c.267%200%20.494.093.682.28s.28.415.28.683V4.67c.456-.268.885-.4%201.287-.4h4.176zM7.11%209.05l3.176-3.175V1.697H6.43v4.178c0%20.27-.095.496-.282.684s-.416.28-.684.28H1.286v6.43H6.43v-2.572c0-.268.065-.562.2-.885.134-.32.294-.576.48-.763zm-1.967-6.5L2.14%205.556h3.003V2.55zm11.57%2014.575V5.555H12.86v4.178c0%20.268-.094.496-.28.684s-.417.28-.685.28h-4.18v6.43h9zM11.572%206.408L8.57%209.41h3.003V6.41z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    Cut:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218.005%22%20height%3D%2218.411%22%20viewBox%3D%220%200%2018.005%2018.411%22%3E%0A%20%20%3Cpath%20d%3D%22M12.658%2010.055l5.093%203.997c.19.134.272.32.252.562-.033.234-.15.405-.352.513l-1.286.643c-.087.047-.184.07-.29.07-.115%200-.22-.027-.313-.08l-6.93-3.888-1.104.663c-.054.027-.094.043-.12.05.093.33.126.653.1.975-.047.516-.234%201.01-.562%201.48-.328.474-.77.887-1.326%201.24-.884.563-1.812.845-2.782.845-.91%200-1.653-.26-2.23-.783-.602-.562-.866-1.256-.793-2.08.047-.508.234-1%20.562-1.476s.767-.89%201.316-1.245c.885-.56%201.815-.843%202.793-.843.556%200%201.062.104%201.517.31.06-.085.134-.16.222-.22l1.225-.732L6.42%209.32c-.087-.06-.16-.132-.22-.22-.456.208-.962.31-1.517.31-.978%200-1.908-.28-2.792-.843-.55-.354-.987-.77-1.315-1.245-.33-.475-.516-.968-.563-1.476C-.02%205.45.03%205.072.168%204.71c.137-.36.35-.673.638-.934.57-.53%201.312-.794%202.23-.794.97%200%201.897.28%202.78.844.558.35%201%20.76%201.327%201.236.328.475.516.97.562%201.486.027.322-.006.647-.1.975.027.006.067.023.12.05l1.105.663%206.93-3.888c.095-.054.198-.08.313-.08.107%200%20.204.023.29.07l1.287.643c.2.108.318.28.352.514.02.24-.063.428-.25.562l-5.094%204zm-6.84-2.613c.308-.28.378-.642.21-1.085-.167-.44-.52-.834-1.064-1.174-.616-.396-1.26-.593-1.93-.593-.494%200-.873.12-1.134.36-.307.282-.378.644-.21%201.086s.522.834%201.064%201.175c.616.396%201.26.595%201.93.595.495%200%20.873-.12%201.133-.363zm-.854%207.484c.543-.342.897-.733%201.064-1.176.168-.44.098-.803-.21-1.084-.262-.24-.64-.36-1.136-.36-.67%200-1.312.196-1.93.59-.54.343-.896.734-1.063%201.177-.168.44-.098.803.21%201.084.26.242.64.362%201.135.362.67%200%201.313-.2%201.93-.594zm4.038-3.907l.964.32%207.394-5.785-1.286-.644L8.36%209.24v1.135l-1.608.965.09.08c.014.014.037.033.07.06.027.028.064.067.11.122.048.053.084.094.11.12l.262.26%201.608-.963zm-2.25-2.25l.964.582V9.24c0-.24.11-.428.332-.562l.14-.08-.793-.473-.26.262c-.022.02-.055.057-.102.11s-.087.094-.12.12c-.014.014-.027.026-.04.035-.014.01-.024.02-.03.025l-.09.092zm2.44.832c.128-.127.278-.19.452-.19.175%200%20.325.063.452.19.127.128.19.278.19.453%200%20.174-.063.324-.19.45s-.277.192-.452.192c-.174%200-.324-.064-.452-.19-.127-.128-.19-.278-.19-.452%200-.175.063-.326.19-.453zm6.88%205.595l1.287-.643-5.225-4.1-1.777%201.387c-.014.022-.058.045-.13.07l5.845%203.287z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    paste:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218.411%22%20viewBox%3D%220%200%2018%2018.411%22%3E%0A%20%20%3Cpath%20d%3D%22M18%2010.697v6.75c0%20.268-.094.495-.28.683s-.416.28-.684.28H7.393c-.268%200-.495-.093-.683-.28s-.28-.415-.28-.683V15.84H.963c-.268%200-.495-.094-.683-.28S0%2015.143%200%2014.874v-13.5C0%201.107.094.88.28.692s.416-.28.684-.28h10.93c.267%200%20.495.093.683.28s.28.415.28.683V4.67c.142.088.262.182.362.28l4.098%204.1c.187.188.348.442.48.763.135.322.202.617.202.884zM10.286%202.66v-.64c0-.088-.032-.164-.096-.227-.063-.064-.14-.096-.227-.096h-7.07c-.087%200-.162.03-.226.096-.063.062-.096.14-.096.226v.642c0%20.087.033.163.097.226.063.063.14.094.226.094h7.07c.088%200%20.164-.03.228-.096.064-.062.096-.138.096-.225zM7.714%2017.126h9v-6.428h-4.178c-.27%200-.496-.094-.684-.28s-.28-.417-.28-.685V5.555H7.713v11.57zm5.143-7.714h3.003L12.857%206.41V9.41z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    IGuDe:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20opacity%3D%22.75%22%20fill%3D%22%23424242%22%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M19.12%2012.51L6.855%2019.326c-.142.08-.263.09-.364.027s-.152-.17-.152-.33V5.428c0-.16.05-.272.152-.334s.223-.052.364.028l12.263%206.814c.14.08.21.175.21.286%200%20.11-.07.207-.21.287z%22%2F%3E%3C%2Fsvg%3E", 
    stop:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20opacity%3D%22.75%22%20fill%3D%22%23424242%22%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.69%205.604v13c0%20.16-.06.3-.175.417-.117.117-.256.176-.416.176H5.37c-.16%200-.3-.06-.415-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.177-.416.116-.118.255-.177.415-.177H10.1c.16%200%20.3.06.416.176.116.117.174.254.174.414zm8.274%200v13c0%20.16-.06.3-.175.417-.118.117-.257.176-.417.176h-4.728c-.16%200-.3-.06-.416-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.175-.416.116-.118.255-.177.415-.177h4.728c.16%200%20.3.06.416.176.115.117.174.254.174.414z%22%2F%3E%3C%2Fsvg%3E", 
    vCIMi:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2016.0.4%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20enable-background%3D%22new%200%200%2024%2024%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Crect%20opacity%3D%220.75%22%20fill%3D%22%23333333%22%20width%3D%2224%22%20height%3D%2224%22%2F%3E%0D%0A%3Cline%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-miterlimit%3D%2210%22%20x1%3D%222%22%20y1%3D%2218.5%22%20x2%3D%2221%22%20y2%3D%2218.5%22%2F%3E%0D%0A%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M19%2C18V7c0-1.657-1.343-3-3-3H7C5.343%2C4%2C4%2C5.343%2C4%2C7v11%22%2F%3E%0D%0A%3C%2Fsvg%3E%0D%0A", 
    oYnKs:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%20opacity%3D%22.75%22%20fill%3D%22%23333%22%20d%3D%22M0%200h24v24H0z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20stroke%3D%22%23FFF%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M16.012%2015.312l-3.97%203.97c-.06.057-.126.084-.198.084-.074%200-.14-.027-.196-.084l-3.968-3.97c-.06-.057-.088-.122-.088-.197%200-.07.028-.14.088-.196l.424-.428c.058-.056.122-.084.196-.084.075%200%20.14.027.195.083l3.35%203.35%203.347-3.35c.057-.055.122-.083.197-.083.07%200%20.135.027.193.083l.428.426c.054.055.08.124.08.195%200%20.076-.027.14-.08.198zm-5.5-3.966c0-.734.597-1.33%201.33-1.33.734%200%201.33.596%201.33%201.33%200%20.735-.596%201.33-1.33%201.33-.734%200-1.33-.595-1.33-1.33zm5.495-2.897l-.425.424c-.058.056-.123.086-.195.086-.075%200-.142-.03-.195-.085l-3.35-3.35-3.347%203.35c-.056.056-.122.086-.198.086-.07%200-.137-.03-.196-.084l-.423-.426c-.056-.06-.084-.124-.084-.198s.028-.137.084-.197l3.97-3.968c.06-.058.124-.085.196-.085.074%200%20.14.027.195.085l3.97%203.968c.058.06.086.123.086.197s-.03.14-.086.197z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    ENDdC:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226.489%22%20height%3D%2235%22%20viewBox%3D%220%200%2026.489%2035%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20stroke%3D%22%23000%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M11.71%2033.813l-3.483-7.13-6.503%206.674V1.353l23.325%2022.05-9.218.125%203.3%206.656-7.423%203.63z%22%2F%3E%0A%3C%2Fsvg%3E%0A", wCUPV:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2225.739%22%20height%3D%2235%22%20viewBox%3D%220%200%2025.739%2035%22%3E%0A%20%20%3Cpath%20stroke%3D%22%23FFF%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M10.79%2033.73L7.306%2026.6.804%2033.275V1.27L24.13%2023.32l-9.218.124%203.3%206.656-7.423%203.63z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    NmaQX:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230.217%22%20height%3D%2235%22%20viewBox%3D%220%200%2030.217%2035%22%3E%0A%20%20%3Cpath%20d%3D%22M12.283%2026.457v-.826c0-.787-.325-1.58-.967-2.357-.29-.347-.922-.95-1.88-1.79-.955-.848-1.82-1.518-2.577-1.99-.25-.154-.637-.374-1.158-.658-2.427-1.152-2.63-1.553-2.63-1.838%200-.9.2-1.647.593-2.222.413-.603%201.073-.908%201.96-.908.538%200%201.078.096%201.605.284.513.188.942.397%201.278.623.302.207.626.402.966.58.188.1.358.168.506.206V5.48c0-.667.257-1.265.765-1.778.51-.515%201.11-.775%201.788-.775.69%200%201.294.255%201.797.758.502.502.757%201.106.757%201.795v5.486c.154-.08.33-.153.527-.217.387-.13.75-.194%201.076-.194.834%200%201.57.302%202.19.897.37-.178.77-.268%201.19-.268.482%200%20.965.114%201.433.34.422.202.745.474.964.808.312-.045.607-.067.88-.067%202.13%200%203.254%201.262%203.254%203.65%200%20.993-.197%202.105-.588%203.307-.383%201.182-.767%202.344-1.15%203.484-.374%201.106-.563%202.09-.563%202.924v.827H12.282z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.533%203.177c.624%200%201.163.228%201.62.685.455.455.684.995.684%201.618v5.956c.204-.18.488-.33.854-.45.367-.12.7-.18%201-.18.826%200%201.54.317%202.142.954.384-.217.797-.324%201.24-.324s.886.104%201.323.315c.438.21.753.495.943.855.36-.06.697-.09%201.01-.09%202.002%200%203.003%201.133%203.003%203.4%200%20.972-.19%202.05-.575%203.23-.383%201.18-.767%202.34-1.15%203.48-.385%201.14-.576%202.142-.576%203.004v.575H12.532v-.576c0-.85-.342-1.692-1.024-2.52-.302-.36-.937-.965-1.91-1.817-.97-.863-1.84-1.534-2.607-2.014-.252-.158-.643-.38-1.17-.668-1.668-.792-2.5-1.332-2.5-1.618%200-.854.182-1.545.55-2.08.364-.532.95-.8%201.754-.8.514%200%201.02.09%201.52.27.497.18.904.38%201.224.594.317.218.647.415.99.595s.633.27.872.27V5.48c0-.6.23-1.134.692-1.603.46-.466.998-.7%201.61-.7m0-.5c-.747%200-1.41.286-1.967.85-.555.562-.837%201.22-.837%201.952v9.72c-.044-.02-.09-.043-.14-.07-.33-.172-.646-.36-.938-.562-.357-.24-.805-.458-1.335-.65-.558-.2-1.125-.3-1.69-.3-.976%200-1.705.34-2.168%201.016-.424.617-.64%201.412-.64%202.363%200%20.484.445.958%202.787%202.07.513.28.887.494%201.12.64.743.464%201.6%201.124%202.54%201.963.952.833%201.576%201.427%201.857%201.765.602.73.908%201.47.908%202.197v1.076h12.516v-1.076c0-.807.186-1.764.55-2.844.385-1.142.77-2.305%201.152-3.487.398-1.225.6-2.363.6-3.384%200-3.223-1.904-3.9-3.503-3.9-.24%200-.495.018-.763.05-.238-.312-.564-.568-.974-.765-.5-.24-1.02-.363-1.54-.363-.4%200-.782.074-1.143.223-.642-.566-1.393-.853-2.238-.853-.355%200-.744.07-1.157.206-.068.022-.134.045-.197.07V5.478c0-.76-.28-1.422-.83-1.973-.55-.55-1.215-.83-1.973-.83z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M12.533%2033.367c-.7%200-1.308-.252-1.806-.75-.496-.496-.747-1.103-.747-1.804V25.63c0-.086-.02-.187-.063-.298-.044-.11-.117-.23-.215-.357l-.322-.4c-.097-.12-.225-.257-.384-.408-.167-.162-.295-.284-.384-.366-.09-.085-.216-.195-.38-.336-.15-.13-.243-.207-.28-.23-.9-.788-1.67-1.386-2.318-1.8-.244-.15-.608-.345-1.09-.578-.496-.243-.933-.467-1.307-.674-.375-.203-.767-.454-1.162-.745-.41-.3-.732-.66-.96-1.07-.23-.414-.347-.875-.347-1.37%200-1.552.425-2.855%201.262-3.874.85-1.034%202.06-1.56%203.596-1.56.716%200%201.404.102%202.052.3V5.48c0-1.313.484-2.46%201.44-3.416.955-.956%202.098-1.44%203.397-1.44%201.322%200%202.478.48%203.433%201.43.956.952%201.44%202.105%201.44%203.426v2.812c.67.075%201.322.288%201.942.636.236-.03.477-.045.724-.045%201.233%200%202.34.363%203.288%201.08%201.72.017%203.064.558%204.048%201.607%201.005%201.076%201.515%202.508%201.515%204.255%200%201.617-.423%203.596-1.258%205.88-.693%201.932-1.046%203.253-1.046%203.926v5.184c0%20.703-.25%201.31-.746%201.804-.494.497-1.102.75-1.806.75H12.533zm11.266-7.41v-.326c0-.887.197-1.925.588-3.083.384-1.14.768-2.3%201.15-3.48.374-1.15.563-2.21.563-3.152%200-2.12-.9-3.15-2.753-3.15-.294%200-.62.03-.968.088l-.18.03-.083-.16c-.166-.314-.438-.558-.83-.746-.4-.193-.81-.29-1.216-.29-.403%200-.77.095-1.116.29l-.17.097-.135-.142c-.558-.59-1.2-.876-1.96-.876-.274%200-.584.057-.922.168-.332.108-.59.242-.767.4l-.415.366V5.48c0-.56-.2-1.03-.61-1.442s-.884-.61-1.443-.61c-.547%200-1.016.204-1.433.626-.418.423-.62.89-.62%201.426v10.615h-.25c-.282%200-.605-.098-.99-.3-.356-.187-.697-.392-1.014-.61-.3-.2-.693-.392-1.167-.563-.473-.17-.956-.255-1.436-.255-.723%200-1.23.227-1.55.69-.335.49-.505%201.143-.505%201.94.018.036.23.382%202.357%201.392.546.297.94.52%201.195.68.78.486%201.668%201.173%202.642%202.04.99.867%201.624%201.47%201.935%201.844.717.87%201.08%201.77%201.08%202.678v.326H23.8z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.516.874c1.26%200%202.345.452%203.256%201.358.912.906%201.368%201.988%201.368%203.247v3.04c.744.048%201.458.27%202.142.666.252-.036.51-.054.773-.054%201.21%200%202.28.36%203.203%201.08h.052c1.642%200%202.94.507%203.898%201.528.964%201.032%201.447%202.394%201.447%204.084%200%201.596-.414%203.527-1.242%205.795-.707%201.966-1.062%203.304-1.062%204.01v5.183c0%20.636-.223%201.18-.673%201.627-.45.452-.992.677-1.63.677H12.534c-.636%200-1.177-.225-1.63-.677-.447-.448-.673-.99-.673-1.627V25.63c0-.12-.027-.248-.08-.387-.055-.137-.14-.277-.25-.422-.117-.143-.225-.278-.326-.403-.102-.126-.237-.27-.405-.432-.17-.163-.298-.286-.388-.37-.09-.084-.22-.197-.387-.342-.17-.144-.27-.228-.306-.25-.89-.78-1.663-1.38-2.323-1.8-.25-.157-.623-.355-1.114-.594-.49-.242-.924-.464-1.295-.67-.373-.2-.75-.444-1.135-.727-.384-.28-.68-.61-.89-.99-.21-.378-.315-.794-.315-1.25%200-1.5.4-2.736%201.205-3.714s1.938-1.47%203.402-1.47c.813%200%201.582.133%202.302.397v-6.73c0-1.247.455-2.327%201.367-3.238.912-.91%201.985-1.366%203.222-1.366m-2.286%2014.97c-.24%200-.53-.09-.872-.27s-.673-.377-.99-.595c-.318-.216-.726-.414-1.222-.595-.5-.18-1.007-.27-1.52-.27-.805%200-1.39.268-1.756.8-.367.535-.55%201.227-.55%202.08%200%20.286.833.826%202.5%201.618.528.288.92.51%201.17.667.77.48%201.64%201.15%202.61%202.014.972.853%201.606%201.457%201.907%201.818.683.826%201.024%201.668%201.024%202.518v.576h11.517v-.576c0-.862.19-1.864.576-3.004.384-1.14.768-2.3%201.15-3.48.384-1.182.576-2.26.576-3.23%200-2.268-1.002-3.4-3.005-3.4-.312%200-.647.03-1.01.09-.19-.36-.504-.645-.942-.854-.438-.21-.88-.315-1.323-.315s-.856.107-1.24.324c-.602-.636-1.315-.953-2.142-.953-.3%200-.633.06-1%20.18-.365.12-.65.27-.853.45V5.48c0-.624-.23-1.164-.684-1.62-.456-.456-.995-.684-1.62-.684-.61%200-1.147.234-1.61.7-.46.47-.69%201.004-.69%201.603v10.365M12.516.375c-1.368%200-2.57.508-3.574%201.513C7.938%202.89%207.428%204.1%207.428%205.478v6.055c-.575-.146-1.18-.22-1.802-.22-1.613%200-2.89.556-3.788%201.65-.876%201.064-1.32%202.42-1.32%204.032%200%20.538.128%201.04.38%201.492.244.44.59.83%201.03%201.15.404.297.806.555%201.192.764.354.197.785.42%201.312.68.474.228.833.42%201.07.567.634.402%201.395.993%202.257%201.75l.026.024.03.022c.03.022.118.096.255.212.157.136.28.243.365.323.094.087.22.207.384.366.15.144.274.276.363.387l.163.203.163.202c.076.1.138.2.175.293.036.096.044.163.044.2v5.184c0%20.77.275%201.437.82%201.98.545.546%201.212.823%201.98.823h11.517c.772%200%201.44-.277%201.983-.824.543-.54.82-1.206.82-1.978V25.63c0-.444.178-1.47%201.03-3.843.845-2.31%201.272-4.316%201.272-5.964%200-1.812-.532-3.3-1.582-4.425-1.026-1.097-2.42-1.663-4.147-1.688-.978-.717-2.11-1.08-3.37-1.08-.23%200-.455.013-.674.037-.56-.303-1.145-.503-1.743-.597V5.48c0-1.392-.51-2.604-1.516-3.603-1-.997-2.214-1.503-3.604-1.503zm-2.286%2015.97h.5V5.48c0-.47.18-.878.548-1.25.368-.373.778-.554%201.255-.554.49%200%20.904.176%201.267.538.36.36.537.775.537%201.265v7.065l.83-.736c.152-.135.38-.252.68-.35.313-.103.597-.155.844-.155.69%200%201.272.26%201.78.798l.268.284.34-.192c.31-.175.636-.26.995-.26.368%200%20.74.09%201.106.266.343.166.577.374.717.64l.168.317.355-.06c.335-.054.647-.082.928-.082%201.73%200%202.504.895%202.504%202.9%200%20.914-.186%201.95-.552%203.075-.382%201.18-.766%202.338-1.148%203.477-.4%201.184-.603%202.248-.603%203.163v.076H13.032v-.076c0-.967-.383-1.922-1.14-2.836-.32-.385-.962-.998-1.964-1.876-.982-.873-1.883-1.567-2.674-2.062-.253-.158-.633-.375-1.194-.682-1.68-.8-2.125-1.157-2.24-1.278.013-.7.168-1.27.46-1.698.27-.393.71-.583%201.344-.583.45%200%20.906.08%201.353.24.45.164.825.346%201.11.538.32.22.67.43%201.036.623.42.22.782.33%201.104.33z%22%2F%3E%0A%20%20%3Cg%3E%0A%20%20%20%20%3Cpath%20d%3D%22M23.14%2031.48c-.39%200-.728-.144-1.01-.426-.282-.282-.426-.622-.426-1.01s.144-.73.426-1.012.622-.426%201.01-.426.728.144%201.012.426c.282.282.426.622.426%201.01s-.144.73-.426%201.012-.623.426-1.01.426z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M23.14%2028.857c.322%200%20.6.118.835.353.234.234.353.513.353.834s-.118.6-.353.834c-.235.235-.513.353-.834.353s-.6-.116-.833-.352c-.234-.234-.353-.513-.353-.834s.118-.6.353-.834.512-.353.834-.353m0-.5c-.45%200-.86.173-1.187.5s-.5.736-.5%201.187.174.86.5%201.188c.325.326.735.5%201.188.5.458%200%20.857-.17%201.19-.5.325-.326.498-.737.498-1.188s-.173-.86-.5-1.188c-.333-.33-.732-.5-1.187-.5z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A", 
    FLzhu:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230.217%22%20height%3D%2235%22%20viewBox%3D%220%200%2030.217%2035%22%3E%0A%20%20%3Cg%20fill%3D%22%23FFF%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12.102%2026.888v-.733c0-.862-.354-1.73-1.052-2.576-.314-.374-.986-1.014-1.997-1.9-1.008-.895-1.927-1.605-2.733-2.113-.265-.162-.676-.396-1.23-.7-2.378-1.126-2.7-1.55-2.7-1.814%200-.92.202-1.682.6-2.262.41-.595%201.068-.896%201.955-.896.557%200%201.11.098%201.645.292.545.198.976.407%201.315.64.346.234.684.437%201.032.62.282.146.53.234.736.26V4.912c0-.66.258-1.257.767-1.772s1.11-.777%201.787-.777c.688%200%201.293.256%201.795.757.503.504.758%201.107.758%201.795v6.027c.2-.134.444-.246.736-.342.39-.13.757-.194%201.09-.194.876%200%201.644.327%202.284.974.398-.207.83-.312%201.284-.312.484%200%20.972.116%201.447.346.453.215.79.51%201.008.876.358-.057.686-.084.998-.084%202.184%200%203.29%201.25%203.29%203.71%200%201.04-.206%202.197-.612%203.444-.404%201.245-.81%202.468-1.215%203.672-.397%201.178-.6%202.23-.6%203.125v.733H12.103z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12.227%202.485c.656%200%201.226.24%201.706.72s.722%201.05.722%201.706v6.28c.217-.19.513-.348.9-.474.386-.128.736-.188%201.052-.188.872%200%201.625.332%202.26%201.004.402-.227.838-.342%201.308-.342.466%200%20.93.11%201.394.333.46.22.792.52.993.9.382-.063.733-.096%201.064-.096%202.11%200%203.165%201.196%203.165%203.586%200%201.023-.2%202.158-.606%203.404-.404%201.245-.81%202.468-1.214%203.67-.404%201.2-.604%202.256-.604%203.166v.608h-12.14v-.607c0-.896-.36-1.783-1.08-2.655-.318-.378-.987-1.016-2.012-1.915-1.024-.91-1.942-1.616-2.75-2.124-.266-.165-.68-.4-1.233-.704-1.758-.833-2.636-1.4-2.636-1.706%200-.9.19-1.628.577-2.19.387-.563%201.003-.844%201.852-.844.54%200%201.078.095%201.602.284.525.19.955.398%201.288.625.338.23.684.438%201.045.627.36.19.665.284.92.284V4.91c0-.63.244-1.19.73-1.685s1.05-.74%201.697-.74m0-.25c-.712%200-1.343.274-1.876.814S9.55%204.215%209.55%204.91v10.644c-.16-.04-.347-.114-.553-.223-.346-.18-.68-.38-1.02-.61-.35-.238-.79-.452-1.344-.653-.548-.2-1.116-.3-1.687-.3-.93%200-1.623.32-2.058.95-.412.604-.62%201.388-.62%202.334%200%20.3.214.718%202.777%201.933.56.308.96.535%201.21.69.8.503%201.713%201.21%202.715%202.1%201.007.883%201.675%201.52%201.986%201.888.677.822%201.02%201.662%201.02%202.495v.858h12.64v-.858c0-.882.2-1.92.593-3.085.405-1.204.81-2.428%201.215-3.674.41-1.26.62-2.43.62-3.48%200-2.51-1.182-3.837-3.416-3.837-.295%200-.603.022-.936.072-.23-.355-.57-.642-1.016-.854-.492-.237-.998-.357-1.5-.357-.444%200-.867.097-1.262.286-.65-.63-1.426-.947-2.307-.947-.348%200-.728.066-1.13.2-.215.07-.405.15-.572.24V4.91c0-.72-.267-1.354-.794-1.882-.523-.526-1.156-.793-1.88-.793z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cpath%20d%3D%22M12.36%2033.335c-.702%200-1.31-.252-1.802-.747-.493-.49-.744-1.096-.744-1.798v-5.165c0-.088-.02-.186-.063-.29-.042-.112-.114-.232-.215-.36-.11-.144-.22-.276-.32-.4-.097-.12-.222-.253-.38-.404-.17-.165-.297-.284-.385-.365-.09-.085-.215-.194-.38-.335-.145-.125-.235-.203-.272-.228-.906-.79-1.674-1.387-2.314-1.795-.243-.15-.606-.344-1.087-.58-.494-.24-.928-.463-1.3-.668-.397-.22-.785-.47-1.16-.746-.408-.3-.73-.657-.958-1.065-.23-.412-.347-.873-.347-1.368%200-1.547.424-2.845%201.26-3.86.846-1.03%202.05-1.552%203.582-1.552.71%200%201.396.1%202.045.298v-6.36c0-1.305.482-2.45%201.434-3.404C9.908%201.192%2011.048.71%2012.34.71c1.322%200%202.473.48%203.42%201.428.953.942%201.437%202.09%201.437%203.41v2.8c.667.077%201.315.29%201.934.636.237-.03.477-.045.722-.045%201.23%200%202.334.36%203.28%201.072%201.708.018%203.048.558%204.03%201.604%201.002%201.073%201.51%202.5%201.51%204.24%200%201.61-.42%203.582-1.25%205.86-.692%201.914-1.043%203.23-1.043%203.908v5.165c0%20.7-.253%201.305-.75%201.798-.49.494-1.096.746-1.796.746H12.36zm10.325-4.592c-.24%200-.447.09-.632.27-.18.182-.27.387-.27.628s.09.448.272.633c.18.18.386.267.63.267.246%200%20.452-.087.63-.267.18-.183.27-.39.27-.632s-.09-.447-.27-.627c-.18-.18-.388-.27-.63-.27zm.898-2.793v-.325c0-.885.196-1.918.583-3.07.385-1.135.766-2.293%201.148-3.468.374-1.152.563-2.21.563-3.14%200-2.113-.897-3.14-2.745-3.14-.306%200-.62.03-.962.088l-.18.03-.085-.16c-.162-.312-.433-.555-.827-.743-.397-.192-.805-.29-1.21-.29-.4%200-.765.096-1.116.29l-.17.095-.133-.14c-.556-.588-1.194-.873-1.954-.873-.272%200-.58.057-.914.168-.333.108-.59.242-.763.397l-.418.37V5.55c0-.55-.205-1.032-.608-1.436-.408-.41-.878-.61-1.435-.61-.547%200-1.015.205-1.43.626-.415.422-.617.886-.617%201.42v10.578h-.25c-.283%200-.614-.1-.986-.3-.354-.185-.695-.39-1.013-.606-.294-.2-.686-.39-1.162-.562-.468-.168-.948-.253-1.428-.253-.72%200-1.226.226-1.544.688-.334.488-.503%201.138-.503%201.93.02.036.23.38%202.35%201.387.544.296.938.52%201.19.676.77.48%201.655%201.166%202.633%202.035.992.87%201.622%201.472%201.926%201.84.72.866%201.083%201.764%201.083%202.666v.325h10.973z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M12.34.96c1.255%200%202.338.45%203.243%201.354.91.9%201.363%201.98%201.363%203.233v3.03c.74.048%201.452.27%202.134.664.253-.036.508-.053.77-.053%201.21%200%202.273.356%203.196%201.073h.047c1.638%200%202.93.508%203.885%201.525.96%201.027%201.443%202.384%201.443%204.068%200%201.593-.412%203.517-1.235%205.775-.707%201.96-1.057%203.29-1.057%203.994v5.165c0%20.634-.226%201.175-.676%201.62-.446.45-.986.675-1.62.675H12.36c-.635%200-1.177-.224-1.625-.674-.45-.446-.67-.987-.67-1.62V25.62c0-.117-.027-.246-.082-.383-.053-.14-.14-.28-.253-.423-.11-.144-.22-.278-.32-.404s-.235-.268-.404-.428c-.167-.165-.297-.286-.386-.368-.09-.085-.218-.197-.387-.342-.165-.143-.268-.228-.303-.25-.886-.776-1.655-1.374-2.312-1.793-.252-.155-.622-.353-1.11-.593-.492-.24-.922-.46-1.292-.664-.37-.204-.748-.444-1.13-.727-.383-.28-.68-.61-.888-.986-.21-.375-.314-.79-.314-1.246%200-1.494.4-2.726%201.203-3.7.8-.975%201.93-1.462%203.39-1.462.81%200%201.573.132%202.294.395V5.55c0-1.243.454-2.317%201.36-3.228.91-.907%201.978-1.36%203.21-1.36m-2.276%2014.916c-.24%200-.53-.09-.868-.27-.343-.18-.673-.376-.99-.593-.315-.215-.72-.41-1.217-.592-.498-.177-1.003-.267-1.515-.267-.802%200-1.384.264-1.75.797-.364.533-.547%201.223-.547%202.07%200%20.287.83.824%202.492%201.613.526.287.916.508%201.167.663.764.478%201.63%201.148%202.598%202.01.97.848%201.603%201.45%201.9%201.81.682.824%201.024%201.664%201.024%202.508v.576H23.83v-.575c0-.857.19-1.856.57-2.99.385-1.136.766-2.295%201.148-3.47.382-1.177.576-2.25.576-3.22%200-2.258-.998-3.388-2.995-3.388-.312%200-.644.03-1.004.092-.19-.363-.503-.644-.94-.854-.436-.21-.876-.313-1.32-.313-.44%200-.85.107-1.235.32-.598-.633-1.308-.95-2.134-.95-.296%200-.63.06-.993.182-.365.12-.647.267-.85.448V5.548c0-.62-.23-1.16-.683-1.612-.453-.455-.992-.683-1.61-.683-.612%200-1.148.234-1.607.7-.46.467-.69.997-.69%201.595v10.328M22.686%2030.79c.31%200%20.58-.112.808-.34.226-.23.34-.497.34-.81s-.114-.58-.34-.804c-.227-.227-.497-.344-.808-.344-.312%200-.58.117-.808.344-.225.225-.343.493-.343.805s.118.58.343.81c.228.228.496.34.808.34M12.34.46c-1.36%200-2.56.507-3.562%201.506-1%201.004-1.507%202.21-1.507%203.582v6.03c-.574-.146-1.176-.22-1.794-.22-1.61%200-2.88.554-3.775%201.645-.872%201.06-1.315%202.413-1.315%204.02%200%20.538.127%201.04.378%201.488.244.44.59.826%201.03%201.147.38.28.778.538%201.183.76.376.208.817.435%201.313.676.47.232.83.424%201.066.57.623.396%201.38.984%202.245%201.743l.033.028.037.022c.025.02.11.09.236.2.163.14.285.246.37.327.09.083.217.2.378.36.152.145.273.272.367.388.1.124.206.255.313.395.09.113.15.21.183.296.04.102.048.167.048.205v5.165c0%20.77.275%201.437.818%201.976.54.543%201.206.82%201.978.82h11.473c.77%200%201.434-.277%201.975-.822.543-.54.82-1.204.82-1.974v-5.165c0-.446.178-1.473%201.027-3.824.84-2.304%201.266-4.305%201.266-5.944%200-1.806-.53-3.29-1.577-4.41-1.023-1.092-2.412-1.657-4.13-1.683-.975-.713-2.105-1.074-3.362-1.074-.233%200-.454.01-.67.035-.557-.3-1.138-.5-1.733-.594V5.55c0-1.39-.51-2.597-1.512-3.59C14.94.966%2013.73.46%2012.34.46zm-2.276%2015.916h.5V5.548c0-.465.18-.872.546-1.245.365-.37.774-.55%201.25-.55.487%200%20.898.175%201.257.535.36.36.536.772.536%201.26v7.054l.833-.745c.147-.132.374-.25.673-.346.31-.103.59-.155.837-.155.688%200%201.267.26%201.77.794l.268.28.34-.187c.312-.174.638-.26.993-.26.368%200%20.74.09%201.103.265.345.165.578.373.715.634l.17.323.36-.062c.326-.058.627-.085.918-.085%201.726%200%202.495.89%202.495%202.89%200%20.904-.186%201.936-.552%203.062-.382%201.174-.763%202.33-1.146%203.464-.396%201.18-.597%202.24-.597%203.15v.076H12.86v-.075c0-.962-.384-1.913-1.14-2.827-.313-.377-.952-.988-1.956-1.867-.985-.875-1.882-1.568-2.662-2.056-.254-.157-.643-.38-1.192-.68-1.674-.794-2.116-1.15-2.23-1.27.013-.695.167-1.264.46-1.69.27-.395.695-.58%201.336-.58.45%200%20.903.08%201.346.24.454.165.826.345%201.104.533.325.223.676.432%201.04.622.408.218.77.326%201.098.326zm12.62%2013.914c-.18%200-.318-.06-.453-.194-.132-.135-.195-.28-.195-.454s.062-.317.196-.45c.14-.137.278-.198.455-.198.175%200%20.32.062.454.197.132.133.193.276.193.452s-.062.32-.196.456c-.13.13-.274.192-.452.192z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    saHrw:qOizc + "/images/21.cur", ihgnb:qOizc + "/images/22.cur", fGaOj:qOizc + "/images/23.cur", pVZkH:qOizc + "/images/25.cur", qPLJA:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226.489%22%20height%3D%2235%22%20viewBox%3D%220%200%2026.489%2035%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20stroke%3D%22%23000%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M11.71%2033.813l-3.483-7.13-6.503%206.674V1.353l23.325%2022.05-9.218.125%203.3%206.656-7.423%203.63z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    avjoD:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2225.739%22%20height%3D%2235%22%20viewBox%3D%220%200%2025.739%2035%22%3E%0A%20%20%3Cpath%20stroke%3D%22%23FFF%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M10.79%2033.73L7.306%2026.6.804%2033.275V1.27L24.13%2023.32l-9.218.124%203.3%206.656-7.423%203.63z%22%2F%3E%0A%3C%2Fsvg%3E%0A", UZzvp:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230.217%22%20height%3D%2235%22%20viewBox%3D%220%200%2030.217%2035%22%3E%0A%20%20%3Cpath%20d%3D%22M12.283%2026.457v-.826c0-.787-.325-1.58-.967-2.357-.29-.347-.922-.95-1.88-1.79-.955-.848-1.82-1.518-2.577-1.99-.25-.154-.637-.374-1.158-.658-2.427-1.152-2.63-1.553-2.63-1.838%200-.9.2-1.647.593-2.222.413-.603%201.073-.908%201.96-.908.538%200%201.078.096%201.605.284.513.188.942.397%201.278.623.302.207.626.402.966.58.188.1.358.168.506.206V5.48c0-.667.257-1.265.765-1.778.51-.515%201.11-.775%201.788-.775.69%200%201.294.255%201.797.758.502.502.757%201.106.757%201.795v5.486c.154-.08.33-.153.527-.217.387-.13.75-.194%201.076-.194.834%200%201.57.302%202.19.897.37-.178.77-.268%201.19-.268.482%200%20.965.114%201.433.34.422.202.745.474.964.808.312-.045.607-.067.88-.067%202.13%200%203.254%201.262%203.254%203.65%200%20.993-.197%202.105-.588%203.307-.383%201.182-.767%202.344-1.15%203.484-.374%201.106-.563%202.09-.563%202.924v.827H12.282z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.533%203.177c.624%200%201.163.228%201.62.685.455.455.684.995.684%201.618v5.956c.204-.18.488-.33.854-.45.367-.12.7-.18%201-.18.826%200%201.54.317%202.142.954.384-.217.797-.324%201.24-.324s.886.104%201.323.315c.438.21.753.495.943.855.36-.06.697-.09%201.01-.09%202.002%200%203.003%201.133%203.003%203.4%200%20.972-.19%202.05-.575%203.23-.383%201.18-.767%202.34-1.15%203.48-.385%201.14-.576%202.142-.576%203.004v.575H12.532v-.576c0-.85-.342-1.692-1.024-2.52-.302-.36-.937-.965-1.91-1.817-.97-.863-1.84-1.534-2.607-2.014-.252-.158-.643-.38-1.17-.668-1.668-.792-2.5-1.332-2.5-1.618%200-.854.182-1.545.55-2.08.364-.532.95-.8%201.754-.8.514%200%201.02.09%201.52.27.497.18.904.38%201.224.594.317.218.647.415.99.595s.633.27.872.27V5.48c0-.6.23-1.134.692-1.603.46-.466.998-.7%201.61-.7m0-.5c-.747%200-1.41.286-1.967.85-.555.562-.837%201.22-.837%201.952v9.72c-.044-.02-.09-.043-.14-.07-.33-.172-.646-.36-.938-.562-.357-.24-.805-.458-1.335-.65-.558-.2-1.125-.3-1.69-.3-.976%200-1.705.34-2.168%201.016-.424.617-.64%201.412-.64%202.363%200%20.484.445.958%202.787%202.07.513.28.887.494%201.12.64.743.464%201.6%201.124%202.54%201.963.952.833%201.576%201.427%201.857%201.765.602.73.908%201.47.908%202.197v1.076h12.516v-1.076c0-.807.186-1.764.55-2.844.385-1.142.77-2.305%201.152-3.487.398-1.225.6-2.363.6-3.384%200-3.223-1.904-3.9-3.503-3.9-.24%200-.495.018-.763.05-.238-.312-.564-.568-.974-.765-.5-.24-1.02-.363-1.54-.363-.4%200-.782.074-1.143.223-.642-.566-1.393-.853-2.238-.853-.355%200-.744.07-1.157.206-.068.022-.134.045-.197.07V5.478c0-.76-.28-1.422-.83-1.973-.55-.55-1.215-.83-1.973-.83z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M12.533%2033.367c-.7%200-1.308-.252-1.806-.75-.496-.496-.747-1.103-.747-1.804V25.63c0-.086-.02-.187-.063-.298-.044-.11-.117-.23-.215-.357l-.322-.4c-.097-.12-.225-.257-.384-.408-.167-.162-.295-.284-.384-.366-.09-.085-.216-.195-.38-.336-.15-.13-.243-.207-.28-.23-.9-.788-1.67-1.386-2.318-1.8-.244-.15-.608-.345-1.09-.578-.496-.243-.933-.467-1.307-.674-.375-.203-.767-.454-1.162-.745-.41-.3-.732-.66-.96-1.07-.23-.414-.347-.875-.347-1.37%200-1.552.425-2.855%201.262-3.874.85-1.034%202.06-1.56%203.596-1.56.716%200%201.404.102%202.052.3V5.48c0-1.313.484-2.46%201.44-3.416.955-.956%202.098-1.44%203.397-1.44%201.322%200%202.478.48%203.433%201.43.956.952%201.44%202.105%201.44%203.426v2.812c.67.075%201.322.288%201.942.636.236-.03.477-.045.724-.045%201.233%200%202.34.363%203.288%201.08%201.72.017%203.064.558%204.048%201.607%201.005%201.076%201.515%202.508%201.515%204.255%200%201.617-.423%203.596-1.258%205.88-.693%201.932-1.046%203.253-1.046%203.926v5.184c0%20.703-.25%201.31-.746%201.804-.494.497-1.102.75-1.806.75H12.533zm11.266-7.41v-.326c0-.887.197-1.925.588-3.083.384-1.14.768-2.3%201.15-3.48.374-1.15.563-2.21.563-3.152%200-2.12-.9-3.15-2.753-3.15-.294%200-.62.03-.968.088l-.18.03-.083-.16c-.166-.314-.438-.558-.83-.746-.4-.193-.81-.29-1.216-.29-.403%200-.77.095-1.116.29l-.17.097-.135-.142c-.558-.59-1.2-.876-1.96-.876-.274%200-.584.057-.922.168-.332.108-.59.242-.767.4l-.415.366V5.48c0-.56-.2-1.03-.61-1.442s-.884-.61-1.443-.61c-.547%200-1.016.204-1.433.626-.418.423-.62.89-.62%201.426v10.615h-.25c-.282%200-.605-.098-.99-.3-.356-.187-.697-.392-1.014-.61-.3-.2-.693-.392-1.167-.563-.473-.17-.956-.255-1.436-.255-.723%200-1.23.227-1.55.69-.335.49-.505%201.143-.505%201.94.018.036.23.382%202.357%201.392.546.297.94.52%201.195.68.78.486%201.668%201.173%202.642%202.04.99.867%201.624%201.47%201.935%201.844.717.87%201.08%201.77%201.08%202.678v.326H23.8z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.516.874c1.26%200%202.345.452%203.256%201.358.912.906%201.368%201.988%201.368%203.247v3.04c.744.048%201.458.27%202.142.666.252-.036.51-.054.773-.054%201.21%200%202.28.36%203.203%201.08h.052c1.642%200%202.94.507%203.898%201.528.964%201.032%201.447%202.394%201.447%204.084%200%201.596-.414%203.527-1.242%205.795-.707%201.966-1.062%203.304-1.062%204.01v5.183c0%20.636-.223%201.18-.673%201.627-.45.452-.992.677-1.63.677H12.534c-.636%200-1.177-.225-1.63-.677-.447-.448-.673-.99-.673-1.627V25.63c0-.12-.027-.248-.08-.387-.055-.137-.14-.277-.25-.422-.117-.143-.225-.278-.326-.403-.102-.126-.237-.27-.405-.432-.17-.163-.298-.286-.388-.37-.09-.084-.22-.197-.387-.342-.17-.144-.27-.228-.306-.25-.89-.78-1.663-1.38-2.323-1.8-.25-.157-.623-.355-1.114-.594-.49-.242-.924-.464-1.295-.67-.373-.2-.75-.444-1.135-.727-.384-.28-.68-.61-.89-.99-.21-.378-.315-.794-.315-1.25%200-1.5.4-2.736%201.205-3.714s1.938-1.47%203.402-1.47c.813%200%201.582.133%202.302.397v-6.73c0-1.247.455-2.327%201.367-3.238.912-.91%201.985-1.366%203.222-1.366m-2.286%2014.97c-.24%200-.53-.09-.872-.27s-.673-.377-.99-.595c-.318-.216-.726-.414-1.222-.595-.5-.18-1.007-.27-1.52-.27-.805%200-1.39.268-1.756.8-.367.535-.55%201.227-.55%202.08%200%20.286.833.826%202.5%201.618.528.288.92.51%201.17.667.77.48%201.64%201.15%202.61%202.014.972.853%201.606%201.457%201.907%201.818.683.826%201.024%201.668%201.024%202.518v.576h11.517v-.576c0-.862.19-1.864.576-3.004.384-1.14.768-2.3%201.15-3.48.384-1.182.576-2.26.576-3.23%200-2.268-1.002-3.4-3.005-3.4-.312%200-.647.03-1.01.09-.19-.36-.504-.645-.942-.854-.438-.21-.88-.315-1.323-.315s-.856.107-1.24.324c-.602-.636-1.315-.953-2.142-.953-.3%200-.633.06-1%20.18-.365.12-.65.27-.853.45V5.48c0-.624-.23-1.164-.684-1.62-.456-.456-.995-.684-1.62-.684-.61%200-1.147.234-1.61.7-.46.47-.69%201.004-.69%201.603v10.365M12.516.375c-1.368%200-2.57.508-3.574%201.513C7.938%202.89%207.428%204.1%207.428%205.478v6.055c-.575-.146-1.18-.22-1.802-.22-1.613%200-2.89.556-3.788%201.65-.876%201.064-1.32%202.42-1.32%204.032%200%20.538.128%201.04.38%201.492.244.44.59.83%201.03%201.15.404.297.806.555%201.192.764.354.197.785.42%201.312.68.474.228.833.42%201.07.567.634.402%201.395.993%202.257%201.75l.026.024.03.022c.03.022.118.096.255.212.157.136.28.243.365.323.094.087.22.207.384.366.15.144.274.276.363.387l.163.203.163.202c.076.1.138.2.175.293.036.096.044.163.044.2v5.184c0%20.77.275%201.437.82%201.98.545.546%201.212.823%201.98.823h11.517c.772%200%201.44-.277%201.983-.824.543-.54.82-1.206.82-1.978V25.63c0-.444.178-1.47%201.03-3.843.845-2.31%201.272-4.316%201.272-5.964%200-1.812-.532-3.3-1.582-4.425-1.026-1.097-2.42-1.663-4.147-1.688-.978-.717-2.11-1.08-3.37-1.08-.23%200-.455.013-.674.037-.56-.303-1.145-.503-1.743-.597V5.48c0-1.392-.51-2.604-1.516-3.603-1-.997-2.214-1.503-3.604-1.503zm-2.286%2015.97h.5V5.48c0-.47.18-.878.548-1.25.368-.373.778-.554%201.255-.554.49%200%20.904.176%201.267.538.36.36.537.775.537%201.265v7.065l.83-.736c.152-.135.38-.252.68-.35.313-.103.597-.155.844-.155.69%200%201.272.26%201.78.798l.268.284.34-.192c.31-.175.636-.26.995-.26.368%200%20.74.09%201.106.266.343.166.577.374.717.64l.168.317.355-.06c.335-.054.647-.082.928-.082%201.73%200%202.504.895%202.504%202.9%200%20.914-.186%201.95-.552%203.075-.382%201.18-.766%202.338-1.148%203.477-.4%201.184-.603%202.248-.603%203.163v.076H13.032v-.076c0-.967-.383-1.922-1.14-2.836-.32-.385-.962-.998-1.964-1.876-.982-.873-1.883-1.567-2.674-2.062-.253-.158-.633-.375-1.194-.682-1.68-.8-2.125-1.157-2.24-1.278.013-.7.168-1.27.46-1.698.27-.393.71-.583%201.344-.583.45%200%20.906.08%201.353.24.45.164.825.346%201.11.538.32.22.67.43%201.036.623.42.22.782.33%201.104.33z%22%2F%3E%0A%20%20%3Cg%3E%0A%20%20%20%20%3Cpath%20d%3D%22M23.14%2031.48c-.39%200-.728-.144-1.01-.426-.282-.282-.426-.622-.426-1.01s.144-.73.426-1.012.622-.426%201.01-.426.728.144%201.012.426c.282.282.426.622.426%201.01s-.144.73-.426%201.012-.623.426-1.01.426z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M23.14%2028.857c.322%200%20.6.118.835.353.234.234.353.513.353.834s-.118.6-.353.834c-.235.235-.513.353-.834.353s-.6-.116-.833-.352c-.234-.234-.353-.513-.353-.834s.118-.6.353-.834.512-.353.834-.353m0-.5c-.45%200-.86.173-1.187.5s-.5.736-.5%201.187.174.86.5%201.188c.325.326.735.5%201.188.5.458%200%20.857-.17%201.19-.5.325-.326.498-.737.498-1.188s-.173-.86-.5-1.188c-.333-.33-.732-.5-1.187-.5z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A", 
    cBfXr:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230.217%22%20height%3D%2235%22%20viewBox%3D%220%200%2030.217%2035%22%3E%0A%20%20%3Cg%20fill%3D%22%23FFF%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12.102%2026.888v-.733c0-.862-.354-1.73-1.052-2.576-.314-.374-.986-1.014-1.997-1.9-1.008-.895-1.927-1.605-2.733-2.113-.265-.162-.676-.396-1.23-.7-2.378-1.126-2.7-1.55-2.7-1.814%200-.92.202-1.682.6-2.262.41-.595%201.068-.896%201.955-.896.557%200%201.11.098%201.645.292.545.198.976.407%201.315.64.346.234.684.437%201.032.62.282.146.53.234.736.26V4.912c0-.66.258-1.257.767-1.772s1.11-.777%201.787-.777c.688%200%201.293.256%201.795.757.503.504.758%201.107.758%201.795v6.027c.2-.134.444-.246.736-.342.39-.13.757-.194%201.09-.194.876%200%201.644.327%202.284.974.398-.207.83-.312%201.284-.312.484%200%20.972.116%201.447.346.453.215.79.51%201.008.876.358-.057.686-.084.998-.084%202.184%200%203.29%201.25%203.29%203.71%200%201.04-.206%202.197-.612%203.444-.404%201.245-.81%202.468-1.215%203.672-.397%201.178-.6%202.23-.6%203.125v.733H12.103z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12.227%202.485c.656%200%201.226.24%201.706.72s.722%201.05.722%201.706v6.28c.217-.19.513-.348.9-.474.386-.128.736-.188%201.052-.188.872%200%201.625.332%202.26%201.004.402-.227.838-.342%201.308-.342.466%200%20.93.11%201.394.333.46.22.792.52.993.9.382-.063.733-.096%201.064-.096%202.11%200%203.165%201.196%203.165%203.586%200%201.023-.2%202.158-.606%203.404-.404%201.245-.81%202.468-1.214%203.67-.404%201.2-.604%202.256-.604%203.166v.608h-12.14v-.607c0-.896-.36-1.783-1.08-2.655-.318-.378-.987-1.016-2.012-1.915-1.024-.91-1.942-1.616-2.75-2.124-.266-.165-.68-.4-1.233-.704-1.758-.833-2.636-1.4-2.636-1.706%200-.9.19-1.628.577-2.19.387-.563%201.003-.844%201.852-.844.54%200%201.078.095%201.602.284.525.19.955.398%201.288.625.338.23.684.438%201.045.627.36.19.665.284.92.284V4.91c0-.63.244-1.19.73-1.685s1.05-.74%201.697-.74m0-.25c-.712%200-1.343.274-1.876.814S9.55%204.215%209.55%204.91v10.644c-.16-.04-.347-.114-.553-.223-.346-.18-.68-.38-1.02-.61-.35-.238-.79-.452-1.344-.653-.548-.2-1.116-.3-1.687-.3-.93%200-1.623.32-2.058.95-.412.604-.62%201.388-.62%202.334%200%20.3.214.718%202.777%201.933.56.308.96.535%201.21.69.8.503%201.713%201.21%202.715%202.1%201.007.883%201.675%201.52%201.986%201.888.677.822%201.02%201.662%201.02%202.495v.858h12.64v-.858c0-.882.2-1.92.593-3.085.405-1.204.81-2.428%201.215-3.674.41-1.26.62-2.43.62-3.48%200-2.51-1.182-3.837-3.416-3.837-.295%200-.603.022-.936.072-.23-.355-.57-.642-1.016-.854-.492-.237-.998-.357-1.5-.357-.444%200-.867.097-1.262.286-.65-.63-1.426-.947-2.307-.947-.348%200-.728.066-1.13.2-.215.07-.405.15-.572.24V4.91c0-.72-.267-1.354-.794-1.882-.523-.526-1.156-.793-1.88-.793z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cpath%20d%3D%22M12.36%2033.335c-.702%200-1.31-.252-1.802-.747-.493-.49-.744-1.096-.744-1.798v-5.165c0-.088-.02-.186-.063-.29-.042-.112-.114-.232-.215-.36-.11-.144-.22-.276-.32-.4-.097-.12-.222-.253-.38-.404-.17-.165-.297-.284-.385-.365-.09-.085-.215-.194-.38-.335-.145-.125-.235-.203-.272-.228-.906-.79-1.674-1.387-2.314-1.795-.243-.15-.606-.344-1.087-.58-.494-.24-.928-.463-1.3-.668-.397-.22-.785-.47-1.16-.746-.408-.3-.73-.657-.958-1.065-.23-.412-.347-.873-.347-1.368%200-1.547.424-2.845%201.26-3.86.846-1.03%202.05-1.552%203.582-1.552.71%200%201.396.1%202.045.298v-6.36c0-1.305.482-2.45%201.434-3.404C9.908%201.192%2011.048.71%2012.34.71c1.322%200%202.473.48%203.42%201.428.953.942%201.437%202.09%201.437%203.41v2.8c.667.077%201.315.29%201.934.636.237-.03.477-.045.722-.045%201.23%200%202.334.36%203.28%201.072%201.708.018%203.048.558%204.03%201.604%201.002%201.073%201.51%202.5%201.51%204.24%200%201.61-.42%203.582-1.25%205.86-.692%201.914-1.043%203.23-1.043%203.908v5.165c0%20.7-.253%201.305-.75%201.798-.49.494-1.096.746-1.796.746H12.36zm10.325-4.592c-.24%200-.447.09-.632.27-.18.182-.27.387-.27.628s.09.448.272.633c.18.18.386.267.63.267.246%200%20.452-.087.63-.267.18-.183.27-.39.27-.632s-.09-.447-.27-.627c-.18-.18-.388-.27-.63-.27zm.898-2.793v-.325c0-.885.196-1.918.583-3.07.385-1.135.766-2.293%201.148-3.468.374-1.152.563-2.21.563-3.14%200-2.113-.897-3.14-2.745-3.14-.306%200-.62.03-.962.088l-.18.03-.085-.16c-.162-.312-.433-.555-.827-.743-.397-.192-.805-.29-1.21-.29-.4%200-.765.096-1.116.29l-.17.095-.133-.14c-.556-.588-1.194-.873-1.954-.873-.272%200-.58.057-.914.168-.333.108-.59.242-.763.397l-.418.37V5.55c0-.55-.205-1.032-.608-1.436-.408-.41-.878-.61-1.435-.61-.547%200-1.015.205-1.43.626-.415.422-.617.886-.617%201.42v10.578h-.25c-.283%200-.614-.1-.986-.3-.354-.185-.695-.39-1.013-.606-.294-.2-.686-.39-1.162-.562-.468-.168-.948-.253-1.428-.253-.72%200-1.226.226-1.544.688-.334.488-.503%201.138-.503%201.93.02.036.23.38%202.35%201.387.544.296.938.52%201.19.676.77.48%201.655%201.166%202.633%202.035.992.87%201.622%201.472%201.926%201.84.72.866%201.083%201.764%201.083%202.666v.325h10.973z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M12.34.96c1.255%200%202.338.45%203.243%201.354.91.9%201.363%201.98%201.363%203.233v3.03c.74.048%201.452.27%202.134.664.253-.036.508-.053.77-.053%201.21%200%202.273.356%203.196%201.073h.047c1.638%200%202.93.508%203.885%201.525.96%201.027%201.443%202.384%201.443%204.068%200%201.593-.412%203.517-1.235%205.775-.707%201.96-1.057%203.29-1.057%203.994v5.165c0%20.634-.226%201.175-.676%201.62-.446.45-.986.675-1.62.675H12.36c-.635%200-1.177-.224-1.625-.674-.45-.446-.67-.987-.67-1.62V25.62c0-.117-.027-.246-.082-.383-.053-.14-.14-.28-.253-.423-.11-.144-.22-.278-.32-.404s-.235-.268-.404-.428c-.167-.165-.297-.286-.386-.368-.09-.085-.218-.197-.387-.342-.165-.143-.268-.228-.303-.25-.886-.776-1.655-1.374-2.312-1.793-.252-.155-.622-.353-1.11-.593-.492-.24-.922-.46-1.292-.664-.37-.204-.748-.444-1.13-.727-.383-.28-.68-.61-.888-.986-.21-.375-.314-.79-.314-1.246%200-1.494.4-2.726%201.203-3.7.8-.975%201.93-1.462%203.39-1.462.81%200%201.573.132%202.294.395V5.55c0-1.243.454-2.317%201.36-3.228.91-.907%201.978-1.36%203.21-1.36m-2.276%2014.916c-.24%200-.53-.09-.868-.27-.343-.18-.673-.376-.99-.593-.315-.215-.72-.41-1.217-.592-.498-.177-1.003-.267-1.515-.267-.802%200-1.384.264-1.75.797-.364.533-.547%201.223-.547%202.07%200%20.287.83.824%202.492%201.613.526.287.916.508%201.167.663.764.478%201.63%201.148%202.598%202.01.97.848%201.603%201.45%201.9%201.81.682.824%201.024%201.664%201.024%202.508v.576H23.83v-.575c0-.857.19-1.856.57-2.99.385-1.136.766-2.295%201.148-3.47.382-1.177.576-2.25.576-3.22%200-2.258-.998-3.388-2.995-3.388-.312%200-.644.03-1.004.092-.19-.363-.503-.644-.94-.854-.436-.21-.876-.313-1.32-.313-.44%200-.85.107-1.235.32-.598-.633-1.308-.95-2.134-.95-.296%200-.63.06-.993.182-.365.12-.647.267-.85.448V5.548c0-.62-.23-1.16-.683-1.612-.453-.455-.992-.683-1.61-.683-.612%200-1.148.234-1.607.7-.46.467-.69.997-.69%201.595v10.328M22.686%2030.79c.31%200%20.58-.112.808-.34.226-.23.34-.497.34-.81s-.114-.58-.34-.804c-.227-.227-.497-.344-.808-.344-.312%200-.58.117-.808.344-.225.225-.343.493-.343.805s.118.58.343.81c.228.228.496.34.808.34M12.34.46c-1.36%200-2.56.507-3.562%201.506-1%201.004-1.507%202.21-1.507%203.582v6.03c-.574-.146-1.176-.22-1.794-.22-1.61%200-2.88.554-3.775%201.645-.872%201.06-1.315%202.413-1.315%204.02%200%20.538.127%201.04.378%201.488.244.44.59.826%201.03%201.147.38.28.778.538%201.183.76.376.208.817.435%201.313.676.47.232.83.424%201.066.57.623.396%201.38.984%202.245%201.743l.033.028.037.022c.025.02.11.09.236.2.163.14.285.246.37.327.09.083.217.2.378.36.152.145.273.272.367.388.1.124.206.255.313.395.09.113.15.21.183.296.04.102.048.167.048.205v5.165c0%20.77.275%201.437.818%201.976.54.543%201.206.82%201.978.82h11.473c.77%200%201.434-.277%201.975-.822.543-.54.82-1.204.82-1.974v-5.165c0-.446.178-1.473%201.027-3.824.84-2.304%201.266-4.305%201.266-5.944%200-1.806-.53-3.29-1.577-4.41-1.023-1.092-2.412-1.657-4.13-1.683-.975-.713-2.105-1.074-3.362-1.074-.233%200-.454.01-.67.035-.557-.3-1.138-.5-1.733-.594V5.55c0-1.39-.51-2.597-1.512-3.59C14.94.966%2013.73.46%2012.34.46zm-2.276%2015.916h.5V5.548c0-.465.18-.872.546-1.245.365-.37.774-.55%201.25-.55.487%200%20.898.175%201.257.535.36.36.536.772.536%201.26v7.054l.833-.745c.147-.132.374-.25.673-.346.31-.103.59-.155.837-.155.688%200%201.267.26%201.77.794l.268.28.34-.187c.312-.174.638-.26.993-.26.368%200%20.74.09%201.103.265.345.165.578.373.715.634l.17.323.36-.062c.326-.058.627-.085.918-.085%201.726%200%202.495.89%202.495%202.89%200%20.904-.186%201.936-.552%203.062-.382%201.174-.763%202.33-1.146%203.464-.396%201.18-.597%202.24-.597%203.15v.076H12.86v-.075c0-.962-.384-1.913-1.14-2.827-.313-.377-.952-.988-1.956-1.867-.985-.875-1.882-1.568-2.662-2.056-.254-.157-.643-.38-1.192-.68-1.674-.794-2.116-1.15-2.23-1.27.013-.695.167-1.264.46-1.69.27-.395.695-.58%201.336-.58.45%200%20.903.08%201.346.24.454.165.826.345%201.104.533.325.223.676.432%201.04.622.408.218.77.326%201.098.326zm12.62%2013.914c-.18%200-.318-.06-.453-.194-.132-.135-.195-.28-.195-.454s.062-.317.196-.45c.14-.137.278-.198.455-.198.175%200%20.32.062.454.197.132.133.193.276.193.452s-.062.32-.196.456c-.13.13-.274.192-.452.192z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    tftje:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218.53%22%20height%3D%2220.411%22%20viewBox%3D%220%200%2018.53%2020.411%22%3E%0A%20%20%3Cpath%20d%3D%22M18.34%207.713c0-.27-.204-.437-.61-.502l-5.478-.795L9.798%201.45c-.138-.298-.316-.446-.534-.446s-.396.148-.535.447L6.274%206.416.798%207.21c-.407.066-.61.233-.61.503%200%20.152.09.327.273.523l3.972%203.862-.938%205.454c-.015.102-.022.175-.022.22%200%20.15.038.28.115.386.076.105.19.158.343.158.13%200%20.276-.043.437-.13l4.898-2.575%204.898%202.575c.153.088.298.13.437.13.146%200%20.256-.052.333-.157.077-.105.115-.234.115-.387%200-.094-.004-.167-.01-.218l-.94-5.454%203.96-3.862c.188-.188.282-.363.282-.523zm-5.91%202.908c0%20.105-.225.328-.297.402-.073.072-.35.244-.455.244H10.43v1.354c0%20.104-.226.327-.298.4-.073.073-.35.245-.455.245h-.75c-.104%200-.254-.172-.327-.244-.073-.073-.17-.296-.17-.4v-1.354H6.927c-.104%200-.254-.172-.327-.244-.072-.074-.17-.297-.17-.4v-.75c0-.105.098-.31.17-.38.073-.075.224-.226.328-.226H8.43V7.87c0-.103.098-.307.17-.38.073-.073.224-.224.328-.224h.75c.104%200%20.38.15.455.225.072.073.298.276.298.38v1.397h1.25c.103%200%20.38.15.454.225.072.072.298.275.298.38v.75z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    mouse:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2221.105%22%20height%3D%2226.236%22%20viewBox%3D%220%200%2021.105%2026.236%22%3E%0A%20%20%3Cg%20fill%3D%22%230D1110%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M14.045%2011.247l-.842-1.104c-2.196-2.877-6.28-3.463-9.19-1.345l1.08%201.414-.248.188-1.08-1.414c-2.81%202.248-3.324%206.342-1.128%209.22l.842%201.103c1.76-1.15%203.538-2.407%205.304-3.75l-1.062-1.393.246-.188%201.062%201.39c1.76-1.346%203.44-2.73%205.015-4.123zM7.56%2013.704c-.388.298-.944.225-1.243-.166l-1.21-1.587c-.297-.39-.223-.945.167-1.243.39-.297.946-.223%201.243.168l1.21%201.587c.297.388.223.945-.166%201.242zM9.157%2015.796C7.35%2017.174%205.532%2018.46%203.73%2019.64l2.937%203.85c2.226%202.92%206.396%203.48%209.313%201.253%202.917-2.228%203.48-6.398%201.252-9.316l-2.938-3.85c-1.61%201.426-3.332%202.842-5.137%204.22z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M20.05%203.74c-.21-1.396-1.468-2.47-2.47-3.35-.426-.37-1.05.25-.623.622.905.793%203.432%202.952%201.634%204.107-.59.378-1.395.187-2.012-.005-.83-.253-1.605-.67-2.356-1.095-1.58-.896-3.134-1.834-4.77-2.633C7.34.357%205.022-.337%202.715.457%201.31.94.062%202.128.187%203.713c.14%201.807%201.38%203.48%202.686%204.648.418.376%201.042-.242.62-.62C2.078%206.47-.067%203.7%201.79%201.974%202.58%201.243%203.798.97%204.837.965c1.21-.01%202.41.395%203.508.872%201.73.754%203.372%201.733%204.998%202.688%201.358.798%203.004%201.788%204.643%201.67%201.247-.087%202.256-1.175%202.065-2.454z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A", 
    WfkQE:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215.818%22%20height%3D%2215.818%22%20viewBox%3D%220%200%2015.818%2015.818%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20stroke%3D%22%23FFF%22%20stroke-miterlimit%3D%2210%22%3E%0A%20%20%20%20%3Ccircle%20stroke-width%3D%22.5%22%20cx%3D%228.007%22%20cy%3D%227.819%22%20r%3D%227.644%22%2F%3E%0A%20%20%20%20%3Cpath%20stroke-width%3D%22.75%22%20d%3D%22M15.65.175L.363%2015.462%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A", 
    hoCYF:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220.08%22%20height%3D%2215.39%22%20viewBox%3D%220%200%2020.08%2015.39%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M20.08%203.006c0%20.345-.12.64-.363.88l-9.38%209.38-1.76%201.762c-.243.242-.537.362-.882.362-.346%200-.64-.12-.88-.362L5.05%2013.266l-4.69-4.69C.123%208.334%200%208.04%200%207.696c0-.347.12-.64.363-.882L2.125%205.05c.24-.24.535-.36.88-.36.346%200%20.64.12.882.36l3.81%203.823L16.193.36c.24-.24.535-.36.88-.36s.64.12.88.362l1.763%201.762c.242.242.363.536.363.882z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    wNLng:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216.214%22%20height%3D%2216.213%22%20viewBox%3D%220%200%2016.214%2016.213%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M16.214%2013.738c0%20.176-.06.322-.177.44l-1.858%201.837c-.148.133-.295.197-.44.197-.177%200-.32-.064-.43-.197l-5.203-5.19-5.203%205.19c-.117.133-.268.197-.45.197-.184%200-.327-.064-.43-.197L.176%2014.18C.06%2014.06%200%2013.914%200%2013.738c0-.168.06-.31.176-.428L5.38%208.107.175%202.904C.06%202.787%200%202.644%200%202.474c0-.175.06-.32.176-.438L2.024.176C2.134.06%202.276%200%202.452%200c.17%200%20.32.06.45.176L8.107%205.38%2013.31.175c.117-.117.26-.176.428-.176.176%200%20.322.06.44.176l1.858%201.86c.117.116.177.263.177.438%200%20.17-.06.312-.177.43l-5.214%205.203%205.214%205.203c.118.118.178.26.178.428z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    stUbr:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216.214%22%20height%3D%2216.213%22%20viewBox%3D%220%200%2016.214%2016.213%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M16.214%2013.738c0%20.176-.06.322-.177.44l-1.858%201.837c-.148.133-.295.197-.44.197-.177%200-.32-.064-.43-.197l-5.203-5.19-5.203%205.19c-.117.133-.268.197-.45.197-.184%200-.327-.064-.43-.197L.176%2014.18C.06%2014.06%200%2013.914%200%2013.738c0-.168.06-.31.176-.428L5.38%208.107.175%202.904C.06%202.787%200%202.644%200%202.474c0-.175.06-.32.176-.438L2.024.176C2.134.06%202.276%200%202.452%200c.17%200%20.32.06.45.176L8.107%205.38%2013.31.175c.117-.117.26-.176.428-.176.176%200%20.322.06.44.176l1.858%201.86c.117.116.177.263.177.438%200%20.17-.06.312-.177.43l-5.214%205.203%205.214%205.203c.118.118.178.26.178.428z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    dbxsU:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226.986%22%20height%3D%2217.253%22%20viewBox%3D%220%200%2026.986%2017.253%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M25.695%207.49v2.23c0%20.08-.027.158-.08.232-.054.074-.12.117-.2.13l-1.86.28c-.126.363-.257.668-.39.915.233.335.592.797%201.073%201.386.067.08.1.164.1.25%200%20.088-.03.165-.09.232-.18.248-.512.61-.994%201.084-.48.475-.797.712-.943.712-.08%200-.167-.03-.26-.09l-1.387-1.085c-.295.154-.6.28-.914.382-.108.91-.206%201.532-.293%201.867-.047.19-.167.283-.362.283h-2.23c-.093%200-.175-.028-.245-.085-.07-.057-.11-.13-.116-.216l-.28-1.85c-.33-.106-.63-.23-.904-.37l-1.417%201.074c-.066.06-.15.09-.25.09-.095%200-.178-.037-.252-.11-.843-.764-1.395-1.326-1.656-1.688-.047-.067-.07-.144-.07-.23%200-.082.026-.16.08-.232.1-.14.27-.363.513-.668.24-.304.422-.54.542-.708-.182-.334-.318-.666-.412-.994l-1.84-.27c-.086-.014-.156-.056-.21-.126s-.08-.15-.08-.236v-2.23c0-.08.026-.157.08-.23s.117-.118.19-.132l1.87-.28c.092-.31.222-.618.39-.926-.27-.382-.627-.844-1.076-1.386-.066-.08-.1-.16-.1-.24%200-.068.03-.145.09-.232.174-.24.504-.6.99-1.08.484-.48.8-.718.948-.718.087%200%20.175.033.262.1l1.386%201.075c.295-.154.6-.28.914-.38.107-.912.204-1.535.29-1.87.048-.187.17-.28.363-.28h2.23c.093%200%20.175.028.245.084.07.057.11.13.115.216l.28%201.848c.33.108.63.232.905.373l1.427-1.075c.06-.06.14-.09.24-.09.088%200%20.17.033.252.1.862.797%201.415%201.366%201.656%201.708.047.054.07.127.07.22%200%20.082-.027.158-.08.232-.1.14-.27.363-.513.668s-.422.54-.542.708c.175.335.312.663.412.984l1.84.28c.086.015.156.057.21.127.055.07.083.15.083.236zm-5.897%202.914c.502-.502.754-1.108.754-1.818s-.252-1.316-.754-1.818-1.108-.753-1.818-.753-1.315.25-1.817.753c-.503.502-.754%201.108-.754%201.818s.25%201.316.753%201.818c.502.502%201.108.753%201.817.753.71%200%201.316-.25%201.818-.753zM6.582%206.967c.07.07.105.154.105.25%200%20.098-.035.182-.105.252l-2.5%202.5c-.07.07-.154.105-.25.105s-.182-.034-.252-.105l-2.5-2.5c-.07-.07-.106-.155-.106-.252s.035-.18.106-.25c.07-.072.154-.107.25-.107h5c.098%200%20.18.036.252.107z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    CpGXW:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214.364%22%20height%3D%2215.429%22%20viewBox%3D%220%200%2014.364%2015.429%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M13.946%2012.21c0%20.14-.047.257-.14.35l-1.486%201.47c-.117.104-.234.157-.352.157-.14%200-.255-.053-.343-.158L7.47%209.88%203.31%2014.028c-.094.105-.214.158-.36.158s-.26-.053-.343-.158L1.13%2012.56c-.094-.094-.14-.21-.14-.352%200-.135.046-.25.14-.343L5.29%207.708%201.13%203.552c-.094-.094-.14-.208-.14-.343%200-.142.046-.26.14-.353L2.61%201.372c.087-.094.2-.14.342-.14.135%200%20.255.046.36.14L7.47%205.53l4.156-4.157c.094-.094.208-.14.343-.14.14%200%20.257.046.35.14l1.486%201.485c.094.094.14.21.14.352%200%20.135-.046.25-.14.343L9.64%207.71l4.166%204.156c.093.094.14.21.14.343z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    ZwCMT:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2222.523%22%20height%3D%2226.331%22%20viewBox%3D%220%200%2022.523%2026.331%22%3E%0A%20%20%3Cpath%20d%3D%22M3.554%208.01l-.846-1.734-1.58%201.622V.12l5.668%205.36-2.24.03.802%201.617-1.804.883zM21.106%2020.728V9.338c0-.116-.043-.22-.13-.307-.087-.085-.19-.128-.308-.128H5.115c-.118%200-.222.043-.31.13-.085.086-.128.19-.128.307v11.388c0%20.12.043.222.13.31.086.086.19.13.308.13H20.67c.117%200%20.22-.044.308-.13.085-.09.128-.19.128-.31zm-12.73-9.636v.877c0%20.116-.045.22-.132.307-.086.086-.188.13-.308.13H7.06c-.12%200-.222-.044-.31-.13-.085-.087-.13-.19-.13-.308v-.878c0-.12.045-.22.13-.308.088-.088.19-.13.31-.13h.876c.12%200%20.222.042.308.13.087.087.13.19.13.308zm0%203.504v.875c0%20.12-.045.224-.132.31-.086.087-.188.13-.308.13H7.06c-.12%200-.222-.043-.31-.13-.085-.086-.13-.188-.13-.31v-.874c0-.118.045-.22.13-.308.088-.087.19-.13.31-.13h.876c.12%200%20.222.043.308.13.087.087.13.19.13.308zm0%203.505v.877c0%20.118-.045.22-.132.308-.086.086-.188.13-.308.13H7.06c-.12%200-.222-.044-.31-.13-.085-.087-.13-.19-.13-.308V18.1c0-.118.045-.22.13-.308.088-.086.19-.13.31-.13h.876c.12%200%20.222.044.308.13.087.087.13.19.13.31zm10.98-7.008v.877c0%20.116-.045.22-.132.307-.086.086-.188.13-.308.13h-9.1c-.118%200-.22-.044-.308-.13-.086-.087-.13-.19-.13-.308v-.878c0-.12.044-.22.13-.308.087-.088.19-.13.308-.13h9.1c.12%200%20.222.042.308.13.087.087.13.19.13.308zm0%203.504v.875c0%20.12-.045.224-.132.31-.086.087-.188.13-.308.13h-9.1c-.118%200-.22-.043-.308-.13-.086-.086-.13-.188-.13-.31v-.874c0-.118.044-.22.13-.308.087-.087.19-.13.308-.13h9.1c.12%200%20.222.043.308.13.087.087.13.19.13.308zm0%203.505v.877c0%20.118-.045.22-.132.308-.086.086-.188.13-.308.13h-9.1c-.118%200-.22-.044-.308-.13-.086-.087-.13-.19-.13-.308V18.1c0-.118.044-.22.13-.308.087-.086.19-.13.308-.13h9.1c.12%200%20.222.044.308.13.087.087.13.19.13.31z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%223%22%20stroke-miterlimit%3D%2210%22%20d%3D%22M21.395%202.202L1.128%2025.342%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    KPDLc:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220.283%22%20height%3D%2221.172%22%20viewBox%3D%220%200%2020.283%2021.172%22%3E%0A%20%20%3Cpath%20fill%3D%22%2320272D%22%20d%3D%22M2.58%207.89l-.845-1.735-1.58%201.622V0l5.668%205.358-2.24.03.802%201.617-1.804.884z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20.132%2020.606V9.218c0-.117-.043-.22-.13-.308-.087-.086-.188-.13-.308-.13H4.14c-.117%200-.22.044-.308.13-.086.087-.13.19-.13.308v11.39c0%20.12.044.22.13.31.087.085.19.13.31.13h15.552c.12%200%20.222-.045.31-.13.085-.09.128-.19.128-.312zM7.402%2010.97v.878c0%20.117-.045.22-.132.31-.086.085-.188.128-.308.128h-.877c-.118%200-.22-.043-.308-.13-.086-.087-.13-.19-.13-.308v-.877c0-.118.044-.22.13-.307.087-.088.19-.13.308-.13h.877c.12%200%20.222.042.308.13.087.087.13.19.13.308zm0%203.505v.875c0%20.12-.045.223-.132.31-.086.087-.188.13-.308.13h-.877c-.118%200-.22-.043-.308-.13-.086-.087-.13-.188-.13-.31v-.875c0-.118.044-.22.13-.31.087-.085.19-.128.308-.128h.877c.12%200%20.222.043.308.13.087.087.13.19.13.308zm0%203.504v.875c0%20.118-.045.222-.132.308-.086.086-.188.13-.308.13h-.877c-.118%200-.22-.044-.308-.13-.086-.086-.13-.188-.13-.308v-.876c0-.12.044-.224.13-.31.087-.086.19-.13.308-.13h.877c.12%200%20.222.044.308.13.087.088.13.19.13.31zm10.98-7.01v.878c0%20.117-.045.22-.132.31-.086.085-.188.128-.308.128h-9.1c-.118%200-.22-.043-.308-.13-.086-.087-.13-.19-.13-.308v-.877c0-.118.044-.22.13-.307.087-.088.19-.13.308-.13h9.1c.12%200%20.223.042.31.13.085.087.13.19.13.308zm0%203.505v.875c0%20.12-.045.223-.132.31-.086.087-.188.13-.308.13h-9.1c-.118%200-.22-.043-.308-.13-.086-.087-.13-.188-.13-.31v-.875c0-.118.044-.22.13-.31.087-.085.19-.128.308-.128h9.1c.12%200%20.223.043.31.13.085.087.13.19.13.308zm0%203.504v.875c0%20.118-.045.222-.132.308-.086.086-.188.13-.308.13h-9.1c-.118%200-.22-.044-.308-.13-.086-.086-.13-.188-.13-.308v-.876c0-.12.044-.224.13-.31.087-.086.19-.13.308-.13h9.1c.12%200%20.223.044.31.13.085.088.13.19.13.31z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    lmJQv:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2237.312%22%20height%3D%2248.172%22%20viewBox%3D%220%200%2037.312%2048.172%22%3E%3Cpath%20fill%3D%22%2357C8EE%22%20d%3D%22M11.268%2019.183V7.35h2.463v11.833m9.964%200V7.35h2.464v11.833%22%2F%3E%3Cpath%20fill%3D%22%23272724%22%20d%3D%22M13.16%2014.81c1.264-1.185%203.063-1.778%205.396-1.778%202.39%200%204.252.567%205.59%201.7%201.343%201.132%202.012%202.936%202.012%205.41v11.83h-2.464v-11.83c0-1.66-.442-2.92-1.323-3.776-.88-.856-2.15-1.284-3.813-1.284-1.574%200-2.77.428-3.594%201.284-.82.856-1.232%202.115-1.232%203.775v11.833H11.27V20.14c0-2.37.63-4.147%201.892-5.33z%22%2F%3E%3Cpath%20fill%3D%22%23272724%22%20d%3D%22M13.73%2021.183h9.964v2.62H13.73z%22%2F%3E%3Ccircle%20fill%3D%22%23272724%22%20cx%3D%2216.826%22%20cy%3D%2218.208%22%20r%3D%221.148%22%2F%3E%3Ccircle%20fill%3D%22%23272724%22%20cx%3D%2220.582%22%20cy%3D%2218.208%22%20r%3D%221.148%22%2F%3E%3Cpath%20fill%3D%22%2357C8EE%22%20d%3D%22M34.693%202.698v33.98H2.733V2.697h31.96M36.9.49H.527V38.885H36.9V.49zM25.09%2042.33v3.134c0%201.187.527%201.69%201.235%201.69.784%200%201.288-.52%201.288-1.69V42.33h.69v3.087c0%201.625-.854%202.293-2.003%202.293-1.084%200-1.9-.62-1.9-2.263V42.33h.69zM29.168%2044.7h3.775v.703h-3.775z%22%2F%3E%3Cpath%20fill%3D%22%2357C8EE%22%20d%3D%22M29.47%2042.722c.358-.338.873-.507%201.538-.507.684%200%201.216.16%201.598.485.385.323.575.838.575%201.544v3.38h-.703v-3.38c0-.474-.127-.834-.38-1.078-.25-.245-.614-.367-1.09-.367-.446%200-.79.12-1.024.366-.234.244-.352.604-.352%201.078v3.38h-.703v-3.38c0-.676.18-1.183.542-1.522z%22%2F%3E%3Cpath%20fill%3D%22%23272724%22%20d%3D%22M4.488%2044.7h3.774v.703H4.488z%22%2F%3E%3Cpath%20fill%3D%22%23272724%22%20d%3D%22M4.787%2042.722c.36-.338.875-.507%201.54-.507.683%200%201.214.16%201.6.485.38.323.573.84.573%201.545v3.38h-.704v-3.38c0-.474-.126-.834-.378-1.078-.252-.245-.614-.367-1.09-.367-.448%200-.79.122-1.025.367-.237.244-.354.604-.354%201.078v3.38h-.704v-3.38c0-.677.182-1.184.54-1.523zM9.546%2042.328h.845l2.644%204.28v-4.28h.686v5.297h-.807L10.23%2043.35v4.275h-.684v-5.297zM14.91%2042.328h2.117c.72%200%201.277.26%201.672.776.353.466.53%201.063.53%201.792%200%20.562-.104%201.07-.314%201.525-.365.804-1%201.205-1.895%201.205h-2.11v-5.297zm1.978%204.684c.237%200%20.433-.026.585-.076.27-.094.496-.275.668-.54.142-.216.24-.49.302-.824.035-.2.053-.384.053-.555%200-.656-.127-1.165-.382-1.528s-.666-.546-1.232-.546h-1.243v4.067h1.25zM20.374%2042.328h.724v5.297h-.724v-5.297z%22%2F%3E%3C%2Fsvg%3E", 
    kjZtB:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214.016%22%20height%3D%2214.572%22%20viewBox%3D%220%200%2014.016%2014.572%22%3E%3Cpath%20fill%3D%22%2349BCEB%22%20d%3D%22M13.592%206.47v1.762c0%20.245-.086.453-.257.624-.172.17-.38.257-.625.257H8.893v3.818c0%20.246-.086.454-.257.625-.172.17-.38.257-.624.257H6.25c-.246%200-.454-.085-.625-.257s-.257-.38-.257-.624V9.114H1.55c-.244%200-.453-.085-.624-.257S.67%208.476.67%208.232V6.47c0-.245.085-.453.256-.624s.38-.257.624-.257h3.818V1.77c0-.244.086-.452.257-.623S6.005.89%206.25.89H8.01c.244%200%20.452.085.624.257.17.17.257.38.257.624v3.82h3.817c.245%200%20.453.085.625.256.17.17.257.38.257.624z%22%2F%3E%3C%2Fsvg%3E", 
    fJcrw:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214.016%22%20height%3D%224.873%22%20viewBox%3D%220%200%2014.016%204.873%22%3E%3Cpath%20fill%3D%22%2349BCEB%22%20d%3D%22M13.592%201.58v1.762c0%20.245-.086.453-.257.624-.172.17-.38.257-.625.257H1.55c-.244%200-.453-.085-.624-.257S.67%203.586.67%203.342V1.58c0-.245.085-.453.256-.624S1.306.7%201.55.7h11.16c.245%200%20.453.085.625.256.17.17.257.38.257.624z%22%2F%3E%3C%2Fsvg%3E", WcpNq:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2222.276%22%20height%3D%2222.091%22%20viewBox%3D%220%200%2022.276%2022.091%22%3E%3Cpath%20fill%3D%22white%22%20d%3D%22M21.472%2017.45c0%20.472-.166.874-.497%201.205l-2.41%202.41c-.332.332-.733.498-1.206.498s-.876-.166-1.207-.497l-5.212-5.212-5.212%205.212c-.33.33-.732.497-1.205.497s-.875-.166-1.206-.497l-2.41-2.41C.574%2018.323.41%2017.92.41%2017.448s.165-.876.496-1.207L6.12%2011.03.904%205.82C.575%205.488.41%205.085.41%204.613s.164-.875.495-1.206l2.41-2.41C3.648.664%204.05.5%204.523.5s.874.166%201.205.497L10.94%206.21%2016.152.996c.33-.332.734-.497%201.206-.497s.874.166%201.205.497l2.41%202.41c.332.332.498.734.498%201.207s-.165.875-.496%201.206l-5.212%205.212%205.212%205.212c.332.33.498.732.498%201.205z%22%2F%3E%3C%2Fsvg%3E", 
    NjEVi:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2035%2035%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M16.644%2016.58l-7.59-1.29c-.958-.162-1.6-1.07-1.44-2.027.164-.958%201.072-1.602%202.028-1.44l7.026%201.194%207.713-1.197c.96-.148%201.86.508%202.008%201.468s-.508%201.858-1.467%202.007l-8.276%201.284z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M17%2024.31c-.97%200-2-.786-2-1.757v-7.445c0-.97%201.03-1.758%202-1.758s2%20.787%202%201.758v7.445c0%20.97-1.03%201.758-2%201.758z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M20.62%2030.375c-.667%200-1.306-.382-1.6-1.03l-3.516-7.717c-.402-.883-.013-1.926.87-2.33.885-.402%201.926-.01%202.33.872l3.514%207.718c.403.883.013%201.926-.87%202.328-.237.108-.485.16-.728.16z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M13.173%2030.375c-.244%200-.49-.05-.728-.16-.883-.4-1.273-1.444-.87-2.327l3.515-7.718c.402-.883%201.443-1.273%202.328-.87.884.4%201.273%201.444.87%202.328l-3.514%207.718c-.295.646-.933%201.03-1.6%201.03z%22%2F%3E%3Ccircle%20fill%3D%22%23FFF%22%20cx%3D%2216.863%22%20cy%3D%228.284%22%20r%3D%223.171%22%2F%3E%3C%2Fsvg%3E", 
    sRYsv:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2035%2035%22%3E%3Cg%20fill%3D%22%23FFF%22%3E%3Ccircle%20cx%3D%2210.624%22%20cy%3D%2211.679%22%20r%3D%222.302%22%2F%3E%3Ccircle%20cx%3D%2222.418%22%20cy%3D%2217.368%22%20r%3D%222.302%22%2F%3E%3Ccircle%20cx%3D%2215.511%22%20cy%3D%2223.057%22%20r%3D%222.302%22%2F%3E%3Cpath%20d%3D%22M6.02%2012.574h1.734c-.09-.29-.136-.59-.136-.896%200-.307.045-.607.136-.896H6.02c-.495%200-.896.4-.896.896%200%20.495.4.896.896.896zM28.98%2010.783H13.493c.09.29.136.588.136.896%200%20.306-.045.606-.136.895H28.98c.494%200%20.895-.4.895-.896s-.4-.897-.896-.897zM6.02%2018.264h13.527c-.09-.29-.136-.588-.136-.896s.046-.606.137-.896H6.02c-.495%200-.896.4-.896.896%200%20.495.4.896.896.896zM28.98%2016.473h-3.693c.09.29.136.588.136.896s-.045.605-.136.895h3.692c.494%200%20.895-.4.895-.896s-.4-.897-.896-.897zM6.02%2022.162c-.495%200-.896.4-.896.896s.4.896.896.896h6.62c-.09-.29-.136-.588-.136-.896%200-.307.046-.607.136-.896H6.02zM28.98%2022.162h-10.6c.09.29.136.59.136.896%200%20.307-.045.606-.136.896h10.6c.494%200%20.895-.4.895-.896s-.4-.896-.896-.896z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E", 
    QcBMJ:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2035%2035%22%3E%3Ccircle%20fill%3D%22%23FFF%22%20cx%3D%2217.5%22%20cy%3D%2214.919%22%20r%3D%222.567%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M19.718%2017.392c-.065-.03-.143-.015-.19.04-.312.354-.715.626-1.173.78-.04.013-.074.04-.094.08l-.617%201.234c-.06.118-.228.118-.286%200l-.617-1.234c-.02-.04-.053-.067-.094-.08-.458-.154-.86-.426-1.172-.78-.048-.054-.125-.07-.19-.04-1.38.657-2.454%201.91-2.933%203.45.47.72%201.086%201.336%201.807%201.806h6.688c.72-.47%201.337-1.087%201.806-1.807-.478-1.54-1.552-2.79-2.932-3.448z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M31.095%2015.555l-3.138-.57c-.267-1.108-.705-2.15-1.286-3.097l1.82-2.625c.198-.287.163-.677-.084-.924l-1.744-1.745c-.248-.247-.636-.282-.924-.083L23.113%208.33c-.946-.582-1.988-1.02-3.097-1.287l-.57-3.138c-.062-.344-.362-.595-.712-.595h-2.467c-.35%200-.65.25-.712.595l-.57%203.138c-1.11.267-2.15.705-3.097%201.286L9.263%206.51c-.287-.2-.676-.164-.924.083L6.595%208.34c-.248.246-.283.636-.084.923l1.818%202.625c-.58.945-1.02%201.988-1.286%203.097l-3.138.57c-.344.062-.594.362-.594.712v2.467c0%20.35.25.65.594.712l3.138.57c.266%201.108.705%202.15%201.286%203.097l-1.818%202.625c-.2.287-.164.677.083.924l1.744%201.744c.247.247.635.282.923.083l2.625-1.818c.946.58%201.988%201.02%203.097%201.286l.57%203.138c.062.344.362.595.712.595h2.467c.35%200%20.65-.25.712-.594l.57-3.138c1.11-.267%202.15-.706%203.097-1.286l2.625%201.817c.288.198.676.163.924-.084l1.744-1.744c.247-.247.282-.637.083-.924l-1.82-2.625c.582-.946%201.02-1.988%201.287-3.098l3.138-.57c.344-.06.594-.36.594-.71v-2.468c0-.35-.25-.65-.595-.712zM17.5%2025.04c-4.158%200-7.54-3.383-7.54-7.54s3.382-7.54%207.54-7.54%207.54%203.383%207.54%207.54-3.382%207.54-7.54%207.54z%22%2F%3E%3C%2Fsvg%3E", 
    KKQon:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2035%2035%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M24.1%2026.34L21.003%2019h-7.82l-.67-11.184c-.055-.956.674-1.66%201.63-1.715.96-.054%201.776.73%201.832%201.687l.48%208.213h6.818l2.71%206.216%201-.357c.9-.323%201.895.145%202.217%201.046s-.147%201.777-1.05%202.1L24.1%2026.34z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M20.943%2014h-6.32c-.96%200-1.734-.78-1.734-1.5%200-.718.774-1.5%201.732-1.5h6.32c.958%200%201.735.782%201.735%201.5%200%20.72-.777%201.5-1.734%201.5z%22%2F%3E%3Ccircle%20fill%3D%22%23FFF%22%20cx%3D%2214.835%22%20cy%3D%226.336%22%20r%3D%222.835%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M21.37%2021.76c-.55%202.425-2.68%204.252-5.27%204.252-3.012%200-5.457-2.447-5.457-5.458%200-1.43.568-2.714%201.475-3.683l-.196-3.033-1.78-1.232c-.212-.144-.487-.12-.67.06L8.21%2013.928c-.18.178-.205.46-.06.667l1.313%201.9c-.42.687-.736%201.438-.93%202.24l-2.186.415c-.25.042-.347.26-.347.514v1.783c0%20.253.098.47.348.516l2.23.413c.19.803.485%201.555.906%202.24l-1.324%201.9c-.146.208-.124.49.054.668l1.26%201.26c.182.18.456.207.667.063l1.9-1.316c.686.422%201.435.74%202.237.933l.414%202.36c.045.247.263.517.516.517h1.784c.256%200%20.472-.27.517-.518l.41-2.314c.806-.192%201.557-.533%202.242-.955l1.898%201.305c.21.144.49.11.666-.067l.994-.99-2.347-5.7z%22%2F%3E%3C%2Fsvg%3E", 
    iRdxN:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213.031%22%20height%3D%2213.016%22%20viewBox%3D%220%200%2013.031%2013.016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M6.398%207.868c0%20.072-.028.135-.083.19l-2.76%202.76%201.197%201.196c.105.104.158.23.158.373s-.053.27-.158.373c-.105.105-.23.158-.374.158H.658c-.146%200-.27-.053-.375-.158-.105-.104-.158-.23-.158-.373V8.665c0-.145.053-.268.158-.373.104-.105.23-.158.374-.158s.27.053.373.158l1.197%201.195L4.985%206.73c.056-.056.12-.085.19-.085s.137.03.192.084l.947.946c.056.055.084.12.084.192zm6.49-7.18V4.41c0%20.146-.053.27-.158.374-.106.106-.23.158-.375.158-.144%200-.27-.053-.374-.158L10.786%203.59l-2.76%202.757c-.054.057-.118.084-.19.084-.07%200-.135-.026-.19-.083L6.697%205.4c-.055-.055-.083-.12-.083-.192%200-.07.027-.135.083-.19l2.76-2.76L8.26%201.064c-.105-.105-.158-.23-.158-.375S8.154.42%208.26.315c.104-.105.23-.158.374-.158h3.722c.145%200%20.27.053.374.158s.158.23.158.373z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    fycIM:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218.281%22%20height%3D%2213.656%22%20viewBox%3D%220%200%2018.281%2013.656%22%3E%0A%20%20%3Cpath%20fill%3D%22%2357C8EE%22%20d%3D%22M18.13%203.62c0%20.095-.03.172-.09.232l-3.215%203.214c-.06.06-.138.09-.23.09-.088%200-.163-.03-.227-.095s-.096-.138-.096-.226V4.907H.452c-.088%200-.163-.032-.227-.096C.16%204.75.13%204.674.13%204.586V2.657c0-.087.03-.163.096-.227.063-.063.14-.096.226-.096h13.82V.407c0-.094.03-.17.092-.23s.137-.092.23-.092c.08%200%20.16.034.24.1L18.04%203.39c.06.06.09.137.09.23z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M18.13%209.085v1.93c0%20.086-.032.162-.096.226s-.14.096-.226.096H3.988v1.93c0%20.086-.033.16-.097.226-.062.063-.138.095-.225.095-.08%200-.16-.033-.24-.1L.22%2010.272c-.06-.062-.09-.135-.09-.222%200-.094.03-.17.09-.23l3.215-3.215c.06-.06.137-.09.23-.09.088%200%20.163.03.227.095s.096.14.096.226v1.93h13.82c.088%200%20.163.03.227.095s.095.138.095.225z%22%2F%3E%0A%3C%2Fsvg%3E%0A", 
    pmpyh:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212.031%22%20height%3D%2217.9%22%20viewBox%3D%220%200%2012.031%2017.9%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M11.257%205.77c0%201.04-.346%201.936-1.035%202.692-.3.328-.55.62-.748.874-.197.255-.396.574-.597.96-.2.385-.315.744-.342%201.08.314.187.473.46.473.823%200%20.246-.084.46-.252.642.168.18.252.396.252.643%200%20.35-.15.62-.452.813.087.154.13.312.13.473%200%20.31-.105.547-.316.714s-.47.25-.778.25c-.134.296-.335.53-.603.704s-.56.262-.876.262c-.314%200-.605-.088-.874-.262-.268-.174-.47-.408-.603-.703-.308%200-.567-.084-.778-.25s-.317-.406-.317-.714c0-.16.044-.317.13-.472-.3-.194-.45-.465-.45-.813%200-.247.083-.462.25-.643-.167-.18-.25-.396-.25-.643%200-.363.156-.638.47-.825-.025-.335-.14-.694-.34-1.08-.2-.385-.4-.704-.598-.96-.2-.252-.448-.544-.75-.872C1.315%207.706.97%206.81.97%205.77c0-.662.15-1.28.448-1.853s.69-1.047%201.175-1.426c.485-.377%201.035-.675%201.647-.893s1.237-.326%201.873-.326c.637%200%201.26.11%201.874.327.613.218%201.162.516%201.647.894.486.38.878.855%201.176%201.428s.447%201.19.447%201.853zm-1.286%200c0-.48-.114-.93-.346-1.346-.23-.414-.532-.754-.904-1.02-.37-.262-.783-.47-1.235-.62-.452-.152-.91-.227-1.37-.227s-.92.075-1.372.226c-.452.15-.863.358-1.235.622-.372.265-.674.605-.905%201.02-.23.416-.346.864-.346%201.347%200%20.676.228%201.28.683%201.808.066.074.17.185.307.332.137.146.24.258.306.33.857%201.025%201.33%202.023%201.417%202.994h2.29c.087-.97.56-1.97%201.416-2.993.067-.073.17-.185.307-.33l.307-.333c.453-.53.68-1.133.68-1.81zm-1.606%200c0%20.088-.03.163-.095.227-.065.063-.14.096-.228.096s-.162-.032-.225-.096c-.065-.063-.096-.14-.096-.226%200-.308-.18-.545-.54-.713-.363-.166-.718-.25-1.066-.25-.087%200-.162-.03-.226-.095-.063-.064-.096-.14-.096-.227s.033-.162.096-.225.14-.096.226-.096c.335%200%20.668.054%201%20.16.33.107.622.288.874.543.25.255.376.556.376.904z%22%2F%3E%0A%3C%2Fsvg%3E%0A"};
    return NteyS;
  };
  andiUA.eqFML = function() {

    var NteyS;
    NteyS = andiUA.QOBdC();
    andiUA.EglES = NteyS.Svg;
    return NteyS;
  };
  andiUA.IKBzO = function(ldTmG) {

    var newelm = ldTmG.cloneNode(true);
    while (newelm.firstChild) {
      newelm.removeChild(newelm.firstChild);
    }
    return newelm.innerText;
  };
  andiUA.SsrQV = function() {

    (function() {
      var NteyS = andiUA.EglES;
      var beOTK = localStorage.getItem("uiWAD");
      var cssOldMenu = ".accessibility_component {z-index:99999 !important;} #PFaFV { background-color: " + andiUA.TUAsettingFn.zqayb.backgroundColor + " !important;#pJIrA {z-index: 999999 !important;background-color: " + andiUA.TUAsettingFn.zqayb.backgroundColor + " !important;" + (andiUA.DOwbI == "rtl") ? "text-align: right !important" : "text-align: left !important" + "; position: fixed !important;" + andiUA.TUAsettingFn.pBKRk.SLWGk + 
      ": " + andiUA.TUAsettingFn.pBKRk.bHZQt + "% !important;    top: " + andiUA.TUAsettingFn.pBKRk.BnKCu + "% !important; width: " + andiUA.TUAsettingFn.pBKRk.dVzSB + " !important;} #pJIrA * { z-index: 999999 !important; background-color: " + andiUA.TUAsettingFn.zqayb.backgroundColor + "!important; direction: " + andiUA.DOwbI + " !important;}#pfbGh {    height: 100%;    width: 17%;    display: inline-block;    background-size: 100% 100%;    background-repeat: no-repeat;    background-position: 50% 50%;background-color: " + 
      beOTK + "}#VseDf label:hover { background-color: " + beOTK + "}#aeuiJ .FcCGt {    background-image: url(" + NteyS.wNLng + ");} #aeuiJ .WfkQE {    background-image: url(" + NteyS.WfkQE + ");} #aeuiJ #hoCYF {    background-image: url(" + NteyS.hoCYF + ");}#SPuQG #NlFsS #QCkdX {    background-color: " + 
      beOTK + ";}#frhQA {background-image: url(" + NteyS.GnaeV + ")}#itlJi {background-image: url(" + NteyS.lXWsG + ")}#IoVaW2black { background-image: url(" + NteyS.IhwZN + ")}#bmJtA { background-image: url(" + NteyS.wvWOO + ")}#IXtxT { background-image: url(" + NteyS.PElbm + ")}#zSVgI { background-image: url(" + NteyS.TUAuserzTjFC + ")}#IoVaWsetYourOwncCiEZWrap { background-image: url(" + 
      NteyS.gCIZX + ")}#mpvGn {   background-image: url(" + NteyS.ShxMw + ")}#eVQen {background-size: 16% 45%;    background-image: url(" + NteyS.ENDdC + ")}#XUsiJ {    background-size: 20% 55%;    background-image: url(" + NteyS.ENDdC + ")}#EXRcw {}.ioZKa {    background-color: " + beOTK + ";    font-weight: bold;    color: #fff}#JEhHM {    z-index: 9999999998;    border: 4px solid " + 
      andiUA.TUAsettingFn.zqayb.backgroundColor + ";    font-size: 15px;    padding: 2px 3px;    position: absolute;    background-color: " + andiUA.TUAsettingFn.zqayb.backgroundColor + ";    color: #fff;    letter-spacing: 1px;    font-weight: bolder;}#JEhHM.zfbHn:before,#JEhHM.zfbHn:after {    border-bottom-color: " + andiUA.TUAsettingFn.zqayb.backgroundColor + ";}#JEhHM.QTVmL:before,#JEhHM.QTVmL:after {    border-color: rgba(0, 0, 0, 0);    border-top-color: " + 
      andiUA.TUAsettingFn.zqayb.backgroundColor + "}.jspDrag {background-color: " + beOTK + ";}.andiOpenSubMenu { background-image: url(" + NteyS.xemef + ");}";
      var cssNewMenu = "#wrapsetBtn [role='button'].andion:focus-within {background-color:rgb(252, 68, 130) !important;box-shadow: 0px 0px 10px DimGray !important;} #wrapsetBtn [role='button']:not(.andion):focus-within {background-color:#A1A1A1 !important;box-shadow: 0px 0px 10px DimGray !important;} .UAloader { border: 16px solid #f3f3f3; border-radius: 50%; width: 1px; height: 1px; -webkit-animation: UAspinLoader 2s linear infinite; animation: UAspinLoader 2s linear infinite; } @-webkit-keyframes UAspinLoader { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); } } @keyframes UAspinLoader { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }#xIRDN{background-color: " + 
      andiUA.TUAsettingFn.zqayb.backgroundColor + " ;}    #jilVt *{direction:" + andiUA.DOwbI + "}    .IdrLU .joMhk .KkszN {  background-color: transparent; }    .zStNQ:focus ,.zStNQ:focus *, .WfBug:focus *, .WfBug:focus{clip: auto !important ;height: auto !important;width: auto !important; overflow: visible !important;margin: 0px !important;padding:0px 10px !important;}    #jilVt #fvLXm .khlBU .bkVMl{background:" + 
      andiUA.TUAsettingFn.zqayb.backgroundColor + "}.vjEnr{top:" + (window.innerHeight > 638 ? 638 - 35 : window.innerHeight - 35) + "px;}";
      UA1("body").appendHtml("<style>" + cssOldMenu + "</style>");
      UA1("body").appendHtml("<style>" + cssNewMenu + "</style>");
    })();
  };
  andiUA.ZPnPo = function() {

    (function() {
      var PPFAr = window.innerWidth;
      var UKDWE = '<div style="width:' + PPFAr + 'px;" id="RXIxq"><div data-andiallelmwithtext title="' + andiUA.KNTQg.UAtdr295 + '" style="z-index:999999999; background:' + andiUA.TUAsettingFn.zqayb.backgroundColor + " ;position:fixed;width:" + andiUA.TUAsettingFn.zqayb.CrQZT + "px; height:" + andiUA.TUAsettingFn.zqayb.LKHmh + 'px;" id="xIRDN" role="button" aria-label="' + andiUA.KNTQg.Dmpey + 
      '" tabindex="0"><img alt=""/></div></div>';
      var sZAAR = UA1("body");
      sZAAR.brAmf(UKDWE);
      andiUA.nIqWd();
      if (andiUA.TUAsettingFn.KMCJX == "1") {
        UA("#xIRDN img")[0].setAttribute("src", andiUA.EglES.QcBMJ);
      } else {
        if (andiUA.TUAsettingFn.KMCJX == "2") {
          UA1("#xIRDN img").setAttribute("src", andiUA.EglES.sRYsv);
        } else {
          if (andiUA.TUAsettingFn.KMCJX == "3") {
            UA1("#xIRDN img").setAttribute("src", andiUA.EglES.NjEVi);
          } else {
            if (andiUA.TUAsettingFn.KMCJX == "4") {
              UA1("#xIRDN img").setAttribute("src", andiUA.EglES.KKQon);
            } else {
              if (andiUA.TUAsettingFn.KMCJX != "") {
                UA1("#xIRDN img").setAttribute("src", andiUA.TUAsettingFn.KMCJX);
              }
            }
          }
        }
      }
      window.onresize = function(UAenv) {
        document.getElementById("RXIxq").style.width = window.innerWidth + "px";
        andiUA.nIqWd();
      };
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr257);
    })();
  };
  andiUA.nIqWd = function() {

    (function() {
      var PPFAr = window.innerWidth;
      var urFBR = window.innerHeight;
      var iconPositionLeftByUser = parseInt(localStorage.getItem("iconPositionLeftByUser"));
      var iconPositionTopByUser = parseInt(localStorage.getItem("iconPositionTopByUser"));
	  
      if (iconPositionTopByUser > -1 && iconPositionLeftByUser > -1) {
        if (iconPositionLeftByUser < PPFAr) {
          document.getElementById("xIRDN").style.left = iconPositionLeftByUser + "px";
        } else {
          document.getElementById("xIRDN").style.left = 10 + "px";
        }
        if (iconPositionTopByUser < urFBR) {
          document.getElementById("xIRDN").style.top = iconPositionTopByUser + "px";
        } else {
          document.getElementById("xIRDN").style.top = 10 + "px";
        }
      } else {
        if (PPFAr <= 320) {
          var cssString = document.getElementById("xIRDN").style.cssText + " " + andiUA.TUAsettingFn.zqayb.ZLlIh + ":" + andiUA.TUAsettingFn.zqayb.zKkgy + "px;top:" + andiUA.TUAsettingFn.zqayb.XsyxA + "px";
          document.getElementById("xIRDN").style.cssText = cssString;
        } else {
          if (PPFAr <= 480) {
			  
            var cssString = document.getElementById("xIRDN").style.cssText + " " + andiUA.TUAsettingFn.zqayb.pckJB + ":" + andiUA.TUAsettingFn.zqayb.oeOfz + "px;top:" + andiUA.TUAsettingFn.zqayb.nrjcP + "px";
			document.getElementById("xIRDN").style.cssText = cssString;
          } else {
            if (PPFAr <= 767) {
				
              var cssString = document.getElementById("xIRDN").style.cssText + " " + andiUA.TUAsettingFn.zqayb.eWDbs + ":" + andiUA.TUAsettingFn.zqayb.lPTWj + "px;top:" + andiUA.TUAsettingFn.zqayb.xTfEB + "px";
              
			  document.getElementById("xIRDN").style.cssText = cssString;
            } else {
              if (PPFAr <= 960) {
                var cssString = document.getElementById("xIRDN").style.cssText + " " + andiUA.TUAsettingFn.zqayb.OEcFZ + ":" + andiUA.TUAsettingFn.zqayb.qyPJQ + "px;top:" + andiUA.TUAsettingFn.zqayb.bvMmi + "px";
                document.getElementById("xIRDN").style.cssText = cssString;
              } else {
                if (PPFAr <= 1024) {
                  var cssString = document.getElementById("xIRDN").style.cssText + " " + andiUA.TUAsettingFn.zqayb.wRvQF + ":" + andiUA.TUAsettingFn.zqayb.bWZSs + "px;top:" + andiUA.TUAsettingFn.zqayb.ovuUw + "px";
                  document.getElementById("xIRDN").style.cssText = cssString;
                } else {
                  if (PPFAr > 1024) {
                    var cssString = document.getElementById("xIRDN").style.cssText + " " + andiUA.TUAsettingFn.zqayb.XMGSg + ":" + andiUA.TUAsettingFn.zqayb.GuHpp + "px;top:" + andiUA.TUAsettingFn.zqayb.NHurv + "px";
                    document.getElementById("xIRDN").style.cssText = cssString;
                  } else {
                    var cssString = document.getElementById("xIRDN").style.cssText + " " + andiUA.TUAsettingFn.zqayb.XMGSg + ":" + andiUA.TUAsettingFn.zqayb.GuHpp + "px;top:" + andiUA.TUAsettingFn.zqayb.NHurv + "px";
                    document.getElementById("xIRDN").style.cssText = cssString;
                  }
                }
              }
            }
          }
        }
      }

    })();
  };
  andiUA.createAccessibilityMenu = function() {

    (function() {
      if (UA1("#jilVt") !== null) {
        UA1("#jilVt").zOhhK();
      }
      var menuHTML = '<div style="position:relative;"><div id="jilVt" style="top:0 !important"><div id="SQoLG"><div><div id="BVGhv"><input src="' + andiUA.EglES.CpGXW + '" type="image" alt="' + andiUA.KNTQg.UAtdr2164 + '" /></div><div id="SQoLGBigImg"></div><div id="SQoLGBasicSetting"><div class="uawrapintrotext"><div id="SQoLGBigImgText">' + andiUA.KNTQg.UAtdr2133 + 
      '</div><label for="chooseLang" id="langselectLabel" style="padding: 5px;">' + andiUA.KNTQg.UAtdr2134 + '</label><select aria-labelledby="langselectLabel" id="chooseLang"><option value="he">\u05e2\u05d1\u05e8\u05d9\u05ea</option><option value="en">English</option><option value="es">Spanish</option><option value="ru">\u0420\u0443\u0441\u0441\u043a\u0438\u0439</option><option value="ar">\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629 </option><option value="fr" disabled>Fran\u00e7ais ---- ' + 
      andiUA.KNTQg.UAtdr2151 + '</option><option value="it" disabled>Italiano ------ ' + andiUA.KNTQg.UAtdr2151 + '</option><option value="es" disabled>Espa\u00f1ol| ---- ' + andiUA.KNTQg.UAtdr2151 + '</option></select><p style="padding: 5px;">' + andiUA.KNTQg.UAtdr2135 + "<br/>" + '<a id="regulationsLink" style="text-decoration: underline !important;" href="' + andiUA.url + 'regulations" target="_blank">' + andiUA.KNTQg.UAtdr2136 + "</a>" + 
      '<a id="regulationsLink2" style="text-decoration: underline !important;" href="' + andiUA.url + 'regulations#UAtdr2184" target="_blank">' + andiUA.KNTQg.UAtdr2184 + "</a>" + '<a id="regulationsLink3" style="text-decoration: underline !important;" href="' + andiUA.url + 'regulations#UAtdr2185" target="_blank">' + andiUA.KNTQg.UAtdr2185 + "</a>" + '</p></div><div><div id="SQoLGAgreeBtn" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.UAtdr2139 + 
      '">' + andiUA.KNTQg.UAtdr2137 + '</div></div></div><p class="andilastparph" style="padding: 5px;color:#fff !important;">' + andiUA.KNTQg.UAtdr2138 + '</p><div id="uDFjQ"><a href="' + andiUA.url + '" target="_blank">' + andiUA.KNTQg.oxUmA + '</a></div></div></div><div id="BEMFU"><div id="gMhQJ"><div id="fjaun" role="button" arla-label="' + andiUA.KNTQg.GSBCZ + '" ktjXB="' + andiUA.KNTQg.UAtdr272 + 
      '" andifirsttime="' + andiUA.KNTQg.UAtdr262 + '" tabindex="0"><img  src="' + andiUA.EglES.fycIM + '" alt="' + andiUA.KNTQg.GSBCZ + '" /></div><div id="iLSlI" role="button" aria-label="' + andiUA.KNTQg.UAtdr271 + '" ktjXB="' + andiUA.KNTQg.UAtdr271 + '" andifirsttime="' + andiUA.KNTQg.UAtdr261 + '" tabindex="0"><img  src="' + andiUA.EglES.iRdxN + '" alt="' + andiUA.KNTQg.UAtdr271 + 
      '" /></div><div  id="highContrastMenu" role="button" aria-label="' + andiUA.KNTQg.bbb30 + '" ktjXB="' + andiUA.KNTQg.bbb29 + '" andifirsttime="' + andiUA.KNTQg.bbb30 + '" tabindex="0"><svg id="Layer_1"  viewBox="0 -25 100 100"><defs><style>.UAcls-1{fill:#fff}</style></defs><path class="UAcls-1" d="M38.77 21.57a11.75 11.75 0 1 0 3.09-5l5.8 6.52z"/><path class="UAcls-1" d="M90.12 23.19A61.78 61.78 0 0 0 79 12.86C69.8 6.08 59.76 2.5 50 2.5S30.2 6.08 21 12.86A61.78 61.78 0 0 0 9.88 23.19L8.45 25l1.43 1.81A61.78 61.78 0 0 0 21 37.14c9.2 6.78 19.24 10.36 29 10.36s19.8-3.58 29-10.36a61.78 61.78 0 0 0 11.12-10.33L91.55 25zm-5.84 3.35a52.69 52.69 0 0 1-9.48 8.83c-7.88 5.79-16.46 8.85-24.8 8.85s-16.92-3.06-24.8-8.85a52.69 52.69 0 0 1-9.48-8.83L14.5 25l1.22-1.54a52.69 52.69 0 0 1 9.48-8.83C33.08 8.84 41.66 5.78 50 5.78s16.92 3.06 24.8 8.85a52.69 52.69 0 0 1 9.48 8.83L85.5 25z"/></svg></div>\t<div id="JlUMY" ktjXB="' + 
      andiUA.KNTQg.UAtdr273 + '"><input id="JlUMYinput" src="' + andiUA.EglES.CpGXW + '" type="image" alt="' + andiUA.KNTQg.OFxdC + '" /></div></div><div id="TZwBB"><div id="sEdIL"><div role="button" style="background-image:url(' + andiUA.EglES.dbxsU + ')" id="andiSetting" tabindex="0" aria-label="' + andiUA.KNTQg.MgrMY + '"></div><span style="display:inline-block;margin: 0 10px;color:#fff;line-height: 30px;">|</span>' + 
      (andiUA.pUVLT ? "" : '<div id="kTUtq"><div id="dXLgH" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.UAtdr2142 + '">' + andiUA.KNTQg.UAtdr2140 + '</div><div id="andiuserheaderloginconnect">' + andiUA.KNTQg.UAtdr2149 + "</div></div>") + '</div></div></div><div id="VbcHu"><div><div id="TUAintroScreen" ><div TUAheaderbarbtn="0" id="ADyWm" role="button" aria-controls="RFjdP"  tYlBy="true" tabindex="0" aria-label="' + 
      andiUA.KNTQg.UAtdr201 + '" ktjXB="' + andiUA.KNTQg.kYYsB + '" andifirsttime="' + andiUA.KNTQg.UAtdr275 + '" ><svg id="oAHBI"  width="23.998" height="39.678" viewBox="63.188 42.669 23.998 39.678"><path  d="M63.188 61.733V42.67h3.973v19.063m16.056 0V42.67h3.97v19.063"/><path  d="M66.24 54.688c2.036-1.91 4.93-2.864 8.696-2.864 3.848 0 6.85.914 9.01 2.74 2.16 1.823 3.24 4.73 3.24 8.716v19.062h-3.97V63.28c0-2.678-.712-4.702-2.134-6.083-1.422-1.38-3.472-2.072-6.146-2.072-2.537 0-4.467.692-5.79 2.072-1.322 1.38-1.985 3.405-1.985 6.083v19.066H63.19V63.28c0-3.818 1.02-6.685 3.052-8.592z"/><path  d="M67.16 64.956h16.056v4.225H67.16zM74 60.164c0-1.02-.83-1.85-1.853-1.85s-1.852.83-1.852 1.85c0 1.024.83 1.852 1.852 1.852S74 61.188 74 60.164zM80.054 60.164c0-1.02-.833-1.85-1.854-1.85-1.022 0-1.852.83-1.852 1.85 0 1.024.83 1.852 1.852 1.852 1.02 0 1.854-.828 1.854-1.852z"/></svg></div></div><div id="TUAuserArea"><div TUAheaderbarbtn="1" id="TUAprofileFunction" role="button"  aria-controls="QSgtZ" tYlBy="true" tabindex="0" aria-label="' + 
      andiUA.KNTQg.UAtdr202 + " " + andiUA.KNTQg.UAtdr2165 + '" andifirsttime="' + andiUA.KNTQg.BDnDv + '" ktjXB="' + andiUA.KNTQg.BDnDv + '"><svg id="CzFAz"  width="39.178" height="39.18" viewBox="33.24 43.062 39.178 39.18"><path  d="M52.828 47.712c2.842 0 5.143 2.303 5.143 5.145 0 2.84-2.3 5.14-5.142 5.14-2.84 0-5.143-2.3-5.143-5.14 0-2.842 2.303-5.145 5.143-5.145m0 22.04c7.275 0 14.938 3.572 14.938 5.14v2.694H37.89v-2.693c0-1.57 7.667-5.14 14.938-5.14m0-26.69c-5.41 0-9.793 4.382-9.793 9.794 0 5.41 4.383 9.793 9.793 9.793 5.412 0 9.795-4.383 9.795-9.793 0-5.413-4.383-9.795-9.795-9.795zm0 22.036c-6.537 0-19.588 3.28-19.588 9.793v7.35h39.178v-7.35c0-6.514-13.05-9.794-19.59-9.794z"/></svg></div></div><div id="BYImf"><div TUAheaderbarbtn="2" id="BYImfFunction" role="button" aria-controls="QSgtZ" tYlBy="true" tabindex="0" aria-label="' + 
      andiUA.KNTQg.UAtdr203 + '" andifirsttime="' + andiUA.KNTQg.HXGtu + '" ktjXB="' + andiUA.KNTQg.HXGtu + '"><svg id="yKaGk"  width="38.729" height="38.729" viewBox="-37.862 42.732 38.729 38.729"><path  d="M-20.434 73.715h3.873v-3.872h-3.874v3.872zm1.937-30.983c-10.69 0-19.365 8.676-19.365 19.364s8.675 19.364 19.365 19.364C-7.81 81.46.867 72.783.867 62.096c0-10.688-8.676-19.364-19.364-19.364zm0 34.857c-8.54 0-15.492-6.953-15.492-15.493s6.953-15.492 15.493-15.492 15.49 6.95 15.49 15.492c0 8.54-6.95 15.492-15.49 15.492zm0-27.112c-4.28 0-7.746 3.467-7.746 7.746h3.873c0-2.13 1.743-3.873 3.873-3.873s3.873 1.744 3.873 3.874c0 3.873-5.81 3.39-5.81 9.683h3.873c0-4.357 5.808-4.84 5.808-9.683 0-4.28-3.466-7.746-7.745-7.746z"/></svg></div></div><div id="TUAfeedback"><div TUAheaderbarbtn="3" id="TUAfeedbackFunction" role="button" aria-controls="QSgtZ" tYlBy="true" tabindex="0" aria-label="' + 
      andiUA.KNTQg.UAtdr204 + '" andifirsttime="' + andiUA.KNTQg.dhvZU + '" ktjXB="' + andiUA.KNTQg.dhvZU + '"><svg id="ypswI"  width="37.848" height="37.844" viewBox="-113.35 43.565 37.848 37.844">  <path  d="M-79.502 47.565V69.84h-27.935l-1.17 1.172-.738.736.013-24.183h29.83m.215-4h-30.278c-2.082 0-3.767 1.703-3.767 3.784l-.018 34.06 7.57-7.57h26.493c2.08 0 3.785-1.705 3.785-3.785V47.35c0-2.08-1.704-3.785-3.785-3.785z"/>  <path  d="M-96.318 62.486h3.785v3.783h-3.785zM-96.318 51.134h3.785v7.57h-3.785z"/></svg></div></div></div><div class="DoyLq"><div headerBarMarkSelected="0" class="VbcHuMarkIfSelected"></div><div headerBarMarkSelected="1" class="VbcHuMarkIfSelected"></div><div headerBarMarkSelected="2" class="VbcHuMarkIfSelected"></div><div headerBarMarkSelected="3" class="VbcHuMarkIfSelected"></div></div></div></div>';
      UA1("body").brAmf(menuHTML);
      if (UA1('[value="' + UA1("html").getAttr("vFaKz") + '"]') != null) {
        UA1('[value="' + UA1("html").getAttr("vFaKz") + '"]').addAttr({"selected":"selected"});
      }
      UA1("#regulationsLink").style.cssText = !andiUA.pUVLT ? "display:block !important" : "display:none !important";
      UA1("#regulationsLink2").style.cssText = !andiUA.pUVLT ? "display:block !important" : "display:none !important";
      UA1("#regulationsLink3").style.cssText = !andiUA.pUVLT ? "display:block !important" : "display:none !important";
      andiUA.nwGbg();
      if (UA1('#xIRDN').getCss('left') == '0px') {
        UA1("#jilVt").style.left = "-320px";
      } else {
        UA1("#jilVt").style.right = "-320px";
      }/*
      if (andiUA.DOwbI == "ltr") {
        UA1("#jilVt").style.left = "-320px";
      } else {
        UA1("#jilVt").style.right = "-320px";
      }*/
      if (andiUA.pUVLT && UA1("#dontrunonthissite") != null) {
        UA1("#dontrunonthissite").addCss({"display":"none"});
      }
      UA1("#jilVt").style.cssText = UA1("#jilVt").style.cssText + "display: none !important;";
      andiUA.andiShowLogInOrOut();
    })();
  };
  andiUA.andiShowLogInOrOut2 = function() {

    if (localStorage.getItem("andiislogin") == "true") {
      if (UA1("#andiloginsmallmenu") != null) {
        UA1("#andiloginsmallmenu").addCss({"display":"none"});
        UA1("#lugTJ").addCss({"display":"inline-block"});
      }
    } else {
      if (UA1("#andiloginsmallmenu") != null) {
        UA1("#andiloginsmallmenu").addCss({"display":"inline-block"});
        UA1("#lugTJ").addCss({"display":"none"});
        UA1("#ADyWm").click();
      }
    }
  };
  andiUA.restorImgs = function() {
    var UApath = andiUA.KpAEX;
    if (UA("#TUAopenNavigationOption .bnVjM img").length == 0) {
      if (UA1("#backupImage") !== null) {
        UA1("#backupImage").zOhhK();
      }
      UA1("body").appendHtml('<style id="backupImage">#openTextOption .bnVjM {background-image:url(' + UApath + "/images/TextAdjusmentCategoryImage.svg) !important;}\t#TUAopenContentOption .bnVjM {background-image:url(" + UApath + "/images/ContentHelpCategoryImage.svg) !important;}\t#openColorOption .bnVjM {background-image:url(" + UApath + "/images/ColorAdjustmentCategoryImage.svg) !important;}\t#TUAopenNavigationOption .bnVjM {background-image:url(" + 
      UApath + "/images/NavigationDevicesCategoryImage.svg) !important;}\t#xIRDN{background-image:url(" + andiUA.EglES.jRUVZ + ") !important;background-repeat: no-repeat !important;background-size: 100% 100% !important;}\t#TUAshowMainContentWrap{  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_111' viewBox='0 0 80 50'%3e%3cdefs%3e%3cstyle%3e.UAcls-1%7bfill:%237d7d7d%7d%3c/style%3e%3c/defs%3e%3cpath class='UAcls-1' d='M79 1v5.61H1V1h78m1-1H0v7.61h80V0zM79 43.39V49H1v-5.61h78m1-1H0V50h80v-7.61z'/%3e%3cpath class='UAcls-1' d='M79 7.52v35H56.56v-35H79m1-1H55.56v37H80v-37z'/%3e%3cpath class='UAcls-1' d='M.5 7.02h55.67v35.96H.5z'/%3e%3cpath class='UAcls-1' d='M55.67 7.52v35H1v-35h54.67m1-1H0v37h56.67v-37z'/%3e%3c/svg%3e\") !important;   background-repeat: no-repeat !important;background-size: 100% 100% !important;}\t#TUAshowMainContent{  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_111' viewBox='0 0 80 50'%3e%3cdefs%3e%3cstyle%3e.UAcls-1%7bfill:%237d7d7d%7d%3c/style%3e%3c/defs%3e%3cpath class='UAcls-1' d='M79 1v5.61H1V1h78m1-1H0v7.61h80V0zM79 43.39V49H1v-5.61h78m1-1H0V50h80v-7.61z'/%3e%3cpath class='UAcls-1' d='M79 7.52v35H56.56v-35H79m1-1H55.56v37H80v-37z'/%3e%3cpath class='UAcls-1' d='M.5 7.02h55.67v35.96H.5z'/%3e%3cpath class='UAcls-1' d='M55.67 7.52v35H1v-35h54.67m1-1H0v37h56.67v-37z'/%3e%3c/svg%3e\") !important;    background-repeat: no-repeat !important;background-size: 35% 35% !important;background-position: 80% 83%;}\t</style>");
      if (!UA1(".AueIG  img") && UA1(".AueIG").BKXPP().trim() == "") {
        UA1("#backupImage").appendHtml("div.bkVMl div.AueIG{ background-image: url(" + UApath + "/images/backArrow.png) !important;background-repeat: no-repeat !important;background-size: 120% 120% !important;}");
      }
      UA(".VDmCM").forEach(function(VnIxP, i) {
        if (VnIxP.tfind("img").length == 0) {
          VnIxP.appendHtml('<img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.url + '/andi-on/images/FAQarrowGray.png" />');
        }
      });
      if (UA1("html").getAttr("DOwbI") == "rtl") {
        if (!UA1(".UAmaincssrtl")) {
          andiLoadCssRtl();
        }
      } else {
        if (!UA1(".UAmaincssltr")) {
          andiLoadCssLtr();
        }
      }
    }
  };
  andiUA.nwGbg = function() {

    UA1("#jilVt").appendHtml('<div class="BohAM" tabindex="0" role="region" id="RFjdP" style="position:relative;"><div id="tUNGC" >\t<div id="cWIDE"><div id="bZkqy"></div><div id="PhVFO"><div id="lWMeB" andifirsttime="' + andiUA.KNTQg.UAtdr276 + '" role="button" tuabtnactive="true" tabindex="0" class="andimenucode" andivalidation="true">'+andiUA.KNTQg.HNdzn+'\x3c!--<img class="WeXZj" alt="" src="' + 
    andiUA.KpAEX + '/images/twoV.png" />--\x3e<img class="TUAseeActiveBasicAcccessibilityIcon" alt="" src="' + andiUA.KpAEX + '/images/activeBasicAcccessibility.png"></div></div><div id="LHRwG">\t<div id="PcvgW" aria-label="' + andiUA.KNTQg.UAtdr110 + '" role="button" tabindex="0">' + andiUA.KNTQg.UAtdr110 + '</div>\t<div id="mvutM"  aria-label="' + andiUA.KNTQg.UAtdr111 + '" role="button" tabindex="0">' + 
    andiUA.KNTQg.UAtdr111 + '</div></div>\t</div><div id="ciZJc"><div id="QlvZw" aria-controls="fvLXm" role="heading" aria-level="2" >' + andiUA.KNTQg.CShUD + '</div></div><div id="fvLXm"><div class="khlBU" id="openTextOption"><div class="owUce" aria-label="' + andiUA.KNTQg.UAtdr209 + '"   role="button" tYlBy="true" tabindex="0"><div class="bnVjM"><img src="' + 
    andiUA.KpAEX + '/images/TextAdjusmentCategoryImage.svg" alt="" /></div><p>' + andiUA.KNTQg.TIDvR + '</p></div><div id="yIiKG" class="IdrLU"><div class="ZDMId"><div class="bkVMl"><div class="AueIG" ktjXB="' + andiUA.KNTQg.UAtdr279 + '" role="button" aria-label="' + andiUA.KNTQg.kmqYP + '" tabindex="0" tYlBy="false">&#x279c;</div><div class="xFWoP" role="heading" aria-level="3" > ' + 
    andiUA.KNTQg.DUvUz + '</div><div class="Awzjy" ktjXB="' + andiUA.KNTQg.UAtdr278 + '" role="button" aria-label="' + andiUA.KNTQg.UAtdr277 + '" tabindex="0" tYlBy="false"></div></div><div class="rZZEa"><div class="ltsXQ"></div><div class="joMhk"><div class="LAsQk"><div class="QybqI" id="ZJlam" role="button" tabindex="0" tYlBy="true"><p>' + 
    andiUA.KNTQg.FEgUr + '</p>\x3c!--<img alt="" src="' + andiUA.KpAEX + '/images/magnifair.svg">--\x3e<svg id="svgmagnifair"  width="31.337" height="31.337" viewBox="-4.125 -4.125 31.337 31.337"><path  d="M18.27 15.583h-1.414l-.502-.482c1.756-2.043 2.813-4.694 2.813-7.58 0-6.43-5.214-11.645-11.646-11.645S-4.124 1.09-4.124 7.52 1.09 19.168 7.52 19.168c2.885 0 5.537-1.058 7.58-2.813l.483.502v1.415l8.96 8.942 2.67-2.67-8.942-8.96zm-10.75 0c-4.46 0-8.06-3.6-8.06-8.062 0-4.46 3.6-8.06 8.06-8.06 4.462 0 8.063 3.6 8.063 8.06 0 4.462-3.6 8.063-8.062 8.063z"/></svg></div><div id="cqUuD" ><div id="pgvCh" style="height: 50px;">' + 
    andiUA.KNTQg.UAtdr189 + '</div><svg aria-hidden="true" id="YlCpH" width="39.925" height="29.397" viewBox="-6.78 -1.123 39.925 29.397">  <path d="M-6.78 26.274c0 1.104.896 2 2 2h35.925c1.104 0 2-.896 2-2V.877c0-1.104-.896-2-2-2H-4.78c-1.104 0-2 .896-2 2v25.397z"/>  <path fill="#FFF" d="M8.798 24.306L5.37 18.44l-1.653-2.482c-.29.11-.5.22-.632.328-.69.56-1.034 1.494-1.034 2.81v5.21H.246v-4.56c0-1.59.235-2.767.707-3.536.19-.312.453-.604.79-.877.337-.27.742-.488 1.213-.646l-2.7-4.417H2.3l3.223 5.43 1.817 2.817c.37-.217.644-.44.822-.676.177-.23.325-.543.445-.943.12-.398.18-.87.18-1.414V10.27h1.807v4.558c0 .596-.026 1.11-.077 1.54s-.156.888-.314 1.366c-.327.97-1.02 1.666-2.08 2.078l2.71 4.494H8.8zm15.673 0l-4.674-8-2.256-3.386c-.397.15-.685.298-.862.445-.94.763-1.41 2.04-1.41 3.83v7.11h-2.464v-6.22c0-2.167.32-3.774.964-4.824.258-.424.617-.822 1.076-1.193.46-.37 1.012-.665 1.656-.883l-3.682-6.026h2.79l4.394 7.407 2.48 3.845c.503-.298.876-.605 1.12-.92.242-.32.445-.75.607-1.293.162-.544.244-1.188.244-1.93v-7.11h2.467v6.22c0 .81-.034 1.51-.104 2.1-.068.59-.213 1.21-.43 1.862-.447 1.326-1.393 2.27-2.838 2.834l3.698 6.13H24.47z"/></svg><div id="sDZbX"><div id="JPRSV" role="button" tabindex="0" tYlBy="true" aria-label="' + 
    andiUA.KNTQg.utSEo + '"><svg aria-hidden="true" id="BeDAB"  width="25" height="24.998" viewBox="-2.963 -13.077 25 24.998"><path fill="none" d="M-2.963-13.077h25V11.92h-25v-24.997z" /><path d="M9.536-12.936C2.816-12.936-2.63-7.492-2.63-.77c0 6.716 5.446 12.165 12.166 12.165 6.72 0 12.166-5.45 12.166-12.166 0-6.72-5.445-12.166-12.166-12.166zm7.08 13.58h-5.664V6.31H8.12V.645H2.456v-2.83H8.12v-5.67h2.833v5.67h5.665v2.83z" /></svg></div><div id="xPEGE" role="button" tabindex="0" tYlBy="true" aria-label="' + 
    andiUA.KNTQg.LdIyb + '"><svg id="ZFdLI" aria-hidden="true"  width="21" height="20.999" viewBox="-46.397 -12.417 21 20.999"><path  d="M-35.897-12.417c-5.8 0-10.5 4.7-10.5 10.5 0 5.796 4.7 10.5 10.5 10.5s10.5-4.704 10.5-10.5c0-5.8-4.7-10.5-10.5-10.5zm1.223 9.28h4.89v2.44H-42.008v-2.44h4.89"/></svg></div><div id="JJZzG"><div id="hKyOI"><div id="XjgPc"></div><div id="qlMvI"></div></div><div id="LMkvg"></div><div id="sjedp"></div><div id="cGvHB" tabindex="0" role="button" aria-label="' + 
    andiUA.KNTQg.UAtdr190 + '">' + andiUA.KNTQg.CWrkf + '</div></div></div></div></div><div class="LAsQk"><div id="TUAalignLRight" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.Yjffg + '</p><svg id="svgalignRight"  width="25" height="25" viewBox="-0.5 -0.5 25 25"><path  d="M-.5 24.5h25v-2.777h-25V24.5zm8.333-5.556H24.5v-2.777H7.833v2.777zM-.5 13.39h25V10.61h-25v2.777zm8.333-5.557H24.5V5.056H7.833v2.777zM-.5-.5v2.778h25V-.5h-25z"/></svg></div><div id="TUAalignLeft" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.grlYe + '</p><svg id="svgalignLeft"  width="25" height="25" viewBox="-0.5 -0.5 25 25"><path  d="M16.167 16.167H-.5v2.777h16.667v-2.777zm0-11.11H-.5v2.777h16.667V5.056zM-.5 13.388h25V10.61h-25v2.777zm0 11.11h25v-2.777h-25V24.5zm0-25v2.778h25V-.5h-25z"/></svg></div><div role="button" id="TUAtoFontArial" tabindex="0" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.EEBmI + '</p><svg id="svgreadableFont"  width="43.96" height="37.562" viewBox="0 0 43.96 37.562"><path  d="M20.633 36.19H15.74L7.317 24.28c-1.333.737-2.1 2.17-2.297 4.296l-.894 7.615H0l.893-7.614c.426-3.573 1.872-5.97 4.34-7.19l-5.148-7.23h4.893l7.062 9.87c.567-.37 1.02-.78 1.36-1.235.34-.452.618-1.098.83-1.935.214-.836.518-3.07.916-6.7h4.127l-.51 4.552c-.256 2.127-.724 3.772-1.405 4.936s-1.787 2.24-3.318 3.232l6.593 9.316zM43.94 30.742c.084.93-.092 2.168-.528 3.717-.395 1.406-.803 2.413-1.225 3.02h-.21c-.142-.62-.726-1.747-1.754-3.38-3.055-4.857-7.046-8.623-11.974-11.298.407 1.534.61 3.287.61 5.258 0 .888.085 1.485.254 1.795.225.423.704.634 1.436.634h.422c1.464 0 2.394.31 2.788.93l-2.09 5.658-.254.042c-.576-.747-1.526-1.12-2.85-1.12h-.443c-1.647 0-2.964.52-3.95 1.562l-.21-.17c.535-.872 1.147-2.266 1.837-4.18.79-2.183 1.168-4.95 1.14-8.3-.04-4.35-.795-8.215-2.26-11.594l.34-.253c1.463 1.62 3.195 3.104 5.194 4.456.943.634 2.97 2.246 6.082 4.837.52-1.323.78-2.556.78-3.696 0-2.266-.54-4.355-1.625-6.27l.38-.274c1.31 1.788 2.613 2.76 3.908 2.914l1.542.19c1.295.154 1.943 1.154 1.943 2.998 0 1.816-.345 3.273-1.035 4.372-.493-.62-1.246-.93-2.26-.93s-1.977.437-2.892 1.31c3.138 2.704 5.44 5.294 6.904 7.772zM22.046.997c-2.646 0-5.044.99-6.892 2.6L11.56 0v8.99h8.988l-3.616-3.616c1.39-1.16 3.157-1.88 5.114-1.88 3.536 0 6.542 2.31 7.59 5.496l2.368-.78C30.616 4.024 26.69.997 22.046.997z"/></svg></div></div><div class="LAsQk"><div role="button" id="TUAspaceLines" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.JKdtK + '</p><span class="RRnya"></span><svg id="svgLineSpace"  width="31" height="25.707" viewBox="-3.75 -0.854 31 25.707"><path  d="M3.055 4.44h3.78L1.543-.855-3.75 4.44H.03v15.12h-3.78l5.292 5.294 5.293-5.293h-3.78V4.44zm6.05-3.025V4.44H27.25V1.414H9.104zm0 21.17H27.25V19.56H9.104v3.025zm0-9.073H27.25v-3.024H9.104v3.024z"/></svg></div><div role="button" id="TUAspaceLetter" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.Lwedz + '</p><span class="RRnya"></span><svg id="svgLettersSpace"  width="28" height="30.146" viewBox="37.595 -3.315 28 30.146"><path  d="M64.91-3.03v5.406c0 .706-.03 1.314-.09 1.826-.06.513-.186 1.052-.376 1.62-.387 1.153-1.207 1.976-2.463 2.465l3.214 5.33H62.78L58.718 6.66l-1.963-2.942c-.344.13-.594.258-.747.387-.818.663-1.227 1.773-1.227 3.33v6.182h-2.142V8.21c0-1.885.278-3.283.838-4.195.224-.37.537-.716.937-1.04.4-.322.88-.578 1.438-.768l-3.2-5.237h2.427l3.82 6.44L61.05 6.75c.44-.26.764-.525.976-.8.21-.276.388-.65.528-1.124.143-.473.213-1.032.213-1.678v-6.18h2.144zM37.758-3.122c1.377-.13 2.99-.193 4.84-.193 1.85 0 3.218.403 4.105 1.207.886.804 1.33 2.166 1.33 4.083v9.95h1.895v1.665h-12.17v-1.665h8.13V1.95c0-1.325-.3-2.23-.895-2.716-.6-.486-1.52-.73-2.77-.73-1.333 0-2.6.05-3.807.144l-.658.05v-1.82zM65.595 21.907l-4.922-4.924v3.694H42.21v2.46h18.463v3.692l4.922-4.923z"/><path  d="M37.595 21.907l4.922 4.923v-3.692H60.98v-2.46H42.517v-3.694l-4.922 4.923z"/></svg></div><div role="button" id="TUAspaceWords" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.pJzWb + '</p><span class="RRnya"></span><svg id="svgwordsSpace"  width="36" height="13.5" viewBox="-6 5.25 36 13.5"><path  d="M25.5 5.25v9h-27v-9H-6v13.5h36V5.25h-4.5z"/></svg></div></div></div></div><div class="vjEnr"></div></div></div></div><div class="khlBU"   id="TUAopenContentOption"><div class="owUce" aria-label="' + andiUA.KNTQg.UAtdr210 + '" role="button" tYlBy="true" tabindex="0"><div class="bnVjM"><img src="' + 
    andiUA.KpAEX + '/images/ContentHelpCategoryImage.svg" alt="" /></div><p>' + andiUA.KNTQg.UyniF + ' </p></div><div id="ratYL" class="IdrLU"><div class="ZDMId"><div class="bkVMl"><div class="AueIG" ktjXB="' + andiUA.KNTQg.UAtdr279 + '"  role="button" aria-label="' + andiUA.KNTQg.kmqYP + '" tabindex="0" tYlBy="false">&#x279c;</div><div class="xFWoP" role="heading" aria-level="3">' + 
    andiUA.KNTQg.AnsQe + '</div><div class="Awzjy" ktjXB="' + andiUA.KNTQg.UAtdr278 + '" role="button" aria-label="' + andiUA.KNTQg.UAtdr277 + '" tabindex="0" tYlBy="false"></div></div><div class="rZZEa"><div class="ltsXQ"></div><div class="joMhk">\t<div class="LAsQk"><div id="TUAFocusAreaBtn" class="QybqI" role="button" tabindex="0" tYlBy="true"><p>' + 
    andiUA.KNTQg.RSzZj + '</p><svg id="svgfocusArea"  width="32" height="26.154" viewBox="-4 -1.086 32 26.154"><path  d="M22.182 4.732H10.545v8.727H22.18V4.73zm2.91-5.818H-1.092c-1.6 0-2.91 1.31-2.91 2.91v20.363c0 1.6 1.31 2.88 2.91 2.88h26.18c1.6 0 2.91-1.28 2.91-2.88V1.823c0-1.6-1.31-2.91-2.91-2.91zm0 23.286H-1.092V1.793h26.18V22.2z"/></svg></div><div id="TUAandihighLightlink" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.dOMiI + 
    '</p><svg id="svgundexlineLinks"  width="25" height="25.646" viewBox="-0.5 -0.564 25 25.646"><path  d="M1.875 5.686c0-2.138 1.737-3.875 3.875-3.875h5V-.563h-5c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25h5V9.56h-5c-2.138 0-3.875-1.737-3.875-3.874zM7 6.936h10v-2.5H7v2.5zm11.25-7.5h-5V1.81h5c2.138 0 3.875 1.738 3.875 3.876 0 2.137-1.737 3.875-3.875 3.875h-5v2.376h5c3.45 0 6.25-2.8 6.25-6.25s-2.8-6.25-6.25-6.25zM-.5 20.18h25v4.9h-25z"/></svg></div><div id="TUArasheTevot" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.kbEFT + '</p><svg id="svgacronyms"  width="24" height="17.143" viewBox="0 3.429 24 17.143"><path  d="M1.714 20.57h5.143l3.43-6.856V3.43H0v10.284h5.143l-3.43 6.857zm13.715 0h5.142L24 13.715V3.43H13.714v10.284h5.144l-3.43 6.857z"/></svg></div><div style="display:none;" id="TUAreviledHiddingInfo" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.qofUu + '</p><svg id="svgdiscoverInfomation"  width="40" height="20.307" viewBox="-178.5 -99.545 40 20.307"><path  d="M-140.853-96.493h-14.595l-3.052-3.052-3.052 3.052h-14.595c-1.3 0-2.353 1.053-2.353 2.353v12.55c0 1.298 1.054 2.352 2.353 2.352h35.294c1.3 0 2.353-1.054 2.353-2.353v-12.55c0-1.3-1.054-2.353-2.353-2.353z"/></svg></div></div><div class="LAsQk"><div role="button" style="display:none;" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.cJHZF + '</p><svg id="svgnikod"   width="13" height="26.769" viewBox="5.694 -1.351 13 26.769"><path  d="M18.398-1.35v5.597c0 .73-.03 1.36-.092 1.89-.062.53-.19 1.088-.39 1.677-.4 1.193-1.25 2.044-2.55 2.55l3.327 5.52h-2.498l-4.21-7.203-2.028-3.043c-.357.134-.616.267-.775.4-.847.687-1.27 1.836-1.27 3.448v6.4H5.695v-5.6c0-1.95.29-3.396.868-4.34.232-.383.555-.742.97-1.076.413-.336.91-.6 1.49-.796L5.707-1.35h2.51l3.955 6.665 2.233 3.46c.453-.268.79-.542 1.008-.828.216-.285.4-.672.548-1.163.148-.49.22-1.07.22-1.738v-6.398h2.216zM16.312 20.73h-3.158v4.688H10.58v-4.69H7.44v-2.716h8.87v2.717z"/></svg></div><div role="button" tabindex="0" tYlBy="true" id="TUAwikipedia" class="QybqI"><p>' + 
    andiUA.KNTQg.qpAKL + '</p><svg id="svgexprasstions"  width="26" height="27.751" viewBox="-1 -0.933 26 27.751"><path  d="M12 10.93C8.59 7.754 4.026 5.803-1 5.803V21.69c5.026 0 9.59 1.952 13 5.128 3.41-3.163 7.973-5.128 13-5.128V5.802c-5.027 0-9.59 1.95-13 5.13z"/><path  d="M12.673 8.48H11.33V7.134h1.343V8.48zm1.393-5.21l-.606.616c-.483.493-.787.896-.787 1.904H11.33v-.338c0-.737.3-1.407.786-1.898l.833-.85c.248-.24.394-.58.394-.947 0-.74-.604-1.343-1.344-1.343-.74 0-1.343.603-1.343 1.343H9.312c0-1.485 1.202-2.69 2.688-2.69s2.688 1.205 2.688 2.69c0 .592-.24 1.128-.622 1.513z"/></svg></div><div role="button" tabindex="0" id="TUAprint" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.yGYOd + '</p><svg  id="svgprint"  width="29" height="26.1" viewBox="-2.5 -1.05 29 26.1"><path  d="M22.15 6.2H1.85c-2.407 0-4.35 1.942-4.35 4.35v8.7h5.8v5.8h17.4v-5.8h5.8v-8.7c0-2.407-1.942-4.35-4.35-4.35zM17.8 22.15H6.2V14.9h11.6v7.25zM22.15 12c-.798 0-1.45-.653-1.45-1.45 0-.797.652-1.45 1.45-1.45.797 0 1.45.653 1.45 1.45 0 .797-.653 1.45-1.45 1.45zM20.7-1.05H3.3v5.8h17.4v-5.8z"/><g ><circle cx="12.106" cy="16.405" r=".704"/><circle cx="14.24" cy="16.405" r=".704"/><circle cx="12.106" cy="18.566" r=".704"/><path d="M12.81 20.7c0-.388-.314-.705-.703-.705-.388 0-.704.317-.704.706 0 .387.316.703.704.703.388 0 .703-.316.703-.702z"/><circle cx="9.769" cy="18.566" r=".704"/><path d="M10.473 20.7c0-.388-.315-.705-.704-.705-.39 0-.706.317-.706.706 0 .387.316.703.705.703.387 0 .703-.316.703-.702z"/></g></svg></div><div role="button" style="display:none;" tabindex="0" id="TUAstopGif" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.UAtdr2102 + '</p></div><div role="button" tabindex="0" id="TUAstopSliders" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.UAtdr2104 + '</p><svg id="TUAstopSlidersSvg"  width="29" height="29" viewBox="0 0 30 30"><defs><style>.cls-1{fill:none;}</style></defs><path d="M15,.33A14.64,14.64,0,0,0,1.4,9.8,14.51,14.51,0,0,0,22.26,27.41a14.66,14.66,0,0,0,7-15.32A14.66,14.66,0,0,0,15,.33Zm0,27A12.61,12.61,0,0,1,3.26,19.08a12.49,12.49,0,0,1,18.11-15,12.61,12.61,0,0,1,5.88,13.19A12.61,12.61,0,0,1,15,27.33Z"/><path d="M12.34,22.38a1,1,0,0,0,1-1V8.09a1,1,0,0,0-2,0V21.36a1,1,0,0,0,1,1Z"/><path d="M17.68,22.38a1,1,0,0,0,1-1V8.09a1,1,0,0,0-2,0V21.36a1,1,0,0,0,1,1Z"/></svg></div></div><div class="LAsQk">\t<div  role="button" id="TUAreadsAloud" style="display:none;" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.bbb19 + '</p><svg id="svgTUAreadsAloud" width="32.000000pt" height="25.000000pt" viewBox="0 0 10.000000 32.000000" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path d="M12.031 1.063c-.32.003-.676.144-1 .468L5.312 8H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h4.313L11 24.438c1 1 2 .488 2-.875V2.28c0-.793-.434-1.222-.969-1.219zm7.25 2a.999.999 0 0 0-.218 1.906A8.961 8.961 0 0 1 24 13c0 3.523-2 6.55-4.938 8.031a1 1 0 1 0 .875 1.781C23.527 21 26 17.29 26 13c0-4.29-2.473-8-6.063-9.813a.979.979 0 0 0-.562-.124h-.094zm-2.375 3.874a.997.997 0 0 0-.902.786.997.997 0 0 0 .496 1.09C18.043 9.77 19 11.288 19 13c0 1.723-.973 3.262-2.531 4.219-.332.176-.54.523-.535.898a.996.996 0 0 0 .558.883.999.999 0 0 0 1.04-.094C19.601 17.636 21 15.476 21 13c0-2.46-1.387-4.633-3.438-5.906A1.02 1.02 0 0 0 17 6.937h-.094z"/></svg></div><div  role="button" id="TUAshowMainContent" style="display:none;" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.bbb26 + '</p><svg width="35" viewBox="-90 -10 60 37" xmlns="http://www.w3.org/2000/svg" height="37.525"><path fill="#FFF" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M-89.178.738h58.968v34.383h-58.968z"/><path fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M-56.71 29.43a1 1 0 0 0 1 1h19.766a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1H-55.71a1 1 0 0 0-1 1v10z"/><path fill="#B2B2B2" d="M-84.443 13.264a1 1 0 0 0 1 1h47.499a1 1 0 0 0 1-1V6.43a1 1 0 0 0-1-1h-47.499a1 1 0 0 0-1 1v6.834zM-84.443 20.098a1 1 0 0 0 1 1h20.067a1 1 0 0 0 1-1v-.668a1 1 0 0 0-1-1h-20.067a1 1 0 0 0-1 1v.668zM-84.443 24.764a1 1 0 0 0 1 1h20.067a1 1 0 0 0 1-1v-.668a1 1 0 0 0-1-1h-20.067a1 1 0 0 0-1 1v.668zM-84.443 29.43a1 1 0 0 0 1 1h20.067a1 1 0 0 0 1-1v-.668a1 1 0 0 0-1-1h-20.067a1 1 0 0 0-1 1v.668z"/></svg></div><div id="UAeasyRead" style="display:none;" class="QybqI" role="button" tabindex="0" tYlBy="true"><p>' + 
    andiUA.KNTQg.ufEJt + '</p><svg id="svgeayeRead"  width="36" height="27.818" viewBox="-6 -1.409 36 27.818"><g ><path d="M13.637 11.682H25.09v2.455H13.638zM13.637 7.59H25.09v2.456H13.638zM13.637 15.772H25.09v2.455H13.638z"/><path d="M26.728-1.41H-2.727C-4.527-1.41-6 .064-6 1.865v21.273c0 1.8 1.473 3.272 3.273 3.272h29.455c1.8 0 3.272-1.475 3.272-3.273V1.864c0-1.8-1.474-3.273-3.272-3.273zM2.202 5.758H3.55V7.78H2.202V5.757zM-2.855 8.37l.953-.954 1.43 1.43-.954.955-1.43-1.43zm9.777 5.48L4.9 15.87v3.37H.853v-3.37L-1.17 13.85v-3.372h8.093v3.37zm.253-4.047L6.22 8.85l1.433-1.43.953.953-1.43 1.43zm19.553 13.334H12V1.864h14.728v21.273z"/></g></svg></div>\t</div></div></div><div class="vjEnr"></div>\t</div></div></div><div class="khlBU" id="openColorOption"><div class="owUce"  aria-label="' + 
    andiUA.KNTQg.UAtdr211 + '" role="button" tYlBy="true" tabindex="0"><div class="bnVjM"><img alt="" src="' + andiUA.KpAEX + '/images/ColorAdjustmentCategoryImage.svg" /></div><p>' + andiUA.KNTQg.YoKFM + '</p></div><div id="vbCoe" class="IdrLU"><div class="ZDMId"><div class="bkVMl"><div class="AueIG" ktjXB="' + andiUA.KNTQg.UAtdr279 + 
    '"  role="button" aria-label="' + andiUA.KNTQg.kmqYP + '" tabindex="0" tYlBy="false">&#x279c;</div><div class="xFWoP" role="heading" aria-level="3">' + andiUA.KNTQg.GmhRR + '</div><div class="Awzjy" ktjXB="' + andiUA.KNTQg.UAtdr278 + '" role="button" aria-label="' + andiUA.KNTQg.UAtdr277 + '" tabindex="0" tYlBy="false"></div></div><div class="rZZEa"><div class="ltsXQ"></div><div class="joMhk"><div class="LAsQk"><div role="button" id="mzWNy" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.bgpvh + '</p><svg id="svgDarkBackground"  width="31.5" height="31.5" viewBox="-3.75 -3.75 31.5 31.5"><path  d="M23.14 7.39V.86h-6.53L12-3.75 7.39.86H.86v6.53L-3.75 12l4.61 4.61v6.53h6.53L12 27.75l4.61-4.61h6.53v-6.53L27.75 12l-4.61-4.61zM12 20.356c-4.61 0-8.355-3.745-8.355-8.355S7.39 3.645 12 3.645c4.61 0 8.355 3.746 8.355 8.355 0 4.61-3.745 8.355-8.355 8.355zM12 6.43c-3.078 0-5.57 2.493-5.57 5.57 0 3.077 2.493 5.57 5.57 5.57 3.077 0 5.57-2.493 5.57-5.57 0-3.078-2.493-5.57-5.57-5.57z"/></svg></div><div role="button" id="TUAwhiteContrast" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.wbNqU + '</p><svg id="svgLightBackground"  width="31.5" height="31.5" viewBox="-3.75 -3.75 31.5 31.5"><path  d="M23.14 16.61L27.75 12l-4.61-4.61V.86h-6.53L12-3.75 7.39.86H.86v6.53L-3.75 12l4.61 4.61v6.53h6.53L12 27.75l4.61-4.61h6.53v-6.53zM12 20.355c-4.61 0-8.355-3.745-8.355-8.355S7.39 3.645 12 3.645c4.61 0 8.355 3.746 8.355 8.355 0 4.61-3.745 8.355-8.355 8.355z"/></svg></div><div role="button" id="gNkmS" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.TSkMt + '</p><svg id="svgblackAndWhite_Color"  width="28" height="28" viewBox="-2 -2 28 28"><path  d="M22.89-2H1.11C-.6-2-2-.6-2 1.11V22.89C-2 24.6-.6 26 1.11 26H22.89C24.6 26 26 24.6 26 22.89V1.11C26-.6 24.6-2 22.89-2zm0 24.89L12 10.443v12.444H1.11L12 10.444V1.11h10.89v21.78z"/></svg></div></div><div class="LAsQk"><div role="button" id="zmpAd" tabindex="0" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.PQCxw + 
    '</p><svg id="svgColorChange"  width="34" height="34" viewBox="-5 -5 34 34"><path  d="M18.46 7.665L5.796-5 3.797-3.002 7.17.37-.128 7.666c-.835.836-.835 2.182 0 3.003l7.792 7.79c.41.41.963.623 1.5.623.54 0 1.092-.213 1.503-.622l7.792-7.79c.837-.823.837-2.17 0-3.005zM2.38 9.167L9.168 2.38l6.786 6.787H2.38zm19.537 2.125s-2.834 3.074-2.834 4.958c0 1.558 1.276 2.833 2.834 2.833s2.833-1.275 2.833-2.833c0-1.885-2.833-4.958-2.833-4.958z"/><path  id="svgColorChangeUnderline" fill-opacity=".36" d="M-5 23.333h34V29H-5v-5.667z"/></svg></div><div role="button" id="BjgnQ" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.chdoy + '</p><svg id="svgtitleColorChange"  width="32" height="28.278" viewBox="-4 -0.743 32 28.278"><path id="svgtitleColorChangeUnderline" fill-opacity=".36" d="M-4 22.2h32v5.335H-4V22.2z"/><path d="M20.276-.743v6.82c0 .6-.037 1.118-.11 1.557-.072.44-.218.915-.44 1.426-.434 1.062-1.4 1.873-2.895 2.433 1.845 2.917 3.225 5.088 4.142 6.516H14.7L9.62 9.552c-.185.29-.276.82-.276 1.593v6.864H3.74v-6.82c0-.58.038-1.096.115-1.55.077-.453.23-.935.463-1.447C4.782 7.13 5.756 6.32 7.244 5.76 6.017 3.837 4.637 1.67 3.102-.744h6.256L13.094 5.6l1.33 2.085c.157-.338.232-.86.232-1.564V-.742h5.62z"/></svg></div><div role="button" id="NtzHe" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.rjGEr + '</p><svg id="svgtextColorChange"  width="39" height="31.456" viewBox="-7.5 -1.407 39 31.456"><path id="svgtextColorChangeUnderline" fill-opacity=".36" d="M-7.5 23.55h39v6.5h-39v-6.5z"/><path  d="M20.392-1.407v6.565c0 .857-.036 1.596-.11 2.217-.072.622-.223 1.277-.453 1.966-.47 1.4-1.47 2.398-2.994 2.994l3.902 6.47h-2.93L12.87 10.36l-2.38-3.572c-.418.156-.722.313-.91.47-.992.804-1.488 2.152-1.488 4.042v7.506h-2.6V12.24c0-2.286.338-3.984 1.017-5.09.27-.45.65-.87 1.135-1.263.485-.392 1.068-.702 1.747-.932L5.507-1.407h2.945l4.637 7.82 2.616 4.057c.533-.312.927-.636 1.184-.97.256-.335.47-.79.642-1.364.173-.575.26-1.254.26-2.037v-7.506h2.6z"/></svg></div></div></div></div><div class="vjEnr"></div></div></div></div><div class="khlBU" id="TUAopenNavigationOption"><div class="owUce"  aria-label="' + 
    andiUA.KNTQg.UAtdr212 + '" role="button" tYlBy="true" tabindex="0"><div class="bnVjM"><img alt="" src="' + andiUA.KpAEX + '/images/NavigationDevicesCategoryImage.svg" /></div><p>' + andiUA.KNTQg.YHPHR + '</p></div><div id="oGNab" class="IdrLU"><div class="ZDMId"><div class="bkVMl"><div class="AueIG" ktjXB="' + andiUA.KNTQg.UAtdr279 + 
    '"  role="button" aria-label="' + andiUA.KNTQg.kmqYP + '" tabindex="0" tYlBy="false">&#x279c;</div><div class="xFWoP" role="heading" aria-level="3">' + andiUA.KNTQg.xSuoI + '</div><div class="Awzjy" ktjXB="' + andiUA.KNTQg.UAtdr278 + '" role="button" aria-label="' + andiUA.KNTQg.UAtdr277 + '" tabindex="0" tYlBy="false"></div></div><div class="rZZEa"><div class="ltsXQ"></div><div class="joMhk"><div class="LAsQk"><div style="display:none;" id="gkzUYBtn" class="QybqI" role="button" tabindex="0" tYlBy="true"><p>' + 
    andiUA.KNTQg.qvXMj + '</p>\x3c!--<img alt="" src="' + andiUA.KpAEX + '/images/rightClickMenu.svg" />--\x3e<svg id="svgrightClickMenu"  width="25" height="34.266" viewBox="6.572 6.938 25 34.266"><path  d="M6.572 28.703c0 6.906 5.594 12.5 12.5 12.5s12.5-5.594 12.5-12.5v-6.25h-25v6.25zM17.51 6.938c-6.172.766-10.938 6.015-10.938 12.39H17.51V6.938z"/><g ><path d="M27.058 9.728c-1.79-1.486-3.994-2.49-6.423-2.79v2.79h6.423zM20.635 14.528h9.973c-.418-1.004-.96-1.94-1.613-2.792h-8.36v2.792zM20.635 16.537v2.79h10.938c0-.96-.12-1.89-.326-2.79H20.635z"/></g></svg></div><div role="button" id="advancedSupportForScreenReader" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.WZIws + '</p><svg id="svgadvancedSupportForScreenReader"  width="27.5" height="27.5" viewBox="10.25 10.25 27.5 27.5"><path  d="M35 10.25H13c-1.513 0-2.736 1.237-2.736 2.75l-.014 24.75 5.5-5.5H35c1.513 0 2.75-1.237 2.75-2.75V13c0-1.513-1.237-2.75-2.75-2.75zm-16.5 16.5h-2.75V24h2.75v2.75zm0-4.125h-2.75v-2.75h2.75v2.75zm0-4.125h-2.75v-2.75h2.75v2.75zm9.625 8.25H21.25V24h6.875v2.75zm4.125-4.125h-11v-2.75h11v2.75zm0-4.125h-11v-2.75h11v2.75z"/></svg></div><div role="button" id="EXRcw" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.VGxNH + '</p><svg id="svgblackMouseCrouser"  width="23" height="32.008" viewBox="0 0 23 32.008"><path  d="M9.844 32.008l-3.432-7.03L0 31.557V0l23 21.742-9.09.122 3.253 6.563-7.32 3.58z"/></svg></div><div role="button" id="TUAwhiteMouse" tabindex="0" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.dEyrG + '</p><svg id="svgwhiteMouseCrouser"  width="24" height="33.398" viewBox="0 0 24 33.398"><path  d="M10.277 33.398L6.69 26.062 0 32.93V0l24 22.688-9.48.13 3.387 6.843-7.63 3.738zm-3.07-10.464l3.902 8.027 4.347-2.132-3.867-7.793 7.898-.105L1.816 4.22v24.233l5.39-5.52z"/></svg></div></div><div class="LAsQk"><div id="gcFQn" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.LzWrs + '</p><svg id="svgvirtualKeyboard"  width="37.5" height="26.25" viewBox="5.25 10.875 37.5 26.25"><path  d="M39 10.875H9c-2.062 0-3.73 1.688-3.73 3.75l-.02 18.75c0 2.062 1.688 3.75 3.75 3.75h30c2.062 0 3.75-1.688 3.75-3.75v-18.75c0-2.063-1.688-3.75-3.75-3.75zM22.125 16.5h3.75v3.75h-3.75V16.5zm0 5.625h3.75v3.75h-3.75v-3.75zM16.5 16.5h3.75v3.75H16.5V16.5zm0 5.625h3.75v3.75H16.5v-3.75zm-1.875 3.75h-3.75v-3.75h3.75v3.75zm0-5.625h-3.75V16.5h3.75v3.75zM31.5 33.375h-15v-3.75h15v3.75zm0-7.5h-3.75v-3.75h3.75v3.75zm0-5.625h-3.75V16.5h3.75v3.75zm5.625 5.625h-3.75v-3.75h3.75v3.75zm0-5.625h-3.75V16.5h3.75v3.75z"/></svg></div><div id="JhgsJ" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.cQcQh + '</p><svg id="svgboldFocus"  width="30" height="30" viewBox="-3 -3 30 30"><path  d="M.333-3C-1.5-3-3-1.5-3 .333v23.333C-3 25.5-1.5 27 .333 27h23.333C25.5 27 27 25.5 27 23.667V.333C27-1.5 25.5-3 23.667-3H.333zm3.334 5.833h16.667v17.5H3.667v-17.5zM7 6.583V17h10V6.583H7z"/></svg></div><div id="TUAnavigateWithLetters" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + andiUA.KNTQg.ozpFc + 
    '</p><svg id="svgletterNavigation"  width="38" height="14.003" viewBox="5 10.369 38 14.003"><path  d="M39.2 10.37H8.8c-2.09 0-3.78 1.708-3.78 3.8L5 24.37h38V14.168c0-2.09-1.71-3.8-3.8-3.8zm-24.7 9.5h-3.8v-3.8h3.8v3.8zm5.7 0h-3.8v-3.8h3.8v3.8zm5.7 0h-3.8v-3.8h3.8v3.8zm5.7 0h-3.8v-3.8h3.8v3.8zm5.7 0h-3.8v-3.8h3.8v3.8z"/></svg></div></div><div class="LAsQk">\t<div  role="button" id="giUwZ" style="display:none;" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.GfKJr + '</p><svg id="svgVoiceSupport"  width="21.5" height="29.178" viewBox="13.25 10.411 21.5 29.178"><path  d="M24 28.84c2.55 0 4.592-2.06 4.592-4.608l.016-9.214c0-2.55-2.058-4.607-4.607-4.607-2.548 0-4.606 2.06-4.606 4.608v9.214c0 2.55 2.057 4.607 4.606 4.607zm8.14-4.608c0 4.607-3.9 7.833-8.14 7.833s-8.14-3.226-8.14-7.833h-2.61c0 5.252 4.177 9.568 9.214 10.32v5.037h3.072V34.55c5.037-.736 9.214-5.067 9.214-10.32h-2.61z"/></svg></div><div style="display:none;" role="button" tabindex="0" tYlBy="true" class="QybqI"><p>' + 
    andiUA.KNTQg.AYPir + '</p><svg id="svgsignsLanguage"  width="24.75" height="28.573" viewBox="11.625 9.177 24.75 28.573"><path  d="M30.875 35c-.398 0-.77-.083-1.045-.206-.976-.51-1.663-1.21-2.35-3.273-.703-2.143-2.022-3.147-3.288-4.124-1.086-.838-2.213-1.704-3.19-3.478-.73-1.32-1.127-2.764-1.127-4.042 0-3.85 3.025-6.875 6.875-6.875s6.875 3.026 6.875 6.876h2.75c0-5.404-4.222-9.625-9.625-9.625-5.404 0-9.625 4.222-9.625 9.626 0 1.732.522 3.644 1.47 5.362 1.252 2.27 2.724 3.41 3.92 4.33 1.113.854 1.91 1.473 2.35 2.82.826 2.502 1.885 3.904 3.755 4.88.7.317 1.47.482 2.255.482 3.04 0 5.5-2.46 5.5-5.5h-2.75c0 1.513-1.237 2.75-2.75 2.75zm-12.87-23.87l-1.953-1.953c-2.736 2.736-4.427 6.518-4.427 10.698s1.69 7.96 4.427 10.698l1.94-1.94c-2.23-2.24-3.617-5.334-3.617-8.758s1.39-6.518 3.63-8.745zm5.307 8.745c0 1.897 1.54 3.438 3.438 3.438s3.438-1.54 3.438-3.438-1.54-3.438-3.438-3.438-3.438 1.54-3.438 3.438z"/></svg></div><div role="button" id="IBoog" style="display:none;" tabindex="0" tYlBy="true" class="QybqI "><p>' + 
    andiUA.KNTQg.IBoog + '</p><svg height="35" width="38" viewBox="0 -10 50 50"><path clip-rule="evenodd" d="M43 41H5a4 4 0 0 1-4-4V15a4 4 0 0 1 4-4h1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2s1.125-.125 2-1l2-2s.781-1 2-1h8c1.312 0 2 1 2 1l2 2c.875.875 2 1 2 1h9a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4zm2-26a2 2 0 0 0-2-2l-9.221-.013c-.305-.033-1.889-.269-3.193-1.573l-2.13-2.13-.104-.151A.604.604 0 0 0 28 9h-8c-.153 0-.375.178-.424.231l-.075.096-2.087 2.086c-1.305 1.305-2.889 1.54-3.193 1.573l-4.151.006c-.024.002-.047.008-.07.008H8c-.014 0-.026-.004-.04-.004L5 13a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h38a2 2 0 0 0 2-2V15zM24 37c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11zm0-20c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 14c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zm0-8a3.001 3.001 0 0 0 0 6 3 3 0 1 0 0-6zm-14-4H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z" fill-rule="evenodd"/></svg></div></div></div></div><div class="vjEnr"></div></div></div></div></div></div></div></div><div id="FbKLK"><a href="' + 
    andiUA.url + '" target="_blank">' + andiUA.KNTQg.oxUmA + "</a></div>");
    andizxc("#jilVt *:not(.andimenucode)").each(function(i) {
      (this).taddClass("andimenucode");
    });
    var UAOOkJn = 0;
    var checkImgMenuImg = setInterval(function() {
      UAOOkJn++;
      andiUA.restorImgs();
      if (UAOOkJn == 10) {
        clearInterval(checkImgMenuImg);
      }
    }, 800);
  };
  andiUA.XDRlX = function() {
    (function() {
      var ANDIcurrLang = localStorage.getItem("XOVJB");
      if (ANDIcurrLang != "null" && ANDIcurrLang != null && ANDIcurrLang != "he" && ANDIcurrLang != "ar" || UA1("html").getAttr("vFaKz") != "ar" && UA1("html").getAttr("vFaKz") != "he") {
        UA1("#YlCpH").pCFOS('<path d="M-6.78 26.274c0 1.104.896 2 2 2h35.925c1.104 0 2-.896 2-2V.877c0-1.104-.896-2-2-2H-4.78c-1.104 0-2 .896-2 2v25.397z"/><path fill="#FFF" d="M7.522 20.623h-5.91L.285 24.306h-1.918L3.754 10.2h1.628l5.397 14.106H8.87l-1.348-3.683zm-5.348-1.53H6.97l-2.403-6.598-2.393 6.598zM24.108 19.307h-8.024l-1.8 5H11.68L18.99 5.154h2.21l7.326 19.15h-2.592l-1.828-4.998zm-7.26-2.078h6.512L20.097 8.27l-3.25 8.957z"/>');
        UA1("#svgreadableFont").pCFOS('<path d="M23.186.96c2.55 0 4.858.954 6.638 2.503L33.286 0v8.658H24.63l3.482-3.482c-1.337-1.118-3.04-1.81-4.926-1.81-3.405 0-6.3 2.224-7.31 5.292l-2.28-.752C14.932 3.876 18.712.96 23.185.96zM41.106 29.772H31.11L28.866 36H25.62l9.11-23.857h2.754L46.612 36h-3.228l-2.278-6.228zm-9.045-2.587h8.113L36.11 16.027l-4.05 11.158zM22.644 36h-6.22l-2.706-7.343H5.525L2.86 36H0l6.956-18.53c.154-.482.23-.9.23-1.258 0-1.04-.617-1.56-1.853-1.56h-.116c-.413-.075-.618-.317-.618-.722 0-.457.23-.697.694-.725l8.424-1.445L22.644 36zm-9.738-9.55L9.66 17.66l-3.285 8.79h6.53z"/>');
        UA1("#svgLettersSpace").pCFOS('<path d="M59.372 17.704l-2.884-2.885v2.163H45.67v1.44H56.49v2.164l2.884-2.883z"/><path d="M42.968 17.704l2.884 2.884v-2.163H56.67v-1.44H45.85V14.82l-2.884 2.884zM48.772 10.233h-4.03l-.904 2.51h-1.31l3.674-9.618h1.11l3.68 9.618H49.69l-.918-2.51zM45.126 9.19h3.27l-1.638-4.5-1.632 4.5zM53.494 12.743V3.125h3.145c.492 0 .933.05 1.32.148s.717.253.987.462.478.475.62.796c.144.323.216.708.216 1.157s-.128.847-.384 1.192-.604.613-1.044.802c.27.075.507.185.717.33.21.146.385.318.528.516.144.198.253.42.328.667.074.247.112.504.112.773 0 .45-.076.847-.23 1.192-.15.346-.365.636-.643.872-.277.235-.612.413-1.005.53-.392.12-.827.18-1.308.18h-3.36zm1.27-5.515h1.915c.27 0 .52-.035.745-.106.225-.07.417-.17.578-.304.16-.132.285-.294.373-.485.088-.192.132-.41.132-.65 0-.53-.154-.914-.462-1.154-.31-.24-.777-.36-1.407-.36h-1.877v3.058zm0 1.017v3.46h2.093c.304 0 .573-.04.81-.12.235-.083.435-.197.598-.345.163-.147.287-.328.373-.542s.13-.453.13-.717-.036-.503-.106-.72c-.07-.214-.182-.397-.334-.547-.15-.15-.345-.266-.578-.347-.233-.08-.51-.122-.832-.122h-2.155z"/>');
        UA1("#svgtextColorChange").addAttr({"viewBox":"-5 -5 34 34", "width":"34", "height":"34"});
        UA1("#svgtextColorChange").pCFOS('<path fill="none" d="M0 0h24v24H0V0z"/><path id="svgtextColorChangeUnderline" fill-opacity=".36" d="M-5 23.333h34V29H-5v-5.667z"/><text style="font-size: 21px;"  transform="translate(5.093 16.856)" font-family="Roboto-Bold" font-size="20.427">A</text>');
        UA1("#svgtitleColorChange").addAttr({"viewBox":"-5 -5 34 34", "width":"34", "height":"34"});
        UA1("#svgtitleColorChange").pCFOS('<path  fill="none" d="M0 0h24v24H0V0z"/><path id="svgtitleColorChangeUnderline" fill-opacity=".36" d="M-5 23.333h34V29H-5v-5.667z"/><text style="font-weight: bold;font-size: 21px;" transform="translate(5.093 16.856)" font-family="Roboto-Bold" font-size="20.427">A</text>');
        UA(".AueIG ,.andiMenuLangMiddleBarBackBtn").forEach(function(VnIxP) {
          VnIxP.pCFOS('<img class="andimenucode" style="margin: -10px 0 0px -5px;" src="' + andiUA.KpAEX + '/images/backArrow.png" alt=""/>');
        });
      }
      UA("#jilVt #VbcHu [headerBarMarkSelected]")[0].style.backgroundColor = "#FF4081";
      UA1('#jilVt #VbcHu [role="button"]').addAttr({"andiactivetab":"true"});
      if (document.getElementById("fvLXm") !== null) {
        document.getElementById("fvLXm").addCss({"display":"block"});
      }
      UA(".khlBU, #FbKLK").forEach(function(VnIxP) {
        VnIxP.addCss({"opacity":"1"});
      });
      if (window.innerWidth <= 640) {
        UA1("#fjaun").addCss({"display":"none"});
      }
      if (localStorage.getItem("firsttimetips") == "true") {
        UA("[andifirsttime]").forEach(function(VnIxP, i) {
          VnIxP.tremoveAttr("andifirsttime");
        });
      }
      if (localStorage.getItem("SQoLG") == "true") {
        UA1("#SQoLG").addCss({"display":"none"});
      } else {
        UA1("#BVGhv").addAttr({"tabindex":"0"});
        UA1("#BVGhv").focus();
      }
      UA("[data-link]").forEach(function(VnIxP, i) {
        VnIxP.addAttr({"tabindex":"0", "role":"link"});
      });
    })();
  };
  andiUA.andiGetUserGuide = function() {
if(!UA1('#AtUwC')){
    var iArRP = andiUA.KNTQg, NteyS = andiUA.EglES;
	var styleCssRTL = "<style>#menuMessageAlert h4{text-align:right  !important;padding: 5px 0 !important;}#menuMessageAlert h3{text-align:right  !important;padding: 5px 0 !important;}</style>";
	var styleCssLTR = "<style>#menuMessageAlert h4{text-align:left  !important;padding: 5px 0 !important;}#menuMessageAlert h3{text-align:left  !important;padding: 5px 0 !important;}</style>";
	
	
	if(localStorage.getItem('XOVJB') == 'ru' || localStorage.getItem('XOVJB') == 'en'){
		var styleCss = styleCssLTR;
	} else if(localStorage.getItem('XOVJB') == 'he' || localStorage.getItem('XOVJB') == 'ar'){
		var styleCss = styleCssRTL;
	} else {
		if (UA1("html").getAttribute("DOwbI") == "rtl" || UA1("html").getAttribute("lang").indexOf('he') > -1) {
			var styleCss = styleCssLTR;
		} else {
			var styleCss = styleCssRTL;
		}
	}
	
	
	
    var CxhBEText = '<div class="yEVOM" id="jUbTi" role="article"><div id="mLKZW"><img src="' + NteyS.lmJQv + '" alt="' + iArRP.gDYFA + '"></div><header id="AtUwC"><h1>' + iArRP.gNSnA + '</h1></header><div id="mHyPV">';
    CxhBEText += andiUA.TUAsettingFn.reoDJ.lLqCb;
    CxhBEText += "</div></div>";
    if (andiUA.TUAsettingFn.reoDJ.LinkToContactUs != "") {
      CxhBEText = CxhBEText.replace("\u05d0\u05dc \u05ea\u05d4\u05e1\u05e1\u05d5 \u05dc\u05d3\u05d5\u05d5\u05d7 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d8\u05d5\u05e4\u05e1 \u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8", '\u05d0\u05dc \u05ea\u05d4\u05e1\u05e1\u05d5 \u05dc\u05d3\u05d5\u05d5\u05d7 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea <a style="color:#000 important;" href="' + andiUA.TUAsettingFn.reoDJ.LinkToContactUs + '">\u05d8\u05d5\u05e4\u05e1 \u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8</a>');
    }
    if (andiUA.TUAsettingFn.reoDJ.CustomerEmail != "") {
      CxhBEText = CxhBEText.replace("<b>\u05d0\u05e0\u05d7\u05e0\u05d5 \u05e0\u05d8\u05e4\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05da \u05d1\u05d4\u05e7\u05d3\u05dd \u05e2\u05dd \u05e4\u05e8\u05d8\u05d9\u05dd \u05e2\u05dc \u05d8\u05d9\u05e4\u05d5\u05dc\u05d4.</b>", "<b>\u05d0\u05e0\u05d7\u05e0\u05d5 \u05e0\u05d8\u05e4\u05dc \u05d1\u05d1\u05e2\u05d9\u05d4 \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05da \u05d1\u05d4\u05e7\u05d3\u05dd \u05e2\u05dd \u05e4\u05e8\u05d8\u05d9\u05dd \u05e2\u05dc \u05d8\u05d9\u05e4\u05d5\u05dc\u05d4.<br/>\u05de\u05d9\u05d9\u05dc \u05dc\u05d9\u05e6\u05d9\u05e8\u05ea \u05e7\u05e9\u05e8 \u05d1\u05e0\u05d5\u05e9\u05d0\u05d9 \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea: " + 
      andiUA.TUAsettingFn.reoDJ.CustomerEmail + " </b>");
    }
    if (andiUA.TUAsettingFn.reoDJ.LinkToContactUs != "") {
      CxhBEText = CxhBEText.replace("report via the contact form.", ' <a style="color:#000 important;" href="' + andiUA.TUAsettingFn.reoDJ.LinkToContactUs + '">report via the contact form.</a>');
    }
    if (andiUA.TUAsettingFn.reoDJ.CustomerEmail != "") {
      CxhBEText = CxhBEText.replace('<b> We"ll take care of the problem and get back to you with details on its handling. </b>', '<b> We"ll take care of the problem and get back to you with details on its handling.<br/>Contact us for accessibility issues: ' + andiUA.TUAsettingFn.reoDJ.CustomerEmail + " </b>");
    }
    CxhBEText = CxhBEText.replace("<h3>\u05d4\u05d3\u05dc\u05e7\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05d1\u05e7\u05dc\u05d9\u05e7 \u05d9\u05de\u05e0\u05d9 \u05d1\u05e2\u05db\u05d1\u05e8 </h3><p>\u05d4\u05e4\u05e2\u05dc\u05ea \u05db\u05e4\u05ea\u05d5\u05e8 \u05d6\u05d4,  \u05de\u05e9\u05e0\u05d4 \u05d0\u05ea \u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d4\u05db\u05e4\u05ea\u05d5\u05e8 \u05d4\u05d9\u05de\u05e0\u05d9 \u05d1\u05e2\u05db\u05d1\u05e8, \u05db\u05da \u05e9\u05dc\u05d7\u05d9\u05e6\u05d4 \u05e2\u05dc\u05d9\u05d5 \u05d1\u05db\u05dc \u05de\u05e7\u05d5\u05dd \u05d1\u05d0\u05ea\u05e8 \u05ea\u05e4\u05e2\u05d9\u05dc \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05de\u05e7\u05d5\u05e6\u05e8 \u05e9\u05dc \u05d4\u05e4\u05e2\u05d5\u05dc\u05d5\u05ea \u05d4\u05de\u05e8\u05db\u05d6\u05d9\u05d5\u05ea. \u05e0\u05d9\u05ea\u05df \u05dc\u05d1\u05d8\u05dc \u05e4\u05d5\u05e0\u05e7\u05e6\u05d9\u05d4 \u05d6\u05d5 \u05d1\u05e6\u05d9\u05d3\u05d5 \u05d4\u05e9\u05de\u05d0\u05dc\u05d9 \u05d4\u05ea\u05d7\u05ea\u05d5\u05df \u05e9\u05dc \u05d4\u05ea\u05e4\u05e8\u05d9\u05d8, \u05e9\u05e0\u05e4\u05ea\u05d7 \u05d1\u05dc\u05d7\u05d9\u05e6\u05d4 \u05e2\u05dc \u05d4\u05db\u05e4\u05ea\u05d5\u05e8 \u05d4\u05d9\u05de\u05e0\u05d9 \u05d1\u05e2\u05db\u05d1\u05e8.</p>", 
    "");
    CxhBEText = CxhBEText.replace("<h3> Lighting Accessibility menu and right click the mouse </h3> <p> Running this button, change the settings right mouse button, that when clicked anywhere on the site will operate an abbreviated menu of access to the main operations. You can disable this function on the left side bottom of the menu, opened by clicking the right mouse button. </p>", "");
    CxhBEText = CxhBEText + styleCss;
    andiUA.menuMessageAlert(CxhBEText, "body");
    /* andiUA.ooLqs(); */
    var uiWAD = localStorage.getItem("uiWAD");
    andizxc("head").append('<style id="NMqnM">#jUbTi * {box-sizing:border-box}#jUbTi #mLKZW {width:100%;UBwAY-height:70px;display:block;margin:0}#jUbTi #mLKZW img{margin:12px;}#jUbTi header#AtUwC {position:static !important;min-height:300px;width:100%;display:block;padding:70px;background-color:' + uiWAD + '}#jUbTi header#AtUwC h1{-webkit-box-shadow: 0px 0px 17px -1px rgba(0,0,0,0.75);-moz-box-shadow: 0px 0px 17px -1px rgba(0,0,0,0.75);box-shadow: 0px 0px 17px -1px rgba(0,0,0,0.75);text-align:center;margin:0;padding:0 70px;font-size:48px;display:block;border-bottom:1px solid #cccccc;background-color:#fff;color:#000;min-height:80px;line-height:80px;}#ooLqs{margin-top:-1px;-webkit-box-shadow: 0px 5px 17px -1px rgba(0,0,0,0.75);-moz-box-shadow: 0px 5px 17px -1px rgba(0,0,0,1);box-shadow: 0px 5px 17px -1px rgba(0,0,0,1);font-size:48px;display:block;border-bottom:1px solid #EDEDED;background-color:#fff;color:#000;height:80px;}#mHyPV {width:100%;padding:0 70px 34px; }#mHyPV h2{border-top:1px solid #EDEDED;font-size:32px !important;color:#000;margin:34px 0px 10px !important;display:block !important; }#mHyPV h2:first-child{border-top:none;}#mHyPV h3{display:block !important;font-size:28px !important;color:#000;margin:24px 0px 8px !important; }#mHyPV h4{display:block !important;font-size:16px !important;color:#000;margin:12px 0px 6px !important; }#mHyPV p{margin:0px; font-size:16px;color:#000;}#DHvyi:focus{border:1px solid #fff;}#lobUF{position:relative;margin-top:-7px;padding:0 70px;width:100%;border:none;color:#5d5d5d;font-size:32px;background-color:#fff;}#lobUF span{position:absolute;}[id^="cCJkO"]{margin:0 0 0 0;padding:25px 70px 0;list-style:none !important; color:#fff;font-size:24px;background-color:#5d5d5d;}[id^="cCJkO"] li{padding:0;margin:24px 0;color:#fff;font-size:24px;}[id^="cCJkO"] li a{color:#fff;font-size:24px;}[id^="cCJkO"] li:last-child{padding-bottom:30px;margin-bottom:-2px;}#PXDtw{width:15px;height:15px;background-repeat:no-repeat;color:#000;fill: currentColor;}</style>');
    var PPFAr = window.innerWidth;
    if (PPFAr < 500) {
      andizxc("#jUbTi header#AtUwC h1").css({"font-size":"26px", "padding":"0 10px", "line-height":"40px"});
    } else {
      if (PPFAr < 700) {
        andizxc("#jUbTi header#AtUwC h1").css({"font-size":"32px", "padding":"0 35px"});
      }
    }
    andizxc(window).resize(function() {
      if (PPFAr < 500) {
        andizxc("#jUbTi header#AtUwC h1").css({"font-size":"32px", "padding":"0 10px", "line-height":"40px"});
      } else {
        if (PPFAr < 700) {
          andizxc("#jUbTi header#AtUwC h1").css({"font-size":"32px", "padding":"0 35px"});
        }
      }
      andizxc("#jUbTi,#jUbTi #mLKZW,#jUbTi header#AtUwC, #mHyPV").css({"width":andizxc("#jUbTi").innerWidth});
    });
  };
  };
  andiUA.ooLqs = function() {
	  if(!UA1('#lobUF')){
    var iArRP = andiUA.KNTQg, NteyS = andiUA.EglES;
    KRgAD = [{ClCCH:andizxc("#RaGNB"), NaFNB:andizxc("#mHyPV h2"), oevdm:andizxc("#AtUwC h1")}];
    andizxc(KRgAD).each(function(j) {
      andizxc(KRgAD[j].oevdm).after('<div id="ooLqs"></div>');
      andizxc("#ooLqs").append('<button id="lobUF" title="' + iArRP.cOdBt + '"><span id="open"><div id="PXDtw" data-alt="' + iArRP.fZAxd + '"></div></span>' + iArRP.QIKVj + "</button>");
      andizxc("#PXDtw").css({"background-image":'url("' + NteyS.kjZtB + '")'});
      andizxc("#ooLqs").append('<ul id="cCJkO' + j + '"></ul>');
      andizxc(KRgAD[j].NaFNB).each(function(i) {
        var VbxKg = "\u05dc\u05d7\u05e5 \u05dc\u05de\u05e2\u05d1\u05e8 \u05dc\u05e4\u05d9\u05e1\u05e7\u05d4";
        var elyVg = andizxc(this).attr({"id":"title" + i, "tabindex":"0"});
        andizxc("#cCJkO" + j).append("<li><a id='link" + i + "' href='#title" + i + "' title='" + VbxKg + "'>" + elyVg.text() + "</a></li>");
        if (andizxc(this).is("h3")) {
          andizxc("#link" + i).css("padding-right", "30px");
        }
        if (andizxc(this).is("h4")) {
          andizxc("#link" + i).css("padding-right", "60px");
        }
      });
      andizxc("#ooLqs #cCJkO" + j).hide();
      if (andizxc("#VseDf").css("direction") == "rtl") {
        andizxc("#open").css({"right":"30px", "top":"35px"});
      } else {
        andizxc("#open").css({"left":"30px", "top":"35px"});
      }
      andizxc("#lobUF").click(function() {
        if (andizxc("#PXDtw").attr("data-alt") == iArRP.fZAxd) {
          andizxc("#PXDtw").attr({"background-image":'url("' + NteyS.fJcrw + '")', "data-alt":iArRP.tlHxH});
          andizxc("#PXDtw").css({"background-image":'url("' + NteyS.fJcrw + '")'});
          andiUA.nAtDr(iArRP.tlHxH);
          andizxc("#open").css({"top":"40px"});
          andizxc("#lobUF").css({"background-color":"#5d5d5d", "color":"#fff"});
          andizxc("#ooLqs #cCJkO" + j).slideDown();
          setTimeout(function() {
            andizxc("#fzcXp").css({"margin-top":andizxc("#cCJkO" + j).height()});
          }, 400);
          setTimeout(function() {
            andizxc("#fzcXp").css({"margin-top":andizxc("#cCJkO" + j).height()});
            var a = parseInt(document.getElementById("cCJkO0").clientHeight) + 270;
            andizxc("#jUbTi header#AtUwC").css("height", a);
          }, 1000);
        } else {
          andizxc("#PXDtw").attr({"background-image":'url("' + NteyS.kjZtB + '")', "data-alt":iArRP.fZAxd});
          andizxc("#PXDtw").css({"background-image":'url("' + NteyS.kjZtB + '")'});
          andiUA.nAtDr(iArRP.fZAxd);
          andizxc("#ooLqs #cCJkO" + j).slideUp();
          andizxc("#open").css({"top":"35px"});
          andizxc("#fzcXp").css({"margin-top":""});
          andizxc("#jUbTi header#AtUwC").height("");
          setTimeout(function() {
            andizxc("#lobUF").css({"background-color":"", "color":""});
          }, 300);
        }
      });
      andizxc('[id^="cCJkO"] a').click(function() {
        andizxc("#lobUF").click();
      });
      var PPFAr = window.innerWidth;
      if (PPFAr < 500) {
        andizxc("#lobUF").css({"line-height":"40px", "font-size":"26px"});
        andizxc("#ooLqs h2").css({"font-size":"18px"});
        andizxc("#ooLqs h3").css({"font-size":"16px"});
      } else {
        if (PPFAr < 700) {
          andizxc("#ooLqs h2").css({"font-size":"24px"});
          andizxc("#ooLqs h3").css({"font-size":"18px"});
        }
      }
      andizxc(window).resize(function() {
        if (PPFAr < 500) {
          andizxc("#lobUF").css({"line-height":"40px", "font-size":"26px"});
          andizxc("#ooLqs h2").css({"font-size":"24px"});
          andizxc("#ooLqs h3").css({"font-size":"18px"});
        } else {
          if (PPFAr < 700) {
            andizxc("#ooLqs h2").css({"font-size":"24px"});
            andizxc("#ooLqs h3").css({"font-size":"18px"});
          }
        }
        andizxc("#jUbTi,#jUbTi #mLKZW,#jUbTi header#AtUwC, #mHyPV").css({"width":andizxc("#jUbTi").innerWidth});
      });
    });
  }
  };
  andiUA.CuuBW = function() {

    (function() {
      var TUAa = localStorage.getItem("UA2bigMenu");
      var andiIframeSize, anditabsarea;
      if (TUAa == "true") {
        var andiIframeSize = 320 * 1.3;
        anditabsarea = 338 * 1.3;
      } else {
        var andiIframeSize = 320;
        anditabsarea = 338;
      }
      var aerWh = '<div class="BohAM" tabindex="0"  style="position:relative;  width:' + anditabsarea + 'px !important;"><div id="QSgtZ" style="width:' + anditabsarea + 'px;"></div></div>';
      var aerWhElm = document.createElement("DIV");
      aerWhElm.addAttr({"tabindex":"0", "style":"position:relative; width:" + anditabsarea + "px !important;", "class":"BohAM"});
      aerWhElm.id = "andiasd";
      aerWhElm.innerHTML = aerWh;
      UA1("#VbcHu").mQUvp(aerWhElm);
      var correntsite = window.location.host;
      correntsite = correntsite.replace("www.", "");
      var pageTitle = UA1("title").textContent;
      if (pageTitle == undefined || pageTitle == null || pageTitle == "") {
        pageTitle = correntsite;
      }
      if (localStorage.getItem("andiislogin") == "false" || localStorage.getItem("andiislogin") == "") {
        UA1("#QSgtZ").appendHtml('<iframe id="loadAndiSystem" src="' + andiUA.url + "register?pageTitle=" + pageTitle + "&vFaKz=" + UA1("html").getAttr("vFaKz") + "&correntsite=" + correntsite + '" scrolling="no" style="width:' + andiIframeSize + 'px;height:450px;"></iframe>');
        UA1('[tuaheaderbarbtn="1"]').focus();
      } else {
        var TUAtryToUpdateSet = localStorage.getItem("TUAtryToUpdateSet");
        var TUAdataSet = andiUA.ANDIgetAllFnsToSave2();
        andiUA.removeStorageItem("TUAtryToUpdateSet");
        UA1("#QSgtZ").appendHtml('<iframe id="loadAndiSystem" src="' + andiUA.url + "users/userssets?pageTitle=" + pageTitle + "&vFaKz=" + UA1("html").getAttr("vFaKz") + "&correntsite=" + correntsite + "&TUAtryToUpdateSet=" + TUAtryToUpdateSet + "&TUAdataSet=" + TUAdataSet + '" scrolling="no" style="width:' + andiIframeSize + 'px;height:450px;"></iframe>');
      }
    })();
  };
  andiUA.quqAw = function() {

    (function() {
      var aerWh = '<div id="QSgtZ" ><div id="IFEiM"><div id="PhVFO"><div id="LNHvo" aria-label="' + andiUA.KNTQg.UAtdr2175 + '" role="link" tYlBy="true" tabindex="0"> ' + (andiUA.pUVLT ? andiUA.KNTQg.UAtdr2163 : andiUA.KNTQg.UAtdr114) + ' <img class="TUAseeActiveBasicAcccessibilityIcon" alt="" src="' + andiUA.KpAEX + '/images/activeBasicAcccessibility.png"></div></div></div><div id="HxpCr"><h3 class="ZWDCr">' + 
      andiUA.KNTQg.bbb13 + '</h3><div class="KSsgr Q1"><div role="button" tabindex="0" class="VDmCM"><div>' + andiUA.KNTQg.UAtdr113 + '</div><img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.KpAEX + '/images/FAQarrowGray.png"></div><div class="Zrljr"><ol><li>' + andiUA.KNTQg.UAtdr115 + "</li><li>" + andiUA.KNTQg.UAtdr116 + "</li><li>" + andiUA.KNTQg.UAtdr117 + 
      '</li></ol></div></div><div class="KSsgr Q2"><div role="button" tabindex="0" class="VDmCM"><div>' + andiUA.KNTQg.UAtdr118 + '</div><img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.KpAEX + '/images/FAQarrowGray.png"></div><div class="Zrljr">' + andiUA.KNTQg.UAtdr119 + '</div></div><div class="KSsgr Q3"><div role="button" tabindex="0" class="VDmCM"><div>' + andiUA.KNTQg.UAtdr121 + 
      '</div><img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.KpAEX + '/images/FAQarrowGray.png"></div><div class="Zrljr">' + andiUA.KNTQg.UAtdr122 + '</div></div><div class="KSsgr Q4"><div role="button" tabindex="0" class="VDmCM"><div>' + andiUA.KNTQg.UAtdr123 + '</div><img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.KpAEX + '/images/FAQarrowGray.png"></div><div class="Zrljr">' + 
      andiUA.KNTQg.UAtdr124 + '</div></div><div class="KSsgr Q5"><div role="button" tabindex="0" class="VDmCM"><div>' + andiUA.KNTQg.UAtdr125 + '</div><img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.KpAEX + '/images/FAQarrowGray.png"></div><div class="Zrljr">' + andiUA.KNTQg.UAtdr126 + '</div></div><div class="KSsgr Q6"><div role="button" tabindex="0" class="VDmCM"><div>' + 
      andiUA.KNTQg.UAtdr127 + '</div><img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.KpAEX + '/images/FAQarrowGray.png"></div><div class="Zrljr">' + andiUA.KNTQg.UAtdr128 + '</div></div><div class="KSsgr Q7"><div role="button" tabindex="0" class="VDmCM"><div>' + andiUA.KNTQg.UAtdr129 + '</div><img class="FAQarrowGray" alt="' + andiUA.KNTQg.UAtdr194 + '" src="' + andiUA.KpAEX + 
      '/images/FAQarrowGray.png"></div><div class="Zrljr">' + andiUA.KNTQg.UAtdr130 + "</div></div></div></div>";
      var aerWhElm = document.createElement("DIV");
      aerWhElm.addAttr({"tabindex":"0", "style":"position:relative;", "class":"BohAM"});
      aerWhElm.id = "andiasd";
      aerWhElm.innerHTML = aerWh;
      UA1("#VbcHu").tmQUvp(aerWhElm);
      UA("#HxpCr .Q1, #HxpCr .Q2, #HxpCr .Q5, #HxpCr .Q3, #HxpCr .Q4, #HxpCr .Q6").forEach(function(VnIxP) {
        VnIxP.style.cssText = !andiUA.pUVLT ? "display:block !important" : "display:none !important";
      });
      andizxc("#jilVt *:not(.andimenucode)").each(function(i) {
        (this).taddClass("andimenucode");
      });
    })();
  };
  andiUA.contactTab = function() {

    (function() {
      var aerWh = '<div id="QSgtZ" role="form" aria-label="' + andiUA.KNTQg.bbb192 + '"><div id="gAoCt"><div id="YIRzs" tabindex="0" role="heading" aria-level="3">' + andiUA.KNTQg.UAtdr131 + '</div></div><div id="tgGWn" tabindex="0">' + andiUA.KNTQg.UAtdr192 + '<span id="DmrXy"></span>' + andiUA.KNTQg.UAtdr193 + '<span id="hYHUX"></span></div><div id="IULPc"  style="position: relative !important;"><div class="hintformorequastionLeft" style="height: 180px; position: absolute !important; width: 60px;top: 88px;"><div class="hintformorequastionblue" style="background-color: #03A9F3;width: 60px;height: 75px;"></div><div class="hintformorequastionwhite" style="box-shadow: 0px 1px 5px -1px rgba(89,89,89,1);width: 60px;height: 90px;background-color:#fff;"></div></div><div tabindex="0" id="RmKVO">' + 
      andiUA.KNTQg.UAtdr132 + " " + andiUA.KNTQg.UAtdr133 + '</div><div id="PRxAh"><div class="mJoej questionactive" cykxa="1" ><div class="wxYqU"><div class="fEqjh" tabindex="0">' + andiUA.KNTQg.UAtdr137 + '</div><div class="YrOTA" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.UAtdr135 + '">' + andiUA.KNTQg.UAtdr136 + '</div></div><div class="EbTkc" role="group"><div class="GJTZS" role="radio" aria-checked="false" name="andiQ0" tabindex="0" >' + 
      andiUA.KNTQg.UAtdr138 + '</div><div class="qiBkg"  role="radio" aria-checked="false" name="andiQ0" tabindex="0" >' + andiUA.KNTQg.UAtdr139 + '</div><div class="DdkxI" role="radio" aria-checked="false" name="andiQ0" tabindex="0" >' + andiUA.KNTQg.UAtdr140 + '</div></div></div><div class="mJoej" UAshowquestion="false" cykxa="2"><div class="wxYqU"><div class="fEqjh" tabindex="-1"  id="whathardinandi">' + 
      andiUA.KNTQg.UAtdr141 + '</div><div class="YrOTA" role="button" tabindex="-1" aria-label="' + andiUA.KNTQg.UAtdr135 + '">' + andiUA.KNTQg.UAtdr136 + '</div></div><div class="EbTkc"><textarea aria-labelledby="whathardinandi" tabindex="-1" class="TXPAT" placeholder="' + andiUA.KNTQg.UAtdr142 + '" maxlength="255"></textarea><div class="KRUNI"></div></div></div><div class="mJoej" UAshowquestion="false" cykxa="3"><div class="wxYqU"><div class="fEqjh" tabindex="0">' + 
      andiUA.KNTQg.UAtdr143 + '</div><div class="YrOTA" role="button" tabindex="-1" aria-label="' + andiUA.KNTQg.UAtdr135 + '">' + andiUA.KNTQg.UAtdr136 + '</div></div><div class="EbTkc" role="group"><div class="GJTZS" role="radio" aria-checked="false" name="andiQ1" tabindex="-1" >' + andiUA.KNTQg.UAtdr144 + '</div><div class="qiBkg" role="radio" aria-checked="false" name="andiQ1" tabindex="-1" >' + andiUA.KNTQg.UAtdr145 + 
      '</div><div class="DdkxI" role="radio" aria-checked="false" name="andiQ1" tabindex="-1" >' + andiUA.KNTQg.UAtdr146 + '</div></div></div><div class="mJoej" cykxa="4"><div class="wxYqU"><div class="fEqjh" tabindex="0" id="whatmoredoneed">' + andiUA.KNTQg.UAtdr147 + '</div><div class="YrOTA" role="button" tabindex="-1" aria-label="' + andiUA.KNTQg.UAtdr135 + '">' + andiUA.KNTQg.UAtdr136 + 
      '</div></div><div class="EbTkc" role="group"><textarea type="text" tabindex="-1" aria-labelledby="whatmoredoneed" maxlength="255" class="TXPAT" placeholder="' + andiUA.KNTQg.UAtdr142 + '"></textarea><div class="KRUNI"></div></div></div><div class="mJoej"  cykxa="5"><div class="wxYqU"><div class="fEqjh" tabindex="0">' + andiUA.KNTQg.UAtdr148 + '</div><div class="YrOTA" role="button" tabindex="-1" aria-label="' + 
      andiUA.KNTQg.UAtdr135 + '">' + andiUA.KNTQg.UAtdr136 + '</div></div><div class="EbTkc" role="group"><div class="GJTZS" role="radio" aria-checked="false" name="andiQ2" tabindex="-1" >' + andiUA.KNTQg.UAtdr144 + '</div><div class="qiBkg" role="radio" aria-checked="false" name="andiQ2" tabindex="-1" >' + andiUA.KNTQg.UAtdr145 + '</div><div class="DdkxI" role="radio" aria-checked="false" name="andiQ2" tabindex="-1" >' + 
      andiUA.KNTQg.UAtdr146 + '</div></div></div><div class="mJoej"  cykxa="6"><div class="wxYqU"><div class="fEqjh" tabindex="0" id="TXPAT">' + andiUA.KNTQg.UAtdr149 + ' ...</div><div class="YrOTA" role="button" tabindex="-1" aria-label="' + andiUA.KNTQg.UAtdr135 + '">' + andiUA.KNTQg.UAtdr136 + '</div></div><div class="EbTkc"><textarea type="text" aria-labelledby="TXPAT" maxlength="255" placeholder="' + 
      andiUA.KNTQg.UAtdr142 + '" tabindex="-1" ></textarea><div class="KRUNI"></div></div></div><div class="mJoej" cykxa="7"><div class="wxYqU"><div class="fEqjh" tabindex="0">' + andiUA.KNTQg.UAtdr150 + '</div></div><div class="EbTkc"><div class="uPqNm" style="margin-top:-10px;"><label for="andiuserfirstname">' + andiUA.KNTQg.UAtdr151 + '</label><input type="text" id="andiuserfirstname" placeholder="" tabindex="-1" /></div><div class="uPqNm"><label for="andiuseremail">' + 
      andiUA.KNTQg.UAtdr152 + '</label><input type="text" required="required" id="andiuseremail" placeholder="" tabindex="-1" /><div class="hYaIS"></div></div></div></div></div></div><div id="TwIfU"><div id="yCrCd" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.UAtdr153 + '">< ' + andiUA.KNTQg.UAtdr154 + '</div><div id="YFJzt" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.UAtdr155 + 
      '" >' + andiUA.KNTQg.UAtdr156 + " ></div></div></div></div>";
      var aerWhElm = document.createElement("DIV");
      aerWhElm.addAttr({"tabindex":"0", "style":"position:relative;", "class":"BohAM"});
      aerWhElm.id = "andiasd";
      aerWhElm.innerHTML = aerWh;
      UA1("#VbcHu").mQUvp(aerWhElm);
      UA1("#DmrXy").appendHtml(" 1 ");
      UA(".mJoej").forEach(function(VnIxP, i) {
        VnIxP.addCss({"display":"none"});
      });
      UA1(".mJoej").addCss({"display":"inline-block"});
      if (UA1("html").getAttr("DOwbI") == "ltr") {
        UA("#IULPc .hintformorequastionLeft").forEach(function(VnIxP, i) {
          VnIxP.addCss({"right":"-36px"});
        });
      } else {
        UA("#IULPc .hintformorequastionLeft").forEach(function(VnIxP, i) {
          VnIxP.addCss({"left":"-36px"});
        });
      }
      andiUA.gpzEg();
    })();
  };
  andiUA.resizewindow = function() {

    var LxJDo = window.innerHeight;
    var TUAa = localStorage.getItem("UA2bigMenu");
    if (window.innerWidth <= 640) {
      UA1("#fjaun").addCss({"display":"none"});
    } else {
      UA1("#fjaun").addCss({"display":"inline-block"});
    }
    if (UA1("#changePanelSetting")) {
      UA1("#changePanelSetting").addCss({"bottom":0});
    }
    var winH = window.innerHeight;
    if (localStorage.getItem("UA2bigMenu") == "true") {
      if (winH > 640) {
        UA(".vjEnr").forEach(function(VnIxP) {
          VnIxP.addCss({"bottom":winH - (640 - 25) + "px"});
        });
      } else {
        UA(".vjEnr").forEach(function(VnIxP) {
          VnIxP.addCss({"bottom":35 + "px"});
        });
      }
    } else {
      if (winH > 640) {
        UA(".vjEnr").forEach(function(VnIxP) {
          VnIxP.addCss({"bottom":winH - (630 - 25) + "px"});
        });
      } else {
        UA(".vjEnr").forEach(function(VnIxP) {
          VnIxP.addCss({"bottom":10 + "px"});
        });
      }
    }
    if (TUAa == "true") {
      var aFXNN = 1.3;
      var eLSSC = LxJDo - (30 + 65 + 35) * aFXNN;
      var jOSvX = andiUA.DOwbI == "ltr" ? "18px" : "0";
      UA1("body").taddClass ("UA2bigMenu");
      UA1(".BohAM").addCss({"height":eLSSC, "overflow":"hidden", "left":"0px", "width":338 * aFXNN + "px", "overflow-y":"scroll"});
      setTimeout(function() {
        UA(".IdrLU").forEach(function(VnIxP) {
          VnIxP.addCss({"width":320 * aFXNN + "px", "overflow":"hidden", "height":"558px"});
        });
        UA(".ZDMId").forEach(function(VnIxP) {
          VnIxP.addCss({"width":338 * aFXNN + "px", "overflow-x":"hidden", "overflow-y":"scroll", "height":"558px"});
        });
        UA(".BohAM").forEach(function(VnIxP) {
          VnIxP.addCss({"height":"458px"});
        });
        UA("#CrXug > span").forEach(function(VnIxP) {
          VnIxP.addCss({"font-size":parseInt(VnIxP.getCss("font-size")) * aFXNN});
        });
      }, 350);
    } else {
      if (LxJDo < 640 || parseInt(UA1("#jilVt").clientHeight) < 640) {
        var eLSSC = LxJDo - (30 + 65 + 35);
        var jOSvX = andiUA.DOwbI == "ltr" ? "-18px" : "0";
        UA(".BohAM").forEach(function(VnIxP) {
          VnIxP.addCss({"overflow":"hidden", "left":0, "width":"338px", "overflow-y":"scroll", "height":eLSSC + "px"});
        });
        setTimeout(function() {
          UA(".IdrLU").forEach(function(VnIxP) {
            VnIxP.addCss({"width":"320px", "overflow":"hidden", "height":eLSSC + 72 + "px"});
          });
          UA1("#SQoLG").addCss({"width":"320px", "overflow":"hidden", "height":eLSSC + (30 + 65 + 35) + "px"});
          UA(".ZDMId, #SQoLG > div").forEach(function(VnIxP) {
            VnIxP.addCss({"width":"339px", "overflow-x":"hidden", "overflow-y":"scroll", "height":eLSSC + 72 + "px"});
          });
          if (UA("#wrapMenuLang").length > 0) {
            UA1("#wrapMenuLang").style.height = window.innerHeight + "px";
            UA1("#wrapMenuLang > div").style.height = "100%";
            UA1("#wrapMenuLang > div").style.overflowY = "scroll";
            UA1("#wrapMenuLang > div").style.width = "338px";
            UA1("#andiMenuLangMiddleBarSaveBtn").style.cssText = "position:fixed !important";
          }
        }, 350);
      }
      if (LxJDo >= 640) {
        UA1(".BohAM").addCss({"overflow":"hidden", "left":"0", "width":"320px", "height":"510px"});
        UA(".IdrLU").forEach(function(VnIxP) {
          VnIxP.addCss({"width":"320px", "height":"575px", "overflow":"hidden"});
        });
        UA1("#jilVt").addCss({"width":"320px", "overflow":"hidden", "height":"640px"});
        UA(".ZDMId").forEach(function(VnIxP) {
          VnIxP.addCss({"overflow-x":"hidden", "overflow-y":"scroll", "height":"575px", "width":"341px"});
        });
      }
    }
    if (UA1("#menuMessageAlert")) {
      var winWidth = UA1("#menuMessageAlert").parentElement.clientWidth;
      var winHeight = UA1("#menuMessageAlert").parentElement.clientHeight; 
      var popupW = winWidth * 0.8;
      var popupH = winHeight * 0.8;
      var popupMargin = 100 + "px " + winWidth * 0.1 + "px";
      UA1("#menuMessageAlert").addCss({"margin":popupMargin, "height":popupH + "px", "width":popupW + "px"});
    }
    if (UA1("#panelToShowText")) {
      var TUAh = window.innerHeight;
      var TUAw = window.innerWidth;
      UA1("#panelToShowTextStyle").innerHTML = "#panelToShowText{height:  " + (TUAh * 0.8 - 50) + "px;width:  " + TUAw * 0.8 + "px;margin:  " + (TUAh - 50) * 0.2 / 2 + "px " + TUAw * 0.2 / 2 + "px;}";
    }
  };
  andiUA.fvCtH = false;
  andiUA.ermtR = function() {

    (function() {
      function openToRight() {
        if (UA1("#bkVMl")) {
          UA1("#bkVMl").addCss({"position":"absolute"});
        }
        UA1("#jilVt").addCss({"right":"auto"});
        if (parseInt(UA1("#jilVt").getCss("left")) < 0) {
          UA1("#jilVt").style.display = "block";
          setTimeout(function() {
            UA("#jilVt, .IdrLU").forEach(function(VnIxP, i) {
              VnIxP.OLcMJ({"left":"0px"}, 0.350);
            });
          }, 10);
          andiUA.resizewindow();
          andiUA.fvCtH = true;
        } else {
          UA("#jilVt, .IdrLU").forEach(function(VnIxP, i) {
            VnIxP.OLcMJ({"left":"-320px"}, 0.350);
          });
          andiUA.fvCtH = false;
          setTimeout(function() {
            UA1("#jilVt").addCss({"display":"none"});
          }, 350);
        }
        UA1("#JlUMY").addAttr({"tabindex":"-1"});
        if (UA1("#bkVMl")) {
          UA1("#bkVMl").addCss({"position":""});
        }
      }
      function openToLeft() {
        if (UA1("#bkVMl")) {
          UA1("#bkVMl").addCss({"position":"absolute"});
        }
        UA1("#jilVt").addCss({"left":"auto"});
        if (parseInt(UA1("#jilVt").getCss("right")) < 0) {
          UA1("#jilVt").style.display = "block";
          setTimeout(function() {
            UA("#jilVt, .IdrLU").forEach(function(VnIxP, i) {
              VnIxP.OLcMJ({"right":"0px"}, 0.350);
            });
          }, 10);
          andiUA.resizewindow();
          andiUA.fvCtH = true;
        } else {
          UA("#jilVt, .IdrLU").forEach(function(VnIxP, i) {
            VnIxP.OLcMJ({"right":"-320px"}, 0.350);
          });
          setTimeout(function() {
            UA1("#jilVt").addCss({"display":"none"});
          }, 350);
          andiUA.fvCtH = false;
          setTimeout(function() {
            UA1("#jilVt").style.cssText = UA1("#jilVt").style.cssText + "display: none !important;";
          }, 350);
        }
        if (UA1("#bkVMl")) {
          UA1("#bkVMl").addCss({"position":""});
        }
      }
	  
	  
      var directionOpeningMenu = localStorage.getItem("FrDLf");
      if (directionOpeningMenu == "right") {
        openToRight();
      } else {
        if (directionOpeningMenu == "left") {
          openToLeft();
        } else {
			if( UA1('#jilVt').getAttribute('style').indexOf('right') > -1 ){
				openToLeft();
			} else {
				openToRight();
			}
        }
      }
      if (andiUA.fvCtH) {
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr198);
        setTimeout(function() {
          if (localStorage.getItem("SQoLG") == "true") {
            UA1("#BEMFU").addAttr({"tabindex":"0"});
            UA1("#BEMFU").focus();
          } else {
            UA1("#BVGhv").addAttr({"tabindex":"0"});
            UA1("#BVGhv").focus();
          }
        }, 450);
      } else {
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr199);
      }
    })();
  };
  andiUA.iCdTc = function() {

    if (localStorage.getItem("TUAstopSliders") == "yes") {
      andiUA.runTUAstopSliders("TUAstopSliders");
    }
    if (localStorage.getItem("TUAstopGif") == "yes") {
      andiUA.runstopGif("TUAstopGif");
    }
    if (localStorage.getItem("highContrastMenu") == "yes") {
      andiUA.sethighContrastMenu();
    }
    if (localStorage.getItem("navigateWithLetters") == "yes") {
      andiUA.vKjNI("TUAnavigateWithLetters");
    }
    if (localStorage.getItem("gcFQn") == "yes") {
      andiUA.DOfyz("gcFQn");
    }
    if (localStorage.getItem("IBoog") == "yes") {
      andiUA.GdHFI("IBoog");
    }
    if (localStorage.getItem("rwRbL") == "white") {
      andiUA.yMmKY("TUAwhiteMouse");
    }
    if (localStorage.getItem("rwRbL") == "black") {
      andiUA.OGzKz("EXRcw");
    }
    if (localStorage.getItem("BBEINAreaBtn") == "yes") {
      andiUA.OcsYO("TUAFocusAreaBtn");
    }
    if (localStorage.getItem("TUAandirasheTevot") == "yes") {
      andiUA.Imuga("TUArasheTevot");
    }
    if (localStorage.getItem("TUAwikipedia") == "yes") {
      andiUA.ARcaN("TUAwikipedia");
    }
    if (localStorage.getItem("andihighLightlink") == "yes") {
      andiUA.pJLIx("TUAandihighLightlink");
    }
    if (localStorage.getItem("TUAreviledHiddingInfo") == "yes") {
      andiUA.RroPQ("TUAreviledHiddingInfo");
    }
    if (localStorage.getItem("TUAalignLeft") == "yes") {
      andiUA.fjyad("TUAalignLeft");
    }
    if (localStorage.getItem("TUAalignRight") == "yes") {
      andiUA.KBNjF("TUAalignLRight");
    }
    /*if (localStorage.getItem("TUAreadsAloud") == "yes") {
      andiUA.runsTUAreadsAloud("TUAreadsAloud");
    }*/
    if (localStorage.getItem("TUAshowMainContent") == "yes") {
      andiUA.runsTUAshowMainContent("TUAshowMainContent");
    }
    if (localStorage.getItem("xPEGE") == "yes") {
      andiUA.PFYhH(localStorage.getItem("TUASizeText"));
      andiUA.checkactiveSizeTextBtn(localStorage.getItem("TUASizeText"));
      andiUA.PwzIv(localStorage.getItem("TUASizeText"));
    }
    if (localStorage.getItem("WXACf") == "yes") {
      andiUA.VdrDa("TUAtoFontArial");
    }
    if (localStorage.getItem("advancedSupportForScreenReader") == "yes") {
      andiUA.runsadvancedSupportForScreenReader("advancedSupportForScreenReader");
    }
    if (localStorage.getItem("gNkmS") == "yes") {
      andiUA.MnQea("gNkmS");
    }
    if (localStorage.getItem("giUwZ") == "yes") {
      UA1("#giUwZ").taddClass ("vKDQY");
      UA1("#giUwZ").taddClass ("xJGcA");
      var allRXwGF = UA("body *");
      for (var i = 0; i < allRXwGF.length; i++) {
        if (!allRXwGF[i].isIt("style,script")) {
          allRXwGF[i].setAttribute("voiceelmnumber", i);
        }
      }
      andiUA.UgTgL();
    }
    if (localStorage.getItem("ScJKe") == "yes") {
      andiUA.WEzPa("ZJlam");
    }
    if (localStorage.getItem("ZXsxe") != "true" && localStorage.getItem("andiLineHeightStyle") != null && localStorage.getItem("andiLineHeightStyle") != null && localStorage.getItem("andiLineHeightStyle") != "") {
      andiUA.wrEKv(localStorage.getItem("andiLineHeightStyle"));
      andiUA.IVUio();
      UA1("#TUAspaceLines").taddClass ("vKDQY");
      UA1("#TUAspaceLines").taddClass ("xJGcA");
    }
    var buBdn = localStorage.getItem("TUAspaceLetter");
    if (localStorage.getItem("fSAok") != "true" && buBdn != null && buBdn != "") {
      andiUA.rtyQb(buBdn);
      UA1("#TUAspaceLetter").taddClass ("vKDQY");
      UA1("#TUAspaceLetter").taddClass ("xJGcA");
      andiUA.GwlWc();
    }
    var TUAmzWNyCookie = localStorage.getItem("mzWNy");
    if (TUAmzWNyCookie == "yes") {
      UA1("#mzWNy").click();
    }
    var ciyIl = localStorage.getItem("TUAwhiteContrast");
    if (ciyIl == "yes") {
      UA1("#TUAwhiteContrast").click();
    }
    var qpPts = localStorage.getItem("TUAspaceWord");
    if (localStorage.getItem("itkQd") != "true" && qpPts != null && qpPts != "") {
      andiUA.lAmJv(qpPts);
      UA1("#TUAspaceWords").taddClass ("vKDQY");
      UA1("#TUAspaceWords").taddClass ("xJGcA");
      andiUA.FFYgj();
    }
    var cKiib = localStorage.getItem("lobQs");
    if (cKiib != null && cKiib != "") {
      andiUA.CIGHd(localStorage.getItem("SYIen"), localStorage.getItem("lobQs"));
    }
    var NqIXt = localStorage.getItem("xqNoE");
    if (NqIXt != null && NqIXt != "") {
      andiUA.CIGHd(localStorage.getItem("xNWTD"), localStorage.getItem("xqNoE"));
    }
    var uUtxr = localStorage.getItem("EjAoO");
    if (uUtxr != null && uUtxr != "") {
      andiUA.CIGHd(localStorage.getItem("kItEx"), localStorage.getItem("EjAoO"));
    }
    if (localStorage.getItem("andihighLightFocus") == "yes") {
      andiUA.JiUJU("JhgsJ");
    }
    if (localStorage.getItem("UAeasyRead") == "yes") {
      andiUA.runsUAeasyRead("UAeasyRead");
    }
    if (localStorage.getItem("JPRSV") == "yes") {
      andiUA.PFYhH(localStorage.getItem("TUASizeText"));
      andiUA.checkactiveSizeTextBtn(localStorage.getItem("TUASizeText"));
      andiUA.PwzIv(localStorage.getItem("TUASizeText"));
    }
  };
  andiUA.ANDIcheckForActiveFns = function() {

    andiUA.dAmvd();
  };
  andiUA.CbgoY = function(ldTmG) {

    var subMenuH = localStorage.getItem("UA2bigMenu") == "true" ? 235 * 1.3 : 235;
    var jYBbi = window.innerHeight > 638 ? 638 - 30 : window.innerHeight - 30;
    var tlXLv = 235;
    if (localStorage.getItem("UA2bigMenu") == "true") {
      tlXLv = tlXLv * 1.3;
    }
    if (UA1("#changePanelSetting") !== null) {
      tlXLv = 35;
      var LhNBD = UA1("#changePanelSetting");
    } else {
      var LhNBD = ldTmG.closest(".IdrLU").querySelector(".vjEnr");
    }
    var winH = window.innerHeight;
    if (localStorage.getItem("UA2bigMenu") == "true") {
      if (winH > 640) {
        LhNBD.addCss({"bottom":winH - (640 - 35) + "px"});
      } else {
        LhNBD.addCss({"bottom":35 + "px"});
      }
    } else {
      if (winH > 640) {
        LhNBD.addCss({"bottom":winH - (630 - 25) + "px"});
      } else {
        LhNBD.addCss({"bottom":10 + "px"});
      }
    }
    if (UA1("#changePanelSetting") !== null) {
      UA1("#changePanelSetting").addCss({"bottom":0 + "px"});
    }
    LhNBD.addCss({"z-index":"2147483647"});
    if (localStorage.getItem("KwAGJ") == LhNBD.id) {
      if (LhNBD.thasClass("uRBJd")) {
        LhNBD.OLcMJ({"height":"0px"}, 0.250);
        if (ldTmG.closest(".IdrLU").querySelector(".joMhk") !== null) {
          ldTmG.closest(".IdrLU").querySelector(".joMhk").addCss({"height":""});
        }
        setTimeout(function() {
          LhNBD.innerHTML = "";
          LhNBD.addCss({"display":"none"});
          LhNBD.tremoveClass ("uRBJd");
          andiUA.removeStorageItem("KwAGJ");
        }, 500);
        if (UA1("body").hasAttribute("trycostumcolor")) {
          andiUA.resetAllColors("notresetmenu");
          ldTmG.tremoveClass ("xJGcA");
          ldTmG.tremoveClass ("vKDQY");
        }
      } else {
        LhNBD.innerHTML = "";
        andiUA.NPCgr(ldTmG.id, LhNBD);
        LhNBD.taddClass ("uRBJd");
        LhNBD.addCss({"display":"block"});
        LhNBD.addAttr({"tabindex":"0"});
        LhNBD.focus();
        LhNBD.OLcMJ({"height":tlXLv + "px"}, 0.250);
        if (ldTmG.closest(".IdrLU") !== null && ldTmG.closest(".IdrLU").querySelector(".vjEnr") !== null) {
          var thisFooter = ldTmG.closest(".IdrLU").querySelector(".joMhk");
          thisFooter.addCss({"height":thisFooter.clientHeight + subMenuH + "px"});
          thisFooter.scrollIntoView(false);
        }
        andiUA.createStorageItem("KwAGJ", ldTmG.id);
      }
    } else {
      if (localStorage.getItem("KwAGJ") != "" && localStorage.getItem("KwAGJ") != null && localStorage.getItem("KwAGJ") != ldTmG.id) {
        if (LhNBD.thasClass("uRBJd")) {
          LhNBD.innerHTML = "";
          andiUA.NPCgr(ldTmG.id, LhNBD);
          andiUA.createStorageItem("KwAGJ", ldTmG.id);
          LhNBD.addAttr({"tabindex":"0"});
          LhNBD.focus();
        } else {
          LhNBD.innerHTML = "";
          andiUA.NPCgr(ldTmG.id, LhNBD);
          LhNBD.addCss({"display":"block"});
          LhNBD.addAttr({"tabindex":"0"});
          LhNBD.focus();
          LhNBD.OLcMJ({"height":tlXLv + "px"}, 0.250);
          if (ldTmG.closest(".IdrLU") !== null && ldTmG.closest(".IdrLU").querySelector(".vjEnr") !== null) {
            var thisFooter = ldTmG.closest(".IdrLU").querySelector(".joMhk");
            thisFooter.addCss({"height":thisFooter.clientHeight + subMenuH + "px"});
            thisFooter.scrollIntoView(false);
          }
          LhNBD.taddClass ("uRBJd");
          andiUA.createStorageItem("KwAGJ", ldTmG.id);
        }
      } else {
        if (LhNBD.thasClass("uRBJd")) {
          LhNBD.OLcMJ({"height":"0px"}, 0.250);
          if (ldTmG.closest(".IdrLU") !== null && ldTmG.closest(".IdrLU").querySelector(".joMhk") !== null) {
            ldTmG.closest(".IdrLU").querySelector(".joMhk").addCss({"height":""});
          }
          setTimeout(function() {
            LhNBD.innerHTML = "";
            LhNBD.tremoveClass ("uRBJd");
            LhNBD.addCss({"display":"none"});
          }, 500);
          if (UA1("body").hasAttribute("trycostumcolor")) {
            andiUA.resetAllColors("notresetmenu");
            ldTmG.tremoveClass ("xJGcA");
            ldTmG.tremoveClass ("vKDQY");
          }
          andiUA.removeStorageItem("KwAGJ");
        } else {
          LhNBD.innerHTML = "";
          andiUA.NPCgr(ldTmG.id, LhNBD);
          LhNBD.addCss({"display":"block"});
          LhNBD.taddClass ("uRBJd");
          LhNBD.addAttr({"tabindex":"0"});
          LhNBD.focus();
          LhNBD.OLcMJ({"height":tlXLv + "px"}, 0.250);
          if (ldTmG.closest(".IdrLU") !== null && ldTmG.closest(".IdrLU").querySelector(".vjEnr") !== null) {
            var thisFooter = ldTmG.closest(".IdrLU").querySelector(".joMhk");
            thisFooter.addCss({"height":thisFooter.clientHeight + subMenuH + "px"});
            thisFooter.scrollIntoView(false);
          }
          andiUA.createStorageItem("KwAGJ", ldTmG.id);
        }
      }
    }
    setTimeout(function() {
      andiUA.resizewindow();
    }, 505);
  };
  andiUA.NPCgr = function(elmId, LhNBD) {

    (function() {
      switch(elmId) {
        case "TUAspaceLines":
          andiUA.UxBFb(LhNBD);
          break;
        case "TUAspaceLetter":
          andiUA.RGZpE(LhNBD);
          break;
        case "TUAspaceWords":
          andiUA.nRCWQ(LhNBD);
          break;
        case "zmpAd":
          andiUA.zmpAd(LhNBD, "zmpAd");
          break;
        case "BjgnQ":
          andiUA.zmpAd(LhNBD, "BjgnQ");
          break;
        case "NtzHe":
          andiUA.zmpAd(LhNBD, "NtzHe");
          break;
        case "TUAwikipedia":
          andiUA.TUAtheMenuWillCloseNow(LhNBD, "#TUAwikipedia");
          break;
        case "activeUserChooseSet":
          andiUA.TUAuserSetSeeMassgesOnOrOff(LhNBD, "#activeUserChooseSet");
          break;
        default:
      }
    })();
  };
  andiUA.TUAtheMenuWillCloseNow = function(LhNBD, id) {

    (function() {
      setTimeout(function() {
        LhNBD.appendHtml('<div id="ZJSXb" role="alert"> ' + andiUA.KNTQg.UAtdr2181 + "</div>");
        LhNBD.querySelectorAll("*").forEach(function(VnIxP, i) {
          VnIxP.taddClass ("andimenucode");
        });
        andiUA.OFfwB(LhNBD);
      }, 750);
    })();
  };
  andiUA.TUAnotWorkOnMobileMessage = function(LhNBD, id) {

    setTimeout(function() {
      LhNBD.appendHtml('<div id="ZJSXb" role="alert"> ' + andiUA.KNTQg.UAtdr2162 + "</div>");
      LhNBD.querySelectorAll("*").forEach(function(VnIxP, i) {
        VnIxP.taddClass ("andimenucode");
      });
      andiUA.OFfwB(LhNBD);
    }, 750);
  };
  andiUA.FgkRG = function(LhNBD, id) {

    setTimeout(function() {
      if (UA1(id).thasClass("xJGcA")) {
        LhNBD.appendHtml('<div id="ZJSXb" role="alert"> ' + andiUA.KNTQg.UAtdr167 + "</div>");
        LhNBD.querySelectorAll("*").forEach(function(VnIxP, i) {
          VnIxP.taddClass ("andimenucode");
        });
        andiUA.OFfwB(LhNBD);
      } else {
        andiUA.TNMwB(LhNBD);
      }
    }, 30);
  };
  andiUA.kyylT = function(LhNBD, id) {
 
    (function() {
      setTimeout(function() {
        if (UA1(id).thasClass("xJGcA")) {
          LhNBD.appendHtml('<div id="ZJSXb" role="alert"> ' + andiUA.KNTQg.UAtdr168 + "</div>");
          LhNBD.querySelectorAll("*").forEach(function(VnIxP, i) {
            VnIxP.taddClass ("andimenucode");
          });
          andiUA.OFfwB(LhNBD);
        } else {
          andiUA.TNMwB(LhNBD);
        }
      }, 30);
    })();
  };
  andiUA.OFfwB = function(LhNBD) {
  
    (function() {
      setTimeout(function() {
        LhNBD.OLcMJ({"height":"0px"}, 0.350);
        setTimeout(function() {
          if (UA1("#ZJSXbStyle")) {
            UA1("#ZJSXbStyle").zOhhK();
          }
        }, 350);
        setTimeout(function() {
          LhNBD.tremoveClass ("uRBJd");
        }, 350);
        andiUA.removeStorageItem("KwAGJ");
      }, 15000);
    })();
  };
  andiUA.TNMwB = function(LhNBD) {

    (function() {
      if (UA1("#ZJSXbStyle") !== null) {
        UA1("#ZJSXbStyle").zOhhK();
      }
      LhNBD.OLcMJ({"height":"0px"}, 0.350);
      setTimeout(function() {
        LhNBD.removeClass("uRBJd");
      }, 1);
      andiUA.removeStorageItem("KwAGJ");
    })();
  };
  andiUA.nRCWQ = function(LhNBD) {

    (function() {
      LhNBD.innerHTML = "";
      LhNBD.appendHtml('<div id="MoexW"><div id="TUAclosespace" aria-label="' + andiUA.KNTQg.UAtdr197 + '" JlUMY role="button" tabindex="0"><img src="' + andiUA.EglES.CpGXW + '" alt=""></div><div role="heading" aria-level="4" style="color: #fff;text-align: center; font-size: 25px;">' + andiUA.KNTQg.pJzWb + '</div><label id="ylWRt" for="jqTGZ">' + andiUA.KNTQg.seqck + 
      ':</label><div class="UAaddpxtospace" style="display: inline-block!important; width: 20px!important; color: #000!important; height: 20px!important; text-align: center; background-color: #fff!important; padding: 1px!important; border-radius: 2px;" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.bbb457 + '"> + </div><input style="display: inline-block; margin: 0 5px;" id="jqTGZ" type="number" value="1" min="1" max="5"><div style="display: inline-block!important; width: 20px!important; color: #000!important; height: 20px!important; text-align: center; background-color: #fff!important; padding: 1px!important; border-radius: 2px;" role="button" tabindex="0" aria-label="' + 
      andiUA.KNTQg.bbb458 + '" class="UAremovepxtospace"> - </div><span style="display:block;margin:5px 0;color: #fff;font-size: 14px;">' + andiUA.KNTQg.UAtdr2196 + '</span></div></div><div id="YQger"><div class="KaxwEspace" id="wrapSpaceWordFnDownCancel" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.CWrkf + '" tuakeyboardusertitle="' + andiUA.KNTQg.CWrkf + '"></div><div class="hjVeU" id="wrapSpaceWordFnDownOff" tabindex="0" role="button">' + 
      andiUA.KNTQg.qiLDh + '</div><div class="IvEyQ" id="wrapSpaceWordFnDownSave" tabindex="0" role="button">' + andiUA.KNTQg.ltzMl + "</div></div>");
      var qpPts = localStorage.getItem("TUAspaceWord");
      UA("#MoexW, #MoexW *").forEach(function(VnIxP, i) {
        VnIxP.taddClass ("andimenucode");
      });
      if (qpPts != null && qpPts != "") {
        UA1("#jqTGZ").value = qpPts;
      }
      setTimeout(function() {
        LhNBD.addAttr({"tabindex":"0", "aria-label":andiUA.KNTQg.bbb378 + " " + LhNBD.tfind('[role="heading"]')[0].BKXPP(), "role":"region"});
      }, 500);
      LhNBD.focus();
      UA1("#jqTGZ").addEventListener("input", function() {
        UA1("body").setAttribute("tryCostumColor", "true");
        var OdnAe = this.value;
        if (OdnAe <= 0) {
          this.value = 0;
          if (UA1("#andispaceWordStyle") !== null) {
            UA1("#andispaceWordStyle").zOhhK();
          }
        } else {
          if (UA1("#andispaceWordStyle") !== null) {
            UA1("#andispaceWordStyle").zOhhK();
          }
          if (OdnAe >= 20) {
            OdnAe = 20;
            this.value = OdnAe;
          }
          andiUA.lAmJv(OdnAe);
        }
      });
    })();
  };
    andizxc.fn.TUAtfindInputMeaning = function() {
    var that = this[0];
    if (!andiUA.kgzrQ2(that) && (!that.hasAttribute("TUAandiInputdiscrp") || that.getAttr("TUAandiInputdiscrp") == "")) {
      var uKgnN = that.getAttr("id");
      var vssRP = UA1("label[for='" + uKgnN + "']");
      if (vssRP !== null) {
        vssRPElmText = vssRP.innerText;
      } else {
        vssRPElmText = "";
      }
      if (vssRP === null || vssRPElmText == "") {
        if (that.innerText == "" && (that.getAttr("aria-label") == null || that.getAttr("aria-label") == "") && (that.getAttr("title") == null || that.getAttr("title") == "")) {
          qTSPU = andiUA.TUAsettfindInputMeaningNoLabel(that);
          if (qTSPU == undefined || qTSPU == "") {
            var rMXol = andiUA.getSiblings(that, "prev");
            var bahZK = "";
            for (var i = 0; i < rMXol.length; i++) {
              if (rMXol[i].nodeType == 3 && rMXol[i].nodeValue.trim() !== "") {
                bahZK = rMXol[i].nodeValue.trim();
                break;
              } else {
                if (rMXol[i].innerText != undefined && rMXol[i].innerText.trim() !== "") {
                  bahZK = rMXol[i].innerText.trim();
                  break;
                }
              }
            }
            if (bahZK == undefined || bahZK.trim() == "") {
              if (that.parentElement !== null) {
                rMXol = andiUA.getSiblings(that.parentElement, "prev");
                for (var i = 0; i < rMXol.length; i++) {
                  if (rMXol[i].nodeType == 3 && rMXol[i].nodeValue.trim() !== "") {
                    bahZK = rMXol[i].nodeValue.trim();
                    break;
                  } else {
                    if (rMXol[i].innerText != undefined && rMXol[i].innerText.trim() !== "") {
                      bahZK = rMXol[i].innerText.trim();
                      break;
                    }
                  }
                }
                if (bahZK == undefined || bahZK.trim() == "") {
                  var bahZK = andiUA.IKBzO(that.parentElement.parentElement);
                  if (bahZK == undefined || bahZK.trim() == "") {
                    rMXol = andiUA.getSiblings(that.parentElement.parentElement, "prev");
                    for (var i = 0; i < rMXol.length; i++) {
                      if (rMXol[i].nodeType == 3 && rMXol[i].nodeValue.trim() !== "") {
                        bahZK = rMXol[i].nodeValue.trim();
                        break;
                      } else {
                        if (rMXol[i].innerText != undefined && rMXol[i].innerText.trim() !== "") {
                          bahZK = rMXol[i].innerText.trim();
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
            bahZK = bahZK;
            ZNqSX = that.getAttr("title");
            if (ZNqSX !== null) {
              that.addAttrElm({"title":ZNqSX + bahZK});
            } else {
              that.addAttrElm({"title":bahZK});
            }
            that.addAttrElm({"TUAandiInputdiscrp":that.getAttr("title"), "aria-label":that.getAttr("title")});
          } else {
            that.addAttrElm({"TUAandiInputdiscrp":qTSPU, "aria-label":qTSPU});
          }
        } else {
          if (that.getAttr("aria-label") !== null && that.getAttr("aria-label") !== "") {
            that.addAttrElm({"TUAandiInputdiscrp":that.getAttr("aria-label")});
          } else {
            if (that.querySelector("img") !== null && that.querySelector("img").getAttr("alt") !== null && that.querySelector("img").getAttr("alt") !== "") {
              that.addAttrElm({"TUAandiInputdiscrp":that.querySelector("img").getAttr("alt"), "aria-label":that.getAttr("alt")});
            } else {
              if (that.getAttr("title") !== null && that.getAttr("title") !== "") {
                that.addAttrElm({"TUAandiInputdiscrp":that.getAttr("title"), "aria-label":that.getAttr("title")});
              } else {
              }
            }
          }
        }
      } else {
        that.addAttrElm({"TUAandiInputdiscrp":vssRPElmText});
      }
    }
  };
  andiUA.lAmJv = function(ObbHH) {
    var vdKGN = '<style id="andispaceWordStyle" CxhBEValue="' + ObbHH + '"> [data-andiallelmwithtext]:not(.andimenucode) {Word-spacing:' + ObbHH + "px !important;} </style>";
    if (UA("#andispaceWordStyle").length == 0) {
      UA1("head").appendHtml(vdKGN);
    }
  };
  andiUA.FFYgj = function() {
    (function() {
      setTimeout(function() {
        var CxhBEValue = localStorage.getItem("TUAspaceWord");
        if (CxhBEValue != "null" && CxhBEValue != null && CxhBEValue != "" && localStorage.getItem("itkQd") != "true") {
          UA1("#TUAspaceWords .RRnya").innerHTML = CxhBEValue;
        } else {
          UA1("#TUAspaceWords .RRnya").innerHTML = "";
        }
      }, 200);
    })();
  };
  andiUA.RGZpE = function(LhNBD) {
    LhNBD.innerHTML = "";
    LhNBD.appendHtml('<div id="MoexW"><div id="TUAclosespace"  aria-label="' + andiUA.KNTQg.UAtdr197 + '"  JlUMY role="button" tabindex="0"><img src="' + andiUA.EglES.CpGXW + '" alt=""></div><div role="heading" aria-level="4" style="color: #fff;text-align: center; font-size: 25px;">' + andiUA.KNTQg.HdbLk + '</div><label id="PGaVc" for="WNAYU" aria-label="' + andiUA.KNTQg.UAtdr2172 + 
    '">' + andiUA.KNTQg.HdbLk + ': </label><div class="UAaddpxtospace" style="display: inline-block!important; width: 20px!important; color: #000!important; height: 20px!important; text-align: center; background-color: #fff!important; padding: 1px!important; border-radius: 2px;" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.bbb457 + '"> + </div><input style="display: inline-block; margin: 0 5px;" id="WNAYU" type="number" value="1" min="1" max="7"><div style="display: inline-block!important; width: 20px!important; color: #000!important; height: 20px!important; text-align: center; background-color: #fff!important; padding: 1px!important; border-radius: 2px;" role="button" tabindex="0" aria-label="' + 
    andiUA.KNTQg.bbb458 + '" class="UAremovepxtospace"> - </div><span style="display:block;margin:5px 0;color: #fff;font-size: 14px;">' + andiUA.KNTQg.UAtdr2196 + '</span></div></div><div id="YQger"><div class="KaxwEspace" id="wrapSpaceLetterFnDownCancel" tabindex="0" role="button" tuakeyboardusertitle="' + andiUA.KNTQg.CWrkf + '" aria-label="' + andiUA.KNTQg.CWrkf + '"></div><div class="hjVeU" id="wrapSpaceLetterFnDownOff" tabindex="0" role="button">' + 
    andiUA.KNTQg.qiLDh + '</div><div class="IvEyQ" id="wrapSpaceLetterFnDownSave" tabindex="0" role="button">' + andiUA.KNTQg.ltzMl + "</div></div>");
    var buBdn = localStorage.getItem("TUAspaceLetter");
    if (buBdn != null && buBdn != "") {
      UA1("#WNAYU").value = buBdn;
    }
    UA("#MoexW, #MoexW *").forEach(function(VnIxP, i) {
      VnIxP.taddClass ("andimenucode");
    });
    setTimeout(function() {
      LhNBD.addAttr({"tabindex":"0", "aria-label":andiUA.KNTQg.bbb378 + " " + LhNBD.tfind('[role="heading"]')[0].BKXPP(), "role":"region"});
    }, 500);
    LhNBD.focus();
    UA1("#WNAYU").addEventListener("input", function() {
      UA1("body").setAttribute("tryCostumColor", "true");
      var OdnAe = this.value;
      if (OdnAe <= 0) {
        this.value = 0;
        if (UA1("#andispaceLetterStyle") !== null) {
          UA1("#andispaceLetterStyle").zOhhK();
        }
      } else {
        if (UA1("#andispaceLetterStyle") !== null) {
          UA1("#andispaceLetterStyle").zOhhK();
        }
        if (OdnAe >= 20) {
          OdnAe = 20;
          this.value = OdnAe;
        }
        andiUA.rtyQb(OdnAe);
      }
    });
  };
  andiUA.rtyQb = function(ObbHH) {
    var vdKGN = '<style id="andispaceLetterStyle" CxhBEValue="' + ObbHH + '">*[data-andiallelmwithtext]:not(.andimenucode){letter-spacing:' + ObbHH + "px !important;} </style>";
    if (UA("#andispaceLetterStyle").length == 0) {
      UA1("head").appendHtml(vdKGN);
    }
  };
  andiUA.GwlWc = function() {
    (function() {
      setTimeout(function() {
        var CxhBEValue = localStorage.getItem("TUAspaceLetter");
        if (CxhBEValue != "null" && CxhBEValue != null && CxhBEValue != "" && localStorage.getItem("fSAok") != "true") {
          UA1("#TUAspaceLetter .RRnya").innerHTML = CxhBEValue;
        } else {
          UA1("#TUAspaceLetter .RRnya").innerHTML = "";
        }
      }, 200);
    })();
  };
  andiUA.UxBFb = function(LhNBD) {
    LhNBD.appendHtml('<div id="MoexW"><div id="TUAclosespace"  aria-label="' + andiUA.KNTQg.UAtdr197 + '"  JlUMY role="button" tabindex="0"><img src="' + andiUA.EglES.CpGXW + '" alt=""></div><div role="heading" aria-level="4" style="color: #fff;text-align: center; font-size: 25px;">' + andiUA.KNTQg.MJDwz + '</div><div id="faSsr"><label for="HYACe">' + andiUA.KNTQg.MJDwz + 
    ': </label><select id="HYACe"><option value="1" selected="selected">' + andiUA.KNTQg.EnZqt + '</option><option value="1.5">' + andiUA.KNTQg.UAtdr172 + '</option><option value="2">' + andiUA.KNTQg.UAtdr173 + '</option><option value="3">' + andiUA.KNTQg.UAtdr174 + '</option></select></div><div id="CrXug"></div></div><div id="YQger"><div class="KaxwEspace" id="wrapSpaceLinesFnDownCancel" tabindex="0" role="button" tuakeyboardusertitle="' + 
    andiUA.KNTQg.CWrkf + '" aria-label="' + andiUA.KNTQg.CWrkf + '"></div><div class="hjVeU" id="wrapSpaceLinesFnDownOff" tabindex="0" role="button">' + andiUA.KNTQg.qiLDh + '</div><div class="IvEyQ" id="wrapSpaceLinesFnDownSave" tabindex="0" role="button">' + andiUA.KNTQg.ltzMl + "</div></div>");
    UA("#HYACe,#faSsr > label ").forEach(function(VnIxP, i) {
      VnIxP.addCss({"float":andiUA.DOwbI == "rtl" ? "left" : "right"});
    });
    UA("#MoexW, #MoexW *").forEach(function(VnIxP, i) {
      VnIxP.taddClass ("andimenucode");
    });
    setTimeout(function() {
      LhNBD.addAttr({"tabindex":"0", "aria-label":andiUA.KNTQg.bbb378 + " " + LhNBD.tfind('[role="heading"]')[0].BKXPP(), "role":"region"});
    }, 500);
    var TUAa = localStorage.getItem("andiLineHeightStyle");
    if (TUAa != null && TUAa != "") {
      UA1("#TUAspaceLines").taddClass ("vKDQY");
      UA1("#TUAspaceLines").taddClass ("xJGcA");
      if (parseInt(localStorage.getItem("andiLineHeightStyle")) == 150) {
        UA1('#HYACe option[value="1.5"]').addAttr({"selected":"selected"});
      } else {
        if (parseInt(localStorage.getItem("andiLineHeightStyle")) == 200) {
          UA1('#HYACe option[value="2"]').addAttr({"selected":"selected"});
        } else {
          UA1('#HYACe option[value="3"]').addAttr({"selected":"selected"});
          andiUA.BKfGr();
          var CxhBEValue = parseInt(localStorage.getItem("andiLineHeightStyle"));
          UA1("#MPAmn").value = (CxhBEValue - 100) / 100 * 10;
        }
      }
    }
    UA1("#MoexW").addAttr({"tabindex":"0"});
    LhNBD.focus();
    UA1("#HYACe").addEventListener("change", function() {
      if (UA1(".spaceFnDownSave") !== null) {
        UA1(".spaceFnDownSave").zOhhK();
      }
      UA1("body").setAttribute("tryCostumColor", "true");
      var selectValue = this.value;
      if (selectValue == 1) {
        UA1("#CrXug").innerHTML = "";
        if (UA1("#andiLineHeightStyle") !== null) {
          UA1("#andiLineHeightStyle").zOhhK();
        }
        andiUA.removeStorageItem("andiLineHeightStyle");
      } else {
        if (selectValue == 3) {
          if (UA1("#andiLineHeightStyle") !== null) {
            UA1("#andiLineHeightStyle").zOhhK();
          }
          andiUA.BKfGr();
        } else {
          UA1("#CrXug").innerHTML = "";
          if (UA1("#andiLineHeightStyle") !== null) {
            UA1("#andiLineHeightStyle").zOhhK();
          }
          andiUA.wrEKv(selectValue * 100);
        }
      }
    });
  };
  andiUA.wrEKv = function(selectValue) {
    (function() {
      var vdKGN = '<style id="andiLineHeightStyle" CxhBEValue="' + selectValue + '"> [data-andiallelmwithtext]:not(.andimenucode) {line-height:' + selectValue + "% !important;} </style>";
      if (UA("#andiLineHeightStyle").length == 0) {
        UA1("head").appendHtml(vdKGN);
      }
    })();
  };
  andiUA.BKfGr = function() {

    (function() {
      if (UA("#MPAmn").length == 0) {
        UA1("#CrXug").appendHtml('<label for="MPAmn">' + andiUA.KNTQg.UAtdr175 + ': </label><div class="UAaddpxtospace" style="display: inline-block!important; width: 20px!important; color: #000!important; height: 20px!important; text-align: center; background-color: #fff!important; padding: 1px!important; border-radius: 2px;" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.bbb457 + '"> + </div><input id="MPAmn" type="number" value="1" min="1" max="20"/><div style="display: inline-block!important; width: 20px!important; color: #000!important; height: 20px!important; text-align: center; background-color: #fff!important; padding: 1px!important; border-radius: 2px;" role="button" tabindex="0" aria-label="' + 
        andiUA.KNTQg.bbb458 + '" class="UAremovepxtospace"> - </div><span style="display:block;color: #fff;font-size: 14px;">' + andiUA.KNTQg.UAtdr2196 + "</span>");
      }
      UA(".vjEnr *").forEach(function(VnIxP, i) {
        VnIxP.taddClass ("andimenucode");
      });
      UA1("#MPAmn").addEventListener("input", function() {
        UA1("body").setAttribute("tryCostumColor", "true");
        var OdnAe = this.value;
        if (OdnAe <= 1) {
          this.value = 1;
          if (UA1("#andiLineHeightStyle") !== null) {
            UA1("#andiLineHeightStyle").zOhhK();
          }
        } else {
          if (UA1("#andiLineHeightStyle") !== null) {
            UA1("#andiLineHeightStyle").zOhhK();
          }
          if (OdnAe >= 30) {
            OdnAe = 30;
            this.value = OdnAe;
          }
          OdnAe = OdnAe / 10 * 100 + 100;
          andiUA.wrEKv(OdnAe);
        }
      });
    })();
  };
  andiUA.IVUio = function() {
    (function() {
      setTimeout(function() {
        var CxhBEValue = localStorage.getItem("andiLineHeightStyle");
        if (CxhBEValue != "null" && CxhBEValue != null && CxhBEValue != "" && localStorage.getItem("ZXsxe") != "true") {
          var selectValue = parseInt((CxhBEValue - 100) / 100 * 10);
          if (selectValue == 5) {
            UA1("#TUAspaceLines .RRnya").innerHTML = selectValue;
          } else {
            if (selectValue == 10) {
              UA1("#TUAspaceLines .RRnya").innerHTML = selectValue;
            } else {
              UA1("#TUAspaceLines .RRnya").innerHTML = selectValue;
            }
          }
        } else {
          UA1("#TUAspaceLines .RRnya").innerHTML = "";
        }
      }, 200);
    })();
  };
  andiUA.dAmvd = function() {
    var cssNewMenuLtr = ".owUce .dAmvd{position:absolute!important;bottom:9px}.dAmvd svg#svgmagnifair{margin-bottom:-3px!important}.dAmvd svg#svgreadableFont{margin-bottom:3px!important;width:20px!important}.dAmvd svg{display:inline-block!important;margin:23px 8px 0!important;width:16px!important;vertical-align:bottom!important}.dAmvd svg#svgLineSpace{margin-bottom:-3px!important}.dAmvd svg#svgLettersSpace{margin-bottom:-4px!important}.dAmvd .UAthreeDot{width:29px!important;height:29px!important;display:inline-block!important;vertical-align:middle!important;margin:0 8px -2px!important}.dAmvd svg#Layer_111{width:20px!important;margin-bottom:2px!important}.dAmvd svg#svgTUAreadsAloud{width:19px!important;margin-bottom:2px!important;height:18px}.dAmvd svg#svgfocusArea{margin-bottom:-4px!important}.dAmvd svg#svgundexlineLinks{margin-bottom:2px!important;height:20px!important;width:14px!important}.dAmvd svg#svgexprasstions{margin-bottom:-5px!important}.dAmvd svg#TUAstopGifSvg,.dAmvd svg#TUAstopSlidersSvg{margin-bottom:-6px!important}.dAmvd svg#svgblackAndWhite_Color{margin-bottom:-4px!important}.dAmvd svg#svgtitleColorChange{margin-bottom:-8px!important}.dAmvd svg#svgColorChange,.dAmvd svg#svgtextColorChange{margin-bottom:-8px!important}.dAmvd svg#svgadvancedSupportForScreenReader,.dAmvd svg#svgblackMouseCrouser,.dAmvd svg#svgboldFocus,.dAmvd svg#svgvirtualKeyboard{margin-bottom:0px!important}.dAmvd svg#svgwhiteMouseCrouser{margin-bottom:-5px!important;width:13px!important}.dAmvd svg#svgblackMouseCrouser{width:13px!important}.dAmvd svg#svgletterNavigation{margin-bottom:4px!important;width:20px!important}";
    var cssNewMenuRtl = ".owUce .dAmvd{position:absolute!important;bottom:9px}.dAmvd svg#svgmagnifair{margin-bottom:-3px!important}.dAmvd svg#svgreadableFont{margin-bottom:4px!important;width:20px!important}.dAmvd svg{display:inline-block!important;margin:23px 8px 0!important;width:16px!important;vertical-align:bottom!important}.dAmvd svg#svgLineSpace{margin-bottom:-3px!important}.dAmvd svg#svgLettersSpace{margin-bottom:-4px!important}.dAmvd .UAthreeDot{width:29px!important;height:29px!important;display:inline-block!important;vertical-align:middle!important;margin:0 8px -2px!important}.dAmvd svg#Layer_111{width:20px!important;margin-bottom:2px!important}.dAmvd svg#svgTUAreadsAloud{width:19px!important;margin-bottom:2px!important;height:18px}.dAmvd svg#svgfocusArea{margin-bottom:-4px!important}.dAmvd svg#svgundexlineLinks{margin-bottom:3px!important;height:20px!important;width:14px!important}.dAmvd svg#svgexprasstions{margin-bottom:-5px!important}.dAmvd svg#TUAstopGifSvg,.dAmvd svg#TUAstopSlidersSvg{margin-bottom:-6px!important}.dAmvd svg#svgblackAndWhite_Color{margin-bottom:-4px!important}.dAmvd svg#svgtitleColorChange{margin-bottom:-6px!important}.dAmvd svg#svgColorChange,.dAmvd svg#svgtextColorChange{margin-bottom:-8px!important}.dAmvd svg#svgadvancedSupportForScreenReader,.dAmvd svg#svgblackMouseCrouser,.dAmvd svg#svgboldFocus,.dAmvd svg#svgvirtualKeyboard{margin-bottom:0px!important}.dAmvd svg#svgwhiteMouseCrouser{margin-bottom:-5px!important;width:13px!important}.dAmvd svg#svgblackMouseCrouser{width:13px!important}.dAmvd svg#svgletterNavigation{margin-bottom:4px!important;width:20px!important}";
    if (UA1("#dAmvdStyle") == null) {
      UA1("body").appendHtml("<style id='dAmvdStyle'>" + (UA1("html").getAttr("DOwbI") == "rtl" ? cssNewMenuRtl : cssNewMenuLtr) + "</style>");
    }
    UA(".khlBU").forEach(function(VnIxP, j) {
      if (VnIxP.querySelector(".dAmvd") !== null) {
        VnIxP.querySelector(".dAmvd").zOhhK();
      }
      var allActiveFns = VnIxP.querySelectorAll(".vKDQY");
      if (allActiveFns.length > 0) {
        if (allActiveFns.length > 3) {
          VnIxP.querySelector(".owUce p").VDtGB('<div class="dAmvd andimenucode" style="position: absolute !important;"></div>');
          var container = VnIxP.querySelector(".dAmvd");
          allActiveFns.forEach(function(el2, i2) {
            if (i2 < 3 && el2.querySelector("svg") !== null) {
              var cloneSvg = el2.querySelector("svg").cloneNode(true);
              cloneSvg.setAttribute("aria-hidden", "true");
              container.appendChild(cloneSvg);
            }
          });
          container.appendHtml('<img class="UAthreeDot" src="' + andiUA.KpAEX + '/images/threePoints.png" alt/>');
        } else {
          if (allActiveFns.length < 4 && allActiveFns.length > 0) {
            VnIxP.querySelector(".owUce p").VDtGB('<div class="dAmvd andimenucode" style="position: absolute !important;"></div>');
            allActiveFns.forEach(function(el2, i2) {
              if (el2.querySelector("svg") !== null) {
                var cloneSvg = el2.querySelector("svg").cloneNode(true);
                cloneSvg.setAttribute("aria-hidden", "true");
                VnIxP.querySelector(".dAmvd").appendChild(cloneSvg);
              }
            });
          }
        }
      }
    });
  };
  andiUA.zmpAd = function(LhNBD, lKnGn) {
    (function() {
      LhNBD.appendHtml('<div id="oECFz" lKnGn="' + lKnGn + '"><div id="TUAclosespace" aria-label="' + andiUA.KNTQg.UAtdr2173 + '" JlUMY role="button" tabindex="0"><img src="' + andiUA.EglES.CpGXW + '" alt=""></div><div role="heading" aria-level="4" style="color: #fff;text-align: center; font-size: 25px;">' + UA1("#" + lKnGn + " p").innerText + '</div><div id="zHZQI"><div class="oECFzColor" aria-label="' + 
      andiUA.KNTQg.UAtdr280 + '" role="button" tabindex="0" andiDATAcolor="#fff"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr281 + '" role="button" tabindex="0" andiDATAcolor="#F7412C"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr282 + '" role="button" tabindex="0" andiDATAcolor="#EC1562"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr283 + '" role="button" tabindex="0" andiDATAcolor="#9D1BB3"></div><div class="oECFzColor" aria-label="' + 
      andiUA.KNTQg.UAtdr284 + '" role="button" tabindex="0" andiDATAcolor="#3F4DB8"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr285 + '" role="button" tabindex="0" andiDATAcolor="#00BCD7"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr286 + '" role="button" tabindex="0" andiDATAcolor="#48B14C"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr287 + '" role="button" tabindex="0" andiDATAcolor="#89C541"></div><div class="oECFzColor" aria-label="' + 
      andiUA.KNTQg.UAtdr288 + '" role="button" tabindex="0" andiDATAcolor="#FEED19"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr289 + '" role="button" tabindex="0" andiDATAcolor="#FF9900"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr291 + '" role="button" tabindex="0" andiDATAcolor="#FF5507"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr292 + '" role="button" tabindex="0" andiDATAcolor="#7A5447"></div><div class="oECFzColor" aria-label="' + 
      andiUA.KNTQg.UAtdr293 + '" role="button" tabindex="0" andiDATAcolor="#9E9E9E"></div><div class="oECFzColor" aria-label="' + andiUA.KNTQg.UAtdr294 + '" role="button" tabindex="0" andiDATAcolor="#607D8B"></div></div><div id="zgJkZ"><div class="oECFzColor" id="oECFzNoColor" ktjXB="' + andiUA.KNTQg.UAtdr177 + '" aria-label="' + andiUA.KNTQg.UAtdr177 + '" role="button" tabindex="0" andiDATAcolor="none"></div></div></div><div id="YQger"><div class="KaxwEspace oECFzColor" id="" tabindex="0" role="button" aria-label="' + 
      andiUA.KNTQg.CWrkf + '" tuakeyboardusertitle="' + andiUA.KNTQg.CWrkf + '"></div><div class="hjVeU" id="wrapColorBullsrFnDownCancel" tabindex="0" role="button">' + andiUA.KNTQg.qiLDh + '</div><div class="IvEyQ" id="wrapColorBullsFnDownSave" tabindex="0" role="button">' + andiUA.KNTQg.ltzMl + "</div></div>");
      UA(".oECFzColor").forEach(function(VnIxP, index) {
        VnIxP.addCss({"background-color":VnIxP.getAttr("andiDATAcolor")});
      });
      UA(".vjEnr *").forEach(function(VnIxP, index) {
        VnIxP.taddClass ("andimenucode");
      });
      setTimeout(function() {
        if (UA1("#oECFz") !== null) {
          UA1("#oECFz").parentElement.addAttr({"tabindex":"0", "aria-label":andiUA.KNTQg.UAtdr2174, "role":"region"});
        }
        UA1("#oECFz").parentElement.focus();
      }, 500);
      andizxc(".oECFzColor").click(function() {
        var that = this;
        if (localStorage.getItem("mzWNy") == "yes" || localStorage.getItem("TUAwhiteContrast") == "yes") {
          localStorage.removeItem("mzWNy");
          localStorage.removeItem("TUAwhiteContrast");
          andiUA.AqzoU("NtzHe");
          andiUA.AqzoU("BjgnQ");
          andiUA.AqzoU("zmpAd");
        }
        UA1("body").setAttribute("tryCostumColor", "true");
        andizxc("#mzWNy,#TUAwhiteContrast").removeClass("xJGcA vKDQY");
        var andiColor = andizxc(this).attr("andiDATAcolor");
        if (lKnGn == "NtzHe") {
          localStorage.setItem("lobQs", lKnGn);
          localStorage.setItem("SYIen", andiColor);
          if (andizxc(this).attr("aria-label") == andiUA.KNTQg.CWrkf || andizxc(this).text() == andiUA.KNTQg.UAtdr177) {
            localStorage.removeItem("SYIen");
            localStorage.removeItem("lobQs");
            andiUA.AqzoU(lKnGn);
            andiUA.nAtDr(andiUA.KNTQg.UAtdr222);
          } else {
            andiUA.nAtDr(andiUA.KNTQg.UAtdr221);
            andiUA.CIGHd(andiColor, lKnGn);
          }
        } else {
          if (lKnGn == "BjgnQ") {
            localStorage.setItem("xqNoE", lKnGn);
            localStorage.setItem("xNWTD", andiColor);
            if (andizxc(this).attr("aria-label") == andiUA.KNTQg.CWrkf || andizxc(this).text() == andiUA.KNTQg.UAtdr177) {
              localStorage.removeItem("xNWTD");
              localStorage.removeItem("xqNoE");
              andiUA.AqzoU(lKnGn);
              andiUA.nAtDr(andiUA.KNTQg.UAtdr224);
            } else {
              andiUA.CIGHd(andiColor, lKnGn);
              andiUA.nAtDr(andiUA.KNTQg.UAtdr223);
            }
          } else {
            if (lKnGn == "zmpAd") {
              localStorage.setItem("EjAoO", lKnGn);
              localStorage.setItem("kItEx", andiColor);
              if (andizxc(this).attr("aria-label") == andiUA.KNTQg.CWrkf || andizxc(this).text() == andiUA.KNTQg.UAtdr177) {
                localStorage.removeItem("kItEx");
                localStorage.removeItem("EjAoO");
                andiUA.AqzoU(lKnGn);
                andiUA.nAtDr(andiUA.KNTQg.UAtdr226);
              } else {
                andiUA.CIGHd(andiColor, lKnGn);
                andiUA.nAtDr(andiUA.KNTQg.UAtdr225);
              }
            }
          }
        }
      });
      UA1("#oECFzNoColor").addEventListener("click", function() {
        andiUA.AqzoU(lKnGn, "notresetmenu");
      });
      UA1("#wrapColorBullsrFnDownCancel").addEventListener("click", function() {
        UA1("#oECFzNoColor").click();
        UA1("#" + lKnGn).click();
        UA1("#" + lKnGn).focus();
        setTimeout(function() {
          andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr228);
        }, 500);
        var ColorCategory = lKnGn == "NtzHe" ? "Color Text" : lKnGn == "BjgnQ" ? "Color heading" : "Color background";
      });
      UA1("#wrapColorBullsFnDownSave").addEventListener("click", function() {
        3;
        if (UA1("body").hasAttribute("tryCostumColor")) {
          UA1("body").removeAttribute("tryCostumColor");
          UA1("#" + lKnGn).taddClass ("vKDQY");
          UA1("#" + lKnGn).taddClass ("xJGcA");
          UA1("#" + lKnGn).click();
          UA1("#" + lKnGn).focus();
          setTimeout(function() {
            andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr227);
          }, 500);
          var ColorCategory = lKnGn == "NtzHe" ? "Color Text" : lKnGn == "BjgnQ" ? "Color heading" : "Color background";
          var ColorName = lKnGn == "NtzHe" ? localStorage.getItem("SYIen") : lKnGn == "BjgnQ" ? localStorage.getItem("xNWTD") : localStorage.getItem("kItEx");
          andiUA.dAmvd();
        } else {
          if (UA1("#oECFz .spaceFnDownSave") === null) {
            UA1("#oECFz").appendHtml('<span role="alert" class="spaceFnDownSave">' + andiUA.KNTQg.bbb181 + "<span>");
          }
        }
      });
    })();
  };
  andiUA.AqzoU = function(lKnGn) {
    andizxc("#" + lKnGn).removeClass("vKDQY xJGcA");
    if (lKnGn == "NtzHe") {
      andiUA.KeyjI();
      andiUA.nAtDr(andiUA.KNTQg.UAtdr222);
    } else {
      if (lKnGn == "BjgnQ") {
        var HashO = UA(andiUA.TUAsettingFn.HashO);
        var CUWyj = UA(andiUA.TUAsettingFn.CUWyj);
        andiUA.Exgvz(HashO, CUWyj);
        andiUA.nAtDr(andiUA.KNTQg.UAtdr224);
      } else {
        if (lKnGn == "zmpAd") {
          andiUA.yoGNh();
          andiUA.nAtDr(andiUA.KNTQg.UAtdr226);
        }
      }
    }
  };
  andiUA.Exgvz = function(HashO, CUWyj) {
    var HashO = UA(andiUA.TUAsettingFn.HashO);
    var CUWyj = UA(andiUA.TUAsettingFn.CUWyj);
    if (UA1("#costumColorsChangeHedingStyle") !== null) {
      UA1("#costumColorsChangeHedingStyle").zOhhK();
    }
    for (var i = 0; i < HashO.length; i++) {
      if (!andizxc(HashO[i]).is("#jilVt, #jilVt *, #elPMJ, #gkzUY *")) {
        HashO[i].style.color = "";
        if (HashO[i].hasAttribute("OPWKf")) {
          HashO[i].style.cssText = HashO[i].getAttribute("OPWKf");
        }
      }
    }
    if (CUWyj != undefined && CUWyj != null && HashO != undefined && HashO != null) {
      for (var i = 0; i < CUWyj.length; i++) {
        if (!andizxc(CUWyj[i]).is("#RFjdP,#RFjdP *, #jilVt, #jilVt *, #elPMJ, #gkzUY *")) {
          CUWyj[i].style.color = "";
        }
        if (CUWyj[i].hasAttribute("OPWKf")) {
          CUWyj[i].style.cssText = CUWyj[i].getAttribute("OPWKf");
        }
      }
    }
    andizxc("#svgtitleColorChangeUnderline").css({"fill":"", "fill-opacity":""});
  };
  andiUA.KeyjI = function(TUAandiallelmwithtext, HashO) {

    if (UA1("#costumColorsChangeTextStyle") !== null) {
      UA1("#costumColorsChangeTextStyle").zOhhK();
    }
    var HashO = UA(andiUA.TUAsettingFn.HashO);
    var TUAedecm = UA("*");
    for (var i = 0; i < TUAedecm.length; i++) {
      if (!andizxc(TUAedecm[i]).is("#jilVt, #jilVt *, #elPMJ, #gkzUY *") && !andizxc(TUAedecm[i]).is(HashO)) {
        TUAedecm[i].style.color = "";
        if (TUAedecm[i].hasAttribute("OPWKf")) {
          TUAedecm[i].style.cssText = TUAedecm[i].getAttribute("OPWKf");
        }
      }
    }
    andizxc("#svgtextColorChangeUnderline").css({"fill":"", "fill-opacity":""});
  };
  andiUA.yoGNh = function(evVJm, CUWyj) {

    var CUWyj = UA(andiUA.TUAsettingFn.CUWyj);
    var evVJm = UA(andiUA.TUAsettingFn.evVJm);
    if (UA1("#costumColorsChangeBgStyle") !== null) {
      UA1("#costumColorsChangeBgStyle").zOhhK();
    }
    andizxc("#aXDkY").remove();
    andizxc("head").append('<style id="aXDkY">' + CUWyj + '{color: "+pknyx+" !important;} ::-webkit-input-placeholder {color: black !important;}:-moz-placeholder {color: black !important;}::-moz-placeholder {color: black !important;}:-ms-input-placeholder { color: white !important; }</style>');
    for (var i = 0; i < CUWyj.length; i++) {
      CUWyj[i].style.border = "";
    }
    for (var i = 0; i < evVJm.length; i++) {
      if (!andizxc(evVJm[i]).is("#jilVt, #jilVt *, #elPMJ, #gkzUY *")) {
        evVJm[i].style.backgroundColor = "";
        if (evVJm[i].hasAttribute("OPWKf")) {
          evVJm[i].style.cssText = evVJm[i].getAttribute("OPWKf");
        }
      }
    }
    andizxc("#svgColorChangeUnderline").css({"fill":"", "fill-opacity":""});
  };
  andiUA.CIGHd = function(pknyx, lKnGn, newElems) {

    UA1("#" + lKnGn).taddClass ("xJGcA");
    UA1("#" + lKnGn).taddClass ("vKDQY");
    var newElems = newElems || "";
    if (lKnGn == "NtzHe") {
      var TUAandiallelmwithtext = UA("[data-andiallelmwithtext]");
      var HashO = UA('a ,a *,h1 ,h2 ,h3 ,h4 ,h5,h6 ,h1 *,h2 *,h3 *,h4 *,h5 *,h6 *,[role="heading"],[role="heading"] *');
      andiUA.NpuTS(TUAandiallelmwithtext, pknyx, HashO);
      if (UA1("#svgtextColorChangeUnderline") !== null) {
        UA1("#svgtextColorChangeUnderline").addCss({"fill":pknyx, "fill-opacity":"1"});
      }
    } else {
      if (lKnGn == "BjgnQ") {
        var CUWyj = UA(andiUA.TUAsettingFn.CUWyj);
        var HashO = UA(andiUA.TUAsettingFn.HashO);
        andiUA.HemYA(CUWyj, HashO, pknyx);
        if (UA1("#svgtitleColorChangeUnderline") !== null) {
          UA1("#svgtitleColorChangeUnderline").addCss({"fill":pknyx, "fill-opacity":"1"});
        }
      } else {
        if (lKnGn == "zmpAd") {
          if (UA1("#aXDkY") !== null) {
            UA1("#aXDkY").zOhhK();
          }
          UA1("head").appendHtml('<style id="aXDkY">' + CUWyj + "{color: " + pknyx + " !important;} ::-webkit-input-placeholder {color: black !important;}:-moz-placeholder {color: black !important;}::-moz-placeholder {color: black !important;}:-ms-input-placeholder { color: white !important; }</style>");
          var CUWyj = UA(andiUA.TUAsettingFn.CUWyj);
          var evVJm = UA("*");
          andiUA.TUAsetzTjFC(CUWyj, pknyx, evVJm);
          UA1("#svgColorChangeUnderline").addCss({"fill":pknyx, "fill-opacity":"1"});
        }
      }
    }
  };
  andiUA.NpuTS = function(TUAandiallelmwithtext, pknyx, HashO) {

    var TUAedecm = andizxc("*");
    var HashO = ('a ,a *,h1 ,h2 ,h3 ,h4 ,h5,h6 ,h1 *,h2 *,h3 *,h4 *,h5 *,h6 *,[role="heading"],[role="heading"] *');
    if (TUAedecm != undefined && TUAedecm != null) {
      for (var i = 0; i < TUAedecm.length; i++) {
        if (!andizxc(TUAedecm[i]).is(andiUA.TUAsettingFn.wwKkF ) && !andizxc(TUAedecm[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * , .wrapfocusonarea *, #LXBSB *, #RFjdP,#RFjdP *,\t#jilVt, #jilVt *, #elPMJ, #gkzUY *") && !andizxc(TUAedecm[i]).is(HashO)) {
          TUAedecm[i].style.cssText = TUAedecm[i].style.cssText + " color: " + pknyx + " !important";
        }
      }
    }
  };
  andiUA.HemYA = function(CUWyj, HashO, pknyx) {
    var CUWyj = '';/*andizxc(andiUA.TUAsettingFn.CUWyj);*/   
    var HashO = andizxc('a ,a *,h1 ,h2 ,h3 ,h4 ,h5,h6 ,h1 *,h2 *,h3 *,h4 *,h5 *,h6 *,[role="heading"],[role="heading"] *');
    if (HashO != undefined && HashO != null) {
      for (var i = 0; i < HashO.length; i++) {
        if (!andizxc(HashO[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(HashO[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * ,.wrapfocusonarea *, #RFjdP,#RFjdP *, #jilVt, #jilVt *, #elPMJ, #gkzUY *")) {
          HashO[i].style.cssText = HashO[i].style.cssText + " color: " + pknyx + " !important";
        }
      }
	  
	  if(andiUA.TUAsettingFn.wwKkF !== ''){
		var Exception = UA(andiUA.TUAsettingFn.wwKkF);  
		  for (var i = 0; i < Exception.length; i++) {
			  var styleText = HashO[i].style.cssText;
			  styleText = styleText.replace("color: " + pknyx + " !important" , '');
			  HashO[i].style.cssText = HashO[i].style.cssText;
			}
		  }
    }
    if (CUWyj != undefined && CUWyj != null && HashO != undefined && HashO != null) {
      for (var i = 0; i < CUWyj.length; i++) {
        if (!andizxc(CUWyj[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(CUWyj[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * ,.wrapfocusonarea *, #RFjdP,#RFjdP *, #jilVt, #jilVt *, #elPMJ, #gkzUY *")) {
          CUWyj[i].style.cssText = CUWyj[i].style.cssText + "  color: " + pknyx + " !important;";
        }
      }
	  if(andiUA.TUAsettingFn.wwKkF !== ''){
	  var Exception = UA(andiUA.TUAsettingFn.wwKkF);
	  for (var i = 0; i < Exception.length; i++) {
		  var styleText = HashO[i].style.cssText;
		  styleText = styleText.replace("color: " + pknyx + " !important" , '');
          HashO[i].style.cssText = HashO[i].style.cssText;
        }
      }
	  
	  
    }
  };
  andiUA.TUAsetzTjFC = function(CUWyj, pknyx, evVJm) {

    var CUWyj = andizxc(andiUA.TUAsettingFn.CUWyj);
    var evVJm = andizxc("body,div");
    if (CUWyj != undefined && CUWyj != null) {
      for (var i = 0; i < CUWyj.length; i++) {
        CUWyj[i].style.cssText = CUWyj[i].style.cssText + " border: 1px solid #fff !important;";
      }

	  if(andiUA.TUAsettingFn.wwKkF !== ''){
	  var Exception = UA(andiUA.TUAsettingFn.wwKkF);
	  for (var i = 0; i < Exception.length; i++) {
      if(HashO[i] &&  HashO[i].style){
        var styleText = HashO[i].style.cssText;
        styleText = styleText.replace("border: 1px solid #fff !important;" , '');
            HashO[i].style.cssText = HashO[i].style.cssText;
        }
      }
		  
	  }
    }
    for (var i = 0; i < evVJm.length; i++) {
      if (evVJm != undefined && evVJm != null) {
        if (!andizxc(evVJm[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(evVJm[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * , .wrapfocusonarea *, #RFjdP,#RFjdP *,#jilVt, #jilVt *, #elPMJ, #gkzUY *")) {
          evVJm[i].style.cssText = evVJm[i].style.cssText + " background-color: " + pknyx + " !important";
        }
      }
    }


	if(andiUA.TUAsettingFn.wwKkF !== ''){
	var Exception = UA(andiUA.TUAsettingFn.wwKkF);
	for (var i = 0; i < Exception.length; i++) {
	  var styleText = HashO[i].style.cssText;
	  styleText = styleText.replace("background-color: " + pknyx + " !important" , '');
		  HashO[i].style.cssText = HashO[i].style.cssText;
	  
	}
	}
	
	
  };
  andiUA.VmzyF = function(KzmEy, newElems) {
andiUA.TUAsettingFn.CUWyj = andiUA.TUAsettingFn.CUWyj+ ',option';
    var newElems = newElems || "";
    KzmEy == "black" ? pknyx = "rgb(255, 255, 255)" : pknyx = "rgb(0, 0, 0)";
    KzmEy == "black" ? zmpAd = "rgb(0, 0, 0)" : zmpAd = "rgb(255, 255, 255)";
    KzmEy == "black" ? BjgnQ = "rgb(255, 216, 0)" : BjgnQ = "blue";
    if (!UA1("#aXDkY")) {
      andizxc("head").append('<style id="aXDkY">' + andiUA.TUAsettingFn.CUWyj + "{color: " + pknyx + " !important;} ::-webkit-input-placeholder {color: " + pknyx + " !important;}:-moz-placeholder {color: " + pknyx + " !important;}::-moz-placeholder {color: " + pknyx + " !important;}:-ms-input-placeholder { color: white !important; }</style>");
    }
    if (!UA1("#TUAandihighLightlink").thasClass("xJGcA")) {
      andizxc("#TUAandihighLightlink").click();
    }
	
    if (newElems == "") {
      var oaxRm = UA(andiUA.TUAsettingFn.evVJm);
      var tQXhq = UA(andiUA.TUAsettingFn.CUWyj);
      var gHTvn = UA(andiUA.TUAsettingFn.HashO);
      var rKXjc = UA(andiUA.TUAsettingFn.mfEXF);
      var OgKfT = UA('img, [role="img"]');
      var DQWJx = UA("[data-andiallelmwithtext]");
    } else {
      var oaxRm = UA(andiUA.TUAsettingFn.evVJm);
      var tQXhq = UA('select[andiruns="' + andiUA.tqmQG + '"],option[andiruns="' + andiUA.tqmQG + '"],textarea[andiruns="' + andiUA.tqmQG + '"],button[andiruns="' + andiUA.tqmQG + '"],[role="button"][andiruns="' + andiUA.tqmQG + '"], input[andiruns="' + andiUA.tqmQG + '"]');
      var gHTvn = UA('a[andiruns="' + andiUA.tqmQG + '"] ,a *[andiruns="' + andiUA.tqmQG + '"],h1[andiruns="' + andiUA.tqmQG + '"] ,h2[andiruns="' + andiUA.tqmQG + '"] ,h3[andiruns="' + andiUA.tqmQG + '"] ,h4[andiruns="' + andiUA.tqmQG + '"] ,h5[andiruns="' + andiUA.tqmQG + '"],h6[andiruns="' + andiUA.tqmQG + '"] ,h1 *[andiruns="' + andiUA.tqmQG + '"],h2 *[andiruns="' + 
      andiUA.tqmQG + '"],h3 *[andiruns="' + andiUA.tqmQG + '"],h4 *[andiruns="' + andiUA.tqmQG + '"],h5 *[andiruns="' + andiUA.tqmQG + '"],h6 *[andiruns="' + andiUA.tqmQG + '"],[role="heading"][andiruns="' + andiUA.tqmQG + '"],[role="heading"] *[andiruns="' + andiUA.tqmQG + '"]');
      var rKXjc = UA('button[andiruns="' + andiUA.tqmQG + '"],[role="button"][andiruns="' + andiUA.tqmQG + '"],[type="button"][andiruns="' + andiUA.tqmQG + '"],[type="submit"][andiruns="' + andiUA.tqmQG + '"],[type="image"][andiruns="' + andiUA.tqmQG + '"]');
      var OgKfT = UA('img[andiruns="' + andiUA.tqmQG + '"], [role="img"][andiruns="' + andiUA.tqmQG + '"]');
      var DQWJx = UA('[data-andiallelmwithtext][andiruns="' + andiUA.tqmQG + '"]');
    }
    andiUA.UZBHD(pknyx, zmpAd, BjgnQ, oaxRm, tQXhq, gHTvn, rKXjc, DQWJx);
    UA("iframe").forEach(function(el, index) {
      try {
        andizxc(el).contents().find("#aXDkY").remove();
        andizxc(el).contents().find("head").append('<style id="aXDkY">' + andiUA.TUAsettingFn.CUWyj + "{color: " + pknyx + " !important;} ::-webkit-input-placeholder {color: " + pknyx + " !important;}:-moz-placeholder {color: " + pknyx + " !important;}::-moz-placeholder {color: " + pknyx + " !important;}:-ms-input-placeholder { color: white !important; }</style>");
        var blquc = andizxc(el).contents().find(andiUA.TUAsettingFn.evVJm);
        var XIDrL = andizxc(el).contents().find(andiUA.TUAsettingFn.CUWyj);
        var Sncuh = andizxc(el).contents().find(andiUA.TUAsettingFn.HashO);
        var BUzwL = andizxc(el).contents().find(andiUA.TUAsettingFn.mfEXF);
        var XEPPN = andizxc(el).contents().find("[data-andiallelmwithtext]");
        andiUA.UZBHD(pknyx, zmpAd, BjgnQ, blquc, XIDrL, Sncuh, BUzwL, XEPPN);
      } catch (ANDIerr) {

      }
    });
  };
  andiUA.UZBHD = function(pknyx, zmpAd, BjgnQ, evVJm, CUWyj, HashO, mfEXF, TUAedecm) {
    (function() {
		//CUWyj = CUWyj + 'option';
		
      for (var i = 0; i < evVJm.length; i++) {
        if (!andizxc(evVJm[i]).is(CUWyj) &&!andizxc(evVJm[i]).is(CUWyj) &&!andizxc(evVJm[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(evVJm[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * ,.wrapfocusonarea *, #RXIxq * ,#jilVt, #VseDf , #VseDf *, #jilVt *, #elPMJ, #gkzUY *") && !andizxc(evVJm[i]).is(andiUA.TUAsettingFn.wwKkF)) {
          evVJm[i].style.cssText = evVJm[i].style.cssText + " background-color: " + zmpAd + " !important";
        }
        if (!andizxc(evVJm[i]).is(andiUA.TUAsettingFn.wwKkF) && andiUA.TUAsettingFn.QDpzq && !andizxc(evVJm[i]).is(".wrapfocusonarea *, #jilVt *, #elPMJ, #gkzUY *, #VseDf , #VseDf *")) {
          evVJm[i].style.cssText = evVJm[i].style.cssText + " background-image: none !important;";
        }
      }
      for (var i = 0; i < TUAedecm.length; i++) {
        if (!andizxc(TUAedecm[i]).is(CUWyj) && !andizxc(TUAedecm[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(TUAedecm[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * ,.wrapfocusonarea *, #RXIxq * ,#jilVt,  #VseDf , #VseDf *, #jilVt *, #elPMJ, #gkzUY *") && !andizxc(TUAedecm[i]).is(andiUA.TUAsettingFn.wwKkF)) {
          TUAedecm[i].style.cssText = TUAedecm[i].style.cssText + " color: " + pknyx + " !important";
        }
      }
      for (var i = 0; i < CUWyj.length; i++) {
        if (!andizxc(CUWyj[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(CUWyj[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * ,.wrapfocusonarea *, #RXIxq * ,#jilVt, #VseDf , #VseDf *, #jilVt *, #elPMJ, #gkzUY *") && !andizxc(CUWyj[i]).is(andiUA.TUAsettingFn.wwKkF)) {
          //CUWyj[i].style.cssText = CUWyj[i].style.cssText + " color:" + pknyx + " !important; border: 1px solid " + pknyx + " !important;";
          CUWyj[i].style.cssText = CUWyj[i].style.cssText + " !important; border: 1px solid " + pknyx + " !important;";
        }
      }
      for (var i = 0; i < HashO.length; i++) {
        if (!andizxc(HashO[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(HashO[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * ,.wrapfocusonarea *, #RXIxq * ,#jilVt, #VseDf , #VseDf *, #jilVt *, #elPMJ, #gkzUY *") && !andizxc(HashO[i]).is(andiUA.TUAsettingFn.wwKkF)) {
          HashO[i].style.cssText = HashO[i].style.cssText + " color: " + BjgnQ + " !important";
        }
      }
      if (andiUA.TUAsettingFn.IazTO) {
        var SdmDC = UA(andiUA.TUAsettingFn.SdmDC);
        for (var i = 0; i < SdmDC.length; i++) {
          if (!andizxc(SdmDC[i]).is(andiUA.TUAsettingFn.wwKkF) && !andizxc(SdmDC[i]).is("#NavigateWithLettersDonshowanymore, #wSOJP, #wSOJP * ,.wrapfocusonarea *, #RXIxq * ,#jilVt, #VseDf , #VseDf *, #jilVt *, #elPMJ, #gkzUY *") && !andizxc(SdmDC[i]).is(andiUA.TUAsettingFn.wwKkF)) {
            SdmDC[i].src = "a";
          }
        }
      }
    })();
  };
  andiUA.resetAllColors = function(notresetmenu) {
    notresetmenu = notresetmenu || "";
    andiUA.removeStorageItem("lobQs");
    andiUA.removeStorageItem("SYIen");
    andiUA.removeStorageItem("xqNoE");
    andiUA.removeStorageItem("xNWTD");
    andiUA.removeStorageItem("EjAoO");
    andiUA.removeStorageItem("kItEx");
    if (UA1("#aXDkY")) {
      UA1("#aXDkY").zOhhK();
    }
    if (UA1("#notColorChangeBlackStyle")) {
      UA1("#notColorChangeBlackStyle").zOhhK();
    }
    if (notresetmenu != "notresetmenu") {
      if (UA1("#LightHighContrastMenuStyle")) {
        UA1("#LightHighContrastMenuStyle").zOhhK();
      }
      if (UA1("#highContrastMenuStyle")) {
        UA1("#highContrastMenuStyle").zOhhK();
      }
    }
    setTimeout(function() {
      if (UA1("#svgtextColorChangeUnderline")) {
        UA1("#svgtextColorChangeUnderline").removeAttribute("style");
      }
      if (UA1("#svgtitleColorChangeUnderline")) {
        UA1("#svgtitleColorChangeUnderline").removeAttribute("style");
      }
      if (UA1("#svgColorChangeUnderline")) {
        UA1("#svgColorChangeUnderline").removeAttribute("style");
      }
    }, 350);
    andiUA.AqzoU("NtzHe");
    andiUA.AqzoU("BjgnQ");
    andiUA.AqzoU("zmpAd");
  };
  andiUA.allEvents = function() {

    function setSpace(corrnetVal) {
      if (UA1("#MPAmn")) {
        UA1("body").setAttribute("tryCostumColor", "true");
        if (UA1("#andiLineHeightStyle")) {
          UA1("#andiLineHeightStyle").zOhhK();
        }
        corrnetVal = corrnetVal / 10 * 100 + 100;
        andiUA.wrEKv(corrnetVal);
      } else {
        if (UA1("#jqTGZ")) {
          UA1("body").setAttribute("tryCostumColor", "true");
          if (UA1("#andispaceWordStyle")) {
            UA1("#andispaceWordStyle").zOhhK();
          }
          andiUA.lAmJv(corrnetVal);
        } else {
          UA1("body").setAttribute("tryCostumColor", "true");
          if (UA1("#andispaceLetterStyle")) {
            UA1("#andispaceLetterStyle").zOhhK();
          }
          andiUA.rtyQb(corrnetVal);
        }
      }
    }
    eventOn("click", ".UAaddpxtospace", function() {
      var max = this.nextSibling.getAttr("max");
      var corrnetVal = this.nextSibling.value;
      corrnetVal = parseInt(corrnetVal);
      if (corrnetVal < max) {
        this.nextSibling.value = parseInt(corrnetVal) + 1;
      }
      setSpace(corrnetVal);
      andiUA.TUAsrMsg(andiUA.KNTQg.bbb460);
    });
    eventOn("click", ".UAremovepxtospace", function() {
      var min = this.previousSibling.getAttr("min");
      var corrnetVal = this.previousSibling.value;
      if (corrnetVal > min) {
        this.previousSibling.value = parseInt(corrnetVal) - 1;
      }
      setSpace(corrnetVal);
      andiUA.TUAsrMsg(andiUA.KNTQg.bbb459);
    });
    var UAisSelectSetsopen = false;
    eventOn("click", '.IdrLU input, .IdrLU [role="button"]:not(.AueIG):not(.Awzjy)', function(e) {
      var FtTIP = this;
      UA(".tHEWd").forEach(function(VnIxP, i) {
        VnIxP.zOhhK();
      });
      var setNumber = localStorage.getItem("UASetnumber");
      setTimeout(function() {
        if (setNumber != "null" && setNumber != null && setNumber != "0") {
          setNumber = parseInt(setNumber);
          var c = andiUA.listOfSets[setNumber - 1];
          if (c.indexOf(FtTIP.id + "2") == -1) {
            if (FtTIP.thasClass("vKDQY")) {
              andiUA.removeStorageItem("UASetnumber");
              if (UA1("#UserChooseSetAddMoreOptionHeader") != null) {
                UA1("#UserChooseSetAddMoreOptionHeader").zOhhK();
              }
              UA1("#PhVFO").style.display = "none";
              UA1("#LHRwG").style.display = "block";
              UA1("#lWMeB").style.display = "none";
              UA("#VbcHu > div").forEach(function(ldTmG, i) {
                ldTmG.addCss({"display":""});
              });
            }
          }
        } else {
          if (FtTIP.thasClass("vKDQY")) {
            UA1("#LHRwG").style.display = "block";
            UA1("#lWMeB").style.display = "none";
            UA1("#PhVFO").style.display = "none";
          } else {
            if (UA(".vKDQY").length == 0) {
              UA1("#LHRwG").style.display = "none";
              UA1("#lWMeB").style.display = "block";
              UA1("#PhVFO").style.display = "block";
              andiUA.removeStorageItem("UASetnumber");
            }
          }
        }
        if (UA(".vKDQY").length > 0) {
          andiUA.createStorageItem("vKDQY", "yes");
        }
      }, 200);
    });
    eventOn("click", "#lWMeB", function() {
      if (this.thasClass("oFDPV")) {
        this.tremoveClass ("oFDPV");
        this.taddClass ("kgXCx");
        this.addCss({"background-color":""});
        this.style.cssText = this.style.cssText.replace("color", "");
        UA1("#lWMeB .TUAseeActiveBasicAcccessibilityIcon").OLcMJ({opacity:1}, 0.750);
        localStorage.removeItem("VWHYF");
        if (UA1("#JPRSV").thasClass("vKDQY")) {
          andiUA.frhQA();
        }
        if (UA1("#TUAtoFontArial").thasClass("vKDQY")) {
          UA1("#TUAtoFontArial").click();
        }
        if (UA1("#EXRcw").thasClass("vKDQY")) {
          UA1("#EXRcw").click();
        }
        if (UA1("#TUAandihighLightlink").thasClass("vKDQY")) {
          UA1("#TUAandihighLightlink").click();
        }
      } else {
        this.tremoveClass ("kgXCx");
        this.taddClass ("oFDPV");
        this.style.cssText = this.style.cssText + "color:#fff !important";
        UA1("#lWMeB .TUAseeActiveBasicAcccessibilityIcon").OLcMJ({opacity:0}, 0.750);
        andiUA.createStorageItem("TUASizeText", 2);
        andiUA.PFYhH(2);
        andiUA.checkactiveSizeTextBtn(2);
        andiUA.PwzIv(2);
        if (!UA1("#TUAtoFontArial").thasClass("vKDQY")) {
          UA1("#TUAtoFontArial").click();
        }
        if (!UA1("#TUAandihighLightlink").thasClass("vKDQY")) {
          UA1("#TUAandihighLightlink").click();
        }
        if (!UA1("#EXRcw").thasClass("vKDQY")) {
          UA1("#EXRcw").click();
        }
        andiUA.nAtDr(andiUA.KNTQg.UAtdr205);
        localStorage.setItem("VWHYF", "yes");
      }
    });
    var AoxRL = localStorage.getItem("VWHYF");
    if (AoxRL == "yes") {
      UA1("#lWMeB").click();
    }
    eventOn("keydown", "#jilVt [TUAheaderbarbtn]", function(UAenv) {
      var FtTIP = this;
      var SsnuB = UAenv.keyCode;
      if (UAenv.keyCode == 13) {
        UA1("#VbcHu").nextSibling.addAttr({"tabindex":"0"});
        UA1("#VbcHu").nextSibling.focus();
      }
    });
    eventOn("click", "#wSOJP .andicloseNavigateWithLetters", function(e) {
      if (UA1("#TUAnavigateWithLetters").thasClass("vKDQY")) {
        UA1("#TUAnavigateWithLetters").click();
      }
    });
    document.addEventListener("keydown", function(TUAe) {
      if (TUAe.keyCode == 81 && (TUAe.ctrlKey || TUAe.metaKey)) {
        if (UA1("#WBNCR") != null) {
          UA1("#WBNCR").click();
        }
      }
      if (TUAe.which == 27) {
        if (UA1("#eHFXi") !== null) {
          andiUA.removeStorageItem("cameraTypeLetter");
          UA1("#eHFXi").zOhhK();
          document.body.style.height = "";
        }
        if (UA("#panelToShowTextCloseBtn").length > 0) {
          UA1("#panelToShowTextCloseBtn").click();
          andiUA.TUAsrMsg(andiUA.KNTQg.DiIyH);
        }
        if (UA1("#KINwA") !== null) {
          UA1("#KINwA").click();
          setTimeout(function() {
            UA(".MBtxi,.Yhdpx").forEach(function(VnIxP, i) {
              VnIxP.zOhhK();
            });
          }, 200);
        }
        if (UA(".Bvuob").length > 0) {
          UA(".Bvuob").forEach(function(VnIxP, i) {
            VnIxP.zOhhK();
          });
          UA1("#NMqnM").zOhhK();
          if (ERDKq != undefined) {
            UA1(ERDKq).focus();
          }
          andiUA.TUAsrMsg(iArRP.DiIyH);
        }
      }
      if (TUAe.keyCode == 112) {
        TUAe.preventDefault();
        andiUA.andiGetUserGuide();
      }
      if (TUAe.keyCode == 121) {
        TUAe.preventDefault();
        andiUA.ermtR();
        andiUA.resizewindow();
      }
    });
    eventOn("click", "#highContrastMenu", function() {
      andiUA.runshighContrastMenu("highContrastMenu");
    });
    eventOn("click", "#menuMessageAlert .UAtextToShow, #menuMessageAlert .UAclick", function() {
      this.taddClass ("TUAhighlight");
      if (this.thasClass("UAclick")) {
        this.tremoveClass ("UAclick");
        this.tremoveClass ("TUAhighlight");
      } else {
        this.taddClass ("UAclick");
      }
    });
    eventOn("mouseover", "#menuMessageAlert .UAtextToShow", function() {
      UA(".TUAhighlight:not(.UAclick)").forEach(function(VnIxP, i) {
        VnIxP.tremoveClass ("TUAhighlight");
      });
      this.taddClass ("TUAhighlight");
    });
    eventOn("mouseout", "#menuMessageAlert .UAtextToShow", function() {
      UA(".TUAhighlight:not(.UAclick)").forEach(function(VnIxP, i) {
        VnIxP.tremoveClass ("TUAhighlight");
      });
    });
    eventOn("click", "#TUAshowMainContent", function() {
      andiUA.runsTUAshowMainContent("TUAshowMainContent");
    });
    eventOn("click", "#TUAreadsAloud", function() {
      andiUA.runsTUAreadsAloud("TUAreadsAloud");
    });
    eventOn("click", "#UAeasyRead", function() {
      andiUA.runsUAeasyRead("UAeasyRead");
    });
    eventOn("keydown", '[type="number"]', function(UAenv) {
      var FtTIP = this;
      setTimeout(function() {
        andiUA.TUAsrMsg(FtTIP.value);
      }, 50);
    });
    eventOn("click", ".andicloseSaveOption", function(e) {
      if (UA1("#MvQtQ") !== null) {
        UA1("#MvQtQ").zOhhK();
      }
      if (UA1("#NWNWn") !== null) {
        UA1("#NWNWn").zOhhK();
      }
      if (UA1("#mvutM") !== null) {
        UA1("#mvutM").focus();
      }
    });
    eventOn("click", "#andiCloseSaveBtn", function(e) {
      UA1(".andicloseSaveOption").click();
    });
    eventOn("click", "#LNHvo", function(UAenv) {
      andiUA.andiGetUserGuide();
    });
    eventOn("click", "#andisetlang", function(UAenv) {
      setTimeout(function() {
        var ANDIcurrLang = localStorage.getItem("XOVJB");
        if (ANDIcurrLang != null && ANDIcurrLang != "he" && ANDIcurrLang != "ar" || UA1("html").getAttr("vFaKz") != "ar" && UA1("html").getAttr("vFaKz") != "he") {
          UA1("#andiMenuLangMiddleBarPart1 .andiMenuLangMiddleBarBackBtn").innerHTML = '<img class="andimenucode" style="margin: -10px 0 0px -5px;" src="' + andiUA.KpAEX + '/images/backArrow.png" alt=""/>';
        }	
      }, 350);
	  setTimeout(function() {
		if(andizxc('#jilVt').css('right') == '0px'){
			UA1('#andiMenuLangMiddleBarSaveBtn').style.left = 'auto';
			UA1('#andiMenuLangMiddleBarSaveBtn').style.right = '0px';
		} else {
			UA1('#andiMenuLangMiddleBarSaveBtn').style.left = '0px';
			UA1('#andiMenuLangMiddleBarSaveBtn').style.right = 'auto';
		}	
      }, 500);
    });
    window.addEventListener("resize", function(UAenv) {
      andiUA.resizewindow();
    });
    eventOn("click", "#jilVt #cWIDE #PcvgW", function() {
      UA1("#lWMeB").tremoveClass ("oFDPV");
      UA1("#lWMeB").taddClass ("kgXCx");
      if (localStorage.getItem("UA2bigMenu") == "true") {
        UA1("#iLSlI").click();
      }
      if (localStorage.getItem("highContrastMenu") == "yes") {
        UA1("#highContrastMenu").click();
      }
      UA(".Awzjy").forEach(function(VnIxP, i) {
        VnIxP.click();
      });
      var tHEWd = localStorage.getItem("tHEWd");
      var andiislogin = localStorage.getItem("andiislogin");
      var UAsizeLocalStorage = localStorage.getItem("UAsizeLocalStorage");
      var SQoLG = localStorage.getItem("SQoLG");
      var XOVJB = localStorage.getItem("XOVJB");
      var uiWAD = localStorage.getItem("uiWAD");
      var vKDQY = localStorage.getItem("vKDQY");
      localStorage.removeItem("TUAprint");
      localStorage.removeItem("andiislogin");
      localStorage.removeItem("biggestText");
      localStorage.removeItem("ScJKe");
      localStorage.removeItem("TUASizeText");
      localStorage.removeItem("JPRSV");
      localStorage.removeItem("xPEGE");
      localStorage.removeItem("TUAalignRight");
      localStorage.removeItem("TUAalignLeft");
      localStorage.removeItem("andiLineHeightStyle");
      localStorage.removeItem("KwAGJ");
      localStorage.removeItem("TUAspaceLetter");
      localStorage.removeItem("TUAspaceWord");
      localStorage.removeItem("WXACf");
      localStorage.removeItem("TUAwikipedia");
      localStorage.removeItem("TUAstopSliders");
      localStorage.removeItem("TUAstopGif");
      localStorage.removeItem("TUAandirasheTevot");
      localStorage.removeItem("andihighLightlink");
      localStorage.removeItem("BBEINAreaBtn");
      localStorage.removeItem("epilepsy");
      localStorage.removeItem("rwRbL");
      localStorage.removeItem("advancedSupportForScreenReader");
      localStorage.removeItem("andihighLightFocus");
      localStorage.removeItem("navigateWithLetters");
      localStorage.removeItem("gcFQn");
      localStorage.removeItem("mzWNy");
      localStorage.removeItem("TUAwhiteContrast");
      localStorage.removeItem("EjAoO");
      localStorage.removeItem("kItEx");
      localStorage.removeItem("xqNoE");
      localStorage.removeItem("xNWTD");
      localStorage.removeItem("lobQs");
      localStorage.removeItem("SYIen");
      localStorage.removeItem("highContrastMenu");
      localStorage.removeItem("VWHYF");
      andiUA.createStorageItem("tHEWd", tHEWd);
      andiUA.createStorageItem("andiislogin", andiislogin);
      andiUA.createStorageItem("UAsizeLocalStorage", UAsizeLocalStorage);
      andiUA.createStorageItem("SQoLG", SQoLG);
      andiUA.createStorageItem("XOVJB", XOVJB);
      andiUA.createStorageItem("uiWAD", uiWAD);
      andiUA.createStorageItem("vKDQY", vKDQY);
      UA1("#fjaun").tremoveAttr("newdirecation");
      if (UA1('[value="' + UA1("html").getAttr("vFaKz") + '"]') != null) {
        UA1('[value="' + UA1("html").getAttr("vFaKz") + '"]').addAttr({"selected":"selected"});
      }
      andiUA.nwGbg();
      if (andiUA.DOwbI == "ltr") {
        UA1("#jilVt").style.right = "auto";
        UA1("#jilVt").OLcMJ({"left":0}, 0.5);
      } else {
        UA1("#jilVt").style.left = "auto";
        UA1("#jilVt").OLcMJ({"right":0}, 0.5);
      }
    });
    eventOn("click", '#jilVt #VbcHu [role="button"]', function() {
      var numverOfStep = parseFloat(this.getAttr("tuaheaderbarbtn"));
      numverOfStep = 4 - numverOfStep;
      andiUA.TUAsrMsg(andiUA.KNTQg.bbb373 + " " + numverOfStep + " " + andiUA.KNTQg.bbb374);
      if (UA1("#wrapUserChooseSet")) {
        UA1("#wrapUserChooseSet").zOhhK();
      }
      UA('#jilVt #VbcHu [role="button"]').forEach(function(VnIxP, i) {
        VnIxP.removeAttribute("andiactivetab");
      });
      this.addAttr({"andiactivetab":"true"});
      var TUAheaderbarbtn = this.getAttribute("TUAheaderbarbtn");
      var headerBarMarkSelected = UA("#jilVt #VbcHu [headerBarMarkSelected]");
      for (var a = 0; a < headerBarMarkSelected.length; a++) {
        headerBarMarkSelected[a].style.backgroundColor = "";
      }
      UA1('[headerBarMarkSelected="' + TUAheaderbarbtn + '"]').style.backgroundColor = "#FF4081";
    });
    eventOn("keydown", '#jilVt #VbcHu [role="button"]', function(e) {
      if (e.keyCode == 13) {
        this.click();
      }
    });
    eventOn("click", "#ciZJc", function() {
      UA1("#QlvZw").tremoveAttr("andifirsttime");
      UA1("#QlvZw").addAttr({"aria-expanded":"true"});
      andiUA.createStorageItem("andiAllOptionsMenuOpen", "on");
      setTimeout(function() {
        UA1("#openTextOption").OLcMJ({"opacity":1}, 0.200);
        UA1("#TUAopenContentOption").OLcMJ({"opacity":1}, 0.300);
        UA1("#openColorOption").OLcMJ({"opacity":1}, 0.300);
        UA1("#TUAopenNavigationOption").OLcMJ({"opacity":1}, 0.350);
        UA1("#FbKLK").OLcMJ({"opacity":1}, 0.450);
      }, 350);
      andiUA.resizewindow();
      UA1("#ciZJc").taddClass ("andystayopen");
    });
    eventOn("click", '#fvLXm > div > [role="button"]', function() {
      var thisOptionMenu = this.nextSibling;
      UA('#VbcHu [role="button"], #cWIDE [role="button"],#ciZJc [role="button"], #fvLXm > div > [role="button"]').forEach(function(VnIxP, i) {
        VnIxP.addAttr({"tYlBy":"false", "tabindex":"-1"});
      });
      var categoryName = this.nextSibling.id == "yIiKG" ? "Text adjust" : this.nextSibling.id == "ratYL" ? "Content assist" : this.nextSibling.id == "vbCoe" ? "Color adjust" : "Device support";
      thisOptionMenu.addCss({"display":"block"});
      var resizeMenuAccibilityIsOn = localStorage.getItem("resizeMenuAccibility");
      thisOptionMenu.querySelector(".ZDMId").addAttr({"tYlBy":"true", "tabindex":"-1"});
      thisOptionMenu.querySelector(".ZDMId").focus();
      thisOptionMenu.querySelector(".bkVMl").addAttr({"tabindex":"0"});
      thisOptionMenu.querySelector(".bkVMl").focus();
      thisOptionMenu.querySelector(".AueIG").addAttr({"tYlBy":"true", "tabindex":"0"});
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2166 + " " + thisOptionMenu.querySelector('[role="heading"]').innerText + ". " + andiUA.KNTQg.UAtdr2167);
      andiUA.resizewindow();
      UA1("#VbcHu").addCss({"z-index":"0"});
      var FrDLf = localStorage.getItem("FrDLf");
      if (FrDLf == "left") {
        thisOptionMenu.addCss({"left":"auto"});
        thisOptionMenu.OLcMJ({"top":"30px", "height":"575px", "opacity":"1", "right":"0px"}, 0.25);
      } else {
        if (FrDLf == "right") {
          thisOptionMenu.addCss({"right":"auto"});
          thisOptionMenu.OLcMJ({"top":"30px", "height":"575px", "opacity":"1", "left":"0px"}, 0.25);
        } else {
          if (FrDLf == null || FrDLf == "null") {
            if (/*andiUA.DOwbI == "ltr"*/UA1('#xIRDN').getCss('left') == '0px'){
              if (thisOptionMenu.id == "oGNab" || thisOptionMenu.id == "vbCoe") {
                thisOptionMenu.addCss({"left":"auto"});
                setTimeout(function() {
                  thisOptionMenu.OLcMJ({"top":"30px", "height":"575px", "opacity":"1", "left":"0px"}, 0.35);
                }, 10);
              } else {
                thisOptionMenu.addCss({"right":"auto"});
                setTimeout(function() {
                  thisOptionMenu.OLcMJ({"top":"30px", "height":"575px", "opacity":"1", "left":"0px"}, 0.25);
                }, 10);
              }
            } else {
              if (thisOptionMenu.id == "oGNab" || thisOptionMenu.id == "vbCoe") {
                thisOptionMenu.addCss({"left":"auto"});
                setTimeout(function() {
                  thisOptionMenu.OLcMJ({"top":"30px", "height":"575px", "opacity":"1", "right":"0px"}, 0.35);
                }, 10);
              } else {
                thisOptionMenu.addCss({"left":"auto"});
                setTimeout(function() {
                  thisOptionMenu.OLcMJ({"top":"30px", "height":"575px", "opacity":"1", "right":"0px"}, 0.25);
                }, 10);
              }
            }
          }
        }
      }
    });
    eventOn("click", ".AueIG", function() {
      var FtTIP = this;
      UA('#VbcHu [role="button"], #cWIDE [role="button"],#ciZJc [role="button"], #fvLXm > div > [role="button"]').forEach(function(VnIxP, i) {
        VnIxP.addAttr({"tYlBy":"true", "tabindex":"0"});
      });
      FtTIP.closest(".IdrLU").OLcMJ({"opacity":"0"}, 0.350);
      setTimeout(function() {
        FtTIP.closest(".IdrLU").addCss({"display":"", "width":"", "height":"", "top":"", "right":""});
      }, 351);
      UA1("#VbcHu").addCss({"z-index":"2"});
      if (UA1("#TUAclosespace") !== null) {
        UA1("#TUAclosespace").click();
      }
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2191);
      andiUA.dAmvd();
    });
    eventOn("click", " #NtzHe,#BjgnQ, #zmpAd, #TUAspaceLines , #TUAspaceLetter , #TUAspaceWords,  #gkzUYBtn", function() {
      andiUA.CbgoY(this);
    });
    eventOn("click", "#xIRDN", function() {
      if (!andiUA.ANDIisMoving) {
        andiUA.ermtR();
        andiUA.resizewindow();
      }
    });
    eventOn("click", "#JlUMY input", function() {
      if (UA1("#TUAclosespace") !== null) {
        UA1("#TUAclosespace").click();
      }
      UA(".AueIG").forEach(function(VnIxP, i) {
        VnIxP.click();
      });
      andiUA.ermtR();
      andiUA.resizewindow();
    });
    eventOn("click", ".Awzjy", function() {
      var FtTIP = this;
      var categoryName = this.closest(".IdrLU").id == "yIiKG" ? "Text adjust" : this.closest(".IdrLU").id == "ratYL" ? "Content assist" : this.closest(".IdrLU").id ? "Color adjust" : "Device support";
      FtTIP.closest(".IdrLU").querySelectorAll(".vKDQY").forEach(function(el4, i) {
        if (el4.id == "JPRSV" || el4.id == "xPEGE") {
          UA1("#cGvHB").click();
        } else {
          if (el4.id == "TUAspaceLines") {
            UA1("#TUAspaceLines").tremoveClass ("vKDQY");
            UA1("#TUAspaceLines").tremoveClass ("xJGcA");
            if (UA1("#andiLineHeightStyle") !== null) {
              UA1("#andiLineHeightStyle").zOhhK();
            }
            andiUA.removeStorageItem("andiLineHeightStyle");
            andiUA.IVUio();
          } else {
            if (el4.id == "TUAspaceLetter") {
              UA1("#TUAspaceLetter").tremoveClass ("vKDQY");
              UA1("#TUAspaceLetter").tremoveClass ("xJGcA");
              if (UA1("#andispaceLetterStyle") !== null) {
                UA1("#andispaceLetterStyle").zOhhK();
              }
              andiUA.removeStorageItem("TUAspaceLetter");
              andiUA.GwlWc();
            } else {
              if (el4.id == "TUAspaceWords") {
                UA1("#TUAspaceWords").tremoveClass ("vKDQY");
                UA1("#TUAspaceWords").tremoveClass ("xJGcA");
                if (UA1("#andispaceWordStyle") !== null) {
                  UA1("#andispaceWordStyle").zOhhK();
                }
                andiUA.removeStorageItem("TUAspaceWord");
                andiUA.FFYgj();
              } else {
                if (el4.thasClass("vKDQY") && el4.id != "NtzHe" && el4.id !== "BjgnQ" && el4.id !== "zmpAd") {
                  el4.click();
                }
              }
            }
          }
        }  
      });
	  andiUA.AqzoU('NtzHe');
		andiUA.AqzoU('BjgnQ');
		andiUA.AqzoU('zmpAd');
      if (FtTIP.closest(".IdrLU").id == "vbCoe") {
        andiUA.resetAllColors();
      }
      andiUA.dAmvd();
    });
    eventOn("click", "#iLSlI", function(UAenv) {
      if (localStorage.getItem("UA2bigMenu") != "true") {
        UA1("head").appendHtml('<style id="TUAbigMenu">.andiOpenSubMenu{width:calc(15px * 1.3);height:calc(15px * 1.3)}#QSgtZ,#tUNGC{max-height:calc(510px * 1.3)!important}#Xyxvy,.Xyxvy{width:calc(30px * 1.3);height:calc(30px * 1.3)}#lWMeB:focus:after,#lWMeB:hover:after,#ADyWm:focus:after,#ADyWm:hover:after,#QlvZw:focus:after,#QlvZw:hover:after{margin-top:calc(5px * 1.3)!important;padding:calc(5px * 1.3)!important;width:calc(300px * 1.3)!important}@-webkit-keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}@-moz-keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}@-ms-keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}@keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}#jilVt,#PcvgW,#mvutM{-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#gMhQJ input[type=image],#TZwBB input[type=image]{width:calc(30px * 1.3);height:calc(30px * 1.3);padding:calc(6px * 1.3)}#ADyWm img{width:calc(23px * 1.3)!important}#jilVt,#jilVt *,#hayOK *,#BCaLN,#BCaLN *,#GRwhC{line-height:calc(20px * 1.3);font-size:calc(16px * 1.3)}#xIRDN img{width:calc(35px * 1.3);height:calc(35px * 1.3)}.TUAmakeBuggerMenu{font-size:calc(24px * 1.3)!important}#VbcHu>div>div>div:hover::before{border-left:calc(20px * 1.3) solid transparent!important;border-right:calc(20px * 1.3) solid transparent!important;border-top:calc(20px * 1.3) solid red!important}#VbcHu>div>div>div:focus:before{border-width:0 calc(100px * 1.3) calc(100px * 1.3)!important}[ktjXB]:focus:after,[ktjXB]:hover:after{border-radius:calc(1px * 1.3);margin-top:calc(5px * 1.3);padding:calc(5px * 1.3);top:calc(40px * 1.3);font-size:calc(16px * 1.3)!important}.KaxwEspace[ktjXB]:focus:after,.KaxwEspace[ktjXB]:hover:after{top:calc(-40px * 1.3)!important}#oECFzNoColor[ktjXB]:focus:after,#oECFzNoColor[ktjXB]:hover:after{width:calc(100px * 1.3);top:calc(40px * 1.3)!important;margin:0 calc(-24px * 1.3)}[andifirsttime]:focus:before,[andifirsttime]:hover:before{border-width:0 calc(100px * 1.3) calc(100px * 1.3)}[andifirsttime]:focus:after,[andifirsttime]:hover:after{border-radius:calc(1px * 1.3);right:calc(17px * 1.3);margin-top:calc(5px * 1.3);padding:calc(5px * 1.3);top:calc(40px * 1.3);width:calc(90px * 1.3)}#QlvZw:focus:after,#QlvZw:hover:after{right:calc(10px * 1.3)!important;top:calc(193px * 1.3)!important;left:auto}#ADyWm:focus:after,#ADyWm:hover:after{right:calc(10px * 1.3)!important;top:calc(97px * 1.3)!important}#lWMeB:focus:after,#lWMeB:hover:after{right:calc(10px * 1.3)!important;top:calc(140px * 1.3)!important;font-size:calc(16px * 1.3)!important}#VbcHu>div>div>div:focus:after,#VbcHu>div>div>div:hover:after{border-radius:calc(1px * 1.3);right:calc(10px * 1.3)!important;margin-top:calc(5px * 1.3);padding:calc(5px * 1.3);top:calc(40px * 1.3)}#uDFjQ,#uDFjQ a{padding:calc(2px * 1.3);font-size:calc(14px * 1.3)}#JlUMY:focus:after,#JlUMY:hover:after{left:calc(17px * 1.3)!important}#iLSlI img,#fjaun img{margin:calc(8px * 1.3) auto;width:calc(16px * 1.3)}#jilVt{width:calc(320px * 1.3)!important;box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#SQoLG{width:calc(320px * 1.3)}#SQoLG *{font-size:calc(16px * 1.3)}#SQoLGBigImgText{padding:calc(20px * 1.3) calc(5px * 1.3);font-size:calc(14px * 1.3)}#SQoLGBigImg{width:calc(320px * 1.3);height:calc(130px * 1.3);background-size:calc(78px * 1.3) calc(73px * 1.3)}#SQoLGBasicSetting{width:calc(300px * 1.3);height:calc(325px * 1.3);margin:calc(30px * 1.3) calc(10px * 1.3) calc(5px * 1.3);padding:calc(5px * 1.3) calc(17px * 1.3)}#SQoLGBasicSetting *{font-size:calc(14px * 1.3)}#SQoLGAgreeBtn{left:calc(20px * 1.3);bottom:calc(20px * 1.3);width:calc(155px * 1.3);height:calc(36px * 1.3);font-size:calc(16px * 1.3);line-height:calc(36px * 1.3);border-radius:calc(2px * 1.3)}#SQoLG .andilastparph{width:calc(215px * 1.3);margin:calc(13px * 1.3) calc(13px * 1.3) 0 0;font-size:calc(14px * 1.3)}#BVGhv{width:calc(320px * 1.3);height:calc(30px * 1.3);padding:calc(5px * 1.3)}#SQoLG input{width:calc(20px * 1.3);height:calc(20px * 1.3)}#uDFjQ{width:calc(320px * 1.3);height:calc(35px * 1.3);left:0}#jilVt #BEMFU{width:calc(320px * 1.3);height:calc(30px * 1.3)}#jilVt #VbcHu>div{line-height:calc(4px * 1.3);background-color:#03A9F4}#jilVt .DoyLq{height:calc(3px * 1.3);background-color:#03A9F4}#jilVt #VbcHu>div>div{width:calc(80px * 1.3);height:calc(64px * 1.3)}#jilVt #cWIDE{width:calc(320px * 1.3);height:calc(65px * 1.3);padding-top:calc(16px * 1.3)}#PcvgW,#mvutM{font-size:calc(15px * 1.3);line-height:calc(30px * 1.3);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);border-radius:calc(2px * 1.3);-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);margin:0 calc(5px * 1.3);padding:0 calc(3px * 1.3)}#LNHvo,#lWMeB,#KJMJHtab1middleHelp .TUAHelpskipbtn{-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#lWMeB,#LHRwG{font-size:calc(18px * 1.3);border-radius:calc(2px * 1.3);line-height:calc(30px * 1.3);height:calc(30px * 1.3)}#LHRwG{-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);width:calc(320px * 1.3)}#lWMeB{-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);padding:0 calc(10px * 1.3);width:calc(295px * 1.3)}#jilVt #cWIDE #PhVFO #lWMeB img{width:calc(25px * 1.3);margin:calc(6px * 1.3) calc(-2px * 1.3)}#jilVt #cWIDE #PhVFO #lWMeB img.TUAseeActiveBasicAcccessibilityIcon{margin:calc(6px * 1.3) calc(-2px * 1.3)}#jilVt #ciZJc{width:calc(320px * 1.3);height:calc(35px * 1.3);background-color:#fff;box-shadow:inset 0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#bZkqy{width:calc(320px * 1.3);height:calc(32px * 1.3)}#jilVt #ciZJc #QlvZw{margin:0 calc(10px * 1.3);font-size:calc(16px * 1.3);width:calc(300px * 1.3);height:calc(30px * 1.3);padding-top:calc(7px * 1.3)}#jilVt #ciZJc img{width:calc(14px * 1.3);height:calc(5px * 1.3);margin:calc(7px * 1.3) 128px 0 0}#jilVt #fvLXm{width:calc(323px * 1.3);height:calc(410px * 1.3);margin:0;padding-right:calc(6px * 1.3);padding-left:calc(6px * 1.3)}#jilVt #FbKLK{width:calc(320px * 1.3);height:calc(45px * 1.3);padding:8px calc(8px * 1.3) 0}#jilVt #FbKLK a{font-size:calc(14px * 1.3);line-height:calc(35px * 1.3)}#jilVt .IdrLU .FbKLK{width:calc(320px * 1.3);height:calc(35px * 1.3)}#jilVt #fvLXm .owUce p{line-height:calc(20px * 1.3);width:calc(133px * 1.3);height:calc(60px * 1.3);font-size:calc(18px * 1.3)!important}#jilVt #fvLXm .owUce img{width:calc(149px * 1.3);height:calc(149px * 1.3)}#VbcHu #jilVt .rZZEa .joMhk p{font-size:calc(16px * 1.3)!important;padding:calc(2px * 1.3) calc(3px * 1.3)}#jilVt #fvLXm .IdrLU{width:calc(338px * 1.3);height:calc(575px * 1.3)}#jilVt #fvLXm .khlBU .bkVMl{width:calc(320px * 1.3);height:calc(64px * 1.3);-webkit-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);-moz-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7)}#jilVt #fvLXm .khlBU .rZZEa{width:calc(320px * 1.3)}#jilVt #fvLXm .khlBU .vjEnr{width:calc(320px * 1.3);height:0;margin-top:calc(10px * 1.3)}#jilVt #fvLXm :focus,#cWIDE :focus{outline:#888 solid calc(1px * 1.3)!important}#jilVt #fvLXm .khlBU #MoexW{width:calc(300px * 1.3);height:calc(185px * 1.3);padding-top:calc(10px * 1.3)}#jilVt #fvLXm .khlBU #faSsr{width:calc(145px * 1.3)}#fvLXm .bnVjM{width:calc(149px * 1.3)!important;height:calc(148px * 1.3)!important}.LightHighContrastMenu #fvLXm .bnVjM{width:calc(149px * 1.3)!important;height:calc(122px * 1.3)!important}#YQger .KaxwEspace{width:calc(45px * 1.3);height:calc(35px * 1.3)}#aWgWOCloseBtn,#GRwhC .yukgZ,#KJMJHvikiResultsCloseBtn{height:calc(25px * 1.3)}#YQger .KaxwEspace img{width:calc(35px * 1.3);height:calc(25px * 1.3)}#fvLXm .suyYi img{margin:0 calc(3px * 1.3)!important}#fvLXm .suyYi{width:calc(150px * 1.3)!important;height:calc(110px * 1.3)!important}#fvLXm .bnVjM .zEGkT{margin:calc(10px * 1.3) auto 0;padding:0 calc(12px * 1.3)}#faSsr label{margin:calc(5px * 1.3) calc(15px * 1.3) 0;font-size:calc(13px * 1.3)}#HYACe{margin:0 calc(15px * 1.3);font-size:calc(16px * 1.3);height:calc(20px * 1.3);border-bottom:calc(1px * 1.3) solid #fff}#HYACe:before{font-size:calc(18px * 1.3);height:calc(20px * 1.3)}#HYACe option{width:calc(150px * 1.3);margin:0 calc(15px * 1.3);font-size:calc(16px * 1.3);height:calc(35px * 1.3);border-radius:calc(2px * 1.3)}#jilVt #fvLXm .khlBU #CrXug{width:calc(124px * 1.3);height:calc(50px * 1.3)}#jilVt #fvLXm .khlBU #WNAYU,#jilVt #fvLXm .khlBU #CrXug input[type=number],#jilVt #fvLXm .khlBU #jqTGZ{border:calc(1px * 1.3) solid #fff;height:calc(20px * 1.3)}#jilVt #fvLXm .khlBU #CrXug label{margin:calc(5px * 1.3) calc(15px * 1.3) 0;font-size:calc(13px * 1.3)}#CrXug input[type=number]:after{margin-left:calc(-17px * 1.3);margin-top:calc(12% * 1.3);font-size:calc(11px * 1.3)}#CrXug input[type=number]:before{margin-left:calc(-17px * 1.3);font-size:calc(11px * 1.3)}#PGaVc,#ylWRt{font-size:calc(13px * 1.3)}#WNAYU:after,#WNAYU:before,jqTGZ:after,jqTGZ:before{margin-left:calc(-17px * 1.3);font-size:calc(11px * 1.3)}#MoexW #TUAclosespace{margin:calc(5px * 1.3)}#YQger{width:calc(320px * 1.3)}#YQger .hjVeU,#YQger .IvEyQ{width:calc(115px * 1.3);height:calc(35px * 1.3);padding-top:calc(7px * 1.3);border-radius:calc(2px * 1.3)}#YQger .hjVeU{margin-left:calc(15px * 1.3)}#jilVt #fvLXm div.rZZEa>div.ltsXQ{width:calc(320px * 1.3);height:calc(100px * 1.3)}#jilVt #fvLXm div.rZZEa>div.ltsXQ img{height:calc(100px * 1.3)}#jilVt #fvLXm #ratYL,#jilVt #fvLXm #yIiKG{top:calc(220px * 1.3)}#jilVt #fvLXm #vbCoe,#jilVt #fvLXm #oGNab{bottom:calc(195px * 1.3)}#fvLXm .rZZEa .QybqI svg,#sDZbX,#cqUuD #YlCpH{bottom:calc(10px * 1.3)}#vbCoe div.bkVMl div.AueIG,#ratYL div.bkVMl div.AueIG,#oGNab div.bkVMl div.AueIG,#yIiKG div.bkVMl div.AueIG{width:calc(25px * 1.3)!important;height:calc(24px * 1.3)!important;font-size:calc(24px * 1.3);margin:calc(20px * 1.3) calc(10px * 1.3) calc(5px * 1.3)}#vbCoe div.bkVMl>div.xFWoP,#ratYL div.bkVMl>div.xFWoP,#oGNab div.bkVMl>div.xFWoP,#yIiKG div.bkVMl>div.xFWoP{height:calc(24px * 1.3)!important;font-size:calc(16px * 1.3);line-height:calc(64px * 1.3)}#fvLXm .rZZEa .LAsQk{width:calc(320px * 1.3);height:calc(102px * 1.3);padding-right:calc(7px * 1.3)}#EXRcw img,#TUAwhiteMouse img{width:calc(20px * 1.3)!important}#fvLXm .rZZEa .qXbVl img{margin:0 calc(5px * 1.3)}#fvLXm .rZZEa .qXbVl{box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5);width:calc(295px * 1.3)}#fvLXm .rZZEa .otNdX{width:calc(149px * 1.3);height:calc(60px * 1.3);font-size:calc(14px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#fvLXm .rZZEa .QybqI{width:calc(97px * 1.3);height:calc(95px * 1.3);font-size:calc(14px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5);margin-top:calc(7px * 1.3)}#gkzUY{height:calc(336px * 1.3);width:calc(170px * 1.3)}#gkzUY.JUWgG input{width:calc(56px * 1.3)!important;height:calc(56px * 1.3)!important;margin:0!important}#gkzUY.JUWgG{height:calc(332px * 1.3);width:calc(170px * 1.3);padding:0}#gkzUY.JUWgG>div>div{border:calc(1px * 1.3) solid #ededed;padding:calc(8px * 1.3) calc(12px * 1.3);width:calc(56px * 1.3)!important;height:calc(56px * 1.3)!important}#gkzUY .cLOVr{width:calc(170px * 1.3)!important;height:calc(56px * 1.3)!important}#gkzUY.JUWgG div input{width:calc(56px * 1.3);height:calc(54px * 1.3)}#wSOJP{width:100%}#wSOJP #klIYg,#wSOJP #JwXSG,#wSOJP #BCaLN{width:calc(640px * 1.3);height:calc(152px * 1.3)}#wSOJP #klIYg #FynQv{width:calc(640px * 1.3);height:calc(32px * 1.3)}#wSOJP #klIYg #FynQv .tlIvc{cursor:not-allowed;width:calc(55px * 1.3);height:calc(32px * 1.3);line-height:calc(32px * 1.3)}#wSOJP #klIYg #FynQv .tlIvc#bGFVi{margin-left:calc(10px * 1.3)}#wSOJP #klIYg #ONITw{width:calc(640px * 1.3);height:calc(80px * 1.3)}#wSOJP #klIYg #ONITw .NaTmy{width:calc(50px * 1.3);height:calc(50px * 1.3);margin:calc(20px * 1.3) 0 0 calc(2px * 1.3);line-height:calc(50px * 1.3);font-size:calc(20px * 1.3)}#wSOJP #klIYg #laCWS{width:calc(640px * 1.3);height:0;border:calc(1px * 1.3) solid #31C1EE}#wSOJP #klIYg #laCWS:after{top:100%;border-top:solid calc(12px * 1.3) #31C1EE;border-left:solid calc(12px * 1.3) transparent;border-right:solid calc(12px * 1.3) transparent}#wSOJP #klIYg #ONITw .NaTmy#XlqzP,#wSOJP #klIYg #ONITw .NaTmy#pEjkF{font-size:calc(25px * 1.3)}#wSOJP #klIYg #MOusc{margin-top:calc(12px * 1.3);width:calc(260px * 1.3)}#wSOJP #HzMFn{width:calc(400px * 1.3);height:calc(35px * 1.3)}.AueIG{width:calc(25px * 1.3)!important;height:calc(24px * 1.3)!important;font-size:calc(24px * 1.3);margin:calc(15px * 1.3) calc(10px * 1.3) 0}#oECFz{width:calc(300px * 1.3);height:calc(185px * 1.3)}#zHZQI{width:calc(223px * 1.3);height:calc(50px * 1.3);margin:20px 0 0}#zgJkZ{width:calc(50px * 1.3);height:calc(50px * 1.3);margin:20px 0 0}#zHZQI .oECFzColor{margin:calc(6px * 1.3) calc(3px * 1.3) calc(1px * 1.3);width:calc(22px * 1.3);height:calc(22px * 1.3);border-radius:calc(17px * 1.3)}#zgJkZ .oECFzColor{margin:calc(6px * 1.3) calc(3px * 1.3) calc(1px * 1.3);border:calc(1px * 1.3) solid #fff;width:calc(50px * 1.3);height:calc(50px * 1.3);border-radius:calc(50px * 1.3);font-size:calc(16px * 1.3);padding:calc(15px * 1.3) calc(12px * 1.3)}.nrnYA,.UAscreenReaderOnly,h3.zStNQ{height:calc(1px * 1.3)!important;width:calc(1px * 1.3)!important}h3.zStNQ{margin:0!important;font-size:calc(1px * 1.3)}.nrnYA,.UAscreenReaderOnly{margin:calc(-1px * 1.3)!important;font-size:calc(16px * 1.3)!important}.ORmKP,.ZWDCr,.vnbtL{height:calc(1px * 1.3);width:calc(1px * 1.3);font-size:calc(16px * 1.3)!important}.nrnYA:focus{margin:0!important;padding:0 calc(10px * 1.3)!important}.ORmKP{margin:calc(-1px * 1.3)}.ORmKP:focus{margin:0!important;padding:0 calc(10px * 1.3)!important}.ORmKP:active,.ORmKP:target{margin:0;padding:0 calc(10px * 1.3)}.vnbtL{margin:calc(-1px * 1.3)}.vnbtL:focus{margin:0!important;padding:0 calc(10px * 1.3)!important}.vnbtL:active,.vnbtL:target{margin:0}.ZWDCr{margin:calc(-1px * 1.3)}.ZWDCr:focus{margin:0;padding:0 calc(10px * 1.3)}#eHFXi{height:calc(226px * 1.3);width:100%!important;padding:calc(5px * 1.3)}#eHFXi #LXBSB{width:calc(663px * 1.3)}#eHFXi #ncSEc{margin:calc(5px * 1.3);padding:calc(5px * 1.3);border:calc(1px * 1.3) solid #333;-moz-border-radius:calc(5px * 1.3);-webkit-border-radius:calc(5px * 1.3)}#eHFXi div[role=button]{margin:0 calc(5px * 1.3) calc(5px * 1.3) 0;width:calc(30px * 1.3);height:calc(30px * 1.3);line-height:calc(40px * 1.3);border:calc(1px * 1.3) solid #222;-moz-border-radius:calc(5px * 1.3);-webkit-border-radius:calc(5px * 1.3)}#nSibfboard div[role=button].CRRSy,#eHFXi #nSibfboard div[role=button].QhFEO,#eHFXi .geviL{width:calc(70px * 1.3)!important}#nSibfboard div[role=button]:hover,#eHFXi #nSibfboard div[role=button]:focus{top:calc(1px * 1.3);left:calc(1px * 1.3)}#eHFXi #nSibfboard div[role=button].TZDKMpslock{width:calc(80px * 1.3)}#eHFXi #nSibfboard div[role=button].FiIOl{width:calc(55px * 1.3)}#eHFXi #nSibfboard div[role=button].IbElw{width:calc(95px * 1.3)}#eHFXi #nSibfboard div[role=button].TtZzB{width:calc(77px * 1.3)}#eHFXi #KJMJHLang div[role=button].jSpEZ{height:calc(30px * 1.3);width:calc(93px * 1.3)!important}#eHFXi #nSibfboard div[role=button].PkuNm{width:calc(548px * 1.3)}#eHFXi #KJMJHLang{height:calc(185px * 1.3);width:calc(95px * 1.3)!important}[id^=DRXXH]{width:calc(20px * 1.3);height:calc(20px * 1.3)}#PFaFV{padding:calc(10px * 1.3)!important;font-size:calc(16px * 1.3)!important}#WBNCR{height:calc(30px * 1.3)!important;margin-top:calc(20px * 1.3)!important}#syeKB{width:calc(300px * 1.3)}#wJebo,#HPZmg{border:calc(1px * 1.3) solid #fff;height:calc(100px * 1.3);margin:0 calc(3px * 1.3)}.Awzjy,.Awzjy img{width:calc(36px * 1.3);height:calc(36px * 1.3)}#ZJSXb,#nztwL{padding:calc(5px * 1.3);font-size:calc(14px * 1.3)}.Awzjy{margin:calc(14px * 1.3) 0 0 calc(5px * 1.3)!important}#aWgWOCloseBtn,#GRwhC .yukgZ{width:calc(25px * 1.3);padding:calc(5px * 1.3);font-size:calc(16px * 1.3)!important}#GRwhC{top:calc(5px * 1.3);width:calc(320px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.85);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.85);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.85);padding:0 0 calc(6px * 1.3)}#sAnbY{width:calc(320px * 1.3);height:calc(30px * 1.3)}#GRwhC #SLDoH{font-size:calc(16px * 1.3)!important;width:calc(170px * 1.3)!important;height:calc(35px * 1.3);padding:0 calc(5px * 1.3)}#GRwhC select{font-size:calc(16px * 1.3)!important;width:calc(80px * 1.3);height:calc(30px * 1.3)}#GRwhC #hayOK{width:calc(30px * 1.3);height:calc(30px * 1.3);padding:calc(6px * 1.3)}#GRwhC #iCVuF{height:calc(35px * 1.3);width:calc(310px * 1.3)!important;padding:0 calc(5px * 1.3);margin:0 calc(5px * 1.3)}#GRwhC #aWgWO{width:calc(310px * 1.3);margin:calc(5px * 1.3)}#GRwhC #aWgWO h3{font-size:calc(16px * 1.3)!important;padding:calc(5px * 1.3) 0;width:100%!important}#GRwhC #aWgWO p{font-size:calc(16px * 1.3)!important;padding:0}#GRwhC h2{font-size:calc(16px * 1.3)!important;padding:calc(5px * 1.3);width:calc(250px * 1.3)!important}#GRwhC hr{border:calc(1px * 1.3) solid #ccc!important}#aWgWOImgWrap{padding:calc(5px * 1.3)}#aWgWOImgWrap img{width:calc(40px * 1.3);height:calc(40px * 1.3)}#aWgWOTextWrap .companyName{margin:calc(5px * 1.3) 0}#bnKlS,#LAIbg{margin:0 calc(10px * 1.3);width:calc(300px * 1.3);padding-top:calc(7px * 1.3);height:calc(30px * 1.3)}#PSniF{width:calc(320px * 1.3);height:calc(85px * 1.3)}#osLFe{width:calc(320px * 1.3);height:calc(65px * 1.3);padding-top:calc(16px * 1.3)}#LNHvo{border-radius:calc(2px * 1.3);-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#YhDtt{width:calc(320px * 1.3);height:calc(35px * 1.3);box-shadow:inset 0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#LAIbg{font-size:calc(16px * 1.3)}#JPJBz{height:calc(444px * 1.3)}#QSgtZ :focus{outline:#888 solid calc(2px * 1.3)!important}#IFEiM{width:calc(320px * 1.3);height:calc(115px * 1.3);padding-top:calc(33px * 1.3)}#LNHvo{font-size:calc(19px * 1.3);border-top:calc(1px * 1.3) solid #fff;border-bottom:calc(1px * 1.3) solid #fff;padding:0 calc(10px * 1.3);width:calc(300px * 1.3);line-height:calc(50px * 1.3);height:calc(50px * 1.3)}#LNHvo img{width:calc(30px * 1.3);line-height:calc(50px * 1.3);padding-top:calc(14px * 1.3)}#bnKlS{font-size:calc(16px * 1.3)}#HxpCr .KSsgr .Zrljr,#HxpCr .KSsgr .VDmCM{padding:calc(5px * 1.3);font-size:calc(14px * 1.3);border-bottom:calc(1px * 1.3) solid #ccc}#HxpCr{height:calc(410px * 1.3);width:calc(338px * 1.3);font-size:calc(14px * 1.3)}#HxpCr .KSsgr{width:calc(318px * 1.3)}#HxpCr .KSsgr :focus{outline:#000 solid calc(1px * 1.3)}#HxpCr .KSsgr .VDmCM img{width:calc(15px * 1.3);top:calc(10px * 1.3)}#gAoCt{width:calc(320px * 1.3);height:calc(115px * 1.3)}#gAoCt #YIRzs{margin:calc(10px * 1.3);font-size:calc(16px * 1.3)}#tgGWn{width:calc(320px * 1.3);height:calc(30px * 1.3);padding:calc(5px * 1.3) calc(10px * 1.3)}#IULPc{width:calc(320px * 1.3);height:calc(325px * 1.3);padding:calc(3px * 1.3) calc(10px * 1.3)}#TwIfU{width:calc(320px * 1.3);height:calc(50px * 1.3)}#YFJzt,#yCrCd{height:calc(50px * 1.3);padding:calc(12px * 1.3) calc(10px * 1.3);font-size:calc(18px * 1.3)}#RmKVO{height:calc(85px * 1.3);width:calc(300px * 1.3);padding:calc(10px * 1.3) calc(10px * 1.3) 0;font-size:calc(14px * 1.3)}#PRxAh{width:calc(1820px * 1.3);margin-right:calc(22px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej{width:calc(245px * 1.3);height:calc(180px * 1.3);margin:0 calc(5px * 1.3)}#PRxAh .mJoej .wxYqU{width:calc(245px * 1.3);height:calc(75px * 1.3);font-size:calc(14px * 1.3);border-radius:calc(2px * 1.3) calc(2px * 1.3) 0 0;-moz-border-radius:calc(2px * 1.3) calc(2px * 1.3) 0 0;-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) 0 0}#PRxAh .mJoej .wxYqU .YrOTA{top:calc(10px * 1.3);width:calc(20px * 1.3);height:calc(20px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej .wxYqU .fEqjh{padding:calc(10px * 1.3) calc(25px * 1.3) 0 calc(15px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej .EbTkc{width:calc(245px * 1.3);height:calc(90px * 1.3);-webkit-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);-moz-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);padding:calc(20px * 1.3) calc(40px * 1.3) 0;font-size:calc(14px * 1.3);border-radius:0 0 calc(2px * 1.3) calc(2px * 1.3);-moz-border-radius:0 0 calc(2px * 1.3) calc(2px * 1.3);-webkit-border-radius:0 0 calc(2px * 1.3) calc(2px * 1.3)}#PRxAh .mJoej .EbTkc [class^=kkeiq]{width:calc(50px * 1.3);height:calc(50px * 1.3);-webkit-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);-moz-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);font-size:calc(14px * 1.3);margin:calc(2px * 1.3)}#PRxAh .mJoej .EbTkc input[type=text],#PRxAh .mJoej .EbTkc textarea{border-bottom:calc(1px * 1.3) solid #0288D1;width:calc(210px * 1.3);margin:0 calc(-24px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej .EbTkc .uPqNm{margin:calc(20px * 1.3) 0}#PRxAh .mJoej .EbTkc .uPqNm label{font-size:calc(14px * 1.3);margin-right:calc(-20px * 1.3)}#PRxAh .mJoej .EbTkc .uPqNm input[type=text]{height:calc(20px * 1.3);font-size:calc(14px * 1.3)}#LMkvg,#qlMvI{width:calc(3px * 1.3);height:calc(10px * 1.3)}#PRxAh .mJoej .EbTkc .uPqNm textarea{min-height:calc(40px * 1.3);font-size:calc(14px * 1.3);max-height:calc(40px * 1.3)}#NWNWn,#sreachForAcromanet,#wrapNavigateWithLetters{min-height:calc(145px * 1.3);left:calc(4px * 1.3);right:calc(4px * 1.3);border-radius:calc(2px * 1.3)}.KRUNI{font-size:calc(14px * 1.3);margin-right:calc(20px * 1.3)!important}#PRxAh .mJoej .EbTkc .KRUNI.veZPc,.hYaIS{font-size:calc(14px * 1.3)}[id^=QSgtZ]{width:calc(339px * 1.3)}#loadAndiSystem{width:calc(338px * 1.3);height:calc(640px * 1.3)}#MvQtQ{top:calc(30px * 1.3)}#NWNWn,#sreachForAcromanet{width:calc(296px * 1.3)}#wrapNavigateWithLetters{margin:calc(25px * 1.3) auto}#wrapNavigateWithLetters #NWNWntext{padding:calc(10px * 1.3) 20% 0;font-size:calc(16px * 1.3);height:calc(115px * 1.3)}#wrapNavigateWithLetters #NWNWntext ul li{padding:0 calc(35px * 1.3) 0 0}#wrapNavigateWithLetters .andicloseSaveOption{padding:calc(5px * 1.3);font-size:calc(20px * 1.3)}#NavigateWithLettersDonshowanymore{width:calc(340px * 1.3);border:calc(1px * 1.3) solid #888;border-radius:calc(5px * 1.3)}#NWNWn #NWNWntext{margin:calc(30px * 1.3) auto 0;width:calc(237px * 1.3);border-radius:calc(2px * 1.3)}#andiaddwhyoff,#rTtIv,#YetWN,#andidontaddwhyoff,#rOELB,#KNOZd,#andisavenewsetting,#andiupdateexiestingsetting{width:calc(120px * 1.3);height:calc(30px * 1.3);padding-top:calc(10px * 1.3)}#choosewhyoff{width:calc(245px * 1.3);border:calc(1px * 1.3) solid #888;border-radius:calc(2px * 1.3)}#andiSetting{width:calc(40px * 1.3);height:calc(25px * 1.3)}#andiuserheaderloginconnect{width:calc(90px * 1.3);height:calc(30px * 1.3);padding:calc(4px * 1.3) 0}#dXLgH{width:calc(90px * 1.3);height:calc(30px * 1.3);padding:calc(3px * 1.3) calc(13px * 1.3)}#xPEGE,#JPRSV,#sDZbX svg{width:calc(20px * 1.3);height:calc(20px * 1.3)}#xPEGE,#JPRSV{bottom:calc(4px * 1.3)}#cGvHB{margin:0 auto calc(-11px * 1.3);width:calc(45px * 1.3)}#sjedp{height:calc(3px * 1.3);margin:calc(1px * 1.3) auto}#LMkvg{margin:0 auto calc(7px * 1.3)}#hKyOI{top:calc(-20px * 1.3)}#cqUuD{width:calc(199px * 1.3);height:calc(95px * 1.3);font-size:calc(14px * 1.3);margin-top:calc(7px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}.vjEnr [role=button]:focus,.vjEnr [role=button]:hover,.vjEnr input:focus,.vjEnr input:hover,.vjEnr select:focus,.vjEnr select:hover{outline:#fff solid calc(1px * 1.3)!important}.LAsQk .QybqI{border-radius:calc(2px * 1.3)}#yIiKG .xJGcA .RRnya{border:calc(1px * 1.3) solid #fff!important;border-radius:calc(35px * 1.3)!important;bottom:calc(10px * 1.3)!important;left:calc(10px * 1.3)!important;width:calc(25px * 1.3);height:calc(25px * 1.3);padding-top:calc(3px * 1.3);padding-right:calc(2px * 1.3);padding-left:calc(2px * 1.3)}#RFjdP .tHEWd{bottom:calc(10px * 1.3)!important;width:calc(40px * 1.3);height:calc(15px * 1.3);-webkit-border-top-right-radius:calc(2px * 1.3);-webkit-border-bottom-right-radius:calc(2px * 1.3);-moz-border-radius-topright:calc(2px * 1.3);-moz-border-radius-bottomright:calc(2px * 1.3);border-top-right-radius:calc(2px * 1.3);border-bottom-right-radius:calc(2px * 1.3);line-height:calc(15px * 1.3)}#NWNWn :focus{outline:#000 solid calc(1px * 1.3)}img[src*="cVVzR.png"]{width:calc(320px * 1.3);height:calc(115px * 1.3)}#KJMJHtab1middleHelp{width:calc(320px * 1.3);height:calc(445px * 1.3);margin:0;top:calc(195px * 1.3)}#KJMJHtab1middleHelp .TUAHelpchangetolivetext,#KJMJHtab1middleHelp .TUAHelpskipbtn{left:calc(3px * 1.3);font-size:calc(16px * 1.3);padding:calc(3px * 1.3) calc(10px * 1.3);margin:calc(2px * 1.3)}#KJMJHtab1middleHelp .TUAHelpskipbtn{top:calc(3px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(3px * 1.3);-webkit-border-radius:calc(3px * 1.3);border-radius:calc(3px * 1.3)}#KJMJHtab1SmalleHelp .TUAHelpskipbtn,#KJMJHtab1middleHelp .TUAHelpchangetolivetext{-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(3px * 1.3);-webkit-border-radius:calc(3px * 1.3)}#KJMJHtab1middleHelp .TUAHelpimg img{width:calc(320px * 1.3)!important;height:calc(445px * 1.3)!important}#KJMJHtab1middleHelp .TUAHelpchangetolivetext{bottom:calc(3px * 1.3);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);border-radius:calc(3px * 1.3)}#KJMJHtab1SmalleHelp{width:calc(306px * 1.3);height:calc(100px * 1.3);margin:calc(6px * 1.3) calc(4px * 1.3) 0;box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext,#KJMJHtab1SmalleHelp .TUAHelpskipbtn{left:calc(3px * 1.3);font-size:calc(16px * 1.3);padding:calc(3px * 1.3) calc(10px * 1.3);margin:calc(2px * 1.3)}#KJMJHtab1SmalleHelp .andiWrapHelpDesc{height:calc(100px * 1.3)!important}#KJMJHtab1SmalleHelp .TUAHelpskipbtn{top:calc(3px * 1.3);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);border-radius:calc(3px * 1.3)}#KJMJHtab1SmalleHelp .TUAHelpimg img{width:calc(306px * 1.3)!important;height:calc(100px * 1.3)!important}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext{bottom:calc(3px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(3px * 1.3);-webkit-border-radius:calc(3px * 1.3);border-radius:calc(3px * 1.3)}#KJMJHtab1LargeHelp{width:calc(320px * 1.3);height:calc(500px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#KJMJHtab1LargeHelp #BEMFUHelp{width:calc(320px * 1.3);height:calc(30px * 1.3)}#KJMJHtab1LargeHelp #TUAcloseHelp input{width:calc(20px * 1.3);height:calc(20px * 1.3);padding:calc(3px * 1.3) calc(3px * 1.3) 0}#KJMJHtab1LargeHelp #GFcVT{width:calc(320px * 1.3);height:calc(35px * 1.3)}#KJMJHtab1LargeHelp #GFcVT a{font-size:calc(14px * 1.3);line-height:calc(35px * 1.3)}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext,#KJMJHtab1LargeHelp .TUAHelpskipbtn{left:calc(3px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);font-size:calc(16px * 1.3);padding:calc(1px * 1.3) calc(5px * 1.3);margin:calc(2px * 1.3)}#KJMJHtab1LargeHelp .TUAHelpskipbtn{top:calc(3px * 1.3);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(1px * 1.3);-webkit-border-radius:calc(1px * 1.3);border-radius:calc(1px * 1.3)}#KJMJHtab1LargeHelp .TUAHelpimg img{width:calc(320px * 1.3)!important;height:calc(445px * 1.3)!important}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext{bottom:calc(38px * 1.3);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(1px * 1.3);-webkit-border-radius:calc(1px * 1.3);border-radius:calc(1px * 1.3)}#andioffthissitetext,#andisetnametoset{font-size:calc(14px * 1.3)}[data-andiallelmwithtext][title]:focus:after{width:calc(125px * 1.3)}#VbcHu :focus,#BEMFU :focus{outline:#fff solid calc(2px * 1.3)!important}#NWNWn .andicloseSaveOption{padding:calc(5px * 1.3);left:calc(5px * 1.3)}#andisetnametoset{border-bottom:calc(1px * 1.3) solid #888;border-radius:calc(2px * 1.3)}#dontrunonthissite{padding-top:calc(4px * 1.3)}#chooseLang{margin:calc(2px * 1.3) auto;border-bottom:calc(1px * 1.3) solid #000;height:calc(35px * 1.3)}#changeLang{width:calc(230px * 1.3);border:calc(1px * 1.3) solid #888}#andiwrapsmallmenusetting2{width:calc(230px * 1.3);height:calc(350px * 1.3);top:calc(35px * 1.3);right:calc(5px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#andiwrapsmallmenusetting2>div{width:calc(230px * 1.3);height:calc(48px * 1.3);line-height:calc(48px * 1.3);padding:calc(10px * 1.3)}#andiwrapsmallmenusetting2 hr{border:calc(1px * 1.3) solid #000}#andisetlangdefualt,#andisetlangtext{line-height:calc(48px * 1.3);font-size:calc(14px * 1.3)}#andioffthissitewrapswitch{margin:calc(3px * 1.3) calc(7px * 1.3);width:calc(30px * 1.3)}#andioffthissitewrapswitchpart1{border-width:0;left:calc(-5px * 1.3);top:calc(1px * 1.3);width:calc(33px * 1.3);height:calc(14px * 1.3);border-radius:calc(7px * 1.3)}#andioffthissitewrapswitchpart2{left:calc(-5px * 1.3);top:0;border-radius:calc(20px * 1.3);width:calc(17px * 1.3);height:calc(17px * 1.3)}#wrapMenuLang{width:calc(320px * 1.3);height:100%}#andiMenuLangTopBar{width:calc(320px * 1.3);height:calc(30px * 1.3)}#andiMenuLangMiddleBarPart1{width:calc(320px * 1.3);height:calc(64px * 1.3);-webkit-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);-moz-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7)}.andiMenuLangMiddleBarBackBtn{width:calc(25px * 1.3)!important;height:calc(24px * 1.3)!important;font-size:calc(24px * 1.3)!important;margin:calc(20px * 1.3) calc(10px * 1.3) calc(5px * 1.3)!important}#andiMenuLangMiddleBarHeading{height:calc(24px * 1.3)!important;font-size:calc(16px * 1.3);line-height:calc(64px * 1.3)}#wrapMenuLang .langChoose,#wrapMenuLang .langComeSoon,.andiMenuLangMiddleBarRadioBtn{line-height:calc(50px * 1.3)!important;font-size:calc(16px * 1.3)!important}.andiMenuLangMiddleBarRadioBtn{height:calc(50px * 1.3)!important;border-bottom:calc(1px * 1.3) solid #888!important;padding:0 calc(12px * 1.3)!important}.andiMenuLangMiddleBarWrapLang{padding:calc(5px * 1.3)!important}#andiMenuLangMiddleBarSaveBtn{width:calc(320px * 1.3);height:calc(50px * 1.3);line-height:calc(50px * 1.3)}#andiMenuLangMiddleBarWrapLang :focus,#andiwrapsmallmenusetting2 :focus{outline:#888 solid calc(3px * 1.3)!important}#andiCloseSaveBtn{margin:calc(8px * 1.3) auto 0;height:calc(30px * 1.3);padding-top:calc(4px * 1.3);border-radius:calc(5px * 1.3)}.IoVaWskipArea{height:calc(1px * 1.3);width:calc(1px * 1.3);margin:calc(-1px * 1.3);font-size:calc(16px * 1.3)!important}.IoVaWskipArea:focus{margin:0;padding:0 calc(10px * 1.3)}.ANDIhighlight:hover,.ANDIhighlightFocus{box-shadow:0 0 0 9999999px rgba(0,0,0,.35)}#jilVt #VbcHu{width:calc(320px * 1.3);height:calc(65px * 1.3)}#jilVt #VbcHu .VbcHuMarkIfSelected{width:calc(80px * 1.3);height:calc(3px * 1.3)}#jilVt #fvLXm .owUce{width:calc(150px * 1.3);height:calc(195px * 1.3)}.hintformorequastionLeft{height:calc(180px * 1.3)!important;width:calc(60px * 1.3)!important;top:calc(88px * 1.3)!important}.hintformorequastionLeft .hintformorequastionblue{height:calc(75px * 1.3)!important;width:calc(60px * 1.3)!important}.hintformorequastionLeft .hintformorequastionwhite{height:calc(90px * 1.3)!important;width:calc(60px * 1.3)!important}#jilVt #BEMFU #gMhQJ #JlUMY,#jilVt #BEMFU #gMhQJ #iLSlI,#jilVt #BEMFU #gMhQJ #fjaun,#jilVt #BEMFU #gMhQJ #highContrastMenu{width:calc(30px * 1.3);height:calc(30px * 1.3)}#jilVt .rZZEa .joMhk p{font-size:calc(16px * 1.3)!important}#jilVt #VbcHu>div>div>div svg{width:calc(35px * 1.3);height:calc(35px * 1.3);margin:14px auto 0}</style>');
        if (UA1("#TUAfeedbackFunction").hasAttribute("andiactivetab")) {
          UA1("#TUAfeedbackFunction").click();
        }
        if (UA1("#changePanelSetting") !== null) {
          UA1("#changePanelSetting").addCss({"bottom":0});
        }
        andiUA.createStorageItem("UA2bigMenu", true);
        var iframe = document.getElementById("loadAndiSystem");
        if (iframe != null) {
          iframe.style.width = parseInt(iframe.style.width) * 1.3 + "px";
          setTimeout(function() {
            if (document.getElementById("loadAndiSystem") !== null) {
              document.getElementById("TUAprofileFunction").click();
            }
          }, 200);
        }
        setTimeout(function() {
          UA1("body").taddClass ("UA2bigMenu");
        }, 200);
        UA(".vjEnr").forEach(function(VnIxP, i) {
          if (VnIxP.getCss("display") !== "none") {
            VnIxP.addCss({"height":"305px"});
          }
        });
        andiUA.resizewindow();
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2176);
      } else {
        if (UA1("#TUAbigMenu")) {
          UA1("#TUAbigMenu").zOhhK();
        }
        andiUA.removeStorageItem("UA2bigMenu");
        andiUA.resizewindow();
        UA(".BohAM").forEach(function(VnIxP, i) {
          VnIxP.addCss({"height":"510px"});
        });
        var winH = window.innerHeight;
        if (UA1("#changePanelSetting") !== null) {
          UA1("#changePanelSetting").addCss({"bottom":0});
        }
        if (localStorage.getItem("UA2bigMenu") == "true") {
          if (winH > 640) {
            UA(".vjEnr").forEach(function(VnIxP) {
              VnIxP.addCss({"bottom":winH - (640 - 30 * 1.3) + "px"});
            });
          } else {
            UA(".vjEnr").forEach(function(VnIxP) {
              VnIxP.addCss({"bottom":35 * 1.3 + "px"});
            });
          }
        } else {
          if (winH > 640) {
            UA(".vjEnr").forEach(function(VnIxP) {
              VnIxP.addCss({"bottom":winH - 630 + "px"});
            });
          } else {
            UA(".vjEnr").forEach(function(VnIxP) {
              VnIxP.addCss({"bottom":35 + "px"});
            });
          }
        }
      }
      setTimeout(function() {
        andiUA.resizewindow();
        UA1("body").tremoveClass ("UA2bigMenu");
      }, 350);
      setTimeout(function() {
        var newMenuSize = parseInt(document.getElementById("iLSlI").getCss("width")) > 30 ? "large" : "normal";
      }, 2500);
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2177);
    });
    UA1("#fjaun").addEventListener("click", function(e) {
      var PPFAr = window.innerWidth;
      if (PPFAr > 640) {
        var ANDIthat = this;
        if (parseInt(document.getElementById("jilVt").getCss("right")) <= 320 && document.getElementById("jilVt").getCss("right") != "auto") {
          andiUA.createStorageItem("FrDLf", "right");
          this.addAttr({"newDirecation":"left"});
          UA(".IdrLU,#jilVt").forEach(function(VnIxP, i) {
            VnIxP.addCss({"right":"auto", "left":PPFAr - 338 + "px"});
          });
          /*UA("#jilVt").forEach(function(VnIxP, i) {
            VnIxP.addCss({"right":"auto", "left":PPFAr - 338 + "px"});
          });*/
          setTimeout(function() {
            document.getElementById("jilVt").OLcMJ({"left":"0px"}, 0.500);
            UA("#jilVt,.IdrLU").forEach(function(VnIxP, i) {
              VnIxP.OLcMJ({"left":"0px"}, 0.500);
            });
            UA("#jilVt,.IdrLU , .ZDMId").forEach(function(VnIxP, i) {
              VnIxP.addCss({"right":""});
            });
          }, 10);
          UA1("#fjaun").addCss({"-webkit-transform":" rotate(180deg)", " -moz-transform":" rotate(180deg)", "-o-transform":" rotate(180deg)", "-ms-transform":" rotate(180deg)", "transform":"rotate(180deg)"});
          setTimeout(function() {
            UA(".IdrLU").forEach(function(VnIxP, i) {
              VnIxP.style.cssText = VnIxP.style.cssText + " left:0;right:auto;";
            });
          }, 500);
        } else {
          this.addAttr({"newDirecation":"right"});
          andiUA.createStorageItem("FrDLf", "left");
          UA("#jilVt,.IdrLU").forEach(function(VnIxP, i) {
            VnIxP.addCss({"left":"auto", "right":PPFAr - 338 + "px"});
          });
          /*UA("").forEach(function(VnIxP, i) {
            VnIxP.addCss({"left":"auto", "right":PPFAr - 338 + "px"});
          });*/
          setTimeout(function() {
            document.getElementById("jilVt").OLcMJ({"right":"0px"}, 0.500);
            UA("#jilVt,.IdrLU , .ZDMId").forEach(function(VnIxP, i) {
              VnIxP.OLcMJ({"right":"0px"}, 0.500);
            });
            UA("#jilVt,.IdrLU , .ZDMId").forEach(function(VnIxP, i) {
              VnIxP.addCss({"left":""});
            });
          }, 10);
          UA1("#jilVt,.IdrLU , .ZDMId").addCss({"left":""});
          UA1("#fjaun").addCss({"-webkit-transform":" rotate(0deg)", " -moz-transform":" rotate(0deg)", "-o-transform":" rotate(0deg)", "-ms-transform":" rotate(0deg)", "transform":"rotate(0deg)"});
          setTimeout(function() {
            UA(".IdrLU").forEach(function(VnIxP, i) {
              VnIxP.style.cssText = VnIxP.style.cssText + " left:auto;right:0;";
            });
          }, 500);
        }
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2178);
        setTimeout(function() {
          var newDirecation = ANDIthat.getAttr("newdirecation") == "left" ? "left" : "right";
        }, 500);
      }
    });
    eventOn("click", "#wrapSpaceLinesFnDownCancel", function() {
      andiUA.ZXsxe();
      andiUA.removeStorageItem("andiLineHeightStyle");
      andiUA.removeStorageItem("ZXsxe");
    });
    eventOn("click", "#wrapSpaceLinesFnDownOff", function() {
      andiUA.ZXsxe();
      andiUA.createStorageItem("ZXsxe", "true");
    });
    eventOn("click", "#wrapSpaceLinesFnDownSave", function() {
      UA1("body").removeAttribute("tryCostumColor");
      if (UA1("#andiLineHeightStyle") != null) {
        var CxhBEValue = UA1("#andiLineHeightStyle").getAttr("CxhBEValue");
      } else {
        var CxhBEValue = null;
      }
      if (CxhBEValue != "null" && CxhBEValue != null) {
        andiUA.wrEKv(CxhBEValue);
        UA1("#TUAspaceLines").taddClass ("vKDQY");
        UA1("#TUAspaceLines").taddClass ("xJGcA");
        andiUA.IVUio();
        UA1("#TUAspaceLines").click();
        UA1("#TUAspaceLines").focus();
        andiUA.removeStorageItem("ZXsxe");
        andiUA.createStorageItem("andiLineHeightStyle", CxhBEValue);
        andiUA.dAmvd();
      } else {
        if (UA1("#MoexW .spaceFnDownSave") === null) {
          UA1("#MoexW").appendHtml('<span role="alert" class="spaceFnDownSave">' + andiUA.KNTQg.bbb181 + "<span>");
        }
      }
    });
    eventOn("click", "#wrapSpaceLetterFnDownCancel", function() {
      andiUA.removeStorageItem("TUAspaceLetter");
      andiUA.removeStorageItem("fSAok");
      andiUA.fSAok();
    });
    eventOn("click", "#wrapSpaceLetterFnDownOff", function() {
      andiUA.createStorageItem("fSAok", "true");
      andiUA.fSAok();
    });
    eventOn("click", "#wrapSpaceLetterFnDownSave", function() {
      UA1("body").removeAttribute("tryCostumColor");
      if (UA1("#andispaceLetterStyle") != null) {
        var CxhBEValue = UA1("#andispaceLetterStyle").getAttr("CxhBEValue");
      } else {
        var CxhBEValue = null;
      }
      if (CxhBEValue == null) {
        CxhBEValue = localStorage.getItem("TUAspaceLetter");
      }
      if (CxhBEValue != "null" && CxhBEValue != null) {
        andiUA.rtyQb(CxhBEValue);
        UA1("#TUAspaceLetter").taddClass ("vKDQY");
        UA1("#TUAspaceLetter").taddClass ("xJGcA");
        andiUA.GwlWc();
        UA1("#TUAspaceLetter").click();
        UA1("#TUAspaceLetter").focus();
        andiUA.removeStorageItem("fSAok");
        andiUA.createStorageItem("TUAspaceLetter", CxhBEValue);
        andiUA.dAmvd();
      } else {
        if (UA1("#MoexW .spaceFnDownSave") === null) {
          UA1("#MoexW").appendHtml('<span role="alert" class="spaceFnDownSave">' + andiUA.KNTQg.bbb181 + "<span>");
        }
      }
    });
    eventOn("click", "#wrapSpaceWordFnDownCancel", function() {
      andiUA.removeStorageItem("TUAspaceWord");
      andiUA.removeStorageItem("itkQd");
      andiUA.itkQd();
    });
    eventOn("click", "#wrapSpaceWordFnDownOff", function() {
      andiUA.itkQd();
      andiUA.createStorageItem("itkQd", "true");
    });
    eventOn("click", "#wrapSpaceWordFnDownSave", function() {
      UA1("body").removeAttribute("tryCostumColor");
      if (UA1("#andispaceWordStyle") != null) {
        var CxhBEValue = UA1("#andispaceWordStyle").getAttr("CxhBEValue");
      } else {
        var CxhBEValue = null;
      }
      if (CxhBEValue == null) {
        CxhBEValue = localStorage.getItem("TUAspaceWord");
      }
      if (CxhBEValue != "null" && CxhBEValue != null) {
        UA1("#TUAspaceWords").taddClass ("vKDQY");
        UA1("#TUAspaceWords").taddClass ("xJGcA");
        andiUA.createStorageItem("TUAspaceWord", CxhBEValue);
        andiUA.lAmJv(CxhBEValue);
        andiUA.FFYgj();
        UA1("#TUAspaceWords").click();
        UA1("#TUAspaceWords").focus();
        andiUA.removeStorageItem("itkQd");
        andiUA.dAmvd();
      } else {
        if (UA1("#MoexW .spaceFnDownSave") === null) {
          UA1("#MoexW").appendHtml('<span role="alert" class="spaceFnDownSave">' + andiUA.KNTQg.bbb181 + "<span>");
        }
      }
    });
    eventOn("click", "#TUAstopGif", function() {
      andiUA.runstopGif("TUAstopGif");
    });
    eventOn("click", "#TUAstopSliders", function() {
      andiUA.runTUAstopSliders("TUAstopSliders");
    });
    eventOn("click", "#TUAwhiteMouse", function() {
      andiUA.yMmKY("TUAwhiteMouse");
    });
    eventOn("click", "#EXRcw", function() {
      andiUA.OGzKz("EXRcw");
    });
    eventOn("click", "#advancedSupportForScreenReader", function() {
      andiUA.runsadvancedSupportForScreenReader("advancedSupportForScreenReader");
    });
    eventOn("click", "#TUAtoFontArial", function() {
      andiUA.VdrDa("TUAtoFontArial");
    });
    eventOn("click", "#ZJlam", function() {
      andiUA.WEzPa("ZJlam");
    });
    eventOn("click", ".oECFzColor", function() {
    });
    eventOn("click", "#JPRSV", function() {
      andiUA.UkCLK("JPRSV");
    });
    eventOn("click", "#TUAalignLeft", function() {
      andiUA.fjyad("TUAalignLeft");
    });
    eventOn("click", "#TUAalignLRight", function() {
      andiUA.KBNjF("TUAalignLRight");
    });
    eventOn("click", "#JhgsJ", function() {
      andiUA.JiUJU("JhgsJ");
    });
    eventOn("click", "#TUAandihighLightlink", function() {
      andiUA.pJLIx("TUAandihighLightlink");
    });
    eventOn("click", "#TUAwikipedia", function() {
      andiUA.ARcaN("TUAwikipedia");
    });
    eventOn("click", "#TUAFocusAreaBtn", function() {
      andiUA.OcsYO("TUAFocusAreaBtn");
    });
    eventOn("click", "#TUArasheTevot", function() {
      andiUA.Imuga("TUArasheTevot");
    });
    eventOn("keyup", '#PRxAh .mJoej .EbTkc input[type="text"]', function(UAenv) {
      if (!this.id == "#andiuseremail") {
        var valueMax = this.value.length;
        this.nextSibling.tremoveClass ("veZPc");
        this.nextSibling.innerText = 255 - valueMax;
        if (valueMax >= 245) {
          this.nextSibling.taddClass ("veZPc");
          this.nextSibling.innerText = andiUA.KNTQg.UAtdr157 + " " + (255 - valueMax) + " " + andiUA.KNTQg.UAtdr158 + " ";
          andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr157 + " " + (255 - valueMax) + " " + andiUA.KNTQg.UAtdr158 + " ");
        }
      }
    });
    eventOn("click", "[andisendform]", function() {
      if (UA1("#andiuseremail").value.trim() == "") {
        UA1("#andiuseremail").nextSibling.innerText = andiUA.KNTQg.UAtdr160;
        UA1("#YFJzt").addAttr({"andidisable":"true", "tabindex":"-1"});
      } else {
        if (andiUA.QTRpd(UA1("#andiuseremail").value) == null) {
          UA1("#andiuseremail").nextSibling.innerText = andiUA.KNTQg.UAtdr161;
          UA1("#YFJzt").addAttr({"andidisable":"true", "tabindex":"-1"});
        } else {
          var lprde = "";
          UA1("#andiuseremail").nextSibling.innerText = "";
          UA1("#YFJzt").tremoveAttr("aria-checked");
          UA1("#YFJzt").tremoveAttr("andidisable");
          UA1("#YFJzt").addAttr({"tabindex":"0"});
          UA('#PRxAh [cykxa] [aria-checked="true"]').forEach(function(VnIxP, index) {
            lprde += VnIxP.closest(".mJoej").querySelector(".fEqjh").innerText + ": " + VnIxP.innerText + "<br/>\n";
          });
          UA('#PRxAh [cykxa] textarea, #PRxAh [cykxa] input[type="text"]').forEach(function(VnIxP, index) {
            var inputLabel = VnIxP.getAttr("aria-labelledby");
            inputLabel = "#" + inputLabel;
            if (UA1(inputLabel) !== null) {
              inputLabel = UA1(inputLabel).innerText;
            } else {
              inputLabel = "";
            }
            if (inputLabel == "") {
              inputLabel = UA1('label[for="' + VnIxP.id + '"]').innerText;
            }
            lprde += inputLabel + ": " + VnIxP.value + "<br/>\n";
          });
          lprde += andiUA.KNTQg.UAtdr162 + " " + window.location.href + "<br/>\n";
          var ILZYZ = andiUA.url + "andisendmail/sendmail.php";
          andiUA.mJyEv(lprde, ILZYZ);
          UA1("#TwIfU").zOhhK();
          UA1("#IULPc").pCFOS('<div id="wrapimgsendformtanks"><img src="' + andiUA.KpAEX + '/images/andy-faces02-02.svg" alt=""></div><div id="wraptextsendformtanks" tabindex="0">' + andiUA.KNTQg.bbb185 + '</div><div role="button" aria-label="' + andiUA.KNTQg.bbb186 + '" id="backmainscreensendformtanks" tabindex="0">' + andiUA.KNTQg.bbb186 + "</div>");
          UA1("#wraptextsendformtanks").focus();
          UA1("#backmainscreensendformtanks").addEventListener("click", function() {
            UA1("#ADyWm").click();
          });
          UA1("#backmainscreensendformtanks").addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
              UA1("#ADyWm").click();
            }
          });
        }
      }
    });
    eventOn("click", '#PRxAh [cykxa] [class^="kkeiq"]', function() {
      this.closest("[cykxa]").querySelectorAll('[class^="kkeiq"]').forEach(function(el, i) {
        el.addAttr({"aria-checked":"false"});
      });
      this.addAttr({"aria-checked":"true"});
    });
    eventOn("keydown", '#PRxAh [cykxa] [class^="kkeiq"]', function(event) {
      var that = this;
      switch(event.keyCode) {
        case 40:
          moveNext(that);
          break;
        case 37:
          moveBack(that);
          break;
        case 39:
          moveNext(that);
          break;
        case 38:
          moveBack(that);
          break;
      }
      function moveNext(that) {
        event.preventDefault();
        if (that.nextSibling === undefined || that.nextSibling === null) {
          that.closest("[cykxa]").querySelector('[class^="kkeiq"]').focus();
        } else {
          that.nextSibling.focus();
        }
      }
      function moveBack(that) {
        event.preventDefault();
        if (that.previousSibling === undefined || that.previousSibling === null) {
          var allRadios = that.closest("[cykxa]").querySelectorAll('[class^="kkeiq"]');
          allRadios[allRadios.length - 1].focus();
        } else {
          that.previousSibling.focus();
        }
      }
    });
    eventOn("click", '#PRxAh [cykxa="1"] .DdkxI, #PRxAh [cykxa="3"] .DdkxI', function() {
      this.closest(".mJoej").nextSibling.addAttr({"UAshowquestion":true});
      this.closest(".mJoej").nextSibling.addCss({"display":"inline-block"});
    });
    eventOn("click", '#PRxAh [cykxa="1"] .GJTZS, #PRxAh [cykxa="1"] .qiBkg', function() {
      UA1('#PRxAh [cykxa="2"]').addAttr({"UAshowquestion":false});
      UA1('#PRxAh [cykxa="2"]').addCss({"display":"none"});
    });
    eventOn("click", '#PRxAh [cykxa="3"] .qiBkg, #PRxAh [cykxa="3"] .GJTZS', function() {
      UA1('#PRxAh [cykxa="4"]').addAttr({"UAshowquestion":false});
      UA1('#PRxAh [cykxa="4"]').addCss({"display":"none"});
    });
    eventOn("blur", "#andiuseremail", function() {
      if (this.value.trim() == "") {
        this.nextSibling.innerText = andiUA.KNTQg.UAtdr160;
        UA1("#YFJzt").addAttr({"andidisable":"true", "tabindex":"-1"});
      } else {
        if (andiUA.QTRpd(this.value) == null) {
          this.nextSibling.innerText = andiUA.KNTQg.UAtdr161;
          UA1("#YFJzt").addAttr({"andidisable":"true", "tabindex":"-1"});
        } else {
          this.nextSibling.innerText = "";
          UA1("#YFJzt").tremoveAttr("aria-checked");
          UA1("#YFJzt").tremoveAttr("andidisable");
          UA1("#YFJzt").addAttr({"tabindex":"0"});
        }
      }
    });
    eventOn("click", ".YrOTA", function() {
      UA1("#YFJzt").click();
    });
    eventOn("click", "#PRxAh .mJoej .EbTkc .uPqNm label", function() {
      if (UA1("html").getAttr("DOwbI") == "rtl") {
        this.OLcMJ({"font-size":"10px", "top":"-14px", "right":"0"}, 0.350);
      } else {
        this.OLcMJ({"font-size":"10px", "top":"-14px", "left":"0"}, 0.350);
      }
    });
    eventOn("focusin", '#PRxAh .mJoej .EbTkc .uPqNm input[type="text"]', function() {
      if (UA1("html").getAttr("DOwbI") == "rtl") {
        this.previousSibling.OLcMJ({"font-size":"10px", "top":"-14px", "right":"0"}, 0.350);
      } else {
        this.previousSibling.OLcMJ({"font-size":"10px", "top":"-14px", "left":"0"}, 0.350);
      }
    });
    eventOn("focusout", "#PRxAh .mJoej .EbTkc .uPqNm input", function() {
      if (this.value.trim() == "") {
        if (UA1("html").getAttr("DOwbI") == "rtl") {
          this.previousSibling.OLcMJ({"font-size":"14px", "top":"0px", "right":"0px"}, 0.350);
        } else {
          this.previousSibling.OLcMJ({"font-size":"14px", "top":"0px", "left":"0px"}, 0.350);
        }
      }
    });
    function YFJztFN(e) {
      var keyboardUser = true;
      var FtTIP = this;
      UA1("#RmKVO").addAttr({"aria-hidding":"true", "tabindex":"-1"});
      var PRxAhElm = UA1("#PRxAh");
      var TUAa = localStorage.getItem("UA2bigMenu");
      if (this.getAttr("andidisable") != "true") {
        UA1("#YFJzt").addAttr({"andidisable":"true"});
        var cJbXX = parseInt(UA1(".questionactive").getAttr("cykxa"));
        if (cJbXX < 8) {
          if (TUAa == "true") {
            if (andiUA.DOwbI == "rtl") {
              PRxAhElm.OLcMJ({"margin-right":parseInt(PRxAhElm.getCss("margin-right")) - 337 + "px"}, 0.600);
            } else {
              PRxAhElm.OLcMJ({"margin-left":parseInt(PRxAhElm.getCss("margin-left")) - 337 + "px"}, 0.600);
            }
          } else {
            if (andiUA.DOwbI == "rtl") {
              PRxAhElm.OLcMJ({"margin-right":parseInt(PRxAhElm.getCss("margin-right")) - 255 + "px"}, 0.600);
            } else {
              PRxAhElm.OLcMJ({"margin-left":parseInt(PRxAhElm.getCss("margin-left")) - 255 + "px"}, 0.600);
            }
          }
          UA("[cykxa]").forEach(function(VnIxP, index) {
            VnIxP.querySelectorAll('[tabindex="0"]').forEach(function(el2, index) {
              el2.addAttr({"tabindex":"-1"});
            });
          });
          UA1(".questionactive").tremoveClass ("questionactive");
          cJbXX++;
          if ((cJbXX == 2 || cJbXX == 4) && UA1('[cykxa="' + cJbXX + '"]').getAttr("UAshowquestion") != "true") {
            cJbXX++;
          }
          UA1('[cykxa="' + cJbXX + '"]').addCss({"display":"inline-block"});
        }
        setTimeout(function() {
          UA1('[cykxa="' + cJbXX + '"]').taddClass ("questionactive");
          UA1(".questionactive").querySelectorAll('[tabindex="-1"]').forEach(function(el2, index) {
            el2.addAttr({"tabindex":"0"});
          });
          FtTIP.tremoveAttr("andidisable");
          if (cJbXX >= 7) {
            FtTIP.innerText = andiUA.KNTQg.UAtdr164;
            FtTIP.addAttr({"andisendform":"true", "aria-label":andiUA.KNTQg.UAtdr163, "andidisable":"true", "tabindex":"-1"});
            UA1(".hintformorequastionLeft").style.display = "none";
          } else {
            UA1("#YFJzt").pCFOS(andiUA.KNTQg.UAtdr156 + " &gt;");
            UA1("#YFJzt").addAttr({"aria-label":andiUA.KNTQg.UAtdr165, "tabindex":"0"});
            UA1("#YFJzt").tremoveAttr("andidisable");
            UA1("#YFJzt").tremoveAttr("andisendform");
            UA1(".hintformorequastionLeft").style.display = "block";
          }
          UA1("#yCrCd").tremoveAttr("andidisable");
          var IBrhV = parseInt(UA1("#DmrXy").innerText.trim());
          UA1("#DmrXy").innerText = " " + (IBrhV + 1) + " ";
          andiUA.gpzEg();
          UA1("#tgGWn").addAttr({"tabindex":"-1"});
          if (keyboardUser) {
            UA1("#tgGWn").focus();
          }
        }, 600);
      }
    }
    eventOn("click", "#YFJzt", YFJztFN);
    eventOn("keydown", "#YFJzt", function(e) {
      if (e.keyCode == "13") {
        YFJztFN(e);
      }
    });
    eventOn("click", "#yCrCd", function() {
      var TUAa = localStorage.getItem("UA2bigMenu");
      var PRxAhElm = UA1("#PRxAh");
      if (UA1("#yCrCd").getAttr("andidisable") != "true") {
        UA1("#yCrCd").addAttr({"andidisable":"true"});
        var cJbXX = UA1(".questionactive").getAttr("cykxa");
        if (cJbXX > 1) {
          if (TUAa == "true") {
            if (andiUA.DOwbI == "rtl") {
              PRxAhElm.OLcMJ({"margin-right":parseInt(PRxAhElm.getCss("margin-right")) + 337 + "px"}, 0.600);
            } else {
              PRxAhElm.OLcMJ({"margin-left":parseInt(PRxAhElm.getCss("margin-left")) + 337 + "px"}, 0.600);
            }
          } else {
            if (andiUA.DOwbI == "rtl") {
              PRxAhElm.OLcMJ({"margin-right":parseInt(PRxAhElm.getCss("margin-right")) + 255 + "px"}, 0.600);
            } else {
              PRxAhElm.OLcMJ({"margin-left":parseInt(PRxAhElm.getCss("margin-left")) + 255 + "px"}, 0.600);
            }
          }
          setTimeout(function() {
            UA1(".hintformorequastionLeft").style.display = "block";
            UA1(".questionactive").addCss({"display":"none"});
            UA1(".questionactive").tremoveClass ("questionactive");
            cJbXX--;
            if (UA1('[cykxa="' + cJbXX + '"]').getCss("display") == "none") {
              cJbXX--;
            }
            UA("[cykxa]").forEach(function(VnIxP, i) {
              VnIxP.querySelectorAll('[tabindex="0"]').forEach(function(el2, i2) {
                el2.setAttribute("tabindex", "-1");
              });
            });
            UA1('[cykxa="' + cJbXX + '"]').taddClass ("questionactive");
            UA1(".questionactive").querySelectorAll('[tabindex="-1"]').forEach(function(VnIxP, i) {
              VnIxP.addAttr({"tabindex":"0"});
            });
            UA1("#yCrCd").tremoveAttr("andidisable");
          }, 601);
          UA1("#YFJzt").pCFOS(andiUA.KNTQg.UAtdr156 + " &gt;");
          UA1("#YFJzt").addAttr({"aria-label":andiUA.KNTQg.UAtdr165, "tabindex":"0"});
          UA1("#YFJzt").tremoveAttr("andidisable");
          UA1("#YFJzt").tremoveAttr("andisendform");
          var IBrhV = parseInt(UA1("#DmrXy").innerText.trim());
          if (IBrhV > 1) {
            UA1("#DmrXy").innerText = " " + (IBrhV - 1) + " ";
          }
          andiUA.gpzEg();
          if (UA1("#tgGWn") !== null) {
            UA1("#tgGWn").addAttr({"tabindex":"-1"});
            UA1("#tgGWn").focus();
          }
        }
      }
    });
    eventOn("click", "#TUAreviledHiddingInfo", function() {
      andiUA.RroPQ("TUAreviledHiddingInfo");
    });
    eventOn("click", "#TUAnavigateWithLetters", function() {
      andiUA.vKjNI("TUAnavigateWithLetters");
    });
    eventOn("click", "#gcFQn", function() {
      andiUA.DOfyz("gcFQn");
    });
    eventOn("click", "#mzWNy", function() {
      andiUA.runsmzWNy("mzWNy");
    });
    eventOn("click", "#TUAwhiteContrast", function() {
      andiUA.runsTUAwhiteContrast("TUAwhiteContrast");
    });
    eventOn("click", "#gNkmS", function() {
      andiUA.MnQea("gNkmS");
    });
    eventOn("click", "#andiupdateexiestingsetting:not(.andiSavewithnewname)", function() {
      andiUA.createStorageItem("TUAtryToUpdateSet", "yes");
      if (UA1("#MvQtQ") !== null) {
        UA1("#MvQtQ").zOhhK();
      }
      if (UA1("#NWNWn") !== null) {
        UA1("#NWNWn").zOhhK();
      }
      if (UA1("#TUAprofileFunction") !== null) {
        UA1("#TUAprofileFunction").click();
      }
    });
    eventOn("click", "#andisavenewsetting", function() {
      UA1("#NWNWntext").innerHTML = '<p style="margin:5px 0">' + andiUA.KNTQg.UAtdr2155 + '</p><input id="andisetnametoset" aria-label="' + andiUA.KNTQg.UAtdr2108 + '"  type="text" placeholder="' + andiUA.KNTQg.UAtdr2108 + '"/>';
      UA1("#ZWsSL").appendHtml('<div id="YetWN" tabindex="0" role="button">' + andiUA.KNTQg.UAtdr179 + "</div>");
      UA1("#andiupdateexiestingsetting").taddClass ("andiSavewithnewname");
      UA1("#andiupdateexiestingsetting").innerText = andiUA.KNTQg.UAtdr298;
      UA1("#andisavenewsetting").style.cssText = UA1("#andisavenewsetting").style.cssText + " display:none !important;";
      UA1("#YetWN").addEventListener("click", function() {
        UA1("#MvQtQ").zOhhK();
        UA1("#NWNWn").zOhhK();
        UA1("#mvutM").focus();
      });
      UA(".andiSavewithnewname").forEach(function(VnIxP, i) {
        VnIxP.addEventListener("click", function(e) {
          if (e.keyCode == 13) {
            this.click();
          }
        });
      });
    });
    eventOn("click", ".andiSavewithnewname", function(event) {
      event.preventDefault();
      document.getElementById("andiifuserlogin").src = document.getElementById("andiifuserlogin").src;
      var andidatatosave = andiUA.ANDIgetAllFnsToSave2();
      if (andidatatosave != "") {
        if (UA1("#andiifuserlogin") != null) {
          andiUA.yiPTV("andiifuserlogin", andidatatosave);
        }
        UA1("#MvQtQ").zOhhK();
        UA1("#NWNWn").zOhhK();
      }
    });
    eventOn("click", "#mvutM", function(event) {
      event.preventDefault();
      alert(andiUA.KNTQg.UAtdr187);
    });
    eventOn("click", "#TUAprint", function() {
      this.taddClass ("vKDQY");
      this.taddClass ("xJGcA");
      var runPrint = function() {
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr249);
        var UAurl = window.location.href, KpAEX = andiUA.KpAEX, html = UA1("html").cloneNode(true), URL = window.location.host;
        html.querySelectorAll('img:not([src^="data:"])').forEach(function(el, i) {
          var thatSrc = el.getAttribute("src");
          if (thatSrc != null && thatSrc.indexOf(URL) == -1 && thatSrc.indexOf("http") == -1) {
            el.setAttribute("src", window.location.protocol + "//" + URL + "/" + thatSrc);
          }
        });
        html.querySelectorAll('a:not([href^="java"])').forEach(function(el, i) {
          var thatSrc = el.getAttribute("href");
          if (thatSrc !== null && thatSrc.indexOf(URL) == -1 && thatSrc.indexOf("http") == -1) {
            el.setAttribute("href", window.location.protocol + "//" + URL + "/" + thatSrc);
          }
        });
        html.querySelectorAll("#jilVt,iframe,script,link,head, meta").forEach(function(el, i) {
          el.zOhhK();
        });
        html.querySelectorAll("html *:not(#UAcss):not(img)").forEach(function(el, i) {
          var that = el;
          if (that.tagName == "IMG") {
            that.addCss({"height":that.clientHeight + "px", "width":that.clientWidth + "px"});
          } else {
            var ajfJF = that.attributes;
            for (var TUAj = 0; TUAj < ajfJF.length; TUAj++) {
              var eQDGf = ajfJF[TUAj].nodeName.toLowerCase();
              if (eQDGf != "href" && eQDGf != "src") {
                that.removeAttribute(eQDGf);
              }
            }
            that.addAttr({"tabindex":"-1"});
          }
        });
        if (!!window.chrome) {
          html = html.outerHTML;
          html += '<link rel="stylesheet" url="' + window.location.host + '" href="' + KpAEX + '/css/andi2printCss.css" id="UAcss"/><script class="UAscript">localStorage.setItem("printmode","yes"); setTimeout(function(){\tUA1("html").setAttribute("lang","' + UA1("html").getAttr("vFaKz") + '" );},1000)\x3c/script><script class="UAscript">var script = document.createElement("script");script.type = "text/javascript";script.id = "andiPrint2";script.src = "' + 
          KpAEX + '/js/andi2printfunctions.js";\x3c/script><script src="' + KpAEX + '/js/andi2printfunctions.js" id="UAscript">\x3c/script>';
          var WindowObject = window.open("", "_blank", "width=1024,height=650,top=50,left=50,resizable=yes,toolbar=no,status=no,location=no,menubar=no,scrollbars=yes");
          if (!WindowObject.document) {
            alert("\u05d9\u05e9 \u05dc\u05d1\u05d8\u05dc \u05d7\u05e1\u05d9\u05de\u05ea \u05e4\u05d5\u05e4\u05d0\u05e4\u05d9\u05dd");
          } else {
            WindowObject.document.write(html);
            WindowObject.document.close();
            WindowObject.focus();
          }
          var checkWinFocus = setInterval(function() {
            if (WindowObject.closed) {
              clearInterval(checkWinFocus);
              UA1("#TUAprint").tremoveClass ("vKDQY");
              UA1("#TUAprint").tremoveClass ("xJGcA");
              localStorage.removeItem("printmode");
            }
          }, 500);
        } else {
          var KpAEX = andiUA.KpAEX;
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.id = "andiPrint";
          script.innerHTML = "var html = UA1('body').outerHTML ;" + 'html += \'<link rel="stylesheet" href="' + KpAEX + '/css/andi2printCss.css" id="UAcss"><script src="' + KpAEX + '/js/andi2printfunctions.js" id="UAscript">\x3c/script>\';' + 'WindowObject = window.open("", "", "width=1024,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=yes,resizable=yes");' + "WindowObject.document.write(html);WindowObject.document.close();WindowObject.focus();";
          document.getElementsByTagName("head")[0].appendChild(script);
        }
      };
      if (localStorage.getItem("TUAprint") !== "yes") {
        var UAhtml = "<h3>" + UA1("#TUAprint").innerText + "</h3><p>" + andiUA.KNTQg.bbb184 + "</p>";
        andiUA.menuMessageAlert(UAhtml);
        andiUA.createStorageItem("TUAprint", "yes");
        var printInterval = setInterval(function() {
          if (UA1("#menuMessageAlert") === null) {
            clearInterval(printInterval);
            runPrint();
          }
        }, 350);
      } else {
        runPrint();
      }
    });
    eventOn("click", "[tuaheaderbarbtn]", function() {
      var FtTIP = this;
      if (FtTIP.getAttr("tuaheaderbarbtn") == 0) {
        createTab();
        if (UA1("#RFjdP") !== null) {
          UA1("#RFjdP").addCss({"display":"block"});
        }
        if (localStorage.getItem("UASetnumber") != null && localStorage.getItem("UASetnumber") && "null" && localStorage.getItem("UASetnumber") != "0") {
          UA1("#ciZJc").style.display = "none";
          UA1("#fvLXm").style.display = "none";
          UA1("#LHRwG").style.display = "none";
          UA1("#lWMeB").style.display = "block";
          var thisOption = localStorage.getItem("UASetnumber");
          andiUA.runUAsets(parseInt(thisOption));
        } else {
          if (UA(".vKDQY").length > 0) {
            UA1("#LHRwG").style.display = "block";
            UA1("#lWMeB").style.display = "none";
            UA1("#PhVFO").style.display = "none";
            UA1("#ciZJc").style.display = "block";
            UA1("#fvLXm").style.display = "block";
          } else {
            UA1("#lWMeB").selectedIndex = 0;
            andiUA.removeStorageItem("UASetnumber");
            UA1("#LHRwG").style.display = "none";
            UA1("#lWMeB").style.display = "block";
            UA1("#PhVFO").style.display = "block";
            UA1("#ciZJc").style.display = "block";
            UA1("#fvLXm").style.display = "block";
          }
        }
        var tabName = "Main tab";
      } else {
        if (FtTIP.getAttr("tuaheaderbarbtn") == 1) {
          alert(andiUA.KNTQg.UAtdr187);
        } else {
          if (FtTIP.getAttr("tuaheaderbarbtn") == 2) {
            createTab();
            andiUA.quqAw();
            var tabName = "Help tab";
          } else {
            createTab();
            andiUA.contactTab();
            var tabName = "Contact tab";
          }
        }
      }
      andiUA.resizewindow();
      function createTab() {
        UA(".BohAM").forEach(function(VnIxP, index) {
          if (VnIxP.id === "RFjdP") {
            VnIxP.addCss({"display":"none"});
          } else {
            VnIxP.zOhhK();
          }
        });
      }
    });
    eventOn("click", "#cGvHB", function() {
      andiUA.BeJPv = 0;
      andiUA.removeStorageItem("andicountClickSizeText");
      UA1("#hKyOI").addCss({"display":"none"});
      if (andiUA.DOwbI == "ltr") {
        UA1("#hKyOI").addCss({"left":"49%"});
      } else {
        UA1("#hKyOI").addCss({"right":"49%"});
      }
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr217);
      andiUA.frhQA();
      UA("#JPRSV , #xPEGE").forEach(function(VnIxP, i) {
        VnIxP.tremoveClass ("vKDQY");
        VnIxP.tremoveClass ("xJGcA");
      });
      andiUA.dAmvd();
    });
    eventOn("click", "#xPEGE", function() {
      andiUA.JLYEv("xPEGE");
    });
    eventOn("keydown", "#mvutM", function(UAenv) {
      if (UAenv.keyCode == 13) {
        UAenv.preventDefault();
        this.click();
        setTimeout(function() {
          UA1("#NWNWn").focus();
        }, 50);
      }
    });
    eventOn("keydown", "#andiSetting", function(UAenv) {
      if (UAenv.keyCode == 9 && UAenv.shiftKey) {
        if (UA1("#andisetlang") !== null) {
          this.click();
        }
      }
    });
    var JlUMYinputSettime;
    document.addEventListener("keydown", function(UAenv) {
      if (UAenv.keyCode == 9) {
        setTimeout(function() {
          var thisElm = document.activeElement;
          if (!thisElm.isIt(".UAfixProblescount,#andisetlang") && !thisElm.closest("#xIRDN") && !thisElm.closest("#jilVt") && UA1("#jilVt").getCss("display") !== "none") {
            UA1("#JlUMYinput").click();
          }
        }, 750);
      }
    });
    eventOn("click", "*", function(event) {
      var thisElm = event.target;
      if (UA1("#andiwrapsmallmenusetting2") && UA1("#andiwrapsmallmenusetting2").getCss("opacity") == 1) {
        if (!thisElm.closest("#andiwrapsmallmenusetting2")) {
          if (JlUMYinputSettime) {
            clearTimeout(JlUMYinputSettime);
          }
          UA1("#andiSetting").click();
        }
      }
      if (!thisElm.isIt(".UAfixProblescount, #jilVt, .andiMenuLangMiddleBarBackBtn, #andisetlang") && !thisElm.closest("#xIRDN, #jilVt") && UA1("#jilVt").getCss("display") !== "none") {
        if (JlUMYinputSettime) {
          clearTimeout(JlUMYinputSettime);
        }
        JlUMYinputSettime = setTimeout(function() {
          UA1("#JlUMYinput").click();
        }, 500);
      }
      andiUA.restorImgs();
    });
    eventOn("keydown", '#andiwrapsmallmenusetting2 [href="https://user-a.co.il/regulations#UAtdr2185"]', function(UAenv) {
      if (UAenv.keyCode == 9 && !UAenv.shiftKey) {
        andiSetting.click();
      }
    });
    eventOn("keydown", ".AueIG", function(UAenv) {
      if (UAenv.keyCode == 9 && UAenv.shiftKey) {
        var fGeQg = this.closest(".ZDMId").querySelectorAll(andiUA.TUAsettingFn.NsSyR);
        fGeQg[fGeQg.length - 1].focus();
      }
    });
    eventOn("keydown", "#FbKLK a", function(UAenv) {
      if (UAenv.keyCode == 9 && !UAenv.shiftKey) {
        UAenv.preventDefault();
        UA1("#jilVt").addAttr({"tabindex":"-1"});
        UA1("#jilVt").focus();
      }
    });
    eventOn("keydown", "  #TUAclosespace, .KaxwEspace, .IvEyQ , .hjVeU, .wrapSpaceLinesFnDownCancel", function(UAenv) {
      var FtTIP = this;
      if (UAenv.keyCode == 13 && UA1("#oECFz") == null) {
        if (UA1("#MoexW").querySelector("#ylWRt").length > 0) {
          UA1("#TUAspaceWords").focus();
        } else {
          if (UA1("#MoexW").querySelector("#PGaVc").length > 0) {
            UA1("#TUAspaceLetter").focus();
          } else {
            if (UA1("#MoexW").querySelector("#HYACe").length > 0) {
              UA1("#TUAspaceLines").focus();
            } else {
              UA1(".vjEnr").addAttr({"tabindex":"0"});
              UA1(".vjEnr").focus();
            }
          }
        }
        FtTIP.click();
      }
      if (UAenv.keyCode == 13 && UA1("#oECFz")) {
        var lKnGnColor = UA1("#oECFz").getAttribute("tuatype");
        UA1("#" + lKnGnColor).focus();
        FtTIP.click();
      }
      if (UAenv.keyCode == 9 && UAenv.shiftKey) {
        var Btn = UA1("#YQger");
        Btn.addAttr({"tabindex":0});
        Btn.focus();
      }
    });
    eventOn("keydown", ".IvEyQ", function(UAenv) {
      var keyCode = UAenv.keyCode || UAenv.which;
      if (keyCode == 9) {
        if (!UAenv.shiftKey) {
          UA1("#TUAclosespace").parentElement.addAttr({"tabindex":"0"});
          UA1("#TUAclosespace").parentElement.focus();
        }
      }
    });
    eventOn("click", ".KSsgr .VDmCM", function() {
      var FtTIP = this;
      UA(".VDmCM").forEach(function(VnIxP, i) {
        if (FtTIP == VnIxP) {
          if (FtTIP.nextSibling.getCss("display") !== "none") {
            VnIxP.addAttr({"aria-expanded":"false"});
            VnIxP.nextSibling.OLcMJ({"max-height":"0px", "opacity":"0"}, 0.250);
            if (VnIxP.querySelector("img")) {
              VnIxP.querySelector("img").addAttr({"src":andiUA.KpAEX + "/images/FAQarrowGray.png", "alt":andiUA.KNTQg.UAtdr194});
            }
            setTimeout(function() {
              VnIxP.nextSibling.addCss({"display":"none"});
            }, 250);
          } else {
            var thisMenu = FtTIP.nextSibling;
            thisMenu.addCss({"display":"block"});
            thisMenu.OLcMJ({"max-height":"2000px", "opacity":"1"}, 0.250);
            FtTIP.addAttr({"aria-expanded":"true"});
            if (VnIxP.querySelector("img")) {
              VnIxP.querySelector("img").addAttr({"src":andiUA.KpAEX + "/images/FAQarrowPink.png", "alt":andiUA.KNTQg.UAtdr195});
            }
          }
        } else {
          VnIxP.addAttr({"aria-expanded":"false"});
          VnIxP.nextSibling.OLcMJ({"max-height":"0px", "opacity":"0"}, 0.250);
          if (VnIxP.querySelector("img")) {
            VnIxP.querySelector("img").addAttr({"src":andiUA.KpAEX + "/images/FAQarrowGray.png", "alt":andiUA.KNTQg.UAtdr194});
          }
          setTimeout(function() {
            VnIxP.nextSibling.addCss({"display":"none"});
          }, 250);
        }
      });
      andiUA.resizewindow();
    });
    eventOn("click", '[class^="stratArea"]', function(UAenv) {
      UAenv.preventDefault();
      this.parentElement.querySelector('[class^="endArea"]').addAttr({"tabindex":"0"});
      this.parentElement.querySelector('[class^="endArea"]').focus();
    });
    eventOn("click", "#TysXA", function(UAenv) {
      UAenv.preventDefault();
      var bodyElm = UA1("body");
      bodyElm.addAttr({"tabindex":"0"});
      bodyElm.focus();
      bodyElm.scrollTop = 0;
      bodyElm.addAttr({"tabindex":""});
    });
    eventOn("keydown", "#SQoLGAgreeBtn", function(e) {
      if (e.keyCode == 9) {
        if (!e.shiftKey) {
          UA1("#BVGhv").addAttr({"tabindex":"0"});
          UA1("#BVGhv").focus();
        }
      }
    });
    eventOn("keydown", "#chooseLang", function(e) {
      if (e.keyCode == 9) {
        if (e.shiftKey) {
          UA1("#SQoLGAgreeBtn + div").addAttr({"tabindex":"0"});
          UA1("#SQoLGAgreeBtn + div").focus();
        }
      }
    });
    eventOn("click", "#SQoLGAgreeBtn", function() {
      var correntLang = andiUA.zZBgg;
      if (UA1("#chooseLang").value != correntLang) {
        andiUA.createStorageItem("XOVJB", UA1("#chooseLang").value);
        location.reload();
      } else {
        andiUA.createStorageItem("XOVJB", UA1("#chooseLang").value);
      }
      andiUA.createStorageItem("SQoLG", "true");
      UA1("#SQoLG").OLcMJ({"opacity":"0"}, 1);
      setTimeout(function() {
        UA1("#SQoLG").addCss({"display":"none"});
      }, 1000);
    });
    eventOn("click", "#BVGhv input", function(UAenv) {
      UA1("#SQoLGAgreeBtn").click();
    });
    eventOn("click", "#dXLgH", function(UAenv) {
      UA1("#TUAprofileFunction").click();
      setTimeout(function() {
        if (UA1("#loadAndiSystem") !== null) {
          UA1("#loadAndiSystem").addAttr({"tabindex":"0"});
          UA1("#loadAndiSystem").focus();
        }
      }, 500);
    });
    eventOn("click", "#dontrunonthissite", function() {
      UA1("#jilVt").brAmf('<div id="MvQtQ"></div><div id="NWNWn" tabindex="0" role="dialog" aria-label="' + andiUA.KNTQg.UAtdr181 + '"><div class="andicloseSaveOption" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.UAtdr2107 + '"><b>X</b></div><div id="NWNWntext" tabindex="0" >' + andiUA.KNTQg.UAtdr2110 + '</div><br/><select aria-labelledby="NWNWntext" id="choosewhyoff"><option value="0">' + andiUA.KNTQg.UAtdr2114 + 
      "</option><option>" + andiUA.KNTQg.UAtdr2111 + "</option><option>" + andiUA.KNTQg.UAtdr2112 + "</option><option>" + andiUA.KNTQg.UAtdr2113 + '</option></select><br/><div id="ZWsSL"><div style="width: 230px;" id="andidontaddwhyoff" tabindex="0" role="button">' + andiUA.KNTQg.UAtdr2115 + "</div><br/></div></div>");
    });
    eventOn("click", "#andidontaddwhyoff", function() {
      andiUA.createStorageItem("dontruninthissite", "true");
      var lprde = "";
      lprde += andiUA.KNTQg.UAtdr2117 + window.location.href + "<br/>\n";
      lprde += andiUA.KNTQg.UAtdr2118;
      lprde += UA1("#choosewhyoff").value == "0" ? andiUA.KNTQg.UAtdr2116 : UA1("#choosewhyoff").value;
      var ILZYZ = andiUA.url + "andisendmail/sendmail.php";
      ajax1.post(ILZYZ, {lprde:lprde}, function() {
      }, true);
      location.reload();
    });
    eventOn("click", "#wrapNavigateWithLetters .andicloseSaveOption", function() {
      if (UA1("#wrapNavigateWithLettersbg") != null) {
        UA1("#wrapNavigateWithLettersbg").zOhhK();
      }
      if (UA1("#wrapNavigateWithLetters") != null) {
        UA1("#wrapNavigateWithLetters").zOhhK();
      }
      UA1("body").addAttr({"tabindex":"0"});
      UA1("body").focus();
      setTimeout(function() {
        UA1("body").tremoveAttr("tabindex");
      }, 10);
    });
    eventOn("click", "#NavigateWithLettersDonshowanymore", function() {
      andiUA.createStorageItem("NavigateWithLettersDonshowanymore", "true");
      if (UA1("#wrapNavigateWithLetters .andicloseSaveOption") != null) {
        UA1("#wrapNavigateWithLetters .andicloseSaveOption").click();
      }
    });
    eventOn("click", "#lugTJ", function(UAenv) {
      if (UA1("#andiifuserlogin")) {
        andiUA.yiPTV("andiifuserlogin", "logout:logout");
      }
      if (UA1("#loadAndiSystem")) {
        andiUA.yiPTV("loadAndiSystem", "logout:logout");
      }
      setTimeout(function() {
        UA1("#andilogout").setAttribute("tabindex", "-1");
        UA1("#andilogout").focus();
      }, 150);
    });
    eventOn("click", "#andiloginsmallmenu", function(UAenv) {
      UA1("#dXLgH").click();
      UA1("#andiwrapsmallmenusetting2").zOhhK();
    });
    eventOn("focusin", "#dXLgH,#andiuserheaderloginconnect", function(UAenv) {
      if (UA1("#andiwrapsmallmenusetting2")) {
        UA1("#andiwrapsmallmenusetting2").zOhhK();
      }
    });
    eventOn("click", "#andisetlang", function() {
      if (UA1("#andiwrapsmallmenusetting2")) {
        UA1("#andiwrapsmallmenusetting2").zOhhK();
      }
      UA1("#jilVt").brAmf('<div id="wrapMenuLang" ><div style="height:100%; position:relative !important;"><div id="andiMenuLangTopBar"></div><div id="andiMenuLangMiddleBar"><div id="andiMenuLangMiddleBar"><div id="andiMenuLangMiddleBarPart1"><div class="andiMenuLangMiddleBarBackBtn" ktjXB="' + andiUA.KNTQg.UAtdr279 + '" role="button" aria-label="' + andiUA.KNTQg.kmqYP + '" tabindex="0">&#x279c;</div><div id="andiMenuLangMiddleBarHeading" role="heading" aria-level="3">' +
    andiUA.KNTQg.UAtdr2148 + '</div></div><div id="andiMenuLangMiddleBarPart2"><div id="andiMenuLangMiddleBarWrapLang" role="radiogroup" aria-labelledby="andiMenuLangMiddleBarHeading">\
	<div role="radio" RadioBtn="0" aria-checked="false" tabindex="0" class="andiCorrntRaadioBtn andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleBarHebrew" andival="he">\u05e2\u05d1\u05e8\u05d9\u05ea<span class="langChoose"></span></div>\
	<div role="radio" RadioBtn="1" aria-checked="false" tabindex="-1" class="andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleBarEnglish" andival="en">English<span class="langChoose"></span></div>\
	<div role="radio" RadioBtn="2" aria-checked="false" tabindex="0" class="andiCorrntRaadioBtn andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleRussian" andival="ru">\u0420\u0443\u0441\u0441\u043a\u0438\u0439<span class="langChoose"></span></div>\
	<div role="radio" RadioBtn="3" aria-checked="false" tabindex="0" class="andiCorrntRaadioBtn andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleBarArab" andival="ar">\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629<span class="langChoose"></span></div>\
	<div role="radio" RadioBtn="4" aria-checked="false" tabindex="0" class="andiCorrntRaadioBtn andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleBarArab" andival="es">Español<span class="langChoose"></span></div>\
	<div class="andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleFrench" andival="fr">Fran\u00e7ais<span class="langComeSoon">' + andiUA.KNTQg.UAtdr2151 + '</span></div><div class="andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleItalian" andival="it">Italiano<span class="langComeSoon">' + andiUA.KNTQg.UAtdr2151 + '</span></div>\
	<div class="andiMenuLangMiddleBarRadioBtn" id="andiMenuLangMiddleSpanish" andival="es">Espa\u00f1ol|<span class="langComeSoon">' +
    andiUA.KNTQg.UAtdr2151 + '</span></div></div></div></div></div><div id="andiMenuLangMiddleBarSaveBtn" tabindex="0" role="button">' + andiUA.KNTQg.UAtdr2152 + "</div><div></div></div></div>");



	var VnIxP = UA1("#wrapMenuLang");
      var correntLang = localStorage.getItem("XOVJB");
      if (correntLang == "null" || correntLang == null || correntLang == "") {
        correntLang = UA1("html").getAttr("vFaKz");
      }
      UA("#wrapMenuLang, #wrapMenuLang *:not(.andimenucode)").forEach(function(VnIxP, i) {
        VnIxP.taddClass ("andimenucode");
      });
      setTimeout(function() {
        if (localStorage.getItem("FrDLf") == "right") {
          if (UA1(".andiMenuLangMiddleBarSaveBtnStyle") !== null) {
            UA1(".andiMenuLangMiddleBarSaveBtnStyle").zOhhK();
          }
          UA1("head").appendHtml('<style class="andiMenuLangMiddleBarSaveBtnStyle">#andiMenuLangMiddleBarSaveBtn{left:0 !important}</style>');
        } else {
          if (localStorage.getItem("FrDLf") == "left") {
            if (UA1(".andiMenuLangMiddleBarSaveBtnStyle") !== null) {
              UA(".andiMenuLangMiddleBarSaveBtnStyle").forEach(function(VnIxP, i) {
                VnIxP.zOhhK();
              });
            }
            UA1("head").appendHtml('<style class="andiMenuLangMiddleBarSaveBtnStyle">#andiMenuLangMiddleBarSaveBtn{right:0 !important}</style>');
          } else {
            if (UA1(".andiMenuLangMiddleBarSaveBtnStyle") !== null) {
              UA(".andiMenuLangMiddleBarSaveBtnStyle").forEach(function(VnIxP, i) {
                VnIxP.zOhhK();
              });
            }
          }
        }
      }, 300);
      UA1('[andival="' + correntLang + '"] .langChoose').pCFOS("&#x2714;");
      UA1('[andival="' + correntLang + '"] .langChoose').addAttr({"role":"region", "aria-checked":"true", "aria-label":andiUA.KNTQg.UAtdr2153});
      UA1(".andiMenuLangMiddleBarBackBtn").focus();
      andiUA.resizewindow();
    });
    eventOn("click", ".andiMenuLangMiddleBarBackBtn", function(e) {
      var VnIxP = UA1("#wrapMenuLang");
      VnIxP.OLcMJ({"opacity":"0"}, 1);
      setTimeout(function() {
        if (UA1("#wrapMenuLang")) {
          UA1("#wrapMenuLang").zOhhK();
        }
        UA1("#andiSetting").click();
        UA1("#andisetlang").focus();
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2171);
      }, 1000);
    });
    eventOn("keydown", ".andiMenuLangMiddleBarBackBtn", function(e) {
      if (e.keyCode == 9) {
        if (e.shiftKey) {
          UA1("#andiMenuLangMiddleBarSaveBtn + div").addAttr({"tabindex":"0"});
          UA1("#andiMenuLangMiddleBarSaveBtn + div").focus();
        }
      }
    });
    eventOn("keydown", "#wrapMenuLang *", function(e) {
      if (e.keyCode == 27) {
        UA1(".andiMenuLangMiddleBarBackBtn").click();
      }
    });
    eventOn("keydown", "#jilVt [role='button'],#jilVt [role='link'],#jilVt input", function(e) {
      UA(".UAshowTitle").forEach(function(VnIxP) {
        VnIxP.tremoveClass ("UAshowTitle");
      });
      if (e.keyCode == 9) {
        setTimeout(function() {
          if (document.activeElement.isIt("input,[role='link'],[role='button']")) {
            document.activeElement.taddClass ("UAshowTitle");
          }
        }, 10);
      }
    });
    eventOn("keydown", '#andiMenuLangMiddleBarWrapLang [role="radio"]', function(e) {
      if (UA1(".andiCorrntRaadioBtn") != null) {
        var corrntRaadioBtn = parseInt(UA1(".andiCorrntRaadioBtn").getAttr("RadioBtn"));
        var lastIndex = parseInt(UA("#andiMenuLangMiddleBarWrapLang [RadioBtn]").length);
        if (corrntRaadioBtn < lastIndex && corrntRaadioBtn >= 0) {
          if (e.keyCode == 38 || e.keyCode == 37) {
            e.preventDefault();
            if (corrntRaadioBtn - 1 >= 0) {
              var correntElm = UA1('#andiMenuLangMiddleBarWrapLang [RadioBtn="' + (corrntRaadioBtn - 1) + '"]');
              correntElm.addAttr({"tabindex":"0", "aria-checked":"true"});
              UA('#andiMenuLangMiddleBarWrapLang [role="radio"]').forEach(function(VnIxP) {
                VnIxP.addAttr({"tabindex":"-1", "aria-checked":"false"});
              });
              UA1(".andiCorrntRaadioBtn").tremoveClass ("andiCorrntRaadioBtn");
              correntElm.taddClass ("andiCorrntRaadioBtn");
              correntElm.focus();
            }
          }
          if (e.keyCode == 40 || e.keyCode == 39) {
            e.preventDefault();
            if (corrntRaadioBtn + 1 < lastIndex) {
              var correntElm = UA1('#andiMenuLangMiddleBarWrapLang [RadioBtn="' + (corrntRaadioBtn + 1) + '"]');
              correntElm.addAttr({"tabindex":"0", "aria-checked":"true"});
              UA('#andiMenuLangMiddleBarWrapLang [role="radio"]').forEach(function(VnIxP) {
                VnIxP.addAttr({"tabindex":"-1", "aria-checked":"false"});
              });
              UA1(".andiCorrntRaadioBtn").tremoveClass ("andiCorrntRaadioBtn");
              correntElm.taddClass ("andiCorrntRaadioBtn");
              correntElm.focus();
            }
          }
        }
      }
      if (e.keyCode == 13 || e.keyCode == 32) {
        e.preventDefault();
        this.click();
      }
    });
    eventOn("click", '#andiMenuLangMiddleBarWrapLang [role="radio"]', function() {
		var that = this;
      UA("#andiMenuLangMiddleBarWrapLang .langChoose").forEach(function(VnIxP) {
        VnIxP.pCFOS("");
      });
	  UA(".andiCorrntRaadioBtn").forEach(function(VnIxP) {
        VnIxP.tremoveClass ("andiCorrntRaadioBtn");
      });
      
      that.taddClass ("andiCorrntRaadioBtn");
      var correntElm = that;
      correntElm.querySelector("span").pCFOS("&#x2714;");
      correntElm.addAttr({"tabindex":"0", "aria-checked":"true"});
      correntElm.querySelector("span").addAttr({"aria-label":andiUA.KNTQg.UAtdr2154});
    });
    eventOn("click", "#andiMenuLangMiddleBarSaveBtn", function() {
      var correntLang = UA1("#andiMenuLangMiddleBarWrapLang .andiCorrntRaadioBtn").getAttr("andival");
      andiUA.createStorageItem("XOVJB", correntLang);
      andiUA.removeStorageItem("iconPositionLeftByUser");
      andiUA.removeStorageItem("iconPositionTopByUser");
      location.reload();
    });
    eventOn("keydown", "#andiMenuLangMiddleBarSaveBtn", function(e) {
      if (e.keyCode == 9) {
        if (!e.shiftKey) {
          UA1("#andiMenuLangMiddleBarPart1").addAttr({"tabindex":"0"});
          UA1("#andiMenuLangMiddleBarPart1").focus();
        }
      }
    });
    eventOn("click", "#andiSetting", function() {
      if (!UA1("#andiwrapsmallmenusetting2")) {
        this.VDtGB('<div id="andiwrapsmallmenusetting2" style="opacity:0"><div id="andisetlang" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.UAtdr2150 + '" ><div id="andisetlangtext">' + andiUA.KNTQg.UAtdr2148 + '</div><div id="andisetlangdefualt">' + (andiUA.zZBgg == "he" ? "\u05e2\u05d1\u05e8\u05d9\u05ea" : andiUA.zZBgg == "ru" ? "\u0440\u0443\u0441\u0441\u043a\u0438\u0439" : andiUA.zZBgg == "ar" ? 'عربيه' : andiUA.zZBgg == 'es' ? 'Español' : "English") + '</div></div><div id="dontrunonthissite" tabindex="0" role="button" aria-label="' + 
        andiUA.KNTQg.UAtdr2109 + '"><div id="andioffthissitetext">' + andiUA.KNTQg.UAtdr2147 + '</div><div id="andioffthissitewrapswitch"><div id="andioffthissitewrapswitchpart1"></div><div id="andioffthissitewrapswitchpart2"></div></div></div><hr/><div id="andilogout"><div id="lugTJ" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.UAtdr2143 + '">' + andiUA.KNTQg.UAtdr2141 + '</div><div id="andiloginsmallmenu" tabindex="0" role="button" aria-label="' + 
        andiUA.KNTQg.UAtdr2142 + '">' + andiUA.KNTQg.UAtdr2140 + '</div></div><hr/><div id="anditheteam"><a href="' + andiUA.url + 'ua/" target="_blank">' + andiUA.KNTQg.UAtdr2146 + '</a></div><div id="andiregulations"><a href="' + andiUA.url + 'regulations" target="_blank">' + andiUA.KNTQg.UAtdr2145 + '</a></div>                <div id="andiregulations2"><a href="' + andiUA.url + 'regulations#UAtdr2184" target="_blank">' + andiUA.KNTQg.UAtdr2184 + 
        '</a></div><div id="andiregulations3"><a href="' + andiUA.url + 'regulations#UAtdr2185" target="_blank">' + andiUA.KNTQg.UAtdr2185 + "</a></div></div>");
        andiUA.andiShowLogInOrOut2();
        UA1("#andiwrapsmallmenusetting2").OLcMJ({"opacity":"1"}, 0.50);
        UA("#andiwrapsmallmenusetting2, #andiwrapsmallmenusetting2 *:not(.andimenucode)").forEach(function(VnIxP, i) {
          VnIxP.taddClass ("andimenucode");
        });
        UA1("#dontrunonthissite").addCss({"display":!andiUA.pUVLT ? "inline-block" : "none"});
        UA1("#andiregulations").addCss({"display":!andiUA.pUVLT ? "inline-block" : "none"});
        UA1("#andiregulations2").addCss({"display":!andiUA.pUVLT ? "inline-block" : "none"});
        UA1("#andiregulations3").addCss({"display":!andiUA.pUVLT ? "inline-block" : "none"});
        UA1("#andilogout").addCss({"display":!andiUA.pUVLT ? "inline-block" : "none"});
        UA1("#andiwrapsmallmenusetting2 hr").addCss({"margin":!andiUA.pUVLT ? "0" : "10px 0"});
		  if(UA1("#andiwrapsmallmenusetting2")){
			UA1("#andiwrapsmallmenusetting2").addAttr({"tabindex":"0"});
			UA1("#andiwrapsmallmenusetting2").focus();
		  }
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2169);
      } else {
        UA1("#andiwrapsmallmenusetting2").OLcMJ({"opacity":"0"}, 0.5);
        setTimeout(function() {
          if (UA1("#andiwrapsmallmenusetting2")) {
            UA1("#andiwrapsmallmenusetting2").zOhhK();
          }
        }, 500);
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2168);
      }
    });
    eventOn("keydown", "#andiwrapsmallmenusetting2 *", function(e) {
      if (e.keyCode == 27) {
        UA1("#andiwrapsmallmenusetting2").OLcMJ({"opacity":"0"}, 0.5);
        setTimeout(function() {
          if (UA1("#andiwrapsmallmenusetting2")) {
            UA1("#andiwrapsmallmenusetting2").zOhhK();
          }
          UA1("#andiSetting").focus();
        }, 500);
      }
    });
    eventOn("keydown", "#SQoLG *", function(e) {
      if (e.keyCode == 27) {
        andiUA.ermtR();
        andiUA.resizewindow();
      }
    });
    eventOn("keydown", "#wrapMenuLang *", function(e) {
      if (e.keyCode == 27 && UA1("#andiMenuLangMiddleBarBackBtn") != null) {
        UA1("#andiMenuLangMiddleBarBackBtn").click();
        andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2171);
      }
    });
    document.addEventListener("hover", function() {
      (function() {
        if (localStorage.getItem("TUAstopSliders") == "yes") {
          andiUA.ANDIstopSliderMovmanet();
        }
      })();
    });
    eventOn("focusin", ".nrnYA", function(UAenv) {
      this.parentElement.addCss({"box-shadow":"0px 0px 0px 5px rgba(73,192,235,1)"});
    });
    eventOn("focusout", ".nrnYA", function(UAenv) {
      this.parentElement.addCss({"outline":""});
      this.parentElement.addCss({"box-shadow":""});
    });
    eventOn("click", "#TUAclosespace", function() {
      var ObbHH = localStorage.getItem("TUAspaceWord");
      if (ObbHH != null && ObbHH != undefined) {
        if (UA1("#andispaceWordStyle") !== null) {
          UA1("#andispaceWordStyle").zOhhK();
        }
        setTimeout(function() {
          UA1("#TUAspaceWords").focus();
        }, 50);
        var vdKGN = '<style id="andispaceWordStyle" CxhBEValue="' + ObbHH + '"> [data-andiallelmwithtext]:not(.andimenucode) {Word-spacing:' + ObbHH + "px !important;} </style>";
        UA1("head").appendHtml(vdKGN);
      }
      var ObbHH = localStorage.getItem("TUAspaceLetter");
      if (ObbHH != null && ObbHH != undefined) {
        if (UA1("#andispaceLetterStyle") !== null) {
          UA1("#andispaceLetterStyle").zOhhK();
        }
        setTimeout(function() {
          UA1("#TUAspaceLetter").focus();
        }, 50);
        var vdKGN = '<style id="andispaceLetterStyle" CxhBEValue="' + ObbHH + '"> [data-andiallelmwithtext]:not(.andimenucode) {letter-spacing:' + ObbHH + "px !important;} </style>";
        UA1("head").appendHtml(vdKGN);
      }
      var selectValue = localStorage.getItem("andiLineHeightStyle");
      if (selectValue != null && selectValue != undefined) {
        if (UA1("#andiLineHeightStyle") !== null) {
          UA1("#andiLineHeightStyle").zOhhK();
        }
        setTimeout(function() {
          UA1("#TUAspaceLines").focus();
        }, 50);
        var vdKGN = '<style id="andiLineHeightStyle" CxhBEValue="' + selectValue + '"> [data-andiallelmwithtext]:not(.andimenucode) {line-height:' + selectValue + "% !important;} </style>";
        UA1("head").appendHtml(vdKGN);
      }
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr254);
      if (UA1("body").hasAttribute("tryCostumColor")) {
        UA1(".KaxwEspace").click();
        UA("#" + localStorage.getItem("KwAGJ") + " svg path").forEach(function(VnIxP) {
          VnIxP.removeAttribute("style");
        });
      }
      if (UA1("#" + localStorage.getItem("KwAGJ")) !== null) {
        UA1("#" + localStorage.getItem("KwAGJ")).addAttr({"tabindex":"0"});
        UA1("#" + localStorage.getItem("KwAGJ")).focus();
      }
      if (UA1("#" + localStorage.getItem("KwAGJ")) !== null) {
        UA1("#" + localStorage.getItem("KwAGJ")).click();
      }
    });
    eventOn("click", "#UAcancelguideVoiceCommends", function(UAenv) {
      UA1(".closemenuMessageAlert").click();
    });
    eventOn("click", "#UAopenguideVoiceCommends", function(UAenv) {
      UA1(".closemenuMessageAlert").click();
      if (UA1("#jilVt").getCss("display") != "none") {
        UA1("#JlUMYinput").click();
      }
      andiUA.runguideVoiceCommends();
    });
    eventOn("keydown", '#UAopenguideVoiceCommends,#UAcancelguideVoiceCommends,  .keyboardhover,[ng-click],[role="link"],[role="button"],[XhTTR="true"], #panelToshowMainContentCloseBtn, #yCrCd  , [TUAheaderbarbtn] , [class^="kkeiq"],  #NWNWn .andicloseSaveOption , .YrOTA,.oECFzColor ,#HPZmg , .IvEyQ , #cGvHB ,#KNOZd, #YetWN , #mvutM  , .yukgZ, #hayOK  , #KJMJHtab1SmalleHelp .TUAHelpchangetolivetext , #xIRDN, #jqsqv, #kWalF , #iLSlI', 
    function(event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
		  if(!andizxc(this).is('button,a,input'))
			this.click();
      }
    });
    var createPopUp = function(html) {
      var TUAh = window.innerHeight;
      var TUAw = window.innerWidth;
      UA1("head").appendHtml('<style id="panelToShowTextStyle">#panelToShowText > .UAtextToRead:nth-child(4) {padding-top:40px;} #panelToShowText{    z-index: 99999999;position: fixed;top: 0; background-color: #fff;color: #000;width: ' + TUAw * 0.8 + "px; margin: " + (TUAh - 50) * 0.2 / 2 + "px " + TUAw * 0.2 / 2 + "px;font-size: 16px;height: " + (TUAh * 0.8 - 50) + "px;overflow: scroll;-webkit-box-shadow: 0px 0px 5px 99999px  rgba(0,0,0,0.62);-moz-box-shadow: 0px 0px 5px 99999px  rgba(0,0,0,0.62);box-shadow: 0px 0px 5px 99999px  rgba(0,0,0,0.62);\tdirection:" + 
      UA1("html").getAttr("DOwbI") + ";}</style>");
	  
      UA1("body").appendHtml('<div id="panelToShowText"><div class="innertexttoread">' + html + "</div></div>");
	  UA1("#panelToShowText").setAttribute('role','dialog');
      UA1("#panelToShowText").brAmf('<div class="MBtxi" tabindex="0"  aria-label="' + andiUA.KNTQg.fWPnd + '"></div><div aria-label="' + andiUA.KNTQg.GYxDi + '" role="button" tabindex="0" id="panelToShowTextCloseBtn"> X <span>' + andiUA.KNTQg.GYxDi + "</span></div>");
      UA1("#panelToShowText").appendHtml('<div class="Yhdpx" tabindex="0" aria-label="' + andiUA.KNTQg.PzKjw + '"></div>');
      UA1("#panelToShowText .Yhdpx").addEventListener("focus", function() {
        UA1("#panelToShowText .MBtxi").focus();
      });
      UA1("#panelToShowText .MBtxi").focus();
    };
    
    eventOn("input", ".KJMJHreadsAloudSetting .TUAreadsAloudvolume", function() {
      andiUA.createStorageItem("TUAreadsAloudvolume", this.value / 100);
    });
    eventOn("input", ".KJMJHreadsAloudSetting .TUAreadsAloudrate", function() {
      andiUA.createStorageItem("TUAreadsAloudrate", this.value / 100);
    });
    eventOn("input", ".KJMJHreadsAloudSetting .TUAreadsAloudSentencesfastforward", function() {
      andiUA.createStorageItem("TUAreadsAloudSentencesfastforward", this.value);
    });
    eventOn("input", ".KJMJHreadsAloudSetting .TUAreadsAloudSentencesbackforward", function() {
      andiUA.createStorageItem("TUAreadsAloudSentencesbackforward", this.value);
    });
    eventOn("input", ".KJMJHreadsAloudSetting .TUAreadsAloudMarkSentences", function() {
      andiUA.createStorageItem("TUAreadsAloudMarkSentences", this.checked);
    });
    

}
  andiUA.OcOfk = function() {
    UA("input:not([type])").forEach(function(VnIxP, i) {
      VnIxP.addAttr({"type":"text"});
    });
    UA("input").forEach(function(VnIxP, i) {
      andizxc(VnIxP).aoXYK();
    });
  };
  andiUA.credit = function() {
    if (andiUA.TUAsettingFn.compenywebsite.indexOf("user-a.co.il") == -1) {
      andizxc('#FbKLK [href*="user-a.co.il/"]').each(function() {
        if (andiUA.TUAsettingFn.compenyname.length > 23) {
          andiUA.TUAsettingFn.compenyname = andiUA.TUAsettingFn.compenyname.substring(0, 25);
        }
        var text1 = ' \u05d4\u05d5\u05e0\u05d2\u05e9 \u05e2"\u05d9 ';
        var text2 = '\u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea U.A \u05d1\u05e2"\u05de';
        var text3 = '\u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d9\u05d5 \u05d0\u05d9\u05d9 - \u05d9\u05d5\u05d6\u05e8 \u05d0\u05e7\u05e1\u05e1\u05d9\u05d1\u05d9\u05dc\u05d9\u05d8\u05d9 \u05d1\u05e2"\u05de \u00a9 2019, \u05e0\u05e4\u05ea\u05d7 \u05d1\u05d7\u05dc\u05d5\u05df \u05d7\u05d3\u05e9';
        if (UA1("html").getAttribute("vFaKz") == "en") {
          var text1 = "An accessible by";
          var text2 = "Using U.A LTD";
          var text3 = "Via U.A - User Accessibility Ltd. \u00a9 2019, opens in a new window";
        }
        if (UA1("html").getAttribute("vFaKz") == "ru") {
          var text1 = "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043f\u043e";
          var text2 = "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f U.A LTD";
          var text3 = "\u0427\u0435\u0440\u0435\u0437 U.A - User Accessibility Ltd. \u00a9 2019, \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435";
        }
		if(andiUA.TUAsettingFn.compenywebsite.indexOf('https://') == -1 && andiUA.TUAsettingFn.compenywebsite.indexOf('http://') == -1)andiUA.TUAsettingFn.compenywebsite = 'http://'+andiUA.TUAsettingFn.compenywebsite;
        andizxc(this).attr({"href":andiUA.TUAsettingFn.compenywebsite}).css({"width":"auto", "display":"inline-block"}).html(text1 +' ' + andiUA.TUAsettingFn.compenyname + " ");
        andizxc(this).after('<a href="https://user-a.co.il" target="_blank" style="margin:0 5px ;width: auto; display: inline-block;" aria-label="'+text3+'">'+text2+'</a>');
      });
    }
  };
  function ANDIDGmOk() {
    andiUA.elmWithText = [];
    var UA2ab = andiUA.fTyLi;
    if (UA1("title") !== null && UA1("title").innerText == "Accessible print mode") {
      return false;
    }
    andiUA.hqfMu();
    andiUA.elmWithText = UA("[data-andiallelmwithtext]");
    andiUA.eqFML();
    andiUA.createStorageItem("uiWAD", andiUA.TUAsettingFn.zqayb.backgroundColor);
    andiUA.ZPnPo();
    andiUA.createAccessibilityMenu();
    andiUA.newTag();
    andiUA.XDRlX();
    andiUA.RQVOs = UA(".khlBU .bnVjM img");
    andiUA.allEvents2();
    andiUA.allEvents();
    andiUA.SsrQV();
    andizxc("#jilVt *:not(.andimenucode)").each(function(i) {
      this.taddClass ("andimenucode");
    });    
    andiUA.Smibn();
    andiUA.SlKyQ();
    andiUA.AuQRp();
    andiUA.WiqOa();
    andiUA.ajiho();
    andiUA.vRofr();
    andiUA.TUAhideformsr();
    
    andiUA.iJjjZ(andiUA.TUAsettingFn.AfMwa);
    andiUA.pMvmI(andiUA.TUAsettingFn.rbcUf);
    if (andiUA.zZBgg == "ru" || andiUA.zZBgg == 'es') {
      var css = '#jilVt #fvLXm .owUce img{    height: 160px;}.LAsQk .QybqI svg {width: 20%;height: 20%;}#jilVt .rZZEa .joMhk p{font-size: 15px !important;}#Layer_111,#TUAshowMainContent img{left:auto !important;right:0 !important;width: 25px;}#svgadvancedSupportForScreenReader{right: 10px !important;left: auto  !important;;}#YlCpH{height: 20px;}#PcvgW, #mvutM{line-height: 19px;}#lWMeB{font-size: 15px;}#LNHvo{font-size: 17px;}#PRxAh .mJoej .EbTkc{padding: 20px 14px 0;}#PRxAh .mJoej .EbTkc [class^="kkeiq"]{width: 68px;}#PRxAh .mJoej .EbTkc input[type="text"], #PRxAh .mJoej .EbTkc textarea{    margin: 0;}#cGvHB{width: 85px;}#PGaVc, #ylWRt{width: 52%;}#dXLgH{width: 111px;}#SQoLGAgreeBtn{width: 88%;}.uawrapintrotext {overflow: overlay;height: calc(100% - 66px);}#UAwrapCameraSetttingdetials .CameraSetttingEnd{ width:210px !important;height: 55px;}#Layer_111{left:auto !important;right:0 !important;}#UAcancelguideVoiceCommends{    height: auto; !important;}#MPAmn + span{height: 50px;overflow: hidden;overflow-y: scroll;}.CameraSetttingNextLevel{ width:160px !important;}';
      UA1("body").appendHtml('<style id="cssRuLang">' + css + "</style>");
    }
    andiUA.resizewindow();
    if (localStorage.getItem("UA2bigMenu") == "true") {
      UA1("body").appendHtml('<style id="TUAbigMenu">.andiOpenSubMenu{width:calc(15px * 1.3);height:calc(15px * 1.3)}#QSgtZ,#tUNGC{max-height:calc(510px * 1.3)!important}#Xyxvy,.Xyxvy{width:calc(30px * 1.3);height:calc(30px * 1.3)}#lWMeB:focus:after,#lWMeB:hover:after,#ADyWm:focus:after,#ADyWm:hover:after,#QlvZw:focus:after,#QlvZw:hover:after{margin-top:calc(5px * 1.3)!important;padding:calc(5px * 1.3)!important;width:calc(300px * 1.3)!important}@-webkit-keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}@-moz-keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}@-ms-keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}@keyframes OHtEQ{to{box-shadow:0 0 0 calc(20px * 1.3) transparent}}#jilVt,#PcvgW,#mvutM{-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#gMhQJ input[type=image],#TZwBB input[type=image]{width:calc(30px * 1.3);height:calc(30px * 1.3);padding:calc(6px * 1.3)}#ADyWm img{width:calc(23px * 1.3)!important}#jilVt,#jilVt *,#hayOK *,#BCaLN,#BCaLN *,#GRwhC{line-height:calc(20px * 1.3);font-size:calc(16px * 1.3)}#xIRDN img{width:calc(35px * 1.3);height:calc(35px * 1.3)}.TUAmakeBuggerMenu{font-size:calc(24px * 1.3)!important}#VbcHu>div>div>div:hover::before{border-left:calc(20px * 1.3) solid transparent!important;border-right:calc(20px * 1.3) solid transparent!important;border-top:calc(20px * 1.3) solid red!important}#VbcHu>div>div>div:focus:before{border-width:0 calc(100px * 1.3) calc(100px * 1.3)!important}[ktjXB]:focus:after,[ktjXB]:hover:after{border-radius:calc(1px * 1.3);margin-top:calc(5px * 1.3);padding:calc(5px * 1.3);top:calc(40px * 1.3);font-size:calc(16px * 1.3)!important}.KaxwEspace[ktjXB]:focus:after,.KaxwEspace[ktjXB]:hover:after{top:calc(-40px * 1.3)!important}#oECFzNoColor[ktjXB]:focus:after,#oECFzNoColor[ktjXB]:hover:after{width:calc(100px * 1.3);top:calc(40px * 1.3)!important;margin:0 calc(-24px * 1.3)}[andifirsttime]:focus:before,[andifirsttime]:hover:before{border-width:0 calc(100px * 1.3) calc(100px * 1.3)}[andifirsttime]:focus:after,[andifirsttime]:hover:after{border-radius:calc(1px * 1.3);right:calc(17px * 1.3);margin-top:calc(5px * 1.3);padding:calc(5px * 1.3);top:calc(40px * 1.3);width:calc(90px * 1.3)}#QlvZw:focus:after,#QlvZw:hover:after{right:calc(10px * 1.3)!important;top:calc(193px * 1.3)!important;left:auto}#ADyWm:focus:after,#ADyWm:hover:after{right:calc(10px * 1.3)!important;top:calc(97px * 1.3)!important}#lWMeB:focus:after,#lWMeB:hover:after{right:calc(10px * 1.3)!important;top:calc(140px * 1.3)!important;font-size:calc(16px * 1.3)!important}#VbcHu>div>div>div:focus:after,#VbcHu>div>div>div:hover:after{border-radius:calc(1px * 1.3);right:calc(10px * 1.3)!important;margin-top:calc(5px * 1.3);padding:calc(5px * 1.3);top:calc(40px * 1.3)}#uDFjQ,#uDFjQ a{padding:calc(2px * 1.3);font-size:calc(14px * 1.3)}#JlUMY:focus:after,#JlUMY:hover:after{left:calc(17px * 1.3)!important}#iLSlI img,#fjaun img{margin:calc(8px * 1.3) auto;width:calc(16px * 1.3)}#jilVt{width:calc(320px * 1.3)!important;box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#SQoLG{width:calc(320px * 1.3)}#SQoLG *{font-size:calc(16px * 1.3)}#SQoLGBigImgText{padding:calc(20px * 1.3) calc(5px * 1.3);font-size:calc(14px * 1.3)}#SQoLGBigImg{width:calc(320px * 1.3);height:calc(130px * 1.3);background-size:calc(78px * 1.3) calc(73px * 1.3)}#SQoLGBasicSetting{width:calc(300px * 1.3);height:calc(325px * 1.3);margin:calc(30px * 1.3) calc(10px * 1.3) calc(5px * 1.3);padding:calc(5px * 1.3) calc(17px * 1.3)}#SQoLGBasicSetting *{font-size:calc(14px * 1.3)}#SQoLGAgreeBtn{left:calc(20px * 1.3);bottom:calc(20px * 1.3);width:calc(155px * 1.3);height:calc(36px * 1.3);font-size:calc(16px * 1.3);line-height:calc(36px * 1.3);border-radius:calc(2px * 1.3)}#SQoLG .andilastparph{width:calc(215px * 1.3);margin:calc(13px * 1.3) calc(13px * 1.3) 0 0;font-size:calc(14px * 1.3)}#BVGhv{width:calc(320px * 1.3);height:calc(30px * 1.3);padding:calc(5px * 1.3)}#SQoLG input{width:calc(20px * 1.3);height:calc(20px * 1.3)}#uDFjQ{width:calc(320px * 1.3);height:calc(35px * 1.3);left:0}#jilVt #BEMFU{width:calc(320px * 1.3);height:calc(30px * 1.3)}#jilVt #VbcHu>div{line-height:calc(4px * 1.3);background-color:#03A9F4}#jilVt .DoyLq{height:calc(3px * 1.3);background-color:#03A9F4}#jilVt #VbcHu>div>div{width:calc(80px * 1.3);height:calc(64px * 1.3)}#jilVt #cWIDE{width:calc(320px * 1.3);height:calc(65px * 1.3);padding-top:calc(16px * 1.3)}#PcvgW,#mvutM{font-size:calc(15px * 1.3);line-height:calc(30px * 1.3);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);border-radius:calc(2px * 1.3);-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);margin:0 calc(5px * 1.3);padding:0 calc(3px * 1.3)}#LNHvo,#lWMeB,#KJMJHtab1middleHelp .TUAHelpskipbtn{-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#lWMeB,#LHRwG{font-size:calc(18px * 1.3);border-radius:calc(2px * 1.3);line-height:calc(30px * 1.3);height:calc(30px * 1.3)}#LHRwG{-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);width:calc(320px * 1.3)}#lWMeB{-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);padding:0 calc(10px * 1.3);width:calc(295px * 1.3)}#jilVt #cWIDE #PhVFO #lWMeB img{width:calc(25px * 1.3);margin:calc(6px * 1.3) calc(-2px * 1.3)}#jilVt #cWIDE #PhVFO #lWMeB img.TUAseeActiveBasicAcccessibilityIcon{margin:calc(6px * 1.3) calc(-2px * 1.3)}#jilVt #ciZJc{width:calc(320px * 1.3);height:calc(35px * 1.3);background-color:#fff;box-shadow:inset 0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#bZkqy{width:calc(320px * 1.3);height:calc(32px * 1.3)}#jilVt #ciZJc #QlvZw{margin:0 calc(10px * 1.3);font-size:calc(16px * 1.3);width:calc(300px * 1.3);height:calc(30px * 1.3);padding-top:calc(7px * 1.3)}#jilVt #ciZJc img{width:calc(14px * 1.3);height:calc(5px * 1.3);margin:calc(7px * 1.3) 128px 0 0}#jilVt #fvLXm{width:calc(323px * 1.3);height:calc(410px * 1.3);margin:0;padding-right:calc(6px * 1.3);padding-left:calc(6px * 1.3)}#jilVt #FbKLK{width:calc(320px * 1.3);height:calc(45px * 1.3);padding:8px calc(8px * 1.3) 0}#jilVt #FbKLK a{font-size:calc(14px * 1.3);line-height:calc(35px * 1.3)}#jilVt .IdrLU .FbKLK{width:calc(320px * 1.3);height:calc(35px * 1.3)}#jilVt #fvLXm .owUce p{line-height:calc(20px * 1.3);width:calc(133px * 1.3);height:calc(60px * 1.3);font-size:calc(18px * 1.3)!important;    padding-top: 128px;}#jilVt #fvLXm .owUce img{width:calc(149px * 1.3);height:calc(149px * 1.3)}#VbcHu #jilVt .rZZEa .joMhk p{font-size:calc(16px * 1.3)!important;padding:calc(2px * 1.3) calc(3px * 1.3)}#jilVt #fvLXm .IdrLU{width:calc(338px * 1.3);height:calc(575px * 1.3)}#jilVt #fvLXm .khlBU .bkVMl{width:calc(320px * 1.3);height:calc(64px * 1.3);-webkit-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);-moz-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7)}#jilVt #fvLXm .khlBU .rZZEa{width:calc(320px * 1.3)}#jilVt #fvLXm .khlBU .vjEnr{width:calc(320px * 1.3);height:0;margin-top:calc(10px * 1.3)}#jilVt #fvLXm :focus,#cWIDE :focus{outline:#888 solid calc(1px * 1.3)!important}#jilVt #fvLXm .khlBU #MoexW{width:calc(300px * 1.3);height:calc(185px * 1.3);padding-top:calc(10px * 1.3)}#jilVt #fvLXm .khlBU #faSsr{width:calc(145px * 1.3)}#fvLXm .bnVjM{width:calc(149px * 1.3)!important;height:calc(148px * 1.3)!important}.LightHighContrastMenu #fvLXm .bnVjM{width:calc(149px * 1.3)!important;height:calc(122px * 1.3)!important}#YQger .KaxwEspace{width:calc(45px * 1.3);height:calc(35px * 1.3)}#aWgWOCloseBtn,#GRwhC .yukgZ,#KJMJHvikiResultsCloseBtn{height:calc(25px * 1.3)}#YQger .KaxwEspace img{width:calc(35px * 1.3);height:calc(25px * 1.3)}#fvLXm .suyYi img{margin:0 calc(3px * 1.3)!important}#fvLXm .suyYi{width:calc(150px * 1.3)!important;height:calc(110px * 1.3)!important}#fvLXm .bnVjM .zEGkT{margin:calc(10px * 1.3) auto 0;padding:0 calc(12px * 1.3)}#faSsr label{margin:calc(5px * 1.3) calc(15px * 1.3) 0;font-size:calc(13px * 1.3)}#HYACe{margin:0 calc(15px * 1.3);font-size:calc(16px * 1.3);height:calc(20px * 1.3);border-bottom:calc(1px * 1.3) solid #fff}#HYACe:before{font-size:calc(18px * 1.3);height:calc(20px * 1.3)}#HYACe option{width:calc(150px * 1.3);margin:0 calc(15px * 1.3);font-size:calc(16px * 1.3);height:calc(35px * 1.3);border-radius:calc(2px * 1.3)}#jilVt #fvLXm .khlBU #CrXug{width:calc(124px * 1.3);height:calc(50px * 1.3)}#jilVt #fvLXm .khlBU #WNAYU,#jilVt #fvLXm .khlBU #CrXug input[type=number],#jilVt #fvLXm .khlBU #jqTGZ{border:calc(1px * 1.3) solid #fff;height:calc(20px * 1.3)}#jilVt #fvLXm .khlBU #CrXug label{margin:calc(5px * 1.3) calc(15px * 1.3) 0;font-size:calc(13px * 1.3)}#CrXug input[type=number]:after{margin-left:calc(-17px * 1.3);margin-top:calc(12% * 1.3);font-size:calc(11px * 1.3)}#CrXug input[type=number]:before{margin-left:calc(-17px * 1.3);font-size:calc(11px * 1.3)}#PGaVc,#ylWRt{font-size:calc(13px * 1.3)}#WNAYU:after,#WNAYU:before,jqTGZ:after,jqTGZ:before{margin-left:calc(-17px * 1.3);font-size:calc(11px * 1.3)}#MoexW #TUAclosespace{margin:calc(5px * 1.3)}#YQger{width:calc(320px * 1.3)}#YQger .hjVeU,#YQger .IvEyQ{width:calc(115px * 1.3);height:calc(35px * 1.3);padding-top:calc(7px * 1.3);border-radius:calc(2px * 1.3)}#YQger .hjVeU{margin-left:calc(15px * 1.3)}#jilVt #fvLXm div.rZZEa>div.ltsXQ{width:calc(320px * 1.3);height:calc(100px * 1.3)}#jilVt #fvLXm div.rZZEa>div.ltsXQ img{height:calc(100px * 1.3)}#jilVt #fvLXm #ratYL,#jilVt #fvLXm #yIiKG{top:calc(220px * 1.3)}#jilVt #fvLXm #vbCoe,#jilVt #fvLXm #oGNab{bottom:calc(195px * 1.3)}#fvLXm .rZZEa .QybqI svg,#sDZbX,#cqUuD #YlCpH{bottom:calc(10px * 1.3)}#vbCoe div.bkVMl div.AueIG,#ratYL div.bkVMl div.AueIG,#oGNab div.bkVMl div.AueIG,#yIiKG div.bkVMl div.AueIG{width:calc(25px * 1.3)!important;height:calc(24px * 1.3)!important;font-size:calc(24px * 1.3);margin:calc(20px * 1.3) calc(10px * 1.3) calc(5px * 1.3)}#vbCoe div.bkVMl>div.xFWoP,#ratYL div.bkVMl>div.xFWoP,#oGNab div.bkVMl>div.xFWoP,#yIiKG div.bkVMl>div.xFWoP{height:calc(24px * 1.3)!important;font-size:calc(16px * 1.3);line-height:calc(64px * 1.3)}#fvLXm .rZZEa .LAsQk{width:calc(320px * 1.3);height:calc(102px * 1.3);padding-right:calc(7px * 1.3)}#EXRcw img,#TUAwhiteMouse img{width:calc(20px * 1.3)!important}#fvLXm .rZZEa .qXbVl img{margin:0 calc(5px * 1.3)}#fvLXm .rZZEa .qXbVl{box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5);width:calc(295px * 1.3)}#fvLXm .rZZEa .otNdX{width:calc(149px * 1.3);height:calc(60px * 1.3);font-size:calc(14px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#fvLXm .rZZEa .QybqI{width:calc(97px * 1.3);height:calc(95px * 1.3);font-size:calc(14px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5);margin-top:calc(7px * 1.3)}#gkzUY{height:calc(336px * 1.3);width:calc(170px * 1.3)}#gkzUY.JUWgG input{width:calc(56px * 1.3)!important;height:calc(56px * 1.3)!important;margin:0!important}#gkzUY.JUWgG{height:calc(332px * 1.3);width:calc(170px * 1.3);padding:0}#gkzUY.JUWgG>div>div{border:calc(1px * 1.3) solid #ededed;padding:calc(8px * 1.3) calc(12px * 1.3);width:calc(56px * 1.3)!important;height:calc(56px * 1.3)!important}#gkzUY .cLOVr{width:calc(170px * 1.3)!important;height:calc(56px * 1.3)!important}#gkzUY.JUWgG div input{width:calc(56px * 1.3);height:calc(54px * 1.3)}#wSOJP{width:100%}#wSOJP #klIYg,#wSOJP #JwXSG,#wSOJP #BCaLN{width:calc(640px * 1.3);height:calc(152px * 1.3)}#wSOJP #klIYg #FynQv{width:calc(640px * 1.3);height:calc(32px * 1.3)}#wSOJP #klIYg #FynQv .tlIvc{cursor:not-allowed;width:calc(55px * 1.3);height:calc(32px * 1.3);line-height:calc(32px * 1.3)}#wSOJP #klIYg #FynQv .tlIvc#bGFVi{margin-left:calc(10px * 1.3)}#wSOJP #klIYg #ONITw{width:calc(640px * 1.3);height:calc(80px * 1.3)}#wSOJP #klIYg #ONITw .NaTmy{width:calc(50px * 1.3);height:calc(50px * 1.3);margin:calc(20px * 1.3) 0 0 calc(2px * 1.3);line-height:calc(50px * 1.3);font-size:calc(20px * 1.3)}#wSOJP #klIYg #laCWS{width:calc(640px * 1.3);height:0;border:calc(1px * 1.3) solid #31C1EE}#wSOJP #klIYg #laCWS:after{top:100%;border-top:solid calc(12px * 1.3) #31C1EE;border-left:solid calc(12px * 1.3) transparent;border-right:solid calc(12px * 1.3) transparent}#wSOJP #klIYg #ONITw .NaTmy#XlqzP,#wSOJP #klIYg #ONITw .NaTmy#pEjkF{font-size:calc(25px * 1.3)}#wSOJP #klIYg #MOusc{margin-top:calc(12px * 1.3);width:calc(260px * 1.3)}#wSOJP #HzMFn{width:calc(400px * 1.3);height:calc(35px * 1.3)}.AueIG{width:calc(25px * 1.3)!important;height:calc(24px * 1.3)!important;font-size:calc(24px * 1.3);margin:calc(15px * 1.3) calc(10px * 1.3) 0}#oECFz{width:calc(300px * 1.3);height:calc(185px * 1.3)}#zHZQI{width:calc(223px * 1.3);height:calc(50px * 1.3);margin:20px 0 0}#zgJkZ{width:calc(50px * 1.3);height:calc(50px * 1.3);margin:20px 0 0}#zHZQI .oECFzColor{margin:calc(6px * 1.3) calc(3px * 1.3) calc(1px * 1.3);width:calc(22px * 1.3);height:calc(22px * 1.3);border-radius:calc(17px * 1.3)}#zgJkZ .oECFzColor{margin:calc(6px * 1.3) calc(3px * 1.3) calc(1px * 1.3);border:calc(1px * 1.3) solid #fff;width:calc(50px * 1.3);height:calc(50px * 1.3);border-radius:calc(50px * 1.3);font-size:calc(16px * 1.3);padding:calc(15px * 1.3) calc(12px * 1.3)}.nrnYA,.UAscreenReaderOnly,h3.zStNQ{height:calc(1px * 1.3)!important;width:calc(1px * 1.3)!important}h3.zStNQ{margin:0!important;font-size:calc(1px * 1.3)}.nrnYA,.UAscreenReaderOnly{margin:calc(-1px * 1.3)!important;font-size:calc(16px * 1.3)!important}.ORmKP,.ZWDCr,.vnbtL{height:calc(1px * 1.3);width:calc(1px * 1.3);font-size:calc(16px * 1.3)!important}.nrnYA:focus{margin:0!important;padding:0 calc(10px * 1.3)!important}.ORmKP{margin:calc(-1px * 1.3)}.ORmKP:focus{margin:0!important;padding:0 calc(10px * 1.3)!important}.ORmKP:active,.ORmKP:target{margin:0;padding:0 calc(10px * 1.3)}.vnbtL{margin:calc(-1px * 1.3)}.vnbtL:focus{margin:0!important;padding:0 calc(10px * 1.3)!important}.vnbtL:active,.vnbtL:target{margin:0}.ZWDCr{margin:calc(-1px * 1.3)}.ZWDCr:focus{margin:0;padding:0 calc(10px * 1.3)}#eHFXi{height:calc(226px * 1.3);width:100%!important;padding:calc(5px * 1.3)}#eHFXi #LXBSB{width:calc(663px * 1.3)}#eHFXi #ncSEc{margin:calc(5px * 1.3);padding:calc(5px * 1.3);border:calc(1px * 1.3) solid #333;-moz-border-radius:calc(5px * 1.3);-webkit-border-radius:calc(5px * 1.3)}#eHFXi div[role=button]{margin:0 calc(5px * 1.3) calc(5px * 1.3) 0;width:calc(30px * 1.3);height:calc(30px * 1.3);line-height:calc(40px * 1.3);border:calc(1px * 1.3) solid #222;-moz-border-radius:calc(5px * 1.3);-webkit-border-radius:calc(5px * 1.3)}#nSibfboard div[role=button].CRRSy,#eHFXi #nSibfboard div[role=button].QhFEO,#eHFXi .geviL{width:calc(70px * 1.3)!important}#nSibfboard div[role=button]:hover,#eHFXi #nSibfboard div[role=button]:focus{top:calc(1px * 1.3);left:calc(1px * 1.3)}#eHFXi #nSibfboard div[role=button].TZDKMpslock{width:calc(80px * 1.3)}#eHFXi #nSibfboard div[role=button].FiIOl{width:calc(55px * 1.3)}#eHFXi #nSibfboard div[role=button].IbElw{width:calc(95px * 1.3)}#eHFXi #nSibfboard div[role=button].TtZzB{width:calc(77px * 1.3)}#eHFXi #KJMJHLang div[role=button].jSpEZ{height:calc(30px * 1.3);width:calc(93px * 1.3)!important}#eHFXi #nSibfboard div[role=button].PkuNm{width:calc(548px * 1.3)}#eHFXi #KJMJHLang{height:calc(185px * 1.3);width:calc(95px * 1.3)!important}[id^=DRXXH]{width:calc(20px * 1.3);height:calc(20px * 1.3)}#PFaFV{padding:calc(10px * 1.3)!important;font-size:calc(16px * 1.3)!important}#WBNCR{height:calc(30px * 1.3)!important;margin-top:calc(20px * 1.3)!important}#syeKB{width:calc(300px * 1.3)}#wJebo,#HPZmg{border:calc(1px * 1.3) solid #fff;height:calc(100px * 1.3);margin:0 calc(3px * 1.3)}.Awzjy,.Awzjy img{width:calc(36px * 1.3);height:calc(36px * 1.3)}#ZJSXb,#nztwL{padding:calc(5px * 1.3);font-size:calc(14px * 1.3)}.Awzjy{margin:calc(14px * 1.3) 0 0 calc(5px * 1.3)!important}#aWgWOCloseBtn,#GRwhC .yukgZ{width:calc(25px * 1.3);padding:calc(5px * 1.3);font-size:calc(16px * 1.3)!important}#GRwhC{top:calc(5px * 1.3);width:calc(320px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.85);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.85);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.85);padding:0 0 calc(6px * 1.3)}#sAnbY{width:calc(320px * 1.3);height:calc(30px * 1.3)}#GRwhC #SLDoH{font-size:calc(16px * 1.3)!important;width:calc(170px * 1.3)!important;height:calc(35px * 1.3);padding:0 calc(5px * 1.3)}#GRwhC select{font-size:calc(16px * 1.3)!important;width:calc(80px * 1.3);height:calc(30px * 1.3)}#GRwhC #hayOK{width:calc(30px * 1.3);height:calc(30px * 1.3);padding:calc(6px * 1.3)}#GRwhC #iCVuF{height:calc(35px * 1.3);width:calc(310px * 1.3)!important;padding:0 calc(5px * 1.3);margin:0 calc(5px * 1.3)}#GRwhC #aWgWO{width:calc(310px * 1.3);margin:calc(5px * 1.3)}#GRwhC #aWgWO h3{font-size:calc(16px * 1.3)!important;padding:calc(5px * 1.3) 0;width:100%!important}#GRwhC #aWgWO p{font-size:calc(16px * 1.3)!important;padding:0}#GRwhC h2{font-size:calc(16px * 1.3)!important;padding:calc(5px * 1.3);width:calc(250px * 1.3)!important}#GRwhC hr{border:calc(1px * 1.3) solid #ccc!important}#aWgWOImgWrap{padding:calc(5px * 1.3)}#aWgWOImgWrap img{width:calc(40px * 1.3);height:calc(40px * 1.3)}#aWgWOTextWrap .companyName{margin:calc(5px * 1.3) 0}#bnKlS,#LAIbg{margin:0 calc(10px * 1.3);width:calc(300px * 1.3);padding-top:calc(7px * 1.3);height:calc(30px * 1.3)}#PSniF{width:calc(320px * 1.3);height:calc(85px * 1.3)}#osLFe{width:calc(320px * 1.3);height:calc(65px * 1.3);padding-top:calc(16px * 1.3)}#LNHvo{border-radius:calc(2px * 1.3);-moz-border-radius:calc(2px * 1.3);-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3) calc(2px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#YhDtt{width:calc(320px * 1.3);height:calc(35px * 1.3);box-shadow:inset 0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#LAIbg{font-size:calc(16px * 1.3)}#JPJBz{height:calc(444px * 1.3)}#QSgtZ :focus{outline:#888 solid calc(2px * 1.3)!important}#IFEiM{width:calc(320px * 1.3);height:calc(115px * 1.3);padding-top:calc(33px * 1.3)}#LNHvo{font-size:calc(19px * 1.3);border-top:calc(1px * 1.3) solid #fff;border-bottom:calc(1px * 1.3) solid #fff;padding:0 calc(10px * 1.3);width:calc(300px * 1.3);line-height:calc(50px * 1.3);height:calc(50px * 1.3)}#LNHvo img{width:calc(30px * 1.3);line-height:calc(50px * 1.3);padding-top:calc(14px * 1.3)}#bnKlS{font-size:calc(16px * 1.3)}#HxpCr .KSsgr .Zrljr,#HxpCr .KSsgr .VDmCM{padding:calc(5px * 1.3);font-size:calc(14px * 1.3);border-bottom:calc(1px * 1.3) solid #ccc}#HxpCr{height:calc(410px * 1.3);width:calc(338px * 1.3);font-size:calc(14px * 1.3)}#HxpCr .KSsgr{width:calc(318px * 1.3)}#HxpCr .KSsgr :focus{outline:#000 solid calc(1px * 1.3)}#HxpCr .KSsgr .VDmCM img{width:calc(15px * 1.3);top:calc(10px * 1.3)}#gAoCt{width:calc(320px * 1.3);height:calc(115px * 1.3)}#gAoCt #YIRzs{margin:calc(10px * 1.3);font-size:calc(16px * 1.3)}#tgGWn{width:calc(320px * 1.3);height:calc(30px * 1.3);padding:calc(5px * 1.3) calc(10px * 1.3)}#IULPc{width:calc(320px * 1.3);height:calc(325px * 1.3);padding:calc(3px * 1.3) calc(10px * 1.3)}#TwIfU{width:calc(320px * 1.3);height:calc(50px * 1.3)}#YFJzt,#yCrCd{height:calc(50px * 1.3);padding:calc(12px * 1.3) calc(10px * 1.3);font-size:calc(18px * 1.3)}#RmKVO{height:calc(85px * 1.3);width:calc(300px * 1.3);padding:calc(10px * 1.3) calc(10px * 1.3) 0;font-size:calc(14px * 1.3)}#PRxAh{width:calc(1820px * 1.3);margin-right:calc(22px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej{width:calc(245px * 1.3);height:calc(180px * 1.3);margin:0 calc(5px * 1.3)}#PRxAh .mJoej .wxYqU{width:calc(245px * 1.3);height:calc(75px * 1.3);font-size:calc(14px * 1.3);border-radius:calc(2px * 1.3) calc(2px * 1.3) 0 0;-moz-border-radius:calc(2px * 1.3) calc(2px * 1.3) 0 0;-webkit-border-radius:calc(2px * 1.3) calc(2px * 1.3) 0 0}#PRxAh .mJoej .wxYqU .YrOTA{top:calc(10px * 1.3);width:calc(20px * 1.3);height:calc(20px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej .wxYqU .fEqjh{padding:calc(10px * 1.3) calc(25px * 1.3) 0 calc(15px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej .EbTkc{width:calc(245px * 1.3);height:calc(90px * 1.3);-webkit-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);-moz-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);padding:calc(20px * 1.3) calc(40px * 1.3) 0;font-size:calc(14px * 1.3);border-radius:0 0 calc(2px * 1.3) calc(2px * 1.3);-moz-border-radius:0 0 calc(2px * 1.3) calc(2px * 1.3);-webkit-border-radius:0 0 calc(2px * 1.3) calc(2px * 1.3)}#PRxAh .mJoej .EbTkc [class^=kkeiq]{width:calc(50px * 1.3);height:calc(50px * 1.3);-webkit-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);-moz-box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);box-shadow:0 calc(1px * 1.3) calc(5px * 1.3) calc(-1px * 1.3) rgba(89,89,89,1);font-size:calc(14px * 1.3);margin:calc(2px * 1.3)}#PRxAh .mJoej .EbTkc input[type=text],#PRxAh .mJoej .EbTkc textarea{border-bottom:calc(1px * 1.3) solid #0288D1;width:calc(210px * 1.3);margin:0 calc(-24px * 1.3);font-size:calc(14px * 1.3)}#PRxAh .mJoej .EbTkc .uPqNm{margin:calc(20px * 1.3) 0}#PRxAh .mJoej .EbTkc .uPqNm label{font-size:calc(14px * 1.3);margin-right:calc(-20px * 1.3)}#PRxAh .mJoej .EbTkc .uPqNm input[type=text]{height:calc(20px * 1.3);font-size:calc(14px * 1.3)}#LMkvg,#qlMvI{width:calc(3px * 1.3);height:calc(10px * 1.3)}#PRxAh .mJoej .EbTkc .uPqNm textarea{min-height:calc(40px * 1.3);font-size:calc(14px * 1.3);max-height:calc(40px * 1.3)}#NWNWn,#sreachForAcromanet,#wrapNavigateWithLetters{min-height:calc(145px * 1.3);left:calc(4px * 1.3);right:calc(4px * 1.3);border-radius:calc(2px * 1.3)}.KRUNI{font-size:calc(14px * 1.3);margin-right:calc(20px * 1.3)!important}#PRxAh .mJoej .EbTkc .KRUNI.veZPc,.hYaIS{font-size:calc(14px * 1.3)}[id^=QSgtZ]{width:calc(339px * 1.3)}#loadAndiSystem{width:calc(338px * 1.3);height:calc(640px * 1.3)}#MvQtQ{top:calc(30px * 1.3)}#NWNWn,#sreachForAcromanet{width:calc(296px * 1.3)}#wrapNavigateWithLetters{margin:calc(25px * 1.3) auto}#wrapNavigateWithLetters #NWNWntext{padding:calc(10px * 1.3) 20% 0;font-size:calc(16px * 1.3);height:calc(115px * 1.3)}#wrapNavigateWithLetters #NWNWntext ul li{padding:0 calc(35px * 1.3) 0 0}#wrapNavigateWithLetters .andicloseSaveOption{padding:calc(5px * 1.3);font-size:calc(20px * 1.3)}#NavigateWithLettersDonshowanymore{width:calc(340px * 1.3);border:calc(1px * 1.3) solid #888;border-radius:calc(5px * 1.3)}#NWNWn #NWNWntext{margin:calc(30px * 1.3) auto 0;width:calc(237px * 1.3);border-radius:calc(2px * 1.3)}#andiaddwhyoff,#rTtIv,#YetWN,#andidontaddwhyoff,#rOELB,#KNOZd,#andisavenewsetting,#andiupdateexiestingsetting{width:calc(120px * 1.3);height:calc(30px * 1.3);padding-top:calc(10px * 1.3)}#choosewhyoff{width:calc(245px * 1.3);border:calc(1px * 1.3) solid #888;border-radius:calc(2px * 1.3)}#andiSetting{width:calc(40px * 1.3);height:calc(25px * 1.3)}#andiuserheaderloginconnect{width:calc(90px * 1.3);height:calc(30px * 1.3);padding:calc(4px * 1.3) 0}#dXLgH{width:calc(90px * 1.3);height:calc(30px * 1.3);padding:calc(3px * 1.3) calc(13px * 1.3)}#xPEGE,#JPRSV,#sDZbX svg{width:calc(20px * 1.3);height:calc(20px * 1.3)}#xPEGE,#JPRSV{bottom:calc(4px * 1.3)}#cGvHB{margin:0 auto calc(-11px * 1.3);width:calc(45px * 1.3)}#sjedp{height:calc(3px * 1.3);margin:calc(1px * 1.3) auto}#LMkvg{margin:0 auto calc(7px * 1.3)}#hKyOI{top:calc(-20px * 1.3)}#cqUuD{width:calc(199px * 1.3);height:calc(95px * 1.3);font-size:calc(14px * 1.3);margin-top:calc(7px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}.vjEnr [role=button]:focus,.vjEnr [role=button]:hover,.vjEnr input:focus,.vjEnr input:hover,.vjEnr select:focus,.vjEnr select:hover{outline:#fff solid calc(1px * 1.3)!important}.LAsQk .QybqI{border-radius:calc(2px * 1.3)}#yIiKG .xJGcA .RRnya{border:calc(1px * 1.3) solid #fff!important;border-radius:calc(35px * 1.3)!important;bottom:calc(10px * 1.3)!important;left:calc(10px * 1.3)!important;width:calc(25px * 1.3);height:calc(25px * 1.3);padding-top:calc(3px * 1.3);padding-right:calc(2px * 1.3);padding-left:calc(2px * 1.3)}#RFjdP .tHEWd{bottom:calc(10px * 1.3)!important;width:calc(40px * 1.3);height:calc(15px * 1.3);-webkit-border-top-right-radius:calc(2px * 1.3);-webkit-border-bottom-right-radius:calc(2px * 1.3);-moz-border-radius-topright:calc(2px * 1.3);-moz-border-radius-bottomright:calc(2px * 1.3);border-top-right-radius:calc(2px * 1.3);border-bottom-right-radius:calc(2px * 1.3);line-height:calc(15px * 1.3)}#NWNWn :focus{outline:#000 solid calc(1px * 1.3)}img[src*="cVVzR.png"]{width:calc(320px * 1.3);height:calc(115px * 1.3)}#KJMJHtab1middleHelp{width:calc(320px * 1.3);height:calc(445px * 1.3);margin:0;top:calc(195px * 1.3)}#KJMJHtab1middleHelp .TUAHelpchangetolivetext,#KJMJHtab1middleHelp .TUAHelpskipbtn{left:calc(3px * 1.3);font-size:calc(16px * 1.3);padding:calc(3px * 1.3) calc(10px * 1.3);margin:calc(2px * 1.3)}#KJMJHtab1middleHelp .TUAHelpskipbtn{top:calc(3px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(3px * 1.3);-webkit-border-radius:calc(3px * 1.3);border-radius:calc(3px * 1.3)}#KJMJHtab1SmalleHelp .TUAHelpskipbtn,#KJMJHtab1middleHelp .TUAHelpchangetolivetext{-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(3px * 1.3);-webkit-border-radius:calc(3px * 1.3)}#KJMJHtab1middleHelp .TUAHelpimg img{width:calc(320px * 1.3)!important;height:calc(445px * 1.3)!important}#KJMJHtab1middleHelp .TUAHelpchangetolivetext{bottom:calc(3px * 1.3);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);border-radius:calc(3px * 1.3)}#KJMJHtab1SmalleHelp{width:calc(306px * 1.3);height:calc(100px * 1.3);margin:calc(6px * 1.3) calc(4px * 1.3) 0;box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext,#KJMJHtab1SmalleHelp .TUAHelpskipbtn{left:calc(3px * 1.3);font-size:calc(16px * 1.3);padding:calc(3px * 1.3) calc(10px * 1.3);margin:calc(2px * 1.3)}#KJMJHtab1SmalleHelp .andiWrapHelpDesc{height:calc(100px * 1.3)!important}#KJMJHtab1SmalleHelp .TUAHelpskipbtn{top:calc(3px * 1.3);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);border-radius:calc(3px * 1.3)}#KJMJHtab1SmalleHelp .TUAHelpimg img{width:calc(306px * 1.3)!important;height:calc(100px * 1.3)!important}#KJMJHtab1SmalleHelp .TUAHelpchangetolivetext{bottom:calc(3px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(3px * 1.3);-webkit-border-radius:calc(3px * 1.3);border-radius:calc(3px * 1.3)}#KJMJHtab1LargeHelp{width:calc(320px * 1.3);height:calc(500px * 1.3);box-shadow:0 0 calc(10px * 1.3) rgba(180,180,180,.5)}#KJMJHtab1LargeHelp #BEMFUHelp{width:calc(320px * 1.3);height:calc(30px * 1.3)}#KJMJHtab1LargeHelp #TUAcloseHelp input{width:calc(20px * 1.3);height:calc(20px * 1.3);padding:calc(3px * 1.3) calc(3px * 1.3) 0}#KJMJHtab1LargeHelp #GFcVT{width:calc(320px * 1.3);height:calc(35px * 1.3)}#KJMJHtab1LargeHelp #GFcVT a{font-size:calc(14px * 1.3);line-height:calc(35px * 1.3)}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext,#KJMJHtab1LargeHelp .TUAHelpskipbtn{left:calc(3px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);font-size:calc(16px * 1.3);padding:calc(1px * 1.3) calc(5px * 1.3);margin:calc(2px * 1.3)}#KJMJHtab1LargeHelp .TUAHelpskipbtn{top:calc(3px * 1.3);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(1px * 1.3);-webkit-border-radius:calc(1px * 1.3);border-radius:calc(1px * 1.3)}#KJMJHtab1LargeHelp .TUAHelpimg img{width:calc(320px * 1.3)!important;height:calc(445px * 1.3)!important}#KJMJHtab1LargeHelp .TUAHelpchangetolivetext{bottom:calc(38px * 1.3);-moz-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-border-radius:calc(1px * 1.3);-webkit-border-radius:calc(1px * 1.3);border-radius:calc(1px * 1.3)}#andioffthissitetext,#andisetnametoset{font-size:calc(14px * 1.3)}[data-andiallelmwithtext][title]:focus:after{width:calc(125px * 1.3)}#VbcHu :focus,#BEMFU :focus{outline:#fff solid calc(2px * 1.3)!important}#NWNWn .andicloseSaveOption{padding:calc(5px * 1.3);left:calc(5px * 1.3)}#andisetnametoset{border-bottom:calc(1px * 1.3) solid #888;border-radius:calc(2px * 1.3)}#dontrunonthissite{padding-top:calc(4px * 1.3)}#chooseLang{margin:calc(2px * 1.3) auto;border-bottom:calc(1px * 1.3) solid #000;height:calc(35px * 1.3)}#changeLang{width:calc(230px * 1.3);border:calc(1px * 1.3) solid #888}#andiwrapsmallmenusetting2{width:calc(230px * 1.3);height:calc(350px * 1.3);top:calc(35px * 1.3);right:calc(5px * 1.3);-webkit-box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75);-moz-box-shadow:0 0 2px 0 rgba(50,50,50,.75);box-shadow:0 0 calc(2px * 1.3) 0 rgba(50,50,50,.75)}#andiwrapsmallmenusetting2>div{width:calc(230px * 1.3);height:calc(48px * 1.3);line-height:calc(48px * 1.3);padding:calc(10px * 1.3)}#andiwrapsmallmenusetting2 hr{border:calc(1px * 1.3) solid #000}#andisetlangdefualt,#andisetlangtext{line-height:calc(48px * 1.3);font-size:calc(14px * 1.3)}#andioffthissitewrapswitch{margin:calc(3px * 1.3) calc(7px * 1.3);width:calc(30px * 1.3)}#andioffthissitewrapswitchpart1{border-width:0;left:calc(-5px * 1.3);top:calc(1px * 1.3);width:calc(33px * 1.3);height:calc(14px * 1.3);border-radius:calc(7px * 1.3)}#andioffthissitewrapswitchpart2{left:calc(-5px * 1.3);top:0;border-radius:calc(20px * 1.3);width:calc(17px * 1.3);height:calc(17px * 1.3)}#wrapMenuLang{width:calc(320px * 1.3);height:100%}#andiMenuLangTopBar{width:calc(320px * 1.3);height:calc(30px * 1.3)}#andiMenuLangMiddleBarPart1{width:calc(320px * 1.3);height:calc(64px * 1.3);-webkit-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);-moz-box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7);box-shadow:0 calc(4px * 1.3) calc(5px * 1.3) calc(-4px * 1.3) rgba(0,0,0,.7)}.andiMenuLangMiddleBarBackBtn{width:calc(25px * 1.3)!important;height:calc(24px * 1.3)!important;font-size:calc(24px * 1.3)!important;margin:calc(20px * 1.3) calc(10px * 1.3) calc(5px * 1.3)!important}#andiMenuLangMiddleBarHeading{height:calc(24px * 1.3)!important;font-size:calc(16px * 1.3);line-height:calc(64px * 1.3)}#wrapMenuLang .langChoose,#wrapMenuLang .langComeSoon,.andiMenuLangMiddleBarRadioBtn{line-height:calc(50px * 1.3)!important;font-size:calc(16px * 1.3)!important}.andiMenuLangMiddleBarRadioBtn{height:calc(50px * 1.3)!important;border-bottom:calc(1px * 1.3) solid #888!important;padding:0 calc(12px * 1.3)!important}.andiMenuLangMiddleBarWrapLang{padding:calc(5px * 1.3)!important}#andiMenuLangMiddleBarSaveBtn{width:calc(320px * 1.3);height:calc(50px * 1.3);line-height:calc(50px * 1.3)}#andiMenuLangMiddleBarWrapLang :focus,#andiwrapsmallmenusetting2 :focus{outline:#888 solid calc(3px * 1.3)!important}#andiCloseSaveBtn{margin:calc(8px * 1.3) auto 0;height:calc(30px * 1.3);padding-top:calc(4px * 1.3);border-radius:calc(5px * 1.3)}.IoVaWskipArea{height:calc(1px * 1.3);width:calc(1px * 1.3);margin:calc(-1px * 1.3);font-size:calc(16px * 1.3)!important}.IoVaWskipArea:focus{margin:0;padding:0 calc(10px * 1.3)}.ANDIhighlight:hover,.ANDIhighlightFocus{box-shadow:0 0 0 9999999px rgba(0,0,0,.35)}#jilVt #VbcHu{width:calc(320px * 1.3);height:calc(65px * 1.3)}#jilVt #VbcHu .VbcHuMarkIfSelected{width:calc(80px * 1.3);height:calc(3px * 1.3)}#jilVt #fvLXm .owUce{width:calc(150px * 1.3);height:calc(195px * 1.3)}.hintformorequastionLeft{height:calc(180px * 1.3)!important;width:calc(60px * 1.3)!important;top:calc(88px * 1.3)!important}.hintformorequastionLeft .hintformorequastionblue{height:calc(75px * 1.3)!important;width:calc(60px * 1.3)!important}.hintformorequastionLeft .hintformorequastionwhite{height:calc(90px * 1.3)!important;width:calc(60px * 1.3)!important}#jilVt #BEMFU #gMhQJ #JlUMY,#jilVt #BEMFU #gMhQJ #iLSlI,#jilVt #BEMFU #gMhQJ #fjaun,#jilVt #BEMFU #gMhQJ #highContrastMenu{width:calc(30px * 1.3);height:calc(30px * 1.3)}#jilVt .rZZEa .joMhk p{font-size:calc(16px * 1.3)!important}#jilVt #VbcHu>div>div>div svg{width:calc(35px * 1.3);height:calc(35px * 1.3);margin:14px auto 0}</style>');
      if (UA1("#changePanelSetting") !== null) {
        UA1("#changePanelSetting").addCss({"bottom":0});
      }
      andiUA.createStorageItem("UA2bigMenu", true);
      andiUA.resizewindow();
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2176);
    }
    /*andiUA.CCVqy(function() {
    }, gHdAW = andiUA.KpAEX + "/js/andi2Funcions2.js");*/
    andiUA.getScript(andiUA.KpAEX + "/js/andi2Funcions4.js", andiUA.emptyFn);
    /*andiUA.CCVqy(function() {
    }, gHdAW = andiUA.KpAEX + "/js/andi2Funcions4.js");*/
	setTimeout(function(){
		andiUA.iCdTc();
	},500);
    
  }
  UA1('body').appendHtml(`<style>.highContrast #VseDf label.ioZKa > span, .highContrast #VseDf label.ioZKa { background-color: blue !important;}  
.sr-only, .UAscreenReaderOnly {position: absolute !important;opacity: 1 !important; width: 1px !important; height: 1px !important; padding: 0 !important; display: block !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; border: 0 !important; visibility: visible!important;}</style>`)


  andiUA.getScript(andiUA.KpAEX + "/js/andi2Funcions3.js", andiUA.emptyFn);

  /*andiUA.CCVqy(function() {
  }, gHdAW = andiUA.KpAEX + "/js/andi2Funcions3.js");*/
  var TUAloadandi2Funcions3 = setInterval(function(gHdAW) {
    if (andiUA.andi2Funcions3 == true) {
      clearInterval(TUAloadandi2Funcions3);
      ANDIDGmOk();
    }
  }, 200);
})();
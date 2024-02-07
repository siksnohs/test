function clearRasheTevot(word) {
  if (word.indexOf(":") == word.length - 1) {
    word = word.substring(0, word.length - 1);
    clearRasheTevot(word);
  }
  if (word.indexOf("?") == word.length - 1) {
    word = word.substring(0, word.length - 1);
    clearRasheTevot(word);
  }
  if (word.indexOf("*") == word.length - 1) {
    word = word.substring(0, word.length - 1);
    clearRasheTevot(word);
  }
  if (word.indexOf("(") == word.length - 1) {
    word = word.substring(0, word.length - 1);
    clearRasheTevot(word);
  }
  if (word.indexOf(".") == word.length - 1) {
    word = word.substring(0, word.length - 1);
    clearRasheTevot(word);
  }
  if (word.indexOf("/") == word.length - 1) {
    word = word.substring(0, word.length - 1);
    clearRasheTevot(word);
  }
  if (word.indexOf(",") == word.length - 1) {
    word = word.substring(0, word.length - 1);
    clearRasheTevot(word);
  }
  if (word.charAt(0) === ")") {
    word = word.substr(1);
    clearRasheTevot(word);
  }
  if (word.charAt(0) === '"') {
    word = word.substr(1);
    clearRasheTevot(word);
  }
  if (word.charAt(0) !== "'" && word.charAt(0) !== '"' && word.charAt(word.length - 1) !== '"' && /\d/.test(word) && word.indexOf("-") == -1) {
  }
}
andiUA.hEcFI = function(TUAa) {
  return function() {
    var TUAm = -Infinity, TUAi = 0, TUAn = TUAa.length;
    for (; TUAi != TUAn; ++TUAi) {
      if (TUAa[TUAi] > TUAm) {
        TUAm = TUAa[TUAi];
      }
    }
    return TUAm;
  }();
};
getElementsByText = function(str, tag) {
  return Array.prototype.slice.call(UA(tag)).filter(function(VnIxP) {
    return VnIxP.textContent.trim().indexOf(str.trim()) > -1;
  });
};
andiUA.createStorageItem = function(storageName, storageValue) {
  localStorage.setItem(storageName, storageValue);
};
andiUA.removeStorageItem = function(storageName) {
  localStorage.removeItem(storageName);
};

andiUA.yiPTV = function(id, message) {
  
  if (document.getElementById(id) !== null) {
    var gHVnG = document.getElementById(id);
    gHVnG.contentWindow.postMessage(message, "*");
  }
};
andiUA.createStorageItem = function(storageName, storageValue) {
  localStorage.setItem(storageName, storageValue);
};
andiUA.removeStorageItem = function(storageName) {
  localStorage.removeItem(storageName);
};
andiUA.createStorageItem("UAsizeLocalStorage", 3500);
andiUA.TUAsrMsg = andiUA.nAtDr = function(oyZcF) {
 
  if (UA1("#ougqeWrap") == null) {
    UA1("body").appendHtml('<div id="ougqeWrap" role="region" aria-live="polite"></div>');
  }
  UA1("#ougqeWrap").appendHtml('<span class="ougqe" role="alert" aria-label="' + oyZcF + '"></span>');
  setTimeout(function() {
    UA(".ougqe").forEach(function(VnIxP) {
      VnIxP.zOhhK();
    });
  }, 200);
};
andiUA.rnsRs = function(cULEf) {

  return true;
};
andiUA.TUAnRAtj = function(HNvsW) {
 
  HNvsW = HNvsW || "";
  for (var key in window.localStorage) {
    if (window.localStorage.hasOwnProperty(key)) {
      HNvsW += window.localStorage[key];
    }
  }
  return HNvsW ? 3 + HNvsW.length * 16 / (8 * 1024) : 0;
};
andiUA.JQdzg = function(arr, value) {
 
  var i = arr.length;
  while (i--) {
    if (arr[i] == value) {
      return true;
    }
  }
  return false;
};
andiUA.sleep = function(milliseconds) {
 
  var start = (new Date).getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date).getTime() - start > milliseconds) {
      break;
    }
  }
};
andiUA.isNumber = function(text) {
  
  return Number(parseFloat(text)) === text;
};
andiUA.GqMsb = function() {
  
  return function() {
    var GqMsb = false;
    if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0) {
      GqMsb = true;
    }
    if (/Edge\/\d./i.test(navigator.userAgent)) {
      GqMsb = true;
    }
    if (window.navigator.userAgent.indexOf("Edge") > -1) {
      GqMsb = true;
    }
    return GqMsb;
  }();
};
andiUA.LkKAe = function() {
  
  var GMooO = UA("a:not(.nrnYA)");
 // andiUA.PTPzL(GMooO);
};
andiUA.PTPzL = function(GMooO) {
  
  if (GMooO.length > 0) {
    for (var TUAa = 0; TUAa < GMooO.length; TUAa++) {
      if (!GMooO[TUAa].thasClass("IuMtj")) {
        GMooO[TUAa].taddClass("IuMtj");
        if (GMooO[TUAa].getAttr("href") != null && GMooO[TUAa].getAttr("href").indexOf("#") == 0 && GMooO[TUAa].getAttr("href").indexOf("#/") == -1) {
          GMooO[TUAa].addEventListener("click", function(UAenv) {
            var that = this;
            setTimeout(function() {
              try {
                var hashSrt = that.hash.substr(1);
                if (UA1("#" + hashSrt) != null) {
                  if (UA1("#" + hashSrt) != document.activeElement) {
                    UA1("#" + hashSrt).setAttribute({"tabindex":"0"}).focus();
                  }
                } else {
                  if (UA1('[name="' + hashSrt + '"]') != document.activeElement) {
                    UA1('[name="' + hashSrt + '"]').setAttribute({"tabindex":"0"}).focus();
                  }
                }
              } catch (ANDIerr) {
              }
            }, 350);
          });
        }
        /*if (GMooO[TUAa].hasAttribute("title")) {
          if (GMooO[TUAa].text.trim() == GMooO[TUAa].getAttribute("title").trim()) {
            GMooO[TUAa].tremoveAttribute("title");
          }
        }
        if (!GMooO[TUAa].hasAttribute("href")) {
          GMooO[TUAa].setAttribute("href", "#");
          GMooO[TUAa].addEventListener("click", function(UAenv) {
            UAenv.preventDefault();
          });
        }*/
      }
    }
  }
};
andiUA.GEIdL = function(CEtkB) {
 
  return function() {
    var MAlcY = localStorage.getItem(CEtkB);
    if (MAlcY === "" || MAlcY === null || MAlcY === undefined) {
      return false;
    }
    return true;
  }();
};
andiUA.fTyLi = function() {
 
  var TUAi = 0, fTyLi = document.domain, TUAp = fTyLi.split("."), TUAs = "_gd" + (new Date).getTime();
  while (TUAi < TUAp.length - 1 && document.cookie.indexOf(TUAs + "=" + TUAs) == -1) {
    fTyLi = TUAp.slice(-1 - ++TUAi).join(".");
    document.cookie = TUAs + "=" + TUAs + ";domain=" + fTyLi + ";";
  }
  document.cookie = TUAs + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + fTyLi + ";";
  return fTyLi;
};
andiUA.kgzrQ2 = function(ldTmG) {

  if (ldTmG != undefined && ldTmG.getCss("display") != "none" && ldTmG.getCss("visibility") != "hidden" && ldTmG.getCss("opacity") != "0") {
    return false;
  }
  return true;
};
andiUA.lBYLC = function(ldTmG) {

  return function() {
    var qTSPU;
    if (ldTmG !== null && (ldTmG.getAttr("aria-label") === null || ldTmG.getAttr("aria-label") == "" || ldTmG.getAttr("title") == null || ldTmG.getAttr("title") == "")) {
      qTSPU = ldTmG.getAttribute("value");
      if (qTSPU === undefined || qTSPU === "") {
        qTSPU = ldTmG.getAttribute("placeholder");
        if (qTSPU === undefined || qTSPU === "") {
          qTSPU = "";
        }
      }
    }
    return qTSPU;
  }();
};
andiUA.IcGGR = function(aSTyx) {
 
  return function() {
    var bahZK = "";
    for (var TUAi = 0; TUAi < aSTyx.length; TUAi++) {
      bahZK = andiUA.IKBzO(aSTyx[TUAi]);
      if (bahZK != undefined && bahZK.trim() != "") {
        break;
      }
    }
    return bahZK;
  }();
};
andiUA.GaopE = function(root, Word, InEMl, zZBgg) {

  return function() {
    BQeUI(root).forEach(rEwzM);
    function BQeUI(root) {
 
      var TUAn, TUAa = [], TUAw = document.createTreeWalker(root, NodeFilter.vqgxO, null, false);
      while (TUAn = TUAw.nextNode()) {
        TUAa.push(TUAn);
      }
      return TUAa;
    }
    function rEwzM(TUAn) {

      for (var TUAi; (TUAi = TUAn.nodeValue.indexOf(Word, TUAi)) > -1; TUAn = ZzFkT) {
        var ZzFkT = TUAn.splitText(TUAi + Word.length);
        var wjvJA = TUAn.splitText(TUAi);
        var span = document.createElement("span");
        span.className = InEMl;
        span.lang = zZBgg;
        span.appendChild(wjvJA);
        ZzFkT.parentNode.insertBefore(span, ZzFkT);
      }
    }
  }();
};
andiUA.IQYFU = function(str) {

  return function() {
    return str === str.toUpperCase();
  }();
};
andiUA.QTRpd = function(email) {
  return function() {
    return email.match(/^([\w!#$%&'\*\+\-\/=\?\^`{\|\}~]+\.)*[\w!#$%&'\*\+\-\/=\?\^`{\|\}~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?)$/i);
  }();
};




andiUA.dFZXC = function(ZFfNp) {
  setTimeout(function() {
    var TUAa = "", nqKWs = '', HbHmW = document.activeElement;
    if (HbHmW.isIt("input,textarea,select,[role='radio'],[role='combobox'],[role='listbox'],[role='checkbox']")) {
		if(HbHmW.id || HbHmW.name){
			if(UA1('label[for="'+HbHmW.id+'"]') && UA1('label[for="'+HbHmW.id+'"]').BKXPP() != '') {
				nqKWs = UA1('label[for="'+HbHmW.id+'"]').BKXPP();
			} else if(UA1('label[for="'+HbHmW.name+'"]') && UA1('label[for="'+HbHmW.name+'"]').BKXPP() != ''){
				nqKWs = UA1('label[for="'+HbHmW.name+'"]').BKXPP();
			}
		}
		if(nqKWs == '') {
			nqKWs = HbHmW.getAttribute("tuaandiinputdiscrp");
		}
		  if (HbHmW.isIt("[type='submit'],[type='button'],[type='image'],[role='button']") && nqKWs != null && nqKWs != "") {
			nqKWs = andiUA.KNTQg.ANDItext103 +' '+ nqKWs + ".<br />  ";
		  } else {
			if (HbHmW.isIt("[type='radio'],[role='radio']") && nqKWs != null && nqKWs != "") {
			  nqKWs = andiUA.KNTQg.ANDItext102  +' '+  nqKWs + ".<br />  ";
			} else {
			  if (HbHmW.isIt("[type='checkbox'],[role='checkbox']") && nqKWs != null && nqKWs != "") {
				nqKWs = andiUA.KNTQg.ANDItext101  +' '+  nqKWs + ".<br />  ";
			  } else {
				if (nqKWs != null && nqKWs != "") {
				  nqKWs = andiUA.KNTQg.ANDItext100 + nqKWs + ".<br />  ";
				} else {
				  nqKWs = "";
				}
			  }
			}
		  }

      
    } else {
      nqKWs = "";
    }
    if (UA1("#pJIrA") === null) {
      UA1("body").appendHtml('<div id="pJIrA" style="background-color:' + andiUA.TUAsettingFn.zqayb.backgroundColor + ';"><div id="WBNCR" style="font-size: 25px;background-color:' + andiUA.TUAsettingFn.zqayb.backgroundColor + ';" role="button" tabindex="0" aria-hidden="true">&#x2716;</div><div role="alert" id="PFaFV"><span id="#xeklB">' + nqKWs + ' ' + ZFfNp + '</span><span aria-hidden="true"><br /><br />' + 
      andiUA.KNTQg.aVwJF + "</span></div></div>");
    } else {
      UA1("#PFaFV").innerHTML = "";
      UA1("#PFaFV").appendHtml('<span id="#xeklB">' + nqKWs + ZFfNp + "</span><span><br /><br />" + andiUA.KNTQg.aVwJF + "</span>");
    }
    if (window.innerWidth < 600) {
      if (UA1("#qgIPBMobile") === null) {
        if (UA1("#qgIPB") != null) {
          UA1("#qgIPB").zOhhK();
        }
        UA1("head").appendHtml('<style id="qgIPBMobile">ANDISELECTORandiIDformErrorsMessageCloseBtn  #ANDI2SELECTORandiIDformErrorsMessageText{display:block!important;background-color:#000 !important;width: 80% !important;color: rgb(255, 255, 255) !important; position: absolute !important;bottom: 0 !important; right: 0 !important;padding:10px 10px !important;font-size:16px !important}  #ANDISELECTORandiIDformErrorsMessageCloseBtn{text-align:center;width: 19% !important;height:30px !important;margin-top:20px !important;background-color:#000 !important;color: rgb(255, 255, 255) !important; position: absolute !important;top: 0 !important; left: 0 !important;} #ANDI2SELECTORandiIDformErrorsMessage *{background-color:#000 !important;color: rgb(255, 255, 255) !important;} #ANDI2SELECTORandiIDformErrorsMessage{    z-index: 99999999999;width: 100% !important; position:fixed !important; top:auto !important;bottom:0 !important; left:0 !important; background-color:#000 !important;color: rgb(255, 255, 255) !important;height: 135px!important;}  </style>');
      }
    } else {
      if (UA1("#qgIPB") === null) {
        var SLWGk = andiUA.TUAsettingFn.pBKRk.SLWGk;
        var bHZQt = andiUA.TUAsettingFn.pBKRk.bHZQt;
        var BnKCu = andiUA.TUAsettingFn.pBKRk.BnKCu;
        var dVzSB = andiUA.TUAsettingFn.pBKRk.dVzSB;
        if (UA1("#qgIPBMobile") != null) {
          UA1("#qgIPBMobile").zOhhK();
        }
        UA1("head").appendHtml('<style id="qgIPB">#PFaFV{color: rgb(255, 255, 255) !important;display:block!important; }#WBNCR{color: rgb(255, 255, 255) !important;} #pJIrA *{direction:' + UA1("html").getAttr("aVjWi") + " !important; color: rgb(255, 255, 255) !important;} #pJIrA{z-index:999999999; position:fixed !important;" + (UA1("html").getAttr("aVjWi") == "rtl" ? 
        "text-align:right !important" : "text-align:left !important") + ";  "+SLWGk+":" + bHZQt + "% !important; top:" + BnKCu + "% !important;  width:" + dVzSB + "px !important;color: rgb(255, 255, 255) !important;}</style>");
      }
    }
  }, 100);
  eventOn("click", "#WBNCR", function() {
    if (UA1("#pJIrA") != null) {
      UA1("#pJIrA").zOhhK();
    }
    if (UA1("#qgIPB") != null) {
      UA1("#qgIPB").zOhhK();
    }
    UA1("body").addCss({"height":""});
  });
  setTimeout(function() {
    if (window.innerWidth < 600) {
      setTimeout(function() {
        if (window.innerWidth < 600) {
          UA1("body").addCss({"height":Math.max(andiUA.nHyMt(), window.innerHeight)});
          setTimeout(function() {
            UA1("body").addCss({"height":parseInt(UA1("#PFaFV").getCss("height")) + 20 + parseInt(UA1("body").getCss("height")) + "px"});
          }, 10);
        }
        if (UA1("#pJIrA") != null) {
          UA1("#pJIrA").addCss({"bottom":window.innerHeight - parseInt(UA1("#PFaFV").getCss("height")) - 20 + "px", "height":parseInt(UA1("#PFaFV").getCss("height")) + 20 + "px"});
        }
      }, 50);
    }
    if (UA1("#pJIrA") != null) {
      UA1("#pJIrA").addCss({"top":window.innerHeight - parseInt(UA1("#PFaFV").getCss("height")) + 20 + "px", "height":parseInt(UA1("#PFaFV").getCss("height")) + 20 + "px"});
    }
  }, 110);
};




andiUA.TUALdPwC = function(val) {
  return function() {
    var nZsOg = new RegExp("([0-9]{4}[- /.](0[1-9]|1[0-2])[- /.]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[- /.](0[1-9]|1[0-2])[- /.][0-9]{4})");
    return nZsOg.test(val);
  }();
};
andiUA.eohHa = function(ldTmG) {
  if(andizxc(ldTmG)[0].YPfwR()){
  var FtTIP = ldTmG;
  var jUAvQ = FtTIP.value;
  var NvMlJ = jUAvQ.match(/^([\w!#$%&'\*\+\-\/=\?\^`{\|\}~]+\.)*[\w!#$%&'\*\+\-\/=\?\^`{\|\}~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?)$/i);
  if (jUAvQ.trim() !== "" && NvMlJ == null) {
    setTimeout(function() {
      FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + andiUA.KNTQg.YnFAB});
    }, 100);
    andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + andiUA.KNTQg.YnFAB);
  } else {
    FtTIP.tremoveAttr("aria-label");
    FtTIP.addAttr({"aria-invalid":"false"});
  }
  }
};
andiUA.ZIKIL = function(ldTmG) {
  if(andizxc(ldTmG)[0].YPfwR()){
  var FtTIP = ldTmG;
  var jUAvQ = FtTIP.value;
  var nZsOg = new RegExp("([0-9]{4}[- /.](0[1-9]|1[0-2])[- /.]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[- /.](0[1-9]|1[0-2])[- /.][0-9]{4})");
  var TUAisOK = nZsOg.test(jUAvQ);
  if (jUAvQ.trim() !== "" && !TUAisOK) {
    setTimeout(function() {
      FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.HgYXF});
    }, 100);
    andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + andiUA.KNTQg.HgYXF);
  } else {
    FtTIP.tremoveAttr("aria-label");
    FtTIP.addAttr({"aria-invalid":"false"});
  }
  }
};
andiUA.qwpiQ = function(ldTmG, pass) {
  if(andizxc(ldTmG)[0].YPfwR()){
	  var FtTIP = ldTmG;
	  var TUApass1 = UA1(pass).value;
	  var TUApass2 = FtTIP.value;
	  if (TUApass2.trim() !== "" && TUApass1 == TUApass2) {
		setTimeout(function() {
		  FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + " " + "???????? ?? ??????"});
		}, 100);
		andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + "???????? ?? ??????");
	  } else {
		FtTIP.tremoveAttr("aria-label");
		FtTIP.addAttr({"aria-invalid":"false"});
	  }
  }
};
andiUA.UVYPP = function(ldTmG, iiKID) {
  if(andizxc(ldTmG)[0].YPfwR()){
  var FtTIP = ldTmG;
  var jUAvQ = FtTIP.value;
  if (jUAvQ.trim() !== "" && jUAvQ.length > iiKID) {
    setTimeout(function() {
      FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.eptPd + " " + iiKID});
    }, 100);
    andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + andiUA.KNTQg.eptPd + " " + iiKID);
  } else {
    FtTIP.tremoveAttr("aria-label");
    FtTIP.addAttr({"aria-invalid":"false"});
  }
  }
};
andiUA.fUzpw = function(ldTmG, hZOeA) {
  if(andizxc(ldTmG)[0].YPfwR()){
  var FtTIP = ldTmG;
  var jUAvQ = FtTIP.value;
  if (jUAvQ.trim() !== "" && jUAvQ.length < hZOeA) {
    setTimeout(function() {
      FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.AhOFg + " " + hZOeA});
    }, 100);
    andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + andiUA.KNTQg.AhOFg + " " + hZOeA);
  } else {
    FtTIP.tremoveAttr("aria-label");
    FtTIP.addAttr({"aria-invalid":"false"});
  }
  }
};
andiUA.TSNhB = function(ldTmG) {
  if(andizxc(ldTmG)[0].YPfwR()){
  var FtTIP = ldTmG;
  var jUAvQ = FtTIP.value;
  if (jUAvQ.trim() !== "" && !andiUA.isNumber(jUAvQ)) {
    setTimeout(function() {
      FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.lOFJp});
    }, 100);
    andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + andiUA.KNTQg.lOFJp);
  } else {
    FtTIP.tremoveAttr("aria-label");
    FtTIP.addAttr({"aria-invalid":"false"});
  }
  }
};
andiUA.rrwDk = function(ldTmG) {
  if(andizxc(ldTmG)[0].YPfwR()){
  var FtTIP = ldTmG;
  var jUAvQ = FtTIP.value;
  if (jUAvQ.trim() === "" || jUAvQ == null) {
    setTimeout(function() {
      FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.leDwt});
    }, 100);
    andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + andiUA.KNTQg.leDwt);
  } else {
    FtTIP.tremoveAttr("aria-label");
    FtTIP.addAttr({"aria-invalid":"false"});
  }
  }
};
andiUA.PpjxL = function(ldTmG) {
  if(andizxc(ldTmG)[0].YPfwR()){
  var FtTIP = ldTmG;
  var jUAvQ = FtTIP.value;
  if (jUAvQ.trim() !== "" && /\d/.test(jUAvQ)) {
    setTimeout(function() {
      FtTIP.addAttr({"aria-invalid":"true", "aria-label":FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.wmjnW});
    }, 100);
    andiUA.dFZXC(andiUA.KNTQg.QXkzA + FtTIP.getAttr("TUAandiinputdiscrp") + " " + andiUA.KNTQg.PzkzM + " " + andiUA.KNTQg.wmjnW);
  } else {
    FtTIP.tremoveAttr("aria-label");
    FtTIP.addAttr({"aria-invalid":"false"});
  }
  }
};
andiUA.vRofr = function() {

  eventOn("focus", 'input:not([type="radio"]):not([type="checkbox"]), textarea ', function() {
    var ldTmG = this;
    ldTmG.addCss({"cursor":"none"});
    ldTmG.onmousemove = function() {
      this.addCss({"cursor":""});
    };
  });
};
andiUA.ANDIstopSliderMovmanet = function() {
 
  function andiStopAllFns() {
    var x = setTimeout('alert("x");', 100000);
    for (var ANDIi = 0; ANDIi <= x; ANDIi++) {
      clearTimeout(ANDIi);
    }
    for (var ANDIi = 1; ANDIi < 99999; ANDIi++) {
      window.clearInterval(ANDIi);
    }
    var ANDIcss = " * { /*CSS transitions*/-o-transition-property: none !important;-moz-transition-property: none !important;-ms-transition-property: none !important;-webkit-transition-property: none !important;transition-property: none !important;/*CSS transforms*/-o-transform: none !important;-moz-transform: none !important;-ms-transform: none !important;-webkit-transform: none !important;transform: none !important;/*CSS animations*/-webkit-animation: none !important;-moz-animation: none !important;-o-animation: none !important;-ms-animation: none !important;animation: none !important;}", 
    head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = ANDIcss;
    } else {
      style.appendChild(document.createTextNode(ANDIcss));
    }
    head.appendChild(style);
    var allMarquee = UA("marquee");
    for (var ANDIi = 0; ANDIi < allMarquee.length; ANDIi++) {
      allMarquee[ANDIi].stop();
    }
    andiUA.videoEFinder();
    andiUA.VideoFinderPlay();
  }
  andiStopAllFns();
};
andiUA.pMvmI = function(rbcUf) {
 
  UA("table").forEach(function(VnIxP) {
    if (VnIxP.closest("[role='main']") === null && VnIxP.closest("#helpVCTable") === null) {
      VnIxP.addAttr({"role":"presentation"});
    }
  });
};
andiUA.iJjjZ = function(RXwGF) {
 
  try {
    var DkfJI = function(aLClD) {
      for (var TUAa = 0; TUAa < aLClD.length; TUAa++) {
        var ajfJF = aLClD[TUAa].attributes;
        for (var TUAj = 0; TUAj < ajfJF.length; TUAj++) {
          var Trowb = ajfJF[TUAj].nodeValue.toLowerCase();
          var eQDGf = ajfJF[TUAj].nodeName.toLowerCase();
          for (var ii in andiUA.keys.bRYKf) {
            if (Trowb.indexOf(andiUA.keys.bRYKf[ii]) > -1) {
              aLClD[TUAa].addAttr({"tabindex":"0"});
              aLClD[TUAa].setAttribute("role", "link");
              aLClD[TUAa].setAttribute("aria-label", andiUA.KNTQg.YPXCp);
            }
          }
        }
      }
    };
    var aLClD = UA(RXwGF);
    DkfJI(aLClD);
  } catch (ANDIerr$7) {
  }
};
andiUA.PXwAF = function() {  
	UA1("head").appendHtml('<style class="qlphO"> [addFocus]{box-shadow: 0px 0px 0px 2px #E00000 !important;}</style>');
	andizxc(document).on('keydown','a,input,[role="button"],button,[tabindex],[role="link"]',function(e){
	   if(e.keyCode == 9){
        UA('[addFocus]').forEach(function(elm){
          elm.tremoveAttr('addFocus');
        });

		   setTimeout(function(){
			  if((document.activeElement).isIt('a,input,[role="button"],button,[tabindex],[role="link"]')){
					(document.activeElement).setAttribute('addFocus','true');       
			  }
		   },0);
	   } 
	});


  
};
andiUA.ajiho = function() {
  andiUA.PXwAF();
  andiUA.LkKAe();
};
var RyuaR = [];
RyuaR['\u05e0\u05b7\u05d3\u05b0\u05dc\u05b8"\u05df'] = "\u05e0\u05b4\u05db\u05b0\u05e1\u05b5\u05d9 \u05d3\u05b0\u05bc\u05dc\u05b8\u05d0 \u05e0\u05b8\u05d9\u05b0\u05d3\u05b5\u05d9";
RyuaR["UX"] = "User Experience";
RyuaR['\u05ea\u05e2"\u05dc'] = "\u05ea\u05e0\u05d5\u05e2\u05d4 \u05e2\u05e8\u05d1\u05d9\u05ea \u05dc\u05d4\u05ea\u05d7\u05d3\u05e9\u05d5\u05ea";
RyuaR['\u05e2"\u05d9'] = "\u05e2\u05dc \u05d9\u05d3\u05d9";
RyuaR['\u05d7\u05d5"\u05dc'] = "\u05d7\u05d5\u05e5 \u05dc\u05d0\u05e8\u05e5";
RyuaR['\u05ea\u05de"\u05ea'] = "\u05ea\u05e2\u05e9\u05d9\u05d4 \u05de\u05e1\u05d7\u05e8 \u05ea\u05e2\u05e1\u05d5\u05e7\u05d4";
RyuaR['\u05ea\u05de"\u05e1'] = "\u05ea\u05e8\u05d1\u05d5\u05ea \u05de\u05d3\u05e2 \u05e1\u05e4\u05d5\u05e8\u05d8";
RyuaR['\u05ea\u05dc"\u05de'] = "\u05ea\u05e0\u05d5\u05e2\u05d4 \u05dc\u05e6\u05d9\u05d5\u05e0\u05d5\u05ea \u05de\u05d2\u05e9\u05d9\u05de\u05d4";
RyuaR['\u05ea\u05b6\u05bc\u05dc\u05b6"\u05dd'] = "\u05ea\u05e0\u05d5\u05e2\u05d4 \u05dc\u05d4\u05ea\u05d7\u05d3\u05e9\u05d5\u05ea \u05de\u05de\u05dc\u05db\u05ea\u05d9\u05ea";
RyuaR['\u05e9"\u05e1'] = "\u05e9\u05d5\u05de\u05e8\u05d9 \u05ea\u05d5\u05e8\u05d4 \u05e1\u05e4\u05e8\u05d3\u05d9\u05d9\u05dd";
RyuaR['\u05e9\u05dc"\u05d9'] = "\u05e9\u05dc\u05d5\u05dd \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05e8\u05b8\u05e7\u05b8"\u05d7'] = "\u05e8\u05e9\u05d9\u05de\u05d4 \u05e7\u05d5\u05de\u05d5\u05e0\u05d9\u05e1\u05d8\u05d9\u05ea \u05d7\u05d3\u05e9\u05d4";
RyuaR['\u05e8\u05b7\u05e4\u05b4"\u05d9'] = "\u05e8\u05e9\u05d9\u05de\u05ea \u05e4\u05d5\u05e2\u05dc\u05d9 \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05e8\u05b8\u05e2\u05b8"\u05dd'] = "\u05e8\u05e9\u05d9\u05de\u05d4 \u05e2\u05e8\u05d1\u05d9\u05ea \u05de\u05d0\u05d5\u05d7\u05d3\u05ea";
RyuaR['\u05e8"\u05de'] = "\u05e8\u05d0\u05e9 \u05de\u05de\u05e9\u05dc\u05d4";
RyuaR['\u05e8\u05d5\u05d4"\u05de'] = "\u05e8\u05d0\u05e9 \u05d4\u05de\u05de\u05e9\u05dc\u05d4";
RyuaR['\u05e8\u05d4"\u05e2'] = "\u05e8\u05d0\u05e9 \u05d4\u05e2\u05d9\u05e8";
RyuaR['\u05e8\u05d4"\u05de'] = "\u05e8\u05d0\u05e9 \u05d4\u05de\u05de\u05e9\u05dc\u05d4";
RyuaR["\u05e7\u05d5\u05e0'"] = "\u05e7\u05d5\u05e0\u05d2\u05e8\u05e1";
RyuaR['\u05e6"\u05e1'] = "\u05e6\u05d9\u05d5\u05e0\u05d9\u05dd \u05e1\u05d5\u05e6\u05d9\u05d0\u05dc\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd";
RyuaR['\u05e6\u05dc"\u05e9'] = "\u05e6\u05d9\u05d5\u05e0\u05d5\u05ea \u05dc\u05d9\u05d1\u05e8\u05dc\u05d9\u05ea \u05e9\u05d5\u05d5\u05d9\u05d5\u05df";
RyuaR['\u05e6\u05d0"\u05d9'] = "\u05e6\u05e2\u05d9\u05e8\u05d9 \u05d0\u05d2\u05d5\u05d3\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05e4\u05b7\u05ea"\u05d7'] = "\u05d4\u05ea\u05e0\u05d5\u05e2\u05d4 \u05dc\u05e9\u05d7\u05e8\u05d5\u05e8 \u05e4\u05dc\u05e1\u05d8\u05d9\u05df (\u05e2\u05e8\u05d1\u05d9\u05ea)";
RyuaR['\u05e4\u05e9"\u05de'] = "\u05e4\u05e9\u05e8\u05d4 \u05de\u05d3\u05d9\u05e0\u05d9\u05ea";
RyuaR['\u05e4\u05e7"\u05e4'] = "\u05de\u05e4\u05dc\u05d2\u05d4 \u05e7\u05d5\u05de\u05d5\u05e0\u05d9\u05e1\u05d8\u05d9\u05ea \u05e4\u05dc\u05e9\u05ea\u05d9\u05e0\u05d9\u05ea (PKP)";
RyuaR['\u05e4\u05d5\u05e2"\u05e6'] = "\u05e4\u05d5\u05e2\u05dc\u05d9 \u05e6\u05d9\u05d5\u05df";
RyuaR['\u05e4\u05d0"\u05d9'] = "\u05e4\u05d5\u05e2\u05dc\u05d9 \u05d0\u05d2\u05d5\u05d3\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05e2\u05dc\u05d9"\u05d4'] = "\u05e2\u05de\u05e0\u05d5 \u05dc\u05de\u05e2\u05df \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05de\u05e9\u05e4"\u05de'] = "\u05d4\u05de\u05d5\u05e2\u05e6\u05d4 \u05dc\u05e9\u05d9\u05ea\u05d5\u05e3 \u05e4\u05e2\u05d5\u05dc\u05d4 \u05d1\u05de\u05e4\u05e8\u05e5";
RyuaR['\u05de\u05e8"\u05d9'] = "\u05de\u05d7\u05e0\u05d4 \u05e8\u05d3\u05d9\u05e7\u05dc\u05d9 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9";
RyuaR['\u05de\u05b7\u05e7\u05b4"\u05d9'] = "\u05de\u05e4\u05dc\u05d2\u05d4 \u05e7\u05d5\u05de\u05d5\u05e0\u05d9\u05e1\u05d8\u05d9\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea";
RyuaR['\u05de\u05b7\u05e4\u05bc\u05b7"\u05dd'] = "\u05de\u05e4\u05dc\u05d2\u05ea \u05e4\u05d5\u05e2\u05dc\u05d9\u05dd \u05de\u05d0\u05d5\u05d7\u05d3\u05ea";
RyuaR['\u05de\u05b7\u05e4\u05b0\u05d3\u05bc\u05b7"\u05dc'] = "\u05de\u05e4\u05dc\u05d2\u05d4 \u05d3\u05ea\u05d9\u05ea \u05dc\u05d0\u05d5\u05de\u05d9\u05ea";
RyuaR['\u05de\u05b7\u05e4\u05bc\u05b8\u05d0"\u05d9'] = "\u05de\u05e4\u05dc\u05d2\u05ea \u05e4\u05d5\u05e2\u05dc\u05d9 \u05d0\u05e8\u05e5 \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05de\u05e1"\u05d3'] = "\u05de\u05d8\u05d4 \u05e1\u05d5\u05e6\u05d9\u05d0\u05dc \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9";
RyuaR['\u05de\u05b5\u05d9\u05de\u05b8"\u05d3'] = "\u05de\u05d3\u05d9\u05e0\u05d4 \u05d9\u05d4\u05d5\u05d3\u05d9\u05ea \u05de\u05d3\u05d9\u05e0\u05d4 \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea";
RyuaR['\u05de\u05d7"\u05e8'] = "\u05de\u05e4\u05dc\u05d2\u05ea \u05d7\u05d1\u05e8\u05d4 \u05d5\u05e8\u05e4\u05d5\u05e8\u05de\u05d5\u05ea";
RyuaR['\u05de\u05b7\u05d7\u05b7"\u05dc'] = "\u05de\u05e4\u05dc\u05d2\u05ea \u05d7\u05d9\u05e8\u05d5\u05ea \u05dc\u05d9\u05d1\u05e8\u05d0\u05dc\u05d9\u05dd";
RyuaR['\u05de\u05d6\u05d4"\u05ea'] = "\u05de\u05d6\u05e8\u05d7 \u05d4\u05ea\u05d9\u05db\u05d5\u05df";
RyuaR['\u05de\u05d5\u05e2\u05d4"\u05d1'] = "\u05de\u05d5\u05e2\u05e6\u05ea \u05d4\u05d1\u05d9\u05d8\u05d7\u05d5\u05df";
RyuaR['\u05de\u05d5"\u05de'] = "\u05de\u05e9\u05d0 \u05d5\u05de\u05ea\u05df";
RyuaR['\u05de\u05d3"\u05e2'] = "\u05de\u05e4\u05dc\u05d2\u05d4 \u05d3\u05d5\u05de\u05e7\u05e8\u05d8\u05d9\u05ea \u05e2\u05e8\u05d1\u05d9\u05ea";
RyuaR['\u05dc"\u05e2'] = "\u05dc\u05d9\u05d1\u05e8\u05dc\u05d9\u05dd \u05e2\u05e6\u05de\u05d0\u05d9\u05d9\u05dd";
RyuaR['\u05db"\u05d9'] = "\u05db\u05e0\u05e1\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d9\u05d7\u05d1"\u05dc'] = "\u05d9\u05d7\u05e1\u05d9\u05dd \u05d1\u05d9\u05e0\u05dc\u05d0\u05d5\u05de\u05d9\u05d9\u05dd";
RyuaR['\u05d7"\u05de'] = "\u05d7\u05d1\u05e8 \u05de\u05e8\u05db\u05d6";
RyuaR['\u05d7\u05b7"\u05db\u05bc'] = "\u05d7\u05d1\u05e8 \u05db\u05e0\u05e1\u05ea";
RyuaR['\u05d7\u05d5"\u05d1'] = "\u05d7\u05d5\u05e5 \u05d5\u05d1\u05d9\u05d8\u05d7\u05d5\u05df";
RyuaR['\u05d7\u05d3"\u05e9'] = "\u05d7\u05d6\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05dc\u05e9\u05dc\u05d5\u05dd \u05d5\u05e9\u05d5\u05d5\u05d9\u05d5\u05df";
RyuaR['\u05d7\u05d0"\u05e4'] = "\u05d7\u05dc\u05d5\u05e5 \u05d0\u05d5\u05dc\u05de\u05e8\u05d8 \u05e4\u05e8\u05e5";
RyuaR['\u05d5\u05b8\u05d5\u05d3\u05b8\u05dc\u05b4\u05d9"\u05dd'] = "\u05d5\u05e2\u05d3\u05d5\u05ea \u05d3\u05d9\u05d5\u05e8 \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05d5\u05ea";
RyuaR['\u05d5\u05d5\u05d3"\u05dc'] = "\u05d5\u05d5\u05e2\u05d3\u05ea \u05d3\u05d9\u05d5\u05e8 \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05ea";
RyuaR['\u05d5\u05d3\u05dc\u05d9"\u05de'] = "\u05d5\u05e2\u05d3\u05d5\u05ea \u05d3\u05d9\u05d5\u05e8 \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05d5\u05ea";
RyuaR['\u05d5\u05b8\u05d3\u05b8"\u05dc'] = "\u05d5\u05e2\u05d3\u05ea \u05d3\u05d9\u05d5\u05e8 \u05dc\u05d0\u05d5\u05de\u05d9\u05ea";
RyuaR["\u05d4\u05b7\u05e6\u05bc\u05b9\u05d4\u05b7\u05e8"] = "\u05d4\u05e6\u05d9\u05d5\u05e0\u05d9\u05dd \u05d4\u05e8\u05d1\u05d9\u05d6\u05d9\u05d5\u05e0\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd";
RyuaR['\u05d4\u05e6\u05d4"\u05db'] = "\u05d4\u05e6\u05d9\u05d5\u05e0\u05d9\u05dd \u05d4\u05db\u05dc\u05dc\u05d9\u05d9\u05dd";
RyuaR['\u05d4\u05e6\u05d1"\u05dc'] = "\u05d4\u05e6\u05d4\u05e8\u05ea \u05d1\u05dc\u05e4\u05d5\u05e8";
RyuaR['\u05d4\u05e1\u05d4"\u05dc'] = "\u05d4\u05e1\u05e4\u05e8 \u05d4\u05dc\u05d1\u05df";
RyuaR['\u05d4\u05d7\u05db\u05d9"\u05dd'] = "\u05d7\u05d1\u05e8\u05d9 \u05d4\u05db\u05e0\u05e1\u05ea";
RyuaR['\u05d4\u05d5\u05e2\u05d4"\u05db'] = "\u05d4\u05d5\u05e2\u05d3 \u05d4\u05db\u05dc\u05dc\u05d9";
RyuaR['\u05d4\u05b7\u05d5\u05bc\u05b8\u05d5\u05d3\u05b8\u05dc\u05b4\u05d9"\u05dd'] = "(\u05d4)\u05d5\u05d5\u05e2\u05d3\u05d5\u05ea \u05d3\u05d9\u05d5\u05e8 \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05d5\u05ea";
RyuaR['\u05d3"\u05e9'] = "\u05ea\u05e0\u05d5\u05e2\u05d4 \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05dc\u05e9\u05d9\u05e0\u05d5\u05d9";
RyuaR["\u05d3\u05de\u05d5\u05e7'"] = "\u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05d4";
RyuaR['\u05d2\u05d9"\u05dc'] = "\u05d2\u05de\u05dc\u05d0\u05d9 \u05d9\u05e9\u05e8\u05d0\u05dc \u05dc\u05db\u05e0\u05e1\u05ea";
RyuaR['\u05d2\u05bc\u05b7\u05d7\u05b7"\u05dc'] = "\u05d2\u05d5\u05e9 \u05d7\u05e8\u05d5\u05ea \u05dc\u05d9\u05d1\u05e8\u05dc\u05d9\u05dd";
RyuaR['\u05d1\u05e0\u05d0"\u05d9'] = "\u05d1\u05e8\u05d9\u05ea \u05e0\u05d0\u05de\u05e0\u05d9 \u05d0\u05e8\u05e5 \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d1\u05dc"\u05d3'] = "\u05d1\u05e8\u05d9\u05ea \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea";
RyuaR['\u05d0\u05e4\u05e2"\u05dc'] = "\u05d0\u05d9\u05d2\u05d5\u05d3 \u05e4\u05d5\u05e2\u05dc\u05d9\u05dd \u05e2\u05d1\u05e8\u05d9\u05d9\u05dd \u05dc\u05d0\u05d5\u05de\u05d9\u05d9\u05dd";
RyuaR['\u05d0\u05de"\u05e2'] = "\u05d0\u05e8\u05db\u05d9\u05d5\u05df \u05de\u05e4\u05dc\u05d2\u05ea \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4";
RyuaR['\u05d0\u05d9"\u05d4'] = "\u05d0\u05e8\u05e5 \u05d9\u05e9\u05e8\u05d0\u05dc \u05d4\u05e9\u05dc\u05de\u05d4";
RyuaR['\u05d0\u05d7"\u05e1'] = "\u05d4\u05d0\u05d7\u05d9\u05dd \u05d4\u05de\u05d5\u05e1\u05dc\u05de\u05d9\u05dd";
RyuaR['\u05d0\u05d7"\u05d9'] = "\u05d0\u05e8\u05e5 \u05d7\u05d1\u05e8\u05d4 \u05d9\u05d4\u05d3\u05d5\u05ea";
RyuaR['\u05d0\u05d7\u05d4"\u05e2'] = "\u05d0\u05d7\u05d3\u05d5\u05ea \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4";
RyuaR['\u05d0\u05d4"\u05e2'] = "\u05d0\u05d7\u05d3\u05d5\u05ea \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4";
RyuaR['\u05d0\u05d2\u05d5"\u05d9'] = "\u05d0\u05d2\u05d5\u05d3\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d0\u05d0"\u05e4'] = "\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d0\u05e4\u05e8\u05d9\u05e7\u05d0\u05d9";
RyuaR['\u05ea\u05d5\u05de"\u05e8'] = "\u05ea\u05d5\u05d3\u05d4 \u05de\u05e8\u05d0\u05e9";
RyuaR['\u05e9\u05d1\u05d4"\u05d9'] = "\u05e9\u05d0\u05e8 \u05d1\u05e9\u05e8\u05d9 \u05d4\u05d9\u05e7\u05e8";
RyuaR['\u05e8"\u05e9'] = "\u05e8\u05d0\u05d4 \u05e9\u05dd";
RyuaR['\u05e8\u05e6"\u05e4'] = "\u05e8\u05e6\u05d5\u05e3 \u05e4\u05d4";
RyuaR['\u05e8\u05e6\u05d5"\u05e4'] = "\u05e8\u05e6\u05d5\u05e3 \u05e4\u05d4";
RyuaR['\u05e8\u05e6\u05d5"\u05d1'] = "\u05e8\u05e6\u05d5\u05e3 \u05d1\u05d6\u05d4";
RyuaR['\u05e8\u05e6"\u05d1'] = "\u05e8\u05e6\u05d5\u05e3 \u05d1\u05d6\u05d4";
RyuaR['\u05e8"\u05e4'] = "\u05e8\u05e6\u05d5\u05e3 \u05e4\u05d4";
RyuaR['\u05e8"\u05de'] = "\u05e8\u05d0\u05d4 \u05de\u05e1\u05d2\u05e8\u05ea";
RyuaR['\u05e7\u05e6"\u05e2'] = "\u05e7\u05e6\u05ea \u05e6\u05e8\u05d9\u05da \u05e2\u05d9\u05d5\u05df";
RyuaR['\u05e6"\u05dc'] = "\u05e6\u05e8\u05d9\u05da \u05dc\u05d5\u05de\u05e8";
RyuaR['\u05e6"\u05dc'] = "\u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea";
RyuaR["\u05e4\u05e7\u05e1'"] = "\u05e4\u05e7\u05e1\u05d9\u05de\u05d9\u05dc\u05d9\u05d4";
RyuaR["\u05e2.\u05e9."] = "\u05e2\u05d9\u05e7\u05e8 \u05e9\u05db\u05d7\u05ea\u05d9";
RyuaR['\u05e2"\u05e2'] = "\u05e2\u05b7\u05d9\u05bc\u05b5\u05df \u05e2\u05e8\u05da";
RyuaR['\u05e2"\u05e2'] = "\u05e2\u05b7\u05d9\u05bc\u05b5\u05df \u05e2\u05de\u05d5\u05d3";
RyuaR['\u05e2"\u05e2'] = "\u05e2\u05d9\u05d9\u05df \u05e2\u05d5\u05d3";
RyuaR['\u05e2\u05de"\u05e9'] = "\u05e2\u05b7\u05d9\u05bc\u05b5\u05df \u05de\u05d4 \u05e9\u05db\u05ea\u05d5\u05d1";
RyuaR["\u05e2\u05de'"] = "\u05e2\u05de\u05d5\u05bc\u05d3(\u05d9\u05dd)";
RyuaR['\u05e2"\u05dc'] = "\u05e2\u05d9\u05d9\u05df \u05dc\u05de\u05e2\u05dc\u05d4";
RyuaR['\u05e2\u05db\u05ea"\u05d3'] = "\u05e2\u05d3 \u05db\u05d0\u05df \u05ea\u05d5\u05db\u05df \u05d3\u05d1\u05e8\u05d9\u05d5";
RyuaR['\u05e2\u05d9"\u05e9'] = "\u05e2\u05b7\u05d9\u05bc\u05b5\u05df \u05e9\u05c1\u05b8\u05dd";
RyuaR['\u05e2\u05d9"\u05e2'] = "\u05e2\u05d9\u05df \u05e2\u05e8\u05da";
RyuaR['\u05e2\u05d9"\u05e2'] = "\u05e2\u05d9\u05d9\u05df \u05e2\u05d5\u05d3";
RyuaR['\u05e2\u05d9\u05de"\u05e9'] = "\u05e2\u05b7\u05d9\u05bc\u05b5\u05df \u05de\u05d4 \u05e9\u05db\u05ea\u05d1\u05ea\u05d9";
RyuaR['\u05e2\u05d9\u05d9"\u05e9'] = "\u05e2\u05d9\u05d9\u05df \u05e9\u05dd";
RyuaR['\u05e2\u05d4"\u05d7'] = "\u05e2\u05dc \u05d4\u05d7\u05ea\u05d5\u05dd";
RyuaR['\u05e2"\u05d4'] = "\u05e2\u05dc \u05d4\u05d7\u05ea\u05d5\u05dd";
RyuaR['\u05e1"\u05e6'] = "\u05e1\u05d5\u05e3 \u05e6\u05d9\u05d8\u05d5\u05d8";
RyuaR['\u05e0"\u05dc'] = "\u05e0\u05d6\u05db\u05e8 \u05dc\u05e2\u05b5\u05d9\u05dc";
RyuaR['\u05e0"\u05dc'] = "\u05e0\u05d6\u05db\u05e8 \u05dc\u05de\u05e2\u05dc\u05d4";
RyuaR['\u05e0\u05d1"\u05d3'] = "\u05e0\u05d6\u05db\u05e8\u05ea\u05d9 \u05d1\u05e2\u05d5\u05d3 \u05d3\u05d1\u05e8";
RyuaR["\u05e0.\u05d1"] = "\u05e0\u05db\u05ea\u05d1 \u05d1\u05e6\u05d9\u05d3\u05d5";
RyuaR['\u05e0"\u05d1'] = "\u05e0\u05db\u05ea\u05d1 \u05d1\u05e1\u05d5\u05e3";
RyuaR["\u05e0.\u05d1."] = "\u05e0\u05d6\u05db\u05e8 \u05d1\u05d6\u05d0\u05ea";
RyuaR['\u05e0"\u05d1'] = "\u05e0\u05d5\u05e1\u05e3 \u05d1\u05e1\u05d5\u05e3";
RyuaR['\u05de\u05e6\u05d5"\u05d1'] = "\u05de\u05e6\u05d5\u05e8\u05e3 \u05d1\u05d6\u05d0\u05ea";
RyuaR['\u05de\u05e6\u05d1"\u05d6'] = "\u05de\u05e6\u05d5\u05e8\u05e3 \u05d1\u05d6\u05d4";
RyuaR['\u05de\u05e6"\u05d1'] = "\u05de\u05e6\u05d5\u05e8\u05e3 \u05d1\u05d6\u05d0\u05ea";
RyuaR['\u05de\u05e2\u05dc"\u05d3'] = "\u05de\u05e2\u05d1\u05e8 \u05dc\u05d3\u05e3";
RyuaR['\u05de\u05d5\u05e1\u05d2"\u05e4'] = "\u05de\u05d5\u05e1\u05d2\u05e8 \u05e4\u05d4";
RyuaR['\u05de\u05d5\u05db"\u05d6'] = "\u05de\u05d5\u05e1\u05e8 \u05db\u05ea\u05d1 \u05d6\u05d4";
RyuaR["\u05de'"] = "\u05de\u05e8";
RyuaR['\u05dc\u05de\u05d5\u05db"\u05d6'] = "\u05dc\u05de\u05d5\u05e1\u05e8 \u05db\u05ea\u05d1 \u05d6\u05d4";
RyuaR['\u05dc\u05de\u05d5\u05db"\u05d6'] = "\u05dc\u05de\u05d1\u05d9\u05d0 \u05db\u05ea\u05d1 \u05d6\u05d4";
RyuaR["\u05dc\u05db'"] = "\u05dc\u05db\u05d1\u05d5\u05d3";
RyuaR['\u05dc\u05d0"\u05d0'] = "\u05dc\u05d0\u05d4\u05d5\u05d1\u05d9 \u05d0\u05d1\u05d9";
RyuaR['\u05db\u05ea"\u05e8'] = "\u05db\u05d1\u05d5\u05d3 \u05ea\u05d5\u05e8\u05ea\u05d5";
RyuaR['\u05db\u05ea"\u05d9'] = "\u05db\u05ea\u05d1 \u05d9\u05d3";
RyuaR['\u05db\u05ea"\u05d6'] = "\u05db\u05ea\u05d1 \u05d6\u05d4";
RyuaR['\u05db\u05e6"\u05dc'] = "\u05db\u05df \u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05d9\u05d5\u05ea";
RyuaR['\u05db\u05e6"\u05dc'] = "\u05db\u05da \u05e6\u05e8\u05d9\u05da \u05dc\u05d5\u05de\u05e8";
RyuaR['\u05db\u05de"\u05ea'] = "\u05db\u05d1\u05d5\u05d3 \u05de\u05e2\u05dc\u05ea \u05ea\u05e4\u05d0\u05e8\u05ea\u05d5";
RyuaR['\u05db\u05de\u05e9\u05db"\u05dc'] = "\u05db\u05de\u05d5 \u05e9\u05db\u05ea\u05d1\u05e0\u05d5 \u05dc\u05de\u05e2\u05dc\u05d4";
RyuaR['\u05db\u05de\u05d4"\u05e8'] = "\u05db\u05d1\u05d5\u05d3 \u05de\u05d5\u05e8\u05e0\u05d5 \u05d4\u05e8\u05d1";
RyuaR['\u05db"\u05de'] = "\u05db\u05d1\u05d5\u05d3 \u05de\u05e2\u05dc\u05ea";
RyuaR['\u05db\u05d9\u05d5\u05e6"\u05d1'] = "\u05db\u05d9\u05d5\u05e6\u05d0 \u05d1\u05d6\u05d4";
RyuaR['\u05db\u05d9\u05d5"\u05d1'] = "\u05db\u05d9\u05d5\u05e6\u05d0 \u05d1\u05d6\u05d4";
RyuaR['\u05db\u05d9\u05d5"\u05d1'] = "\u05db\u05d9\u05d5\u05e6\u05d0 \u05d1\u05d5";
RyuaR['\u05db"\u05d9'] = "\u05db\u05ea\u05d1\u05d9 \u05d9\u05d3";
RyuaR['\u05db"\u05d6'] = "\u05db\u05ea\u05d1 \u05d6\u05d4";
RyuaR['\u05db\u05d5"\u05d7'] = "\u05db\u05d5\u05ea\u05d1 \u05d5\u05d7\u05d5\u05ea\u05dd";
RyuaR["\u05db\u05d5'"] = "\u05db\u05bc\u05d5\u05bc\u05dc\u05b5\u05d9\u05d4\u05bc";
RyuaR["\u05db\u05d1'"] = "\u05db\u05d1\u05d5\u05d3";
RyuaR['\u05d9\u05e2\u05d5"\u05e9'] = "\u05d9\u05b0\u05e2\u05bb\u05d9\u05b7\u05df \u05e9\u05c1\u05b8\u05dd";
RyuaR['\u05d9\u05e2\u05d5\u05d9"\u05e9'] = "\u05d9\u05e2\u05d5\u05d9\u05d9\u05df \u05e9\u05dd";
RyuaR['\u05d9\u05dc"\u05e2'] = "\u05d9\u05e9 \u05dc\u05e2\u05d9\u05d9\u05df";
RyuaR['\u05d7\u05ea"\u05e9'] = "\u05d7\u05ea\u05de\u05ea\u05d9 \u05e9\u05de\u05d9";
RyuaR['\u05d7\u05e0"\u05dd'] = "\u05d7\u05d1\u05e8 \u05e0\u05db\u05d1\u05d3 \u05de\u05d0\u05d5\u05d3";
RyuaR['\u05d7"\u05e0'] = "\u05d7\u05d1\u05e8\u05d4 \u05e0\u05db\u05d1\u05d3\u05d4";
RyuaR['\u05d7"\u05e0'] = "\u05d7\u05d1\u05e8 \u05e0\u05db\u05d1\u05d3";
RyuaR['\u05d7"\u05de'] = "\u05d7\u05ea\u05d5\u05dd \u05de\u05d8\u05d4";
RyuaR['\u05d7"\u05d9'] = "\u05d7\u05d1\u05e8 \u05d9\u05e7\u05e8";
RyuaR['\u05d7"\u05d7'] = "\u05d7\u05d1\u05e8\u05d9\u05dd";
RyuaR['\u05d5\u05db\u05d9\u05d5"\u05d1'] = "\u05db\u05d9\u05d5\u05e6\u05d0 \u05d1\u05d6\u05d4";
RyuaR['\u05d5\u05db\u05d9\u05d5"\u05d1'] = "\u05d5\u05db\u05d9\u05d5\u05e6\u05d0 \u05d1\u05d0\u05dc\u05d4";
RyuaR["\u05d5\u05db\u05d3'"] = "\u05d5\u05db\u05d3\u05d5\u05de\u05d4";
RyuaR["\u05d5\u05d2\u05d5'"] = "\u05d5\u05d2\u05d5\u05de\u05e8";
RyuaR['\u05d4"\u05e9'] = "\u05d4\u05e2\u05e8\u05ea \u05e9\u05d5\u05dc\u05d9\u05d9\u05dd";
RyuaR['\u05d4\u05e8"\u05d1'] = "\u05d4\u05e8\u05e6\u05d5\u05e3 \u05d1\u05d6\u05d4";
RyuaR['\u05d4\u05e0\u05d6"\u05dc'] = "\u05d4\u05e0\u05d6\u05db\u05e8 \u05dc\u05e2\u05d9\u05dc";
RyuaR['\u05d4"\u05e0'] = "\u05d4\u05d5\u05e8\u05d9\u05dd \u05e0\u05db\u05d1\u05d3\u05d9\u05dd";
RyuaR['\u05d4\u05de\u05e6"\u05d1'] = "\u05d4\u05de\u05e6\u05d5\u05e8\u05e3 \u05d1\u05d6\u05d4";
RyuaR['\u05d4\u05d7\u05ea\u05d5"\u05de'] = "\u05d4\u05d7\u05ea\u05d5\u05dd \u05de\u05d8\u05d4";
RyuaR['\u05d4"\u05d4'] = "\u05d4\u05d0\u05d3\u05d5\u05e0\u05d9\u05dd \u05d4\u05e0\u05db\u05d1\u05d3\u05d9\u05dd";
RyuaR["\u05d3.\u05e0.\u05d2.\u05ea"] = "\u05d3\u05d5\u05d0\u05e8 \u05e0\u05e2 \u05d2\u05dc\u05d9\u05dc \u05ea\u05d7\u05ea\u05d5\u05df";
RyuaR["\u05d2.\u05e0."] = "\u05d2\u05d1\u05e8\u05ea \u05e0\u05db\u05d1\u05d3\u05d4";
RyuaR["\u05d2\u05d1'"] = "\u05d2\u05d1\u05e8\u05ea";
RyuaR['\u05d1\u05e8\u05d2"\u05db'] = "\u05d1\u05e8\u05d2\u05e9\u05d9 \u05db\u05d1\u05d5\u05d3";
RyuaR['\u05d1\u05e2\u05d4"\u05d7'] = "\u05d1\u05d0 \u05e2\u05dc \u05d4\u05d7\u05ea\u05d5\u05dd";
RyuaR['\u05d1\u05e1"\u05d3'] = "\u05d1\u05e1\u05d9\u05e2\u05ea\u05d0 \u05d3\u05e9\u05de\u05d9\u05d0";
RyuaR['\u05d1\u05db"\u05e8'] = "\u05d1\u05db\u05d1\u05d5\u05d3 \u05e8\u05d1";
RyuaR['\u05d1\u05db"\u05d6'] = "\u05d1\u05db\u05ea\u05d5\u05d1 \u05d6\u05d4";
RyuaR['\u05d1\u05d0\u05e2\u05d4"\u05d7'] = "\u05d1\u05d0\u05e0\u05d5 \u05e2\u05dc \u05d4\u05d7\u05ea\u05d5\u05dd";
RyuaR['\u05d0\u05e0"\u05de'] = "\u05d0\u05d3\u05d5\u05df \u05e0\u05db\u05d1\u05d3 \u05de\u05d0\u05d5\u05d3";
RyuaR["\u05d0.\u05e0."] = "\u05d0\u05d3\u05d5\u05df \u05e0\u05db\u05d1\u05d3";
RyuaR['\u05d0\u05de"\u05dc'] = "\u05d0\u05d9\u05df \u05de\u05d4 \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3";
RyuaR["\u05d0\u05d3'"] = "\u05d0\u05d3\u05d5\u05df";
RyuaR['\u05d0\u05d2"\u05e0'] = "\u05d0\u05d3\u05d5\u05df/\u05d2\u05d1\u05e8\u05ea \u05e0\u05db\u05d1\u05d3\u05d9\u05dd";
RyuaR["\u05d2.\u05e0."] = "\u05d2\u05d1\u05e8\u05ea \u05e0\u05db\u05d1\u05d3\u05d4";
RyuaR['\u05d2\u05d0"\u05e0'] = "\u05d2\u05d1\u05e8\u05ea/\u05d0\u05d3\u05d5\u05df \u05e0\u05db\u05d1\u05d3\u05d9\u05dd";
RyuaR['\u05d1\u05e8\u05d2"\u05db'] = "\u05d1\u05e8\u05d2\u05e9\u05d9 \u05db\u05d1\u05d5\u05d3";
RyuaR['\u05d1\u05e2\u05d4"\u05d7'] = "\u05d1\u05d0 \u05e2\u05dc \u05d4\u05d7\u05ea\u05d5\u05dd";
RyuaR['\u05d1\u05e1"\u05d3'] = "\u05d1\u05e1\u05d9\u05e2\u05ea\u05d0 \u05d3\u05e9\u05de\u05d9\u05d0";
RyuaR['\u05d1\u05db"\u05e8'] = "\u05d1\u05db\u05d1\u05d5\u05d3 \u05e8\u05d1";
RyuaR['\u05d1\u05db"\u05d6'] = "\u05d1\u05db\u05ea\u05d5\u05d1 \u05d6\u05d4";
RyuaR['\u05d1\u05d0\u05e2\u05d4"\u05d7'] = "\u05d1\u05d0\u05e0\u05d5 \u05e2\u05dc \u05d4\u05d7\u05ea\u05d5\u05dd";
RyuaR['\u05d0\u05e0"\u05de'] = "\u05d0\u05d3\u05d5\u05df \u05e0\u05db\u05d1\u05d3 \u05de\u05d0\u05d5\u05d3";
RyuaR["\u05d0.\u05e0."] = "\u05d0\u05d3\u05d5\u05df \u05e0\u05db\u05d1\u05d3";
RyuaR['\u05d0\u05de"\u05dc'] = "\u05d0\u05d9\u05df \u05de\u05d4 \u05dc\u05e6\u05d9\u05d9\u05df";
RyuaR['\u05d0\u05de"\u05dc'] = "\u05d0\u05d9\u05df \u05de\u05d4 \u05dc\u05d4\u05e2\u05d9\u05e8";
RyuaR['\u05d0\u05de"\u05dc'] = "\u05d0\u05d9\u05df \u05de\u05d4 \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3";
RyuaR['\u05d0\u05d3"\u05e0'] = "\u05d0\u05d3\u05d5\u05df \u05e0\u05db\u05d1\u05d3";
RyuaR['\u05ea"\u05e8'] = "\u05ea\u05e7\u05df \u05e8\u05e9\u05de\u05d9";
RyuaR['\u05ea\u05e6"\u05d2'] = "\u05ea\u05d5\u05e6\u05e8\u05ea \u05d2\u05de\u05d5\u05e8\u05d4";
RyuaR['\u05ea\u05e4"\u05de'] = "\u05ea\u05d0\u05d5\u05e8 \u05e4\u05e2\u05d5\u05dc\u05ea \u05de\u05e2\u05e8\u05db\u05ea";
RyuaR['\u05ea\u05e4"\u05d8'] = "\u05ea\u05db\u05e0\u05d5\u05df \u05e4\u05d9\u05ea\u05d5\u05d7 \u05d5\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d4";
RyuaR['\u05ea\u05bc\u05b8\u05e2\u05d5\u05b9"\u05d6'] = "\u05ea\u05e2\u05e8\u05d9\u05e3 \u05e2\u05d5\u05de\u05e1 \u05d5\u05d6\u05de\u05df";
RyuaR['\u05ea\u05bc\u05b8\u05de\u05b8"\u05df'] = "\u05ea\u05e2\u05e9\u05d9\u05d9\u05ea \u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05e0\u05d4\u05d9\u05d2\u05d4";
RyuaR['\u05ea\u05dc\u05e7"\u05e6'] = "\u05ea\u05dc\u05d5\u05d9 \u05e7\u05e6\u05d9\u05e8";
RyuaR['\u05ea\u05dc"\u05d7'] = "\u05ea\u05e7\u05df \u05dc\u05d0 \u05d7\u05dc";
RyuaR['\u05ea\u05dc\u05d4"\u05e9'] = "\u05ea\u05dc\u05d5\u05d9 \u05d4\u05e9\u05e7\u05d9\u05d4";
RyuaR['\u05ea"\u05d9'] = "\u05ea\u05e7\u05df \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9";
RyuaR['\u05ea\u05d7\u05de"\u05e9'] = "\u05ea\u05d7\u05e0\u05ea \u05de\u05e9\u05e0\u05d4";
RyuaR['\u05ea\u05d7\u05de"\u05d2'] = "\u05ea\u05d7\u05e0\u05ea \u05de\u05d9\u05ea\u05d5\u05d2";
RyuaR['\u05ea\u05d7"\u05db'] = "\u05ea\u05d7\u05e0\u05ea \u05db\u05d7";
RyuaR['\u05ea\u05d5\u05e6"\u05d2'] = "\u05ea\u05d5\u05e6\u05e8\u05ea \u05d2\u05de\u05d5\u05e8\u05d4";
RyuaR['\u05ea\u05d4"\u05e8'] = "\u05ea\u05d7\u05e0\u05ea \u05d4\u05e9\u05e0\u05d0\u05d4 \u05e8\u05db\u05d1\u05ea\u05d9\u05ea";
RyuaR['\u05ea\u05d0\u05de"\u05d5'] = '\u05ea\u05d3\u05e8\u05d9\u05da \u05d0\u05d2\u05e3 \u05d4\u05de\u05db\u05e1 \u05d5\u05de\u05e2"\u05de';
RyuaR['\u05ea\u05d0"\u05de'] = "\u05ea\u05e2\u05e8\u05d5\u05d1\u05ea \u05d0\u05e1\u05e4\u05dc\u05d8 \u05de\u05d1\u05e0\u05d9\u05ea";
RyuaR['\u05e9\u05e7"\u05e6'] = "\u05e9\u05e7\u05e2 \u05d0\u05d5\u05e4\u05e6\u05d9\u05d5\u05ea";
RyuaR['\u05e9\u05e2\u05d8"\u05df'] = "\u05e9\u05d5\u05d5\u05d4 \u05e2\u05e8\u05da \u05dc\u05d8\u05d5\u05e0\u05d4 \u05e0\u05e4\u05d8";
RyuaR['\u05e8\u05d8"\u05df'] = "\u05e8\u05d3\u05d9\u05d5 \u05d8\u05dc\u05e4\u05d5\u05df \u05e0\u05d9\u05d9\u05d3";
RyuaR['\u05e8\u05d8"\u05de'] = "\u05e8\u05d9\u05e6\u05d5\u05e3 \u05d8\u05d9\u05d7 \u05de\u05d7\u05d9\u05e6\u05d5\u05ea";
RyuaR['\u05e7\u05d1\u05de"\u05e9'] = "\u05e7\u05d1\u05dc\u05df \u05de\u05e9\u05e0\u05d4";
RyuaR['\u05e6"\u05e4'] = "\u05e6\u05de\u05e0\u05d8 \u05e4\u05d5\u05e8\u05d8\u05dc\u05e0\u05d3";
RyuaR['\u05e6\u05de"\u05e9'] = "\u05e6\u05d9\u05e0\u05d5\u05e8 \u05de\u05e9\u05d5\u05e8\u05d9\u05d9\u05df";
RyuaR['\u05e6\u05de"\u05e0'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05ea\u05d7 \u05e0\u05de\u05d5\u05da";
RyuaR['\u05e6\u05b8\u05de\u05b8"\u05df'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05db\u05e0\u05d9 \u05e0\u05d9\u05d9\u05d3";
RyuaR['\u05e6\u05de"\u05db'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05db\u05e0\u05d9 \u05db\u05d1\u05d3";
RyuaR['\u05e6\u05de"\u05d4'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05db\u05e0\u05d9 \u05d4\u05e0\u05d3\u05e1\u05d9";
RyuaR['\u05e6\u05de"\u05d2'] = "\u05e6\u05d9\u05e0\u05d5\u05e8 \u05de\u05d9 \u05d2\u05e9\u05dd";
RyuaR['\u05e6\u05de"\u05d0'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05d2\u05df \u05d0\u05d9\u05e9\u05d9";
RyuaR['\u05e6"\u05d7'] = "\u05e6\u05d9\u05d5\u05d3 \u05d7\u05e7\u05dc\u05d0\u05d9";
RyuaR['\u05e4\u05e8"\u05d3'] = "\u05e4\u05e8\u05d9\u05e6\u05d4 \u05e8\u05d1 \u05d3\u05e8\u05d2\u05ea\u05d9\u05ea";
RyuaR['\u05e4\u05e7"\u05e2'] = "\u05e4\u05e7\u05d5\u05d3\u05ea \u05e2\u05d1\u05d5\u05d3\u05d4";
RyuaR['\u05e4\u05e7\u05de"\u05e7'] = "\u05e4\u05e7\u05d5\u05d3\u05ea \u05de\u05d9\u05ea\u05d5\u05d2 \u05d5\u05e7\u05d9\u05e6\u05d5\u05e8";
RyuaR['\u05e4\u05e2"\u05de'] = "\u05e4\u05d9\u05e7\u05d5\u05d7 \u05e2\u05dc \u05de\u05d3\u05d9\u05d3\u05d5\u05ea";
RyuaR['\u05e4\u05e1"\u05e7'] = "\u05e4\u05d9\u05e7\u05d5\u05d7 \u05e1\u05db\u05e0\u05d5\u05ea \u05e7\u05e8\u05d9\u05e0\u05d4";
RyuaR['\u05e4\u05de"\u05d0'] = "\u05e4\u05d9\u05ea\u05d5\u05d7 \u05de\u05e9\u05d0\u05d1\u05d9 \u05d0\u05e0\u05e8\u05d2\u05d9\u05d4";
RyuaR['\u05e4\u05dc"\u05d7'] = "\u05e4\u05e2\u05d9\u05dc\u05d5\u05ea \u05dc\u05d0 \u05d7\u05e7\u05dc\u05d0\u05d9\u05ea";
RyuaR['\u05e4\u05d9"\u05e6'] = "\u05e4\u05d5\u05e2\u05dc \u05d9\u05e6\u05d5\u05e8";
RyuaR['\u05e4\u05d7"\u05de'] = "\u05e4\u05d5\u05d8\u05e0\u05e6\u05d9\u05d0\u05dc \u05d7\u05de\u05e6\u05d5\u05df \u05d7\u05d9\u05d6\u05d5\u05e8";
RyuaR['\u05e4"\u05d5'] = "\u05e4\u05d5\u05d8\u05d5 \u05d5\u05d5\u05dc\u05d8\u05d0\u05d9";
RyuaR['\u05e4\u05d1"\u05de'] = "\u05e4\u05e1\u05d5\u05dc\u05ea \u05d1\u05dc\u05ea\u05d9 \u05de\u05d0\u05d5\u05ea\u05e8\u05ea";
RyuaR['\u05e4\u05d1"\u05d8'] = "\u05e4\u05e7\u05d9\u05d3 \u05d1\u05d8\u05d9\u05d7\u05d5\u05ea";
RyuaR['\u05e2\u05e9"\u05e8'] = "\u05e2\u05e9\u05d1\u05d5\u05e0\u05d9\u05d9\u05dd \u05e8\u05d1 \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd";
RyuaR['\u05e2\u05e2"\u05d1'] = "\u05e2\u05d5\u05de\u05e1 \u05e2\u05d1\u05d5\u05d3\u05d4 \u05d1\u05d8\u05d5\u05d7";
RyuaR['\u05e2"\u05d7'] = "\u05e2\u05de\u05d5\u05d3 \u05d7\u05e9\u05de\u05dc";
RyuaR['\u05e2\u05d4"\u05d8'] = "\u05e2\u05dc \u05d4\u05d8\u05d9\u05d7";
RyuaR['\u05e1\u05e9"\u05d7'] = "\u05e1\u05e4\u05e7 \u05e9\u05d9\u05e8\u05d5\u05ea \u05d7\u05d9\u05d5\u05e0\u05d9";
RyuaR['\u05e1\u05e9"\u05d0'] = "\u05e1\u05e4\u05e7 \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d0\u05e0\u05e8\u05d2\u05d9\u05d4";
RyuaR['\u05e1\u05d7"\u05d4'] = "\u05e1\u05d7\u05e8 \u05d4\u05d5\u05d2\u05df";
RyuaR['\u05e0\u05e8"\u05d9'] = "\u05e0\u05d9\u05d4\u05d5\u05dc \u05e8\u05e6\u05e4\u05ea \u05d9\u05e6\u05d5\u05e8";
RyuaR['\u05e0\u05e7"\u05e9'] = "\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05e9\u05d7\u05d5\u05e8\u05d5\u05ea";
RyuaR['\u05e0\u05e4"\u05e7'] = "\u05e0\u05d5\u05e8\u05ea \u05e4\u05dc\u05d5\u05e8\u05e1\u05e0\u05d8 \u05e7\u05d5\u05de\u05e4\u05e7\u05d8\u05d9";
RyuaR['\u05e0\u05e4"\u05d7'] = "\u05e0\u05d9\u05e6\u05d5\u05dc \u05e4\u05e1\u05d5\u05dc\u05ea \u05d7\u05e7\u05dc\u05d0\u05d9\u05ea";
RyuaR['\u05e0\u05de"\u05d9'] = "\u05e0\u05d9\u05d4\u05d5\u05dc \u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05d9\u05d9\u05e6\u05d5\u05e8";
RyuaR['\u05e0\u05de"\u05d7'] = "\u05e0\u05d9\u05ea\u05d5\u05d7 \u05de\u05d7\u05d6\u05d5\u05e8 \u05d7\u05d9\u05d9\u05dd";
RyuaR['\u05de\u05ea\u05e7"\u05e9'] = "\u05de\u05ea\u05db\u05d5\u05ea \u05e7\u05e9\u05d5\u05ea";
RyuaR['\u05de\u05ea\u05d9\u05de\u05d5"\u05e4'] = "\u05de\u05e8\u05db\u05d6 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4 \u05dc\u05de\u05d7\u05e7\u05e8 \u05d5\u05e4\u05d9\u05ea\u05d5\u05d7";
RyuaR['\u05de\u05d0\u05de"\u05ea'] = "\u05de\u05e4\u05e1\u05e7 \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9 \u05de\u05d2\u05e0\u05d8\u05d9 \u05ea\u05e8\u05de\u05d9";
RyuaR['\u05de\u05d0\u05de"\u05d8'] = "\u05de\u05e4\u05e1\u05e7 \u05d7\u05e6\u05d9 \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9";
RyuaR['\u05de\u05d0"\u05d6'] = "\u05de\u05e4\u05e1\u05e7 \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9 \u05d6\u05e2\u05d9\u05e8";
RyuaR['\u05dc\u05d5\u05d7"\u05d3'] = "\u05dc\u05d5\u05d7 \u05d3\u05e8\u05d5\u05da";
RyuaR['\u05db\u05d7"\u05e0'] = "\u05db\u05dc\u05dc \u05d7\u05d5\u05de\u05e8\u05d9\u05dd \u05e0\u05e2\u05db\u05dc\u05d9\u05dd";
RyuaR['\u05d9\u05e2"\u05e9'] = "\u05d9\u05d7\u05e1 \u05e2\u05dc\u05d5\u05d5\u05d4 \u05e9\u05d8\u05d7";
RyuaR['\u05d9\u05d7"\u05e4'] = "\u05d9\u05e6\u05e8\u05df \u05d7\u05e9\u05de\u05dc \u05e4\u05e8\u05d8\u05d9";
RyuaR['\u05d9\u05d2"\u05e2'] = "\u05d9\u05d7\u05e1 \u05d2\u05dc\u05d9\u05dd \u05e2\u05d5\u05de\u05d3\u05d9\u05dd";
RyuaR['\u05d9"\u05d1'] = "\u05d9\u05e6\u05d9\u05e7\u05ea \u05d1\u05e8\u05d6\u05dc";
RyuaR['\u05d8\u05dc"\u05e0'] = "\u05d8\u05d5\u05e8\u05d1\u05d9\u05e0\u05d4 \u05dc\u05d7\u05e5 \u05e0\u05de\u05d5\u05da";
RyuaR['\u05d8\u05dc"\u05d2'] = "\u05d8\u05d5\u05e8\u05d1\u05d9\u05e0\u05d4 \u05dc\u05d7\u05e5 \u05d2\u05d1\u05d5\u05d4";
RyuaR['\u05d7\u05e7"\u05d9'] = "\u05d7\u05e7\u05dc\u05d0\u05d5\u05ea \u05d9\u05de\u05d9\u05ea";
RyuaR['\u05d7\u05e6"\u05e7'] = "\u05d7\u05e9\u05de\u05dc \u05e6\u05d9\u05d5\u05d3 \u05e7\u05e8\u05e7\u05e2";
RyuaR['\u05d7\u05b7\u05e4\u05bc\u05b8"\u05e9\u05c1'] = "\u05d7\u05d5\u05de\u05e8 \u05e4\u05e2\u05d9\u05dc \u05e9\u05d8\u05d7";
RyuaR['\u05d7\u05de"\u05e8'] = "\u05d7\u05d5\u05de\u05e8\u05d9\u05dd \u05e8\u05e2\u05d9\u05dc\u05d9\u05dd";
RyuaR['\u05d7\u05de"\u05e1'] = "\u05d7\u05d5\u05de\u05e8\u05d9\u05dd \u05de\u05e1\u05d5\u05db\u05e0\u05d9\u05dd";
RyuaR['\u05d7\u05de"\u05d9'] = "\u05d7\u05d1\u05e8\u05ea \u05d4\u05d7\u05e9\u05de\u05dc \u05de\u05d6\u05e8\u05d7 \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd";
RyuaR['\u05d7\u05de"\u05d0'] = "\u05d7\u05d5\u05de\u05e8 \u05de\u05db\u05d9\u05dc \u05d0\u05e1\u05d1\u05e1\u05d8";
RyuaR['\u05d7\u05d8"\u05dc'] = "\u05d7\u05d5\u05e8\u05e9 \u05d8\u05d1\u05e2\u05d9 \u05dc\u05de\u05e8\u05e2\u05d4";
RyuaR['\u05d7\u05d8"\u05db'] = "\u05d7\u05d8\u05d9\u05d1\u05d5\u05ea \u05db\u05d5\u05d7";
RyuaR['\u05d7\u05d7"\u05d9'] = "\u05d7\u05d1\u05e8\u05ea \u05d7\u05e9\u05de\u05dc \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d7"\u05d7'] = "\u05d7\u05dc\u05e7\u05d9 \u05d7\u05d9\u05dc\u05d5\u05e3";
RyuaR['\u05d7\u05d5\u05de"\u05e8'] = "\u05d7\u05d5\u05de\u05e8\u05d9\u05dd \u05e8\u05e2\u05d9\u05dc\u05d9\u05dd";
RyuaR['\u05d7\u05d5\u05de"\u05e1'] = "\u05d7\u05d5\u05de\u05e8\u05d9\u05dd \u05de\u05e1\u05d5\u05db\u05e0\u05d9\u05dd";
RyuaR['\u05d7\u05d5\u05de"\u05de'] = "\u05d7\u05d5\u05de\u05e8\u05d9\u05dd \u05de\u05d5\u05e8\u05db\u05d1\u05d9\u05dd";
RyuaR['\u05d7\u05d5\u05d4"\u05d3'] = "\u05d7\u05d5\u05de\u05e8\u05d9 \u05d4\u05d3\u05d1\u05e8\u05d4";
RyuaR['\u05d7\u05d5"\u05d2'] = "\u05d7\u05d5\u05de\u05e8 \u05d2\u05dc\u05dd";
RyuaR['\u05d7"\u05d2'] = "\u05d7\u05d5\u05de\u05e8 \u05d2\u05dc\u05dd";
RyuaR['\u05d6\u05e8"\u05e9'] = "\u05d6\u05d9\u05e7\u05d5\u05e7 \u05e2\u05d3\u05d9\u05df \u05e8\u05d1 \u05e9\u05dc\u05d1\u05d9";
RyuaR['\u05d6\u05d3"\u05d0'] = "\u05d6\u05d9\u05e7\u05d5\u05e7 \u05d3\u05d7\u05d9\u05e1\u05ea \u05d0\u05d3\u05d9\u05dd";
RyuaR['\u05d4\u05e0"\u05d9'] = "\u05d4\u05e0\u05d3\u05e1\u05ea \u05d9\u05d9\u05e6\u05d5\u05e8";
RyuaR['\u05d3\u05e4"\u05d0'] = "\u05d3\u05d9\u05d5\u05d3\u05d4 \u05e4\u05d5\u05dc\u05d8\u05ea \u05d0\u05d5\u05e8 (LED)";
RyuaR['\u05d3\u05d5\u05d3"\u05e9'] = "\u05d3\u05d5\u05d3 \u05e9\u05de\u05e9";
RyuaR['\u05d2"\u05ea'] = "\u05d2\u05d5\u05e3 \u05ea\u05d0\u05d5\u05e8\u05d4";
RyuaR['\u05d2\u05d5"\u05d9'] = "\u05d2\u05d5\u05e8\u05dd \u05d9\u05e6\u05d5\u05e8";
RyuaR['\u05d2\u05bc\u05b7\u05d3\u05bc\u05b8"\u05e9\u05c1'] = "\u05d2\u05d9\u05d3\u05d5\u05dc\u05d9 \u05e9\u05d3\u05d4";
RyuaR['\u05d2\u05d2"\u05e9'] = "\u05d2\u05dc\u05d2\u05dc \u05e9\u05d9\u05e0\u05d9\u05d9\u05dd";
RyuaR['\u05d2\u05d0"\u05e4'] = "\u05d2\u05e8\u05d2\u05d9\u05e8\u05d9 \u05d0\u05d1\u05e7\u05ea \u05e4\u05e8\u05d7\u05d9\u05dd";
RyuaR["\u05d1\u05e9\u05db\u05d7"] = "\u05e9\u05db\u05e8 \u05d7\u05d5\u05d3\u05e9\u05d9";
RyuaR['\u05d1"\u05e2'] = "\u05d1\u05d9\u05ea \u05e2\u05e1\u05e7";
RyuaR['\u05d1\u05e0\u05d0"\u05dd'] = "\u05d1\u05d9\u05e0\u05d5\u05d9 \u05e0\u05db\u05e1\u05d9\u05dd \u05d0\u05e4\u05e1\u05e0\u05d0\u05d5\u05ea \u05de\u05e9\u05e7";
RyuaR['\u05d1\u05de"\u05e0'] = "\u05d1\u05de\u05d4 \u05de\u05ea\u05e8\u05d5\u05de\u05de\u05ea \u05e0\u05d9\u05d9\u05d3\u05ea";
RyuaR['\u05d1\u05d9\u05de"\u05e1'] = "\u05d1\u05d9\u05ea \u05de\u05e1\u05d7\u05e8";
RyuaR['\u05d1\u05d9\u05d7"\u05e8'] = "\u05d1\u05d9\u05ea \u05d7\u05e8\u05d5\u05e9\u05ea";
RyuaR['\u05d1\u05d9\u05d4\u05d7"\u05e8'] = "\u05d1\u05d9\u05ea \u05d4\u05d7\u05e8\u05d5\u05e9\u05ea";
RyuaR['\u05d1\u05d9\u05d0"\u05e8'] = "\u05d1\u05d9\u05ea \u05d0\u05e8\u05d9\u05d6\u05d4";
RyuaR['\u05d1"\u05d7'] = "\u05d1\u05d9\u05ea \u05d7\u05e8\u05d5\u05e9\u05ea";
RyuaR['\u05d1\u05d3"\u05e1'] = "\u05d1\u05d3\u05d9\u05e7\u05d5\u05ea \u05e1\u05d5\u05e4\u05d9\u05d5\u05ea";
RyuaR['\u05d1\u05d3"\u05e1'] = "\u05d1\u05d3\u05d9\u05e7\u05d5\u05ea \u05e1\u05d1\u05d9\u05d1\u05d4";
RyuaR['\u05d0\u05ea"\u05d9'] = "\u05d0\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4 \u05d9\u05e9\u05df";
RyuaR['\u05d0\u05ea"\u05d7'] = "\u05d0\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4 \u05d7\u05d3\u05e9";
RyuaR['\u05d0\u05d6\u05ea"\u05e2'] = "\u05d0\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4";
RyuaR['\u05d0\u05d6"\u05ea'] = "\u05d0\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4";
RyuaR['\u05d0\u05d6\u05d5"\u05ea'] = "\u05d0\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4";
RyuaR['\u05d0\u05d6\u05d5\u05d4"\u05ea'] = "\u05d0\u05d6\u05d5\u05e8 \u05d4\u05ea\u05e2\u05e9\u05d9\u05d9\u05d4";
RyuaR['\u05d0\u05d6\u05d4\u05ea"\u05e2'] = "\u05d0\u05d6\u05d5\u05e8 \u05d4\u05ea\u05e2\u05e9\u05d9\u05d9\u05d4";
RyuaR['\u05d0\u05d5"\u05dd'] = "\u05d0\u05e8\u05d2\u05d5\u05df \u05d5\u05de\u05e9\u05d0\u05d1\u05d9\u05dd";
RyuaR['\u05d0\u05d5"\u05d4'] = "\u05d0\u05e1\u05e4\u05e7\u05d4 \u05d5\u05d4\u05ea\u05e7\u05e0\u05d4";
RyuaR['\u05d0\u05d2\u05d5"\u05de'] = "\u05d0\u05d2\u05e8\u05d2\u05d8 \u05d2\u05e8\u05d5\u05e1 \u05d5\u05de\u05d3\u05d5\u05e8\u05d2";
RyuaR['\u05d0"\u05d0'] = "\u05d0\u05d1\u05d8\u05d7\u05ea \u05d0\u05d9\u05db\u05d5\u05ea";
RyuaR['\u05ea\u05ea"\u05de'] = "\u05ea\u05ea \u05de\u05e9\u05e7\u05dc";
RyuaR['\u05ea\u05ea"\u05de'] = "\u05ea\u05d4\u05dc\u05d9\u05da \u05ea\u05d5\u05e4\u05e1 \u05de\u05e7\u05d5\u05dd";
RyuaR['\u05ea\u05e4"\u05e6'] = "\u05ea\u05e1\u05de\u05d5\u05e0\u05ea \u05d4\u05e4\u05d4 \u05d4\u05e6\u05d5\u05e8\u05d1";
RyuaR['\u05ea\u05e2"\u05de'] = "\u05ea\u05e0\u05d5\u05e2\u05ea \u05e2\u05d9\u05e0\u05d9\u05d9\u05dd \u05de\u05d4\u05d9\u05e8\u05d4";
RyuaR['\u05ea"\u05e2'] = "\u05ea\u05d5\u05dc\u05d3\u05d5\u05ea \u05e2\u05d1\u05e8";
RyuaR['\u05ea"\u05e2'] = "\u05ea\u05d0\u05d5\u05e0\u05ea \u05e2\u05d1\u05d5\u05d3\u05d4";
RyuaR['\u05ea\u05de"\u05e8'] = "\u05ea\u05e1\u05de\u05d5\u05e0\u05ea \u05d4\u05de\u05e2\u05d9 \u05d4\u05e8\u05d2\u05d9\u05d6";
RyuaR['\u05ea\u05de"\u05e8'] = "\u05ea\u05d9\u05e7 \u05de\u05e8\u05db\u05d6 \u05e8\u05e4\u05d5\u05d0\u05d9";
RyuaR["\u05ea.\u05dc.\u05dd"] = "\u05ea\u05d7\u05e0\u05d5\u05ea \u05d4\u05e7\u05d9\u05d1\u05d5\u05e6\u05d9\u05dd \u05dc\u05d8\u05d9\u05e4\u05d5\u05dc \u05d1\u05d9\u05dc\u05d3 \u05d5\u05d1\u05de\u05e9\u05e4\u05d7\u05d4";
RyuaR['\u05ea\u05d8"\u05e8'] = "\u05ea\u05d2\u05de\u05d5\u05dc \u05d8\u05d9\u05e4\u05d5\u05dc \u05e8\u05e4\u05d5\u05d0\u05d9";
RyuaR['\u05ea"\u05d8'] = "\u05ea\u05e1\u05de\u05d5\u05e0\u05ea \u05d8\u05d5\u05e8\u05d8";
RyuaR['\u05ea\u05d7"\u05e7'] = "\u05ea\u05d5\u05ea\u05d1\u05ea \u05d7\u05dc\u05e7\u05d9\u05ea \u05e7\u05d1\u05d5\u05e2\u05d4";
RyuaR['\u05ea\u05d7"\u05dc'] = "\u05ea\u05d5\u05ea\u05d1\u05ea \u05d7\u05dc\u05e7\u05d9\u05ea \u05dc\u05d4\u05d5\u05e6\u05d0\u05d4";
RyuaR['\u05ea\u05d5"\u05d3'] = "\u05ea\u05d9\u05e1\u05de\u05d5\u05e0\u05ea \u05d5\u05d5\u05e8\u05e1\u05d8\u05e8 \u05d3\u05e8\u05d0\u05d5\u05d8";
RyuaR['\u05ea\u05d4"\u05de'] = "\u05ea\u05d4\u05d5\u05d3\u05d4 \u05de\u05d2\u05e0\u05d8\u05d9\u05ea";
RyuaR['\u05ea\u05d3"\u05e9'] = "\u05ea\u05de\u05d5\u05e0\u05ea \u05d3\u05dd \u05e9\u05dc\u05de\u05d4";
RyuaR['\u05ea\u05d1"\u05db'] = "\u05ea\u05d9\u05e1\u05de\u05d5\u05e0\u05ea \u05d1\u05d0\u05d3-\u05db\u05d9\u05d0\u05e8\u05d9";
RyuaR['\u05ea\u05d0\u05e8"\u05df'] = "\u05ea\u05d7\u05e0\u05ea \u05d0\u05e8\u05d5\u05e2 \u05e8\u05d1 \u05e0\u05e4\u05d2\u05e2\u05d9\u05dd";
RyuaR['\u05e9\u05c1\u05b8\u05e8\u05b8"\u05e4\u05bc'] = "\u05e9\u05d9\u05e8\u05d5\u05ea \u05e8\u05e4\u05d5\u05d0\u05d4 \u05e4\u05e8\u05d8\u05d9";
RyuaR['\u05e9\u05e8"\u05de'] = "\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05e8\u05e4\u05d5\u05d0\u05d4 \u05de\u05d9\u05d5\u05d7\u05d3\u05d9\u05dd";
RyuaR['\u05e9\u05e8"\u05dc'] = "\u05e9\u05d9\u05e8\u05d5\u05ea \u05e8\u05e4\u05d5\u05d0\u05d9 \u05dc\u05e0\u05d5\u05e1\u05e2";
RyuaR['\u05e9"\u05e8'] = "\u05e9\u05d9\u05e8\u05d5\u05ea \u05e8\u05e4\u05d5\u05d0\u05d4";
RyuaR['\u05e9\u05e7"\u05dc'] = "\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05e7\u05d4\u05d9\u05dc\u05ea\u05d9\u05d9\u05dd \u05dc\u05de\u05d5\u05d2\u05d1\u05dc\u05d9\u05dd";
RyuaR['\u05e9\u05e7"\u05d3'] = "\u05e9\u05e7\u05d9\u05e2\u05ea \u05d3\u05dd";
RyuaR['\u05e9\u05e4"\u05dd'] = "\u05e9\u05d9\u05e8\u05d5\u05ea \u05e4\u05e1\u05d9\u05db\u05d5\u05dc\u05d5\u05d2\u05d9 \u05de\u05e9\u05dc\u05d9\u05dd";
RyuaR['\u05e9\u05e4"\u05d9'] = "\u05d4\u05e9\u05d9\u05e8\u05d5\u05ea \u05d4\u05e4\u05e1\u05d9\u05db\u05d5\u05dc\u05d5\u05d2\u05d9 \u05d9\u05d9\u05e2\u05d5\u05e6\u05d9";
RyuaR['\u05e9\u05e4\u05d7"\u05d6'] = "\u05e9\u05e4\u05e2\u05ea \u05d4\u05d7\u05d6\u05d9\u05e8\u05d9\u05dd";
RyuaR['\u05e9\u05e2"\u05e6'] = "\u05e9\u05e2\u05e8\u05d9 \u05e6\u05d3\u05e7";
RyuaR['\u05e9\u05de"\u05e7'] = "\u05e9\u05d9\u05e8\u05d5\u05ea \u05de\u05e2\u05d1\u05d3\u05d4 \u05e7\u05d8\u05e0\u05d4";
RyuaR['\u05e9\u05db"\u05d9'] = "\u05e9\u05d5\u05e8\u05e9 \u05db\u05e3 \u05d4\u05d9\u05d3";
RyuaR['\u05e9\u05d8"\u05d3'] = "\u05e9\u05d8\u05e3 \u05d3\u05dd";
RyuaR['\u05e9\u05c1\u05b7\u05d1\u05bc\u05b8"\u05df'] = "\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05e0\u05d5\u05e1\u05e4\u05d9\u05dd";
RyuaR['\u05e9\u05d1"\u05db'] = "\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05db\u05dc\u05dc\u05d9\u05ea";
RyuaR['\u05e8\u05e4"\u05e9'] = "\u05e8\u05e4\u05d5\u05d0\u05ea \u05e9\u05d9\u05e0\u05d9\u05d9\u05dd";
RyuaR['\u05e8\u05e4\u05e2"\u05d4'] = "\u05e8\u05e4\u05d5\u05d0\u05d4 \u05e2\u05dc \u05e4\u05d9 \u05d4\u05d4\u05dc\u05db\u05d4";
RyuaR['\u05e8\u05e4\u05d5"\u05e9'] = "\u05e8\u05e4\u05d5\u05d0\u05d4 \u05e9\u05dc\u05d9\u05de\u05d4";
RyuaR['\u05e8\u05e2"\u05de'] = "\u05e8\u05d9\u05e6\u05d5\u05d3\u05d9 \u05e2\u05d9\u05e0\u05d9\u05d9\u05dd \u05de\u05d4\u05d9\u05e8\u05d9\u05dd";
RyuaR['\u05e8\u05b6\u05de\u05b7"\u05d7'] = "\u05e8\u05b4\u05e9\u05c1\u05b0\u05de\u05b7\u05ea \u05de\u05d7 \u05d7\u05e9\u05de\u05dc\u05d9\u05ea";
RyuaR['\u05e8\u05de\u05d5"\u05df'] = "\u05e8\u05e4\u05d5\u05d0\u05d4 \u05de\u05d5\u05e0\u05e2\u05ea";
RyuaR['\u05e8\u05dc"\u05d7'] = '\u05e8\u05b4\u05e9\u05b0\u05c1\u05de\u05b7\u05ea \u05dc\u05d1 \u05d7\u05e9\u05de\u05dc\u05d9\u05ea (\u05d0\u05e7"\u05d2)';
RyuaR['\u05e8\u05dc"\u05d0'] = "\u05e8\u05d5\u05e4\u05d0\u05d9\u05dd \u05dc\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d0\u05d3\u05dd";
RyuaR['\u05e8\u05d5\u05ea"\u05dd'] = "\u05e8\u05e4\u05d5\u05d0\u05d4 \u05d5\u05ea\u05d6\u05d5\u05e0\u05d4 \u05de\u05d5\u05e0\u05e2\u05ea";
RyuaR['\u05e8\u05d5"\u05de'] = "\u05e8\u05e4\u05d5\u05d0\u05d4 \u05d5\u05de\u05e9\u05e4\u05d8";
RyuaR['\u05e8\u05d5"\u05de'] = "\u05e8\u05d5\u05e4\u05d0 \u05de\u05d5\u05de\u05d7\u05d4";
RyuaR['\u05e8\u05d1"\u05e2'] = "\u05e8\u05d9\u05e4\u05d5\u05d9 \u05d1\u05e2\u05d9\u05e1\u05d5\u05e7";
RyuaR['\u05e7\u05e9"\u05e8'] = "\u05e7\u05e9\u05d1 \u05d5\u05e8\u05d9\u05db\u05d5\u05d6";
RyuaR['\u05e7\u05e8"\u05df'] = "\u05e7\u05d8\u05d5\u05e2\u05d9 \u05e8\u05d2\u05dc\u05d9\u05d9\u05dd \u05e0\u05dc\u05d7\u05de\u05d9\u05dd";
RyuaR['\u05e7\u05e4"\u05d7'] = "\u05e7\u05d5\u05e4\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05e7"\u05d7'] = "\u05e7\u05d5\u05e4\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05e7\u05d5\u05e6"\u05e0'] = "\u05e7\u05d5\u05e6\u05e8 \u05e0\u05e9\u05d9\u05de\u05d4";
RyuaR['\u05e7\u05d5"\u05d7'] = "\u05e7\u05d5\u05e4\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05e6\u05e8"\u05e4'] = "\u05e6\u05d9\u05d5\u05d3 \u05e8\u05e4\u05d5\u05d0\u05d9";
RyuaR['\u05e6\u05dc"\u05d7'] = "\u05e6\u05d9\u05dc\u05d5\u05dd \u05d7\u05d6\u05d4";
RyuaR['\u05e6\u05d8"\u05de'] = "\u05e6\u05d5\u05d5\u05ea \u05d8\u05d9\u05e4\u05d5\u05dc \u05d1\u05de\u05d2\u05d9\u05e4\u05d5\u05ea";
RyuaR['\u05e6\u05d7"\u05de'] = "\u05e6\u05e8\u05d9\u05db\u05ea \u05d7\u05de\u05e6\u05df";
RyuaR['\u05e6\u05d1"\u05e1'] = "\u05e6\u05d9\u05dc\u05d5\u05dd \u05d1\u05d8\u05df \u05e1\u05e7\u05d9\u05e8\u05d4";
RyuaR['\u05e6\u05d1"\u05dc'] = "\u05e6\u05e0\u05d9\u05d7\u05ea \u05d1\u05e1\u05d9\u05e1 \u05dc\u05e9\u05d5\u05df";
RyuaR["\u05e6.\u05d1.\u05d9"] = "\u05e6\u05e8\u05db\u05e0\u05d9 \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR["\u05e4\u05e8\u05d5\u05e4'"] = "\u05e4\u05e8\u05d5\u05e4\u05e1\u05d5\u05e8";
RyuaR['\u05e4\u05de"\u05e8'] = "\u05e4\u05d5\u05dc\u05d9\u05de\u05d9\u05d0\u05dc\u05d2\u05d9\u05d4 \u05e8\u05d0\u05d5\u05de\u05d8\u05d9\u05e7\u05d4";
RyuaR['\u05e4\u05bc\u05b7\u05dc\u05b0\u05e8\u05b8"\u05df'] = "\u05e4\u05dc\u05d5\u05d2\u05ea \u05e8\u05e4\u05d5\u05d0\u05d4 \u05e0\u05e4\u05ea\u05d9\u05ea";
RyuaR['\u05e4\u05d7"\u05de'] = "\u05e4\u05e2\u05d9\u05de\u05d5\u05ea \u05d7\u05d3\u05e8\u05d9\u05d5\u05ea \u05de\u05d5\u05e7\u05d3\u05de\u05d5\u05ea";
RyuaR["\u05e4\u05d7\u05de'"] = "\u05e4\u05d7\u05de\u05de\u05d5\u05ea";
RyuaR['\u05e4\u05d5\u05e2"\u05d4'] = '\u05e4\u05d5\u05e8\u05d9\u05d5\u05ea \u05d5\u05e8\u05e4\u05d5\u05d0\u05d4 \u05e2\u05e4"\u05d9 \u05d4\u05d4\u05dc\u05db\u05d4';
RyuaR['\u05e4\u05d5"\u05d8'] = "\u05e4\u05d4 \u05d5\u05d8\u05dc\u05e4\u05d9\u05d9\u05dd";
RyuaR['\u05e2"\u05e9'] = "\u05e2\u05de\u05d5\u05d3 \u05e9\u05d3\u05e8\u05d4";
RyuaR['\u05e2\u05b5\u05e8\u05b8"\u05df'] = "\u05e2\u05d6\u05e8\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4 \u05e0\u05e4\u05e9\u05d9\u05ea";
RyuaR['\u05e2"\u05e8'] = "\u05e2\u05d6\u05e8\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4";
RyuaR['\u05e2\u05b9\u05e4\u05b6"\u05e8'] = "\u05e2\u05d6\u05e8\u05d4 \u05dc\u05e4\u05d2\u05d5\u05e2\u05d9 \u05e8\u05d0\u05e9";
RyuaR['\u05e2\u05de\u05e9"\u05e6'] = "\u05e2\u05de\u05d5\u05d3 \u05e9\u05d3\u05e8\u05d4 \u05e6\u05d5\u05d5\u05d0\u05e8\u05d9";
RyuaR['\u05e2\u05de"\u05e9'] = "\u05e2\u05de\u05d5\u05d3 \u05e9\u05d3\u05e8\u05d4";
RyuaR['\u05e2\u05de"\u05d9'] = "\u05e2\u05de\u05d5\u05ea\u05ea \u05de\u05d5\u05e9\u05ea\u05dc\u05d9\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea";
RyuaR['\u05e2\u05de"\u05d9'] = "\u05e2\u05d6\u05e8 \u05de\u05e6\u05d9\u05d5\u05b9\u05df";
RyuaR['\u05e2\u05dc"\u05d4'] = "\u05e2\u05de\u05d5\u05ea\u05d4 \u05dc\u05d7\u05d5\u05dc\u05d9 \u05d4\u05de\u05d5\u05e4\u05d9\u05dc\u05d9\u05d4";
RyuaR['\u05e2\u05dc"\u05d4'] = "\u05e2\u05d6\u05e8 \u05dc\u05d9\u05dc\u05d3 \u05d4\u05e0\u05db\u05d4";
RyuaR['\u05e2\u05d9\u05e0\u05d1"\u05e8'] = "\u05e2\u05de\u05d5\u05ea\u05d4 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05e0\u05e4\u05d2\u05e2\u05d9\u05dd \u05d1\u05de\u05d7\u05dc\u05d5\u05ea \u05e8\u05d9\u05de\u05d8\u05d9\u05d5\u05ea";
RyuaR['\u05e1\u05e8"\u05e8'] = "\u05e1\u05e8\u05e7\u05d5\u05de\u05d4 \u05e9\u05dc \u05e8\u05e7\u05de\u05d4 \u05e8\u05db\u05d4";
RyuaR['\u05e1\u05e4\u05d4"\u05d3'] = "\u05e1\u05e4\u05d9\u05e8\u05ea \u05d4\u05d3\u05dd";
RyuaR['\u05e1\u05e4"\u05d3'] = "\u05e1\u05e4\u05d9\u05e8\u05ea \u05d3\u05dd";
RyuaR['\u05e1\u05d9\u05dc\u05d2\u05d5"\u05d6'] = "\u05e1\u05d9\u05dc\u05d5\u05e7 \u05d2\u05d5\u05e3 \u05d6\u05e8";
RyuaR['\u05e1\u05d7"\u05db'] = "\u05e1\u05e4\u05d9\u05e8\u05ea \u05d7\u05d9\u05d9\u05d3\u05e7\u05d9\u05dd \u05db\u05dc\u05dc\u05d9\u05ea";
RyuaR['\u05e1\u05d7"\u05d7'] = "\u05e1\u05e3 \u05d7\u05d5\u05de\u05e6\u05ea \u05d7\u05dc\u05d1";
RyuaR['\u05e1\u05d2"\u05e6'] = "\u05e1\u05d9\u05de\u05e0\u05d9 \u05d2\u05d9\u05e8\u05d5\u05d9 \u05e6\u05e4\u05e7\u05d9";
RyuaR['\u05e0\u05e4"\u05dc'] = "\u05e0\u05d2\u05d3 \u05e4\u05e6\u05e2\u05d9 \u05dc\u05d7\u05e5";
RyuaR['\u05e0\u05de"\u05e8'] = "\u05e0\u05d9\u05d4\u05d5\u05dc \u05de\u05e8\u05db\u05d6\u05d9\u05dd \u05e8\u05e4\u05d5\u05d0\u05d9\u05d9\u05dd";
RyuaR['\u05e0\u05de"\u05e8'] = "\u05e0\u05d9\u05d4\u05d5\u05dc \u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05e8\u05e4\u05d5\u05d0\u05d9\u05d5\u05ea";
RyuaR['\u05e0\u05de"\u05db'] = "\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05de\u05e2\u05d5\u05e8\u05e8\u05d5\u05ea \u05db\u05d0\u05d1";
RyuaR['\u05e0\u05de"\u05d2'] = "\u05e0\u05d9\u05d5\u05d5\u05df \u05de\u05e7\u05d5\u05dc\u05e8\u05d9 \u05d2\u05d9\u05dc\u05d9";
RyuaR['\u05e0\u05b8\u05d8\u05b8"\u05df'] = "\u05e0\u05d9\u05d9\u05d3\u05ea \u05d8\u05d9\u05e4\u05d5\u05dc \u05e0\u05de\u05e8\u05e5";
RyuaR['\u05e0\u05d8"\u05dc'] = "\u05e0\u05e4\u05d2\u05e2\u05d9 \u05d8\u05e8\u05d0\u05d5\u05de\u05d4 \u05e2\u05dc \u05e8\u05d2\u05e2 \u05dc\u05d0\u05d5\u05de\u05d9 (\u05de\u05e8\u05db\u05d6 \u05dc\u05e1\u05d9\u05d5\u05e2 \u05e0\u05e4\u05e9\u05d9)";
RyuaR['\u05e0\u05d1"\u05ea'] = "\u05e0\u05d9\u05ea\u05d5\u05d7 \u05d1\u05dc\u05d5\u05d8\u05ea \u05d4\u05ea\u05e8\u05d9\u05e1";
RyuaR['\u05de\u05e9\u05e8"\u05e4'] = "\u05de\u05e8\u05db\u05d6 \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05e8\u05e4\u05d5\u05d0\u05d4";
RyuaR["\u05de.\u05e9.\u05d9"] = "\u05de\u05d7\u05dc\u05d5\u05ea \u05e0\u05d9\u05d5\u05d5\u05df \u05e9\u05e8\u05d9\u05e8\u05d9\u05dd \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05de\u05e9\u05d7"\u05e9'] = "\u05de\u05e9\u05d7\u05ea \u05e9\u05d9\u05e0\u05d9\u05d9\u05dd";
RyuaR['\u05de\u05e9\u05d4\u05d1"\u05e8'] = "\u05de\u05e9\u05e8\u05d3 \u05d4\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea";
RyuaR['\u05de\u05b7\u05e8\u05b0\u05ea\u05b8\u05bc"\u05d0'] = "\u05de\u05e8\u05db\u05d6 \u05e8\u05e4\u05d5\u05d0\u05d9 \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1";
RyuaR['\u05de\u05e8\u05e9"\u05e4'] = "\u05de\u05d7\u05dc\u05ea \u05d4\u05e8\u05e9\u05ea\u05d9\u05ea \u05e9\u05dc \u05e4\u05d2\u05d5\u05ea";
RyuaR['\u05de\u05b8\u05e8\u05b8"\u05e9\u05c1'] = '\u05de\u05e8\u05db\u05d6 \u05e8\u05e4\u05d5\u05d0\u05d9 \u05e9\u05d1"\u05e1';
RyuaR['\u05de\u05b8\u05e8\u05b8"\u05dd'] = "\u05de\u05e8\u05e4\u05d0\u05ea \u05de\u05d5\u05de\u05d7\u05d9\u05dd";
RyuaR['\u05de\u05b8\u05e8\u05b8"\u05dd'] = "\u05de\u05e8\u05db\u05d6 \u05e8\u05e4\u05d5\u05d0\u05d4 \u05de\u05d9\u05d9\u05d3\u05d9\u05ea";
RyuaR['\u05de\u05e8\u05dc"\u05de'] = "\u05de\u05e8\u05db\u05d6 \u05e8\u05e4\u05d5\u05d0\u05d9 \u05dc\u05d9\u05dc\u05d4 \u05de\u05e9\u05dc\u05d9\u05dd";
RyuaR['\u05de\u05e8\u05d1"\u05e2'] = "\u05de\u05e8\u05e4\u05d0\u05d4 \u05d1\u05e2\u05d9\u05e1\u05d5\u05e7";
RyuaR['\u05de\u05b7\u05e6\u05b0\u05e8\u05b8"\u05e3'] = "\u05de\u05e8\u05db\u05d6 \u05e6\u05d9\u05d5\u05d3 \u05e8\u05e4\u05d5\u05d0\u05d9";
RyuaR['\u05de\u05e2"\u05e9'] = "\u05de\u05e4\u05e2\u05dc \u05e2\u05d1\u05d5\u05d3\u05d4 \u05e9\u05d9\u05e7\u05d5\u05de\u05d9";
RyuaR['\u05de\u05e2"\u05e8'] = "\u05de\u05d2\u05d9\u05e9 \u05e2\u05d6\u05e8\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4";
RyuaR['\u05de\u05e1"\u05e8'] = "\u05de\u05e8\u05db\u05d6 \u05e1\u05d9\u05de\u05d5\u05dc\u05e6\u05d9\u05d4 \u05e8\u05e4\u05d5\u05d0\u05d9\u05ea";
RyuaR['\u05de\u05e0\u05d3"\u05d8'] = "\u05de\u05e1\u05e4\u05e8 \u05e0\u05d3\u05e8\u05e9\u05d9 \u05d8\u05d9\u05e4\u05d5\u05dc";
RyuaR['\u05de\u05de"\u05e2'] = "\u05de\u05dc\u05d0\u05e0\u05d5\u05de\u05d4 \u05de\u05de\u05d0\u05e8\u05ea \u05e9\u05dc \u05d4\u05e2\u05d5\u05e8";
RyuaR['\u05de\u05de"\u05db'] = "\u05de\u05d9\u05dc\u05d9\u05de\u05d8\u05e8 \u05db\u05e1\u05e4\u05d9\u05ea";
RyuaR['\u05de\u05de"\u05d1'] = "\u05de\u05e0\u05d4\u05dc \u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea";
RyuaR['\u05de\u05dc\u05e8"\u05dd'] = "\u05de\u05d5\u05e7\u05d3 \u05dc\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05e8\u05e4\u05d5\u05d0\u05d9\u05d9\u05dd";
RyuaR['\u05de\u05dc\u05e8"\u05d3'] = "\u05de\u05d7\u05dc\u05e7\u05d4 \u05dc\u05e8\u05e4\u05d5\u05d0\u05d4 \u05d3\u05d7\u05d5\u05e4\u05d4";
RyuaR['\u05de\u05dc\u05e2"\u05db'] = "\u05de\u05e1\u05e4\u05e8\u05d9\u05d9\u05dd \u05dc\u05d7\u05d9\u05ea\u05d5\u05da \u05e2\u05dd \u05db\u05e4\u05ea\u05d5\u05e8";
RyuaR['\u05de\u05dc\u05e0"\u05de'] = "\u05de\u05e9\u05e7\u05dc \u05dc\u05d9\u05d3\u05d4 \u05e0\u05de\u05d5\u05da \u05de\u05d0\u05d5\u05d3";
RyuaR['\u05de\u05dc"\u05db'] = "\u05de\u05d7\u05dc\u05ea \u05dc\u05d1 \u05db\u05dc\u05d9\u05dc\u05d9\u05ea";
RyuaR['\u05de\u05dc\u05d1"\u05de'] = "\u05de\u05e8\u05db\u05d6 \u05dc\u05d0\u05d5\u05de\u05d9 \u05dc\u05d1\u05e7\u05e8\u05ea \u05de\u05d7\u05dc\u05d5\u05ea";
RyuaR['\u05de\u05dc\u05d1"\u05d9'] = "\u05de\u05e8\u05db\u05d6 \u05dc\u05d8\u05d9\u05e4\u05d5\u05dc \u05d1\u05d4\u05e9\u05de\u05e0\u05ea \u05d9\u05ea\u05e8";
RyuaR['\u05de\u05db"\u05db'] = "\u05de\u05d7\u05dc\u05d4 \u05e9\u05dc \u05db\u05dc\u05d9 \u05d4\u05d3\u05dd \u05d4\u05db\u05dc\u05d9\u05dc\u05d9\u05d9\u05dd";
RyuaR['\u05de\u05d9\u05d7"\u05d0'] = "\u05de\u05d7\u05e0\u05db\u05d9 \u05d9\u05dc\u05d3\u05d9\u05dd \u05d7\u05e8\u05e9\u05d9\u05dd";
RyuaR['\u05de\u05d3\u05dc"\u05d3'] = "\u05de\u05d3 \u05dc\u05d7\u05e5 \u05d3\u05dd";
RyuaR['\u05de\u05b8\u05d3\u05b8"\u05d0'] = "\u05de\u05d2\u05df \u05d3\u05d5\u05d3 \u05d0\u05d3\u05d5\u05dd";
RyuaR['\u05de\u05d2"\u05e0'] = "\u05de\u05d8\u05d1\u05d5\u05dc\u05d9\u05ea \u05d2\u05e0\u05d8\u05d9\u05ea \u05e0\u05d5\u05d9\u05e8\u05d5\u05dc\u05d5\u05d2\u05d9\u05ea";
RyuaR['\u05de\u05b8\u05d2\u05b8"\u05dc'] = "\u05de\u05e8\u05db\u05d6 \u05d2\u05de\u05d9\u05dc\u05d4 \u05dc\u05d9\u05e4\u05ea\u05d0";
RyuaR['\u05de\u05d2\u05d3"\u05d0'] = "\u05de\u05d2\u05df \u05d3\u05d5\u05d3 \u05d0\u05d3\u05d5\u05dd";
RyuaR['\u05de\u05d1"\u05ea'] = "\u05de\u05e6\u05d1 \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05d5\u05ea\u05d6\u05d5\u05e0\u05d4";
RyuaR['\u05de\u05b7\u05d1\u05bc\u05b8"\u05df'] = "\u05de\u05e8\u05db\u05d6 \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05d4\u05e0\u05e4\u05e9";
RyuaR['\u05de\u05d0"\u05e9'] = "\u05de\u05d7\u05e9\u05d1\u05d4 \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9\u05ea \u05e9\u05dc\u05d9\u05dc\u05d9\u05ea";
RyuaR['\u05dc\u05e7"\u05e9'] = "\u05dc\u05e7\u05d5\u05ea \u05e9\u05de\u05d9\u05e2\u05d4";
RyuaR['\u05dc\u05e0\u05dc"\u05e7'] = "\u05dc\u05d9\u05d3\u05d4 \u05e0\u05e8\u05ea\u05d9\u05e7\u05d9\u05ea \u05dc\u05d0\u05d7\u05e8 \u05e7\u05d9\u05e1\u05e8\u05d9";
RyuaR['\u05dc\u05d4"\u05d1'] = "\u05dc\u05de\u05e2\u05df \u05d4\u05e4\u05d2\u05d9\u05dd \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05dc"\u05d3'] = "\u05dc\u05d7\u05e5 \u05d3\u05dd";
RyuaR['\u05dc"\u05d1'] = "\u05dc\u05d4\u05dc\u05d7\u05dd \u05d1\u05d9\u05d7\u05d3";
RyuaR['\u05db\u05dc\u05d9"\u05d3'] = "\u05db\u05dc\u05d9 \u05d3\u05dd";
RyuaR['\u05db\u05dc"\u05d3'] = "\u05db\u05dc\u05d9 \u05d3\u05dd";
RyuaR['\u05db\u05d3"\u05dc'] = "\u05db\u05d3\u05d5\u05e8\u05d9\u05d5\u05ea \u05d3\u05dd \u05dc\u05d1\u05e0\u05d5\u05ea";
RyuaR['\u05db\u05d3"\u05d0'] = "\u05db\u05d3\u05d5\u05e8\u05d9\u05d5\u05ea \u05d3\u05dd \u05d0\u05d3\u05d5\u05de\u05d5\u05ea";
RyuaR['\u05d9\u05b8\u05e7\u05b8"\u05e8'] = "\u05d9\u05d7\u05d9\u05d3\u05ea \u05e7\u05d9\u05e9\u05d5\u05e8 \u05e8\u05e4\u05d5\u05d0\u05d9\u05ea";
RyuaR['\u05d9\u05e2"\u05dc'] = "\u05d9\u05d3 \u05e2\u05d6\u05e8 \u05dc\u05d7\u05d5\u05dc\u05d4";
RyuaR['\u05d9"\u05de'] = "\u05d9\u05d5\u05dd \u05de\u05d7\u05d6\u05d5\u05e8";
RyuaR['\u05d9\u05dc"\u05e6'] = "\u05d9\u05ea\u05e8 \u05dc\u05d7\u05e5 \u05d3\u05dd";
RyuaR['\u05d9\u05dc"\u05d3'] = "\u05d9\u05ea\u05e8 \u05dc\u05d7\u05e5 \u05d3\u05dd";
RyuaR['\u05d9\u05d5"\u05de'] = "\u05d9\u05d5\u05dd \u05de\u05d7\u05d6\u05d5\u05e8";
RyuaR['\u05d9\u05d5\u05d0"\u05d1'] = "\u05d9\u05d5\u05dd \u05d0\u05d7\u05e8\u05d9 \u05d1\u05d9\u05d5\u05e5";
RyuaR['\u05d9\u05d4"\u05ea'] = '\u05d4\u05d0\u05d9\u05d2\u05d5\u05d3 \u05d4\u05d9\u05e9\u05e8\u05d0\u05dc\u05d9 \u05dc\u05ea\u05e8\u05e4\u05d9\u05d4 \u05e2"\u05d9 \u05d9\u05e6\u05d9\u05e8\u05d4 \u05d5\u05d4\u05d1\u05e2\u05d4';
RyuaR['\u05d9\u05d0"\u05e8'] = "\u05d9\u05ea\u05e8 \u05d0\u05dc\u05d3\u05d5\u05e1\u05d8\u05e8\u05d5\u05e0\u05d9\u05d6\u05dd \u05e8\u05d0\u05e9\u05d5\u05e0\u05d9";
RyuaR['\u05d9\u05d0"\u05e4'] = "\u05d9\u05d7\u05d9\u05d3\u05d4 \u05dc\u05d0\u05e9\u05e4\u05d5\u05d6 \u05e4\u05e0\u05d9\u05de\u05d9";
RyuaR['\u05d8\u05e8"\u05de'] = "\u05d8\u05d9\u05e4\u05d5\u05dc \u05e8\u05e4\u05d5\u05d0\u05d9 \u05de\u05d9\u05d9\u05d3\u05d9";
RyuaR['\u05d8\u05e8"\u05d0'] = "\u05d8\u05d9\u05e4\u05d5\u05dc \u05e8\u05e4\u05d5\u05d0\u05d9 \u05d0\u05d9\u05e9\u05d9";
RyuaR['\u05d8\u05e4"\u05d7'] = "\u05d8\u05d9\u05e4\u05ea \u05d7\u05dc\u05d1";
RyuaR['\u05d8\u05e0"\u05e6'] = "\u05d8\u05d9\u05e4\u05d5\u05dc \u05e0\u05de\u05e8\u05e5 \u05e6\u05d1\u05d0\u05d9";
RyuaR['\u05d8"\u05e0'] = "\u05d8\u05e8\u05d5\u05dd \u05e0\u05d9\u05ea\u05d5\u05d7";
RyuaR['\u05d8\u05de"\u05dc'] = "\u05d8\u05d5\u05de\u05d5\u05d2\u05e8\u05e4\u05d9\u05d4 \u05de\u05de\u05d5\u05d7\u05e9\u05d1\u05ea \u05e9\u05dc \u05d4\u05dc\u05d1";
RyuaR['\u05d8\u05de\u05d9"\u05e8'] = "\u05d8\u05d9\u05e4\u05d5\u05dc \u05de\u05e2\u05d5\u05dc\u05dd \u05d9\u05e9\u05d5\u05d9\u05d5\u05ea \u05e8\u05d9\u05e4\u05d5\u05d9";
RyuaR['\u05d8\u05de"\u05d0'] = "\u05d8\u05d5\u05de\u05d5\u05d2\u05e8\u05e4\u05d9\u05d4 \u05de\u05de\u05d5\u05d7\u05e9\u05d1\u05ea \u05d0\u05e0\u05d2\u05d9\u05d5\u05d2\u05e8\u05e4\u05d9\u05ea";
RyuaR['\u05d8"\u05de'] = "\u05d8\u05d5\u05de\u05d5\u05d2\u05e8\u05e4\u05d9\u05d4 \u05de\u05de\u05d5\u05d7\u05e9\u05d1\u05ea";
RyuaR['\u05d8\u05d5\u05d4"\u05e8'] = "\u05d8\u05d9\u05e4\u05d5\u05dc \u05d5\u05d4\u05d3\u05e8\u05db\u05d4 \u05e8\u05d5\u05e7\u05d7\u05d9\u05ea";
RyuaR['\u05d8\u05d1"\u05d0'] = "\u05d8\u05d1\u05d9\u05e2\u05ea \u05d0\u05e6\u05d1\u05e2\u05d5\u05ea";
RyuaR['\u05d8"\u05d0'] = "\u05d8\u05d1\u05d9\u05e2\u05d5\u05ea \u05d0\u05e6\u05d1\u05e2";
RyuaR['\u05d7\u05e9\u05d0\u05d9\u05d1"\u05e1'] = "\u05d7\u05d5\u05dc\u05d4 \u05e9\u05d0\u05d9\u05df \u05d1\u05d5 \u05e1\u05db\u05e0\u05d4";
RyuaR['\u05d7"\u05e6'] = "\u05d7\u05d5\u05dc\u05d9 \u05e6\u05d4\u05d1\u05ea";
RyuaR['\u05d7\u05e4"\u05e6'] = "\u05d7\u05d5\u05dc\u05d9 \u05e4\u05e8\u05e7\u05d9\u05e0\u05e1\u05d5\u05df \u05e6\u05e2\u05d9\u05e8\u05d9\u05dd";
RyuaR['\u05d7\u05e2"\u05de'] = "\u05ea\u05e0\u05d5\u05e2\u05ea \u05e2\u05d9\u05e0\u05d9\u05d9\u05dd \u05de\u05d4\u05d9\u05e8\u05d4";
RyuaR['\u05d7"\u05e2'] = "\u05d7\u05d5\u05e1\u05dd \u05e2\u05d5\u05e8\u05e7\u05d9\u05dd";
RyuaR["\u05d7\u05b9\u05e1\u05df"] = "\u05d7\u05d5\u05dc\u05d9 \u05e1\u05e8\u05d8\u05df \u05e0\u05dc\u05d7\u05de\u05d9\u05dd";
RyuaR['\u05d7\u05de"\u05e7'] = "\u05d7\u05d3\u05e8 \u05de\u05d9\u05d5\u05df \u05e7\u05d3\u05de\u05d9";
RyuaR['\u05d7\u05dc"\u05e7'] = "\u05d7\u05d9\u05d5\u05d5\u05e8 \u05dc\u05d7 \u05d5\u05e7\u05e8";
RyuaR['\u05d7\u05dc"\u05e4'] = "\u05d7\u05d9\u05da \u05dc\u05d1 \u05e4\u05e0\u05d9\u05dd";
RyuaR['\u05d7\u05dc"\u05d1'] = "\u05d7\u05d9\u05e0\u05d5\u05da \u05dc\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea";
RyuaR['\u05d7\u05d5\u05d4"\u05e9'] = "\u05d7\u05d5\u05d8 \u05d4\u05e9\u05d3\u05e8\u05d4";
RyuaR['\u05d7"\u05d5'] = "\u05d7\u05d5\u05e1\u05dd \u05d5\u05e8\u05d9\u05d3\u05d9\u05dd";
RyuaR["\u05d7.\u05d4."] = "\u05d7\u05d5\u05e1\u05e8 \u05d4\u05db\u05e8\u05d4";
RyuaR['\u05d7\u05d2"\u05dd'] = "\u05d7\u05d9\u05e0\u05d5\u05da \u05d2\u05d5\u05e4\u05e0\u05d9 \u05de\u05d5\u05e8\u05d7\u05d1";
RyuaR['\u05d7\u05d1\u05d1"\u05de'] = "\u05d7\u05d5\u05e7 \u05d1\u05d9\u05d8\u05d5\u05d7 \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05de\u05de\u05dc\u05db\u05ea\u05d9";
RyuaR['\u05d7\u05d0"\u05de'] = "\u05d7\u05d5\u05de\u05e6\u05d5\u05ea \u05d0\u05de\u05d9\u05e0\u05d5 \u05de\u05e1\u05d5\u05e2\u05e4\u05d5\u05ea";
RyuaR['\u05d6\u05d0"\u05de'] = "\u05d6\u05d0\u05d1\u05ea \u05d0\u05d3\u05de\u05e0\u05ea\u05d9\u05ea \u05de\u05e2\u05e8\u05db\u05ea\u05d9\u05ea";
RyuaR['\u05d5"\u05d0'] = "\u05d5\u05d5\u05e1\u05ea \u05d0\u05d7\u05e8\u05d5\u05e0\u05d4";
RyuaR['\u05d4\u05e8"\u05dd'] = "\u05d4\u05e9\u05ea\u05dc\u05de\u05d5\u05ea \u05dc\u05e8\u05d9\u05e4\u05d5\u05d9 \u05d1\u05de\u05d5\u05e1\u05d9\u05e7\u05d4";
RyuaR['\u05d4\u05e8"\u05d9'] = "\u05d4\u05d4\u05e1\u05ea\u05d3\u05e8\u05d5\u05ea \u05d4\u05e8\u05e4\u05d5\u05d0\u05d9\u05ea \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d4\u05e7"\u05e8'] = "\u05d4\u05e4\u05e8\u05e2\u05d5\u05ea \u05e7\u05e9\u05d1 \u05d5\u05e8\u05d9\u05db\u05d5\u05d6";
RyuaR['\u05d4\u05e7"\u05d5'] = "\u05d4\u05d7\u05d6\u05e8 \u05e7\u05d9\u05d1\u05d4 \u05d5\u05e9\u05d8";
RyuaR['\u05d4\u05e6\u05dc"\u05d0'] = "\u05d4\u05e6\u05dc\u05d1 \u05d4\u05d0\u05d3\u05d5\u05dd";
RyuaR['\u05d4\u05e1\u05d4"\u05d0'] = "\u05d4\u05e1\u05d4\u05e8 \u05d4\u05d0\u05d3\u05d5\u05dd";
RyuaR['\u05d4\u05d9\u05dc"\u05d4'] = "\u05d4\u05d5\u05dc\u05db\u05d9\u05dd \u05d9\u05d7\u05d3 \u05dc\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05d4\u05d0\u05d9\u05e9\u05d4";
RyuaR['\u05d4\u05d7"\u05d2'] = "\u05d4\u05e4\u05e8\u05d9\u05d4 \u05d7\u05d5\u05e5 \u05d2\u05d5\u05e4\u05d9\u05ea";
RyuaR['\u05d3\u05ea"\u05e2'] = "\u05d3\u05d9\u05de\u05d5\u05dd \u05ea\u05ea \u05e2\u05db\u05d1\u05d9\u05e9\u05d9";
RyuaR['\u05d3\u05ea"\u05d3'] = "\u05d3\u05d9\u05de\u05d5\u05dd \u05ea\u05ea \u05d3\u05d5\u05e8\u05d0\u05dc\u05d9";
RyuaR['\u05d3\u05e9"\u05de'] = "\u05d3\u05dc\u05e7\u05ea \u05e9\u05d3\u05e8\u05d4 \u05de\u05e7\u05e9\u05d7\u05ea";
RyuaR['\u05d3\u05e9"\u05d1'] = "\u05d3\u05dc\u05d9\u05e4\u05ea \u05e9\u05ea\u05df \u05d1\u05de\u05d0\u05de\u05e5";
RyuaR['\u05d3"\u05e8'] = "\u05d3\u05d5\u05e7\u05d8\u05d5\u05e8";
RyuaR['\u05d3\u05e7"\u05dc'] = "\u05d3\u05d9\u05d0\u05d8 \u05e7\u05d5\u05e7\u05d4 \u05dc\u05d9\u05de\u05d5\u05df";
RyuaR['\u05d3\u05e4"\u05de'] = "\u05d3\u05d9\u05d0\u05d8\u05ea \u05e4\u05d7\u05de\u05de\u05d5\u05ea \u05de\u05e1\u05d5\u05d9\u05d9\u05de\u05d5\u05ea";
RyuaR['\u05d3\u05e4"\u05de'] = "\u05d3\u05d9\u05d0\u05d8\u05ea \u05e4\u05d7\u05de\u05d9\u05de\u05d5\u05ea \u05de\u05d9\u05d5\u05d7\u05d3\u05d5\u05ea";
RyuaR['\u05d3\u05e4"\u05d8'] = "\u05d3\u05d9\u05e4\u05ea\u05e8\u05d9\u05d4 \u05e4\u05e8\u05d8\u05d5\u05e1\u05d9\u05e1 \u05d8\u05d8\u05e0\u05d5\u05e1";
RyuaR['\u05d3\u05e2"\u05e8'] = "\u05d3\u05dc\u05e7\u05ea \u05e2\u05d5\u05e8\u05e7\u05d9 \u05d4\u05e8\u05e7\u05d4";
RyuaR['\u05d3\u05e2"\u05d0'] = "\u05d3\u05dc\u05e7\u05ea \u05e2\u05d5\u05e8 \u05d0\u05d8\u05d5\u05e4\u05d9\u05ea";
RyuaR['\u05d3\u05de"\u05e0'] = "\u05d3\u05dc\u05e7\u05ea \u05de\u05e2\u05d9\u05d9\u05dd \u05e0\u05de\u05e7\u05d9\u05ea";
RyuaR['\u05d3\u05de"\u05d9'] = "\u05d3\u05dc\u05e7\u05ea \u05de\u05e4\u05e8\u05e7\u05d9\u05dd \u05e9\u05dc \u05d2\u05d9\u05dc \u05d4\u05d9\u05dc\u05d3\u05d5\u05ea";
RyuaR['\u05d3\u05de"\u05d0'] = "\u05d3\u05dc\u05e7\u05ea \u05de\u05e4\u05e8\u05e7\u05d9\u05dd \u05d0\u05d9\u05d3\u05d9\u05d5\u05e4\u05d0\u05d8\u05d9\u05ea";
RyuaR['\u05d3\u05dc"\u05e9'] = "\u05d3\u05dc \u05e9\u05d5\u05de\u05df";
RyuaR['\u05d3\u05dc"\u05dc'] = "\u05d3\u05d9\u05db\u05d0\u05d5\u05df \u05dc\u05d0\u05e8\u05d7 \u05dc\u05d9\u05d3\u05d4";
RyuaR['\u05d3\u05dc"\u05d7'] = "\u05d3\u05dc\u05e7\u05ea \u05dc\u05d1\u05dc\u05d1 \u05d7\u05d3\u05d4";
RyuaR['\u05d3\u05db"\u05dc'] = "\u05d3\u05dc\u05e7\u05ea \u05db\u05e4\u05d5\u05e8\u05ea \u05d4\u05dc\u05d1";
RyuaR["\u05d3\u05d9.\u05d5\u05d9.\u05d0\u05d9"] = "\u05d0\u05e8\u05d2\u05d5\u05df \u05e8\u05d5\u05e4\u05d0\u05d9 \u05e9\u05d9\u05e0\u05d9\u05d9\u05dd \u05de\u05ea\u05e0\u05d3\u05d1\u05d9\u05dd \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d3\u05d7"\u05d0'] = "\u05d3\u05e4\u05d9\u05d1\u05e8\u05d9\u05dc\u05d8\u05d5\u05e8 \u05d7\u05d9\u05e6\u05d5\u05e0\u05d9 \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9";
RyuaR["\u05d3\u05d5\u05e7'"] = "\u05d3\u05d5\u05e7\u05d8\u05d5\u05e8";
RyuaR['\u05d3\u05d2"\u05e9'] = "\u05d3\u05d2\u05d9\u05de\u05ea \u05e9\u05ea\u05df";
RyuaR['\u05d3\u05d0"\u05ea'] = "\u05d3\u05dc\u05e7\u05ea \u05d0\u05d5\u05d6\u05df \u05ea\u05d9\u05db\u05d5\u05e0\u05d4";
RyuaR['\u05d2\u05e9"\u05e8 \u05de\u05d0\u05d7"\u05d3'] = "\u05d2\u05d5\u05e3 \u05db\u05dc \u05e8\u05d2\u05e9 \u05de\u05e2\u05e8\u05db\u05ea \u05d0\u05de\u05d5\u05e0\u05d5\u05ea \u05d7\u05d1\u05e8\u05ea\u05d9 \u05d3\u05de\u05d9\u05d5\u05df";
RyuaR['\u05d2\u05e9\u05d2"\u05e9'] = "\u05d2\u05d9\u05e8\u05d5\u05d3 \u05e9\u05d8\u05d9\u05e4\u05d4 \u05d2\u05d9\u05e8\u05d5\u05d3 \u05e9\u05d8\u05d9\u05e4\u05d4";
RyuaR['\u05d2"\u05e1'] = "\u05d2\u05d5\u05e8\u05de\u05d9 \u05e1\u05d9\u05db\u05d5\u05df";
RyuaR['\u05d2\u05de"\u05dc'] = "\u05d2\u05de\u05d9\u05dc\u05d4 \u05de\u05d4\u05e0\u05e7\u05ea \u05dc\u05d9\u05dc\u05d4";
RyuaR['\u05d2\u05d1"\u05e5'] = "\u05d2\u05e8\u05e2\u05d9\u05df \u05d1\u05e8\u05da \u05e6\u05d9\u05d3\u05d9";
RyuaR['\u05d1\u05ea\u05d9"\u05d7'] = "\u05d1\u05ea\u05d9 \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05d1\u05e8\u05db"\u05d4'] = '\u05d1\u05e0\u05d9 \u05e6\u05d9\u05d5\u05df \u05e8\u05de\u05d1"\u05dd \u05d5\u05db\u05e8\u05de\u05dc';
RyuaR['\u05d1\u05e8\u05d9"\u05de'] = "\u05d1\u05e8\u05d9\u05ea \u05de\u05d9\u05dc\u05d4";
RyuaR['\u05d1\u05e8\u05d4"\u05e6'] = "\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05d4\u05e6\u05d1\u05d0";
RyuaR['\u05d1\u05e8\u05d4"\u05df'] = "\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea \u05d4\u05e0\u05e4\u05e9";
RyuaR['\u05d1\u05de"\u05de'] = "\u05d1\u05d3\u05d9\u05e7\u05ea \u05de\u05d7\u05dc\u05d5\u05ea \u05de\u05d3\u05d1\u05e7\u05d5\u05ea";
RyuaR['\u05d1\u05db"\u05dc'] = "\u05d1\u05d3\u05d9\u05e7\u05d4 \u05db\u05dc\u05dc\u05d9\u05ea";
RyuaR['\u05d1\u05d9\u05e7\u05d5"\u05d7'] = "\u05d1\u05d9\u05e7\u05d5\u05e8 \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05d1\u05d9\u05de"\u05e7'] = "\u05d1\u05d9\u05ea \u05de\u05e8\u05e7\u05d7\u05ea";
RyuaR['\u05d1\u05d9\u05d7"\u05e9'] = "\u05d1\u05d9\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd \u05e9\u05d3\u05d4";
RyuaR['\u05d1\u05d9"\u05d7'] = "\u05d1\u05d9\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05d1\u05d9\u05d4"\u05d7'] = "\u05d1\u05d9\u05ea \u05d4\u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05d1\u05d4"\u05d7'] = "\u05d1\u05d9\u05ea \u05d4\u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05d1\u05d2"\u05d7'] = "\u05d1\u05d3\u05d9\u05e7\u05ea \u05d2\u05d5\u05e3 \u05d7\u05e4\u05d5\u05d6\u05d4";
RyuaR['\u05d1\u05d1"\u05d7'] = "\u05d1\u05d1\u05d9\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05d0\u05e9"\u05d9'] = "\u05d0\u05d9\u05d2\u05d5\u05d3 \u05d4\u05e9\u05d9\u05e0\u05e0\u05d5\u05ea \u05d4\u05d9\u05e9\u05e8\u05d0\u05dc\u05d9";
RyuaR['\u05d0\u05e8\u05d4"\u05de'] = "\u05d0\u05e8\u05d2\u05d5\u05df \u05e8\u05d5\u05e4\u05d0\u05d9 \u05d4\u05de\u05d3\u05d9\u05e0\u05d4";
RyuaR['\u05d0\u05b4\u05d9\u05dc\u05b8"\u05df'] = "\u05d0\u05d9\u05d2\u05d5\u05d3 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9 \u05dc\u05d9\u05dc\u05d3\u05d9\u05dd \u05e0\u05e4\u05d2\u05e2\u05d9\u05dd";
RyuaR["\u05d0.\u05d9.\u05dc.\u05d9.\u05dd"] = "\u05d4\u05d0\u05d2\u05d5\u05d3\u05d4 \u05d4\u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05e4\u05e1\u05d9\u05db\u05d5\u05e4\u05d9\u05d6\u05d9\u05d5\u05dc\u05d5\u05d2\u05d9\u05d4 \u05d9\u05e9\u05d5\u05de\u05d9\u05ea \u05d5\u05dc\u05de\u05e9\u05d5\u05d1 \u05d1\u05d9\u05d5\u05dc\u05d5\u05d2\u05d9";
RyuaR['\u05d0\u05d9\u05dc"\u05d4'] = "\u05d4\u05d0\u05d2\u05d5\u05d3 \u05d4\u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05d7\u05e7\u05e8 \u05e4\u05d5\u05e8\u05d9\u05d5\u05ea";
RyuaR['\u05d0\u05d9"\u05dc'] = "\u05d0\u05d2\u05d5\u05d3\u05d4 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05d0\u05e4\u05d9\u05dc\u05e4\u05e1\u05d9\u05d4";
RyuaR['\u05d0\u05d9\u05d8"\u05dd'] = "\u05d0\u05d2\u05d5\u05d3\u05d4 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05d8\u05d9\u05e4\u05d5\u05dc \u05de\u05d9\u05e0\u05d9";
RyuaR["\u05d0\u05d9.\u05d5\u05d9"] = "\u05e2\u05de\u05d5\u05ea\u05d4 \u05dc\u05d4\u05d5\u05e8\u05d9\u05dd \u05dc\u05d9\u05dc\u05d3\u05d9\u05dd \u05dc\u05e7\u05d5\u05d9\u05d9 \u05e9\u05de\u05d9\u05e2\u05d4";
RyuaR['\u05d0\u05d9\u05d3"\u05e1'] = "\u05ea\u05e1\u05de\u05d5\u05e0\u05ea \u05db\u05e9\u05dc \u05d7\u05d9\u05e1\u05d5\u05e0\u05d9 \u05e0\u05e8\u05db\u05e9 (AIDS Acquired Immune Deficiency Syndrome)";
RyuaR['\u05d0\u05d9\u05d2"\u05d4'] = "\u05d0\u05d2\u05d5\u05d3\u05d4 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05d2\u05d3\u05d9\u05dc\u05d4 \u05d5\u05d4\u05ea\u05e4\u05ea\u05d7\u05d5\u05ea";
RyuaR['\u05d0\u05d8"\u05df'] = "\u05d0\u05de\u05d1\u05d5\u05dc\u05e0\u05e1 \u05d8\u05d9\u05e4\u05d5\u05dc\u05d9 \u05e0\u05de\u05e8\u05e5";
RyuaR["\u05d0.\u05d8.\u05dc.\u05e1"] = "\u05d4\u05e2\u05de\u05d5\u05ea\u05d4 \u05d4\u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05de\u05d7\u05dc\u05d5\u05ea A.L.S";
RyuaR['\u05d0\u05d8"\u05d4'] = "\u05d0\u05d9\u05e8\u05d5\u05e2 \u05d8\u05d5\u05e7\u05e1\u05d9\u05e7\u05d5\u05dc\u05d5\u05d2\u05d9 \u05d4\u05de\u05d5\u05e0\u05d9";
RyuaR['\u05d0\u05d7"\u05d0'] = "\u05d0\u05e8\u05d2\u05d5\u05df \u05d7\u05e8\u05e9\u05d9\u05dd \u05d0\u05d9\u05dc\u05de\u05d9\u05dd";
RyuaR['\u05d0\u05d4"\u05e9'] = "\u05d0\u05e8\u05d2\u05de\u05e0\u05ea \u05d4\u05e0\u05d5\u05da-\u05e9\u05e0\u05dc\u05d9\u05df";
RyuaR['\u05d0\u05d3"\u05e4'] = "\u05d0\u05d3\u05e0\u05d5\u05d6\u05d9\u05df \u05d3\u05d9 \u05e4\u05d5\u05e1\u05e4\u05d8";
RyuaR['\u05d0\u05d1"\u05e0'] = "\u05d0\u05e0\u05d3\u05d5\u05e4\u05ea\u05dc\u05de\u05d9\u05d8\u05d9\u05e1 \u05d1\u05ea\u05e8 \u05e0\u05d9\u05ea\u05d5\u05d7\u05d9";
RyuaR['\u05d0\u05d1\u05d7"\u05e8'] = "\u05d0\u05d9\u05e8\u05d5\u05e2 \u05d1\u05d9\u05d5\u05dc\u05d5\u05d2\u05d9 \u05d7\u05e8\u05d9\u05d2";
RyuaR['\u05d0\u05d0"\u05e7'] = "\u05d0\u05d9\u05e8\u05d5\u05e2 \u05d0\u05d9\u05e1\u05db\u05de\u05d9 \u05e7\u05dc";
RyuaR['\u05d0\u05d0"\u05d8'] = "\u05d0\u05dc\u05e4\u05d0 1 \u05d0\u05e0\u05d8\u05d9 \u05d8\u05e8\u05d9\u05e4\u05e1\u05d9\u05df";
RyuaR['\u05d0\u05d0"\u05d7'] = "\u05d0\u05d9\u05e8\u05d5\u05e2 \u05d0\u05d9\u05e1\u05db\u05de\u05d9 \u05d7\u05d5\u05dc\u05e3";
RyuaR['\u05d0\u05d0"\u05d2'] = "\u05d0\u05e3 \u05d0\u05d5\u05d6\u05df \u05d2\u05e8\u05d5\u05df";
RyuaR['\u05d0\u05b8\u05e7\u05b4\u05d9"\u05dd'] = "\u05d0\u05d2\u05d5\u05d3\u05d4 \u05dc\u05e7\u05d9\u05de\u05d5\u05dd \u05d9\u05dc\u05d3\u05d9\u05dd \u05de\u05e4\u05d2\u05e8\u05d9\u05dd";
RyuaR['\u05d0\u05e4"\u05d9'] = "\u05d0\u05e1\u05e4\u05e8\u05d2\u05e8 \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d0\u05e1"\u05e3'] = "\u05d0\u05d2\u05d5\u05d3\u05ea \u05d7\u05d5\u05dc\u05d9 \u05e1\u05d9. \u05d0\u05e4. \u05d0\u05e1 \u05d5\u05e4\u05d9\u05d1\u05e8\u05d5\u05de\u05d9\u05d0\u05dc\u05d2\u05d9\u05d4";
RyuaR['\u05d0\u05e1"\u05dc'] = "\u05d0\u05d9 \u05e1\u05e4\u05d9\u05e7\u05ea \u05dc\u05d1";
RyuaR['\u05d0\u05e1"\u05d9'] = "\u05d0\u05e0\u05e9\u05d9 \u05d4\u05e1\u05e4\u05e7\u05d8\u05e8\u05d5\u05dd (\u05d4\u05d0\u05d5\u05d8\u05d9\u05e1\u05d8\u05d9) \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d0\u05e1\u05d8"\u05d9'] = "\u05d0\u05e8\u05d2\u05d5\u05df \u05e1\u05d9\u05e0\u05d3\u05e8\u05d5\u05dd \u05d8\u05d5\u05e8\u05d0\u05d8 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d0\u05e1\u05d4"\u05e8'] = "\u05d0\u05e1\u05e3 \u05d4\u05e8\u05d5\u05e4\u05d0";
RyuaR['\u05d0\u05e1"\u05d4'] = "\u05d0\u05e1\u05e3 \u05d4\u05e8\u05d5\u05e4\u05d0";
RyuaR['\u05d0"\u05e1'] = "\u05d0\u05d9 \u05e1\u05e4\u05d9\u05e7\u05d4";
RyuaR['\u05d0\u05de"\u05e8'] = "\u05d0\u05d1\u05d9\u05d6\u05e8\u05d9\u05dd \u05d5\u05de\u05db\u05e9\u05d9\u05e8\u05d9\u05dd \u05e8\u05e4\u05d5\u05d0\u05d9\u05d9\u05dd";
RyuaR['\u05d0\u05b8\u05de\u05b8"\u05df'] = "\u05d0\u05d2\u05d5\u05d3\u05d4 \u05dc\u05de\u05d9\u05d0\u05dc\u05d5\u05de\u05d4 \u05e0\u05e4\u05d5\u05e6\u05d4";
RyuaR['\u05d0\u05de"\u05d2'] = "\u05d0\u05d9\u05e0\u05d3\u05e7\u05e1 \u05de\u05e1\u05ea (\u05d4)\u05d2\u05d5\u05e3";
RyuaR['\u05d0\u05de\u05d1"\u05d9'] = "\u05d0\u05e8\u05d2\u05d5\u05df \u05de\u05d2\u05de\u05d2\u05de\u05d9\u05dd \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d0\u05de"\u05d1'] = "\u05d0\u05e0\u05de\u05d9\u05d4 \u05de\u05d7\u05d5\u05e1\u05e8 \u05d1\u05e8\u05d6\u05dc";
RyuaR['\u05d0\u05dc\u05d9"\u05e2'] = "\u05d4\u05d0\u05d2\u05d5\u05d3\u05d4 \u05dc\u05e7\u05d9\u05d3\u05d5\u05dd \u05d9\u05dc\u05d3\u05d9\u05dd \u05e2\u05d9\u05d5\u05d5\u05e8\u05d9\u05dd";
RyuaR['\u05d0\u05b8\u05dc\u05b4\u05d9"\u05df'] = "\u05d0\u05d2\u05d5\u05d3\u05d4 \u05dc\u05e2\u05d6\u05e8\u05ea \u05d9\u05dc\u05d3\u05d9\u05dd \u05e0\u05db\u05d9\u05dd";
RyuaR['\u05d0\u05b8\u05dc\u05d5\u05bc"\u05d8'] = "\u05d0\u05d2\u05d5\u05d3\u05d4 \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05dc\u05d9\u05dc\u05d3\u05d9\u05dd \u05d0\u05d5\u05d8\u05d9\u05e1\u05d8\u05d9\u05dd";
RyuaR['\u05d0\u05dc"\u05d4'] = "\u05de\u05e8\u05db\u05d6 \u05dc\u05e1\u05d9\u05d5\u05e2 \u05e0\u05e4\u05e9\u05d9 \u05d7\u05d1\u05e8\u05ea\u05d9 \u05dc\u05d9\u05d5\u05e6\u05d0\u05d9 \u05d4\u05d5\u05dc\u05e0\u05d3 \u05d5\u05e7\u05e8\u05d5\u05d1\u05d9\u05d4\u05dd";
RyuaR['\u05d0\u05d9\u05ea"\u05dc'] = "\u05d0\u05d9\u05e8\u05d2\u05d5\u05df \u05ea\u05de\u05d9\u05db\u05d4 \u05dc\u05e0\u05db\u05d4";
RyuaR['\u05d0\u05d9\u05e1"\u05e7'] = "\u05d0\u05d9 \u05e1\u05e4\u05d9\u05e7\u05d4";
RyuaR['\u05ea\u05e9"\u05e6'] = "\u05ea\u05db\u05e0\u05d9\u05ea \u05e9\u05d9\u05db\u05d5\u05df \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9";
RyuaR['\u05ea\u05e8\u05e9"\u05e6'] = "\u05ea\u05db\u05e0\u05d9\u05ea \u05e8\u05d9\u05e9\u05d5\u05dd \u05e9\u05d9\u05db\u05d5\u05e0\u05d9\u05dd \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05d9\u05dd";
RyuaR['\u05ea\u05b8\u05e8\u05b8"\u05dd'] = "\u05ea\u05db\u05e0\u05d5\u05df \u05e8\u05d2\u05d9\u05e9 \u05dc\u05de\u05d9\u05dd";
RyuaR['\u05ea\u05e8"\u05de'] = "\u05ea\u05d5\u05db\u05e0\u05d9\u05ea \u05e8\u05d5\u05d1\u05e2 \u05de\u05d5\u05e1\u05db\u05de\u05ea";
RyuaR['\u05ea\u05e6"\u05e8'] = "\u05ea\u05db\u05e0\u05d9\u05ea \u05dc\u05e6\u05e8\u05db\u05d9 \u05e8\u05d9\u05e9\u05d5\u05dd";
RyuaR['\u05ea\u05de"\u05de'] = "\u05ea\u05db\u05e0\u05d9\u05ea \u05de\u05ea\u05d0\u05e8 \u05de\u05d7\u05d5\u05d6\u05d9\u05ea";
RyuaR['\u05ea\u05de"\u05d0'] = "\u05ea\u05db\u05e0\u05d9\u05ea \u05de\u05ea\u05d0\u05e8 \u05d0\u05e8\u05e6\u05d9\u05ea";
RyuaR['\u05ea\u05d5"\u05d7'] = "\u05ea\u05db\u05e0\u05d5\u05df \u05d5\u05d1\u05e0\u05d9\u05d9\u05d4 \u05d5\u05e2\u05d3\u05d5\u05ea \u05de\u05d7\u05d5\u05d6\u05d9\u05d5\u05ea";
RyuaR['\u05ea\u05d4"\u05d8'] = "\u05ea\u05d7\u05ea \u05d4\u05d8\u05d9\u05d7";
RyuaR['\u05ea\u05bc\u05b7\u05d1\u05bc\u05b8"\u05e2'] = "\u05ea\u05db\u05e0\u05d9\u05ea \u05d1\u05e0\u05d9\u05df \u05e2\u05d9\u05e8";
RyuaR['\u05e9"\u05e9'] = "\u05e9\u05d8\u05d7 \u05e9\u05d9\u05e8\u05d5\u05ea";
RyuaR['\u05e9\u05e6"\u05e4'] = "\u05e9\u05d8\u05d7 \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9 \u05e4\u05ea\u05d5\u05d7";
RyuaR['\u05e9\u05e4"\u05e4'] = "\u05e9\u05d8\u05d7 \u05e4\u05e8\u05d8\u05d9 \u05e4\u05ea\u05d5\u05d7";
RyuaR['\u05e9\u05d1"\u05e6'] = "\u05e9\u05d8\u05d7 \u05dc\u05d1\u05e0\u05d9\u05d9\u05e0\u05d9 \u05e6\u05d9\u05d1\u05d5\u05e8";
RyuaR['\u05e8\u05d7"\u05e7'] = "\u05e8\u05e6\u05e4\u05d4 \u05d7\u05dc\u05e7\u05d9 \u05e7\u05e8\u05e7\u05e2";
RyuaR['\u05e7"\u05ea'] = "\u05e7\u05d5 \u05ea\u05d7\u05ea\u05d5\u05df";
RyuaR['\u05e7"\u05e7'] = "\u05e7\u05d5\u05de\u05ea \u05e7\u05e8\u05e7\u05e2";
RyuaR['\u05e7"\u05e2'] = "\u05e7\u05d5 \u05e2\u05dc\u05d9\u05d5\u05df";
RyuaR['\u05e7"\u05d1'] = "\u05e7\u05d9\u05e8 \u05d1\u05d8\u05d5\u05df";
RyuaR['\u05e6\u05b8\u05de\u05b8"\u05df'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05db\u05e0\u05d9 \u05e0\u05d9\u05d9\u05d3";
RyuaR['\u05e6\u05de"\u05db'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05db\u05e0\u05d9 \u05db\u05d1\u05d3";
RyuaR['\u05e6\u05de"\u05d4'] = "\u05e6\u05d9\u05d5\u05d3 \u05de\u05db\u05e0\u05d9 \u05d4\u05e0\u05d3\u05e1\u05d9";
RyuaR['\u05e6\u05de"\u05d2'] = "\u05e6\u05d9\u05e0\u05d5\u05e8 \u05de\u05d9 \u05d2\u05e9\u05dd";
RyuaR['\u05e4"\u05e8'] = "\u05e4\u05e0\u05d9 \u05e8\u05d9\u05e6\u05d5\u05e3";
RyuaR['\u05e4\u05dc"\u05d7'] = "\u05e4\u05e2\u05d9\u05dc\u05d5\u05ea \u05dc\u05d0 \u05d7\u05e7\u05dc\u05d0\u05d9\u05ea";
RyuaR['\u05e4"\u05d1'] = "\u05e4\u05e0\u05d9 \u05d1\u05d8\u05d5\u05df";
RyuaR['\u05e2"\u05ea'] = "\u05e2\u05de\u05d5\u05d3 \u05ea\u05d0\u05d5\u05e8\u05d4";
RyuaR['\u05e2"\u05d7'] = "\u05e2\u05de\u05d5\u05d3 \u05d7\u05e9\u05de\u05dc";
RyuaR['\u05e2\u05d4"\u05d8'] = "\u05e2\u05dc \u05d4\u05d8\u05d9\u05d7";
RyuaR['\u05e2"\u05d2'] = "\u05e2\u05dc\u05d9\u05d9\u05ea \u05d2\u05d2";
RyuaR['\u05e0\u05d3\u05dc"\u05df'] = "\u05e0\u05b4\u05db\u05b0\u05e1\u05b5\u05d9 \u05d3\u05b0\u05bc\u05dc\u05b8\u05d0 \u05e0\u05b8\u05d9\u05b0\u05d3\u05b5\u05d9";
RyuaR['\u05de\u05e9"\u05d7'] = "\u05de\u05e1 \u05e9\u05d1\u05d7";
RyuaR['\u05de\u05e9\u05d1"\u05e9'] = "\u05de\u05e9\u05e8\u05d3 \u05d4\u05d1\u05d9\u05e0\u05d5\u05d9 \u05d5\u05d4\u05e9\u05d9\u05db\u05d5\u05df";
RyuaR['\u05de\u05e2"\u05e8'] = "\u05de\u05e8\u05db\u05d6 \u05e2\u05e1\u05e7\u05d9\u05dd \u05e8\u05d0\u05e9\u05d9";
RyuaR['\u05de\u05b8\u05de\u05b8"\u05e7'] = "\u05de\u05e8\u05d7\u05d1 \u05de\u05d5\u05d2\u05df \u05e7\u05d5\u05de\u05ea\u05d9";
RyuaR['\u05de\u05de"\u05de'] = "\u05de\u05e8\u05d7\u05d1 \u05de\u05d5\u05d2\u05df \u05de\u05d5\u05e1\u05d3\u05d9";
RyuaR['\u05de\u05b8\u05de\u05b8"\u05d3'] = "\u05de\u05e8\u05d7\u05d1 \u05de\u05d5\u05d2\u05df \u05d3\u05d9\u05e8\u05ea\u05d9";
RyuaR['\u05de\u05d1\u05d0"\u05ea'] = "\u05de\u05d1\u05e0\u05d4 \u05d0\u05d7\u05d9\u05d3 \u05dc\u05ea\u05db\u05e0\u05d9\u05ea";
RyuaR['\u05db"\u05d0'] = "\u05db\u05d9\u05d5\u05d5\u05e0\u05d9 \u05d0\u05d5\u05d5\u05d9\u05e8";
RyuaR['\u05d9\u05d7"\u05d3'] = "\u05d9\u05d7\u05d9\u05d3\u05ea \u05d3\u05d9\u05d5\u05e8";
RyuaR['\u05d6\u05db"\u05d1'] = "\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d1\u05e0\u05d9\u05d9\u05d4";
RyuaR['\u05d5\u05e2"\u05d1'] = "\u05d5\u05d5\u05e2\u05d3\u05ea \u05d1\u05e0\u05d9\u05d9\u05df \u05e2\u05e8\u05d9\u05dd";
RyuaR['\u05d5\u05dc"\u05dc'] = "\u05d4\u05d5\u05d5\u05e2\u05d3\u05d4 \u05dc\u05d1\u05e0\u05d9\u05d4 \u05dc\u05de\u05d2\u05d5\u05e8\u05d9\u05dd";
RyuaR['\u05d5\u05b8\u05d3\u05b8"\u05dc'] = "\u05d5\u05e2\u05d3\u05ea \u05d3\u05d9\u05d5\u05e8 \u05dc\u05d0\u05d5\u05de\u05d9\u05ea";
RyuaR['\u05d4\u05d5\u05dc\u05e7"\u05d7'] = "\u05d4\u05d5\u05d5\u05e2\u05d3\u05d4 \u05dc\u05e9\u05de\u05d9\u05e8\u05d4 \u05e2\u05dc \u05e7\u05e8\u05e7\u05e2 \u05d7\u05e7\u05dc\u05d0\u05d9\u05ea";
RyuaR['\u05d2"\u05e8'] = "\u05d2\u05d5\u05d1\u05d4 \u05e8\u05e6\u05e4\u05d4";
RyuaR['\u05d1\u05d1"\u05e0'] = "\u05d1\u05e7\u05e9\u05ea \u05d1\u05e0\u05d9\u05d9\u05d4";
RyuaR["\u05d0.\u05ea."] = "\u05d0\u05d9\u05d6\u05d5\u05e8 \u05ea\u05e2\u05e9\u05d9\u05d9\u05d4";
RyuaR['\u05d0"\u05e9'] = "\u05d0\u05d1\u05df \u05e9\u05e4\u05d4";
RyuaR["\u05d0\u05d3\u05e8"] = "\u05d0\u05d3\u05e8\u05d9\u05db\u05dc";
RyuaR['\u05d3\u05e8\u05d9"\u05e9'] = "\u05d3\u05e8\u05d9\u05e9\u05ea \u05e9\u05dc\u05d5\u05dd";
RyuaR['\u05d3"\u05dc'] = "\u05d3\u05d9 \u05dc\u05de\u05d1\u05d9\u05df";
RyuaR['\u05d3"\u05dc'] = "\u05d3\u05d9 \u05dc\u05d7\u05db\u05d9\u05de\u05d0";
RyuaR['\u05d3\u05d5"\u05e8'] = "\u05d3\u05d7\u05d9\u05dc\u05d5 \u05d5\u05e8\u05d7\u05d9\u05de\u05d5";
RyuaR['\u05d3\u05d5"\u05d4'] = "\u05d3\u05d9 \u05d5\u05d4\u05d5\u05ea\u05e8";
RyuaR['\u05d3"\u05d5'] = "\u05d3\u05d1\u05e8 \u05d5\u05d4\u05d9\u05e4\u05d5\u05db\u05d5";
RyuaR['\u05d2"\u05e9'] = "\u05d2\u05d6\u05d9\u05e8\u05d4 \u05e9\u05d5\u05d5\u05d4";
RyuaR['\u05d2\u05d6"\u05e9'] = "\u05d2\u05d6\u05e8\u05d4 \u05e9\u05d5\u05d5\u05d4";
RyuaR['\u05d2\u05d6"\u05dc'] = "\u05d2\u05dd \u05d6\u05d5 \u05dc\u05d8\u05d5\u05d1\u05d4";
RyuaR['\u05d2\u05d5\u05de"\u05d2'] = "\u05d2\u05d5\u05d2 \u05d5\u05de\u05d2\u05d5\u05d2";
RyuaR['\u05d1\u05ea\u05d5\u05de"\u05e8'] = "\u05d1\u05ea\u05d5\u05d3\u05d4 \u05de\u05e8\u05d0\u05e9";
RyuaR['\u05d1\u05e9\u05e4\u05d5"\u05d0'] = "\u05d1\u05e9\u05d5\u05dd \u05e4\u05e0\u05d9\u05dd \u05d5\u05d0\u05d5\u05e4\u05df";
RyuaR['\u05d1\u05e9\u05d8\u05d5\u05de"\u05e6'] = "\u05d1\u05e9\u05e2\u05d4 \u05d8\u05d5\u05d1\u05d4 \u05d5\u05de\u05d5\u05e6\u05dc\u05d7\u05ea";
RyuaR['\u05d1\u05e9\u05d5"\u05d0'] = "\u05d1\u05e9\u05d5\u05dd \u05d0\u05d5\u05e4\u05df";
RyuaR['\u05d1\u05e7"\u05d0'] = "\u05d1\u05e7\u05e0\u05d4 \u05d0\u05d7\u05d3";
RyuaR['\u05d1"\u05e6'] = "\u05d1\u05df \u05e6\u05d9\u05d5\u05df";
RyuaR['\u05d1\u05e2"\u05db'] = "\u05d1\u05e2\u05dc \u05db\u05d5\u05e8\u05d7\u05d5";
RyuaR['\u05d1\u05e1\u05d5"\u05de'] = "\u05d1\u05df \u05e1\u05d5\u05e8\u05e8 \u05d5\u05de\u05d5\u05e8\u05d4";
RyuaR['\u05d1"\u05e0'] = "\u05d1\u05dc\u05d9 \u05e0\u05d3\u05e8";
RyuaR['\u05d1\u05dc"\u05e9'] = "\u05d1\u05dc\u05d1 \u05e9\u05dc\u05dd";
RyuaR['\u05d1\u05dc\u05e2\u05d4"\u05e8'] = "\u05d1\u05dc\u05d9 \u05d4\u05e2\u05d9\u05df \u05d4\u05e8\u05e2";
RyuaR['\u05d1\u05dc\u05e1"\u05e0'] = "\u05d1\u05dc\u05e9\u05d5\u05df \u05e1\u05d2\u05d9 \u05e0\u05d4\u05d5\u05e8";
RyuaR['\u05d1\u05dc\u05e0"\u05d3'] = "\u05d1\u05dc\u05d9 \u05e0\u05d3\u05e8";
RyuaR['\u05d1\u05dc"\u05e0'] = "\u05d1\u05dc\u05d9 \u05e0\u05d3\u05e8";
RyuaR['\u05d1\u05db\u05dc\u05e9"\u05d1'] = "\u05d1\u05db\u05dc \u05dc\u05e9\u05d5\u05df \u05e9\u05dc \u05d1\u05e7\u05e9\u05d4";
RyuaR['\u05d1\u05d9\u05d4"\u05e9'] = "\u05d1\u05d9\u05df \u05d4\u05e9\u05d9\u05d8\u05d9\u05df";
RyuaR['\u05d1\u05d3\u05e8"\u05db'] = "\u05d1\u05d3\u05e8\u05da \u05db\u05dc\u05dc";
RyuaR['\u05d0"\u05e9'] = "\u05d0\u05d9\u05dc\u05d4 \u05e9\u05dc\u05d5\u05d7\u05d4";
RyuaR['\u05d0\u05d9\u05d5"\u05d1'] = "\u05d0\u05e9\u05e8\u05d9 \u05d9\u05d5\u05e9\u05d1\u05d9 \u05d1\u05d9\u05ea\u05da";
RyuaR['\u05d0\u05d9\u05d4"\u05e9'] = "\u05d0\u05dd \u05d9\u05e8\u05e6\u05d4 \u05d4\u05e9\u05dd";
RyuaR['\u05d0\u05d9"\u05d4'] = "\u05d0\u05dd \u05d9\u05e8\u05e6\u05d4 \u05d4\u05e9\u05dd";
RyuaR['\u05d0\u05d7"\u05d5'] = "\u05d0\u05dd \u05d7\u05e1 \u05d5\u05e9\u05dc\u05d5\u05dd";
RyuaR['\u05d0"\u05d7'] = "\u05d0\u05d5\u05e8\u05d7 \u05d7\u05d9\u05d9\u05dd";
RyuaR['\u05d0\u05d5"\u05ea'] = "\u05d0\u05d5\u05e8\u05d9\u05dd \u05d5\u05ea\u05d5\u05de\u05d9\u05dd";
RyuaR['\u05d0\u05d5\u05d9"\u05e6'] = "\u05d0\u05de\u05ea \u05d5\u05d9\u05e6\u05d9\u05d1";
RyuaR['\u05d0\u05d3\u05db\u05d0"\u05d7'] = "\u05d0\u05d9\u05df \u05d3\u05d1\u05e8 \u05db\u05d6\u05d4 \u05d0\u05e8\u05d5\u05d7\u05ea \u05d7\u05d9\u05e0\u05dd";
RyuaR['\u05d0\u05d3\u05d4\u05d1"\u05d4'] = "\u05d0\u05d9\u05df \u05d3\u05d1\u05e8 \u05d4\u05e2\u05d5\u05de\u05d3 \u05d1\u05e4\u05e0\u05d9 \u05d4\u05e8\u05e6\u05d5\u05df";
RyuaR['\u05d0\u05d0"\u05d8'] = "\u05d0\u05dd \u05d0\u05d9\u05e0\u05e0\u05d9 \u05d8\u05d5\u05e2\u05d4";
RyuaR['\u05d0\u05d0"\u05d1'] = "\u05d0\u05d1\u05d5\u05ea \u05d0\u05db\u05dc\u05d5 \u05d1\u05d5\u05e1\u05e8";
RyuaR['\u05d0"\u05d0'] = "\u05d0\u05d2\u05d1 \u05d0\u05d5\u05e8\u05d7\u05d0";
RyuaR['\u05dc\u05e2\u05e0"\u05d3'] = "\u05dc\u05e4\u05d9 \u05e2\u05e0\u05d9\u05d5\u05ea \u05d3\u05e2\u05ea\u05d9";
RyuaR['\u05de\u05d3"\u05d0'] = "\u05de\u05d2\u05df \u05d3\u05d5\u05d3 \u05d0\u05d3\u05d5\u05dd";
RyuaR['\u05de\u05d6\u05dc"\u05d8'] = "\u05de\u05d8\u05d5\u05e1 \u05d6\u05e2\u05d9\u05e8 \u05dc\u05dc\u05d0 \u05d8\u05d9\u05d9\u05e1";
RyuaR['\u05de\u05e4\u05db"\u05dc'] = "\u05de\u05e4\u05e7\u05d7 \u05db\u05dc\u05dc\u05d9 (\u05d4\u05e2\u05d5\u05de\u05d3 \u05d1\u05e8\u05d0\u05e9 \u05d4\u05de\u05e9\u05d8\u05e8\u05d4)";
RyuaR['\u05de\u05d6\u05db"\u05dc'] = "\u05de\u05d6\u05db\u05d9\u05e8 \u05db\u05dc\u05dc\u05d9";
RyuaR['\u05e0\u05d8"\u05df'] = "\u05e0\u05d9\u05d9\u05d3\u05ea \u05d8\u05d9\u05e4\u05d5\u05dc \u05e0\u05de\u05e8\u05e5";
RyuaR['\u05de\u05ea\u05e0"\u05e1'] = "\u05de\u05e8\u05db\u05d6 \u05ea\u05e8\u05d1\u05d5\u05ea \u05e0\u05d5\u05e2\u05e8 \u05e1\u05e4\u05d5\u05e8\u05d8";
RyuaR['\u05e0\u05d9\u05dc"\u05d9'] = "\u05e0\u05e6\u05d7 \u05d9\u05e9\u05e8\u05d0\u05dc \u05dc\u05d0 \u05d9\u05e9\u05e7\u05e8";
RyuaR['\u05e1\u05d4"\u05db'] = "\u05e1\u05da \u05d4\u05db\u05dc";
RyuaR['\u05e2\u05d5"\u05d3'] = "\u05e2\u05d5\u05e8\u05da \u05d3\u05d9\u05df";
RyuaR['\u05e4\u05dc\u05de"\u05d7'] = "\u05e4\u05dc\u05d5\u05d2\u05d5\u05ea \u05de\u05d7\u05e5";
RyuaR['\u05e7\u05d5\u05e4"\u05d7'] = "\u05e7\u05d5\u05e4\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05e7\u05de"\u05e9'] = "\u05e7\u05d9\u05dc\u05d5\u05de\u05d8\u05e8 (\u05dc)\u05e9\u05e2\u05d4";
RyuaR['\u05e7\u05e7"\u05dc'] = "\u05e7\u05e8\u05df \u05e7\u05d9\u05d9\u05de\u05ea \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05e8"\u05d2'] = "\u05e8\u05de\u05ea \u05d2\u05df";
RyuaR['\u05e8\u05d5\u05d4"\u05de'] = "\u05e8\u05d0\u05e9 \u05d4\u05de\u05de\u05e9\u05dc\u05d4";
RyuaR["\u05e8\u05d0\u05e9 \u05de\u05d8\u05d4 \u05db\u05dc\u05dc\u05d9"] = '\u05e8\u05de\u05d8\u05db"\u05dc';
RyuaR['\u05e9\u05d1"\u05db'] = "\u05e9\u05e8\u05d5\u05ea \u05d1\u05d9\u05d8\u05d7\u05d5\u05df \u05db\u05dc\u05dc\u05d9";
RyuaR['\u05e9\u05e0\u05d4"\u05dc'] = "\u05e9\u05e0\u05ea \u05d4\u05dc\u05d9\u05de\u05d5\u05d3\u05d9\u05dd";
RyuaR['\u05ea"\u05d0'] = "\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1";
RyuaR["\u05d0.\u05d0.\u05d2"] = "\u05d0\u05e3 \u05d0\u05d5\u05d6\u05df \u05d2\u05e8\u05d5\u05df";
RyuaR['\u05d0\u05d5"\u05dd'] = "\u05d0\u05d5\u05de\u05d5\u05ea \u05de\u05d0\u05d5\u05d7\u05d3\u05d5\u05ea";
RyuaR['\u05d0\u05d7\u05d4"\u05e6'] = "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd";
RyuaR['\u05d0\u05d9\u05dc"\u05df'] = "\u05d0\u05d9\u05d2\u05d5\u05d3 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9 \u05dc\u05d9\u05dc\u05d3\u05d9\u05dd \u05e0\u05e4\u05d2\u05e2\u05d9\u05dd";
RyuaR['\u05d0\u05e9"\u05dc'] = "\u05d0\u05db\u05d9\u05dc\u05d4 \u05e9\u05ea\u05d9\u05d4 \u05dc\u05d9\u05e0\u05d4";
RyuaR['\u05d0"\u05d9'] = "\u05d0\u05e8\u05e5 \u05d9\u05e9\u05e8\u05d0\u05dc";
RyuaR['\u05d1"\u05d1'] = "\u05d1\u05e0\u05d9 \u05d1\u05e8\u05e7";
RyuaR['\u05d1\u05d3"\u05db'] = "\u05d1\u05d3\u05e8\u05da \u05db\u05dc\u05dc";
RyuaR['\u05d1\u05d9\u05d4"\u05de'] = "\u05d1\u05d9\u05ea \u05d4\u05de\u05e9\u05e4\u05d8";
RyuaR['\u05d1\u05d9"\u05d7'] = "\u05d1\u05d9\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd";
RyuaR['\u05d1\u05d9"\u05e1'] = "\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8";
RyuaR['\u05d1\u05e0"\u05e2'] = "\u05d1\u05e0\u05d9 \u05e2\u05e7\u05d9\u05d1\u05d0";
RyuaR['\u05d1\u05e2"\u05d7'] = "\u05d1\u05e2\u05dc\u05d9 \u05d7\u05d9\u05d9\u05dd";
RyuaR['\u05d1\u05e9\u05e2\u05d8\u05d5"\u05de'] = "\u05d1\u05e9\u05e2\u05d4 \u05d8\u05d5\u05d1\u05d4 \u05d5\u05de\u05d5\u05e6\u05dc\u05d7\u05ea";
RyuaR['\u05d3\u05d5"\u05d7'] = "\u05d3\u05d9\u05df \u05d5\u05d7\u05e9\u05d1\u05d5\u05df";
RyuaR['\u05d7\u05d5"\u05dc'] = "\u05d7\u05d5\u05e5 \u05dc\u05d0\u05e8\u05e5";
RyuaR['\u05d7"\u05db'] = "\u05d7\u05d1\u05e8 \u05db\u05e0\u05e1\u05ea";
RyuaR['\u05d7\u05e0"\u05d2'] = "\u05d7\u05d9\u05e0\u05d5\u05da \u05d2\u05d5\u05e4\u05e0\u05d9";
RyuaR['\u05d9\u05d5"\u05e8'] = "\u05d9\u05d5\u05e9\u05d1 \u05e8\u05d0\u05e9";
RyuaR['\u05db\u05d4"\u05db'] = "\u05db\u05dc \u05d4\u05db\u05d1\u05d5\u05d3";
RyuaR['\u05dc\u05e4\u05e0\u05d4"\u05e1'] = "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e1\u05e4\u05d9\u05e8\u05d4";
RyuaR['\u05ea\u05d5\u05e9\u05d1"\u05e2'] = "\u05ea\u05d5\u05e8\u05d4 \u05e9\u05d1\u05e2\u05dc \u05e4\u05d4";
RyuaR['\u05e2\u05e9\u05d9"\u05ea'] = "\u05e2\u05e9\u05e8\u05ea \u05d9\u05de\u05d9 \u05ea\u05e9\u05d5\u05d1\u05d4";
RyuaR['\u05e2\u05d9\u05d4"\u05e7'] = "\u05e2\u05d9\u05e8 \u05d4\u05e7\u05d5\u05d3\u05e9";
RyuaR['\u05e1\u05ea"\u05dd'] = "\u05e1\u05e4\u05e8\u05d9\u05dd \u05ea\u05e4\u05d9\u05dc\u05d9\u05df \u05d5\u05de\u05d6\u05d5\u05d6\u05d5\u05ea";
RyuaR['\u05e0\u05d2\u05d4"\u05e4'] = "\u05e0\u05e1 \u05d2\u05d3\u05d5\u05dc \u05d4\u05d9\u05d4 \u05e4\u05d4";
RyuaR['\u05de\u05d5\u05e6"\u05e9'] = "\u05de\u05d5\u05e6\u05d0\u05d9 \u05e9\u05d1\u05ea";
RyuaR['\u05db\u05e9\u05dc"\u05e4'] = "\u05db\u05e9\u05e8 \u05dc\u05e4\u05e1\u05d7";
RyuaR['\u05d9\u05d5"\u05d8'] = "\u05d9\u05d5\u05dd \u05d8\u05d5\u05d1";
RyuaR['\u05d9\u05d5\u05d4"\u05db'] = "\u05d9\u05d5\u05dd \u05d4\u05db\u05d9\u05e4\u05d5\u05e8\u05d9\u05dd";
RyuaR['\u05d7\u05d5\u05d4"\u05de'] = "\u05d7\u05d5\u05dc \u05de\u05d5\u05e2\u05d3";
RyuaR['\u05d6\u05e6"\u05dc'] = " \u05d6\u05db\u05e8 \u05e6\u05d3\u05d9\u05e7 \u05dc\u05d1\u05e8\u05db\u05d4";
RyuaR['\u05d6"\u05dc'] = "\u05d6\u05db\u05e8\u05d5 \u05dc\u05d1\u05e8\u05db\u05d4";
RyuaR['\u05d2\u05de\u05d7"\u05d8'] = "\u05d2\u05de\u05e8 \u05d7\u05ea\u05d9\u05de\u05d4 \u05d8\u05d5\u05d1\u05d4";
RyuaR['\u05d2\u05de"\u05d7'] = "\u05d2\u05de\u05d9\u05dc\u05d5\u05ea \u05d7\u05e1\u05d3\u05d9\u05dd";
RyuaR['\u05d1\u05e2"\u05d4'] = "\u05d1\u05e2\u05d6\u05e8\u05ea \u05d4\u05e9\u05dd";
RyuaR['\u05d1\u05d9\u05d4\u05db"\u05e0'] = "\u05d1\u05d9\u05ea \u05d4\u05db\u05e0\u05e1\u05ea";
RyuaR['\u05d0\u05d9"\u05d4'] = "\u05d0\u05dd \u05d9\u05e8\u05e6\u05d4 \u05d4\u05e9\u05dd";
RyuaR['\u05d0\u05d3\u05de\u05d5"\u05e8'] = "\u05d0\u05d3\u05d5\u05e0\u05e0\u05d5 \u05de\u05d5\u05e8\u05e0\u05d5 \u05d5\u05e8\u05d1\u05e0\u05d5";
RyuaR['\u05d1\u05e2"\u05de'] = "\u05d1\u05e2\u05e8\u05d1\u05d5\u05df \u05de\u05d5\u05d2\u05d1\u05dc";
RyuaR['\u05d0\u05e8\u05d4"\u05d1'] = "\u05d0\u05e8\u05e6\u05d5\u05ea \u05d4\u05d1\u05e8\u05d9\u05ea";
RyuaR['\u05e9"\u05d7'] = "\u05e9\u05e7\u05dc\u05d9\u05dd \u05d7\u05d3\u05e9\u05d9\u05dd";
RyuaR['בחו"ל'] = "בחוץ לארץ";
RyuaR['ומחו"ל'] = "ומבחוץ לארץ";
RyuaR['וכיו"ב'] = "וְכַיּוֹצֵא בָּזֶה";

aSTyx3 = [];
aSTyx3['נַדְלָ"ן']='נִכְסֵי דְּלָא נָיְדֵי';
aSTyx3['UX'] = 'User Experience';
aSTyx3['תע"ל'] = 'תנועה ערבית להתחדשות';
aSTyx3['ע"י'] = 'על ידי';
aSTyx3['חו"ל'] = 'חוץ לארץ';
aSTyx3['תמ"ת'] = 'תעשיה מסחר תעסוקה';
aSTyx3['תמ"ס'] = 'תרבות מדע ספורט';
aSTyx3['תל"מ'] = 'תנועה לציונות מגשימה';
aSTyx3['תֶּלֶ"ם'] = 'תנועה להתחדשות ממלכתית';
aSTyx3['ש"ס'] = 'שומרי תורה ספרדיים';
aSTyx3['של"י'] = 'שלום לישראל';
aSTyx3['רָקָ"ח'] = 'רשימה קומוניסטית חדשה';
aSTyx3['רַפִ"י'] = 'רשימת פועלי ישראל';
aSTyx3['רָעָ"ם'] = 'רשימה ערבית מאוחדת';
aSTyx3['ר"מ'] = 'ראש ממשלה';
aSTyx3['רוה"מ'] = 'ראש הממשלה';
aSTyx3['רה"ע'] = 'ראש העיר';
aSTyx3['רה"מ'] = 'ראש הממשלה';
aSTyx3["קונ'"] = 'קונגרס';
aSTyx3['צ"ס'] = 'ציונים סוציאליסטיים';
aSTyx3['צל"ש'] = 'ציונות ליברלית שוויון';
aSTyx3['צא"י'] = 'צעירי אגודת ישראל';
aSTyx3['פַת"ח'] = 'התנועה לשחרור פלסטין (ערבית)';
aSTyx3['פש"מ'] = 'פשרה מדינית';
aSTyx3['פק"פ'] = 'מפלגה קומוניסטית פלשתינית (PKP)';
aSTyx3['פוע"צ'] = 'פועלי ציון';
aSTyx3['פא"י'] = 'פועלי אגודת ישראל';
aSTyx3['עלי"ה'] = 'עמנו למען ישראל';
aSTyx3['משפ"מ'] = 'המועצה לשיתוף פעולה במפרץ';
aSTyx3['מר"י'] = 'מחנה רדיקלי ישראלי';
aSTyx3['מַקִ"י'] = 'מפלגה קומוניסטית ישראלית';
aSTyx3['מַפַּ"ם'] = 'מפלגת פועלים מאוחדת';
aSTyx3['מַפְדַּ"ל'] = 'מפלגה דתית לאומית';
aSTyx3['מַפָּא"י'] = 'מפלגת פועלי ארץ ישראל';
aSTyx3['מס"ד'] = 'מטה סוציאל דמוקרטי';
aSTyx3['מֵימָ"ד'] = 'מדינה יהודית מדינה דמוקרטית';
aSTyx3['מח"ר'] = 'מפלגת חברה ורפורמות';
aSTyx3['מַחַ"ל'] = 'מפלגת חירות ליבראלים';
aSTyx3['מזה"ת'] = 'מזרח התיכון';
aSTyx3['מועה"ב'] = 'מועצת הביטחון';
aSTyx3['מו"מ'] = 'משא ומתן';
aSTyx3['מד"ע'] = 'מפלגה דומקרטית ערבית';
aSTyx3['ל"ע'] = 'ליברלים עצמאיים';
aSTyx3['כ"י'] = 'כנסת ישראל';
aSTyx3['יחב"ל'] = 'יחסים בינלאומיים';
aSTyx3['ח"מ'] = 'חבר מרכז';
aSTyx3['חַ"כּ'] = 'חבר כנסת';
aSTyx3['חו"ב'] = 'חוץ וביטחון';
aSTyx3['חד"ש'] = 'חזית דמוקרטית לשלום ושוויון';
aSTyx3['חא"פ'] = 'חלוץ אולמרט פרץ';
aSTyx3['וָודָלִי"ם'] = 'ועדות דיור ציבוריות';
aSTyx3['ווד"ל'] = 'וועדת דיור ציבורית';
aSTyx3['ודלי"מ'] = 'ועדות דיור ציבוריות';
aSTyx3['וָדָ"ל'] = 'ועדת דיור לאומית';
aSTyx3['הַצֹּהַר'] = 'הציונים הרביזיוניסטיים';
aSTyx3['הצה"כ'] = 'הציונים הכלליים';
aSTyx3['הצב"ל'] = 'הצהרת בלפור';
aSTyx3['הסה"ל'] = 'הספר הלבן';
aSTyx3['החכי"ם'] = 'חברי הכנסת';
aSTyx3['הועה"כ'] = 'הועד הכללי';
aSTyx3['הַוָּודָלִי"ם'] = '(ה)וועדות דיור ציבוריות';
aSTyx3['ד"ש'] = 'תנועה דמוקרטית לשינוי';
aSTyx3["דמוק'"] = 'דמוקרטיה';
aSTyx3['גי"ל'] = 'גמלאי ישראל לכנסת';
aSTyx3['גַּחַ"ל'] = 'גוש חרות ליברלים';
aSTyx3['בנא"י'] = 'ברית נאמני ארץ ישראל';
aSTyx3['בל"ד'] = 'ברית לאומית דמוקרטית';
aSTyx3['אפע"ל'] = 'איגוד פועלים עבריים לאומיים';
aSTyx3['אמ"ע'] = 'ארכיון מפלגת העבודה';
aSTyx3['אי"ה'] = 'ארץ ישראל השלמה';
aSTyx3['אח"ס'] = 'האחים המוסלמים';
aSTyx3['אח"י'] = 'ארץ חברה יהדות';
aSTyx3['אחה"ע'] = 'אחדות העבודה';
aSTyx3['אה"ע'] = 'אחדות העבודה';
aSTyx3['אגו"י'] = 'אגודת ישראל';
aSTyx3['אא"פ'] = 'איחוד אפריקאי';
aSTyx3['תומ"ר'] = 'תודה מראש';
aSTyx3['שבה"י'] = 'שאר בשרי היקר';
aSTyx3['ר"ש'] = 'ראה שם';
aSTyx3['רצ"פ'] = 'רצוף פה';
aSTyx3['רצו"פ'] = 'רצוף פה';
aSTyx3['רצו"ב'] = 'רצוף בזה';
aSTyx3['רצ"ב'] = 'רצוף בזה';
aSTyx3['ר"פ'] = 'רצוף פה';
aSTyx3['ר"מ'] = 'ראה מסגרת';
aSTyx3['קצ"ע'] = 'קצת צריך עיון';
aSTyx3['צ"ל'] = 'צריך לומר';
aSTyx3['צ"ל'] = 'צריך להיות';
aSTyx3["פקס'"] = 'פקסימיליה';
aSTyx3['ע.ש.'] = 'עיקר שכחתי';
aSTyx3['ע"ע'] = 'עַיֵּן ערך';
aSTyx3['ע"ע'] = 'עַיֵּן עמוד';
aSTyx3['ע"ע'] = 'עיין עוד';
aSTyx3['עמ"ש'] = 'עַיֵּן מה שכתוב';
aSTyx3["עמ'"] = 'עמוּד(ים)';
aSTyx3['ע"ל'] = 'עיין למעלה';
aSTyx3['עכת"ד'] = 'עד כאן תוכן דבריו';
aSTyx3['עי"ש'] = 'עַיֵּן שָׁם';
aSTyx3['עי"ע'] = 'עין ערך';
aSTyx3['עי"ע'] = 'עיין עוד';
aSTyx3['עימ"ש'] = 'עַיֵּן מה שכתבתי';
aSTyx3['עיי"ש'] = 'עיין שם';
aSTyx3['עה"ח'] = 'על החתום';
aSTyx3['ע"ה'] = 'על החתום';
aSTyx3['ס"צ'] = 'סוף ציטוט';
aSTyx3['נ"ל'] = 'נזכר לעֵיל';
aSTyx3['נ"ל'] = 'נזכר למעלה';
aSTyx3['נב"ד'] = 'נזכרתי בעוד דבר';
aSTyx3['נ.ב'] = 'נכתב בצידו';
aSTyx3['נ"ב'] = 'נכתב בסוף';
aSTyx3['נ.ב.'] = 'נזכר בזאת';
aSTyx3['נ"ב'] = 'נוסף בסוף';
aSTyx3['מצו"ב'] = 'מצורף בזאת';
aSTyx3['מצב"ז'] = 'מצורף בזה';
aSTyx3['מצ"ב'] = 'מצורף בזאת';
aSTyx3['מעל"ד'] = 'מעבר לדף';
aSTyx3['מוסג"פ'] = 'מוסגר פה';
aSTyx3['מוכ"ז'] = 'מוסר כתב זה';
aSTyx3["מ'"] = 'מר';
aSTyx3['למוכ"ז'] = 'למוסר כתב זה';
aSTyx3['למוכ"ז'] = 'למביא כתב זה';
aSTyx3["לכ'"] = 'לכבוד';
aSTyx3['לא"א'] = 'לאהובי אבי';
aSTyx3['כת"ר'] = 'כבוד תורתו';
aSTyx3['כת"י'] = 'כתב יד';
aSTyx3['כת"ז'] = 'כתב זה';
aSTyx3['כצ"ל'] = 'כן צריך להיות';
aSTyx3['כצ"ל'] = 'כך צריך לומר';
aSTyx3['כמ"ת'] = 'כבוד מעלת תפארתו';
aSTyx3['כמשכ"ל'] = 'כמו שכתבנו למעלה';
aSTyx3['כמה"ר'] = 'כבוד מורנו הרב';
aSTyx3['כ"מ'] = 'כבוד מעלת';
aSTyx3['כיוצ"ב'] = 'כיוצא בזה';
aSTyx3['כיו"ב'] = 'כיוצא בזה';
aSTyx3['כיו"ב'] = 'כיוצא בו';
aSTyx3['כ"י'] = 'כתבי יד';
aSTyx3['כ"ז'] = 'כתב זה';
aSTyx3['כו"ח'] = 'כותב וחותם';
aSTyx3["כו'"] = 'כּוּלֵיהּ';
aSTyx3["כב'"] = 'כבוד';
aSTyx3['יעו"ש'] = 'יְעֻיַן שָׁם';
aSTyx3['יעוי"ש'] = 'יעויין שם';
aSTyx3['יל"ע'] = 'יש לעיין';
aSTyx3['חת"ש'] = 'חתמתי שמי';
aSTyx3['חנ"ם'] = 'חבר נכבד מאוד';
aSTyx3['ח"נ'] = 'חברה נכבדה';
aSTyx3['ח"נ'] = 'חבר נכבד';
aSTyx3['ח"מ'] = 'חתום מטה';
aSTyx3['ח"י'] = 'חבר יקר';
aSTyx3['ח"ח'] = 'חברים';
aSTyx3['וכיו"ב'] = 'כיוצא בזה';
aSTyx3['וכיו"ב'] = 'וכיוצא באלה';
aSTyx3["וכד'"] = 'וכדומה';
aSTyx3["וגו'"] = 'וגומר';
aSTyx3['ה"ש'] = 'הערת שוליים';
aSTyx3['הר"ב'] = 'הרצוף בזה';
aSTyx3['הנז"ל'] = 'הנזכר לעיל';
aSTyx3['ה"נ'] = 'הורים נכבדים';
aSTyx3['המצ"ב'] = 'המצורף בזה';
aSTyx3['החתו"מ'] = 'החתום מטה';
aSTyx3['ה"ה'] = 'האדונים הנכבדים';
aSTyx3['ד.נ.ג.ת'] = 'דואר נע גליל תחתון';
aSTyx3['ג.נ.'] = 'גברת נכבדה';
aSTyx3["גב'"] = 'גברת';
aSTyx3['ברג"כ'] = 'ברגשי כבוד';
aSTyx3['בעה"ח'] = 'בא על החתום';
aSTyx3['בס"ד'] = 'בסיעתא דשמיא';
aSTyx3['בכ"ר'] = 'בכבוד רב';
aSTyx3['בכ"ז'] = 'בכתוב זה';
aSTyx3['באעה"ח'] = 'באנו על החתום';
aSTyx3['אנ"מ'] = 'אדון נכבד מאוד';
aSTyx3['א.נ.'] = 'אדון נכבד';
aSTyx3['אמ"ל'] = 'אין מה להוסיף';
aSTyx3["אד'"] = 'אדון';
aSTyx3['אג"נ'] = 'אדון/גברת נכבדים';
aSTyx3['ג.נ.'] = 'גברת נכבדה';
aSTyx3['גא"נ'] = 'גברת/אדון נכבדים';
aSTyx3['ברג"כ'] = 'ברגשי כבוד';
aSTyx3['בעה"ח'] = 'בא על החתום';
aSTyx3['בס"ד'] = 'בסיעתא דשמיא';
aSTyx3['בכ"ר'] = 'בכבוד רב';
aSTyx3['בכ"ז'] = 'בכתוב זה';
aSTyx3['באעה"ח'] = 'באנו על החתום';
aSTyx3['אנ"מ'] = 'אדון נכבד מאוד';
aSTyx3['א.נ.'] = 'אדון נכבד';
aSTyx3['אמ"ל'] = 'אין מה לציין';
aSTyx3['אמ"ל'] = 'אין מה להעיר';
aSTyx3['אמ"ל'] = 'אין מה להוסיף';
aSTyx3['אד"נ'] = 'אדון נכבד';
aSTyx3['ת"ר'] = 'תקן רשמי';
aSTyx3['תצ"ג'] = 'תוצרת גמורה';
aSTyx3['תפ"מ'] = 'תאור פעולת מערכת';
aSTyx3['תפ"ט'] = 'תכנון פיתוח וטכנולוגיה';
aSTyx3['תָּעוֹ"ז'] = 'תעריף עומס וזמן';
aSTyx3['תָּמָ"ן'] = 'תעשיית מערכות נהיגה';
aSTyx3['תלק"צ'] = 'תלוי קציר';
aSTyx3['תל"ח'] = 'תקן לא חל';
aSTyx3['תלה"ש'] = 'תלוי השקיה';
aSTyx3['ת"י'] = 'תקן ישראלי';
aSTyx3['תחמ"ש'] = 'תחנת משנה';
aSTyx3['תחמ"ג'] = 'תחנת מיתוג';
aSTyx3['תח"כ'] = 'תחנת כח';
aSTyx3['תוצ"ג'] = 'תוצרת גמורה';
aSTyx3['תה"ר'] = 'תחנת השנאה רכבתית';
aSTyx3['תאמ"ו'] = 'תדריך אגף המכס ומע"מ';
aSTyx3['תא"מ'] = 'תערובת אספלט מבנית';
aSTyx3['שק"צ'] = 'שקע אופציות';
aSTyx3['שעט"ן'] = 'שווה ערך לטונה נפט';
aSTyx3['רט"ן'] = 'רדיו טלפון נייד';
aSTyx3['רט"מ'] = 'ריצוף טיח מחיצות';
aSTyx3['קבמ"ש'] = 'קבלן משנה';
aSTyx3['צ"פ'] = 'צמנט פורטלנד';
aSTyx3['צמ"ש'] = 'צינור משוריין';
aSTyx3['צמ"נ'] = 'ציוד מתח נמוך';
aSTyx3['צָמָ"ן'] = 'ציוד מכני נייד';
aSTyx3['צמ"כ'] = 'ציוד מכני כבד';
aSTyx3['צמ"ה'] = 'ציוד מכני הנדסי';
aSTyx3['צמ"ג'] = 'צינור מי גשם';
aSTyx3['צמ"א'] = 'ציוד מגן אישי';
aSTyx3['צ"ח'] = 'ציוד חקלאי';
aSTyx3['פר"ד'] = 'פריצה רב דרגתית';
aSTyx3['פק"ע'] = 'פקודת עבודה';
aSTyx3['פקמ"ק'] = 'פקודת מיתוג וקיצור';
aSTyx3['פע"מ'] = 'פיקוח על מדידות';
aSTyx3['פס"ק'] = 'פיקוח סכנות קרינה';
aSTyx3['פמ"א'] = 'פיתוח משאבי אנרגיה';
aSTyx3['פל"ח'] = 'פעילות לא חקלאית';
aSTyx3['פי"צ'] = 'פועל יצור';
aSTyx3['פח"מ'] = 'פוטנציאל חמצון חיזור';
aSTyx3['פ"ו'] = 'פוטו וולטאי';
aSTyx3['פב"מ'] = 'פסולת בלתי מאותרת';
aSTyx3['פב"ט'] = 'פקיד בטיחות';
aSTyx3['עש"ר'] = 'עשבוניים רב שנתיים';
aSTyx3['עע"ב'] = 'עומס עבודה בטוח';
aSTyx3['ע"ח'] = 'עמוד חשמל';
aSTyx3['עה"ט'] = 'על הטיח';
aSTyx3['סש"ח'] = 'ספק שירות חיוני';
aSTyx3['סש"א'] = 'ספק שירותי אנרגיה';
aSTyx3['סח"ה'] = 'סחר הוגן';
aSTyx3['נר"י'] = 'ניהול רצפת יצור';
aSTyx3['נק"ש'] = 'נקודות שחורות';
aSTyx3['נפ"ק'] = 'נורת פלורסנט קומפקטי';
aSTyx3['נפ"ח'] = 'ניצול פסולת חקלאית';
aSTyx3['נמ"י'] = 'ניהול מערכות ייצור';
aSTyx3['נמ"ח'] = 'ניתוח מחזור חיים';
aSTyx3['מתק"ש'] = 'מתכות קשות';
aSTyx3['מתימו"פ'] = 'מרכז תעשייה למחקר ופיתוח';
aSTyx3['מאמ"ת'] = 'מפסק אוטומטי מגנטי תרמי';
aSTyx3['מאמ"ט'] = 'מפסק חצי אוטומטי';
aSTyx3['מא"ז'] = 'מפסק אוטומטי זעיר';
aSTyx3['לוח"ד'] = 'לוח דרוך';
aSTyx3['כח"נ'] = 'כלל חומרים נעכלים';
aSTyx3['יע"ש'] = 'יחס עלווה שטח';
aSTyx3['יח"פ'] = 'יצרן חשמל פרטי';
aSTyx3['יג"ע'] = 'יחס גלים עומדים';
aSTyx3['י"ב'] = 'יציקת ברזל';
aSTyx3['טל"נ'] = 'טורבינה לחץ נמוך';
aSTyx3['טל"ג'] = 'טורבינה לחץ גבוה';
aSTyx3['חק"י'] = 'חקלאות ימית';
aSTyx3['חצ"ק'] = 'חשמל ציוד קרקע';
aSTyx3['חַפָּ"שׁ'] = 'חומר פעיל שטח';
aSTyx3['חמ"ר'] = 'חומרים רעילים';
aSTyx3['חמ"ס'] = 'חומרים מסוכנים';
aSTyx3['חמ"י'] = 'חברת החשמל מזרח ירושלים';
aSTyx3['חמ"א'] = 'חומר מכיל אסבסט';
aSTyx3['חט"ל'] = 'חורש טבעי למרעה';
aSTyx3['חט"כ'] = 'חטיבות כוח';
aSTyx3['חח"י'] = 'חברת חשמל לישראל';
aSTyx3['ח"ח'] = 'חלקי חילוף';
aSTyx3['חומ"ר'] = 'חומרים רעילים';
aSTyx3['חומ"ס'] = 'חומרים מסוכנים';
aSTyx3['חומ"מ'] = 'חומרים מורכבים';
aSTyx3['חוה"ד'] = 'חומרי הדברה';
aSTyx3['חו"ג'] = 'חומר גלם';
aSTyx3['ח"ג'] = 'חומר גלם';
aSTyx3['זר"ש'] = 'זיקוק עדין רב שלבי';
aSTyx3['זד"א']= 'זיקוק דחיסת אדים';
aSTyx3['הנ"י'] = 'הנדסת ייצור';
aSTyx3['דפ"א'] = 'דיודה פולטת אור (LED)';
aSTyx3['דוד"ש'] = 'דוד שמש';
aSTyx3['ג"ת'] = 'גוף תאורה';
aSTyx3['גו"י'] = 'גורם יצור';
aSTyx3['גַּדָּ"שׁ'] = 'גידולי שדה';
aSTyx3['גג"ש'] = 'גלגל שיניים';
aSTyx3['גא"פ'] = 'גרגירי אבקת פרחים';
aSTyx3['בשכח'] = 'שכר חודשי';
aSTyx3['ב"ע'] = 'בית עסק';
aSTyx3['בנא"ם'] = 'בינוי נכסים אפסנאות משק';
aSTyx3['במ"נ'] = 'במה מתרוממת ניידת';
aSTyx3['בימ"ס'] = 'בית מסחר';
aSTyx3['ביח"ר'] = 'בית חרושת';
aSTyx3['ביהח"ר'] = 'בית החרושת';
aSTyx3['ביא"ר'] = 'בית אריזה';
aSTyx3['ב"ח'] = 'בית חרושת';
aSTyx3['בד"ס'] = 'בדיקות סופיות';
aSTyx3['בד"ס'] = 'בדיקות סביבה';
aSTyx3['את"י'] = 'אזור תעשייה ישן';
aSTyx3['את"ח'] = 'אזור תעשייה חדש';
aSTyx3['אזת"ע'] = 'אזור תעשייה';
aSTyx3['אז"ת'] = 'אזור תעשייה';
aSTyx3['אזו"ת'] = 'אזור תעשייה';
aSTyx3['אזוה"ת'] = 'אזור התעשייה';
aSTyx3['אזהת"ע'] = 'אזור התעשייה';
aSTyx3['או"ם'] = 'ארגון ומשאבים';
aSTyx3['או"ה'] = 'אספקה והתקנה';
aSTyx3['אגו"מ'] = 'אגרגט גרוס ומדורג';
aSTyx3['א"א'] = 'אבטחת איכות';
aSTyx3['תת"מ'] = 'תת משקל';
aSTyx3['תת"מ'] = 'תהליך תופס מקום';
aSTyx3['תפ"צ'] = 'תסמונת הפה הצורב';
aSTyx3['תע"מ'] = 'תנועת עיניים מהירה';
aSTyx3['ת"ע'] = 'תולדות עבר';
aSTyx3['ת"ע'] = 'תאונת עבודה';
aSTyx3['תמ"ר'] = 'תסמונת המעי הרגיז';
aSTyx3['תמ"ר'] = 'תיק מרכז רפואי';
aSTyx3['ת.ל.ם'] = 'תחנות הקיבוצים לטיפול בילד ובמשפחה';
aSTyx3['תט"ר'] = 'תגמול טיפול רפואי';
aSTyx3['ת"ט'] = 'תסמונת טורט';
aSTyx3['תח"ק'] = 'תותבת חלקית קבועה';
aSTyx3['תח"ל'] = 'תותבת חלקית להוצאה';
aSTyx3['תו"ד'] = 'תיסמונת וורסטר דראוט';
aSTyx3['תה"מ'] = 'תהודה מגנטית';
aSTyx3['תד"ש'] = 'תמונת דם שלמה';
aSTyx3['תב"כ'] = 'תיסמונת באד-כיארי';
aSTyx3['תאר"ן'] = 'תחנת ארוע רב נפגעים';
aSTyx3['שָׁרָ"פּ'] = 'שירות רפואה פרטי';
aSTyx3['שר"מ'] = 'שירותי רפואה מיוחדים';
aSTyx3['שר"ל'] = 'שירות רפואי לנוסע';
aSTyx3['ש"ר'] = 'שירות רפואה';
aSTyx3['שק"ל'] = 'שירותים קהילתיים למוגבלים';
aSTyx3['שק"ד'] = 'שקיעת דם';
aSTyx3['שפ"ם'] = 'שירות פסיכולוגי משלים';
aSTyx3['שפ"י'] = 'השירות הפסיכולוגי ייעוצי';
aSTyx3['שפח"ז'] = 'שפעת החזירים';
aSTyx3['שע"צ'] = 'שערי צדק';
aSTyx3['שמ"ק'] = 'שירות מעבדה קטנה';
aSTyx3['שכ"י'] = 'שורש כף היד';
aSTyx3['שט"ד'] = 'שטף דם';
aSTyx3['שַׁבָּ"ן'] = 'שירותי בריאות נוספים';
aSTyx3['שב"כ'] = 'שירותי בריאות כללית';
aSTyx3['רפ"ש'] = 'רפואת שיניים';
aSTyx3['רפע"ה'] = 'רפואה על פי ההלכה';
aSTyx3['רפו"ש'] = 'רפואה שלימה';
aSTyx3['רע"מ'] = 'ריצודי עיניים מהירים';
aSTyx3['רֶמַ"ח'] = 'רִשְׁמַת מח חשמלית';
aSTyx3['רמו"ן'] = 'רפואה מונעת';
aSTyx3['רל"ח'] = 'רִשְׁמַת לב חשמלית (אק"ג)';
aSTyx3['רל"א'] = 'רופאים לזכויות אדם';
aSTyx3['רות"ם'] = 'רפואה ותזונה מונעת';
aSTyx3['רו"מ'] = 'רפואה ומשפט';
aSTyx3['רו"מ'] = 'רופא מומחה';
aSTyx3['רב"ע'] = 'ריפוי בעיסוק';
aSTyx3['קש"ר'] = 'קשב וריכוז';
aSTyx3['קר"ן'] = 'קטועי רגליים נלחמים';
aSTyx3['קפ"ח'] = 'קופת חולים';
aSTyx3['ק"ח'] = 'קופת חולים';
aSTyx3['קוצ"נ'] = 'קוצר נשימה';
aSTyx3['קו"ח'] = 'קופת חולים';
aSTyx3['צר"פ'] = 'ציוד רפואי';
aSTyx3['צל"ח'] = 'צילום חזה';
aSTyx3['צט"מ'] = 'צוות טיפול במגיפות';
aSTyx3['צח"מ'] = 'צריכת חמצן';
aSTyx3['צב"ס'] = 'צילום בטן סקירה';
aSTyx3['צב"ל'] = 'צניחת בסיס לשון';
aSTyx3['צ.ב.י'] = 'צרכני בריאות ישראל';
aSTyx3["פרופ'"] = 'פרופסור';
aSTyx3['פמ"ר'] = 'פולימיאלגיה ראומטיקה';
aSTyx3['פַּלְרָ"ן'] = 'פלוגת רפואה נפתית';
aSTyx3['פח"מ'] = 'פעימות חדריות מוקדמות';
aSTyx3["פחמ'"] = 'פחממות';
aSTyx3['פוע"ה'] = 'פוריות ורפואה עפ"י ההלכה';
aSTyx3['פו"ט'] = 'פה וטלפיים';
aSTyx3['ע"ש'] = 'עמוד שדרה';
aSTyx3['עֵרָ"ן'] = 'עזרה ראשונה נפשית';
aSTyx3['ע"ר'] = 'עזרה ראשונה';
aSTyx3['עֹפֶ"ר'] = 'עזרה לפגועי ראש';
aSTyx3['עמש"צ'] = 'עמוד שדרה צווארי';
aSTyx3['עמ"ש'] = 'עמוד שדרה';
aSTyx3['עמ"י'] = 'עמותת מושתלים ישראלית';
aSTyx3['עמ"י']= 'עזר מציוֹן';
aSTyx3['על"ה'] = 'עמותה לחולי המופיליה';
aSTyx3['על"ה'] = 'עזר לילד הנכה';
aSTyx3['עינב"ר'] = 'עמותה ישראלית לנפגעים במחלות רימטיות';
aSTyx3['סר"ר'] = 'סרקומה של רקמה רכה';
aSTyx3['ספה"ד'] = 'ספירת הדם';
aSTyx3['ספ"ד'] = 'ספירת דם';
aSTyx3['סילגו"ז'] = 'סילוק גוף זר';
aSTyx3['סח"כ'] = 'ספירת חיידקים כללית';
aSTyx3['סח"ח'] = 'סף חומצת חלב';
aSTyx3['סג"צ'] = 'סימני גירוי צפקי';
aSTyx3['נפ"ל'] = 'נגד פצעי לחץ';
aSTyx3['נמ"ר'] = 'ניהול מרכזים רפואיים';
aSTyx3['נמ"ר'] = 'ניהול מערכות רפואיות';
aSTyx3['נמ"כ'] = 'נקודות מעוררות כאב';
aSTyx3['נמ"ג'] = 'ניוון מקולרי גילי';
aSTyx3['נָטָ"ן'] = 'ניידת טיפול נמרץ';
aSTyx3['נט"ל'] = 'נפגעי טראומה על רגע לאומי (מרכז לסיוע נפשי)';
aSTyx3['נב"ת'] = 'ניתוח בלוטת התריס';
aSTyx3['משר"פ'] = 'מרכז שירותי רפואה';
aSTyx3['מ.ש.י'] = 'מחלות ניוון שרירים ישראל';
aSTyx3['משח"ש'] = 'משחת שיניים';
aSTyx3['משהב"ר'] = 'משרד הבריאות';
aSTyx3['מַרְתָּ"א'] = 'מרכז רפואי תל אביב';
aSTyx3['מרש"פ'] = 'מחלת הרשתית של פגות';
aSTyx3['מָרָ"שׁ'] = 'מרכז רפואי שב"ס';
aSTyx3['מָרָ"ם'] = 'מרפאת מומחים';
aSTyx3['מָרָ"ם'] = 'מרכז רפואה מיידית';
aSTyx3['מרל"מ'] = 'מרכז רפואי לילה משלים';
aSTyx3['מרב"ע'] = 'מרפאה בעיסוק';
aSTyx3['מַצְרָ"ף'] = 'מרכז ציוד רפואי';
aSTyx3['מע"ש'] = 'מפעל עבודה שיקומי';
aSTyx3['מע"ר'] = 'מגיש עזרה ראשונה';
aSTyx3['מס"ר'] = 'מרכז סימולציה רפואית';
aSTyx3['מנד"ט'] = 'מספר נדרשי טיפול';
aSTyx3['ממ"ע'] = 'מלאנומה ממארת של העור';
aSTyx3['ממ"כ'] = 'מילימטר כספית';
aSTyx3['ממ"ב'] = 'מנהל מערכות בריאות';
aSTyx3['מלר"ם'] = 'מוקד לשירותים רפואיים';
aSTyx3['מלר"ד'] = 'מחלקה לרפואה דחופה';
aSTyx3['מלע"כ'] = 'מספריים לחיתוך עם כפתור';
aSTyx3['מלנ"מ'] = 'משקל לידה נמוך מאוד';
aSTyx3['מל"כ'] = 'מחלת לב כלילית';
aSTyx3['מלב"מ'] = 'מרכז לאומי לבקרת מחלות';
aSTyx3['מלב"י'] = 'מרכז לטיפול בהשמנת יתר';
aSTyx3['מכ"כ'] = 'מחלה של כלי הדם הכליליים';
aSTyx3['מיח"א'] = 'מחנכי ילדים חרשים';
aSTyx3['מדל"ד'] = 'מד לחץ דם';
aSTyx3['מָדָ"א'] = 'מגן דוד אדום';
aSTyx3['מג"נ'] = 'מטבולית גנטית נוירולוגית';
aSTyx3['מָגָ"ל'] = 'מרכז גמילה ליפתא';
aSTyx3['מגד"א'] = 'מגן דוד אדום';
aSTyx3['מב"ת'] = 'מצב בריאות ותזונה';
aSTyx3['מַבָּ"ן'] = 'מרכז בריאות הנפש';
aSTyx3['מא"ש'] = 'מחשבה אוטומטית שלילית';
aSTyx3['לק"ש'] = 'לקות שמיעה';
aSTyx3['לנל"ק'] = 'לידה נרתיקית לאחר קיסרי';
aSTyx3['לה"ב'] = 'למען הפגים בישראל';
aSTyx3['ל"ד'] = 'לחץ דם';
aSTyx3['ל"ב'] = 'להלחם ביחד';
aSTyx3['כלי"ד'] = 'כלי דם';
aSTyx3['כל"ד'] = 'כלי דם';
aSTyx3['כד"ל'] = 'כדוריות דם לבנות';
aSTyx3['כד"א'] = 'כדוריות דם אדומות';
aSTyx3['יָקָ"ר'] = 'יחידת קישור רפואית';
aSTyx3['יע"ל'] = 'יד עזר לחולה';
aSTyx3['י"מ'] = 'יום מחזור';
aSTyx3['יל"צ'] = 'יתר לחץ דם';
aSTyx3['יל"ד'] = 'יתר לחץ דם';
aSTyx3['יו"מ'] = 'יום מחזור';
aSTyx3['יוא"ב'] = 'יום אחרי ביוץ';
aSTyx3['יה"ת'] = 'האיגוד הישראלי לתרפיה ע"י יצירה והבעה';
aSTyx3['יא"ר'] = 'יתר אלדוסטרוניזם ראשוני';
aSTyx3['יא"פ'] = 'יחידה לאשפוז פנימי';
aSTyx3['טר"מ'] = 'טיפול רפואי מיידי';
aSTyx3['טר"א'] = 'טיפול רפואי אישי';
aSTyx3['טפ"ח'] = 'טיפת חלב';
aSTyx3['טנ"צ'] = 'טיפול נמרץ צבאי';
aSTyx3['ט"נ'] = 'טרום ניתוח';
aSTyx3['טמ"ל'] = 'טומוגרפיה ממוחשבת של הלב';
aSTyx3['טמי"ר'] = 'טיפול מעולם ישויות ריפוי';
aSTyx3['טמ"א'] = 'טומוגרפיה ממוחשבת אנגיוגרפית';
aSTyx3['ט"מ'] = 'טומוגרפיה ממוחשבת';
aSTyx3['טוה"ר'] = 'טיפול והדרכה רוקחית';
aSTyx3['טב"א'] = 'טביעת אצבעות';
aSTyx3['ט"א'] = 'טביעות אצבע';
aSTyx3['חשאיב"ס'] = 'חולה שאין בו סכנה';
aSTyx3['ח"צ'] = 'חולי צהבת';
aSTyx3['חפ"צ'] = 'חולי פרקינסון צעירים';
aSTyx3['חע"מ'] = 'תנועת עיניים מהירה';
aSTyx3['ח"ע'] = 'חוסם עורקים';
aSTyx3['חֹסן'] = 'חולי סרטן נלחמים';
aSTyx3['חמ"ק'] = 'חדר מיון קדמי';
aSTyx3['חל"ק'] = 'חיוור לח וקר';
aSTyx3['חל"פ'] = 'חיך לב פנים';
aSTyx3['חל"ב'] = 'חינוך לבריאות';
aSTyx3['חוה"ש'] = 'חוט השדרה';
aSTyx3['ח"ו'] = 'חוסם ורידים';
aSTyx3['ח.ה.'] = 'חוסר הכרה';
aSTyx3['חג"ם'] = 'חינוך גופני מורחב';
aSTyx3['חבב"מ'] = 'חוק ביטוח בריאות ממלכתי';
aSTyx3['חא"מ'] = 'חומצות אמינו מסועפות';
aSTyx3['זא"מ'] = 'זאבת אדמנתית מערכתית';
aSTyx3['ו"א'] = 'ווסת אחרונה';
aSTyx3['הר"ם'] = 'השתלמות לריפוי במוסיקה';
aSTyx3['הר"י'] = 'ההסתדרות הרפואית בישראל';
aSTyx3['הק"ר'] = 'הפרעות קשב וריכוז';
aSTyx3['הק"ו'] = 'החזר קיבה ושט';
aSTyx3['הצל"א'] = 'הצלב האדום';
aSTyx3['הסה"א'] = 'הסהר האדום';
aSTyx3['היל"ה'] = 'הולכים יחד לבריאות האישה';
aSTyx3['הח"ג'] = 'הפריה חוץ גופית';
aSTyx3['דת"ע'] = 'דימום תת עכבישי';
aSTyx3['דת"ד'] = 'דימום תת דוראלי';
aSTyx3['דש"מ'] = 'דלקת שדרה מקשחת';
aSTyx3['דש"ב'] = 'דליפת שתן במאמץ';
aSTyx3['ד"ר'] = 'דוקטור';
aSTyx3['דק"ל'] = 'דיאט קוקה לימון';
aSTyx3['דפ"מ'] = 'דיאטת פחממות מסויימות';
aSTyx3['דפ"מ'] = 'דיאטת פחמימות מיוחדות';
aSTyx3['דפ"ט'] = 'דיפתריה פרטוסיס טטנוס';
aSTyx3['דע"ר'] = 'דלקת עורקי הרקה';
aSTyx3['דע"א'] = 'דלקת עור אטופית';
aSTyx3['דמ"נ'] = 'דלקת מעיים נמקית';
aSTyx3['דמ"י'] = 'דלקת מפרקים של גיל הילדות';
aSTyx3['דמ"א'] = 'דלקת מפרקים אידיופאטית';
aSTyx3['דל"ש'] = 'דל שומן';
aSTyx3['דל"ל'] = 'דיכאון לארח לידה';
aSTyx3['דל"ח'] = 'דלקת לבלב חדה';
aSTyx3['דכ"ל'] = 'דלקת כפורת הלב';
aSTyx3['די.וי.אי'] = 'ארגון רופאי שיניים מתנדבים לישראל';
aSTyx3['דח"א'] = 'דפיברילטור חיצוני אוטומטי';
aSTyx3["דוק'"] = 'דוקטור';
aSTyx3['דג"ש'] = 'דגימת שתן';
aSTyx3['דא"ת'] = 'דלקת אוזן תיכונה';
aSTyx3['גש"ר מאח"ד'] = 'גוף כל רגש מערכת אמונות חברתי דמיון';
aSTyx3['גשג"ש'] = 'גירוד שטיפה גירוד שטיפה';
aSTyx3['ג"ס'] = 'גורמי סיכון';
aSTyx3['גמ"ל'] = 'גמילה מהנקת לילה';
aSTyx3['גב"ץ'] = 'גרעין ברך צידי';
aSTyx3['בתי"ח'] = 'בתי חולים';
aSTyx3['ברכ"ה'] = 'בני ציון רמב"ם וכרמל';
aSTyx3['ברי"מ'] = 'ברית מילה';
aSTyx3['ברה"צ'] = 'בריאות הצבא';
aSTyx3['ברה"ן'] = 'בריאות הנפש';
aSTyx3['במ"מ'] = 'בדיקת מחלות מדבקות';
aSTyx3['בכ"ל'] = 'בדיקה כללית';
aSTyx3['ביקו"ח'] = 'ביקור חולים';
aSTyx3['בימ"ק'] = 'בית מרקחת';
aSTyx3['ביח"ש'] = 'בית חולים שדה';
aSTyx3['בי"ח'] = 'בית חולים';
aSTyx3['ביה"ח'] = 'בית החולים';
aSTyx3['בה"ח'] = 'בית החולים';
aSTyx3['בג"ח'] = 'בדיקת גוף חפוזה';
aSTyx3['בב"ח'] = 'בבית חולים';
aSTyx3['אש"י'] = 'איגוד השיננות הישראלי';
aSTyx3['ארה"מ'] = 'ארגון רופאי המדינה';
aSTyx3['אִילָ"ן'] = 'איגוד ישראלי לילדים נפגעים';
aSTyx3['א.י.ל.י.ם'] = 'האגודה הישראלית לפסיכופיזיולוגיה ישומית ולמשוב ביולוגי';
aSTyx3['איל"ה'] = 'האגוד הישראלית לחקר פוריות';
aSTyx3['אי"ל'] = 'אגודה ישראלית לאפילפסיה';
aSTyx3['איט"ם'] = 'אגודה ישראלית לטיפול מיני';
aSTyx3['אי.וי'] = 'עמותה להורים לילדים לקויי שמיעה';
aSTyx3['איד"ס'] = 'תסמונת כשל חיסוני נרכש (AIDS Acquired Immune Deficiency Syndrome)';
aSTyx3['איג"ה']= 'אגודה ישראלית לגדילה והתפתחות';
aSTyx3['אט"ן'] = 'אמבולנס טיפולי נמרץ';
aSTyx3['א.ט.ל.ס'] = 'העמותה הישראלית למחלות A.L.S';
aSTyx3['אט"ה'] = 'אירוע טוקסיקולוגי המוני';
aSTyx3['אח"א'] = 'ארגון חרשים אילמים';
aSTyx3['אה"ש']= 'ארגמנת הנוך-שנלין';
aSTyx3['אד"פ'] = 'אדנוזין די פוספט';
aSTyx3['אב"נ'] = 'אנדופתלמיטיס בתר ניתוחי';
aSTyx3['אבח"ר'] = 'אירוע ביולוגי חריג';
aSTyx3['אא"ק'] = 'אירוע איסכמי קל';
aSTyx3['אא"ט'] = 'אלפא 1 אנטי טריפסין';
aSTyx3['אא"ח'] = 'אירוע איסכמי חולף';
aSTyx3['אא"ג'] = 'אף אוזן גרון';
aSTyx3['אָקִי"ם'] = 'אגודה לקימום ילדים מפגרים';
aSTyx3['אפ"י'] = 'אספרגר ישראל';
aSTyx3['אס"ף'] = 'אגודת חולי סי. אפ. אס ופיברומיאלגיה';
aSTyx3['אס"ל'] = 'אי ספיקת לב';
aSTyx3['אס"י'] = 'אנשי הספקטרום (האוטיסטי) ישראל';
aSTyx3['אסט"י'] = 'ארגון סינדרום טוראט בישראל';
aSTyx3['אסה"ר'] = 'אסף הרופא';
aSTyx3['אס"ה'] = 'אסף הרופא';
aSTyx3['א"ס'] = 'אי ספיקה';
aSTyx3['אמ"ר'] = 'אביזרים ומכשירים רפואיים';
aSTyx3['אָמָ"ן'] = 'אגודה למיאלומה נפוצה';
aSTyx3['אמ"ג'] = 'אינדקס מסת (ה)גוף';
aSTyx3['אמב"י'] = 'ארגון מגמגמים בישראל';
aSTyx3['אמ"ב'] = 'אנמיה מחוסר ברזל';
aSTyx3['אלי"ע'] = 'האגודה לקידום ילדים עיוורים';
aSTyx3['אָלִי"ן'] = 'אגודה לעזרת ילדים נכים';
aSTyx3['אָלוּ"ט'] = 'אגודה לאומית לילדים אוטיסטים';
aSTyx3['אל"ה'] = 'מרכז לסיוע נפשי חברתי ליוצאי הולנד וקרוביהם';
aSTyx3['אית"ל'] = 'אירגון תמיכה לנכה';
aSTyx3['איס"ק'] = 'אי ספיקה';
aSTyx3['תש"צ'] = 'תכנית שיכון ציבורי';
aSTyx3['תרש"צ'] = 'תכנית רישום שיכונים ציבוריים';
aSTyx3['תָרָ"ם'] = 'תכנון רגיש למים';
aSTyx3['תר"מ'] = 'תוכנית רובע מוסכמת';
aSTyx3['תצ"ר'] = 'תכנית לצרכי רישום';
aSTyx3['תמ"מ'] = 'תכנית מתאר מחוזית';
aSTyx3['תמ"א'] = 'תכנית מתאר ארצית';
aSTyx3['תו"ח'] = 'תכנון ובנייה ועדות מחוזיות';
aSTyx3['תה"ט'] = 'תחת הטיח';
aSTyx3['תַּבָּ"ע'] = 'תכנית בנין עיר';
aSTyx3['ש"ש'] = 'שטח שירות';
aSTyx3['שצ"פ'] = 'שטח ציבורי פתוח';
aSTyx3['שפ"פ'] = 'שטח פרטי פתוח';
aSTyx3['שב"צ'] = 'שטח לבנייני ציבור';
aSTyx3['רח"ק'] = 'רצפה חלקי קרקע';
aSTyx3['ק"ת'] = 'קו תחתון';
aSTyx3['ק"ק'] = 'קומת קרקע';
aSTyx3['ק"ע'] = 'קו עליון';
aSTyx3['ק"ב'] = 'קיר בטון';
aSTyx3['צָמָ"ן'] = 'ציוד מכני נייד';
aSTyx3['צמ"כ'] = 'ציוד מכני כבד';
aSTyx3['צמ"ה'] = 'ציוד מכני הנדסי';
aSTyx3['צמ"ג'] = 'צינור מי גשם';
aSTyx3['פ"ר'] = 'פני ריצוף';
aSTyx3['פל"ח'] = 'פעילות לא חקלאית';
aSTyx3['פ"ב'] = 'פני בטון';
aSTyx3['ע"ת'] = 'עמוד תאורה';
aSTyx3['ע"ח'] = 'עמוד חשמל';
aSTyx3['עה"ט'] = 'על הטיח';
aSTyx3['ע"ג'] = 'עליית גג';
aSTyx3['נדל"ן'] = 'נִכְסֵי דְּלָא נָיְדֵי';
aSTyx3['מש"ח'] = 'מס שבח';
aSTyx3['משב"ש'] = 'משרד הבינוי והשיכון';
aSTyx3['מע"ר'] = 'מרכז עסקים ראשי';
aSTyx3['מָמָ"ק'] = 'מרחב מוגן קומתי';
aSTyx3['ממ"מ'] = 'מרחב מוגן מוסדי';
aSTyx3['מָמָ"ד'] = 'מרחב מוגן דירתי';
aSTyx3['מבא"ת'] = 'מבנה אחיד לתכנית';
aSTyx3['כ"א'] = 'כיווני אוויר';
aSTyx3['יח"ד'] = 'יחידת דיור';
aSTyx3['זכ"ב'] = 'זכויות בנייה';
aSTyx3['וע"ב'] = 'וועדת בניין ערים';
aSTyx3['ול"ל'] = 'הוועדה לבניה למגורים';
aSTyx3['וָדָ"ל'] = 'ועדת דיור לאומית';
aSTyx3['הולק"ח'] = 'הוועדה לשמירה על קרקע חקלאית';
aSTyx3['ג"ר'] = 'גובה רצפה';
aSTyx3['בב"נ'] = 'בקשת בנייה';
aSTyx3['א.ת.'] = 'איזור תעשייה';
aSTyx3['א"ש'] = 'אבן שפה';
aSTyx3['אדר'] = 'אדריכל';
aSTyx3['דרי"ש'] = 'דרישת שלום';
aSTyx3['ד"ל'] = 'די למבין';
aSTyx3['ד"ל'] = 'די לחכימא';
aSTyx3['דו"ר'] = 'דחילו ורחימו';
aSTyx3['דו"ה'] = 'די והותר';
aSTyx3['ד"ו'] = 'דבר והיפוכו';
aSTyx3['ג"ש'] = 'גזירה שווה';
aSTyx3['גז"ש'] = 'גזרה שווה';
aSTyx3['גז"ל'] = 'גם זו לטובה';
aSTyx3['גומ"ג'] = 'גוג ומגוג';
aSTyx3['בתומ"ר'] = 'בתודה מראש';
aSTyx3['בשפו"א'] = 'בשום פנים ואופן';
aSTyx3['בשטומ"צ'] = 'בשעה טובה ומוצלחת';
 aSTyx3['בשו"א'] = 'בשום אופן';
aSTyx3['בק"א'] = 'בקנה אחד';
aSTyx3['ב"צ'] = 'בן ציון';
aSTyx3['בע"כ'] = 'בעל כורחו';
aSTyx3['בסו"מ'] = 'בן סורר ומורה';
aSTyx3['ב"נ'] = 'בלי נדר';
aSTyx3['בל"ש'] = 'בלב שלם';
aSTyx3['בלעה"ר'] = 'בלי העין הרע';
aSTyx3['בלס"נ'] = 'בלשון סגי נהור';
aSTyx3['בלנ"ד'] = 'בלי נדר';
aSTyx3['בל"נ'] = 'בלי נדר';
aSTyx3['בכלש"ב'] = 'בכל לשון של בקשה';
aSTyx3['ביה"ש'] = 'בין השיטין';
aSTyx3['בדר"כ'] = 'בדרך כלל';
aSTyx3['א"ש'] = 'אילה שלוחה';
aSTyx3['איו"ב'] = 'אשרי יושבי ביתך';
aSTyx3['איה"ש'] = 'אם ירצה השם';
aSTyx3['אי"ה'] = 'אם ירצה השם';
aSTyx3['אח"ו'] = 'אם חס ושלום';
aSTyx3['א"ח'] = 'אורח חיים';
aSTyx3['או"ת'] = 'אורים ותומים';
aSTyx3['אוי"צ'] = 'אמת ויציב';
aSTyx3['אדכא"ח'] = 'אין דבר כזה ארוחת חינם';
aSTyx3['אדהב"ה'] = 'אין דבר העומד בפני הרצון';
aSTyx3['אא"ט'] = 'אם אינני טועה';
aSTyx3['אא"ב'] = 'אבות אכלו בוסר';
aSTyx3['א"א'] = 'אגב אורחא';
aSTyx3['לענ"ד'] = 'לפי עניות דעתי';
aSTyx3['מד"א'] = 'מגן דוד אדום';
aSTyx3['מזל"ט'] = 'מטוס זעיר ללא טייס';
aSTyx3['מפכ"ל'] = 'מפקח כללי (העומד בראש המשטרה)';
aSTyx3['מזכ"ל'] = 'מזכיר כללי';
aSTyx3['נט"ן'] = 'ניידת טיפול נמרץ';
aSTyx3['מתנ"ס'] = 'מרכז תרבות נוער ספורט';
aSTyx3['ניל"י'] = 'נצח ישראל לא ישקר';
aSTyx3['סה"כ'] = 'סך הכל';
aSTyx3['עו"ד'] = 'עורך דין';
aSTyx3['פלמ"ח'] = 'פלוגות מחץ';
aSTyx3['קופ"ח'] = 'קופת חולים';
aSTyx3['קמ"ש'] = 'קילומטר (ל)שעה';
aSTyx3['קק"ל'] = 'קרן קיימת לישראל';
aSTyx3['ר"ג'] = 'רמת גן';
aSTyx3['רוה"מ'] = 'ראש הממשלה';
aSTyx3['ראש מטה כללי'] = 'רמטכ"ל';
aSTyx3['שב"כ']= 'שרות ביטחון כללי';
aSTyx3['שנה"ל'] = 'שנת הלימודים';
aSTyx3['ת"א'] = 'תל אביב';
aSTyx3['א.א.ג'] = 'אף אוזן גרון';
aSTyx3['או"ם'] = 'אומות מאוחדות';
aSTyx3['אחה"צ'] = 'אחרי הצהריים';
aSTyx3['איל"ן'] = 'איגוד ישראלי לילדים נפגעים';
aSTyx3['אש"ל'] = 'אכילה שתיה לינה';
aSTyx3['א"י'] = 'ארץ ישראל';
aSTyx3['ב"ב'] = 'בני ברק';
aSTyx3['בד"כ'] = 'בדרך כלל';
aSTyx3['ביה"מ'] = 'בית המשפט';
aSTyx3['בי"ח'] = 'בית חולים';
aSTyx3['בי"ס'] = 'בית ספר';
aSTyx3['בנ"ע'] = 'בני עקיבא';
aSTyx3['בע"ח'] = 'בעלי חיים';
aSTyx3['בשעטו"מ'] = 'בשעה טובה ומוצלחת';
aSTyx3['דו"ח'] = 'דין וחשבון';
aSTyx3['חו"ל'] = 'חוץ לארץ';
aSTyx3['ח"כ'] = 'חבר כנסת';
aSTyx3['חנ"ג'] = 'חינוך גופני';
aSTyx3['יו"ר'] = 'יושב ראש';
aSTyx3['כה"כ'] = 'כל הכבוד';
aSTyx3['לפנה"ס'] = 'לפני הספירה';
aSTyx3['תושב"ע'] = 'תורה שבעל פה';
aSTyx3['עשי"ת'] = 'עשרת ימי תשובה';
aSTyx3['עיה"ק'] = 'עיר הקודש';
aSTyx3['סת"ם'] = 'ספרים תפילין ומזוזות';
aSTyx3['נגה"פ'] = 'נס גדול היה פה';
aSTyx3['מוצ"ש'] = 'מוצאי שבת';
aSTyx3['כשל"פ'] = 'כשר לפסח';
aSTyx3['יו"ט'] = 'יום טוב';
aSTyx3['יוה"כ'] = 'יום הכיפורים';
aSTyx3['חוה"מ'] = 'חול מועד';
aSTyx3['זצ"ל'] = ' זכר צדיק לברכה';
aSTyx3['ז"ל'] = 'זכרו לברכה';
aSTyx3['גמח"ט'] = 'גמר חתימה טובה';
aSTyx3['גמ"ח'] = 'גמילות חסדים';
aSTyx3['בע"ה'] = 'בעזרת השם';
aSTyx3['ביהכ"נ'] = 'בית הכנסת';
aSTyx3['אי"ה'] = 'אם ירצה השם';
aSTyx3['אדמו"ר'] = 'אדוננו מורנו ורבנו';
aSTyx3['בע"מ'] = 'בערבון מוגבל';
aSTyx3['ארה"ב'] = 'ארצות הברית';
aSTyx3['ארה"ב'] = 'ארצות הברית';


function findAndReplaceDOMText(ldTmG, find) {
  if (RyuaR[find] != undefined) {
	old = find;
	
    var repalceWith = RyuaR[find];
    var str = ldTmG.innerHTML;
    find = new RegExp(find, "gi");
    var newElm = str.replace(find, '<abbr class="rashe" tabindex="0" role="dialog" aria-label=" ' + repalceWith + ' " >$&</abbr>');
    ldTmG.innerHTML = newElm;
  }
}
andiUA.findAndReplaceDOMText2 = function(xoLox) {
setTimeout(function(){
  var lang = UA1("html").getAttr("vFaKz");
  var arrWords = [];
  if (UA("#rasheStyle").length == 0) {
    UA1("head").appendHtml('<style id="rasheStyle">.rashe:hover:after, .rashe:focus:after {  top: ' + localStorage.getItem("uoVsI") * 2.2 + "px;}</style>");
  }
  if (lang == "he") {
	  
	  
	  
	
	
	
    for (var ANDIi = 0; ANDIi < xoLox.length; ANDIi++) {
      var FtTIP = xoLox[ANDIi];
      if (FtTIP.tagName !== "BODY") {
        if (FtTIP.querySelectorAll("script").length == 0) {
			if (FtTIP.innerText !== undefined && FtTIP.innerText.indexOf("\u05f4") > -1) {
				findAndReplaceDOMText(xoLox[ANDIi], "\u05f4", '"');
			}
		  
		  
			if (FtTIP.innerText != undefined && ( FtTIP.innerText.indexOf('"') > -1) ) {
				
				arrWords = FtTIP.innerText.split(" ");
				for (var ANDIa = 0; ANDIa < arrWords.length; ANDIa++) {
				  if (arrWords[ANDIa].charAt(0) !== "'" && arrWords[ANDIa].charAt(0) !== '"' && arrWords[ANDIa].charAt(arrWords[ANDIa].length - 1) !== '"' && !/\d/.test(arrWords[ANDIa]) && arrWords[ANDIa].indexOf("-") == -1) {
					findAndReplaceDOMText(xoLox[ANDIi], arrWords[ANDIa]);
				  }
				}
				if (ANDIi == xoLox.length - 1) {
				  if (UA1("#sreachForAcromanet") !== null) {
					UA1("#sreachForAcromanet").zOhhK();
					UA1("#sreachForAcromanetbg").zOhhK();
				  }
				}
			} else if(FtTIP.innerText.indexOf('”') > -1){
				arrWords = FtTIP.innerText.split(" ");
				for (var ANDIa = 0; ANDIa < arrWords.length; ANDIa++) {
					var old = arrWords[ANDIa];
					find = arrWords[ANDIa].replace('”','"');
					if(RyuaR[find]){
						var repalceWith = RyuaR[find];						
						var str = FtTIP.innerHTML;
						find2 = new RegExp(old, "gi");
						var newElm = str.replace(find2, '<abbr class="rashe" tabindex="0" role="dialog" aria-label=" ' + repalceWith + ' " >$&</abbr>');
						FtTIP.innerHTML = newElm;
					}
					//findAndReplaceDOMText(xoLox[ANDIi], arrWords[ANDIa]);
				  
				}

			}
        }
      }
    }
	
	
	
	
	
  }
  if (lang == "en") {
    for (var ANDIi = 0; ANDIi < xoLox.length; ANDIi++) {
      var FtTIP = xoLox[ANDIi];
      if (!FtTIP.tagName == "BODY" && FtTIP.getAttr("andiupper") == "true") {
        for (var ANDIa = 0; ANDIa < RyuaR.length; ANDIa++) {
          findAndReplaceDOMText(xoLox[ANDIi], RyuaR[ANDIa], UPJFr[ANDIa]);
        }
      }
    }
  }
},1000);
};
andiUA.ANDIstopGif = function() {
  
  (function() {
    [].slice.apply(document.images).filter(is_gif_image).map(freeze_gif);
    function is_gif_image(ANDIi) {
      return /^(?!data:).*\.gif/i.test(ANDIi.src);
    }
    function freeze_gif(ANDIi) {
      var ANDIc = document.createElement("canvas");
      var ANDIw = ANDIc.width = ANDIi.width;
      var ANDIh = ANDIc.height = ANDIi.height;
      ANDIc.getContext("2d").drawImage(ANDIi, 0, 0, ANDIw, ANDIh);
      try {
        ANDIi.src = ANDIc.toDataURL("image/gif");
      } catch (e) {
        for (var ANDIj = 0, ANDIa; ANDIa = ANDIi.attributes[ANDIj]; ANDIj++) {
          ANDIc.setAttribute(ANDIa.name, ANDIa.value);
        }
        ANDIi.parentNode.replaceChild(ANDIc, ANDIi);
      }
    }
  })();
};
andiUA.videoEFinder = function() {
 
  var arrOfArea = andiUA.findPassebleContainer(["video", "clip", "play", "audio"]);
  arrOfArea.forEach(function(area, i) {
    var listOfClassForvideo = '[class*="play"],[id*="play"],[class*="clip"],[id*="clip"],[class*="video"],[id*="video"]';
    var listOfClassForvideo = area.querySelectorAll(listOfClassForvideo);
    listOfClassForvideo.forEach(function(VideoClip, i) {
      setTimeout(function() {
        VideoClip.taddClass("VideoFounde");
        UA1(".VideoFounde").style.display = "none";
        UA1(".VideoFounde").style.opacity = "0";
        UA1(".VideoFounde").style.visibility = "hidden";
      }, 1000);
    });
  });
  var vids = UA("video");
  vids.forEach(function(areaVid) {
    areaVid.setAttribute("VideoFounde", "true");
    setTimeout(function() {
      areaVid.pause();
    }, 1000);
  });
};
andiUA.VideoFinderPlay = function() {
 
  var arrOfArea = andiUA.findPassebleContainer(["video", "clip", "play", "audio"]);
  arrOfArea.forEach(function(area, i) {
    var listOfClassForvideo = '[class*="play"],[id*="play"],[class*="clip"],[id*="clip"],[class*="video"],[id*="video"]';
    var listOfClassForvideo = area.querySelectorAll(listOfClassForvideo);
    listOfClassForvideo.forEach(function(VideoClip, i) {
      setTimeout(function() {
        VideoClip.taddClass("VideoFounde");
        UA1(".VideoFounde").style.display = "block";
        UA1(".VideoFounde").style.opacity = "1";
        UA1(".VideoFounde").style.visibility = "visible";
      }, 1000);
    });
  });
  var vids = UA("video");
  vids.forEach(function(areaVid) {
    areaVid.setAttribute("VideoFounde", "true");
    setTimeout(function() {
      areaVid.play();
    }, 1000);
  });
};
andiUA.PhVFOReviledHiddingInfo = function() {
  
  andiUA.TUAsetActiveReviledHiddingInfo("[aria-label],[title],[alt]");
  var vdKGN = '<style id="andiReviledHiddingInfoStyle">[LsVkf]{position:relative;} [LsVkf]:after {content: " ( " attr(LsVkf)"  " attr(PzGdR)"   " attr(kJpql) " )";}</style>';
  if (UA1("#andiReviledHiddingInfoStyle") === null) {
    UA1("head").appendHtml(vdKGN);
  }
  andiUA.createStorageItem("TUAreviledHiddingInfo", "yes");
};
andiUA.TUAsetActiveReviledHiddingInfo = function(RXwGF, newElems) {
  
  var newElems = newElems || "";
  if (newElems == "") {
    RXwGF = "[aria-label].andiruns,[title].andiruns,[alt].andiruns";
  }
  UA(RXwGF).forEach(function(VnIxP, i) {
    if (!VnIxP.thasClass("andiruns")) {
      var LsVkf = VnIxP.getAttribute("aria-label");
      if (LsVkf == null || LsVkf == undefined) {
        LsVkf = "";
      }
      var PzGdR = VnIxP.getAttribute("title");
      if (PzGdR == null || PzGdR == undefined) {
        PzGdR = "";
      }
      var kJpql = VnIxP.getAttribute("alt");
      if (kJpql == null || kJpql == undefined) {
        kJpql = "";
      }
      VnIxP.setAttribute("LsVkf", LsVkf);
      VnIxP.setAttribute("PzGdR", PzGdR);
      VnIxP.setAttribute("kJpql", kJpql);
      VnIxP.tremoveAttribute("aria-label");
      VnIxP.tremoveAttribute("title");
      VnIxP.tremoveAttribute("alt");
    }
  });
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr246);
};
andiUA.TUAremoveReviledHiddingInfo = function() {
 
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr247);
  andiUA.TUAsetRemoveReviledHiddingInfo("[aria-label],[title],[alt]");
  if (UA1("#andiReviledHiddingInfoStyle") !== null) {
    UA1("#andiReviledHiddingInfoStyle").zOhhK();
  }
  andiUA.removeStorageItem("TUAreviledHiddingInfo");
};
andiUA.TUAsetRemoveReviledHiddingInfo = function(RXwGF) {
 
  UA(RXwGF).forEach(function(VnIxP, i) {
    VnIxP.tremoveAttribute("andiActiveReviledHiddingInfo");
    var LsVkf = VnIxP.getAttribute("LsVkf");
    var PzGdR = VnIxP.getAttribute("PzGdR");
    var kJpql = VnIxP.getAttribute("kJpql");
    VnIxP.setAttribute("aria-label", LsVkf);
    VnIxP.setAttribute("title", PzGdR);
    VnIxP.setAttribute("alt", kJpql);
    VnIxP.tremoveAttribute("LsVkf");
    VnIxP.tremoveAttribute("PzGdR");
    VnIxP.tremoveAttribute("kJpql");
  });
};
andiUA.createVikiSearch = function() {
 
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr248);
  UA1("head").appendHtml('<style id="WXgsK">#GRwhC{ direction:' + UA1("html").getAttr("DOwbI") + ";}</style>");
  UA1("body").appendHtml('<div id="GRwhC"><div id="sAnbY"><div class="yukgZ" role="button" aria-label="' + andiUA.KNTQg.bbb380 + '" tabindex="0">  X  </div><h2>' + andiUA.KNTQg.UAtdr102 + '</h2></div><div id="iCVuF"><select aria-label="' + andiUA.KNTQg.bbb381 + '" KvHuq="1" id="link_lang1" name="LKsWt" class="LKsWt" ><option value="">\u05d1\u05d7\u05e8 \u05e9\u05e4\u05d4</option><option value="en">English</option><option value="ar">\u0639\u0631\u0628\u064a\u0647</option><option value="it">Italian</option><option value="es">Spanish</option><option value="pl">Polish</option><option value="ru">\u0440\u0443\u0441\u0441\u043a\u0438\u0439</option><option value="sv">Swedish</option><option value="zh">Chinese</option><option value="he">\u05e2\u05d1\u05e8\u05d9\u05ea</option><option value="de">Deutsche</option><option value="fr">fran\u00e7ais</option><option value="ja">Japanese</option></select><input aria-label="' + 
  andiUA.KNTQg.UAtdr103 + '" type="text" id="SLDoH" placeholder="' + andiUA.KNTQg.UAtdr103 + '"/><div id="hayOK" aria-label="' + andiUA.KNTQg.UAtdr196 + '" tabindex="0" role="button"><img alt="" src="' + andiUA.KpAEX + '/images/sreach.png" elementnumber="78"></div><br/></div><div id="aWgWO"></div></div>');
  var thisLang = UA1("html").getAttribute("vFaKz");
  UA("#GRwhC,#GRwhC *").forEach(function(el, i) {
    el.taddClass("andimenucode");
  });
	if (window.addEventListener) {
		window.addEventListener("message", andiListener);
	} else {
		window.attachEvent("onmessage", andiListener);
	}
	function andiListener(event) {
		var param = '';
		var message = event.data;
		if(message == undefined){
			message = '';
		}
		if(message.indexOf('queryResults:') > -1){
			param = message.replace('queryResults:','');
			message = 'queryResults';
		}
		switch (message) {
			
			case 'queryResults': 
				document.querySelector('#andiifuserlogin3').contentWindow.postMessage('reloadWindow', "*");
				readyToSendData = false;
				var x = param;
				y = x.split('{"ns":0,');
				for(var i = 0; i < y.length; i++){
				   y[i] = y[i].split(',"');
				};
				andizxc("#aWgWO").html('<div id="KJMJHvikiResultsCloseBtn"><div aria-label="' + andiUA.KNTQg.UAtdr2188 + '" role="button" tabindex="0" id="aWgWOCloseBtn"> X </div></div>');
				andiUA.nAtDr(andiUA.KNTQg.UAtdr106);
				var queryResults = y;
				
				if (param.indexOf('search":[]') > -1) {
					andizxc("#aWgWO").html('<div id="KJMJHvikiResultsCloseBtn"><div aria-label="' + andiUA.KNTQg.UAtdr2188 + '" role="button" tabindex="0" id="aWgWOCloseBtn"> X </div></div>');andizxc("#aWgWO").append(andiUA.KNTQg.UAtdr109 + ". " );
				} else {
					if (queryResults.length == 2) {
						andizxc("#aWgWO").html('<div id="KJMJHvikiResultsCloseBtn"><div aria-label="' + andiUA.KNTQg.UAtdr2188 + '" role="button" tabindex="0" id="aWgWOCloseBtn"> X </div></div>').append("<h3>" + x.query.search[0].title + "</h3><p>" + queryResults[0][4].replace('snippet":"','') + '</p><a target="_blank" href="//' + TUAselectLang + '.wikipedia.org/" style="display:block;">' + andiUA.KNTQg.UAtdr108 + "</a>");
					} else {   
						if (queryResults.length > 2) {
							var allDataLength = queryResults.length > 2 ? 3 : queryResults.length;
							for (var i = 1; i < allDataLength; i++) {
								if (queryResults[2][i] != undefined) { 
									andizxc("#aWgWO").append('<div style="display:block;"><div id="aWgWOImgWrap"><img src="https://user-a.co.il/images/Wikipedia.png"/></div><div id="aWgWOTextWrap"><h3>' + queryResults[i][0].replace('title":"','').replaceAll('"','') + '</h3><p>' + queryResults[i][4].replace('snippet":"','').replaceAll('"','') + '"</p><div class="companyName"></div></div></div><hr/>');
								}
							}
							andizxc("#aWgWO").append('<hr/><a href="https://wikipedia.org" target="_blank">' + andiUA.KNTQg.UAtdr2187 + "</a>");
							
						}
					}    
				}
			break;
			
			
			
			
		}
		if (window.addEventListener) {
			window.addEventListener("message", andiListener);
		} else {
			window.attachEvent("onmessage", andiListener);
		}
	}
			
			
  var elmOption = UA1("#iCVuF option[value=" + thisLang + "]");
  if (elmOption) {
    elmOption.setAttribute("selected", "selected");
  }
	UA1(".yukgZ").focus();
	var readyToSendData = false;
	var readyToSend = function(){
		readyToSendData = true;
	}
  UA1(".yukgZ").addEventListener("click", function() {
    UA1("#TUAwikipedia").tremoveClass("xJGcA");
    UA1("#WXgsK").zOhhK();
    andiUA.removeStorageItem("TUAwikipedia");
    UA1("#GRwhC").zOhhK();
    andiUA.TUAsrMsg(andiUA.KNTQg.bbb379);
    andiUA.dAmvd();
  });
  UA1("#SLDoH").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      UA1("#hayOK").click();
    }
  });
  eventOn("click", "#aWgWOCloseBtn", function() {
    UA1("#aWgWO").innerHTML = "";
  });
  eventOn("keydown", "#aWgWOCloseBtn", function(e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      UA1("#aWgWO").innerHTML = "";
    }
  });
  UA1("#hayOK").addEventListener("click", function() {
    andizxc("#aWgWO").html("");
    var TUAselectLang = andizxc("#link_lang1").val();
    var zqaybLang = andizxc("#SLDoH").val();
	var kJgGy;
    if (zqaybLang.trim() !== "") {
      setTimeout(function() {
        andizxc("#aWgWO").html("").html('<div id="vikiLoader"><img src="' + andiUA.KpAEX + '/images/load2.gif" style="width:35px;height:35px;"/>' + andiUA.KNTQg.UAtdr104 + "...</div>");
      }, 50);
      andiUA.nAtDr(andiUA.KNTQg.UAtdr104 + " ...");
		var readyToSendData = false;
		window.readyToSend = function(){
			readyToSendData = true;
		}
		if(UA1('#andiifuserlogin3')){
			kJgGy = 'andiifuserlogin3';
			readyToSendData = true;
		} else {	
			kJgGy = 'andiifuserlogin3';
			andizxc('body').append('<iframe tabindex="-1" onload="readyToSend();" aria-hidden="true" scrolling="no" style="display:none;" id="andiifuserlogin3" src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"></iframe>');
		} 
		message =  TUAselectLang + "*********" + zqaybLang ;
		
		var isReadyToSendData = setInterval(function() {
			 if(readyToSendData){
				
				clearInterval(isReadyToSendData);
				var gHVnG = document.getElementById(kJgGy);
				gHVnG.contentWindow.postMessage('vikipadia:'+message, "*");
			 }
		}, 500);
    } else {
      andizxc("#aWgWO").html("").html('<div style="border:1px solid #0288D1;" id="vikiLoader" role="alert">' + andiUA.KNTQg.UAtdr296 + "</div>");
    }
  });
  UA1("#SLDoH").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      this.click();
    }
  });
};
andiUA.TUAhighLightlink = function() {
 
  var JhgsJCookie = localStorage.getItem("andihighLightlink");
  if (JhgsJCookie == "yes") {
    UA1("#TUAandihighLightlink").click();
  }
};
andiUA.gdJed = function() {
 
  var iArRP = andiUA.KNTQg;
  var vdKGN = '<style id="TUAhighLightlink">a *:not(.andimenucode), a:not(.andimenucode),[role="link"]:not(.andimenucode),[role="link"] *:not(.andimenucode) {text-decoration: underline !important;}</style>';
  if (UA1("#TUAhighLightlink") == null) {
    UA1("head").appendHtml(vdKGN);
  }
  andiUA.createStorageItem("andihighLightlink", "yes");
};
andiUA.wGidZ = function() {
 
  (function() {
    UA1("#TUAhighLightlink").zOhhK();
    andiUA.removeStorageItem("andihighLightlink");
  })();
};
andiUA.TUAdimmAndhighlightArea = function() {
  
  UA1("body").appendHtml('<style class="wrapfocusonareaStyle">.wrapfocusonarea{}\t\t\t.focusonarea{position:fixed;z-index:9999999999999999; background-color:rgba(0,0,0,0.75)}\t\t\t.focusonareafocus{position:fixed;z-index:9999999999999999;display:none; background-color:transparent;width:250px;top:-250px;left:-250px;height:250px;-webkit-box-shadow: 0px 0px 0px 9999px rgba(0,0,0,0.75);-moz-box-shadow: 0px 0px 0px 9999px rgba(0,0,0,0.75);box-shadow: 0px 0px 0px 9999px rgba(0,0,0,0.75);}\t\t\t.focusonareatop{width:100%;top:0;left:0;height:0;}\t\t\t.focusonareabottom{width:100%;bottom:0;left:0;height:0;}\t\t\t.focusonarealeft{width:0;left:0;height:200px;}\t\t\t.focusonarearight{width:0;right:0;height:200px;}\t\t\t</style>\t\t\t<div class="wrapfocusonarea">\t\t\t\t<div class="focusonarea focusonareafocus"></div>\t\t\t\t<div class="focusonarea focusonareatop"></div>\t\t\t\t<div class="focusonarea focusonareabottom"></div>\t\t\t\t<div class="focusonarea focusonarealeft"></div>\t\t\t\t<div class="focusonarea focusonarearight"></div>\t\t\t</div>');
  UA("[data-andiallelmwithtext],img").forEach(function(el, i) {
    el.addAttr({"tabindex":"0"});
  });
  var winW = UA1("body").clientWidth;
  var winH = UA1("body").clientHeight;
  document.addEventListener("mousemove", function(mouseEvent, winW, winH) {
    if (UA1("#TUAFocusAreaBtn").thasClass("vKDQY")) {
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      UA1(".focusonareatop").addCss({"display":"block"});
      UA1(".focusonareabottom").addCss({"display":"block"});
      UA1(".focusonarealeft").addCss({"display":"block"});
      UA1(".focusonarearight").addCss({"display":"block"});
      UA1(".focusonareafocus").addCss({"display":"none"});
      var xpos;
      var ypos;
      if (mouseEvent) {
        xpos = mouseEvent.screenX;
        ypos = mouseEvent.screenY;
      } else {
        xpos = window.event.screenX;
        ypos = window.event.screenY;
      }
      var hT = ypos - 200 <= 1 ? 0 : ypos - 200;
      var hB = winH - ypos <= 1 ? 0 : ypos - 200 <= 1 ? winH - 200 : winH - ypos;
      UA1(".focusonareatop").addCss({"height":hT + "px"});
      UA1(".focusonareabottom").addCss({"height":hB + "px"});
      var wL = xpos - 200 <= 1 ? 0 : xpos - 200;
      var wR = winW - (xpos - 200) <= 15 ? 0 : winW - xpos <= 200 ? 0 : winW - xpos - 200;
      UA1(".focusonarealeft").addCss({"width":wL + "px", "top":hT + "px"});
      UA1(".focusonarearight").addCss({"width":wR + "px", "top":hT + "px"});
    }
  });
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 9 && UA1("#TUAFocusAreaBtn").thasClass("vKDQY")) {
      var that = this;
      setTimeout(function() {
        UA1(".focusonareatop").addCss({"display":"none"});
        UA1(".focusonareabottom").addCss({"display":"none"});
        UA1(".focusonarealeft").addCss({"display":"none"});
        UA1(".focusonarearight").addCss({"display":"none"});
        var el = document.activeElement;
        var viewportOffset = el.getBoundingClientRect();
        var elH = el.clientHeight;
        var elW = el.clientWidth;
        if (elW < 250) {
          elW = 150;
        }
        var Tpos = viewportOffset.top;
        var Lpos = viewportOffset.left;
        UA1(".focusonareafocus").addCss({"top":Tpos - 100 + "px", "left":Lpos - 20 + "px", "width":elW + 100 + "px"});
        UA1(".focusonareafocus").addCss({"display":"block"});
      }, 10);
    }
  });
};
andiUA.tgUXd = function(newElems) {
 
  newElems = newElems || "";
  var tTuuE = andiUA.Wqltn(newElems).tTuuE;
  if (localStorage.getItem("ScJKe") == "yes") {
    var OvtdW = [], YuLpO = [];
    tTuuE.forEach(function(VnIxP, i) {
      if (VnIxP.hasAttribute("tabindex")) {
        OvtdW.push(VnIxP);
        YuLpO.push(VnIxP.getAttr("tabindex"));
      }
    });
    tTuuE.forEach(function(VnIxP, i) {
      VnIxP.addAttr({"tabindex":"0"});
    });
    andiUA.tplRH(tTuuE, andiUA.zZBgg);
  }
};
andiUA.tplRH = function(tTuuE) {
 
  tTuuE.forEach(function(VnIxP, i) {
    VnIxP.addAttr({"tabindex":"0"});
  });
  tTuuE.forEach(function(VnIxP, i) {
    VnIxP.addEventListener("focusin", function() {
      
      var FtTIP = VnIxP;
      var nZfUO = localStorage.getItem("ScJKe");
      if (nZfUO == "yes") {
        if (UA1("#ZxBGV")) {
          UA1("#ZxBGV").zOhhK();
        }
        if (!UA1("#ZxBGVWidth")) {
          UA1("body").appendHtml('<style id="ZxBGVWidth" >#ZxBGV {width: intrinsic !important;width: -moz-min-content !important;width: -webkit-min-content !important;}</style>');
        }
        UA1("body").appendHtml('<div id="ZxBGV" ></div>');
        setTimeout(function() {
          var ldTmG = document.activeElement, xnaOX = ldTmG.offset(), ldTmGHeight = ldTmG.clientHeight, AVuIt = ldTmG.clientWidth;
          andiUA.bNIJd(ldTmG);
          if (UA1("#ZxBGV")) {
            UA1("#ZxBGV").addCss({"left":parseInt(xnaOX.left) - 100 + AVuIt + "px"});
          }
          if (UA1("#ZxBGV")) {
            UA1("#ZxBGV").addCss({"top":parseInt(xnaOX.top) + (parseInt(ldTmGHeight) + 5) + "px"});
          }
        }, 40);
      }
    });
  });
  tTuuE.forEach(function(el5, ii) {
    el5.addEventListener("focusout", function(e) {
      if (UA1("#ZxBGV") !== null) {
        UA1("#ZxBGV").getCss({"display":"none"});
      }
    });
  });
  UA("img:not(.andimenucode)").forEach(function(VnIxP, i) {
    VnIxP.addAttr({"tabindex":"0", "ScJKeImg":"true"});
  });
  tTuuE.forEach(function(el5, ii) {
    el5.addEventListener("mouseenter", function(e) {
      
      if (localStorage.getItem("ScJKe") == "yes") {
        var FtTIP = el5;
        if (UA1("#ZxBGV")) {
          UA1("#ZxBGV").zOhhK();
        }
        if (!UA1("#ZxBGVWidth")) {
          UA1("body").appendHtml('<style id="ZxBGVWidth" >#ZxBGV {width: intrinsic !important;width: -moz-min-content !important;width: -webkit-min-content !important;}</style>');
        }
        UA1("body").appendHtml('<div id="ZxBGV" class=""></div>');
        if (UA1("#ZJlam").thasClass("vKDQY")) {
          andiUA.bNIJd(FtTIP);
        }
      }
    });
  });
  tTuuE.forEach(function(el5, ii) {
    el5.addEventListener("mouseout", function(e) {
     
      if (UA1("#ZxBGV") !== null) {
        UA1("#ZxBGV").addCss({"display":"none"});
      }
    });
  });
  document.addEventListener("mousemove", function(UAenv) {
    if (UA1("#ZJlam").thasClass("vKDQY")) {
      var ANDImousePosition = {wpsqcX:UAenv.clientX, wpsqcY:UAenv.clientY};
      var thisElm = document.elementFromPoint(UAenv.clientX, UAenv.clientY);
      if (UA1("#ZxBGV") && thisElm && thisElm.hasAttribute("data-andiallelmwithtext")) {
        var elmH = thisElm.clientHeight;
        var elmW = thisElm.clientWidth;
        var left = UAenv.clientX - elmW / 6;
        var top = UAenv.clientY;
        if (left + UA1("#ZxBGV").clientWidth + 20 > window.innerWidth) {
			left = window.innerWidth - UA1("#ZxBGV").clientWidth - 100;
        }
        if (UAenv.clientX < UA1("#ZxBGV").clientWidth + 20) {
          left = 0;
        }
        if (top + elmH + 50 > window.innerHeight) {
			top = 0;//top + elmH - 100;
			var morestyle = 'height:'+(window.innerHeight-50)+'px;overflow:scroll;';
        } else {
			var morestyle = '';
		}
        andizxc("#ZxBGV").attr('style','top:'+top + 'px;left:'+left+'px;font-size:28px;' + morestyle);
      }
    }
  });
};


andiUA.bNIJd = function(nnRJI) {
  if (nnRJI != "//" && nnRJI.getCss("display") != "none" && nnRJI.getCss("opacity") != "0" && nnRJI.getCss("visibility") != "hidden" && UA1("#ZJlam").thasClass("xJGcA")) {
    if (nnRJI.tagName == "IMG") {
      var ldTmG = nnRJI, bahZK = nnRJI.getAttr("alt");
      if (bahZK !== null && bahZK == "") {
        var bahZK = nnRJI.getAttr("title");
      }
    } else {
      if (nnRJI.tagName == "INPUT") {
        var bahZK = nnRJI.getAttr("TUAandiinputdiscrp");
      } else {
        var ldTmG = nnRJI, bahZK = nnRJI.innerText;
      }
    }
    andiUA.KnLKo();
    var textFromElm = "<span style='font-size:28px !important;padding:7px!important;line-height:120%!important;'>" + bahZK + "</span>";
    UA1("#ZxBGV").innerHTML = textFromElm;
    if (bahZK == null || bahZK == "") {
      UA1("#ZxBGV").addCss({"display":"none"});
    }
  }
};
andiUA.Wqltn = function(newElems) {
 
  if (newElems == "") {
    var RXwGF = "[data-andiallelmwithtext],input";
  } else {
    var RXwGF = "[data-andiallelmwithtext].andiruns , input.andiruns ";
  }
  return {tTuuE:UA(RXwGF)};
};
andiUA.KnLKo = function() {
 
  (function() {
    var TFoUU = UA1("body").getCss("font-size");
    if (TFoUU == undefined || TFoUU == "undefined") {
      TFoUU = UA1("p").getCss("font-size");
    }
    var TFoUU = parseInt(TFoUU);
    if (UA("#yzUHR").length == 0) {
      UA1("head").appendHtml('<style id="yzUHR" >#ZxBGV{ padding: 5px!important;font-size:' + TFoUU * 2 + "px !important;}</style>");
    }
  })();
};
andiUA.findPassebleContainer = function(ArrTextToCompar) {
 
  var wrapArrArea = [];
  ArrTextToCompar.forEach(function(VnIxP, i) {
    UA(VnIxP + ',[class*="' + VnIxP + '"],[id*="' + VnIxP + '"]').forEach(function(el2, j) {
      if (el2.tagName !== "LINK" && !el2.closest("#jilVt")) {
        var isWrapAll = true;
        var BZPxw = el2;
        while ((BZPxw = BZPxw.parentElement) !== null && !BZPxw.closest("#jilVt") && BZPxw.tagName.toLowerCase() != "body" && BZPxw.tagName.toLowerCase() != "html") {
          var CxhBE = BZPxw.isIt(ArrTextToCompar[i] + ',[class*="' + ArrTextToCompar[i] + '"],[id*="' + ArrTextToCompar[i] + '"]');
          if (CxhBE) {
            isWrapAll = false;
          }
        }
        if (isWrapAll && el2.tagName.toLowerCase() != "body") {
          wrapArrArea.push(el2);
        }
      }
    });
  });
  return wrapArrArea;
};
andiUA.munberOfmenus = [];
andiUA.shopSR = function() {
 
  (function() {
    var wrapBreadCrumbArr = andiUA.findPassebleContainer(["cart"]);
    wrapBreadCrumbArr.forEach(function(VnIxP, i) {
      if (!VnIxP.isIt('button,[role="button"],[role="link"],a,input') && !VnIxP.closest("#jilVt")) {
        VnIxP.addAttr({"role":"region", "aria-live":"polite", "aria-label":andiUA.KNTQg.bbb15});
      }
    });
    var uuFSNToLookFor = "cart";
    var buttonToPush = '[role="button"][class*="' + uuFSNToLookFor + '"],[role="link"][class*="' + uuFSNToLookFor + '"],button[class*="' + uuFSNToLookFor + '"],a[class*="' + uuFSNToLookFor + '"],[type="button"][class*="' + uuFSNToLookFor + '"],[type="image"][class*="' + uuFSNToLookFor + '"],[type="submit"][class*="' + uuFSNToLookFor + '"],[role="button"][id*="' + uuFSNToLookFor + '"],[role="link"][id*="' + uuFSNToLookFor + '"],button[id*="' + uuFSNToLookFor + '"],a[id*="' + uuFSNToLookFor + '"],[type="button"][id*="' + 
    uuFSNToLookFor + '"],[type="image"][id*="' + uuFSNToLookFor + '"],[type="submit"][id*="' + uuFSNToLookFor + '"]';
    UA(buttonToPush).forEach(function(btn, i) {
      btn.addEventListener("click", function(e) {
      
        andiUA.createStorageItem("updateAddtoCart", UA1('[aria-label="' + andiUA.KNTQg.bbb15 + '"]').innerText.trim());
      });
    });
    var text1 = localStorage.getItem("updateAddtoCart");
    var text2 = UA1('[aria-label="' + andiUA.KNTQg.bbb15 + '"]') == null ? "" : UA1('[aria-label="' + andiUA.KNTQg.bbb15 + '"]').innerText.trim();
    if (text1 != text2 && UA(buttonToPush).length > 0) {
      setTimeout(function() {
        andiUA.TUAsrMsg(andiUA.KNTQg.bbb16 + " " + text2);
        andiUA.removeStorageItem("updateAddtoCart");
      }, 1200);
    } else {
      andiUA.removeStorageItem("updateAddtoCart");
    }
  })();
};
andiUA.PFYhH = function(yCdAG, newElems) {
 
  var newElems = newElems || "";
  if (newElems == "") {
    var RXwGF = "[data-andiallelmwithtext]";
  } else {
    var RXwGF = "[data-andiallelmwithtext]:not(.andiruns)";
  }
  var QjAWt = UA(RXwGF);
  andiUA.TUAsetChangeTextSize(yCdAG, QjAWt);
};
andiUA.TUAsetChangeTextSize = function(yCdAG, QjAWt) {
 
  for (var ANDIi = 0; ANDIi < QjAWt.length; ANDIi++) {
    var FtTIP = QjAWt[ANDIi];
    if (FtTIP.closest("#jilVt") == null && FtTIP.closest("#VseDf") == null) {
      var newSise = parseInt(FtTIP.dataset.andiallelmwithtext) + parseInt(yCdAG);
      //FtTIP.addCss({"line-height":"120%"});
      FtTIP.style.cssText = FtTIP.style.cssText + " font-size:" + newSise + "px !important;";
    }
  }
};
andiUA.frhQA = function() {
 
  andiUA.removeStorageItem("TUASizeText");
  andiUA.removeStorageItem("JPRSV");
  andiUA.removeStorageItem("xPEGE");
  var TUAdata = "removeLocalStorage:xPEGE";
  andiUA.yiPTV("andiifuserlogin", TUAdata);
  UA('[type="text"],[type="password"],[type="email"],[type="search"] ,[type="number"] ,[type="tel"],[type="url"] ,[type="time"]').forEach(function(VnIxP, i) {
    VnIxP.addCss({"height":""});
  });
  var RXwGF = andiUA.elmWithText;
  for (var i = 0; i < RXwGF.length; i++) {
    RXwGF[i].style.fontSize = parseInt(RXwGF[i].dataset.andiallelmwithtext) + "px";
  }
};
andiUA.ptixu = function() {
 
  (function() {
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr218);
    var iArRP = andiUA.KNTQg;
    var vdKGN = '<style id="scNRV">body *:not(.andimenucode){text-align: left ! important;}</style>';
    if (UA1("#scNRV") == null) {
      UA1("head").appendHtml(vdKGN);
    }
    andiUA.createStorageItem("TUAalignLeft", "yes");
  })();
};
andiUA.hzies = function() {

    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr220);
      andizxc("#scNRV").remove();
      andizxc("#osleE").remove();
    andiUA.removeStorageItem("TUAalignLeft");
    andiUA.removeStorageItem("TUAalignRight");
};
andiUA.TUAchangeAlignRight = function() {
 
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr219);
  var iArRP = andiUA.KNTQg;
  var vdKGN = '<style id="osleE">body *:not(.andimenucode){text-align: right ! important;}</style>';
  if (UA("#andispaceWordStyle").length == 0) {
    UA1("head").appendHtml(vdKGN);
  }
  andiUA.createStorageItem("TUAalignRight", "yes");
};
andiUA.GOZnX = function() {
 
  var iArRP = andiUA.KNTQg;
  var vdKGN = '<style id="izBIl">body *:not(i):not(.glyphiconr):not([class*=" icon-"]):not([class^="icon-"]):not(.fa){font-family: arial !important;}</style>';
  if (UA1("#izBIl") === null) {
    UA1("head").appendHtml(vdKGN);
  }
  andiUA.createStorageItem("WXACf", "yes");
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr235);
};
andiUA.VWQcZ = function() {
 
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr236);
  UA1("#izBIl").zOhhK();
  andiUA.removeStorageItem("WXACf");
};
andiUA.nHyMt = function() {
 
  var andibody = document.body, andihtml = document.documentElement;
  var NnYUv = Math.max(andibody.scrollHeight, andibody.offsetHeight, andihtml.clientHeight, andihtml.scrollHeight, andihtml.offsetHeight);
  return NnYUv;
};
andiUA.TUAoffNavigateWithLetters = function() {
 
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr238);
  if (UA1("#wSOJP") !== null) {
    UA1("#wSOJP").zOhhK();
  }
  UA1("body").addCss({"height":""});
};
andiUA.TUApreperNavigateWithLetters = function() {
 
  if (UA1("#wSOJP") == null) {
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var popupW = winWidth * 0.8;
    var popupH = winHeight * 0.8;
    var popupMargin = winHeight * 0.1 + "px " + winWidth * 0.1 + "px";
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr237);
    UA1("body").appendHtml('<div id="wSOJP"><div style="position: absolute;top: 0;color: #fff;font-size: 26px;margin: 10px;" class="andicloseNavigateWithLetters" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.UAtdr2193 + '"><b>X</b><small style="font-size: 12px;margin: 0 10px;">' + andiUA.KNTQg.UAtdr2194 + '</small></div><div id="BCaLN"><div id="noMoreNotification"></div><div id="JwXSG"><div id="bLnIe"></div><div id="Nkwcv"></div><div id="NYqcn"></div></div><div id="klIYg"><div id="RzMOl"></div><div id="FynQv"><div class="skpnN" style="float: right;padding: 0 10px 0;line-height: 32px;color:#fff !important"></div><div class="tlIvc" id="QGQPO">F10</div><div class="tlIvc" id="allsl">F6</div><div class="tlIvc" id="qhFHa">F5</div><div class="tlIvc" id="BwgkD">F3</div><div class="tlIvc" id="JWYtD">F1</div><div class="tlIvc" id="bGFVi">ESC</div></div><div id="ONITw"><div class="NaTmy" mouseKey="13" id="XlqzP">&#8629;</div><div class="NaTmy" mouseKey="32" id="pEjkF">&#9141;</div><div class="NaTmy" mouseKey="66" id="gXUtc">B</div><div class="NaTmy" mouseKey="71" id="TYPRb">G</div><div class="NaTmy" mouseKey="72" id="CymRQ">H</div><div class="NaTmy" style="display:none;" mouseKey="84" id="eDXsr">T</div><div class="NaTmy" mouseKey="70" id="EfKUe">F</div><div class="NaTmy" mouseKey="75" id="fmxDS">K</div><div style="display:none;" class="NaTmy" mouseKey="73" id="aTKjX">I</div><div class="NaTmy" style="display:none;" mouseKey="76" id="zcTsX">L</div></div><div id="laCWS"></div><div id="MOusc"></div></div></div><div id="HzMFn">' + 
    andiUA.KNTQg.oxUmA + "</div></div>");
    setTimeout(function() {
      if (localStorage.getItem("NavigateWithLettersDonshowanymore") == "true") {
        UA1("#wrapNavigateWithLetters .andicloseSaveOption").click();
      }
      if (UA("#wrapNavigateWithLetters .andicloseSaveOption").length == 1) {
        UA1("#wrapNavigateWithLetters .andicloseSaveOption").focus();
      }
    }, 20);
    var QqChU = andiUA.nHyMt();
    QqChU = QqChU + 152 + 35;
    document.body.style.height = QqChU + "px";
    andiUA.PhVFONavigateWithLetters(document);
    UA("#wSOJP, #wSOJP *").forEach(function(VnIxP, i) {
      VnIxP.taddClass("andimenucode");
    });
    document.addEventListener("keydown", function(event) {
     
      if ((event.ctrlKey || event.metaKey) && event.keyCode == 81 && UA1("#TUAnavigateWithLetters").thasClass("vKDQY")) {
        UA1("#TUAnavigateWithLetters").click();
      }
    });
  }
};
andiUA.PhVFONavigateWithLettersKeyDown = function() {
  
  (function() {
  })();
};
andiUA.navToPrevElmType = function(elmType, scrollIntoView, color) {
  if (scrollIntoView == undefined) {
    scrollIntoView = true;
  }
  color = color || "red";
 
  var thisElm = document.activeElement;
  var aSTyxofElms = UA(elmType);
  var amDoD = parseInt(aSTyxofElms.length - 1);
  if (thisElm != undefined) {
    if (thisElm.isIt(elmType)) {
      var nodes = Array.prototype.slice.call(aSTyxofElms);
      amDoD = parseInt(nodes.indexOf(thisElm));
    } else {
      amDoD = aSTyxofElms.length - 1;
    }
  }
  amDoD--;
  if (aSTyxofElms[amDoD] != undefined) {
    while (!aSTyxofElms[amDoD].YPfwR()) {
      if (amDoD - 1 >= 0) {
        amDoD--;
      } else {
        amDoD = aSTyxofElms.length - 1;
        break;
      }
    }
  } else {
    amDoD = aSTyxofElms.length - 1;
  }
  thisElm.addCss({"outline":""});
  var NewElm = aSTyxofElms[amDoD];
  NewElm.setAttribute("tabindex", "0");
  NewElm.focus();
  NewElm.addCss({"outline":"2px solid " + color});
  NewElm.addEventListener("blur", function() {
    document.activeElement.style.border = "";
  });
};
andiUA.navToNextElmType = function(elmType, scrollIntoView, color) {
  
  if (scrollIntoView == undefined) {
    scrollIntoView = true;
  }
  color = color || "red";
  var amDoD = parseInt(0);
  var navbetweenElm = document.activeElement;
  var aSTyxofElms = UA(elmType);
  if (navbetweenElm != undefined) {
    if (navbetweenElm.isIt(elmType)) {
      var nodes = Array.prototype.slice.call(aSTyxofElms);
      amDoD = parseInt(nodes.indexOf(navbetweenElm));
    } else {
      amDoD = 0;
    }
  }
  amDoD++;
  if (   aSTyxofElms[amDoD] != undefined) {
    while ( aSTyxofElms[amDoD].isIt('#jilVt,#jilVt *') || (aSTyxofElms[amDoD] != undefined && !aSTyxofElms[amDoD].YPfwR())) {
      if (amDoD + 1 < aSTyxofElms.length) {
        amDoD++;
      } else {
        amDoD = 0;
        break;
      }
    }
  } else {
    amDoD = 0;
  }
  navbetweenElm.addCss({"outline":""});
  var NewElm = aSTyxofElms[amDoD];
   if (NewElm != undefined && !aSTyxofElms[amDoD].isIt('#jilVt,#jilVt *') ) {
    NewElm.setAttribute("tabindex", "0");
    NewElm.focus();
    NewElm.addCss({"outline":"2px solid " + color});
    NewElm.addEventListener("blur", function() {
      document.activeElement.style.border = "";
    });
  } else {
	andizxc('body').append('<div class="navtoend" style=" top: 46%; left: 0; background-color: rgba(0,0,0,0.5); position: fixed; font-size: 16px; color: #fff; padding: 5px 10px; border-radius: 2px; ">הגעת לסוף. אפשרותך לנווט אחורה.</div>')
	setTimeout(function(){
		andizxc('.navtoend').remove();
	},5000);
  }
};
andiUA.UAfucosNextElms = function(e, mouseKey, BFWhH) {
 
  if (e == null) {
    var lVsAB = parseInt(mouseKey), oODew = false;
  }
  if (mouseKey == null) {
    var oODew = e.shiftKey, lVsAB = e.keyCode || e.which;
  }
  if (UA1("#TUAnavigateWithLetters").thasClass("xJGcA")) {
    if (UA1("#moveArrowLetterKeyboardMiddleBorderLine") !== null) {
      UA1("#moveArrowLetterKeyboardMiddleBorderLine").zOhhK();
    }
    if (BFWhH[0] == null && lVsAB != 16) {
      BFWhH[0] = lVsAB;
      BFWhH[1] = lVsAB;
    } else {
      if (lVsAB != 16) {
        BFWhH[0] = BFWhH[1];
        BFWhH[1] = lVsAB;
      }
    }
    var oJrsV = [], nkqqe = [], xJzSb = "", elements = "";
    var gGiiB = false;
    if (lVsAB == 72) {
      elements = 'h1,h2,h3,h4,h5,h6,[role="header"]';
      xJzSb = andiUA.KNTQg.aSLIl;
      gGiiB = true;
      document.getElementById("CymRQ").style.backgroundColor = localStorage.getItem("uiWAD");
      document.getElementById("CymRQ").style.color = "white";
      UA1("#MOusc").innerText = andiUA.KNTQg.YQGJn;
      UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine"> #wSOJP #klIYg #MOusc {display:block !important;margin-right:16% !important} #laCWS:after{left: 61.5% !important;}</style>');
    } else {
      if (lVsAB == 66) {
        elements = 'button,[role="button"],input[type="submit"],input[type="image"],input[type="button"]';
        xJzSb = andiUA.KNTQg.EiMry;
        gGiiB = true;
        document.getElementById("gXUtc").style.backgroundColor = localStorage.getItem("uiWAD");
        document.getElementById("gXUtc").style.color = "white";
        UA1("#MOusc").innerText = andiUA.KNTQg.endcY;
        UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:block !important;margin-right:0% !important}#laCWS:after{left: 78% !important;}</style>');
      } else {
        if (lVsAB == 75) {
          elements = 'a,[role="link"]';
          xJzSb = andiUA.KNTQg.zonzn;
          gGiiB = true;
          document.getElementById("fmxDS").style.backgroundColor = localStorage.getItem("uiWAD");
          document.getElementById("fmxDS").style.color = "white";
          UA1("#MOusc").innerText = andiUA.KNTQg.jDXGL;
          UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:block !important;margin-right:32% !important}#laCWS:after{left:45.5% !important;}</style>');
        } else {
          if (lVsAB == 70) {
            elements = "input,select,textarea";
            xJzSb = andiUA.KNTQg.tlWtq;
            gGiiB = true;
            document.getElementById("EfKUe").style.backgroundColor = localStorage.getItem("uiWAD");
            document.getElementById("EfKUe").style.color = "white";
            UA1("#MOusc").innerText = andiUA.KNTQg.ljXay;
            UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:block !important;margin-right:24% !important}#laCWS:after{left: 54% !important;}</style>');
          } else {
            if (lVsAB == 71) {
              elements = 'img,[role="img"]';
              xJzSb = andiUA.KNTQg.FRhTO;
              gGiiB = true;
              document.getElementById("TYPRb").style.backgroundColor = localStorage.getItem("uiWAD");
              document.getElementById("TYPRb").style.color = "white";
              UA1("#MOusc").innerText = andiUA.KNTQg.GPwQW;
              UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:block !important;margin-right:8% !important} #laCWS:after{left: 70% !important;}</style>');
            } else {
              if (lVsAB == 27) {
                gGiiB = false;
                document.getElementById("bGFVi").style.backgroundColor = localStorage.getItem("uiWAD");
                document.getElementById("bGFVi").style.color = "white";
                UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:none !important;color:#fff !important;} </style>');
                UA1(".skpnN").innerText = andiUA.KNTQg.SwOdQ;
              } else {
                if (lVsAB == 112) {
                  gGiiB = false;
                  document.getElementById("JWYtD").style.backgroundColor = localStorage.getItem("uiWAD");
                  document.getElementById("JWYtD").style.color = "white";
                  UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:none !important;margin-right:30% !important;color:#fff !important;} </style>');
                  UA1(".skpnN").innerText = andiUA.KNTQg.nBbrc;
                } else {
                  if (lVsAB == 114) {
                    gGiiB = false;
                    document.getElementById("BwgkD").style.backgroundColor = localStorage.getItem("uiWAD");
                    document.getElementById("BwgkD").style.color = "white";
                    UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:none !important;margin-right:30% !important;color:#fff !important;} </style>');
                    UA1(".skpnN").innerText = andiUA.KNTQg.ekMAZ;
                  } else {
                    if (lVsAB == 116) {
                      gGiiB = false;
                      document.getElementById("qhFHa").style.backgroundColor = localStorage.getItem("uiWAD");
                      document.getElementById("qhFHa").style.color = "white";
                      UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:none !important;margin-right:30% !importantcolor:#fff !important;} </style>');
                      UA1(".skpnN").innerText = andiUA.KNTQg.HbejF;
                    } else {
                      if (lVsAB == 117) {
                        gGiiB = false;
                        document.getElementById("allsl").style.backgroundColor = localStorage.getItem("uiWAD");
                        document.getElementById("allsl").style.color = "white";
                        UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:none !important;margin-right:30% !important;color:#fff !important;} </style>');
                        UA1(".skpnN").innerText = andiUA.KNTQg.CatXx;
                      } else {
                        if (lVsAB == 121) {
                          gGiiB = false;
                          document.getElementById("QGQPO").style.backgroundColor = localStorage.getItem("uiWAD");
                          document.getElementById("QGQPO").style.color = "white";
                          UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{display:none !important;margin-right:30% !important;color:#fff !important;} </style>');
                          UA1(".skpnN").innerText = andiUA.KNTQg.XXDcw;
                        } else {
                          if (lVsAB == 13) {
                            gGiiB = false;
                            document.getElementById("XlqzP").style.backgroundColor = localStorage.getItem("uiWAD");
                            document.getElementById("XlqzP").style.color = "white";
                            UA1("#MOusc").innerText = andiUA.KNTQg.HmUCE;
                            UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine">#wSOJP #klIYg #MOusc{    text-align: right;display:block !important;margin-right:0% !important;} #laCWS:after{left: 94% !important;}</style>');
                          } else {
                            if (lVsAB == 32) {
                              gGiiB = false;
                              document.getElementById("pEjkF").style.backgroundColor = localStorage.getItem("uiWAD");
                              document.getElementById("pEjkF").style.color = "white";
                              UA1("#MOusc").innerText = andiUA.KNTQg.yPpOn;
                              UA1("head").appendHtml('<style id="moveArrowLetterKeyboardMiddleBorderLine"> #wSOJP #klIYg #MOusc{display:block !important;margin-right:0% !important} #laCWS:after{left: 86% !important;}</style>');
                            } else {
                              gGiiB = false;
                              UA1("#MOusc").innerText = "";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (gGiiB) {
      var EbORt = document.activeElement;
      var continueToNextElm = true;
      if (continueToNextElm && EbORt.getAttribute("continueToNextElm") != "false") {
        if (oODew) {
          andiUA.navToPrevElmType(elements, "no");
        } else {
          andiUA.navToNextElmType(elements, "no");
        }
      }
      var activeElm;
      var EbORt = activeElm = document.activeElement;
      var showInputMessage = function() {
        
        var VUDIp = UA1("head").innerHTML.indexOf("UA2StyleSheetLTR") > -1 ? false : true;
        var JwKti = false;
        var HMGry = "z-index:99999999999;display:block; border-radius:5px; margin:10px;background-color: rgba(0, 0, 0, 0.65);height:60px;box-sizing:border-box;text-align:" + (VUDIp ? "right" : "left") + " ; width:190;padding: 23px 20px 10px;position:fixed;color:#fff !important ;bottom:50%";
        var jmhwb = "";
        var phxMR = "z-index:99999999999;width: 25px;position: absolute; top: 8px; " + (VUDIp ? "left" : "right") + ": 7px;";
        if (UA1("#UAshowInputMessage") === null) {
          UA1("body").appendHtml('<div aria-hidden="true" id="UAshowInputMessage" style="' + HMGry + '"><div style="' + jmhwb + '"></div>' + andiUA.KNTQg.UAtdr2195 + '<div  style="' + phxMR + '" aria-label="' + andiUA.KNTQg.UAtdr2159 + '" id="WhyBe" role="button" tabindex="0">X</div></div>');
        }
        if (parseInt(UA1("#UAshowInputMessage").getCss("right")) != "NaN" && parseInt(UA1("#UAshowInputMessage").getCss("right")) < 40) {
          UA1("#UAshowInputMessage").addCss({"right":"40px"});
        }
        if (parseInt(UA1("#UAshowInputMessage").getCss("left")) != "NaN" && parseInt(UA1("#UAshowInputMessage").getCss("left")) < 40) {
          UA1("#UAshowInputMessage").addCss({"left":"40px"});
        }
        eventOn("click", "#WhyBe", function() {
          
          UA1("#UAshowInputMessage").zOhhK();
        });
      };
      var theNextElm = EbORt.tagName.toLowerCase();
      if (theNextElm == "input" && EbORt.type != "radio" && EbORt.type != "checkbox") {
        if (EbORt.type != "image" && EbORt.type != "button" && EbORt.type != "submit") {
          if (EbORt.getAttribute("continueToNextElm") != "false") {
            EbORt.setAttribute("readonly", "readonly");
            EbORt.setAttribute("continueToNextElm", "true");
            showInputMessage();
          }
        }
      }
      if (theNextElm == "textarea") {
        EbORt.setAttribute("readonly", "readonly");
        EbORt.setAttribute("continueToNextElm", "true");
        showInputMessage();
      }
      var thisHaveClickElms = activeElm.querySelectorAll(andiUA.TUAsettingFn.NsSyR);
      if (thisHaveClickElms.length == 1) {
        activeElm.addEventListener("keydown", function(e) {
         
          if (e.keyCode == 13) {
            thisHaveClickElms[0].click();
          }
        });
      }
      if (activeElm.tagName.toLowerCase() == "textarea" || activeElm.tagName.toLowerCase() == "input" && activeElm.type != "radio" && activeElm.type != "checkbox" && activeElm.type != "image" && activeElm.type != "button" && activeElm.type != "submit") {
        activeElm.addEventListener("keydown", function(e) {
           
          if (e.keyCode == 32) {
            activeElm.tremoveAttribute("readonly");
            activeElm.setAttribute("continueToNextElm", "false");
            if (UA1("#WhyBe") !== null) {
              UA1("#WhyBe").click();
            }
          }
          if (e.keyCode == 27 || e.keyCode == 9) {
            activeElm.setAttribute("readonly", "readonly");
            activeElm.setAttribute("continueToNextElm", "true");
            if (UA1("#WhyBe") !== null) {
              UA1("#WhyBe").click();
            }
          }
        });
      }
      activeElm.addEventListener("focusout", function(e) {
        
        activeElm.setAttribute("readonly", "readonly");
        activeElm.setAttribute("continueToNextElm", "true");
        if (UA1("#WhyBe") !== null) {
          UA1("#WhyBe").click();
        }
      });
    }
  }
};
andiUA.PhVFONavigateWithLetters = function(ldhIz) {
  
  var BFWhH = [null, null];
  if (andiUA.firstTimeRunNavWithLetter == undefined) {
    andiUA.firstTimeRunNavWithLetter = true;
  } else {
    andiUA.firstTimeRunNavWithLetter = false;
  }
  if (andiUA.firstTimeRunNavWithLetter) {
    ldhIz.addEventListener("keydown", function(e) {
       
      andiUA.UAfucosNextElms(e, null, BFWhH);
    });
    ldhIz.addEventListener("keyup", function(e) {
      setTimeout(function() {
        UA(".tlIvc").forEach(function(VnIxP, i) {
          VnIxP.addCss({"background-color":"#31C1EE", "color":"#fff"});
        });
        UA(".NaTmy").forEach(function(VnIxP, i) {
          VnIxP.addCss({"background-color":"#fff", "color":"#000"});
        });
      }, 100);
    });
  }
};
andiUA.fCUqq = function() {
   
  andiUA.gPzFa();
};
andiUA.RFrtA = function() {
  
  andiUA.TUAsetWhiteCursor();
};
andiUA.TUAsetWhiteCursor = function() {
   
  var NteyS = andiUA.EglES;
  var NbUhE = andiUA.QOBdC();
  if (UA("#XlfED").length == 0) {
    if (andiUA.GqMsb()) {
      var TUAmousePointer = NbUhE.Png.pVZkH;
      var TUAmouseArrow = NbUhE.Png.saHrw;
    } else {
      var TUAmousePointer = NteyS.cBfXr;
      var TUAmouseArrow = NteyS.qPLJA;
    }
    var ANDIcssStyle = '<style id="XlfED">body *{cursor:url(' + TUAmouseArrow + ') -2 -2 ,auto !important}a, a * ,label ,label * ,input ,[role="tab"],[role="button"], [role="button"] *,[role="link"] *,[role="link"],textarea,button, button *{cursor:url(' + TUAmousePointer + ") -5 -5 ,auto !important;} </style>";
    if (andiUA.GqMsb()) {
      UA1("head").appendHtml(ANDIcssStyle);
    } else {
      UA1("head").appendHtml(ANDIcssStyle);
    }
  }
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr240);
};
andiUA.hMExZ = function() {
 
  andiUA.TUAsetblackCursor();
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr239);
};
andiUA.TUAsetblackCursor = function() {
   
  if (UA("#gZptu").length == 0) {
    var NteyS = andiUA.EglES;
    var NbUhE = andiUA.QOBdC();
    if (andiUA.GqMsb()) {
      var TUAmousePointer = NbUhE.Png.ihgnb;
      var TUAmouseArrow = NbUhE.Png.fGaOj;
    } else {
      var TUAmousePointer = NteyS.UZzvp;
      var TUAmouseArrow = NteyS.avjoD;
    }
    var ANDIcssStyle = '<style id="gZptu">body *{cursor:url(' + TUAmouseArrow + ') -2 -2,auto !important} a, a * ,label ,label * ,input ,[role="tab"],[role="button"], [role="button"] *,[role="link"] *,[role="link"],textarea,button, button *{cursor:url(' + TUAmousePointer + ") -5 -5,auto !important;} </style>";
    if (andiUA.GqMsb()) {
      UA1("head").appendHtml(ANDIcssStyle);
    } else {
      UA1("head").appendHtml(ANDIcssStyle);
    }
  }
};
andiUA.gPzFa = function() {
  
  var rwRbL = localStorage.getItem("rwRbL");
  if (rwRbL == "white") {
    UA1("#TUAwhiteMouse").click();
  } else {
    if (rwRbL == "black") {
      UA1("#EXRcw").click();
    }
  }
};
andiUA.QMUoB = function() {
   
  if (UA1("#gZptu") !== null) {
    UA1("#gZptu").zOhhK();
  }
  if (UA1("#XlfED") !== null) {
    UA1("#XlfED").zOhhK();
  }
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr241);
  andiUA.removeStorageItem("rwRbL");
};
andiUA.TUAchangehighLightFocus = function() {
 
  if (UA1(".qlphO") !== null) {
    UA1(".qlphO").zOhhK();
  }
  if (UA1("#JhgsJStyle") !== null) {
    UA1("#JhgsJStyle").zOhhK();
  }
  if (UA1("body").getCss("background-color") == "rgb(236, 21, 98)" || UA1("body").getCss("background-color") == "rgb(255, 85, 7)" || UA1("body").getCss("background-color") == "rgb(247, 65, 44)") {
    var bg = "0, 0, 0";
  } else {
    var bg = "255, 64, 129";
  }
  var vdKGN = '<style id="JhgsJStyle">:focus { -webkit-box-shadow: 0px 0px 0px 3px rgb(' + bg + ") !important;-moz-box-shadow: 0px 0px 0px 3px rgb(" + bg + ") !important;box-shadow: 0px 0px 0px 3px rgb(" + bg + ") !important;}</style>";
  UA1("head").appendHtml(vdKGN);
  andiUA.createStorageItem("andihighLightFocus", "yes");
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr242);
};
andiUA.fUuAl = function() {
 
  if (UA1("#JhgsJStyle") !== null) {
    UA1("#JhgsJStyle").zOhhK();
  }
  andiUA.removeStorageItem("andihighLightFocus");
  andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr243);
};
andiUA.rYbEe = "";
andiUA.WjLsa = function() {
  
  andiUA.wAENW(document);
};
andiUA.wAENW = function(ldTmG) {
 
  eventOn("focusin", 'textarea , [type="number"],[type="tel"],[type="text"],[type="url"],[type="search"],[type="password"],[type="email"]', function() {
   
    andiUA.rYbEe = this;
    if (UA1("#gcFQn").thasClass("xJGcA") && !UA1("#IBoog").thasClass("xJGcA")) {
      WilmQ(andiUA.rYbEe);
      UA1("#ncSEc").innerText = this.value;
    }
  });
  eventOn("click", '[class*="cameraTypeLetter"]', function() {
    UA1("body").taddClass("cameraStratType");
    andiUA.createStorageItem("cameraTypeLetter", this.getAttribute("cameraTypeLetter"));
    andiUA.rYbEe = this;
    if (UA1("#gcFQn").thasClass("xJGcA") && UA1("#IBoog").thasClass("xJGcA")) {
      WilmQ(andiUA.rYbEe);
      this.previousSibling.focus();
      UA1("#ncSEc").innerText = this.previousSibling.value;
      UA1("#eHFXi .andicloseeHFXi").style.right = "20px";
    }
  });
};
function WilmQ() {
 
  if (UA1("#eHFXi")) {
    UA1("#eHFXi").zOhhK();
  }
  document.body.style.height = "";
  if (andiUA.rYbEe.type == "number" || andiUA.rYbEe.type == "tel") {
    UA1("body").appendHtml('<div id="eHFXi"><div style="position: absolute;top: 0;color: #fff;font-size: 26px;margin: 10px;color:#fff !important;background-color:#333333 !important;" class="andicloseeHFXi" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.UAtdr2193 + '"><b>X</b></div><div id="LXBSB"><textarea id="ncSEc" rows="1" cols="60" readonly="readonly"></textarea><div id="nSibfboard" class="aSmgH"><div><div tabindex="0" role="button" class="LMzPA">1</div><div tabindex="0" role="button" class="LMzPA">2</div><div tabindex="0" role="button" class="LMzPA">3</div><div tabindex="0" role="button" class="CRRSy aSmgH">delete</div></div><div><div tabindex="0" role="button" class="LMzPA">4</div><div tabindex="0" role="button" class="LMzPA">5</div><div tabindex="0" role="button" class="LMzPA">6</div><div tabindex="0" role="button" class="geviL aSmgH"> - </div></div><div><div tabindex="0" role="button" class="LMzPA">7</div><div tabindex="0" role="button" class="LMzPA">8</div><div tabindex="0" role="button" class="LMzPA">9</div><div tabindex="0" role="button" class="geviL aSmgH"> % </div></div><div><div tabindex="0" role="button" class="LMzPA">*</div><div tabindex="0" role="button" class="LMzPA">0</div><div tabindex="0" role="button" class="LMzPA">#</div><div tabindex="0" role="button" class="geviL aSmgH"> . </div></div></div><div id="KJMJHLang" class="aSmgH"><div tabindex="0" role="button" id="qJGpf" class="jSpEZ">' + 
    andiUA.KNTQg.UAtdr100 + '</div><div tabindex="0" role="button" id="XzYvj" class="jSpEZ fmlzc aSmgH">English</div><div tabindex="0" role="button" id="JweXm" class="jSpEZ fmlzc aSmgH">' + andiUA.KNTQg.UAtdr101 + '<div tabindex="0" role="button" id="TUAvkAru" class="jSpEZ fmlzc aSmgH">\u0420\u0443\u0441\u0441\u043a\u0438\u0439</div></div></div></div></div>');
  } else {
    UA1("body").appendHtml('<div id="eHFXi"><div style="position: absolute;top: 0;color:#fff !important;background-color:#333333 !important;font-size: 26px;margin: 10px;" class="andicloseeHFXi" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.UAtdr2193 + '"><b>X</b></div><div id="LXBSB"><textarea id="ncSEc" rows="1" cols="60" readonly="readonly"></textarea><div id="nSibfboard" class="aSmgH"><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">`</span><span class="NLWxW">~</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">1</span><span class="NLWxW">!</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">2</span><span  tabindex="0" role="button"  class="NLWxW shtrodel">@</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">3</span><span class="NLWxW">#</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">4</span><span class="NLWxW">$</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">5</span><span class="NLWxW">%</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">6</span><span class="NLWxW">^</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">7</span><span class="NLWxW">&amp;</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">8</span><span class="NLWxW">*</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">9</span><span class="NLWxW">(</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">0</span>'+
    '<span class="NLWxW">)</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">-</span><span class="NLWxW">_</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">=</span><span class="NLWxW">+</span></div><div tabindex="0" role="button" class="CRRSy aSmgH">delete</div><div tabindex="0" role="button" class="QhFEO">tab</div><div tabindex="0" role="button" class="TUAletter piaNm">q</div><div tabindex="0" role="button" class="TUAletter piaNm">w</div><div tabindex="0" role="button" class="TUAletter piaNm">e</div><div tabindex="0" role="button" class="TUAletter piaNm">r</div><div tabindex="0" role="button" class="TUAletter piaNm">t</div><div tabindex="0" role="button" class="TUAletter piaNm">y</div><div tabindex="0" role="button" class="TUAletter piaNm">u</div><div tabindex="0" role="button" class="TUAletter piaNm">i</div><div tabindex="0" role="button" class="TUAletter piaNm">o</div><div tabindex="0" role="button" class="TUAletter piaNm">p</div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk piaNm">]</span><span class="NLWxW">}</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk piaNm">[</span><span class="NLWxW">{</span></div><div tabindex="0" role="button" class="TUAsymbol aSmgH "><span class="lfNlk shtrodel">@</span><span class="NLWxW">|</span></div><div tabindex="0" role="button" class="TZDKMpslock">caps lock</div><div tabindex="0" role="button" class="TUAletter piaNm">a</div><div tabindex="0" role="button" class="TUAletter piaNm">s</div><div tabindex="0" role="button" class="TUAletter piaNm">d</div><div tabindex="0" role="button" class="TUAletter piaNm">f</div><div tabindex="0" role="button" class="TUAletter piaNm">g</div><div tabindex="0" role="button" class="TUAletter piaNm">h</div><div tabindex="0" role="button" class="TUAletter piaNm">j</div>'+
    '<div tabindex="0" role="button" class="TUAletter piaNm">k</div><div tabindex="0" role="button" class="TUAletter piaNm">l</div><div tabindex="0" role="button" class="TUAsymbol "><span class="lfNlk piaNm">;</span><span class="NLWxW">:</span></div><div tabindex="0" role="button" class="TUAsymbol "><span class="lfNlk piaNm">' + 
    " '" + '</span><span class="NLWxW">&quot;</span></div><div tabindex="0" role="button" class="FiIOl aSmgH">return</div><div tabindex="0" role="button" class="IbElw">shift</div><div tabindex="0" role="button" class="TUAletter piaNm">z</div><div tabindex="0" role="button" class="TUAletter piaNm">x</div><div tabindex="0" role="button" class="TUAletter piaNm">c</div><div tabindex="0" role="button" class="TUAletter piaNm">v</div><div tabindex="0" role="button" class="TUAletter piaNm">b</div><div tabindex="0" role="button" class="TUAletter piaNm">n</div><div tabindex="0" role="button" class="TUAletter piaNm">m</div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk piaNm">,</span><span class="NLWxW">></span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk piaNm">.</span><span class="NLWxW"><</span></div><div tabindex="0" role="button" class="TUAsymbol"><span class="lfNlk">/</span><span class="NLWxW">?</span></div><div tabindex="0" role="button" class="TtZzB aSmgH">shift</div><div tabindex="0" role="button" class="PkuNm aSmgH">&nbsp;</div></div><div id="KJMJHLang" class="aSmgH"><div tabindex="0" role="button" id="qJGpf" class="jSpEZ">' + 
    andiUA.KNTQg.UAtdr100 + '</div><div tabindex="0" role="button" id="XzYvj" class="jSpEZ fmlzc aSmgH">English</div><div tabindex="0" role="button" id="JweXm" class="jSpEZ fmlzc aSmgH">' + andiUA.KNTQg.UAtdr101 + '</div><div tabindex="0" role="button" id="TUAvkAru" class="jSpEZ fmlzc aSmgH">\u0420\u0443\u0441\u0441\u043a\u0438\u0439</div>\x3c!--<div tabindex="0" role="button" id="TUAdoClick" class="jSpEZ fmlzc aSmgH"> GO! </div>--\x3e</div></div></div>');
  }
  var QqChU = andiUA.nHyMt();
  QqChU = QqChU + 260 + 10;
  document.body.style.height = QqChU + "px";
  UA1("#eHFXi .andicloseeHFXi").addEventListener("click", function() {
    if (UA1("#eHFXi") !== null) {
      UA1("#eHFXi").zOhhK();
    }
  });
  gcFQn();
  UA("#eHFXi,#eHFXi *").forEach(function(VnIxP, i) {
    VnIxP.taddClass("andimenucode");
  });
  UA(".jSpEZ").forEach(function(VnIxP, i) {
    VnIxP.addEventListener("click", function() {
      if (this.innerText == andiUA.KNTQg.UAtdr100) {
        changeKeyboardLanguale("qJGpf", this);
      } else {
        if (this.innerText == "English") {
          changeKeyboardLanguale("XzYvj", this);
        } else {
          if (this.innerText == "\u0420\u0443\u0441\u0441\u043a\u0438\u0439") {
            changeKeyboardLanguale("TUAvkAru", this);
          } else {
            if (this.innerText == andiUA.KNTQg.UAtdr101) {
              changeKeyboardLanguale("JweXm", this);
            }
          }
        }
      }
      if (this.innerText.trim() == "GO!") {
      }
    });
  });
  if (UA1(".fmlzc") && UA1(".fmlzc").id == "TUAvkAru") {
    UA(".shtrodel").forEach(function(VnIxP, i) {
      VnIxP.innerHTML = "\u044d";
    });
  } else {
    UA(".shtrodel").forEach(function(VnIxP, i) {
      VnIxP.innerHTML = "@";
    });
  }
}
function changeKeyboardLanguale(jSpEZ, ldTmG) {
 
  var ndQNz = {XzYvj:["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", "."], TUAvkAru:["\u044f", "\u0448", "\u0435", "\u0440", "\u0442", "\u044b", "\u0443", "\u0438", "\u043e", "\u043f", "\u044e", "\u0449", "\u0430", "\u0441", "\u0434", "\u0444", "\u0433", "\u0447", "\u0439", "\u043a", "\u043b", "\u044c", "\u0436", "\u0437", "\u0445", "\u0446", "\u0432", "\u0431", "\u043d", "\u043c", 
  ",", "."], JweXm:["\u0636", "\u0635", "\u062b", "\u0642", "\u0641", "\u063a", "\u0639", "\u0647", "\u062e", "\u062d", "\u062c", "\u062f", "\u0634", "\u0633", "\u064a", "\u0628", "\u0644", "\u0627", "\u062a", "\u0646", "\u0645", "\u0643", "\u0637", "\u0626", "\u0621", "\u0624", "\u0631", "\u0644\u0627", "\u0649", "\u0629", "\u0648", "\u0632"], uWutr:["`", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669", "\u0660", "~", "!"], fTvij:["`", 
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="], qJGpf:["/", "'", "\u05e7", "\u05e8", "\u05d0", "\u05d8", "\u05d5", "\u05df", "\u05dd", "\u05e4", "[", "]", "\u05e9", "\u05d3", "\u05d2", "\u05db", "\u05e2", "\u05d9", "\u05d7", "\u05dc", "\u05da", "\u05e3", "'", "\u05d6", "\u05e1", "\u05d1", "\u05d4", "\u05e0", "\u05de", "\u05e6", "\u05ea", "\u05e5"], PVWRx:["/", "'", "\u05e7", "\u05e8", "\u05d0", "\u05d8", "\u05d5", "\u05df", "\u05dd", "\u05e4", "[", "]", "\u05e9", "\u05d3", 
  "\u05d2", "\u05db", "\u05e2", "\u05d9", "\u05d7", "\u05dc", "\u05da", "\u05e3", "'", "\u05d6", "\u05e1", "\u05d1", "\u05d4", "\u05e0", "\u05de", "\u05e6", "\u05ea", "\u05e5"]};
  if (jSpEZ == "qJGpf") {
    var zZBgg = ndQNz.qJGpf;
    var prIMn = ndQNz.fTvij;
  }
  if (jSpEZ == "XzYvj") {
    var zZBgg = ndQNz.XzYvj;
    var prIMn = ndQNz.fTvij;
  }
  if (jSpEZ == "JweXm") {
    var zZBgg = ndQNz.JweXm;
    var prIMn = ndQNz.uWutr;
  }
  if (jSpEZ == "TUAvkAru") {
    var zZBgg = ndQNz.TUAvkAru;
    var prIMn = ndQNz.fTvij;
  }
  var fmlzc = UA1(".fmlzc").getAttr("id");
  if (fmlzc == "qJGpf") {
    var Active = ndQNz.qJGpf;
    var sdIGn = ndQNz.fTvij;
    UA(".jSpEZ").forEach(function(VnIxP, i) {
      VnIxP.tremoveClass("fmlzc");
    });
    ldTmG.taddClass("fmlzc");
  } else {
    if (fmlzc == "XzYvj") {
      var Active = ndQNz.XzYvj;
      var sdIGn = ndQNz.uWutr;
      UA(".jSpEZ").forEach(function(VnIxP, i) {
        VnIxP.tremoveClass("fmlzc");
      });
      ldTmG.taddClass("fmlzc");
    } else {
      if (fmlzc == "JweXm") {
        var Active = ndQNz.JweXm;
        var sdIGn = ndQNz.fTvij;
        UA(".jSpEZ").forEach(function(VnIxP, i) {
          VnIxP.tremoveClass("fmlzc");
        });
        ldTmG.taddClass("fmlzc");
      } else {
        if (fmlzc == "TUAvkAru") {
          var Active = ndQNz.TUAvkAru;
          var sdIGn = ndQNz.fTvij;
          UA(".jSpEZ").forEach(function(VnIxP, i) {
            VnIxP.tremoveClass("fmlzc");
          });
          ldTmG.taddClass("fmlzc");
        }
      }
    }
  }
  var items = UA("#LXBSB .piaNm");
  for (var TUAi = 0; TUAi < items.length; TUAi++) {
    var $this = items[TUAi];
    $this.innerText = zZBgg[TUAi];
  }
  var items = UA("#LXBSB .TUAsymbol");
  for (var TUAi = 0; TUAi < items.length; TUAi++) {
    var $this = items[TUAi];
    $this.querySelector.innerText = prIMn[TUAi];
  }
  if (UA1(".fmlzc") && UA1(".fmlzc").id == "TUAvkAru") {
    UA(".shtrodel").forEach(function(VnIxP, i) {
      VnIxP.innerHTML = "\u044d";
    });
  } else {
    UA(".shtrodel").forEach(function(VnIxP, i) {
      VnIxP.innerHTML = "@";
    });
  }
}
function gcFQn() {
 
  var ncSEc = "#ncSEc", shift = false, TZDKMpslock = false;
  UA('#nSibfboard div[role="button"]:not([class^="jSpEZ"])').forEach(function(VnIxP, i) {
    VnIxP.addEventListener("click", function() {
      var $this = this, MIwkj = $this.bLkhj();
      if ($this.thasClass("IbElw") || $this.thasClass("TtZzB")) {
        UA(".TUAletter").forEach(function(VnIxP, i) {
          VnIxP.toggleClass("ZBzCK");
        });
        UA(".TUAsymbol span").forEach(function(VnIxP, i) {
          if (VnIxP.getCss("display") == "none") {
            VnIxP.addCss({"display":"inline"});
          } else {
            VnIxP.addCss({"display":"none"});
          }
        });
        shift = shift === true ? false : true;
        TZDKMpslock = false;
        return false;
      }
      if ($this.thasClass("TZDKMpslock")) {
        UA(".TUAletter").forEach(function(VnIxP, i) {
          VnIxP.toggleClass("ZBzCK");
        });
        TZDKMpslock = true;
        return false;
      }
      if ($this.thasClass("CRRSy")) {
        var html = UA1(ncSEc).value;
        UA1(ncSEc).value = html.substr(0, html.length - 1);
        andiUA.rYbEe.value = UA1(ncSEc).value;
        return false;
      }
      if ($this.thasClass("TUAsymbol")) {
        $this.querySelectorAll("span").forEach(function(VnIxP, i) {
          if (VnIxP.getCss("display") == "inline") {
            MIwkj = VnIxP.innerText;
          }
        });
      }
      if ($this.thasClass("PkuNm")) {
        MIwkj = " ";
      }
      if ($this.thasClass("QhFEO")) {
        MIwkj = "\t";
      }
      if ($this.thasClass("FiIOl")) {
        MIwkj = "\n";
		
      }
      if ($this.thasClass("ZBzCK")) {
        MIwkj = MIwkj.toUpperCase();
      }
      if (shift === true) {
        UA(".TUAsymbol span").forEach(function(VnIxP, i) {
          if (VnIxP.getCss("display") == "none") {
            VnIxP.addCss({"display":"inline"});
          } else {
            VnIxP.addCss({"display":"none"});
          }
        });
        if (TZDKMpslock === false) {
          UA(".TUAletter").forEach(function(VnIxP, i) {
            VnIxP.toggleClass("ZBzCK");
          });
        }
        shift = false;
      }
      if (MIwkj != undefined) {
        UA1(ncSEc).value = UA1(ncSEc).value + MIwkj;
		if(MIwkj == "\n"){
			UA1(ncSEc).click();
		}
        andiUA.rYbEe.value = UA1(ncSEc).value;
        if (UA1("body").thasClass("cameraStratType")) {
          UA1('[cameratypeletter="' + localStorage.getItem("cameraTypeLetter") + '"]').previousSibling.value = UA1("#ncSEc").value;
        }
      }
    });
  });
}
andiUA.markTextLagn = function() {
 
  if (false) {
    if (andiUA.zZBgg != "he") {
      for (var TUAi = 0; TUAi < andiUA.MTDeE.length; TUAi++) {
        andiUA.GaopE(document.body, andiUA.MTDeE[TUAi], "", "he");
      }
    }
    if (andiUA.zZBgg != "ar") {
      for (var TUAi = 0; TUAi < andiUA.lZuMU.length; TUAi++) {
        andiUA.GaopE(document.body, andiUA.lZuMU[TUAi], "", "ar");
      }
    }
    if (andiUA.zZBgg != "en") {
      for (var TUAi = 0; TUAi < andiUA.dMkFb.length; TUAi++) {
        andiUA.GaopE(document.body, andiUA.dMkFb[TUAi], "", "en");
      }
    }
    if (andiUA.zZBgg != "ru") {
      for (var TUAi = 0; TUAi < andiUA.zbgOg.length; TUAi++) {
        andiUA.GaopE(document.body, andiUA.zbgOg[TUAi], "", "ru");
      }
    }
  }
};
andiUA.tWLYY = function(qZDvR) {
  
  if (qZDvR != undefined && qZDvR.length > 0) {
    setInterval(function() {
      for (var TUAi = 0; TUAi < qZDvR.length; TUAi++) {
        if (andiUA.zEktm(qZDvR[TUAi].LbWKm, qZDvR[TUAi].yfCnv)) {
          var YMknI = qZDvR[TUAi].YMknI;
          var KINwA = qZDvR[TUAi].KINwA;
          andiUA.wskxV(YMknI, KINwA);
        }
      }
    }, 1000);
  }
};
andiUA.UAfindLightBox = function() {
 
  var wrapPopUpArr = andiUA.findPassebleContainer(["popup", "lightbox"]);
  if (wrapPopUpArr.length > 0) {
    wrapPopUpArr.forEach(function(VnIxP, i) {
      if (!VnIxP.tagName == "BODY" && VnIxP.closest("#jilVt") == null) {
        var FtTIP = VnIxP;
        var closeBtn = FtTIP.querySelector('[class*="close"]');
        andiUA.TUAsettingFn.qZDvR.push({YMknI:FtTIP, KINwA:closeBtn, LbWKm:true, yfCnv:true});
      }
    });
  }
};
andiUA.wskxV = function(YMknI, KINwA) {
 
  setTimeout(function() {
    TUAcurElement = document.activeElement;
    UA(YMknI).forEach(function(VnIxP, i) {
      var FtTIP = VnIxP;
      if (FtTIP.getCss("display") != "none" && FtTIP.getCss("visibility") != "hidden") {
        if (FtTIP.querySelectorAll(".MBtxi").length == 0) {
		  FtTIP.setAttribute('role','dialog');
          FtTIP.brAmf('<div class="MBtxi" tabindex="0" aria-label="' + andiUA.KNTQg.fWPnd + '"> </div>');
          FtTIP.appendHtml('<div class="Yhdpx" tabindex="0" aria-label="' + andiUA.KNTQg.PzKjw + '"> </div>');
          FtTIP.querySelector(".MBtxi").focus();
          eventOn("focusin", ".Yhdpx", function() {
            FtTIP.querySelector(".MBtxi").focus();
          });
        }
      }
    });
    if (KINwA != undefined) {
      UA(KINwA).forEach(function(VnIxP, i) {
        VnIxP.addAttr({"tabindex":"0", "role":"button", "aria-label":andiUA.KNTQg.DiIyH});
      });
      eventOn("keydown", KINwA, function(UAenv) {
        var keyCode = UAenv.keyCode || UAenv.which;
        if (keyCode == 13) {
          this.click();
          setTimeout(function() {
            YMknI.forEach(function(VnIxP, i) {
              VnIxP.querySelector(".MBtxi").zOhhK();
              VnIxP.querySelector(".Yhdpx").zOhhK();
            });
            if (TUAcurElement !== undefined && TUAcurElement !== null) {
              TUAcurElement.focus();
            }
          }, 200);
        }
      });
    }
  }, 800);
};
andiUA.YjADs = function() {
 
  UA1(".Bvuob").css({"width":window.innerWidth, "height":window.innerHeight});
  var a = parseInt(window.innerWidth * 0.8);
  var b = parseInt(UA1("body").getCss("margin-left"));
  var c = parseInt(UA1("body").getCss("margin-right"));
  UA1(".HBQgA").addCss({"width":a - c, "height":window.innerHeight * 0.8 + "px", "margin-top":window.innerHeight * 0.1 + "px", "margin-right":window.innerWidth * 0.1 + "px", "margin-left":window.innerWidth * 0.1 + "px"});
};
andiUA.DYANF = function(ERDKq, data, whereToGoBackAfterClose) {
 
  whereToGoBackAfterClose = whereToGoBackAfterClose || undefined;
  var iArRP = andiUA.KNTQg;
  UA1("body").brAmf('<div class="Bvuob"></div>');
  var KrFJt = UA1("html").getAttr("DOwbI");
  UA1(".Bvuob").brAmf('<div class=" HBQgA" tabindex="0"><input type="image" src="' + andiUA.EglES.WcpNq + '" id="DHvyi" alt="' + andiUA.KNTQg.GYxDi + '" aria-label=""/></div>');
  UA1(".HBQgA").appendHtml('<div class=" HBQgAFirstFocus" aria-label="' + andiUA.KNTQg.fWPnd + '" role="alert" tabindex="0"></div>');
  UA1(".HBQgA").appendHtml(data);
  UA1(".HBQgA").wrapInner("div");
  UA1(".HBQgA > div").setAttribute("tabindex", "0");
  UA1(".HBQgA").appendHtml('<div class=" HBQgALastFocus" tabindex="0"></div>');
  UA1(".HBQgA").appendHtml('<div class=" PzKjw" aria-label="' + andiUA.KNTQg.PzKjw + '" role="alert" tabindex="0"></div>');
  andiUA.YjADs();
  window.addEventListener("resize", function() {
    andiUA.YjADs();
  });
  UA1(".HBQgAFirstFocus").focus();
  UA(".HBQgALastFocus").forEach(function(VnIxP, i) {
    VnIxP.addEventListener("focus", function() {
      VnIxP.parentElement.querySelector("#DHvyi").focus();
    });
  });
  UA1("#DHvyi").addEventListener("click", function() {
    UA1(".Bvuob").zOhhK();
    UA1("#NMqnM").zOhhK();
    ERDKq.focus();
    andiUA.TUAsrMsg(iArRP.DiIyH);
  });
};
andiUA.RwkAt = function(wrapMenu, QtKUe) {
 
  var wrapMenu = wrapMenu;
  if (UA1("#RwkAtStyle").length == 0) {
    var uiWAD = localStorage.getItem("uiWAD");
    UA1("head").appendHtml('<style id="RwkAtStyle">#RwkAt a:focus{outline:2px solid #000 !important;} #RwkAt li {display:inline-block !important;} #RwkAt h2{text-align:center;} #RwkAt{margin: 0 auto !important; text-align:center;} #RwkAt a { text-align: center !important; margin:5px !important;padding-top:25px !important; color:#fff !important; background-color:' + localStorage.getItem("uiWAD") + 
    " !important; vertical-align:top !important; display:inline-block !important;height: 100px !important;width:100px !important;}</style>");
  }
  UA1(QtKUe).brAmf('<button class="ZWDCr" id="RwkAtBtn">' + andiUA.KNTQg.UAtdr2161 + "</button>");
  UA1("#RwkAtBtn").click(function() {
    openRwkAtBtn(wrapMenu);
  });
  function openRwkAtBtn(wrapMenu) {
   
    wrapMenu += " a";
    var text = '<div id="RwkAt"><h2>' + andiUA.KNTQg.UAtdr2160 + "</h2><ul></ul></div>";
    andiUA.DYANF("#RwkAtBtn", text);
    var cloneMenuLinks = UA(wrapMenu);
    var newULMenu = UA1("#RwkAt > ul");
    var arrOfcloneMenuLinkes = [];
    cloneMenuLinks.forEach(function(VnIxP, i) {
      var cloneA = VnIxP.clone(true);
      newULMenu.appendChild(cloneA);
    });
    UA("#RwkAt > ul a").forEach(function(VnIxP, i) {
      VnIxP.addAttr({"tabindex":"0"});
      VnIxP.wrapInner("li");
    });
    var KrFJt = UA1("html").getAttr("DOwbI");
    if (KrFJt == "rtl") {
      UA(".Bvuob").forEach(function(VnIxP, i) {
        VnIxP.addCss({"text-align":"right"});
      });
      UA("#jUbTi, #jUbTi *").forEach(function(VnIxP, i) {
        VnIxP.addAttr({"dir":KrFJt});
      });
      UA1("#DHvyi").addCss({"left":"50px", "position":"fixed", "top":"24px", "z-index":"999999999999999999"});
      UA1("#lobUF").addCss({"text-align":"right"});
    } else {
      UA(".Bvuob").forEach(function(VnIxP, i) {
        VnIxP.addCss({"text-align":"left"});
      });
      UA("#jUbTi, #jUbTi *").forEach(function(VnIxP, i) {
        VnIxP.addAttr({"dir":KrFJt});
      });
      UA1("#DHvyi").addCss({"width":"35px", "right":"50px", "position":"fixed", "top":"24px", "z-index":"999999999999999999"});
      UA1("#lobUF").addCss({"text-align":"left"});
    }
    UA1("#RwkAt > ul a").focus();
  }
};
andiUA.FpPzb = function() {
 
  var GqMsb = false;
  if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0) {
    GqMsb = true;
  }
  if (!GqMsb) {
    if (UA("#imgtoGray").length == 0) {
      UA1("head").appendHtml('<style id="imgtoGray"> html {-webkit-filter: grayscale(1) !important;  filter: grayscale(100%) !important;-ms-filter: grayscale(100%);filter: gray !important;}</style>');
    }
  } else {
    UA1("#gNkmS").click();
    alert(andiUA.KNTQg.UAtdr2192);
  }
};
if (andiUA.GqMsb()) {
  (function(window, document) {
    var slice = [].slice;
    var tremoveClass = function(elem) {
      elem.classList.remove("focus-within");
    };
    var update = function() {
      var running, last;
      var action = function() {
        var element = document.activeElement;
        running = false;
        if (last !== element) {
          last = element;
          slice.call(document.getElementsByClassName("focus-within")).forEach(tremoveClass);
          while (element && element.classList) {
            element.classList.add("focus-within");
            element = element.parentNode;
          }
        }
      };
      return function() {
        if (!running) {
          requestAnimationFrame(action);
          running = true;
        }
      };
    }();
    document.addEventListener("focus", update, true);
    document.addEventListener("blur", update, true);
    update();
  })(window, document);
}
andiUA.fCUqq = function() {
 
  andiUA.gPzFa();
};
andiUA.mJyEv = function(lprde, ILZYZ) {
  
  (function() {
    ajax1.post(ILZYZ, {lprde:lprde}, function(responseText) {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr159);
    }, true);
  })();
};
andiUA.yMmKY = function(id) {
 
  id = UA1("#" + id);
  if (UA1("#EXRcw").thasClass("xJGcA")) {
    UA1("#EXRcw").click();
  }
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.QMUoB();
  } else {
    id.taddClass("xJGcA");
    id.taddClass("vKDQY");
    andiUA.RFrtA();
    andiUA.createStorageItem("rwRbL", "white");
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.runstopGif = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    andiUA.removeStorageItem("TUAstopGif");
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
  } else {
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2105);
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.ANDIstopGif();
    andiUA.createStorageItem("TUAstopGif", "yes");
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.runTUAstopSliders = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("vKDQY")) {
    andiUA.removeStorageItem("TUAstopSliders");
    andiUA.removeStorageItem("TUAstopGif");
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.VideoFinderPlay();
    UA('[id^="DRXXH"]').forEach(function(el) {
      if (el.thasClass("EdPOq")) {
        el.click();
      }
      el.zOhhK();
    });
	location.reload();
    andiUA.TUAsrMsg(andiUA.KNTQg.bbb382);
  } else {
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2106);
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    if (!UA1("#TUAstopGif").thasClass("vKDQY")) {
      UA1("#TUAstopGif").click();
    }
    andiUA.ANDIstopSliderMovmanet();
    andiUA.createStorageItem("TUAstopSliders", "yes");
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.OGzKz = function(id) {
 
  id = UA1("#" + id);
  if (UA1("#TUAwhiteMouse").thasClass("xJGcA")) {
    UA1("#TUAwhiteMouse").click();
  }
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.QMUoB();
  } else {
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.hMExZ();
    andiUA.createStorageItem("rwRbL", "black");
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.runsadvancedSupportForScreenReader = function(id) {
  
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    andiUA.removeStorageItem("advancedSupportForScreenReader");
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2101);
    }, 250);
    andiUA.removeStorageItem("andihighLightFocus");
    andiUA.removeStorageItem("TUAreviledHiddingInfo");
    andiUA.removeStorageItem("TUAandirasheTevot");
    if (UA1("#JhgsJ").thasClass("vKDQY")) {
      UA1("#JhgsJ").click();
    }
    if (UA1("#TUArasheTevot").thasClass("vKDQY")) {
      UA1("#TUArasheTevot").click();
    }
    if (UA1("#JhgsJ2") !== null) {
      UA1("#JhgsJ2").addCss({"background-color":""});
    }
    if (UA1("#TUArasheTevot2") !== null) {
      UA1("#TUArasheTevot2").addCss({"background-color":""});
    }
  } else {
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.createStorageItem("advancedSupportForScreenReader", "yes");
    if (!UA1("#JhgsJ").thasClass("vKDQY")) {
      UA1("#JhgsJ").click();
    }
    if (UA1("#JhgsJ2") !== null) {
      UA1("#JhgsJ2").addCss({"background-color":"rgb(252, 68, 130)"});
    }
    if (!UA1("#TUArasheTevot").thasClass("vKDQY")) {
      UA1("#TUArasheTevot").click();
    }
    if (UA1("#TUArasheTevot2") !== null) {
      UA1("#TUArasheTevot2").addCss({"background-color":"rgb(252, 68, 130)"});
    }
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2100);
    }, 250);
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.VdrDa = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.VWQcZ();
  } else {
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.GOZnX();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.WEzPa = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr214);
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("ScJKe");
    if (UA1("#ZxBGV") !== null) {
      UA1("#ZxBGV").zOhhK();
    }
    if (UA1("#ScJKeImg") !== null) {
      UA1("#ScJKeImg").zOhhK();
    }
    UA("img").forEach(function(VnIxP, index) {
      VnIxP.tremoveAttr("tabindex");
      VnIxP.tremoveAttr("ScJKeImg");
    });
  } else {
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.createStorageItem("ScJKe", "yes");
    andiUA.tgUXd();
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr213);
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.PwzIv = function(CxhBETUASizeText) {
 
  var slidersizetextnumbermoveElm = UA1("#hKyOI");
  var sjedpElm = UA1("#sjedp");
  var distance = 84 / 8;
  var moveSlider = 4 - CxhBETUASizeText;
  if (andiUA.DOwbI == "ltr") {
    slidersizetextnumbermoveElm.addCss({"display":"inline-block"});
    slidersizetextnumbermoveElm.addCss({"left":distance * moveSlider + "px"});
  } else {
    slidersizetextnumbermoveElm.addCss({"display":"inline-block"});
    slidersizetextnumbermoveElm.addCss({"right":distance * moveSlider + "px"});
  }
  if (CxhBETUASizeText > 0) {
    var YSnEe = "+" + CxhBETUASizeText;
  } else {
    var YSnEe = CxhBETUASizeText;
  }
  UA1("#XjgPc").innerHTML = YSnEe;
};
andiUA.checkIffontsizeChangeiszero = function(CxhBETUASizeText) {
 
  if (CxhBETUASizeText == 0) {
    andiUA.frhQA();
    UA1("#hKyOI").addCss({"display":"none"});
    if (andiUA.DOwbI == "ltr") {
      UA1("#hKyOI").addCss({"left":"49%"});
    } else {
      UA1("#hKyOI").addCss({"right":"49%"});
    }
    UA1("#LMkvg").addCss({"background-color":"#F0417C"});
    setTimeout(function() {
      UA1("#LMkvg").addCss({"background-color":""});
    }, 500);
    UA("#JPRSV , #xPEGE").forEach(function(VnIxP, i) {
      VnIxP.tremoveClass("xJGcA");
      VnIxP.tremoveClass("vKDQY");
    });
  } else {
    andiUA.PwzIv(CxhBETUASizeText);
  }
};
andiUA.checkactiveSizeTextBtn = function(CxhBETUASizeText) {
 
  if (CxhBETUASizeText > 0) {
    andiUA.removeStorageItem("xPEGE");
    UA1("#xPEGE").tremoveClass("vKDQY");
    UA1("#JPRSV").taddClass("vKDQY");
    andiUA.createStorageItem("JPRSV", "yes");
  } else {
    if (CxhBETUASizeText < 0) {
      andiUA.removeStorageItem("JPRSV");
      UA1("#JPRSV").tremoveClass("vKDQY");
      UA1("#xPEGE").taddClass("vKDQY");
      andiUA.createStorageItem("xPEGE", "yes");
    } else {
      andiUA.removeStorageItem("JPRSV");
      UA1("#JPRSV").tremoveClass("vKDQY");
      andiUA.removeStorageItem("xPEGE");
      UA1("#xPEGE").tremoveClass("vKDQY");
    }
  }
};
andiUA.JLYEv = function(id) {
 
  var CxhBETUASizeText = localStorage.getItem("TUASizeText");
  if (CxhBETUASizeText == null || CxhBETUASizeText == "null") {
    CxhBETUASizeText = 0;
    andiUA.createStorageItem("TUASizeText", CxhBETUASizeText);
  }
  CxhBETUASizeText = parseInt(CxhBETUASizeText);
  if (CxhBETUASizeText > -4) {
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr216);
    andiUA.checkactiveSizeTextBtn(CxhBETUASizeText);
    andiUA.removeStorageItem("JPRSV");
    andiUA.createStorageItem("xPEGE", "yes");
    CxhBETUASizeText = parseInt(CxhBETUASizeText) - 1;
    andiUA.createStorageItem("TUASizeText", CxhBETUASizeText);
    andiUA.PFYhH(CxhBETUASizeText);
    UA1("#JPRSV").tremoveClass("vKDQY");
    UA1("#xPEGE").taddClass("vKDQY");
    andiUA.checkIffontsizeChangeiszero(CxhBETUASizeText);
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.UkCLK = function(id) {
 
  var CxhBETUASizeText = localStorage.getItem("TUASizeText");
  if (CxhBETUASizeText == null || CxhBETUASizeText == "null") {
    CxhBETUASizeText = 0;
    andiUA.createStorageItem("TUASizeText", CxhBETUASizeText);
  }
  CxhBETUASizeText = parseInt(CxhBETUASizeText);
  if (CxhBETUASizeText < 4) {
    andiUA.checkactiveSizeTextBtn(CxhBETUASizeText);
    andiUA.removeStorageItem("xPEGE");
    andiUA.createStorageItem("JPRSV", "yes");
    UA1("#xPEGE").tremoveClass("vKDQY");
    UA1("#JPRSV").taddClass("vKDQY");
    CxhBETUASizeText = parseInt(CxhBETUASizeText) + 1;
    andiUA.createStorageItem("TUASizeText", CxhBETUASizeText);
    andiUA.PFYhH(CxhBETUASizeText);
    andiUA.checkIffontsizeChangeiszero(CxhBETUASizeText);
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr215);
    }, 10);
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.fjyad = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.hzies();
  } else {
    andiUA.hzies();
    UA1("#TUAalignLRight").tremoveClass("xJGcA");
    UA1("#TUAalignLRight").tremoveClass("vKDQY");
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.ptixu();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.KBNjF = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.hzies();
  } else {
    UA1("#TUAalignLeft").tremoveClass("vKDQY");
    UA1("#TUAalignLeft").tremoveClass("xJGcA");
    andiUA.hzies();
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.TUAchangeAlignRight();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.JiUJU = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.fUuAl();
    andiUA.PXwAF();
  } else {
    if (UA1(".qlphO") !== null) {
      UA1(".qlphO").zOhhK();
    }
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.TUAchangehighLightFocus();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.pJLIx = function(id) {
 
  var id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.wGidZ();
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2180);
  } else {
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.gdJed();
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr2179);
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.runshighContrastMenu = function() {
 
  var id = UA1("#highContrastMenu");
  if (id.thasClass("activehighContrastMenu")) {
    id.tremoveClass("activehighContrastMenu");
    UA1("body").tremoveClass("highContrastMenu");
    andiUA.removeStorageItem("highContrastMenu");
    andiUA.removehighContrastMenu();
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.bbb31);
    }, 100);
  } else {
    id.taddClass("activehighContrastMenu");
    andiUA.createStorageItem("highContrastMenu", "yes");
    andiUA.sethighContrastMenu();
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.bbb32);
    }, 100);
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.removehighContrastMenu = function() {
 
  if (UA1("#highContrastMenuStyle") !== null) {
    UA1("#highContrastMenuStyle").zOhhK();
  }
  UA1("body").tremoveClass("LightHighContrastMenu");
  UA1("#highContrastMenu").tremoveClass("activehighContrastMenu");
};
andiUA.sethighContrastMenu = function() {
 
  andiUA.removehighContrastMenu();
  UA1("body").taddClass("highContrastMenu");
  UA1("#highContrastMenu").taddClass("activehighContrastMenu");
  UA1("body").appendHtml('<style id="highContrastMenuStyle">#jilVt,#jilVt :not(.oECFzColor),#HxpCr .KSsgr .Zrljr,#HxpCr .KSsgr .VDmCM,#GRwhC,#GRwhC *{background-color:#000!important;color:#fff!important}#jilVt input,#jilVt select,#jilVt textarea,#GRwhC input,#GRwhC select,#GRwhC textarea{color:#ff0!important}#jilVt ::placeholder,#GRwhC ::placeholder{color:red;opacity:1}#jilVt :-ms-input-placeholder,#GRwhC ::placeholder{color:red}#jilVt ::-ms-input-placeholder,#GRwhC ::placeholder{color:red}#Layer_111 .UAcls-1,#ZFdLI,#BeDAB,svg{fill:#ff0}#Layer_1 path,#jilVt .vKDQY svg{fill:#fff!important}#YlCpH [d="M8.798 24.306L5.37 18.44l-1.653-2.482c-.29.11-.5.22-.632.328-.69.56-1.034 1.494-1.034 2.81v5.21H.246v-4.56c0-1.59.235-2.767.707-3.536.19-.312.453-.604.79-.877.337-.27.742-.488 1.213-.646l-2.7-4.417H2.3l3.223 5.43 1.817 2.817c.37-.217.644-.44.822-.676.177-.23.325-.543.445-.943.12-.398.18-.87.18-1.414V10.27h1.807v4.558c0 .596-.026 1.11-.077 1.54s-.156.888-.314 1.366c-.327.97-1.02 1.666-2.08 2.078l2.71 4.494H8.8zm15.673 0l-4.674-8-2.256-3.386c-.397.15-.685.298-.862.445-.94.763-1.41 2.04-1.41 3.83v7.11h-2.464v-6.22c0-2.167.32-3.774.964-4.824.258-.424.617-.822 1.076-1.193.46-.37 1.012-.665 1.656-.883l-3.682-6.026h2.79l4.394 7.407 2.48 3.845c.503-.298.876-.605 1.12-.92.242-.32.445-.75.607-1.293.162-.544.244-1.188.244-1.93v-7.11h2.467v6.22c0 .81-.034 1.51-.104 2.1-.068.59-.213 1.21-.43 1.862-.447 1.326-1.393 2.27-2.838 2.834l3.698 6.13H24.47z"],#YlCpH [d="M7.522 20.623h-5.91L.285 24.306h-1.918L3.754 10.2h1.628l5.397 14.106H8.87l-1.348-3.683zm-5.348-1.53H6.97l-2.403-6.598-2.393 6.598zM24.108 19.307h-8.024l-1.8 5H11.68L18.99 5.154h2.21l7.326 19.15h-2.592l-1.828-4.998zm-7.26-2.078h6.512L20.097 8.27l-3.25 8.957z"]{fill:#000}#jilVt #fvLXm .khlBU .bkVMl{background-color:#000!important}#jilVt,#jilVt [role=button]:not(.Awzjy):not(.AueIG):not(#dXLgH):not(#andiSetting):not(#JlUMY):not(#iLSlI):not(#fjaun),#VbcHu,#BEMFU,#GRwhC,#cqUuD,[class^=kkeiq]{outline:#fff solid 1px!important}#YFJzt,#yCrCd{border:1px solid #fff!important}#jilVt .vKDQY,#jilVt .vKDQY *{background-color:#00f!important}#jilVt #fvLXm .owUce p{width:auto!important;padding-top:118px!important;background-color:transparent!important}#fvLXm .bnVjM{height:121px;background-repeat:no-repeat;background-size:100%}#fvLXm .bnVjM img{height:121px}#jilVt :focus{-webkit-box-shadow:0 0 0 4px #ff4081!important;-moz-box-shadow:0 0 0 4px #ff4081!important;box-shadow:0 0 0 4px #ff4081!important}#andiwrapsmallmenusetting{outline:#fff solid 2px}#HxpCr .KSsgr .Zrljr *{color:#fff!important}#oAHBI,#ypswI,#yKaGk,#CzFAz{fill:#007BBD!important}.highContrastMenu #sjedp{background-color:#fff!important}#cGvHB{outline:#fff solid 0!important}</style>');
};
andiUA.ARcaN = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("vKDQY")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    if (UA1("#WXgsK")) {
      UA1("#WXgsK").zOhhK();
    }
    if (UA1("#GRwhC")) {
      UA1("#GRwhC").zOhhK();
    }
    andiUA.removeStorageItem("TUAwikipedia");
  } else {
    if ((localStorage.getItem("UASetnumber") == "null" || localStorage.getItem("UASetnumber") == null) && localStorage.getItem("TUAwikipedia") != "yes") {
      var UAhtml = "<h3>" + andiUA.KNTQg.bbb196 + " " + UA1("#TUAwikipedia").BKXPP() + "</h3><p>" + andiUA.KNTQg.bbb431 + "<br/><br/>" + andiUA.KNTQg.bbb432 + "</p>";
      andiUA.menuMessageAlert(UAhtml);
    }
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.createStorageItem("TUAwikipedia", "yes");
    andiUA.createVikiSearch();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.OcsYO = function(id) {
  
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("BBEINAreaBtn");
    UA(".wrapfocusonarea, .wrapfocusonareaStyle").forEach(function(VnIxP, index) {
      VnIxP.zOhhK();
    });
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr253);
    andiUA.removeStorageItem("epilepsy");
  } else {
	  if (andiUA.zZBgg == "he") {
		  andiUA.KNTQg.alertFocusAreaBtn = 'פונקציה זו אינה מותאמת לריבוי מסכים. האם אתם מתשמשים במסך אחד?';
	  } else if (andiUA.zZBgg == "ru") {
		  andiUA.KNTQg.alertFocusAreaBtn = 'Эта функция не совместима с несколькими экранами. Вы используете один экран?';
	  } else {
		  andiUA.KNTQg.alertFocusAreaBtn = 'This function is not compatible with multiple screens. Are you using one screen?';
	  }
	if(confirm(andiUA.KNTQg.alertFocusAreaBtn)){
		var Toovya = false;
		andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr252);
		id.taddClass("vKDQY");
		andiUA.TUAdimmAndhighlightArea();
		id.taddClass("xJGcA");
		andiUA.createStorageItem("BBEINAreaBtn", "yes");
		andiUA.createStorageItem("epilepsy", "yes");
	}
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.gpzEg = function() {
  
  var numberQ = 5;
  numberQ = numberQ + UA('[uashowquestion="true"]').length;
  UA1("#hYHUX").innerHTML = " " + numberQ + " ";
};
andiUA.menuMessageAlert = function(UAhtml, wrapper, showCloseBtn) {
 
  if (localStorage.getItem("allowDisplayMessage") != "no") {
    UAhtml = UAhtml || "";
    if (wrapper == undefined) {
      wrapper = "#jilVt";
    }
    if (showCloseBtn == undefined) {
      showCloseBtn = true;
    }
    if (UA1("#menuMessageAlert") === null) {
      var winWidth = UA1(wrapper).clientWidth;
      var winHeight = UA1(wrapper).clientHeight;
      var popupW = winWidth * 0.8;
      var popupH = winHeight * 0.8;
      var popupMargin = 100 + "px " + winWidth * 0.1 + "px";
      var btnHtml = '<div class="closemenuMessageAlertAndiBtn" role="button" tabindex="0" aria-label="' + andiUA.KNTQg.GYxDi + '">' + andiUA.KNTQg.bbb43 + "</div>";
      if (!showCloseBtn) {
        btnHtml = "";
      }
      UA1("head").appendHtml('<style id="menuMessageAlertStyle">#menuMessageAlert {z-index:  999999999;margin: ' + popupMargin + ";max-height: " + (popupH - 50) + "px;width: " + popupW + "px;}#menuMessageAlert .wrapText{max-height: " + (window.innerHeight < popupH ? window.innerHeight * 0.8 : popupH - 50) + "px;}</style>");
      var thisActiveElm = document.activeElement;
      var UAhtml3 = '<div id="menuMessageAlert"><div class="MBtxi" tabindex="0"  aria-label="' + andiUA.KNTQg.fWPnd + '"></div>\t\t\t\t\t<div class="closemenuMessageAlert" tabindex="0" role="button" aria-label="' + andiUA.KNTQg.GYxDi + '">X</div>\t\t\t\t\t<div class="wrapText"></div>\t\t\t\t\t<div class="Yhdpx" tabindex="0" aria-label="' + andiUA.KNTQg.PzKjw + 
      '"></div>\t\t\t\t\t<div>';
	  UA1(wrapper).setAttribute('role','dialog');
      UA1(wrapper).appendHtml(UAhtml3);
      UA1(wrapper).tfind(".wrapText")[0].pCFOS(UAhtml);
      UA1("#menuMessageAlert .wrapText").appendHtml(btnHtml);
      UA1("#menuMessageAlert .closemenuMessageAlert").addEventListener("click", function() {
        UA1("#menuMessageAlertStyle").zOhhK();
        UA1("#menuMessageAlert").zOhhK();
        thisActiveElm.focus();
        andiUA.TUAsrMsg(andiUA.KNTQg.DiIyH);
      });
      UA1("#menuMessageAlert .closemenuMessageAlert").addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
          this.click();
        }
      });
      if (showCloseBtn && UA1("#menuMessageAlert .closemenuMessageAlertAndiBtn")) {
        UA1("#menuMessageAlert .closemenuMessageAlertAndiBtn").addEventListener("click", function() {
          UA1("#menuMessageAlert .closemenuMessageAlert").click();
        });
        UA1("#menuMessageAlert .closemenuMessageAlertAndiBtn").addEventListener("keydown", function(e) {
          if (e.keyCode == 13) {
            this.click();
          }
        });
      }
    } else {
      if (UA1("#menuMessageAlert .closemenuMessageAlertAndiBtn")) {
        var UAnewHtml = document.createElement("DIV");
        UAnewHtml.innerHTML = UAhtml;
        UA1("#menuMessageAlert .closemenuMessageAlertAndiBtn").insertBeforeElm(UAnewHtml);
      } else {
        UA1("#menuMessageAlert .wrapText").appendHtml(UAhtml);
      }
      UA1("#menuMessageAlert .MBtxi").focus();
    }
    var focusonpopup = setInterval(function() {
      if (UA1("#menuMessageAlert .MBtxi")) {
        clearInterval(focusonpopup);
        UA1("#menuMessageAlert .MBtxi").focus();
        UA1("#menuMessageAlert .Yhdpx").addEventListener("focusin", function() {
          UA1("#menuMessageAlert .MBtxi").focus();
        });
        UA1("#menuMessageAlert .MBtxi").addEventListener("keydown", function(UAenv) {
          if (UAenv.keyCode == 9 && UAenv.shiftKey) {
            UA1("#menuMessageAlert .closemenuMessageAlertAndiBtn").focus();
          }
        });
      }
    }, 400);
  }
};
andiUA.RroPQ = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.TUAremoveReviledHiddingInfo();
  } else {
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.PhVFOReviledHiddingInfo();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.vKjNI = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("navigateWithLetters");
    andiUA.TUAoffNavigateWithLetters();
    UA("input").forEach(function(VnIxP, i) {
      VnIxP.tremoveAttr("continueToNextElm");
      VnIxP.tremoveAttr("readonly");
    });
    if (UA1("#WhyBe") !== null) {
      UA1("#WhyBe").click();
    }
    if (UA1("#wrapNavigateWithLetters .andicloseSaveOption") !== null) {
      UA1("#wrapNavigateWithLetters .andicloseSaveOption").click();
    }
  } else {
    if ((localStorage.getItem("UASetnumber") == "null" || localStorage.getItem("UASetnumber") == null) && localStorage.getItem("navigateWithLetters") != "yes") {
      var UAhtml = "<h3>" + andiUA.KNTQg.bbb196 + " " + andiUA.KNTQg.ozpFc + "</h3><p>" + andiUA.KNTQg.UAtdr2123 + "<br/>" + andiUA.KNTQg.UAtdr2124 + "</p><ul><li>" + andiUA.KNTQg.UAtdr2125 + "</li><li>" + andiUA.KNTQg.UAtdr2126 + "</li><li>" + andiUA.KNTQg.UAtdr2127 + "</li><li>" + andiUA.KNTQg.UAtdr2128 + "</li><li>" + andiUA.KNTQg.UAtdr2129 + "</li><li>" + andiUA.KNTQg.UAtdr2130 + 
      "</li><li>" + andiUA.KNTQg.UAtdr2131 + "</li><li>" + andiUA.KNTQg.UAtdr2132 + "</li></ul>";
      andiUA.menuMessageAlert(UAhtml);
    }
    if (UA1("#gcFQn").thasClass("vKDQY")) {
      UA1("#gcFQn").click();
    }
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.createStorageItem("navigateWithLetters", "yes");
    andiUA.TUApreperNavigateWithLetters();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.DOfyz = function(id) {
  
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("gcFQn");
    andiUA.WjLsa();
    if (UA1("#eHFXi") !== null) {
      UA1("#eHFXi").zOhhK();
    }
    document.body.style.height = "";
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr245);
  } else {
    if ((localStorage.getItem("UASetnumber") == "null" || localStorage.getItem("UASetnumber") == null) && localStorage.getItem("gcFQn") !== "yes") {
      var UAhtml = "<h3>" + UA1("#gcFQn").innerText + "</h3><p>" + andiUA.KNTQg.UAtdr167 + "</p>";
      andiUA.menuMessageAlert(UAhtml);
    }
    var TUAnavigateWithLettersElm = UA1("#TUAnavigateWithLetters");
    if (TUAnavigateWithLettersElm !== null && TUAnavigateWithLettersElm.thasClass("vKDQY")) {
      TUAnavigateWithLettersElm.click();
    }
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr244);
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.createStorageItem("gcFQn", "yes");
    andiUA.WjLsa();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.runsmzWNy = function(id) {
  
  id = UA1("#" + id);
  UA1("#TUAwhiteContrast").tremoveClass("vKDQY");
  UA1("#TUAwhiteContrast").tremoveClass("xJGcA");
  andiUA.removeStorageItem("TUAwhiteContrast");
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("mzWNy");
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr230);
    }, 100);
    andiUA.resetAllColors();
    if (UA1("#notColorChangeBlackStyle") !== null) {
      UA1("#notColorChangeBlackStyle").zOhhK();
    }
    if (UA1("#TUAandihighLightlink").thasClass("xJGcA")) {
      UA1("#TUAandihighLightlink").click();
    }
    UA1("#highContrastMenu").tremoveClass("activehighContrastMenu");
    andiUA.AqzoU("NtzHe");
    andiUA.AqzoU("BjgnQ");
    andiUA.AqzoU("zmpAd");
  } else {
    if (UA1("#gNkmS").thasClass("xJGcA")) {
      UA1("#gNkmS").click();
    }
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr229);
    }, 100);
    andiUA.resetAllColors();
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.sethighContrastMenu();
    andiUA.createStorageItem("mzWNy", "yes");
    andiUA.VmzyF("black");
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.runsTUAwhiteContrast = function(id) {
  
  id = UA1("#" + id);
  if (UA1("#mzWNy") !== null) {
    UA1("#mzWNy").tremoveClass("vKDQY");
    UA1("#mzWNy").tremoveClass("xJGcA");
  }
  andiUA.removeStorageItem("mzWNy");
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("TUAwhiteContrast");
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr232);
    }, 100);
    andiUA.resetAllColors();
    if (UA1("#TUAandihighLightlink").thasClass("xJGcA")) {
      UA1("#TUAandihighLightlink").click();
    }
    UA1("body").tremoveClass("LightHighContrastMenu");
  } else {
    if (UA1("#gNkmS").thasClass("xJGcA")) {
      UA1("#gNkmS").click();
    }
    andiUA.removeStorageItem("highContrastMenu");
    andiUA.removehighContrastMenu();
    UA1("body").tremoveClass("highContrastMenu");
    andiUA.resetAllColors();
    UA1("head").appendHtml('<style id="LightHighContrastMenuStyle">#jilVt,#jilVt :not(.oECFzColor),#HxpCr .KSsgr .Zrljr,#HxpCr .KSsgr .VDmCM,#GRwhC,#GRwhC *,.bkVMl{background-color:#005A8C!important;color:#fff!important}.LightHighContrastMenu #sjedp{background-color:#Fff!important}#jilVt input,#jilVt select,#jilVt textarea,#GRwhC input,#GRwhC select,#GRwhC textarea{color:#fff!important}#jilVt ::placeholder,#GRwhC ::placeholder{color:red;opacity:1}#jilVt :-ms-input-placeholder,#GRwhC ::placeholder{color:red}#jilVt ::-ms-input-placeholder,#GRwhC ::placeholder{color:red}#Layer_111 .UAcls-1,#ZFdLI,#BeDAB,svg{fill:#fff}#YlCpH [d="M8.798 24.306L5.37 18.44l-1.653-2.482c-.29.11-.5.22-.632.328-.69.56-1.034 1.494-1.034 2.81v5.21H.246v-4.56c0-1.59.235-2.767.707-3.536.19-.312.453-.604.79-.877.337-.27.742-.488 1.213-.646l-2.7-4.417H2.3l3.223 5.43 1.817 2.817c.37-.217.644-.44.822-.676.177-.23.325-.543.445-.943.12-.398.18-.87.18-1.414V10.27h1.807v4.558c0 .596-.026 1.11-.077 1.54s-.156.888-.314 1.366c-.327.97-1.02 1.666-2.08 2.078l2.71 4.494H8.8zm15.673 0l-4.674-8-2.256-3.386c-.397.15-.685.298-.862.445-.94.763-1.41 2.04-1.41 3.83v7.11h-2.464v-6.22c0-2.167.32-3.774.964-4.824.258-.424.617-.822 1.076-1.193.46-.37 1.012-.665 1.656-.883l-3.682-6.026h2.79l4.394 7.407 2.48 3.845c.503-.298.876-.605 1.12-.92.242-.32.445-.75.607-1.293.162-.544.244-1.188.244-1.93v-7.11h2.467v6.22c0 .81-.034 1.51-.104 2.1-.068.59-.213 1.21-.43 1.862-.447 1.326-1.393 2.27-2.838 2.834l3.698 6.13H24.47z"],#YlCpH [d="M7.522 20.623h-5.91L.285 24.306h-1.918L3.754 10.2h1.628l5.397 14.106H8.87l-1.348-3.683zm-5.348-1.53H6.97l-2.403-6.598-2.393 6.598zM24.108 19.307h-8.024l-1.8 5H11.68L18.99 5.154h2.21l7.326 19.15h-2.592l-1.828-4.998zm-7.26-2.078h6.512L20.097 8.27l-3.25 8.957z"]{fill:#005A8C}#jilVt #fvLXm .khlBU .bkVMl{background-color:#005A8C!important}#jilVt,#jilVt [role=button]:not(.Awzjy):not(.AueIG):not(#dXLgH):not(#andiSetting):not(#JlUMY):not(#iLSlI):not(#fjaun),#VbcHu,#BEMFU,#GRwhC,[class^=kkeiq]{outline:#fff solid 1px!important}#YFJzt,#yCrCd,#cqUuD{border:1px solid #fff!important}#fvLXm .bnVjM{width:148px}#jilVt .vKDQY,#jilVt .vKDQY *{background-color:#ccc!important;color:#000!important}#jilVt .vKDQY svg{fill:#000!important}#jilVt #fvLXm .owUce p{width:auto!important;padding-top:118px;color:#fff!important}#fvLXm .bnVjM img{height:121px!important}.UA2bigMenu #fvLXm .bnVjM img{height:calc(122px * 1.3)!important}#Layer_1 path{fill:#fff!important}#vbCoe div.bkVMl>div.xFWoP,#ratYL div.bkVMl>div.xFWoP,#oGNab div.bkVMl>div.xFWoP,#jilVt #FbKLK a,#yIiKG div.bkVMl>div.xFWoP,#PRxAh .mJoej .wxYqU .fEqjh,#gAoCt #YIRzs{color:#fff!important}#PRxAh .mJoej .EbTkc [aria-checked=true]{background-color:#000!important}#jilVt #fvLXm .khlBU .vjEnr{background-color:#005A8C!important}#jilVt :focus,#jilVt [role=button]:hover,#jilVt a:hover,#jilVt button:hover,#jilVt input:hover{outline:#fff solid 3px!important}#oAHBI,#ypswI,#yKaGk,#CzFAz{fill:#ccc!important}#fvLXm .bnVjM{z-index:9999999999;height:122px!important;background-repeat:no-repeat;background-size:100%}#andiwrapsmallmenusetting{outline:#000 solid 2px}#cGvHB{outline:#fff solid 0!important}</style>');
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr231);
    }, 100);
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    UA1("body").taddClass("LightHighContrastMenu");
    andiUA.createStorageItem("TUAwhiteContrast", "yes");
    andiUA.VmzyF("white");
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.MnQea = function(id) {
 
  id = UA1("#" + id);
  if (id.thasClass("xJGcA")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("gNkmS");
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr234);
    }, 100);
    if (UA1("#imgtoGray") !== null) {
      UA1("#imgtoGray").zOhhK();
    }
  } else {
    if (UA1("#mzWNy") !== null) {
      UA1("#mzWNy").tremoveClass("vKDQY");
      UA1("#mzWNy").tremoveClass("xJGcA");
    }
    if (UA1("#TUAwhiteContrast") !== null) {
      UA1("#TUAwhiteContrast").tremoveClass("vKDQY");
      UA1("#TUAwhiteContrast").tremoveClass("xJGcA");
    }
    setTimeout(function() {
      andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr233);
    }, 100);
    andiUA.resetAllColors();
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    andiUA.createStorageItem("gNkmS", "yes");
    andiUA.FpPzb();
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.Imuga = function(id) {
  
  id = UA1("#" + id);
  if (id.thasClass("vKDQY")) {
    id.tremoveClass("vKDQY");
    id.tremoveClass("xJGcA");
    andiUA.removeStorageItem("TUAandirasheTevot");
    if (UA1("#rasheStyle")) {
      UA1("#rasheStyle").zOhhK();
    }
    UA(".rashe").forEach(function(el) {
      el.tremoveClass("rashe");
    });
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr251);
  } else {
    andiUA.TUAsrMsg(andiUA.KNTQg.UAtdr250);
    id.taddClass("vKDQY");
    id.taddClass("xJGcA");
    if ((localStorage.getItem("UASetnumber") == "null" || localStorage.getItem("UASetnumber") == null) && localStorage.getItem("TUAandirasheTevot") !== "yes") {
      var UAhtml = "<h3>" + andiUA.KNTQg.bbb196 + " " + id.innerText + "</h3><p>" + andiUA.KNTQg.bbb197 + "</p>";
      andiUA.menuMessageAlert(UAhtml);
    }
    var xoLox = UA('p,h1,h2,h3,h4,h5,h6,span,a,b,i,[data-andiallelmwithtext]');
    andiUA.findAndReplaceDOMText2(xoLox);
    andiUA.createStorageItem("TUAandirasheTevot", "yes");
  }
  andiUA.ANDIcheckForActiveFns();
};
andiUA.ZXsxe = function() {
  
  UA1("#TUAspaceLines").tremoveClass("vKDQY");
  UA1("#TUAspaceLines").tremoveClass("xJGcA");
  if (UA1("#andiLineHeightStyle") !== null) {
    UA1("#andiLineHeightStyle").zOhhK();
  }
  if (UA1("#MoexW") !== null) {
    UA1("#TUAspaceLines").click();
  }
  andiUA.IVUio();
  UA1("#TUAspaceLines").focus();
};
andiUA.fSAok = function() {
  
  UA1("#TUAspaceLetter").tremoveClass("vKDQY");
  UA1("#TUAspaceLetter").tremoveClass("xJGcA");
  if (UA1("#andispaceLetterStyle") !== null) {
    UA1("#andispaceLetterStyle").zOhhK();
  }
  andiUA.GwlWc();
  if (UA1("#MoexW") !== null) {
    UA1("#TUAspaceLetter").click();
  }
  UA1("#TUAspaceLetter").focus();
};
andiUA.itkQd = function() {
  
  UA1("#TUAspaceWords").tremoveClass("vKDQY");
  UA1("#TUAspaceWords").tremoveClass("xJGcA");
  if (UA1("#andispaceWordStyle") !== null) {
    UA1("#andispaceWordStyle").zOhhK();
  }
  andiUA.FFYgj();
  if (UA1("#MoexW") !== null) {
    UA1("#TUAspaceWords").click();
  }
  UA1("#TUAspaceWords").focus();
};
andiUA.newTag = function() {
 
  var tHEWd = localStorage.getItem("tHEWd");
  if (tHEWd != "true") {
    UA("#UAeasyRead,#giUwZ, #gcFQn, #TUAnavigateWithLetters, #EXRcw, #zmpAd, #BjgnQ, #NtzHe, #TUAFocusAreaBtn, #TUAreviledHiddingInfo, #TUArasheTevot, #TUAwikipedia, #TUAprint, #TUAshowMainContent, #TUAreadsAloud, #TUAspaceWords, #TUAspaceLetter, #TUAspaceLines").forEach(function(VnIxP, i) {
      VnIxP.appendHtml('<span class="tHEWd">' + andiUA.KNTQg.UAtdr191 + "</span>");
    });
    andiUA.createStorageItem("tHEWd", "true");
  }
};
andiUA.andiShowLogInOrOut = function() {
  
  if (!andiUA.pUVLT) {
    if (localStorage.getItem("andiislogin") == "true") {
      if (UA1("#dXLgH") !== null) {
        UA1("#dXLgH").addCss({"display":"none"});
      }
      if (UA1("#andiuserheaderloginconnect") !== null) {
        UA1("#andiuserheaderloginconnect").addCss({"display":"inline-block"});
      }
    } else {
      if (UA1("#andiuserheaderloginconnect") !== null) {
        UA1("#andiuserheaderloginconnect").addCss({"display":"none"});
      }
      if (UA1("#dXLgH") !== null) {
        UA1("#dXLgH").addCss({"display":"inline-block"});
      }
    }
  }
};
andiUA.allEvents2 = function() {
  andiUA.ANDIisDown = false;
  andiUA.ANDImousePosition = {};
  
  var andiMoveWithTouch = document.getElementById("xIRDN"), iconleft, iconTop, starty, startx, dist = 0, touchobj = null, ANDIisMovingTimeout;
  andiMoveWithTouch.addEventListener("touchstart", function(e) {
    touchobj = e.changedTouches[0];
    iconTop = parseInt(andiMoveWithTouch.style.top);
    iconleft = parseInt(andiMoveWithTouch.style.left);
    startx = parseInt(touchobj.clientX);
    starty = parseInt(touchobj.clientY);
  }, false);
  andiMoveWithTouch.addEventListener("touchmove", function(e) {
    touchobj = e.changedTouches[0];
    var distX = parseInt(touchobj.clientX) - startx;
    var distY = parseInt(touchobj.clientY) - starty;
    andiMoveWithTouch.style.left = (iconleft + distX > window.innerWidth - 50 ? window.innerWidth + "px" : iconleft + distX < 0 ? 0 : iconleft + distX) + "px";
    andiMoveWithTouch.style.top = (iconTop + distY > window.innerHeight - 50 ? window.innerHeight + "px" : iconTop + distY < 0 ? 0 : iconTop + distY) + "px";
    andiUA.createStorageItem("iconPositionTopByUser", andiMoveWithTouch.style.top);
    andiUA.createStorageItem("iconPositionLeftByUser", andiMoveWithTouch.style.left);
    e.preventDefault();
  }, false);
  andiUA.ANDIisMoving = false;
  andiUA.AndiIconTitle = document.querySelector('#xIRDN').getAttribute('title');
  andiUA.removeAndiIconTitle = function (){
		document.querySelector('#xIRDN').tremoveAttribute('title');
	}

  andiUA.addAndiIconTitle =	function (){
		document.querySelector('#xIRDN').setAttribute('title',andiUA.AndiIconTitle);
	}
	
  andiUA.andiMoveElmWithMouse = function(wpsqcTarget) {
    var ANDImousePosition, ANDImousePositionelmBtn, ANDItypingTimer2, ANDIdoneTypingInterval2 = 1500, wpsqcTarget = UA1(wpsqcTarget), thisElm = wpsqcTarget.parentElement, ANDIoffset, lastX = parseInt(localStorage.getItem("iconPositionLeftByUser")), lastY = parseInt(localStorage.getItem("iconPositionTopByUser")), totalMovement = 0, ANDIoffsetelmBtn;
    wpsqcTarget.addEventListener("mousedown", function(UAenv) {
      UAenv.preventDefault();
      clearTimeout(ANDItypingTimer2);
      andiUA.ANDIisDown = true;
      ANDIoffset = [thisElm.offsetLeft - UAenv.clientX, thisElm.offsetTop - UAenv.clientY];
    });
    document.addEventListener("mousemove", function(UAenv) {
      if (andiUA.ANDIisDown) {
        totalMovement += (lastX - UAenv.clientX, 2);
        if (totalMovement > 13) {
          UAenv.preventDefault();
          andiUA.ANDImousePosition = ANDImousePosition = {wpsqcX:UAenv.clientX, wpsqcY:UAenv.clientY};
          var oldLeft = parseInt(localStorage.getItem("iconPositionLeftByUser")), oldtop = parseInt(localStorage.getItem("iconPositionTopByUser"));
          thisElm.style.right = "auto";
          if (ANDImousePosition.wpsqcX + ANDIoffset[0] < window.innerWidth - 10 && ANDImousePosition.wpsqcX + ANDIoffset[0] > 0) {
            thisElm.style.left = ANDImousePosition.wpsqcX + ANDIoffset[0] + "px";
            andiUA.createStorageItem("iconPositionLeftByUser", thisElm.style.left);
          }
          if (ANDImousePosition.wpsqcY + ANDIoffset[1] < window.innerHeight - 10 && ANDImousePosition.wpsqcY + ANDIoffset[1] > 0) {
            thisElm.style.top = ANDImousePosition.wpsqcY + ANDIoffset[1] + "px";
            andiUA.createStorageItem("iconPositionTopByUser", thisElm.style.top);
          }
          andiUA.ANDIisMoving = true;
          clearTimeout(ANDIisMovingTimeout);
        }
      }
    }, true);
    document.addEventListener("mouseup", function(event) {
      if (event.which) {
        andiUA.ANDIisDown = false;
      }
      clearTimeout(ANDItypingTimer2);
      if (andiUA.ANDIisMoving) {
        ANDItypingTimer2 = setTimeout(function() {
        }, ANDIdoneTypingInterval2);
      }
      ANDIisMovingTimeout = setTimeout(function() {
        lastX = parseInt(localStorage.getItem("iconPositionLeftByUser"));
        lastY = parseInt(localStorage.getItem("iconPositionTopByUser"));
        totalMovement = 0;
        andiUA.ANDIisMoving = false;
      }, 500);
    });
	

	
    wpsqcTarget.addEventListener("keydown", function(UAenv) {
      var ANDIleftP = parseInt(wpsqcTarget.style.left), ANDITopP = parseInt(wpsqcTarget.style.top), ANDIwidthIcon = parseInt(wpsqcTarget.style.width);
      if (UAenv.keyCode == 37) {
        UAenv.preventDefault();
		andiUA.removeAndiIconTitle();
        if (ANDIleftP - 5 <= 0) {
          wpsqcTarget.style.left = "0px";
        } else {
          wpsqcTarget.style.left = ANDIleftP - 5 + "px";
        }
        wpsqcTarget.style.right = "auto";
      }
      if (UAenv.keyCode == 39) {
        UAenv.preventDefault();
		andiUA.removeAndiIconTitle();
        if (ANDIleftP + 5 + ANDIwidthIcon >= window.innerWidth) {
          wpsqcTarget.style.left = window.innerWidth + "px";
        } else {
          wpsqcTarget.style.left = ANDIleftP + 5 + "px";
        }
        wpsqcTarget.style.right = "auto";
      }
      if (UAenv.keyCode == 38) {
        UAenv.preventDefault();
		andiUA.removeAndiIconTitle();
        if (ANDITopP - 5 <= 0) {
          wpsqcTarget.style.top = "0px";
        } else {
          wpsqcTarget.style.top = ANDITopP - 5 + "px";
        }
      }
      if (UAenv.keyCode == 40) {
        UAenv.preventDefault();
		andiUA.removeAndiIconTitle();
        if (ANDITopP + 5 + ANDIwidthIcon >= window.innerHeight) {
          wpsqcTarget.style.top = window.innerHeight + "px";
        } else {
          wpsqcTarget.style.top = ANDITopP + 5 + "px";
        }
      }
      andiUA.createStorageItem("iconPositionTopByUser", wpsqcTarget.style.top);
      andiUA.createStorageItem("iconPositionLeftByUser", wpsqcTarget.style.left);
    }, true);
    var ANDItypingTimer, ANDIdoneTypingInterval = 1500;
    eventOn("keydown", "#xIRDN", function(UAenv) {
      if (UAenv.keyCode == 37 || UAenv.keyCode == 38 || UAenv.keyCode == 39 || UAenv.keyCode == 40) {
        clearTimeout(ANDItypingTimer);
		andiUA.removeAndiIconTitle();
      }
    });
    eventOn("keyup", "#xIRDN", function(UAenv) {
      clearTimeout(ANDItypingTimer);
      ANDItypingTimer = setTimeout(function() {
		  andiUA.addAndiIconTitle();
      }, ANDIdoneTypingInterval);
    });
  };
  andiUA.andiMoveElmWithMouse("#xIRDN");
};
andiUA.checkIfErrInPage = function() {
  if (UA1(".alert-danger") && UA1(".alert-danger").YPfwR()) {
    var allText = "";
    UA(".alert-danger").forEach(function(el) {
      allText += el.BKXPP() + " ";
    });
    andiUA.TUAsrMsg(allText);
  }
};
andiUA.getCoords = function(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {top:Math.round(top), left:Math.round(left)};
};
andiUA.headingArr = [];
andiUA.arrOfObjTextFilter = [];

andiUA.logosArr = [];
if (andizxc(".anditestmode").length > 0) {
	if(andizxc('html').attr('vFaKz') == 'he'){
		andizxc("body").append('<div id="andiTestModeAlert" style="width: 200px;height: 70px;padding:5px; background-color: #000; color: #fff; position: fixed; bottom: 0; left: 0;">\u05d4\u05d0\u05ea\u05e8 \u05e0\u05de\u05e6\u05d0 \u05d1\u05de\u05e6\u05d1 \u05d1\u05d3\u05d9\u05e7\u05d5\u05ea \u05e9\u05dc \u05e8\u05db\u05d9\u05d1 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea\t\t\t\t<div role="button" tabindex="0" style="text-decoration: underline;cursor: pointer;">\u05db\u05d3\u05d9 \u05dc\u05e6\u05d0\u05ea \u05de\u05de\u05e6\u05d1 \u05d6\u05d4 \u05dc\u05d7\u05e5 \u05db\u05d0\u05df</div></div>');
	} else {
		andizxc("body").append('<div id="andiTestModeAlert" style="width: 200px;height: 70px;padding:5px; background-color: #000; color: #fff; position: fixed; bottom: 0; left: 0;">The site is in accessibility testing mode\
		<div role="button" tabindex="0" style="text-decoration: underline;cursor: pointer;">To exit, click here</div></div>');
	}

  andizxc('#andiTestModeAlert [role="button"]').click(function() {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  });
}

andiUA.TUAhideformsr = function() {
  andiUA.TUAsettingFn.TUAhideformsr.forEach(function(el) {
	if(UA1(el.Hideformsr)){	
		var fGeQg = UA(el.Hideformsr);
		if( UA(el.Hideformsr).tagName != 'TOOVYA' ){
			UA(el.Hideformsr).forEach(function(el2) {
			  andizxc(el2).attr({"aria-hidden":"true"});
			});
		}
	}
  });
};
andiUA.TUAfixedcontenttable = function() {
  andiUA.TUAsettingFn.TUAfixedcontenttable.forEach(function(el) {
    if(UA1(el.wrapcontenttable)){
		//if( UA(el.Hideformsr).tagName != 'TOOVYA' ){
			UA(el.wrapcontenttable).forEach(function(el2) {
				el2.tremoveAttr('role');
				el2.setAttribute("aria-label",el.descriptioncontenttable);
			});
		//}
	}
	if(UA1(el.defineTHcontenttable)){
		//if( UA(el.Hideformsr).tagName != 'TOOVYA' ){
			UA(el.defineTHcontenttable).forEach(function(el2) {
				el2.setAttribute("role","columnheader");
			});
		//}
	}
  });
};
andiUA.andi2Funcions3 = true;
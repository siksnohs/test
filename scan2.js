(function(TUAk) {
    var screenSizewidth;
    var screenSizeheight;
    screen.width && ( screenSizewidth = screen.width ? screen.width : "",  screenSizeheight = screen.height ? screen.height : "");
    var TUAa = navigator.appVersion,
        TUAd = navigator.userAgent,
        TUAf = navigator.appName,
        TUAb = "" + parseFloat(navigator.appVersion),
        TUAe;
    parseInt(navigator.appVersion, 10);
    var TUAc, TUAg; -
    1 != (TUAc = TUAd.indexOf("Opera")) && (TUAf = "Opera", TUAb = TUAd.substring(TUAc + 6), -1 != (TUAc = TUAd.indexOf("Version")) && (TUAb = TUAd.substring(TUAc + 8))); -
    1 != (TUAc = TUAd.indexOf("OPR")) ? (TUAf = "Opera", TUAb = TUAd.substring(TUAc + 4)) : -1 != (TUAc = TUAd.indexOf("Edge")) ? (TUAf = "Microsoft Edge", TUAb = TUAd.substring(TUAc + 5)) : -1 != (TUAc = TUAd.indexOf("MSIE")) ? (TUAf = "Microsoft Internet Explorer", TUAb = TUAd.substring(TUAc + 5)) : -1 != (TUAc = TUAd.indexOf("Chrome")) ? (TUAf = "Chrome", TUAb = TUAd.substring(TUAc + 7)) : -1 != (TUAc = TUAd.indexOf("Safari")) ? (TUAf = "Safari", TUAb = TUAd.substring(TUAc + 7), -1 != (TUAc = TUAd.indexOf("Version")) && (TUAb = TUAd.substring(TUAc + 8))) : -1 != (TUAc = TUAd.indexOf("Firefox")) ? (TUAf =
        "Firefox", TUAb = TUAd.substring(TUAc + 8)) : -1 != TUAd.indexOf("Trident/") ? (TUAf = "Microsoft Internet Explorer", TUAb = TUAd.substring(TUAd.indexOf("rv:") + 3)) : (TUAe = TUAd.lastIndexOf(" ") + 1) < (TUAc = TUAd.lastIndexOf("/")) && (TUAf = TUAd.substring(TUAe, TUAc), TUAb = TUAd.substring(TUAc + 1), TUAf.toLowerCase() == TUAf.toUpperCase() && (TUAf = navigator.appName)); -
    1 != (TUAg = TUAb.indexOf(";")) && (TUAb = TUAb.substring(0, TUAg)); -
    1 != (TUAg = TUAb.indexOf(" ")) && (TUAb = TUAb.substring(0, TUAg)); -
    1 != (TUAg = TUAb.indexOf(")")) && (TUAb = TUAb.substring(0, TUAg));
    TUAe = parseInt("" + TUAb, 10);
    isNaN(TUAe) && (TUAb = "" + parseFloat(navigator.appVersion), TUAe = parseInt(navigator.appVersion, 10));
    TUAc = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(TUAa);
    TUAg = navigator.cookieEnabled ? !0 : !1;
    "undefined" != typeof navigator.cookieEnabled || TUAg || (document.cookie = "testcookie", TUAg = -1 != document.cookie.indexOf("testcookie") ? !0 : !1);
    var TUAh = "-",
        TUAm = [{
                TUAs: "Windows 10",
                TUAr: /(Windows 10.0|Windows NT 10.0)/
            }, {
                TUAs: "Windows 8.1",
                TUAr: /(Windows 8.1|Windows NT 6.3)/
            }, {
                TUAs: "Windows 8",
                TUAr: /(Windows 8|Windows NT 6.2)/
            }, {
                TUAs: "Windows 7",
                TUAr: /(Windows 7|Windows NT 6.1)/
            }, {
                TUAs: "Windows Vista",
                TUAr: /Windows NT 6.0/
            }, {
                TUAs: "Windows Server 2003",
                TUAr: /Windows NT 5.2/
            }, {
                TUAs: "Windows XP",
                TUAr: /(Windows NT 5.1|Windows XP)/
            }, {
                TUAs: "Windows 2000",
                TUAr: /(Windows NT 5.0|Windows 2000)/
            }, {
                TUAs: "Windows ME",
                TUAr: /(Win 9x 4.90|Windows ME)/
            }, {
                TUAs: "Windows 98",
                TUAr: /(Windows 98|Win98)/
            },
            {
                TUAs: "Windows 95",
                TUAr: /(Windows 95|Win95|Windows_95)/
            }, {
                TUAs: "Windows NT 4.0",
                TUAr: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                TUAs: "Windows CE",
                TUAr: /Windows CE/
            }, {
                TUAs: "Windows 3.11",
                TUAr: /Win16/
            }, {
                TUAs: "Android",
                TUAr: /Android/
            }, {
                TUAs: "Open BSD",
                TUAr: /OpenBSD/
            }, {
                TUAs: "Sun OS",
                TUAr: /SunOS/
            }, {
                TUAs: "Linux",
                TUAr: /(Linux|X11)/
            }, {
                TUAs: "iOS",
                TUAr: /(iPhone|iPad|iPod)/
            }, {
                TUAs: "Mac OS X",
                TUAr: /Mac OS X/
            }, {
                TUAs: "Mac OS",
                TUAr: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                TUAs: "QNX",
                TUAr: /QNX/
            }, {
                TUAs: "UNIX",
                TUAr: /UNIX/
            }, {
                TUAs: "BeOS",
                TUAr: /BeOS/
            }, {
                TUAs: "OS/2",
                TUAr: /OS\/2/
            }, {
                TUAs: "Search Bot",
                TUAr: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
        ];
    for (TUAl in TUAm) {
        var TUAn = TUAm[TUAl];
        if (TUAn.TUAr.test(TUAd)) {
            TUAh = TUAn.TUAs;
            break;
        }
    }
    var TUAl = "-";
    /Windows/.test(TUAh) && (TUAl = /Windows (.*)/.exec(TUAh)[1], TUAh = "Windows");
    TUAa = "no check";
    "undefined" != typeof swfobject && (TUAa = swfobject.getFlashPlayerVersion(), TUAa = 0 < TUAa.major ? TUAa.major + "." + TUAa.minor + " TUAr" + TUAa.release : "-");
    TUAk.jscd = new Object;
    TUAk.jscd = {
        screenW: screenSizewidth,
        screenH: screenSizeheight,
        browser: TUAf,
        browserVersion: TUAb,
        browserMajorVersion: TUAe,
        mobile: TUAc,
        os: TUAh,
        osVersion: '',
        cookies: TUAg,
        flashVersion: TUAa
    };
})(window);
if (!Element.prototype.getText)
	Element.prototype.getText = function () {
		var TUAthat = this;
		return this.textContent || this.innerText;
	};
if (!String.prototype.TUAreplaceAll)
	String.prototype.TUAreplaceAll = function (TUAsearchStr, TUAreplaceStr) {
		var str = this;
		TUAsearchStr = TUAsearchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
		return str.replace(new RegExp(TUAsearchStr, "gi"), TUAreplaceStr);
	};
window.cssPath = function(elSrc) {
    
    if (!(elSrc instanceof Element)) return;
    
      var sSel,
        aAttr = ['name', 'title', 'placeholder', 'data-*'], // Common attributes
        aSel = [],
        // Derive selector from element
        getSelector = function(el) {
          // 1. Check ID first
          // NOTE: ID must be unique amongst all IDs in an HTML5 document.
          // https://www.w3.org/TR/html5/dom.html#the-id-attribute
          if (el.id) {
            aSel.unshift('#' + el.id);
            return true;
          }
          aSel.unshift(sSel = el.nodeName.toLowerCase());
          // 2. Try to select by classes
          if (!el.isIt('svg, svg *') &&  el.className) {
            aSel[0] = sSel += '.' + el.className.trim().replace(/ +/g, '.');
            if (uniqueQuery()) return true;
          }
          // 3. Try to select by classes + attributes
          var num = true;
          var AllAttr = el.attributes;
          for (var i=0; i<AllAttr.length; ++i) {
              for (var c=0; c<aAttr.length; ++c) {
                  if(AllAttr[i].name.indexOf(aAttr[c])){
                      var thisAttrValue = AllAttr[i].value;						  
                      if(thisAttrValue.indexOf('"') > -1){
                          num = false;
                      }
                  }
              }
          }  
          for (var i=0; i<aAttr.length; ++i) {
              if(num){
                 
                if (aAttr[i] === 'data-*') {
                  // Build array of data attributes
                  var aDataAttr = [].filter.call(el.attributes, function(attr) {
                    return attr.name.indexOf('data-')===0;
                  });
                  for (var j=0; j<aDataAttr.length; ++j) {
                    if (aDataAttr[j].name !== 'data-bind' && aDataAttr[j].name !== 'data-andiallelmwithtext') {
                    aSel[0] = sSel += '[' + aDataAttr[j].name + '="' + aDataAttr[j].value + '"]';
                        if (uniqueQuery()) return true;
                    }
                    
                  }
                } else if (el[aAttr[i]]) {
                  aSel[0] = sSel += '[' + aAttr[i] + '="' + el[aAttr[i]] + '"]';
                  if (uniqueQuery()) return true;
                }
              }
          }
          // 4. Try to select by nth-of-type() as a fallback for generic elements
          var elChild = el,
            sChild,
            n = 1;
          while (elChild = elChild.previousElementSibling) {
            if (elChild.nodeName===el.nodeName) ++n;
          }
          aSel[0] = sSel += ':nth-of-type(' + n + ')';
          if (uniqueQuery()) return true;
          // 5. Try to select by nth-child() as a last resort
          elChild = el;
          n = 1;
          while (elChild = elChild.previousElementSibling) ++n;
          aSel[0] = sSel = sSel.replace(/:nth-of-type\(\d+\)/, n>1 ? ':nth-child(' + n + ')' : ':first-child');
          if (uniqueQuery()) return true;
          return false;
        },
        // Test query to see if it returns one element
        uniqueQuery = function() {
            try{
                return document.querySelectorAll(aSel.join('>')||null).length===1;
            } catch(err){
                
                return document.querySelectorAll(null).length===1;
            }
        };
      // Walk up the DOM tree to compile a unique selector
      while (elSrc.parentNode) {
        if (getSelector(elSrc)) {
            return aSel.join(' > ');
        }
        elSrc = elSrc.parentNode;
      }
 }
 
 
ajax1 = {};
ajax1.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break; 
        } catch (e) {
        }
    }
    return xhr;
};
ajax1.send = function (url, callback, method, data, async) {
    if (async === undefined) {
        async = true;
    }
    var x = ajax1.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data);
};
ajax1.get = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax1.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
};
ajax1.post = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax1.send(url, callback, 'POST', query.join('&'), async);
};	
    

jsPath = andiUA.TUAjsPath;

var findPassebleContainer = function(ArrTextToCompar) {
    var wrapArrArea = [];
    ArrTextToCompar.forEach(function(TUAel,i) {
        UA(TUAel+',[class*="'+TUAel+'"],[id*="'+TUAel+'"]').forEach(function(el2,j) {
            if(	el2.tagName !== 'LINK' && !el2.closest('#TUATUAcontainer')){
                var isWrapAll = true;
                var ANDIparentElm = el2;
                while ((ANDIparentElm = ANDIparentElm.parentElement) !== null && !ANDIparentElm.closest('#TUATUAcontainer')  && ANDIparentElm.tagName.toLowerCase() != "body" && ANDIparentElm.tagName.toLowerCase() != "html" ) {
                    var temp = ANDIparentElm.isIt(  ArrTextToCompar[i] +',[class*="'+ArrTextToCompar[i]+'"],[id*="'+ArrTextToCompar[i]+'"]');
                    if(temp){
                        isWrapAll = false;
                    }
                }
                if (isWrapAll && el2.tagName.toLowerCase() != "body" ) {
                    wrapArrArea.push(el2);
                }
            }
        });
    });
    return wrapArrArea;
}


getElementsByText = function(str, tag) {
    return Array.prototype.slice.call(document.querySelectorAll(tag)).filter(TUAel => TUAel.textContent.trim().indexOf(str.trim()) >-1 );
}
function hasNumber(myString) {
  return /\d/.test(myString);
}


var arrAllLinks = [];
var linkToCheck = [];
var externalLinkArr = [];
var newUrl = window.location.href.split('?')[0];
var inArray = function(array, needle){
    var isIn = false;
    for(var i=0; i < array.length; i++){
        if(array[i] === needle){
            isIn = true;
        }
    }
    return isIn;
}
var TUAtoUnicode = function(theString) {
  var TUAunicodeString = "";
  for (var TUAi = 0; TUAi < theString.length; TUAi++) {
    var TUAtheUnicode = theString.charCodeAt(TUAi).toString(16).toUpperCase();
    while (TUAtheUnicode.length < 4) {
      TUAtheUnicode = "0" + TUAtheUnicode;
    }
    TUAtheUnicode = "\\u" + TUAtheUnicode;
    TUAunicodeString += TUAtheUnicode;
  }
  return TUAunicodeString;
};
chackIfLogIn = function(isLogIn){
    if(localStorage.getItem("dontOpenNewWin") != 'true' && window.location.href.indexOf("https://system.user-a.co.il/login") == -1 ){
        UA1('body').appendHtml('\
        <div class="askForLogin" style="direction:rtl;z-index:9999999999999999999999999999;color: #fff; background: rgba(0,0,0,0.85); width: 250px; padding: 10px; border-radius: 7px; position: fixed; left: 10px; top: calc(95% - 200px);font-size: 15px;text-align: center;">\
        <div style=" display: inline-block; width: 100%; ">על מנת להשתמש בתוסף של מערכת FAST עליך להיות מחובר. האם להעביר אותך למערכת על מנת להתחבר?</div>\
        <div class="askForLoginBtnYes" style="height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >כן</div>\
        <div class="askForLoginBtnNo" style=" height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >לא</div></div>');
        UA1('.askForLoginBtnYes').addEventListener('click', function(){
            window.location = 'https://system.user-a.co.il/login';
        });	
        UA1('.askForLoginBtnNo').addEventListener('click', function(){
            localStorage.setItem('dontOpenNewWin',true);
            UA1('.askForLogin')?.remove();
        });
        setTimeout(function(){
            UA1('.askForLogin')?.remove();
        },8000);
    }
}


chackIfLogIn = function(isLogIn){
    if(localStorage.getItem("dontOpenNewWin") != 'true' && window.location.href.indexOf("https://system.user-a.co.il/login") == -1 ){
        UA1('body').appendHtml('\
        <div class="askForLogin" style="direction:rtl;z-index:9999999999999999999999999999;color: #fff; background: rgba(0,0,0,0.85); width: 250px; padding: 10px; border-radius: 7px; position: fixed; left: 10px; top: calc(95% - 200px);font-size: 15px;text-align: center;">\
        <div style=" display: inline-block; width: 100%; ">You must be logged on to use the FAST system plugin. Do you want to login?</div>\
        <div class="askForLoginBtnYes" style="height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >Yes</div>\
        <div class="askForLoginBtnNo" style=" height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >No</div></div>');
        UA1('.askForLoginBtnYes').addEventListener('click', function(){
            window.location = 'https://system.user-a.co.il/login';
        });	
        UA1('.askForLoginBtnNo').addEventListener('click', function(){
            localStorage.setItem('dontOpenNewWin',true);
            UA1('.askForLogin')?.remove();
        });
        setTimeout(function(){
            UA1('.askForLogin')?.remove();
        },8000);
    }
}
            
getElementsByText = function(str, tag) {
    return Array.prototype.slice.call(document.querySelectorAll(tag)).filter(TUAel => TUAel.textContent.trim().indexOf(str.trim()) >-1 );
}
function hasNumber(myString) {
  return /\d/.test(myString);
}
function isLocalStorageNull(n) {
    return localStorage.getItem(n) == null || localStorage.getItem(n) == 'null';
}

TUAisArabic = function(text) {
  var TUApattern = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
  TUAresult = TUApattern.test(text);
  return TUAresult;
};
TUAisHebrew = function(text) {
  var TUApattern = /[\u0590-\u05FF]/;
  TUAresult = TUApattern.test(text);
  return TUAresult;
};
TUAisRussian = function(text) {
  var TUApattern = /[\u0400-\u04FF]/;
  TUAresult = TUApattern.test(text);
  return TUAresult;
};
TUAisEnglish = function(text) {
  var TUApattern = /^[a-z][a-z0-9]*$/i;
  TUAresult = TUApattern.test(text);
  return TUAresult;
};		
TUAmymax = function(TUAa) {
  var TUAm = -Infinity, TUAi = 0, TUAn = TUAa.length;
  for (; TUAi != TUAn; ++TUAi) {
    if (TUAa[TUAi] > TUAm) {
      TUAm = TUAa[TUAi];
    }
  }
  return TUAm;
};		
TUAcheckLanguage = function() {
    TUAlanguage = andiUA.TUAlanguage;
};
                
function search(myArray, textElm, elmClass, tagName) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].elmText === textElm && myArray[i].tagName == tagName && myArray[i].elmClass == elmClass) {
        return i;
      }
    }
}

function avoidTagFirstMap(Elm) {
    if (!Elm.closest("#TUATUAcontainer") && !Elm.closest("svg") && !Elm.isIt('[role="alert"],script,style,embed,object,noframes,svg,.accessibleIframe,.UA2skipAreaAutomate,#TUATUAcontainer')) {
      return true;
    }
    return false;
}

function avoidTag(Elm) {
    if (!Elm.isIt('select,label,option,[role="alert"],script,style,embed,object,noframes,svg,select,button,video,audio,input,textarea,.accessibleIframe,.UA2skipAreaAutomate,[role="menu"],[role="button"],[role="tree"],#TUATUAcontainer')) {
      return true;
    }
    return false;
}




function isHex(h) {
    var a = parseInt(h,16);
    return (a.toString(16) === h)
}
function isNotIcon(h) {
    try{
        n.trim().indexOf('\\x');
        return true;
    } catch(err){
        return false;
    }
}
function link_is_not_external(link_element) {
    return (link_element.host == '' || link_element.host === window.location.host);
}
function removeParams(url ,sParam){
    var url = url.split('?')[0]+'?';
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'), sParameterName, i;			 
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] != sParam && sParameterName[0] != '' && sParameterName[0] != 'user_id' && sParameterName[0] != 'groupID' && sParameterName[0] != 'client_id' && sParameterName[0] != 'scan' && sParameterName[0] != 'andi') {
            url = url + sParameterName[0] + '=' + sParameterName[1] + '&'
        }
    }
    return url.substring(0,url.length-1);
}


function checkLink(thisLink){
    var thisMeaning = '--';
    if(thisLink){
        if(!thisLink.getText() || thisLink.getText().trim() == ''){
            if(!thisLink.getAttr('aria-label') || thisLink.getAttr('aria-label').trim() == ''){
                if(!thisLink.getAttr('title') || thisLink.getAttr('title').trim() == ''){
                    thisMeaning = '--';
                    if(thisLink.querySelector('img')!==null ){	
                        thisMeaning = thisLink.querySelector('img').getAttr('alt');
                        if(!thisMeaning ){
                            thisMeaning = '--';
                        } else {
                            thisMeaning = TUAtoUnicode(thisMeaning);
                        }
                    }
					if(thisLink.querySelector('svg')!==null && thisLink.querySelector('svg').hasAttribute('aria-label')){	
                        thisMeaning = thisLink.querySelector('svg').getAttr('aria-label');
                        if(!thisMeaning ){
                            thisMeaning = '--';
                        } else {
                            thisMeaning = TUAtoUnicode(thisMeaning);
                        }
                    }
                } else {
                    thisMeaning = thisLink.getAttr('title').trim();
                }
            } else {
                thisMeaning = thisLink.getAttr('aria-label').trim();
            }
        } else {
            thisMeaning = thisLink.getText().trim();
        }
    }
    return thisMeaning;
}

function checkLinkClickable(thisLink,moreData,thisMeaning){
    var moreData = 'Not Clickable';
    if(  thisLink.getAttr('tabindex') && parseInt(thisLink.getAttr('tabindex') ) >= 0 ) {
        moreData = 'Clickable';
    } 
    if( thisLink.tagName == 'A' && thisLink.hasAttribute('href') ){
        moreData = 'Clickable';
    } 
    return moreData;
}
    
function checkForDuplicate(arr, attr){
    var note = 'Not fixed';
    allAttrValue = [];		
    duplicatesAttrValue = [];
    if(arr[0].hasAttribute(attr)){
        for(var i = 0;i< arr.length;i++){
            if(arr[i].hasAttribute(attr)){
                var thisValue = arr[i].getAttribute(attr);
                if(allAttrValue.indexOf(thisValue) == -1){
                    allAttrValue.push(thisValue);
                    note = 'Fixed';
                } else {
                    if(duplicatesAttrValue.indexOf(thisValue) == -1){
                        duplicatesAttrValue.push(thisValue);
                    }
                }
            }
        }
    }
    return note;
}


getCoords = function(elem) {
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
findPassebleContainer = function(ArrTextToCompar) {
    var wrapArrArea = [];
    ArrTextToCompar.forEach(function(el,i) {
        document.querySelectorAll('body '+el+',body [class*="'+el+'"],body [id*="'+el+'"]').forEach(function(el2,j) {
            if(	el2.tagName !== 'LINK' && el2.closest('#TUATUAcontainer') === null){
                var isWrapAll = true;
                var ANDIparentElm = el2;
                while (ANDIparentElm.tagName.toLowerCase() != "body" && ANDIparentElm.tagName.toLowerCase() != "html"){
                    ANDIparentElm = ANDIparentElm.parentElement;
                    if(ANDIparentElm.tagName.toLowerCase() != "body" && ANDIparentElm.tagName.toLowerCase() != "html"){
                        if(	ANDIparentElm.getAttribute('class') !== null && ANDIparentElm.getAttribute('class').indexOf	(ArrTextToCompar[i]) > -1){
                            isWrapAll = false;
                        }
                        if(	ANDIparentElm.getAttribute('id') !== null && ANDIparentElm.getAttribute('id').search(ArrTextToCompar[i]) > -1){
                            isWrapAll = false;
                        }
                    }
                }
                if (isWrapAll && el2.tagName.toLowerCase() != "body" ) {
                    wrapArrArea.push(el2);
                }
            }
        });
    });
    return wrapArrArea;
}				

logos = function(){
    function setLogoMeaning(logoLink){
        logosArr.push(logoLink);
    }
    document.querySelectorAll('img[src*="logo"],img[id*="logo"],img[id*="Logo"],img[class*="logo"],img[class*="Logo"]').forEach(function(el,i){
        if( getCoords(el).top < (window.innerHeight/3)){
            setLogoMeaning(el.closest('a'));
        }
    });
                    
    var url = location.protocol+'//'+location.host;
    UA('[href="'+url+'/"],[href="'+url+'"],[href="/"],[href="./"],[href="'+location.host+'"]').forEach(function(el){
        setLogoMeaning(el);
    });
    
    var arrOfArea = findPassebleContainer(['logo','Logo']);
    arrOfArea.forEach(function(el){
        if(el.tfind('a').length == 1){
            setLogoMeaning(el.tfind('a')[0]);
        }
    });
};

function checkTableis(allDATAarr, table, url_string){
    if(!table.isIt('#TUATUAcontainer, #TUATUAcontainer *,#TUArightMouseMenu, #TUArightMouseMenu *,#TUAUAwrapAccessibilityMenu, #TUAUAwrapAccessibilityMenu *')){
        var thisMeaning = '--';
        var moreData = '--';
        var isContentIssue = 'yes';
        var note = 'Not fixed';
        var temp = 'Not fixed';
        var thisELm = window.cssPath(table);
        if(table.getAttr('aria-label') && table.getAttr('aria-label').trim() != ''){
            thisMeaning = table.getAttr('aria-label').trim();
            temp = 'Fixed';
        } else if(table.tfind('caption')[0] && table.tfind('caption')[0].getText() != '' ){
            thisMeaning = table.tfind('caption')[0].getText();
            temp = 'Fixed';
        } else if(table.hasAttribute('summary') && table.getAttr('summary').trim() != ''  ){
            thisMeaning = table.getAttr('summary').trim();
            temp = 'Fixed';
        }
        if((table).querySelectorAll('th').length == 0){
            moreData = 'NO TH TAGS';
            temp = 'Not fixed';
        } else {
            moreData = 'HAVE TH TAGS';
            if(temp == 'Fixed')temp = 'Fixed';
        }
        
        var isitok = ((temp == 'Fixed')?'maybe':'no')
        addToallDATAarr(allDATAarr, "table", thisELm, thisMeaning, moreData, url_string, note, isContentIssue, isitok,3,8,'Table');
    }
}
                
function luminanace(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
    return (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05)
         / (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05);
}

function returnContrasrRatio(el){
    var elmBackgroundColor = window.getComputedStyle( el , null).getPropertyValue( 'background-color' );
    var elmColor = window.getComputedStyle( el , null).getPropertyValue( 'color' );
    var arrColor = [elmColor, elmBackgroundColor];
    elmColor = elmColor.replace(')','');
    elmBackgroundColor = elmBackgroundColor.replace(')','');
    
    if(elmBackgroundColor.indexOf('rgba(') > -1){
        elmBackgroundColor = elmBackgroundColor.replace('rgba(','');
    }
    if(elmBackgroundColor.indexOf('rgb(') > -1){
        elmBackgroundColor = elmBackgroundColor.replace('rgb(','');
    }
    elmBackgroundColor = elmBackgroundColor.replace(')','');
    if(elmColor.indexOf('rgba(') > -1){
        elmColor = elmColor.replace('rgba(','');
    }
    if(elmColor.indexOf('rgb(') > -1){
        elmColor = elmColor.replace('rgb(','');
    }
    elmBackgroundColor = elmBackgroundColor.split(',');
    elmColor = elmColor.split(',');
    arrColor.push(contrast(elmColor, elmBackgroundColor))
    return arrColor;
};


function addContrastDate(allDATAarr, elm, url_string, note, isitok){
    var isitok =((note == 'Fixed')?'maybe':'no');
    try{
        var thisELm = window.cssPath(elm[0])
        addToallDATAarr(allDATAarr, "ContrasrColor",thisELm,'--','--',url_string,note,'no',isitok,3,13,'Contrast Color');
    } catch(err){
    }
}
    
        
function runScan(){
    var url_string = window.location.href; 
    if(localStorage.getItem('client_id') != null && localStorage.getItem('client_id') != 'null'){
        if(!UA1('#andiifuserlogin')){
            thisIframe = 'andiifuserlogin2';
            UA1('body').appendHtml('<iframe title="UA" tabindex="-1" onload="strart();" aria-hidden="true" scrolling="no" style="display:none;" id="andiifuserlogin2" src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"></iframe>');
        } else {
            thisIframe = 'andiifuserlogin';
            strart();
        }
    }
}

function findFavicon(){
    if( document.querySelectorAll('[rel*="icon"]').length > 1 ){
        var favicon = "https://system.user-a.co.il/images/featured_image/123.png";
        if(document.querySelectorAll('[rel*="icon"]') && document.querySelectorAll('[rel*="icon"]')[0].hasAttribute('sizes') ){
            var size = parseInt(document.querySelectorAll('[rel*="icon"]')[0].getAttribute('sizes'));
            document.querySelectorAll('[rel*="icon"]').forEach(function(el){				
                var sizeTemp = parseInt(el.getAttribute('sizes'));
                if(sizeTemp > size){
                    size = sizeTemp;
                }
            });
            var favicon =  document.querySelector('[rel*="icon"][sizes^="'+size+'"]').href;
        } else {
            var favicon =  document.querySelector('[rel*="icon"]').href;
        }
    } else if( document.querySelectorAll('[rel*="icon"]').length == 1 ){
        var favicon =  document.querySelector('[rel*="icon"]').href;
    } else {
        var favicon = "https://system.user-a.co.il/images/featured_image/123.png";
    }
    return favicon;
}

function addToallDATAarr(allDATAarr, elmtype,elm,thisMeaning,moreDate,linktopage,note,isContentIssue,isitok,priority,category_id,title){
    if(elm != false)
    try{
        allDATAarr.push({
            "elmtype":elmtype,
            "elm":elm.trim(),
            "thisMeaning":thisMeaning.trim(),
            "moreDate":moreDate.trim(),
            "linktopage":linktopage,
            "note":note.trim(),
            "isContentIssue":isContentIssue,
            "isitok": isitok,
            "priority": priority,
            "category_id": category_id,
            "title": title,
            "groupID":localStorage.getItem('groupID'),
            "client_id":localStorage.getItem('client_id')
        });	
    } catch(err){
        //console.log(err);
    }
}


function checkIfAndiCode(elm){//[id*="Andi"], [class*="Andi"], [id*="andi"], [class*="andi"]
    if(elm == null || elm.isIt('#TUAAndiIconOpenMenuBtn, #TUAAndiIconOpenMenuBtn *, #TUATUAcontainer, #TUATUAcontainer *, #TUArightMouseMenu, #TUArightMouseMenu *, #TUAUAwrapAccessibilityMenu, #TUAUAwrapAccessibilityMenu *,[role="alert"],script,style,embed,object,noframes,.accessibleIframe,.UA2skipAreaAutomate,#TUATUAcontainer') ){
        return true;
    } else {
        return false;
    }
} 


                
if( localStorage.getItem('dontrunaddon') != 'true' && !isLocalStorageNull('client_id') && !isLocalStorageNull('groupID') ){

    
function ANDIrunAndi() {
    if(UA1('.runScanAllSite')){
        UA1('body').prependHtml('\
        <div class="fastScanSite" style="direction:rtl;z-index:999999999;color: #fff; background: rgba(0,0,0,0.85); height: '+window.innerHeight+'px; width: 100%; padding: 10px; border-radius: 7px; position: fixed; left: 0; top: 0;font-size: 15px;text-align: center;">\
        <div class="fastScanSiteText" style=" display: inline-block; width: 100%; "><div style="font-size:20px;"> FAST system is currently crawling the website</div>\
        <div class="FASTaction"><span class="stratScanSAVE" >Analyzing data ...<span><br/>\
        </div>\
        </div>\
        </div>'); 
        
    }
    TUAcheckLanguage();
    window.headingArr=[];
    var n, objOfDataElms = [], arrOfObjText = [],biggestText = parseInt(localStorage.getItem("biggestText")), basefontsize = parseInt(localStorage.getItem("basefontsize")), heaing = '[role="heading"],h1,h2,h3,h5,h6,h4', headingLevel = biggestText - (basefontsize + 3);
    headingLevel = Math.ceil(headingLevel / 5);
  
    var countFixedHeading = 0, countFixedInput = 0, countFixedReadmorelink = 0, countFixedImg = 0, countFixedContent = 0, thisElm, elemText, temoArr = [], child, walk = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, null, false);
    while (child = walk.nextNode()) {
        if (avoidTagFirstMap(child)) {
          
          try{
              if (!child.hasAttribute("role") && !child.closest('[role="menuitem"], button') && !child.closest(heaing) && child.querySelectorAll(heaing).length === 0) {
                var compStyles = window.getComputedStyle(child);
                var fontsizeElm = parseInt(compStyles.getPropertyValue("fontSize"));
                if (fontsizeElm > basefontsize + 3) {
                  var level = 5;
                  var corrent = basefontsize + 3 + headingLevel;
                  while (level > 2 && fontsizeElm > corrent) {
                    corrent = corrent + headingLevel;
                    level--;
                  }
                  var tag = child.tagName.toLowerCase();
                  if( !child.isIt("[role],i,select,input,button, textarea,.icon,.fa") && !child.closest('[role="menubar"], nav, ol, ul')   ){
                      headingArr.push([child, child.getText(), level, "Not fixed"]);
                  }
                }
              }
          
          } catch(err){}
        }
    }
    arrOfObjTextFilter = arrOfObjText.filter(function(Obj) {
        return Obj.times > 2 && Obj.elmClass !== "" && Obj.elmText.length > 1 && (Obj.tagName === "A" || Obj.tagName === "BUTTON");
    });
    var favicon = findFavicon();
    var url_string = window.location.href?.TUAreplaceAll('scan=true','').TUAreplaceAll('andi=1','')
    url_string = removeParams(url_string,'elm');
    var allDATA = '';
    var allDATAarr = [];
    /* links */
    UA1('.FASTaction')?.appendHtml('<span class="loading" style="display:block;"><img style="width:80px;margin:100px;" src="'+jsPath+'/images/loading.gif" alt="???? ????" /></span>');
    var alllinksStr = '';					
    document.querySelectorAll('a:not(.TUAUAskipArea), [role="link"]').forEach(function(thisLink,i){
        
        if(!checkIfAndiCode(thisLink) ){						
            var thisELm = thisLink.getAttribute('href');
            if(!thisELm){
                thisELm = window.cssPath(thisLink);
            } else {
                thisELm = '[href="'+thisELm+'"]';
            }
            var haveImgIn = null;
            var thisMeaning = '--';
            var note = '--';
            var isContentIssue = 'no';
            var moreData = 'Not Clickable';
            if(thisLink.isIt('[role="main"] a, main a')){
                moreData = checkLinkClickable(thisLink);
                thisMeaning = checkLink(thisLink);
                isContentIssue = 'yes';
            } else {
                moreData = checkLinkClickable(thisLink);
                thisMeaning = checkLink(thisLink);
                isContentIssue = 'no';
            }
            var isitok = ((moreData == 'Clickable' && thisMeaning != '--' && thisMeaning.length > 2)?'maybe':'no');
            addToallDATAarr(allDATAarr, "link",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,2,'Links');
        }
    });	
    /* buttons */
    var allButtonStr = '';
    document.querySelectorAll('[onclick],button,[type="submit"],[type="image"],[type="reset"],[type="button"],[role="button"]').forEach(function(btn,i){
        if(!checkIfAndiCode(btn) ){
            if( !btn.closest('button,[role="button"]') && btn.querySelectorAll('button,[type="submit"],[type="image"],[type="reset"],[type="button"],[role="button"]:not(a),[id*="button"]:not(a),[id*="btn"]:not(a),[class*="button"]:not(a),[class*="btn"]:not(a)').length == 0   ){
            
                var thisMeaning = '--';
                var moreData = '--';
                var isContentIssue = 'no';
                var note = '--';
                if(  btn.hasAttribute('tabindex') && parseInt(btn.getAttr('tabindex') ) >= 0 ){
                    moreData = 'Clickable';
                } else if( btn.isIt('button,[type="submit"],[type="image"],[type="reset"],[type="button"]') ){
                    moreData = 'Clickable';
                } else {
                    moreData = 'Not Clickable';
                }
                var thisELm = window.cssPath(btn);
                if(btn.tagName == 'BUTTON' || btn.hasAttribute('onclick')){
                    if(btn.getText() != ''){
                        thisMeaning = btn.getText();
                    }
                } else if(btn.closest('label') && btn.closest('label').getText().trim() != ''){
                    thisMeaning = btn.closest('label').getText();
                } else if(thisMeaning == '--' && (!btn.hasAttribute('value') || btn.getAttribute('value').trim() == '')){
                    if(!btn.hasAttribute('alt') || btn.getAttribute('alt').trim() == '' ){
                        if(!btn.getText()  || btn.getText().trim() == ''){
                            if(!btn.hasAttribute('aria-label')  || btn.getAttribute('aria-label').trim() == ''){
                                if(!btn.hasAttribute('tuaandiinputdiscrp')  || btn.getAttribute('tuaandiinputdiscrp').trim() == ''){
                                    if(!btn.hasAttribute('title')  || btn.getAttribute('title').trim() == ''){
                                        thisMeaning = '--';
                                    } else {
                                        thisMeaning = btn.getAttribute('title');
                                    }
                                } else {
                                    thisMeaning = btn.getAttribute('tuaandiinputdiscrp');
                                }
                            } else {
                                thisMeaning = btn.getAttribute('aria-label');
                            }
                        } else {
                            thisMeaning = btn.getAttribute().trim();
                        }
                    } else {
                        thisMeaning = TUAtoUnicode(btn.getAttribute('alt').toString().trim());
                    }
                } else {
                    thisMeaning = btn.getAttribute('value');
                }
                var isitok = ((moreData == 'Clickable' && thisMeaning != '--' && thisMeaning.length > 2)?'maybe':'no');
                addToallDATAarr(allDATAarr, "button",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,4,1,'Buttons');
            }
        }
    });	
    /* images */
    var allImgStr = '';
    document.querySelectorAll('img').forEach(function(img,i){
        if(!checkIfAndiCode(img) ){
            var thisMeaning = '--';
            var note = '--';
            var isContentIssue = 'yes';
            var moreData = img.src;
            var thisELm = '[src="'+img.src+'"]';
            if(!img.hasAttribute('alt') || img.getAttribute('alt').trim() == '' ){
                if(!img.hasAttribute('aria-label') || img.getAttribute('aria-label').trim() == ''){
                    if(!img.hasAttribute('title') || img.getAttribute('title').trim() == ''){
                        thisMeaning = '--';
                        note = 'Not fixed';
                    } else {  
                        thisMeaning = img.getAttribute('title');
                        note = 'Fixed';
                    }
                } else {
                    thisMeaning = img.getAttribute('aria-label');
                    note = 'Fixed';
                }
            } else {
                thisMeaning = (img.getAttribute('alt').toString());
                note = 'Fixed';
            }
            if(thisMeaning == '--' && img.closest('a,button,[role="link"],[role="button"]')){
                if(img.closest('a,button,[role="link"],[role="button"]').getText().trim() != ''){
                    thisMeaning = img.closest('a,button,[role="link"],[role="button"]').getText().trim();
                } else {
                    thisMeaning = '--';
                }
            }
            if(thisMeaning.indexOf('Symbol, Image, Illustration,') > -1){
                note = 'Not fixed';
            }
            var isitok = (( thisMeaning != '--' && thisMeaning.length > 2 && note == 'Fixed')?'maybe':'no');
            addToallDATAarr(allDATAarr, "image",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,3,'Images');
        }
    });
    /* inputs */
    var allinputStr = '';
    document.querySelectorAll('[type="text"],[type="week"],[type="time"],[type="search"],[type="range"],[type="radio"],[type="password"],[type="number"],[type="month"],[type="email"],[type="url"],[type="tel"],[type="checkbox"],[type="color"],[type="date"],[type="file"],select,textarea').forEach(function(inputs,i){
        if(!checkIfAndiCode(inputs) ){
            var thisMeaning = '--';
            var moreData = '--';
            var isContentIssue = 'no';
            var note = '--';
            var thisELm = window.cssPath(inputs);
            var thisELmID = inputs.getAttribute('id');
            try{
                if (thisELmID && document.querySelector("label[for='" + thisELmID + "']")) {
                    thisMeaning = document.querySelector("label[for='" + thisELmID + "']").getText().trim();
                    if(thisMeaning == '') thisMeaning = '--';
                } 
            } catch(err){
                thisMeaning = '--';
            }
            if(inputs.closest('label')){
                if(inputs.closest('label').getText().trim() != ''){
                    thisMeaning = inputs.closest('label').getText().trim()
                } else {
                    thisMeaning = '--';
                }
            }
            if(thisMeaning == '--'){
                if(!inputs.getAttr('aria-label') || inputs.getAttr('aria-label').trim() == ''){
                    if(!inputs.getAttr('placeholder') || inputs.getAttr('placeholder').trim() == ''){
                        if(!inputs.getAttr('title') || inputs.getAttr('title').trim() == ''){
                            if(!inputs.getAttr('value') || inputs.getAttr('value').trim() == ''){
                                thisMeaning = '--';
                            } else {
                                thisMeaning = inputs.getAttr('value');
                            }
                        } else {
                            thisMeaning = inputs.getAttr('title');
                        }
                    } else {  
                        thisMeaning = inputs.getAttr('placeholder');
                    }
                } else {
                    thisMeaning = inputs.getAttr('aria-label');
                }
            }
            if(inputs.TUAisVisible && inputs.getCss('display') != 'none' ){
                var isitok = (( thisMeaning != '--' && thisMeaning.length > 2)?'maybe':'no');
                addToallDATAarr(allDATAarr, "input",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,4,'Inputs');
            }
        }
    });	
    
    /* Heading */
    var allHeadingStr = '';
    if(headingArr.length)
    headingArr.forEach(function(heading,i){
        if(  heading[1].trim() != '' && heading[1] != '--' && !checkIfAndiCode(heading) && !heading.isIt('label, p')){
            var thisMeaning = heading[1] || "--";
            var moreData = heading[2].toString();
            var isContentIssue = 'yes';
            var note = 	(heading[0].getAttr('role') == 'heading' && heading[0].hasAttribute('aria-level'))?'Fixed':heading[3];
            var thisELm = window.cssPath(heading[0]);
            
            var isitok = ((note == 'Fixed')?'maybe':(moreDate != '--')?'maybe':'no');
            addToallDATAarr(allDATAarr, "heading",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,5,'Heading');
        }
    });
    /* Heading2 */
    var allH1 = document.querySelectorAll('h1');
    if(allH1.length == 1 && allH1[0].getText().trim() != ''){
        addToallDATAarr(allDATAarr, "h1",window.cssPath(allH1[0]),allH1[0].getText(),'--',url_string,'Fixed','yes','maybe',3,5,'Heading');
    } else if(allH1.length > 1){
        var closestElms = [];
        var note = 'Fixed';
        allH1.forEach(function(h1Elm,i){
            if( closestElms.indexOf(h1Elm.closest('section,article,main')) == -1 && note == 'Fixed'){
                closestElms.push(h1Elm.closest('section,article'));
            } else {
                note = 'Not fixed';
            }
        });
        if(note == 'Not fixed'){
            var moreData = 'Multple Heading';
            var note = 'Not fixed';
            var isContentIssue = 'yes';
            var isitok = 'no';
        } else {
            var moreData = 'Multple Heading';
            var note = 'Fixed';
            var isContentIssue = 'yes';
            var isitok = 'maybe';
        }
        addToallDATAarr(allDATAarr, "h1",'Multple Heading','--',moreData, url_string, note, isContentIssue, isitok, 3,5,'Multple Heading');
        
    }
    if(UA1('[role="main"] table')){
        UA('table').forEach(function(table,i){
            if(!checkIfAndiCode(table)){
                checkTableis(allDATAarr, table, url_string);
            }
        });
    } else {
        UA('table').forEach(function(table,i){
            if(!checkIfAndiCode(table)){
                checkTableis(allDATAarr, table, url_string);
            }
        });
    }

    var allemptyHeadingStr = '';
    document.querySelectorAll('[role="heading"],h1,h2,h3,h4,h5,h6').forEach(function(empltyHeading, i){
        if(!checkIfAndiCode(empltyHeading)){
            var thisMeaning = '--';
            var temp = '';
            var note = '--';
            var isContentIssue = 'yes';
            var moreData = '--';
            var thisELm = window.cssPath(empltyHeading);
            if( empltyHeading && empltyHeading.getText().trim() == '' && empltyHeading.querySelectorAll('img').length > 0){
                note = 'Fixed';
            } else if(empltyHeading && empltyHeading.getText().trim() == '' && !empltyHeading.hasAttribute('role') ){
                note = 'No fixed';
            } else {
                note = 'Fixed';
            }
            
            var isitok = ((note == 'Fixed')?'maybe':'no');
            addToallDATAarr(allDATAarr, "empltyHeading",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,11,'Heading without any text');
        }
    });
    var allBRStr = '';
    document.querySelectorAll('br').forEach(function(BRTAG, i){
        if( BRTAG.nextElementSibling?.isIt('br') && !checkIfAndiCode(BRTAG)){
            var thisMeaning = '--';
            var temp = '';
            var note = '--';
            var isContentIssue = 'yes';
            var moreData = '--';
            var thisELm = window.cssPath(BRTAG);
            if(BRTAG && BRTAG.hasAttribute('role') &&  BRTAG.getAttribute('role') == 'presentation'){
                note = 'Fixed';
            } else if(BRTAG && BRTAG.hasAttribute('aria-hidden') &&  BRTAG.getAttribute('aria-hidden') == 'true'){
                note = 'Fixed';
            } else {
                note = 'No fixed';
            }
            
            
            var isitok = ((note == 'Fixed')?'maybe':'no');
            addToallDATAarr(allDATAarr, "BRTAG",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,12,'BR - HTML tags');
        }
    });
    var allBRStr = '';
    ///tablist
    document.querySelectorAll('[role="tablist"]').forEach(function(tablist, i){
        if(  !checkIfAndiCode(tablist)){
            var thisMeaning = '--';
            var temp = '';
            var note = 'Fixed';
            var isContentIssue = 'yes';
            var moreData = '--';
            var thisELm = window.cssPath(tablist);
            
            if(!tablist.hasAttribute('aria-label')){
                moreData = 'noDescription';
            } else {
                thisMeaning = tablist.gasAttribute('aria-label');
            }
            if(tablist.querySelectorAll('[role="tab"]').length == 0 ){
                note = 'TABS - Wrong ARIA roles';
            } else {
                var allElms = tablist.querySelectorAll('[role="tab"]');
                var isAllOK = true;
                allElms.forEach(function(el,index){
                    if(!el.hasAttribute('tabindex') || !el.hasAttribute('aria-controls') || !el.hasAttribute('aria-selected')){
                        isAllOK = false;
                    }
                });
                if(!isAllOK){
                    note = 'TABS - Wrong ARIA roles';
                }
            }
            
            var isitok = ((note == 'Fixed')?'maybe':'no');
            addToallDATAarr(allDATAarr, "SCREENREADER",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,18,'Screen reader softwares');
        }
    });
    var allIframeStr = '';
    document.querySelectorAll('iframe,frame').forEach(function(iframe, i){
        if(!checkIfAndiCode(iframe)){
            var thisMeaning = '--';
            var temp = '';
            var note = '--';
            var isContentIssue = 'yes';
            var moreData = '--';
            var thisELm = window.cssPath(iframe);
            if(iframe.TUAisVisible){
                if( iframe.hasAttribute('title') && iframe.getAttribute('title').trim() != ''){
                    note = 'Fixed';
                    thisMeaning = iframe.getAttribute('title');
                } else if( iframe.hasAttribute('aria-label') && iframe.getAttribute('aria-label').trim() != '' ){
                    note = 'Fixed';
                    thisMeaning = iframe.getAttribute('aria-label');
                } else if( iframe.hasAttribute('role') && iframe.getAttribute('role').trim() != 'none'  && iframe.getAttribute('role').trim() != 'presentation' ){
                    note = 'Fixed';
                    thisMeaning = iframe.getAttribute('aria-label');
                } else {
                    note = 'No fixed';
                }
                var isitok = ((note == 'Fixed')?'maybe':'no');
                addToallDATAarr(allDATAarr, "iframe",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,2,15,'Third party component - (IFRAME)');
            }
        }
    });

    var allLangHtmlAttrStr = '';
    document.querySelectorAll('html').forEach(function(HTML, i){
            var thisMeaning = '--';
            var temp = '';
            var note = '--';
            var isContentIssue = 'yes';
            var moreData = '--';
            var thisELm = 'html';
            if(HTML.hasAttribute('lang')){
                note = 'Fixed';
                thisMeaning = HTML.getAttribute('lang');
            } else {
                note = 'No fixed';
                thisMeaning = 'no attr';
            }
            moreData = HTML.getAttribute('lang');
            
            var isitok = ((note == 'Fixed')?'maybe':'no');
            addToallDATAarr(allDATAarr, "LangHtmlAttr",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,2,14,'Page Languages');
        
    });					

    var allData = [ window.location.host , favicon , allDATAarr ];
    TUAafterLoadingIframeLast(thisIframe, allData);	
}
}




function crawlPageForEmptyLinks() {
    console.log('starting to check for empty links')
    var links = Array.from(document.querySelectorAll('a'));
    var linkArr = [localStorage.getItem('groupID'), localStorage.getItem('client_id')];

    function removeEmptyChar( originalText){
        if(!originalText) return '';
        let processedText = '';
        for (let i = 0; i < originalText.length; i++) {
          const char = originalText[i];
          if (char !== '\n' && char !== '\t') {
            processedText += char;
          }
        }
        return processedText;
    }

    function crawlPageCheckLink(url, text){
        console.log(url)
        console.log(text)
        if(url !== '' && url.indexOf('#') == -1 && text !== '' ){
            url = url.replace('&nowprocket=1','').replace('?nowprocket=1','');       
            linkArr.push({ "url": url, "desc": text.TUAreplaceAll("'", '').TUAreplaceAll('"', '') });
        } else{
             
        }
    
    }
    var promises = [];
    if(localStorage.getItem('groupID') !== null  && localStorage.getItem('client_id') !== null ){
        let host = window.location.host;
        links.forEach(function(link) {
            var href = link.href;
            if(href.indexOf('?')) href = href.split('?')[0]
            url = link.href
            let domain ={};
            if(url == '') url = host;
            try {
                domain = new URL(url) ;
            } catch (error) {
                domain.hostname = host
            }
            var haveDescription = link.innerText;
            haveDescription = removeEmptyChar(haveDescription)?.trim();
            haveDescription = haveDescription == '';
            var haveDescription2 = link.getAttribute('aria-label');
            haveDescription2 = removeEmptyChar(haveDescription2)?.trim();
            haveDescription2 = haveDescription2 == '';
            
            if ((haveDescription && haveDescription2) ){
                var url = link.href;                    
                if(url.indexOf('?nowprocket=1') > -1) url = url.replace('?nowprocket=1', '')
                if(url.indexOf('&nowprocket=1') > -1) url = url.replace('&nowprocket=1', '')
                var promise = fetch(url)
                    .then(function(response) {
                        return response.text();
                    })
                    .then(function(html) {
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(html, 'text/html');
                        var title = doc.querySelector('title')?.innerText;
                        var h1 = doc.querySelector('h1')?.innerText;
                        var someHeading = doc.querySelector('h1, h2, h3, h4, h5, h6')?.innerText;
                        var metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content');
                        let linkUrl = removeEmptyChar(link.getAttribute('href'));
                        linkUrl.replace('?nowprocket=1','');   
                        linkUrl.replace('&nowprocket=1','');
                        if ( h1 && h1 !== '' ) {
                            crawlPageCheckLink(linkUrl, h1)
                        } else if ( title && title !== '') {
                            crawlPageCheckLink(linkUrl, title)
                        }  else if (someHeading && someHeading !== '') {
                            crawlPageCheckLink(linkUrl, someHeading)
                        }
                })
                .catch(function(error) {
                    console.log('url:', url);
                    console.log('Error:', error);
                }); 
                promises.push(promise);
            }
        });
    }
	Promise.all(promises).then(function() {
        console.log('Finish to check for empty links')
        var TUAafterLoadingIframeLast2 = function(id, message) {
            message = JSON.stringify(message);
            if (/^[\],:{}\s]*$/.test(message.replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                var TUAiiFrame = document.getElementById(id);
                setTimeout(function() {
                    TUAiiFrame.contentWindow.postMessage('emptylinks:'+message, "*");
                    alert('נמצאו קישורים ללא תיאור. FAST שמרה הגדרות חדשות במערכת עבורם. יש להכנס ל FAST ולעדכן את הנגישות');
                }, 0);
            } else {
              //console.log('the json is not ok');
            }
            window.allDATAarr = [];
        };	
        if(linkArr.length > 2){
            TUAafterLoadingIframeLast2(thisIframe, linkArr);
        }
	});
}








var TUAafterLoadingIframeLast = function(id, message) {
    message = JSON.stringify(message);
    if (/^[\],:{}\s]*$/.test(message.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        //console.log('the json is ok');
        var TUAiiFrame = document.getElementById(id);
        setTimeout(function() {
            TUAiiFrame.contentWindow.postMessage('saveuserdata:'+message, "*");
        }, 0);
    } else {
      //console.log('the json is not ok');
    }
    window.allDATAarr = [];
};	




var thisIframe = '';
var testwindow = null;  

function isLocalStorageNull(n) {
    return localStorage.getItem(n) == null || localStorage.getItem(n) == 'null';
}

if(window.location.href.indexOf('system.user-a.co.il') == -1 /*&& localStorage.getItem('dontrunaddon') != 'true'*/){
    window.strart = function(){
        jsPath = andiUA.TUAjsPath;
        ANDIrunAndi();
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
            if(typeof message != 'string')message = '';
            if(message.indexOf('saveuserdata:') > -1){
                param = message.replace('saveuserdata:','');
                message = 'saveuserdata:';
            }
            if(message.indexOf('queryResults:') > -1){
                param = message.replace('queryResults:','');
                message = 'queryResults';
            }
            switch (message) {
                case 'datasaved': 
                    if(UA1('.runScanAllSite')){
                        andiListener2();
                    }
                break;
                case 'scanPageForEmptyLinksDataSaved': 
                    alert('נמצאו קישורים ללא תיאור. FAST שמרה הגדרות חדשות במערכת עבורם. יש להכנס ל FAST ולעדכן את הנגישות');
                break;
            }
            if (window.addEventListener) {
                window.addEventListener("message", andiListener);
            } else {
                window.attachEvent("onmessage", andiListener);
            }
        }
    }
    function runScan(){
        var url_string = window.location.href; 
        if(localStorage.getItem('client_id') != null && localStorage.getItem('client_id') != 'null'){
            if(!UA1('#andiifuserlogin')){
                thisIframe = 'andiifuserlogin2';
                UA1('body').appendHtml('<iframe  title="UA" tabindex="-1" onload="strart();" aria-hidden="true" scrolling="no" style="display:none;" id="andiifuserlogin2" src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"></iframe>');
            } else {
                thisIframe = 'andiifuserlogin';
                strart();
            }
        }
    }
                    
    if(UA1('.runScanAllSite')){
        
    } else if(UA1('.anditestmode') ){
        setTimeout(function(){
            runScan();
            crawlPageForEmptyLinks();
        }, 2000);
        
    } else {//Math.floor(Math.random() * 100)  

        if(localStorage.getItem('sendDataevrypage') == null || localStorage.getItem('sendDataevrypage') == 'null' ){
            localStorage.setItem('sendDataevrypage', Math.floor(Math.random() * 150)  );
        } else {
            if( parseInt( localStorage.getItem('sendDataevrypage')) <= 1 ){
                localStorage.setItem('sendDataevrypage', Math.floor(Math.random() * 150)  );
                runScan();
            } else {
                localStorage.setItem('sendDataevrypage', (parseInt( localStorage.getItem('sendDataevrypage'))) -1   );
            }
        }
    }
}



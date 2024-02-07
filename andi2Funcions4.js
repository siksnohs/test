andiUA.loadmore = function(){andiUA.paginationFix = function() {
	
    var wrapBreadCrumbArr = andiUA.findPassebleContainer(['pagenav','pager','pagination','paging']);
    wrapBreadCrumbArr.forEach(function(el3,j) {
        if (el3.closest('#jilVt') == null && !el3.thasClass('UAdontrunpagenavonme') ) {
            var FtTIP = el3;
            FtTIP.querySelectorAll('a').forEach(function(VnIxP,i) {
                if (!isNaN(VnIxP.innerText) ){
    				VnIxP.addAttr({
    				    'uapaginationpagelink': true,
    					'role': 'link',
    					'aria-label': andiUA.KNTQg.bbb17 + VnIxP.innerText
    				});
                }
            });
            if(FtTIP.querySelectorAll('a[uapaginationpagelink]').length > 0){
                FtTIP.addAttr({
                    'role': 'menubar',
    				'tanindex':'0',
                    'aria-label': andiUA.KNTQg.bbb18
                });
    
                FtTIP.querySelectorAll('[class*="active"], [class*="current"]').forEach(function(VnIxP,i) {
    				VnIxP.addAttr({'aria-current': 'true'});
                });
            }
            
            
           
        }
    });
};
andiUA.paginationFix();/*andiUA.ML = function(isDynamic) {
  isDynamic = isDynamic == "dynamic" ? true : false;
  var n, objOfDataElms = [], arrOfObjText = [],biggestText = parseInt(localStorage.getItem("biggestText")), uoVsI = parseInt(localStorage.getItem("uoVsI")), heaing = '[role="heading"],h1,h2,h3,h5,h6,h4', headingLevel = biggestText - (uoVsI + 3);
  headingLevel = Math.ceil(headingLevel / 5);
  function search(myArray, textElm, elmClass, tagName) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].jEmKP === textElm && myArray[i].tagName == tagName && myArray[i].elmClass == elmClass) {
        return i;
      }
    }
  }
  function avoidTagFirstMap(Elm) {
    if (!Elm.closest("#jilVt") && !Elm.closest("svg") && !Elm.isIt('[role="alert"],script,style,embed,object,noframes,svg,.accessibleIframe,.nrnYA,#jilVt')) {
      return true;
    }
    return false;
  }
  function avoidTag(Elm) {
    if (!Elm.isIt('select,label,option,[role="alert"],script,style,embed,object,noframes,svg,select,button,video,audio,input,textarea,.accessibleIframe,.nrnYA,[role="menu"],[role="button"],[role="tree"],#jilVt')) {
      return true;
    }
    return false;
  }
  var countFixedHeading = 0, countFixedInput = 0, countFixedReadmorelink = 0, countFixedImg = 0, countFixedContent = 0,
   thisElm, elemText, temoArr = [], child, walk = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, null, false);
  while (child = walk.nextNode()) {
    if (avoidTagFirstMap(child)) {
      var innerText = null, isDefind = true;
      child.childNodes.forEach(function(child3, index3) {
        if (child3.nodeValue !== null && child3.nodeValue.trim() !== "") {
          elemText = innerText = child3.nodeValue.trim();
        }
      });
      if (!isDynamic && innerText) {
        var tagName = child.tagName, elmClass = child.classList.value, indexInArr = search(arrOfObjText, innerText, elmClass, tagName);
        if (!indexInArr) {
          var CxhBE = {"jEmKP":innerText, "elmClass":elmClass, "tagName":child.tagName, "OOkJn":1};
          arrOfObjText.push(CxhBE);
        } else {
          arrOfObjText[indexInArr].OOkJn++;
        }
      }
      if (innerText === null) {
        innerText = child.BKXPP();
      }
      if (child.isIt("img")) {
        temoArr.push(["img", child.getAttribute("alt"), child]);
      } else {
        if (child.isIt('a,[role="link"]')) {
          temoArr.push(["link", innerText, child]);
        } else {
          if (child.isIt("textarea")) {
            temoArr.push(["textarea", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
          } else {
            if (child.isIt("select")) {
              temoArr.push(["select", child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
            } else {
              if (child.isIt('button,[role="button"],[type="button"],[type="image"],[type="submit"],[type="reset"]')) {
                temoArr.push(["button", innerText || child.value || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
              } else {
                if (child.isIt('[role="heading"],h1,h2,h3,h4,h5,h6')) {
                  temoArr.push(["heading", innerText, child]);
                } else {
                  if (child.isIt('[type="color"]')) {
                    temoArr.push(["input_color", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                  } else {
                    if (child.isIt('[type="date"]')) {
                      temoArr.push(["input_date", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                    } else {
                      if (child.isIt('[type="email"]')) {
                        temoArr.push(["input_email", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                      } else {
                        if (child.isIt('[type="file"]')) {
                          temoArr.push(["input_file", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                        } else {
                          if (child.isIt('[type="month"]')) {
                            temoArr.push(["input_month", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                          } else {
                            if (child.isIt('[type="number"]')) {
                              temoArr.push(["input_number", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                            } else {
                              if (child.isIt('[type="password"]')) {
                                temoArr.push(["input_password", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                              } else {
                                if (child.isIt('[type="range"]')) {
                                  temoArr.push(["input_range", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                } else {
                                  if (child.isIt('[type="search"]')) {
                                    temoArr.push(["input_search", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                  } else {
                                    if (child.isIt('[type="tel"]')) {
                                      temoArr.push(["input_tel", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                    } else {
                                      if (child.isIt('[type="time"]')) {
                                        temoArr.push(["input_time", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                      } else {
                                        if (child.isIt('[type="text"]')) {
                                          temoArr.push(["input_text", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                        } else {
                                          if (child.isIt('[type="URL"]')) {
                                            temoArr.push(["input_URL", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                          } else {
                                            if (child.isIt('[type="week"]')) {
                                              temoArr.push(["input_week", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                            } else {
                                              if (child.isIt('[type="checkbox"]')) {
                                                temoArr.push(["checkbox", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                              } else {
                                                if (child.isIt('[type="radio"]')) {
                                                  temoArr.push(["radio", child.placeholder || child.title || (child.hasAttribute("aria-label") ? child.getAttribute("aria-label") : ""), child]);
                                                } else {
                                                  if (elemText !== "" && temoArr.length > 0 && elemText != temoArr[temoArr.length - 1][1]) {
                                                    temoArr.push(["text", elemText, child]);
                                                    isDefind = false;
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
      if (elemText == "|" && !child.thasClass("NLWxW") && !child.hasAttribute("role")) {
        child.addAttr({"role":"separator"});
        countFixedContent++;
      }
      if (!child.hasAttribute("role") && !child.closest('[role="menuitem"], button') && !child.closest(heaing) && child.querySelectorAll(heaing).length === 0) {
        var compStyles = window.getComputedStyle(child);
        var fontsizeElm = parseInt(compStyles.getPropertyValue("font-size"));
        if (fontsizeElm > uoVsI + 3) {
          var level = 5;
          var corrent = uoVsI + 3 + headingLevel;
          while (level > 2 && fontsizeElm > corrent) {
            corrent = corrent + headingLevel;
            level--;
          }
          var tag = child.tagName.toLowerCase();
          if( !child.isIt("[role],i,select,input,button, textarea,.icon,.fa") && !child.closest('[role="menubar"], nav, ol, ul')   ){
              if (tag == "a") {
                /*child.wrapInner("div");
                child.parentElement.setAttribute("style", "display:inline;");
                child.parentElement.setAttribute("role", "heading");
                child.parentElement.setAttribute("aria-level", level);
                countFixedHeading++;*//*
              } else {
                /*child.setAttribute("role", "heading");
                child.setAttribute("aria-level", level);*//*
                countFixedHeading++;
              }
              andiUA.headingArr.push([child, child.BKXPP(), level, "fixed"]);
          }
        }
      }
    }
  }
  andiUA.arrOfObjTextFilter = arrOfObjText.filter(function(Obj) {
    return Obj.OOkJn > 2 && Obj.elmClass !== "" && Obj.jEmKP.length > 1 && (Obj.tagName === "A" || Obj.tagName === "BUTTON");
  });
  var findInputDesc = function(j) {
    var preperText = "";
    for (var t = j - 1; t >= 0; t--) {
      if (temoArr[t][1].trim() != "" && temoArr[t][1].trim() == "*") {
        preperText += temoArr[t][1].trim() + " ";
      } else {
        if (temoArr[t][1] != undefined && temoArr[t][1].trim() != "" && temoArr[t][1].trim() != "*") {
          preperText += temoArr[t][1].trim();
          break;
        }
      }
    }
    return preperText;
  };
  var findradioCheckboxDesc = function(j) {
    var preperText = "";
    for (var t = j + 1; t < temoArr.length; t++) {
      if (temoArr[t][1] != undefined && temoArr[t][0] == "text" && temoArr[t][1].trim() != "" && temoArr[t][1].trim() == "*") {
        preperText += temoArr[t][1].trim() + " ";
      } else {
        if (temoArr[t][1] != undefined && temoArr[t][0] == "text" && temoArr[t][1].trim() != "" && temoArr[t][1].trim() != "*") {
          preperText += temoArr[t][1].trim();
          break;
        }
      }
    }
    return preperText;
  };
  function checkInputMeanong(elm, index, prevOrNext) {
    if (!elm.thasClass("uainput")) {
      var InputDesc = "", inputID = elm.getAttr("id");
      if (elm.closest("label")) {
        InputDesc = elm.closest("label").BKXPP();
      } else {
        if (elm.hasAttribute("id") && UA1("label[for='" + inputID + "']")) {
          if (UA1("label[for='" + inputID + "']").BKXPP() !== "") {
            InputDesc = UA1("label[for='" + inputID + "']").BKXPP();
          }
        }
      }
      if (InputDesc.trim() == "") {
        if (prevOrNext == "prev") {
          var elmP = andiUA.getCoords(elm);
          if (elmP.top > 150) {
            InputDesc = findInputDesc(index);
          }
        } else {
          InputDesc = findradioCheckboxDesc(index);
        }
      }
      if (InputDesc != "") {
        elm.addAttr({"tuaandiinputdiscrp":InputDesc});
        countFixedInput++;
      }
      if (InputDesc != "" && !elm.hasAttribute("title")) {
        elm.addAttr({"title":InputDesc});
        countFixedInput++;
      } else {
        elm.addAttr({"title":elm.getAttribute("title") + " " + InputDesc});
        countFixedInput++;
      }
      //elm.addClass("uainput");
    }
  }
  for (var i = temoArr.length - 1; i >= 0; i--) {
    if (temoArr[i][0].indexOf("input_") > -1 || temoArr[i][0] == "textarea" || temoArr[i][0] == "select") {
      if (temoArr[i][1].trim() == "") {
        checkInputMeanong(temoArr[i][2], i, "prev");
      } else {
        temoArr[i][2].addAttr({"tuaandiinputdiscrp":temoArr[i][1]});
        if (!temoArr[i][2].hasAttribute("aria-label")) {
          temoArr[i][2].addAttr({"aria-label":temoArr[i][1]});
        }
      }
    }
    if (temoArr[i][0] == "radio" || temoArr[i][0] == "checkbox") {
      if (temoArr[i][1].trim() == "") {
        checkInputMeanong(temoArr[i][2], i, "next");
      } else {
        temoArr[i][2].addAttr({"tuaandiinputdiscrp":temoArr[i][1]});
        if (!temoArr[i][2].hasAttribute("aria-label")) {
          temoArr[i][2].addAttr({"aria-label":temoArr[i][1]});
        }
      }
    }
    for (var j = 0; j < andiUA.arrOfObjTextFilter.length; j++) {
      if (temoArr[i][1] == andiUA.arrOfObjTextFilter[j].jEmKP) {
        var preperText = "";
        for (var t = i - 1; t >= 0; t--) {
          var thisObj = temoArr[t][2];
          if (temoArr[t][0] == "heading") {
            var thisHeadingText = temoArr[t][1];
            if (getElementsByText(temoArr[t][2].BKXPP(), temoArr[t][2].tagName.toLowerCase()).length == 1) {
              var plusMinusText = "";
              if (thisObj.jEmKP == "-") {
                plusMinusText = andiUA.KNTQg.bbb434 + " ";
              }
              if (thisObj.jEmKP == "+") {
                plusMinusText = andiUA.KNTQg.bbb433 + " ";
              }
              if (thisObj.hasAttribute("aria-label")) {
                var label = thisObj.getAttribute("aria-label");
                if (label.indexOf(thisHeadingText) == -1) {
                  thisObj.addAttr({"aria-label":plusMinusText + label + " " + thisHeadingText});
                  countFixedReadmorelink++;
                }
              } else {
                thisObj.addAttr({"aria-label":plusMinusText + thisObj.jEmKP + " " + thisHeadingText});
                countFixedReadmorelink++;
              }
              break;
            }
          }
        }
      }
    }
  }
};
andiUA.ML();*/
/*andiUA.TextAnalysis = function(isDynamic) {
  isDynamic = isDynamic == "dynamic" ? true : false;
  var walk = document.createTreeWalker(UA1("body"), NodeFilter.SHOW_ELEMENT, null, false);
  var biggestText = parseInt(localStorage.getItem("biggestText")), uoVsI = parseInt(localStorage.getItem("uoVsI")), textElm = "", thisElm, heaing = '[role="heading"],h1,h2,h3,h5,h6,h4';
  var headingLevel = biggestText - (uoVsI + 3), headingLevel = Math.ceil(headingLevel / 5);
  var arrOfObjText = [], countFixedHeading = 0;
  while (thisElm = walk.nextNode()) {
    thisElm.childNodes.forEach(function(child3, index3) {
      if (child3.nodeValue != null && child3.nodeValue.trim() != "" && !thisElm.isIt("audio,video,embed,noframes,noscript,object,input, script,style,svg,#jilVt,.UAtextToShow, .ZWDCr,.accessibleIframe,.nrnYA") && !thisElm.closest("#jilVt")) {
        textElm = child3.nodeValue.trim();
        var compStyles = window.getComputedStyle(thisElm);
        var fontsizeElm = parseInt(compStyles.getPropertyValue("font-size"));
        if (!thisElm.hasAttribute("data-andiallelmwithtext") && !thisElm.isIt("aside,footer,dialog,menu,nav")) {
          thisElm.setAttribute("data-andiallelmwithtext", fontsizeElm);
        
        }
        if (!thisElm.hasAttribute("role") && !thisElm.closest('[role="menuitem"], button') && !thisElm.closest(heaing) && thisElm.querySelectorAll(heaing).length == 0) {
          if (fontsizeElm > uoVsI + 3) {
            var level = 5;
            var corrent = uoVsI + 3 + headingLevel;
            while (level > 2 && fontsizeElm > corrent) {
              corrent = corrent + headingLevel;
              level--;
            }
             var tag = thisElm.tagName.toLowerCase();
             if( !thisElm.isIt("[role],i,select,input,button, textarea,.icon,.fa") && !thisElm.closest('[role="menu"],[role="menubar"], nav, ol, ul')   ){
                  if (tag == "a") {
                    /*thisElm.wrapInner("div");
                    thisElm.parentElement.setAttribute("style", "display:inline;");
                    thisElm.parentElement.setAttribute("role", "heading");
                    thisElm.parentElement.setAttribute("aria-level", level);*//*
                    countFixedHeading++;
                  } else {
                    /*thisElm.setAttribute("role", "heading");
                    thisElm.setAttribute("aria-level", level);*//*
                    countFixedHeading++;
                  }
                  andiUA.headingArr.push([thisElm, thisElm.BKXPP(), level, "fixed"]);
             }
          }
        }
      }
    });
  }
  if (!isDynamic) {
    andiUA.arrOfObjTextFilter = arrOfObjText.filter(function(Obj) {
      return Obj.OOkJn > 2 && Obj.elmClass != "" && Obj.jEmKP.length > 1;
    });
  }
};*/
/*andiUA.TextAnalysis();*/andiUA.fixBreadcrumb = function() {

	var countFixed = 0, wrapBreadCrumbArr = andiUA.findPassebleContainer(['BreadCrumb','breadcrams','breadcrumb','crumbs','crumb']);
	wrapBreadCrumbArr.forEach(function(VnIxP,i) {
		var n, textArr = [];
		var walk = document.createTreeWalker(VnIxP, NodeFilter.SHOW_TEXT, null, false);
		while (n = walk.nextNode()) {
			if(textArr.indexOf(n.nodeValue) == -1 && n.nodeValue.trim() !== ''){
				var textElm = n.nodeValue.trim();
				textArr.push(n.nodeValue);
				if(n.parentElement.tagName == 'A'){
					n.parentElement.addAttr({"aria-label": andiUA.KNTQg.TUABreadcrumb2 + n.nodeValue});
				} else {
					n.parentElement.addAttr({"aria-current":"page","aria-label": andiUA.KNTQg.TUABreadcrumb1 + n.nodeValue});
				}
			}
		}
		var allSentence = '';
		for(var i = textArr.length-1; i >= 0; i--){
			if(i == (textArr.length-1)){
				allSentence += andiUA.KNTQg.TUABreadcrumb1 + textArr[i] + " ";
			} else {
				allSentence += andiUA.KNTQg.TUABreadcrumb3 + textArr[i] + " ";
			}
		}
		VnIxP.addAttr({"aria-label": allSentence, "tabindex": "0", "role": "region"});
	});
};
andiUA.fixBreadcrumb();var vKfJG = UA('[role="heading"],h1,h2,h3,h4,h5,h6');
andiUA.YODzI = function() {
    if (UA("h1").length > 1) {
        UA("h1").forEach(function(VnIxP,i) {
            if (i > 0) {
                VnIxP.addAttr({
                    "aria-level": "2",
                    "role": "heading"
                });
            }
        });
    }
};
andiUA.eINeo = function(vKfJG) {
	document.querySelectorAll('[role="heading"],h1,h2,h3,h4,h5,h6').forEach(function(VnIxP,i) {
		if (VnIxP.innerText.trim() == "" && VnIxP.querySelectorAll('img,a,svg').length == 0) {
			VnIxP.innerHTML += '<span class="sr-only">&#8203;</span>';
			 VnIxP.addAttr({"role": "presentation"});
		}
	});
};
andiUA.TUAfixHaveNotH1 = function(vKfJG) {
    if(!document.querySelector('h1')){
    	let htmlSRT = '<h1 class="sr-only">'+document.querySelector('title')?.innerText.trim()+'</h1>';
    	if(document.querySelector('title')) document.body.insertAdjacentHTML( 'afterbegin', htmlSRT );
    }
}

andiUA.YODzI();
andiUA.eINeo(vKfJG);
andiUA.TUAfixHaveNotH1();andiUA.MuUxo = function() {
	
	var alt1, alt2;
	UA(andiUA.TUAsettingFn.SdmDC).forEach(function(VnIxP,i) {
		 if (!VnIxP.hasAttribute("alt")) {
			if (VnIxP.getAttr("src") !== null) {
				alt1 = VnIxP.getAttr("src").rVDHB();
				alt2 = VnIxP.getAttr("src").qDYoN();
			}
			if (VnIxP.getAttr("alt") === null || VnIxP.getAttr("alt") == alt1 || VnIxP.getAttr("alt") == alt2) {
				VnIxP.addAttr({"alt":""});
			}
		 }
	});
};
andiUA.MuUxo();andiUA.PTPzL = function(GMooO) {
    document.querySelectorAll('a').forEach( (elm)=>{
      (!elm.hasAttribute('href'))?elm.setAttribute('tabindex', '0'):'';
    });
};
andiUA.PTPzL();andiUA.findAltMeaning = function() {
	
    var HashO = 'h1,h2,h3,h4,h5.h6,[role="heading"]';
    var areas = 'article:not(.andimenucode), [siACv="2"]:not(.dontfindAltMeaning):not(.andimenucode)';
    if(UA1('article'))
    UA('article').forEach(function(VnIxP,i) {
        var YDwKe = VnIxP;
        if (YDwKe.querySelectorAll('img').length > 0 && YDwKe.querySelectorAll(HashO).length > 0) {
            YDwKe.querySelectorAll('img').forEach(function(el2,j) {
                var MGUpK = j;
                var WvLDr = el2;
                if ( WvLDr.closest('#jilVt') === null && WvLDr.getAttr('alt') === null || WvLDr.getAttr('alt').trim() === '') {
					if (WvLDr.getAttribute('class') !== null && WvLDr.getAttribute('class').indexOf('avatar') > -1) {
						WvLDr.setAttribute('alt',andiUA.KNTQg.bbb148);
					} else {
						var xJZoQ = YDwKe.querySelectorAll(HashO);
						var hASaa = YDwKe.querySelectorAll('*');
						var nodes = Array.prototype.slice.call( hASaa );
						var UMjrk = nodes.indexOf(WvLDr);
						if(UMjrk === undefined)UMjrk = -1;
						var dbuZJ = false;
						for (var TUAi = UMjrk; TUAi >= 0; TUAi--) {
							if (hASaa[TUAi].getAttribute('role') == 'heading' && HashO.indexOf(hASaa[TUAi].tagName.toLowerCase() ) > -1) {
								WvLDr.addAttr({
									"alt": hASaa[TUAi].innerText + ' ' +
										andiUA.KNTQg.GGrFy + ' ' + (1 + MGUpK)
								});
								dbuZJ = true;
								break;
							}
						}
						if (!dbuZJ) {
							var xJZoQTemp =  andiUA.getSiblings(el2,'next');
							var xJZoQH = [];
							for(var jj = 0;jj < xJZoQTemp.length;jj++){
								if( (hASaa[jj].nodeType == 1 && hASaa[jj].getAttribute('role') == 'heading') || (xJZoQTemp[jj].nodeType == 1 && HashO.indexOf(xJZoQTemp[jj].tagName.toLowerCase() ) > -1)){
									xJZoQH.push(xJZoQTemp[jj]);
									break;
								}
							}
							if (xJZoQH != undefined && xJZoQH.length > 0) {
								el2.addAttr({
									"alt": xJZoQH[0].innerText
								});
							} else {
								xJZoQ =  YDwKe.querySelectorAll(HashO);
								var WvLDr = el2;
								var hASaa =  YDwKe.querySelectorAll("*");
								var nodes = Array.prototype.slice.call( hASaa );
								var UMjrk = nodes.indexOf(WvLDr);
								if(UMjrk == undefined)UMjrk = -1;
								var dbuZJ = false;
								for (var TUAi = UMjrk; TUAi < hASaa.length; TUAi++) {
									if ( hASaa[TUAi].getAttribute('role') == 'heading' && HashO.indexOf(hASaa[TUAi].tagName.toLowerCase() ) > -1 ) {
										WvLDr.addAttr({
											"alt":  hASaa[TUAi].innerText + ' ' +
												andiUA.KNTQg.GGrFy + ' ' + (1 + MGUpK)
										});
										dbuZJ = true;
										break;
									}
								}
							}
						}
					}
                }
            });
        }
    });
};

andiUA.MuUxo = function() {
	
	var alt1, alt2;
	UA(andiUA.TUAsettingFn.SdmDC).forEach(function(VnIxP,i) {
		 if (!VnIxP.hasAttribute("alt")) {
			if (VnIxP.getAttr("src") !== null) {
				alt1 = VnIxP.getAttr("src").rVDHB();
				alt2 = VnIxP.getAttr("src").qDYoN();
			}
			if (VnIxP.getAttr("alt") === null || VnIxP.getAttr("alt") == alt1 || VnIxP.getAttr("alt") == alt2) {
				VnIxP.addAttr({"alt":""});
			}
		 }
	});
	UA('img').forEach(function(elm,i) {
	    if(!elm.hasAttribute('alt')) elm.setAttribute('alt', '');
	});
};
andiUA.MuUxo();
andiUA.findAltMeaning();andiUA.QTtHf = function() {
	UA('br, hr').forEach(function(VnIxP) {
		VnIxP.addAttr({"role":"presentation"});
	});
};
andiUA.QTtHf();andiUA.TJlPR = function() {
	
	var iQBPT = UA('[onclick*="location"],[onclick*="window.open"]');
    for (var TUAi = 0; TUAi < iQBPT.length; TUAi++) {
        iQBPT[TUAi].setAttribute("role", "link");
        iQBPT[TUAi].addAttr({"tabindex": "0"});
    }
    var vZzsf = andiUA.KNTQg;
    var iXwlj = ['a[href$=".amr"],a[href$=".mp2"],a[href$=".ram"],a[href$=".aiff"],a[href$=".aif"],a[href$=".wma"],a[href$=".wav"],a[href$=".m4v"]', 'a[href$=".ogg"],a[href$=".m4v"],a[href$=".divx"],a[href$=".mpeg"],a[href$=".m4a"],a[href$=".mp4"],a[href$=".mov"],a[href$=".mpg"],a[href$=".avi"],a[href$=".wmv"]', 'a[href$=".exe"]', 'a[href$=".vcd"]', 'a[href$=".cab"]', 'a[href$=".ace"]', 'a[href$=".gz"]', 'a[href$=".dmg"]', 'a[href$=".iso"]', 'a[href$=".jar"]', 'a[href$=".rar"]', 'a[href$=".zip"],a[href$=".7z"]',
        'a[href$=".psd"]', 'a[href$=".ai"]', 'a[href$=".indd"]', 'a[href$=".ppt"],a[href$=".pptx"],a[href$=".pptm"],a[href$=".pps"],a[href$=".ppsx"]', 'a[href$=".xlsx"],a[href$=".ods"],a[href$=".xls"]', 'a[href$=".doc"],a[href$=".docx"],a[href$=".odt"],a[href$=".wps"]', 'a[href$=".txt"]', '[href$=".pdf"]',
    ];
    var QMJOW = ["BqMJY", "inDOZ", "JIsVF", "RqVvc", "Wrabi", "PgFAt", "FQAaD", "IfqZG", "ohJrF", "wETxL", "YXXZo", "gMYVm", "drGpF", "cOTzC", "OYIqp", "DWyFL", "Qskym", "hXqyl", "gJIGO", "QcPnt", "svTkx"];
    var pibCE = ["sound", "movie", "exe", "vcd", "cab", "ace", "gz", "dmg", "iso", "jar", "rar", "zip", "psd", "ai", "indd", "powerpoint", "excel", "doc", "txt", "pdf", "newwindow"];
    var KMyeW = [vZzsf.HxVeb, vZzsf.sHUHK, vZzsf.LkMTc, vZzsf.PZDnw, vZzsf.GLjwD, vZzsf.tSXFw, vZzsf.xeZfw, vZzsf.CkRRZ, vZzsf.YLbvw, vZzsf.eNzUz, vZzsf.IXqvO, vZzsf.eNsmF, vZzsf.dwNzD, vZzsf.ANDI2yrGrB, vZzsf.ANDI2byiLQ, vZzsf.ANDI2CQOmt,
        vZzsf.ANDI2PfNPS, vZzsf.Nvfzl, vZzsf.coDFH, vZzsf.irUUM, vZzsf.LuAsi
    ];
	
    for (var i = 0; i < iXwlj.length; ++i) {
        
        
        var YPgLs = i;
		UA(iXwlj[YPgLs]).forEach(function(VnIxP) {
		    
		    if(!VnIxP.hasAttribute('TJlPR')){
		    
           if (	!VnIxP.thasClass(QMJOW[YPgLs])		) {
                var OALWI = "";
                var Mhkir = VnIxP.innerText;
                if (Mhkir === "" && VnIxP.querySelectorAll("img").length > 0 ) {
                    var jlsNR = VnIxP.querySelectorAll("img")[0];
                    if (jlsNR && jlsNR.getAttr("alt") !== null) {
                        Mhkir = jlsNR.getAttr("alt");
                    } else {
                        if (jlsNR && jlsNR.getAttr("aria-label") !== null) {
                            Mhkir = jlsNR.getAttr("aria-label");
                        }
                    }
                }
                var TUAariaLabelLink = VnIxP.getAttr("aria-label");
                if (TUAariaLabelLink !== undefined && TUAariaLabelLink !== null) {
                    TUAariaLabelLink.indexOf(Mhkir) == -1 ? OALWI = Mhkir + " " + TUAariaLabelLink : OALWI = TUAariaLabelLink;
                } else if (VnIxP.getAttr("title") !== null && VnIxP.getAttr("title") !== '') {
                    var TUAtitleLink = VnIxP.getAttr("title");
                    TUAtitleLink.indexOf(Mhkir) == -1 ? OALWI = Mhkir + " " + TUAtitleLink : OALWI = TUAtitleLink;
				}
                if (OALWI === '') VnIxP.addAttr({
                    "aria-label": Mhkir + ", " + KMyeW[YPgLs]
                });
                OALWI !== undefined && OALWI !== '' && OALWI.length >= 1 ?
				VnIxP.addAttr({"aria-label": OALWI + ", " + KMyeW[YPgLs]}) : '';
				VnIxP.taddClass(QMJOW[YPgLs]);
				VnIxP.addAttr({"TJlPR": true});
				
				
                
            }
            
            
		    }
            
        });
        
        
        
        
    }
};
andiUA.TJlPR();andiUA.defindMainContent = function() {
	if(!UA1('.UAmainlink')){
        var wrapMAinContentArr = [];
    	if(!UA1('[role="main"]')){
    		UA('.content,.main-container,main,#main,#content,#main-content,#mainContent,#maincontent,.main-content,.maincontent,#content-main,#contentmain,.content-main,.contentmain').forEach(function(VnIxP, i) {
    			if(!VnIxP.isIt('head,html,body,script,style')){
    				if(VnIxP.isIt('.content,.main-container') && UA('.content').length == 1 && !UA1('[role="main"]')){
    					VnIxP.addAttr({"role": "main"});
    				} else 	if(!UA1('[role="main"]')){
    					VnIxP.addAttr({"role": "main"});
    				}
    			}
    		});
    	}
    	setTimeout(function(){
    		if(UA1('[role="main"]') && !UA1('.UAmainlink')){
    			var allSkipLInks = UA(".nrnYA").length;
    			UA1('body').brAmf('<a class="nrnYA UAmainlink" href="#" tabindex="0" >'+andiUA.KNTQg.WybfR+'</a>');
    			UA1('.UAmainlink').addEventListener('click', function(e){
    				e.preventDefault();
    				UA1('[role="main"]').addAttr({"tabindex": "0"});
    				UA1('[role="main"]').focus();
    			});
    		}
    	},500);
	}
};
andiUA.defindMainContent();//ZWDCr
var langs = {};
langs.heb = {};
langs.en = {};
langs.heb.wp1 = 'לשקופית הקודמת';
langs.heb.wp2 = 'לשקופית הבאה';
langs.heb.wp3 = 'שקופית מספר';
langs.heb.wp4 = 'קרא עוד על ';
langs.heb.wp5 = 'לראש הדף';
langs.heb.wp6 = 'עוד';
langs.heb.wp7 = 'שם פרטי';
langs.heb.wp8 = 'טלפון';
langs.heb.wp9 = 'דואר אלקטרוני';
langs.heb.wp10 = 'נושא';
langs.heb.wp11 = 'שלח';
langs.heb.wp12 = 'תמונת גלריה מספר ';
langs.heb.wp13 = 'תאריך: ';
langs.heb.wp14 = 'חיפוש לפי אות: ';
langs.heb.wp15 = 'שתף בפייסבוק';
langs.heb.wp16 = 'שתף בטוויטר';
langs.heb.wp17 = 'הוסף ל pinterest';
langs.heb.wp18 = 'המחיר הקודם הוא';
langs.heb.wp19 = 'יומן אירועים';
langs.heb.wp20 = ' יום ';
langs.heb.wp21 = ' יש אירוע ביום זה ';
langs.heb.wp22 = ' לחודש הבא ';
langs.heb.wp23 = ' לחודש הקודם ';
langs.heb.wp24 = ' לייק ';
langs.heb.wp25 = ' קטגוריה ';
langs.heb.wp26 = ' צפיות ';
langs.heb.wp27 = 'הגדל תמונה מספר ';
langs.heb.wp28 = ' נפתח בחלונית פופאפ';
langs.heb.wp29 = 'כמות מוצרים';
langs.heb.wp30 = 'שדות חובה: ';
langs.heb.wp31 = 'שתף ב- ';
langs.heb.wp32 = 'סגור חלונית פופ-אפ';
langs.heb.wp33 = 'הוסף עוד אחד';
langs.heb.wp34 = 'הסר אחד';
langs.heb.wp35 = 'וויז';
langs.heb.wp36 = 'ווצאפ';


langs.en.wp1 = 'Previous slide';
langs.en.wp2 = 'Next slide';
langs.en.wp3 = 'Slide number';
langs.en.wp4 = 'Read more on ';
langs.en.wp5 = 'Top page';
langs.en.wp6 = 'more';
langs.en.wp7 = 'Name*';
langs.en.wp8 = 'Phone*';
langs.en.wp9 = 'Email*';
langs.en.wp10 = 'message*';
langs.en.wp11 = 'send';
langs.en.wp12 = 'image gallery number ';
langs.en.wp13 = 'date: ';
langs.en.wp14 = 'search by letter: ';
langs.en.wp15 = 'share in facebook';
langs.en.wp16 = 'share in twitter';
langs.en.wp17 = 'add to pinterest';
langs.en.wp18 = 'The previous price is';
langs.en.wp19 = 'Calendar';
langs.en.wp20 = 'Day';
langs.en.wp21 = ' we have events in this day ';
langs.en.wp22 = 'Next Month';
langs.en.wp23 = 'Previous Month';
langs.en.wp24 = ' like ';
langs.en.wp25 = ' Category ';
langs.en.wp26 = ' Views ';
langs.en.wp27 = 'inlarge image number ';
langs.en.wp28 = ' opened in popup';
langs.en.wp29 = 'numbers of product';
langs.en.wp30 = 'Required fields: ';
langs.en.wp31 = 'share with  ';
langs.en.wp32 = 'Close pop-up  ';
langs.en.wp33 = 'add one more';
langs.en.wp34 = 'Subtract one';
langs.en.wp35 = 'Waze';
langs.en.wp36 = 'Whatsapp';


var headingTags = 'h1,h2,h3,h4,h5,h6,[role="heading"]';
var CurrencyCoins = ['¥', '₪', '₹', '₽', '฿', '₿', '€', '£', '$'];
var wptext = {};
if (UA1('html').getAttribute('vFaKz') == "he" || UA1('html').getAttribute('lang') == "he-IL" || UA1('html').getAttribute('lang') == "he") {
    wptext = langs.heb;
} else {
    wptext = langs.en;
}



UA('button,[role="button"],a').forEach(function(el, index) {
    if (el.BKXPP().trim() == '+') el.setAttribute('aria-label',wptext.wp33);
    if (el.BKXPP().trim() == '-') el.setAttribute('aria-label',wptext.wp34);
});

UA('.closeLightboxButton').forEach(function(elm){
    elm.addAttr({ 'tabindex': '0', 'role': 'button', 'aria-label': wptext.wp32 });
});


UA(headingTags).forEach(function(el, index) {
    if (!el.hasAttribute('role') && el.hasAttribute('aria-label'));
    el.removeAttribute('aria-label');
});

UA('del').forEach(function(el, index) {
    for (var i = 0; i < CurrencyCoins.length; i++) {
        if (el.BKXPP().trim().indexOf(CurrencyCoins[i]) > -1) {
            el.addAttr({ 'tabindex': '0', 'role': 'tooltip', 'aria-label': wptext.wp18 + ' ' + el.BKXPP() });
        }
    }
});

UA('.meta-category a').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'link', 'aria-label': wptext.wp25 + ' ' + el.BKXPP() });
});
UA('.post-like a').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'button', 'aria-label': wptext.wp24 + ' ' });
});

UA('.meta-views').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'tooltip', 'aria-label': wptext.wp26 + ' ' + el.BKXPP() });
});
UA('.entry-date').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'tooltip', 'aria-label': wptext.wp13 + ' ' + el.BKXPP() });
});

UA('.entry-share').forEach(function(elm){
    elm.setAttribute('tabindex', 0);
});

/****** TopPage ******/
UA('#ast-scroll-top ,.ast-scroll-top-icon ,.fa .fa-chevron-up,.pojo-scroll-up-button').forEach(function(elm){
    elm.setAttribute('aria-label', wptext.wp5);
});

/****** STARS ******/
UA('.yotpo-rating-bars').forEach(function(elm){
    let all = elm.querySelectorAll('.yotpo-product-related-field-score-bar').length;
    let OOkJn = elm.querySelectorAll('.yotpo-rating-bar-full').length;
    elm.addAttr({ 'role': 'tooltip', 'tabindex': '0', 'aria-label': 'דירוג ' + OOkJn + ' מתוך ' + all });
});

document.querySelectorAll('article.post').forEach(function(el, index) {
    if (el.querySelector('div.post-more') && el.querySelector(headingTags)) {
        let Htext = el.querySelector(headingTags).BKXPP();
        el2 = el.querySelectorAll('div.post-more');
        el2.forEach(function(el4) {
            el4.querySelectorAll('a').forEach(function(el3) {
                el3.setAttribute('aria-label', wptext.wp4 + ' ' + Htext);
            });
        });
    }
    if (el.querySelector(headingTags)) {
        var Htext = el.querySelector(headingTags).BKXPP();
        el.querySelectorAll('a').forEach(function(el2, index) {
            if (el2.BKXPP().trim() == '' && !el2.hasAttribute('aria-label')) {
                el2.setAttribute('aria-label', wptext.wp4 + ' ' + Htext);
            }
        });
    }
});


UA('[href^="?letter"]').forEach(function(elm){
    elm.addAttr({ 'aria-label': wptext.wp14 + elm.BKXPP() });
});

UA('.ee-gallery__media.elementor-clickable').forEach(function(el, index) {
    el.setAttribute('aria-label', wptext.wp27 + (index + 1) + wptext.wp28);
});

UA('.image-link img').forEach(function(el) {
	if( el.closest('li') && el.closest('li').querySelector('h2') ){
		var ImgT = el.closest('li').querySelector('h2');
		el.setAttribute('aria-label', ImgT.BKXPP());
	}
});

UA('.elementor-widget-wrap').forEach(function(el) {
    var thatWrap = el;
    thatWrap.querySelectorAll('a.elementor-icon').forEach(function(el, i) {
        if (thatWrap.querySelectorAll('h2').length == 1 && el.BKXPP().trim() == '') {
            var thatText = thatWrap.querySelector('h2').BKXPP();
            if (el.hasAttribute('aria-label')) {
                el.setAttribute('aria-label', thatText + el.getAttribute('aria-label'));
            } else {
                el.setAttribute('aria-label', thatText);
            }
        }
    });
});

/****** FORM ******/
var Fname = '[placeholder="שם"],[name="form_fields[name]"],#form-field-name';
var Phone = '[placeholder="טלפון"]';
var emails = '[placeholder="Email"],[name="form_fields[email]"],#form-field-email';
var messageFrom = '[name="form_fields[message]"],#form-field-message';
var productQuantity = '.product-quantity input';

UA(Fname).forEach(function(elm){
    elm.addAttr({ 'aria-label': wptext.wp7, 'tuaandiinputdiscrp': wptext.wp7 });
});

UA(Phone).forEach(function(elm){
    elm.addAttr({ 'aria-label': wptext.wp8, 'tuaandiinputdiscrp': wptext.wp8 });
});

UA(emails).forEach(function(elm){
    elm.addAttr({ 'aria-label': wptext.wp9, 'tuaandiinputdiscrp': wptext.wp9 });
});

UA(messageFrom).forEach(function(elm){
    elm.addAttr({ 'aria-label': wptext.wp10, 'tuaandiinputdiscrp': wptext.wp10 });
});

UA(productQuantity).forEach(function(elm){
    elm.addAttr({ 'aria-label': wptext.wp29, 'tuaandiinputdiscrp': wptext.wp29 });
});



/*
let requiredFields = [];
UA(requiredFields).forEach(function(elm){
    elm.addAttr({ 'required': "required" });
});*/

UA('button,[role="button"]').forEach(function(el, i) {
    el.addEventListener('click', function() {
        setTimeout(function() {
            if (UA1('.woocommerce-error') && UA1('.woocommerce-error').BKXPP().trim() != '') {
                andiUA.nAtDr(wptext.wp30 + ' ' + UA1('.woocommerce-error').BKXPP().trim());
                UA1('.woocommerce-error').addAttr({ 'tabindex': '0' });
                UA1('.woocommerce-error').focus();
            }
        }, 200);
    });
});

var allCheckBoxAndRadio = UA('[type="radio"],[type="checkbox"]');
allCheckBoxAndRadio.forEach(function(el) {
    if (el.getCss('display') == 'none') {
        el.taddClass('UAscreenReaderOnly');
        el.setAttribute('UAradio', 'true');
        if (el.closest('label') && !el.hasAttribute('aria-label'))
            el.setAttribute('aria-label', el.closest('label').BKXPP());
    }
});

//need more check
UA('.calcModule input').forEach(function(elm){
    elm.addAttr({ 'tabindex': '-1' })
});
UA('.calcModule a').forEach(function(elm){
    elm.addAttr({
        'role': 'radio',
        'aria-checked': 'false',
        'tabindex': '0',
        'aria-label': elm.parentElement.BKXPP()
    });
});
var UAcheckbox = ['.selection__types > div', '.selection__brands > div', '.carWrap'];
for (var i = 0; i < UAcheckbox.length; i++) {
    UA(UAcheckbox[i]).forEach(function(el, index) {
        el.setAttribute('role', 'checkbox');
        el.setAttribute('aria-checked', 'false');
        el.setAttribute('tabindex', 0);
        el.setAttribute('UAcheckbox', index);
    });
}


var UAcheckboxChecked = ['.type-selected', '.brand-selected', '.car-selected'];
for (var i = 0; i < UAcheckbox.length; i++) {
    UA(UAcheckbox[i]).forEach(function(el, index) {
        el.setAttribute('aria-checked', 'true');
    });
}



var wrapRadioBtn = ['.button-select'];
for (var i = 0; i < wrapRadioBtn.length; i++) {
    UA(wrapRadioBtn[i]).forEach(function(el, index) {
        el.setAttribute('UAwrapRadioBtn', index);
        el.removeAttribute('aria-hidden');
    });
}




/****** ARIA FIXED ROLES ******/
var attrs = ['aria-labelledby'];
attrs.forEach(function(el2, index) {
    UA('[' + el2 + ']').forEach(function(el, index) {
        if (!UA1('#' + (el.getAttribute('aria-labelledby')))) {
            el.tremoveAttr('aria-labelledby');
        }
        if (el.id == el.getAttribute('aria-labelledby')) {
            el.tremoveAttr(el2);
        }
    });
});


var lang = (document.querySelector('html').getAttribute('lang') == 'en-US' ? 'Open menu' : 'פתח תפריט');
document.querySelectorAll('.elementor-menu-toggle').forEach(function(elm, index) {
    elm.setAttribute('role', 'button');
    elm.setAttribute('tabindex', '0');
    elm.setAttribute('aria-label', lang);
    elm.setAttribute('aria-expanded', "false");
    elm.setAttribute('aria-controls', 'T2' + index);
    elm.setAttribute('id', 'T1' + index);
    elm.nextElementSibling?.setAttribute('aria-hidden', "true");
    elm.nextElementSibling?.setAttribute('id', 'T2' + index);
    elm.addEventListener('click', function() {
        if (this.getAttribute('aria-expanded') == 'true') {
            this.setAttribute('aria-expanded', "false");
            this.nextElementSibling.setAttribute('aria-hidden', "true");
        } else {
            this.setAttribute('aria-expanded', "true");
            this.nextElementSibling.setAttribute('aria-hidden', "false");
        }
    });
    elm.addEventListener('keydown', function(e) {
        if (e.keyCode == 13 || e.keyCode == 32) this.click()
    });
});

/****** READ MORE ******/

UA('.item').forEach(function(elm){
    elm.querySelectorAll('.entry-link').forEach(function(innerElm){
        innerElm.setAttribute('aria-label', wptext.wp4 + ' ' + elm.querySelector('.entry-title')?.BKXPP());
    });
});

UA('[id^="main-navigation-item-"]').forEach(function(elm){
    let headerText = elm.querySelector('.entry-title')?.BKXPP() || '';
    elm.querySelectorAll('a').forEach(function(link){
        if(!link.BKXPP.trim()) link.setAttribute('aria-label', wptext.wp4 + ' ' + headerText);
        if(!link.BKXPP.trim() == 'לפרטים נוספים') link.setAttribute('aria-label', wptext.wp4 + ' ' + headerText);
        link.querySelectorAll('.entry-link').forEach(function(innerElm){
            innerElm.setAttribute('aria-label', wptext.wp4 + ' ' + link.querySelector('.entry-title')?.BKXPP());
        });
    });    
});



/****** Cart ******/
UA('.cart-contents').forEach(function(el, i) {
    el.setAttribute('aria-label', 'עגלת קניות');
});
var btnsNames = '.checkout-button';
UA(btnsNames).forEach(function(el, i) {
    el.addAttr({ 'role': 'button', 'tabindex': '0' });
});


/****** SHOW ON OVER ******/
var styles = `
	.post-thumbnail:focus-within a+ div {
		display: block !important;
	}
	.vc-hoverbox:focus-within .vc-hoverbox-back {
		 transform: rotateY(0);
	}
	.vc-hoverbox:focus-within .vc-hoverbox-front {
		transform: rotateY(-180deg);
	}
	.foogallery.fg-caption-hover.fg-hover-fade .fg-loaded .fg-item-inner:focus-within .fg-caption,
	.foogallery.fg-hover-fade .fg-loaded .fg-item-inner:focus-within .fg-thumb:before {
		visibility: visible;
		opacity: 1;
	}
	.foogallery.fg-caption-hover.fg-hover-slide-down .fg-loaded .fg-item-inner:focus-within .fg-caption,
	.foogallery.fg-caption-hover.fg-hover-slide-left .fg-loaded .fg-item-inner:focus-within .fg-caption,
	.foogallery.fg-caption-hover.fg-hover-slide-right .fg-loaded .fg-item-inner:focus-within .fg-caption,
	.foogallery.fg-caption-hover.fg-hover-slide-up .fg-loaded .fg-item-inner:focus-within .fg-caption,
	.foogallery.fg-hover-slide-down .fg-loaded .fg-item-inner:focus-within .fg-thumb:before,
	.foogallery.fg-hover-slide-left .fg-loaded .fg-item-inner:focus-within .fg-thumb:before,
	.foogallery.fg-hover-slide-right .fg-loaded .fg-item-inner:focus-within .fg-thumb:before,
	.foogallery.fg-hover-slide-up .fg-loaded .fg-item-inner:focus-within .fg-thumb:before {
		transform: translateY(0) translateX(0);
	}
	.foogallery.fg-preset.fg-jazz .fg-item-inner:focus-within .fg-caption:after {
		opacity: 1;
		-webkit-transform: rotate3d(0,0,1,45deg) scale3d(1,1,1);
		transform: rotate3d(0,0,1,45deg) scale3d(1,1,1);
	}
	.foogallery.fg-preset.fg-jazz .fg-item-inner:focus-within .fg-caption-title {
		-webkit-transform: scale3d(1,1,1);
		transform: scale3d(1,1,1);
	}
	.foogallery.fg-preset.fg-jazz .fg-item-inner:focus-within .fg-caption-desc {
		opacity: 1;
		-webkit-transform: scale3d(1,1,1);
		transform: scale3d(1,1,1);
	}

`;
UA1('#SHOWONOVER')?.remove();
UA1('head').appendHtml('<style id="SHOWONOVER">' + styles + '</style>');

UA('.post-thumbnail, .vc-hoverbox').forEach(function(elm){
    elm.setAttribute('tabindex', 0);
});


/****** CALENDAR ROLES ******/



function datePicker() {
    UA('.datepicker td.day:not(.disabled):not(old), .datepicker th.datepicker-switch, .datepicker th.prev ,.datepicker th.next').forEach(function(elm){
        elm.addAttr({ 'tabindex': '0', 'role': 'button' });
    });

    UA('.datepicker th.prev').forEach(function(elm){
        elm.addAttr({ 'aria-label': 'לחודש קודם', 'role': 'button' });
        elm.tremoveAttr('class');
        elm.taddClass('prev');
    });

    UA('.datepicker th.next').forEach(function(elm){
        elm.addAttr({ 'aria-label': 'לחודש הבא', 'role': 'button' });
        elm.tremoveAttr('class');
        elm.taddClass('next');
    });


    UA('.datepicker th.day').forEach(function(elm){
        elm.setAttribute('aria-label', '  ,בתאריך ' + elm.BKXPP() + ' לחודש ');
    });

    UA('.datepicker th.dow').forEach(function(elm){
        elm.setAttribute('aria-label', '  יום ' + elm.BKXPP());
    });

    UA('.datepicker td.new.day').forEach(function(elm){
        var dateTEXT1 = 'של החודש הבא';
        elm.addAttr({'tabindex': '-1', 'aria-label': '  בתאריך ' + elm.BKXPP() + ' ' + (dateTEXT1)});
    });


    UA('.react-datepicker__day').forEach(function(elm){
        elm.addAttr({ 'tabindex': '0', 'aria-label': '  ,בתאריך ' + elm.BKXPP() + ' לחודש ' });
    });

    UA('.react-datepicker__day-name').forEach(function(elm){
        elm.setAttribute('aria-label', '  יום ' + elm.BKXPP());
    });

}
datePicker();

eventOn('focus', '.datepicker_input ,#from,#to,#FromDate,#ToDate', function(){
    let elm = this;
    setTimeout(function() {
        datePicker();
        elm.addAttr('.datepicker').attr({ 'tabindex': '0', 'role': 'region', 'aria-label': 'תאריכון' });
        elm.focus();
    }, 500);
}) ;

setTimeout(function() {
    UA('.datepicker th.prev').forEach(function(elm){
        elm.addAttr({ 'aria-label': 'לחודש קודם', 'role': 'button' });
        elm.tremoveAttr('class');
        elm.taddClass('prev');
    });

    UA('.datepicker th.next').forEach(function(elm){
        elm.addAttr({ 'aria-label': 'לחודש הבא', 'role': 'button' });
        elm.tremoveAttr('class');
        elm.taddClass('next');
    });
}, 500);


var thisInputFocus = null;

function setCalinder() {
    UA('.react-datepicker__navigation--next').forEach(function(elm){
        elm.addAttr({ 'role': 'button', 'tabindex': '0', 'aria-label': 'לחודשיים הבאים' });
    });

    UA('.react-datepicker__navigation--previous').forEach(function(elm){
        elm.addAttr({ 'role': 'button', 'tabindex': '0', 'aria-label': 'לחודשיים הקודמים' });
    });

    UA('.closeLightboxButton').forEach(function(elm){
        elm.addAttr({ 'tabindex': '0', 'aria-label': '  ,בתאריך ' + elm.BKXPP() + ' לחודש ' });
        elm.addEventListener('keyup', function(e){
            if (e.keyCode == 13) {
                this.click();
            }
        })
    });

    UA('.react-datepicker__day-name').forEach(function(elm){
        elm.setAttribute('aria-label', '  יום ' + elm.BKXPP());
    });

    UA('[role="option"]').forEach(function(elm){
        elm.addAttr({ 'tabindex': '0' });
    });

    UA('.react-datepicker__day--disabled').forEach(function(elm){
        elm.addAttr({ 'tabindex': '-1' });
    });
}

UA('.react-datepicker__navigation--previous, .react-datepicker__navigation--next').forEach(function(elm){
    elm.addEventListener('click', function(e){
        setCalinder();
    });
});


UA('.react-datepicker__input-container input').forEach(function(elm){
    elm.addEventListener('focus', function(e){
        this.click();
        setTimeout(function() {
            UA1('.react-datepicker-popper')?.setAttribute('tabindex', 0)
            UA1('.react-datepicker-popper')?.focus();
            
            UA('.react-datepicker-popper').forEach(function(elm){
                elm.addAttr({ 'tabindex': '0' });
                elm.focus();
            });
        }, 300);
        setCalinder();
    });
});


//עוטף 
var wrapcalendar = ['.mec-calendar'];
//שנה
var year = [''];
//חודש
var Month = ['.mec-calendar-header'];
//יום בשבוע
var dayInWeek = ['.mec-calendar-day-head'];
//יום בחודש
var dayInMonth = ['.mec-calendar-day'];
//יום עם אירוע
var dayWithEvents = ['.mec-has-event a'];
var nextMonthBtn = ['.mec-next-month'];
var prevMonthBtn = ['.mec-previous-month'];

for (var i = 0; i < wrapcalendar.length; i++) {
    var thisWrap = UA(wrapcalendar[i]);
    thisWrap.forEach(function(elm){
        elm.addAttr({ 'role': 'region', 'aria-label': wptext.wp19 });
    });
    UA(dayInWeek[i]).forEach(function(elm){
        elm.addAttr({ 'role': 'button', 'aria-disabled': 'true', 'aria-label': wptext.wp20 + ' ' + elm?.BKXPP().trim() });
    });
    UA(dayInMonth[i]).forEach(function(elm){
       // elm.addAttr({ 'role': 'button', 'aria-disabled': 'true', 'aria-label': ' ' + elm.BKXPP().trim() + ' ' + thisWrap[0]?.querySelector(Month[i])?.BKXPP().trim() });
    });
    

    UA(dayWithEvents[i]).forEach(function(elm){

        if (elm.closest('[role="button"]')) {
            elm.closest('[role="button"]').tremoveAttr('aria-disabled');
            elm.closest('[role="button"]').tremoveAttr('aria-label');
            elm.closest('[role="button"]').tremoveAttr('role');
            elm.addAttr({ 'aria-label': elm.BKXPP.trim() + ' ' + thisWrap.querySelector(Month[i]).BKXPP().trim() + wptext.wp21 });
        }
    });
    UA(prevMonthBtn[i]).forEach(function(elm){
        elm.addAttr({ 'role': 'button', 'tabindex': '0', 'aria-label': wptext.wp23 });
    });

    UA(nextMonthBtn[i]).forEach(function(elm){
        elm.addAttr({ 'role': 'button', 'tabindex': '0', 'aria-label': wptext.wp22 });
    });

    UA(dayWithEvents[i]).forEach(function(elm){
        elm.addEventListener('click', function() {
            if (this.isIt('.mec-has-event a')) {
                let that = UA1('div[data-mec-cell="' + this.parent().getAttr('data-mec-cell') + '"]');
                that?.setAttribute('tabindex', 0);
                that?.focus();
            }
        });
    });
};



/****** POPUPS ROLES ******/

UA('.prev_news, .gallery-action-btn.prev, .slider-arrow-left, .slick-prev,.owl-prev,.elementor-swiper-button-prev ,.btn-prev ,.nivo-prevNav ,.ss-prev4.ss-prev4-on ,.sp-arrow.sp-previous-arrow ,.button-link.image-gallery-left-nav ,.rsArrowLeft ,.soliloquy-prev ,.testimonial_prev ,.tp-leftarrow ,.flex-prev').forEach(function(elm){
    elm.addAttr({ 'UAnextBtn': 'true', 'role': 'button', 'tabindex': 0, 'aria-label': wptext.wp1});
});    

UA('.next_news, .gallery-action-btn.next, .slider-arrow-right, .slick-next,.owl-next,.elementor-swiper-button-next ,.btn-next ,.nivo-nextNav ,.ss-next4.ss-next4-on ,.sp-arrow.sp-next-arrow ,.button-link.image-gallery-right-nav ,.rsArrowRight ,.soliloquy-next ,.testimonial_next ,.tp-rightarrow ,.flex-next').forEach(function(elm){
    elm.addAttr({ 'UAnextBtn': 'true', 'role': 'button', 'tabindex': 0, 'aria-label': wptext.wp2});
});  

UA('.owl-carousel').forEach(function(elm){
    elm.querySelectorAll('img').forEach(function(innerElm){
        if (!innerElm.hasAttribute('alt') || innerElm.getAttribute('alt').trim() == '') {
            innerElm.setAttribute('alt', wptext.wp12 + ' ' + i)
        }
    });
});


UA('.owl-item article').forEach(function(elm){
    elm.querySelectorAll('a').forEach(function(innerElm){
        let VTMMs = innerElm.querySelector('entry-header-wrapper')?.BKXPP();
        if (innerElm.querySelector('noscript') && VTMMs) innerElm.addAttr('aria-label', VTMMs);
        else if (!innerElm.hasAttribute('aria-label') && innerElm.BKXPP().trim() == '' && VTMMs) innerElm.setAttribute('aria-label', VTMMs);
    });
});

var wrapBullets = [ '.swiper-pagination', '.owl-dots', '.tp-bullets', '.swiper-pagination', '.ms-bullets-count'];
var whatToFind = [ '.swiper-slide.number-link', '.swiper-pagination-bullet', '.owl-dot', '.tp-bullet', '.swiper-pagination-bullet', '.ms-bullet'];

for(var i = 0; i < wrapBullets.length;i++){
    if(UA1(wrapBullets[i])){
        UA(wrapBullets[i]).forEach(function(elm, index){
            UA(whatToFind[index]).forEach(function(innerElm, innerIndex){
                innerElm.addAttr({ 'UABullets': 'true', 'role': 'button', 'tabindex': 0, 'aria-label': wptext.wp3 + ', ' + (innerIndex + 1) });
            });
        });
    }
}

/****** FAQ ******/
function chackFaq() {

    var items = UA('.nav.collapse > li > a');
    items.forEach(function(el, index) {
        if (el.nextElementSibling && el.nextElementSibling.tagName == 'UL') {
            //if(!el.hasAttribute('aria-expanded')){
            el.addAttr({ 'UAexpanded': 'true', 'role': 'button', 'tabindex': '0', 'aria-expanded': 'false' });
            //}
        }
    });

    var items = UA('.js-show-header-dropdown, [data-toggle="dropdown"],.oew-accordion-item .oew-accordion-title, [data-open-btn].clickable, .dwaccordion-title, .collapsible .section-header, .nav.collapse > li > a, .vc_tta-panel-title a, .fs_accordion_parent');
    items.forEach(function(el, index) {
        var that = el;
        if (el.tagName == 'A')
            el.addAttr({ 'UAexpanded': 'false', 'role': 'button', 'tabindex': '0', 'aria-expanded': 'false' });
        else
            el.addAttr({ 'UAexpanded': 'true', 'role': 'button', 'tabindex': '0', 'aria-expanded': 'false' });

        if (el.closest('.panel') && el.closest('.panel').querySelector('.collapse'))
            if (el.closest('.panel').querySelector('.collapse').thasClass('in'))
                that.addAttr({ 'aria-expanded': 'true' });

        if (el.closest('.vc_tta-panel') && el.closest('.vc_tta-panel').thasClass('vc_active'))
            that.addAttr({ 'aria-expanded': 'true' });

        if (el.closest('.linttlx') && el.closest('.linttlx').next() && el.closest('.linttlx').next().next())
            if (el.closest('.linttlx').next().next().getCss('display') != 'none')
                that.addAttr({ 'aria-expanded': 'true' });

        if (el?.tnext() && el?.tnext().getCss('display') != 'none')
            that.addAttr({ 'aria-expanded': 'true' });

        setTimeout(function() {
            if (UA1('.show-header-dropdown'))
                that.addAttr({ 'aria-expanded': 'true' });
            else
                that.addAttr({ 'aria-expanded': 'false' });
        }, 500);

    });


}
chackFaq();

eventOn("keyup", '[UAcheckbox], [UAexpanded="true"], [UAnextBtn], [UAprevBtn], [UABullets], [UAradio]', function(UAenv) {
    if (UAenv.keyCode == 13 && !this.isIt('button,a,input')) {
      this.click();
    }
  });

/****** CSS ROLES ******/

var styles = `
.bs311navbar-default .bs311navbar-nav > li.bs311dropdown ul li a:focus {background: #a8acbc;}
[data-key="pro-gallery-inner-container"]:focus-within div.pro-gallery .gallery-item-container .gallery-item-wrapper .gallery-item-hover .gallery-item-social .gallery-item-social-button{opacity:1}
.entry-share:focus .entry-share-icons { right: -10px; opacity: 1; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; filter: alpha(opacity=100); }.entry-share:focus-within .entry-share-icons { right: -10px; opacity: 1; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; filter: alpha(opacity=100); }
.elementor-nav-menu--main > ul > li:focus-within > .sub-menu{display:block !important;}
li:focus-within > .sub_menu { display:block;visibility: visible; opacity: 1;}
.__ADORIC__ :focus, BODY .__ADORIC__ :focus {outline: 1px solid #000 !important;}
.single-box:focus-within .image .hover-area {opacity: 1; top: 50%;}
body .profiles-list .profiles-list__item a:focus .profiles-list__details{ opacity: 1;}
.single-box:focus-within .image::before { opacity: 1;}
.single-box:focus-within {border-color: #0c5adb;}
[class*="ypXpr"] > * {display: block !important; float: unset !important; position: static !important; margin: 0 !important; background-color: #fff;}
[class*="ypXpr"] {height: 100% !important;}
.uawrapareaInstroctions{z-index: 99999999999999; display:none; position: fixed;font-size: 18px; bottom: 0; background-color: #000; color: #fff; padding: 5px; border-radius: 3px; left: calc(50% - 125px);line-height: 100%; direction: ltr; }
.uawrapareaInstroctions span{display:inline-block;margin:0 5px; font-size:28px;}
[uawraparea]:focus-within .uawrapareaInstroctions{display:block;}

.uawrapareaInstroctions hr{background-color: #767676; border: 0; height: 2px; margin: 5px auto; max-width: 100%; text-align: center;}
[vFaKz="he"] .uawrapareaInstroctions, [vFaKz="he"] .uawrapareaInstroctions *{direction:rtl !importnat;}`;

UA1('#wpcss')?.zOhhK();
UA1('head')?.appendHtml('<style id="wpcss">' + styles + '</style>');






let setting = [{
        type: 'menu',
        wrap: 'nav.menu',
        wrapMainLink: 'nav.menu > ul',
        mainLink: 'nav.menu > ul > li > a',
        subMenu: 'nav.menu > ul > li > .sub_menu',
    },
    {
        type: 'menu',
        wrap: 'nav.elementor-nav-menu--main',
        wrapMainLink: 'nav.elementor-nav-menu--main > ul.elementor-nav-menu',
        mainLink: 'nav.elementor-nav-menu--main > ul.elementor-nav-menu > li > a',
        subMenu: 'nav.elementor-nav-menu--main > ul.elementor-nav-menu > li > .sub-menu',
    },
    {
        type: 'menu',
        wrap: '.nav-menus-wrapper',
        wrapMainLink: '.nav-menus-wrapper > ul ',
        mainLink: '.nav-menus-wrapper > ul > li > a',
        subMenu: '.nav-menus-wrapper > ul > li > .nav-submenu',
    },
    {
        type: 'menu',
        wrap: 'nav',
        wrapMainLink: 'nav  ul:first-child',
        mainLink: 'nav  ul:first-child > li > a',
        subMenu: 'nav  ul:first-child  ul',
    },
    {
        type: 'menu',
        wrap: 'nav',
        wrapMainLink: 'nav > ul ',
        mainLink: 'nav > ul > li > a',
        subMenu: 'nav > ul > ul',
    },
    {
        type: 'tabs',
        wrapAllArea: '.nav.nav-tabs',
        wrapTabs: '.nav-tabs',
        TabElementIs: 'a',
        TabElementActiveIs: '.nav-tabs a.active',
    },
    {
        type: 'tabs',
        wrapAllArea: '.elementor-tabs',
        wrapTabs: '.elementor-tabs-wrapper',
        TabElementIs: 'a',
        TabElementActiveIs: '.elementor-tab-title.elementor-active a',
    },
    {
        type: 'tabs',
        wrapAllArea: '.tabs-nav',
        wrapTabs: '.tabs-nav',
        TabElementIs: 'a',
        TabElementActiveIs: '.tabs-nav > .r-tabs-state-active a',
    },
    {
        type: 'tabs',
        wrapAllArea: '.wpsm_nav-tabs',
        wrapTabs: '.wpsm_nav-tabs',
        TabElementIs: 'a',
        TabElementActiveIs: '.wpsm_nav-tabs > .active a',
    },
    {
        type: 'tabs',
        wrapAllArea: '.woocommerce-tabs ul.wc-tabs',
        wrapTabs: '.woocommerce-tabs ul.wc-tabs',
        TabElementIs: 'a',
        TabElementActiveIs: '.woocommerce-tabs ul.wc-tabs > .active a',
    },
    {
        type: 'tabs',
        wrapAllArea: '.rtbs_tab_ori .rtbs_menu ul',
        wrapTabs: '.rtbs_tab_ori .rtbs_menu ul',
        TabElementIs: 'a',
        TabElementActiveIs: '.rtbs_tab_ori .rtbs_menu ul > .current a',
    },
    {
        type: 'tabs',
        wrapAllArea: '.wpt-tabs',
        wrapTabs: '.wpt-tabs',
        TabElementIs: 'a',
        TabElementActiveIs: '.wpt-tabs > .selected a',
    },
    {
        type: 'tabs',
        wrapAllArea: '[class^="ctu-ulimate-style-"]',
        wrapTabs: '[class^="ctu-ulimate-style-"]',
        TabElementIs: '.vc-tabs-li',
        TabElementActiveIs: '.vc-tabs-li.active',
    },
    {
        type: 'tabs',
        wrapAllArea: '.tabs_wrap',
        wrapTabs: '.tabs_wrap',
        TabElementIs: '.tab_wrap333',
        TabElementActiveIs: '.tabs_wrap .tab_wrap.active',
    },
    {
        type: 'lists',
        wrapList: '.product-mainbar .offer',
        listItem: '.product-mainbar .offer > div > div',
        setToPresentation: '.product-mainbar .offer > div',
    },
    {
        type: 'articleSum',
        wrapper: 'article',
    },
    {
        type: 'articleSum',
        wrapper: '.product-grid-container',
    },
    {
        type: 'articleSum',
        wrapper: '.elementor-element-populated',
    },
    {
        type: 'articleSum',
        wrapper: '.post-grid',
    },
    {
        type: 'articleSum',
        wrapper: '.vc_grid-item',
    },
    {
        type: 'articleSum',
        wrapper: '.post.category-blog',
    },
    {
        type: 'articleSum',
        wrapper: '.item',
    },
    {
        type: 'articleSum',
        wrapper: '.item-blog',
    },
    {
        type: 'button',
        btn: '[data-type="button"]',
    },
    {
        type: 'faq',
        wrapAllArea: '.accordion',
        wrapOneFaq: '.card',
        clickableHeader: '[data-toggle="collapse"]',
        infoPanel: '.collapse',
        isExpandedClassName: 'show',
    },{
		type: 'btnsExpanded',
		btnELm: '.btn.form__checkbox-more',
		isbtnExpandedByDefult: false,
	}
];

let AriaFuncitons = {
    btnsExpanded: function(definition) {
		UA(definition.btnELm).forEach(function(el, index) {
			el.addAttr({ 'role': 'button', 'tabindex': '0', 'aria-expanded': definition.isbtnExpandedByDefult });
			el.addEventListener('click', function(){
				if (this.getAttribute('aria-expanded') == 'false')
					this.addAttr({ 'aria-expanded': 'true' });
				else
					this.addAttr({ 'aria-expanded': 'false' });
			});
		});
	},	
    faqs: function(definition) {

        document.querySelectorAll(definition.wrapOneFaq).forEach(function(thisArea) {
            thisArea.setAttribute('role', "group");
        });

        document.querySelectorAll(definition.wrapAllArea).forEach(function(thisArea) {
            thisArea.querySelectorAll(definition.clickableHeader).forEach(function(thisFaq, index) {
                if (thisFaq.tagName == 'BUTTON')
                    thisFaq.setAttribute('role', "button");
                thisFaq.setAttribute('faqnum', index);
                thisFaq.setAttribute('mainchilds', index);
                thisFaq.setAttribute('aria-expanded', 'false');
                if (thisFaq.hasAttribute('data-target'))
                    thisFaq.setAttribute('aria-controls', thisFaq.getAttribute('data-target'));
                else if (thisFaq.hasAttribute('href'))
                    thisFaq.setAttribute('aria-controls', thisFaq.getAttribute('href'));
            });
        });

        document.querySelectorAll(definition.wrapAllArea).forEach(function(thisArea, index) {
            let wrapNumber = document.querySelectorAll('[wrapAreaType="' + definition.type + '"]').length;
            thisArea.setAttribute('uawraparea', wrapNumber);
            thisArea.setAttribute('wrapareatype', definition.type);
            thisArea.setAttribute('role', "region");
            thisArea.setAttribute('aria-roledescription', "Accordion");
            thisArea.querySelectorAll(definition.infoPanel).forEach(function(thisPanel, index) {
                thisPanel.setAttribute('role', "region");
                thisPanel.setAttribute('faqpanelnum', index);
                if (thisArea.querySelector('[faqnum="' + index + '"]')) {
                    let thisHtext = thisArea.querySelector('[faqnum="' + index + '"]').BKXPP().trim();
                    thisPanel.setAttribute('aria-label', thisHtext);
                }

                if (thisPanel.thasClass(definition.isExpandedClassName)) {
                    thisArea.querySelector('[faqnum="' + index + '"]').setAttribute('aria-expanded', 'true');
                }
            });
        });

    },

    buttons: function(definition) {
        document.querySelectorAll(definition.btn).forEach(function(thisBtn, index) {
            thisBtn.setAttribute('role', 'button');
            thisBtn.setAttribute('tabindex', '0');
        });
    },

    articleSum: function(definition) {
        document.querySelectorAll(definition.wrapper).forEach(function(thisArticleSum, index) {
            if (thisArticleSum.querySelectorAll('a').length > 0 && thisArticleSum.querySelectorAll(headingTags).length == 1 && thisArticleSum.querySelectorAll('img').length == 1) {
                let isAllHrefIsTheSame = true;
                let thisHref = thisArticleSum.querySelector('a').getAttribute('href');
                thisArticleSum.querySelectorAll('a').forEach(function(thisLinkHref, index) {
                    if (thisLinkHref.getAttribute('href') != thisHref) {
                        isAllHrefIsTheSame = false;
                    }
                });
                if (isAllHrefIsTheSame) {
                    thisArticleSum.setAttribute('role', 'article');
                    let Htext = thisArticleSum.querySelector(headingTags).BKXPP().trim();
                    thisArticleSum.querySelectorAll('a').forEach(function(link, index) {
                        link.setAttribute('aria-label', wptext.wp4 + ' ' + Htext);
                    });
                    thisArticleSum.querySelectorAll('img').forEach(function(img, index) {
                        if (!img.hasAttribute('alt')) {
                            img.setAttribute('alt', Htext);
                        }
                        if (img.hasAttribute('alt') && img.getAttribute('alt').trim() !== '') {
                            if (img.getAttribute('alt').split("-").length - 1 >= 2)
                                img.setAttribute('alt', Htext);
                        } else if (img.hasAttribute('alt') && img.getAttribute('alt').trim() == '') {
                            img.setAttribute('alt', Htext);
                        }
                    });

                }
            }
        });
    },

    lists: function(definition) {
        document.querySelectorAll(definition.wrapList).forEach(function(thisWrap, index) {
            thisWrap.setAttribute('role', 'list');
        });
        document.querySelectorAll(definition.listItem).forEach(function(thisElm, index) {
            thisElm.setAttribute('role', 'listitem');
        });
        document.querySelectorAll(definition.setToPresentation).forEach(function(thisElm, index) {
            thisElm.setAttribute('role', 'presentation');
        });
    },

    tabs: function(definition) {
        document.querySelectorAll('[id^="responsiveTabs"].tabs-container, .elementor-tab-title').forEach(function(el, i) {
            el.removeAttribute('role');
            el.removeAttribute('tabindex');
            el.removeAttribute('aria-selected');
            el.removeAttribute('aria-controls');
        });

        document.querySelectorAll('[id^="wpsm_tab_container_"]').forEach(function(el, i) {
            el.querySelector('div').removeAttribute('role');
        });

        document.querySelectorAll(definition.wrapAllArea).forEach(function(thisWrap, index) {
            let wrapNumber = document.querySelectorAll('[wrapAreaType="' + definition.type + '"]').length;
            thisWrap.setAttribute('uawraparea', wrapNumber);
            thisWrap.setAttribute('wrapareatype', definition.type);
            thisWrap.setAttribute('role', "tablist");
        });

        document.querySelectorAll(definition.wrapTabs).forEach(function(wrapTabs, index) {
            wrapTabs.querySelectorAll(definition.TabElementIs).forEach(function(tab, index) {
                tab.setAttribute('mainchilds', index);
                tab.setAttribute('role', "tab");
                tab.setAttribute('aria-selected', "false");
                tab.setAttribute('tabindex', "-1");
                tab.setAttribute('role', "tab");
                if (tab.getAttribute('href')) tab.setAttribute('aria-controls', tab.getAttribute('href'));
                if (tab.getAttribute('data-target')) tab.setAttribute('aria-controls', tab.getAttribute('data-target'));
            });

            if (document.querySelectorAll(definition.TabElementActiveIs).length == 0) {
                wrapTabs.querySelector(definition.TabElementIs)?.setAttribute('aria-selected', "true");
                wrapTabs.querySelector(definition.TabElementIs)?.setAttribute('tabindex', "0");
            } else {
                document.querySelectorAll(definition.TabElementActiveIs).forEach(function(tabActive, index) {
                    tabActive.setAttribute('aria-selected', "true");
                    tabActive.setAttribute('tabindex', "0");
                });
            }
        });

        document.querySelectorAll('.tab-content .tab-pane, .section-tabs .tab-content, .tabs-content.r-tabs-panel , .tab-content , .texts_wrap .text_wrap[class*="tab"], .rtbs_content , .woocommerce-tabs .woocommerce-Tabs-panel.panel, .wpsm_tab_content.tabs .tab-pane, .elementor-tab-content').forEach(function(tabActive, index) {
            tabActive.setAttribute('role', "tabpanel");
            tabActive.setAttribute('tabindex', "0");
        });

        function setPresentationForWrapTabs(allChild) {
            for (var i = 0; i < allChild.length; i++) {
                var el2 = allChild[i];
                if (!el2.hasAttribute('role')) {
                    el2.setAttribute('role', 'none presentation');
                } else if (el2.hasAttribute('role') && !el2.getAttribute('role') == 'tab') {
                    el2.setAttribute('role', 'none presentation');
                }
            }
        }

        UA('[role="tablist"]').forEach(function(el, index) {
            var allChild = el.children;
            setPresentationForWrapTabs(allChild)
            for (var i = 0; i < allChild.length; i++) {
                setPresentationForWrapTabs(allChild[i].children);
            }
        });
    },

    menu: function(definition) {
        if (UA1(definition.wrap) && UA1(definition.wrapMainLink) && UA1(definition.mainLink)) {
            document.querySelectorAll(definition.wrapMainLink).forEach(function(thisWrap, index) {
                thisWrap.setAttribute('role', "menubar");
            });
            document.querySelectorAll(definition.mainLink).forEach(function(thisElm, index) {
                //(index == 0)?thisElm.setAttribute('tabindex',0): thisElm.setAttribute('tabindex',-1);
                thisElm.setAttribute('mainchilds', index);
                thisElm.setAttribute('role', "menuitem");
                if (thisElm.nextElementSibling && thisElm.nextElementSibling.isIt(definition.subMenu)) {
                    thisElm.setAttribute('aria-haspopup', "true");
                    thisElm.setAttribute('aria-expanded', "true");
                }
            });
            document.querySelectorAll(definition.subMenu).forEach(function(thisElm, index) {
                thisElm.setAttribute('subchilds', index);
                thisElm.setAttribute('role', 'menu');
                thisElm.querySelectorAll('[role="link"], a').forEach(function(subMenuLinks, index) {
                    subMenuLinks.setAttribute('role', "menuitem");
                    //subMenuLinks.setAttribute('tabindex', "-1");
                    subMenuLinks.setAttribute('submenulink', index);
                });
            });
            document.querySelectorAll(definition.wrap).forEach(function(thisWrap, index) {
                let wrapNumber = document.querySelectorAll('[wrapAreaType="' + definition.type + '"]').length;
                thisWrap.setAttribute('uawraparea', wrapNumber);
                thisWrap.setAttribute('wrapareatype', definition.type);
                (thisWrap.tagName == 'NAV') ? '' : thisWrap.setAttribute('role', "navigation");
                thisWrap.querySelectorAll('[mainchilds]').forEach(function(thisElm, index) {
                    thisElm.setAttribute('mainchilds', index);
                });
            });
        }
    }
}

let setAriaRoles = function(setting) {
    for (let i = 0; i < setting.length; i++) {
        switch (setting[i].type) {
            case 'menu':
                AriaFuncitons.menu(setting[i]);
                break;
            case 'tabs':
                AriaFuncitons.tabs(setting[i]);
                break;
            case 'articleSum':
                AriaFuncitons.articleSum(setting[i]);
                break;
            case 'button':
                AriaFuncitons.buttons(setting[i]);
                break;
            case 'faq':
                AriaFuncitons.faqs(setting[i]);
                break;
            case 'btnsExpanded':
                AriaFuncitons.btnsExpanded(setting[i]);
                break;
				
        }
    }
}

let keyboardAriaNavigation = {
    changeAriaState: function(that) {
        if (that.hasAttribute('aria-selected')) {
            that.closest('[uawraparea]').querySelectorAll('[aria-selected]').forEach(function(elm, index) {
                elm.setAttribute('aria-selected', 'false');
            });
            that.setAttribute('aria-selected', 'true');
        }
        if (that.hasAttribute('tabindex') && !that.isIt('[wrapareatype="menu"] [mainchilds]')) {
            that.closest('[uawraparea]').querySelectorAll('[tabindex]').forEach(function(elm, index) {
                elm.setAttribute('tabindex', '-1');
            });
            that.setAttribute('tabindex', '0');
        }
        if (that.hasAttribute('aria-checked') && !that.isIt('[role="checkbox"]')) {
            that.closest('[uawraparea]').querySelectorAll('[aria-checked]').forEach(function(elm, index) {
                elm.setAttribute('aria-checked', 'false');
            });
            that.setAttribute('aria-checked', 'true');
        }
        if (that.hasAttribute('aria-expanded')) {
            that.closest('[uawraparea]').querySelectorAll('[aria-expanded]').forEach(function(elm, index) {
                elm.setAttribute('aria-expanded', 'false');
            });
            that.setAttribute('aria-expanded', 'true');
        }
        if (that.closest('[wrapareatype="tabs"]')) {
            keyboardAriaNavigation.activeElm(that);
        }
    },

    manageFocus: function(that) {
        document.querySelectorAll('[addfocus]').forEach(function(thisElm, index) {
            thisElm.removeAttribute('addfocus');
        });
        that.setAttribute('addfocus', 'true');

    },

    toNextElm: function(that, thatMainChildsIndex) {
        let prevMainChilds = that.closest('[uawraparea]').querySelector('[mainchilds="' + (thatMainChildsIndex - 1) + '"]');
        if (prevMainChilds) {
            prevMainChilds.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(prevMainChilds);
            keyboardAriaNavigation.manageFocus(prevMainChilds);
            prevMainChilds.focus();
        } else {
            lastMainChildsIndex = that.closest('[uawraparea]').querySelectorAll('[mainchilds]').length;
            prevMainChilds = that.closest('[uawraparea]').querySelector('[mainchilds="' + (lastMainChildsIndex - 1) + '"]');
            prevMainChilds.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(prevMainChilds);
            prevMainChilds.focus();
            keyboardAriaNavigation.manageFocus(prevMainChilds);
        }

    },

    toPrevElm: function(that, thatMainChildsIndex) {
        let nextMainChilds = that.closest('[uawraparea]').querySelector('[mainchilds="' + (thatMainChildsIndex + 1) + '"]');
        if (nextMainChilds) {
            nextMainChilds.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(nextMainChilds);
            keyboardAriaNavigation.manageFocus(nextMainChilds);
            nextMainChilds.focus();
        } else {
            nextMainChilds = that.closest('[uawraparea]').querySelector('[mainchilds="0"]');
            nextMainChilds.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(nextMainChilds);
            keyboardAriaNavigation.manageFocus(nextMainChilds);
            nextMainChilds.focus();
        }

    },

    toFirstElm: function(that) {
        let FirstElm = that.closest('[uawraparea]').querySelector('[mainchilds="0"]');
        FirstElm.setAttribute('tabindex', 0);
        keyboardAriaNavigation.changeAriaState(FirstElm);
        keyboardAriaNavigation.manageFocus(FirstElm);
        FirstElm.focus();

    },

    toLastElm: function(that) {
        let LastElmIndex = that.closest('[uawraparea]').querySelectorAll('[mainchilds]').length;
        let LastElm = that.closest('[uawraparea]').querySelector('[mainchilds="' + (LastElmIndex - 1) + '"]');
        LastElm.setAttribute('tabindex', 0);
        keyboardAriaNavigation.changeAriaState(LastElm);
        keyboardAriaNavigation.manageFocus(LastElm);
        LastElm.focus();
    },

    activeElm: function(that) {
        let tagName = that.tagName;
        if (that.closest('[wrapareatype="tabs"]')) {
            that.click();
        } else if (tagName !== 'A' && tagName !== 'INPUT' && tagName !== 'BUTTON') {
            that.click();
        }

    },

    focusOnFirstSubmenuLink: function(that, event) {
        if (that.nextElementSibling && that.nextElementSibling.hasAttribute('subchilds')) {
            event.preventDefault();
            that.nextElementSibling.querySelector('a').setAttribute('tabindex', '0');
            keyboardAriaNavigation.changeAriaState(that.nextElementSibling.querySelector('a'));
            keyboardAriaNavigation.manageFocus(that.nextElementSibling.querySelector('a'));
            that.nextElementSibling.querySelector('a').focus();
        }
    },

    focusOnLastSubmenuLink: function(that, event) {
        if (that.nextElementSibling && that.nextElementSibling.hasAttribute('subchilds')) {
            event.preventDefault();
            LastSubmenuLink = that.nextElementSibling.querySelectorAll('a, [role="link"]');
            LastSubmenuLinkIndex = LastSubmenuLink.length;
            LastSubmenuLink[(LastSubmenuLinkIndex - 1)].setAttribute('tabindex', '0');
            keyboardAriaNavigation.changeAriaState(LastSubmenuLink[(LastSubmenuLinkIndex - 1)]);
            keyboardAriaNavigation.manageFocus(LastSubmenuLink[(LastSubmenuLinkIndex - 1)]);
            LastSubmenuLink[(LastSubmenuLinkIndex - 1)].focus();
        }
    },


    focusOnNextSubmenuLink: function(that, event) {
        event.preventDefault();
        let thatSubmenuLinkIndex = parseInt(that.getAttribute('submenulink'))
        let nextSubmenuLink = that.closest('[subchilds]').querySelector('[submenulink="' + (thatSubmenuLinkIndex + 1) + '"]');
        if (nextSubmenuLink) {
            nextSubmenuLink.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(nextSubmenuLink);
            keyboardAriaNavigation.manageFocus(nextSubmenuLink);
            nextSubmenuLink.focus();
        } else {
            nextSubmenuLink = that.closest('[uawraparea]').querySelector('[submenulink="0"]');
            nextSubmenuLink.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(nextSubmenuLink);
            keyboardAriaNavigation.manageFocus(nextSubmenuLink);
            nextSubmenuLink.focus();
        }

    },

    focusOnPrevSubmenuLink: function(that, event) {
        event.preventDefault();
        let thatSubmenuLinkIndex = parseInt(that.getAttribute('submenulink'));
        let PrevSubmenuLink = that.closest('[subchilds]').querySelector('[submenulink="' + (thatSubmenuLinkIndex - 1) + '"]');
        if (PrevSubmenuLink) {
            PrevSubmenuLink.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(PrevSubmenuLink);
            keyboardAriaNavigation.manageFocus(PrevSubmenuLink);
            PrevSubmenuLink.focus();
        } else {
            let allSubmenuLinkIndex = that.closest('[subchilds]').querySelectorAll('[submenulink]').length;
            PrevSubmenuLink = that.closest('[uawraparea]').querySelector('[submenulink="' + (allSubmenuLinkIndex - 1) + '"]');
            PrevSubmenuLink.setAttribute('tabindex', 0);
            keyboardAriaNavigation.changeAriaState(PrevSubmenuLink);
            keyboardAriaNavigation.manageFocus(PrevSubmenuLink);
            PrevSubmenuLink.focus();
        }

    },
    setTabindexOnFirstItem: function() {
        document.querySelectorAll('[mainchilds="0"]').forEach(function(thisElm, index) {
            thisElm.setAttribute('tabindex', 0);
            keyboardAriaNavigation.activeElm(thisElm);
        });
    },

    closeSubMenu: function(that, event) {
        that.closest('[subchilds]').previousElementSibling.setAttribute('tabindex', 0);
        keyboardAriaNavigation.manageFocus(that.closest('[subchilds]').previousElementSibling);
        that.closest('[subchilds]').previousElementSibling.focus();
    },

    setKeyDown: function() {
        document.querySelectorAll('[uawraparea]').forEach(function(thisWrap, index) {
            let allMainChilds = thisWrap.querySelectorAll('[mainchilds]');
            let thisWrapIndex = thisWrap.getAttribute('uawraparea');
            allMainChilds.forEach(function(thisMainChilds, index) {
                thisMainChilds.addEventListener('keydown', function(e) {
                    let that = e.target;
                    let thatMainChildsIndex = parseInt(this.getAttribute('mainchilds'));
                    //Tab
                    if (e.keyCode == 9) {
                        keyboardAriaNavigation.setTabindexOnFirstItem();
                    } //Enter
                    if (e.keyCode == 13 || e.keyCode == 32) {
                        keyboardAriaNavigation.activeElm(that);
                    }
                    //Up
                    else if (e.keyCode == 38) {
                        e.preventDefault();
                        keyboardAriaNavigation.focusOnLastSubmenuLink(that, e);
                    }
                    //Down
                    else if (e.keyCode == 40) {
                        e.preventDefault();
                        keyboardAriaNavigation.focusOnFirstSubmenuLink(that, e);
                    }
                    //Left
                    else if (e.keyCode == 37) {
                        e.preventDefault();
                        keyboardAriaNavigation.toPrevElm(that, thatMainChildsIndex);
                    }
                    //Right
                    else if (e.keyCode == 39) {
                        e.preventDefault();
                        keyboardAriaNavigation.toNextElm(that, thatMainChildsIndex);
                    }
                    //Home
                    else if (e.keyCode == 36) {
                        e.preventDefault();
                        keyboardAriaNavigation.toFirstElm(that);
                    }
                    //End
                    else if (e.keyCode == 35) {
                        e.preventDefault();
                        keyboardAriaNavigation.toLastElm(that);
                    }
                    //Esc
                    else if (e.keyCode == 27) {

                    }
                });
            });
        });

        document.querySelectorAll('[submenulink]').forEach(function(thisSubmenulink, index) {
            thisSubmenulink.addEventListener('keydown', function(e) {
                let that = e.target;
                //Enter
                if (e.keyCode == 13 || e.keyCode == 32) {
                    keyboardAriaNavigation.activeElm(that);
                }
                //Up
                else if (e.keyCode == 38) {
                    keyboardAriaNavigation.focusOnPrevSubmenuLink(that, e);
                }
                //Down
                else if (e.keyCode == 40) {
                    keyboardAriaNavigation.focusOnNextSubmenuLink(that, e);
                }
                //Esc
                else if (e.keyCode == 27) {
                    keyboardAriaNavigation.closeSubMenu(that, e);
                }
            });
        });
    },

    setClick: function() {
        document.querySelectorAll('[mainchilds], [submenulink]').forEach(function(thisClickable, index) {

        });
    },

    showInstroctions: function() {
        if(UA1('html').getAttribute('vFaKz') == 'he'){
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uatabsinstroctions" class="uawrapareaInstroctions"> הגעת לקומפוננטת הכרטיסיות: <hr/>השתמש בחצים לניווט <span>&larr;</span><span>&rarr;</span><hr/>השתמש ב-Tab להמשך לפאנל הכרטיסיות<span>&#8633;</span></div>');
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uamenusinstroctions" class="uawrapareaInstroctions"> הגעת לקומפוננטת התפריט: <hr/>השתמש בחצים לניווט <span>&larr;</span><span>&rarr;</span><hr/>השתמש ב-Tab לכניסה לתת-תפריט<span>&#8633;</span><hr/>בתת-תפריט השתמש בחצים למעלה ולמטה<span>&uarr;</span><span>&darr;</span></div>');

        }else {
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uatabsinstroctions" class="uawrapareaInstroctions"> you reach to Tab component: <hr/>Use Arrows to navigate <span>&larr;</span><span>&rarr;</span><hr/>Use Tab to continue into the tab panel<span>&#8633;</span></div>');
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uamenusinstroctions" class="uawrapareaInstroctions"> you reach to Menu component: <hr/>Use Arrows to navigate <span>&larr;</span><span>&rarr;</span><hr/>Use Tab to enter submenu<span>&#8633;</span><hr/>In Submenu use up and down arrows<span>&uarr;</span><span>&darr;</span></div>');
        }
        document.addEventListener('keydown', function(e) {
            setTimeout(function() {
                let Dpbwt = document.activeElement;
                if (Dpbwt.hasAttribute('role') && Dpbwt.getAttribute('role') == 'tab') {
                    if (document.querySelector('#uatabsinstroctions'))
                        document.querySelector('#uatabsinstroctions').style.display = 'block';
                } else if (Dpbwt.hasAttribute('role') && Dpbwt.getAttribute('role') == 'menuitem') {
                    if (document.querySelector('#uamenusinstroctions'))
                        document.querySelector('#uamenusinstroctions').style.display = 'block';
                } else {
                    if (document.querySelector('#uatabsinstroctions'))
                        document.querySelector('#uatabsinstroctions').style.display = 'none';
                    if (document.querySelector('#uamenusinstroctions'))
                        document.querySelector('#uamenusinstroctions').style.display = 'none';
                }
            }, 50);
        });
    }
};





let subchilds = '[subchilds]';
setAriaRoles(setting);
keyboardAriaNavigation.setKeyDown();
keyboardAriaNavigation.showInstroctions();





document.querySelectorAll('.price').forEach(function(price){

    if(price.querySelector('del') &&  price.querySelector('ins')){
        price.querySelectorAll('*').forEach(function(elm){
            elm.setAttribute('aria-hidden', 'true');
        });
        let prevPrice = price.querySelector('del').innerText.trim() || 'אין מחיר קודם';
        let thisPrice = price.querySelector('ins').innerText.trim();
        let str = `המחיר הקודם הוא ${prevPrice} המחיר הנוכחי הוא ${thisPrice}`;
        price.appendHtml('<span id="uaerrors" class="sr-only" >'+str+'</span>');
    }
});andiUA.shopify = function(){
   UA('#main-collection-product-grid .grid__item,  .grid__item.slider__slide.slick-slide').forEach(function(elm){
    let textH3 = elm.querySelector('h2,h1,h3,h4,h5').BKXPP().trim();
    console.log(elm.BKXPP().indexOf('Sold out'))
    if(elm.BKXPP().indexOf('Sold out') > -1){
        textH3 = textH3 + ' ' + 'Sold out';
    }
    elm.querySelectorAll('a').forEach(function(link){
        if(link.BKXPP().trim() == '') link.addAttr({'aria-label': textH3});
    });
})
}

andiUA.shopify();andiUA.aKOuR = function(TUAiQBPT) {
	let langs = {};
	langs.heb = {};
	langs.en = {};
	langs.heb.wp15 = 'שתף בפייסבוק';
	langs.heb.wp16 = 'שתף בטוויטר';
	langs.heb.wp17 = 'הוסף ל pinterest';
	langs.heb.wp172 = 'pinterest';
	langs.heb.wp31 = 'שתף ב- ';
	langs.heb.wp35 = 'וויז';
	langs.heb.wp36 = 'ווצאפ';
	langs.heb.wp37 = 'telegram';
	langs.heb.wp0000 = 'נפתח בחלון חדש';
	langs.en.wp15 = 'share in facebook';
	langs.en.wp16 = 'share in twitter';
	langs.en.wp17 = 'add to pinterest';
	langs.en.wp172 = 'pinterest';
	langs.en.wp31 = 'share with ';
	langs.en.wp35 = 'Waze';
	langs.en.wp36 = 'Whatsapp';
	langs.en.wp37 = 'telegram';
	langs.en.wp0000 = 'open in new window';
	if (UA1('html')?.getAttribute('vFaKz') == "he" || UA1('html')?.getAttribute('lang') == "he-IL" || UA1('html')?.getAttribute('lang') == "he") {
		wptext = langs.heb;
	} else {
		wptext = langs.en;
	}

	function shareLink( selector, labelText ){
		document.querySelectorAll(selector).forEach(function(el, index) {
		    if(!el.hasAttribute('sharelink')){
    			let Mhkir = el.innerText?.trim() || '';
    			if(el.hasAttribute('target')) labelText = labelText + ', ' + wptext.wp0000;
    			el.setAttribute('aria-label', Mhkir + ' ' +labelText);
    			el.setAttribute('role', 'link');
    			el.setAttribute('tabindex', 0);
    			el.setAttribute('sharelink', 1);
    			el.querySelector('img')?.setAttribute('alt', Mhkir + ' ' +labelText);
		    }
		});	
	}
	shareLink( '[href*="facebook.com/"]',  andiUA.KNTQg.ettRS );
	shareLink( '[href*="twitter.com/"]',  andiUA.KNTQg.JkOki );
	shareLink( '[href*="youtube.com/"]',  andiUA.KNTQg.NhJjz );
	shareLink( '[href*="waze://?q"]',  andiUA.KNTQg.hUWLJ );
	shareLink( '[href*="instagram.com/"]',  andiUA.KNTQg.UoAdE );
	shareLink( '[href*="linkedin.com/"]',  andiUA.KNTQg.DnQXA );
	shareLink( '[href*="plus.google.com/"]',  andiUA.KNTQg.EeagL );
	shareLink( '[href*="pinterest.com/"]',  wptext.wp172 );
	shareLink( '[href*="mailto:"]',  andiUA.KNTQg.Cerbq );
	shareLink( '.at-share-btn.at-svc-facebook, [data-social="facebook"] a.facebook', wptext.wp31 + ' facebook' );
	shareLink( '.at-share-btn.at-svc-email', wptext.wp31 + ' email' );
	shareLink( '.at-share-btn.at-svc-twitter', wptext.wp31 + ' twitter' );
	shareLink( '.at-share-btn.at-svc-pinterest_share', wptext.wp31 + ' pinterest' );
	shareLink( '.at-share-btn.at-svc-favorites', wptext.wp31 + ' favorites' );
	shareLink( '.at-share-btn.at-svc-print', wptext.wp31 + ' print' );
	shareLink( '[href*="https://api.whatsapp.com/"], [href*="https://wa.me/"]', wptext.wp36 );
	shareLink( '[href*="whatsapp://"]', wptext.wp36 );
	shareLink( '[href*="https://waze.com/"], [data-social="whatsapp"] a.whatsapp',  wptext.wp35 );	
	shareLink( '[href^="https://www.facebook.com/sharer"]',  wptext.wp15 );
	shareLink( '[href^="https://twitter.com/share?"]',  wptext.wp16 );
	shareLink( '[href^="https://pinterest.com/pin/create/"]',  wptext.wp17 );
	shareLink( '[data-social="telegram"] a.telegram',  wptext.wp37 );
};
andiUA.aKOuR();andiUA.removeOtherAccComponents = function(){
    document.querySelector('#enable-toolbar')?.remove();
    document.querySelector('#pojo-a11y-toolbar')?.remove();
    document.querySelector('#sogo_overlay')?.remove();
    document.querySelector('#open_sogoacc')?.remove();
    document.querySelector('#sogoacc')?.remove();
    document.querySelector('#octAccess')?.remove();
    document.querySelector('.a11y-toolbar')?.remove();
    document.querySelector('#block-accessibility-0')?.remove();
    document.querySelector('#sogo_overlay')?.remove();
    document.querySelector('.btba-accessibility-box')?.remove();
    document.querySelector('.uw-sl')?.remove();
    document.querySelector('.uwy.userway_p5')?.remove();
    document.querySelector('.acc-wrapper')?.remove();
    document.querySelector('#wemake-acs')?.remove();
    document.querySelector('#INDWrap')?.remove();
    document.querySelector('.aioa-widget-wrapper')?.remove();
    document.querySelector('#accessibility_menu')?.remove();
    document.querySelector('#accessibility_icon')?.remove();
    document.querySelector('#accessibilityIcon')?.remove();
    document.querySelector('#accesibilityDeclarationModal')?.remove();
    document.querySelector('#accessibilitySideNav')?.remove();
    document.querySelector('.accessibility_component.accessibility_div_wrap')?.remove();
    document.querySelector('#acwp-toolbar-btn-wrap')?.remove();
    document.querySelector('#acwp-toolbar')?.remove();
    document.querySelector('#accessability')?.remove();
    document.querySelector('#real-accessability')?.remove();
    document.querySelector('#b-acc-toolbarWrap')?.remove();

}
andiUA.removeOtherAccComponents();andiUA.findDescToLinksFromTitleAttr = function(cssSelector, desc){
    UA('a').forEach(function(link, index){
        let haveDesc = false;
        if(link.BKXPP().trim() == '' && !link.ariaLabel ){
            if(link.querySelector('img')){
                link.querySelectorAll('img').forEach(function(img, index){
                    if(img.alt?.trim() != '' && !img.ariaLabel){
                        haveDesc = true;
                    }
                });
            }
        }
        if(!haveDesc && link.title?.trim()){
            link.addAttr({'aria-label':link.title});
            link.querySelectorAll('img').forEach(function(img, index){
                img.alt = link.title
            });
        }
    });
};
andiUA.findDescToLinksFromTitleAttr();

andiUA.addDescToLinks = function(cssSelector, desc){
    document.querySelectorAll(cssSelector).forEach(function(elm){
    	if(!elm.innerText) elm.setAttribute('aria-label', desc);
    });
};

andiUA.addDescToLinks('[href*="/my-account/"]', 'החשבון שלי');
andiUA.addDescToLinks('[href*="wishlist"]', 'אהבתי');
andiUA.addDescToLinks('[href*="/myaccount/"]', 'החשבון שלי');


//
UA('[vFaKz="he"] [aria-label="Next slide"]').forEach(function(elm){
    elm.addAttr({'aria-label':'לשקופית הבאה'});
});

UA('[vFaKz="he"] [aria-label="Previous slide"]').forEach(function(elm){
    elm.addAttr({'aria-label':'לשקופית הקודם'});
});

UA('[href^="tel:"]').forEach(function(elm){
    elm.addAttr({'aria-label': 'phone: '+ elm.href.replace('tel://','').replace('tel:','') });
});

UA('[id="g-recaptcha-response"] , [name="g-recaptcha-response"]').forEach(function(elm){
    elm.addAttr({'aria-label': 'google recaptcha ' });
});


UA('.jet-filters-pagination__link').forEach(function(link, index){
    link.addAttr({'role':'link', 'tabindex':'0','aria-label':'עבור לעמוד מספר '+ link.BKXPP()});
    link.addEventListener('keydown',function(e){
        if(e.key == 'Enter'){
            this.click();
        }
    });
});


var allLinks = document.querySelectorAll('a');
var imageLinks = [];

// עוברים על כל הקישורים ובודקים אם הם מכילים קישור לתמונה
allLinks.forEach(function(link, index) {
  var href = link.href;
  if(href.indexOf('?')) href = href.split('?')[0]
  if (/\.(jpeg|jpg|gif|png|svg|webp)$/i.test(href)) {
        imageLinks.push(link);
  }
});


imageLinks.forEach(function(link, index) {
    var altText = ''
     if( link.querySelectorAll('img').length == 1) {
       altText = link.querySelector('img').alt;
      }
    link.setAttribute('aria-label', altText + ' להצגת תמונה  מספר ' + (index+1) + ' , נפתח בחלונית פופ-אפ או טאב חדש');
});andiUA.reackClick = function(element){
    const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
    function simulateMouseClick(element){
      mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
          new MouseEvent(mouseEventType, {
              view: window,
              bubbles: true,
              cancelable: true,
              buttons: 1
          })
        )
      );
    }
    simulateMouseClick(element);
};
andiUA.wixForm = function(){
    function sortElementsByVisualLayoutFn(){
        andiUA.sortElementsByVisualLayout = function(parent) {
            if(!parent.hasAttribute('form-wix-fixed')){
                parent.setAttribute('form-wix-fixed', 1);
                const container = parent;
                const elements = container.children;
                const fIngjay = Array.from(elements);
                fIngjay.sort((a, b) => {
                    const rectA = a.getBoundingClientRect();
                    const rectB = b.getBoundingClientRect();
                    return rectB.right - rectA.right
                });
                fIngjay.forEach(element => container.appendChild(element));
                console.log('fix-wix')
            }
        }
        UA('.wixui-form [data-testid="mesh-container-content"]').forEach(function(parent){
            andiUA.sortElementsByVisualLayout(parent);
        });
    }
    setTimeout(function(){
        sortElementsByVisualLayoutFn();
    },1500);
}
andiUA.wixForm();

if(!andiUA.runOncewixForm){
	andiUA.runOncewixForm = true;
    let timeToRun = 2500;
	let timeOut = -1;
	let runAfterDomChange = function(){
		andiUA.wixForm();
	};

	let OnNodeInserted = function(event){
	const target = event.target;
		if( target.nodeType == 1 && target.id !== 'uaerrors' ){
			clearTimeout(timeOut)
			timeOut = setTimeout(function(){
				runAfterDomChange();
			}, timeToRun);
		}
	};
	document.body.addEventListener ('DOMNodeInserted', OnNodeInserted, false);  
    
};
if(!UA1('[data-url*="https://static.parastorage.com/services/wix-thunderbolt"]')){
    var node = document.createElement("STYLE");
    var textnode = document.createTextNode(`[id*='topnav'] > li:focus-within > .sub {display:block !important;opacity:1 !important;} 
    nav.elementor-nav-menu--main > ul.elementor-nav-menu > li::focus-within > .sub-menu{display:block !important;}
    .main_menu > li:focus-within > .sub_menu {visibility: visible; opacity: 1;}
    .uawrapareaInstroctions{z-index: 99999999999999; display:none; position: fixed;font-size: 18px; bottom: 0; background-color: #000; color: #fff; padding: 5px; border-radius: 3px; left: calc(50% - 125px);line-height: 100%; direction: ltr; } 
    .uawrapareaInstroctions span{display:inline-block;margin:0 5px; font-size:28px;}
    [uawraparea]:focus-within .uawrapareaInstroctions{display:block;}
    .uawrapareaInstroctions hr{background-color: #767676; border: 0; height: 2px; margin: 5px auto; max-width: 100%; text-align: center;}
    nav > ul:first-child > li:not(.cart):focus-within > ul{visibility: visible !important; opacity: 1 !important;display:block !important}
    nav > ul:first-child > li:not(.cart) > a:focus + ul{visibility: visible !important; opacity: 1 !important;display:block !important}
    nav > ul > li:not(.cart):focus-within > ul {opacity: 1 !important;display:block !important;visibility:visible !important;}
    nav > ul > li:not(.cart):focus-within > div {opacity: 1 !important;display:block !important;visibility:visible !important;}
    nav > * > ul > li:not(.cart):focus-within > ul {opacity: 1 !important;display:block !important;visibility:visible !important;}
    nav > * > ul > li:not(.cart):focus-within > div {opacity: 1 !important;display:block !important;visibility:visible !important;}
    ul.nav > li:not(.cart):focus-within > div {opacity: 1 !important;display:block !important;visibility:visible !important;}
    ul.nav > li:not(.cart):focus-within > ul {opacity: 1 !important;display:block !important;visibility:visible !important;}
    `);
    node.appendChild(textnode);
    document.querySelector("body").appendChild(node);
}UA('label').forEach(function(elm, index){
    let forID = elm.getAttr('for');
    let inputID = UA1('#' +forID );
    UA('[for="'+forID+'"]').forEach(function(elm2, index2){
        if(index2 > 0){
            elm2.addAttr({'for':forID + '-' + index2});
            UA('[id="'+forID+'"]')[index2]?.addAttr({'id':forID + '-' + index2 });
            
        }
    });
});

UA('label').forEach(function(label){
    if(label.innerText.trim() == '' ){
        label.setAttribute('role', 'presentation');
        label.innerHTML += '<span class="sr-only"> &#8203</span>';
        //label.taddClass('sr-only')
    } 
});



UA('label').forEach(function(elm, index){
    let forID = elm.getAttr('for');
    let inputID = UA1('#' +forID );
	
	if(UA1('[id="'+forID+'"]')) return;
	
	if(UA1('[name="'+forID+'"]')){
		UA1('[name="'+forID+'"]').id = forID
	} else if(elm.nextElementSibling?.isIt('input')){
		elm.nextElementSibling.id = forID;
	} else if(elm.previousElementSibling?.isIt('input')){
		elm.previousElementSibling.id = forID;
	}
});if(UA1('.anditestmode')){
    javascript:void(document.oncontextmenu=null);
}}
			andiUA.loadmore();
			window.onbeforeunload = function(){
				localStorage.removeItem("sQXGk");
			};
			setTimeout(function() {
			  if (andiUA.TUAsettingFn.StfZz || UA1(".anditestmode")) {
				var url_string = window.location.href.toString();
				var url = new URL(url_string);
				var c = url.searchParams.get("elm");
				if (c != null) {
				  c = c.hHSwe("_big_", ">").hHSwe("_id_", "#").hHSwe("_class_", ".");
				  UA1(c).addCss2({"box-shadow":"0px 0px 0px 9999px rgba(0,0,0,0.75)", "background-color":"#FFD700"});
				}
				andiUA.getScript(andiUA.KpAEX + "/js/andi2Funcions2.js", andiUA.emptyFn);
			  }
			  UA1("body").taddClass("loadFASTaddon");
			}, 0);
andiUA.loadmore = function(){
				andiUA.fixBreadcrumb = function() {

	var countFixed = 0, wrapBreadCrumbArr = andiUA.findPassebleContainer(['BreadCrumb','breadcrams','breadcrumb','crumbs','crumb']);
	wrapBreadCrumbArr.forEach(function(TUAel,i) {
		var n, textArr = [];
		var walk = document.createTreeWalker(TUAel, NodeFilter.SHOW_TEXT, null, false);
		while (n = walk.nextNode()) {
			if(textArr.indexOf(n.nodeValue) == -1 && n.nodeValue.trim() !== ''){
				var textElm = n.nodeValue.trim();
				textArr.push(n.nodeValue);
				if(n.parentElement.tagName == 'A'){
					n.parentElement.addAttr({"aria-label": andiUA.TUAlanguageText.TUABreadcrumb2 + n.nodeValue});
				} else {
					n.parentElement.addAttr({"aria-current":"page","aria-label": andiUA.TUAlanguageText.TUABreadcrumb1 + n.nodeValue});
				}
			}
		}
		var allSentence = '';
		for(var i = textArr.length-1; i >= 0; i--){
			if(i == (textArr.length-1)){
				allSentence += andiUA.TUAlanguageText.TUABreadcrumb1 + textArr[i] + " ";
			} else {
				allSentence += andiUA.TUAlanguageText.TUABreadcrumb3 + textArr[i] + " ";
			}
		}
		TUAel.addAttr({"aria-label": allSentence, "tabindex": "0", "role": "region"});
	});
};
andiUA.fixBreadcrumb();
				var allHeading = UA('[role="heading"],h1,h2,h3,h4,h5,h6');
andiUA.TUAemptyHeading = function() {
    if (UA("h1").length > 1) {
        UA("h1").forEach(function(TUAel,i) {
            if (i > 0) {
                TUAel.addAttr({
                    "aria-level": "2",
                    "role": "heading"
                });
            }
        });
    }
};
andiUA.TUAsetEmptyHeading = function(allHeading) {
	document.querySelectorAll('[role="heading"],h1,h2,h3,h4,h5,h6').forEach(function(TUAel,i) {
		if (TUAel.innerText?.trim() == "" && TUAel.querySelectorAll('img,a,svg').length == 0) {
			TUAel.innerHTML += '<span class="sr-only">&#8203;</span>';
			 TUAel.addAttr({"role": "presentation"});
		}
	});
};
andiUA.TUAfixHaveNotH1 = function(allHeading) {
    if(!document.querySelector('h1')){
    	let htmlSRT = '<h1 class="sr-only">'+document.querySelector('title')?.innerText.trim()+'</h1>';
    	if(document.querySelector('title')) document.body.insertAdjacentHTML( 'afterbegin', htmlSRT );
    }
}
if(!UA1('#andimenu')){
    andiUA.TUAemptyHeading();
andiUA.TUAsetEmptyHeading(allHeading);
andiUA.TUAfixHaveNotH1();
}
				andiUA.TUAfixUserImgEmptyAlt = function() {
	
	var alt1, alt2;
	UA(andiUA.TUAsettingFn.TUAallImg).forEach(function(TUAel,i) {
		 if (!TUAel.hasAttribute("alt")) {
			if (TUAel.getAttr("src") !== null) {
				alt1 = TUAel.getAttr("src").TUAfilename();
				alt2 = TUAel.getAttr("src").TUAfilename2();
			}
			if (TUAel.getAttr("alt") === null || TUAel.getAttr("alt") == alt1 || TUAel.getAttr("alt") == alt2) {
				TUAel.addAttr({"alt":""});
			}
		 }
	});
};
andiUA.TUAfixUserImgEmptyAlt();
				andiUA.TUAsetFixedKeybourdLinks = function(TUAelementList) {
    document.querySelectorAll('a').forEach( (elm)=>{
      (!elm.hasAttribute('href'))?elm.setAttribute('tabindex', '0'):'';
    });
};
andiUA.TUAsetFixedKeybourdLinks();
				andiUA.findAltMeaning = function() {
	
    var TUAallHeading = 'h1,h2,h3,h4,h5.h6,[role="heading"]';
    var areas = 'article:not(.andimenucode), [andiarea="2"]:not(.dontfindAltMeaning):not(.andimenucode)';
    if(UA1('article'))
    UA('article').forEach(function(TUAel,i) {
        var TUAthisArea = TUAel;
        if (TUAthisArea.querySelectorAll('img').length > 0 && TUAthisArea.querySelectorAll(TUAallHeading).length > 0) {
            TUAthisArea.querySelectorAll('img').forEach(function(el2,j) {
                var TUAimageNum = j;
                var TUAthisImg = el2;
                if ( TUAthisImg.closest('#TUATUAcontainer') === null && TUAthisImg.getAttr('alt') === null || TUAthisImg.getAttr('alt').trim() === '') {
					if (TUAthisImg.getAttribute('class') !== null && TUAthisImg.getAttribute('class').indexOf('avatar') > -1) {
						TUAthisImg.setAttribute('alt',andiUA.TUAlanguageText.bbb148);
					} else {
						var TUAHeadingInArea = TUAthisArea.querySelectorAll(TUAallHeading);
						var TUAallElmsInArea = TUAthisArea.querySelectorAll('*');
						var nodes = Array.prototype.slice.call( TUAallElmsInArea );
						var TUAthisIngIndex = nodes.indexOf(TUAthisImg);
						if(TUAthisIngIndex === undefined)TUAthisIngIndex = -1;
						var TUAweHaveHeading = false;
						for (var TUAi = TUAthisIngIndex; TUAi >= 0; TUAi--) {
							if (TUAallElmsInArea[TUAi].getAttribute('role') == 'heading' && TUAallHeading.indexOf(TUAallElmsInArea[TUAi].tagName.toLowerCase() ) > -1) {
								TUAthisImg.addAttr({
									"alt": TUAallElmsInArea[TUAi].innerText + ' ' +
										andiUA.TUAlanguageText.TUAtimgInAreaImgNo + ' ' + (1 + TUAimageNum)
								});
								TUAweHaveHeading = true;
								break;
							}
						}
						if (!TUAweHaveHeading) {
							var TUAHeadingInAreaTemp =  andiUA.getSiblings(el2,'next');
							var TUAHeadingInAreaH = [];
							for(var jj = 0;jj < TUAHeadingInAreaTemp.length;jj++){
								if( (TUAallElmsInArea[jj].nodeType == 1 && TUAallElmsInArea[jj].getAttribute('role') == 'heading') || (TUAHeadingInAreaTemp[jj].nodeType == 1 && TUAallHeading.indexOf(TUAHeadingInAreaTemp[jj].tagName.toLowerCase() ) > -1)){
									TUAHeadingInAreaH.push(TUAHeadingInAreaTemp[jj]);
									break;
								}
							}
							if (TUAHeadingInAreaH != undefined && TUAHeadingInAreaH.length > 0) {
								el2.addAttr({
									"alt": TUAHeadingInAreaH[0].innerText
								});
							} else {
								TUAHeadingInArea =  TUAthisArea.querySelectorAll(TUAallHeading);
								var TUAthisImg = el2;
								var TUAallElmsInArea =  TUAthisArea.querySelectorAll("*");
								var nodes = Array.prototype.slice.call( TUAallElmsInArea );
								var TUAthisIngIndex = nodes.indexOf(TUAthisImg);
								if(TUAthisIngIndex == undefined)TUAthisIngIndex = -1;
								var TUAweHaveHeading = false;
								for (var TUAi = TUAthisIngIndex; TUAi < TUAallElmsInArea.length; TUAi++) {
									if ( TUAallElmsInArea[TUAi].getAttribute('role') == 'heading' && TUAallHeading.indexOf(TUAallElmsInArea[TUAi].tagName.toLowerCase() ) > -1 ) {
										TUAthisImg.addAttr({
											"alt":  TUAallElmsInArea[TUAi].innerText + ' ' +
												andiUA.TUAlanguageText.TUAtimgInAreaImgNo + ' ' + (1 + TUAimageNum)
										});
										TUAweHaveHeading = true;
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

andiUA.TUAfixUserImgEmptyAlt = function() {
	
	var alt1, alt2;
	UA(andiUA.TUAsettingFn.TUAallImg).forEach(function(TUAel,i) {
		 if (!TUAel.hasAttribute("alt")) {
			if (TUAel.getAttr("src") !== null) {
				alt1 = TUAel.getAttr("src").TUAfilename();
				alt2 = TUAel.getAttr("src").TUAfilename2();
			}
			if (TUAel.getAttr("alt") === null || TUAel.getAttr("alt") == alt1 || TUAel.getAttr("alt") == alt2) {
				TUAel.addAttr({"alt":""});
			}
		 }
	});
	UA('img').forEach(function(elm,i) {
	    if(!elm.hasAttribute('alt')) elm.setAttribute('alt', '');
	});
};
andiUA.TUAfixUserImgEmptyAlt();
andiUA.findAltMeaning();
				andiUA.TUAremoveBrTagToScreenReader = function() {
	UA('br, hr').forEach(function(TUAel) {
		TUAel.addAttr({"role":"presentation"});
	});
};
andiUA.TUAremoveBrTagToScreenReader();
				andiUA.TUAlinksAccessibility = function() {
	
	var linksList = UA('[onclick*="location"],[onclick*="window.open"]');
    for (var TUAi = 0; TUAi < linksList.length; TUAi++) {
        linksList[TUAi].setAttribute("role", "link");
        linksList[TUAi].addAttr({"tabindex": "0"});
    }
    var tests = andiUA.TUAlanguageText;
    var typeFile = ['a[href$=".amr"],a[href$=".mp2"],a[href$=".ram"],a[href$=".aiff"],a[href$=".aif"],a[href$=".wma"],a[href$=".wav"],a[href$=".m4v"]', 'a[href$=".ogg"],a[href$=".m4v"],a[href$=".divx"],a[href$=".mpeg"],a[href$=".m4a"],a[href$=".mp4"],a[href$=".mov"],a[href$=".mpg"],a[href$=".avi"],a[href$=".wmv"]', 'a[href$=".exe"]', 'a[href$=".vcd"]', 'a[href$=".cab"]', 'a[href$=".ace"]', 'a[href$=".gz"]', 'a[href$=".dmg"]', 'a[href$=".iso"]', 'a[href$=".jar"]', 'a[href$=".rar"]', 'a[href$=".zip"],a[href$=".7z"]',
        'a[href$=".psd"]', 'a[href$=".ai"]', 'a[href$=".indd"]', 'a[href$=".ppt"],a[href$=".pptx"],a[href$=".pptm"],a[href$=".pps"],a[href$=".ppsx"]', 'a[href$=".xlsx"],a[href$=".ods"],a[href$=".xls"]', 'a[href$=".doc"],a[href$=".docx"],a[href$=".odt"],a[href$=".wps"]', 'a[href$=".txt"]', '[href$=".pdf"]',
    ];
    var addAttrName = ["andiAccLiknssound", "andiAccLiknsmovie", "andiAccLiknsexe", "andiAccLiknsvcd", "andiAccLiknscab", "andiAccLiknsace", "andiAccLiknsgz", "andiAccLiknsdmg", "andiAccLiknsiso", "andiAccLiknsjar", "andiAccLiknsrar", "andiAccLiknszip", "andiAccLiknspsd", "andiAccLiknsai", "andiAccLiknsindd", "andiAccLiknspowerpoint", "andiAccLiknsexcel", "andiAccLiknsdoc", "andiAccLiknstxt", "andiAccLiknspdf", "andiAccLiknsnewwindow"];
    var addAttrValue = ["sound", "movie", "exe", "vcd", "cab", "ace", "gz", "dmg", "iso", "jar", "rar", "zip", "psd", "ai", "indd", "powerpoint", "excel", "doc", "txt", "pdf", "newwindow"];
    var addText = [tests.TUAaccessibleLinksAUDIO, tests.TUAaccessibleLinksMOVIE, tests.TUAaccessibleLinksEXE, tests.TUAaccessibleLinksVCD, tests.TUAaccessibleLinksCAB, tests.TUAaccessibleLinksACE, tests.TUAaccessibleLinksGZ, tests.TUAaccessibleLinksDMG, tests.TUAaccessibleLinksISO, tests.TUAaccessibleLinksJAR, tests.TUAaccessibleLinksRAR, tests.TUAaccessibleLinksZIP, tests.TUAaccessibleLinksPSD, tests.ANDI2accessibleLinksIllustrator, tests.ANDI2accessibleLinksInDesign, tests.ANDI2accessibleLinksPOWERPOINT,
        tests.ANDI2accessibleLinksEXCEL, tests.TUAaccessibleLinksDOC, tests.TUAaccessibleLinksTXT, tests.TUAaccessibleLinksPDF, tests.TUAaccessibleLinksNewWindows
    ];
	
    for (var i = 0; i < typeFile.length; ++i) {
        
        
        var locationInArr = i;
		UA(typeFile[locationInArr]).forEach(function(TUAel) {
		    
		    if(!TUAel.hasAttribute('TUAlinksAccessibility')){
		    
           if (	!TUAel.thasClass(addAttrName[locationInArr])		) {
                var newMeaning = "";
                var linkText = TUAel.innerText;
                if (linkText === "" && TUAel.querySelectorAll("img").length > 0 ) {
                    var findFirstImg = TUAel.querySelectorAll("img")[0];
                    if (findFirstImg && findFirstImg.getAttr("alt") !== null) {
                        linkText = findFirstImg.getAttr("alt");
                    } else {
                        if (findFirstImg && findFirstImg.getAttr("aria-label") !== null) {
                            linkText = findFirstImg.getAttr("aria-label");
                        }
                    }
                }
                var TUAariaLabelLink = TUAel.getAttr("aria-label");
                if (TUAariaLabelLink !== undefined && TUAariaLabelLink !== null) {
                    TUAariaLabelLink.indexOf(linkText) == -1 ? newMeaning = linkText + " " + TUAariaLabelLink : newMeaning = TUAariaLabelLink;
                } else if (TUAel.getAttr("title") !== null && TUAel.getAttr("title") !== '') {
                    var TUAtitleLink = TUAel.getAttr("title");
                    TUAtitleLink.indexOf(linkText) == -1 ? newMeaning = linkText + " " + TUAtitleLink : newMeaning = TUAtitleLink;
				}
                if (newMeaning === '') TUAel.addAttr({
                    "aria-label": linkText + ", " + addText[locationInArr]
                });
                newMeaning !== undefined && newMeaning !== '' && newMeaning.length >= 1 ?
				TUAel.addAttr({"aria-label": newMeaning + ", " + addText[locationInArr]}) : '';
				TUAel.taddClass(addAttrName[locationInArr]);
				TUAel.addAttr({"TUAlinksAccessibility": true});
				
				
                
            }
            
            
		    }
            
        });
        
        
        
        
    }
};
andiUA.TUAlinksAccessibility();
				andiUA.defindMainContent = function() {
	if(!UA1('.UAmainlink')){
        var wrapMAinContentArr = [];
    	if(!UA1('[role="main"]')){
    		UA('.content,.main-container,main,#main,#content,#main-content,#mainContent,#maincontent,.main-content,.maincontent,#content-main,#contentmain,.content-main,.contentmain').forEach(function(TUAel, i) {
    			if(!TUAel.isIt('head,html,body,script,style')){
    				if(TUAel.isIt('.content,.main-container') && UA('.content').length == 1 && !UA1('[role="main"]')){
    					TUAel.addAttr({"role": "main"});
    				} else 	if(!UA1('[role="main"]')){
    					TUAel.addAttr({"role": "main"});
    				}
    			}
    		});
    	}
    	setTimeout(function(){
    		if(UA1('[role="main"]') && !UA1('.UAmainlink')){
    			var allSkipLInks = UA(".UA2skipAreaAutomate").length;
    			UA1('body').prependHtml('<a class="UA2skipAreaAutomate UAmainlink" href="#" tabindex="0" >'+andiUA.TUAlanguageText.TUAfirstSkiplink+'</a>');
    			UA1('.UAmainlink').addEventListener('click', function(e){
    				e.preventDefault();
    				UA1('[role="main"]').addAttr({"tabindex": "0"});
    				UA1('[role="main"]').focus();
    			});
    		}
    	},500);
	}
};
andiUA.defindMainContent();
				//TUAaccessibilityHidden
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
if (UA1('html').getAttribute('andilang') == "he" || UA1('html').getAttribute('lang') == "he-IL" || UA1('html').getAttribute('lang') == "he") {
    wptext = langs.heb;
} else {
    wptext = langs.en;
}



UA('button,[role="button"],a').forEach(function(el, index) {
    if (el.getText().trim() == '+') el.setAttribute('aria-label',wptext.wp33);
    if (el.getText().trim() == '-') el.setAttribute('aria-label',wptext.wp34);
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
        if (el.getText().trim().indexOf(CurrencyCoins[i]) > -1) {
            el.addAttr({ 'tabindex': '0', 'role': 'tooltip', 'aria-label': wptext.wp18 + ' ' + el.getText() });
        }
    }
});

UA('.meta-category a').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'link', 'aria-label': wptext.wp25 + ' ' + el.getText() });
});
UA('.post-like a').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'button', 'aria-label': wptext.wp24 + ' ' });
});

UA('.meta-views').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'tooltip', 'aria-label': wptext.wp26 + ' ' + el.getText() });
});
UA('.entry-date').forEach(function(el, index) {
    el.addAttr({ 'tabindex': '0', 'role': 'tooltip', 'aria-label': wptext.wp13 + ' ' + el.getText() });
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
    let times = elm.querySelectorAll('.yotpo-rating-bar-full').length;
    elm.addAttr({ 'role': 'tooltip', 'tabindex': '0', 'aria-label': 'דירוג ' + times + ' מתוך ' + all });
});

document.querySelectorAll('article.post').forEach(function(el, index) {
    if (el.querySelector('div.post-more') && el.querySelector(headingTags)) {
        let Htext = el.querySelector(headingTags).getText();
        el2 = el.querySelectorAll('div.post-more');
        el2.forEach(function(el4) {
            el4.querySelectorAll('a').forEach(function(el3) {
                el3.setAttribute('aria-label', wptext.wp4 + ' ' + Htext);
            });
        });
    }
    if (el.querySelector(headingTags)) {
        var Htext = el.querySelector(headingTags).getText();
        el.querySelectorAll('a').forEach(function(el2, index) {
            if (el2.getText().trim() == '' && !el2.hasAttribute('aria-label')) {
                el2.setAttribute('aria-label', wptext.wp4 + ' ' + Htext);
            }
        });
    }
});


UA('[href^="?letter"]').forEach(function(elm){
    elm.addAttr({ 'aria-label': wptext.wp14 + elm.getText() });
});

UA('.ee-gallery__media.elementor-clickable').forEach(function(el, index) {
    el.setAttribute('aria-label', wptext.wp27 + (index + 1) + wptext.wp28);
});

UA('.image-link img').forEach(function(el) {
	if( el.closest('li') && el.closest('li').querySelector('h2') ){
		var ImgT = el.closest('li').querySelector('h2');
		el.setAttribute('aria-label', ImgT.getText());
	}
});

UA('.elementor-widget-wrap').forEach(function(el) {
    var thatWrap = el;
    thatWrap.querySelectorAll('a.elementor-icon').forEach(function(el, i) {
        if (thatWrap.querySelectorAll('h2').length == 1 && el.getText().trim() == '') {
            var thatText = thatWrap.querySelector('h2').getText();
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
            if (UA1('.woocommerce-error') && UA1('.woocommerce-error').getText().trim() != '') {
                andiUA.TUAscreenReaderMassege(wptext.wp30 + ' ' + UA1('.woocommerce-error').getText().trim());
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
            el.setAttribute('aria-label', el.closest('label').getText());
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
        'aria-label': elm.parentElement.getText()
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
        innerElm.setAttribute('aria-label', wptext.wp4 + ' ' + elm.querySelector('.entry-title')?.getText());
    });
});

UA('[id^="main-navigation-item-"]').forEach(function(elm){
    let headerText = elm.querySelector('.entry-title')?.getText() || '';
    elm.querySelectorAll('a').forEach(function(link){
        if(!link.getText.trim()) link.setAttribute('aria-label', wptext.wp4 + ' ' + headerText);
        if(!link.getText.trim() == 'לפרטים נוספים') link.setAttribute('aria-label', wptext.wp4 + ' ' + headerText);
        link.querySelectorAll('.entry-link').forEach(function(innerElm){
            innerElm.setAttribute('aria-label', wptext.wp4 + ' ' + link.querySelector('.entry-title')?.getText());
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
        elm.setAttribute('aria-label', '  ,בתאריך ' + elm.getText() + ' לחודש ');
    });

    UA('.datepicker th.dow').forEach(function(elm){
        elm.setAttribute('aria-label', '  יום ' + elm.getText());
    });

    UA('.datepicker td.new.day').forEach(function(elm){
        var dateTEXT1 = 'של החודש הבא';
        elm.addAttr({'tabindex': '-1', 'aria-label': '  בתאריך ' + elm.getText() + ' ' + (dateTEXT1)});
    });


    UA('.react-datepicker__day').forEach(function(elm){
        elm.addAttr({ 'tabindex': '0', 'aria-label': '  ,בתאריך ' + elm.getText() + ' לחודש ' });
    });

    UA('.react-datepicker__day-name').forEach(function(elm){
        elm.setAttribute('aria-label', '  יום ' + elm.getText());
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
        elm.addAttr({ 'tabindex': '0', 'aria-label': '  ,בתאריך ' + elm.getText() + ' לחודש ' });
        elm.addEventListener('keyup', function(e){
            if (e.keyCode == 13) {
                this.click();
            }
        })
    });

    UA('.react-datepicker__day-name').forEach(function(elm){
        elm.setAttribute('aria-label', '  יום ' + elm.getText());
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
        elm.addAttr({ 'role': 'button', 'aria-disabled': 'true', 'aria-label': wptext.wp20 + ' ' + elm?.getText().trim() });
    });
    UA(dayInMonth[i]).forEach(function(elm){
       // elm.addAttr({ 'role': 'button', 'aria-disabled': 'true', 'aria-label': ' ' + elm.getText().trim() + ' ' + thisWrap[0]?.querySelector(Month[i])?.getText().trim() });
    });
    

    UA(dayWithEvents[i]).forEach(function(elm){

        if (elm.closest('[role="button"]')) {
            elm.closest('[role="button"]').tremoveAttr('aria-disabled');
            elm.closest('[role="button"]').tremoveAttr('aria-label');
            elm.closest('[role="button"]').tremoveAttr('role');
            elm.addAttr({ 'aria-label': elm.getText.trim() + ' ' + thisWrap.querySelector(Month[i]).getText().trim() + wptext.wp21 });
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
        let thisText = innerElm.querySelector('entry-header-wrapper')?.getText();
        if (innerElm.querySelector('noscript') && thisText) innerElm.addAttr('aria-label', thisText);
        else if (!innerElm.hasAttribute('aria-label') && innerElm.getText().trim() == '' && thisText) innerElm.setAttribute('aria-label', thisText);
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
[class*="TUAinnerWrapAccessibilitySliderPause"] > * {display: block !important; float: unset !important; position: static !important; margin: 0 !important; background-color: #fff;}
[class*="TUAinnerWrapAccessibilitySliderPause"] {height: 100% !important;}
.uawrapareaInstroctions{z-index: 99999999999999; display:none; position: fixed;font-size: 18px; bottom: 0; background-color: #000; color: #fff; padding: 5px; border-radius: 3px; left: calc(50% - 125px);line-height: 100%; direction: ltr; }
.uawrapareaInstroctions span{display:inline-block;margin:0 5px; font-size:28px;}
[uawraparea]:focus-within .uawrapareaInstroctions{display:block;}

.uawrapareaInstroctions hr{background-color: #767676; border: 0; height: 2px; margin: 5px auto; max-width: 100%; text-align: center;}
[andilang="he"] .uawrapareaInstroctions, [andilang="he"] .uawrapareaInstroctions *{direction:rtl !importnat;}`;

UA1('#wpcss')?.removeElm();
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
                    let thisHtext = thisArea.querySelector('[faqnum="' + index + '"]').getText().trim();
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
                    let Htext = thisArticleSum.querySelector(headingTags).getText().trim();
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
        if(UA1('html').getAttribute('andilang') == 'he'){
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uatabsinstroctions" class="uawrapareaInstroctions"> הגעת לקומפוננטת הכרטיסיות: <hr/>השתמש בחצים לניווט <span>&larr;</span><span>&rarr;</span><hr/>השתמש ב-Tab להמשך לפאנל הכרטיסיות<span>&#8633;</span></div>');
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uamenusinstroctions" class="uawrapareaInstroctions"> הגעת לקומפוננטת התפריט: <hr/>השתמש בחצים לניווט <span>&larr;</span><span>&rarr;</span><hr/>השתמש ב-Tab לכניסה לתת-תפריט<span>&#8633;</span><hr/>בתת-תפריט השתמש בחצים למעלה ולמטה<span>&uarr;</span><span>&darr;</span></div>');

        }else {
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uatabsinstroctions" class="uawrapareaInstroctions"> you reach to Tab component: <hr/>Use Arrows to navigate <span>&larr;</span><span>&rarr;</span><hr/>Use Tab to continue into the tab panel<span>&#8633;</span></div>');
            document.querySelector('body').insertAdjacentHTML('beforeend', '<div role="tooltip" id="uamenusinstroctions" class="uawrapareaInstroctions"> you reach to Menu component: <hr/>Use Arrows to navigate <span>&larr;</span><span>&rarr;</span><hr/>Use Tab to enter submenu<span>&#8633;</span><hr/>In Submenu use up and down arrows<span>&uarr;</span><span>&darr;</span></div>');
        }
        document.addEventListener('keydown', function(e) {
            setTimeout(function() {
                let thisFocus = document.activeElement;
                if (thisFocus.hasAttribute('role') && thisFocus.getAttribute('role') == 'tab') {
                    if (document.querySelector('#uatabsinstroctions'))
                        document.querySelector('#uatabsinstroctions').style.display = 'block';
                } else if (thisFocus.hasAttribute('role') && thisFocus.getAttribute('role') == 'menuitem') {
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

    if(price.querySelector('del') &&  price.querySelector('ins') && !price.querySelector('#uaerrors4')){
        price.querySelectorAll('*').forEach(function(elm){
            elm.setAttribute('aria-hidden', 'true');
        });
        let prevPrice = price.querySelector('del').innerText.trim() || 'אין מחיר קודם';
        let thisPrice = price.querySelector('ins').innerText.trim();
        let str = `המחיר הקודם הוא ${prevPrice} המחיר הנוכחי הוא ${thisPrice}`
    
        price.appendHtml('<span id="uaerrors4" class="sr-only" >'+str+'</span>');
    }
});
				andiUA.shopify = function(){
   UA('#main-collection-product-grid .grid__item,  .grid__item.slider__slide.slick-slide').forEach(function(elm){
    let textH3 = elm.querySelector('h2,h1,h3,h4,h5').getText().trim();
    console.log(elm.getText().indexOf('Sold out'))
    if(elm.getText().indexOf('Sold out') > -1){
        textH3 = textH3 + ' ' + 'Sold out';
    }
    elm.querySelectorAll('a').forEach(function(link){
        if(link.getText().trim() == '') link.addAttr({'aria-label': textH3});
    });
})
}

andiUA.shopify();
				andiUA.TUAfindsocial_network = function(TUAlinksList) {
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
	if (UA1('html')?.getAttribute('andilang') == "he" || UA1('html')?.getAttribute('lang') == "he-IL" || UA1('html')?.getAttribute('lang') == "he") {
		wptext = langs.heb;
	} else {
		wptext = langs.en;
	}

	function shareLink( selector, labelText ){
		document.querySelectorAll(selector).forEach(function(el, index) {
		    if(!el.hasAttribute('sharelink')){
    			let linkText = el.innerText?.trim() || '';
    			if(el.hasAttribute('target')) labelText = labelText + ', ' + wptext.wp0000;
    			el.setAttribute('aria-label', linkText + ' ' +labelText);
    			el.setAttribute('role', 'link');
    			el.setAttribute('tabindex', 0);
    			el.setAttribute('sharelink', 1);
    			el.querySelector('img')?.setAttribute('alt', linkText + ' ' +labelText);
		    }
		});	
	}
	shareLink( '[href*="facebook.com/"]',  andiUA.TUAlanguageText.TUAfacebook );
	shareLink( '[href*="twitter.com/"]',  andiUA.TUAlanguageText.TUAtwitter );
	shareLink( '[href*="youtube.com/"]',  andiUA.TUAlanguageText.TUAyoutube );
	shareLink( '[href*="waze://?q"]',  andiUA.TUAlanguageText.TUAwaze );
	shareLink( '[href*="instagram.com/"]',  andiUA.TUAlanguageText.TUAinstagram );
	shareLink( '[href*="linkedin.com/"]',  andiUA.TUAlanguageText.TUAlinkedin );
	shareLink( '[href*="plus.google.com/"]',  andiUA.TUAlanguageText.TUAgoogleplus );
	shareLink( '[href*="pinterest.com/"]',  wptext.wp172 );
	shareLink( '[href*="mailto:"]',  andiUA.TUAlanguageText.TUAmailto );
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
andiUA.TUAfindsocial_network();
				andiUA.removeOtherAccComponents = function(){
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
    document.querySelector('.BigAccessWidget')?.remove();
    document.querySelector('.bigaccessWidget')?.remove();
    document.querySelector('.accessWidget')?.remove();
    document.querySelector('.accesswidget')?.remove();
    document.querySelector('#NG_Main')?.remove();

}
andiUA.removeOtherAccComponents();
				andiUA.findDescToLinksFromTitleAttr = function(cssSelector, desc){
    UA('a').forEach(function(link, index){
        let haveDesc = false;
        if(link.getText().trim() == '' && !link.ariaLabel ){
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

andiUA.addDescToLinks('#elementor-menu-cart__toggle_button', 'פתח עגלת קניות');



//
UA('[andilang="he"] [aria-label="Next slide"], .owl-prev').forEach(function(elm){
    elm.addAttr({'aria-label':'לשקופית הבאה'});
});

UA('[andilang="he"] [aria-label="Previous slide"], .owl-next').forEach(function(elm){
    elm.addAttr({'aria-label':'לשקופית הקודם'});
});

UA('[href^="tel:"]').forEach(function(elm){
    elm.addAttr({'aria-label': 'phone: '+ elm.href.replace('tel://','').replace('tel:','') });
});

UA('[id="g-recaptcha-response"] , [name="g-recaptcha-response"]').forEach(function(elm){
    elm.addAttr({'aria-label': 'google recaptcha ' });
});


UA('.jet-filters-pagination__link').forEach(function(link, index){
    link.addAttr({'role':'link', 'tabindex':'0','aria-label':'עבור לעמוד מספר '+ link.getText()});
    link.addEventListener('keydown',function(e){
        if(e.key == 'Enter'){
            this.click();
        }
    });
});




UA('a:has(.e-font-icon-svg.e-fas-bars)').forEach(function(link, index){
    link.addAttr({'role':'link', 'tabindex':'0','aria-label': 'פתח תפריט'});
    link.addEventListener('keydown',function(e){
        if(e.key == 'Enter'){
            this.click();
        }
    });
});


var allLinks = document.querySelectorAll('a');
var imageLinks = [];


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
      let thisLinkText = link.innerText?.trim();
     link.setAttribute('aria-label',	`  להצגת תמונה (${thisLinkText}) מספר 	${altText}  להצגת תמונה  מספר ${(index+1)}, נפתח בחלונית פופ-אפ או טאב חדש`);;
});
				andiUA.reackClick = function(element){
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
}
				;
andiUA.wixForm = function(){
    function sortElementsByVisualLayoutFn(){
        andiUA.sortElementsByVisualLayout = function(parent) {
            if(!parent.hasAttribute('form-wix-fixed')){
                parent.setAttribute('form-wix-fixed', 1);
                const container = parent;
                const elements = container.children;
                const elementsArray = Array.from(elements);
                elementsArray.sort((a, b) => {
                    const rectA = a.getBoundingClientRect();
                    const rectB = b.getBoundingClientRect();
                    return rectB.right - rectA.right
                });
                elementsArray.forEach(element => container.appendChild(element));
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
    
}
				andiUA.NGClick = target => {
   const ev = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
   });
   target.dispatchEvent(ev);
};

andiUA.NGhover = target => {
   const ev = new MouseEvent('mouseenter', {
      view: window,
      bubbles: true,
      cancelable: true
   });
   target.dispatchEvent(ev);
};

andiUA.NGmouseout = target => {
   const ev = new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true
   });
   target.dispatchEvent(ev);
};
				UA('label').forEach(function(elm, index){
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
        //label.innerHTML += '<span class="sr-only"> &#8203</span>';
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
});
				if(!UA1('title') || UA1('title').getText().trim() == ''){
    UA1('h1')? UA1('title').innerText = UA1('h1').getText():'';
}
				andiUA.brokenAria = function(){
    UA('[aria-describedby]').forEach(function(aria, index){
        if (! UA1('#'+ aria.getAttribute('aria-describedby')) ){
            aria.removeAttribute('aria-describedby')
        }
    });
    UA('[aria-labelledby]').forEach(function(aria, index){
        if (! UA1('#'+ aria.getAttribute('aria-labelledby')) ){
            aria.removeAttribute('aria-labelledby')
        }
    });
    
    
    UA('[role="menubar"]').forEach(function(aria, index){
        if (! aria.tfind('[role="menuitem"]') == 0){
            aria.removeAttribute('role');
        }
    });
     UA('[role="menu"]').forEach(function(aria, index){
        if (! aria.tfind('[role="menuitem"]') == 0){
            aria.removeAttribute('role');
        }
    });
    
    
}

andiUA.brokenAria();
				andiUA.resetTabindex = function(){
    UA('[tabindex]').forEach(function(elm){
    	if(elm.getAttr('tabindex') != 0){
    		elm.setAttribute('tabindex', 0);
    	}
    });
}
andiUA.resetTabindex();
				let allDecrs = [
        { "className": ".fa-search", "classDecr": "חיפוש" },
        { "className": ".fa-bookmark-o", "classDecr": "סימנייה" },
        { "className": ".fa-500px", "classDecr": "לוגו של 500px" },
        { "className": ".fa-address-book", "classDecr": "ספר כתובות" },
        { "className": ".fa-address-book-o", "classDecr": "ספר כתובות" },
        { "className": ".fa-address-card", "classDecr": "כתובת" },
        { "className": ".fa-address-card-o", "classDecr": "כתובת" },
        { "className": ".fa-adjust", "classDecr": "התאמה" },
        { "className": ".fa-adn", "classDecr": "לוגו של ADN" },
        { "className": ".fa-align-center", "classDecr": "יישור למרכז" },
        { "className": ".fa-align-justify", "classDecr": "יישור לשני הצדדים" },
        { "className": ".fa-align-left", "classDecr": "יישור לשמאל" },
        { "className": ".fa-align-right", "classDecr": "יישור לימין" },
        { "className": ".fa-amazon", "classDecr": "לוגו של אמזון" },
        { "className": ".fa-ambulance", "classDecr": "אמבולנס" },
        { "className": ".fa-american-sign-language-interpreting", "classDecr": "פרשנות שפת הסימנים האמריקאית" },
        { "className": ".fa-anchor", "classDecr": "עוגן" },
        { "className": ".fa-android", "classDecr": "לוגו של אנדרואיד" },
        { "className": ".fa-angellist", "classDecr": "לוגו של AngelList" },
        { "className": ".fa-angle-double-down", "classDecr": "חץ כפול למטה" },
        { "className": ".fa-angle-double-left", "classDecr": "חץ כפול לשמאל" },
        { "className": ".fa-angle-double-right", "classDecr": "חץ כפול לימין" },
        { "className": ".fa-angle-double-up", "classDecr": "חץ כפול למעלה" },
        { "className": ".fa-angle-down", "classDecr": "חץ למטה" },
        { "className": ".fa-angle-left", "classDecr": "חץ לשמאל" },
        { "className": ".fa-angle-right", "classDecr": "חץ לימין" },
        { "className": ".fa-angle-up", "classDecr": "חץ למעלה" },
        { "className": ".fa-apple", "classDecr": "לוגו של אפל" },
        { "className": ".fa-archive", "classDecr": "ארכיון" },
        { "className": ".fa-area-chart", "classDecr": "תרשים שטח" },
        { "className": ".fa-arrow-circle-down", "classDecr": "חץ מעגלי למטה" },
        { "className": ".fa-arrow-circle-left", "classDecr": "חץ מעגלי לשמאל" },
        { "className": ".fa-arrow-circle-o-down", "classDecr": "חץ מעגלי למטה" },
        { "className": ".fa-arrow-circle-o-left", "classDecr": "חץ מעגלי לשמאל" },
        { "className": ".fa-arrow-circle-o-right", "classDecr": "חץ מעגלי לימין" },
        { "className": ".fa-arrow-circle-o-up", "classDecr": "חץ מעגלי למעלה" },
        { "className": ".fa-arrow-circle-right", "classDecr": "חץ מעגלי לימין" },
        { "className": ".fa-arrow-circle-up", "classDecr": "חץ מעגלי למעלה" },
        { "className": ".fa-arrow-down", "classDecr": "חץ למטה" },
        { "className": ".fa-arrow-left", "classDecr": "חץ לשמאל" },
        { "className": ".fa-arrow-right", "classDecr": "חץ לימין" },
        { "className": ".fa-arrow-up", "classDecr": "חץ למעלה" },
        { "className": ".fa-arrows", "classDecr": "חצים" },
        { "className": ".fa-arrows-alt", "classDecr": "חצים מתוחכמים" },
        { "className": ".fa-arrows-h", "classDecr": "חצים אופקיים" },
        { "className": ".fa-arrows-v", "classDecr": "חצים אנכיים" },
        { "className": ".fa-asl-interpreting", "classDecr": "פרשנות שפת הסימנים" },
        { "className": ".fa-assistive-listening-systems", "classDecr": "מערכות האזנה סיועית" },
        { "className": ".fa-asterisk", "classDecr": "כוכבית" },
        { "className": ".fa-at", "classDecr": "סימן הדואר האלקטרוני" },
        { "className": ".fa-audio-description", "classDecr": "תיאור אודיו" },
        { "className": ".fa-automobile", "classDecr": "רכב" },
        { "className": ".fa-backward", "classDecr": "אחורה" },
        { "className": ".fa-balance-scale", "classDecr": "קנה מידה" },
        { "className": ".fa-ban", "classDecr": "אסור" },
        { "className": ".fa-bandcamp", "classDecr": "Bandcamp" },
        { "className": ".fa-bank", "classDecr": "בנק" },
        { "className": ".fa-bar-chart", "classDecr": "תרשים עמודות" },
        { "className": ".fa-bar-chart-o", "classDecr": "תרשים עמודות" },
        { "className": ".fa-barcode", "classDecr": "ברקוד" },
        { "className": ".fa-bars", "classDecr": "תפריט" },
        { "className": ".fa-bath", "classDecr": "אמבטיה" },
        { "className": ".fa-bathtub", "classDecr": "אמבטיה" },
        { "className": ".fa-battery", "classDecr": "סוללה" },
        { "className": ".fa-battery-0", "classDecr": "סוללה ריקה" },
        { "className": ".fa-battery-1", "classDecr": "סוללה 25%" },
        { "className": ".fa-battery-2", "classDecr": "סוללה 50%" },
        { "className": ".fa-battery-3", "classDecr": "סוללה 75%" },
        { "className": ".fa-battery-4", "classDecr": "סוללה מלאה" },
        { "className": ".fa-battery-empty", "classDecr": "סוללה ריקה" },
        { "className": ".fa-battery-full", "classDecr": "סוללה מלאה" },
        { "className": ".fa-battery-half", "classDecr": "סוללה בחצי מילוי" },
        { "className": ".fa-battery-quarter", "classDecr": "סוללה ברבע מילוי" },
        { "className": ".fa-battery-three-quarters", "classDecr": "סוללה ב-3/4 מילוי" },
        { "className": ".fa-bed", "classDecr": "מיטה" },
        { "className": ".fa-beer", "classDecr": "בירה" },
        { "className": ".fa-behance", "classDecr": "Behance" },
        { "className": ".fa-behance-square", "classDecr": "Behance" },
        { "className": ".fa-bell", "classDecr": "פעמון" },
        { "className": ".fa-bell-o", "classDecr": "פעמון" },
        { "className": ".fa-bell-slash", "classDecr": "פעמון מכונן" },
        { "className": ".fa-bell-slash-o", "classDecr": "פעמון מכונן" },
        { "className": ".fa-bicycle", "classDecr": "אופניים" },
        { "className": ".fa-binoculars", "classDecr": "משקפת" },
        { "className": ".fa-birthday-cake", "classDecr": "עוגת יומולדת" },
        { "className": ".fa-bitbucket", "classDecr": "Bitbucket" },
        { "className": ".fa-bitbucket-square", "classDecr": "Bitbucket" },
        { "className": ".fa-bitcoin", "classDecr": "ביטקוין" },
        { "className": ".fa-black-tie", "classDecr": "עניבה שחורה" },
        { "className": ".fa-blind", "classDecr": "עיוור" },
        { "className": ".fa-bluetooth", "classDecr": "בלוטות'" },
        { "className": ".fa-bluetooth-b", "classDecr": "בלוטות' B" },
        { "className": ".fa-bold", "classDecr": "מודגש" },
        { "className": ".fa-bolt", "classDecr": "ברק" },
        { "className": ".fa-bomb", "classDecr": "פצצה" },
        { "className": ".fa-book", "classDecr": "ספר" },
        { "className": ".fa-bookmark", "classDecr": "סימניה" },
        { "className": ".fa-bookmark-o", "classDecr": "סימניה" },
        { "className": ".fa-braille", "classDecr": "ברייל" },
        { "className": ".fa-briefcase", "classDecr": "תיק עבודה" },
        { "className": ".fa-btc", "classDecr": "ביטקוין" },
        { "className": ".fa-bug", "classDecr": "חרק" },
        { "className": ".fa-building", "classDecr": "בניין" },
        { "className": ".fa-building-o", "classDecr": "בניין" },
        { "className": ".fa-bullhorn", "classDecr": "מגבר קול" },
        { "className": ".fa-bullseye", "classDecr": "מטרה" },
        { "className": ".fa-bus", "classDecr": "אוטובוס" },
        { "className": ".fa-buysellads", "classDecr": "BuySellAds" },
        { "className": ".fa-cab", "classDecr": "מונית" },
        { "className": ".fa-calculator", "classDecr": "מחשבון" },
        { "className": ".fa-calendar", "classDecr": "לוח שנה" },
        { "className": ".fa-calendar-check-o", "classDecr": "לוח שנה עם סימן סיום" },
        { "className": ".fa-calendar-minus-o", "classDecr": "לוח שנה עם מינוס" },
        { "className": ".fa-calendar-o", "classDecr": "לוח שנה" },
        { "className": ".fa-calendar-plus-o", "classDecr": "לוח שנה עם פלוס" },
        { "className": ".fa-calendar-times-o", "classDecr": "לוח שנה עם איקס" },
        { "className": ".fa-camera", "classDecr": "מצלמה" },
        { "className": ".fa-camera-retro", "classDecr": "מצלמה רטרו" },
        { "className": ".fa-car", "classDecr": "רכב" },
        { "className": ".fa-caret-down", "classDecr": "סמן למטה" },
        { "className": ".fa-caret-left", "classDecr": "סמן שמאלה" },
        { "className": ".fa-caret-right", "classDecr": "סמן ימינה" },
        { "className": ".fa-caret-square-o-down", "classDecr": "סמן מרובע למטה" },
        { "className": ".fa-caret-square-o-left", "classDecr": "סמן מרובע שמאלה" },
        { "className": ".fa-caret-square-o-right", "classDecr": "סמן מרובע ימינה" },
        { "className": ".fa-caret-square-o-up", "classDecr": "סמן מרובע למעלה" },
        { "className": ".fa-caret-up", "classDecr": "סמן למעלה" },
        { "className": ".fa-cart-arrow-down", "classDecr": "עגלה עם חץ למטה" },
        { "className": ".fa-cart-plus", "classDecr": "עגלה עם פלוס" },
        { "className": ".fa-cc", "classDecr": "כרטיס אשראי" },
        { "className": ".fa-cc-amex", "classDecr": "American Express" },
        { "className": ".fa-cc-diners-club", "classDecr": "Diners Club" },
        { "className": ".fa-cc-discover", "classDecr": "Discover" },
        { "className": ".fa-cc-jcb", "classDecr": "JCB" },
        { "className": ".fa-cc-mastercard", "classDecr": "MasterCard" },
        { "className": ".fa-cc-paypal", "classDecr": "PayPal" },
        { "className": ".fa-cc-stripe", "classDecr": "Stripe" },
        { "className": ".fa-cc-visa", "classDecr": "Visa" },
        { "className": ".fa-certificate", "classDecr": "תעודה" },
        { "className": ".fa-chain", "classDecr": "שרשרת" },
        { "className": ".fa-chain-broken", "classDecr": "שרשרת שבורה" },
        { "className": ".fa-check", "classDecr": "סימן סיום" },
        { "className": ".fa-check-circle", "classDecr": "סמן עגלגל בצורת וי" },
        { "className": ".fa-check-circle-o", "classDecr": "סמן עגלגל בצורת וי" },
        { "className": ".fa-check-square", "classDecr": "סימן סיום " },
        { "className": ".fa-check-square-o", "classDecr": "סימן סיום " },
        { "className": ".fa-chevron-circle-down", "classDecr": "חץ מעגלי למטה" },
        { "className": ".fa-chevron-circle-left", "classDecr": "חץ מעגלי שמאלה" },
        { "className": ".fa-chevron-circle-right", "classDecr": "חץ מעגלי ימינה" },
        { "className": ".fa-chevron-circle-up", "classDecr": "חץ מעגלי למעלה" },
        { "className": ".fa-chevron-left", "classDecr": "חץ שמאלה" },
        { "className": ".fa-chevron-right", "classDecr": "חץ ימינה" },
        { "className": ".fa-chevron-up", "classDecr": "חץ למעלה" },
        { "className": ".fa-child", "classDecr": "ילד" },
        { "className": ".fa-chrome", "classDecr": "Chrome" },
        { "className": ".fa-circle", "classDecr": "עגלגל" },
        { "className": ".fa-circle-o", "classDecr": "עגלגל ריק" },
        { "className": ".fa-circle-o-notch", "classDecr": "עגלגל עם חריצים" },
        { "className": ".fa-circle-thin", "classDecr": "עגלגל דק" },
        { "className": ".fa-clipboard", "classDecr": "לוח קטעים" },
        { "className": ".fa-clock-o", "classDecr": "שעון" },
        { "className": ".fa-clone", "classDecr": "שכפול" },
        { "className": ".fa-close", "classDecr": "סגירה" },
        { "className": ".fa-cloud", "classDecr": "ענן" },
        { "className": ".fa-cloud-download", "classDecr": "הורדה מהענן" },
        { "className": ".fa-cloud-upload", "classDecr": "העלאה לענן" },
        { "className": ".fa-cny", "classDecr": "יואן" },
        { "className": ".fa-code", "classDecr": "קוד" },
        { "className": ".fa-code-fork", "classDecr": "הפצלת קוד" },
        { "className": ".fa-codepen", "classDecr": "CodePen" },
        { "className": ".fa-codiepie", "classDecr": "CodiePie" },
        { "className": ".fa-coffee", "classDecr": "כוס קפה" },
        { "className": ".fa-cog", "classDecr": "גלגל שיניים" },
        { "className": ".fa-cogs", "classDecr": "גלגלי שיניים" },
        { "className": ".fa-columns", "classDecr": "טורים" },
        { "className": ".fa-comment", "classDecr": "הערה" },
        { "className": ".fa-comment-o", "classDecr": "הערה" },
        { "className": ".fa-commenting", "classDecr": "הוספת הערה" },
        { "className": ".fa-commenting-o", "classDecr": "הוספת הערה" },
        { "className": ".fa-comments", "classDecr": "הערות" },
        { "className": ".fa-comments-o", "classDecr": "הערות" },
        { "className": ".fa-compass", "classDecr": "מצפן" },
        { "className": ".fa-compress", "classDecr": "דחיסה" },
        { "className": ".fa-connectdevelop", "classDecr": "ConnectDevelop" },
        { "className": ".fa-contao", "classDecr": "Contao" },
        { "className": ".fa-copy", "classDecr": "העתקה" },
        { "className": ".fa-copyright", "classDecr": "זכויות יוצרים" },
        { "className": ".fa-creative-commons", "classDecr": "Creative Commons" },
        { "className": ".fa-credit-card", "classDecr": "כרטיס אשראי" },
        { "className": ".fa-credit-card-alt", "classDecr": "כרטיס אשראי חלופי" },
        { "className": ".fa-crop", "classDecr": "חיתוך" },
        { "className": ".fa-crosshairs", "classDecr": "סמן מטוס" },
        { "className": ".fa-css3", "classDecr": "CSS3" },
        { "className": ".fa-cube", "classDecr": "קובייה" },
        { "className": ".fa-cubes", "classDecr": "קוביות" },
        { "className": ".fa-cut", "classDecr": "גזירה" },
        { "className": ".fa-cutlery", "classDecr": "סכום" },
        { "className": ".fa-dashboard", "classDecr": "לוח בקרה" },
        { "className": ".fa-dashcube", "classDecr": "Dashcube" },
        { "className": ".fa-database", "classDecr": "מסד נתונים" },
        { "className": ".fa-deaf", "classDecr": "חירשות" },
        { "className": ".fa-deafness", "classDecr": "חירשות" },
        { "className": ".fa-dedent", "classDecr": "הזחה לאחור" },
        { "className": ".fa-delicious", "classDecr": "Delicious" },
        { "className": ".fa-desktop", "classDecr": "מחשב שולחני" },
        { "className": ".fa-deviantart", "classDecr": "DeviantArt" },
        { "className": ".fa-diamond", "classDecr": "יהלום" },
        { "className": ".fa-digg", "classDecr": "Digg" },
        { "className": ".fa-dollar", "classDecr": "דולר" },
        { "className": ".fa-dot-circle-o", "classDecr": "נקודה בתוך עגלגל" },
        { "className": ".fa-download", "classDecr": "הורדה" },
        { "className": ".fa-dribbble", "classDecr": "Dribbble" },
        { "className": ".fa-drivers-license", "classDecr": "רשיון נהיגה" },
        { "className": ".fa-drivers-license-o", "classDecr": "רשיון נהיגה" },
        { "className": ".fa-dropbox", "classDecr": "Dropbox" },
        { "className": ".fa-drupal", "classDecr": "Drupal" },
        { "className": ".fa-edge", "classDecr": "Edge" },
        { "className": ".fa-edit", "classDecr": "עריכה" },
        { "className": ".fa-eercast", "classDecr": "Eercast" },
        { "className": ".fa-eject", "classDecr": "הוצאה" },
        { "className": ".fa-ellipsis-h", "classDecr": "נקודות רשות אופקיות" },
        { "className": ".fa-ellipsis-v", "classDecr": "נקודות רשות אנכיות" },
        { "className": ".fa-empire", "classDecr": "אימפריה" },
        { "className": ".fa-envelope", "classDecr": "מעטפה" },
        { "className": ".fa-envelope-o", "classDecr": "מעטפה" },
        { "className": ".fa-envelope-open", "classDecr": "מעטפה פתוחה" },
        { "className": ".fa-envelope-open-o", "classDecr": "מעטפה פתוחה" },
        { "className": ".fa-envelope-square", "classDecr": "מעטפה מרובעת" },
        { "className": ".fa-envira", "classDecr": "Envira" },
        { "className": ".fa-eraser", "classDecr": "מחק" },
        { "className": ".fa-etsy", "classDecr": "Etsy" },
        { "className": ".fa-eur", "classDecr": "יורו" },
        { "className": ".fa-euro", "classDecr": "יורו" },
        { "className": ".fa-exchange", "classDecr": "החלפה" },
        { "className": ".fa-exclamation", "classDecr": "תרנגולת" },
        { "className": ".fa-exclamation-circle", "classDecr": "תרנגולת בתוך עגלגל" },
        { "className": ".fa-exclamation-triangle", "classDecr": "תרנגולת בתוך משולש" },
        { "className": ".fa-expand", "classDecr": "הרחבה" },
        { "className": ".fa-expeditedssl", "classDecr": "ExpeditedSSL" },
        { "className": ".fa-external-link", "classDecr": "קישור חיצוני" },
        { "className": ".fa-external-link-square", "classDecr": "קישור חיצוני מרובע" },
        { "className": ".fa-eye", "classDecr": "עין" },
        { "className": ".fa-eye-slash", "classDecr": "עין עם קו" },
        { "className": ".fa-eyedropper", "classDecr": "מנטרה" },
        { "className": ".fa-fa", "classDecr": "Font Awesome" },
        { "className": ".fa-facebook", "classDecr": "Facebook" },
        { "className": ".fa-facebook-f", "classDecr": "Facebook" },
        { "className": ".fa-facebook-official", "classDecr": "Facebook רשמי" },
        { "className": ".fa-facebook-square", "classDecr": "Facebook מרובע" },
        { "className": ".fa-fast-backward", "classDecr": "אחורה מהיר" },
        { "className": ".fa-fast-forward", "classDecr": "קדימה מהיר" },
        { "className": ".fa-fax", "classDecr": "פקס" },
        { "className": ".fa-feed", "classDecr": "הזנה" },
        { "className": ".fa-female", "classDecr": "נקבה" },
        { "className": ".fa-fighter-jet", "classDecr": "מטוס לחימה" },
        { "className": ".fa-file", "classDecr": "קובץ" },
        { "className": ".fa-file-archive-o", "classDecr": "ארכיון" },
        { "className": ".fa-file-audio-o", "classDecr": "קובץ אודיו" },
        { "className": ".fa-file-code-o", "classDecr": "קובץ קוד" },
        { "className": ".fa-file-excel-o", "classDecr": "קובץ Excel" },
        { "className": ".fa-file-image-o", "classDecr": "קובץ תמונה" },
        { "className": ".fa-file-movie-o", "classDecr": "קובץ סרט" },
        { "className": ".fa-file-o", "classDecr": "קובץ" },
        { "className": ".fa-file-pdf-o", "classDecr": "קובץ PDF" },
        { "className": ".fa-file-photo-o", "classDecr": "קובץ תמונה" },
        { "className": ".fa-file-picture-o", "classDecr": "קובץ תמונה" },
        { "className": ".fa-file-powerpoint-o", "classDecr": "קובץ PowerPoint" },
        { "className": ".fa-file-sound-o", "classDecr": "קובץ קול" },
        { "className": ".fa-file-text", "classDecr": "קובץ טקסט" },
        { "className": ".fa-file-text-o", "classDecr": "קובץ טקסט" },
        { "className": ".fa-file-video-o", "classDecr": "קובץ וידאו" },
        { "className": ".fa-file-word-o", "classDecr": "קובץ Word" },
        { "className": ".fa-file-zip-o", "classDecr": "קובץ ZIP" },
        { "className": ".fa-files-o", "classDecr": "קבצים" },
        { "className": ".fa-film", "classDecr": "סרט" },
        { "className": ".fa-filter", "classDecr": "מסנן" },
        { "className": ".fa-fire", "classDecr": "אש" },
        { "className": ".fa-fire-extinguisher", "classDecr": "כיבוי אש" },
        { "className": ".fa-firefox", "classDecr": "Firefox" },
        { "className": ".fa-first-order", "classDecr": "First Order" },
        { "className": ".fa-flag", "classDecr": "דגל" },
        { "className": ".fa-flag-checkered", "classDecr": "דגל בדפוס שחור לבן" },
        { "className": ".fa-flag-o", "classDecr": "דגל" },
        { "className": ".fa-flash", "classDecr": "בזק" },
        { "className": ".fa-flask", "classDecr": "מבחנה" },
        { "className": ".fa-flickr", "classDecr": "Flickr" },
        { "className": ".fa-floppy-o", "classDecr": "דיסקט" },
        { "className": ".fa-folder", "classDecr": "תיקייה" },
        { "className": ".fa-folder-o", "classDecr": "תיקייה" },
        { "className": ".fa-folder-open", "classDecr": "תיקייה פתוחה" },
        { "className": ".fa-folder-open-o", "classDecr": "תיקייה פתוחה" },
        { "className": ".fa-font", "classDecr": "גופן" },
        { "className": ".fa-font-awesome", "classDecr": "Font Awesome" },
        { "className": ".fa-fonticons", "classDecr": "סמלי גופן" },
        { "className": ".fa-fort-awesome", "classDecr": "Fort Awesome" },
        { "className": ".fa-forumbee", "classDecr": "Forumbee" },
        { "className": ".fa-forward", "classDecr": "קדימה" },
        { "className": ".fa-foursquare", "classDecr": "Foursquare" },
        { "className": ".fa-free-code-camp", "classDecr": "Free Code Camp" },
        { "className": ".fa-frown-o", "classDecr": "מקצוע" },
        { "className": ".fa-futbol-o", "classDecr": "כדורגל" },
        { "className": ".fa-gamepad", "classDecr": "ג'ויסטיק" },
        { "className": ".fa-gavel", "classDecr": "פטיש" },
        { "className": ".fa-gbp", "classDecr": "לישטרלינג" },
        { "className": ".fa-ge", "classDecr": "GE" },
        { "className": ".fa-gear", "classDecr": "גיר" },
        { "className": ".fa-gears", "classDecr": "גירים" },
        { "className": ".fa-genderless", "classDecr": "ללא מגדר" },
        { "className": ".fa-get-pocket", "classDecr": "Get Pocket" },
        { "className": ".fa-gg", "classDecr": "GG" },
        { "className": ".fa-gg-circle", "classDecr": "GG עם מעגל" },
        { "className": ".fa-gift", "classDecr": "מתנה" },
        { "className": ".fa-git", "classDecr": "Git" },
        { "className": ".fa-git-square", "classDecr": "Git " },
        { "className": ".fa-github", "classDecr": "GitHub" },
        { "className": ".fa-github-alt", "classDecr": "GitHub אלטרנטיבי" },
        { "className": ".fa-github-square", "classDecr": "GitHub " },
        { "className": ".fa-gitlab", "classDecr": "GitLab" },
        { "className": ".fa-gittip", "classDecr": "Gittip" },
        { "className": ".fa-glass", "classDecr": "כוס" },
        { "className": ".fa-glide", "classDecr": "Glide" },
        { "className": ".fa-glide-g", "classDecr": "Glide G" },
        { "className": ".fa-globe", "classDecr": "גלובוס" },
        { "className": ".fa-google", "classDecr": "Google" },
        { "className": ".fa-google-plus, .fa-google-plus-circle, .fa-google-plus-official, .fa-google-plus-square", "classDecr": "Google Plus" },

        { "className": ".fa-google-wallet", "classDecr": "Google Wallet" },
        { "className": ".fa-graduation-cap", "classDecr": "כובע בוגר" },
        { "className": ".fa-gratipay", "classDecr": "Gratipay" },
        { "className": ".fa-grav", "classDecr": "Grav" },
        { "className": ".fa-group", "classDecr": "קבוצה" },
        { "className": ".fa-h-square", "classDecr": "H " },
        { "className": ".fa-hacker-news", "classDecr": "חדשות ההאקרים" },
        { "className": ".fa-hand-grab-o", "classDecr": "יד מחזיקה" },
        { "className": ".fa-hand-lizard-o", "classDecr": "יד וזיקית" },
        { "className": ".fa-hand-o-down", "classDecr": "יד למטה" },
        { "className": ".fa-hand-o-left", "classDecr": "יד לשמאל" },
        { "className": ".fa-hand-o-right", "classDecr": "יד לימין" },
        { "className": ".fa-hand-o-up", "classDecr": "יד למעלה" },
        { "className": ".fa-hand-paper-o", "classDecr": "יד ונייר" },
        { "className": ".fa-hand-peace-o", "classDecr": "יד שלום" },
        { "className": ".fa-hand-pointer-o", "classDecr": "יד מצביעה" },
        { "className": ".fa-hand-rock-o", "classDecr": "יד אבן" },
        { "className": ".fa-hand-scissors-o", "classDecr": "יד מספריים" },
        { "className": ".fa-hand-spock-o", "classDecr": "יד ספוק" },
        { "className": ".fa-hand-stop-o", "classDecr": "יד עצור" },
        { "className": ".fa-handshake-o", "classDecr": "לחיצת יד" },
        { "className": ".fa-hard-of-hearing", "classDecr": "קשי שמיעה" },
        { "className": ".fa-hashtag", "classDecr": "השטג" },
        { "className": ".fa-hdd-o", "classDecr": "כונן קשיח" },
        { "className": ".fa-header", "classDecr": "כותרת" },
        { "className": ".fa-headphones", "classDecr": "אוזניות" },
        { "className": ".fa-heart", "classDecr": "לב" },
        { "className": ".fa-heart-o", "classDecr": "לב מתולתל" },
        { "className": ".fa-heartbeat", "classDecr": "דפיקת לב" },
        { "className": ".fa-history", "classDecr": "היסטוריה" },
        { "className": ".fa-home", "classDecr": "בית" },
        { "className": ".fa-hospital-o", "classDecr": "בית חולים" },
        { "className": ".fa-hotel", "classDecr": "מלון" },

        { "className": ".fa-hourglass, .fa-hourglass-1, .fa-hourglass-2, .fa-hourglass-3", "classDecr": "שעון חול" },


        { "className": ".fa-hourglass-end", "classDecr": "סוף שעון החול" },
        { "className": ".fa-hourglass-half", "classDecr": "שעון חול חצי" },
        { "className": ".fa-hourglass-o", "classDecr": "שעון חול מתולתל" },
        { "className": ".fa-hourglass-start", "classDecr": "התחלת שעון חול" },
        { "className": ".fa-houzz", "classDecr": "Houzz" },
        { "className": ".fa-html5", "classDecr": "HTML5" },
        { "className": ".fa-i-cursor", "classDecr": "סמן" },
        { "className": ".fa-id-badge", "classDecr": "תג זיהוי" },
        { "className": ".fa-id-card", "classDecr": "כרטיס זיהוי" },
        { "className": ".fa-id-card-o", "classDecr": "כרטיס זיהוי מתולתל" },
        { "className": ".fa-ils", "classDecr": "שח" },
        { "className": ".fa-image", "classDecr": "תמונה" },
        { "className": ".fa-imdb", "classDecr": "IMDb" },
        { "className": ".fa-inbox", "classDecr": "תיבת דואר נכנס" },
        { "className": ".fa-indent", "classDecr": "הזחה" },
        { "className": ".fa-industry", "classDecr": "תעשייה" },
        { "className": ".fa-info", "classDecr": "מידע" },
        { "className": ".fa-info-circle", "classDecr": "מידע במעגל" },
        { "className": ".fa-inr", "classDecr": "רופי הודית" },
        { "className": ".fa-instagram", "classDecr": "Instagram" },
        { "className": ".fa-institution", "classDecr": "מוסד" },
        { "className": ".fa-internet-explorer", "classDecr": "Internet Explorer" },
        { "className": ".fa-intersex", "classDecr": "אינטרסקס" },
        { "className": ".fa-ioxhost", "classDecr": "ioxhost" },
        { "className": ".fa-italic", "classDecr": "נטוי" },
        { "className": ".fa-joomla", "classDecr": "Joomla" },
        { "className": ".fa-jpy", "classDecr": "ין יפני" },
        { "className": ".fa-jsfiddle", "classDecr": "JSFiddle" },
        { "className": ".fa-key", "classDecr": "מפתח" },
        { "className": ".fa-keyboard-o", "classDecr": "מקלדת" },
        { "className": ".fa-krw", "classDecr": "וון דרום קוריאני" },
        { "className": ".fa-language", "classDecr": "שפה" },
        { "className": ".fa-laptop", "classDecr": "מחשב נייד" },
        { "className": ".fa-lastfm", "classDecr": "LastFM" },
        { "className": ".fa-lastfm-square", "classDecr": "LastFM " },
        { "className": ".fa-leaf", "classDecr": "עלה" },
        { "className": ".fa-leanpub", "classDecr": "Leanpub" },
        { "className": ".fa-legal", "classDecr": "משפטי" },
        { "className": ".fa-lemon-o", "classDecr": "לימון" },
        { "className": ".fa-level-down", "classDecr": "הורדת רמה" },
        { "className": ".fa-level-up", "classDecr": "שיפור רמה" },
        { "className": ".fa-life-bouy", "classDecr": "ציוד הצלה" },
        { "className": ".fa-life-buoy", "classDecr": "ציוד הצלה" },
        { "className": ".fa-life-ring", "classDecr": "ציוד הצלה" },
        { "className": ".fa-life-saver", "classDecr": "מציל חיים" },
        { "className": ".fa-lightbulb-o", "classDecr": "נורה" },
        { "className": ".fa-line-chart", "classDecr": "גרף קווי" },
        { "className": ".fa-link", "classDecr": "קישור" },
        { "className": ".fa-linkedin, .fa-linkedin-square", "classDecr": "LinkedIn" },
        { "className": ".fa-linode", "classDecr": "Linode" },
        { "className": ".fa-linux", "classDecr": "Linux" },
        { "className": ".fa-list", "classDecr": "רשימה" },
        { "className": ".fa-list-alt", "classDecr": "רשימה אלטרנטיבית" },
        { "className": ".fa-list-ol", "classDecr": "רשימה ממוספרת" },
        { "className": ".fa-list-ul", "classDecr": "רשימה לא ממוספרת" },
        { "className": ".fa-location-arrow", "classDecr": "חץ מיקום" },
        { "className": ".fa-lock", "classDecr": "נעילה" },
        { "className": ".fa-long-arrow-down", "classDecr": "חץ ארוך למטה" },
        { "className": ".fa-long-arrow-left", "classDecr": "חץ ארוך לשמאל" },
        { "className": ".fa-long-arrow-right", "classDecr": "חץ ארוך לימין" },
        { "className": ".fa-long-arrow-up", "classDecr": "חץ ארוך למעלה" },
        { "className": ".fa-low-vision", "classDecr": "ראייה גרועה" },
        { "className": ".fa-magic", "classDecr": "קסם" },
        { "className": ".fa-magnet", "classDecr": "מגנט" },
        { "className": ".fa-mail-forward", "classDecr": "העברת דואר" },
        { "className": ".fa-mail-reply", "classDecr": "תגובה לדואר" },
        { "className": ".fa-mail-reply-all", "classDecr": "תגובה לכולם" },
        { "className": ".fa-male", "classDecr": "זכר" },
        { "className": ".fa-map", "classDecr": "מפה" },
        { "className": ".fa-map-marker", "classDecr": "סמן מפה" },
        { "className": ".fa-map-o", "classDecr": "מפה מתולתלת" },
        { "className": ".fa-map-pin", "classDecr": "סיכה למפה" },
        { "className": ".fa-map-signs", "classDecr": "שלטי מפה" },
        { "className": ".fa-mars", "classDecr": "מאדים" },
        { "className": ".fa-mars-double", "classDecr": "מאדים כפול" },
        { "className": ".fa-mars-stroke", "classDecr": "קו מאדים" },
        { "className": ".fa-mars-stroke-h", "classDecr": "קו מאדים אופקי" },
        { "className": ".fa-mars-stroke-v", "classDecr": "קו מאדים אנכי" },
        { "className": ".fa-maxcdn", "classDecr": "MaxCDN" },
        { "className": ".fa-meanpath", "classDecr": "Meanpath" },
        { "className": ".fa-medium", "classDecr": "Medium" },
        { "className": ".fa-medkit", "classDecr": "ערכת ראשונות" },
        { "className": ".fa-meetup", "classDecr": "Meetup" },
        { "className": ".fa-meh-o", "classDecr": "אדיש" },
        { "className": ".fa-mercury", "classDecr": "חומר" },
        { "className": ".fa-microchip", "classDecr": "מיקרושבב" },
        { "className": ".fa-microphone", "classDecr": "מיקרופון" },
        { "className": ".fa-microphone-slash", "classDecr": "מיקרופון מושבת" },

        { "className": ".fa-minus, .fa-minus-circle, .fa-minus-square, .fa-minus-square-o", "classDecr": "מינוס" },


        { "className": ".fa-mixcloud", "classDecr": "Mixcloud" },
        { "className": ".fa-mobile", "classDecr": "נייד" },
        { "className": ".fa-mobile-phone", "classDecr": "טלפון נייד" },
        { "className": ".fa-modx", "classDecr": "MODx" },
        { "className": ".fa-money", "classDecr": "כסף" },
        { "className": ".fa-moon-o", "classDecr": "ירח" },
        { "className": ".fa-mortar-board", "classDecr": "כובע בוגר" },
        { "className": ".fa-motorcycle", "classDecr": "אופנוע" },
        { "className": ".fa-mouse-pointer", "classDecr": "מצביע העכבר" },
        { "className": ".fa-music", "classDecr": "מוזיקה" },
        { "className": ".fa-navicon", "classDecr": "תפריט" },
        { "className": ".fa-neuter", "classDecr": "נייטרלי" },
        { "className": ".fa-newspaper-o", "classDecr": "עיתון" },
        { "className": ".fa-object-group", "classDecr": "קבוצת אובייקטים" },
        { "className": ".fa-object-ungroup", "classDecr": "ביטול קיבוץ אובייקטים" },
        { "className": ".fa-odnoklassniki", "classDecr": "Odnoklassniki" },
        { "className": ".fa-odnoklassniki-square", "classDecr": "Odnoklassniki " },
        { "className": ".fa-opencart", "classDecr": "OpenCart" },
        { "className": ".fa-openid", "classDecr": "OpenID" },
        { "className": ".fa-opera", "classDecr": "Opera" },
        { "className": ".fa-optin-monster", "classDecr": "Optin Monster" },
        { "className": ".fa-outdent", "classDecr": "הזחה החוצה" },
        { "className": ".fa-pagelines", "classDecr": "PageLines" },
        { "className": ".fa-paint-brush", "classDecr": "מברשת צביעה" },
        { "className": ".fa-paper-plane", "classDecr": "מטוס נייר" },
        { "className": ".fa-paper-plane-o", "classDecr": "מטוס נייר חסר" },
        { "className": ".fa-paperclip", "classDecr": "אטב" },
        { "className": ".fa-paragraph", "classDecr": "פסקה" },
        { "className": ".fa-paste", "classDecr": "הדבקה" },
        { "className": ".fa-pause", "classDecr": "השהייה" },
        { "className": ".fa-pause-circle", "classDecr": "עיגול השהייה" },
        { "className": ".fa-pause-circle-o", "classDecr": "עיגול השהייה חסר" },
        { "className": ".fa-paw", "classDecr": "כף רגל" },
        { "className": ".fa-paypal", "classDecr": "PayPal" },
        { "className": ".fa-pencil", "classDecr": "עט" },
        { "className": ".fa-pencil-square", "classDecr": "מרובע עט" },
        { "className": ".fa-pencil-square-o", "classDecr": "מרובע עט חסר" },
        { "className": ".fa-percent", "classDecr": "אחוז" },
        { "className": ".fa-phone", "classDecr": "טלפון" },
        { "className": ".fa-phone-square", "classDecr": "טלפון " },
        { "className": ".fa-photo", "classDecr": "תמונה" },
        { "className": ".fa-picture-o", "classDecr": "תמונה" },
        { "className": ".fa-pie-chart", "classDecr": "תרשים פאי" },
        { "className": ".fa-pied-piper", "classDecr": "Pied Piper" },
        { "className": ".fa-pied-piper-alt", "classDecr": "Pied Piper Alt" },
        { "className": ".fa-pied-piper-pp", "classDecr": "Pied Piper PP" },
        { "className": ".fa-pinterest", "classDecr": "Pinterest" },
        { "className": ".fa-pinterest-p", "classDecr": "Pinterest P" },
        { "className": ".fa-pinterest-square", "classDecr": "Pinterest " },
        { "className": ".fa-plane", "classDecr": "מטוס" },
        { "className": ".fa-play", "classDecr": "השמע" },
        { "className": ".fa-play-circle", "classDecr": "עיגול השמע" },
        { "className": ".fa-play-circle-o", "classDecr": "עיגול השמע חסר" },
        { "className": ".fa-plug", "classDecr": "תקע" },
        { "className": ".fa-plus", "classDecr": "פלוס" },
        { "className": ".fa-plus-circle", "classDecr": "עיגול פלוס" },
        { "className": ".fa-plus-square", "classDecr": "מרובע פלוס" },
        { "className": ".fa-plus-square-o", "classDecr": "מרובע פלוס חסר" },
        { "className": ".fa-podcast", "classDecr": "פודקאסט" },
        { "className": ".fa-power-off", "classDecr": "כיבוי" },
        { "className": ".fa-print", "classDecr": "הדפסה" },
        { "className": ".fa-product-hunt", "classDecr": "Product Hunt" },
        { "className": ".fa-puzzle-piece", "classDecr": "חתיכת פאזל" },
        { "className": ".fa-qq", "classDecr": "QQ" },
        { "className": ".fa-qrcode", "classDecr": "קוד QR" },
        { "className": ".fa-question", "classDecr": "שאלה" },
        { "className": ".fa-question-circle", "classDecr": "עיגול שאלה" },
        { "className": ".fa-question-circle-o", "classDecr": "עיגול שאלה חסר" },
        { "className": ".fa-quora", "classDecr": "Quora" },
        { "className": ".fa-quote-left", "classDecr": "ציטוט שמאל" },
        { "className": ".fa-quote-right", "classDecr": "ציטוט ימין" },
        { "className": ".fa-ra", "classDecr": "RA" },
        { "className": ".fa-random", "classDecr": "אקראי" },
        { "className": ".fa-ravelry", "classDecr": "Ravelry" },
        { "className": ".fa-rebel", "classDecr": "Rebel" },
        { "className": ".fa-recycle", "classDecr": "מחזור" },
        { "className": ".fa-reddit", "classDecr": "Reddit" },
        { "className": ".fa-reddit-alien", "classDecr": "Reddit Alien" },
        { "className": ".fa-reddit-square", "classDecr": "Reddit " },
        { "className": ".fa-refresh", "classDecr": "רענון" },
        { "className": ".fa-registered", "classDecr": "רשום" },
        { "className": ".fa-remove", "classDecr": "הסר" },
        { "className": ".fa-renren", "classDecr": "Renren" },
        { "className": ".fa-reorder", "classDecr": "סידור מחודש" },
        { "className": ".fa-repeat", "classDecr": "חזרה" },
        { "className": ".fa-reply", "classDecr": "תגובה" },
        { "className": ".fa-reply-all", "classDecr": "תגובה לכולם" },
        { "className": ".fa-resistance", "classDecr": "הת resistance" },
        { "className": ".fa-retweet", "classDecr": "Retweet" },
        { "className": ".fa-rmb", "classDecr": "RMB" },
        { "className": ".fa-road", "classDecr": "דרך" },
        { "className": ".fa-rocket", "classDecr": "רקטה" },
        { "className": ".fa-rotate-left", "classDecr": "הסתובב לשמאל" },
        { "className": ".fa-rotate-right", "classDecr": "הסתובב לימין" },
        { "className": ".fa-rouble", "classDecr": "רובל" },
        { "className": ".fa-rss", "classDecr": "RSS" },
        { "className": ".fa-rss-square", "classDecr": "RSS " },
        { "className": ".fa-rub", "classDecr": "רובל" },
        { "className": ".fa-ruble", "classDecr": "רובל" },
        { "className": ".fa-rupee", "classDecr": "רופי" },
        { "className": ".fa-s15", "classDecr": "S15" },
        { "className": ".fa-safari", "classDecr": "Safari" },
        { "className": ".fa-save", "classDecr": "שמירה" },
        { "className": ".fa-scissors", "classDecr": "מספריים" },
        { "className": ".fa-scribd", "classDecr": "Scribd" },
        { "className": ".fa-search", "classDecr": "חיפוש" },
        { "className": ".fa-search-minus", "classDecr": "חיפוש מופחת" },
        { "className": ".fa-search-plus", "classDecr": "חיפוש מוגבר" },
        { "className": ".fa-sellsy", "classDecr": "Sellsy" },
        { "className": ".fa-send", "classDecr": "שלח" },
        { "className": ".fa-send-o", "classDecr": "שלח חסר" },
        { "className": ".fa-server", "classDecr": "שרת" },
        { "className": ".fa-share", "classDecr": "שיתוף" },
        { "className": ".fa-share-alt", "classDecr": "שיתוף אלט" },
        { "className": ".fa-share-alt-square", "classDecr": "שיתוף אלט " },
        { "className": ".fa-share-square", "classDecr": "שיתוף " },
        { "className": ".fa-share-square-o", "classDecr": "שיתוף  חסר" },
        { "className": ".fa-shekel", "classDecr": "שח" },
        { "className": ".fa-sheqel", "classDecr": "שח" },
        { "className": ".fa-shield", "classDecr": "מגן" },
        { "className": ".fa-ship", "classDecr": "ספינה" },
        { "className": ".fa-shirtsinbulk", "classDecr": "Shirtsinbulk" },
        { "className": ".fa-shopping-bag", "classDecr": "תיק קניות" },
        { "className": ".fa-shopping-basket", "classDecr": "סל קניות" },
        { "className": ".fa-shopping-cart,icon-cart", "classDecr": "עגלת קניות" },
        { "className": ".fa-shower", "classDecr": "מקלחת" },
        { "className": ".fa-sign-in", "classDecr": "התחבר" },
        { "className": ".fa-sign-language", "classDecr": "שפת הסימנים" },
        { "className": ".fa-sign-out", "classDecr": "התנתק" },
        { "className": ".fa-signal", "classDecr": "אות" },
        { "className": ".fa-signing", "classDecr": "חתימה" },
        { "className": ".fa-simplybuilt", "classDecr": "SimplyBuilt" },
        { "className": ".fa-sitemap", "classDecr": "מפת אתר" },
        { "className": ".fa-skyatlas", "classDecr": "SkyAtlas" },
        { "className": ".fa-skype", "classDecr": "Skype" },
        { "className": ".fa-slack", "classDecr": "Slack" },
        { "className": ".fa-sliders", "classDecr": "מחוונים" },
        { "className": ".fa-slideshare", "classDecr": "SlideShare" },
        { "className": ".fa-smile-o", "classDecr": "חיוך" },
        { "className": ".fa-snapchat", "classDecr": "Snapchat" },
        { "className": ".fa-snapchat-ghost", "classDecr": "Snapchat רוח" },
        { "className": ".fa-snapchat-square", "classDecr": "Snapchat " },
        { "className": ".fa-snowflake-o", "classDecr": "שלגיה" },
        { "className": ".fa-soccer-ball-o", "classDecr": "כדור כדורגל" },
        { "className": ".fa-sort", "classDecr": "מיון" },
        { "className": ".fa-sort-alpha-asc", "classDecr": "מיון אלפביתי עולה" },
        { "className": ".fa-sort-alpha-desc", "classDecr": "מיון אלפביתי יורד" },
        { "className": ".fa-sort-amount-asc", "classDecr": "מיון כמות עולה" },
        { "className": ".fa-sort-amount-desc", "classDecr": "מיון כמות יורד" },
        { "className": ".fa-sort-asc", "classDecr": "מיון עולה" },
        { "className": ".fa-sort-desc", "classDecr": "מיון יורד" },
        { "className": ".fa-sort-down", "classDecr": "מיון למטה" },
        { "className": ".fa-sort-numeric-asc", "classDecr": "מיון מספרי עולה" },
        { "className": ".fa-sort-numeric-desc", "classDecr": "מיון מספרי יורד" },
        { "className": ".fa-sort-up", "classDecr": "מיון למעלה" },
        { "className": ".fa-soundcloud", "classDecr": "SoundCloud" },
        { "className": ".fa-space-shuttle", "classDecr": "מעבורת חלל" },
        { "className": ".fa-spinner", "classDecr": "ספינר" },
        { "className": ".fa-spoon", "classDecr": "כף" },
        { "className": ".fa-spotify", "classDecr": "Spotify" },
        { "className": ".fa-square", "classDecr": "מרובע" },
        { "className": ".fa-square-o", "classDecr": "מרובע חסר" },
        { "className": ".fa-stack-exchange", "classDecr": "Stack Exchange" },
        { "className": ".fa-stack-overflow", "classDecr": "Stack Overflow" },
        { "className": ".fa-star", "classDecr": "כוכב" },
        { "className": ".fa-star-half", "classDecr": "כוכב חצי" },
        { "className": ".fa-star-half-empty", "classDecr": "כוכב חצי ריק" },
        { "className": ".fa-star-half-full", "classDecr": "כוכב חצי מלא" },
        { "className": ".fa-star-half-o", "classDecr": "כוכב חצי חסר" },
        { "className": ".fa-star-o", "classDecr": "כוכב חסר" },
        { "className": ".fa-steam", "classDecr": "Steam" },
        { "className": ".fa-steam-square", "classDecr": "Steam " },
        { "className": ".fa-step-backward", "classDecr": "צעד אחורה" },
        { "className": ".fa-step-forward", "classDecr": "צעד קדימה" },
        { "className": ".fa-stethoscope", "classDecr": "סטטוסקופ" },
        { "className": ".fa-sticky-note", "classDecr": "פתק שייח" },
        { "className": ".fa-sticky-note-o", "classDecr": "פתק שייח חסר" },
        { "className": ".fa-stop", "classDecr": "עצור" },
        { "className": ".fa-stop-circle", "classDecr": "עצור בעיגול" },
        { "className": ".fa-stop-circle-o", "classDecr": "עצור בעיגול חסר" },
        { "className": ".fa-street-view", "classDecr": "תצוגת רחוב" },
        { "className": ".fa-strikethrough", "classDecr": "קו חוצה" },
        { "className": ".fa-stumbleupon", "classDecr": "StumbleUpon" },
        { "className": ".fa-stumbleupon-circle", "classDecr": "StumbleUpon בעיגול" },
        { "className": ".fa-subscript", "classDecr": "כתובית תחתונה" },
        { "className": ".fa-subway", "classDecr": "רכבת תחתית" },
        { "className": ".fa-suitcase", "classDecr": "מזוודה" },
        { "className": ".fa-sun-o", "classDecr": "שמש" },
        { "className": ".fa-superpowers", "classDecr": "כוחות על" },
        { "className": ".fa-superscript", "classDecr": "כתובית עליונה" },
        { "className": ".fa-support", "classDecr": "תמיכה" },
        { "className": ".fa-table", "classDecr": "שולחן" },
        { "className": ".fa-tablet", "classDecr": "טאבלט" },
        { "className": ".fa-tachometer", "classDecr": "מד מהירות" },
        { "className": ".fa-tag", "classDecr": "תג" },
        { "className": ".fa-tags", "classDecr": "תגיות" },
        { "className": ".fa-tasks", "classDecr": "משימות" },
        { "className": ".fa-taxi", "classDecr": "מונית" },
        { "className": ".fa-telegram", "classDecr": "Telegram" },
        { "className": ".fa-television", "classDecr": "טלוויזיה" },
        { "className": ".fa-tencent-weibo", "classDecr": "Tencent Weibo" },
        { "className": ".fa-terminal", "classDecr": "טרמינל" },
        { "className": ".fa-text-height", "classDecr": "גובה הטקסט" },
        { "className": ".fa-text-width", "classDecr": "רוחב הטקסט" },
        { "className": ".fa-th", "classDecr": "רשת" },
        { "className": ".fa-th-large", "classDecr": "רשת גדולה" },
        { "className": ".fa-th-list", "classDecr": "רשימת רשת" },
        { "className": ".fa-themeisle", "classDecr": "ThemeIsle" },
        { "className": ".fa-thermometer", "classDecr": "חום" },
        { "className": ".fa-thermometer-0", "classDecr": "חום 0" },
        { "className": ".fa-thermometer-1", "classDecr": "חום 1" },
        { "className": ".fa-thermometer-2", "classDecr": "חום 2" },
        { "className": ".fa-thermometer-3", "classDecr": "חום 3" },
        { "className": ".fa-thermometer-4", "classDecr": "חום 4" },
        { "className": ".fa-thermometer-empty", "classDecr": "חום ריק" },
        { "className": ".fa-thermometer-full", "classDecr": "חום מלא" },
        { "className": ".fa-thermometer-half", "classDecr": "חום חצי" },
        { "className": ".fa-thermometer-quarter", "classDecr": "חום רבע" },
        { "className": ".fa-thermometer-three-quarters", "classDecr": "חום שלושת הרבעים" },
        { "className": ".fa-thumb-tack", "classDecr": "מזכרת" },
        { "className": ".fa-thumbs-down", "classDecr": "אגודל למטה" },
        { "className": ".fa-thumbs-o-down", "classDecr": "אגודל למטה חסר" },
        { "className": ".fa-thumbs-o-up", "classDecr": "אגודל למעלה חסר" },
        { "className": ".fa-thumbs-up", "classDecr": "אגודל למעלה" },
        { "className": ".fa-ticket", "classDecr": "כרטיס" },
        { "className": ".fa-times", "classDecr": "סגור" },
        { "className": ".fa-times-circle", "classDecr": "סגור בעיגול" },
        { "className": ".fa-times-circle-o", "classDecr": "סגור בעיגול חסר" },
        { "className": ".fa-times-rectangle", "classDecr": "סגור במלבן" },
        { "className": ".fa-times-rectangle-o", "classDecr": "סגור במלבן חסר" },
        { "className": ".fa-tint", "classDecr": "טינט" },
        { "className": ".fa-toggle-down", "classDecr": "מתג למטה" },
        { "className": ".fa-toggle-left", "classDecr": "מתג שמאלה" },
        { "className": ".fa-toggle-off", "classDecr": "מתג כבוי" },
        { "className": ".fa-toggle-on", "classDecr": "מתג פעיל" },
        { "className": ".fa-toggle-right", "classDecr": "מתג ימינה" },
        { "className": ".fa-toggle-up", "classDecr": "מתג למעלה" },
        { "className": ".fa-trademark", "classDecr": "סימן מסחר" },
        { "className": ".fa-train", "classDecr": "רכבת" },
        { "className": ".fa-transgender", "classDecr": "טרנסג'נדר" },
        { "className": ".fa-transgender-alt", "classDecr": "טרנסג'נדר" },
        { "className": ".fa-trash", "classDecr": "זבל" },
        { "className": ".fa-trash-o", "classDecr": "זבל חסר" },
        { "className": ".fa-tree", "classDecr": "עץ" },
        { "className": ".fa-trello", "classDecr": "Trello" },
        { "className": ".fa-tripadvisor", "classDecr": "TripAdvisor" },
        { "className": ".fa-trophy", "classDecr": "גביע" },
        { "className": ".fa-truck", "classDecr": "משאית" },
        { "className": ".fa-try", "classDecr": "לירה טורקית" },
        { "className": ".fa-tty", "classDecr": "TTY" },
        { "className": ".fa-tumblr", "classDecr": "Tumblr" },
        { "className": ".fa-tumblr-square", "classDecr": "Tumblr " },
        { "className": ".fa-turkish-lira", "classDecr": "לירה טורקית" },
        { "className": ".fa-tv", "classDecr": "טלוויזיה" },
        { "className": ".fa-twitch", "classDecr": "Twitch" },
        { "className": ".fa-twitter", "classDecr": "Twitter" },
        { "className": ".fa-twitter-square", "classDecr": "Twitter " },
        { "className": ".fa-umbrella", "classDecr": "מטריה" },
        { "className": ".fa-underline", "classDecr": "קו תחתון" },
        { "className": ".fa-undo", "classDecr": "ביטול" },
        { "className": ".fa-universal-access", "classDecr": "גישה אוניברסלית" },
        { "className": ".fa-university", "classDecr": "אוניברסיטה" },
        { "className": ".fa-unlink", "classDecr": "ביטול הקישור" },
        { "className": ".fa-unlock", "classDecr": "פתח" },
        { "className": ".fa-unlock-alt", "classDecr": "פתח אלט" },
        { "className": ".fa-unsorted", "classDecr": "לא ממוין" },
        { "className": ".fa-upload", "classDecr": "העלאה" },
        { "className": ".fa-usb", "classDecr": "USB" },
        { "className": ".fa-usd", "classDecr": "דולר" },
        { "className": ".fa-user", "classDecr": "משתמש" },
        { "className": ".fa-user-circle", "classDecr": "משתמש" },
        { "className": ".fa-user-circle-o", "classDecr": " משתמש חסר" },
        { "className": ".fa-user-md", "classDecr": "רופא" },
        { "className": ".fa-user-o", "classDecr": "משתמש חסר" },
        { "className": ".fa-user-plus", "classDecr": "הוספת משתמש" },
        { "className": ".fa-user-secret", "classDecr": "משתמש סודי" },
        { "className": ".fa-user-times", "classDecr": "הסרת משתמש" },
        { "className": ".fa-users", "classDecr": "משתמשים" },
        { "className": ".fa-vcard", "classDecr": "כרטיס אישי" },
        { "className": ".fa-vcard-o", "classDecr": "כרטיס אישי חסר" },
        { "className": ".fa-venus", "classDecr": "ונוס" },
        { "className": ".fa-venus-double", "classDecr": "ונוס כפול" },
        { "className": ".fa-venus-mars", "classDecr": "ונוס ומאדים" },
        { "className": ".fa-viacoin", "classDecr": "Viacoin" },
        { "className": ".fa-viadeo", "classDecr": "Viadeo" },
        { "className": ".fa-viadeo-square", "classDecr": "Viadeo " },
        { "className": ".fa-video-camera", "classDecr": "מצלמת וידאו" },
        { "className": ".fa-vimeo", "classDecr": "Vimeo" },
        { "className": ".fa-vimeo-square", "classDecr": "Vimeo " },
        { "className": ".fa-vine", "classDecr": "Vine" },
        { "className": ".icon-account", "classDecr": "אזור אישי" },
        { "className": ".fa-vk", "classDecr": "VK" },
];

allDecrs.forEach(function (obj) {

        document.querySelectorAll(obj['className']).forEach(function (icon) {
                icon.addAttr({ 'aria-label': obj['classDecr'], 'role': 'img' })
        })

})
				UA('.jet-listing-grid__item').forEach(function(elm){
    if(elm.querySelector('img')?.getAttribute('alt') == ''){
        elm.querySelector('img')?.setAttribute('alt',  elm.getText().trim())
    }
});


UA('.jet-listing-grid__item').forEach(function(elm, index){
	elm.querySelector('img')?.getAttribute('alt') == '' ? elm.querySelector('img')?.setAttribute('alt', elm.getText()):'';
});

	
UA('.jet-filters-pagination__item').forEach(function(elm, index){
    elm.setAttribute('tabindex', '0');
    elm.setAttribute('role', 'link');
	elm.setAttribute('aria-label', 'page number ' + (index+1));
});
	
UA1('.jet-filters-pagination__item.prev-next.next')?.setAttribute('aria-label', 'Next page');
UA1('.jet-filters-pagination__item.prev-next.next')?.setAttribute('role', 'link');
UA1('.jet-filters-pagination__item.prev-next.next')?.setAttribute('tabindex', '0');

UA1('.jet-filters-pagination__item.prev-next.prev')?.setAttribute('aria-label', 'previous page');
UA1('.jet-filters-pagination__item.prev-next.prev')?.setAttribute('role', 'link');
UA1('.jet-filters-pagination__item.prev-next.prev')?.setAttribute('tabindex', '0');

UA('.jet-filters-pagination__item').forEach(function(elm, index){
	elm.setAttribute('aria-label', 'page number ' + (index+1));
	elm.addEventListener('keyup', function(e){
		if(e.key == 'Enter') this.click();
	})
});


UA('.jet-active-filter__remove').forEach(function(elm){
	elm.addAttr({'tabindex': '0', 'aria-label':'הסר', 'role':'button'});
});

jetSelectors = '.jet-slick-dots > li';
UA(jetSelectors).forEach(function(elm){
	elm.addAttr({'role':'button', 'tabindex':0, 'aria-label': 'לשקופית מספר ' + elm.innerText});//aria-current
	if(elm.isIt('[class*="active"]')) elm.addAttr({'aria-current':'true'});
	elm.addEventListener('click', function(e){
		let that = this;
		setTimeout(function(){
			UA(jetSelectors).forEach(function(innerElm){
				innerElm.removeAttribute('aria-current');
			});
			that.addAttr({'aria-current':'true'});
		},750);
	});
});
				if(!andiUA.runOnce){
	andiUA.runOnce = true;
	andiUA.readWebsiteErrorsAndmessages = function( errorsClass){
		let errorsClassArr = errorsClass.split(',')
    	let timeToRun = 2500;
		let timeOut = -1;
		let runAfterDomChange = function(){
			setTimeout(function(){
				checkErrs();
			},1000);
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
  
  
    	let intervel = -1;
    	function checkErrs(){
			document.querySelector('#uaerrors')?.remove();
			for(let i; i < errorsClassArr.length;i++){
				let that = errorsClassArr[i];
				let newCss = `${that}, ${that} [andiallelmwithtext]`;
			}
			
    		let Label = '';
    		document.querySelectorAll(errorsClass).forEach(function(err){
				
    			if(!andiUA.TUAifElmIsHidden2(err) && err.innerText  && Label.indexOf(err.innerText.trim() ) == -1 ){
    			    Label += ' ' + err.innerText;
    			} 
    		});
			
    		if(Label != ''){
				document.querySelector('#uaerrors')?.remove()
    			document.body.appendHtml('<span id="uaerrors" class="sr-only" role="alert">'+Label+'</span>');
				return true;
    		}
    		return false;
			
    	}
    	   
        document.addEventListener('keydown', function(event) {
    		if(event.key == 'Enter'){
				setTimeout(function(){
					checkErrs();
				},1000);
    		}
    	});
    	
    	document.addEventListener('click', function(event) {
			setTimeout(function(){
				checkErrs();
			},1000);
    	});
		
		
		let haveErrs = checkErrs();
		if(haveErrs){
			document.querySelector('#uaerrors2')?.remove();
			document.body.appendHtml('<span id="uaerrors2" class="sr-only" role="alert"> לחץ ALT  +  W כדי לעבור לשגיאה הראשונה  </span>');
		}
       
    	document.addEventListener('keydown', function(event) {
              if (event.altKey && event.key === 'w') {
                document.querySelector(errorsClass).addAttr({'tabindex':'0'});
                document.querySelector(errorsClass).focus();
              }
        });
    }
    
        andiUA.readWebsiteErrorsAndmessages( 'body [class*="err"],body [class*="message"],body [class*="msg"],[class*="alert"],  body [class*="thank"], body .wpcf7-response-output, body .status.success');



}
				function getHoverCSSRules() {
    let allRules = [];
    let inaccessibleSheets = [];
    for (let sheet of document.styleSheets) {
        try {
            let rules = sheet.cssRules;
            for (let rule of rules) {
                const cleanedRule = rule.cssText.replace(/\/\*[\s\S]*?\*\//g, '').trim();
                if (cleanedRule) allRules.push(cleanedRule);
            }
        } catch (e) {
            //console.error("Cannot read styles from a different domain due to CORS policy", e);
            inaccessibleSheets.push(sheet.href ? sheet.href : 'Inline style');
        }
    }
    return { allRules, inaccessibleSheets };
}



function addTabindex(cssSelector){
	if(endWithHoverRegex.test(cssSelector)){
		let tempCssSelector = cssSelector.replaceAll(':not(:hover)', '');
		tempCssSelector = tempCssSelector.replaceAll(':hover', '');
		document.querySelectorAll(  tempCssSelector).forEach(function(elm){
			elm.setAttribute('tabindex', 0);
		});
	}
	if(inMiddleHoverRegex.test(cssSelector)){		
		let tempCssSelector = cssSelector.replaceAll(':not(:hover)', '');
		tempCssSelector = tempCssSelector.replaceAll(':has(:hover)', ''); 		
		tempCssSelector = tempCssSelector.split(':hover')[0];
		document.querySelectorAll( tempCssSelector ).forEach(function(elm){
			elm.setAttribute('tabindex', 0);
		});
	}
}

function splitCSSSelectors(selectorString) {
    selectorString = selectorString.replace(/\/\*.*?\*\//g, '');
    const regex = /\s*,\s*(?![^()]*\))(?![^[]*\])(?![^{}]*\})(?![^"']*["'][^"']*["'])/g;
    return selectorString.split(regex).map(s => s.trim());
}

function checkIfNeedTabindex(cssSelector){	
	if(cssSelector.indexOf(',') > -1){
		let cssSelectorArr = splitCSSSelectors(cssSelector);
		for(let i = 0; i < cssSelectorArr.length; i++){
			addTabindex(cssSelectorArr[i]);
		}		
	} else {
		addTabindex(cssSelector);
	}	
}

function makeHoverWithoutFocusAccessible(cssRole){
	let thisCss = cssRole
	let cssStylesWithoutSelectors = thisCss.split('{');
	let thisCssArr = cssStylesWithoutSelectors[0].trim();
	if(cssStylesWithoutSelectors[1].indexOf('}') == -1) cssStylesWithoutSelectors[1] += '}';
	let temp = '';		
	if(endWithHoverRegex.test(thisCssArr)){
		checkIfNeedTabindex(thisCssArr)
		temp += `${thisCssArr.replaceAll(':hover', ':focus')}  { ${cssStylesWithoutSelectors[1]} `;
	} else if(inMiddleHoverRegex.test(thisCssArr)){
		checkIfNeedTabindex(thisCssArr)
		temp += `${thisCssArr.replaceAll(':hover', ':focus')} { ${cssStylesWithoutSelectors[1]} `;
		temp += `${thisCssArr.replaceAll(':hover', ':focus-within')} { ${cssStylesWithoutSelectors[1]} `;
	}
	return temp;
}


let onlyHoverRoles = [];
let withFocusRoles = [];
let endWithHoverRegex = /:hover$/;
let inMiddleHoverRegex = /.+:hover.+/;
let newAccessibleCssRules = '';
let result = getHoverCSSRules();
let cssFocusReturn = '';

for(let i = 0; i < result.allRules.length; i++){
	let thisCss = result.allRules[i];
	if( thisCss.indexOf('@media print') == -1){
		let madia_at = '';
		if( thisCss.indexOf('@media') == -1){
			if(thisCss.indexOf(':hover') > -1 && thisCss.indexOf(':focus') == -1){
				cssFocusReturn += makeHoverWithoutFocusAccessible(thisCss);
			}
		} else {
			madia_at = thisCss.match(/@media[^{]*\{/g);
			let madiaArr = thisCss.split(/@media[^{]*\{/g);
			madiaArr = madiaArr[1].replace(/}([^}]*)$/, '$1');
			madiaArr = madiaArr.replace(/\n/g, '');
			let tempCssMediaRoles = madiaArr.split('}');
			let tempMediaRolesCSS = madia_at[0];
			for(let s = 0; s < tempCssMediaRoles.length; s++){
				if(tempCssMediaRoles[s].indexOf(':hover') > -1 && tempCssMediaRoles[s].indexOf(':focus') == -1){
					tempMediaRolesCSS += makeHoverWithoutFocusAccessible(tempCssMediaRoles[s]);					
				}
			}
			tempMediaRolesCSS += '}'
			if(tempMediaRolesCSS.indexOf(':focus')>-1){
				cssFocusReturn += tempMediaRolesCSS;
			}
		}
	}
}

let hostElement = document.createElement('style');
hostElement.id = 'ua_auto_css';
hostElement.innerHTML = cssFocusReturn;
document.body.appendChild(hostElement);
			}
			andiUA.loadmore();
			andiUA.getScript(andiUA.TUAjsPath + "andiFuncions2.js", andiUA.emptyFn);
			
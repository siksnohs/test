eventOn("click", '#lastLink', function (e) {
  UA1("body").setAttribute("tabindex", "0");
  UA1("body").focus();
  UA1("body").scrollTop = 0;
  UA1("body").setAttribute("tabindex", "");
});

andiUA.generalCSS = function () {
  UA1("html").appendHtml(`
    <style>
      .sr-only,
      .TUAUAskipArea,
      .ua_skip_to_main,
      .ua_skip_to_footer,
      .UA2skipAreaAutomate {
        font-family: arial !important; 
        position: absolute !important; 
        overflow: hidden !important; 
        clip: rect(0 0 0 0) !important; 
        height: 1px !important; 
        width: 1px !important; 
        margin: -1px !important; 
        z-index: 9999999988 !important; 
        border: 0 !important;  
        background-color: #000 !important; 
        color: #fff !important; 
        font-size: 16px !important; 
        display: block;
      }

      .ua_skip_to_main:focus,
      .ua_skip_to_footer:focus,
      .TUAUAskipArea:focus,
      .TUAUAskipArea:focus-within,
      .UA2skipAreaAutomate:focus {
        clip: auto !important; 
        height: auto !important; 
        width: auto !important; 
        overflow: visible !important; 
        margin: 0px !important;  
        padding: 0px 10px !important;
      } 
    }
    </style>
  `);
}

andiUA.massegeForScreenReader = function (str) {
  UA1("body").appendHtml('<span class="massegeForScreenReader" role="alert">' + str + '</span>');
  setTimeout(function () {
    UA(".massegeForScreenReader").forEach(function (elm) {
      elm.remove();
    });
  }, 450);
};

andiUA.TUAhidearea = function () {
  andiUA.TUAsettingFn.TUAhidearea.forEach(function (item, j) {
    TUApausehidearea = function (area, index, firstImg, desc, thisPouseBtn, TUAslidesContainer) {
      let slidesContainer = UA1(TUAslidesContainer);
      if (thisPouseBtn.getAttribute('aria-pressed') == `false`) {
        thisPouseBtn.setAttribute('src', `${andiUA.TUAjsPath}imgs/hideeye.png`);
        thisPouseBtn.setAttribute('aria-pressed', `true`);
        thisPouseBtn.style.backgroundColor = '#fff';

        let TUAparentWidth = slidesContainer.offsetWidth;
        let TUAparentHeight = slidesContainer.offsetHeight;
        slidesContainer.querySelectorAll(`*:not(.uapauseSliderImg):not([id*="TUAhidearea"])`).forEach(function (TUAelm, i) {
          TUAelm.addCss({ "opacity": "0" });
          TUAelm.addAttr({ "tabindex": "-1", "aria-hidden": "true" });
        });
        if (!UA1('#TUAwrapTUAhidearea' + index)) {
          slidesContainer.appendHtml('<div id="TUAwrapTUAhidearea' + index + '" tabindex="0" style="overflow:hidden;width:' + TUAparentWidth + "px;height:(" + TUAparentHeight + ')px;"><span id="TUAsliderYouCanScrollUpDown" role="tooltip">' + andiUA.TUAlanguageText.bbb435 + '</span><div class="innerhideareaPause' + index + '" ></div></div>');
          UA1("#TUAwrapTUAhidearea" + index).addCss({ "background-color": andiUA.TUAsettingFn.TUAparam.backgroundColor, "opacity": "1", "z-index": "99998", "height": TUAparentHeight + 20 + "px", "width": TUAparentWidth + "px", "position": "absolute", "top": "0", "overflow": "hidden" });
          UA1(".innerhideareaPause" + index).addCss({ "background-color": andiUA.TUAsettingFn.TUAparam.backgroundColor, "width": TUAparentWidth + 20, "height": TUAparentHeight, "z-index": "99999989", "position": "relative", "top": "0", "overflow-y": "scroll", "overflow-x": "hidden" });
        }
        if (!UA1('.innerhideareaPause' + index + ' img')) {
          UA1(".innerhideareaPause" + index).appendHtml('<img style="width:300px; height:' + TUAparentHeight + 'px ; margin:' + 0 + 'px   calc(50% - 150px)" src="' + `${andiUA.TUAjsPath}imgs/hideeye.png` + '" alt="">');
          UA1(".innerhideareaPause" + index).addAttr({ "tabindex": "0" });
          UA1(".innerhideareaPause" + index).focus();
        }
        andiUA.massegeForScreenReader(andiUA.TUAlanguageText.bbb435);
      } else {
        thisPouseBtn.setAttribute('aria-pressed', `false`);
        thisPouseBtn.setAttribute('src', andiUA.TUAgetImgPath.stop);
        thisPouseBtn.style.backgroundColor = '';
        if (UA1("#TUAwrapTUAhidearea" + index)) UA1("#TUAwrapTUAhidearea" + index).removeElm();
        area.querySelectorAll("*").forEach(function (TUAelm, index) {
          TUAelm.addCss({ "opacity": "" });
          TUAelm.addAttr({ "tabindex": "", "aria-hidden": "false" });
        });
      }
      slidesContainer = null;
    };

    let arrOfArea = UA(item.ANDIVARappndTo);
    arrOfArea.forEach(function (area, index) {
      index = j + '' + index;

      if (!area.isIt("html,body")) {
        let desc = item.hideareadesc;
        area.addCss({ "position": "relative" });
        area.addAttr({ "role": "region", "aria-label": andiUA.TUAlanguageText.bbb444 });
        if (!UA1("#openhideareaPause" + index)) {

          area.prependHtml('<div style="top:' + item.ANDIVARpositionFromTop + "px;" + item.ANDIVARleftOrRight + ":" + item.ANDIVARpositionFromSide + 'px;width: 20px;height: 20px; position: absolute;z-index: 99999;" id="TUAhidearea' + index + '" >\
            <img role="button" tabindex="0" aria-pressed="false" class="uapauseSliderImg" src="' + andiUA.TUAgetImgPath.stop + ' " id="openhideareaPause' + index + '" title="' + andiUA.TUAlanguageText.bbb1751 + " " + desc + '" alt="' + andiUA.TUAlanguageText.bbb1751 +
            " " + desc + '"></div>');
          UA1("#openhideareaPause" + index).addEventListener("click", function (e) {
            TUApausehidearea(area, index, andiUA.TUAjsPath + "hideeye.png", desc, this, item.hideareaContainer);
          });

          UA1("#openhideareaPause" + index).addEventListener("keydown", function (e) {
            if (e.key == 'Enter') this.click();
          });

        }
      }
    });
    arrOfArea = null;
  });
};



andiUA.TUAareaLInksNavigetion = function (TUAareaLinks) {
  UA(".TUAareaHeading, .TUAheadingSkipArea").forEach(function (elm) {
    elm.remove();
  });
  if (TUAareaLinks) {
    for (let TUAi = 0; TUAi < TUAareaLinks.length; TUAi++) {
      if (!UA1('[name="TUAskipLink' + TUAi + '"]')) {

        UA1(TUAareaLinks[TUAi].TUAappand_to)?.prependHtml('<a class="TUAUAskipArea" name="TUAskipLink' + TUAi + '"  tabindex="0" >' + TUAareaLinks[TUAi].TUAtext_link + ",<br />" + andiUA.TUAlanguageText.TUApressEnterToSkipArea + "</a>");
      }
      if (TUAareaLinks[TUAi].TUAlisMainContent && TUAareaLinks[TUAi].TUAappand_to && (UA1(TUAareaLinks[TUAi].TUAappand_to)?.getText().trim() != "")) {
        if (!UA1('#TUAfirstLink')) {
          UA1("body").prependHtml('<a id="TUAfirstLink" class="TUAskipToMainContent" name="TUAfirstLink" href="#UAMainContent" tabindex="0" > ' + andiUA.TUAlanguageText.TUAfirstSkiplink + "</a>");
          UA1(TUAareaLinks[TUAi].TUAappand_to)?.addAttr({ "role": "main" });
        }
      }
    }
    let TUApageTitleTag = UA1("title")?.getText() || '';
    if (!UA1('#lastLink'))
      UA1("body").appendHtml('<a id="lastLink" class="TUAUAskipArea" name="lastLink" href="#TUAfirstLink" tabindex="0" >' + andiUA.TUAlanguageText.TUAlastSkiplinkEnd + TUApageTitleTag + " " + andiUA.TUAlanguageText.TUAlastSkiplink + " </a>");

    UA('.TUAskipToMainContent').forEach(function (elm) {
      elm.addEventListener('click', function (event) {
        event.preventDefault();
        let TUAelm = UA1('[role="main"]');
        if (TUAelm && UA('[role="main"]').length == 1) {
          UA1(TUAelm).setAttribute("tabindex", "0")
          UA1(TUAelm).focus();
        }
      })
    });


    UA(".TUAUAskipArea").forEach(function (elm, TUAi) {
      let TUAarr = UA(".TUAUAskipArea");
      if (TUAarr.length - 1 == TUAi) {
        elm.addAttr({ "href": "#TUAfirstLink", "name": "TUAskipLink" + TUAi });
      } else {
        elm.addAttr({ "href": "#TUAskipLink" + (TUAi + 1), "name": "TUAskipLink" + TUAi, "id": "TUAskipLink" + TUAi });
      }
    });

    UA(".TUAUAskipArea").forEach(function (elm) {
      elm.addEventListener('click', function (event) {
        event.preventDefault();
        let TUAarrUAskipArea = Array.from(UA(".TUAUAskipArea"));
        let andiVanum = TUAarrUAskipArea.indexOf(this);
        let offSetTop = (TUAarrUAskipArea[andiVanum + 1])?.scrollTop;
        if (andiVanum + 1 == TUAarrUAskipArea.length) {
          UA1("#TUAfirstLink")?.setAttribute("tabindex", "0");
          UA1("#TUAfirstLink")?.focus();
          if (UA1("#TUAfirstLink")) UA1("#TUAfirstLink").scrollTop = (0);
        } else {
          (TUAarrUAskipArea[andiVanum + 1]).setAttribute("tabindex", "0");
          (TUAarrUAskipArea[andiVanum + 1]).focus();
          (TUAarrUAskipArea[andiVanum + 1]).scrollTop = (offSetTop + 50);
        }
      })
    });


    UA(".TUAUAskipArea").forEach(function (elm) {
      elm.addEventListener('focus', function (e) {
        this.parentElement.addCss({ "font-size": "16px" });
      });
      elm.addEventListener('blur', function (e) {
        this.parentElement.addCss({ "font-size": "" });
      });
    });

    UA(".TUAheadingSkipArea, .TUAareaHeading").forEach(function (elm) {
      elm.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {
          this.querySelector("a").click();
        }
      })
    });
  }
};


andiUA.TUAfixTitle = function (TUAaccessibleTitleForKeyboardUser) {
  if (TUAaccessibleTitleForKeyboardUser != undefined && TUAaccessibleTitleForKeyboardUser) {
    if (!UA1("#TUAandiInputdiscrp")) {
      UA1("head").appendHtml('<style id="TUAandiInputdiscrp">body [andiallelmwithtext][title]{display: inline-block;}body [andiallelmwithtext][title]:focus:after{content: "  ("  attr(title) ") ";padding: 5px 15px;z-index: 98;}body [andiallelmwithtext][title]:focus:before{content: "";z-index: 99;}</style>');
    }
    UA("[andiallelmwithtext][title]").forEach(function (elm) {
      elm.setAttribute("tabIndex", "0");
    });
  }
};




andiUA.TUAcreateButton = function (TUAbuttuns) {
  if (TUAbuttuns.length) {

    (TUAbuttuns).forEach(function (elm, TUAj) {
      andiUA.TUAsetButtons(elm);
    });
  }
};
andiUA.TUAsetButtons = function (TUAelm) {
  if (UA(TUAelm.TUAelm))

    UA(TUAelm.TUAelm).forEach(function (elm, TUAi) {
      if (!elm.hasAttribute('andialreadysetasbtn')) {

        elm.addAttr({ "role": "button", "andialreadysetasbtn": "true", "tabindex": "0" });
        if (parseInt(TUAelm.expanded)) {
          elm.addAttr({ "aria-expanded": 'false', 'UAexpanded': '1' });
        }

        if (TUAelm.TUAtext.trim().length) {
          elm.addAttr({ "aria-label": TUAelm.TUAtext });
        } else if (elm.innerText) {
          elm.addAttr({ "aria-label": elm.getText() });
        }
        elm.addCss({ "cursor": "pointer" });

        elm.addEventListener('click', function () {
          if (TUAelm.TUAmassegeAfter !== "") {
            UA1("body").appendHtml('<span class="TUAmassegeForScreenReader" role="alert" aria-label="' + TUAelm.TUAmassegeAfter + '"></span>');
            setTimeout(function () {
              UA(".TUAmassegeForScreenReader").forEach(function (elm) {
                elm.remove();
              });
            }, 500);
          }

          if (TUAelm.TUAfocusAfterClick != "") {
            setTimeout(function () {
              UA1(TUAelm.TUAfocusAfterClick)?.setAttribute("tabindex", "0");
              UA1(TUAelm.TUAfocusAfterClick)?.focus();
            }, 950);
          }
        });
        elm.addEventListener('keydown', function () {

        });
      } else if (elm.getAttribute("aria-label")?.trim() == '') {
        if (TUAelm.TUAtext.trim().length) {
          elm.addAttr({ "aria-label": TUAelm.TUAtext });
        } else if (elm.innerText && elm.innerText.trim() != '') {
          elm.addAttr({ "aria-label": elm.getText() });
        }
      }
    });
};




andiUA.TUAaddAltTextForBackgroundImages = function (TUABackgroundImages) {
  if (TUABackgroundImages) {
    (TUABackgroundImages).forEach(function (elm, TUAi) {
      UA(elm.TUAelm).each(function (elm2, TUAj) {
        let TUAurl = elm2.getCss("background-image");
        TUAurl = TUAurl.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
        if (elm.TUAurlImage == TUAurl) {
          elm2.addAttr({ "role": "img", "aria-label": elm.TUAtext });
        }
      });
      //}
    });
  }
};

andiUA.TUAsetFormPreparAccessibility = function () {
  UA("input").forEach(function (elm) {
    let TUAcorrentElmType = elm.getAttr("type");
    if (!TUAcorrentElmType) {
      elm.setAttribute("type", "text");
    }
  });

  UA('input[type="range"]').forEach(function (elm) {
    let TUAidInput = elm.getAttr("id"), TUAmin = elm.getAttr("TUAmin"), TUAmax = elm.getAttr("TUAmax"), addition = andiUA.TUAfileLang['min is'] + ": " + TUAmin + andiUA.TUAfileLang['max is'] + ": " + TUAmax + ")";
    UA1("label[for= ' " + TUAidInput + " ' ]")?.appendHtml(addition);
    elm.setAttribute("aria-valuemin", TUAmin);
    elm.setAttribute("aria-valuemax", TUAmax);
    elm.setAttribute("role", "slider");
  });

  eventOn("change", '[type="range"]', function (e) {
    let TUAnewv = this.value;
    this.setAttribute("aria-valuenow", TUAnewv);
    UA1("#TUAcorruentValue")?.remove();
    this.afterHtml(`<span class="TUAandiCssReser sr-only" id="TUAcorruentValue">${andiUA.TUAfileLang['The corruent value is']}: ${TUAnewv}</span>`);
  });

  UA("select.chosen-select").forEach(function (elm, TUAi) {
    let w = elm.nextElementSibling?.querySelector("a").twidth();
    let h = elm.nextElementSibling?.querySelector("a").theight();
    let pL = 0;
    let pT = 0;
    if (UA1('[id="TUAselectStyles' + TUAi + '"]')) {
      UA1("head").appendHtml('<style id="TUAselectStyles' + TUAi + '">select.chosen-select,select.select2-offscreen{clip: rect(0 0 0 0) !important;\twidth: 1px !important;z-index: 9999 !important;height: 1px !important;\tborder: 0 !important;margin: 0 !important; padding: 0 !important;display: inline-block !important;overflow: hidden !important;position: absolute !important;outline: 0 !important;left: 0px !important;top: 0px !important;}select.chosen-select:focus ,select.select2-offscreen:focus { clip: auto !important;width: ' +
        w + "px !important;  height: " + h + "px !important;border: 0 !important; margin: 0 !important;padding: 0 !important; overflow: hidden !important;\tposition: absolute !important; outline: 0 !important; left: " + pL + "px !important; top: " + pT + "px !important;}</style>");

      elm.addEventListener('change', function () {
        if (this?.nextElementSibling?.querySelector("a > span"))
          this.nextElementSibling.querySelector("a > span").innerText = this.getText();
      });
    }
  });
};


andiUA.TUAaddLinksTextForBlinds = function (TUAlinkText) {


  if (TUAlinkText !== undefined && TUAlinkText.length > 0) {
    let linksList = UA('[onclick^="location"],[onclick^="window.open"]');
    for (let TUAi = 0; TUAi < linksList.length; TUAi++) {
      linksList[TUAi].setAttribute("role", "link");
      linksList[TUAi].setAttribute("tabindex", "0");
    }
    for (let TUAj = 0; TUAj < TUAlinkText.length; TUAj++) {
      let linksList = UA(TUAlinkText[TUAj].TUAelm);
      if (TUAlinkText[TUAj].TUAelm && linksList) {

        for (let TUAi = 0; TUAi < linksList.length; TUAi++) {
          let link = linksList[TUAi];
          let TUAcorrentElmTitle = link.getAttribute("title");
          if (TUAcorrentElmTitle && TUAcorrentElmTitle.length > 1) {
            link.setAttribute("aria-label", TUAcorrentElmTitle + ", " + TUAlinkText[TUAj].TUAtext);
            link.setAttribute("role", "link");
            link.setAttribute("tabindex", "0");
            link.setAttribute("andilinkText", "true");
          } else {
            link.setAttribute("aria-label", TUAlinkText[TUAj].TUAtext);
            link.setAttribute("role", "link");
            link.setAttribute("tabindex", "0");
            link.setAttribute("andilinkText", "true");
          }
        }
      }
    }
  }
};
andiUA.TUAaddAltByImgUrl = function (TUAaltForImgs) {
  TUAaltForImgs.forEach(function (elm) {
    UA(elm.TUAaltElm).forEach(function (elm2) {
      if (!elm2.isIt("[andiAlt]")) {
        if (elm2.isIt("img") || elm2.isIt("area")) {
          elm2.addAttr({ "alt": elm.TUAaltText, "andiAlt": "true" });
        } else {
          elm2.addAttr({ "role": "img", "aria-label": elm.TUAaltText, "andiAlt": "true" });
        }
      }
    });
  })
};



andiUA.TUAsetAsHeader = function (TUAsetAsHeader) {
  TUAsetAsHeader.forEach(function (elm) {
    UA(elm.TUAelmHeader).forEach(function (elm2) {
      elm2.addAttr({ "role": "heading", "aria-level": elm.TUAlevelHeader });
    });
  });

};



andiUA.TUAfixUserImgEmptyAlt = function () {
  UA(andiUA.TUAsettingFn.TUAallImg).forEach(function (el, i) {
    if (!el.hasAttribute("andiruns")) {
      if (el.getAttribute("src") !== null) {
        let alt1 = el.getAttribute("src").TUAfilename();
        let alt2 = el.getAttribute("src").TUAfilename2();
      }
      if (!el.getAttribute("alt") || el.getAttribute("alt") == alt1 || el.getAttribute("alt") == alt2) {
        el.setAttribute("alt", "");
      }
    }
  });
};




andiUA.TUAdefinedArticle = function (TUAparam) {
  if (TUAparam) {

    TUAparam.forEach(function (elm) {
      let TUAallHeading = andiUA.TUAsettingFn.TUAreadMoreHeadign;
      UA(elm.TUAitem).forEach(function (elm2) {
        elm2.addAttr({ "UArole": "article" });
        andiUA.setAutoTitleTOreadMore(elm2);
        andiUA.setAutoAltToImg(TUAallHeading, elm2);
        let headingText = elm2.querySelector('h1,h2,h3,h4,h5,h6,[role="heading"]')?.getText() || '';
        UA('a').forEach(function (link) {
          if (headingText && link.getText().trim() == '' && !link.hasAttribute('aria-label') && !link.querySelector('*'))
            link.setAttribute('aria-label', headingText)
        })
      });
    });
  }
};


andiUA.setAutoTitleTOreadMore = function (TUAthisArea) {
  if (!TUAthisArea.isIt("[andialreadysetasreadmorelink]")) {
    let TUAtext = TUAthisArea.querySelector(andiUA.TUAsettingFn.TUAreadMoreHeadign)?.getText();
    if (TUAtext) {
      let allHeading = TUAthisArea.querySelectorAll(andiUA.TUAsettingFn.TUAreadMoreHeadign)
      let titleText = allHeading[allHeading.length - 1]?.getAttr("title");
      let lastBtn = TUAthisArea.querySelectorAll(andiUA.TUAsettingFn.TUAreadMoreLastLinkOrBtn);
      let lastLink = TUAthisArea.querySelectorAll('a');
      if (titleText && lastBtn.length) {
        lastBtn[lastBtn.length - 1]?.setAttribute("title", titleText + " " + TUAtext);
      } else if (lastLink.length) {
        lastLink[lastLink.length - 1]?.setAttribute("title", TUAtext);
      }
    }

  }
};



andiUA.setAutoAltToImg = function (TUAallHeading, TUAthisArea) {
  let TUAtimgInArea = TUAthisArea.querySelectorAll("img");
  TUAtimgInArea.forEach(function (elm, TUAi) {
    if (!elm.isIt("[readMoreImgAlt]")) {
      if (elm.getAttr("alt") == undefined || elm.getAttr("alt") == "") {
        let TUAimageNum = TUAi;
        let TUAHeadingInArea = elm.closest('[UArole="article"]').querySelectorAll(TUAallHeading);
        if (TUAHeadingInArea != undefined && TUAHeadingInArea.length > 0) {
          elm.addAttr({ "alt": TUAHeadingInArea[0]?.getText() });
        } else {
          TUAHeadingInArea = TUAthisArea.querySelectorAll(TUAallHeading);
          let TUAthisImg = elm;
          let TUAallElmsInArea = TUAthisArea.querySelectorAll("*");
          let TUAthisIngIndex = Array.from(TUAallElmsInArea).indexOf(TUAthisImg);
          let TUAweHaveHeading = false;
          for (let TUAi = TUAthisIngIndex; TUAi >= 0; TUAi--) {
            if (TUAallElmsInArea[TUAi].isIt(TUAallHeading)) {
              TUAthisImg.addAttr({ "readMoreImgAlt": "true", "alt": (TUAallElmsInArea[TUAi]).getText() + " " + andiUA.TUAlanguageText.TUAtimgInAreaImgNo + " " + (1 + TUAimageNum) });
              TUAweHaveHeading = true;
              break;
            }
          }
          if (!TUAweHaveHeading) {
            let TUAHeadingInArea = TUAthisArea.querySelectorAll(TUAallHeading);
            if (TUAHeadingInArea != undefined && TUAHeadingInArea.length > 0) {
              elm.addAttr({ "readMoreImgAlt": "true", "alt": TUAHeadingInArea[0].getText() });
            } else {
              TUAHeadingInArea = TUAthisArea.querySelectorAll(TUAallHeading);
              let TUAthisImg = elm;
              let TUAallElmsInArea = TUAthisArea.querySelectorAll("*");
              let TUAthisIngIndex = Array.from(TUAallElmsInArea).indexOf(TUAthisImg);
              let TUAweHaveHeading = false;
              for (let TUAi = TUAthisIngIndex; TUAi < TUAallElmsInArea.length; TUAi++) {
                if (TUAallElmsInArea[TUAi].isIt(TUAallHeading)) {
                  TUAthisImg.addAttr({ "readMoreImgAlt": "true", "alt": (TUAallElmsInArea[TUAi]).getText() + " " + andiUA.TUAlanguageText.TUAtimgInAreaImgNo + " " + (1 + TUAimageNum) });
                  TUAweHaveHeading = true;
                  break;
                }
              }
            }
          }
        }
      }
    }
  });
};



andiUA.focusElmBeforeOpenPopup = null;
andiUA.activeLightBoxAccessibility = function (TUAwrapArea, TUAUserLightBoxCloseBtn) {
  if (!TUAwrapArea.hasAttribute('nopopup')) {
    setTimeout(function () {
      UA1(TUAUserLightBoxCloseBtn)?.addAttr({ "tabindex": "0", "role": "button", "aria-label": andiUA.TUAfileLang.TUAcloseLightBoxBtnAlt });
      setTimeout(function () {
        if (!TUAwrapArea.querySelector(".andiFirstItemInPopUp")) {
          TUAwrapArea.setAttribute("role", "dialog");
          TUAwrapArea.setAttribute("ua_open_popup", "true");
          TUAwrapArea.prependHtml('<div class="andiFirstItemInPopUp" tabindex="0"  aria-label="' + andiUA.TUAlanguageText.TUAfirstItemInLightBox + '"></div>');
          TUAwrapArea.appendHtml('<div class="andiLastItemInPopUp" tabindex="0" aria-label="' + andiUA.TUAlanguageText.TUAexitlightBoxMassegeForScreenreader + '"></div>');
          TUAwrapArea.querySelector(".andiFirstItemInPopUp").focus();
        }
      }, 200);

      function handleClick() {
        setTimeout(function () {
          UA(".andiFirstItemInPopUp, .andiLastItemInPopUp").forEach(function (elm) {
            elm.remove();
          });
          TUAwrapArea.removeAttribute("ua_open_popup");
          andiUA.focusElmBeforeOpenPopup?.focus();
        }, 700);
      }

      UA1(TUAUserLightBoxCloseBtn)?.addEventListener('click', function () {
        handleClick();
      });

      UA1(TUAUserLightBoxCloseBtn)?.addEventListener('keydown', function (e) {
        if (e.key == 'Enter') this.click();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key == 'Escape' && UA1(".andiFirstItemInPopUp")) {
          handleClick();
        }
      });
    }, 1200);
  }
};




andiUA.lightBoxSetTimeOut = -1
andiUA.TUAlightboxAccessebility = function (TUAfUserLightBox) {
  if (TUAfUserLightBox) {
    let checkIfLightBoxOpen = function () {
      if (UA1('[ua_open_popup]')) {
        return '';
      } else {
        clearTimeout(andiUA.lightBoxSetTimeOut)
        andiUA.lightBoxSetTimeOut = setTimeout(function () {
          for (let TUAi = 0; TUAi < TUAfUserLightBox.length; TUAi++) {
            let TUAwrapArea = TUAfUserLightBox[TUAi].TUAwrapArea;
            let TUAUserLightBoxCloseBtn = TUAfUserLightBox[TUAi].TUAUserLightBoxCloseBtn;
            let isOpen = false;
            UA(TUAwrapArea).forEach(function (thatPopup) {
              if (thatPopup.TUAisVisible() && !UA1('[ua_open_popup]') && !thatPopup.isIt('[ua_header]') && !thatPopup.closest('[ua_header] ul')) {
                andiUA.focusElmBeforeOpenPopup = document.activeElement;
                if (!thatPopup.hasAttribute('nopopup')) {
                  andiUA.activeLightBoxAccessibility(thatPopup, TUAUserLightBoxCloseBtn);
                  isOpen = true;
                }

              }
            });
            if (isOpen) {
              clearTimeout(andiUA.lightBoxSetTimeOut);
              break;
            }
          }
        }, 750);
      }

    };

    eventOn("focusin", ".andiLastItemInPopUp", function (e) {
      UA1(".andiFirstItemInPopUp").focus();
    });

    setTimeout(function () {
      if (!document.querySelector("[ua_open_popup]")) {
        checkIfLightBoxOpen();
      }
    }, 500);
    let timer = null;

    window.addEventListener("scroll", function () {
      if (document.querySelector("[ua_open_popup]")) return;
      if (timer !== null) clearTimeout(timer);
      timer = setTimeout(function () {
        if (!document.querySelector("[ua_open_popup]")) {
          checkIfLightBoxOpen();
        }
      }, 1000);
    }, false);

    document.addEventListener('click', function (e) {
      if (!document.querySelector("[ua_open_popup]")) {
        checkIfLightBoxOpen();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key == 'Enter' || e.key == 'Tab' || e.key == ' ') {
        if (!document.querySelector("[ua_open_popup]")) {
          checkIfLightBoxOpen();
        }
      }
    });
  }
};


andiUA.TUAsiteDesciption = function (TUAsiteDesciption) {
  if (TUAsiteDesciption != undefined && TUAsiteDesciption.length > 0) {
    if (!sessionStorage.TUAsiteDesciption) {
      setTimeout(function () {
        let TUAlanguageText = andiUA.TUAcheckLanguage();
        if (TUAlanguageText == "he") {
          andiUA.TUAscreenReaderMassege(TUAsiteDesciption.he.TUAsiteDesciption);
        }
        if (TUAlanguageText == "en") {
          andiUA.TUAscreenReaderMassege(TUAsiteDesciption.en.TUAsiteDesciption);
        }
        sessionStorage.TUAsiteDesciption = 1;
      }, TUAsiteDesciption.TUAsiteDesciptionTimer);
    }
  }
};


andiUA.TUAfixTable = function () {
  UA("table").forEach(function (el) {
    if (el.closest("[role='main']") === null && el.closest("#helpVCTable") === null) {
      el.setAttribute("role", "presentation");
    }
  });
  UA('thead td').forEach(function (elm) {
    elm.addAttr({ "role": "columnheader" });
  });
  if (UA1('table:has(:not(>thead)) tbody tr:first-child td'))
    UA('table:has(:not(>thead)) tbody tr:first-child td').forEach(function (elm) {
      elm.setAttribute("role", "columnheader");
    });
};





andiUA.TUAhideElmsINPCMode = function (TUAhideElmsINPCMode) {
  if (TUAhideElmsINPCMode.length) {

    UA(TUAhideElmsINPCMode).forEach(function (elm) {
      let TUAMobileResolution = elm.TUAMobileResolution;
      let TUAwraphideElmsINPCMode = elm.TUAwraphideElmsINPCMode;
      if (TUAMobileResolution) {
        UA(TUAwraphideElmsINPCMode).forEach(function (elm2) {
          let widthWindow = window.innerWidth;
          if (TUAMobileResolution >= widthWindow) {
            UA(elm2).querySelectorAll("*").forEach(function (elm3) {
              elm3.addAttr({ "tabindex": "-1", "aria-hidden": "true" });
            });
          }
        });
      }
    });
  }
};

andiUA.TUABreadcrumbs = function (TUABreadcrumbs) {
  if (TUABreadcrumbs.length) {
    UA(TUABreadcrumbs).forEach(function (elm, TUAi) {
      UA1(elm.TUAwrap).querySelectorAll('a').forEach(function (elm2, index) {
        if (index == 0) {
          elm2.addAttr({ "role": "link", "aria-label": andiUA.TUAfileLang['You are on the home page'] });
        } else {
          elm2.addAttr({ "role": "link", "aria-label": andiUA.TUAfileLang['In Category'] + " " + elm2.getText() });
        }
      });
    });
  }
};



andiUA.TUAforceTitleToInput = function (TUAforceTitleToInputsetting) {
  if (TUAforceTitleToInputsetting.length) {
    (TUAforceTitleToInputsetting).forEach(function (elm) {
      if (isSelectorValid(elm.TUAelm))
        UA(elm.TUAelm).forEach(function (elm2) {
          elm2.addAttr({ "aria-label": elm.TUAelmTitle, "TUAandiInputdiscrp": elm.TUAelmTitle });
        });
    });
  }
};




eventOn("click", "#andiStopAllLabel", function (e) {
  if (!this.thasClass("TUAhandyItemOn")) {
    UA1("#andiStopAllLabel").taddClass("TUAhandyItemOn");
    UA1("#andiStopAll").taddClass("TUAhandyItemOn");
    localStorage.setItem("andiStopAll", "true");
    UA1('body').taddClass('andiStopAll');
    andiStopAllFns();
  } else {
    if (confirm(andiUA.TUAfileLang.TUApageWillReload)) {
      localStorage.removeItem("andiStopAll");
      location.reload();
    }
  }
});
document.addEventListener('hover', function (e) {
  if (localStorage.getItem("andiStopAll") == "true") {
    andiStopAllFns();
  }
});




andiUA.fixBreadcrumb = function () {
  let wrapBreadCrumbArr = andiUA.findPassebleContainer(["BreadCrumb", "breadcrams", "breadcrumb", "crumbs", "crumb"]);
  let createText = function (arrOfElms) {
    let tempText = "";
    for (let i = arrOfElms.length - 1; i >= 0; i--) {
      if (arrOfElms[i].innerText.trim().length > 2) {
        let elmText = arrOfElms[i].innerText.trim();
        if (tempText.indexOf(andiUA.TUAlanguageText.TUABreadcrumb1) == -1) {
          arrOfElms[i].setAttribute("aria-current", "page");
          tempText = andiUA.TUAlanguageText.TUABreadcrumb1 + elmText + " ";
        } else {
          if (arrOfElms[i].tagName == "A") {
            arrOfElms[i].setAttribute("aria-label", andiUA.TUAlanguageText.TUABreadcrumb2 + elmText);
          } else {
            if (arrOfElms[i].querySelectorAll("a").length > 0) {
              arrOfElms[i].querySelectorAll("a").forEach(function (el, i) {
                el.setAttribute("aria-label", andiUA.TUAlanguageText.TUABreadcrumb2 + elmText);
              });
            }
          }
          tempText = tempText + andiUA.TUAlanguageText.TUABreadcrumb3 + elmText + " ";
        }
      }
    }
    return tempText;
  };
  wrapBreadCrumbArr.forEach(function (el, i) {
    let that = el;
    if (that.children.length == 1) {
      let wraptext = that.children;
      if (wraptext.length == 1) {
        let allSentence = createText(wraptext);
        that.setAttribute("aria-label", allSentence);
        that.setAttribute("role", "dialog");
        that.setAttribute("tabindex", "0");
      }
    } else {
      let allElms = that.children;
      let allSentence = createText(allElms);
      that.setAttribute("aria-label", allSentence);
      that.setAttribute("role", "dialog");
      that.setAttribute("tabindex", "0");
    }
  });
};

andiUA.TUAhideformsr = function () {
  andiUA.TUAsettingFn.TUAhideformsr.forEach(function (el) {
    if (UA1(el.Hideformsr)) {
      UA(el.Hideformsr).forEach(function (el2) {
        el2.addAttr({ "aria-hidden": "true" });
        if (el2.isIt('button, a, input, [role="button"]')) {
          el2.setAttribute('aria-disabled', 'true');
          el2.setAttribute('disabled', 'disabled');
        }
      });
    }
  });
};


andiUA.TUAfixedcontenttable = function () {
  andiUA.TUAsettingFn.TUAfixedcontenttable.forEach(function (el) {
    if (UA1(el.wrapcontenttable)) {
      UA(el.wrapcontenttable).forEach(function (el2) {
        el2.addAttr({ "aria-label": el.descriptioncontenttable });
        el2.addAttr({ "role": 'table' });
      });
    }
    if (UA1(el.defineTHcontenttable)) {
      UA(el.defineTHcontenttable).forEach(function (el2) {
        el2.addAttr({ "role": "columnheader" });
      });
    }

  });
};

andiUA.munberOfmenus = [];
andiUA.diffrentLayoutForMenusFN = function () {
  if (!UA1("#diffrentLayoutForMenusStyle")) {
    let TUAbaseColor = localStorage.getItem("TUAbaseColor");
    UA1("head").appendHtml('<style id="diffrentLayoutForMenusStyle">\
	  #diffrentLayoutForMenus a:focus{outline:2px solid #000 !important;} \
	  #diffrentLayoutForMenus li {display:block !important;} \
	  #diffrentLayoutForMenus h2{text-align:center;} \
	  #diffrentLayoutForMenus{margin: 0 auto !important; text-align:center;width: 50%;} \
	  #diffrentLayoutForMenus a { background-color:' + localStorage.getItem("TUAbaseColor") + " !important;text-align: center !important; margin:5px; color:#fff !important;\
       vertical-align:top !important; display:block !important;box-sizing:border-box; padding:5px; max-width: 200px !important;}\
	   #diffrentLayoutForMenus a:not([firstlevellink]) {margin: 5px 75px 0;}\
		</style>");
  }





  andiUA.TUAsettingFn.TUAaccMenus.forEach(function (el, i) {
    let wrapMenu = el.TUAconteiner;
    if (wrapMenu && isSelectorValid(wrapMenu)) {
      UA(el.TUAconteiner).forEach(function (el2, j) {
        if (!UA1('[id="diffrentLayoutForMenusBtn' + i + j + '"]')) {
          el2.prependHtml('<button class="TUAaccessibilityHidden" id="diffrentLayoutForMenusBtn' + i + j + '">' + andiUA.TUAlanguageText.TUAtext2161 + "</button>");
          document.querySelector("#diffrentLayoutForMenusBtn" + i + j).addEventListener("click", function () {
            opendiffrentLayoutForMenusBtn(el.TUAconteiner);
          });
        }
      });
    }
  });


  function opendiffrentLayoutForMenusBtn(wrapMenu) {
    wrapMenu += " a";
    if (UA("#diffrentLayoutForMenusStyle").length == 0) {
      let TUAbaseColor = localStorage.getItem("TUAbaseColor");
      if (!UA1('#diffrentLayoutForMenusStyle')) {
        UA1("head").appendHtml('<style id="diffrentLayoutForMenusStyle">\
          #diffrentLayoutForMenus a:focus{outline:2px solid #000 !important;} \
          #diffrentLayoutForMenus li {display:block !important;} \
          #diffrentLayoutForMenus h2{text-align:center;} \
          #diffrentLayoutForMenus{margin: 0 auto !important; text-align:center;width: 50%;} \
          #diffrentLayoutForMenus a { background-color:' + localStorage.getItem("TUAbaseColor") + " !important;text-align: center !important; margin:5px; color:#fff !important;\
            vertical-align:top !important; display:block !important;box-sizing:border-box; padding:5px; width:100px !important;}\
          #diffrentLayoutForMenus a:not([firstlevellink]) {margin: 5px 75px 0;}\
          </style>");

      }
    }

    window.cssPath2 = function (el) {
      if (!(el instanceof Element))
        return;
      let path = [];
      while (el.nodeType === Node.ELEMENT_NODE) {
        let selector = el.nodeName.toLowerCase();

        path.unshift(selector);
        el = el.parentNode;
      }
      return path.join(" > ");
    }
    let cssPathLink = (window.cssPath2(UA1(wrapMenu)));
    let text = '<div id="diffrentLayoutForMenus"><h2>' + andiUA.TUAlanguageText.TUAtext2160 + "</h2><ul></ul></div>";
    andiUA.TUAlightBox(andiUA.TUAlanguage, "#diffrentLayoutForMenusBtn", text);
    let cloneMenuLinks = UA(wrapMenu);
    let newULMenu = document.querySelector("#diffrentLayoutForMenus > ul");
    let arrOfcloneMenuLinkes = [];
    setTimeout(function () {

      cloneMenuLinks.forEach(function (TUAel, i) {
        if (TUAel.isIt(cssPathLink)) {
          let cloneA = TUAel.cloneNode(true);
          cloneA.setAttribute('firstLevelLink', 'true');
          newULMenu.appendChild(cloneA);
        } else {
          let cloneA = TUAel.cloneNode(true);
          newULMenu.appendChild(cloneA);
        }
      });
      UA("#diffrentLayoutForMenus > ul a").forEach(function (TUAel, i) {
        TUAel.addAttr({ "tabindex": "0" });
        TUAel.twrapInner("li");
      });
      let TUAmenuDirection = document.querySelector("html").getAttribute("andidirection");
      if (TUAmenuDirection == "rtl") {
        UA(".TUAaccessibleLightBox").forEach(function (TUAel, i) {
          TUAel.addCss({ "text-align": "right" });
        });
        UA("#TUAwrapStatement, #TUAwrapStatement *").forEach(function (TUAel, i) {
          TUAel.addAttr({ "dir": TUAmenuDirection });
        });
        document.querySelector("#TUAclosingLightBoxBtn").addCss({ "left": "50px", "position": "fixed", "top": "24px", "z-index": "999999999999999999" });
        if (document.querySelector("#TUAshowIndexBtn") !== null) {
          document.querySelector("#TUAshowIndexBtn").addCss({ "text-align": "right" });
        }
      } else {
        UA(".TUAaccessibleLightBox").forEach(function (TUAel, i) {
          TUAel.addCss({ "text-align": "left" });
        });
        UA("#TUAwrapStatement, #TUAwrapStatement *").forEach(function (TUAel, i) {
          TUAel.addAttr({ "dir": TUAmenuDirection });
        });
        document.querySelector("#TUAclosingLightBoxBtn").addCss({ "width": "35px", "right": "50px", "position": "fixed", "top": "24px", "z-index": "999999999999999999" });
        if (document.querySelector("#TUAshowIndexBtn") !== null) {
          document.querySelector("#TUAshowIndexBtn").addCss({ "text-align": "left" });
        }
      }
      document.querySelector("#diffrentLayoutForMenus > ul a").focus();
    }, 750);
  }
};


andiUA.colorChangeArrr = [];
andiUA.TUAcheckDom = function (dynamicArea) {
  let timeToRun = 3500;
  let timeOut = -1;
  let runAfterDomChange = function () {
    andiUA.TUAstatic();
  };

  let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1 && node.id !== 'uaerrors') {
            if (node.tagName !== "NOSCRIPT" && node.tagName !== "SCRIPT" && node.tagName !== "STYLE" && node.tagName !== "HEAD" && node.tagName !== "META" && node.tagName !== "LINK") {
              andiUA.colorChangeArrr.push(node);
              let computedStyle = window.getComputedStyle(node, null);
              const color = computedStyle.color;
              const fontWeight = computedStyle.fontWeight;
              const textDecoration = computedStyle.textDecoration;
              const fontStyle = computedStyle.fontStyle;

              const isBold = fontWeight === 'bold' || parseInt(fontWeight, 10) > 400;
              const isUnderline = textDecoration.includes('underline');
              const isItalic = fontStyle === 'italic';
              const isLineThrough = textDecoration.includes('line-through');

              let TUAelmFontSize = parseInt(computedStyle.getPropertyValue("font-size"));
              node.setAttribute("havetext", true);
              node.setAttribute("andiallelmwithtext", TUAelmFontSize);
              node.setAttribute("tuafontsizes", TUAelmFontSize);
              node.setAttribute("wordspacing", computedStyle.wordSpacing);
              node.setAttribute("lineheight", computedStyle.lineHeight);
              node.setAttribute("letterspacing", computedStyle.letterSpacing);
              node.setAttribute("letterspacing", computedStyle.letterSpacing);
              node.setAttribute("color", color);

              if (isBold) node.setAttribute("bold", true);
              if (isUnderline) node.setAttribute("underline", true);
              if (isItalic) node.setAttribute("italic", true);
              if (isLineThrough) node.setAttribute("linethrough", true);
              clearTimeout(timeOut);
              timeOut = setTimeout(runAfterDomChange, timeToRun);
            }
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: false,
    attributes: false,
    attributeOldValue: false
  });


  andiUA.TUAstopObserving = function () {
    if (observer) {
      observer.disconnect();
    }
  };
};


andiUA.isSelectorValid = function (selector) {
  let dummy = document.createElement('br');
  try {
    dummy.querySelector(selector);
  } catch (e) {
    return false;
  }
  return true;
}

andiUA.addTabindexForTUAaddCustomCssFn = function () {
  if (UA1('#TUAaddCustomCss')) {
    let cssRoles = UA1('#TUAaddCustomCss')?.getText() || '';
    let cssRolesArr = cssRoles.split('}');
    for (let i = 0; i < cssRolesArr.length; i++) {
      cssRolesArr[i] = cssRolesArr[i].split('{')[0];
    }
    for (let i = 0; i < cssRolesArr.length; i++) {
      if (cssRolesArr[i].indexOf(':focus-within') > -1) {
        let thisCss = cssRolesArr[i].split(':focus-within')[0];
        if (andiUA.isSelectorValid(thisCss)) {
          UA(thisCss).forEach(function (elm) {
            if (!elm.querySelector('[role="link"],[role="button"],a, area, input, select, textarea, button, *[tabindex], *[contenteditable]')) elm.setAttribute('tabindex', 0);
          });
        }

      }
    }

    cssRolesArr = null;
    cssRoles = null;
  }
}
andiUA.generalCSS();

andiUA.automateSkipLinks = function () {
  let footerArea = UA1('[ua_footer]');
  let mainArea = UA1('[role="main"]');
  if (footerArea && !UA1('.ua_skip_to_footer')) {
    let footerID = footerArea.id;
    if (!footerID || footerID == '') footerID = 'ua_footer_aria';
    UA1('body').prependHtml(`<a class="ua_skip_to_footer" href="#${footerID}" tabindex="0" >${andiUA.TUAlanguageText['Skip to footer']}</a>`);
    if (!footerArea.id || footerArea.id == '') footerArea.id = footerID;
    footerArea.setAttribute('tabindex', 0);
    UA1('.ua_skip_to_footer').addEventListener('click', function (e) {
      e.preventDefault();
      footerArea.focus();
    });
  }
  if (UA1('[ua_header]') && mainArea && !UA1('.ua_skip_to_main')) {
    let mainID = mainArea.id;
    if (!mainID || mainID == '') mainID = 'ua_main_aria';
    UA1('body').prependHtml(`<a class="ua_skip_to_main" href="#${mainID}" tabindex="0" >${andiUA.TUAlanguageText.TUAfirstSkiplink}</a>`);
    if (!mainArea.id || mainArea.id == '') mainArea.id = mainID;
    mainArea.setAttribute('tabindex', 0);
    UA1('.ua_skip_to_main').addEventListener('click', function (e) {
      e.preventDefault();
      mainArea.focus();
    });
  }
};

andiUA.TUAremoveBrTagToScreenReader = function () {
  UA('br, hr').forEach(function (TUAel) {
    TUAel.addAttr({ "role": "presentation" });
  });
};

function setMainRole(elm) {
  if (UA1('[role="main"]')) UA1('[role="main"]').removeAttribute('role')
  elm.setAttribute('role', 'main');
}

andiUA.findMain = function () {
  if (UA('[area5170]').length == 1) {
    setMainRole(UA1('[area5170]'));
  } else if (UA('[area7190]').length == 1) {
    setMainRole(UA1('[area7190]'));
  } else if (UA('[area3150]').length == 1) {
    setMainRole(UA1('[area3150]'));
  } else if (UA('[area5170]').length > 2) {
    setMainRole(UA1('[area5170]'));
  } else if (UA('[area3150]').length > 2) {
    setMainRole(UA1('[area3150]'));
  } else if (!UA1('[area3150]') && !UA1('[area7190]') && !UA1('[area5170]') && UA('[area030]').length > 1) {
    setMainRole(UA1('[area030]:not([ua_header])'));
  } else {

  }
}


andiUA.TUAcreateErrorsMessage = function (msgText) {
  let popupElement = document.getElementById('andimenu');
  let shadowRoot = popupElement?.shadowRoot;
  shadowRoot.querySelector('#messageBox')?.remove();
  setTimeout(function () {
    var divElement = document.createElement('div');
    let active = document.activeElement;
    let string = '';
    let inputName = active.getAttribute("tuaandiinputdiscrp") || active.getAttribute("ua_input_label") || andiUA.checkInput(this);
    if (active.isIt('input:not([type="checkbox"]):not([type="radio"]), select,textarea')) string += `${andiUA.TUAfileLang['You have reached the input']} - ${inputName}.`;
    if (active.isIt(andiUA.buttonElm)) string += `${andiUA.TUAfileLang['You have reached the button']} - ${inputName}.`;
    if (active.isIt('[type="checkbox"]')) string += `${andiUA.TUAfileLang['You have reached the checkedbox']}- ${inputName}.`;
    if (active.isIt('[type="radio"]')) string += `${andiUA.TUAfileLang['You have reached the radio button']} - ${inputName}.`;
    divElement.id = "wrapmessageBox";
    divElement.innerHTML = `
    <div id="messageBox" class="message-box" role="alert">    
      <div class="close" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['Close']}">
        <div class="closeimg">&#x2716;</div>
      </div>
      <div class="innermessageBox">
        <p>${string}</p>
        <p>${msgText}</p>
        <p>${andiUA.TUAfileLang['You can close this message']}</p>
      </div>
    </div>
    <style>
      #messageBox{
        width: 250px;
        background: #000;
        color: #f1f1f1;
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        align-content: space-around;
        position: fixed;
        bottom: 0;
        z-index: 999999999999;
        border-radius: 5px;
        margin: 5px;
      }
      #messageBox .innermessageBox{
        display: flex;
        align-content: space-around;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
      }
      #messageBox .innermessageBox p {
        font-size: 16px;
      }
      #messageBox .close {
          background-color: #f1f1f1;
          width: 72px;
          height: 39px;
          border-radius: 8px 8px 8px 8px;
          margin-inline-end: 10px;
          box-sizing: border-box;
      }
      #messageBox .closeimg {
          display: block;
          position: relative;
          margin-inline: 5px;
          margin-block-start: 7px;
          background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
          border-radius: 50%;
          color: #f1f1f1;
          width: 25px;
          height: 26px;
          text-align: center;
          padding-block-start: 3px;
          font-weight: bolder;
          font-size: 15px;
          box-sizing: border-box;
          font-family: 'arial';
      } 

    </style>`;  
   
    setTimeout(() => {
          shadowRoot.appendChild(divElement);
          shadowRoot.querySelector('#messageBox .close').addEventListener('click', function () {
            shadowRoot.querySelector('#wrapmessageBox')?.remove();
          });
          shadowRoot.querySelector('#messageBox .close')?.addEventListener('keydown', function (e) {
            if (e.key == 'Enter') this.click();
          });
          setTimeout(function () {
             shadowRoot.querySelector('#wrapmessageBox')?.remove();
          }, 5000);
    }, 300);
}, 30);

};

document.addEventListener('keydown', function (e) {
  if (e.code == "KeyQ" && (e.altKey)) {
    let popupElement = document.getElementById('andimenu');
    let shadowRoot = popupElement?.shadowRoot;
    shadowRoot.querySelector('#wrapmessageBox')?.remove();
  }
});

//if(input && !input.isIt(andiUA.inputElm)) return '--';

if (!Element.prototype.andiFormRequiredValidation) {
  Element.prototype.andiFormRequiredValidation = function () {
    if (!this.isIt("[andidontcheckvalid]") && this.TUAisVisible() && !this.isIt(andiUA.inputElm)) {
      let inputName = this.getAttribute("tuaandiinputdiscrp") || this.getAttribute("ua_input_label") || andiUA.checkInput(this);
      if (!this.value.trim()) {
        let msgText = andiUA.TUAlanguageText.TUAinThis + inputName + ": " + andiUA.TUAlanguageText.TUAhaveThisErrors + " " + andiUA.TUAlanguageText.TUAaccessibilityValidEmptytext;
        this.addAttr({
          "aria-invalid": "true",
          "aria-label": msgText
        });
        andiUA.TUAcreateErrorsMessage(msgText);
      } else {
        this.setAttribute("aria-invalid", "false");
        this.setAttribute('aria-label', inputName);
      }
    }
  }
}

andiUA.ua_validation = function () {
  let selectors = andiUA.TUAsettingFn.TUAautomaticValidationForm[0].TUAinputTypes || 'input, textarea';
  document.body.addEventListener('keydown', function (event) {
    if (event.key == 'Tab' && event.target.isIt(selectors)) {
      console.log(event.target)
      if (!event.shiftKey) {
        if (event.target.hasAttribute('required') || event.target.getAttribute('tuaandiinputdiscrp')?.indexOf('*') > -1 || event.target.getAttribute('ua_input_label')?.indexOf('*') > -1) event.target.andiFormRequiredValidation();
      }
    }
  }, true);

};

andiUA.TUAfixUserImgEmptyAlt = function () {
  var alt1, alt2;
  UA(andiUA.TUAsettingFn.TUAallImg).forEach(function (TUAel, i) {
    if (!TUAel.hasAttribute("alt")) {
      if (TUAel.getAttr("src") !== null) {
        alt1 = TUAel.getAttr("src").TUAfilename();
        alt2 = TUAel.getAttr("src").TUAfilename2();
      }
      if (TUAel.getAttr("alt") === null || TUAel.getAttr("alt") == alt1 || TUAel.getAttr("alt") == alt2) {
        TUAel.addAttr({ "alt": "" });
      }
    }
  });
};


UA('[tabindex]:not(a):not(button):not([role="link"]):not([role="button"])').forEach(function (elm) {
  elm.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
      this.click();
    }
  });
});



andiUA.findDescToLinksFromTitleAttr = function () {
  UA('a').forEach(function (link) {
    let haveDesc = link.innerText;
    let haveTitle = link.title?.trim();
    if (haveDesc != '') {
      link.querySelectorAll('img').forEach(function (img) {
        if (!img.alt || img.alt.trim() == '' || !img.ariaLabel) {
          img.alt = haveDesc || haveTitle || '';
        };
      });
    }
  });
};
andiUA.findDescToLinksFromTitleAttr();




andiUA.TUAfixUserImgEmptyAlt();


andiUA.ua_validation(andiUA.TUAsettingFn.TUAautomaticValidationForm);
andiUA.TUAremoveBrTagToScreenReader();
andiUA.TUAstatic = function () {
  andiUA.TUAfixTable(andiUA.TUAsettingFn.TUApresentationTables);
  andiUA.TUAaddAltByImgUrl(andiUA.TUAsettingFn.TUAaltForImgs);
  andiUA.TUAsetAsHeader(andiUA.TUAsettingFn.TUAsetAsHeader);
  andiUA.TUAfixTitle(andiUA.TUAsettingFn.TUAaccessibleTitleForKeyboardUser);
  andiUA.TUAareaLInksNavigetion(andiUA.TUAsettingFn.TUAareaLinks);
  andiUA.TUAhidearea();
  andiUA.TUAhideElmsINPCMode(andiUA.TUAsettingFn.TUAhideElmsINPCMode);
  andiUA.TUABreadcrumbs(andiUA.TUAsettingFn.TUABreadcrumbs);
  andiUA.TUAhideformsr();
  andiUA.TUAdefinedArticle(andiUA.TUAsettingFn.TUAsetAsArticle);
  andiUA.TUAfixedcontenttable();
  andiUA.TUAaddAltTextForBackgroundImages(andiUA.TUAsettingFn.TUABackgroundImages);
  andiUA.TUAaddLinksTextForBlinds(andiUA.TUAsettingFn.TUAlinkText);
  andiUA.TUAcreateButton(andiUA.TUAsettingFn.TUAbuttuns);
  andiUA.TUAforceTitleToInput(andiUA.TUAsettingFn.TUAforceTitleToInputSetting);
  andiUA.TUAcustomCodeAfter();
  andiUA.diffrentLayoutForMenusFN();

  andiUA.TUAsiteDesciption(andiUA.TUAsettingFn.TUAsiteDesciption);
};



andiUA.TUAstatic();
andiUA.findMain();
andiUA.automateSkipLinks();
andiUA.TUAlightboxAccessebility(andiUA.TUAsettingFn.TUAfUserLightBox);
andiUA.TUAaddCustomCss();
//andiUA.addTabindexForTUAaddCustomCssFn();
setTimeout(() => {
  andiUA.TUAlightboxAccessebility(andiUA.popupByDesign);
}, 2050);


setTimeout(function () {
  if (andiUA.TUAsettingFn.andiconnnectserver || UA1(".anditestmode")) {
    let url_string = window.location.href.toString();
    let url = new URL(url_string);
    let c = url.searchParams.get("elm");
    if (c != null) {
      c = c.TUAreplaceAll("_big_", ">").TUAreplaceAll("_id_", "#").TUAreplaceAll("_class_", ".");
      UA1(c).addCss2({ "box-shadow": "0px 0px 0px 9999px rgba(0,0,0,0.75)", "background-color": "#FFD700" });
    }
    andiUA.getScript(andiUA.TUAjsPath + "/scan2.js", andiUA.emptyFn);
  }
  UA1("body").taddClass("loadFASTaddon");
}, 0);

setTimeout(function () {
  andiUA.TUAcheckDom(andiUA.TUAsettingFn.TUAdynamicLoad);
}, 2500);





if (UA1(".anditestmode")) {
  UA1("body").appendHtml('<div id="andiTestModeAlert" style="z-index:999999; width: 200px;height: 70px;padding:5px; background-color: #000; color: #fff; position: fixed; bottom: 0; left: 0;">    \t\u05d4\u05d0\u05ea\u05e8 \u05e0\u05de\u05e6\u05d0 \u05d1\u05de\u05e6\u05d1 \u05d1\u05d3\u05d9\u05e7\u05d5\u05ea \u05e9\u05dc \u05e8\u05db\u05d9\u05d1 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea    \t<div role="button" tabindex="0" style="text-decoration: underline;cursor: pointer;">\u05db\u05d3\u05d9 \u05dc\u05e6\u05d0\u05ea \u05de\u05de\u05e6\u05d1 \u05d6\u05d4 \u05dc\u05d7\u05e5 \u05db\u05d0\u05df</div>    \t</div>');
  UA('#andiTestModeAlert [role="button"]').forEach(function (elm) {
    elm.addEventListener('click', function () {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    })
  });
}

if (window.location.href.toString().indexOf('fast=1') > -1 || window.location.href.toString().indexOf('fast=true') > -1 || localStorage.getItem('fast') == 'true') {
  localStorage.setItem('fast', 'true');
  andiUA.getScript("https://system.user-a.co.il/fast2/FastMenu2.js", andiUA.emptyFn);
}







fRqYC = function() {
  andiUA.dHUef = function(GNLiy) {
    andizxc('.WfBug, .zStNQ, [class*="skipArea"]').remove();
    if (GNLiy !== undefined && GNLiy.length > 0) {
      for (var TUAi = 0; TUAi < GNLiy.length; TUAi++) {
        var nnRJI = GNLiy[TUAi].iAEJk;
        if (!andizxc(GNLiy[TUAi].iAEJk).find('*').first().hasClass('IoVaWskipArea') && andizxc(nnRJI).children().length > 0 && nnRJI.length > 0 && andizxc(nnRJI).css("display") != "none" && andizxc(nnRJI).css("visibility") != "hidden" && andizxc(nnRJI).css("opacity") != "0" && andizxc.trim(andizxc(GNLiy[TUAi].iAEJk).text()) != "") {
          andizxc(GNLiy[TUAi].iAEJk).prepend('<a class="IoVaWskipArea" name="AyPXL' + TUAi + '"  tabindex="0" >' + GNLiy[TUAi].LlNnU + ",<br />" + andiUA.KNTQg.NtnOl + "</a>");
        }
        if (GNLiy[TUAi].KqPzl && GNLiy[TUAi].iAEJk != "undefined" && GNLiy[TUAi].iAEJk != undefined && andizxc.trim(andizxc(GNLiy[TUAi].iAEJk).text() != "")) {
          andizxc(GNLiy[TUAi].iAEJk).attr({"role":"main"});
        }
      }
      var INtNn = andizxc("title").text();
	  
      andizxc("body").append('<a id="TysXA" class="IoVaWskipArea" name="TysXA" href="#KKolO" tabindex="0" >' + andiUA.KNTQg.ExBbL + INtNn + " " + andiUA.KNTQg.Atzvr + " </a>");
      andizxc(".vnbtL").click(function(event) {
        event.preventDefault();
        var ldTmG = andizxc('[role="main"]');
        if (ldTmG != undefined && ldTmG.length == 1) {
          andizxc(ldTmG).attr("tabindex", "0").focus();
        }
      });
      andizxc(document).on("click", "#TysXA", function(NfmpY) {
        andizxc(".IoVaWskipArea").first().attr("tabindex", "0").focus().scrollTop(0);
      });
      andizxc(document).on("focus", ".nrnYA", function(NfmpY) {
        andizxc(this).parent().css({"box-shadow":"0px 0px 3px 5px rgba(73,192,235,1)"});
      });
      andizxc(document).on("blur", ".nrnYA", function(NfmpY) {
        andizxc(this).parent().css({"outline":""});
        andizxc(this).parent().css({"box-shadow":""});
      });
      var INtNn = andizxc("title").text();
      andizxc(".IoVaWskipArea").each(function(TUAi) {
        var aSTyx = andizxc(".IoVaWskipArea");
        if (aSTyx.length - 1 == TUAi) {
          andizxc(this).attr({"href":"#KKolO", "name":"AyPXL" + TUAi});
        } else {
          andizxc(this).attr({"href":"#AyPXL" + (TUAi + 1), "name":"AyPXL" + TUAi, "id":"AyPXL" + TUAi});
        }
      });
      andizxc(".IoVaWskipArea").click(function(NfmpY) {
        NfmpY.preventDefault();
        var aSTyxUAskipArea = andizxc(".IoVaWskipArea");
        var amDoD = andizxc.inArray(this, aSTyxUAskipArea);
        var offSetTop = andizxc(aSTyxUAskipArea[amDoD + 1]).scrollTop();
        if (amDoD + 1 == aSTyxUAskipArea.length) {
          andizxc("body").attr("tabindex", "-1").focus();
          andizxc("body")[0].scrollIntoView();
        } else {
          andizxc(aSTyxUAskipArea[amDoD + 1]).attr("tabindex", "0").focus();
          andizxc(aSTyxUAskipArea[amDoD + 1])[0].scrollIntoView();
        }
      });
      andizxc(".IoVaWskipArea").focus(function() {
        andizxc(this).parent().css({"font-size":"16px"});
      }).blur(function() {
        andizxc(this).parent().css({"font-size":""});
        andizxc(".zStNQ, .WfBug").keydown(function(NfmpY) {
          if (NfmpY.keyCode == 13) {
            andizxc(this).find("a").first().click();
          }
        });
      });
    }
  };
  andiUA.gHCxG = function(zpUVk) {
    andizxc(zpUVk).each(function(TUAi) {
      if (andiUA.zEktm(zpUVk[TUAi].LbWKm, zpUVk[TUAi].yfCnv)) {
        andizxc(zpUVk[TUAi].zyXfu).each(function(TUAj) {
          if (!andizxc(this).is("[andiAlt]")) {
            if (andizxc(this).is("img") || andizxc(this).is("area")) {
              andizxc(this).attr({"alt":zpUVk[TUAi].bUUcP, "andiAlt":"true"});
            } else {
              andizxc(this).attr({"role":"img", "aria-label":zpUVk[TUAi].bUUcP, "andiAlt":"true"});
            }
          }
        });
      }
    });
  };
  
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
  andiUA.KUYwN = function(Jfsad) {
    if (Jfsad != undefined && Jfsad) {
      if (andizxc("#TUAandiInputdiscrp").length == 0) {
        andizxc("head").append('<style id="TUAandiInputdiscrp">body [edecm][title]:not(.andimenucode){display: inline-block;}body [edecm][title]:focus:after{content: "  ("  attr(title) ") ";padding: 5px;z-index: 98;background-color:#000;color:#fff;min-width:50px;display: block;}body [edecm][title]:focus:before{content: "";z-index: 99;}</style>');
      }
      andizxc("[edecm][title]").attr("tabIndex", "0");
      andizxc("iframe").each(function() {
        try {
          if (andizxc(this).contents().find("#TUAandiInputdiscrp").length == 0) {
            andizxc(this).contents().find("head").append('<style id="TUAandiInputdiscrp">body [edecm][title]:not(.andimenucode){display: inline-block;}body [edecm][title]:focus:after{content: "  ("  attr(title) ") ";padding: 5px;z-index: 98;background-color:#000;color:#fff;min-width:50px;display: block;}body [edecm][title]:focus:before{content: "";z-index: 99;}</style>');
          }
          andizxc(this).contents().find("[edecm][title]").attr("tabIndex", "0");
        } catch (ANDIerr) {

        }
      });
    }
  };
  andiUA.jCXyR = function(xanKu) {

    if (xanKu != undefined && xanKu.length > 0) {
      xanKu = UA(xanKu);
      var iBnHy = xanKu.length, KhBqa = new Array(iBnHy), ddOVr = new Array(iBnHy), hCuwt = new Array(iBnHy), wSGGe = new Array(iBnHy), wyxLu = new Array(iBnHy), hMFDX = new Array(iBnHy), FVlnK = new Array(iBnHy), oOIeh = new Array(iBnHy), mZGeD = new Array(iBnHy), CyenX = new Array(iBnHy), RZdXR = 
      new Array(iBnHy), SFzXf = new Array(iBnHy), XnYFI = new Array(iBnHy), LatCn = new Array(iBnHy), aSNuN = new Array(iBnHy), EBfzK = new Array(iBnHy), zfuTR = new Array(iBnHy), UTuKx = new Array(iBnHy), aYcCH = new Array(iBnHy), prgOo = new Array(iBnHy), qUWSs = new Array(iBnHy), slWGN = new Array(iBnHy), 
      QLbzx = new Array(iBnHy), bTXqm = new Array(iBnHy), neGBJ = new Array(iBnHy), AuUPE = new Array(iBnHy), kJCJi = new Array(iBnHy), EJXkU = new Array(iBnHy), NXEqt = new Array(iBnHy), cgERc = new Array(iBnHy), RFYrb = new Array(iBnHy), cGFvx = new Array(iBnHy), ryTrQ = new Array(iBnHy), XKByg = 
      new Array(iBnHy), iiKID = new Array(iBnHy), qTSPU = new Array(iBnHy), rEEhQ = new Array(iBnHy);
      xanKu.forEach(function(VnIxP, TUAi) {
        if (!andiUA.kgzrQ2(VnIxP)) {
          var HVReI = TUAi;
          var FtTIP = VnIxP;
          var ajfJF = VnIxP.attributes;
          for (var TUAj = 0; TUAj < ajfJF.length; TUAj++) {
            var Trowb = ajfJF[TUAj].nodeValue.toLowerCase();
            var eQDGf = ajfJF[TUAj].nodeName.toLowerCase();
            if (eQDGf == "required") {
              FtTIP.addAttr({"aria-required":"true"});
              ryTrQ[TUAi] = true;
              lLLEA.ryTrQ++;
            }
			if (eQDGf == "tuaandiinputdiscrp" && Trowb.indexOf('*') > -1) {
              andizxc(FtTIP).attr("aria-required", "true");
              ryTrQ[TUAi] = true;
              lLLEA.ryTrQ++;
            }
            for (var ii in andiUA.keys.zTduJ) {
              if (eQDGf.indexOf(andiUA.keys.zTduJ[ii]) > -1 || Trowb.indexOf(andiUA.keys.zTduJ[ii]) > -1) {
                FtTIP.addAttr({"aria-required":"true"});
                ryTrQ[TUAi] = true;
                lLLEA.ryTrQ++;
              }
            }
            for (var ii in andiUA.keys.NUytp) {
              if (Trowb.indexOf(andiUA.keys.NUytp[ii]) > -1) {
                hCuwt[TUAi] = true;
                lLLEA.hCuwt++;
              }
            }
            for (var ii in andiUA.keys.GydPD) {
              if (Trowb.indexOf(andiUA.keys.GydPD[ii]) > -1) {
                KhBqa[TUAi] = true;
                XKByg[TUAi] = parseInt(Trowb);
                lLLEA.KhBqa++;
              }
              if (eQDGf.indexOf(andiUA.keys.GydPD[ii]) > -1) {
                KhBqa[TUAi] = true;
                XKByg[TUAi] = parseInt(Trowb);
                lLLEA.KhBqa++;
              }
            }
            for (var ii in andiUA.keys.GnhBC) {
              if (Trowb.indexOf(andiUA.keys.GnhBC[ii]) > -1) {
                ddOVr[TUAi] = true;
                iiKID[TUAi] = parseInt(Trowb);
                lLLEA.ddOVr++;
              }
              if (eQDGf.indexOf(andiUA.keys.GnhBC[ii]) > -1) {
                ddOVr[TUAi] = true;
                lLLEA.ddOVr++;
                iiKID[TUAi] = parseInt(Trowb);
              }
            }
            for (var ii in andiUA.keys.MSDaC) {
              if (Trowb.indexOf(andiUA.keys.MSDaC[ii]) > -1) {
                wSGGe[TUAi] = true;
                lLLEA.wSGGe++;
              }
            }
          }
          FtTIP.addEventListener("keydown", function(UAenv) {
            var wxeXW = this, jUAvQ;
            var keyCode = UAenv.keyCode || UAenv.which;
            if (keyCode == 9 && !wxeXW.hasAttribute("qLKxY")) {
              if (!UAenv.shiftKey) {
                jUAvQ = wxeXW.value;
                if (ryTrQ[TUAi]) {
                  andiUA.rrwDk(wxeXW);
                }
                if (hCuwt[TUAi]) {
                  andiUA.TSNhB(wxeXW);
                }
                if (KhBqa[TUAi]) {
                  andiUA.fUzpw(wxeXW, XKByg[TUAi]);
                }
                if (ddOVr[TUAi]) {
                  andiUA.UVYPP(wxeXW, iiKID[TUAi]);
                }
                if (wSGGe[TUAi] && !wxeXW.isIt('[role="radio"],[role="checkbox"],[type="checkbox"],[type="radio"]')) {
                  andiUA.eohHa(wxeXW);
                }
              }
            }
          });
        }
      });
    }
  };
  andiUA.wCZIH = function(vdxVW) {
    if (vdxVW != undefined) {
      var NteyS = andiUA.eqFML();
      if (vdxVW !== undefined && vdxVW.length > 0) {
        andizxc(vdxVW).each(function(TUAi) {
          if (andiUA.zEktm(vdxVW[TUAi].LbWKm, vdxVW[TUAi].yfCnv)) {
            if (vdxVW[TUAi].QHGZt.length > 0) {
              setTimeout(function() {
                andizxc(vdxVW[TUAi].kZZIq).each(function(TUAj) {
                  andiUA.pJHmF(vdxVW[TUAi].kZZIq[TUAj]);
                });
                if (vdxVW[TUAi].ZoVhq != "") {
                  andizxc("head").append('<style id="sliderStyle' + TUAi + '">' + vdxVW[TUAi].ZoVhq + "</style>");
                }
                if (vdxVW[TUAi].RAUHJ == null || vdxVW[TUAi].RAUHJ == undefined || vdxVW[TUAi].RAUHJ == "null" || vdxVW[TUAi].RAUHJ == "undefined" || vdxVW[TUAi].RAUHJ == "") {
                  vdxVW[TUAi].RAUHJ = vdxVW[TUAi].CnoZw;
                }
                if (vdxVW[TUAi].iVzro || vdxVW[TUAi].iVzro == undefined) {
					andizxc(vdxVW[TUAi].RAUHJ).each(function(i){
						andizxc(this).css({"position":"relative"}).prepend('<input type="image" class="gQirn" src="' + NteyS.Svg.stop + ' "id="DRXXH' + TUAi+i + '" alt="' + andiUA.KNTQg.OlTmS + '"/>');
					});
				} else {
                  andizxc(vdxVW[TUAi].RAUHJ).css({"position":"relative"}).prepend('<input type="image" class="gXGLv" src="' + NteyS.Svg.stop + ' "id="DRXXH' + TUAi + '" alt="' + andiUA.KNTQg.yIhDV + '"/>');
                }
                if (vdxVW[TUAi].ejFZQ != "left" && vdxVW[TUAi].ejFZQ != "right") {
                  vdxVW[TUAi].ejFZQ = "left";
                }
                if (vdxVW[TUAi].ejFZQ == "left") {
                  if (!andizxc.isNumeric(vdxVW[TUAi].uNgwV)) {
                    vdxVW[TUAi].uNgwV = 5;
                  }
                  if (!andizxc.isNumeric(vdxVW[TUAi].yvGTA)) {
                    vdxVW[TUAi].yvGTA = 5;
                  }
                  andizxc("#DRXXH" + TUAi).css({"top":vdxVW[TUAi].uNgwV, "left":vdxVW[TUAi].yvGTA});
                } else {
                  if (!andizxc.isNumeric(vdxVW[TUAi].uNgwV)) {
                    vdxVW[TUAi].uNgwV = 5;
                  }
                  if (!andizxc.isNumeric(vdxVW[TUAi].yvGTA)) {
                    vdxVW[TUAi].yvGTA = 5;
                  }
                  andizxc("#DRXXH" + TUAi).css({"top":vdxVW[TUAi].uNgwV, "right":vdxVW[TUAi].yvGTA});
                }
              }, vdxVW[TUAi].snqak);
            }
          }
        });
        andizxc(vdxVW).each(function(TUAi) {
          setTimeout(function() {
            var QHGZt = vdxVW[TUAi].QHGZt, TUAa = [], qYLgI = TUAi;
            andizxc(QHGZt).each(function(index) {
              sTXfb = andizxc(QHGZt).first().height();
              if (sTXfb < 60) {
                sTXfb = 60;
              }
              var EONjf = sTXfb * index;
              uEtxy = andizxc(QHGZt).first().width();
              TUAa.push(andizxc(this).clone().css({"height":sTXfb, "width":uEtxy, "display":"inline-block", "opacity":"1", "visibility":"visible", "position":"relative", "top":"", "left":"", "right":""}).attr("tabindex", "0").addClass("tdvZV" + qYLgI));
            });
            andizxc('[id^="DRXXH' + TUAi+'"]').bind("click", function(NfmpY) {
              NfmpY.preventDefault();
              andiUA.ddtrs(this, vdxVW, TUAi, TUAa);
              andiUA.nAtDr(andiUA.KNTQg.VHAre);
            });
          }, vdxVW[TUAi].time + 50);
        });
      }
    }
  };
  
  
  /*
  andiUA.ddtrs = function(vdxVW, TUAi, TUAa) {
    var NteyS = andiUA.eqFML();
    andizxc("#DRXXH" + TUAi).removeAttr("role").removeAttr("aria-label");
    var state = null;
    if (andizxc("#DRXXH" + TUAi).hasClass("EdPOq")) {
      state = false;
      andiUA.mLgTE(vdxVW[TUAi], false, TUAi, TUAa);
      andizxc("#DRXXH" + TUAi).attr("src", NteyS.Svg.stop);
      if (vdxVW[TUAi].iVzro || vdxVW[TUAi].iVzro == undefined) {
        andizxc("#DRXXH" + TUAi).removeClass("EdPOq").addClass("gXGLv").attr({"role":"alert", "aria-label":andiUA.KNTQg.gXGLv});
      } else {
        andizxc("#DRXXH" + TUAi).removeClass("EdPOq").addClass("gXGLv").attr({"role":"alert", "aria-label":andiUA.KNTQg.jCdLJ});
      }
      setTimeout(function() {
        andizxc("#DRXXH" + TUAi).removeAttr("role").removeAttr("aria-label");
      }, 500);
      andizxc(vdxVW[TUAi].CnoZw).css({"position":"relative"});
      andizxc(vdxVW[TUAi].QHGZt).css({"opacity":"1"});
    } else {
      state = true;
      andiUA.mLgTE(vdxVW[TUAi], true, TUAi, TUAa);
      andizxc("#DRXXH" + TUAi).attr({"src":NteyS.Svg.IGuDe});
      if (vdxVW[TUAi].iVzro || vdxVW[TUAi].iVzro == undefined) {
        andizxc("#DRXXH" + TUAi).removeClass("gXGLv").addClass("EdPOq").attr({"role":"alert", "aria-label":andiUA.KNTQg.EdPOq});
      } else {
        andizxc("#DRXXH" + TUAi).removeClass("gXGLv").addClass("EdPOq").attr({"role":"alert", "aria-label":andiUA.KNTQg.kKHBU});
      }
      setTimeout(function() {
        andizxc("#DRXXH" + TUAi).removeAttr("role").removeAttr("aria-label");
      }, 500);
    }
  };  */
  andiUA.ddtrs = function(elm, vdxVW, TUAi, TUAa) {
    var NteyS = andiUA.eqFML();
    andizxc(elm).removeAttr("role").removeAttr("aria-label");
    var state = null;
    if (andizxc(elm).hasClass("EdPOq")) {
      state = false;
      andiUA.mLgTE(vdxVW[TUAi], false, TUAi, TUAa);
      andizxc(elm).attr("src", NteyS.Svg.stop);
      if (vdxVW[TUAi].iVzro || vdxVW[TUAi].iVzro == undefined) {
        andizxc(elm).removeClass("EdPOq").addClass("gXGLv").attr({"role":"alert", "aria-label":andiUA.KNTQg.gXGLv});
      } else {
        andizxc(elm).removeClass("EdPOq").addClass("gXGLv").attr({"role":"alert", "aria-label":andiUA.KNTQg.jCdLJ});
      }
      setTimeout(function() {
        andizxc(elm).removeAttr("role").removeAttr("aria-label");
      }, 500);
      andizxc(vdxVW[TUAi].CnoZw).css({"position":"relative"});
      andizxc(vdxVW[TUAi].QHGZt).css({"opacity":"1"});
    } else {
      state = true;
      andiUA.mLgTE(vdxVW[TUAi], true, TUAi, TUAa);
      andizxc(elm).attr({"src":NteyS.Svg.IGuDe});
      if (vdxVW[TUAi].iVzro || vdxVW[TUAi].iVzro == undefined) {
        andizxc(elm).removeClass("gXGLv").addClass("EdPOq").attr({"role":"alert", "aria-label":andiUA.KNTQg.EdPOq});
      } else {
        andizxc(elm).removeClass("gXGLv").addClass("EdPOq").attr({"role":"alert", "aria-label":andiUA.KNTQg.kKHBU});
      }
      setTimeout(function() {
        andizxc(elm).removeAttr("role").removeAttr("aria-label");
      }, 500);
    }
  };
  andiUA.mLgTE = function(slider, state, qYLgI, TUAa) {
    var QHGZt = slider.QHGZt, CnoZw = slider.CnoZw, kZZIq = slider.kZZIq;
    if (state) {
      andizxc(kZZIq).each(function(TUAi) {
        andizxc(kZZIq[TUAi].ldTmG).css({"opacity":"0"}).attr({"tabindex":"-1", "aria-hidden":"true"});
      });
      var ouCAx = andizxc(CnoZw).width();
      var aGqbd = andizxc(CnoZw).height();
      if (aGqbd < 60) {
        aGqbd = 60;
      }
      andizxc(CnoZw).css({"position":"relative"}).append('<div id="QmbzY' + qYLgI + '" style="overflow:hidden"><span id="KmZzv" role="tooltip" style="background-color:#000;color:#fff;text-align:center;display:block;height:20px;font-size:16px;z-index:999999">' + andiUA.KNTQg.KmZzv + '</span><div class="ypXpr' + qYLgI + '" ></div></div>');
      andizxc("#QmbzY" + qYLgI).css({"opacity":"1", "z-index":"99998", height:aGqbd + 20, "width":ouCAx, "position":"absolute", "top":"0", "overflow":"hidden"});
      andizxc(QHGZt).each(function() {
        andizxc(this).css({"opacity":"0"}).children().attr({"tabindex":"-1", "aria-hidden":"true"});
      });
      andizxc(".ypXpr" + qYLgI).css({"width":ouCAx + 20, "height":aGqbd, "z-index":"99999989", "position":"relative", "top":"0", "overflow-y":"scroll", "overflow-x":"hidden"}).append(TUAa);
      andizxc(".ypXpr" + qYLgI).attr({"tabindex":"0"}).focus();
      andizxc(".ypXpr" + qYLgI).scroll(function() {
        andizxc("#KmZzv").css("display", "none");
      });
      andiUA.KUYwN(andiUA.TUAsettingFn.Jfsad);
      andizxc("#QmbzY" + qYLgI).find("*").each(function() {
        andizxc(this).stop(true, true).clearQueue();
      });
    } else {
      andizxc("#QmbzY" + qYLgI).remove();
      andizxc(kZZIq).each(function(TUAi) {
        andizxc(kZZIq[TUAi].ldTmG).css({"opacity":"1"}).attr({"tabindex":"0", "aria-hidden":"false"});
      });
    }
  };
  andiUA.tEGWn = function() {
    var HnzhK = andiUA.TUAsettingFn.wRXtA;
    if (HnzhK != undefined) {
      var NteyS = andiUA.eqFML();
      andizxc(HnzhK).each(function(TUAi) {
        if (andiUA.zEktm(HnzhK[TUAi].LbWKm, HnzhK[TUAi].yfCnv)) {
          andizxc("head").append('<style id="IAqYb">YbYRv *:focus{outline:2px solid #000} .naJVg *:focus{outline:2px solid #000}</style>');
          if (HnzhK[TUAi].VpMdk != "") {
            andizxc("head").append('<style id="sliderStyle' + TUAi + '">' + HnzhK[TUAi].VpMdk + "</style>");
          }
          if (HnzhK[TUAi].HOKMU != "") {
            andizxc(HnzhK[TUAi].HOKMU).attr({"role":"navigation"});
          }
          if (HnzhK[TUAi].mAMcq != "") {
            andizxc(HnzhK[TUAi].HOKMU).find("a").each(function() {
              andizxc(this).parent().attr({"role":"menuitem", "tabindex":"-1"});
            });
            andizxc(HnzhK[TUAi].mAMcq).each(function() {
              andizxc(this).attr({"tabindex":"0"});
            });
            andizxc(HnzhK[TUAi].mAMcq).closest(HnzhK[TUAi].HOKMU).each(function() {
              if (andizxc(this).find(HnzhK[TUAi].nztsT).length > 0) {
                andizxc(this).attr({"aria-haspopup":"true"});
              }
              andizxc(this).find("a").last().addClass("zlLwh");
            });
          } else {
            andizxc(HnzhK[TUAi].HOKMU).find("a").each(function() {
              andizxc(this).parent().attr({"role":"menuitem"});
            });
          }
          andizxc(HnzhK[TUAi].mAMcq).keydown(function(NfmpY) {
            if (NfmpY.keyCode == 9) {
              if (andizxc(".soQaw") != undefined && andizxc(".soQaw").length > 0) {
                andizxc(".soQaw").remove();
              }
              if (andizxc(".naJVg") != undefined && andizxc(".naJVg").length > 0) {
                andizxc(".naJVg").remove();
              }
              var D = andizxc(this).closest(HnzhK[TUAi].nfiXU).find(HnzhK[TUAi].nztsT).first();
              if (D != undefined && D.length > 0) {
                andizxc(this).closest(HnzhK[TUAi].nfiXU).css({"position":"relative"});
                andizxc(this).after('<button title="' + andiUA.KNTQg.pkzLa + '" class="soQaw"></button>');
                andizxc(".soQaw").css({"padding":"0", "margin":"0", "z-index":"999", "width":"25px", "height":"25px", "background-color":"transparent", "border":"none", "background-repeat":"no-repeat", "background-position":"50% 50%", "background-size":"75% 75%", "background-image":"url(" + NteyS.Svg.xemef + ")", "position":"absolute", "top":HnzhK[TUAi].PDjgg + "px", mtmaQ:HnzhK[TUAi].YDKHE + "px"});
                if (HnzhK[TUAi].ejFZQ == "left") {
                  andizxc(".soQaw").css({"left":HnzhK[TUAi].YDKHE + "px"});
                } else {
                  andizxc(".soQaw").css({"right":HnzhK[TUAi].YDKHE + "px"});
                }
                andizxc(".soQaw").bind("click", function(NfmpY) {
                  if (andizxc(".naJVg") != undefined && andizxc(".naJVg").length > 0) {
                    andizxc(".naJVg").remove();
                    andiUA.nAtDr(andiUA.KNTQg.XAhKC);
                  } else {
                    andiUA.nAtDr(andiUA.KNTQg.OWNMm);
                    NfmpY.preventDefault();
                    var TUAa = andizxc(this).closest(HnzhK[TUAi].nfiXU).find(HnzhK[TUAi].nztsT).first();
                    var ANDIb = andizxc(TUAa).clone().css({"max-height":"100%", "aria-hidden":"false", "left":"auto", "right":"auto", "display":"block", "opacity":"1", "visibility":"visible"}).addClass("naJVg");
                    andizxc(this).closest(HnzhK[TUAi].nfiXU).append(ANDIb);
                    andizxc(TUAa).find("*").attr({"tabindex":"-1", "aria-hidden":"true"});
                    andizxc(ANDIb).find("*").attr({"tabindex":"", "aria-hidden":""});
                    andizxc(ANDIb).find("a").focus(function() {
                      var ldTmG = this;
                      var ANDIf = andizxc(this).closest(HnzhK[TUAi].HQEZr).find(HnzhK[TUAi].Zbnil).first();
                      if (andizxc(".yZLah") != undefined && andizxc(".yZLah").length > 0) {
                        andizxc(".yZLah").remove();
                      }
                      if (andizxc(".YbYRv") != undefined && andizxc(".YbYRv").length > 0) {
                        andizxc(".YbYRv").remove();
                      }
                      if (ANDIf != undefined && andizxc(ANDIf).length > 0) {
                        andizxc(ANDIf).find("*").attr({"tabindex":"-1", "aria-hidden":"true"});
                        andizxc(this).after('<button title="' + andiUA.KNTQg.pkzLa + '" class="yZLah"></button>');
                        andizxc(".yZLah").css({"z-index":"999", "width":"40px", "height":"15px", "background-color":"transparent", "border":"none", "background-repeat":"no-repeat", "background-size":"100% 100%", "background-image":"url(" + NteyS.Svg.xemef + ")", "position":"absolute", "top":HnzhK[TUAi].PDjgg + "px", mtmaQ:HnzhK[TUAi].YDKHE + "px"});
                        if (HnzhK[TUAi].ejFZQ == "left") {
                          andizxc(".yZLah").css("left", HnzhK[TUAi].YDKHE + "px");
                        } else {
                          andizxc(".yZLah").css("right", HnzhK[TUAi].YDKHE + "px");
                        }
                        andizxc(".yZLah").bind("click", function(NfmpY) {
                          if (andizxc(".YbYRv") != undefined && andizxc(".YbYRv").length > 0) {
                            andizxc(".YbYRv").remove();
                            andiUA.nAtDr(andiUA.KNTQg.XAhKC);
                          } else {
                            andiUA.nAtDr(andiUA.KNTQg.OWNMm);
                            NfmpY.preventDefault();
                            andizxc(ANDIf).find("*").attr({"tabindex":"-1", "aria-hidden":"true"});
                            var ANDIg = andizxc(ANDIf).clone().css({"max-height":"100%", "aria-hidden":"false", "left":"auto", "right":"auto", "display":"block", "opacity":"1", "visibility":"visible"}).addClass("YbYRv");
                            andizxc(this).closest(HnzhK[TUAi].HQEZr).append(ANDIg);
                            andizxc(ANDIg).find("*").attr({"tabindex":"", "aria-hidden":""});
                            andizxc(ANDIg).find("a").last().addClass("cGDiu");
                            andizxc(ANDIg).find("*").focus(function() {
                              andizxc(this).css({"border":"1px solid #fff"});
                              andizxc(this).blur(function() {
                                andizxc(this).css({"border":""});
                              });
                            });
                          }
                        });
                      }
                      andizxc(this).css({"border":"1px solid #fff"});
                      andizxc(this).blur(function() {
                        andizxc(this).css({"border":""});
                      });
                    });
                  }
                });
                andizxc(HnzhK[TUAi].vHXGP).find("*").focus(function() {
                  andizxc(this).css({"border":"1px solid #fff"});
                  andizxc(this).blur(function() {
                    andizxc(this).css({"border":""});
                  });
                });
              }
            }
          });
          andizxc(document).on("focusout", ".zlLwh", function(NfmpY) {
            var ldTmG = this;
            var BqkGl = [];
            andizxc('a,button,input,[role="button"],[role="link"],[tabindex]').each(function() {
              BqkGl.push(andizxc(this).text());
            });
            var as = andizxc(ldTmG).text();
            if (NfmpY.keyCode == 9) {
              andizxc(BqkGl[andizxc.inArray(as, BqkGl) + 1]).focus();
            }
            if (andizxc(".soQaw") != undefined && andizxc(".soQaw").length > 0) {
              andizxc(".soQaw").remove();
            }
            if (andizxc(".naJVg") != undefined && andizxc(".naJVg").length > 0) {
              andizxc(".naJVg").remove();
            }
          });
        }
      });
    }
  };
  andiUA.tzaWg = function(kZZIq) {
    if (kZZIq !== undefined && kZZIq.length > 0) {
      andizxc(kZZIq).each(function(TUAj) {
        if (andiUA.zEktm(kZZIq[TUAj].LbWKm, kZZIq[TUAj].yfCnv)) {
          andiUA.pJHmF(kZZIq[TUAj]);
        }
      });
    }
  };
  andiUA.pJHmF = function(ldTmG) {
    if (!andizxc(this).is("[jfCSN]")) {
      andizxc(ldTmG.ldTmG).each(function(TUAi) {
        andizxc(this).attr({"role":"button", "jfCSN":"true", "XhTTR":"true", "EWnCM":"true"}).css({"cursor":"pointer"});
        //if (andizxc(this).attr("tabindex") == undefined || andizxc(this).attr("tabindex") != -1 || andizxc(this).attr("tabindex") == null) {
          andizxc(this).attr({"tabindex":"0"});
       // }
        var text = "", FtTIP = andizxc(this);
        if (ldTmG.UAtdr == "") {
          if (andizxc(FtTIP).is("IMG")) {
            text = andizxc(FtTIP).attr("alt");
            if (text == undefined || andizxc.trim(text) == "") {
              text = andizxc(FtTIP).attr("title");
            }
            if (text != undefined || andizxc.trim(text) != "") {
              andizxc(FtTIP).attr({"aria-label":text});
            }
          } else {
            if (andizxc(FtTIP).text() != undefined && andizxc(FtTIP).text() != null && andizxc.trim(andizxc(FtTIP).text()) != "") {
              andizxc(FtTIP).attr({"aria-label":text});
            }
          }
        } else {
          andizxc(FtTIP).attr({"aria-label":ldTmG.UAtdr});
        }
        andizxc(FtTIP).click(function() {
          if (ldTmG.cHOiJ !== "") {
            andizxc("body").append('<span class="ougqe" role="alert" aria-label="' + ldTmG.cHOiJ + '"></span>');
            setTimeout(function() {
              andizxc(".ougqe").remove();
            }, 500);
          }
          if (ldTmG.QwPVO != "") {
            setTimeout(function() {
              andizxc(ldTmG.QwPVO).attr("tabindex", "0").focus();
            }, 750);
          }
        });
      });
    }
  };
  andiUA.joVer = function(eHmhb) {
    if (eHmhb !== undefined && eHmhb.length > 0) {
      var iQBPT = UA('[onclick^="location"],[onclick^="window.open"]');
      for (var TUAi = 0; TUAi < iQBPT.length; TUAi++) {
        iQBPT[TUAi].setAttribute("role", "link");
        iQBPT[TUAi].setAttribute("tabindex", "0");
      }
      for (var TUAj = 0; TUAj < eHmhb.length; TUAj++) {
        if (andiUA.zEktm(eHmhb[TUAj].LbWKm, eHmhb[TUAj].yfCnv)) {
          if (eHmhb[TUAj].ldTmG != "") {
            var iQBPT = UA(eHmhb[TUAj].ldTmG);
            for (var TUAi = 0; TUAi < iQBPT.length; TUAi++) {
              if (!andizxc(this).is("[andiMhkir]")) {
                var HGUjV = iQBPT[TUAi].getAttribute("title");
                if (HGUjV != undefined && HGUjV != null && HGUjV.length > 1) {
                  iQBPT[TUAi].setAttribute("aria-label", HGUjV + ", " + eHmhb[TUAj].UAtdr);
                  iQBPT[TUAi].setAttribute("role", "link");
                  iQBPT[TUAi].setAttribute("tabindex", "0");
                  iQBPT[TUAi].setAttribute("andiMhkir", "true");
                } else {
                  iQBPT[TUAi].setAttribute("aria-label", eHmhb[TUAj].UAtdr);
                  iQBPT[TUAi].setAttribute("role", "link");
                  iQBPT[TUAi].setAttribute("tabindex", "0");
                  iQBPT[TUAi].setAttribute("andiMhkir", "true");
                }
              }
            }
          }
        }
      }
    }
  };
  andiUA.hKRVf = function(hKRVf) {
    andizxc(hKRVf).each(function(TUAi) {
      if (andiUA.zEktm(hKRVf[TUAi].LbWKm, hKRVf[TUAi].yfCnv)) {
        andizxc(hKRVf[TUAi].tuoxV).each(function(TUAj) {
          andizxc(this).attr({"role":"heading", "aria-level":hKRVf[TUAi].Nrorb});
        });
        andizxc("iframe").each(function() {
          try {
            var CxhBEIframe = andizxc(this);
            andizxc(hKRVf).each(function(TUAi) {
              andizxc(this).contents().find(hKRVf[TUAi].tuoxV).each(function(TUAj) {
                andizxc(this).attr({"role":"heading", "aria-level":hKRVf[TUAi].Nrorb});
              });
            });
          } catch (ANDIerr) {
          }
        });
      }
    });
  };
  andiUA.PwkJK = function(zqayb) {
    if (zqayb != undefined && zqayb.length > 0) {
      andizxc(zqayb).each(function(TUAi) {
        if (andiUA.zEktm(zqayb[TUAi].LbWKm, zqayb[TUAi].yfCnv)) {
          andizxc(zqayb[TUAi].cULEf).attr({"role":"article"});
          var aSTyx = andizxc(zqayb[TUAi].cULEf);
          andizxc(aSTyx).each(function(TUAj) {
            andiUA.lkecO(this);
          });
          var HashO = andiUA.TUAsettingFn.wxYsM;
          andizxc(zqayb[TUAi].cULEf).each(function(TUAj) {
            andiUA.jCHSf(HashO, this);
          });
        }
      });
    }
  };
  andiUA.lkecO = function(YDwKe) {
    if (!andizxc(YDwKe).is("[zCssO]")) {
      var UAtdr = "";
      var ANDIvKfJG = andizxc(YDwKe).find(andiUA.TUAsettingFn.wxYsM);
      var ANDIindex = 0;
	  for(var i = 0; i < ANDIvKfJG.length;i++){
		  UAtdr = andizxc(ANDIvKfJG[i]).text().trim();
			if (UAtdr != "") {
			  break;
			}
	  }
      if (UAtdr != "") {
        if (andizxc(YDwKe).find(andiUA.TUAsettingFn.VNsRT).last().attr("title") != undefined && andizxc(YDwKe).find("a").last().attr("title").trim() != "") {
          andizxc(YDwKe).find(andiUA.TUAsettingFn.VNsRT).last().attr("title", andizxc(YDwKe).find("a").last().attr("title").trim() + " " + UAtdr);
        } else {
          andizxc(YDwKe).find("a").last().attr("title", UAtdr);
        }
      }
      andizxc(YDwKe).attr("zCssO", "true");
    }
  };
  andiUA.jCHSf = function(HashO, YDwKe) {
    var ajxXj = andizxc(YDwKe).find("img");
    andizxc(ajxXj).each(function(TUAi) {
      if (!andizxc(this).is("[OOivc]")) {
        if (andizxc(this).attr("alt") == undefined || andizxc.trim(andizxc(this).attr("alt")) == "") {
          var MGUpK = TUAi;
          var xJZoQ = andizxc(this).closest('[role="article"]').find(HashO);
          if (xJZoQ != undefined && xJZoQ.length > 0) {
            andizxc(this).attr({"alt":andizxc(xJZoQ).first().text()});
          } else {
            xJZoQ = andizxc(YDwKe).find(HashO);
            var WvLDr = this;
            var hASaa = andizxc(YDwKe).find("*");
            var UMjrk = andizxc.inArray(WvLDr, hASaa);
            var dbuZJ = false;
            for (var TUAi = UMjrk; TUAi >= 0; TUAi--) {
              if (andizxc(hASaa[TUAi]).is(HashO)) {
                andizxc(WvLDr).attr({"OOivc":"true", "alt":andizxc(hASaa[TUAi]).text() + andiUA.KNTQg.GGrFy + (1 + MGUpK)});
                dbuZJ = true;
                break;
              }
            }
            if (!dbuZJ) {
              var xJZoQ = andizxc(this).nextAll(HashO);
              if (xJZoQ != undefined && xJZoQ.length > 0) {
                andizxc(this).attr({"OOivc":"true", "alt":andizxc(xJZoQ).first().text()});
              } else {
                xJZoQ = andizxc(YDwKe).find(HashO);
                var WvLDr = this;
                var hASaa = andizxc(YDwKe).find("*");
                var UMjrk = andizxc.inArray(WvLDr, hASaa);
                var dbuZJ = false;
                for (var TUAi = UMjrk; TUAi < hASaa.length; TUAi++) {
                  if (andizxc(hASaa[TUAi]).is(HashO)) {
                    andizxc(WvLDr).attr({"OOivc":"true", "alt":andizxc(hASaa[TUAi]).text() + " " + andiUA.KNTQg.GGrFy + " " + (1 + MGUpK)});
                    dbuZJ = true;
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
  andiUA.tWLYY = function(qZDvR) {
    if (qZDvR != undefined && qZDvR.length > 0) {
		var checkIflightboxopen = function(){
			for (var TUAi = 0; TUAi < qZDvR.length; TUAi++) {
				if (andiUA.zEktm(qZDvR[TUAi].LbWKm, qZDvR[TUAi].yfCnv)) {
					YMknI = qZDvR[TUAi].YMknI;
					KINwA = qZDvR[TUAi].KINwA;
					andiUA.wskxV(YMknI, KINwA);
					
				}
			}
		}
		setTimeout(function() {
			  checkIflightboxopen();
		}, 500);
		  var timer = null;
		  window.addEventListener('scroll', function() {
				if(timer !== null) {
					clearTimeout(timer);
				}
				timer = setTimeout(function() {
					  checkIflightboxopen();
				}, 300);
		  }, false);
		  andizxc(document).on('click',function(){
			  checkIflightboxopen();
		  });
		  andizxc(document).on('keydown',function(e){
			  if(e.keyCode == 13 || e.keyCode == 9 || e.keyCode == 32){
				TUAcurElement = document.activeElement;
				if(TUAcurElement.closest('[uapop]') == null){
					checkIflightboxopen();
				}
			  }
		  });
    }
  };
  andiUA.wskxV = function(YMknI, KINwA) {
    setTimeout(function() {
      TUAcurElement = document.activeElement;
      andizxc(YMknI).each(function() {
        var FtTIP = andizxc(this);
        if (andizxc(FtTIP).css("display") != "none" && andizxc(FtTIP).css("visibility") != "hidden") {
          if (andizxc(FtTIP).find(".MBtxi").length == 0) {
			andizxc(FtTIP).attr({'role':'dialog'});
            andizxc(FtTIP).prepend('<div class="MBtxi" tabindex="0"  aria-label="' + andiUA.KNTQg.fWPnd + '"></div>');
            andizxc(FtTIP).append('<div class="Yhdpx" tabindex="0" aria-label="' + andiUA.KNTQg.PzKjw + '"></div>');
            andizxc(FtTIP).find(".MBtxi").focus();
            andizxc(document).on("focus", ".Yhdpx", function() {
              andizxc(FtTIP).find(".MBtxi").focus();
            });
          }
        }
      });
      andizxc(KINwA).attr({"tabindex":"0", "role":"button", "aria-label":andiUA.KNTQg.DiIyH});
      andizxc(KINwA).on("keydown", function(NfmpY) {
        var keyCode = NfmpY.keyCode || NfmpY.which;
        if (keyCode == 13) {
          andizxc(this).click();
          setTimeout(function() {
            andizxc(".MBtxi").remove();
            andizxc(".Yhdpx").remove();
            if (TUAcurElement != undefined) {
              andizxc(TUAcurElement).focus();
            }
          }, 200);
        }
      });
    }, 800);
    andizxc(document).on("focusin", ".Yhdpx", function() {
      andizxc(".MBtxi").focus();
    });
    andizxc(document).on("keydown", function(NfmpY) {
      if (NfmpY.keyCode == 27) {
        andizxc(KINwA).click();
        setTimeout(function() {
          andizxc(".MBtxi").remove();
          andizxc(".Yhdpx").remove();
          if (TUAcurElement != undefined) {
            andizxc(TUAcurElement).focus();
          }
        }, 200);
      }
    });
  };
  andiUA.lRqGh = function(lRqGh) {
    if (lRqGh != undefined && lRqGh.length > 0) {
      if (!sessionStorage.lRqGh) {
        setTimeout(function() {
          andizxc("body").prepend('<p role="alert" tabindex="0" style="position: absolute; overflow: hidden; clip: rect(0 0 0 0);height: 1px;width: 1px;">' + lRqGh + "</p>");
          sessionStorage.lRqGh = 1;
        }, 500);
      }
    }
  };
  andiUA.VLDFX = function(NcoOi) {
    if (NcoOi != undefined && NcoOi.length > 0) {
      var NteyS = andiUA.eqFML();
      if (NcoOi != undefined) {
        andizxc(NcoOi).each(function(TUAi) {
          if (andiUA.zEktm(NcoOi[TUAi].LbWKm, NcoOi[TUAi].yfCnv)) {
            var linkNum = TUAi;
            andizxc(NcoOi[TUAi].ndBWz).focus(function() {
              var IppIt = this;
              var ratBc = andizxc.inArray(this, andizxc(NcoOi[TUAi].ndBWz));
              var InXvf = andizxc(NcoOi[TUAi].nTNrS);
              andizxc(InXvf[ratBc]).click(function() {
                andizxc(".AWpcw").remove();
                andizxc(InXvf[ratBc]).css({"position":"relative"}).append('<div tabindex="0" role="button" title="' + andiUA.KNTQg.ymvbk + '" class="AWpcw"></div>');
                andizxc(".AWpcw").css({"padding":"0", "margin":"0", "z-index":"999", "width":"20px", "height":"20px", "background-color":"transparent", "border":"none", "background-repeat":"no-repeat", "background-position":"100% 100%", "background-image":"url(" + NteyS.Svg.xemef + ")", "position":"absolute", "background-size":"100%", "top":NcoOi[TUAi].uNgwV, "left":NcoOi[TUAi].yvGTA});
                andizxc(".AWpcw").click(function() {
                  andizxc(NcoOi[TUAi].uuMPC[ratBc]).css({"display":"block", "position":"relative"}).attr({"tabindex":"0"}).focus();
                  andizxc(NcoOi[TUAi].FuvqA).append('<div tabindex="0" role="button" title="' + andiUA.KNTQg.QEedd + '" class="QEedd"></div>');
                  andizxc(".QEedd").css({"-ms-transform":" rotate(180deg)", "-o-transform":" rotate(180deg)", "-webkit-transform:":" rotate(180deg)", "-moz-transform":" rotate(180deg)", "padding":"0", "margin":"0", "z-index":"999", "width":"40px", "height":"15px", "background-color":"transparent", "border":"none", "background-repeat":"no-repeat", "background-position":"50% 50%", "background-size":"50% 50%", "background-image":"url(" + NteyS.Svg.xemef + ")", "position":"absolute", 
                  "bottom":"10px"}).click(function() {
                    andizxc(IppIt).focus();
                  }).keydown(function(NfmpY) {
                    var keyCode = NfmpY.keyCode || NfmpY.which;
                    if (keyCode == 13) {
                      andizxc(this).click();
                    }
                  });
                  andiUA.KUYwN(andiUA.TUAsettingFn.Jfsad);
                }).keydown(function(NfmpY) {
                  var keyCode = NfmpY.keyCode || NfmpY.which;
                  if (keyCode == 13) {
                    andizxc(this).click();
                  }
                });
                andiUA.KUYwN(andiUA.TUAsettingFn.Jfsad);
              });
              if (ratBc == 0) {
                andizxc(IppIt).click();
              }
            });
          }
        });
      }
    }
  };
  andiUA.oGMfe = function(HycTM, usvFe) {
    if (HycTM != undefined) {
      var aLClD = UA(HycTM);
      for (var TUAi = 0; TUAi < aLClD.length; TUAi++) {
        aLClD[TUAi].setAttribute("aria-checked", "true");
      }
    }
    if (usvFe != undefined) {
      var aLClD = UA(usvFe);
      for (var TUAi = 0; TUAi < aLClD.length; TUAi++) {
        aLClD[TUAi].setAttribute("aria-checked", "false");
      }
    }
  };
  andiUA.TUAjFBoX = function(TUAjFBoX) {
    if (TUAjFBoX != undefined && TUAjFBoX.length > 0) {
      andizxc(TUAjFBoX).each(function(TUAj) {
        if (andiUA.zEktm(TUAjFBoX[TUAj].LbWKm, TUAjFBoX[TUAj].yfCnv)) {
          var xwEDs = TUAjFBoX[TUAj].xwEDs;
          var wHLZp = TUAjFBoX[TUAj].wHLZp;
          var PrwcO = TUAjFBoX[TUAj].PrwcO;
          var $xwEDs = andizxc(xwEDs), $wHLZp = andizxc(wHLZp);
          andiUA.ZVHiJ(xwEDs, $wHLZp);
          $xwEDs.each(function(TUAi) {
            var $FtTIP = andizxc(this);
            $FtTIP.attr({"aria-label":andiUA.KNTQg.iTCFX + $FtTIP.text(), "role":"button", "tabindex":"0"}).click(function() {
              andiUA.ZVHiJ(xwEDs, $wHLZp);
            });
            if (!PrwcO) {
              $FtTIP.attr({"jfCSN":"true"});
            }
          });
          andizxc("iframe").each(function(TUAi) {
            try {
              var TUAa = andizxc(this);
              var $xwEDs = andizxc(TUAa).contents().find(xwEDs), $wHLZp = andizxc(TUAa).contents().find(wHLZp);
              andiUA.ZVHiJ(xwEDs, $wHLZp);
              $xwEDs.each(function(TUAi) {
                var $FtTIP = andizxc(this);
                $FtTIP.attr({"aria-label":andiUA.KNTQg.iTCFX + $FtTIP.text(), "role":"button", "tabindex":"0"}).click(function() {
                  andiUA.ZVHiJ(xwEDs, $wHLZp);
                });
                if (!PrwcO) {
                  $FtTIP.attr({"jfCSN":"true"});
                }
              });
            } catch (ANDIerr) {
             
            }
          });
        }
      });
    }
  };
  andiUA.ZVHiJ = function(xwEDs, $wHLZp) {
    $wHLZp.each(function(TUAi) {
      var $FtTIP = andizxc(this);
      var xwEDss = andizxc(xwEDs);
      if ($FtTIP.attr("id") != undefined && $FtTIP.attr("id") != "") {
        andizxc(xwEDss[TUAi]).attr({"aria-controls":$FtTIP.attr("id")});
      }
      if (!$FtTIP.kgzrQ2()) {
        if ($FtTIP.attr("id") != undefined && $FtTIP.attr("id") != "") {
          $FtTIP.attr({"aria-expanded":"true"});
        } else {
          andizxc(xwEDss[TUAi]).attr({"aria-expanded":"true"});
        }
      } else {
        if ($FtTIP.attr("id") != undefined && $FtTIP.attr("id") != "") {
          $FtTIP.attr({"aria-expanded":"false"});
        } else {
          andizxc(xwEDss[TUAi]).attr({"aria-expanded":"false"});
        }
      }
    });
  };
  andiUA.eFoNl = function(eFoNl) {
    if (eFoNl != undefined && eFoNl.length > 0) {
      andizxc(eFoNl).each(function(TUAi) {
        if (andiUA.zEktm(eFoNl[TUAi].LbWKm, eFoNl[TUAi].yfCnv)) {
          andizxc(eFoNl[TUAi].KJMJH).find("a").each(function(TUAj) {
            if (TUAj == 0) {
              andizxc(this).attr({"role":"link", "aria-label":andiUA.KNTQg.BQRES});
            } else {
              andizxc(this).attr({"role":"link", "aria-label":andiUA.KNTQg.jIPQU + andizxc(this).text()});
            }
          });
          var tayoV = andizxc(eFoNl[TUAi].KJMJH).find("a").last().parent().next();
          andizxc(tayoV).attr({"aria-label":andiUA.KNTQg.djCRV + andizxc(tayoV).text()});
        }
      });
    }
  };
  andiUA.XOUgn = function(IhPDE) {
    if (IhPDE != undefined && IhPDE.length > 0) {
      andizxc(IhPDE).each(function(TUAi) {
        if (andiUA.zEktm(IhPDE[TUAi].LbWKm, IhPDE[TUAi].yfCnv)) {
          if (IhPDE[TUAi].EieZn != "") {
            EieZn = IhPDE[TUAi].EieZn;
            MsHRh = IhPDE[TUAi].MsHRh;
            svYKd = IhPDE[TUAi].svYKd;
            AWpTi = IhPDE[TUAi].AWpTi;
            lvjbq = IhPDE[TUAi].lvjbq;
            zlwkJ = IhPDE[TUAi].zlwkJ;
            HhJCi = IhPDE[TUAi].HhJCi;
            andizxc(EieZn).each(function(TUAj) {
              var $FtTIP = andizxc(this);
              $FtTIP.find(svYKd).each(function() {
                andizxc(this).attr({"title":andiUA.KNTQg.svYKd + andizxc(this).text()});
              });
              $FtTIP.find(MsHRh).attr({"title":andiUA.KNTQg.MsHRh + $FtTIP.find(MsHRh).text()});
              $FtTIP.find(AWpTi).attr({"title":andiUA.KNTQg.AWpTi});
              $FtTIP.find(lvjbq).attr({"title":andiUA.KNTQg.lvjbq});
              $FtTIP.find(zlwkJ).attr({"title":andiUA.KNTQg.zlwkJ});
              $FtTIP.find(HhJCi).attr({"title":andiUA.KNTQg.HhJCi});
            });
          }
        }
      });
    }
  };
  andiUA.YjADs = function() {
    andizxc(".Bvuob").css({"width":window.innerWidth, "height":window.innerHeight});
    var a = parseInt(andizxc(window).width() * 0.8);
    var b = parseInt(andizxc("body").css("margin-left"));
    var c = parseInt(andizxc("body").css("margin-right"));
    andizxc(".HBQgA").css({"width":a - c, "height":window.innerHeight * 0.8, "margin-top":window.innerHeight * 0.1, "margin-right":andizxc(window).width() * 0.1, "margin-left":andizxc(window).width() * 0.1});
  };
  andiUA.DYANF = function(ERDKq, data, whereToGoBackAfterClose) {
    whereToGoBackAfterClose = whereToGoBackAfterClose || undefined;
    var iArRP = andiUA.KNTQg;
    andizxc("body").prepend('<div class=" Bvuob"></div>');
    var KrFJt = andizxc("html").attr("DOwbI");
    andizxc(".Bvuob").prepend('<div class=" HBQgA" tabindex="0"><input type="image" src="' + andiUA.EglES.WcpNq + '" id="DHvyi" alt="' + andiUA.KNTQg.GYxDi + '" aria-label=""/></div>');
    andizxc(".HBQgA").append('<div class=" HBQgAFirstFocus" aria-label="' + andiUA.KNTQg.fWPnd + '" role="alert" tabindex="0"></div>');
    andizxc(".HBQgA").append(data);
    andizxc(".HBQgA").wrapInner('<div tabindex="0" class=" "></div>');
    andizxc(".HBQgA").append('<div class=" HBQgALastFocus" tabindex="0"></div>');
    andizxc(".HBQgA").append('<div class=" PzKjw" aria-label="' + andiUA.KNTQg.PzKjw + '" role="alert" tabindex="0"></div>');
    andiUA.YjADs();
    window.addEventListener("resize", function() {
      andiUA.YjADs();
    });
    andizxc(".HBQgAFirstFocus").focus();
    andizxc(".HBQgALastFocus").focus(function() {
      andizxc("#DHvyi").focus();
    });
    andizxc("#DHvyi").click(function() {
      andizxc(".Bvuob").remove();
      andizxc("#NMqnM").remove();
      andizxc(ERDKq).focus();
      andiUA.nAtDr(iArRP.DiIyH);
    });
    andizxc(document).keydown(function(e) {
      if (e.keyCode == 27) {
        andizxc(".Bvuob").remove();
        andizxc("#NMqnM").remove();
        andizxc(ERDKq).focus();
        andiUA.nAtDr(iArRP.DiIyH);
        if (whereToGoBackAfterClose != undefined) {
          andizxc(whereToGoBackAfterClose).focus();
        }
      }
    });
  };
  
  
  andiUA.LCKsN = function(sQXGk) {
    if (andiUA.TUAsettingFn.sQXGk.length > 0) {
      localStorage.setItem("sQXGk", "yes");
      
      setInterval(function() {
        if (andiUA.numbersOfElms > UA("*").length + 10 || andiUA.numbersOfElms < UA("*").length - 10) {
		  andiUA.numbersOfElms = UA("*").length;
          andiUA.sWtsP();
          andiUA.loadmore();
        }
      }, 6000);
    }
  };
 
    
  andiUA.TUAhidearea = function() {
    andiUA.TUAsettingFn.TUAhidearea.forEach(function(item, j) {
      TUApausehidearea = function(area, index, firstImg, desc,  thisPouseBtn, CnoZw) {
        var QHGZt = firstImg, CnoZw = UA1(CnoZw);
        if (thisPouseBtn.hasClass('TUAhideareaPauseOff')) {
			thisPouseBtn.removeClass('TUAhideareaPauseOff')
			
          var ouCAx = CnoZw.offsetWidth;
          var aGqbd = CnoZw.offsetHeight;
          CnoZw.querySelectorAll("*:not(.uapauseSliderImg):not(.TUAhideareaPauseOff):not(.gQirn)").forEach(function(ldTmG, i) {
            ldTmG.addCss({"opacity":"0"});
            ldTmG.addAttr({"tabindex":"-1", "aria-hidden":"true"});
          });
          CnoZw.appendHtml('<div id="KJMJHTUAhidearea' + index + '" tabindex="0" style="overflow:hidden;width:' + ouCAx + "px;height:(" + aGqbd + ')px;"><span id="KmZzv" role="tooltip">' + andiUA.KNTQg.bbb435 + '</span><div class="TUAinnerWrapAccessibilityhideareaPause' + index + '" ></div></div>');
          UA1("#KJMJHTUAhidearea" + index).addCss({"opacity":"1", "z-index":"99998", "height":aGqbd + 20 + "px", "width":ouCAx + "px", "position":"absolute", "top":"0", "overflow":"hidden"});
          UA1(".TUAinnerWrapAccessibilityhideareaPause" + index).addCss({"background-color":andiUA.TUAsettingFn.zqayb.backgroundColor, "width":ouCAx + 20, "height":aGqbd, "z-index":"99999989", "position":"relative", "top":"0", "overflow-y":"scroll", "overflow-x":"hidden"});
          UA1(".TUAinnerWrapAccessibilityhideareaPause" + index).appendHtml('<img style="width:300px;margin:' + 0 + 'px   calc(50% - 150px)" src="' + firstImg + '" alt="">');
          UA1(".TUAinnerWrapAccessibilityhideareaPause" + index).addAttr({"tabindex":"0"});
          UA1(".TUAinnerWrapAccessibilityhideareaPause" + index).focus();
        } else {
			thisPouseBtn.addClass('TUAhideareaPauseOff');
		  if(UA1("#KJMJHTUAhidearea" + index)) UA1("#KJMJHTUAhidearea" + index).zOhhK();
          area.querySelectorAll("*").forEach(function(ldTmG, index) {
            ldTmG.addCss({"opacity":""});
            ldTmG.addAttr({"tabindex":"", "aria-hidden":"false"});
          });
        }
      };
	  
	  
      var arrOfArea = UA(item.ANDIVARappndTo);
      arrOfArea.forEach(function(area, index) {
		  index = j+''+index;
        if (area.tagName.toLowerCase() != "body" && area.tagName.toLowerCase() != "html" && !area.closest("#jilVt") && area.querySelectorAll("*").length > 2) {
          var firstImg = andiUA.KpAEX + "/images/hideeye.png", desc = item.hideareadesc;
          area.addCss({"position":"relative"});
          area.addAttr({"role":"region", "aria-label":andiUA.KNTQg.bbb444});
          area.brAmf('<div class="TUAhideareaPauseOff" style="top:'+item.ANDIVARpositionFromTop + 'px;'+item.ANDIVARleftOrRight+':'+item.ANDIVARpositionFromSide +'px;width: 20px;height: 20px; position: absolute;z-index: 99999;" id="TUAhidearea' + index + '" role="button" tabindex="0"><img class="uapauseSliderImg TUAhideareaPauseOff" src="' + andiUA.EglES.stop + ' " id="TUAopenAccessibilityTUAhideareaPause' + index + '" title="' + andiUA.KNTQg.bbb1751 + " " + desc + '" alt="' + andiUA.KNTQg.bbb1751 + " " + desc + '"></div>');
		  andizxc(document).on('click',"#TUAopenAccessibilityTUAhideareaPause" + index, function() {
            TUApausehidearea(area, index, firstImg, desc, this, item.hideareaContainer);
          });
        }
      });
	  
    });
  };
  
    andiUA.UeFgQ = function(TZoiu) {
    if (TZoiu != undefined && TZoiu.length > 0) {
      andizxc(TZoiu).each(function(TUAi) {
        andizxc(TZoiu[TUAi].ldTmG).each(function(TUAj) {
          andizxc(this).attr({"aria-label":TZoiu[TUAi].nVseU, "TUAandiInputdiscrp":TZoiu[TUAi].nVseU});
        });
      });
      andizxc("iframe").each(function(x) {
        try {
          andizxc(TZoiu).each(function(b) {
            andizxc(this).contents().find(TZoiu[b].ldTmG).each(function(TUAj) {
              andizxc(this).attr({"aria-label":TZoiu[b].nVseU, "TUAandiInputdiscrp":TZoiu[b].nVseU});
            });
          });
        } catch (e) {
         
        }
      });
    }
  };
  
   andiUA.keys = {KBQEs:["search", "srch"], zTduJ:["required", "*"], NUytp:["\u05de\u05e1\u05e4\u05e8", "num", "number"], GydPD:["minlength"], GnhBC:["maxlength"], MSDaC:["mail", "\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9", "\u05de\u05d9\u05d9\u05dc"], khxNw:["name", "firstname", "fname", "\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9", "\u05e9\u05dd \u05de\u05dc\u05d0", 
  "first name"], Hnrfh:["lastname", "lname", "\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4", "last name"], pBBHW:["UserName", "User Name", "\u05e9\u05dd \u05de\u05ea\u05e9\u05de\u05e9"], ytJtP:["password", "pass", "\u05e1\u05d9\u05e1\u05de\u05d4"], edvpp:["password confirm", "passwordconfirm", "password_confirm", "confirm password", "confirmpassword", "confirm_password", "\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d4"], 
  clZjy:["address"], xfkWq:["country"], DkfIW:["city"], UBZhC:["street"], JRlun:["zip", "postcode"], IudEW:["POBox"], xfBjE:["phone", "telephone", "tel", "mobile", "fax", "\u05e4\u05e7\u05e1", "\u05e0\u05d9\u05d9\u05d3", "\u05de\u05d5\u05d1\u05d9\u05d9\u05dc", "\u05e1\u05dc\u05d5\u05dc\u05e8\u05d9"], ZBXLn:["prefix", "pref"], PwNyg:["date"], FPBjz:["yy", 
  "yyyy", "\u05e9\u05e0\u05d4", "\u05e9\u05e0\u05ea \u05dc\u05d9\u05d3\u05d4", "\u05e9\u05e0\u05ea", "year"], jiVvJ:["mm", "month", "\u05d7\u05d5\u05d3\u05e9"], BiKuO:["\u05d9\u05d5\u05dd", "day"], XlJJc:["cardmonth", "expdate_month", "expdatemonth"], SsEkb:["cardyear"], mVEto:["cc", "creditcard", "\u05d0\u05e9\u05e8\u05d0\u05d9", "\u05db\u05e8\u05d8\u05d9\u05e1", "cardno", "cardnumb", "card_Id"], CbgBX:["payments"], 
  nhmJt:["cvv", "\u05e7\u05d5\u05d3 \u05d0\u05d1\u05d8\u05d7\u05ea \u05db\u05e8\u05d8\u05d9\u05e1", "3 \u05e1\u05e4\u05e8\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05e0\u05d5\u05ea \u05d1\u05d2\u05d1 \u05d4\u05db\u05e8\u05d8\u05d9\u05e1"], dxIQF:["captcha", "accesscode"], UZHBl:["units", "amount", "quantity", "item"], OJVDM:["message", "msg", "textarea", "comments", "content", "description", "dscrpt"], qnlPh:["subject", "\u05d4\u05d5\u05d3\u05e2\u05d4"], 
  QXTrB:["next", "leftarrow"], LDjnq:["prev", "rightarrow"], bRYKf:['scroll-up',"scroll-top", "to the top", "to-the-top", "scrollUp", "to-top", "totop", "#top"], wxKwe:["rubric", "title", "heading", "caption"]};
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
                aLClD[TUAa].setAttribute("tabindex", "0");
                aLClD[TUAa].setAttribute("role", "link");
                aLClD[TUAa].setAttribute("aria-label", andiUA.KNTQg.YPXCp);
              }
            }
            for (var ii in andiUA.keys.QXTrB) {
              if (Trowb.indexOf(andiUA.keys.QXTrB[ii]) > -1) {
                aLClD[TUAa].setAttribute("tabindex", "0");
                aLClD[TUAa].setAttribute("role", "button");
              }
            }
            for (var ii in andiUA.keys.LDjnq) {
              if (Trowb.indexOf(andiUA.keys.LDjnq[ii]) > -1) {
                aLClD[TUAa].setAttribute("tabindex", "0");
                aLClD[TUAa].setAttribute("role", "button");
              }
            }
            for (var ii in andiUA.keys.wxKwe) {
              if (Trowb.indexOf(andiUA.keys.wxKwe[ii]) > -1) {
                if (!andizxc(aLClD[TUAa]).is("h1,h2,h3,h4,h5,h6,h1 *,h2 * ,h3 * ,h4 *,h5 *,h6 *")) {
                  if (andizxc(aLClD[TUAa]).IKBzO().trim() != "") {
                    aLClD[TUAa].setAttribute("role", "heading");
                    aLClD[TUAa].setAttribute("aria-level", "2");
                    lLLEA.wxKwe++;
                  }
                }
              }
            }
          }
        }
      };
      var aLClD = UA(RXwGF);
      DkfJI(aLClD);
      andiUA.xMoMd = UA("iframe");
      for (var TUAi = 0; TUAi < andiUA.xMoMd.length; TUAi++) {
        try {
          var aLClD = andiUA.xMoMd[TUAi].contentWindow.UA(RXwGF);
          DkfJI(aLClD);
        } catch (e) {
          
        }
      }
    } catch (e$0) {
    
    }
  };
  
  
  	window.rcVSn2 = function(el) {
        if (!(el instanceof Element)) 
            return;
        var path = [];
        while (el.nodeType === Node.ELEMENT_NODE) {
            var selector = el.nodeName.toLowerCase();
            /*if (el.id) {
				if(hasNumber(el.id)){
					var thisId = el.id;
					thisId = thisId.replace(/\d+$/, "");
					selector += '[id^="'+thisId+'"]';
				} else{
					selector += '#' + el.id;
				}
                path.unshift(selector);
                break;
            } else {
                var sib = el, nth = 1;
                while (sib = sib.previousElementSibling) {
                    if (sib.nodeName.toLowerCase() == selector)
                       nth++;
                }
                if (nth != 1)
                    selector += ":nth-of-type("+nth+")";
            }*/
            path.unshift(selector);
            el = el.parentNode;
        }
        return path.join(" > ");
     }
	 
	 
  andiUA.RwkAtFN = function() {
    if (UA("#RwkAtStyle").length == 0) {
      var uiWAD = localStorage.getItem("uiWAD");
      UA1("head").appendHtml('<style id="RwkAtStyle">\
	  #RwkAt a:focus{outline:2px solid #000 !important;} \
	  #RwkAt li {display:block !important;} \
	  #RwkAt h2{text-align:center;} \
	  #RwkAt{margin: 0 auto !important; text-align:center;width: 50%;} \
	  #RwkAt a { background-color:' + localStorage.getItem("uiWAD") + " !important;text-align: center !important; margin:5px; color:#fff !important;\
       vertical-align:top !important; display:block !important;box-sizing:border-box; padding:5px; max-width: 200px !important;}\
	   #RwkAt a:not([firstlevellink]) {margin: 5px 75px 0;}\
		\</style>");
    }
    function openRwkAtBtn(wrapMenu) {
      wrapMenu += ' a:not([href="#"])';
	  var rcVSnLink = (window.rcVSn2(UA1(wrapMenu)) )
      var text = '<div id="RwkAt"><h2>' + andiUA.KNTQg.UAtdr2160 + "</h2><ul></ul></div>";
      andiUA.menuMessageAlert(text, "body");
      var cloneMenuLinks = UA(wrapMenu);
      var newULMenu = UA1("#RwkAt > ul");
      var arrOfcloneMenuLinkes = [];
      setTimeout(function() {		  
        cloneMenuLinks.forEach(function(VnIxP, i) {			
			if(VnIxP.isIt(rcVSnLink)){				
				var cloneA = VnIxP.cloneNode(true);
				cloneA.setAttribute('firstLevelLink','true');
				newULMenu.appendChild(cloneA);
			} else {
				var cloneA = VnIxP.cloneNode(true);
				newULMenu.appendChild(cloneA);
			}
         
        });
        UA("#RwkAt > ul a").forEach(function(VnIxP, i) {
          VnIxP.addAttr({"tabindex":"0"});
          VnIxP.wrapInner("li");
        });
        UA1("#RwkAt > ul a").focus();
      }, 750);
    }
    andiUA.TUAsettingFn.wRXtA.forEach(function(el, i) {
      var wrapMenu = el.HOKMU;
      UA(el.HOKMU).forEach(function(el2, j) {
        el2.brAmf('<div tabindex="0" role="button" class="ZWDCr" id="RwkAtBtn' + i + j + '">' + andiUA.KNTQg.UAtdr2161 + "</div>");
        UA1("#RwkAtBtn" + i + j).addEventListener("click", function() {
          
          if (!UA1("#menuMessageAlert")) {
            openRwkAtBtn(el.HOKMU);
          }
        });
      });
    });
	
	
	
  };
  
  
  andiUA.TextAnalysis = function(isDynamic) {
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
          //thisElm.addClass("andiruns");
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
                    thisElm.wrapInner("div");
                    thisElm.parentElement.setAttribute("style", "display:inline;");
                    thisElm.parentElement.setAttribute("role", "heading");
                    thisElm.parentElement.setAttribute("aria-level", level);
                    countFixedHeading++;
                  } else {
                    thisElm.setAttribute("role", "heading");
                    thisElm.setAttribute("aria-level", level);
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
};
  
  	andiUA.ML = function(isDynamic) {
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
      if (elemText == "|" && !child.hasClass("NLWxW") && !child.hasAttribute("role")) {
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
                countFixedHeading++;*/
              } else {
                child.setAttribute("role", "heading");
                child.setAttribute("aria-level", level);
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
    if (!elm.hasClass("uainput")) {
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
      elm.addClass("uainput");
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
//andiUA.ML();
  
 andiUA.fixNoAlt = function(){
	document.querySelectorAll('img').forEach(function(elm,i){
		if(!elm.hasAttribute('alt')){
			elm.setAttribute('alt','');
		}
	});
}

andiUA.sWtsP = function(newElems) {
 
	andiUA.TextAnalysis();

	
    var colorHeadingChangeElms = 'a ,a *,h1 ,h2 ,h3 ,h4 ,h5 ,h6 ,h1 *,h2 *,h3 *,h4 *,h5 *,h6 *,[role="heading"],[role="heading"] *';
    var colorFocsuElmsChangeElms = '[role="link"],[role="button"],a, area, input, select, textarea, button, *[tabindex], *[contenteditable],iframe';
    if (location.host.indexOf("google.com") == -1) {
      //andiUA.TextAnalysis("dynamic");
    }
    andiUA.elmWithText = null;
    andiUA.elmWithText = UA("[data-andiallelmwithtext]");
    if (localStorage.getItem("ScJKe") == "yes") {
      andiUA.tgUXd("aaa");
    }
    if (localStorage.getItem("JPRSV") == "yes") {
      andiUA.PFYhH(localStorage.getItem("TUASizeText"), "");
      andiUA.checkactiveSizeTextBtn(localStorage.getItem("TUASizeText"));
      andiUA.PwzIv(localStorage.getItem("TUASizeText"));
    }
    if (localStorage.getItem("xPEGE") == "yes") {
      andiUA.PFYhH(localStorage.getItem("TUASizeText"), "");
      andiUA.checkactiveSizeTextBtn(localStorage.getItem("TUASizeText"));
      andiUA.PwzIv(localStorage.getItem("TUASizeText"));
    }
    var TUAnavigateWithLettersElm = UA1("#TUAnavigateWithLetters");
    if (TUAnavigateWithLettersElm !== null && TUAnavigateWithLettersElm.hasClass("vKDQY")) {
      andiUA.PhVFONavigateWithLetters();
    }
    if (localStorage.getItem("TUAreviledHiddingInfo") == "yes") {
      andiUA.PhVFOReviledHiddingInfo();
    }
	andiUA.fixNoAlt();
    setTimeout(function() {
      var qpPts = localStorage.getItem("lobQs");
      if (qpPts != null && qpPts != "") {
        andiUA.CIGHd(localStorage.getItem("SYIen"), localStorage.getItem("lobQs"), "");
      }
      var qpPts = localStorage.getItem("xqNoE");
      if (qpPts != null && qpPts != "") {
        andiUA.CIGHd(localStorage.getItem("xNWTD"), localStorage.getItem("xqNoE"), "");
      }
      var qpPts = localStorage.getItem("EjAoO");
      if (qpPts != null && qpPts != "") {
        andiUA.CIGHd(localStorage.getItem("kItEx"), localStorage.getItem("EjAoO"), "");
      }
      if (localStorage.getItem("mzWNy") == "yes") {
        andiUA.VmzyF("black", "");
      }
      if (localStorage.getItem("TUAwhiteContrast") == "yes") {
        andiUA.VmzyF("white", "");
      }
    }, 390);
    //andiUA.YODzI();
    //andiUA.MuUxo();
    andiUA.iJjjZ(andiUA.TUAsettingFn.AfMwa);
    andiUA.WiqOa();
    andiUA.TUAsrMsg("\u05ea\u05d5\u05db\u05df \u05d7\u05d3\u05e9 \u05e0\u05d8\u05e2\u05df \u05d1\u05d3\u05e3 \u05d5\u05d4\u05d5\u05e0\u05d2\u05e9");
  };
  andiUA.cnfkD = function() {
    setTimeout(function() {
      andiUA.hKRVf(andiUA.TUAsettingFn.hKRVf);
      andiUA.joVer(andiUA.TUAsettingFn.eHmhb);
    }, 0);
    setTimeout(function() {
      andiUA.KUYwN(andiUA.TUAsettingFn.Jfsad);
    }, 30);
    setTimeout(function() {
      andiUA.tWLYY(andiUA.TUAsettingFn.qZDvR);
      andiUA.PwkJK(andiUA.TUAsettingFn.BIYfd);
		andiUA.UeFgQ(andiUA.TUAsettingFn.UeFgQSetting);
      andiUA.tzaWg(andiUA.TUAsettingFn.kZZIq);
    }, 95);
  };
  andiUA.TvwnQ = function() {
	  andiUA.fixNoAlt();
	   andizxc('thead td, table > tr:nth-child(1) td').attr('role','columnheader');
    setTimeout(function() {
      andiUA.markTextLagn();
      andiUA.lRqGh(andiUA.TUAsettingFn.lRqGh);
      andiUA.dHUef(andiUA.TUAsettingFn.GNLiy);
	  andiUA.iJjjZ(andiUA.TUAsettingFn.AfMwa);
      andiUA.eFoNl(andiUA.TUAsettingFn.eFoNl);
      andiUA.gHCxG(andiUA.TUAsettingFn.zpUVk);
      andiUA.tEGWn();
      andiUA.wCZIH(andiUA.TUAsettingFn.vdxVW);
      andiUA.VLDFX(andiUA.TUAsettingFn.NcoOi);
      andiUA.jCXyR(andiUA.TUAsettingFn.pBKRk.oGxam);
      andiUA.TUAjFBoX(andiUA.TUAsettingFn.TUAjFBoX);
      andiUA.XOUgn(andiUA.TUAsettingFn.IhPDE);
      andiUA.Smibn();
      andiUA.tzaWg(andiUA.TUAsettingFn.kZZIq);
	  andiUA.TUAfixedcontenttable();
	  andiUA.numbersOfElms = UA("*").length;
    }, 135);
    andiUA.TUAhidearea();

    andiUA.getScript(andiUA.KpAEX + "/js/scan2.js", andiUA.emptyFn);
  };
  andiUA.credit();
  HlkJn = false;
  setTimeout(function() {
    andiUA.cnfkD();
  }, 0);
  setTimeout(function() {
	  andiUA.fixNoAlt();
    andiUA.TvwnQ();
    andiUA.RwkAtFN();
    
  }, 50);
};
fRqYC();									 
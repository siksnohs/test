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

(function(){
	window.isSelectorValid = function(selector) {
  var dummy = document.createElement("br");
  return function(selector) {
    try {
      dummy.querySelector(selector);
    } catch (e) {
      return false;
    }
    return true;
  };
}();
		UA = JS.$ = function(elem) {
	  return document.querySelectorAll(elem);
	};
	UA1 = JS.first = function(elem) {
	  return document.querySelector(elem);
	};
	andiaddCss = function(elm, cssValues) {
	  elm = document.querySelectorAll(elem);
	  JS.$(elm).forEach(function(el) {
		Object.keys(cssValues).forEach(function(attr) {
		  var styleProp = attr.preperCssNameRole(), cssValue = cssValues[attr];
		  el.style[styleProp] = cssValue;
		});
	  });
	};

	UA = function(cssSelctor){
		if(typeof(cssSelctor) == 'string')
			return document.querySelectorAll(cssSelctor);
		return cssSelctor;
	}
	
	UA1 = function(cssSelctor){
		if(typeof(cssSelctor) == 'string')
			return document.querySelector(cssSelctor);
		return cssSelctor;
	}
	
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
				//console.log(aSel.join(' > '));
				return aSel.join(' > ');
			}
			elSrc = elSrc.parentNode;
		  }
     }
	 
	 
	 
	if (!Array.prototype.includes) {
        Array.prototype.includes = function(searchElement) {
            if (this == null) {
                throw new TypeError("Array.prototype.includes called on null or undefined");
            }
            var O = Object(this);
            var len = parseInt(O.length, 10) || 0;
            if (len === 0) {
                return false;
            }
            var n = parseInt(arguments[1], 10) || 0;
            var k;
            if (n >= 0) {
                k = n;
            } else {
                k = len + n;
                if (k < 0) {
                    k = 0;
                }
            }
            var currentElement;
            while (k < len) {
                currentElement = O[k];
                if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
                    return true;
                }
                k++;
            }
            return false;
        };
    }
	if (!Array.prototype.filter){
	Array.prototype.filter = function(func, thisArg) {
		if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
			throw new TypeError();
		var len = this.length >>> 0,
			res = new Array(len), 
			t = this, c = 0, i = -1;
		if (thisArg === undefined){
		  while (++i !== len){
			if (i in this){
			  if (func(t[i], i, t)){
				res[c++] = t[i];
			  }
			}
		  }
		}
		else{
		  while (++i !== len){
			if (i in this){
			  if (func.call(thisArg, t[i], i, t)){
				res[c++] = t[i];
			  }
			}
		  }
		}
	   
		res.length = c;
		return res;
	  };
	}
if (!Element.prototype.triggerEvent)
	Element.prototype.triggerEvent = function(type) {
	   if ('createEvent' in document) {
			var e = document.createEvent('HTMLEvents');
			e.initEvent(type, false, true);
			this.dispatchEvent(e);
		} else {
			var e = document.createEventObject();
			e.eventType = type;
			this.fireEvent('on'+e.eventType, e);
		}
	};
	if (!Element.prototype.elmParents)
	Element.prototype.elmParents = function(selector) {
		var elements = [];
		var elem = this;
		var ishaveselector = selector !== undefined;
	 
		while ((elem = elem.parentElement) !== null) {
			if (elem.nodeType !== Node.ELEMENT_NODE) {
				continue;
			}
	 
			if (!ishaveselector || elem.matches(selector)) {
				elements.push(elem);
			}
		}
	 
		return elements;
	};
	
	(function (arr) {
	  arr.forEach(function (item) {
		if (item.hasOwnProperty('before')) {
		  return;
		}
		Object.defineProperty(item, 'before', {
		  configurable: true,
		  enumerable: true,
		  writable: true,
		  value: function before() {
			var argArr = Array.prototype.slice.call(arguments),
			  docFrag = document.createDocumentFragment();
			
			argArr.forEach(function (argItem) {
			  var isNode = argItem instanceof Node;
			  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
			});
			
			this.parentNode.insertBefore(docFrag, this);
		  }
		});
	  });
	})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

	(function (arr) {
	  arr.forEach(function (item) {
		if (item.hasOwnProperty('after')) {
		  return;
		}
		Object.defineProperty(item, 'after', {
		  configurable: true,
		  enumerable: true,
		  writable: true,
		  value: function after() {
			var argArr = Array.prototype.slice.call(arguments),
			  docFrag = document.createDocumentFragment();
			
			argArr.forEach(function (argItem) {
			  var isNode = argItem instanceof Node;
			  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
			});
			
			this.parentNode.insertBefore(docFrag, this.nextSibling);
		  }
		});
	  });
	})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

if (!Element.prototype.isIt)
	Element.prototype.isIt = function(selector) {
	  return (this.matches || this.matchesSelector || this.msMatchesSelector || this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector).call(this, selector);
	};

	if (!String.prototype.TUAfilename)
    String.prototype.TUAfilename = function(extension) {
        var TUAs = this.replace(/\\/g, "/");
        TUAs = TUAs.substring(TUAs.lastIndexOf("/") + 1);
        return extension ? TUAs.replace(/[?#].+$/, "") : TUAs.split(".")[0];
    };
	if (!String.prototype.TUAfilename2)
    String.prototype.TUAfilename2 = function(extension) {
        var TUAs = this.replace(/\\/g, "/");
        TUAs = TUAs.substring(TUAs.lastIndexOf("/") + 1);
        return TUAs;
    };
	if (!String.prototype.TUAreplaceAll)
    String.prototype.TUAreplaceAll = function(TUAsearchStr, TUAreplaceStr) {
        var str = this;
        TUAsearchStr = TUAsearchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        return str.replace(new RegExp(TUAsearchStr, "gi"), TUAreplaceStr);
    };
	if (!String.prototype.preperCssNameRole)
    String.prototype.preperCssNameRole = function() {
        var str = this;
        str = str.TUAreplaceAll("-", " ").toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
            return p1 + p2.toUpperCase();
        });
        str = str.charAt(0).toLowerCase() + str.slice(1);
        return str.TUAreplaceAll(" ", "");
    };

	
	var isEmptyObject = function (obj) {
		for(var prop in obj) {
			if(obj.hasOwnProperty(prop))
				return false;
		}
		return JSON.stringify(obj) === JSON.stringify({});
	}
	if (!NodeList.prototype.forEach)
    NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

	if (!Element.prototype.matches)
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

	if (!Element.prototype.closest)
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(s) {
            var TUAel = this;
            var ancestor = this;
            if (!document.documentElement.contains(TUAel)) {
                return null;
            }
            do {
                if (ancestor.matches(s)) {
                    return ancestor;
                }
                ancestor = ancestor.parentElement;
            } while (ancestor !== null);
            return null;
        };
    }

	if (!Element.prototype.removeAttr)
    Element.prototype.removeAttr = function(attrName) {
		this.removeAttribute(attrName);
    };

    Element.prototype.addAttr = function(attrValues) {
        var TUAthat = this;
        Object.keys(attrValues).forEach(function(attr) {
            TUAthat.setAttribute(attr, attrValues[attr]);
        });
    };

												  
	if (!Element.prototype.getAttr)
    Element.prototype.getAttr = function(attrName) {
        return this.getAttribute(attrName);
    };
    
	Element.prototype.addAttrElm  = function(attrValues) {
	    var TUAthat = this;
        Object.keys(attrValues).forEach(function(attr) {
            TUAthat.setAttribute(attr, attrValues[attr]);
        });
    };													  


	if (!Element.prototype.getText)
    Element.prototype.getText = function() {
        var TUAthat = this;
        return this.textContent || this.innerText;
    };

	if (!Element.prototype.addCss)
    Element.prototype.addCss = function(cssValues) {
        var TUAthat = this;
        Object.keys(cssValues).forEach(function(attr) {
            var styleProp = attr.preperCssNameRole(),
                cssValue = cssValues[attr];
            TUAthat.style[styleProp] = cssValue;
        });
    };

	if (!Element.prototype.getCss)
    Element.prototype.getCss = function(cssValues) {
        return window.getComputedStyle(this, null).getPropertyValue(cssValues);
    };

	if (!Element.prototype.removeElm)
    Element.prototype.removeElm = function() {
        this.parentNode.removeChild(this);
    };

	if (!Element.prototype.getHtml)
    Element.prototype.getHtml = function() {
        return this.innerHTML;
    };

	if (!Element.prototype.setHtml)
    Element.prototype.setHtml = function(newHtml) {
        this.innerHTML = newHtml;
    };

	if (!Element.prototype.appendHtml)
    Element.prototype.appendHtml = function(newHtml) {
        this.insertAdjacentHTML("beforeend", newHtml);
    };

	if (!Element.prototype.prependHtml)
    Element.prototype.prependHtml = function(newHtml) {
        this.insertAdjacentHTML("afterbegin", newHtml);
    };

	if (!Element.prototype.afterHtml)
    Element.prototype.afterHtml = function(newHtml) {
        this.insertAdjacentHTML("afterend", newHtml);
    };

	if (!Element.prototype.beforeHtml)
    Element.prototype.beforeHtml = function(newHtml) {
        this.insertAdjacentHTML("beforebegin", newHtml);
    };
	if (!Element.prototype.addAnimate)
    Element.prototype.addAnimate = function(attrValues, times) {
        var TUAthat = this;
		setTimeout(function(){
			times = times || "1";
			times = " " + times + "s";
			var transitionSetting = '';
			Object.keys(attrValues).forEach(function(attr) {
				var styleProp = attr.preperCssNameRole(), cssValue = attrValues[attr];
				TUAthat.style[styleProp] = cssValue;
				transitionSetting += attr + times +',';
			});		
			transitionSetting = transitionSetting.substring(0, transitionSetting.length - 1);
			TUAthat.style.transition = transitionSetting;
		},0);
    };
	
	if (!String.prototype.replaceAll)
	String.prototype.replaceAll = function(UAxRXACNearchStr, UAyUztYeplaceStr) {
	  var str = this;
	  UAxRXACNearchStr = UAxRXACNearchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	  return str.replace(new RegExp(UAxRXACNearchStr, "gi"), UAyUztYeplaceStr);
	};

	if (!Element.prototype.addClass)
    Element.prototype.addClass = function(classNames) {
        this.classList.add(classNames);
    };

	if (!Element.prototype.removeClass)
    Element.prototype.removeClass = function(classNames) {
        this.classList.remove(classNames);
    };
	
	if (!Element.prototype.hasClass)
    Element.prototype.hasClass = function(className) {
        if(this.classList.contains(className)){return true;}
		return false;
    };

	if (!Element.prototype.insertAfter)
    Element.prototype.insertAfter = function(newNode) {
        this.parentNode.insertBefore(newNode, this.nextSibling);
    };
	
	if (!Element.prototype.insertBeforeElm)
	Element.prototype.insertBeforeElm = function(TUAel) {
		this.parentNode.insertBefore(TUAel, this);
	};

	if (!Element.prototype.TUAifElmIsHidden)
    Element.prototype.TUAifElmIsHidden = function() {
        return !!(this.offsetWidth || this.offsetHeight || this.getClientRects().length || this.clientWidth !== 0 || this.clientHeight !== 0);
    };
	
	if (!Element.prototype.prev)	
	Element.prototype.prev = function() {
		return getSiblings(this, 'prev')[0];
    };
	
	if (!Element.prototype.next)
	Element.prototype.next = function() {
		return getSiblings(this, 'next')[0];
    };
	
	if (!Element.prototype.find)
	Element.prototype.find = function(cssSelector) {
		return this.querySelectorAll(cssSelector);
    };
	
	if (!Element.prototype.parent)
	Element.prototype.parent = function() {
		return this.parentElement;
    };
	
	if (!Element.prototype.appendTo)
	Element.prototype.appendTo = function(cssSelctor) {
		document.querySelector(cssSelctor).appendChild(this);
    };

	if (!Element.prototype.wrapInner)
	Element.prototype.wrapInner = function(wrapper, id, newClass) {
		id = id || '';
		newClass = newClass || '';
		var wrapper = document.createElement(wrapper);
		if(id !== '')wrapper.id = id;
		if(newClass !== '')wrapper.setAttribute("class", newClass);
        this.parentNode.insertBefore(wrapper, this);
		wrapper.appendChild(this);
    };

	if (!Element.prototype.width)
	Element.prototype.width = function(TUAnumber) {
		TUAnumber = TUAnumber || '';
		if(TUAnumber != ''){
			this.style.width = TUAnumber + 'px';
		} else {
			return this.clientWidth;
		}
    };
	
	if (!Element.prototype.height)
	Element.prototype.height = function(TUAnumber) {
		TUAnumber = TUAnumber || '';
		if(TUAnumber != ''){
			this.style.height = TUAnumber + 'px';
		} else {
			return this.clientHeight;
		}
    };
	
	if (!Element.prototype.toggleClass)
	Element.prototype.toggleClass = function(className) {
		if(this.hasClass(className) ){
			this.removeClass(className);
		} else {
			this.addClass(className);
		}
    };
	
	if (!Element.prototype.offset)
	Element.prototype.offset = function() {
		var offset = {};
		var box = this.getBoundingClientRect();
		var body = document.body;
		var docEl = document.documentElement;
		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;
		var top  = box.top +  scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;
		offset.top = Math.round(top);
		offset.left = Math.round(left);
		return offset;
	}
	
	if (!Element.prototype.animateCSS)
	Element.prototype.animateCSS = function( cssArr, timeToRun){
		var TUAel = this;
		cssArr.forEach(function(cssProrepty,index){
			var cssProrepties = cssProrepty[0];
			var operator = cssProrepty[1];
			var endValue = cssProrepty[2];
			var unit = TUAel.getCss(cssProrepties);
			if(unit.indexOf('px')>-1){unit = 'px'}
			else if(unit.indexOf('%')>-1){unit = '%'}
			else if(unit.indexOf('em')>-1){unit = 'em'}
			else if(unit.indexOf('rem')>-1){unit = 'rem'}
			else if(unit.indexOf('vw')>-1){unit = 'vw'}
			else if(unit.indexOf('vh')>-1){unit = 'vh'}
			else if(unit.indexOf('cm')>-1){unit = 'cm'}
			else if(unit.indexOf('mm')>-1){unit = 'mm'}
			else if(unit.indexOf('in')>-1){unit = 'in'}
			else if(unit.indexOf('pt')>-1){unit = 'pt'}
			else {unit = ''}
			var currntValue = parseInt(TUAel.getCss(cssProrepties));
			var speend = (endValue - currntValue)/timeToRun;
			speend = speend*10;
			var animate = setInterval(frame, 10);
			function frame() {
				currntValue = currntValue + speend;
				TUAel.style[cssProrepties] = currntValue + unit;
				switch(operator) {
					case '>=':
						if (currntValue >= endValue) {
							TUAel.style[cssProrepties] = endValue + unit;
							clearInterval(animate);
						}
						break;
					case '<=':
						if (currntValue <= endValue) {
							TUAel.style[cssProrepties] = endValue + unit;
							clearInterval(animate);
						}
						break;
				}
			}
		});
	}
	
	if (!Element.prototype.slideDown)
	Element.prototype.slideDown = function(time) {
        time = time || 1;
        this.addCss({'display':'block','opacity':'1'});
        this.addAnimate({'max-height':'2000px'},time);
    };
    	
	if (!Element.prototype.slideUp)
    Element.prototype.slideUp = function(time) {
        time = time || 1;
        this.addAnimate({'max-height':'0'},time);
        setTimeout(function(){
            this.addCss({'display':'none','opacity':'0'});
        },(time*1000));
    };
    
	if (!Element.prototype.fadeOut)
    Element.prototype.fadeOut = function(time) {
		time = time || 1;
        this.addAnimate({'opacity':'0'},time);
		setTimeout(function(){
			this.style.display = 'none';
		},(time*1000));
    };
		
	if (!Element.prototype.fadeIn)
    Element.prototype.fadeIn = function(time) {
		time = time || 1;
		this.style.display = 'block';
        this.addAnimate({'opacity':'1'},time);
    };
	
	if (!Element.prototype.TUAisVisible)
    Element.prototype.TUAisVisible = function() {
        function TUA_isVisible(TUAel, TUAt, TUAr, TUAb, TUAl, TUAw, TUAh) {
            var TUAp = TUAel.parentNode,
                TUAVISIBLE_PADDING = 2;
            if (!TUA_elementInDocument(TUAel)) {
                return false;
            }
            if (9 === TUAp.nodeType) {
                return true;
            }
            if ("0" === TUA_getStyle(TUAel, "opacity") || "none" === TUA_getStyle(TUAel, "display") || "hidden" === TUA_getStyle(TUAel, "visibility")) {
                return false;
            }
            if ("undefined" === typeof TUAt || "undefined" === typeof TUAr || "undefined" === typeof TUAb || "undefined" === typeof TUAl || "undefined" === typeof TUAw || "undefined" === typeof TUAh) {
                TUAt = TUAel.offsetTop;
                TUAl = TUAel.offsetLeft;
                TUAb = TUAt + TUAel.offsetHeight;
                TUAr = TUAl + TUAel.offsetWidth;
                TUAw = TUAel.offsetWidth;
                TUAh = TUAel.offsetHeight;
            }
            if (TUAp) {
                if ("hidden" === TUA_getStyle(TUAp, "overflow") || "scroll" === TUA_getStyle(TUAp, "overflow")) {
                    if (TUAl + TUAVISIBLE_PADDING > TUAp.offsetWidth + TUAp.scrollLeft || TUAl + TUAw - TUAVISIBLE_PADDING < TUAp.scrollLeft || TUAt + TUAVISIBLE_PADDING > TUAp.offsetHeight + TUAp.scrollTop || TUAt + TUAh - TUAVISIBLE_PADDING < TUAp.scrollTop) {
                        return false;
                    }
                }
                if (TUAel.offsetParent === TUAp) {
                    TUAl += TUAp.offsetLeft;
                    TUAt += TUAp.offsetTop;
                }
                return TUA_isVisible(TUAp, TUAt, TUAr, TUAb, TUAl, TUAw, TUAh);
            }
            return true;
        }

        function TUA_getStyle(TUAel, property) {
            if (window.getComputedStyle) {
                return document.defaultView.getComputedStyle(TUAel, null)[property];
            }
            if (TUAel.TUAcurrentStyle) {
                return TUAel.TUAcurrentStyle[property];
            }
        }

        function TUA_elementInDocument(element) {
            while (element = element.parentNode) {
                if (element == document) {
                    return true;
                }
            }
            return false;
        }
        return TUA_isVisible(this);
    };

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchValue, index) {
            var len = this.length >>> 0;
            index |= 0;
            if (index < 0) {
                index = Math.max(len - index, 0);
            } else {
                if (index >= len) {
                    return -1;
                }
            }
            if (searchValue === undefined) {
                do {
                    if (index in this && this[index] === undefined) {
                        return index;
                    }
                } while (++index !== len);
            } else {
                do {
                    if (this[index] === searchValue) {
                        return index;
                    }
                } while (++index !== len);
            };
            return -1;
        };
    };
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
			andizxc('body').append('\
			<div class="askForLogin" style="direction:rtl;z-index:9999999999999999999999999999;color: #fff; background: rgba(0,0,0,0.85); width: 250px; padding: 10px; border-radius: 7px; position: fixed; left: 10px; top: calc(95% - 200px);font-size: 15px;text-align: center;">\
			<div style=" display: inline-block; width: 100%; ">על מנת להשתמש בתוסף של מערכת FAST עליך להיות מחובר. האם להעביר אותך למערכת על מנת להתחבר?</div>\
			<div class="askForLoginBtnYes" style="height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >כן</div>\
			<div class="askForLoginBtnNo" style=" height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >לא</div></div>');
			andizxc('.askForLoginBtnYes').click(function(){
				window.location = 'https://system.user-a.co.il/login';
			});	
			andizxc('.askForLoginBtnNo').click(function(){
				localStorage.setItem('dontOpenNewWin',true);
				andizxc('.askForLogin').remove();
			});
			setTimeout(function(){
				andizxc('.askForLogin').remove();
			},8000);
		}
	}


	chackIfLogIn = function(isLogIn){
		if(localStorage.getItem("dontOpenNewWin") != 'true' && window.location.href.indexOf("https://system.user-a.co.il/login") == -1 ){
			andizxc('body').append('\
			<div class="askForLogin" style="direction:rtl;z-index:9999999999999999999999999999;color: #fff; background: rgba(0,0,0,0.85); width: 250px; padding: 10px; border-radius: 7px; position: fixed; left: 10px; top: calc(95% - 200px);font-size: 15px;text-align: center;">\
			<div style=" display: inline-block; width: 100%; ">You must be logged on to use the FAST system plugin. Do you want to login?</div>\
			<div class="askForLoginBtnYes" style="height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >Yes</div>\
			<div class="askForLoginBtnNo" style=" height:50px; display: inline-block; width: 100%; vertical-align: top; text-align: center; padding: 5px;border: 1px solid #fff;" role="button" tabindex="0" >No</div></div>');
			andizxc('.askForLoginBtnYes').click(function(){
				window.location = 'https://system.user-a.co.il/login';
			});	
			andizxc('.askForLoginBtnNo').click(function(){
				localStorage.setItem('dontOpenNewWin',true);
				andizxc('.askForLogin').remove();
			});
			setTimeout(function(){
				andizxc('.askForLogin').remove();
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
				} else {
					thisMeaning = thisLink.getAttr('title').trim();
				}
			} else {
				thisMeaning = thisLink.getAttr('aria-label').trim();
			}
		} else {
			thisMeaning = thisLink.getText().trim();
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
			if(el.find('a').length == 1){
				setLogoMeaning(el.find('a')[0]);
			}
		});
	};
	
	function checkTableis(allDATAarr, table, url_string){
		if(!andizxc(table).is('#TUATUAcontainer, #TUATUAcontainer *,#TUArightMouseMenu, #TUArightMouseMenu *,#TUAUAwrapAccessibilityMenu, #TUAUAwrapAccessibilityMenu *')){
			var thisMeaning = '--';
			var moreData = '--';
			var isContentIssue = 'yes';
			var note = 'Not fixed';
			var temp = 'Not fixed';
			var thisELm = window.cssPath(table);
			if(table.getAttr('aria-label') && table.getAttr('aria-label').trim() != ''){
				thisMeaning = table.getAttr('aria-label').trim();
				temp = 'Fixed';
			} else if(table.find('caption')[0] && table.find('caption')[0].getText() != '' ){
				thisMeaning = table.find('caption')[0].getText();
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
			//console.log(err)
		}
	}
		
			
	function runScan(){
		var url_string = window.location.href; 
		if(localStorage.getItem('client_id') != null && localStorage.getItem('client_id') != 'null'){
			if(!UA1('#andiifuserlogin')){
				thisIframe = 'andiifuserlogin2';
				andizxc('body').append('<iframe tabindex="-1" onload="strart();" aria-hidden="true" scrolling="no" style="display:none;" id="andiifuserlogin2" src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"></iframe>');
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
			andizxc('body').prepend('\
			<div class="fastScanSite" style="direction:rtl;z-index:999999999;color: #fff; background: rgba(0,0,0,0.85); height: '+window.innerHeight+'px; width: 100%; padding: 10px; border-radius: 7px; position: fixed; left: 0; top: 0;font-size: 15px;text-align: center;">\
			<div class="fastScanSiteText" style=" display: inline-block; width: 100%; "><div style="font-size:20px;"> FAST system is currently crawling the website</div>\
			<div class="FASTaction">\
			</div>\
			</div>\
			</div>'); 
			andizxc('.FASTaction').append('<span class="stratScanSAVE" >Analyzing data ...<span><br/>');	
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
		var url_string = window.location.href.replaceAll('scan=true','').replaceAll('andi=1','')
		url_string = removeParams(url_string,'elm');
		var allDATA = '';
		var allDATAarr = [];
		/* links */
		andizxc('.FASTaction').append('<span class="loading" style="display:block;"><img style="width:80px;margin:100px;" src="'+jsPath+'/images/loading.gif" alt="???? ????" /></span>');
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
				if(andizxc(thisLink).is('[role="main"] a, main a')){
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
					} else if( andizxc(btn).is('button,[type="submit"],[type="image"],[type="reset"],[type="button"]') ){
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
		if(headingArr)
		headingArr.forEach(function(heading,i){
			if(  heading[1].trim() != '' && heading[1] != '--' && !checkIfAndiCode(heading) && !andizxc(heading).is('label, p')){
				var thisMeaning = heading[1] || "--";
				var moreData = heading[2].toString();
				var isContentIssue = 'yes';
				var note = 	(andizxc(heading[0]).attr('role') == 'heading' && heading[0].hasAttribute('aria-level'))?'Fixed':heading[3];
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
		if (!Element.prototype.getText)
			Element.prototype.getText = function() {
				var TUAthat = this;
				return this.textContent || this.innerText;
			};

		/*allTexts = [];		
		duplicatesTexts = [];		
		document.querySelectorAll('a,button,[role="link"],[role="button"]').forEach(function(elm,i){	
			if(!checkIfAndiCode(elm)){
				var thisText = elm.getText().trim();
				if(thisText != ''){
					if(allTexts.indexOf(thisText) == -1){
						allTexts.push(thisText);
					} else {
						if(duplicatesTexts.indexOf(thisText) == -1){
							duplicatesTexts.push(thisText);
						}
					}
				}
			}
		});
		
		for(var i = 0;i< duplicatesTexts.length;i++){
			var elms1 = getElementsByText(duplicatesTexts[i] , 'a');		
			var elms2 = getElementsByText(duplicatesTexts[i] , 'button');		
			var elms3 = getElementsByText(duplicatesTexts[i] , '[role="link"]');		
			var elms4 = getElementsByText(duplicatesTexts[i] , '[role="button"]');
			if(elms1.length > 2  ){					
				var IsOK = checkForDuplicate(elms1, 'title');
				var IsOK2 = checkForDuplicate(elms1, 'aria-label');
				if(IsOK == 'Fixed' || IsOK2 == 'Fixed'){
					isitok = 'maybe';
				} else {
					isitok = 'no';
				}
				var thisELm = window.cssPath(elms1[0]).trim();
				var note = 'Number of elements: ' + elms1.length;
				//addToallDATAarr(allDATAarr, "duplicatesContent",thisELm, duplicatesTexts[i],'--', url_string, note,isContentIssue,isitok,3,7,'Duplicates Content');
			}
			if(elms2.length > 2  ){					
				var IsOK = checkForDuplicate(elms2, 'title');
				var IsOK2 = checkForDuplicate(elms2, 'aria-label');
				if(IsOK == 'Fixed' || IsOK2 == 'Fixed'){
					isitok = 'maybe';
				} else {
					isitok = 'no';
				}
				var thisELm = window.cssPath(elms2[0]);
				var note = 'Number of elements: ' + elms2.length;
				//addToallDATAarr(allDATAarr, "duplicatesContent",thisELm, duplicatesTexts[i],'--', url_string, note,isContentIssue,isitok,3,7,'Duplicates Content');
			}
			if(elms3.length > 2  ){					
				var IsOK = checkForDuplicate(elms3, 'title');
				var IsOK2 = checkForDuplicate(elms3, 'aria-label');
				if(IsOK == 'Fixed' || IsOK2 == 'Fixed'){
					isitok = 'maybe';
				} else {
					isitok = 'no';
				}
				var thisELm = window.cssPath(elms3[0]).trim();
				var note = 'Number of elements: ' + elms3.length;
				//addToallDATAarr(allDATAarr, "duplicatesContent",thisELm, duplicatesTexts[i],'--', url_string, note,isContentIssue,isitok,3,7,'Duplicates Content');
			}
			if(elms4.length > 2  ){					
				var IsOK = checkForDuplicate(elms4, 'title');
				var IsOK2 = checkForDuplicate(elms4, 'aria-label');
				if(IsOK == 'Fixed' || IsOK2 == 'Fixed'){
					isitok = 'maybe';
				} else {
					isitok = 'no';
				}
				var thisELm = window.cssPath(elms4[0]).trim();
				var note = 'Number of elements: ' + elms4.length;
				//addToallDATAarr(allDATAarr, "duplicatesContent",thisELm, duplicatesTexts[i],'--', url_string, note,isContentIssue,isitok,3,7,'Duplicates Content');
			}
		}*/

		/*logosArr = [];				
		logos();			
		var allLogoStr = '';
		if(logosArr.length > 0){
			logosArr.forEach(function(logo,i){
			if(!checkIfAndiCode(logo)){
					var thisMeaning = '--';
					var moreData = 'Not fixed';
					var isContentIssue = 'no';
					var note = '--';
					var thisELm = window.cssPath(logo);						
					if(logo){
						moreData = checkLinkClickable(logo);
						thisMeaning = checkLink(logo);
						
						var isitok = ((moreData == 'Clickable' && thisMeaning != '--' && thisMeaning.length > 2)?'maybe':'no');
						addToallDATAarr(allDATAarr, "logo",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,7,'Logo');
					}
				}
			});
		}*/
		
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
		/*var allmenuStr = '';
		var arrAllMenus = [];
		var wrapArrArea = UA('[role="navigation"], [role="menu"]');
		wrapArrArea.forEach(function(TUAel,i) {
			var idEL = !checkIfAndiCode(TUAel);
			if( TUAel.querySelectorAll('a,[role="link"]').length  > 0 && !TUAel.isIt('input,textarea,select,header,main,[role="main"],body') && (idEL) ){
				if(TUAel.closest('nav')){
					arrAllMenus.push(TUAel.closest('nav'))
				} else if(TUAel.querySelector('nav')){
					arrAllMenus.push(TUAel.querySelector('nav'));
				} else if(!TUAel.closest('[role="menubar"],[role="navigation"]')){
					arrAllMenus.push(TUAel);
				}	
			}
		});
		if(arrAllMenus.length > 0){
			arrAllMenus.forEach(function(menu,i){
			if(!checkIfAndiCode(menu)){
					var thisMeaning = '--';
					var temp = '';
					var note = '--';
					var isContentIssue = 'no';
					var moreData = '--';
					var thisELm = window.cssPath(menu);
					if(menu.querySelectorAll('[role="menuitem"]').length > 0){
						note = 'Fixed';
						menu.querySelectorAll('a').forEach(function(menuLink,j){
							if(menuLink.hasAttribute('role') && menuLink.getAttribute('role') != "menuitem" ){
								note = 'wrong menuitem';
							}
						});			
						menu.querySelectorAll('li').forEach(function(menuLink,j){
							if(menuLink.hasAttribute('role') &&(menuLink.getAttribute('role') != "none") && menuLink.getAttribute('role') != "presentation") {
								note = 'wrong ARIA roles';
							}
						});
					} else {
						note = 'no menuitem';
					}
					
					var isitok = ((note == 'Fixed')?'maybe':'no');
					addToallDATAarr(allDATAarr, "menu",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,9,'Menus');
				}
			});	
		}*/
		/*var allmainareaStr = '';
		if(document.querySelectorAll('[role="main"],main').length == 0){
			var thisMeaning = '--';
			var note = 'no main';
			var isContentIssue = 'no';
			var moreData = '--';
			var thisELm = '--';
			var isitok = ((note == 'Fixed')?'maybe':'no');
			addToallDATAarr(allDATAarr, "main",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,10,'Main content area');
		} else if(document.querySelectorAll('[role="main"],main').length == 1){
			var thisMeaning = '--';
			var note = 'Fixed';
			var isContentIssue = 'no';
			var moreData = '--';
			var thisELm = window.cssPath(document.querySelector('[role="main"],main'));
			var isitok = ((note == 'Fixed')?'maybe':'no');
			addToallDATAarr(allDATAarr, "main",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,10,'Main content area');
		} else {
			document.querySelectorAll('[role="main"],main').forEach(function(main,i){
			if(!checkIfAndiCode(main)){
					var thisMeaning = '--';
					var temp = '';
					var note = '--';
					var isContentIssue = 'no';
					var moreData = '--';
					var thisELm = window.cssPath(main);
					if(main.hasAttribute('aria-label') && main.getAttribute('aria-label') != "" ){
						note = 'Fixed';
					} else {
						note = 'No description';
					}
					
					var isitok = ((note == 'Fixed')?'maybe':'no');
					addToallDATAarr(allDATAarr, "main",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,10,'Main content area');
				}
			});	
		}*/
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
			if( andizxc(BRTAG).next().is('br') && !checkIfAndiCode(BRTAG)){
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
		/*
		var allduplicateIDStr = '';
		document.querySelectorAll('[id]').forEach(function(elmID, i){
			if(!checkIfAndiCode(elmID)){
				var thisMeaning = '--';
				var temp = '';
				var note = '--';
				var isContentIssue = 'no';
				var moreData = '--';
				var thisELm = '#'+elmID.id;
				var thisID = elmID.id;
				if(document.querySelectorAll('[id="'+thisID+'"]').length > 1){
					note = 'No fixed';
				} else {
					note = 'Fixed';
				}
				
				var isitok = ((note == 'Fixed')?'maybe':'no');
				addToallDATAarr(allDATAarr, "duplicateID",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,2,16,'Duplicate ID');					
			}
		});
		*/
		//TUAisEnglish    TUAisRussian    TUAisHebrew    TUAisArabic
		/*
		var allTextLangAttrStr = '';
		document.querySelectorAll('[andiallelmwithtext]').forEach(function(elmID, i){
			if(!andizxc(elmID).is('#TUATUAcontainer, #TUATUAcontainer *,#TUArightMouseMenu, #TUArightMouseMenu *,#TUAUAwrapAccessibilityMenu, #TUAUAwrapAccessibilityMenu *')){
				var thisMeaning = '--';
				var temp = '';
				var note = '--';
				var isContentIssue = 'yes';
				var moreData = '--';
				var thisELm = window.cssPath(elmID);
				var thisID = elmID.id;
				console.log(thisID)
				if(document.querySelectorAll('[id="'+thisID+'"]').length > 1){
					note = 'No fixed';
				} else {
					note = 'Fixed';
				}
				allTextLangAttrStr += 'allTextLang@@'+thisELm+'@@'+thisMeaning.trim()+'@@'+moreData.trim()+'@@'+note.trim()+'@@'+isContentIssue + '||';
				console.log(allTextLangAttrStr)
			}
			
		});
		if(allTextLangAttrStr != ''){
			var url_string = window.location.href.replaceAll('scan=true','').replaceAll('andi=1','')
			TUAafterLoadingIframe3(thisIframe, ( removeParams(url_string,'elm')  ) +"@@@"+localStorage.getItem('client_id')+"@@@"+localStorage.getItem('groupID')+"@@@" + allTextLangAttrStr );
		}	*/
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

		if(localStorage.getItem("scanForMonitor") != 'true'){
			var $ = andizxc;
			var contrastErrors = {
				errors: [],
				warnings: [],
				good: [],
			};
			var contrast = {
				// Parse rgb(r, g, b) and rgba(r, g, b, a) strings into an array.
				// Adapted from https://github.com/gka/chroma.js
				parseRgb: function (css) {
					var i, m, rgb, _i, _j;
					if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
						rgb = m.slice(1, 4);
						for (i = _i = 0; _i <= 2; i = ++_i) {
							rgb[i] = +rgb[i];
						}
						rgb[3] = 1;
					} else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
						rgb = m.slice(1, 5);
						for (i = _j = 0; _j <= 3; i = ++_j) {
							rgb[i] = +rgb[i];
						}
					}
					return rgb;
				},
				// Based on http://www.w3.org/TR/WCAG20/#relativeluminancedef
				relativeLuminance: function (c) {
					var lum = [];
					for (var i = 0; i < 3; i++) {
						var v = c[i] / 255;
						lum.push(v < 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
					}
					return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
				},
				// Based on http://www.w3.org/TR/WCAG20/#contrast-ratiodef
				contrastRatio: function (x, y) {
					var l1 = contrast.relativeLuminance(contrast.parseRgb(x));
					var l2 = contrast.relativeLuminance(contrast.parseRgb(y));
					return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
				},
				// Based on http://jsfiddle.net/Y4uDL/
				getBackground: function (el) {
					var bgColor = el.css('background-color');
					var bgImage = el.css('background-image');

					if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent' && bgImage === "none") {
						return bgColor;
					} else if (bgImage !== "none") {
						return "image";
					}

					if (el.is('html')) {
						return 'rgb(255, 255, 255)';
					} else {
						return contrast.getBackground(el.parent());
					}
				},
				check: function () {
					$('*:visible').each(function () {
						if(!checkIfAndiCode(this) ){
					//$('*').each(function () {
						var $this = $(this),
							color = $this.css('color'),
							background = contrast.getBackground($this),
							htmlTag = $this[0].tagName,
							textCheck = $this.clone().children().remove().end().text(),
							ratingString,
							fontSizeString,
							failed;

						if (htmlTag === "SVG") {
							var fill = $this.css('fill'),
								ratio = Math.round(contrast.contrastRatio(fill, background) * 100) / 100,
								ratioText = ratio + ':1';
							if(ratio < 3) {
								failed = true;
								fontSizeString = "svg fill";
								ratingString = "fail";
								addContrastDate(allDATAarr, ($this), url_string, 'Not fixed', 'no');
							}
						} else if ($.trim(textCheck).length || htmlTag === "INPUT" || htmlTag === "SELECT" || htmlTag === "TEXTAREA") {
							// does element have a background image - needs to be manually reviewed
							if (background === "image") {
								var ratioText =  "unknown";
								ratingString = "Needs manual review";
								fontSizeString = "N/A";
								failed = true;
							} else {
								var ratio = Math.round(contrast.contrastRatio(color, background) * 100) / 100,
									ratioText = ratio + ':1',
									fontSize = parseInt($this.css('fontSize')),
									fontWeight = $this.css('fontWeight');

								if (fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700)) {
									fontSizeString = 'large scale text'
									if (ratio < 3) {
										ratingString = 'fail';
										addContrastDate(allDATAarr, ($this), url_string, 'Not fixed', 'no');
										failed = true;
									} else {
										ratingString = 'pass';
										failed = false;
										addContrastDate(allDATAarr, ($this), url_string, 'Fixed', 'mayde');
									}
								} else {
									fontSizeString = 'normal body text'
									if (ratio < 4.5) {
										ratingString = 'fail';
										failed = true;
										addContrastDate(allDATAarr, ($this), url_string, 'Not fixed', 'no');
									} else {
										ratingString = 'pass';
										failed = false;
										addContrastDate(allDATAarr, ($this), url_string, 'Fixed', 'mayde');
										contrastErrors.good.push({
											name: $this,
											ratio: ratioText,
											detail: fontSizeString,
											status: ratingString
										});
									}
								}
							}
						}
						// highlight the element in the DOM and log the element, contrast ratio and failure
						// for testing in console
						/*if (failed) {
							var error = {};
							error = {
								name: $this,
								ratio: ratioText,
								detail: fontSizeString,
								status: ratingString
							}
							if(ratingString === "fail"){
								contrastErrors.errors.push(error);
							//	addContrastDate(window.cssPath($this), url_string, 'Not fixed', 'no');
							} else if (ratingString === "Needs manual review"){
								
								contrastErrors.warnings.push(error);
							}
						}*/
						}
					});								
					return contrastErrors;								
				}
			}
			contrast.check();
		}
			
		/*pagination*/
		/*var allpaginationStr = '';
		var wrapBreadCrumbArr = findPassebleContainer(['pagenav','pager','pagination','paging']);
		wrapBreadCrumbArr.forEach(function(pagination, i){
			if(!checkIfAndiCode(pagination)){
				var thisMeaning = '--';
				var temp = '';
				var note = 'No fixed';
				var isContentIssue = 'yes';
				var moreData = '--';
				var thisELm = window.cssPath(pagination);
				var patt1 = /[0-9]/g;
				var numOfLink = 0;
				var thisArea = [];
				pagination.querySelectorAll('a,button').forEach(function(thisLink){
					var linkText = thisLink.getText();
					linkText = linkText.match(patt1);
					if(linkText){
						numOfLink++;
						thisArea.push(thisLink);
					}						
				});
				if(thisArea.length > 0){
					thisArea.forEach(function(thisLink){
						haveDesc = false;
						thisLink.querySelectorAll('a,button').forEach(function(elm){
							var linkText = elm.getText();
							linkText = linkText.match(patt1);
							if(linkText && (elm.hasAttribute('title') || elm.hasAttribute('aria-label')) ){
								thisMeaning = elm.hasAttribute('title') || elm.hasAttribute('aria-label');
								haveDesc = true;
							} else if(linkText){
								haveDesc = false;
							}
						});
						if(!haveDesc){
							thisMeaning = 'link number no desc';
						}
						if(pagination.querySelectorAll('[role],[aria-current],[aria-label]').length > 2){
							note = 'Fixed';
						} else {
							note = 'no aria roles';
						}
						moreData = checkLinkClickable(thisLink);
						
						var isitok = ((moreData == 'Clickable' && thisMeaning != '--' && thisMeaning.length > 2)?'maybe':'no');
						addToallDATAarr(allDATAarr, "link",thisELm,thisMeaning,moreData,url_string,note,isContentIssue,isitok,3,2,'Links - pagination with unclear meaning');
					});
				}
			}
		});*/
		var allData = [ window.location.host , favicon , allDATAarr ];
		TUAafterLoadingIframeLast(thisIframe, allData);	
	}
	}
	
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
					andizxc('body').append('<iframe tabindex="-1" onload="strart();" aria-hidden="true" scrolling="no" style="display:none;" id="andiifuserlogin2" src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"></iframe>');
				} else {
					thisIframe = 'andiifuserlogin';
					strart();
				}
			}
		}
						
		if(UA1('.runScanAllSite')){
			
		} else if(UA1('.anditestmode')){
			runScan();
		} else {//Math.floor(Math.random() * 100)   
			if(localStorage.getItem('sendDataevrypage') == null || localStorage.getItem('sendDataevrypage') == 'null' ){
				localStorage.setItem('sendDataevrypage', 1250);
			} else {
				if( parseInt( localStorage.getItem('sendDataevrypage')) <= 1 ){
					localStorage.setItem('sendDataevrypage', 1250);
					runScan();
				} else {
					localStorage.setItem('sendDataevrypage', (parseInt( localStorage.getItem('sendDataevrypage'))) -1   );
				}
			}
		}
	}
	//}
})();












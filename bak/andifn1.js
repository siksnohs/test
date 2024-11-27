let realpath = '';
if (document.querySelectorAll("#andipath").length == 1) {
	realpath = document.querySelector("andipath")?.src;
} else if(document.querySelectorAll("#andipath").length > 1){
	console.warn('Accessibility code is embedded twice');
	realpath = document.querySelector("andipath")?.src;
}
			/*** andi Ultimate ***/
			console.log(realpath)
if (!window.runAndi && realpath != '') {
        window.runAndi = true;
	console.log(123)
        var jsPathTemp = document.getElementById("andipath");
        if (jsPathTemp == null) {
                var allScript = document.querySelectorAll("script");
                for (i = 0; i < allScript.length; i++) {
                        tempSrc = allScript[i].getAttribute("src");
                        if (tempSrc != null) {
                                if (tempSrc.indexOf("andifn1.js") > -1 && tempSrc.indexOf("system.user-a.co.il") > -1) {
                                        allScript[i].id = "andipath";
                                }
                        }
                }
        }
        var andiUA = {};
        var JS = {};
        var TUAStatistic = {};
        var ajax1 = {};
        var ANDIjsPathTemp = document.querySelector("[id*='andipath']");
        
        if (window.location.href.toString().indexOf('scan=true') > -1) {
                localStorage.setItem('scan', 'true');
                localStorage.setItem("andi", "1");
        }
        
		if (window.location.href.toString().indexOf('fast=off') > -1) {
			localStorage.removeItem('fast');
		}
		
        if (window.location.href.indexOf("andi=on") > -1 ){
                localStorage.setItem('andi', 1);
                checkIfDomReady();
                
        } else if (window.location.href.indexOf("andi=off") > -1 || localStorage.getItem("andi") == "off" ){
                localStorage.setItem("andi", "off");
				localStorage.removeItem('fast');
				localStorage.removeItem('scan');
				
        } else if (ANDIjsPathTemp && ANDIjsPathTemp.classList != "" && ANDIjsPathTemp.classList.contains("anditestmode")) {
                if (window.location.href.indexOf("andi=1") > -1 || localStorage.getItem("andi") == "1") {
                        localStorage.setItem("andi", "1");
                        if (window.self == top) {
                                localStorage.removeItem('scan');
                                checkIfDomReady();
                        } else if (window.location.href.indexOf("andi=1&elm=") > -1) {
                                localStorage.removeItem('scan');
                                checkIfDomReady();
                        } else if (localStorage.getItem("scan") == "true") {
                                checkIfDomReady();
                        }
                }
        } else if (window.location.href.indexOf("andiqa=off") > -1 || localStorage.getItem("andiqa") == "off") {
                localStorage.removeItem('andi');
                localStorage.removeItem('scan');
                checkIfDomReady();
        } else if (window.location.href.indexOf("andiqa=qa") > -1 || localStorage.getItem("andiqa") == "qa") {
                localStorage.setItem("andiqa", "qa");
                if (document.querySelector("[id*='andipath']").src.indexOf('QA') == -1) {
                        var UAnewPath = document.querySelector("[id*='andipath']").src;
                        UAnewPath = UAnewPath.substring(0, UAnewPath.lastIndexOf("/"));
                        document.querySelector("[id*='andipath']").removeAttribute('id');
                        TUAjsPath = "uapath";
                        var script = document.createElement('script');
                        script.src = realpath + '/QA/andifn1.js';
                        script.id = 'andipath';
                        script.type = 'text/javascript';
                        var head = document.getElementsByTagName("head")[0];
                        head.appendChild(script);
                        // return false;
                } else {
                        checkIfDomReady();
                }
        } else {
                checkIfDomReady();
        }

        function checkIfDomReady() {
                var interval = setInterval(function () {
                        if (document.readyState === "complete" && runAndi) {
                                clearInterval(interval);
                                ANDIrunAndi();
                        }
                }, 350);
        };

        function ANDIrunAndi() {
                andiUA.emptyFn = function () { };
                window.isSelectorValid = function (selector) {
                        var dummy = document.createElement("br");
                        return function (selector) {
                                try {
                                        dummy.querySelector(selector);
                                } catch (e) {
                                        return false;
                                }
                                return true;
                        };
                }();
                window.UA = JS.$ = function (cssSelctor) {
                        if (typeof cssSelctor == "string" && isSelectorValid(cssSelctor)) {
                                return document.querySelectorAll(cssSelctor);
                        } else {
                                return document.querySelector("toovya");
                        }
                };
                window.UA1 = JS.first = function (cssSelctor) {
                        if (typeof cssSelctor == "string" && isSelectorValid(cssSelctor)) {
                                return document.querySelector(cssSelctor);
                        } else {
                                return document.querySelector("toovya");
                        }
                };

                window.eventOn = function (eventName, selector, fn) {
                        var element = document;
                        if(typeof selector === 'string'){
                            element.addEventListener(eventName, function (event) {
                                    var possibleTargets = element.querySelectorAll(selector);
                                    var target = event.target;
                                    for (var i = 0, l = possibleTargets.length; i < l; i++) {
                                            var TUAel = target;
                                            var p = possibleTargets[i];
                                            while (TUAel && TUAel !== element) {
                                                    if (TUAel === p) {
                                                            return fn.call(p, event);
                                                    }
                                                    TUAel = TUAel.parentNode;
                                            }
                                    }
                            });
                        }
                };

                if (!Element.prototype.elmParents)
                        Element.prototype.elmParents = function (selector) {
                                var elements = [];
                                var elem = this;
                                var ishaveselector = selector !== undefined;
                                while ((elem = elem.parentElement) !== null) {
                                        if (elem.nodeType !== Node.ELEMENT_NODE) continue;
                                        if (!ishaveselector || elem.matches(selector)) elements.push(elem);
                                }
                                return elements;
                        };

                if (!Element.prototype.isIt)
                        Element.prototype.isIt = function (selector) {
                                return (this.matches || this.matchesSelector || this.msMatchesSelector || this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector).call(this, selector);
                        };

                if (!String.prototype.TUAfilename)
                        String.prototype.TUAfilename = function (extension) {
                                var TUAs = this.replace(/\\/g, "/");
                                TUAs = TUAs.substring(TUAs.lastIndexOf("/") + 1);
                                return extension ? TUAs.replace(/[?#].+$/, "") : TUAs.split(".")[0];
                        };
                if (!String.prototype.TUAfilename2)
                        String.prototype.TUAfilename2 = function (extension) {
                                var TUAs = this.replace(/\\/g, "/");
                                TUAs = TUAs.substring(TUAs.lastIndexOf("/") + 1);
                                return TUAs;
                        };
                if (!String.prototype.TUAreplaceAll)
                        String.prototype.TUAreplaceAll = function (TUAsearchStr, TUAreplaceStr) {
                                var str = this;
                                TUAsearchStr = TUAsearchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                                return str.replace(new RegExp(TUAsearchStr, "gi"), TUAreplaceStr);
                        };
                if (!String.prototype.preperCssNameRole)
                        String.prototype.preperCssNameRole = function () {
                                var str = this;
                                str = str.TUAreplaceAll("-", " ").toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
                                        return p1 + p2.toUpperCase();
                                });
                                str = str.charAt(0).toLowerCase() + str.slice(1);
                                return str.TUAreplaceAll(" ", "");
                        };


                var isEmptyObject = function (obj) {
                        for (var prop in obj) {
                                if (obj.hasOwnProperty(prop)) {
                                        return false;
                                }
                        }
                        return true;
                };



                if (!Element.prototype.tremoveAttr)
                        Element.prototype.tremoveAttr = function (attrName) {
                                this.removeAttribute(attrName);
                        };

                if (!Element.prototype.addAttr)
                        Element.prototype.addAttr = function (attrValues) {
                                var TUAthat = this;
                                Object.keys(attrValues).forEach(function (attr) {
                                        TUAthat.setAttribute(attr, attrValues[attr]);
                                });
                        };


                if (!Element.prototype.getAttr)
                        Element.prototype.getAttr = function (attrName) {
                                return this.getAttribute(attrName);
                        };

                if (!Element.prototype.getText)
                        Element.prototype.getText = function () {
                                var TUAthat = this;
                                return this.textContent || this.innerText;
                        };

                if (!Element.prototype.addCss)
                        Element.prototype.addCss = function (cssValues) {
                                var TUAthat = this;
                                Object.keys(cssValues).forEach(function (attr) {
                                        var styleProp = attr.preperCssNameRole(),
                                                cssValue = cssValues[attr];
                                        TUAthat.style[styleProp] = cssValue;
                                });
                        };
                if (!Element.prototype.getCss)
                        Element.prototype.getCss = function (cssValues) {
                                return window.getComputedStyle(this, null).getPropertyValue(cssValues);
                        };

                if (!Element.prototype.removeElm)
                        Element.prototype.removeElm = function () {
                                this.parentNode.removeChild(this);
                        };

                if (!Element.prototype.getHtml)
                        Element.prototype.getHtml = function () {
                                return this.innerHTML;
                        };

                if (!Element.prototype.setHtml)
                        Element.prototype.setHtml = function (newHtml) {
                                this.innerHTML = newHtml;
                        };

                if (!Element.prototype.appendHtml)
                        Element.prototype.appendHtml = function (newHtml) {
                                this.insertAdjacentHTML("beforeend", newHtml);
                        };

                if (!Element.prototype.prependHtml)
                        Element.prototype.prependHtml = function (newHtml) {
                                this.insertAdjacentHTML("afterbegin", newHtml);
                        };

                if (!Element.prototype.afterHtml)
                        Element.prototype.afterHtml = function (newHtml) {
                                this.insertAdjacentHTML("afterend", newHtml);
                        };

                if (!Element.prototype.beforeHtml)
                        Element.prototype.beforeHtml = function (newHtml) {
                                this.insertAdjacentHTML("beforebegin", newHtml);
                        };
                if (!Element.prototype.addAnimate)
                        Element.prototype.addAnimate = function (attrValues, times) {
                                var TUAthat = this;
                                setTimeout(function () {
                                        times = times || "1";
                                        times = " " + times + "s";
                                        var transitionSetting = '';
                                        Object.keys(attrValues).forEach(function (attr) {
                                                var styleProp = attr.preperCssNameRole(), cssValue = attrValues[attr];
                                                TUAthat.style[styleProp] = cssValue;
                                                transitionSetting += attr + times + ',';
                                        });
                                        transitionSetting = transitionSetting.substring(0, transitionSetting.length - 1);
                                        TUAthat.style.transition = transitionSetting;
                                }, 0);
                        };



                if (!Element.prototype.taddClass)
                        Element.prototype.taddClass = function (classNames) {
                                this.classList.add(classNames);
                        };

                if (!Element.prototype.tremoveClass)
                        Element.prototype.tremoveClass = function (classNames) {
                                this.classList.remove(classNames);

                        };

                if (!Element.prototype.thasClass)
                        Element.prototype.thasClass = function (className) {
                                if (this.classList.contains(className)) { return true; }
                                return false;
                        };

                if (!Element.prototype.tinsertAfter)
                        Element.prototype.tinsertAfter = function (newNode) {
                                this.parentNode.insertBefore(newNode, this.nextSibling);
                        };

                if (!Element.prototype.insertBeforeElm)
                        Element.prototype.insertBeforeElm = function (TUAel) {
                                this.parentNode.insertBefore(TUAel, this);
                        };

                if (!Element.prototype.TUAifElmIsHidden)
                        Element.prototype.TUAifElmIsHidden = function () {
                                return !!(this.offsetWidth || this.offsetHeight || this.getClientRects().length || this.clientWidth !== 0 || this.clientHeight !== 0);
                        };

                if (!Element.prototype.tprev)
                        Element.prototype.tprev = function () {
                                return this.previousElementSibling;
                        };

                if (!Element.prototype.getAttr)
			Element.prototype.getAttr = function (attrName) {
				return this.getAttribute(attrName);
			};

                if (!Element.prototype.tnext)
                        Element.prototype.tnext = function () {
                                return this.nextElementSibling;
                        };

                if (!Element.prototype.tfind)
                        Element.prototype.tfind = function (cssSelector) {
                                return this.querySelectorAll(cssSelector);
                        };

                if (!Element.prototype.tparent)
                        Element.prototype.tparent = function () {
                                return this.parentElement;
                        };

                if (!Element.prototype.tappendTo)
                        Element.prototype.tappendTo = function (cssSelctor) {
                                document.querySelector(cssSelctor).appendChild(this);
                        };

                if (!Element.prototype.twrapInner)
                        Element.prototype.twrapInner = function (wrapper, id, newClass) {
                                id = id || '';
                                newClass = newClass || '';
                                var wrapper = document.createElement(wrapper);
                                if (id !== '') wrapper.id = id;
                                if (newClass !== '') wrapper.setAttribute("class", newClass);
                                this.parentNode.insertBefore(wrapper, this);
                                wrapper.appendChild(this);
                        };

                if (!Element.prototype.twidth)
                        Element.prototype.twidth = function (TUAnumber) {
                                TUAnumber = TUAnumber || '';
                                if (TUAnumber) {
                                        this.style.width = TUAnumber + 'px';
                                } else {
                                        return this.clientWidth;
                                }
                        };

                if (!Element.prototype.theight)
                        Element.prototype.theight = function (TUAnumber) {
                                TUAnumber = TUAnumber || '';
                                if (TUAnumber) {
                                        this.style.height = TUAnumber + 'px';
                                } else {
                                        return this.clientHeight;
                                }
                        };

                if (!Element.prototype.ttoggleClass)
                        Element.prototype.ttoggleClass = function (className) {
                                if (this.thasClass(className)) {
                                        this.tremoveClass(className);
                                } else {
                                        this.taddClass(className);
                                }
                        };




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

                andiUA.getNextSiblings = function (elem, filter) {
                        var sibs = [];
                        while (elem = elem.nextSibling) {
                                if (elem.nodeType === 3) continue; // text node
                                if (!filter || filter(elem)) sibs.push(elem);
                        }
                        return sibs;
                }



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
                let onceTry = 0;
                let onceTry1 = 0;
                andiUA.getScript = function (URL, fn) {
                        let newscript = document.createElement('script');
                        newscript.src = URL;
                        newscript.charset = 'utf-8';
                        newscript.type = 'text/javascript';
                        document.head.appendChild(newscript);
                        newscript.addEventListener("load", () => fn());
                        newscript.addEventListener("error", (ev) => {
                                if(onceTry == 0 && URL.indexOf('Setting.js') > -1){
                                        onceTry++;
                                        andiUA.lang = 'en';
                                        andiUA.getScript(andiUA.TUAjsPath + "/setting/andienSetting.js", function() {
                                                andiUA.getScript(andiUA.TUAjsPath + "andifunction.js", function() {

                                                });
                                        });
                                }
                                if(onceTry1 == 0 && URL.indexOf("/lang/andi" + andiUA.TUAlanguage +".js") > -1){
                                    onceTry1++;
                                    andiUA.lang = 'en';
                                    andiUA.getScript(andiUA.TUAjsPath + "/lang/andien.js", function() {
                                            andiUA.getScript(andiUA.TUAjsPath + "/setting/andienSetting.js", function() {        
                                                    andiUA.getScript(andiUA.TUAjsPath + "andifunction.js", function() {

                                                    });
                                            });
                                    });
                                }
                                //console.error("Error on loading file", ev);
                        });
                }



                andiUA.t0 = performance.now();
                TUAsafe_add = function (TUAx, TUAy) { var lsw = (TUAx & 65535) + (TUAy & 65535); var msw = (TUAx >> 16) + (TUAy >> 16) + (lsw >> 16); return msw << 16 | lsw & 65535 }; TUArol = function (andiVanum, cnt) { return andiVanum << cnt | andiVanum >>> 32 - cnt };
                cmn = function (TUAq, TUAa, TUAb, TUAx, TUAs, TUAt) { return TUAsafe_add(TUArol(TUAsafe_add(TUAsafe_add(TUAa, TUAq), TUAsafe_add(TUAx, TUAt)), TUAs), TUAb) }; TUAff = function (TUAa, TUAb, TUAc, TUAd, TUAx, TUAs, TUAt) { return cmn(TUAb & TUAc | ~TUAb & TUAd, TUAa, TUAb, TUAx, TUAs, TUAt) };
                TUAgg = function (TUAa, TUAb, TUAc, TUAd, TUAx, TUAs, TUAt) { return cmn(TUAb & TUAd | TUAc & ~TUAd, TUAa, TUAb, TUAx, TUAs, TUAt) }; TUAhh = function (TUAa, TUAb, TUAc, TUAd, TUAx, TUAs, TUAt) { return cmn(TUAb ^ TUAc ^ TUAd, TUAa, TUAb, TUAx, TUAs, TUAt) };
                TUAii = function (TUAa, TUAb, TUAc, TUAd, TUAx, TUAs, TUAt) { return cmn(TUAc ^ (TUAb | ~TUAd), TUAa, TUAb, TUAx, TUAs, TUAt) };
                TUAcoreMD5 = function (TUAx) {
                        var TUAa = 1732584193; var TUAb = -271733879; var TUAc = -1732584194; var TUAd = 271733878; for (var i = 0; i < TUAx.length; i += 16) {
                                var TUAolda = TUAa; var TUAoldb = TUAb; var TUAoldc = TUAc; var TUAoldd = TUAd; TUAa = TUAff(TUAa, TUAb, TUAc, TUAd, TUAx[i + 0], 7, -680876936); TUAd = TUAff(TUAd, TUAa, TUAb, TUAc, TUAx[i + 1], 12, -389564586); TUAc = TUAff(TUAc, TUAd, TUAa, TUAb,
                                        TUAx[i + 2], 17, 606105819); TUAb = TUAff(TUAb, TUAc, TUAd, TUAa, TUAx[i + 3], 22, -1044525330); TUAa = TUAff(TUAa, TUAb, TUAc, TUAd, TUAx[i + 4], 7, -176418897); TUAd = TUAff(TUAd, TUAa, TUAb, TUAc, TUAx[i + 5], 12, 1200080426); TUAc = TUAff(TUAc, TUAd, TUAa, TUAb, TUAx[i + 6], 17, -1473231341); TUAb = TUAff(TUAb, TUAc, TUAd, TUAa, TUAx[i + 7], 22, -45705983); TUAa = TUAff(TUAa, TUAb,
                                                TUAc, TUAd, TUAx[i + 8], 7, 1770035416); TUAd = TUAff(TUAd, TUAa, TUAb, TUAc, TUAx[i + 9], 12, -1958414417); TUAc = TUAff(TUAc, TUAd, TUAa, TUAb, TUAx[i + 10], 17, -42063); TUAb = TUAff(TUAb, TUAc, TUAd, TUAa, TUAx[i + 11], 22, -1990404162); TUAa = TUAff(TUAa, TUAb, TUAc, TUAd, TUAx[i + 12], 7, 1804603682); TUAd = TUAff(TUAd, TUAa, TUAb, TUAc, TUAx[i + 13], 12, -40341101); TUAc = TUAff(TUAc,
                                                        TUAd, TUAa, TUAb, TUAx[i + 14], 17, -1502002290); TUAb = TUAff(TUAb, TUAc, TUAd, TUAa, TUAx[i + 15], 22, 1236535329); TUAa = TUAgg(TUAa, TUAb, TUAc, TUAd, TUAx[i + 1], 5, -165796510); TUAd = TUAgg(TUAd, TUAa, TUAb, TUAc, TUAx[i + 6], 9, -1069501632); TUAc = TUAgg(TUAc, TUAd, TUAa, TUAb, TUAx[i + 11], 14, 643717713); TUAb = TUAgg(TUAb, TUAc, TUAd, TUAa, TUAx[i + 0], 20, -373897302); TUAa =
                                                                TUAgg(TUAa, TUAb, TUAc, TUAd, TUAx[i + 5], 5, -701558691); TUAd = TUAgg(TUAd, TUAa, TUAb, TUAc, TUAx[i + 10], 9, 38016083); TUAc = TUAgg(TUAc, TUAd, TUAa, TUAb, TUAx[i + 15], 14, -660478335); TUAb = TUAgg(TUAb, TUAc, TUAd, TUAa, TUAx[i + 4], 20, -405537848); TUAa = TUAgg(TUAa, TUAb, TUAc, TUAd, TUAx[i + 9], 5, 568446438); TUAd = TUAgg(TUAd, TUAa, TUAb, TUAc, TUAx[i + 14], 9, -1019803690);
                                TUAc = TUAgg(TUAc, TUAd, TUAa, TUAb, TUAx[i + 3], 14, -187363961); TUAb = TUAgg(TUAb, TUAc, TUAd, TUAa, TUAx[i + 8], 20, 1163531501); TUAa = TUAgg(TUAa, TUAb, TUAc, TUAd, TUAx[i + 13], 5, -1444681467); TUAd = TUAgg(TUAd, TUAa, TUAb, TUAc, TUAx[i + 2], 9, -51403784); TUAc = TUAgg(TUAc, TUAd, TUAa, TUAb, TUAx[i + 7], 14, 1735328473); TUAb = TUAgg(TUAb, TUAc, TUAd, TUAa, TUAx[i +
                                        12], 20, -1926607734); TUAa = TUAhh(TUAa, TUAb, TUAc, TUAd, TUAx[i + 5], 4, -378558); TUAd = TUAhh(TUAd, TUAa, TUAb, TUAc, TUAx[i + 8], 11, -2022574463); TUAc = TUAhh(TUAc, TUAd, TUAa, TUAb, TUAx[i + 11], 16, 1839030562); TUAb = TUAhh(TUAb, TUAc, TUAd, TUAa, TUAx[i + 14], 23, -35309556); TUAa = TUAhh(TUAa, TUAb, TUAc, TUAd, TUAx[i + 1], 4, -1530992060); TUAd = TUAhh(TUAd, TUAa, TUAb,
                                                TUAc, TUAx[i + 4], 11, 1272893353); TUAc = TUAhh(TUAc, TUAd, TUAa, TUAb, TUAx[i + 7], 16, -155497632); TUAb = TUAhh(TUAb, TUAc, TUAd, TUAa, TUAx[i + 10], 23, -1094730640); TUAa = TUAhh(TUAa, TUAb, TUAc, TUAd, TUAx[i + 13], 4, 681279174); TUAd = TUAhh(TUAd, TUAa, TUAb, TUAc, TUAx[i + 0], 11, -358537222); TUAc = TUAhh(TUAc, TUAd, TUAa, TUAb, TUAx[i + 3], 16, -722521979); TUAb = TUAhh(TUAb,
                                                        TUAc, TUAd, TUAa, TUAx[i + 6], 23, 76029189); TUAa = TUAhh(TUAa, TUAb, TUAc, TUAd, TUAx[i + 9], 4, -640364487); TUAd = TUAhh(TUAd, TUAa, TUAb, TUAc, TUAx[i + 12], 11, -421815835); TUAc = TUAhh(TUAc, TUAd, TUAa, TUAb, TUAx[i + 15], 16, 530742520); TUAb = TUAhh(TUAb, TUAc, TUAd, TUAa, TUAx[i + 2], 23, -995338651); TUAa = TUAii(TUAa, TUAb, TUAc, TUAd, TUAx[i + 0], 6, -198630844); TUAd =
                                                                TUAii(TUAd, TUAa, TUAb, TUAc, TUAx[i + 7], 10, 1126891415); TUAc = TUAii(TUAc, TUAd, TUAa, TUAb, TUAx[i + 14], 15, -1416354905); TUAb = TUAii(TUAb, TUAc, TUAd, TUAa, TUAx[i + 5], 21, -57434055); TUAa = TUAii(TUAa, TUAb, TUAc, TUAd, TUAx[i + 12], 6, 1700485571); TUAd = TUAii(TUAd, TUAa, TUAb, TUAc, TUAx[i + 3], 10, -1894986606); TUAc = TUAii(TUAc, TUAd, TUAa, TUAb, TUAx[i +
                                                                        10], 15, -1051523); TUAb = TUAii(TUAb, TUAc, TUAd, TUAa, TUAx[i + 1], 21, -2054922799); TUAa = TUAii(TUAa, TUAb, TUAc, TUAd, TUAx[i + 8], 6, 1873313359); TUAd = TUAii(TUAd, TUAa, TUAb, TUAc, TUAx[i + 15], 10, -30611744); TUAc = TUAii(TUAc, TUAd, TUAa, TUAb, TUAx[i + 6], 15, -1560198380); TUAb = TUAii(TUAb, TUAc, TUAd, TUAa, TUAx[i + 13], 21, 1309151649); TUAa = TUAii(TUAa, TUAb, TUAc,
                                                                                TUAd, TUAx[i + 4], 6, -145523070); TUAd = TUAii(TUAd, TUAa, TUAb, TUAc, TUAx[i + 11], 10, -1120210379); TUAc = TUAii(TUAc, TUAd, TUAa, TUAb, TUAx[i + 2], 15, 718787259); TUAb = TUAii(TUAb, TUAc, TUAd, TUAa, TUAx[i + 9], 21, -343485551); TUAa = TUAsafe_add(TUAa, TUAolda); TUAb = TUAsafe_add(TUAb, TUAoldb); TUAc = TUAsafe_add(TUAc, TUAoldc); TUAd = TUAsafe_add(TUAd, TUAoldd)
                        } return [TUAa,
                                TUAb, TUAc, TUAd]
                };
                TUAbinl2hex = function (binarray) { var hex_tab = "0123456789abcdef"; var str = ""; for (var i = 0; i < binarray.length * 4; i++)str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15); return str };
                TUAbinl2b64 = function (binarray) { var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; var str = ""; for (var i = 0; i < binarray.length * 32; i += 6)str += tab.charAt(binarray[i >> 5] << i % 32 & 63 | binarray[i >> 5 + 1] >> 32 - i % 32 & 63); return str }; TUAstr2binl = function (str) { var nblk = (str.length + 8 >> 6) + 1; var blks = new Array(nblk * 16); for (var i = 0; i < nblk * 16; i++)blks[i] = 0; for (var i = 0; i < str.length; i++)blks[i >> 2] |= (str.charCodeAt(i) & 255) << i % 4 * 8; blks[i >> 2] |= 128 << i % 4 * 8; blks[nblk * 16 - 2] = str.length * 8; return blks };
                TUAstrw2binl = function (str) { var nblk = (str.length + 4 >> 5) + 1; var blks = new Array(nblk * 16); for (var i = 0; i < nblk * 16; i++)blks[i] = 0; for (var i = 0; i < str.length; i++)blks[i >> 1] |= str.charCodeAt(i) << i % 2 * 16; blks[i >> 1] |= 128 << i % 2 * 16; blks[nblk * 16 - 2] = str.length * 16; return blks }; TUAcalc = function (str) { return TUAbinl2hex(TUAcoreMD5(TUAstr2binl(str))) };
                TUAJhqdrSh = function () { return TUAcalc(window.location.hostname) };
                andiUA.TUAbase = function () { as = new Date; var b = (as.getDate() + as.getFullYear() + as.getMonth()).toString(); return TUAcalc(b) }; TUAbase = function () { as = new Date; var b = (as.getDate() + as.getFullYear() + as.getMonth()).toString(); return TUAcalc(b) };
                TUAloadBackupScript = function (callback, srcFile) { if (typeof callback !== "function") throw "Not a valid callback"; var script = document.createElement("script"); script.onload = callback; script.src = srcFile; script.type = "text/javascript"; var head = document.getElementsByTagName("head")[0]; head.appendChild(script) };
                loadBackupScript = function (TUAcallback, TUAsrcFile) { if (typeof TUAcallback !== "function") throw "Not a valid TUAcallback"; var script = document.createElement("script"); script.onload = TUAcallback; script.src = TUAsrcFile; script.type = "text/javascript"; var head = document.getElementsByTagName("head")[0]; head.appendChild(script) };
                TUABase64 = {
                        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (input) {
                                var output = ""; var chr1, chr2, chr3, enc1, enc2, enc3, enc4; var i = 0; input = TUABase64.TUA_utf8_encode(input); while (i < input.length) {
                                        chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = (chr1 & 3) << 4 | chr2 >> 4; enc3 = (chr2 & 15) << 2 | chr3 >> 6; enc4 = chr3 & 63; if (isNaN(chr2)) enc3 = enc4 = 64; else if (isNaN(chr3)) enc4 = 64; output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                                                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4)
                                } return output
                        }, decode: function (input) {
                                var output = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4; var i = 0; input = input.replace(/[^A-Za-z0-9\+\/=]/g, ""); while (i < input.length) {
                                        enc1 = this._keyStr.indexOf(input.charAt(i++)); enc2 = this._keyStr.indexOf(input.charAt(i++)); enc3 = this._keyStr.indexOf(input.charAt(i++)); enc4 = this._keyStr.indexOf(input.charAt(i++)); chr1 = enc1 << 2 | enc2 >> 4; chr2 = (enc2 & 15) << 4 | enc3 >> 2; chr3 = (enc3 & 3) << 6 | enc4; output = output + String.fromCharCode(chr1);
                                        if (enc3 != 64) output = output + String.fromCharCode(chr2); if (enc4 != 64) output = output + String.fromCharCode(chr3)
                                } output = TUABase64.TUA_utf8_decode(output); return output
                        }, TUA_utf8_encode: function (string) {
                                string = string.replace(/\r\n/g, "\n"); var utftext = ""; for (var n = 0; n < string.length; n++) {
                                        var c = string.charCodeAt(n); if (c < 128) utftext += String.fromCharCode(c); else if (c > 127 && c < 2048) { utftext += String.fromCharCode(c >> 6 | 192); utftext += String.fromCharCode(c & 63 | 128) } else {
                                                utftext += String.fromCharCode(c >> 12 | 224);
                                                utftext += String.fromCharCode(c >> 6 & 63 | 128); utftext += String.fromCharCode(c & 63 | 128)
                                        }
                                } return utftext
                        }, TUA_utf8_decode: function (utftext) { var string = ""; var i = 0; var c = c1 = c2 = 0; while (i < utftext.length) { c = utftext.charCodeAt(i); if (c < 128) { string += String.fromCharCode(c); i++ } else if (c > 191 && c < 224) { c2 = utftext.charCodeAt(i + 1); string += String.fromCharCode((c & 31) << 6 | c2 & 63); i += 2 } else { c2 = utftext.charCodeAt(i + 1); c3 = utftext.charCodeAt(i + 2); string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63); i += 3 } } return string }
                };
                andiUA.UAandiNameEvent = false;
                andiUA.TUAloadjQ = true;
                andiUA.ReloadtimesNumber = 0;
                andiUA.url = 'https://system.user-a.co.il/';
                var jsPathTemp = document.querySelector("[id*='andipath']")?.src;
                andiUA.TUAjsPath = jsPathTemp.replace("andifn1.js", ""); //realpath;
                goh = ["51b8331914fc8a7eae20a7a59db0ab56", 'b693b52399d17e8de726e900c246e31e','744eb2fbed2b1871652d53a17f4049d0','473efadf095075c9d25c5914de5e92a5',];
                gotyh = function (b, c) {
                        var a = false;
                        b.forEach(function (d) {
                                (d == c) ? a = true : '';
                        });
                        return a
                };
                TUAmainLang = "";
                afer = TUAbase();
                ab = TUAJhqdrSh();
                if (gotyh(goh, ab)) {
                        if (andiUA.TUAjsPath.indexOf("?") > -1) {
                                fileTemp = andiUA.TUAjsPath;
                                fileTemp = fileTemp.split("?");
                                andiUA.TUAjsPath = fileTemp[0];
                        }

                        function isLanguage(lang) {
                                return document.documentElement.lang.indexOf(lang) > -1;
                        }
                        var startRun = function () {
                                andiUA.TUAisArabic = function (text) {
                                        if (isLanguage('ar')) return true;
                                        var TUApattern = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
                                        return TUApattern.test(text);
                                };

                                andiUA.TUAisHebrew = function (text) {
                                        if (isLanguage('he')) return true;
                                        var TUApattern = /[\u0590-\u05FF]/;
                                        return TUApattern.test(text);
                                };

                                andiUA.TUAisRussian = function (text) {
                                        if (isLanguage('ru')) return true;
                                        var TUApattern = /[\u0400-\u04FF]/;
                                        return TUApattern.test(text);
                                };
                                andiUA.TUAisEnglish = function (text) {
                                        var TUApattern = /^[a-z][a-z0-9]*$/i;
                                        return TUApattern.test(text);
                                };
                                andiUA.TUAisSpanish = function (text) {
                                        if (isLanguage('es')) return true;/*
                                        var TUApattern = /[a-zA-Z\u00C0-\u00FF]+/;
                                        return TUApattern.test(text);*/
                                };
                                andiUA.TUAisFrench = function (text) {
                                        if (isLanguage('fr')) return true;
                                        else return false;
                                };

                                andiUA.TUAisItalian = function (text) {
                                        if (isLanguage('it')) return true;
                                        else return false;
                                };
                                andiUA.TUAisRomanian = function (text) {
                                        if (isLanguage('ro')) return true;
                                        else return false;
                                };

                                andiUA.TUAisPortuguese = function (text) {
                                        if (isLanguage('pt')) return true;
                                        else return false;
                                };

                                andiUA.TUAisGerman = function (text) {
                                        if (isLanguage('de')) return true;
                                        else return false;
                                };

                                andiUA.TUAisDutch = function (text) {
                                        if (isLanguage('nl')) return true;
                                        else return false;
                                };

                                andiUA.TUAisPolish = function (text) {
                                        if (isLanguage('pl')) return true;
                                        else return false;
                                };

                                andiUA.TUAisCzech = function (text) {
                                        if (isLanguage('cs')) return true;
                                        else return false;
                                };

                                andiUA.TUAisSerbian = function (text) {
                                        if (isLanguage('sr')) return true;
                                        var TUApattern = /[\u0400-\u04FF]/; 
                                        return TUApattern.test(text);
                                };

                                andiUA.TUAisGreek = function (text) {
                                        if (isLanguage('el')) return true;
                                        else return false;
                                };


                                andiUA.TUAmymax = function (TUAa) {
                                        var TUAm = -Infinity, TUAi = 0, TUAn = TUAa.length;
                                        for (; TUAi != TUAn; ++TUAi) {
                                                if (TUAa[TUAi] > TUAm) {
                                                        TUAm = TUAa[TUAi];
                                                }
                                        }
                                        return TUAm;
                                };
                                andiUA.t2 = performance.now();
                                andiUA.TUAcheckLanguage = function () {
                                        let langObj = {                                                
                                                'ru': 0, 'en': 0, 'es': 0, 'he': 0, 'ar': 0, 'ro': 0, 'pt': 0, 'de': 0, 'nl': 0,  'pl': 0,  'cs': 0, 'sr': 0, 'el': 0,
                                        }

                                        function findMaxKey(obj) {
                                                return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
                                        }
                                        let TUAtemplanguage = localStorage.getItem("TUAsetUserLanguage") || document.querySelector('html').getAttribute('lang') || navigator.language || null;
                                        var TUAlanguage = undefined;
                                        var ANDIavrText = 0;
                                        var ANDIavrTextAmount = 0;
                                        var n, a = [],
                                                walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                                        while (n = walk.nextNode()) {
                                                var ANDIelm = n.parentNode;
                                                var elmText = n.data.trim();
                                                if (elmText !== "" && ANDIelm.tagName !== "NOSCRIPT" && ANDIelm.tagName !== "SCRIPT" && ANDIelm.tagName !== "STYLE" && ANDIelm.tagName !== "HEAD" && ANDIelm.tagName !== "META" && ANDIelm.tagName !== "LINK") {
                                                        let computedStyle = window.getComputedStyle(ANDIelm, null);
                                                        let TUAelmFontSize = parseInt(computedStyle.getPropertyValue("font-size"));
                                                        if(!TUAtemplanguage){
                                                                ANDIavrText += TUAelmFontSize;
                                                                ANDIavrTextAmount++;
                                                                var elmTextArray = elmText.split(" ");
                                                                var lengthArr = elmTextArray.length;
                                                                if (lengthArr > 15) lengthArr = 15;
                                                                for (var a = 0; a < lengthArr; a++) {
                                                                        var word = elmTextArray[a];
                                                                        if (andiUA.TUAisArabic(word)) {
                                                                                langObj.ar++;
                                                                        } else if (andiUA.TUAisHebrew(word)) {
                                                                                langObj.he++;
                                                                        } else if (andiUA.TUAisSpanish(word)) {
                                                                                langObj.es++;
                                                                        } else if (andiUA.TUAisFrench(word)) {
                                                                                langObj.fr++;
                                                                        } else if (andiUA.TUAisItalian(word)) {
                                                                                langObj.it++;
                                                                        } else if (andiUA.TUAisRomanian(word)) {
                                                                                langObj.ro++;
                                                                        }else if (andiUA.TUAisPortuguese(word)) {
                                                                                langObj.pt++;
                                                                        } else if (andiUA.TUAisGerman(word)) {
                                                                                langObj.de++;
                                                                        } else if (andiUA.TUAisDutch(word)) {
                                                                                langObj.nl++;
                                                                        } else if (andiUA.TUAisPolish(word)) {
                                                                                langObj.pl++;
                                                                        } else if (andiUA.TUAisCzech(word)) {
                                                                                langObj.cs++;
                                                                        } else if (andiUA.TUAisSerbian(word)) {
                                                                                langObj.sr++;
                                                                        } else if (andiUA.TUAisGreek (word)) {
                                                                                langObj.el++;
                                                                        } else if (andiUA.TUAisEnglish(word)) {
                                                                                langObj.en++;
                                                                        }else if(andiUA.TUAisRussian(word) ){
                                                                                langObj.ru++;
                                                                        }
                                                                }
                                                        }                                                         
                                                }
                                        }
                                        if(!TUAtemplanguage){
                                                
                                                let maxKey = findMaxKey(langObj);
                                                var TUAlanguageAuto = maxKey;
                                                if (!TUAlanguage) {
                                                        if (!TUAlanguageAuto) {
                                                                TUAlanguage = "en";
                                                        } else {
                                                                TUAlanguage = TUAlanguageAuto;
                                                        }
                                                }
                                        } else {
                                                TUAlanguage = TUAtemplanguage;
                                        }
                                        localStorage.setItem("basefontsize", ANDIavrText / ANDIavrTextAmount);
                                        if(TUAlanguage.length > 2){
                                                let langArr = ['ru', 'en', 'es', 'he', 'ar', 'ro', 'pt', 'de', 'nl',  'pl',  'cs', 'sr', 'el'];
                                                for (let index = 0; index < langArr.length; index++) {
                                                        if(TUAlanguage.indexOf(langArr[index]) > -1 ){
                                                                TUAlanguage = langArr[index];
                                                                break;
                                                        }
                                                }
                                        }
                                        andiUA.lang = TUAlanguage;
                                        var andiHTMLelm = document.querySelector("html");
                                        andiHTMLelm.setAttribute("andilang", TUAlanguage);
                                        if( !andiHTMLelm.getAttribute('lang') || andiHTMLelm.getAttribute('lang') == '' ){
                                                andiHTMLelm.setAttribute("lang", TUAlanguage);
                                        }
                                        function setLanguageDirection(langKey, andiHTMLelm) {
                                                const rtlLanguages = ['he', 'ar'];
                                                const direction = rtlLanguages.includes(langKey) ? 'rtl' : 'ltr';
                                                andiUA.andidirection = direction;
                                        }
                                        setLanguageDirection(TUAlanguage, andiHTMLelm);
                                        andiUA.TUAlanguage = TUAlanguage;
                                };
                                andiUA.TUAcheckLanguage();
                                andiUA.TUAlanguage = andiUA.TUAlanguage.toLowerCase();
                                andiUA.getScript(andiUA.TUAjsPath + "/lang/andi" + andiUA.TUAlanguage +".js", function() {
                                        andiUA.getScript(andiUA.TUAjsPath + "/setting/andi" + andiUA.TUAlanguage +"Setting.js", function() {        
                                                andiUA.getScript(andiUA.TUAjsPath + "andifunction.js", function() {});
                                        });
                                });
                        }
                        startRun();
                }
        }
}
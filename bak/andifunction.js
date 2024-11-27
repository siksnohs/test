andiUA.TUAjusttext = function(TUAelm) {
        let cloneHtml = TUAelm.cloneNode(true);
        let thisText = '';
        while (cloneHtml.firstChild) {
            if (cloneHtml.firstChild.nodeType === 3)
                thisText += cloneHtml.firstChild.nodeValue;
            cloneHtml.firstChild.remove();
        }
        return thisText;
    }
    ;
if (!Element.prototype.TUAisVisible) {
        Element.prototype.TUAisVisible = function () {
                let elem = this;
                if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
                const style = getComputedStyle(elem);
                const transform = style.transform;
                let winH = window.innerHeight;
                let winW = window.innerWidth;
                let matrixValues = transform.match(/matrix\(([^,]+), [^,]+, [^,]+, ([^,]+), ([^,]+), ([^)]+)\)/);
                if (matrixValues) {
                        let scaleX = parseFloat(matrixValues[1]);
                        let scaleY = parseFloat(matrixValues[2]);
                        let translateX = parseFloat(matrixValues[3]);
                        let translateY = parseFloat(matrixValues[4]);
                        if ((scaleX <= 0 || scaleY <= 0) || translateX <= -(winW) || translateY <= -(winH)) {
                                return false;
                        }
                }


                if (style.display === 'none') return false;
                if (style.visibility !== 'visible') return false;
                if (style.opacity < 0.1) return false;
                if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
                        elem.getBoundingClientRect().width === 0) {
                        return false;
                }
                const elemCenter = {
                        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
                        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
                };
                if (elemCenter.x < 0) return false;
                if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
                if (elemCenter.y < 0) return false;
                if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
                let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
                do {
                        if (pointContainer === elem) return true;
                } while (pointContainer = pointContainer && pointContainer.parentNode);
                return false;
        };
}

andiUA.TUAifElmIsHidden2 = function (elm) {
        if (elm != undefined && elm.getCss("display") != "none" && elm.getCss("visibility") != "hidden" && elm.getCss("opacity") != "0") {
                return false;
        }
        return true;
}


andiUA.TUAgetImgPath = {
        stop: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20opacity%3D%22.75%22%20fill%3D%22%23424242%22%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.69%205.604v13c0%20.16-.06.3-.175.417-.117.117-.256.176-.416.176H5.37c-.16%200-.3-.06-.415-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.177-.416.116-.118.255-.177.415-.177H10.1c.16%200%20.3.06.416.176.116.117.174.254.174.414zm8.274%200v13c0%20.16-.06.3-.175.417-.118.117-.257.176-.417.176h-4.728c-.16%200-.3-.06-.416-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.175-.416.116-.118.255-.177.415-.177h4.728c.16%200%20.3.06.416.176.115.117.174.254.174.414z%22%2F%3E%3C%2Fsvg%3E",
        TUAplay2: "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2016.0.4%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20enable-background%3D%22new%200%200%2024%2024%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Crect%20opacity%3D%220.75%22%20fill%3D%22%23333333%22%20width%3D%2224%22%20height%3D%2224%22%2F%3E%0D%0A%3Cline%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-miterlimit%3D%2210%22%20x1%3D%222%22%20y1%3D%2218.5%22%20x2%3D%2221%22%20y2%3D%2218.5%22%2F%3E%0D%0A%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M19%2C18V7c0-1.657-1.343-3-3-3H7C5.343%2C4%2C4%2C5.343%2C4%2C7v11%22%2F%3E%0D%0A%3C%2Fsvg%3E%0D%0A",
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

andiUA.findPassebleContainer = function (ArrTextToCompar) {
        var wrapArrArea = [];
        ArrTextToCompar.forEach(function (el, i) {
                UA(el + ',[class*="' + el + '"],[id*="' + el + '"]').forEach(function (el2, j) {
                        if (el2.tagName !== "LINK" && el2.closest("#TUATUAcontainer") === null) {
                                var isWrapAll = true;
                                var ANDIparentElm = el2;
                                while (ANDIparentElm.tagName.toLowerCase() != "body" && ANDIparentElm.tagName.toLowerCase() != "html") {
                                        ANDIparentElm = ANDIparentElm.parentElement;
                                        if (ANDIparentElm.tagName.toLowerCase() != "body" && ANDIparentElm.tagName.toLowerCase() != "html") {
                                                if (ANDIparentElm.getAttribute("class") !== null && ANDIparentElm.getAttribute("class").indexOf(ArrTextToCompar[i]) > -1) {
                                                        isWrapAll = false;
                                                }
                                                if (ANDIparentElm.getAttribute("id") !== null && ANDIparentElm.getAttribute("id").search(ArrTextToCompar[i]) > -1) {
                                                        isWrapAll = false;
                                                }
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
andiUA.getSiblings = function (element, type) {
        var arraySib = [];
        if (type == "prev" && element.previousSibling !== null) {
                while (element = element.previousSibling) {
                        arraySib.push(element);
                }
        } else {
                if (type == "next" && element.nextSibling !== null) {
                        while (element = element.nextSibling) {
                                arraySib.push(element);
                        }
                }
        }
        return arraySib;
};
andiUA.addToStyleAttr = function (elm, cssCode) {
        if (elm.hasAttribute('style')) {
                let style = elm.getAttribute('style');
                style += cssCode;
                elm.setAttribute('style', style)
        } else {
                elm.setAttribute('style', cssCode)
        }
}

andiUA.removeFromStyleAttr = function (elm, cssCode) {
        if (elm.hasAttribute('style')) {
                let style = elm.getAttribute('style');
                style = style.replace(cssCode, '');
                elm.setAttribute('style', style)
        }
}

andiUA.start = function () {
        let bodyParams = document.body.getBoundingClientRect();
        let bodyW = bodyParams.width;
        let bodyH = bodyParams.height;
        let body = document.body, html = document.documentElement;
        let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        let innerDivAreasElms = andiUA.innerDivAreasElms = 'div, form,  table, header, footer, nav, main, section, article, aside, dialog, ol, ul, dl';
        let buttonElm = andiUA.buttonElm = 'button, [role="button"], [type="button"], [type="image"], [type="reset"], [type="submit"]';
        let linkElm = andiUA.linkElm = 'a, [role="link"]';
        let imgElm = andiUA.imgsTags = 'img, map, area, canvas, figure, picture, svg';
        let iconElm = 'i';
        let inputElm = andiUA.inputElm = 'textarea, input:not([type="hidden"]):not([type="button"]):not([type="image"]):not([type="reset"]):not([type="submit"]), select';
        let headings = andiUA.headings = 'h1, h2, h3, h4, h5, h6, [role="heading"]';
        let lastHeight = -1;
        let uniqueObjects = {};
        let categorizedHeightElements = { '0-30%': [], '31-50%': [], '51-70%': [], '71-90%': [], '91-100%': [] };
        let categorizedByHeightSelectors = { '0-30%': {}, '31-50%': {}, '51-70%': {}, '71-90%': {}, '91-100%': {} };
        let testElmsList = 'iframe, [havetext], audio, img, map, area, canvas, figure, picture, svg, i, a, button, [type="link"], [type="button"], [type="image"], [type="reset"], [type="submit"], textarea, button, select, input:not([type="hidden"])';
        let mainColors = {};
        let areasMeaning = [];
        let allPatternsFound = [];
        let groupOfParents = [];
        let messageForScreenReader = '';
        let messageForScreenReaderTimeOut = -1;
        let observerArrElms = [];
        let observerArrElmsCssSelector = {};
        let visibleObserverArrElms = new Set();
        let attributesObserverArrElms = new Set(['aaaaa']);
        let elmsChangeEveryTime = new Set();
        let attributesChangeCounter = 0;
        let observerSetTimeout = -1;
        let attributesObserverSetTimeout = -1;
        let visibleObserverSetTimeout = -1;
        let observerTime = 650;
        andiUA.userActionTriggered = false;
        let userActionEvent = 'none';
        let mousePosition = { x: 0, y: 0 };
        let mutationTextSetimeout = -1;
        let mutationTextToIgnore = new Set();
        let lastExecutionMutationText = Date.now();
        let startMonitoringVisibleObserver = true;
        let setTimeoutForEvents = -1;
        const THROTTLE_DELAY = 100;
        const lastExecutionMap = {};
        window.ua_icons = {
                'hideArea': 'https://system.user-a.co.il/Customers/3748629/_www_rotemshani_com-/hideeye.png',
                'showArea': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20opacity%3D%22.75%22%20fill%3D%22%23424242%22%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M19.12%2012.51L6.855%2019.326c-.142.08-.263.09-.364.027s-.152-.17-.152-.33V5.428c0-.16.05-.272.152-.334s.223-.052.364.028l12.263%206.814c.14.08.21.175.21.286%200%20.11-.07.207-.21.287z%22%2F%3E%3C%2Fsvg%3E',
        }

        function createCssSelectorWithUAparent(htmlElm) {
                let haveColumnID = htmlElm.closest('[ua_column_id]')?.getAttribute('ua_column_id');
                let haveParentID = htmlElm.closest('[ua_parent_id]')?.getAttribute('ua_parent_id');
                let PClosestParentClasses = getClassesWithoutNumbers(htmlElm);
                let PClosestParentSelector = getCssSelector(htmlElm, PClosestParentClasses);
                if (PClosestParentSelector.indexOf('#') > -1 || PClosestParentSelector.indexOf('.') > -1) {
                        if (haveColumnID) PClosestParentSelector = `[ua_column_id="${haveColumnID}"] ${PClosestParentSelector}`;
                        PClosestParentSelector = `[ua_parent_id="${haveParentID}"] ${PClosestParentSelector}`;
                }
                return PClosestParentSelector;
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
                                inaccessibleSheets.push(sheet.href ? sheet.href : 'Inline style');
                        }
                }
                return { allRules, inaccessibleSheets };
        }

        function addTabindex(cssSelector) {
                if (endWithHoverRegex.test(cssSelector)) {
                        let tempCssSelector = cssSelector.replaceAll(':not(:hover)', '');
                        tempCssSelector = tempCssSelector.replaceAll(':hover', '');
                        document.querySelectorAll(tempCssSelector).forEach(function (elm) {
                                elm.setAttribute('tabindex', 0);
                        });
                }
                if (inMiddleHoverRegex.test(cssSelector)) {
                        let tempCssSelector = cssSelector.replaceAll(':not(:hover)', '');
                        tempCssSelector = tempCssSelector.replaceAll(':has(:hover)', '');
                        tempCssSelector = tempCssSelector.split(':hover')[0];
                        document.querySelectorAll(tempCssSelector).forEach(function (elm) {
                                elm.setAttribute('tabindex', 0);
                        });
                }
        }

        function splitCSSSelectors(selectorString) {
                selectorString = selectorString.replace(/\/\*.*?\*\//g, '');
                const regex = /\s*,\s*(?![^()]*\))(?![^[]*\])(?![^{}]*\})(?![^"']*["'][^"']*["'])/g;
                return selectorString.split(regex).map(s => s.trim());
        }

        function checkIfNeedTabindex(cssSelector) {
                if (cssSelector.indexOf(',') > -1) {
                        let cssSelectorArr = splitCSSSelectors(cssSelector);
                        for (let i = 0; i < cssSelectorArr.length; i++) {
                                addTabindex(cssSelectorArr[i]);
                        }
                } else {
                        addTabindex(cssSelector);
                }
        }

        function makeHoverWithoutFocusAccessible(cssRole) {
                let thisCss = cssRole
                let cssStylesWithoutSelectors = thisCss.split('{');
                let thisCssArr = cssStylesWithoutSelectors[0].trim();
                if (cssStylesWithoutSelectors[1].indexOf('}') == -1) cssStylesWithoutSelectors[1] += '}';
                let temp = '';
                if (endWithHoverRegex.test(thisCssArr)) {
                        checkIfNeedTabindex(thisCssArr)
                        temp += `${thisCssArr.replaceAll(':hover', ':focus')}  { ${cssStylesWithoutSelectors[1]} `;
                } else if (inMiddleHoverRegex.test(thisCssArr)) {
                        if (thisCssArr.indexOf(',') > -1) {
                                let cssSelectorArr = splitCSSSelectors(thisCssArr);
                                for (let i = 0; i < cssSelectorArr.length; i++) {
                                        let tempCss = cssSelectorArr[i];
                                        if (tempCss.indexOf(':hover ') > -1) {
                                                let tempCssSelector = tempCss.split(':hover')[0];
                                                if (!UA1(tempCssSelector) || !UA1(tempCssSelector).querySelector('a, [role="link"], button, [role="button"], textarea, input:not([type="hidden"]), select, [tabindex]')) {
                                                        document.querySelectorAll(tempCssSelector).forEach(function (elm) {
                                                                elm.setAttribute('tabindex', 0);
                                                        });
                                                }
                                                temp += `${tempCss.replaceAll(':hover', ':focus')} { ${cssStylesWithoutSelectors[1]} `;
                                                temp += `${tempCss.replaceAll(':hover', ':focus-within')} { ${cssStylesWithoutSelectors[1]} `;
                                        }
                                        //addTabindex(cssSelectorArr[i]);
                                }

                        }




                }
                return temp;
        }

        let fixedElms = [];
        let onlyHoverRoles = [];
        let withFocusRoles = [];
        let endWithHoverRegex = /:hover$/;
        let inMiddleHoverRegex = /.+:hover.+/;
        let newAccessibleCssRules = '';
        let result = getHoverCSSRules();
        let cssFocusReturn = '';

        for (let i = 0; i < result.allRules.length; i++) {
                let thisCss = result.allRules[i];
                if (thisCss.indexOf('@media print') == -1) {
                        let madia_at = '';
                        if (thisCss.indexOf('position: fixed') > -1) {
                                fixedElms.push(thisCss);
                        }
                        if (thisCss.indexOf('@media') == -1) {
                                if (thisCss.indexOf(':hover') > -1 && thisCss.indexOf(':focus') == -1) {
                                        cssFocusReturn += makeHoverWithoutFocusAccessible(thisCss);
                                }
                        } else {
                                madia_at = thisCss.match(/@media[^{]*\{/g);
                                let madiaArr = thisCss.split(/@media[^{]*\{/g);
                                madiaArr = madiaArr[1].replace(/}([^}]*)$/, '$1');
                                madiaArr = madiaArr.replace(/\n/g, '');
                                let tempCssMediaRoles = madiaArr.split('}');
                                let tempMediaRolesCSS = madia_at[0];
                                for (let s = 0; s < tempCssMediaRoles.length; s++) {
                                        if (tempCssMediaRoles[s].indexOf(':hover') > -1 && tempCssMediaRoles[s].indexOf(':focus') == -1) {
                                                tempMediaRolesCSS += makeHoverWithoutFocusAccessible(tempCssMediaRoles[s]);
                                        }
                                }
                                tempMediaRolesCSS += '}'
                                if (tempMediaRolesCSS.indexOf(':focus') > -1) {
                                        cssFocusReturn += tempMediaRolesCSS;
                                }
                        }
                }
        }

        let style = document.createElement('style');
        style.id = 'ua_auto_css';
        style.innerHTML = cssFocusReturn;
        document.body.appendChild(style);


        let elmVisible = [];
        let elmNotVisible = [];
        function addToFixedArr(css) {
                elmNotVisible.push(css);
        }

        for (let index = 0; index < fixedElms.length; index++) {
                let thisCss = fixedElms[index];
                let cssRoleArr = [];
                if (thisCss.indexOf('@media') == -1) {
                        cssRoleArr = thisCss.split('{');
                        addToFixedArr(cssRoleArr[0])
                } else {
                        madia_at = thisCss.match(/@media[^{]*\{/g);
                        let madiaArr = thisCss.split(/@media[^{]*\{/g);
                        madiaArr = madiaArr[1].replace(/}([^}]*)$/, '$1');
                        madiaArr = madiaArr.replace(/\n/g, '');
                        let tempCssMediaRoles = madiaArr.split('}');
                        for (let s = 0; s < tempCssMediaRoles.length; s++) {
                                if (tempCssMediaRoles[s].indexOf('position: fixed') > -1) {
                                        let tempCss = tempCssMediaRoles[s].split('{');
                                        addToFixedArr(tempCss[0]);
                                }
                        }
                }
        }


        var visibleObserver = new IntersectionObserver(function (entries) {
                //let visible = entries.filter((entry) => entry.isIntersecting == true);
                entries.forEach(entry => {
                        let element = entry.target;
                        if (entry.isIntersecting) {

                        } else {

                        }
                        element.removeAttribute('firstTime', true);
                });
        }, { threshold: [0, 1] });



        let mutationObserver = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                        if (mutation.addedNodes.length) {
                                let elms = mutation.addedNodes;
                                for (let index = 0; index < elms.length; index++) {
                                        let thisElm = elms[index];
                                        /*
                                        if (element.nodeType === Node.TEXT_NODE) {
                                                //console.info(element.nodeValue);
                                                checkTextChangeAllTime(element.parentNode)
                                        }*/

                                }
                        }

                        if (mutation.removedNodes.length > 0) {
                                mutation.removedNodes.forEach(node => {
                                        if (node.nodeType === Node.TEXT_NODE) {
                                                //console.info('טקסט הוסר:', node.nodeValue);
                                        }

                                });
                        }

                        if (mutation.type === 'attributes' && mutation.target.querySelectorAll('*').length > 2 && (mutation.attributeName == 'class' || mutation.attributeName == 'style')) {
                                let elmSelector = [...attributesObserverArrElms].join(',');
                                let joinedString = '[ua_parent_id], [ua_column_id], [ua_column], [ua_slider], [slider_hide], body, form, style, script, input, textarea, select, ' + elmSelector;
                                if (joinedString.endsWith(',')) joinedString = joinedString.slice(0, -1);
                                if (!mutation.target.isIt(joinedString) && !andiUA.userActionTriggered) {
                                        checkIfChangeAutomatic(mutation.target);
                                }
                        }

                        if (mutation.type === 'characterData' && mutation.target.nodeType === Node.TEXT_NODE) {
                                let textNode = mutation.target;
                                let parentElement = textNode.parentElement;
                                let timeOfChange = Date.now();
                                checkTextChangeAllTime(parentElement);
                        }
                });
        });

        andiUA.popupByDesign = [];
        setTimeout(() => {

                /*for (let index = 0; index < elmNotVisible.length; index++) {// 
                        const element = elmNotVisible[index];
                        if (!UA1(element) ||  (  parseInt(UA1(element).getCss('width')) > 100  && parseInt(UA1(element).getCss('height')) > 100 )    || (UA1(element) && !UA1(element).TUAisVisible())) {
                                andiUA.popupByDesign.push({
                                        TUAwrapArea: element,
                                        TUAUserLightBoxCloseBtn: '.elementor-menu-cart__close-button, a[class*="close"], button[class*="close"]',
                                });
                        }
                }
                console.log(andiUA.popupByDesign)
                */
                mutationObserver.observe(document.body, { 
                        childList: true,
                        subtree: true,
                        characterData: true,
                        attributes: true,
                        attributeOldValue: true
                });

                for (let index = 0; index < elmNotVisible.length; index++) {
                        const element = elmNotVisible[index];
                        document.querySelectorAll(element).forEach(function (elm) {
                                elm.setAttribute('firstTime', true);
                                visibleObserver.observe(elm);
                        });
                }
        }, 2000);




        /* Slider Start */
        function setSlidersAccessibility(className) {
                let bgColor = andiUA.TUAsettingFn.TUAparam.backgroundColor;
                let accMenu = document.querySelector('#TUAsetItAccessible, #TUAAndiIconOpenMenuBtn')
                if (accMenu) bgColor = getCss(accMenu, 'background-color');
                className = className.split('***')[1];
                let cssParts = className.split(' ');
                let editSelector = '';
                for (let j = 0; j < cssParts.length; j++) {
                        const part = cssParts[j];
                        if (part.endsWith(']')) editSelector += part + ' ';
                }

                let sliderNum = document.querySelectorAll('[class*="ua_slider_btn_"]').length + 1;
                document.querySelectorAll(editSelector).forEach((slider, index) => {
                        if (!slider.querySelector('[class*="ua_slider_btn_"][role="button"]')) {
                                slider.setAttribute('ua_slider', true);
                                slider.style.position = 'relative';
                                slider.insertAdjacentHTML("afterbegin", `
                                        <div class="ua_slider_btn_${sliderNum}" aria-pressed="false" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang.altPauseSlider}" style="background-color: ${bgColor};width:20px; height:20px; position: absolute; top: 10px; left: 10px;z-index: 99999999999999999999999999 ;">
                                                <img alt="${andiUA.TUAfileLang.altPauseSlider}" src="${andiUA.TUAgetImgPath.stop}" style="width:20px; height:20px; position: absolute; z-index: 99999999999999999999999999999999999999;">
                                        </div>
                                `);
                                document.querySelector('.ua_slider_btn_' + sliderNum).addEventListener('click', function () {
                                        let that = this;
                                        if (that.getAttribute('aria-pressed') == 'true') {
                                                that.setAttribute('aria-pressed', false);
                                                slider?.querySelector('.ua_slider_bg')?.remove();
                                        } else {
                                                that.setAttribute('aria-pressed', 'true');
                                                slider.insertAdjacentHTML("afterbegin", `<div class="ua_slider_bg" role="img" aria-label="${andiUA.TUAfileLang.altPauseSlider}" style="width: ${getCss(slider, 'width')}; height:${getCss(slider, 'height')}; top: 0;left: 0;z-index: 9999999999;position: absolute;z-index: 99999999999999999999999999;background-color: ${bgColor};background-image: url(${andiUA.TUAjsPath}/imgs/hideeye.png);background-repeat: no-repeat;background-position: center;"></div>`);
                                        }
                                });
                                document.querySelector('.ua_slider_btn_' + sliderNum).addEventListener('keydown', function (e) {
                                        if (e.key == 'Enter' || e.key == ' ') {
                                                this.click();
                                        }
                                })
                        }
                });
        }



        function checkIfChangeAutomatic(htmlElm) {
                let PClosestParentSelector = createCssSelectorWithUAparent(htmlElm);
                let objKey = userActionEvent + '***' + PClosestParentSelector;
                if (objKey.indexOf('#') > -1 || objKey.indexOf('.') > -1) {
                        if (!observerArrElmsCssSelector[objKey]) {
                                observerArrElmsCssSelector[objKey] = 1;
                        } else {
                                observerArrElmsCssSelector[objKey]++;
                                let count = observerArrElmsCssSelector[objKey];
                                if (count >= 5 && objKey.indexOf('none***') > -1) {
                                        setSlidersAccessibility(objKey);
                                }
                        }
                }
        }

        function checkTextChangeAllTime(htmlElm) {
                let objKey = createCssSelectorWithUAparent(htmlElm);
                let thisTime = Date.now();
                if (!lastExecutionMap[objKey]) {
                        lastExecutionMap[objKey] = { key: objKey, elm: htmlElm, count: 1, lastExecution: thisTime, firstExecution: thisTime };
                        lastExecutionMap[objKey].timeout = setTimeout(function () {
                                //        checkText(lastExecutionMap[objKey]);
                        }, THROTTLE_DELAY);
                }
                if (thisTime - lastExecutionMap[objKey].lastExecution > THROTTLE_DELAY) {
                        clearTimeout(lastExecutionMap[objKey].timeout);
                        lastExecutionMap[objKey].lastExecution = thisTime;
                        lastExecutionMap[objKey].count++;
                        //checkText(lastExecutionMap[objKey]);
                }
        }




        function getClassesWithoutNumbers(elm) {
                if (!elm) return [];
                if (elm.tagName.toLowerCase() == 'svg' || elm.closest('svg')) return [];
                const allClasses = elm.className.split(/\s+/);
                const classesWithoutNumbers = allClasses.filter(cls => !/\d/.test(cls));
                classesWithoutNumbers.sort((a, b) => b - a);
                return classesWithoutNumbers;
        }


        function getCss(elm, style) {
                return window.getComputedStyle(elm).getPropertyValue(style);
        }

        function getPosition(elm) {
                return window.getComputedStyle(elm).getPropertyValue('position');
        }

        function getClipCss(elm) {
                return window.getComputedStyle(elm).getPropertyValue('clip');
        }

        function getCssSelector(elm, Class) {
                if (!elm) return '';
                let allClass = '';
                allClass += elm.tagName;
                if (elm.id) allClass += '#' + elm.id;
                Class.forEach(function (Class) {
                        if (Class.trim() !== '') allClass += '.' + Class
                });
                return allClass;
        }

        function getOffset(el) {
                const rect = el.getBoundingClientRect();
                return {
                        left: rect.left + window.scrollX,
                        top: rect.top + window.scrollY
                };
        }

        function round2(arr) {
                uniqueObjects = {};
                let newDataObjArrRound1 = [];
                arr.forEach(obj => {
                        const key = JSON.stringify({
                                'thisWidth': obj.thisWidth,
                                'thisHeight': obj.thisHeight,
                                'y': obj.y,
                                'x': obj.x,
                        });
                        if (!uniqueObjects[key]) {
                                uniqueObjects[key] = obj;
                                newDataObjArrRound1.push(obj);
                        }
                });
                return newDataObjArrRound1;
        }


        function createObj(htmlElm) {
                let cssSetting = htmlElm.getBoundingClientRect();
                let coordinates = getOffset(htmlElm);
                let thisWidth = cssSetting.width;
                let thisHeight = cssSetting.height;
                let y = coordinates.top;
                let x = coordinates.left;
                let classesWithoutNumbers = getClassesWithoutNumbers(htmlElm);
                let CssSelector = getCssSelector(htmlElm, classesWithoutNumbers);
                let tempFontSize = '';
                if (htmlElm.hasAttribute('andiallelmwithtext')) {
                        tempFontSize = parseInt(htmlElm.getAttribute('andiallelmwithtext'));
                } else {
                        tempFontSize = parseInt(window.getComputedStyle(htmlElm).getPropertyValue('font-size'));
                }
                let tempColor = htmlElm.getAttribute('color');
                let cssClip = getClipCss(htmlElm)
                let cssPosition = getPosition(htmlElm)
                let isScreenReaderText = cssClip.indexOf('rect') > -1 && cssPosition == 'absolute' && thisWidth < 5 && thisHeight < 5;
                let thisText = htmlElm.hasAttribute("havetext") ? htmlElm.innerText : '';
                return {
                        'elm': htmlElm,
                        'text': thisText,
                        'elmClass': classesWithoutNumbers,
                        'elmSelector': CssSelector,
                        'y': y,
                        'thisHeight': thisHeight,
                        'thisWidth': thisWidth,
                        'x': x,
                        'fontSize': tempFontSize,
                        'color': tempColor,
                        'isScreenReaderText': isScreenReaderText,
                        'isBold': htmlElm.hasAttribute("bold"),
                        'isUnderline': htmlElm.hasAttribute("underline"),
                        'isItalic': htmlElm.hasAttribute("italic"),
                        'isLineThrough': htmlElm.hasAttribute("linethrough"),
                        'isHiddenElm': htmlElm.hasAttribute("hiddenelm"),
                }
        }

        function containsOnlySpecialCharacters(text) {
                return /^[^\p{L}\p{N}\s]+$/u.test(text);
        }

        function addObjToArr(arr, htmlElm) {
                arr.push(createObj(htmlElm));
        }

        function getAllElms(innerDivAreasElms, bodyW) {
                let arr = [];
                let allElms = document.querySelectorAll(innerDivAreasElms)
                for (let i = 0; i < allElms.length; i++) {
                        let elm1 = allElms[i];
                        if (elm1.querySelectorAll('*').length) addObjToArr(arr, elm1);
                };
                return arr;
        }

        function resetUserActionTriggered() {
                andiUA.userActionTriggered = true;
                clearTimeout(setTimeoutForEvents)
                setTimeoutForEvents = setTimeout(() => {
                        andiUA.userActionTriggered = false;
                        userActionEvent = 'none';
                }, 1200);
        }

        function setEventsForMutationAttributes() {
                document.addEventListener('click', () => {
                        resetUserActionTriggered();
                        userActionEvent = 'click';
                });
                document.addEventListener('keydown', () => {
                        resetUserActionTriggered();
                        userActionEvent = 'keydown';
                });
                document.addEventListener('mouseover', () => {
                        resetUserActionTriggered();
                        userActionEvent = 'mouseover';
                });
                document.addEventListener("scroll", (event) => {
                        resetUserActionTriggered();
                        userActionEvent = 'scroll';
                });
                /*document.addEventListener('mousemove', event => {
                        mousePosition.x = event.clientX;
                        mousePosition.y = event.clientY;
                });*/
        }

        function isGalerryLink(link) {
                let href = link.href;
                if (href && href.indexOf('?')) href = href.split('?')[0];
                else href = '';
                return (/\.(jpeg|jpg|gif|png|svg|webp)$/i.test(href))
        };

        function checkLinkMeaning(thisLink) {
                let thistext = thisLink.innerText
                let thisAriaLabel = thisLink.getAttribute('aria-label');
                let thisTitle = thisLink.getAttribute('title');
                let altText = thisLink.querySelector('img')?.getAttribute('alt');
                let svgText = thisLink.querySelector('svg')?.getAttribute('aria-label');
                return thisMeaning = thistext || thisAriaLabel || altText || svgText || thisTitle || '';
        }

        function checkLinkClickable(thisLink) {
                if (thisLink.getAttribute('tabindex') && parseInt(thisLink.getAttribute('tabindex')) >= 0) {
                        return true;
                }
                if (thisLink.tagName == 'A' && thisLink.hasAttribute('href')) {
                        return true;
                }
        }

        function removeAreaInsideArea(elm, areaName, key) {
                if (elm.querySelector('[' + areaName + ']')) {
                        elm.querySelectorAll('[' + areaName + ']').forEach(function (thisArea) {
                                thisArea.removeAttribute(areaName);
                                thisArea.removeAttribute('ua_parent_id');
                        });
                }
                if (!elm.closest('[' + areaName + ']')) {
                        elm.setAttribute(areaName, key);
                        return true;
                }
                return false;
        }

        function setAttrColumnAndLine(size, newLine, elm) {
                elm.setAttribute('ua_column', size);
                elm.setAttribute('ua_column_line', newLine);
        }


        function checkPercentageAndApply(percentage, htmlCollection, index, newLine = 0) {
                let isColumn = false;
                let elm = htmlCollection[0];
                if (elm.isIt('svg, svg *')) return false;
                index = `${index}`;

                if (/*12*/ percentage > 0 && percentage <= 8) {
                        isColumn = true;
                        setAttrColumnAndLine(12, newLine, elm)
                } else if (/*11*/ percentage > 8 && percentage <= 16) {
                        isColumn = true;
                        setAttrColumnAndLine(11, newLine, elm)
                } else if (/*10*/ percentage > 16 && percentage <= 24) {
                        isColumn = true;
                        setAttrColumnAndLine(10, newLine, elm)
                } else if (/*9*/ percentage > 24 && percentage <= 33) {
                        isColumn = true;
                        setAttrColumnAndLine(9, newLine, elm)
                } else if (/*8*/ percentage > 33 && percentage <= 41) {
                        isColumn = true;
                        setAttrColumnAndLine(8, newLine, elm)
                } else if (/*7*/ percentage > 41 && percentage <= 49) {
                        isColumn = true;
                        setAttrColumnAndLine(7, newLine, elm)
                } else if (/*6*/ percentage > 49 && percentage <= 58) {
                        isColumn = true;
                        setAttrColumnAndLine(6, newLine, elm)
                } else if (/*5*/ percentage > 58 && percentage <= 66) {
                        isColumn = true;
                        setAttrColumnAndLine(5, newLine, elm)
                } else if (/*4*/ percentage > 66 && percentage <= 74) {
                        isColumn = true;
                        setAttrColumnAndLine(4, newLine, elm)
                } else if (/*3*/ percentage > 74 && percentage <= 82) {
                        isColumn = true;
                        setAttrColumnAndLine(3, newLine, elm)
                } else if (/*2*/ percentage > 82 && percentage <= 90) {
                        isColumn = true;
                        setAttrColumnAndLine(2, newLine, elm)
                } else if (/*1*/ percentage > 90 && percentage <= 100) {
                        if (index.indexOf('a7-') > -1) {
                                isColumn = true;
                                setAttrColumnAndLine(1, newLine, elm)
                        } else {
                                isColumn = false;
                        }

                }
                return isColumn;
        }

        function removeColumnsAttr(divChildren) {
                divChildren.forEach(function (elm) {
                        elm.removeAttribute('ua_column');
                });
        }

        function findColoums(parent) {
                //let innerDivAreasElmsTemp = ['DIV', 'FORM', 'TABLE', 'HEADER', 'FOOTER', 'NAV', 'MAIN', 'SECTION', 'ARTICLE', 'ASIDE', 'DIALOG', 'OL', 'UL', 'DL'];
                let innerDivAreasElmsTemp = 'iframe, [havetext], audio, img, map, area, canvas, figure, picture, svg, svg *, li *, a *, i, a, button, [type="link"], span, textarea, button, select, input, li';
                function checkIfElementIsNotInList(element, list) {
                        return !element.isIt(list);
                }
                function checkChildren(node) {
                        let children = Array.from(node.children);
                        let parentSize = node.getBoundingClientRect();
                        if (!children.every(child => checkIfElementIsNotInList(child, innerDivAreasElmsTemp))) {
                                children.forEach(checkChildren);
                        } else {
                                let divChildrenHaveStyle = children.filter(child => (child.isIt('style, script')));
                                let divChildren = children.filter(child => (child.getBoundingClientRect().height > 0 && child.getBoundingClientRect().width > 0));
                                if (divChildren.length < 2 && divChildren.length > 7) {
                                        divChildren.forEach(checkChildren);
                                } else if ((divChildrenHaveStyle.length > 0 && divChildren.length > 0 && divChildrenHaveStyle.length / divChildren.length) < 0.5) {
                                        divChildren.forEach(checkChildren);
                                } else {
                                        let count = 0;
                                        let didFindColumns = false;
                                        let totleWidthForAllColumn = 0;
                                        let firstY = -1;
                                        let newLine = 0;
                                        for (let index = 0; index < divChildren.length; index++) {
                                                const innerDiv = divChildren[index];
                                                let divSize = innerDiv.getBoundingClientRect();
                                                var style = window.getComputedStyle(innerDiv);
                                                var marginLeft = parseFloat(style.marginLeft);
                                                var marginRight = parseFloat(style.marginRight);
                                                let totalWidth = marginLeft + marginRight + divSize.width;
                                                if (totalWidth <= 75) {
                                                        didFindColumns = true;
                                                        break;
                                                }
                                                if (firstY == -1) {
                                                        totleWidthForAllColumn += totalWidth;
                                                        firstY = divSize.y;
                                                } else if (divSize.y >= firstY - 5 && divSize.y <= firstY + 5) {
                                                        totleWidthForAllColumn += totalWidth;
                                                        if (totleWidthForAllColumn > parentSize.width + 10) {
                                                                removeColumnsAttr(divChildren);
                                                                didFindColumns = false;
                                                        }
                                                } else if (divSize.y < firstY - 5 || divSize.y > firstY + 5) {
                                                        totleWidthForAllColumn = totalWidth;
                                                        newLine++;
                                                }
                                                let htmlCollection = [innerDiv];
                                                let percentage = Math.round((totalWidth / parentSize.width) * 100);
                                                if (checkPercentageAndApply(percentage, htmlCollection, index, newLine)) {
                                                        count++;
                                                        didFindColumns = true;
                                                }
                                        };
                                        if (!didFindColumns) divChildren.forEach(checkChildren);
                                }
                        }
                }
                checkChildren(parent);
        }

        function Analyserstructure() {

                Object.entries(categorizedByHeightSelectors).forEach(function ([key, thisGroup]) {
                        let areaName = 'area' + key.replace('%', '').replace('-', '');
                        key = key.replace('%', '')
                        Object.entries(thisGroup).forEach(function ([thisClass, arr], i) {
                                for (let index = 0; index < arr.length; index++) {
                                        const arrItem = arr[index];
                                        let parent = arrItem['elm'];
                                        if (areaName.indexOf('030') > -1) {
                                                if (removeAreaInsideArea(parent, areaName, key)) {
                                                        parent.setAttribute('ua_parent_id', `${i}-${index}`);
                                                        groupOfParents.push(parent);
                                                        findColoums(parent);

                                                }
                                        }
                                        if (areaName.indexOf('3150') > -1) {
                                                if (removeAreaInsideArea(parent, areaName, key))
                                                        parent.setAttribute('ua_parent_id', `${i}-${index}`);
                                                groupOfParents.push(parent);
                                                //findColoums(parent);
                                        }
                                        if (areaName.indexOf('5170') > -1) {
                                                if (removeAreaInsideArea(parent, areaName, key))
                                                        parent.setAttribute('ua_parent_id', `${i}-${index}`);
                                                //findColoums(parent);
                                        }
                                        if (areaName.indexOf('7190') > -1) {
                                                if (removeAreaInsideArea(parent, areaName, key))
                                                        parent.setAttribute('ua_parent_id', `${i}-${index}`);
                                                //findColoums(parent);
                                        }
                                        if (areaName.indexOf('91100') > -1) {
                                                if (removeAreaInsideArea(parent, areaName, key))
                                                        parent.setAttribute('ua_parent_id', `${i}-${index}`);
                                        }
                                }
                        });
                });
        }

        function checkForMisingColumns() {
                document.querySelectorAll('[ua_column]').forEach(function (column) {
                        let parent = column.parentElement;
                        let parentSize = parent.getBoundingClientRect();
                        let ImAnColumn = [];
                        let ImNotAcolumn = [];
                        [...parent.children].forEach(function (child) {
                                if (child.hasAttribute('ua_column')) ImAnColumn.push(child);
                                else ImNotAcolumn.push(child);
                        });
                        if (ImNotAcolumn.length < parent.children.length) {
                                let totleWidthForAllColumn = 0;
                                for (let index = 0; index < ImNotAcolumn.length; index++) {
                                        const child = ImNotAcolumn[index];
                                        let divSize = child.getBoundingClientRect();
                                        let htmlCollection = [child];
                                        var style = window.getComputedStyle(child);
                                        var marginLeft = parseFloat(style.marginLeft);
                                        var marginRight = parseFloat(style.marginRight);
                                        let totalWidth = marginLeft + marginRight + divSize.width;
                                        totleWidthForAllColumn += totalWidth;
                                        let percentage = Math.round((totalWidth / parentSize.width) * 100);
                                        let i = `a7-${parent.querySelectorAll('[ua_column]').length}`;
                                        checkPercentageAndApply(percentage, htmlCollection, i);
                                }
                        }
                })
        };

        function getHeightCategory(height, pageHeight) {
                const heightPercentage = (height / pageHeight) * 100;
                if (heightPercentage <= 25) {
                        return '0-30%';
                } else if (heightPercentage <= 50) {
                        return '31-50%';
                } else if (heightPercentage <= 70) {
                        return '51-70%';
                } else if (heightPercentage <= 90) {
                        return '71-90%';
                } else {
                        return '91-100%';
                }
        }

        function categorizeBySelector(elementsArray) {
                const selectorGroups = {};
                elementsArray.forEach(element => {
                        const selector = element.elmSelector;
                        if (!selectorGroups[selector]) {
                                selectorGroups[selector] = [];
                        }
                        selectorGroups[selector].push(element);
                });
                return selectorGroups;
        }

        function setHeightGroups() {
                AllElmsArr.forEach(element => {
                        if (element.thisWidth > bodyW * 0.40) {
                                const category = getHeightCategory(element.thisHeight, pageHeight);
                                categorizedHeightElements[category].push(element);
                        }
                });

                for (const [category, elements] of Object.entries(categorizedHeightElements)) {
                        categorizedByHeightSelectors[category] = categorizeBySelector(elements);
                }
        }

        function setSpecialAttrs() {
                let n, a = [], walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                while (n = walk.nextNode()) {
                        let elm = n.parentNode;
                        let elmText = n.data.trim();
                        if (elmText !== "" && !containsOnlySpecialCharacters(elmText) && !elm.isIt("script, noscript, style, head, meta, link")) {
                                let computedStyle = window.getComputedStyle(elm, null)
                                const color = computedStyle.color;
                                const fontWeight = computedStyle.fontWeight;
                                const textDecoration = computedStyle.textDecoration;
                                const fontStyle = computedStyle.fontStyle;

                                const isBold = fontWeight === 'bold' || parseInt(fontWeight, 10) > 400;
                                const isUnderline = textDecoration.includes('underline');
                                const isItalic = fontStyle === 'italic';
                                const isLineThrough = textDecoration.includes('line-through');

                                let TUAelmFontSize = parseInt(computedStyle.getPropertyValue("font-size"));
                                elm.setAttribute("havetext", true);
                                elm.setAttribute("andiallelmwithtext", TUAelmFontSize);
                                elm.setAttribute("color", color);

                                if (isBold) elm.setAttribute("bold", true);
                                if (isUnderline) elm.setAttribute("underline", true);
                                if (isItalic) elm.setAttribute("italic", true);
                                if (isLineThrough) elm.setAttribute("linethrough", true);
                                //if (isElementHidden(elm)) elm.setAttribute("hiddenelm", true);
                        }
                }
        }

        /********************************** */
        /********************************** */
        /********************************** */
        function extractDomainName(url) {
                const parsedUrl = new URL(url);
                const hostname = parsedUrl.hostname;
                const parts = hostname.split('.');
                if (parts.length > 1) {
                        return parts[parts.length - 2];
                }
                return '';
        }

        function isLink(htmlElm, linkElm) {
                return htmlElm.isIt(linkElm);
        }

        function isImg(htmlElm, imgElm) {
                return htmlElm.isIt(imgElm);
        }

        function isIcon(htmlElm, iconElm) {
                return htmlElm.isIt(iconElm);
        }

        function isInput(htmlElm, inputElm) {
                return htmlElm.isIt(inputElm);
        }

        function isButton(htmlElm, buttonElm) {
                return htmlElm.isIt(buttonElm);
        }

        function isClosestToElm(htmlElm, elms) {
                return htmlElm.parentElement.closest(elms);
        }

        function isElementInsideOther(parentElement, childElement) {
                return parentElement.contains(childElement);
        }

        function determineType(htmlElm) {
                let type = 'טקסט';
                if (isClosestToElm(htmlElm, linkElm)) {
                        if (isImg(htmlElm, imgElm)) {
                                if (isGalerryLink(htmlElm.closest(linkElm))) {
                                        type = 'תמונת קישור גלריה';
                                } else {
                                        type = 'תמונת קישור';
                                }
                        } else if (isIcon(htmlElm, iconElm)) {
                                type = 'אייקון קישור';

                        } else if (htmlElm.innerText && isPrice(htmlElm.innerText)) {
                                type = 'מחיר קישור';

                        } else if (htmlElm.isIt('[havetext]')) {
                                type = 'טקסט קישור';

                        } else {
                                type = 'קישור';
                        }
                } else if (isClosestToElm(htmlElm, buttonElm) && !htmlElm.isIt(inputElm)) {
                        if (isImg(htmlElm, imgElm)) {
                                type = 'תמונת כפתור';

                        } else if (isIcon(htmlElm, iconElm)) {
                                type = 'אייקון כפתור';

                        } else if (isPrice(htmlElm.innerText)) {
                                type = 'מחיר כפתור';

                        } else if (htmlElm.isIt('[havetext]')) {
                                type = 'טקסט כפתור';

                        } else {
                                type = 'כפתור';
                        }
                } else if (isClosestToElm(htmlElm, 'picture, svg')) {
                        type = 'תמונה';
                } else if (isClosestToElm(htmlElm, 'i') && !isImg(htmlElm, imgElm)) {
                        type = 'אייקון';
                } else if (isImg(htmlElm, imgElm)) {
                        type = 'תמונה';
                } else if (htmlElm.isIt('video')) {
                        type = 'וידאו';
                } else if (htmlElm.isIt('audio')) {
                        type = 'אודיו';
                } else if (isButton(htmlElm, buttonElm)) {
                        type = 'כפתור';
                } else if (isLink(htmlElm, linkElm)) {
                        type = 'קישור';
                } else if (htmlElm.isIt('select')) {
                        type = 'select לייבל אחורה';
                } else if (htmlElm.isIt('figcaption') && isClosestToElm(htmlElm, 'figure')) {
                        type = 'תיאור תמונה';
                } else if (isInput(htmlElm, inputElm)) {
                        if (htmlElm.isIt('[type="radio"], [type="checkbox"]')) {
                                type = 'לייבל קדימה';
                        } else {
                                type = 'לייבל אחורה';
                        }

                } else if (htmlElm.isIt('[role="tab"]')) {
                        type = 'לשונית טאב';
                } else if (htmlElm.isIt('i')) {
                        type = 'אייקון';
                } else if (htmlElm.isIt('iframe')) {
                        if (htmlElm.hasAttribute('src')) {
                                const iframeSrc = htmlElm.src;
                                const domainName = extractDomainName(iframeSrc);
                                if (iframeSrc && domainName != '') {
                                        type = 'הצגת מידע מאתר ' + domainName
                                }
                        } else {
                                type = 'הצגת מידע מאתר חיצוני';
                        }
                        if (!htmlElm.hasAttribute('aria-label')) {
                                let title = htmlElm.title || '';
                                htmlElm.setAttribute('aria-label', `${type}, ${title}`)
                        }
                } else if (isPrice(htmlElm.innerText)) {
                        type = 'מחיר';
                }



                return type;
        }



        function findHeaderAndFooter() {
                let posibleHeader = [], posibleFooter = [];
                let percentage = (1 - ((window.innerHeight / pageHeight)));
                document.querySelectorAll('[area030],[area3150]').forEach(function (area) {
                        let coordinates = getOffset(area);
                        let cssSetting = area.getBoundingClientRect();
                        if (!isElementHidden(area) && cssSetting.height > 20 && coordinates.top <= 200 && coordinates.top + cssSetting.height <= window.innerHeight * 0.5) {
                                posibleHeader.push([area, coordinates.top]);
                        }
                        if (!isElementHidden(area) && cssSetting.height > 20 && coordinates.top >= pageHeight * percentage) {
                                posibleFooter.push([area, coordinates.top]);
                        }
                });

                if (posibleHeader.length == 0) {
                        let area030Arr = document.querySelectorAll('[area030]');
                        area030Arr = [...area030Arr]
                        for (let index = 0; index < area030Arr.length; index++) {
                                const area = area030Arr[index];
                                let coordinates = getOffset(area);
                                let cssSetting = area.getBoundingClientRect();
                                if (!isElementHidden(area) && cssSetting.height > 20 && coordinates.top <= 200) {
                                        posibleHeader.push([area, coordinates.top]);
                                        break;
                                }

                        }
                }




                if (posibleFooter.length == 0) {
                        let area030Arr = document.querySelectorAll('[area030],[area3150]');
                        area030Arr = [...area030Arr]
                        for (let index = 0; index < area030Arr.length; index++) {
                                const area = area030Arr[index];
                                let coordinates = getOffset(area);
                                let cssSetting = area.getBoundingClientRect();
                                if (!isElementHidden(area) && cssSetting.height > 20 && coordinates.top >= pageHeight * percentage) {
                                        posibleFooter.push([area, coordinates.top]);
                                        break;
                                }

                        }
                }

                posibleHeader.sort((a, b) => a[1] - b[1]);
                posibleFooter.sort((a, b) => b[1] - a[1]);
                posibleHeader.forEach(function (header) {
                        header[0].setAttribute('ua_header', true);
                        header[0].setAttribute('role', 'banner');
                });
                posibleFooter.forEach(function (footer, index) {
                        if (index < 3) {
                                if (footer[0].querySelector('[ua_footer]')) {
                                        footer[0].querySelectorAll('[ua_footer]').forEach(function (thisArea) {
                                                thisArea.removeAttribute('ua_footer');
                                                thisArea.removeAttribute('role');
                                        });
                                }
                                if (!footer[0].closest('[ua_footer]')) {
                                        footer[0].setAttribute('ua_footer', true);
                                        footer[0].setAttribute('role', 'contentinfo');
                                }

                        }
                });
                return [posibleHeader, posibleFooter];
        }

        function isTypeAllow(elm, areaType) {
                if (areaType == 'all') return true;
                if (areaType == 'areaOnly') {
                        if (elm.closest('[ua_column]')) return false;
                        return true;
                }
                if (areaType == 'column') {
                        if (elm.closest('[ua_column]')) return true;
                        return false;
                }
        }

        function isGrayScale(rgbString) {
                const rgbParts = rgbString.match(/\d+/g).map(Number);
                return rgbParts.length >= 3 && rgbParts[0] === rgbParts[1] && rgbParts[1] === rgbParts[2];
        }

        function isPrice(text) {
                if (!text) return false;
                text = text.replace(/[\s\u00A0]+/g, '');
                const priceRegex = /^[\d,]+(\.\d{2})?$/;
                const textWithoutCurrency = text.replace(/[₪$€£¥₹₽฿₫₴₭₲₵₸₺₼]+/g, '');
                return priceRegex.test(textWithoutCurrency.replace(/,/g, ''));
        }

        function findCurrencySymbols(text) {
                const currencyRegex = /[$₪€£¥₹₽฿₫₴₭₲₵₸₺₼]/g;
                return currencyRegex.test(text);
        }

        function containsOnlyNumbers(text) {
                return /^\d+$/.test(text);
        }

        function containsNumbersAndSymbols(text) {
                // מתחילים עם מספרים שיכולים להיות מופרדים על ידי פסיקים, לאחר מכן ייתכנו סימנים מיוחדים כגון +, -, %, K, M
                return /^[\d,]+(?:k\+?|m\+?|%\+?|\+)?$/i.test(text);
        }

        function isElementHidden(element) {
                if (element.hasAttribute('hidden')) { return true; }
                if (element.getCss('display') == 'none') { return true; }
                if (element.getCss('visibility') == 'hidden') { return true; }
                if (element.getCss('transform').includes('scale(0)')) { return true; }
                if (element.getCss('clip') == 'rect(0px, 0px, 0px, 0px)') { return true; }
                if (element.getCss('clip') > -1 && element.getCss('position') == 'absolute' && thisWidth < 5 && thisHeight < 5) { return true; }
                if (parseInt(element.getCss('max-height')) == 0) { return true; }
                let translateXwidth = parseInt(element.getCss('width'));
                if (element.getCss('transform').includes(`-${translateXwidth}`)) { return true; }
                if (parseInt(element.getCss('opacity')) == 0) { return true; }
                return false;
        }

        function createStructure(testElms, areaType) {
                let structureArr = [];
                let elmsStructureTypeArr = [];
                let fontSizeArr = [];
                let colorArr = [];
                let colomnInArea = [];
                let countText = 0;
                for (let i = 0; i < testElms.length; i++) {
                        let htmlElm = testElms[i];
                        if (isTypeAllow(htmlElm, areaType)) {
                                let tempType = '';
                                let elmObj = createObj(htmlElm);
                                let skipMe = false;
                                tempType = determineType(htmlElm);

                                let isContains = false;
                                if (tempType == 'תמונת כפתור' || tempType == 'אייקון כפתור') {
                                        let lastElm = structureArr.at(-1);
                                        if (lastElm && lastElm['elm'].contains(htmlElm)) {
                                                isContains = true;
                                                structureArr.at(-1)['elmsType'] = tempType;
                                                elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = tempType;
                                        }
                                        if (lastElm && isClosestToElm(lastElm['elm'], buttonElm)) {
                                                isContains = true;
                                                structureArr.at(-1)['elm'] = lastElm['elm'].closest(buttonElm);
                                                elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = tempType;
                                        }
                                }

                                if (tempType == 'תמונת קישור' || tempType == 'אייקון קישור') {
                                        let lastElm = structureArr.at(-1);
                                        if (lastElm && lastElm['elm'].contains(htmlElm)) {
                                                isContains = true;
                                                structureArr.at(-1)['elmsType'] = tempType;
                                                elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = tempType;
                                        }
                                        if (lastElm && isClosestToElm(lastElm['elm'], linkElm)) {
                                                isContains = true;
                                                structureArr.at(-1)['elms'] = lastElm['elm'].closest(linkElm);
                                                elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = tempType;
                                        }
                                }
                                if (tempType == 'כפתור') {
                                        let lastElm = structureArr.at(-1);
                                        if (lastElm && structureArr.at(-1)['elmsType']) {
                                                if (isClosestToElm(lastElm['elm'], buttonElm)) {
                                                        isContains = true;
                                                        structureArr.at(-1)['elm'] = lastElm['elm'].closest(buttonElm);
                                                        elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = tempType;
                                                }
                                        }
                                }
                                if (tempType == 'קישור') {
                                        let lastElm = structureArr.at(-1);
                                        if (lastElm && structureArr.at(-1)['elmsType']) {
                                                if (isClosestToElm(lastElm['elm'], linkElm)) {
                                                        isContains = true;
                                                        structureArr.at(-1)['elm'] = lastElm['elm'].closest(linkElm);
                                                        elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = tempType;
                                                }
                                        }
                                }

                                if (tempType == 'לייבל אחורה') {
                                        let lastElm = structureArr.at(-1);
                                        if (lastElm) {
                                                let inputMeaningText = andiUA.checkInput(lastElm['elm']);
                                                if (lastElm && lastElm['elmsType'] == 'טקסט' && lastElm.text.indexOf(inputMeaningText) > -1) {
                                                        structureArr.at(-1)['elmsType'] = 'תיאור לשדה';
                                                        elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = 'תיאור לשדה';
                                                }
                                                if (lastElm['text']) {
                                                        elmObj['desc'] = lastElm['text'];
                                                        tempType = 'שדה קלט';
                                                }
                                        }


                                }

                                if (tempType == 'select לייבל אחורה') {
                                        let lastElm = structureArr.at(-1);
                                        if (lastElm) {
                                                let inputMeaningText = andiUA.checkInput(lastElm['elm']);
                                                if (lastElm && lastElm['elmsType'] == 'טקסט' && lastElm.text.indexOf(inputMeaningText) > -1) {
                                                        structureArr.at(-1)['elmsType'] = 'תיאור לשדה';
                                                        elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = 'תיאור לשדה';
                                                }
                                                if (lastElm['text']) {
                                                        elmObj['desc'] = lastElm['text'];
                                                        tempType = 'שדה בחירה (select)';
                                                }

                                        }

                                }

                                if (tempType == "לייבל קדימה") {
                                        if (i + 1 < testElms.length) {
                                                let nextHtmlElm = testElms[i + 1];
                                                if (!isClosestToElm(nextHtmlElm, `${buttonElm} ${linkElm} ${imgElm} , i, video, audio`) &&
                                                        !nextHtmlElm.isIt(`${buttonElm} ${linkElm} ${imgElm} , i, video, audio`) &&
                                                        nextHtmlElm.hasAttribute('havetext')) {
                                                        elmObj['elmsType'] = 'שדה קלט';
                                                        structureArr.push(elmObj);
                                                        elmsStructureTypeArr.push('שדה קלט');

                                                        let nextElmObj = createObj(nextHtmlElm);
                                                        nextElmObj['elmsType'] = 'תיאור לשדה';
                                                        structureArr.push(nextElmObj);
                                                        elmsStructureTypeArr.push('תיאור לשדה');
                                                        elmObj['desc'] = nextElmObj['text'].trim();

                                                        skipMe = true;
                                                }
                                        }

                                        let lastElm = structureArr.at(-1);
                                        if (lastElm && lastElm['elmsType'] == 'טקסט') {
                                                structureArr.at(-1)['elmsType'] = 'תיאור לשדה';

                                                elmsStructureTypeArr[elmsStructureTypeArr.length - 1] = 'תיאור לשדה';
                                        }
                                        tempType = 'שדה קלט';
                                }

                                if (tempType == 'קישור' && isClosestToElm(htmlElm, linkElm)) continue;
                                if (htmlElm.isIt('figure') && htmlElm.querySelector(imgElm)) continue;
                                if (htmlElm.isIt('option')) continue;
                                if (tempType == 'טקסט' && containsNumbersAndSymbols(elmObj['text'])) {
                                        tempType = 'מספר';
                                }

                                if (tempType == 'טקסט' && isPrice(elmObj['text'])) {
                                        tempType = 'מחיר';
                                }

                                if (elmObj['elm'].closest('del') || elmObj['elm'].getCss('text-decoration-line') === 'line-through') {
                                        tempType += ' מחוק ';
                                }

                                if (tempType != '' && !isContains && !skipMe) {
                                        let tempFontSize = elmObj.fontSize;
                                        let tempColor = elmObj.color;
                                        if (!htmlElm.isIt('i') && tempFontSize && !elmObj.isScreenReaderText && !fontSizeArr.includes(tempFontSize)) {
                                                fontSizeArr.push(tempFontSize);
                                        }
                                        if (htmlElm.hasAttribute('color') && !isGrayScale(tempColor) && !elmObj.isScreenReaderText && !colorArr.includes(tempColor)) {
                                                colorArr.push(tempColor);
                                        }
                                        elmObj['elmsType'] = tempType;
                                        structureArr.push(elmObj);
                                        elmsStructureTypeArr.push(tempType);
                                        if (elmObj['elmsType'] == 'מספר' || elmObj['elmsType'] == 'טקסט') countText++;
                                        elmObj['elm'].setAttribute('uatype', elmObj['elmsType']);
                                }
                        }

                        if (areaType == 'areaOnly' && htmlElm.closest('[ua_column]')) {
                                let thisColumn = htmlElm.closest('[ua_column]');
                                if (!colomnInArea.includes(thisColumn)) {
                                        colomnInArea.push(thisColumn)
                                        let elmObj = createObj(thisColumn);
                                        elmObj['elmsType'] = 'תת אזור';
                                        structureArr.push(elmObj);
                                        elmsStructureTypeArr.push('תת אזור');
                                }
                        }
                };

                //TODO: לבדוק אם צריך להשאיר
                return [structureArr, elmsStructureTypeArr, fontSizeArr, colorArr, countText];
        }

        function findMeaningFromHeaderStructure(columnStructure, area) {
                let Links = columnStructure[1].filter((item) => item.indexOf('קישור') > -1);
                let ImgLinks = columnStructure[1].filter((item) => item.indexOf('תמונת קישור') > -1);
                let Inputs = columnStructure[1].filter((item) => item.indexOf('שדה קלט') > -1);
                let Buttons = columnStructure[1].filter((item) => item.indexOf('כפתור') > -1);
                if ((Inputs.length == 1) || Inputs.length == 1 && columnStructure[0][columnStructure[1].indexOf('שדה קלט')]['elm'].isIt('[type="search"]')) {
                        //האם האזור הוא חיפוש
                        if (area.querySelector('form')) {
                                area.querySelector('form').setAttribute('ua_header_search', true);
                                area.querySelector('form').setAttribute('role', 'search');
                        } else {
                                let commonClosestParent = columnStructure[0].filter((item) => item['elmsType'] == 'שדה קלט');
                                if (Buttons.length > 1) {
                                        commonClosestParent = commonClosestParent[0]['elm'].parentElement;
                                        while (!commonClosestParent.querySelector(buttonElm)) {
                                                if (commonClosestParent.querySelector(buttonElm)) {
                                                        break;
                                                } else {
                                                        commonClosestParent = commonClosestParent.parentElement;
                                                        if (commonClosestParent.isIt('[ua_header]')) break;
                                                }
                                        }
                                } else {
                                        commonClosestParent = findCommonClosestParent(Inputs, 0);
                                }
                                commonClosestParent.setAttribute('ua_header_search', true);
                                commonClosestParent.setAttribute('role', 'search');
                        }
                } if (ImgLinks.length == 1) {
                        // האם קיים ברור לוגו
                        let thisElm = columnStructure[0][columnStructure[1].indexOf('תמונת קישור')]['elm'];
                        thisElm.setAttribute('ua_header_logo', true);
                        if (thisElm.tagName == 'A' && checkLinkMeaning(thisElm).trim() == '') {
                                thisElm.setAttribute('aria-label', 'לוגו האתר - חזרה לדף הבית');
                        }

                } if (ImgLinks.length > 2) {
                        // 
                        let thisElm = columnStructure[0][columnStructure[1].indexOf('תמונת קישור')]['elm'];
                        thisElm.setAttribute('ua_header_logo', true);
                        if (thisElm.tagName == 'A' && checkLinkMeaning(thisElm).trim() == '') {
                                thisElm.setAttribute('aria-label', 'לוגו האתר - חזרה לדף הבית');
                        }

                } if (Links.length >= 4 && Links.length / columnStructure[1].length > 0.80) {
                        //האם האזור הוא תפריט
                        area.setAttribute('ua_header_menu', true);
                }
        }

        function findCommonClosestParent(array, number) {
                if (!array.length) return null;
                let currentElm = array[0].parentElement;
                while (currentElm) {
                        let isCommonParent = true;
                        for (let i = 1; i < array.length; i++) {
                                if (!currentElm.contains(array[i])) {
                                        isCommonParent = false;
                                        break;
                                }
                        }
                        if (isCommonParent) {
                                return currentElm;
                        }
                        currentElm = currentElm.parentElement;
                }
                return null;
        }

        function findMeaningFromFooterStructure(columnStructure, column) {
                if (column.hasAttribute('ua_footer')) return;
                let Links = columnStructure[1].filter((item) => item.indexOf('קישור') > -1);
                let ImgLinks = columnStructure[1].filter((item) => item.indexOf('תמונת קישור') > -1);
                let Inputs = columnStructure[1].filter((item) => item.indexOf('שדה קלט') > -1);
                let Buttons = columnStructure[1].filter((item) => item.indexOf('כפתור') > -1);
                if (Links.length >= columnStructure[1].length * 0.75) {
                        column.setAttribute('role', 'group');
                        column.setAttribute('ua_footer_links', 'true');
                }
                if (column.querySelectorAll('[sharelink]').length > 1) {
                        let CommonClosestParent = findCommonClosestParent([...column.querySelectorAll('[sharelink]')], 0);
                        CommonClosestParent.setAttribute('aria-label', andiUA.TUAfileLang['Social networks Links']);
                        CommonClosestParent.setAttribute('role', 'group');
                        CommonClosestParent.setAttribute('ua_Social_networks_Link', 'true');
                }
        }

        function setHeadingType(obj, prevObj = {}, level = 2) {
                if (findCurrencySymbols(obj.text)) return false;
                if (obj.elmsType.indexOf('תיאור לשדה') > -1) return false;
                if (Object.keys(prevObj).length === 0 || prevObj.elmsType.indexOf('כותרת') == -1) {
                        if (obj.isScreenReaderText) return false;
                        let newHeading = obj['elm'];

                        if (obj.elmsType.indexOf('קישור') > -1) {
                                if (obj.elm.isIt('a, [role]') && obj.elm.parentElement.children.length == 1) {
                                        newHeading = obj.elm.parentElement;
                                }
                                obj.elmsType = 'קישור כותרת ' + level;
                        } else if (obj.elmsType.indexOf('כפתור') > -1) {
                                obj.elmsType = 'כפתור כותרת ' + level;
                        } else {
                                obj.elmsType = 'כותרת ' + level;
                        }
                        newHeading.setAttribute('uatype', obj['elmsType']);
                        newHeading.setAttribute('role', 'heading');
                        newHeading.setAttribute('aria-level', level);
                        return true;
                }
        }


        function checkForHeading(fontSizeArr, countText, areaStructure, area, headingLevel = 2, percentage = 30) {
                if (fontSizeArr.length > 1) {
                        let heightesFontSize = fontSizeArr[0];
                        let numOfTheSameSize = area.querySelectorAll('[andiallelmwithtext="' + heightesFontSize + '"]').length;
                        if (numOfTheSameSize != countText && hasSignificantDifference(fontSizeArr, percentage, 1)) {
                                prevObj = {};
                                for (let i = 0; i < areaStructure[0].length; i++) {
                                        thisObj = areaStructure[0][i];
                                        if (i > 0) prevObj = areaStructure[0][i - 1];
                                        if (containsOnlyNumbers(thisObj.text)) continue;
                                        if (thisObj.fontSize !== heightesFontSize) continue;
                                        setHeadingType(thisObj, prevObj, headingLevel);
                                        areaStructure[1][i] = thisObj.elmsType;
                                }
                        }
                }
        }



        function areAllSiblings(elements) {
                if (elements.length === 0) return false;
                const firstParent = elements[0].parentNode;
                return elements.every(elem => elem.parentNode === firstParent);
        }

        function setColumnAsList(area, allColumnsData) {
                area.querySelector('[ua_column]').parentElement.setAttribute('role', 'list');
                area.querySelectorAll('[ua_column]').forEach(function (column) {
                        column.setAttribute('role', 'listitem')
                });
                numberOfPriceItems = [];
                allColumnsData.forEach(columnData => {
                        columnData[0].forEach(column => {
                                if (column['elmsType'].indexOf('מחיר') > -1) {
                                        numberOfPriceItems.push(column)
                                }
                        });
                });

                if (areAllSiblings(numberOfPriceItems)) {
                        area.querySelector('[ua_column]').parentElement.setAttribute('aria-label', andiUA.TUAfileLang['list of products']);
                }
        }



        function hasSignificantDifference(array, thresholdPercentage, startPoint) {
                const firstValue = array[0];
                let isTrueForAll = [];
                for (let i = startPoint; i < array.length; i++) {
                        let difference = Math.abs(firstValue - array[i]);
                        let percentageDifference = (difference / firstValue) * 100;
                        if (percentageDifference >= thresholdPercentage) {
                                isTrueForAll.push(true);
                        } else {
                                isTrueForAll.push(false);
                        }
                }
                isTrueForAll = new Set(isTrueForAll);
                isTrueForAll = [...isTrueForAll];
                if (isTrueForAll.length == 1 && isTrueForAll[0] == true) return true;
                return false;
        }



        function findMeaningFromBodyStructure(columnStructure, area) {

        };

        function countOccurrences(str, value) {
                return str.split(value).length - 1;
        }






        function checkStructurType(string) {
                //aria-roledescription
                let types = string.split(',');
                let imgCount = countOccurrences(string, 'תמונ')
                let textCount = countOccurrences(string, 'טקסט')
                let headingCount = countOccurrences(string, 'כותרת')
                let inputCount = countOccurrences(string, 'שדה קלט')
                let linkCount = countOccurrences(string, 'קישור')
                let buttonCount = countOccurrences(string, 'כפתור')
                let iconCount = countOccurrences(string, 'אייקון')
                let videoCount = countOccurrences(string, 'וידאו')
                let audioCount = countOccurrences(string, 'אודיו')
                let iframeCount = countOccurrences(string, 'הצגת מידע מאתר');
                let priceCount = countOccurrences(string, 'מחיר');



                if (textCount == 1 && headingCount == 1 && linkCount >= 1 && priceCount == 0) {
                        return ('תקציר מאמר');
                } else if (headingCount == 1 && textCount >= 1 && priceCount >= 1) {
                        return ('מוצר');
                } else if (types.length == textCount && textCount >= 1 && textCount < 3) {
                        return ('טקסט קצר');
                } else if (types.length == imgCount && imgCount >= 1) {
                        return ('גלריה');
                }
                return '';
        }




        function findMeaningFromBodyColunmStructure(area, areaStructure, columnStructureStringArr, columnStructureArr) {
                let columnStructureSet = new Set(columnStructureStringArr);
                if (columnStructureSet.size == 1 && columnStructureStringArr.length >= 2) {
                        let structurType = checkStructurType(columnStructureStringArr[0]);
                        area.querySelector('[ua_column]').parentElement.setAttribute('role', 'list');
                        if (structurType) area.querySelector('[ua_column]').parentElement.setAttribute('aria-label', structurType);
                        area.querySelectorAll('[ua_column]').forEach(function (column) {
                                column.setAttribute('role', 'listitem');
                        });
                }
                let areaStructureSet = new Set(columnStructureStringArr[0]);

        };

        function checkLink(thisLink) {
                if (!thisLink) return '--';
                function getValidAttr(element, attrs) {
                        for (let attr of attrs) {
                                const value = (typeof element[attr] === 'function' ? element[attr]() : element.getAttribute(attr)) || '';
                                if (value.trim()) return value.trim();
                        }
                        return null;
                }
                const attributesToCheck = ['getText', 'aria-label', 'title'];
                let meaning = getValidAttr(thisLink, attributesToCheck);
                if (!meaning) {
                        const img = thisLink.querySelector('img');
                        if (img) return img.getAttribute('alt') ? img.getAttribute('alt').trim() : '--';

                        const svg = thisLink.querySelector('svg');
                        if (svg && svg.hasAttribute('aria-label')) return svg.getAttribute('aria-label').trim();
                }
                return meaning || '--';
        }

        function checkLinkClickable(thisLink) {
                if (!thisLink.hasAttribute('href') && !thisLink.hasAttribute('tabindex')) {
                        return false;
                }
                if (thisLink.hasAttribute('tabindex') && parseInt(thisLink.getAttr('tabindex')) == -1) {
                        return false;
                }
                return true;
        }


        function isImageFileName(text) {
                return /\.(jpeg|jpg|gif|png|svg|webp)$/i.test(text);
        }
        function checkImgMeaning(img) {
                let altText, ariaLabel, title, thisMeaning = '--';
                let clickable = img.closest('a,[role="link"], [role="button"],button');
                if (clickable) {
                        const clickableText = clickable.textContent.trim();
                        const clickableAriaLabel = clickable.getAttribute('aria-label');
                        const clickableTitle = clickable.getAttribute('title');
                        thisMeaning = clickableText || clickableAriaLabel || clickableTitle || '--';
                }
                if (thisMeaning === '--') {
                        altText = img.getAttribute('alt');
                        if (isImageFileName(altText)) {
                                altText = null;
                        }
                        ariaLabel = img.getAttribute('aria-label');
                        title = img.getAttribute('title');
                        thisMeaning = altText || ariaLabel || title || '--';
                }
                return thisMeaning;
        }


        andiUA.checkInput = function (input) {
                if(!input) return '--';               
                function getMeaningFromAttributes(attrNames) {
                        for (let name of attrNames) {
                                const selector = name === 'id' ? `label[for='${(input.getAttribute(name)) || 'none'}']` : `#${input.getAttribute(name)}`;
                                const element = document.querySelector(selector);
                                if (element && element.textContent.trim()) return element.textContent.trim();
                        }
                        return '--';
                }
                let thisMeaning = getMeaningFromAttributes(['id', 'aria-labelledby', 'aria-describedby']) || '--';
                if (thisMeaning === '--') {
                        let aria_label = input.getAttribute('aria-label')
                        let title = input.getAttribute('title')
                        let placeholder = input.getAttribute('placeholder')

                        thisMeaning = aria_label || placeholder || title || '--';
                }

                if (thisMeaning === '--' && input.closest('label')) {
                        thisMeaning = input.closest('label').textContent.trim() || '--';
                }
                return thisMeaning;
        }

        andiUA.chackIfAreaAccessible = function (area, structure = null) {
                let heading = area.querySelectorAll(andiUA.headings);
                if (heading.length == 1) {
                        area.querySelectorAll('img, svg').forEach(function (img) {
                                let thisMeaning = checkImgMeaning(img, heading);
                                if (thisMeaning == '--') img.alt = heading[0].innerText;
                        });
                        area.querySelectorAll('a, [role="link"]').forEach(function (thisLink) {
                                let clickable = checkLinkClickable(thisLink);
                                let thisMeaning = checkLink(thisLink);
                                if (thisMeaning == '--') thisMeaning = heading[0].innerText;
                                thisLink.setAttribute('aria-label', thisMeaning);
                                if (!clickable) thisLink.setAttribute('tabindex', 0);
                        });

                } else {
                        let thisInnerText = '';
                        let thisInnerTextArr = [...(area.querySelectorAll('[uatype="טקסט"]'))];
                        for (let index = 0; index < thisInnerTextArr.length; index++) {
                                const element = thisInnerTextArr[index];
                                let temp = element.innerText;
                                if (!findCurrencySymbols(element.innerText)) thisInnerText += ' ' + temp;
                        }
                        if (thisInnerText != '') {
                                area.querySelectorAll('img, svg').forEach(function (img) {
                                        let thisMeaning = checkImgMeaning(img, heading);
                                        if (thisMeaning == '--') img.alt = thisInnerText;
                                });
                        }
                }

                area.querySelectorAll('[type="text"],[type="week"],[type="time"],[type="search"],[type="range"],[type="radio"],[type="password"],[type="number"],[type="month"],[type="email"],[type="url"],[type="tel"],[type="checkbox"],[type="color"],[type="date"],[type="file"],select,textarea').forEach(function (input) {
                        let meaning = andiUA.checkInput(input);
                        let obj = structure[0].filter((item) => item['elm'] == input);
                        let objDesc = obj[0].desc;
                        if (!input.hasAttribute('type')) {
                                input.type = 'text';
                        }
                        if (meaning == '--' && objDesc) {
                                meaning = objDesc;
                                input.setAttribute('aria-label', objDesc)
                                input.setAttribute('ua_input_label', objDesc)
                        } else if (meaning == '--') {
                                if (input.getAttribute('type')?.toLowerCase() == 'search') {
                                        input.setAttribute('aria-label', andiUA.TUAfileLang.Search);
                                }
                                if (input.isIt('textarea')) {
                                        input.setAttribute('aria-label', andiUA.TUAfileLang.textarea);
                                }
                        } else {
                                input.setAttribute('aria-label', meaning)
                                input.setAttribute('ua_input_label', meaning);
                        }

                        if (meaning.indexOf('*') > -1) input.hasAttribute('aria-required');
                });
        }


        function startAnlayzeAreaWithColumns() {
                if (document.querySelectorAll('[area5170]').length == 1) {
                        document.querySelector('[area5170]').setAttribute('role', 'main');
                } else if (document.querySelectorAll('[area7190]').length == 1) {
                        document.querySelector('[area7190]').setAttribute('role', 'main');
                } else if (document.querySelectorAll('[area3150]').length == 1) {
                        document.querySelector('[area3150]').setAttribute('role', 'main');
                }
                let HeaderAndFooterArr = findHeaderAndFooter();
                let posibleHeader = HeaderAndFooterArr[0];
                let posibleFooter = HeaderAndFooterArr[1];

                /* role="article" aria-label ,[area5170],[area7190]   */
                document.querySelectorAll('[area030],[area3150],[area5170]').forEach(function (area) {
                        if (area.getAttribute('ua_header')) {
                                //ניתוח ראש הדף
                                if (area.querySelectorAll('[ua_column]').length > 0) {
                                        let areaType = 'areaOnly';
                                        let areaStructure = createStructure(area.querySelectorAll(testElmsList), areaType);
                                        findMeaningFromHeaderStructure(areaStructure, area);
                                } else {
                                        let areaType = 'all';
                                        let areaStructure = createStructure(area.querySelectorAll(testElmsList), areaType);
                                        findMeaningFromHeaderStructure(areaStructure, area);
                                }
                        } else if (area.getAttribute('ua_footer')) {
                                if (area.querySelectorAll('[ua_column]').length > 0) {
                                        let areaType = 'areaOnly';
                                        let areaStructure = createStructure(area.querySelectorAll(testElmsList), areaType);
                                        areaStructure[2].sort((a, b) => b - a);
                                        let fontSizeArr = areaStructure[2];
                                        let countText = areaStructure[1].filter(type => type == 'טקסט').length;
                                        checkForHeading(fontSizeArr, countText, areaStructure, area);
                                        findMeaningFromFooterStructure(areaStructure, area);
                                } else {
                                        let areaType = 'all';
                                        let areaStructure = createStructure(area.querySelectorAll(testElmsList), areaType);
                                        areaStructure[2].sort((a, b) => b - a);
                                        let fontSizeArr = areaStructure[2];
                                        let countText = areaStructure[1].filter(type => type == 'טקסט').length;
                                        checkForHeading(fontSizeArr, countText, areaStructure, area);
                                        //andiUA.chackIfAreaAccessible(area, areaStructure);
                                        findMeaningFromFooterStructure(areaStructure, area);
                                }
                        } else {
                                /* בדיקת אזורים שהם לא פוטר או הדר */
                                let columns = area.querySelectorAll('[ua_column]')
                                if (columns.length > 0) {
                                        let areaType = 'areaOnly';
                                        let areaStructure = createStructure(area.querySelectorAll(testElmsList), areaType);
                                        areaStructure[2].sort((a, b) => b - a);
                                        let fontSizeArr = areaStructure[2];
                                        let countText = areaStructure[1].filter(type => type == 'טקסט').length;
                                        checkForHeading(fontSizeArr, countText, areaStructure, area);
                                        let columnStructureStringArr = [];
                                        let columnStructureArr = [];
                                        findMeaningFromBodyColunmStructure(area, areaStructure, columnStructureStringArr, columnStructureArr)
                                        //accArea(area, areaStructure, columnStructureStringArr, columnStructureArr);
                                } else {/* no columns */
                                        let areaType = 'all';
                                        let allStructure = createStructure(area.querySelectorAll(testElmsList), areaType);
                                        allStructure[2].sort((a, b) => b - a);
                                        areaStructureStringArr = allStructure[1].join(',');
                                        let fontSizeArr = allStructure[2];
                                        let countText = allStructure[1].filter(type => type == 'טקסט').length;
                                        checkForHeading(fontSizeArr, countText, allStructure, area);
                                        const allHeadings = Array.from(area.querySelectorAll(andiUA.headings));
                                        const allimgs = Array.from(area.querySelectorAll('img'));
                                        const alllinks = Array.from(area.querySelectorAll('a,[role="link"]'));

                                        if (allHeadings.length > 1) {
                                                allHeadings.shift();
                                        }
                                        if (allHeadings.length > 2 && allimgs.length >= allHeadings.length && alllinks.length >= allHeadings.length) {
                                                let commonClosestParent = findCommonClosestParent(allHeadings, 0);
                                                let columnStructureStringArr = [];
                                                let columnStructureArr = [];
                                                const childrenArray = Array.from(commonClosestParent.children);
                                                childrenArray.forEach(function (column) {
                                                        column.setAttribute('ua_column', true);
                                                });
                                                findMeaningFromBodyColunmStructure(area, allStructure, columnStructureStringArr, columnStructureArr)
                                        } else {

                                        }

                                }
                        }






                });
        }







        /********************************** */
        /********************************** */
        /********************************** */
        /********************************** */
        andiUA.TUAfindsocial_network = function () {
                function shareLink(selector, labelText) {
                        document.querySelectorAll(selector).forEach(function (el, index) {
                                if (!el.hasAttribute('sharelink')) {
                                        let linkText = el.innerText?.trim() || '';
                                        if (el.hasAttribute('target')) labelText = labelText + ', ' + andiUA.TUAfileLang.wp0000;
                                        el.setAttribute('aria-label', linkText + ' ' + labelText);
                                        el.setAttribute('role', 'link');
                                        el.setAttribute('tabindex', 0);
                                        el.setAttribute('sharelink', 1);
                                        el.querySelector('img')?.setAttribute('alt', linkText + ' ' + labelText);
                                }
                        });
                }
                shareLink('[href*="facebook.com/"]', andiUA.TUAfileLang.facebook);
                shareLink('[href*="twitter.com/"]', andiUA.TUAfileLang.twitter);
                shareLink('[href*="youtube.com/"]', andiUA.TUAfileLang.youtube);
                shareLink('[href*="waze://?q"]', andiUA.TUAfileLang.waze);
                shareLink('[href*="instagram.com/"]', andiUA.TUAfileLang.instagram);
                shareLink('[href*="linkedin.com/"]', andiUA.TUAfileLang.linkedin);
                shareLink('[href*="plus.google.com/"]', andiUA.TUAfileLang.googleplus);
                shareLink('[href*="pinterest.com/"]', andiUA.TUAfileLang.wp172);
                shareLink('[href*="mailto:"]', andiUA.TUAfileLang.mailto);
                shareLink('.at-share-btn.at-svc-facebook, [data-social="facebook"] a.facebook', andiUA.TUAfileLang.wp31 + ' facebook');
                shareLink('.at-share-btn.at-svc-email', andiUA.TUAfileLang.wp31 + ' email');
                shareLink('.at-share-btn.at-svc-twitter', andiUA.TUAfileLang.wp31 + ' twitter');
                shareLink('.at-share-btn.at-svc-pinterest_share', andiUA.TUAfileLang.wp31 + ' pinterest');
                shareLink('.at-share-btn.at-svc-favorites', andiUA.TUAfileLang.wp31 + ' favorites');
                shareLink('.at-share-btn.at-svc-print', andiUA.TUAfileLang.wp31 + ' print');
                shareLink('[href*="https://api.whatsapp.com/"], [href*="https://wa.me/"]', andiUA.TUAfileLang.wp36);
                shareLink('[href*="whatsapp://"]', andiUA.TUAfileLang.wp36);
                shareLink('[href*="https://waze.com/"], [data-social="whatsapp"] a.whatsapp', andiUA.TUAfileLang.wp35);
                shareLink('[href^="https://www.facebook.com/sharer"]', andiUA.TUAfileLang.wp15);
                shareLink('[href^="https://twitter.com/share?"]', andiUA.TUAfileLang.wp16);
                shareLink('[href^="https://pinterest.com/pin/create/"]', andiUA.TUAfileLang.wp17);
                shareLink('[data-social="telegram"] a.telegram', andiUA.TUAfileLang.wp37);
        };



        andiUA.TUAsetFixedKeybourdLinks = function (TUAelementList) {
                document.querySelectorAll('a').forEach((elm) => {
                        (!elm.hasAttribute('href')) ? elm.setAttribute('tabindex', '0') : '';
                });
        };



        andiUA.TUAemptyHeading = function () {
                if (UA("h1").length > 1) {
                        UA("h1").forEach(function (TUAel, i) {
                                if (i > 0) {
                                        TUAel.addAttr({ "aria-level": "2", "role": "heading" });
                                }
                        });
                }
        };
        andiUA.TUAsetEmptyHeading = function (headings) {
                UA(headings).forEach(function (TUAel, i) {
                        if (TUAel.innerText.trim() == "" && TUAel.querySelectorAll('img,a,svg').length == 0) {
                                TUAel.innerHTML += '<span class="sr-only">&#8203;</span>';
                                TUAel.addAttr({ "role": "presentation" });
                        }
                });
        };
        andiUA.TUAfixHaveNotH1 = function () {
                if (!document.querySelector('h1')) {
                        let htmlSRT = '<h1 class="sr-only">' + document.querySelector('title')?.innerText.trim() + '</h1>';
                        if (document.querySelector('title')) document.body.insertAdjacentHTML('afterbegin', htmlSRT);
                }
        }

        andiUA.TUAfixTitleTag = function () {
                if (!UA1('title') && UA1('h1, h2')) {
                        let htmlSRT = `<title>${UA1('h1,h2').getText()}</title>`;
                        document.head.insertAdjacentHTML('afterbegin', htmlSRT);
                }
                if (UA1('title').getText().trim() == '' && UA1('h1, h2')) {
                        UA1('title').innerText = UA1('h1, h2').getText();
                }
        }

        andiUA.TUAfindsocial_network();
        andiUA.TUAemptyHeading();
        andiUA.TUAsetEmptyHeading(andiUA.headings);
        andiUA.TUAfixHaveNotH1();
        andiUA.TUAsetFixedKeybourdLinks();

        setSpecialAttrs();
        AllElmsArr = getAllElms(innerDivAreasElms, bodyW);
        AllElmsArr = round2(AllElmsArr);
        setHeightGroups();
        setEventsForMutationAttributes();
        Analyserstructure();
        checkForMisingColumns();
        startAnlayzeAreaWithColumns();
        document.querySelectorAll('[ua_column]').forEach(function (column) {
                let areaType = 'column';
                let columnStructure = createStructure(column.querySelectorAll(testElmsList), areaType);
                column.setAttribute('ua_structure', columnStructure[1].toString());
                columnStructure[2].sort((a, b) => b - a);
                let fontSizeArr = columnStructure[2];
                let countText = columnStructure[1].filter(type => type == 'טקסט').length;
                checkForHeading(fontSizeArr, countText, columnStructure, column, headingLevel = 3, percentage = 15);
                andiUA.chackIfAreaAccessible(column, columnStructure);
        });

        document.querySelectorAll('[area030],[area3150]').forEach(function (area) {
                if (area.querySelectorAll('[type="text"],[type="week"],[type="time"],[type="search"],[type="range"],[type="radio"],[type="password"],[type="number"],[type="month"],[type="email"],[type="url"],[type="tel"],[type="checkbox"],[type="color"],[type="date"],[type="file"],select,textarea').length >= 1) {
                        area.setAttribute('aria-live', 'polite')
                        area.setAttribute('aria-relevant', 'additions text')
                }
        });
        document.querySelectorAll('[area3150]').forEach(function (area) {
                if ( !area.querySelector('[area030]') && area.querySelectorAll('[type="text"],[type="week"],[type="time"],[type="search"],[type="range"],[type="radio"],[type="password"],[type="number"],[type="month"],[type="email"],[type="url"],[type="tel"],[type="checkbox"],[type="color"],[type="date"],[type="file"],select,textarea').length >= 1) {
                        area.setAttribute('aria-live', 'polite')
                        area.setAttribute('aria-relevant', 'additions text')
                }
        });

        eventOn("focusin", ".andiLastItemInPopUp", function (e) {
                UA1(".andiFirstItemInPopUp").focus();
        });

        document.addEventListener('focusin', function () {
                let active = document.activeElement;
                setTimeout(() => {
                        let parent = UA1(".andiFirstItemInPopUp")?.parentElement;
                        if (parent && parent.TUAisVisible() && !parent?.contains(active)) {
                                andiUA.focusElmBeforeOpenPopup = active;
                                parent.querySelector(".andiFirstItemInPopUp").focus();
                        }

                }, 5);

        });


}

andiUA.start();
andiUA.getScript(andiUA.TUAjsPath + "andimenu.js", function () { });

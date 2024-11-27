function andiListener(event) {
	var param = '';
	var message = event.data;
	if(message == undefined){
	    message = '';
	}
	if(typeof message != 'string')message = '';
	if(message.indexOf('scanPageImgsFromFrontend:') > -1){
	    param = message.replace('scanPageImgsFromFrontend:','');
	    message = 'scanPageImgsFromFrontend:';
	}
	if(message.indexOf('queryResults:') > -1){
	    param = message.replace('queryResults:','');
	    message = 'queryResults';
	}
	if(message.indexOf('fastCssFromFrontend:') > -1){
	    param = message.replace('fastCssFromFrontend:','');
	    message = 'fastCssFromFrontend';
	}
	if(message.indexOf('scanPageSkiplinksFromFrontend:') > -1){
	    param = message.replace('scanPageSkiplinksFromFrontend:','');
	    message = 'scanPageSkiplinksFromFrontend';
	}
	switch (message) {
	    case 'fastCssFromFrontend': 
		alert('הגדרות ה-CSS החדשות נשמרו\n יש להכנס ל FAST ולעדכן את הנגישות אחרת הנתונים ימחקו');
	    break;
	    case 'scanPageSkiplinksFromFrontend': 
		alert('הגדרות ה-SKIP LINKS החדשות נשמרו\n יש להכנס ל FAST ולעדכן את הנגישות אחרת הנתונים ימחקו');
	    break;
	    case 'scanPageImgsFromFrontend': 
		alert('התמונות נשמרו ב FAST.\n כנס למערכת FAST ועדכן את התוסף');
	    break;
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

andiUA.openFastMenu = function(){
	/*if (window.addEventListener) {
		window.addEventListener("message", andiListener);
	} else {
		window.attachEvent("onmessage", andiListener);
	}*/

	function checkMessageBeforeSanding(message){
		return /^[\],:{}\s]*$/.test(message.replace(/\\["\\\/bfnrtu]/g, '@').
		replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
		replace(/(?:^|:|,)(?:\s*\[)+/g, ''))
	}

	
	
	saveImageinFast = function(iframeID, message) {
		message = JSON.stringify(message);
		if (checkMessageBeforeSanding(message)) {
		    var TUAiiFrame = document.querySelector('[src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"]');
		    setTimeout(function() {
			TUAiiFrame.contentWindow.postMessage('savefastimg:'+message, "*");
		    }, 0);
		}
	};

	saveCSSinFast = function(iframeID, message) {
		message = JSON.stringify(message);
		if (checkMessageBeforeSanding(message)) {
		    var TUAiiFrame = document.querySelector('[src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"]');
		    setTimeout(function() {
			TUAiiFrame.contentWindow.postMessage('savefastCSS:'+message, "*");
		    }, 0);
		}
	};

	saveSKIPLINKSinFast = function(iframeID, message) {
		message = JSON.stringify(message);
		if (checkMessageBeforeSanding(message)) {
		    var TUAiiFrame = document.querySelector('[src="https://system.user-a.co.il/frontEndSystem/keepAccessibility2"]');
		    setTimeout(function() {
			TUAiiFrame.contentWindow.postMessage('savefastSKIPLINK:'+message, "*");
		    }, 0);
		}
	};
	
	eventOn('click', '#fastMenuIcon', function(){
		UA1('#fastMenuWrap').ttoggleClass('open');
	});

	eventOn('click', '#fastMenuCloseMenu', function(){
		UA1('#fastMenuWrap').tremoveClass('open');
		UA1('#faseWorkPanel').tremoveClass('open');
	});

	eventOn('click', '#faseWorkPanelCloseMenu', function(){
		UA1('#faseWorkPanel').tremoveClass('open');
	});

	eventOn('click', '#fastimg', function(){
		UA1('#faseWorkPanel').taddClass('open');
		UA1('#faseWorkPanel #faseWorkPanelBody').innerHTML = `
		<div style="position: absolute; top: 75px; right: 0;width:100%; background-color: #2F3032;text-align:center; padding-top: 10px;" >
			<div id="savefastimg" role="button" tabindex="0">שמור את התמונות</div>
		</div>
		<div style="margin-top:85px" class="wrapallfastimgs"></div>`;
		let srcArr = [];
		UA('img').forEach(function(img, index){
			if(!srcArr.includes(img.getAttribute('src'))){
				srcArr.push(img.getAttribute('src'));
				let altText = img.alt || '--';
				let altAriaLabel = img.getAttribute('aria-label') || '--';
				UA1('#faseWorkPanel #faseWorkPanelBody .wrapallfastimgs').appendHtml(`
				<div class="wrapfastimg">
					<img style="width: 100%;height:auto;" fastimgid="${index}" style="" src="${img.src}"><br>
					<div class="innerfastimg">
						
						<p><b>הערך ב ALT:</b><br> ${ altText }</p>
						<p><b>הערך ב- ARIA-LABEL:</b><br> ${ altAriaLabel }</p>
						<input fastinputsrcid="${index}" type="hidden" value="${img.getAttribute('src')}" >
						<input fastinputid="${index}" type="text" placeholder="הזן כאן את תיאור התמונה" >
					</div>
				</div>
				`);
			}
		});
	});
	
	eventOn('click', '#fastcss', function(){
		UA1('#faseWorkPanel').taddClass('open');
		
		let andiCustomCss = (andiUA.TUAaddCustomCss).toString().replace(`'; if(ANDIcss != ''){ UA1('head').appendHtml('<style>'+ANDIcss+'</style>'); } }`, '');
		andiCustomCss = andiCustomCss.replace(`function () { var ANDIcss = '`,'')

		UA1('#faseWorkPanel #faseWorkPanelBody').innerHTML = `
		<div style="position: absolute; top: 75px; right: 0;width:100%;background-color:#2F3032;text-align:center;padding-top: 10px;" >
			<div style="" id="savefastcss" role="button" tabindex="0">שמור את ה-CSS</div>
		</div>
		<div class="wrapfastcss">
			
			<div class="wrapinnerfastcss fastuacard" style="margin-top:85px;">
				<div style="margin:20px;">
					<h3>הגדרות CSS</h3>
					<p>שים לב שמיד אחרי השמירה עליך לעדכן את FAST אחרת הנתונים לא ישמרו</p>
				</div>
				<style id="fastcsscodestyle"></style>
				<div contenteditable="true" spellcheck="false" id="fastcsscode" name="css" style="">${andiCustomCss}</div>
			</div>
		</div>`;
		
	});
	
	eventOn('click', '#savefastcss', function(e){
		localStorage.setItem('savefastcss', document.querySelector('#fastcsscode')?.innerText )
		var cssArr = [localStorage.getItem('groupID'), localStorage.getItem('client_id'), document.querySelector('#fastcsscode')?.innerText.replace(/\n/g, '')];
		if(cssArr.length > 2 && cssArr[2].trim() != ''){
			saveCSSinFast('andiifuserlogin2', cssArr);
		}
	});

	eventOn('keydown', '#fastcsscode', function(e){
		document.querySelector('#fastcsscodestyle').innerText = document.querySelector('#fastcsscode').innerText
	});

	eventOn('keyup', '#fastcsscode', function(e){
		document.querySelector('#fastcsscodestyle').innerText = document.querySelector('#fastcsscode').innerText
	});

	//let dataArr = JSON.parse(localStorage.getItem('fastskiplinksArr'));
	eventOn('click', '#savefastimg', function(){
		var imgsArr = [localStorage.getItem('groupID'), localStorage.getItem('client_id')];
		UA('#faseWorkPanel .wrapfastimg').forEach(function(imgWrap, index){
			if(imgWrap.querySelector('[type="text"]').value.trim() !== ''){
				var thisSrc = imgWrap.querySelector('[type="hidden"]').value.trim();
				var thisDesc = imgWrap.querySelector('[type="text"]').value.trim();
				imgsArr.push({
					'imgDesc': thisDesc,
					'imgSrc': thisSrc
				});
			}
		});
		if(imgsArr.length > 2){
			saveImageinFast('andiifuserlogin2', imgsArr);
		}
	});

	eventOn('click', '#savefastskiplinks', function(){
		var skiplinksArr = [localStorage.getItem('groupID'), localStorage.getItem('client_id')];
		UA('#faseWorkPanel .areasikplink').forEach(function(skipLinkWrap, index){
			if(skipLinkWrap.querySelector('input[data-text]').value.trim() !== '' && skipLinkWrap.querySelector('input[data-elm]').value.trim() !== ''){
				var thisElm = skipLinkWrap.querySelector('input[data-elm]').value.trim();
				var thisDesc = skipLinkWrap.querySelector('input[data-text]').value.trim();
				var thisMainContant = skipLinkWrap.querySelector('input[data-maincontant]').checked;
				skiplinksArr.push({
					'desc': thisDesc,
					'elm': thisElm,
					'maincontant':thisMainContant
				});
			}
		});
		if(skiplinksArr.length > 2){
			saveSKIPLINKSinFast('andiifuserlogin2', skiplinksArr);
		}
	});



	eventOn('click', '#fastskiplinks', function(){
		UA1('#faseWorkPanel').taddClass('open');
		UA1('#faseWorkPanel #faseWorkPanelBody').innerHTML = `
		<div style="position: absolute; top: 75px; right: 0;width:100%;background-color: #2F3032; text-align:center;padding-top: 10px;" >
			<div style="" id="savefastskiplinks" role="button" tabindex="0">שמור את ה-skip links</div>
		</div>
		<div class="wrapfastskiplinks" style="margin-top:75px;">
			<div class="wrapBtn"><button class="addnewskiplink innerBtn">הוסף אזור חדש</button><hr></div>
			<div class="wrapinnerfastskiplinks" style="margin-bottom: 100px;">
				<div class="areasikplink fastuacard">
					<div class="fastuainnercard">
						<label for="skiplinkname0" data-labeltext>תיאור האזור</label>
						<input type="text" list="skiplinknamesoption" data-text name="skiplinkname0" id="skiplinkname0">
						<br/>
						<label for="skiplinkismaincontent0" data-labelmaincontent style="display:inline-block">האם זהו התוכן המרכזי?</label>
						<input type="checkbox"  style="display:inline-block" data-maincontant name="skiplinkismaincontent0" id="skiplinkismaincontent0"><br/><br/>
						<label for="skiplinkelm0" data-labelelm>האלמנט</label>
						<input type="text" data-elm name="skiplinkelm0" id="skiplinkelm0">
						<button choosearea="yes" class="choosearea0">או בחר אזור עם העכבר</button>
					</div>
				</div>
				<datalist id="skiplinknamesoption">
					<option value="תפריט ראשי">
					<option value="תפריט משני">
					<option value="תוכן מרכזי">
					<option value="סליידר">
					<option value="סינון מוצרים">
					<option value="סינון נתונים">
					<option value="תחתית האתר">
					<option value="רכיב תגובות - פייסבוק">
					<option value="רכיב תגובות - אינטרגרם">
				</datalist>				
			</div>
		</div>`;

		const addNewSkiplinkButton = document.querySelector('.addnewskiplink');
		const wrapinnerfastskiplinks = document.querySelector('.wrapinnerfastskiplinks');
		let newIndex = 1;
		//
		if(localStorage.getItem('fastskiplinksArr')){
			let dataArr = JSON.parse(localStorage.getItem('fastskiplinksArr'));
			//UA1('#fastMenuIcon').click();
			UA1('#fastskiplinks').click();
			for(let i = 0; i < dataArr.length -1; i++){
				UA1('.addnewskiplink').click();
			}
			
			lengthOfdataArr = dataArr.length -1;
			let allAreas = UA('.areasikplink');
			localStorage.setItem('fastskiplinksArr' ,JSON.stringify(dataArr));
			for(let i = 0; i < allAreas.length; i++){
				elm = allAreas[i];
				elm.querySelector('[data-elm]').value = dataArr[lengthOfdataArr - i].elm;
				elm.querySelector('[data-text]').value = dataArr[lengthOfdataArr - i].desc;
				elm.querySelector('[data-maincontant]').checked = dataArr[lengthOfdataArr - i].mainContent;
			};
		}

		addNewSkiplinkButton.addEventListener('click', () => {
			const areasikplinkElement = document.querySelector('.areasikplink');
			const newAreasikplinkElement = areasikplinkElement.cloneNode(true);
			const inputelm = newAreasikplinkElement.querySelectorAll('input[data-elm]');
			const inputtext = newAreasikplinkElement.querySelectorAll('input[data-text]');
			const inputmaincontant = newAreasikplinkElement.querySelectorAll('input[data-maincontant]');

			const labeltext = newAreasikplinkElement.querySelectorAll('label[data-labeltext]');
			const labelelm = newAreasikplinkElement.querySelectorAll('label[data-labelelm]');
			const labelmaincontant = newAreasikplinkElement.querySelectorAll('label[data-labelmaincontent]');

			const buttonElement = newAreasikplinkElement.querySelector('[choosearea]');

			labeltext.forEach((label) => {
				label.setAttribute('for', `skiplinkname${newIndex}`);
			});

			labelelm.forEach((label) => {
				label.setAttribute('for', `skiplinkelm${newIndex}`);
			});

			labelmaincontant.forEach((label) => {
				label.setAttribute('for', `skiplinkismaincontent${newIndex}`);
			});

			inputtext.forEach((input) => {
				input.name = `skiplinkname${newIndex}`;
				input.id = `skiplinkname${newIndex}`;
				input.value = '';
			});

			inputelm.forEach((input) => {
				input.name = `skiplinkelm${newIndex}`;
				input.id = `skiplinkelm${newIndex}`;
				input.value = '';
			});
			
			inputmaincontant.forEach((input) => {
				input.name = `skiplinkismaincontent${newIndex}`;
				input.id = `skiplinkismaincontent${newIndex}`;
				input.checked = false;
			});

			buttonElement.removeAttribute('class');
			buttonElement.setAttribute('class',`choosearea${newIndex}`);

			newIndex++;
			wrapinnerfastskiplinks.insertBefore(newAreasikplinkElement, wrapinnerfastskiplinks.firstChild);
		});

	});
	
	eventOn('input', '.areasikplink input', function(){
		let dataArr = [];
		let allAreas = UA('.areasikplink');
		for(let i = (allAreas.length -1); i >= 0; i--){
			let elm = allAreas[i];
			let thisElm = elm.querySelector('[data-elm]').value;
			let thisDesc = elm.querySelector('[data-text]').value;
			let mainContent = elm.querySelector('[data-maincontant]').checked;
			dataArr.push({"elm":thisElm, "desc":thisDesc, 'mainContent': mainContent});
		};
		localStorage.setItem('fastskiplinksArr' ,JSON.stringify(dataArr));
	});

	eventOn('click', '[choosearea]', function(){
		let that = this;
		let thisIndexBtn = parseInt(that.getAttribute('class').replace('choosearea', ''));
		localStorage.setItem('fastThisIndexBtn' ,thisIndexBtn);
		let dataArr = [];
		let allAreas = UA('.areasikplink');
		for(let i = (allAreas.length -1); i >= 0; i--){
			let elm = allAreas[i];
			let thisElm = elm.querySelector('[data-elm]').value;
			let thisDesc = elm.querySelector('[data-text]').value;
			let mainContent = elm.querySelector('[data-maincontant]').checked;
			dataArr.push({"elm":thisElm, "desc":thisDesc, 'mainContent': mainContent});
		};
		localStorage.setItem('fastskiplinksArr' ,JSON.stringify(dataArr));
		UA1('#fastMenuCloseMenu').click();

		document.body.insertAdjacentHTML('beforeend', '<style>.skiplinkborder{border: 3px solid red!important}</style><div id="infoBox" style="display: none; position: fixed; bottom: 0px; left: 0px; font-size: 14px; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);"></div>');
		thisCssPath = '';
		document.querySelectorAll('*').forEach(function(elm, index){
			elm.addEventListener('mouseover', showElementInfo);
			elm.addEventListener('mouseout', hideElementInfo);
			elm.addEventListener('click', saveElm);
		});

		function saveElm(event) {
			event.preventDefault();
			thisIndexBtn = parseInt(localStorage.getItem('fastThisIndexBtn'));
			dataArr[thisIndexBtn].elm = thisCssPath; 
			localStorage.setItem('fastskiplinksArr' ,JSON.stringify(dataArr));
			document.querySelectorAll('*').forEach(function(elm, index){
				elm.removeEventListener('mouseover', showElementInfo);
				elm.removeEventListener('mouseout', hideElementInfo);
				elm.removeEventListener('click', saveElm);
			});
			UA1('.skiplinkborder').tremoveClass('skiplinkborder');
			UA1('#fastMenuIcon').click();
			UA1('#fastskiplinks').click();

			for(let i = 0; i < dataArr.length -1; i++){
				UA1('.addnewskiplink').click();
			}

			lengthOfdataArr = dataArr.length -1;
			let allAreas = UA('.areasikplink');
			for(let i = 0; i < allAreas.length; i++){
				elm = allAreas[i];
				elm.querySelector('[data-elm]').value = dataArr[lengthOfdataArr - i].elm;
				elm.querySelector('[data-text]').value = dataArr[lengthOfdataArr - i].desc;
				elm.querySelector('[data-maincontant]').checked = dataArr[lengthOfdataArr - i].mainContent;
			};
		}

		const infoBox = document.getElementById('infoBox');

		function showElementInfo(event) {
			const targetElement = event.target;
			targetElement.classList.add("skiplinkborder");
			const tagName = targetElement.tagName;
			const attributes = Array.from(targetElement.attributes)
			.map((attr) => `${attr.name}="${attr.value}"`)
			.join('<br/> ');

			let cssPath = getUniqueCSSSelector(targetElement)
			const info = `Tag Name: ${tagName}<br>CSS PATH: ${cssPath}<br>`;
			thisCssPath = cssPath;
			infoBox.innerHTML = info;
			infoBox.style.display = 'block';
		}

		function hideElementInfo(event) {
			infoBox.style.display = 'none';
			const targetElement = event.target;
			targetElement.classList.remove("skiplinkborder");
		}
	
		function getUniqueCSSSelector(element) {
		
			if (!(element instanceof Element)) return;
			const path = [];
			while (element.parentElement) {
				let selector = element.tagName.toLowerCase();
				if (element.id) {
					selector += `#${element.id}`;
					path.unshift(selector);
					break;
				} else {
					const siblings = Array.from(element.parentElement.children);
					const index = siblings.findIndex((el) => el === element);
					selector += `:nth-child(${index + 1})`;
					path.unshift(selector);
					element = element.parentElement;
				}
			}
			return path.join(' > ');
		}

		








	});
};


andiUA.createFastMenu = function(){
	UA1("head")?.appendHtml(`
	<style id="fastMenuStyle">
		#faseWorkPanelBody * {
			font-size: 16px;
			color:#000;
		}
		
		
		#faseWorkPanelBody input:not([type="checkbox"]) {
			background-color: #fff;
			color: #000 !important;
			width: 225px;
			height: 40px;
			padding: 0 5px  0;
			border-radius: 5px;
			border: 2px solid hsl(196, 78%, 61%);
		}


		#fastMenuIcon{
			position: fixed;
			top: 50vh;
			background-color: #000;
			color: #fff;
			padding: 20px;
			z-index: 999999999999999999999;
		}
		#faseWorkPanel{
			width: 320px;
			position: fixed;
			right: 322px;
			top: 0;
			height: 640px;
			background-color: #2F3032;
			z-index: 9999999999999999999999;
			/*border: 2px solid  hsl(196, 78%, 61%);*/
			display:none;
			overflow: hidden;
		}
		#fastMenuWrap{
			width: 320px;
			position: fixed;
			right: 0;
			top: 0;
			height: 640px;
			background-color: #2F3032;
			z-index: 9999999999999999999999;
			/*border: 2px solid  hsl(196, 78%, 61%);*/
			display:none;
			overflow: hidden;
		}
		#faseWorkPanel.open,
		#fastMenuWrap.open{
			display:block;
		}
		#faseWorkPanelCloseMenu, 
		#fastMenuCloseMenu{
			font-size: 30px;
			position: absolute;
			left: 0;
			padding: 10px;
			color:#fff;
		}
		#faseWorkPanelHeader,
		#fastMenuHeader{
			height: 53px;
		}
		
		#faseWorkPanelHeading, 
		#fastMenuHeading{
			text-align: center;
			padding-top: 10px;
			font-size: 30px;
			color: #fff;
		}
		#fastMenuBody{
			margin-top: 25px;
		}
		#faseWorkPanelBody [role="button"],
		#fastMenuBody [role="button"]{
			padding: 8px 20px;
			border-radius: 0;
			overflow: hidden;
			font-size: 18px;
			color: hsl(196, 78%, 61%);
			border: 1px solid hsl(196, 78%, 61%);
			background: 0 0;
			transition: .3s;
			margin: 20px;
			text-align: right;
		}

		#faseWorkPanel hr, 
		#fastMenuWrap hr {
			border: 1px solid  hsl(196, 78%, 61%);
		}

		.fastuacard,
		.wrapfastimg {
			margin: 20px;
			background-color: #f1f1f1;
			border-radius: 10px;
			overflow: hidden;
		}

		.fastuainnercard,
		.innerfastimg{
			margin: 20px;
		}

		#faseWorkPanelBody{
			overflow: scroll;
			height: calc(100% - 87px);
		}

		.areasikplink{
			direction: rtl;
			
		}
		.areasikplink [for^="skiplink"]{
			display: block;
			text-align: right;
		}
		
		.areasikplink [name^="skiplink"]{
			display: block;
			text-align: left;
		}
		.areasikplink {
			margin: 10px;
		}

		.innerBtn,
		[choosearea] {
			background-color: hsl(196, 78%, 61%);
			border: none;
			margin: 20px 0 0;
			color: #fff !important;
			padding: 10px;
			border-radius: 5px;
		}
		button.addnewskiplink {
			margin: 0 22px;
		}
		#fastcsscode{
			text-align: left;
			color:#000;
			direction: ltr; 
			display:block; 
			width: 90%; 
			min-height:250px;
			margin:0 5% 20px; 
			border:1px solid #000;
			resize:vertical;
			padding: 5px;
			overflow: auto;
		}
		#fastcsscode *{
			color:#000;
			text-align: left;
			direction: ltr;
		}

	</style>
	`);
	
	UA1("body")?.appendHtml(`
		<div id="fastMenuIcon" tabindex="0" roile="button">
			FAST
		</div>
	`);
	
	UA1("body")?.appendHtml(`
		<div id="fastMenuWrap" class>
			<div id="fastMenuInner" >
			
				<div id="fastMenuHeader">
					<div id="fastMenuCloseMenu" role="button" tabindex="0" aria-label="סגור תפריט">X</div>
					<div id="fastMenuHeading" role="heading" aria-level="2">הנגשה מתקדמת</div>
					
				</div>
				<hr/>
				<div id="fastMenuBody">
					<div data-panel="1" id="fastimg" role="button" tabindex="0">הנגשת תמונות</div>
					<div data-panel="2" id="fastcss" role="button" tabindex="0">התאמות CSS</div>
					<div data-panel="3" id="fastskiplinks" role="button" tabindex="0">הגדרת אזורים</div>
				</div>
				<div id="fastMenuFotter">
				</div>
				
			</div>
		</div>
		<div id="faseWorkPanel">
			<div id="faseWorkPanelInner">
				<div id="faseWorkPanelHeader">
					<div id="faseWorkPanelCloseMenu" role="button" tabindex="0" aria-label="סגור תפריט">X</div>
					<div id="faseWorkPanelHeading" role="heading" aria-level="2">אזור הנגשה</div>
					<hr/>
				</div>
			</div>
			<hr/>
			<div id="faseWorkPanelBody">
			</div>  
		</div>
		 
	`);
}


if (window.location.href.toString().indexOf('fast=1') > -1 || window.location.href.toString().indexOf('fast=true') > -1 || localStorage.getItem('fast') == 'true' ) {
	localStorage.setItem('fast', 'true');
	function runInit(){
		if(andiUA.TUAsettingFn.TUAareaLinks.length > 0 && !localStorage.getItem('fastskiplinksArr')){
			let dataArr = [];
			let oldData = andiUA.TUAsettingFn.TUAareaLinks
			for(var i = 0; i < oldData.length; i++){
				let elm = oldData[i];
				let thisElm = elm.TUAappand_to;
				let thisDesc = elm.TUAtext_link;
				let mainContent = elm.TUAlisMainContent;
				dataArr.push({"elm":thisElm, "desc":thisDesc, 'mainContent': mainContent});
			};
			localStorage.setItem('fastskiplinksArr' ,JSON.stringify(dataArr));
		}
			

		andiUA.createFastMenu();
		andiUA.openFastMenu();
		if (window.addEventListener) {
			window.addEventListener("message", andiListener);
		} else {
			window.attachEvent("onmessage", andiListener);
		}
	}

	if(!UA1('#andiifuserlogin2')){
		var iframe = document.createElement('iframe');
		iframe.addAttr({
			'title':"UA",
			'tabindex':'-1',
			'aria-hidden':'true',
			'scrolling':'no',
			'style':'display:none;',
			'id':'andiifuserlogin2',
			'src':"https://system.user-a.co.il/frontEndSystem/keepAccessibility2",
		});
		iframe.onload = function(){
			setTimeout(function(){
				runInit();
			},1000);
			
		}
		document.querySelector('body').appendChild(iframe);
	} else {
		runInit();
	}
}
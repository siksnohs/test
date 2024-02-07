 var realpath = "https://system.user-a.co.il/Customers/208035788/_lanus_gob_ar-/";

	let fn1File = document.querySelectorAll('[src*="andifn1.js"]');
	try{
	if(fn1File.length > 1){
		let sameSrc = false;
		let theSrc = fn1File[0].getAttribute('src');
		for(let i = 1;i < fn1File.length;i++){
			if(theSrc != fn1File[i].getAttribute('src')){
				sameSrc = true;
			}
		};
		console.log(sameSrc)
		if(sameSrc){
			for(let i = 1;i < fn1File.length;i++){
				fn1File[i].remove();
			};
		}
	}
	
	setTimeout(function(){
		var script = document.createElement('script');
		var thatPath = document.querySelector('[src*="andifn1.js"]');
		ANDIjsPathTemp = realpath;
		TUAjsPath = ANDIjsPathTemp + '/andi2fn1.js';
		script.src = TUAjsPath;
		script.type = 'text/javascript';
		script.id = 'andi2path';
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(script);
	},500);
	} catch(err){console.log(err)}


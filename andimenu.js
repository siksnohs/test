
/*
TODO:
1. 
2. remove virtual keybord on modile
3. להוסיף זיהוי אזורים
4. add accessible print FN
5. add contrast color
6. check underline links fn on google if it work will
*/

let windowWidth = screen.width;
let screenWidth = 1280;
if (windowWidth <= 320) {
        screenWidth = 320;
} else if (windowWidth <= 480) {
        screenWidth = 480;
} else if (windowWidth <= 767) {
        screenWidth = 767;
} else if (windowWidth <= 960) {
        screenWidth = 960;
} else if (windowWidth <= 1024) {
        screenWidth = 1024;
}
const cssString = `
<style> 
        *{
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none; 
        }
        #andi_menu{
                background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                width: ${andiUA.TUAsettingFn.TUAparam.TUAourIconWidth}px;
                height: ${andiUA.TUAsettingFn.TUAparam.TUAourIconWidth}px;
                position: fixed;
                top: ${andiUA.TUAsettingFn.TUAparam['TUAourIconPositionFromTop' + screenWidth]}px;
                ${andiUA.TUAsettingFn.TUAparam['TUAiconPositionRightOrLeft' + screenWidth]}: ${andiUA.TUAsettingFn.TUAparam['TUAourIconPositionFromSide' + screenWidth]}px;
                z-index: 999999999999999;
        }
        .wrap-andi-menu,
        .wrap-andi-menu * {
                line-height: 130%;
                --main-bg-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor}; 
                vertical-align: top;
                font-family: Arial;
                box-sizing: border-box !important;
                color: #000;
                
        }
        img {
                width: 100%;
                object-fit: fill;
                height: auto;
        }
        hr{
                padding: 0;
                margin: 16px;
        }
        [role="button"] {
                cursor: pointer;
        }
        .wrap-andi-menu-rtl {
                direction: rtl;
                text-align: right;
        }
        .wrap-andi-menu-ltr {
                direction: ltr;
        }
        .wrap-andi-menu {
                overflow: hidden;
                display:none;
                transition: transform 0.5s ease-out;
                transform: translateX(0);
                position: fixed;
                top: 0;
                ${((andiUA.andidirection == 'rtl' ? 'right: 0;' : 'left: 0;'))}   
                width: 320px;
                height: 100%;
                z-index: 99999999999999999999999999999999999;
                background-color: color-mix(in lab ,white 90%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
        }
        .wrap-andi-menu.closed {
                transform: ${((andiUA.andidirection == 'rtl' ? 'translateX(100%);' : 'translateX(-100%);'))}  
        }
        .wrap-andi-menu .header {
                width: 100%;
                height: 240px;
                background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                background: linear-gradient(0deg, color-mix(in lab ,black 30%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} ) 0%, ${andiUA.TUAsettingFn.TUAparam.backgroundColor} 100%);
                border-radius: 0px 0px 25px 25px ;
        }
        .wrap-andi-menu .header .topbtns {
                padding-block: 17px;
                display: flex;
                justify-content: space-around;
                align-content: stretch;
        }
        .wrap-andi-menu .header .topbtns .close {
                background-color: #f1f1f1;
                width: 39px;
                height: 39px;
                border-radius: 8px 8px 8px 8px;
                display: inline-block;
                position: relative;
        }
        .wrap-andi-menu .header .topbtns .close .closeimg {
                display: block;
                position: relative;
                margin-inline-start: 7px;
                margin-block-start: 7px;
                
                background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                border-radius: 50%;
                color: #f1f1f1;
                width: 25px;
                height: 25px;
                text-align: center;
                padding-block-start: 3px;
                font-weight: bolder;
                font-size: 15px;
        }
        .wrap-andi-menu .header .topbtns .logo {
                display: inline-block;
                width: 130px;
                height: 37px;
        }
        .wrap-andi-menu .header .topbtns .logo img {
                width: 100%;
                object-fit: contain;
                height: 37px;
        }
        .wrap-andi-menu .header .topbtns .resizebig ,
        .wrap-andi-menu .header .topbtns .resizesmall {
                display: inline-block;
                width: 28px;
                height: 25px;
                margin-block-start: 7px;
        }
        .wrap-andi-menu .linebtn {
                height: 50px;
                width: 90%;
                border-bottom: 1px solid #BAC0DF;
                margin: auto;
                position:relative;
        }
        .wrap-andi-menu .linebtn .linebtnimg {
                margin-inline-start: 0px;
                margin-block-start: 8px;
                font-size: 16px;
                background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                border-radius: 50%;
                color: #f1f1f1;
                width: 33px;
                height: 33px;
                text-align: center;
                padding: 8px 0 0;
                font-weight: bolder;
                display: inline-block;
        }
        .wrap-andi-menu .linebtn .linebtnimg img {
                width: 20px;
                height: 20px;
        }
        .wrap-andi-menu .linebtn .linebtntext {
                display: inline-block;
                margin-inline-start: 8px;
                font-size: 16px;
                word-break: break-word;
                width: calc(83% - 35px);

                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
        }
        .firstsetting > div:first-child {
                margin-block-start: 15px;
        }
        .wrap-andi-menu .linebtn .linebtnbtn {
                display: inline-block;
                margin-block-start: 14px;
                color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                float: inline-end;
                transition: all 1s;
        }
        .wrap-andi-menu .nerrowfullwbtn {
                width: 279px;
                height: 45px;
                background-color: #f1f1f1;
                border-radius: 11px;
                margin-inline-start: 20px;
                margin-block-start: 50px;
                text-align: center;
                position: relative;
                display: flex;
                justify-content: center; 
                align-items: center;
        }
        .wrap-andi-menu .nerrowfullwbtn span {
                text-align: center;
                display: inline-block;
                font-size: 18px;
                padding-top: 0;
                margin-inline-start: -25px;
        }
        .wrap-andi-menu .nerrowfullwbtn img {
                margin-inline-start: 0;
                margin-block-start: 0;
                
                background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                border-radius: 50%;
                color: #f1f1f1;
                width: 29px;
                height: 29px;
                text-align: center;
                padding: 3px;
                font-weight: bolder;
                display: inline-block;
                position: absolute;
                ${((andiUA.andidirection == 'rtl' ? 'left: 17px;' : 'right: 17px;'))}
        }
        div > div.header > div > div > span {
                
        }
        .wrap-andi-menu .nerrowfullwbtn.statment{
                margin-block-start: 25px;
        }
        .wrap-andi-menu .nerrowfullwbtn.resetall{
                margin-block-start: 20px;
        }
        .scrollable-content {
                scrollbar-width: none;
        }
        .scrollable-content::-webkit-scrollbar {
                display: none;
        }
        .wrap-andi-menu .body {
                height: calc(100% - 240px - 40px);
                overflow-y: scroll;
                overflow-x: hidden;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn {
                position: relative;
                border-radius: 20px;
                background-color: #fff;
                width: 135px;
                height: 135px;
                display: inline-block;
                margin-inline-start: 15px;
                margin-block-start: 18px;
                box-shadow: hsla(252, 46%, 28%, 0.11) 0px 0px 6px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn:not(:has( .halfsizebtnchange)) {
                padding-block-start: 20px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn.first,
        .wrap-andi-menu .body .allfnbtns .thirdsizebtn.first {
                margin-block-start: 56px;
        }

        .halfsizebtn[role="group"]:has([aria-pressed="true"]),
        .wrap-andi-menu .body .allfnbtns [aria-pressed="true"],
        .colorselect .colorbox:focus,
        .wrap-andi-menu .body .allfnbtns .active,
        .wrap-andi-menu .body .allfnbtns .active {
                outline: 5px solid color-mix(in lab ,white 50%, ${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
                outline-offset: -5px;
                box-shadow: color-mix(in lab ,white 50%, ${andiUA.TUAsettingFn.TUAparam.backgroundColor} ) 0px 0px 3px;
        }
        .wrap-andi-menu .body .allfnbtns .activev{
                display: none;
        }
        .halfsizebtn[role="group"]:has([aria-pressed="true"]) .activev,
        .wrap-andi-menu .body .allfnbtns [aria-pressed="true"] .activev,
        .wrap-andi-menu .body .allfnbtns .active .activev{
                display: block;
                position: absolute;
                top:15px;
                border-radius: 50%;
                color:#fff;     
                padding-inline-start: 3px;
                padding-inline-end: 0;
                font-size:18px;
                width: 20px;
                height: 20px;
                margin-inline-start: 15px;
                background-color: color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
        }
        .wrap-andi-menu.wrap-andi-menu-rtl .body .allfnbtns .active .activev{
                right:15px;
        }
        .wrap-andi-menu.wrap-andi-menu-ltr .body .allfnbtns .active .activev{
                left:15px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnicon {
                text-align: center;
                width: 50px;
                height: 42px;
                display: block;
                margin: auto;
                margin-block-start: 8px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnicon img {
                text-align: center;
                width:30px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtntext {
                text-align: center;
                font-weight: bolder;
                font-size: 18px;
                display: block;
                padding-inline: 10px;
        }

        .wrap-andi-menu .body .allfnbtns .halfsizebtn:has(.halfsizebtnchange){
                text-align: center;
                padding-block-start: 15px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn:has(.halfsizebtnchange) .halfsizebtnicon{
                display: inline-block;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn:has(.halfsizebtnchange) .halfsizebtntext {
                display: inline-block;
                margin-block-start: 3px;
                word-break: break-word;
                width: 51%;
        }       
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnchange * {
                display: inline-block;
                text-align: center;
                height: 20px;
                margin-block-start: 12px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnchange {
                text-align: center;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnchange .sizetext {
                text-align: center;
                width: 110px;
                padding-block-start: 4px;
                font-size: 18px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .plus {
                text-align: center;
                width: 25px;
                height: 25px;
                padding-block-start: 0px;
                background-color:${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                border-radius: 50%;
                color: #fff;
                padding-block-start: 0px;
                font-size: 20px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn .minus {
                text-align: center;
                width: 25px;
                height: 25px;
                font-size: 20px;
                background-color:${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                border-radius: 50%;
                color: #fff;
                padding-block-start: 0px;
        }
        .wrap-andi-menu .body .allfnbtns .thirdsizebtn {
                position: relative;
                border-radius: 20px;
                background-color: #fff;
                width: 90px;
                height: 90px;
                display: inline-block;
                margin-inline-start: 5px;
                margin-block-start: 16px;
        }
        .wrap-andi-menu .body .allfnbtns .thirdsizebtn .halfsizebtnicon {
                text-align: center;
                width: 20px;
                height: 20px;
                display: block;
                margin: auto;
                margin-block-start: 18px;
        }
        .wrap-andi-menu .body .allfnbtns .thirdsizebtn .halfsizebtnicon img {
                text-align: center;
        }
        .wrap-andi-menu .body .allfnbtns .thirdsizebtn .halfsizebtntext {
                text-align: center;
                font-weight: bolder;
                font-size: 15px;
                display: block;
                margin-block-start: 10px;
        }
        .wrap-andi-menu .body .allfnbtns .thirdsizebtn.bgcolorbtn{
                margin-inline-start: 15px;
        }
        .wrap-andi-menu .body .nerrowfullwbtn.first {
                margin-block-start: 20px;
                margin-block-end: 20px; 
        }
        .wrap-andi-menu .body .nerrowfullwbtn.last {
                margin-block-end: 64px;
        }
        .wrap-andi-menu .body .nerrowfullwbtn {
                background-color: #fff;
                margin-block-start: 20px;
        }
        .wrap-andi-menu .fullsizebtn {
                background-color: #fff;
                width: 288px;
                height: 119px;
                display: inline-block;
                margin-inline-start: 15px;
                margin-block-start: 16px;
                box-shadow: hsla(252, 46%, 28%, 0.11) 0px 0px 6px;
                position: relative;
                border-radius: 20px;
        }
        .fullsizebtn.colorselect {
                padding-inline-start: 23px;
                padding-block-start: 18px;
                height: 110px;
                transition: all 0.5s;
                opacity: 0;
        }
        .wrap-andi-menu .bgcolorbtn[aria-expanded="true"]+div+div+div.fullsizebtn {        
                border-start-start-radius: 0;                
                opacity: 1;
        }
        .wrap-andi-menu .headingcolorbtn[aria-expanded="true"]+div+div.fullsizebtn {                
                opacity: 1;
        }
        .wrap-andi-menu .textcolorbtn[aria-expanded="true"]+div.fullsizebtn {
                border-start-end-radius: 0;                
                opacity: 1;
        }
        .wrap-andi-menu .thirdsizebtn.bgcolorbtn[aria-expanded="true"],
        .wrap-andi-menu .thirdsizebtn.headingcolorbtn[aria-expanded="true"],
        .wrap-andi-menu .thirdsizebtn.textcolorbtn[aria-expanded="true"] {
                border-end-start-radius: 0;
                border-end-end-radius: 0;
                transition: all 0.5s;
                --color: transparent;
        }
        .wrap-andi-menu .thirdsizebtn.bgcolorbtn[aria-expanded]:before,
        .wrap-andi-menu .thirdsizebtn.headingcolorbtn[aria-expanded]:before,
        .wrap-andi-menu .thirdsizebtn.textcolorbtn[aria-expanded]:before {
                content: '';
                --color: transparent;
                box-sizing: border-box;
                width: 90px;
                height: 27px;
                position: absolute;
                bottom: -21px;
                display: block;
                background-color: #fff;
                z-index: 1;
                opacity: 0;
                transition: all 0.5s;
                
        }
        .wrap-andi-menu .thirdsizebtn.bgcolorbtn[aria-expanded="true"]:before,
        .wrap-andi-menu .thirdsizebtn.headingcolorbtn[aria-expanded="true"]:before,
        .wrap-andi-menu .thirdsizebtn.textcolorbtn[aria-expanded="true"]:before {
                opacity: 1;
        }
        .colorselect .colorbox {
                width: 28px;
                height: 28px;
                display: inline-block;
                border-radius: 5px;
                margin-inline-end: 10px;
                margin-block-end: 15px;
        }
        .colorbox.yellow {
                background-color: #EFDF01;
        }
        .colorbox.orange {
                background-color: orange;
        }
        .colorbox.red {
                background-color: red;
        }
        .colorbox.graylight {
                background-color: #D5D5D5;
        }
        .colorbox.gray {
                background-color: gray;
        }
        .colorbox.black {
                background-color: black;
        }
        .colorbox.green {
                background-color: green;
        }
        .colorbox.azure {
                background-color: #01BEEF;
        }
        .colorbox.blue {
                background-color: blue;
        }
        .colorbox.purple {
                background-color: purple;
        }
        .colorbox.pink {
                background-color: pink;
        }
        .colorbox.reset {
                background-color: #fff;
                border: 2px solid #000;
                font-size: 18px;
                vertical-align: top;
                text-align: center;
                position: relative;
        }
        .colorbox.reset::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom left, transparent 47%, black 47%, black 53%, transparent 53%);
        }
        .wrap-andi-menu .footer {
                height: 40px;
                width: 100%;
                
                background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                border-radius: 25px 25px 0px 0px;
                display: flex;
                justify-content: center; 
                align-items: center;
                padding-inline: 20px;
        }
        .wrap-andi-menu .footer a {
                color: #f1f1f1;
                text-decoration: underline;
                text-align: center;
                font-size: 13px;
        }
        .wrap-andi-menu .body .allfnbtns .halfsizebtn:has( .halfsizebtnchange) {
                width: 287px;
                position: relative;
        }
        .wrap-andi-menu .wrap_popup{
                padding-block-end: 40px;
                position: absolute;
                z-index: 9999999999999999999999999999999999;
                inset-inline-start: 12.5%;
                inset-block-start: 12.5%;
                width: 75%;
                background-color: #f1f1f1;
                border-radius: 25px;
                box-shadow: 0px 0px 0px 99999px color-mix(in lab ,black 20%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor}aa );
                border: 5px solid #3A2587;
                max-height: 75%;
                overflow: hidden;
        }
        .wrap-andi-menu .wrap_popup .inner_popup .close_popup{
                color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                position: absolute;
                font-size: 30px;
                font-weight: bolder;
                top: 8px;
                ${(andiUA.andidirection == 'rtl' ? 'left' : 'right')}: 15px;
                background-color: #f1f1f1;
        }
        .wrap-andi-menu .wrap_popup .inner_popup .text{
                overflow-y: scroll;
                max-height: calc(75vh - 55px);
                display: block;
        }

        .wrap-andi-menu .wrap_popup .inner_popup .innerText{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 0 25px;
        }

        .wrap-andi-menu .wrap_popup .inner_popup .text .noteimg {
                width: 50px;
                height: 50px;
                text-align: center;
                margin: 30px calc(50% - 25px) 30px;
        }
        .wrap-andi-menu .wrap_popup .inner_popup .text h2 {
                display: block;
                font-size: 20px;
                margin-block-start: 0.83em;
                margin-block-end: 0.83em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;
                text-align: center;
        }
        .wrap-andi-menu .wrap_popup .inner_popup .text p {
                font-size: 16px;
        }   

        .wrap-andi-menu #langselect{
                background-color: #fff;
                margin-inline: 17px;
                padding-inline: 10px;
                height: 165px;
                overflow-y: scroll;
                display:none;
                transition: all 1s;
        }

        .wrap-andi-menu #langselect::-webkit-scrollbar {
                width: 10px;
        }

        .wrap-andi-menu #langselect::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} ); 
                border-radius: 10px;
        }

        .wrap-andi-menu #langselect::-webkit-scrollbar-thumb {
                background: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                border-radius: 10px;
        }

        .wrap-andi-menu #langselect::-webkit-scrollbar-thumb:hover {
                background: color-mix(in lab ,black 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );; 
        }

        .wrap-andi-menu #langselect a{
                display: block;
                color: #cccccc;
                height: 50px;
                border-bottom: 2px solid #ccc;
        }

        .wrap-andi-menu #langselect a .lang_code{
                margin-inline-start: 0px;
                margin-block-start: 8px;
                font-size: 16px;
                background-color: color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
                border-radius: 50%;
                color: #f1f1f1;
                width: 33px;
                height: 33px;
                text-align: center;
                padding: 8px 0 0;
                font-weight: bolder;
                display: inline-block;
                text-transform: uppercase;
        }
        .wrap-andi-menu #langselect a span:not(.lang_code){
                margin: 13px 20px 0;
                display: inline-block;
                font-size: 18px;
        }
</style>`;

let credit = '';
if (!andiUA.TUAsettingFn.TUAhideCopyRight) {
        credit = `${andiUA.TUAfileLang['All Rights Reserved']}`;
        if (andiUA.TUAsettingFn.compenywebsite.indexOf("user-a.co.il") == -1) {
                credit = `${andiUA.TUAfileLang['Accessible by']} ${andiUA.TUAsettingFn.compenyname} ${andiUA.TUAfileLang['Via U.A']} `;
        }
}

const htmlString = `
<div id="andi_menu" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['open accessibility menu']}">
        <img loading="lazy" src="${andiUA.TUAjsPath}imgs/${andiUA.TUAsettingFn.TUAsetMenuLogo}.svg" alt="${andiUA.TUAfileLang['open accessibility menu']}">
</div>
<div class="wrap-andi-menu wrap-andi-menu-${andiUA.andidirection} closed">      
        <div class="header">
                <div class="topbtns">
                        <div id="resizemenubig" class="resizebig" aria-pressed="false" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['resizebig']}">
                                <img loading="lazy" class="resizebig_img" src="${andiUA.TUAjsPath}/imgs/resizebig.png" alt="">
                                <img loading="lazy" class="resizesmall_img" src="${andiUA.TUAjsPath}/imgs/resizesmall.png" alt="" style="display: none;">
                        </div>
                        <div class="logo">
                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/logo.png" alt="logo">
                        </div>
                        <div class="close" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['Close accessibility menu']}">
                                <div class="closeimg">&#x2716;</div>
                        </div>
                </div>
                <div class="bottombtn" >
                        <div id="ua_privatearea" style="display:none;" class="statment nerrowfullwbtn" role="button" tabindex="0">
                                <span>${andiUA.TUAfileLang['Private area']}</span>
                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/user.png" alt="">
                        </div>
                </div>
                <div class="bottombtn">
                        <div class="resetall nerrowfullwbtn" style="    margin-block-start: 45px;" role="button" tabindex="0">
                                <span>${andiUA.TUAfileLang['Reset All Adjustments']}</span>
                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/reset.png" alt="">
                        </div>
                </div>
        </div>
        <div class="body scrollable-content">
                <div class="innerbody">
                        <div class="firstsetting">
                                <div class="linebtn" role="button" tabindex="0" id="lang" aria-expanded="false" aria-controls="langselect">
                                        <div class="linebtnimg">${andiUA.lang}</div>
                                        <div class="linebtntext">English </div>
                                        <div class="linebtnbtn"><span>&#11208;</span></div>
                                </div>
                                <div id="langselect">
                                        <a role="link" tabindex="0"><span class="lang_code en">en</span><span>English</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code he">he</span><span>עברית</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code ru">ru</span><span>Русский</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code ar">ar</span><span>العربية</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code es">es</span><span>Español</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code fr">fr</span><span>Français</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code it">it</span><span>Italiano</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code ro">ro</span><span>Română</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code pt">pt</span><span>Português</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code de">de</span><span>Deutsch</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code nl">nl</span><span>Nederlands</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code pl">pl</span><span>Polski</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code cs">cs</span><span>Čeština</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code sr">sr</span><span>Српски</span></a>
                                        <a role="link" tabindex="0"><span class="lang_code el">el</span><span>Ελληνικά</span></a>
                                </div>
                                <div class="linebtn" role="button" tabindex="0" id="statmenent">
                                        <div class="linebtnimg">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/statmenent.png" alt="">
                                        </div>
                                        <div class="linebtntext">${andiUA.TUAfileLang['Accessibility statement']}</div>
                                        <div class="linebtnbtn"></div>
                                </div>
                                <div class="linebtn">
                                        <div class="linebtnimg">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/wheelchar.png" alt="">
                                        </div>
                                        <div class="linebtntext">${andiUA.TUAfileLang['Open Main Accessibility Menu Press F10']}</div>
                                        <div class="linebtnbtn"></div>
                                </div>

                                
                        </div>
                        <div class="allfnbtns">
                                <div id="changefontsize" class="halfsizebtn" role="group">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/bigText.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                                ${andiUA.TUAfileLang['Enlarge Text']}
                                        </div>
                                        <div class="halfsizebtnchange">
                                                <div class="plus" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['Increase the text by 2 points']}"> + </div>
                                                <div class="sizetext" aria-live="assertive">100%</div>
                                                <div class="minus" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['Reduce the text size by 2 points']}"> - </div>
                                        </div>
                                </div>
                                
                                <div class="halfsizebtn" id="magnifaer" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/magnifaer.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                                ${andiUA.TUAfileLang['Magnifying Glass']}
                                        </div>
                                </div>

                                <div class="halfsizebtn" id="darkcontrast" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/contrast.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                                ${andiUA.TUAfileLang['High Contrast']}
                                        </div>
                                </div>

                                <hr/>
                                <div class="halfsizebtn" id="highlightlinks" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/highlight-link.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Highlight Links']}
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="focuscontentarea" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/Group219.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Focus Content Area']}
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="stopanimations" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/pause.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Stop Animations']}
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="wikipedia" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/book.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Terms and Expressions']}
                                        </div>
                                </div>
                                
                                <div class="halfsizebtn" id="accessibleprinting" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/print.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Accessible Printing']}
                                        </div>
                                </div>

                                <div class="halfsizebtn" id="readablefont" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/readable-font.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['readable font']}
                                        </div>
                                </div>
                                <hr/>
                                <div class="halfsizebtn" role="button" id="keyboardfocus" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/keyboardfocus.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Prominent Focus']}
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="mousecursor" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/mouse.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Mouse Cursor']}
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="lettersnav" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/lettersnav.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Navigation by Letters']}
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="virtualkeyboard" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/virtualkeyboard.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Virtual Keyboard']}
                                        </div>
                                </div>
                                <hr/>
                                <div class="halfsizebtn" id="alignleft" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/textalign-justifyleft.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Align Left']}
                                        </div>
                                </div>  
                                <div class="halfsizebtn" id="alignright" role="button" tabindex="0" aria-pressed="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/textalign-justifyright.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Align Right']}
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="letterspacing" role="group">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/letter-space.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Letter Spacing']}
                                        </div>
                                        <div class="halfsizebtnchange">
                                                <div class="plus" role="button" tabindex="0"  aria-label="${andiUA.TUAfileLang['increase']}"> + </div>
                                                <div class="sizetext" aria-live="assertive">100%</div>
                                                <div class="minus" role="button" tabindex="0"  aria-label="${andiUA.TUAfileLang['decrease']}"> - </div>
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="linespacing" role="group">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/line-space.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Line Spacing']}
                                        </div>
                                        <div class="halfsizebtnchange">
                                                <div class="plus" role="button" tabindex="0"  aria-label="${andiUA.TUAfileLang['increase']}"> + </div>
                                                <div class="sizetext" aria-live="assertive">100%</div>
                                                <div class="minus" role="button" tabindex="0"  aria-label="${andiUA.TUAfileLang['decrease']}"> - </div>
                                        </div>
                                </div>
                                <div class="halfsizebtn" id="wordspacing" role="group">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/word-space.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Word Spacing']}
                                        </div>
                                        <div class="halfsizebtnchange">
                                                <div class="plus" role="button" tabindex="0"  aria-label="${andiUA.TUAfileLang['increase']}"> + </div>
                                                <div class="sizetext" aria-live="assertive">100%</div>
                                                <div class="minus" role="button" tabindex="0"  aria-label="${andiUA.TUAfileLang['decrease']}"> - </div>
                                        </div>
                                </div>
                                <hr/>
                                <div class="thirdsizebtn bgcolorbtn" id="bgcolor" role="button" tabindex="0" aria-expanded="false" >
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/contrast.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Background Color']}
                                        </div>
                                </div>
                                <div class="thirdsizebtn headingcolorbtn" id="headingcolor" role="button" tabindex="0" aria-expanded="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/heading-color.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Heading Color']}
                                        </div>
                                </div>
                                <div class="thirdsizebtn textcolorbtn" id="textcolor" role="button" tabindex="0" aria-expanded="false">
                                        <span class="activev">&#x2714;</span>
                                        <div class="halfsizebtnicon">
                                                <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/text-color.png" alt="">
                                        </div>
                                        <div class="halfsizebtntext">
                                        ${andiUA.TUAfileLang['Text Color']}
                                        </div>
                                </div> 
                                <div class="fullsizebtn colorselect" role="group" tabindex="0">
                                        <div class="colorbox yellow" tabindex="0" data-radiomax="12" data-index="0" aria-label="${andiUA.TUAfileLang['Yellow']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox orange" tabindex="0" data-radiomax="12" data-index="1" aria-label="${andiUA.TUAfileLang['Orange']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox red" tabindex="0" data-radiomax="12" data-index="2" aria-label="${andiUA.TUAfileLang['Red']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox graylight" tabindex="0" data-radiomax="12" data-index="3" aria-label="${andiUA.TUAfileLang['Light Gray']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox gray" tabindex="0" data-radiomax="12" data-index="4" aria-label="${andiUA.TUAfileLang['Gray']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox black" tabindex="0" data-radiomax="12" data-index="5" aria-label="${andiUA.TUAfileLang['Black']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox green" tabindex="0" data-radiomax="12" data-index="6" aria-label="${andiUA.TUAfileLang['Green']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox azure" tabindex="0" data-radiomax="12" data-index="7" aria-label="${andiUA.TUAfileLang['Azure']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox blue" tabindex="0" data-radiomax="12" data-index="8" aria-label="${andiUA.TUAfileLang['Blue']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox purple" tabindex="0" data-radiomax="12" data-index="9" aria-label="${andiUA.TUAfileLang['Purple']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox pink" tabindex="0" data-radiomax="12" data-index="10" aria-label="${andiUA.TUAfileLang['Pink']}" role="checkbox" aria-checked="false"></div>
                                        <div class="colorbox reset" tabindex="0" data-radiomax="12" data-index="11" aria-label="${andiUA.TUAfileLang['Reset']}" role="checkbox" aria-checked="false"></div>
                                </div>
                        </div>
                        <div>
                                <div class="nerrowfullwbtn first resetall" role="button" tabindex="0">
                                        <span>${andiUA.TUAfileLang['Reset All Adjustments']}</span>
                                        <img loading="lazy" src="${andiUA.TUAjsPath}/imgs/reset.png" alt="">
                                </div>
                        </div>
                </div>

        </div>
        <div class="footer">
                ${((!andiUA.TUAsettingFn.TUAremoveLinkToAndi) ? `<a href="${andiUA.TUAsettingFn.compenywebsite}" target="_blank">${credit}</a>` : '')}
                
        </div>
</div>`;

//console.clear()
const hostElement = document.createElement('div');
hostElement.id = 'andimenu';
document.body.prepend(hostElement);
const shadowRoot = hostElement.attachShadow({ mode: 'open' });
const cssAndHtmlString = htmlString + cssString;
shadowRoot.innerHTML = cssAndHtmlString;
const menu = shadowRoot.querySelector('.wrap-andi-menu');
shadowRoot.querySelector(`.lang_code.${andiUA.lang}`) ?
        shadowRoot.querySelector('#lang .linebtntext').innerText = shadowRoot.querySelector(`.lang_code.${andiUA.lang} + span`).innerText : 'English';


shadowRoot.querySelectorAll('[aria-pressed]').forEach(function (elm, index) {
        elm.addEventListener('click', function () {
                if (elm.getAttribute('aria-pressed') == 'true') {
                        elm.setAttribute('aria-pressed', false)
                } else {
                        elm.setAttribute('aria-pressed', true)
                }
        });
});

shadowRoot.querySelectorAll('[role="button"]').forEach(function (elm, index) {
        elm.addEventListener('keydown', function (e) {
                if (e.key == 'Enter') this.click();
        });
});


function resetCustomColors(){

        let btnsArr = ['bgcolor', 'headingcolor', 'textcolor'];
        for (let index = 0; index < btnsArr.length; index++) {
                const type = btnsArr[index];
                document.querySelector(`#${type}_styletag`)?.remove();
                localStorage.removeItem(type);
                shadowRoot.querySelector(`#${type}`).removeAttribute('style');
                shadowRoot.querySelector(`.fullsizebtn.colorselect`).removeAttribute('style');
                shadowRoot.querySelector(`#${type}btn_before`)?.remove();
                shadowRoot.querySelectorAll('.bgcolorbtn, .headingcolorbtn, .textcolorbtn').forEach(function (innerElm, index) {
                        innerElm.setAttribute('aria-expanded', false);
                });
                setTimeout(function () {
                        shadowRoot.querySelector('.fullsizebtn.colorselect').style.display = "none";
                }, 1100);
                andiUA.customColorOpen = '';
        }
}


andiUA.resetAll = function () {
        shadowRoot.querySelectorAll('.halfsizebtn[role="button"][aria-pressed="true"]').forEach(function (elm, index) {
                elm.click();
        });
        UA('[tuafontsizes],[havetext]').forEach(function (elm) {
                let size = parseInt(elm.getAttribute('tuafontsizes'));
                elm.style.fontSize = (size) + 'px';
        });
        UA('[wordspacing]').forEach(function (elm) {
                let size = parseInt(elm.getAttribute('wordspacing'));
                if (isNaN(size)) size = 0;
                elm.style.wordSpacing = (size) + 'px';
        });
        UA('[letterspacing]').forEach(function (elm) {
                let size = parseInt(elm.getAttribute('letterspacing'));
                if (isNaN(size)) size = 0;
                elm.style.letterSpacing = (size) + 'px';
        });
        UA('[lineheight]').forEach(function (elm) {
                let size = parseInt(elm.getAttribute('lineheight'));
                if (isNaN(size)) size = 0;
                elm.style.lineHeight = (size) + 'px';
        });
        shadowRoot.querySelectorAll('.sizetext').forEach(function (elm) {
                elm.innerText = '100%';
        });

        resetCustomColors();
        localStorage.removeItem('fontsizelevel');
        localStorage.removeItem('letterpacinglevel');
        localStorage.removeItem('wordspacinglevel');
        localStorage.removeItem('linepacinglevel');
}

shadowRoot.querySelectorAll('.resetall').forEach(function (btn) {
        btn.addEventListener('click', function () {
                andiUA.resetAll(this);
        });
});


shadowRoot.querySelectorAll('#langselect a').forEach(function (btn) {
        btn.addEventListener('click', function () {
                localStorage.setItem('TUAsetUserLanguage', btn.querySelector('.lang_code').innerText.toLowerCase());
                window.location.reload();
        });
        btn.addEventListener('keydown', function (e) {
                if (e.key == 'Enter') this.click();
        });
});


shadowRoot.querySelector('#lang').addEventListener('click', function () {
        let that = this;
        if (that.getAttribute('aria-expanded') == 'false') {
                that.setAttribute('aria-expanded', 'true');
                that.querySelector('.linebtnbtn').style.rotate = '90deg';
                that.nextElementSibling.style.display = 'block';
                setTimeout(function () {
                        that.nextElementSibling.style.opacity = '1';
                }, 0);
        } else {
                that.setAttribute('aria-expanded', 'false');
                that.querySelector('.linebtnbtn').style.rotate = '-0deg';
                that.nextElementSibling.style.opacity = '0';
                that.nextElementSibling.addEventListener('transitionend', function () {
                        that.nextElementSibling.style.display = 'none';
                }, { once: true });
        }
});






andiUA.create_accessibleprinting_Tags = function (docs) {
        let div = document.createElement('div');
        div.id = "wrap_accessibleprint";
        div.innerHTML = `
                <div class="menu">
                        <div class="tabs">
                                <div class="tab-buttons">        
                                        <div class="close" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['Close']}">
                                                <div class="closeimg">&#x2716;</div>
                                        </div>                              
                                        <button class="tab-button active" data-id="General">${andiUA.TUAfileLang['General']}</button>
                                        <button class="tab-button" data-id="Headings">${andiUA.TUAfileLang['Headings']}</button>
                                        <button class="tab-button" data-id="Images">${andiUA.TUAfileLang['Images']}</button>
                                        <button class="tab-button" data-id="Links">${andiUA.TUAfileLang['Links']}</button>
                                        <button class="tab-button" data-id="Forms">${andiUA.TUAfileLang['Forms']}</button>
                                        <button class="tab-button" id="printcontent">${andiUA.TUAfileLang['Print']}</button>
                                </div>
                                <div id="General" class="tab-content active">                                        
                                        <div>
                                                <p>${andiUA.TUAfileLang['print explane']}</p>
                                        </div>
                                </div>
                                <div id="Forms" class="tab-content">                                        
                                        <div>
                                                <input type="checkbox" id="removeFormControls" >
                                                <label for="removeFormControls">${andiUA.TUAfileLang['Remove form controls']}</label>
                                        </div>
                                </div>
                                <div id="Headings" class="tab-content">
                                        <div>
                                                <label for="heading-size">${andiUA.TUAfileLang['Select heading size']}:</label>
                                                <select id="heading-size">
                                                        <option value="normal">${andiUA.TUAfileLang['Normal']}</option>
                                                        <option value="large">${andiUA.TUAfileLang['Large']}</option>
                                                        <option value="x-large">${andiUA.TUAfileLang['X-large']}</option>
                                                </select>
                                        </div>
                                        <div> 
                                                <fieldset class="color-selection">
                                                <legend>${andiUA.TUAfileLang['Select color']}:</legend>
                                                        <div>
                                                                <input type="radio" id="colorRed" name="color" value="Red">
                                                                <label for="colorRed" style="background-color: red;">${andiUA.TUAfileLang['Red']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorGreen" name="color" value="Green">
                                                                <label for="colorGreen" style="background-color: green;">${andiUA.TUAfileLang['Green']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorBlue" name="color" value="Blue">
                                                                <label for="colorBlue" style="background-color: blue;">${andiUA.TUAfileLang['Blue']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorYellow" name="color" value="Yellow">
                                                                <label for="colorYellow" style="background-color: yellow;">${andiUA.TUAfileLang['Yellow']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorPurple" name="color" value="Purple">
                                                                <label for="colorPurple" style="background-color: purple;">${andiUA.TUAfileLang['Purple']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorPink" name="color" value="Pink">
                                                                <label for="colorPink" style="background-color: pink;">${andiUA.TUAfileLang['Links']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorOrange" name="color" value="Orange">
                                                                <label for="colorOrange" style="background-color: orange;">${andiUA.TUAfileLang['Orange']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorCyan" name="color" value="Cyan">
                                                                <label for="colorCyan" style="background-color: cyan;">${andiUA.TUAfileLang['Cyan']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorMagenta" name="color" value="Magenta">
                                                                <label for="colorMagenta" style="background-color: magenta;">${andiUA.TUAfileLang['Magenta']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorLime" name="color" value="Lime">
                                                                <label for="colorLime" style="background-color: lime;">${andiUA.TUAfileLang['Lime']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorBrown" name="color" value="Brown">
                                                                <label for="colorBrown" style="background-color: brown;">${andiUA.TUAfileLang['Brown']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorBlack" name="color" value="Black">
                                                                <label for="colorBlack" style="background-color: black;">${andiUA.TUAfileLang['Black']}</label>
                                                        </div>
                                                        <div>
                                                                <input type="radio" id="colorGrey" name="color" value="Grey">
                                                                <label for="colorGrey" style="background-color: grey;">${andiUA.TUAfileLang['Grey']}</label>
                                                        </div>
                                                </fieldset>
                                      
                                        </div>
                                        <div>
                                                <input type="checkbox" id="heading-bold">
                                                <label for="heading-bold">${andiUA.TUAfileLang['bold']}</label>
                                        </div>
                                        <div>
                                                <input type="checkbox" id="heading-underline">
                                                <label for="heading-underline">${andiUA.TUAfileLang['underline']}</label>
                                        </div>                                        
                                </div>
                                <div id="Images" class="tab-content">
                                        <label for="imageSize">${andiUA.TUAfileLang['Select image size']}:</label>
                                        <select id="imageSize" onchange="changeImageSize(this.value);">
                                                <option value="small">${andiUA.TUAfileLang['Small']}</option>
                                                <option value="normal" selected>${andiUA.TUAfileLang['Normal']}</option>
                                                <option value="large">${andiUA.TUAfileLang['Large']}</option>
                                                <option value="none">${andiUA.TUAfileLang['No images']}</option>
                                        </select>
                                </div>
                                <div id="Links" class="tab-content">
                                        <div>
                                                <input type="checkbox" id="addUrlToLinks">
                                                <label for="addUrlToLinks">${andiUA.TUAfileLang['Add the URL as link text']}</label>
                                        </div>
                                </div>
                                
                        </div>
                </div>
                <div class="html_doc"></div>

        `;
        shadowRoot.appendChild(div);

        docs.forEach(function (cloneHtml) {
                cloneHtml.querySelectorAll('script,style').forEach(function (script) {
                        script.remove();
                });
                cloneHtml.querySelectorAll('*').forEach(function (elm) {
                        if (!elm.isIt('a,img')) {
                                for (let index = 0; index < elm.attributes.length; index++) {
                                        const attr = elm.attributes[index];
                                        elm.removeAttribute(elm.attributes[index].name);
                                }
                        }
                        if (elm.isIt('a,img')) {
                                for (let index = 0; index < elm.attributes.length; index++) {
                                        const attr = elm.attributes[index];
                                        if (elm.attributes[0].name != 'src' && elm.attributes[0].name != 'href') {
                                                elm.removeAttribute(elm.attributes[index].name);
                                        }

                                }
                        }
                });
                shadowRoot.querySelector('.html_doc').append(cloneHtml);
        });
        shadowRoot.querySelectorAll('.html_doc *').forEach(function (elm) {
                elm.removeAttribute('class');
        });

        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu .tab-button').forEach(function (btn) {
                btn.addEventListener('click', function () {
                        var i, tabcontent, tabbuttons;
                        tabcontent = shadowRoot.querySelectorAll(".tab-content");
                        for (i = 0; i < tabcontent.length; i++) {
                                tabcontent[i].style.display = "none";
                        }
                        tabbuttons = shadowRoot.querySelectorAll(".tab-button");
                        for (i = 0; i < tabbuttons.length; i++) {
                                tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
                        }
                        let tabContent = this.getAttribute('data-id')
                        if (shadowRoot.querySelector(`#${tabContent}`))
                                shadowRoot.querySelector(`#${tabContent}`).style.display = "flex";
                        this.className += " active";
                });
        });
        let printHeadingSelector = '#wrap_accessibleprint .html_doc h1,#wrap_accessibleprint .html_doc h2,#wrap_accessibleprint .html_doc h3,#wrap_accessibleprint .html_doc h4,#wrap_accessibleprint .html_doc h5,#wrap_accessibleprint .html_doc h6';
        function changeHeadingColor(color) {
                var headings = shadowRoot.querySelectorAll(printHeadingSelector);
                headings.forEach(function (heading) {
                        heading.style.color = color;
                });
        }
        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu .color-selection input').forEach(function (btn) {
                btn.addEventListener('input', function () {
                        changeHeadingColor(this.value);
                });
        });

        function setHeadingSize(baseSize, sizeH3, sizeH2, sizeH1) {
                shadowRoot.querySelectorAll('.html_doc h4, .html_doc h5, .html_doc h6').forEach(function (heading) {
                        heading.style.fontSize = baseSize;
                });
                shadowRoot.querySelectorAll('.html_doc h3').forEach(function (heading) {
                        heading.style.fontSize = sizeH3;
                });
                shadowRoot.querySelectorAll('.html_doc h2').forEach(function (heading) {
                        heading.style.fontSize = sizeH2;
                });
                shadowRoot.querySelectorAll('.html_doc h1').forEach(function (heading) {
                        heading.style.fontSize = sizeH1;
                });
        }

        function changeHeadingSize(size) {
                var headings = shadowRoot.querySelectorAll(printHeadingSelector);
                headings.forEach(function (heading) {
                        switch (size) {
                                case 'normal':
                                        setHeadingSize('', '', '', '')
                                        break;
                                case 'large':
                                        setHeadingSize('28px', '32px', '36px', '40px')
                                        break;
                                case 'x-large':
                                        setHeadingSize('32px', '36px', '40px', '44px')
                                        break;
                        }
                });
        }


        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu #heading-size').forEach(function (btn) {
                btn.addEventListener('input', function () {
                        changeHeadingSize(this.value)
                });
        });

        function toggleHeadingBold(isBold) {
                var headings = shadowRoot.querySelectorAll('.html_doc h1, .html_doc h2, .html_doc h3, .html_doc h4, .html_doc h5, .html_doc h6');
                headings.forEach(function (heading) {
                        heading.style.fontWeight = isBold ? 'bolder' : 'normal';
                });
        }

        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu #heading-bold').forEach(function (btn) {
                btn.addEventListener('input', function () {
                        toggleHeadingBold(this.checked)
                });
        });

        function toggleHeadingUnderline(isUnderlined) {
                var headings = shadowRoot.querySelectorAll('.html_doc h1, .html_doc h2, .html_doc h3, .html_doc h4, .html_doc h5, .html_doc h6');
                headings.forEach(function (heading) {
                        heading.style.textDecoration = isUnderlined ? 'underline' : 'none';
                });
        }

        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu #heading-underline').forEach(function (btn) {
                btn.addEventListener('input', function () {
                        toggleHeadingUnderline(this.checked)
                });
        });

        function changeImageSize(size) {
                const images = shadowRoot.querySelectorAll('#wrap_accessibleprint .html_doc img, #wrap_accessibleprint .html_doc i, #wrap_accessibleprint .html_doc svg');
                images.forEach((img) => {
                        img.classList.remove('small', 'normal', 'large');
                        if (size !== 'none') img.classList.add(size);
                        img.style.display = (size === 'none') ? 'none' : '';
                });
        }

        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu #imageSize').forEach(function (btn) {
                btn.addEventListener('input', function () {
                        changeImageSize(this.value);
                });
        });

        function addUrlToLinks(isChecked) {
                const links = shadowRoot.querySelectorAll('.html_doc a');
                links.forEach(link => {
                        if (isChecked) {
                                if (!link.textContent.includes(link.href)) {
                                        link.textContent += ` (${link.href}) `;
                                }
                        } else {
                                link.textContent = link.textContent.replace(` (${link.href}) `, '');
                        }
                });
        }

        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu #addUrlToLinks').forEach(function (btn) {
                btn.addEventListener('input', function () {
                        addUrlToLinks(this.checked);
                });
        });

        function removeFormControls(isChecked) {
                const formControls = shadowRoot.querySelectorAll('.html_doc input, .html_doc button, .html_doc select, .html_doc textarea');
                formControls.forEach(control => {
                        control.style.display = isChecked ? 'none' : '';
                });
        }

        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu #removeFormControls').forEach(function (btn) {
                btn.addEventListener('input', function () {
                        removeFormControls(this.checked);
                });
        });

        function printHtmlDoc() {
                const contentToPrint = shadowRoot.querySelector('.html_doc').innerHTML;
                const printWindow = window.open('', '', 'height=600,width=800');
                printWindow.document.write('<html><head><title>הדפסת תוכן</title>');
                printWindow.document.write('</head><body >');
                printWindow.document.write(contentToPrint);
                printWindow.document.write('</body></html>');
                printWindow.document.close();
                printWindow.print();
                /*printWindow.close();*/
        }

        shadowRoot.querySelectorAll('#wrap_accessibleprint .menu #printcontent').forEach(function (btn) {
                btn.addEventListener('click', function () {
                        printHtmlDoc();
                });
        });

        shadowRoot.querySelector('#wrap_accessibleprint .close').addEventListener('click', function () {
                shadowRoot.querySelector('#accessibleprinting').click();
        });

        var styleTag = document.createElement('style');
        styleTag.id = 'accessibleprinting_styletag';
        style = `@layer accessibleprinting {
                #wrap_accessibleprint .close {
                        background-color: #f1f1f1;
                        width: 39px;
                        height: 39px;
                        border-radius: 8px 8px 8px 8px;
                        margin-inline-start: 20px;
                        margin-inline-end: 20px;
                        display: inline-block;
                        position: relative;
                        
                }
                #wrap_accessibleprint .closeimg {
                        display: block;
                        position: relative;
                        margin-inline-start: 7px;
                        margin-block-start: 7px;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        border-radius: 50%;
                        color: #f1f1f1;
                        width: 25px;
                        height: 24px;
                        text-align: center;
                        padding-block-start: 3px;
                        font-weight: bolder;
                        font-size: 16px;
                } 
                #wrap_accessibleprint .tabs {
                        font-family: Arial, sans-serif;
                        width:100%;
                }
                
                #wrap_accessibleprint .tab-buttons {
                        overflow: hidden;
                        background-color: color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        position: relative;
                        padding: 10px;
                }
                      
                #wrap_accessibleprint .tab-button {

                        font-size: 17px;
                        color:#000;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        width: 100px;
                        height: 90px;
                        background-color: #f1f1f1;
                        border-radius: 11px;
                        margin-inline-start: 20px;
                        text-align: center;
                        position: relative;
                }
                
                #wrap_accessibleprint .tab-button:focus,
                #wrap_accessibleprint .tab-button:hover {
                        background-color: color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
                        color: #f1f1f1;
                }
                      
                #wrap_accessibleprint .tab-button.active {
                        background-color: color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
                        color: #f1f1f1;
                }
                      
                #wrap_accessibleprint .tab-content {
                        display: none;
                        padding: 6px 12px;
                        border-top: none;
                        position: relative;
                        z-index: 99999999999;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        justify-content: space-around;
                        align-items: center;
                        height:105px;
                        justify-content: flex-start;
                        border-radius: 0px 0px 25px 25px;
                }
                #wrap_accessibleprint .tab-content > div{
                        
                }
                #wrap_accessibleprint .tab-content .color-selection {
                        display: flex;
                }
                      
                #wrap_accessibleprint .tab-content .color-selection div {
                        margin: 5px;
                }
                #wrap_accessibleprint .tab-content select {
                        width: 280px;
                        border-radius: 5px;
                        margin: 10px 0 0;
                        height: 35px;
                }

                #wrap_accessibleprint .tab-content .color-selection{
                        border: none;
                }
                #wrap_accessibleprint .tab-content .color-selection,
                #wrap_accessibleprint .tab-content label {
                        font-size: 18px;
                        color: #f1f1f1;
                        text-shadow: 
                                -1px -1px 0 #000,  
                                1px -1px 0 #000,
                                -1px  1px 0 #000,
                                1px  1px 0 #000;
                }
                #wrap_accessibleprint .tab-content .color-selection label {
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        border: 2px solid #000;
                        cursor: pointer;
                        margin-right: 10px;
                        text-align: center;
                        padding-block: 10px;
                        box-sizing: border-box;
                        font-size: 16px;
                }
                      
                #wrap_accessibleprint .tab-content .color-selection input[type="radio"] {
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        margin: -1px;
                        padding: 0;
                        overflow: hidden;
                        clip: rect(0, 0, 0, 0);
                        border: 0;
                }
                      
                #wrap_accessibleprint .tab-content .color-selection input[type="radio"]:checked + label {
                        border-color: #fff;
                }
                      
                      
                #wrap_accessibleprint .tab-content.active {
                        display: flex;
                }                     

                #wrap_accessibleprint{
                        position: fixed;
                        z-index: 999999999999999999999999999999999999;
                        width: 90vw;
                        height: 90vh;
                        margin:5dvh 5vw;
                        background-color: #fff;
                        box-shadow: 0px 0px 0px 999999px ${andiUA.TUAsettingFn.TUAparam.backgroundColor}aa, 0px 0px 0px 4px #fff !important;
                }
                #wrap_accessibleprint .menu{
                        height: 235px;
                        width: 100%;
                        display: flex;
                }
                #wrap_accessibleprint .html_doc{
                        vertical-align: top;
                        overflow-y: scroll;
                        height: calc(80dvh - 235px);
                        width: 100%;
                        padding-inline-start: 50px;
                        box-sizing: border-box;
                }

                #wrap_accessibleprint .html_doc * {
                        box-sizing: border-box;
                        font-size: 20px;
                }
                    
                #wrap_accessibleprint .html_doc h1,
                #wrap_accessibleprint .html_doc h2,
                #wrap_accessibleprint .html_doc h3,
                #wrap_accessibleprint .html_doc h4,
                #wrap_accessibleprint .html_doc h5,
                #wrap_accessibleprint .html_doc h6 {
                        margin: 20px 0;
                        color: #333;
                        display: block !important;
                        font-weight: normal;
                }

                #wrap_accessibleprint .html_doc h1{
                        font-size:46px;
                }
                #wrap_accessibleprint .html_doc h2{
                        font-size:36px;
                }
                #wrap_accessibleprint .html_doc h3{
                        font-size:28px;
                }

                #wrap_accessibleprint .html_doc h4,
                #wrap_accessibleprint .html_doc h5,
                #wrap_accessibleprint .html_doc h6 {
                        font-size:24px;
                }
                
                ul, ol {
                        margin-inline-start: 20px;
                        padding-inline-start: 0;
                }

                ul ul, ul ol,
                ol ul, ol ol {
                        margin-inline-start: 20px;
                        padding-inline-start: 0;
                }

                li {
                        margin-bottom: 5px;
                }

                ul ul li, ul ol li,
                ol ul li, ol ol li {
                        font-size: 0.9em;
                        color: #555;
                }

                    
                #wrap_accessibleprint .html_doc p {
                        margin: 10px 0;
                        line-height: 1.6;
                        color: #666;
                        font-size: 20px;
                }
                    
                #wrap_accessibleprint .html_doc a {
                        color: #007bff; 
                        text-decoration: none;
                        font-size: 20px;
                }
                    
                #wrap_accessibleprint .html_doc a:hover {
                        text-decoration: underline;
                }
                    
                #wrap_accessibleprint .html_doc table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                }
                    
                #wrap_accessibleprint .html_doc th, #wrap_accessibleprint .html_doc td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                        font-size: 20px;
                }
                    
                #wrap_accessibleprint .html_doc img {
                        width: 250px !important;
                        height: 250px!important;
                        object-fit: scale-down !important;
                        box-shadow: 0 0 0 1px #000 !important;
                }    

                #wrap_accessibleprint .html_doc img.small { 
                        width: 100px !important;
                        object-fit: fill !important;
                }
                #wrap_accessibleprint .html_doc img.normal { 
                        width: 300px !important;
                        height: 300px!important;
                        object-fit: scale-down !important;
                        object-fit: fill !important;
                }
                #wrap_accessibleprint .html_doc img.large { 
                        width: 500px !important;
                        object-fit: fill !important;
                }
        }`
        styleTag.innerHTML = style;
        shadowRoot.appendChild(styleTag);
}

andiUA.runaccessibleprinting = function () {
        areaObj = {
                'area030': UA('[area030]'),
                'area3150': UA('[area3150]'),
                'area5170': UA('[area5170]'),
                'area7190': UA('[area7190]'),
                'area91100': UA('[area91100]'),
        };
        let clone = [];
        if (UA('[area5170]').length == 1) {
                clone.push(UA1('[area5170]').cloneNode(true));
        } else if (UA('[area7190]').length == 1) {
                clone.push(UA1('[area7190]').cloneNode(true));
        } else if (UA('[area3150]').length == 1) {
                clone.push(UA1('[area3150]').cloneNode(true));
        } else if (!UA1('[area3150]') && !UA1('[area7190]') && !UA1('[area5170]') && UA('[area030]').length > 1) {
                UA('[area030]:not([ua_header]):not([ua_header] *):not([ua_footer]):not([ua_footer *])').forEach(function (elm) {
                        clone.push(elm.cloneNode(true));
                });
        } else {
                //console.log('אין איזור ברור')
        }
        andiUA.create_accessibleprinting_Tags(clone);
};

shadowRoot.querySelector('#accessibleprinting').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        andiUA.runaccessibleprinting();
                } else {
                        shadowRoot.querySelector('#accessibleprinting_styletag')?.remove();
                        shadowRoot.querySelector('#wrap_accessibleprint')?.remove();
                }
        }, 0);
});


andiUA.create_statmenent_Tags = function () {
        let div = document.createElement('div');
        div.id = "wrap_statmenent";
        div.innerHTML = `
        <div id="wrap_statmenent_popup">
                <div class="statmenent_header">
                        <div class="menu">
                                <div class="close" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['Close']}">
                                        <div class="closeimg">&#x2716;</div>
                                </div>   
                                <h2>${andiUA.TUAfileLang['Accessibility statement']}</h2>
                        </div>
                </div>
                <div class="statmenent_content scrollable-content">
                        <div class="statmenent_content_inner">
                        ${andiUA.TUAsettingFn.TUAaccessibilityStatement[0].TUAStatementText}
                        </div>
                </div>
        </div>
        `;
        shadowRoot.appendChild(div);

        var styleTag = document.createElement('style');
        styleTag.id = 'statmenent_styletag';
        style = `@layer statmenent {

                #wrap_statmenent_popup {
                        position: fixed;
                        z-index: 999999999999999999999999999999999999;
                        width: 90vw;
                        height: 90vh;
                        margin: 5dvh 5vw;
                        background-color: #fff;
                        box-shadow: 0px 0px 0px 999999px #000000aa, 0px 0px 0px 4px #fff !important;
                }

                #wrap_statmenent_popup .statmenent_header {
                        height: 235px;
                        width: 100%;
                        display: flex;
                        padding: 6px 12px;
                        border-top: none;
                        position: relative;
                        z-index: 99999999999;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        justify-content: space-around;
                        align-items: center;
                        height: 105px;
                        justify-content: flex-start;
                        border-radius: 0px 0px 25px 25px;
                        box-sizing: border-box;
                }
                #wrap_statmenent_popup .close {
                        background-color: #f1f1f1;
                        width: 39px;
                        height: 39px;
                        border-radius: 8px 8px 8px 8px;
                        margin-inline-start: 20px;
                        margin-inline-end: 20px;
                        display: inline-block;
                        position: relative;
                        top: 50px;
                }
                #wrap_statmenent_popup .closeimg {
                        display: block;
                        position: relative;
                        margin-inline-start: 7px;
                        margin-block-start: 7px;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        border-radius: 50%;
                        color: #f1f1f1;
                        width: 25px;
                        height: 24px;
                        text-align: center;
                        padding-block-start: 3px;
                        font-weight: bolder;
                        font-size: 15px;
                } 
                #wrap_statmenent_popup .statmenent_content{
                        overflow: overlay;
                        height: calc(90vh - 105px);
                        padding-inline: 20px;
                        padding-block-end: 30px;
                        box-sizing: border-box;
                }
                #wrap_statmenent_popup .statmenent_header h2 {
                        font-size: 35px;
                        color: #f1f1f1;
                        text-align: center;
                        width: 100%;
                        display: block;
                }
                #wrap_statmenent_popup .statmenent_content h2{
                        color: #000;
                }
                #wrap_statmenent_popup .menu{
                        width: 100%;
                }
                #wrap_statmenent_popup .statmenent_content_inner h2{
                        font-size: 26px;
                }
                #wrap_statmenent_popup .statmenent_content_inner h3{
                        font-size: 22px;
                }
                #wrap_statmenent_popup .statmenent_content_inner h4{
                        font-size: 18px;
                }
                #wrap_statmenent_popup .statmenent_content_inner li,
                #wrap_statmenent_popup .statmenent_content_inner p{
                        font-size: 16px;
                }
                ${(((andiUA.andidirection == 'rtl') ? ' #wrap_statmenent_popup *{direction: rtl;}' : ' #wrap_statmenent_popup *{direction: ltr;}'))}
        `;
        styleTag.innerHTML = style;
        shadowRoot.appendChild(styleTag);



        shadowRoot.querySelector('#wrap_statmenent_popup .close').addEventListener('click', function () {
                shadowRoot.querySelector('#statmenent').click();
        });
}

shadowRoot.querySelector('#statmenent').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (!shadowRoot.querySelector('#wrap_statmenent_popup')) {
                        andiUA.create_statmenent_Tags();
                } else {
                        shadowRoot.querySelector('#statmenent_styletag')?.remove();
                        shadowRoot.querySelector('#wrap_statmenent_popup')?.remove();
                }
        }, 0);
});

document.addEventListener('keydown', function (e) {
        if (e.key == 'F1') {
                e.preventDefault();
                shadowRoot.querySelector('#statmenent')?.click();
        }
});






//Letters Nav
andiUA.createLettersNavTags = function () {
        var styleTag = document.createElement('style');
        styleTag.id = 'lettersnav_styletag';
        style = `@layer lettersnav {
                #keyboard{
                        width: 100%;
                        position: fixed;
                        bottom: 0;
                        height: fit-content;
                        z-index:999999999999;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        display:none;
                        text-align: center;
                        container-name: keyboardContainer;
                        container-type: inline-size;
                        direction: ltr;
                        padding: 10px;
                }                
                #keyboard .key {
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        margin: 5px;
                        background-color: #f0f0f0; 
                        border-radius: 6px; 
                        box-shadow: 0 4px #9da0a4; 
                        text-align: center; 
                        line-height: 40px;
                        font-size: 20px; 
                        font-family: 'Arial', sans-serif;
                        color: #333333; 
                        user-select: none; 
                        cursor: pointer;
                        transition: background-color 0.2s, box-shadow 0.2s;
                }
                .key[aria-pressed="true"]{
                        background-color: color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} )
                }
                #keyboard .key:active {
                        box-shadow: 0 2px #9da0a4;
                        transform: translateY(2px);
                        background-color: color-mix(in lab ,white 50%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} ) !important;
                }

                #keyboard select {
                        width: 280px;
                        border-radius: 5px;
                        margin: 10px 0 0;
                        height: 39px;
                }     
                #keyboard .close {
                        background-color: #f1f1f1;
                        width: 39px;
                        height: 39px;
                        border-radius: 8px 8px 8px 8px;
                        margin-inline-start: 0px;
                        margin-inline-end: 8px;
                        display: inline-block;
                        position: relative;
                        
                }
                #keyboard .closeimg {
                        display: block;
                        position: relative;
                        margin-inline-start: 7px;
                        margin-block-start: 7px;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        border-radius: 50%;
                        color: #f1f1f1;
                        width: 25px;
                        height: 24px;
                        text-align: center;
                        padding-block-start: 3px;
                        font-weight: bolder;
                }
                #keyboard #textdiv{
                        width: 536px;
                        height: 46px;
                        border-radius: 5px;
                        background-color: #f1f1f1;
                        margin: 10px auto 5px;
                        text-align: center;
                        font-size: 25px;
                        padding: 10px 0 0;
                        box-sizing: border-box;
                }
        }`
        styleTag.innerHTML = style;
        shadowRoot.appendChild(styleTag);
        var styleTag = document.createElement('style');
        styleTag.id = 'lettersnav_body_styletag';
        style = `@layer abc {
                body{
                        padding-block-end: 270px !important;
                }
        }`;
        styleTag.innerHTML = style;
        document.querySelector('body').appendChild(styleTag);

}

andiUA.runLettersNav = function () {
        andiUA.createLettersNavTags();
        const languages = {
                English: [
                        ['up', 'down', 'H', 'L', 'I', 'T', 'F', 'B', 'G', 'K']
                ]
        };

        let div = document.createElement('div');
        div.id = "keyboard";
        shadowRoot.appendChild(div);
        let keyboardWrap = shadowRoot.getElementById('keyboard');
        let keyboardContainer = null;
        let inputField = null;
        let currentLanguage = 'English';
        let isCapsLock = false;

        function updateKeys() {
                keyboardContainer.innerHTML = '';
                languages[currentLanguage].forEach(row => {
                        row.forEach(keyValue => {
                                keyboardContainer.appendChild(createKey(keyValue));
                        });
                        keyboardContainer.appendChild(document.createElement('br'));
                });
        }

        function focusIt(elm) {
                elm.setAttribute('tabindex', 0);
                elm.focus();
                window.scrollTo(0, elm.offsetTop - 100);
        }

        let nextIndex = 0;
        function focusNext(cssSelector) {
                const elms = document.querySelectorAll(cssSelector);
                if (elms.length == 0) {
                        shadowRoot.querySelector('#textdiv').innerText = andiUA.TUAfileLang[`lettersnav no elms`];
                        return;
                }
                if (elms[nextIndex]) {
                        focusIt(elms[nextIndex])
                        if (nextIndex + 1 < elms.length) nextIndex++;
                        else nextIndex = 0;
                } else if (elms[0]) {
                        nextIndex = 0;
                        focusIt(elms[nextIndex]);
                }
        }

        function focusPrevious(cssSelector) {
                const elms = document.querySelectorAll(cssSelector);
                if (!elms) {
                        shadowRoot.querySelector('#textdiv').innerText = andiUA.TUAfileLang[`lettersnav no elms`];
                        return;
                }
                if (elms[nextIndex]) {
                        focusIt(elms[nextIndex])
                        if (nextIndex - 1 >= 0) nextIndex--;
                        else nextIndex = elms.length - 1;
                } else if (elms[elms.length - 1]) {
                        nextIndex = elms.length - 1;
                        focusIt(elms[nextIndex]);
                }
        }

        function focusUpOrDown(keyValue, cssSelector) {
                if (shadowRoot.querySelector('.keyup').getAttribute('aria-pressed') == 'true') {
                        focusPrevious(cssSelector, event)
                } else {
                        focusNext(cssSelector, event)
                }
                if (andiUA.TUAfileLang[`lettersnav ${keyValue.toLowerCase()}`]) {
                        shadowRoot.querySelector('#textdiv').innerText = andiUA.TUAfileLang[`lettersnav ${keyValue.toLowerCase()}`];
                }

        }

        function createKey(keyValue) {
                const keyElement = document.createElement('div');
                keyElement.innerHTML = keyValue.toUpperCase();
                if (keyValue == 'up') {
                        keyElement.innerHTML = '&#8593;';
                        keyElement.classList.add('keyup');
                }
                if (keyValue == 'down') {
                        keyElement.innerHTML = '&#8595;';
                        keyElement.addAttr({ 'aria-pressed': 'true' });
                        keyElement.classList.add('keydown');
                }

                keyElement.classList.add('key');
                keyElement.addAttr({ 'tabindex': 0, 'role': 'button', 'tooltip': andiUA.TUAfileLang[`lettersnav ${keyValue.toLowerCase()}`] });
                keyElement.addEventListener('click', () => {
                        switch (keyValue) {
                                case 'down':
                                        shadowRoot.querySelector('.keyup').setAttribute('aria-pressed', 'false');
                                        keyElement.setAttribute('aria-pressed', 'true');
                                        break;
                                case 'up':
                                        shadowRoot.querySelector('.keydown').setAttribute('aria-pressed', 'false');
                                        keyElement.setAttribute('aria-pressed', 'true');
                                        break;
                                default:
                                        shadowRoot.querySelector('#textdiv').innerText = andiUA.TUAfileLang[`lettersnav error`];
                                        break;
                        }
                });
                keyElement.addEventListener('focusin', (e) => {
                        shadowRoot.querySelector('#textdiv').innerText = keyElement.getAttribute('tooltip');
                });
                keyElement.addEventListener('focusout', (e) => {
                        shadowRoot.querySelector('#textdiv').innerText = '';
                });
                keyElement.addEventListener('mouseenter', (e) => {
                        shadowRoot.querySelector('#textdiv').innerText = keyElement.getAttribute('tooltip');
                });
                keyElement.addEventListener('mouseout', (e) => {
                        shadowRoot.querySelector('#textdiv').innerText = '';
                });
                keyElement.addEventListener('keydown', (e) => {
                        if (e.key == 'Enter') keyElement.click();
                })
                return keyElement;
        }
        function changeLanguage(language) {
                currentLanguage = language;
                updateKeys();
        }

        const closeBtn = document.createElement('div');
        closeBtn.addAttr({ 'class': 'close', 'role': 'button', 'tabindex': '0', 'aria-label': andiUA.TUAfileLang['Close accessibility menu'] });
        closeBtn.innerHTML = `<div class="closeimg">&#x2716;</div>`;

        closeBtn.addEventListener('click', (event) => {
                shadowRoot.querySelector('#lettersnav').click();
        });

        if (!shadowRoot.querySelector('#keyboardinner')) {
                let div = document.createElement('div');
                div.id = "keyboardinner";
                keyboardWrap.appendChild(div);
        }
        keyboardContainer = shadowRoot.getElementById('keyboardinner');
        inputField = this;
        keyboardWrap.style.display = 'block';
        changeLanguage(currentLanguage);
        keyboardContainer.prepend(closeBtn);

        let textDiv = document.createElement('div');
        textDiv.id = "textdiv";
        keyboardWrap.prepend(textDiv);

        document.addEventListener('keydown', function (event) {
                if (event.getModifierState('CapsLock')) {
                        let keyValue = event.key;
                        switch (event.key.toUpperCase()) {
                                case 'H':
                                        focusUpOrDown(keyValue, andiUA.headings)
                                        break;
                                case 'L':
                                        focusUpOrDown(keyValue, 'ol, ul, dl, [role="list"]')
                                        break;
                                case 'I':
                                        focusUpOrDown(keyValue, 'li, dt, dd, [role="listitem"]')
                                        break;
                                case 'T':
                                        focusUpOrDown(keyValue, 'table, [role="table"]')
                                        break;
                                case 'F':
                                        focusUpOrDown(keyValue, `form, ${andiUA.inputElm}, ${andiUA.buttonElm}`)
                                        break;
                                case 'B':
                                        focusUpOrDown(keyValue, andiUA.buttonElm)
                                        break;
                                case 'G':
                                        focusUpOrDown(keyValue, andiUA.imgsTags)
                                        break;
                                case 'K':
                                        focusUpOrDown(keyValue, andiUA.linkElm)
                                        break;
                                default:
                                        shadowRoot.querySelector('#textdiv').innerText = andiUA.TUAfileLang[`lettersnav no elms`];
                                        break;
                        }
                }
        });
}

shadowRoot.querySelector('#lettersnav').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        shadowRoot.querySelector('#keyboardfocus[aria-pressed="false"]')?.click();
                        let string = `<h2>${andiUA.TUAfileLang['lettersnav info heading']}</h2><p>${andiUA.TUAfileLang['lettersnav info text']}</p>`;
                        andiUA.createInnerPopup(string);
                        andiUA.runLettersNav();
                        localStorage.setItem('lettersnav', 'true');
                } else {
                        localStorage.removeItem('lettersnav');
                        shadowRoot.querySelector('#keyboard')?.remove();
                        shadowRoot.querySelector('#lettersnav_styletag')?.remove();
                        document.querySelector('#lettersnav_body_styletag')?.remove();
                }
        }, 0);
});

//virtualkeyboard
andiUA.createvirtualkeyboardTags = function () {

        var styleTag = document.createElement('style');
        styleTag.id = 'virtualkeyboard_styletag';
        style = `@layer virtualkeyboard {
                #keyboard{
                        width: 100%;
                        position: fixed;
                        bottom: 0;
                        height: fit-content;
                        z-index:999999999999;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        display:none;
                        text-align: center;
                        container-name: keyboardContainer;
                        container-type: inline-size;
                        direction: ltr;
                }
                
                #keyboard .key {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        margin: 5px;
                        padding: 10px;
                        background-color: #f0f0f0;
                        text-align: center;
                        line-height: 20px;
                        cursor: pointer;
                        user-select: none;
                        font-size: 16px; 
                }
                      
                #keyboard .key.special {
                        width: auto;
                        padding-left: 20px;
                        padding-right: 20px;
                }
                      
                #keyboard .key.spacebar {
                        width: 800px 
                }
                #keyboard .key.capslock,  
                #keyboard .key.shift,  
                #keyboard .key.enter {
                        width: 60px; 
                }
                #keyboard select {
                        width: 280px;
                        border-radius: 5px;
                        margin: 10px 0 0;
                        height: 39px;
                }     
                #keyboard .close {
                        background-color: #f1f1f1;
                        width: 39px;
                        height: 39px;
                        border-radius: 8px 8px 8px 8px;
                        margin-inline-start: 20px;
                        margin-inline-end: 20px;
                        display: inline-block;
                        position: relative;
                        
                }
                #keyboard .closeimg {
                        display: block;
                        position: relative;
                        margin-inline-start: 7px;
                        margin-block-start: 7px;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        border-radius: 50%;
                        color: #f1f1f1;
                        width: 25px;
                        height: 24px;
                        text-align: center;
                        padding-block-start: 3px;
                        font-weight: bolder;
                        font-size: 14px;
                }   

                
               
                @media only screen and (min-width: 701px) and (max-width: 845px) {
                        #keyboard .key {
                                width: 20px;
                                height: 20px;
                        }
                        #keyboard .key.capslock,  
                        #keyboard .key.shift,  
                        #keyboard .key.enter {
                                width: 45px; 
                        }
                }
        }`
        styleTag.innerHTML = style;
        shadowRoot.appendChild(styleTag);

        var styleTag = document.createElement('style');
        styleTag.id = 'virtualkeyboard_body_styletag';
        style = `@layer abc {
                body{
                        padding-block-end: 370px !important;
                }
        }`;
        styleTag.innerHTML = style;
        document.querySelector('body').appendChild(styleTag);

}

andiUA.runVirtualkeyboard = function () {
        andiUA.createvirtualkeyboardTags();
        const languages = {
                English: [
                        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
                        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
                        ['Space']
                ],
                Hebrew: [
                        [';', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', '/', '\'', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', '[', ']', '\\'],
                        ['CapsLock', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', ',', 'Enter'],
                        ['Shift', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', 'Shift'],
                        ['Space']
                ],
                Arabic: [
                        ['ذ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', '\\'],
                        ['CapsLock', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'Enter'],
                        ['Shift', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ', 'Shift'],
                        ['Space']
                ],
                Russian: [
                        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
                        ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
                        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift'],
                        ['Space']
                ],
                Spanish: [
                        ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '¡', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '`', '+', '\\'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', '´', 'ç', 'Enter'],
                        ['Shift', '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift'],
                        ['Space']
                ],
                French: [
                        ['²', '&', 'é', '"', '\'', '(', '-', 'è', '_', 'ç', 'à', ')', '=', 'Backspace'],
                        ['Tab', 'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '^', '$', '*'],
                        ['CapsLock', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'ù', 'µ', 'Enter'],
                        ['Shift', '<', 'w', 'x', 'c', 'v', 'b', 'n', ',', ';', ':', '!', 'Shift'],
                        ['Space']
                ],
                Italian: [
                        ['\\', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', 'ì', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'è', '+', 'ù'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ò', 'à', 'Enter'],
                        ['Shift', '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift'],
                        ['Space']
                ],
                Romanian: [
                        ['ă', 'â', 'î', 'ș', 'ț', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
                        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
                        ['Space']
                ],
                Portuguese: [
                        ['\\', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '«', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '+', '´', '`'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', 'ª', 'Enter'],
                        ['Shift', '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift'],
                        ['Space']
                ],
                German: [
                        ['^', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'ß', '´', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ü', '+', '#'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Enter'],
                        ['Shift', '<', 'y', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift'],
                        ['Space']
                ],
                Dutch: [
                        ['@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '°', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '¨', '*', '\\'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '+', '´', 'Enter'],
                        ['Shift', '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift'],
                        ['Space']
                ],
                Czech: [
                        [';', '+', 'ě', 'š', 'č', 'ř', 'ž', 'ý', 'á', 'í', 'é', '=', 'Backspace'],
                        ['Tab', 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ú', 'ů', '\\'],
                        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ů', 'Enter'],
                        ['Shift', '|', 'y', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift'],
                        ['Space']
                ],
                Greek: [
                        [';', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', 'ς', 'ε', 'ρ', 'τ', 'υ', 'θ', 'ι', 'ο', 'π', '[', ']', '\\'],
                        ['CapsLock', 'α', 'σ', 'δ', 'φ', 'γ', 'η', 'ξ', 'κ', 'λ', ';', '\'', 'Enter'],
                        ['Shift', '<', 'ζ', 'χ', 'ψ', 'ω', 'β', 'ν', 'μ', ',', '.', '/', 'Shift'],
                        ['Space']
                ],


        };
        let div = document.createElement('div');
        div.id = "keyboard";
        shadowRoot.appendChild(div);
        let keyboardWrap = shadowRoot.getElementById('keyboard');
        let keyboardContainer = null;
        let inputField = null;
        let currentLanguage = 'English';
        let isCapsLock = false;

        function toggleCapsLock() {
                isCapsLock = !isCapsLock;
                updateKeys();
        }

        function updateKeys() {
                keyboardContainer.innerHTML = '';
                languages[currentLanguage].forEach(row => {
                        row.forEach(keyValue => {
                                keyboardContainer.appendChild(createKey(keyValue));
                        });
                        keyboardContainer.appendChild(document.createElement('br'));
                });
        }

        function createKey(keyValue) {
                const keyElement = document.createElement('div');
                keyElement.textContent = isCapsLock ? keyValue.toUpperCase() : keyValue.toLowerCase();
                keyElement.classList.add('key');
                if (keyValue == 'Space') {
                        keyElement.classList.add('spacebar')
                }
                if (keyValue == 'Enter') {
                        keyElement.classList.add('enter')
                }
                if (keyValue == 'CapsLock') {
                        keyElement.classList.add('capslock')

                }
                if (keyValue == 'Shift') {
                        keyElement.classList.add('shift')
                }
                keyElement.addEventListener('click', () => {
                        switch (keyValue) {
                                case 'CapsLock':
                                        toggleCapsLock();
                                        break;
                                case 'Backspace':
                                        inputField.value = inputField.value.slice(0, -1);
                                        break;
                                case 'Enter':
                                        inputField.value += '\n';
                                        break;
                                case 'Space':
                                        inputField.value += ' ';
                                        break;
                                case 'Tab':
                                        inputField.value += '\t';
                                        break;
                                default:
                                        inputField.value += isCapsLock ? keyValue.toUpperCase() : keyValue.toLowerCase();
                                        break;
                        }
                });

                return keyElement;
        }

        function changeLanguage(language) {
                currentLanguage = language;
                updateKeys();
        }

        const closeBtn = document.createElement('div');
        closeBtn.addAttr({ 'class': 'close', 'role': 'button', 'tabindex': '0', 'aria-label': andiUA.TUAfileLang['Close accessibility menu'] });
        closeBtn.innerHTML = `<div class="closeimg">&#x2716;</div>`;

        const languageSelector = document.createElement('select');
        languageSelector.setAttribute('aria-label', andiUA.TUAfileLang['Choose language'])
        Object.keys(languages).forEach(language => {
                const option = document.createElement('option');
                option.value = language;
                option.textContent = language;
                languageSelector.appendChild(option);
        });

        languageSelector.addEventListener('change', (event) => {
                changeLanguage(event.target.value);
        });

        closeBtn.addEventListener('click', (event) => {
                keyboardWrap.style.display = 'none';
        });

        keyboardWrap.prepend(languageSelector);
        keyboardWrap.prepend(closeBtn);
        document.querySelectorAll('textarea , [type="number"],[type="tel"],[type="text"],[type="url"],[type="search"],[type="password"],[type="email"]').forEach(function (input) {
                input.addEventListener('focusin', function () {
                        if (!shadowRoot.querySelector('#keyboardinner')) {
                                let div = document.createElement('div');
                                div.id = "keyboardinner";
                                keyboardWrap.appendChild(div);
                        }
                        keyboardContainer = shadowRoot.getElementById('keyboardinner');
                        inputField = this;
                        keyboardWrap.style.display = 'block';
                        changeLanguage(currentLanguage);
                });
                input.addEventListener('focusout', function () { });
        })



}

andiUA.createInnerPopup = function (string) {
        shadowRoot.querySelector('.wrap-andi-menu').appendHtml(`
                <div class="wrap_popup" tabindex="0">
                        <div class="inner_popup">
                                <div class="close_popup">&#x2716;</div>
                                <div class="text scrollable-content">
                                        <img loading="lazy" class="noteimg" alt="" src="${andiUA.TUAjsPath}/imgs/note.png" />
                                        <div class="innerText">${string}</div>                               
                                </div>
                        </div>
                </div>
        `);
        shadowRoot.querySelector('.wrap-andi-menu .wrap_popup').focus();
        shadowRoot.querySelector('.wrap_popup .close_popup').addEventListener('click', function () {
                shadowRoot.querySelector('.wrap_popup')?.remove();
        });

}

shadowRoot.querySelector('#virtualkeyboard').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        let string = `<h2>${andiUA.TUAfileLang['Virtual keyboard info heading']}</h2><p>${andiUA.TUAfileLang['Virtual keyboard info text']}</p>`;
                        andiUA.createInnerPopup(string);
                        andiUA.runVirtualkeyboard();
                        localStorage.setItem('virtualkeyboard', 'true');
                } else {
                        localStorage.removeItem('virtualkeyboard');
                        shadowRoot.querySelector('#keyboard')?.remove();
                        shadowRoot.querySelector('#virtualkeyboard_styletag')?.remove();
                        document.querySelector('#virtualkeyboard_body_styletag')?.remove();
                }
        }, 0);
});


andiUA.linepacingLevel = 0;
andiUA.savelineSpacingLevel = function () {
        localStorage.setItem('linepacinglevel', andiUA.linepacingLevel)
}

andiUA.linespacingSmoller = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.linepacingLevel > 0) {
                andiUA.linepacingLevel--;
                UA('[lineheight]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('lineheight'));
                                if (isNaN(size)) {
                                        size = 0;
                                }
                                let correntSize = parseInt(elm.getCss('line-height')) - 3;
                                if (andiUA.linepacingLevel == 0) elm.style.lineHeight = (size) + 'px';
                                else elm.style.lineHeight = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.linepacingLevel == 2) ? '140%' : (andiUA.linepacingLevel == 1) ? '120%' : '100%';
                if (btn.parentElement.querySelector('.sizetext').innerText == '100%') shadowRoot.querySelector('#linespacing .plus').setAttribute('aria-pressed', false);
        }
        andiUA.savelineSpacingLevel();
};

andiUA.linespacingeBigger = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.linepacingLevel < 3) {
                andiUA.linepacingLevel++;
                UA('[lineheight]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('lineheight'));
                                if (isNaN(size)) {
                                        size = 0;
                                }
                                let correntSize = parseInt(elm.getCss('line-height')) + 3;
                                if (andiUA.linepacingLevel == 1) elm.style.lineHeight = (size + 3) + 'px';
                                else elm.style.lineHeight = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.linepacingLevel == 1) ? '120%' : (andiUA.linepacingLevel == 2) ? '140%' : '160%';
                btn.setAttribute('aria-pressed', true);
        }
        andiUA.savelineSpacingLevel();
};

shadowRoot.querySelector('#linespacing .plus').addEventListener('click', function () {
        andiUA.linespacingeBigger(this);
});
shadowRoot.querySelector('#linespacing .minus').addEventListener('click', function () {
        andiUA.linespacingSmoller(this);
});

if (localStorage.getItem('linepacinglevel')) {
        let temp = parseInt(localStorage.getItem('linepacinglevel'));
        if (temp > 0) {
                for (let index = 0; index < temp; index++) {
                        andiUA.linespacingeBigger(shadowRoot.querySelector('#linespacing .plus'));
                }
                andiUA.linepacingLevel = temp;
        }
}

andiUA.letterpacingLevel = 0;
andiUA.saveletterSpacingLevel = function () {
        localStorage.setItem('letterpacinglevel', andiUA.letterpacingLevel)
}

andiUA.letterspacingSmoller = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.letterpacingLevel > 0) {
                andiUA.letterpacingLevel--;
                UA('[letterspacing]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('letterspacing'));
                                if (isNaN(size)) {
                                        size = 0;
                                }
                                let correntSize = parseInt(elm.getCss('letter-spacing')) - 2;
                                if (andiUA.letterpacingLevel == 0) elm.style.letterSpacing = (size) + 'px';
                                else elm.style.letterSpacing = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.letterpacingLevel == 2) ? '140%' : (andiUA.letterpacingLevel == 1) ? '120%' : '100%';
                if (btn.parentElement.querySelector('.sizetext').innerText == '100%') shadowRoot.querySelector('#letterspacing .plus').setAttribute('aria-pressed', false);
        }
        andiUA.saveletterSpacingLevel();
};

andiUA.letterspacingeBigger = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.letterpacingLevel < 3) {
                andiUA.letterpacingLevel++;
                UA('[letterspacing]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('letterspacing'));
                                if (isNaN(size)) {
                                        size = 0;
                                }
                                let correntSize = parseInt(elm.getCss('letter-spacing')) + 2;
                                if (andiUA.letterpacingLevel == 1) elm.style.letterSpacing = (size + 2) + 'px';
                                else elm.style.letterSpacing = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.letterpacingLevel == 1) ? '120%' : (andiUA.letterpacingLevel == 2) ? '140%' : '160%';
                btn.setAttribute('aria-pressed', true);
        }
        andiUA.saveletterSpacingLevel();
};

shadowRoot.querySelector('#letterspacing .plus').addEventListener('click', function () {
        andiUA.letterspacingeBigger(this);
});
shadowRoot.querySelector('#letterspacing .minus').addEventListener('click', function () {
        andiUA.letterspacingSmoller(this);
});

if (localStorage.getItem('letterpacinglevel')) {
        let temp = parseInt(localStorage.getItem('letterpacinglevel'));
        if (temp > 0) {
                for (let index = 0; index < temp; index++) {
                        andiUA.letterspacingeBigger(shadowRoot.querySelector('#letterspacing .plus'));
                }
                andiUA.letterpacingLevel = temp;
        }
}

andiUA.wordspacingLevel = 0;
andiUA.saveWordSpacingLevel = function () {
        localStorage.setItem('wordspacinglevel', andiUA.wordspacingLevel)
}

andiUA.wordspacingSmoller = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.wordspacingLevel > 0) {
                andiUA.wordspacingLevel--;
                UA('[wordspacing]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('wordspacing'));
                                if (isNaN(size)) {
                                        size = 0;
                                }
                                let correntSize = parseInt(elm.getCss('word-spacing')) - 3;
                                if (andiUA.wordspacingLevel == 0) elm.style.wordSpacing = (size) + 'px';
                                else elm.style.wordSpacing = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.wordspacingLevel == 2) ? '140%' : (andiUA.wordspacingLevel == 1) ? '120%' : '100%';
                if (btn.parentElement.querySelector('.sizetext').innerText == '100%') shadowRoot.querySelector('#wordspacing .plus').setAttribute('aria-pressed', false);
        }
        andiUA.saveWordSpacingLevel();
};

andiUA.wordspacingeBigger = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.wordspacingLevel < 3) {
                andiUA.wordspacingLevel++;
                UA('[wordspacing]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('wordspacing'));
                                if (isNaN(size)) {
                                        size = 0;
                                }
                                let correntSize = parseInt(elm.getCss('word-spacing')) + 3;
                                if (andiUA.wordspacingLevel == 1) elm.style.wordSpacing = (size + 3) + 'px';
                                else elm.style.wordSpacing = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.wordspacingLevel == 1) ? '120%' : (andiUA.wordspacingLevel == 2) ? '140%' : '160%';
                btn.setAttribute('aria-pressed', true);
        }
        andiUA.saveWordSpacingLevel();
};

shadowRoot.querySelector('#wordspacing .plus').addEventListener('click', function () {
        andiUA.wordspacingeBigger(this);
});
shadowRoot.querySelector('#wordspacing .minus').addEventListener('click', function () {
        andiUA.wordspacingSmoller(this);
});

if (localStorage.getItem('wordspacinglevel')) {
        let temp = parseInt(localStorage.getItem('wordspacinglevel'));
        if (temp > 0) {
                for (let index = 0; index < temp; index++) {
                        andiUA.wordspacingeBigger(shadowRoot.querySelector('#wordspacing .plus'));
                }
                andiUA.wordspacingLevel = temp;
        }
}

async function fetchWikipediaArticle(languageCode, searchValue) {
        const endpoint = `https://${languageCode}.wikipedia.org/w/api.php`;
        const params = new URLSearchParams({
                action: "query",
                format: "json",
                prop: "extracts",
                titles: searchValue,
                redirects: "true",
                exintro: "true",
                explaintext: "true",
                origin: "*"
        });

        try {
                const response = await fetch(`${endpoint}?${params.toString()}`, {
                        method: "GET"
                });
                if (!response.ok) {
                        throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                handleData(data, languageCode);
                return data;
        } catch (error) {
                console.error("Error fetching data: ", error);
        }
}

function handleData(data, languageCode) {
        const pageId = Object.keys(data.query.pages)[0];
        shadowRoot.querySelector('#wikipediaSearch .loadingwiki').style.display = "none";
        shadowRoot.querySelector('#wikipediaSearch .loadingwikiimg').style.display = "none";
        shadowRoot.querySelector('#wikipediaSearch .innerresult').focus();
        if (pageId == -1) {
                shadowRoot.querySelector('#wikipediaSearch .result .innerparagraph').innerHTML = `${andiUA.TUAfileLang['We didnt find the term in wikipedia']}`;
        } else {
                const extract = data.query.pages[pageId].extract;
                const pageUrl = `https://${languageCode}.wikipedia.org/?curid=${pageId}`;
                shadowRoot.querySelector('#wikipediaSearch .result .innerparagraph').innerHTML = `${extract}`;
                shadowRoot.querySelector('#wikipediaSearch .result .innerlink').innerHTML = `<a href="${pageUrl}" target="_blank">${andiUA.TUAfileLang['Read more about it in wikipedia']}</a>`;
        }


}

andiUA.runWikipediaSearchBox = function () {
        let wikipediaSearchTag = document.createElement('div');
        wikipediaSearchTag.id = "wikipediaSearch";
        wikipediaSearchTag.innerHTML = `
                <div class="close" role="button" tabindex="0" aria-label="${andiUA.TUAfileLang['Close wikipedia Search']}">
                        <div class="closeimg">&#x2716;</div>
                </div>
                <h2 tabindex="0">${andiUA.TUAfileLang['Search in wikipedia']}</h2>
                <div class="wrapuainput">
                        <label for="link_lang1">${andiUA.TUAfileLang['Choose language']}</label>
                        <select id="link_lang1" name="link_lang">
                                <option ${andiUA.lang == "en" ? 'selected' : ''} value="en">English</option>
                                <option ${andiUA.lang == "ar" ? 'selected' : ''} value="ar">\u0639\u0631\u0628\u064a\u0647</option>
                                <option ${andiUA.lang == "it" ? 'selected' : ''} value="it">Italian</option>
                                <option ${andiUA.lang == "es" ? 'selected' : ''} value="es">Spanish</option><option value="pl">Polish</option>
                                <option ${andiUA.lang == "ru" ? 'selected' : ''} value="ru">\u0440\u0443\u0441\u0441\u043a\u0438\u0439</option>
                                <option ${andiUA.lang == "sv" ? 'selected' : ''} value="sv">Swedish</option>
                                <option ${andiUA.lang == "zh" ? 'selected' : ''} value="zh">Chinese</option>
                                <option ${andiUA.lang == "he" ? 'selected' : ''} value="he">\u05e2\u05d1\u05e8\u05d9\u05ea</option>
                                <option ${andiUA.lang == "de" ? 'selected' : ''} value="de">Deutsche</option>
                                <option ${andiUA.lang == "fr" ? 'selected' : ''} value="fr">fran\u00e7ais</option>
                                <option ${andiUA.lang == "ja" ? 'selected' : ''} value="ja">Japanese</option>
                        </select>
                </div>
                <div class="wrapuainput">
                        <input aria-label="${andiUA.TUAfileLang['Search for erms and Expressions']}" placeholder="${andiUA.TUAfileLang['Search for erms and Expressions']}" type="search">
                        <button>${andiUA.TUAfileLang['Search']}</button>
                </div>
                <div class="result">
                        <div class="innerresult" tabindex="0">
                                <div class="loadingwiki">${andiUA.TUAfileLang['Loading info']}</div>
                                <img loading="lazy" class="loadingwikiimg" src="${andiUA.TUAjsPath}/imgs/load2.gif" alt="${andiUA.TUAfileLang['Loading info']}"/>
                                <div class="innerparagraph scrollable-content"></div>
                                <hr/>
                                <div class="innerlink"></div>
                        </div>
                </div>
        `;
        shadowRoot.appendChild(wikipediaSearchTag);
        var wikipediaSearchStyleTag = document.createElement('style');
        wikipediaSearchStyleTag.id = 'wikipedia_styletag';
        style = `@layer wikipedia {
                #wikipediaSearch{
                        position: fixed;
                        top: 0;
                        ${(andiUA.andidirection == 'rtl') ? 'left' : 'right'}: 0;
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        z-index: 99999999999999999999999999;
                        width: 320px;
                        border-radius: 0px 0px 25px 25px;
                        
                }
                #wikipediaSearch * {
                        direction: ${(andiUA.andidirection)}
                }
                #wikipediaSearch h2{
                        color:#fff;
                        font-size: 20px;       
                        display: block;
                        text-align: center;
                }
                [for="link_lang1"] {
                        color:#fff;
                        font-size: 16px;
                }
                #link_lang1 {
                        width: 280px;
                        border-radius: 5px;
                        margin: 10px 0 0;
                        height: 35px;
                }
                #wikipediaSearch  .wrapuainput{
                        display: flex;
                        align-items: center;
                        align-content: center;
                        flex-direction: column;
                        
                }                
                #wikipediaSearch  .wrapuainput input{
                        width: 280px;
                        border-radius: 5px;
                        margin: 10px 0;
                        height: 35px;
                }
                #wikipediaSearch  .wrapuainput button{
                        width: 280px;
                        height: 35px;
                        border-radius: 5px;
                        display: inline-block;
                        margin-inline-start: 0;
                        margin-block-start: 0;
                        box-shadow: hsla(252, 46%, 28%, 0.11) 0px 0px 6px;
                }
                #wikipediaSearch{
                        padding: 10px 0 30px;
                }
                #wikipediaSearch .result{
                        display: none;
                        
                }
                #wikipediaSearch .result .innerresult{
                        background-color: color-mix(in lab ,white 90%   ,${andiUA.TUAsettingFn.TUAparam.backgroundColor} );
                        margin: 20px 25px;
                        text-align: center;
                        height: 225px;
                        border-radius: 5px;
                        padding:20px;
                }
                #wikipediaSearch .innerparagraph {
                        color: #000;
                        overflow: scroll;
                        height: 200px;
                }
                #wikipediaSearch .innerlink {
                        color: #000;
                        padding: 3px 0;
                }
                #wikipediaSearch .innerlink a{
                        color: #fff;
                        text-decoration: underline;
                }
                #wikipediaSearch .loadingwikiimg{
                        width: 100px !important;
                        height: 100px !important;
                }
                #wikipediaSearch .close {
                        background-color: #f1f1f1;
                        width: 39px;
                        height: 39px;
                        border-radius: 8px 8px 8px 8px;
                        margin-inline-start: 20px;
                        margin-inline-end: 20px;
                        display: inline-block;
                        position: relative;
                }
                #wikipediaSearch .close .closeimg {
                        display: block;
                        position: relative;
                        margin-inline-start: 7px;
                        margin-block-start: 7px;
 
                        background-color: ${andiUA.TUAsettingFn.TUAparam.backgroundColor};
                        
                        border-radius: 50%;
                        color: #f1f1f1;
                        width: 25px;
                        height: 24px;
                        text-align: center;
                        padding-block-start: 3px;
                        font-weight: bolder;
                        font-size: 16px;
                }
        }`
        wikipediaSearchStyleTag.innerHTML = style;
        shadowRoot.appendChild(wikipediaSearchStyleTag);

        shadowRoot.querySelector('#wikipediaSearch .wrapuainput button').addEventListener('click', function () {
                if (shadowRoot.querySelector('#wikipediaSearch input[type="search"]').value == '') {
                        alert(`${andiUA.TUAfileLang['You must enter Terms or Expressions to search']}`);
                        shadowRoot.querySelector('#wikipediaSearch input[type="search"]').focus();
                        return;
                }
                shadowRoot.querySelector('#wikipediaSearch .result').style.display = "block";
                fetchWikipediaArticle(shadowRoot.querySelector('#wikipediaSearch .wrapuainput select').value, shadowRoot.querySelector('#wikipediaSearch .wrapuainput input').value);
        });

        shadowRoot.querySelector('#wikipediaSearch .close').addEventListener('click', function () {
                shadowRoot.querySelector('#wikipedia[aria-pressed="true"]')?.click();
                shadowRoot.querySelector('#wikipediaSearch')?.remove();
                shadowRoot.querySelector('#wikipedia_styletag')?.click();
                shadowRoot.querySelector('#wikipedia').focus();
        });

        shadowRoot.querySelector('#wikipediaSearch input[type="search"]').addEventListener('keydown', function (e) {
                if (e.key == 'Enter') shadowRoot.querySelector('#wikipediaSearch input[type="search"] + button')?.click();
        });
        shadowRoot.querySelectorAll('#wikipediaSearch [role="button"]').forEach(function (elm, index) {
                elm.addEventListener('keydown', function (e) {
                        if (e.key == 'Enter') this.click();
                });
        });

};

shadowRoot.querySelector('#wikipedia').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        andiUA.runWikipediaSearchBox();
                        localStorage.setItem('wikipedia', 'true');
                } else {
                        localStorage.removeItem('wikipedia');
                        shadowRoot.querySelector('#wikipediaSearch')?.remove();
                        shadowRoot.querySelector('#wikipedia_styletag')?.click();
                }
        }, 0);
});

andiUA.createfocuscontentareaTags = function () {
        let focuscontentareaTag = document.createElement('div');
        focuscontentareaTag.id = "focusonareatop";
        shadowRoot.appendChild(focuscontentareaTag);

        focuscontentareaTag = document.createElement('div');
        focuscontentareaTag.id = "focusonareabottom";
        shadowRoot.appendChild(focuscontentareaTag);

        var styleTag = document.createElement('style');
        styleTag.id = 'focuscontentarea_styletag';
        style = `@layer focuscontentarea {
                #focusonareatop{
                        width:100%;
                        top:0;
                        left:0;
                        height:0;
                        background-color: #00000099;
                        position: fixed;
                        z-index: 99999999999999;
                }
                #focusonareabottom{
                        width:100%;
                        bottom:0;
                        left:0;
                        height:0;
                        background-color: #00000099;
                        position: fixed;
                        z-index: 99999999999999;
                }
                
        }`
        styleTag.innerHTML = style;
        shadowRoot.appendChild(styleTag);
}


function handleMouseMove(mouseEvent) {
        var winH = window.innerHeight;
        shadowRoot.querySelector("#focusonareatop").style.display = "block";
        shadowRoot.querySelector("#focusonareabottom").style.display = "block";
        let gap = 350;
        var xpos = mouseEvent.screenX;
        var ypos = mouseEvent.screenY;
        var hT = ypos - gap <= 1 ? 0 : ypos - gap;
        var hB = winH - ypos <= 1 ? 0 : ypos - gap <= 1 ? winH - gap : winH - ypos;
        shadowRoot.querySelector("#focusonareatop").style.height = hT + "px";
        shadowRoot.querySelector("#focusonareabottom").style.height = hB + "px";
}
andiUA.runFocuscontentarea = function () {
        andiUA.createfocuscontentareaTags();

        document.addEventListener("mousemove", handleMouseMove);
}

shadowRoot.querySelector('#focuscontentarea').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        andiUA.runFocuscontentarea();
                        localStorage.setItem('focuscontentarea', 'true');
                } else {
                        localStorage.removeItem('focuscontentarea');
                        shadowRoot.querySelector('#focuscontentarea_styletag')?.remove();
                        shadowRoot.querySelector('#focusonareatop')?.remove();
                        shadowRoot.querySelector('#focusonareabottom')?.remove();
                        document.removeEventListener("mousemove", handleMouseMove);
                }
        }, 0);
});

andiUA.createMagnifaerTags = function () {
        var magnifaerTag = document.createElement('div');
        magnifaerTag.id = "magnifaerTagTextWrap";
        magnifaerTag.innerHTML = '<div></div>';
        shadowRoot.appendChild(magnifaerTag);

        var styleTag = document.createElement('style');
        styleTag.id = 'magnifaert_styletag';
        style = `@layer magnifaer {
                body{
                        padding-bottom: 120px !important;
                }
                #magnifaerTagTextWrap {
                        direction:${andiUA.andidirection};
                        position: fixed;
                        height: 100px;
                        bottom: 0;
                        width: 100%;
                        padding: 30px 0;
                        background-color: #000;
                        color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        overflow-y: hidden;
                        z-index: 9999999999999999999999999999999999999;
                }
                #magnifaerTagTextWrap div {
                        position: absolute;
                        width: 60%;
                        
                }
                
                .uarunscrollanimation{
                        animation: scroll 15s linear 1; 
                }
                @keyframes scroll {
                        0% {
                                top: 20px; 
                        }
                        100% {
                                top: -100%;
                        }
                }
        }`
        styleTag.innerHTML = style;
        shadowRoot.appendChild(styleTag);
}

function addTextToMagnifaer(textElm){
        if( shadowRoot.querySelector('#magnifaerTagTextWrap div')){
                shadowRoot.querySelector('.uarunscrollanimation')?.tremoveClass('uarunscrollanimation');
                shadowRoot.querySelector('#magnifaerTagTextWrap div').innerText = textElm.target.innerText;
                shadowRoot.querySelector('#magnifaerTagTextWrap div').taddClass('uarunscrollanimation');    
        }
        
}
andiUA.runMagnifaer = function () {
        andiUA.createMagnifaerTags();
        UA('[havetext]').forEach(function (textElm) {
                textElm.addEventListener("mouseenter", addTextToMagnifaer.bind(textElm));
        });
}

shadowRoot.querySelector('#magnifaer').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        
                        andiUA.runMagnifaer();
                        localStorage.setItem('magnifaer', 'true');
                } else {
                        UA('[havetext]').forEach(function (textElm) {
                                textElm.removeEventListener("mouseenter", addTextToMagnifaer.bind(textElm));
                        });
                        localStorage.removeItem('magnifaer');
                        shadowRoot.querySelector('#magnifaert_styletag')?.remove();
                        shadowRoot.querySelector('#magnifaerTagTextWrap')?.remove();
                }
        }, 0);

});










shadowRoot.querySelector('#darkcontrast').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        resetCustomColors()
                        UA('body *').forEach(function(elm){
                                let computedStyle = window.getComputedStyle(elm, null);
                                var pointerEvents = computedStyle.pointerEvents;
                                if (pointerEvents === 'none') {
                                        elm.setAttribute('pointerEvents','true');
                                }
                        });

                        //pointer-events
                        console.log(123)
                        let colorException = '';
                        if (andiUA.TUAsettingFn.TUATUABGcolorException != '') {
                                if(andiUA.TUAsettingFn.TUATUABGcolorException.indexOf(',') == -1){
                                        colorException = `:not(${andiUA.TUAsettingFn.TUATUABGcolorException})`;   
                                } else {
                                        let colorExceptionArr = andiUA.TUAsettingFn.TUATUABGcolorException.split(',')
                                        for (let index = 0; index < colorExceptionArr.length; index++) {
                                                const css = colorExceptionArr[index];
                                                colorException += `:not(${css})`;   
                                                
                                        }
                                }
                                
                        }
                        let Hselectors = `${andiUA.linkElm},${andiUA.buttonElm}`;
                        let selector = `*[havetext]:not(${Hselectors}):not(${andiUA.headings})`;
                        let styleTag = document.createElement('style');
                        styleTag.id = 'darkcontrast_styletag';
                        
                        style = `
                        @layer readablefont {
                                ${selector} {
                                        color: #f1f1f1 !important;
                                }
                                ${andiUA.headings}{
                                        color: Green !important;
                                }
                                ${Hselectors} {
                                        color: #FFD700 !important;
                                }
                                ${andiUA.linkElm},${andiUA.buttonElm} {
                                        box-shadow: 0 0 0 2px #f1f1f1, 0 0 0 2px #FFD700 !important;
                                }     
                                body *:not([havetext]):not([pointerEvents]) {
                                        background: #000000 !important;
                                }
                                ${andiUA.inputElm}{
                                        color: #f1f1f1 !important;
                                        box-shadow: 0 0 0 2px #f1f1f1, 0 0 0 2px #FFD700 !important;
                                }
                        }`;

                        

                        styleTag.innerHTML = style;
                        document.querySelector('body').appendChild(styleTag);
                        localStorage.setItem('darkcontrast', 'true');
                } else {
                        localStorage.removeItem('darkcontrast');
                        document.querySelector('#darkcontrast_styletag')?.remove();
                }
        }, 0);

});







shadowRoot.querySelector('#readablefont').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        shadowRoot.querySelector('#alignleft[aria-pressed="true"]')?.click();
                        var styleTag = document.createElement('style');
                        styleTag.id = 'readablefont_styletag';
                        style = `@layer readablefont {
                                body *:not(#andimenu){
                                        font-family: arial ! important;
                                }
                        }`
                        styleTag.innerHTML = style;
                        document.querySelector('html').appendChild(styleTag);
                        localStorage.setItem('readablefont', 'true');
                } else {
                        localStorage.removeItem('readablefont');
                        document.querySelector('#readablefont_styletag')?.remove();
                }
        }, 0);

});

shadowRoot.querySelector('#alignright').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        shadowRoot.querySelector('#alignleft[aria-pressed="true"]')?.click();
                        var styleTag = document.createElement('style');
                        styleTag.id = 'alignright_styletag';
                        style = `@layer alignright {
                                body *:not(#andimenu){
                                        text-align: right ! important;
                                }
                        }`
                        styleTag.innerHTML = style;
                        document.querySelector('html').appendChild(styleTag);
                        localStorage.setItem('alignright', 'true');
                } else {
                        localStorage.removeItem('alignright');
                        document.querySelector('#alignright_styletag')?.remove();
                }
        }, 0);

});

shadowRoot.querySelector('#alignleft').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        shadowRoot.querySelector('#alignright[aria-pressed="true"]')?.click();
                        var styleTag = document.createElement('style');
                        styleTag.id = 'alignleft_styletag';
                        style = `@layer alignleft {
                                body *:not(#andimenu){
                                        text-align: left ! important;
                                }
                        }`
                        styleTag.innerHTML = style;
                        document.querySelector('html').appendChild(styleTag);
                        localStorage.setItem('alignleft', 'true');
                } else {
                        localStorage.removeItem('alignleft');
                        document.querySelector('#alignleft_styletag')?.remove();
                }
        }, 0);

});



shadowRoot.querySelector('#keyboardfocus').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        var styleTag = document.createElement('style');
                        styleTag.id = 'keyboardfocus_styletag';
                        style = `@layer keyboardfocus {
                                *:focus-visible { box-shadow: 0px 0px 0px 2px ${andiUA.TUAsettingFn.TUAparam.backgroundColor}, 0px 0px 0px 4px #fff !important;}                                
                                label:has(input:focus){box-shadow: 0px 0px 0px 2px ${andiUA.TUAsettingFn.TUAparam.backgroundColor}, 0px 0px 0px 4px #fff !important;}
                                input:focus + label {box-shadow: 0px 0px 0px 2px ${andiUA.TUAsettingFn.TUAparam.backgroundColor}, 0px 0px 0px 4px #fff !important;}
                                label + input:focus {box-shadow: 0px 0px 0px 2px ${andiUA.TUAsettingFn.TUAparam.backgroundColor}, 0px 0px 0px 4px #fff !important;}
                        }`
                        styleTag.innerHTML = style;
                        document.querySelector('html').appendChild(styleTag);
                        localStorage.setItem('keyboardfocus', 'true');
                } else {
                        localStorage.removeItem('keyboardfocus');
                        document.querySelector('#keyboardfocus_styletag')?.remove();
                }
        }, 0);

});

shadowRoot.querySelector('#mousecursor').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        var styleTag = document.createElement('style');
                        styleTag.id = 'underline_styletag';
                        style = `@layer underline {
                                body *{cursor:url(${andiUA.TUAjsPath}/imgs/22.cur),auto}
                                a, a * ,label ,label * ,input ,[role="button"], [role="button"] *,
                                [role="link"] *,[role="link"],textarea,button, button * {
                                        cursor:url(${andiUA.TUAjsPath}/imgs/23.cur),auto !important;
                                } 
                        }`
                        styleTag.innerHTML = style;
                        document.querySelector('html').appendChild(styleTag);
                        localStorage.setItem('mousecursor', 'true');
                } else {
                        localStorage.removeItem('mousecursor');
                        document.querySelector('#underline_styletag')?.remove();
                }
        }, 0);

});

shadowRoot.querySelector('#highlightlinks').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        var styleTag = document.createElement('style');
                        styleTag.id = 'underline_styletag';
                        style = `@layer underline {
                                ${andiUA.buttonElm},${andiUA.linkElm} ,button *, [role="button"] *, [type="button"] *, a *, [role="link"] * {
                                        text-decoration: underline !important;
                                }
                        }`
                        styleTag.innerHTML = style;
                        document.querySelector('html').appendChild(styleTag);
                        localStorage.setItem('highlightlinks', 'true');
                } else {
                        localStorage.removeItem('highlightlinks');
                        document.querySelector('#underline_styletag')?.remove();
                }
        }, 0);

});

shadowRoot.querySelector('#stopanimations').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        var x = setTimeout('alert("x");', 100000);
                        for (var ANDIi = 0; ANDIi <= x; ANDIi++) {
                                clearTimeout(ANDIi);
                        }
                        for (var ANDIi = 1; ANDIi < 99999; ANDIi++) {
                                window.clearInterval(ANDIi);
                        }
                        var ANDIcss = " * {-o-transition-property: none !important;-moz-transition-property: none !important;-ms-transition-property: none !important;-webkit-transition-property: none !important;transition-property: none !important;-o-transform: none !important;-moz-transform: none !important;-ms-transform: none !important;-webkit-transform: none !important;transform: none !important;-webkit-animation: none !important;-moz-animation: none !important;-o-animation: none !important;-ms-animation: none !important;animation: none !important;}",
                                head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
                        style.type = "text/css";
                        if (style.styleSheet) {
                                style.styleSheet.cssText = ANDIcss;
                        } else {
                                style.appendChild(document.createTextNode(ANDIcss));
                        }
                        head.appendChild(style);
                        var allMarquee = UA("marquee");
                        for (var ANDIi = 0; ANDIi < allMarquee.length; ANDIi++) {
                                allMarquee[ANDIi].stop();
                        }
                        UA('video').forEach(function (video) {
                                video.pause();
                        });
                        UA('iframe[src*="https://www.youtube.com/"]').forEach(function (video) {
                                video.src = '';
                                video.style.backgroundColor = andiUA.TUAsettingFn.TUAparam.backgroundColor;
                        });
                        localStorage.setItem('stopanimations', 'true');
                } else {
                        alert(`${andiUA.TUAfileLang['The page will reload now']}`);
                        localStorage.removeItem('stopanimations');
                        location.reload();
                }
        }, 0);
});

andiUA.customColorOpen = '';
shadowRoot.querySelectorAll('.bgcolorbtn, .headingcolorbtn, .textcolorbtn').forEach(function (elm, index) {
        elm.addEventListener('click', function () {
                let that = this;
                if (that.getAttribute('aria-expanded') == 'true') {
                        shadowRoot.querySelectorAll('.bgcolorbtn, .headingcolorbtn, .textcolorbtn').forEach(function (innerElm, index) {
                                innerElm.setAttribute('aria-expanded', false);
                        });
                        setTimeout(function () {
                                shadowRoot.querySelector('.fullsizebtn.colorselect').style.display = "none";
                        }, 1100);
                        andiUA.customColorOpen = '';
                } else {
                        shadowRoot.querySelector('.fullsizebtn.colorselect').style.display = "block";
                        let thisID = that.id;
                        setTimeout(function () {
                                shadowRoot.querySelectorAll('.bgcolorbtn, .headingcolorbtn, .textcolorbtn').forEach(function (innerElm, index) {
                                        innerElm.setAttribute('aria-expanded', false);
                                });
                                that.setAttribute('aria-expanded', true);
                                shadowRoot.querySelector('.fullsizebtn.colorselect').focus();
                                if (localStorage.getItem(thisID)) {
                                        let temp = localStorage.getItem(thisID);
                                        shadowRoot.querySelector(`.fullsizebtn.colorselect`).setAttribute('style', `outline-offset: -5px; outline: 5px solid ${temp};`)
                                } else {
                                        shadowRoot.querySelector(`.fullsizebtn.colorselect`).setAttribute('style', ``)
                                }
                        }, 10);
                        andiUA.customColorOpen = that.id;
                }

        });
        elm.addEventListener('keydown', function (e) {
                if (e.key == 'Enter') this.click();
        });
});

andiUA.changeCustomColor = function (type, TempColor) {
        let btn = null;
        UA('body *').forEach(function(elm){
                let computedStyle = window.getComputedStyle(elm, null);
                var pointerEvents = computedStyle.pointerEvents;
                if (pointerEvents === 'none') {
                        elm.setAttribute('pointerEvents','true');
                }
        });

        shadowRoot.querySelectorAll('.colorbox').forEach(function (colorBtn) {
                let color = colorBtn.getCss('background-color');
                if (TempColor == color) {
                        btn = colorBtn;
                }
        });
        let choosingColor = btn.getCss('background-color');
        let Hselectors = `${andiUA.headings},${andiUA.linkElm},${andiUA.buttonElm}`;
        if (btn.thasClass('reset') && localStorage.getItem(type)) {
                document.querySelector(`#${type}_styletag`)?.remove();
                localStorage.removeItem(type);
                shadowRoot.querySelector(`#${type}`).removeAttribute('style');
                shadowRoot.querySelector(`.fullsizebtn.colorselect`).removeAttribute('style');
                shadowRoot.querySelector(`#${type}btn_before`)?.remove();
        } else if (!btn.thasClass('reset')) {
                let style = '';
                var styleTag = document.createElement('style');
                styleTag.id = type + '_styletag';
                document.querySelector(`#${type}_styletag`)?.remove();
                localStorage.setItem(type, btn.getCss('background-color'));
                if (type == 'bgcolor') {
                        style = `@layer UA_COLORS {
                                body *:not([havetext]):not([pointerEvents]) {
                                        background-color:${choosingColor}!important;
                                }
                        }`;
                        shadowRoot.querySelector(`.wrap-andi-menu`)?.appendHtml(`<style id="bgcolorbtn_before"> .wrap-andi-menu .thirdsizebtn.bgcolorbtn[aria-expanded="true"]:before{border-inline: 5px solid ${choosingColor};}</style>`);
                } else if (type == 'headingcolor') {
                        style = `@layer UA_COLORS {
                                ${Hselectors} {
                                        color:${choosingColor}!important;
                                }
                                ${andiUA.linkElm},${andiUA.buttonElm} {
                                        box-shadow: 0 0 0 2px #000, 0 0 0 2px #fff;
                                }
                        }`;
                        shadowRoot.querySelector(`.wrap-andi-menu`)?.appendHtml(`<style id="headingcolorbtn_before"> .wrap-andi-menu .thirdsizebtn.headingcolorbtn[aria-expanded="true"]:before{border-inline: 5px solid ${choosingColor};}</style>`);
                } else if (type == 'textcolor') {
                        let selector = `[havetext]:not(${Hselectors})`;
                        style = `@layer UA_COLORS {
                                ${selector} {
                                        color:${choosingColor}!important;
                                }
                        }`;
                        shadowRoot.querySelector(`.wrap-andi-menu`)?.appendHtml(`<style id="textcolorbtn_before"> .wrap-andi-menu .thirdsizebtn.textcolorbtn[aria-expanded="true"]:before{border-inline: 5px solid ${choosingColor};}</style>`);
                }
                shadowRoot.querySelector(`#${type}`).setAttribute('style', `outline-offset: -5px; outline: 5px solid ${choosingColor};`)
                shadowRoot.querySelector(`.fullsizebtn.colorselect`).setAttribute('style', `outline-offset: -5px; outline: 5px solid ${choosingColor};`)

                styleTag.innerHTML = style;
                document.querySelector('html').appendChild(styleTag);
        }
}

let RadioBtnsParent = '.colorselect';
shadowRoot.querySelectorAll('.colorselect .colorbox').forEach(function (btn, index) {
        
        
        btn.addEventListener('click', function (e) {
                shadowRoot.querySelector('#darkcontrast[aria-pressed="true"]')?.click();
                andiUA.changeCustomColor(andiUA.customColorOpen, btn.getCss('background-color'))
        });
        btn.addEventListener('keydown', function (e) {
                let radiomax = parseInt(this.getAttr('data-radiomax'));
                let thisIndex = parseInt(this.getAttr('data-index'));
                if (e.key == ' ') {
                        e.preventDefault();
                        this.click()
                }
                if (e.key == 'ArrowLeft') {
                        if ((thisIndex + 1) < radiomax) {
                                thisIndex++;
                                let nextElm = this.closest(RadioBtnsParent).querySelector(`[data-index="${thisIndex}"]`)
                                nextElm.focus();
                                nextElm.click();
                                nextElm.setAttribute('aria-checked', "true");
                                this.setAttribute('aria-checked', "false");
                        } else {
                                let firstElm = this.closest(RadioBtnsParent).querySelector(`[data-index="0"]`)
                                firstElm.focus();
                                firstElm.click();
                                firstElm.setAttribute('aria-checked', "true");
                                this.setAttribute('aria-checked', "false");
                        }
                }
                if (e.key == 'ArrowRight') {
                        if ((thisIndex - 1) >= 0) {
                                thisIndex--;
                                let prevElm = this.closest(RadioBtnsParent).querySelector(`[data-index="${thisIndex}"]`)
                                prevElm.focus();
                                prevElm.click();
                                prevElm.setAttribute('aria-checked', "true");
                                this.setAttribute('aria-checked', "false");
                        } else {
                                thisIndex = (radiomax - 1)
                                let lastElm = this.closest(RadioBtnsParent).querySelector(`[data-index="${thisIndex}"]`)
                                lastElm.focus();
                                lastElm.click();
                                lastElm.setAttribute('aria-checked', "true");
                                this.setAttribute('aria-checked', "false");
                        }
                }
        });
});

if (localStorage.getItem('bgcolor')) {
        let temp = localStorage.getItem('bgcolor');
        andiUA.changeCustomColor('bgcolor', temp);
}
if (localStorage.getItem('headingcolor')) {
        let temp = localStorage.getItem('headingcolor');
        andiUA.changeCustomColor('headingcolor', temp);
}
if (localStorage.getItem('textcolor')) {
        let temp = localStorage.getItem('textcolor');
        andiUA.changeCustomColor('textcolor', temp);
}

andiUA.fontSizeLevel = 0;
andiUA.saveFontSizeLevel = function () {
        localStorage.setItem('fontsizelevel', andiUA.fontSizeLevel)
}

andiUA.fontSizeBigger = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.fontSizeLevel < 3) {
                andiUA.fontSizeLevel++;
                UA('[tuafontsizes],[havetext]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('tuafontsizes'));
                                let correntSize = parseInt(elm.getCss('font-size')) + 2;
                                if (andiUA.fontSizeLevel == 1) elm.style.fontSize = (size + 2) + 'px';
                                else elm.style.fontSize = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.fontSizeLevel == 1) ? '120%' : (andiUA.fontSizeLevel == 2) ? '140%' : '160%';
                btn.setAttribute('aria-pressed', true);
        }
        andiUA.saveFontSizeLevel();
};

andiUA.fontSizeSmoller = function (btn) {
        var TUAfontSizeException = andiUA.TUAsettingFn.TUAfontSizeException || 'toovya';
        if (andiUA.fontSizeLevel > 0) {
                andiUA.fontSizeLevel--;
                UA('[tuafontsizes],[havetext]').forEach(function (elm) {
                        if (!elm.isIt(TUAfontSizeException)) {
                                let size = parseInt(elm.getAttribute('tuafontsizes'));
                                let correntSize = parseInt(elm.getCss('font-size')) - 2;
                                if (andiUA.fontSizeLevel == 0) elm.style.fontSize = (size) + 'px';
                                else elm.style.fontSize = (correntSize) + 'px';
                        }
                });
                btn.parentElement.querySelector('.sizetext').innerText = (andiUA.fontSizeLevel == 2) ? '140%' : (andiUA.fontSizeLevel == 1) ? '120%' : '100%';
                if (btn.parentElement.querySelector('.sizetext').innerText == '100%') shadowRoot.querySelector('#changefontsize .plus').setAttribute('aria-pressed', false);
        }
        andiUA.saveFontSizeLevel();
};

shadowRoot.querySelector('#changefontsize .plus').addEventListener('click', function () {
        andiUA.fontSizeBigger(this);
});

shadowRoot.querySelector('#changefontsize .minus').addEventListener('click', function () {
        andiUA.fontSizeSmoller(this);
});








/** MENU **/

//resizebig
shadowRoot.querySelector('#resizemenubig').addEventListener('click', function () {
        let that = this;
        setTimeout(function () {
                if (that.getAttribute('aria-pressed') == 'true') {
                        shadowRoot.querySelector('.resizesmall_img').style.display = '';
                        shadowRoot.querySelector('.resizebig_img').style.display = 'none';
                        var styleTag = document.createElement('style');
                        styleTag.id = 'resizemenubigstyle';
                        style = `
                                .wrap-andi-menu {
                                        width: 430px;
                                        height: 100%;
                                }
                                .wrap-andi-menu .header {
                                        width: 100%;
                                        height: 287px;
                                        border-radius: 0px 0px 40px 40px;
                                }
                                .wrap-andi-menu .header .topbtns {
                                        padding-block: 17px;
                                        display: flex;
                                        justify-content: space-around;
                                        align-content: stretch;
                                }
                                .wrap-andi-menu .header .topbtns .logo {
                                        display: inline-block;
                                        width: 173px;
                                        height: 37px;
                                }
                                .wrap-andi-menu .header .topbtns .logo img {
                                        width: 100%;
                                        height: 37px;
                                }
                                .wrap-andi-menu .header .topbtns .swichdirection {
                                        display: inline-block;
                                        width: 28px;
                                        height: 25px;
                                        
                                }
                                .wrap-andi-menu .linebtn {
                                        height: 50px;
                                        width: 90%;
                                        margin: auto;
                                }
                                .wrap-andi-menu .linebtn .linebtnimg {
                                        margin-inline-start: 0px;
                                        margin-block-start: 8px;
                                        border-radius: 50%;
                                        width: 33px;
                                        height: 33px;
                                        padding: 8px 0 0;
                                        display: inline-block;
                                }
                                .wrap-andi-menu .linebtn .linebtnimg img {
                                        width: 20px;
                                        height: 20px;
                                }
                                .wrap-andi-menu .linebtn .linebtntext {
                                        display: inline-block;
                                        margin-block-start: 0px;
                                        margin-inline-start: 8px;
                                        font-size: 17px;
                                }
                                .firstsetting > div:first-child {
                                        margin-block-start: 40px;
                                }
                                .wrap-andi-menu .linebtn .linebtnbtn {
                                        display: inline-block;
                                        
                                }
                                .wrap-andi-menu .nerrowfullwbtn {
                                        width: 388px;
                                        height: 45px;
                                        border-radius: 11px;
                                        margin-inline-start: 20px;
                                        margin-block-start: 50px;
                                        position: relative;
                                }
                                .wrap-andi-menu .nerrowfullwbtn span {
                                        display: inline-block;
                                        font-size: 20px;
                                        padding-top: 0px;
                                        margin-inline-start: 0px;
                                }
                                .wrap-andi-menu .nerrowfullwbtn img {
                                        margin-inline-start: 54px;
                                        margin-block-start: 5px;
                                        border-radius: 50%;
                                        width: 29px;
                                        height: 29px;
                                        padding: 3px;
                                        display: inline-block;
                                }
                                .wrap-andi-menu .body {
                                        height: calc(100% - 287px - 73px);
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn {
                                        position: relative;
                                        border-radius: 20px;
                                        width: 185px;
                                        height: 150px;
                                        display: inline-block;
                                        margin-inline-start: 18px;
                                        margin-block-start: 18px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn:not(:has( .halfsizebtnchange)) {
                                        padding-block-start: 20px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn:has( .halfsizebtnchange) {
                                        width: 185px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn.first,
                                .wrap-andi-menu .body .allfnbtns .thirdsizebtn.first {
                                        margin-block-start: 56px;
                                }
                                .wrap-andi-menu .body .allfnbtns .active .activev{
                                        display: block;
                                        position: absolute;
                                        top:15px;
                                        border-radius: 50%;
                                        padding-inline-start: 3px;
                                        padding-inline-end: 0;
                                        width: 20px;
                                        height: 20px;
                                }
                                .wrap-andi-menu.wrap-andi-menu-rtl .body .allfnbtns .active .activev{
                                        right:15px;
                                }
                                .wrap-andi-menu.wrap-andi-menu-ltr .body .allfnbtns .active .activev{
                                        left:15px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnicon {
                                        width: 42px;
                                        height: 42px;
                                        display: block;
                                        margin: auto;
                                        margin-block-start: 0px;
                                }                               
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtntext {
                                        display: block;
                                        margin-block-start: 10px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnchange * {
                                        display: inline-block;
                                        height: 26px;
                                        margin-block-start: 15px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn .halfsizebtnchange .sizetext {
                                        width: 80px;
                                        padding-block-start: 4px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn .padding-block-start: 4px; {
                                        width: 25px;
                                        height: 25px;
                                        border-radius: 50%;
                                        padding-block-start: 0px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn .minus {
                                        width: 25px;
                                        height: 25px;
                                        border-radius: 50%;
                                        padding-block-start: 0px; 
                                        font-size: 20px;
                                }
                                .wrap-andi-menu .body .allfnbtns .thirdsizebtn {
                                        border-radius: 20px;
                                        width: 119px;
                                        height: 113px;
                                        display: inline-block;
                                        margin-inline-start: 13px;
                                        margin-block-start: 16px;
                                } 
                                .wrap-andi-menu .body .allfnbtns .thirdsizebtn .halfsizebtnicon {
                                        width: 42px;
                                        height: 42px;
                                        display: block;
                                        margin: auto;
                                        margin-block-start: 18px;
                                }
                                .wrap-andi-menu .body .allfnbtns .thirdsizebtn .halfsizebtntext {
                                        display: block;
                                        margin-block-start: 10px;
                                }
                                .wrap-andi-menu .body .allfnbtns .thirdsizebtn.bgcolorbtn{
                                        margin-inline-start: 18px;
                                }
                                .wrap-andi-menu .body .nerrowfullwbtn.first {
                                        margin-block-start: 20px;
                                        margin-block-end: 20px; 
                                }
                                .wrap-andi-menu .body .nerrowfullwbtn.last {
                                        margin-block-end: 64px;
                                }
                                .wrap-andi-menu .body .nerrowfullwbtn {
                                        margin-block-start: 20px;
                                }
                                .wrap-andi-menu .fullsizebtn {
                                        width: 390px;
                                        height: 119px;
                                        display: inline-block;
                                        margin-inline-start: 18px;
                                        margin-block-start: 16px;
                                        border-radius: 20px;
                                }
                                .fullsizebtn.colorselect {
                                        padding-inline-start: 49px;
                                        padding-block-start: 28px;
                                        height: 133px;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn:has(.halfsizebtnchange) .halfsizebtnicon {
                                        display: block;
                                }
                                .wrap-andi-menu .body .allfnbtns .halfsizebtn:has(.halfsizebtnchange) .halfsizebtntext {
                                        width: 100%;
                                }    
                                .wrap-andi-menu .bgcolorbtn[aria-expanded="true"]+div+div+div.fullsizebtn {        
                                        border-start-start-radius: 0;
                                }
                                .wrap-andi-menu .textcolorbtn[aria-expanded="true"]+div.fullsizebtn {
                                        border-start-end-radius: 0;
                                }
                                .wrap-andi-menu .thirdsizebtn.bgcolorbtn[aria-expanded="true"],
                                .wrap-andi-menu .thirdsizebtn.headingcolorbtn[aria-expanded="true"],
                                .wrap-andi-menu .thirdsizebtn.textcolorbtn[aria-expanded="true"] {
                                        border-end-start-radius: 0;
                                        border-end-end-radius: 0;
                                }
                                .wrap-andi-menu .thirdsizebtn.bgcolorbtn[aria-expanded]:before,
                                .wrap-andi-menu .thirdsizebtn.headingcolorbtn[aria-expanded]:before,
                                .wrap-andi-menu .thirdsizebtn.textcolorbtn[aria-expanded]:before {
                                        content: '';
                                        width: 119px;
                                        height: 27px;
                                        bottom: -21px;
                                        display: block;
                                        z-index: 1;
                                }
                                .colorselect .colorbox {
                                        width: 28px;
                                        height: 28px;
                                        display: inline-block;
                                        border-radius: 5px;
                                        margin-inline-end: 21px;
                                        margin-block-end: 23px;
                                }
                                .colorbox.reset::before {
                                        content: '';
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        width: 100%;
                                        height: 100%;
                                }
                                .wrap-andi-menu .footer {
                                        height: 73px;
                                        width: 100%;
                                        border-radius: 40px 40px 0px 0px;
                                        padding-inline: 20px;
                                }
                                .wrap-andi-menu .nerrowfullwbtn.statment {
                                        margin-block-start: 55px;
                                }
                                .wrap-andi-menu .footer a {
                                        display: block;
                                        padding-top: 0;
                                        font-size: 18px;
                                }`;
                        styleTag.innerHTML = style;
                        shadowRoot.appendChild(styleTag);
                        localStorage.setItem('resizemenubig', 'true');
                } else {
                        shadowRoot.querySelector('.resizesmall_img').style.display = 'none';
                        shadowRoot.querySelector('.resizebig_img').style.display = '';
                        localStorage.removeItem('resizemenubig');
                        shadowRoot.querySelector('#resizemenubigstyle')?.remove();
                }
        }, 0);

});


andiUA.closeMenu = function () {
        if (andiUA.andidirection === 'rtl') {
                menu.style.transform = 'translateX(100%)';
        } else {
                menu.style.transform = 'translateX(-100%)';
        }
        menu.addEventListener('transitionend', function () {
                menu.style.display = 'none';
                menu.classList.add('closed');
        }, { once: true });
}

andiUA.openMenu = function () {
        menu.style.display = 'block';
        setTimeout(function () {
                menu.style.transform = 'translateX(0)';
        }, 0);
}

shadowRoot.querySelector(' .header > .topbtns > .close').addEventListener('click', andiUA.closeMenu);
shadowRoot.querySelector('#andi_menu').addEventListener('click', andiUA.openMenu);
document.addEventListener('keydown', function (event) {
        if (event.key === 'F10') {
                andiUA.openMenu();
        }
});




andiUA.activeFnAfterReloadPage = function (btnSelector) {
        if (localStorage.getItem(btnSelector)) {
                shadowRoot.querySelector(`#${btnSelector}`)?.click();
        }
}
andiUA.activeFnAfterReloadPage('darkcontrast');
andiUA.activeFnAfterReloadPage('resizemenubig');
andiUA.activeFnAfterReloadPage('lettersnav');
andiUA.activeFnAfterReloadPage('virtualkeyboard');
andiUA.activeFnAfterReloadPage('wikipedia');
andiUA.activeFnAfterReloadPage('focuscontentarea');
andiUA.activeFnAfterReloadPage('magnifaer');
andiUA.activeFnAfterReloadPage('highlightlinks');
andiUA.activeFnAfterReloadPage('mousecursor');
andiUA.activeFnAfterReloadPage('keyboardfocus');
andiUA.activeFnAfterReloadPage('alignleft');
andiUA.activeFnAfterReloadPage('alignright');
andiUA.activeFnAfterReloadPage('readablefont');
andiUA.activeFnAfterReloadPage('stopanimations');
if (localStorage.getItem('fontsizelevel')) {
        let temp = parseInt(localStorage.getItem('fontsizelevel'));
        if (temp > 0) {
                for (let index = 0; index < temp; index++) {
                        andiUA.fontSizeBigger(shadowRoot.querySelector('#changefontsize .plus'));
                }
                andiUA.fontSizeLevel = temp;
        }
}

andiUA.TUAlanguageText = andiUA.TUAfileLang;
andiUA.andiRunOnMobileOrPc = function () { return true; };
let tabCount = 0;
let lastKeyPressTime = null;
document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
                if (lastKeyPressTime === null || (Date.now() - lastKeyPressTime) > 8000) {
                        tabCount = 0;
                } else {
                        tabCount++;
                }
                lastKeyPressTime = Date.now();
                if (tabCount >= 3) {
                        shadowRoot.querySelector('#keyboardfocus[aria-pressed="false"]')?.click();
                        tabCount = 0;
                }
        } else {
                tabCount = 0;
                lastKeyPressTime = null;
        }
});

andiUA.getScript(andiUA.TUAjsPath + "/andi2Funcions4.js", andiUA.emptyFn);
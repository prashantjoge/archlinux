var doc,html,docW,docH,initScrollTop,initScrollLeft,clientH,clientW,wrapper,dragresize,isContentScriptLoaded=!0,scrollBar={},counter=1,menu={visible:{enable:"false",key:"V"},selected:{enable:"false",key:"S"},entire:{enable:"false",key:"E"}},fixedElements=[],wrapperHTML='<div id="awesome_screenshot_wrapper"><div id="awesome_screenshot_top"></div><div id="awesome_screenshot_right"></div><div id="awesome_screenshot_bottom"></div><div id="awesome_screenshot_left"></div><div id="awesome_screenshot_center" class="drsElement drsMoveHandle"><div id="awesome_screenshot_size" style="min-width:70px;"><span>0 X 0</span></div><div id="awesome_screenshot_action"><a id="awesome_screenshot_cancel"><span id="awesome_screenshot_cancel_icon"></span>Cancel</a><a id="awesome_screenshot_capture"><span id="awesome_screenshot_capture_icon"></span>Capture</a></div></div></div>',isSelected=!1,hostname=document.location.hostname,googleSites=["www.google.com","www.google.com.hk","www.google.com.tw","www.google.co.jp","www.google.cn","www.google.co.kr","www.google.co.th","www.google.de","www.google.fr","www.google.co.uk","www.google.com.gr","www.google.com.au","www.google.ca","www.google.co.il","www.google.it","www.google.ch","www.google.cl","www.google.nl","www.google.be","www.google.at","www.google.com.pa","www.google.pl","www.google.com.ru","www.google.com.br","www.google.co.nz","www.google.lt","www.google.com.ar","www.google.bi","http://paoniu8.blogbus.com","www.google.pn","www.google.li","www.google.com.nf","www.google.vg","www.google.mw","www.google.fm","www.google.sh","www.google.cd","www.google.ms","www.google.co.cr","www.google.lv","www.google.ie","www.google.co.gg","www.google.co.je","www.google.ae","www.google.fi","www.google.com.sg","www.google.com.pe","www.google.pr","www.google.com.py","www.google.gm","www.google.td","www.google.co.hu","www.google.com.mx","www.google.pt","www.google.com.ua","www.google.co.ve","www.google.com.tr","www.google.com.mt","www.google.com.uy","www.google.com.np","www.google.hn","www.google.com.ni","www.google.gl","www.google.kz","www.google.sm","www.google.co.mu","www.google.as","www.google.rw","www.google.com.tj"],delayInterval=null;function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){if(hasClass(e,t)){var o=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(o," ")}}function fixPosition(e){switch(e){case"www.facebook.com":removeClass($("#pagelet_bluebar").find("[role=banner]")[0],"_50ti");break;case"pinterest.com":var t=document.getElementById("CategoriesBar"),o=document.getElementsByClassName("Nag");0!=o.length&&o[0].style.setProperty("position","absolute","important"),t.style.setProperty("position","absolute","important")}}function restorePosition(e){switch(e){case"www.facebook.com":addClass($("#pagelet_bluebar").find("[role=banner]")[0],"_50ti");break;case"pinterest.com":var t=document.getElementById("CategoriesBar"),o=document.getElementsByClassName("Nag");0!=o.length&&(o[0].style.position=""),t.style.position=""}}function initEntireCapture(){fixPosition(hostname),enableFixedPosition(!0),counter=1,getDocumentNode(),html=doc.documentElement,initScrollTop=document.scrollingElement.scrollTop,initScrollLeft=document.scrollingElement.scrollLeft,clientH=getClientH(),clientW=html.clientWidth,document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0,checkScrollBar(),window.onresize=checkScrollBar,scrollBar.x||scrollBar.y?setTimeout(sendRequest,300,{action:"scroll_next_done"}):sendRequest({action:"visible"})}function initSelectedCapture(){var e=document.getElementById("searchbar");null!==e&&(e.style.display="none",document.body.id="");if(getDocumentNode(),getDocumentDimension(),!document.getElementById("awesome_screenshot_wrapper")){var t=document.createElement("div");document.body.appendChild(t),t.innerHTML+=wrapperHTML}wrapper=document.getElementById("awesome_screenshot_wrapper"),updateWrapper(),window.addEventListener("resize",windowResize,!1),document.body.addEventListener("keydown",selectedKeyDown,!1),wrapper.addEventListener("mousedown",wrapperMouseDown,!1)}function wrapperMouseDown(e){if(0==e.button){var t,o,n=e.pageX,l=e.pageY,c=document.getElementById("awesome_screenshot_size");document.getElementById("awesome_screenshot_action");function s(e){setStyle(wrapper,"background-color","rgba(0,0,0,0)"),o=e.pageX-n,t=e.pageY-l,c.children[0].innerHTML=Math.abs(o)+" X "+Math.abs(t),updateCorners(n,l,o,t),updateCenter(n,l,o,t),autoScroll(e)}wrapper.addEventListener("mousemove",s,!1),wrapper.addEventListener("mouseup",function e(t){t.pageX-n!=0&&t.pageY-l!=0||0!=$("#awesome_screenshot_center").width()||(setStyle(wrapper,"background-color","rgba(0,0,0,0)"),c.children[0].innerHTML=Math.abs(200)+" X "+Math.abs(200),updateCorners(n-100,l-100,200,200),updateCenter(n-100,l-100,200,200));wrapper.removeEventListener("mousedown",wrapperMouseDown,!1);wrapper.removeEventListener("mousemove",s,!1);wrapper.removeEventListener("mouseup",e,!1);setStyle(document.getElementById("awesome_screenshot_action"),"display","block");setStyle(c,"display","block");bindCenter()},!1)}}function selectedKeyDown(e){27==e.keyCode&&removeSelected()}function windowResize(e){updateWrapper(),getDocumentDimension();var t=document.getElementById("awesome_screenshot_center"),o=getStyle(t,"width"),n=getStyle(t,"height");o*n&&updateCorners(getStyle(t,"left"),getStyle(t,"top"),o,n);dragresize.maxLeft=docW,dragresize.maxTop=docH}function bindCenter(){var s=document.getElementById("awesome_screenshot_center");dragresize=new DragResize("dragresize",{maxLeft:docW,maxTop:docH});var i=document.getElementById("awesome_screenshot_size"),r=document.getElementById("awesome_screenshot_action");function t(){setStyle(document.getElementById("awesome_screenshot_size"),"display","none"),fixPosition(hostname),dragresize.deselect(s),setStyle(s,"outline","none"),enableFixedPosition(!1),counter=1,html=document.documentElement,initScrollTop=document.scrollingElement.scrollTop,initScrollLeft=document.scrollingElement.scrollLeft,clientH=html.clientHeight,clientW=html.clientWidth,isSelected=!0;var e=dragresize.elmX,t=dragresize.elmY,o=dragresize.elmW,n=dragresize.elmH,l=e-document.scrollingElement.scrollLeft,c=t-document.scrollingElement.scrollTop;if(t<initScrollTop&&(l<=0?document.scrollingElement.scrollLeft=e:(wrapper.style.paddingRight=l+"px",document.scrollingElement.scrollLeft+=l),c<=0?document.scrollingElement.scrollTop=t:(wrapper.style.paddingTop=c+"px",document.scrollingElement.scrollTop+=c)),getDocumentDimension(),updateCorners(e,t,o,n),restorePosition(hostname),restoreFixedElements(),t<initScrollTop){if(o<=clientW&&n<=clientH)return void setTimeout(sendRequest,300,{action:"visible",counter:counter,ratio:n%clientH/clientH,scrollBar:{x:!1,y:!1},centerW:o,centerH:n,menuType:"selected"});setTimeout(sendRequest,300,{action:"scroll_next_done"})}else removeSelected(),setTimeout(function(){sendRequest({action:"capture_selected_done",data:{x:l,y:c,w:o,h:n}})},100)}dragresize.isElement=function(e){if(e.className&&-1<e.className.indexOf("drsElement"))return!0},dragresize.isHandle=function(e){if(e.className&&-1<e.className.indexOf("drsMoveHandle"))return!0},dragresize.ondragmove=function(e,t){var o=dragresize.elmX,n=dragresize.elmY,l=dragresize.elmW,c=dragresize.elmH;i.children[0].innerHTML=Math.abs(l)+" X "+Math.abs(c),setStyle(i,"top",n<30?"5px":"-30px"),setStyle(r,"right",l<190?-(195-l)/2+"px":"0px"),updateCorners(o,n,l,c),updateCenter(o,n,l,c),autoScroll(t)},dragresize.apply(wrapper),dragresize.select(s),document.getElementById("awesome_screenshot_action").addEventListener("click",function(e){switch(e.target.id){case"awesome_screenshot_capture":case"awesome_screenshot_capture_icon":t();break;case"awesome_screenshot_cancel":case"awesome_screenshot_cancel_icon":removeSelected()}},!1)}function removeSelected(){window.removeEventListener("resize",windowResize),document.body.removeEventListener("keydown",selectedKeyDown,!1),wrapper.parentNode&&wrapper.parentNode.removeChild(wrapper),isSelected=!1}function autoScroll(e){var t=e.clientY,o=e.clientX,n=window.innerHeight-t,l=window.innerWidth-o;t<20&&(document.scrollingElement.scrollTop-=25),o<40&&(document.scrollingElement.scrollLeft-=25),n<40&&(document.scrollingElement.scrollTop+=60-n),l<40&&(document.scrollingElement.scrollLeft+=60-l)}function updateCorners(e,t,o,n){var l=0<=o?e+o:e,c=0<=n?t:t+n,s=0<=o?docW-e-o:docW-e,i=0<=n?t+n:t,r=0<=o?docW-e:docW-e-o,a=docH-i,d=docW-r,m=docH-c,w=document.getElementById("awesome_screenshot_top"),g=document.getElementById("awesome_screenshot_right"),u=document.getElementById("awesome_screenshot_bottom"),p=document.getElementById("awesome_screenshot_left");setStyle(w,"width",l+"px"),setStyle(w,"height",c+"px"),setStyle(g,"width",s+"px"),setStyle(g,"height",i+"px"),setStyle(u,"width",r+"px"),setStyle(u,"height",a+"px"),setStyle(p,"width",d+"px"),setStyle(p,"height",m+"px")}function updateCenter(e,t,o,n){var l=0<=o?e:e+o,c=0<=n?t:t+n,s=document.getElementById("awesome_screenshot_center");setStyle(s,"width",Math.abs(o)+"px"),setStyle(s,"height",Math.abs(n)+"px"),setStyle(s,"top",c+"px"),setStyle(s,"left",l+"px")}function updateWrapper(){setStyle(wrapper,"display","none"),setStyle(wrapper,"width",document.scrollingElement.scrollWidth+"px"),setStyle(wrapper,"height",document.scrollingElement.scrollHeight+"px"),setStyle(wrapper,"display","block")}function setStyle(e,t,o){e.style.setProperty(t,o)}function getStyle(e,t){return parseInt(e.style.getPropertyValue(t))}function scrollNext(){enableFixedPosition(!1);var e=document.scrollingElement.scrollTop,t=document.scrollingElement.scrollLeft;if(isSelected){var o=document.getElementById("awesome_screenshot_center"),n=getStyle(o,"left"),l=getStyle(o,"top"),c=getStyle(o,"width"),s=getStyle(o,"height");if(c<=clientW&&clientH<s){if(l+s==e+clientH)return void sendRequest({action:"entire_capture_done",counter:counter,ratio:{x:0,y:s%clientH/clientH},scrollBar:{x:!1,y:!0,realX:window.innerHeight>html.clientHeight},centerW:c,centerH:s});l+s<e+2*clientH?document.scrollingElement.scrollTop=l+s-clientH:e+2*clientH<l+s&&(document.scrollingElement.scrollTop=e+clientH)}if(clientW<c&&s<=clientH){if(n+c==t+clientW)return void sendRequest({action:"entire_capture_done",counter:counter,ratio:{x:c%clientW/clientW,y:0},scrollBar:{x:!0,y:!1,realY:window.innerWidth>html.clientWidth},centerW:c,centerH:s});n+c<t+2*clientW?document.scrollingElement.scrollLeft=n+c-clientW:t+2*clientW<n+c&&(document.scrollingElement.scrollLeft=t+clientW)}if(clientW<c&&clientH<s){if(l+s==e+clientH)return n+c==t+clientW?void sendRequest({action:"entire_capture_done",counter:counter,ratio:{x:c%clientW/clientW,y:s%clientH/clientH},scrollBar:{x:!0,y:!0},centerW:c,centerH:s}):(n+c<t+2*clientW?document.scrollingElement.scrollLeft=n+c-clientW:t+2*clientW<n+c&&(document.scrollingElement.scrollLeft=t+clientW),counter++,document.scrollingElement.scrollTop=l,void setTimeout(sendRequest,300,{action:"scroll_next_done"}));l+s<e+2*clientH?document.scrollingElement.scrollTop=l+s-clientH:e+2*clientH<l+s&&(document.scrollingElement.scrollTop=e+clientH)}}else if(document.scrollingElement.scrollTop=e+clientH,document.scrollingElement.scrollTop==e){t=document.scrollingElement.scrollLeft;if(document.scrollingElement.scrollLeft=t+clientW,scrollBar.x&&document.scrollingElement.scrollLeft!=t)return counter++,document.scrollingElement.scrollTop=0,void setTimeout(sendRequest,300,{action:"scroll_next_done"});var i={};return i.y=e%clientH/clientH,i.x=t%clientW/clientW,document.scrollingElement.scrollTop=initScrollTop,document.scrollingElement.scrollLeft=initScrollLeft,restoreFixedElements(),void sendRequest({action:"entire_capture_done",counter:counter,ratio:i,scrollBar:scrollBar})}setTimeout(sendRequest,300,{action:"scroll_next_done"})}function sendRequest(e){chrome.extension.sendRequest(e)}function bindShortcuts(e){var t=document.body;if(t.removeEventListener("keydown",keydownHandler,!1),t.addEventListener("keydown",keydownHandler,!1),msObj=e.msObj)for(var o in msObj=JSON.parse(msObj),msObj)menu[o].enable=msObj[o].enable,menu[o].key=msObj[o].key}function keydownHandler(e){switch(String.fromCharCode(e.which)){case menu.visible.key:1==menu.visible.enable&&e.shiftKey&&e.ctrlKey&&sendRequest({action:"visible"});break;case menu.selected.key:1==menu.selected.enable&&e.shiftKey&&e.ctrlKey&&sendRequest({action:"selected"});break;case menu.entire.key:1==menu.entire.enable&&e.shiftKey&&e.ctrlKey&&sendRequest({action:"entire"})}}function enableFixedPosition(e){if(e)for(var t=0,o=fixedElements.length;t<o;++t)fixedElements[t].style.position="fixed";else for(var n,l=document.createNodeIterator(document.documentElement,NodeFilter.SHOW_ELEMENT,null,!1);n=l.nextNode();){var c=document.defaultView.getComputedStyle(n,"");if(!c)return;"fixed"==c.getPropertyValue("position")&&(fixedElements.push(n),n.style.position="absolute")}}function restoreFixedElements(){if(fixedElements){for(var e=0,t=fixedElements.length;e<t;e++)fixedElements[e].style.position="fixed";fixedElements=[]}}function checkScrollBar(){scrollBar.x=window.innerHeight>getClientH(),scrollBar.y=document.scrollingElement.scrollHeight>window.innerHeight}function myReplace(e,t){var o=e.replace(/[\.\$\^\{\[\(\|\)\*\+\?\\]/gi,"\\$1"),n=new RegExp("("+o+")","ig");return t.replace(n,'<span style="font-weight:bold">$1</span>')}function getDocumentNode(){doc=window.document,window.location.href.match(/https?:\/\/mail.google.com/i)&&(doc=doc.getElementById("canvas_frame").contentDocument)}function getDocumentDimension(){docH=document.scrollingElement.scrollHeight,docW=document.scrollingElement.scrollWidth}function getClientH(){return"CSS1Compat"===document.compatMode?html.clientHeight:document.body.clientHeight}chrome.extension.onRequest.addListener(function(e,t,o){switch(e.action){case"update_shortcuts":bindShortcuts(e);break;case"init_entire_capture":initEntireCapture();break;case"init_selected_capture":initSelectedCapture();break;case"scroll_next":scrollNext();break;case"destroy_selected":removeSelected();break;case"restorebar":restorePosition(hostname),restoreFixedElements();var n=document.getElementById("searchbar");null!=n&&(n.style.display="block",document.body.id="searchbarshow");break;case"finishAutoSave":var l="The screenshot has been saved in "+e.path+".";notification.show("success",l);break;case"tabupdate":break;case"delay-capture":null!==delayInterval&&(clearInterval(delayInterval),delayInterval=null,$("#awe_delay_div").remove());var c=$('<div id="awe_delay_div"><span></span><div id="awe_delay_cancel">Cancel</div></div>').appendTo("body").find("span").text(e.sec).end();c.find("#awe_delay_cancel").on("click",function(){clearInterval(delayInterval),delayInterval=null,c.remove()}),$.Draggable(c[0],{});var s=e.sec?e.sec-1:2;delayInterval=setInterval(function(){if(s<=0)return clearInterval(delayInterval),delayInterval=null,c.remove(),void setTimeout(function(){chrome.extension.sendRequest({action:"visible"})},100);$("#awe_delay_div").find("span").text(s),s--},1e3)}}),sendRequest({action:"check_shortcuts"}),window.addEventListener("load",function(){sendRequest({action:"enable_selected"})},!1);var notification={notifyBox:null,init:function(){this.create()},create:function(){var e=this;this.notifyBox=document.createElement("div"),this.notifyBox.id="asNotifyBox",this.notifyBox.innerHTML='<img id="as-nitofyIcon"><span id="as-notifyMessage"></span><div id="as-notifyClose"></div>',document.body.appendChild(this.notifyBox),document.getElementById("as-notifyClose").addEventListener("click",function(){e.hide()})},show:function(e,t){var o=this;(document.getElementById("asNotifyBox")||this.init(),"success"==e)&&(document.getElementById("as-nitofyIcon").src=chrome.extension.getURL("")+"images/success.gif");document.getElementById("as-notifyMessage").innerText=t,this.notifyBox.style.display="block",setTimeout(function(){o.notifyBox.style.display="none"},3e3)},hide:function(){this.notifyBox.style.display="none"}};function addSitepoint(){var e=!1,t=document.createElement("script");t.type="text/javascript",t.src="//qp.rhlp.co/pads/js/"+encodeURIComponent("awesomescreenshot"),t.async=!0,t.onload=t.onreadystatechange=function(){e||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(e=!0,t.parentNode.removeChild(t))},document.body.appendChild(t)}$(document).ready(function(){});
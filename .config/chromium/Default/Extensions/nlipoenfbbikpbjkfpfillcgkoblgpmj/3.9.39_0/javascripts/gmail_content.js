function sendRequest(e){chrome.extension.sendRequest(e)}function b64toBlob(e,n,t){n=n||"",t=t||512;for(var o=atob(e),s=[],i=0;i<o.length;i+=t){for(var a=o.slice(i,i+t),c=new Array(a.length),r=0;r<a.length;r++)c[r]=a.charCodeAt(r);var l=new Uint8Array(c);s.push(l)}return new Blob(s,{type:n})}chrome.extension.sendRequest({action:"gmail-btn"},function(e){if(console.log("slkdf",e),1==e){var s=null;InboxSDK.load("1","sdk_awesome123_c41e75c401").then(function(e){e.Compose.registerComposeViewHandler(function(e){(s=e).addButton({title:"Insert a screen shot",iconUrl:"https://www.awesomescreenshot.com/awesomescreenshot_icon_64.png",onClick:function(e){sendRequest({action:"desktop"})}})})}),chrome.extension.onRequest.addListener(function(e,n,t){if("insertImage"==e.action){var o=[b64toBlob(e.dataURL.split(",")[1],e.dataURL.split(",")[0].split(":")[1].split(";")[0])];s.attachInlineFiles(o).then(function(){})}})}});
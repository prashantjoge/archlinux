var customEvent=document.createEvent("Event");function fireCustomEvent(e){hiddenDiv=document.getElementById("messageChannel"),hiddenDiv.innerText=e,hiddenDiv.dispatchEvent(customEvent)}customEvent.initEvent("myCustomEvent",!0,!0),chrome.extension.onRequest.addListener(function(e,t,n){"return_image_data"===e.action&&fireCustomEvent(JSON.stringify(e))});
!function(){var o=this,e=function(e,n){var i,t=e.split("."),s=window||o;t[0]in s||!s.execScript||s.execScript("var "+t[0]);for(;t.length&&(i=t.shift());)t.length||void 0===n?s=s[i]?s[i]:s[i]={}:s[i]=n},n=function(n){var e=chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda",{}),i=!1;e.onMessage.addListener(function(e){i=!0,"response"in e&&!("errorType"in e.response)?n.success&&n.success(e):n.failure&&n.failure(e)}),e.onDisconnect.addListener(function(){!i&&n.failure&&n.failure({request:{},response:{errorType:"INTERNAL_SERVER_ERROR"}})}),e.postMessage(n)};e("google.payments.inapp.buy",function(e){e.method="buy",n(e)}),e("google.payments.inapp.getPurchases",function(e){e.method="getPurchases",n(e)}),e("google.payments.inapp.getSkuDetails",function(e){e.method="getSkuDetails",n(e)})}();
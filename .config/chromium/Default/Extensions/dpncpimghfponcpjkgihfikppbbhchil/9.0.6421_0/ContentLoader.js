var g_csLoaded = false;

// If content code not yet loaded then request it from back-ground page and then eval it.
if (!g_csLoaded) {
    var initTimeout = 30000;
    var pauseTime = 100;
    var maxTries = initTimeout / pauseTime;

    var getContentCode = function () {
        chrome.runtime.sendMessage("uiPathContentScriptLoadRequest", function (response) {
            if (response) {
                // Content script recieved from background page
                try {
                    eval.call(window, response);
                    g_csLoaded = true;
                }
                catch (ex) {
                    console.log("failed to evaluate content script " + ex);
                }
            }
            else {
                // Content script not available; retry later
                if (maxTries > 0) {
                    maxTries--;
                    window.setTimeout(getContentCode, pauseTime);
                }
                else {
                    console.log("failed to get content script");
                }
            }
        });
    };

    getContentCode();
}

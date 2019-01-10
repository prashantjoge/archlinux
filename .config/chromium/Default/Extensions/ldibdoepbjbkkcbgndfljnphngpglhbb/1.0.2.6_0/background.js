(function () {
    var reload = false;

    function requestUpdateCheck() {
        chrome.runtime.requestUpdateCheck(function (status, details) {
            console.log("RequestUpdateCheckStatus: " + status);

            if (status == "update_available")
                chrome.runtime.reload();
        });
    }

    function onStartup() {
        requestUpdateCheck();
    }

    function onConnectExternal(port) {
        console.log("client connected");

        if (reload == true)
            window.location.reload();
    }

    function onMessageExternal(message, sender, sendResponse) {

        if (message.method == "get version") {
            sendResponse({
                method: message.method,
                status: 200,
                body: JSON.stringify({
                    "version": chrome.runtime.getManifest().version
                })
            });
        }

        if (message.method == "update plugin")
            requestUpdateCheck();
    }

    function onLaunched() {
        chrome.app.window.create("/for_chrome/info_install_complete.html", {
            id: "main",
            innerBounds: {
                minWidth: 1280,
                minHeight: 800
            }
        });
    }

    function handleLoad() {
        console.log("plugin ready");
        reload = false;
    }

    function handleMessage(message) {

    }

    function handleCrash() {
        console.log("plugin crash");
        reload = true;
    }

    function handleError() {
        console.log("plugin error");
        reload = true;
    }

    function handleAbort() {
        console.log("plugin abort");
        reload = true;
    }

    var listener = document.getElementById("listener");

    listener.addEventListener('load', handleLoad, true);
    listener.addEventListener('message', handleMessage, true);
    listener.addEventListener('crash', handleCrash, true);
    listener.addEventListener('error', handleError, true);
    listener.addEventListener('abort', handleAbort, true);

    chrome.runtime.onStartup.addListener(onStartup);
    chrome.runtime.onConnectExternal.addListener(onConnectExternal);
    chrome.runtime.onMessageExternal.addListener(onMessageExternal);
    chrome.app.runtime.onLaunched.addListener(onLaunched);
})();


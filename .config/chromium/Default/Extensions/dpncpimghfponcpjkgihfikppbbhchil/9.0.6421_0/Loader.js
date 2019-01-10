// Set g_loadExternalCode bellow to false and use manifest.json_debug when developing/debuggin extension.
var g_loadExternalCode = true;
var g_initTimeout      = 30000; // 30 second
var g_codeMap          = null;

// Requests from ContentLoader.js for the rest of the content code.
chrome.runtime.onMessage.addListener(function (msg, sender, fnResponse) {
    if (msg === "uiPathContentScriptLoadRequest") {
        if (g_codeMap) {
            // code from native host available
            fnResponse(g_codeMap["content"]);
        }
        else {
            fnResponse(null);
            console.log("runtime.onMessage: code not available");
        }
    }
});


// Given a function name creates a wrapper function that check if fnName is loaded in
// global context; if not it delays itself so the original function will be eventually called
// when available.
// The wait starts with a small timeout which increases by 50% each time.
// It seems that functions in Background.js are not yet available in Loader.js even when
// working with manifest.json_debug (scripts are not retrieved from native host for easier debugging).

var createDelayedWrapper = function (fnName) {
    return function (details) {
        var timeout = 100;
        var maxTries = g_initTimeout / timeout;

        var fnWrapper = function () {
            if (typeof window[fnName] !== "undefined") {
                window[fnName](details);
            }
            else {
                maxTries--;

                if (maxTries >= 0) {
                    console.log(fnName + " not available; retry in later");
                    setTimeout(fnWrapper, timeout);
                }
                else {
                    console.log(fnName + " failed");
                }
            }
        };

        fnWrapper();
    };
};


// Add delayed listeners; retry until the code from chrome native messaging is available.
window.addEventListener("load", createDelayedWrapper("OnPageLoad"), false);
chrome.webNavigation.onDOMContentLoaded.addListener(createDelayedWrapper("OnDOMContentLoaded"));
chrome.webNavigation.onCompleted.addListener(createDelayedWrapper("OnCompleted"));
chrome.windows.onFocusChanged.addListener(createDelayedWrapper("OnFocusChanged"));



// Create the message port that communicates with the Chrome Native Messaging application.
var g_nativeMsgComm = function () {
	var	m_crtRequestId  = 0;
	var m_returnMap     = { };
	var m_nativeMsgPort = chrome.runtime.connectNative("com.uipath.chromenativemsg");
	
	var RegisterReturnCallback = function (returnFunc) {
		++m_crtRequestId;
		m_returnMap[m_crtRequestId] = returnFunc;
		return m_crtRequestId;
	}
	
	var DismissReturnCallback = function (returnId, params) {
		var returnFunc = m_returnMap[returnId];
		if (returnFunc !== undefined) {
			returnFunc(params);
			delete m_returnMap[returnId];
		}
	}

	m_nativeMsgPort.onMessage.addListener(
		function (message) {
			if ((typeof message.functionCall !== "undefined") && (typeof g_functionCallMap !== "undefined"))
			{
				// This message is a function request from "ChromeNativeMsg.EXE" (the native msg host).
				// Call the JS function and return the data to the native msg host.
				
				//TraceMessage("Function call " + EnumObjectProps(message, true));

				var requestId = message.requestId;
				var requestedFunc = g_functionCallMap[message.functionCall];
				if (requestedFunc !== undefined) {
					// Call the requested function and get the return data.
					requestedFunc(
						message,
						function (responseData) {
							// Copy the request id to the return data.
							if (requestId !== undefined) {
								responseData.returnId = requestId;
								// Post the return data back to the native messaging app.
								//TraceMessage("Returning call data " + EnumObjectProps(responseData, true));
								m_nativeMsgPort.postMessage(responseData);
							}
						}
					);
				}
			}
			else if (message.returnId !== undefined) {
				// This message contains return data from the native msg host, resulted from a previous "CallFunction".
				// Invoke the callback function associated with this return data.
				DismissReturnCallback(message.returnId, message);
			}
		}
	);
	
	m_nativeMsgPort.onDisconnect.addListener(
		function (message) {
			//TraceMessage("m_nativeMsgPort.onDisconnect: disconnected, message=" + message);
		}
	);

	
	return {
		// This function sends a call request to the native msg host ("ChromeNativeMsg.EXE").
		// These are call requests which need running native code because the Chrome JS API cannot provide the needed functionality.
		// The data will be returned as a message in the "m_nativeMsgPort.onMessage" listener defined above and the associated
		// "returnFunc" callback will be invoked.
		CallFunction: function (functionName, inputParams, returnFunc) {
			if (returnFunc !== undefined) {
				inputParams.requestId = RegisterReturnCallback(returnFunc);
			}

			inputParams.functionCall = functionName;
			m_nativeMsgPort.postMessage(inputParams);
		}
	};
}();


///////////////////////////////////////////////////////////////////////////////////////////////
function getFileCodeObject(scriptName) {
	if (!g_loadExternalCode) {
		// Debug mode.
		return { file : scriptName };
	}
	else {
		//console.log("getFileCodeObject request: " + scriptName);
		return { code: g_codeMap[scriptName] };
	}
}


// Ask Chrome Native Messaging for the rest of the background scripts.
if (g_loadExternalCode) {
	g_nativeMsgComm.CallFunction("LoadScripts", {},
		function (response)	{
			g_codeMap = response;

			eval.call(window, g_codeMap["background"]);
			delete g_codeMap["background"]; // Not used anymore don't keep it in memory.
		}
	);
}

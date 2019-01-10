'use strict';
// Create Alarm on installation event. After that, it will fire every interval period

(function() {

	var extensionAPI = new window.GeExtensionAPI(),
		config = new Config(),
		tracking = new Tracking(extensionAPI);

	chrome.runtime.onInstalled.addListener(function (details) {
		chrome.alarms.create('notificationsUpdater', {
			when: Date.now(),
			periodInMinutes: config.alarmInterval
		});

		tracking.trackEvent(config.analytics.categories.INSTALLATION, details.reason);

	});

	chrome.alarms.onAlarm.addListener(function (alarm) {
		if( alarm.name === 'notificationsUpdater' ) {
			extensionAPI.updateNotifications({
				enableDesktopNotifications: true
			});
		}
	});
})();
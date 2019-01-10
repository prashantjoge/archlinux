// Copyright (c) 2013 - 2014 Booking.com. All rights reserved.

/**
* Global object to store app configuration variables, so they are exposed to both
* the extension and Handlebars (sandbox)
*
* @type {Object}
*/
function Config() {

	this.companyName = 'Booking.com';
	/**
	* Global variable containing the HTML for the arrow indicator, as this will
	* be switched from one item to another
	*
	* @type {String}
	*/
	this.itemIndicator = '<span class="arrow"></span>';

	this.scrollGradientNotifications = '<div class="scroll-gradient scroll-gradient-notifications"></div>';

	this.defaultHtmlAge = '<li><input class="form-control input-age" name="age" size="2" maxlength="2" value="{{value}}" data-validation="required{<!---->{{errorSearchChildrenAgesMissing}}<!---->}"></li>';

	this.affiliateID = '382975';

	// Booking.com Extension - Chrome
	this.trackingLabel = 'bext_c';

	this.languageLocale = window.navigator.language.toLocaleLowerCase();

	this.defaultLanguage = 'en-us';

	/**
	* Global variable containing the HTML for the loading mask (used for AJAX
	* calls or something that may take a while)
	*
	* @type {String}
	*/
	this.loadingMask = '<div id="mask"></div>';

	/**
	* Global variable (flag) to determine whether the extension runs on a high
	* density display or not. For HDPI screens we need to use other images
	*
	* @type {Boolean}
	*/
	this.isRetina = window.devicePixelRatio > 1;

	/**
	* Global variable to store the default URL for making AJAX requests to the
	* server (usually, used in concatenations)
	*
	* TODO: Consider splitting this into WWW and Secure
	*
	* @type {String}
	*/
	this.rootURL = 'http://www.booking.com';

	this.secureRootURL = 'https://secure.booking.com';

	this.imageHostUrl = 'http://q.bstatic.com';

	/**
	* Global variable to store the default City Image URL, should the image be 
	* missing in the JSON response
	*
	* TODO: Should we replace images with ones stored locally? (Improved UX for HDPI devices)
	*
	* @type {String}
	*/
	this.defaultCityImageURL = this.imageHostUrl + '/static/img/default_city_new.gif';

	this.imagesFolder = (this.isRetina === true) ? '/img/hdpi' : '/img/mdpi';

	this.imagesMDPIFolder = '/img/mdpi';

	this.imagesHDPIFolder = '/img/hdpi';
	
	this.transparentImageUrl = this.imagesFolder + '/misc/transparent.png';

	this.forgottenPasswordURL = this.secureRootURL + '/login.html?op=remind&aid=' + this.affiliateID + '&label=' + this.trackingLabel;

	this.forgottenPasswordInlineURL = this.secureRootURL + '/login.html?op=remind&aid=' + this.affiliateID + '&label=' + this.trackingLabel + '&source=' + this.trackingLabel;

	this.forgottenPasswordIframeId = 'iframe-forgotten-password';

	this.userSettingsURL = this.secureRootURL + '/login.html?tmpl=profile/myaccount&aid=' + this.affiliateID + '&label=' + this.trackingLabel;

	this.geniusURL = this.rootURL + '/genius.html?aid=' + this.affiliateID + '&label=' + this.trackingLabel;

	/**
	* Global variable to store the Search page URL; used only if the user has used the
	* autocomplete and has chosen a destination from the list
	*
	* @type {String}	*/
	this.searchUrl = this.rootURL + '/searchresults.html';

	/**
	* Global variable to store the path for XY API
	*
	* @type {String}
	*/
	this.XYUrl = 'https://api.booking.com/v3/execute';

	/**
	* Global variable to store the credentials for XY API
	*
	* @type {String}
	*/
	this.extensionAuthentication = {
		key: 'key_0cc2225f398a051c',
		secret: 'secret_3472e9f51c4398c2b6591de099f6bed15b20073fd8ec6045979d89ca0c9d0146'
	};

	this.locale = {
		'languagesWithDialect': ['en-gb', 'en-us', 'de', 'nl', 'fr', 'es', 'ca', 'it', 'pt-pt', 'pt-br', 'no', 'fi', 'sv', 'da', 'cs', 'hu', 'ro', 'ja', 'zh-cn', 'zh-tw', 'pl', 'el', 'ru', 'tr', 'bg', 'ar', 'ko', 'he', 'lv', 'uk', 'id', 'ms', 'th', 'et', 'hr', 'lt', 'sk', 'sr', 'sl', 'vi', 'tl', 'is'],
		'languagesWithoutDialect': ['en', 'en', 'de', 'nl', 'fr', 'es', 'ca', 'it', 'pt', 'pt', 'no', 'fi', 'sv', 'da', 'cs', 'hu', 'ro', 'ja', 'zh', 'zh', 'pl', 'el', 'ru', 'tr', 'bg', 'ar', 'ko', 'he', 'lv', 'uk', 'id', 'ms', 'th', 'et', 'hr', 'lt', 'sk', 'sr', 'sl', 'vi', 'tl', 'is'],
		'countriesForWeekCheck': ['us', 'ca', 'jp', 'kr', 'id', 'br', 'my', 'ph', 'sa', 'iq', 'eg', 'ly', 'dz', 'ma', 'tn', 'om', 'ye', 'sy', 'jo', 'lb', 'kw', 'ae', 'bh', 'qa', 'il', 'is']
	};

	this.analytics = {
		'property': 'UA-116109-33',

		'dimensions': {
			'language': 'dimension23',
			'addonName': 'dimension24',
			'addonVersion': 'dimension25',
			'userType': 'dimension26',
			'ufiTypeID': 'dimension27'
		},

		'metrics': {
			'rooms': 'metric1',
			'adults': 'metric2',
			'children': 'metric3',
			'lengthOfStay': 'metric4'
		},

		'categories': {
			INSTALLATION: 'Installation',
			AUTHENTICATION: 'Authentication',
			CLICK: 'Click',
			SEARCH_AUTOCOMPLETE: 'Search Autocomplete',
			SEARCH_DISAMBIGUATION: 'Search Disambiguation',
			ERROR: 'Error'
		},

		'defaults': {
			'defaultCategory': 'Extension',
			'defaultEvent': 'Click',
			'addonName': 'extension_chrome',
			'separator': ': ',
			'nonInteractionLabel': 'nonInteraction',
			'nonInteractionValue': true
		},

		'events': {
			'category': 'eventCategory',
			'action': 'eventAction',
			'label': 'eventLabel'
		}
	};

	// Max number of desktop notifications shown at once
	this.maxDesktopNotifications = 1;

	// Alarm interval in minutes, it will fire every 6 hours
	this.alarmInterval = 360;

	this.templateTranslations = {
		'container.html': [
			'tabNotifications',
			'tabSearch',
			'authHeading',
			'authEmailLabel',
			'authEmailPlaceholder',
			'authPasswordLabel',
			'authPasswordPlaceholder',
			'authPasswordForgotten',
			'authSignin',
			'authUnconfirmedEmailSend',
			'authUnconfirmedEmailSending',
			'authUnconfirmedEmailErrorResend',
			'authUnconfirmedEmailSent',
			'notificationsEmptyList',
			'searchDestinationLabel',
			'searchDestinationPlaceholder',
			'searchCheckinLabel',
			'searchCheckoutLabel',
			'searchGuests',
			'searchGuestsDefaultsTwoAdultsOneRoom',
			'searchGuestsDefaultsOneAdult',
			'searchGuestsDefaultsMoreOptions',
			'searchSearch',
			'searchRooms',
			'searchAdults',
			'searchChildren',
			'searchChildrenAge',
			'toolbarSearchAgain',
			'toolbarSignout'
		],

		'notifications.html': [
			'notificationsDismiss',
			'notificationsRead'
		],

		'travel-parties.html': [
			'searchGuestsDefaultsTwoAdultsOneRoom',
			'searchGuestsDefaultsOneAdult',
			'searchGuestsDefaultsMoreOptions'
		],

		'children-age.html': [
			'errorSearchChildrenAgesMissing'
		],

		'user-avatar.html': [
			'toolbarSigninInformation',
			'toolbarSigninInformationGeneric'
		],

		'errorMessages': [
			'errorAuthUsernameMissing',
			'errorAuthUsernameInvalid',
			'errorAuthPasswordMissing',
			'errorAuthPasswordInvalid',
			'errorAuthSigninAgain',
			'errorAuthUnconfirmedEmail',
			'errorSearchDestinationMissing',
			'errorSearchDestinationNotFound',
			'errorSearchChildrenAgesMissing',
			'errorSearchLengthOfStay'
		],

		'dynamicMessages': {
			'authUnconfirmedEmailSend': [{
				'email': 'getUserEmail'
			}],
			'authUnconfirmedEmailErrorResend': [{
				'email': 'getUserEmail'
			}],
			'toolbarSigninInformation': {
				'user': 'getUserName'
			}
		}
	};

	this.isDev = function isDevMode() {
		return !('update_url' in chrome.runtime.getManifest());
	}
};
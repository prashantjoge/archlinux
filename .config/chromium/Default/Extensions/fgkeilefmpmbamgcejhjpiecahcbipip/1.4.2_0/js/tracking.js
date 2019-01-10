'use strict';

(function(window) {
	window.Tracking = window.Tracking || function(extensionAPI) {
		var config = new window.Config(),
			separator = config.analytics.defaults.separator;

		this.trackEvent = function(category, action, additionalInfo) {
			if (typeof category === 'undefined' || typeof action === 'undefined') return;

			var trackTemp,
				track = {};

			// Treat the third parameter as label for easy tracking (eg. errors)
			if (typeof additionalInfo === 'string') {
				trackTemp = {};
				trackTemp['label'] = additionalInfo;
			} else {
				trackTemp = additionalInfo || {};
			}

			// Overwrite the category with "Extension", as we need separate tracking for the Extention in Google UA
			track[config.analytics.events.category] = config.analytics.defaults.defaultCategory;

			// Instead, use the category to prefix the action
			track[config.analytics.events.action] = this.buildStandardEventAction(category, action);

			// Add the optional label
			if (this.isPropertyAvailable('label', trackTemp)) {
				track[config.analytics.events.label] = trackTemp.label;
			}

			// Add the optional language
			if (this.isPropertyAvailable('language', trackTemp)) {
				track[config.analytics.dimensions.language] = trackTemp.language;
			} else {
				track[config.analytics.dimensions.language] = extensionAPI.getUserLanguage();
			}

			// Add the optional add-on name (technically, it will default to "extension_chrome")
			if (this.isPropertyAvailable('addonName', trackTemp)) {
				track[config.analytics.dimensions.addonName] = trackTemp.addonName;
			} else {
				track[config.analytics.dimensions.addonName] = config.analytics.defaults.addonName;
			}

			// Add the optional version; should be taken from the manifest
			if (this.isPropertyAvailable('addonVersion', trackTemp)) {
				track[config.analytics.dimensions.addonVersion] = trackTemp.addonVersion;
			} else {
				if (typeof chrome.runtime.getManifest === 'function') {
					var manifest = chrome.runtime.getManifest();

					track[config.analytics.dimensions.addonVersion] = manifest.version;
				}
			}

			// Add the optional user type
			if (this.isPropertyAvailable('userType', trackTemp)) {
				track[config.analytics.dimensions.userType] = trackTemp.userType;
			} else {
				var userType = '';

				if (extensionAPI.isUserSignedIn()) {
					if (extensionAPI.isGeniusUser()) {
						userType = 'genius';
					} else {
						userType = 'non_genius';
					}
				} else {
					userType = 'not_signed_in';
				}

				track[config.analytics.dimensions.userType] = userType;
			}

			// Add the optional UFI type/ID
			if (this.isPropertyAvailable('ufiTypeID', trackTemp)) {
				track[config.analytics.dimensions.ufiTypeID] = trackTemp.ufiTypeID;
			}

			// Add Search-related metrics
			if (category === config.analytics.categories.SEARCH) {
				// Add the optional Search[Rooms]
				if (this.isPropertyAvailable('rooms', trackTemp)) {
					track[config.analytics.metrics.rooms] = trackTemp.rooms;
				}

				// Add the optional Search[Adults]
				if (this.isPropertyAvailable('adults', trackTemp)) {
					track[config.analytics.metrics.adults] = trackTemp.adults;
				}

				// Add the optional Search[Children]
				if (this.isPropertyAvailable('children', trackTemp)) {
					track[config.analytics.metrics.children] = trackTemp.children;
				}

				// Add the optional Search[Length of Stay]
				if (this.isPropertyAvailable('lengthOfStay', trackTemp)) {
					track[config.analytics.metrics.lengthOfStay] = trackTemp.lengthOfStay;
				}
			}

			// Set the non-interaction flag for events that haven't been triggered directly by the user
			if (category === config.analytics.categories.INSTALLATION) {
				track[config.analytics.defaults.nonInteractionLabel] = config.analytics.defaults.nonInteractionValue;
			}

			// Send the request
			ga('send', 'event', track);
		};

		this.buildStandardEventAction = function(category, action) {
			return category + separator + action;
		};

		this.isPropertyAvailable = function(property, object) {
			return (object.hasOwnProperty(property) && typeof object[property] !== 'undefined');	
		};

		this.trackErrors = function(data) {
			if ((typeof data === 'undefined') || (data.jquery && data.length === 0)) return;

			// Trigger the error tracking for each error
			for (var i in data) {
				this.trackEvent(data[i]['category'], data[i]['action'], data[i]['label']);
			}
		};

		this.extractDataAttributes = function(item) {
			var additionalInfo = {};

			if (typeof item.data('trackingLabel') !== 'undefined') {
				additionalInfo['label'] = item.data('trackingLabel');
			}

			if (typeof item.data('trackingUfiDetails') !== 'undefined') {
				additionalInfo['ufiTypeID'] = item.data('trackingUfiDetails');
			}

			return additionalInfo;			
		};

		this.buildChildrenAgesString = function(items) {
			if ((typeof items === 'undefined') || (items.jquery && items.length === 0)) {
				return 'Ages: ?';
			}

			var agesPrefix = 'Ages: ',
				agesArray = [];

			items.each(function(index) {
				agesArray.push($(this).val());
			});

			return agesPrefix + agesArray.join(', ');
		};

		this.buildSearchActionString = function(guestDetailsOption, searchRooms, searchAdults, searchChildren) {
			var searchAction = '';

			// Append the options type - standard, custom, profile
			switch (guestDetailsOption) {
				// 1 adult, 1 room
				// 2 adults, 1 room
				case '1':
				case '2':
					searchAction += '{standard} ';
					break;
				// More options...
				case '3':
					searchAction += '{custom} ';
					break;
				default:
					searchAction += '{profile} ';
			}

			// Add the number of rooms
			searchAction += '[' + searchRooms + '] ';

			// Add the number of adults
			searchAction += searchAdults + ' adults + ';

			// Add the number of children
			searchAction += searchChildren + ' children';

			return searchAction;
		};

		this.buildPartialSearchTracking = function(guestDetailsOption, searchRooms, searchAdults, searchChildren, searchChildrenAges) {
			var additionalInfo = {};
			var childrenAges = this.buildChildrenAgesString(searchChildrenAges);
			var roomInfo = this.buildSearchActionString(guestDetailsOption, searchRooms, searchAdults, searchChildren);

			// Add basic tracking
			additionalInfo['action'] = roomInfo;
			additionalInfo['label'] = childrenAges;

			// Add metrics
			additionalInfo['rooms'] = searchRooms;
			additionalInfo['adults'] = searchAdults;
			additionalInfo['children'] = searchChildren;

			return additionalInfo;
		}
	};
})(window);
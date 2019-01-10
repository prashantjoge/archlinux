'use strict';

(function(window) {
	window.GeExtensionAPI = window.GeExtensionAPI || function() {
		var xyClient = new window.B.XY.Client(),
			desktopNotificationsUrls = {};

		var createDesktopNotificationsListener = function() {
			chrome.notifications.onButtonClicked.addListener( function( notificationId ) {
				followDesktopNotificationLink( notificationId );
			});

			chrome.notifications.onClicked.addListener( function( notificationId ) {
				followDesktopNotificationLink( notificationId );
			});

			chrome.notifications.onClosed.addListener( function( notificationId, byUser ) {
				delete desktopNotificationsUrls[notificationId];
			});
		};

		var followDesktopNotificationLink = function( notificationId ) {
			if( desktopNotificationsUrls && desktopNotificationsUrls[notificationId] ) {
				// Open the generated URL in a new tab and activate it
				chrome.tabs.create({
					url: desktopNotificationsUrls[notificationId],
					active: true
				});
			}
		};

		createDesktopNotificationsListener();

		this.parseJSON = function(data) {
			var result = {};

			try {
				result = JSON.parse(data) || {};
			} catch(err) {
				// Do nothing
			}

			return result;
		};

		this.encodeJSON = function(data) {
			var result = "";

			try {
				result = JSON.stringify(data) || "";
			} catch(err) {
				// Do nothing
			}

			return result;
		};

		this.hackishRemoveDismissed = function(data) {
			var dismissNotifications = this.parseJSON(window.localStorage.getItem('GeExtensionDismissedNotifications'));

			if(dismissNotifications === null || data.userNotifications === undefined) return;

				var notifications = (data.userNotifications ? data.userNotifications.notifications : []),
					i = 0;

				data.userNotifications.notifications = [];

				for(i; i < notifications.length; i++) {
					if(dismissNotifications[notifications[i].b_id] === undefined) {
						data.userNotifications.notifications.push(notifications[i]);
					}
				}

			return data;
		};

		this.setAsDismissed = function(id) {
			var dismissNotifications = this.parseJSON(window.localStorage.getItem('GeExtensionDismissedNotifications')) || {};
			dismissNotifications[id] = 1;
			var s = this.encodeJSON(dismissNotifications);
			window.localStorage.setItem ('GeExtensionDismissedNotifications', s);
		};

		this.setExtensionData = function(data) {
			var s;

			// Abort if we don't have any data to stringify
			if (!data) return;

			var new_data = data;

			//Fixed Dismiss Experiment
			if(B.track.getVariant(4)) {
				new_data = this.hackishRemoveDismissed(data);
			}

			// Stringify the JSON object and save to local storage
			s = this.encodeJSON(new_data);
			window.localStorage.setItem ('GeExtension', s);
		};

		this.removeExtensionData = function() {
			var hasFirstRun = this.hasFirstRun();

			var data = {
				config: this.loadConfig()
			};

			this.setExtensionData( data );
			this.hasFirstRun(hasFirstRun);
		};

		this.getExtensionData = function() {
			var data = this.parseJSON(window.localStorage.getItem( 'GeExtension' ));

			return data;
		};

		this.processNotifications = function(notifications, enableDesktopNotifications) {
			var storedNotifications = [],
				extensionData = this.getExtensionData(),
				mostRecentNotification,
				APIContext = this,
				maxDesktopNotifications = 0,
				latestTimestamp,
				result,
				allNotifications,
				config = this.loadConfig();

			// Abort if we don't have notifications
			if ( !notifications || !$.isArray(notifications )) return;

			if( extensionData && extensionData.userNotifications ) {
				storedNotifications = extensionData.userNotifications.notifications;
				mostRecentNotification = extensionData.userNotifications.mostRecentNotification;
			}

			storedNotifications = ( storedNotifications ? storedNotifications : [] );

			allNotifications = storedNotifications.concat(notifications);

			allNotifications = this.removeUnusedNotifications( allNotifications );

			// Go through each notification, check if it's new, and if important, show desktop notification

			allNotifications.forEach(function(item, i, arr) {

				if( ( item.isImportant && !item.isShownAsDesktopNotification && enableDesktopNotifications ) ) {
					// Show desktop notification only if we haven't reached the max
					if( maxDesktopNotifications < config.maxDesktopNotifications ) {
						APIContext.showDesktopNotification(item);
						item.isShownAsDesktopNotification = 1;
						maxDesktopNotifications++;
					}
				}

				if( !mostRecentNotification ) {
					mostRecentNotification = item.b_created_timestamp;
				} else {
					if( mostRecentNotification < item.b_id ) {
						mostRecentNotification = item.b_id;
					}
				}

				// Add screen type to the item (makes parsing easier)
				item.isRetina = config.isRetina;
			});

			extensionData.userNotifications = {
				notifications: allNotifications,
				mostRecentNotification: mostRecentNotification
			};

			this.setExtensionData(extensionData);

		};

		this.dismissNotification = function( id ) {
			var extensionData = this.getExtensionData(),
				notifications = ( extensionData.userNotifications && extensionData.userNotifications.notifications ? extensionData.userNotifications.notifications : undefined );

			if( !id || !notifications ) return;

			notifications.forEach( function( item, i, arr ) {
				if( id.toString() === item.b_id.toString() ) {
					extensionData.userNotifications.notifications[i].b_is_dismissed = 1;
				}
			});

			//Fixed Dismiss Experiment
			if(B.track.getVariant(4)) {
				this.setAsDismissed(id);
			}

			this.setExtensionData( extensionData );
			this.updateIcon();
		};

		this.readNotification = function( id ) {
			var extensionData = this.getExtensionData(),
				notifications = ( extensionData.userNotifications && extensionData.userNotifications.notifications ? extensionData.userNotifications.notifications : undefined ),
				notification;

			if( !id || !notifications ) return;

			notifications.forEach( function( item, i, arr ) {
				if( id.toString() === item.b_id.toString() ) {
					extensionData.userNotifications.notifications[i].b_is_seen = 1;
					notification = arr[i];
				}
			});

			this.setExtensionData( extensionData );
			this.updateIcon();

			xyClient.thread('main');

			xyClient.cmd('user_token_authenticate', '%main%', {
				key: extensionData.loginStatus.key,
				token: extensionData.loginStatus.token
			});

			xyClient.cmd( 'mark_notification_seen', '%main%', {
				type: notification.b_type,
				fingerprint: notification.b_fingerprint
			});

			xyClient.go();
		};

		this.removeUnusedNotifications = function( notifications ) {

			var i,
				l,
				item,
				currentLocalTime,
				currentUTCTime,
				isDismissed,
				hasExpired,
				seenIds = {},
				result = [];

			if( ! $.isArray( notifications ) ) return [];

			currentLocalTime = new Date();
			currentUTCTime = new Date( currentLocalTime.getUTCFullYear(), currentLocalTime.getUTCMonth(), currentLocalTime.getUTCDate(), currentLocalTime.getUTCHours(), currentLocalTime.getUTCMinutes(), currentLocalTime.getUTCSeconds() );

			notifications.forEach( function(item, i, arr) {

				hasExpired = false;
				isDismissed = false;

				if( currentUTCTime.getTime() > (new Date(item.b_expires)).getTime() ) {
					hasExpired = true;
				}

				item.b_is_dismissed = parseInt( item.b_is_dismissed, 10 );

				if( item.b_is_dismissed ) {
					isDismissed = true;
				}

				// Notifications has not expired yet, is not dismissed, and it's not a duplicate
				if( !hasExpired && !isDismissed && !seenIds[item.b_id] ) {
					result.push(item);
				}

				// Notification has been processed, store it so we don't do duplicates
				seenIds[item.b_id] = true;
			});

			return result;
		};

		this.authenticateUser = function( credentials, callbacks ) {
			var extensionData = this.getExtensionData(),
				authCallbacks = ( callbacks && callbacks.authenticationCallbacks ? callbacks.authenticationCallbacks : {} ),
				notificationsCallbacks = ( callbacks && callbacks.notificationsCallbacks ? callbacks.notificationsCallbacks : {} ),
				config = this.loadConfig(),
				additionalParams = {
					aid: config.affiliateID,
					label: config.trackingLabel
				};

			if( !credentials ) return;

			additionalParams.language = this.getUserLanguageForURL();
			additionalParams.email = credentials.email;

			if( extensionData.userNotifications && extensionData.userNotifications.mostRecentNotification ) {
				additionalParams.latest_notification_id = extensionData.userNotifications.mostRecentNotification;
			}
				
			xyClient.init ( {
				url: config.XYUrl,
				username: config.extensionAuthentication.key,
				password: config.extensionAuthentication.secret
			} );

			// Log in the user
			xyClient.thread('main');
			xyClient.cmd('user_token_login','%login%',{
				email: credentials.email,
				password: credentials.password,
			}, authCallbacks.successCallback, authCallbacks.errorCallback);

			this.generateNotificationsCommand( xyClient, additionalParams, notificationsCallbacks );

			this.generateExtensionConfigCommand( xyClient );

			xyClient.go();

		};

		this.updateNotifications = function(data) {

			var APIContext = this,
				data = data || {},
				extensionData = APIContext.getExtensionData(),
				successFn = ( typeof(data.successCallback) === 'function' ? data.successCallback : undefined ),
				errorFn = ( typeof(data.errorCallback) === 'function' ? data.errorCallback : undefined ),
				enableDesktopNotifications = data.enableDesktopNotifications,
				threadName = 'main',
				config = this.loadConfig(),
				additionalParams = {
					aid: config.affiliateID,
					label: config.trackingLabel	
				};

			if( ! ( extensionData.loginStatus && extensionData.loginStatus.key ) ) return;

			additionalParams.language = this.getUserLanguageForURL();

			if( extensionData.userNotifications && extensionData.userNotifications.mostRecentNotification ) {
				additionalParams.latest_notification_id = extensionData.userNotifications.mostRecentNotification;
			}

			xyClient.init ( {
			    url: config.XYUrl,
			    username: config.extensionAuthentication.key,
			    password: config.extensionAuthentication.secret
			} );
			xyClient.thread(threadName);

			xyClient.cmd('user_token_authenticate', '%user_token_authenticate%', {
				key: extensionData.loginStatus.key,
				token: extensionData.loginStatus.token
			});

			this.generateNotificationsCommand( xyClient, additionalParams, data );

			this.generateExtensionConfigCommand( xyClient );

			xyClient.go();

		};

		this.loadConfig = function() {
			var config = new window.Config(),
				extensionData = this.getExtensionData();

			// This order does not work because then the static config will always override the dynamic config
			config = $.extend( config, ( extensionData.config || {} ) );

			return config;
		};

		this.generateExtensionConfigCommand = function( xyClient ) {
			var APIContext = this;

			// Get updated informationa bout extension configuration
			xyClient.thread('get_config');

			xyClient.cmd('get_extension_config','%get_config%',{},function( response ) {
				var config,
					extensionData;

				if( response && response['get_config']  && response['get_config']['%get_config%'] ) {
					config = APIContext.loadConfig();
					extensionData = APIContext.getExtensionData();

					extensionData.config = response['get_config']['%get_config%'];

					APIContext.setExtensionData( extensionData );

				}
			});
		};

		this.generateNotificationsCommand = function( xyClient, additionalParams, data ) {
			var APIContext = this,
				threadName = 'main',
				commandFields = 'notifications,is_genius,notifications,language,travel_parties,avatar,name',
				localData = APIContext.getExtensionData(),
				requestValidEmail = false;

			if( !xyClient ) return;

			// Add welcome notifications if this is the first run of the extension
			if (!this.hasFirstRun()) {
				additionalParams['firstrun'] = 1;
			}

			// Request valid email field only after login to prevent getting erroneous results due to
			// security issues (it returns 1 if email is not provided)
			if (!localData || (localData && !localData.userPreferences) || (localData && localData.userPreferences && (typeof localData.userPreferences.isValidEmail === 'undefined'))) {
				commandFields += ',valid_email';
				requestValidEmail = true;
			}

			xyClient.cmd( 'user_generate_notifications','%user_generate_notifications%', {
				types: 'upcoming'
			});

			xyClient.cmd( 'user_get_information','%user_get_information%', {
				fields: commandFields,
				additional_params: additionalParams
			}, function( response ) {
				var notifications,
					responseData,
					extensionData = APIContext.getExtensionData(),
					storedNotificationsCount = 0;

				if( response[threadName] && response[threadName]['%user_get_information%'] && response[threadName]['%user_get_information%'].notifications ) {

					responseData = response[threadName]['%user_get_information%'];
					notifications = APIContext.parseJSON( responseData.notifications );
					extensionData.userPreferences = extensionData.userPreferences || {};

					if( responseData.language ) {
						extensionData.userPreferences.language = APIContext.parseJSON(responseData.language);
					}

					// Set the Genius user flag
					if (responseData.is_genius) {
						var isGenius = APIContext.parseJSON(responseData.is_genius);

						if (isGenius === 1) {
							extensionData.userPreferences.isGeniusUser = true;
						} else {
							extensionData.userPreferences.isGeniusUser = false;
						}
					}

					// Load traveler groups
					if( responseData.travel_parties ) {
						extensionData.userPreferences.travelParties = APIContext.parseJSON(responseData.travel_parties);

						// Add the json stringified version of party data to use for select box
						extensionData.userPreferences.travelParties.forEach( function( item, i, arr ) {
							arr[i].partyJSON = JSON.stringify( arr[i] );
						});
					}

					// Set the flag for valid email
					if (requestValidEmail) {
						if (responseData.valid_email) {
							extensionData.userPreferences.isValidEmail = true;
						} else {
							extensionData.userPreferences.isValidEmail = false;
						}
					}

					// Add user name details
					if (responseData.name) {
						var name = APIContext.parseJSON(responseData.name),
							userName = {};

						if (name.name_available) {
							userName.isNameAvailable = true;
						} else {
							userName.isNameAvailable = false;
						}

						if (name.firstname) {
							userName.firstName = name.firstname;
						}

						if (name.lastname) {
							userName.lastName = name.lastname;
						}

						if (name.fullname) {
							userName.fullName = name.fullname;
						}

						extensionData.userPreferences.userName = userName;
					}

					// Add user avatar details
					if (responseData.avatar) {
						var avatar = APIContext.parseJSON(responseData.avatar),
							userAvatar = {};

						if (avatar.avatar_available) {
							userAvatar.isAvatarAvailable = true;
						} else {
							userAvatar.isAvatarAvailable = false;
						}

						if (avatar.avatar_url) {
							userAvatar.avatarURL = avatar.avatar_url;
						}

						if (avatar.is_facebook_avatar) {
							userAvatar.isFacebookAvatar = true;
						} else {
							userAvatar.isFacebookAvatar = false;
						}

						extensionData.userPreferences.userAvatar = userAvatar;
					}

					if(extensionData.userNotifications && extensionData.userNotifications.notifications){
						for(var notif in extensionData.userNotifications.notifications) {
							if(extensionData.userNotifications.notifications[notif].b_is_dismissed === 0) {
								// Track fixed dismiss exp
								// S0 is tracked in BE
								// S1 is tracked onview
								B.track.stage(4, 1);
							}

							if(extensionData.userNotifications.notifications[notif].b_is_seen === 0) {
								// Track mark as read exp
								// S0 is tracked in BE
								// S1 is tracked onview
								B.track.stage(2, 1);
							}
						}
					}

					if(extensionData.userNotifications && extensionData.userNotifications.notifications) {
						extensionData.userNotifications.notifications = APIContext.removeUnusedNotifications(extensionData.userNotifications.notifications);
					}

					APIContext.setExtensionData( extensionData );

					if( extensionData && extensionData.userNotifications ) {
						storedNotificationsCount = extensionData.userNotifications.notifications.length;
					}

					if( notifications.length ) {

						APIContext.processNotifications(notifications, data.enableDesktopNotifications);

					}

					if( data.successCallback ) {
						data.successCallback( notifications, Date.now() );
					}

					APIContext.updateIcon();
				}
			}, function(error) {
				if( data.errorCallback ) {
					data.errorCallback( error );
				}
			});
		};

		this.localNotificationsPresent = function() {
			var data = this.getExtensionData();

			return ( data.userNotifications && data.userNotifications.notifications && data.userNotifications.notifications.length );
		}

		this.showDesktopNotification = function(notification) {

			var desktopNotificationId,
				notificationDate = ( notification.b_checkin_date ? notification.b_checkin_date : notification.b_created_localized );

			if( !notification || !$.isPlainObject(notification)) return;

			// Create the notification object
			var desktopNotification = {
				type: "basic",
				title: notification.translated_message_text,
				message: notificationDate,
				// TODO The event time must be correctly set on the back end
				eventTime: Date.now() + 50
			};

			desktopNotification.iconUrl = '/img/icons/notification-icon-bdot.png';

			// Add the human readable notification date as context message
			if ( notification.notificationDate ) {
				desktopNotification.contextMessage = notificationDate;
			}

			// Add the CTA for the notification
			if (typeof notification.landing_uri !== 'undefined' && notification.translated_link_text) {
				desktopNotification.buttons = [{title: notification.translated_link_text}];
			}

			desktopNotificationId = notification.b_id + Date.now();

			if ( notification.landing_uri ) {
				desktopNotificationsUrls[desktopNotificationId] = notification.landing_uri;
			}

			chrome.notifications.create( desktopNotificationId, desktopNotification, function() {});

		};

		this.isUserSignedIn = function() {
			var extensionData = this.getExtensionData();

			return !!(extensionData.loginStatus && extensionData.loginStatus.key)
		};

		this.isGeniusUser = function() {
			var extensionData = this.getExtensionData();

			return !!(extensionData.userPreferences && extensionData.userPreferences.isGeniusUser);
		};

		this.getUserLanguage = function() {
			// Return the language the browser uses not the one the customer has in his/her profile
			return window.navigator.language.toLocaleLowerCase();
		};

		this.getUserLanguageWithoutDialect = function() {
			var userLocale = window.navigator.language.toLowerCase();
			var userInfo = userLocale.split('-');

			return userInfo[0];
		};

		this.getUserLanguageForURL = function() {
			var config = this.loadConfig();

			// Check whether the language is supported with the dialect
			if (this.isLanguageSupported(this.getUserLanguage())) {
				return this.getUserLanguage();
			}

			// Check whether the language is supported without the dialect (and if it's Norwegian Bokmal)
			if (this.isLanguageSupportedWithoutDialect(this.getUserLanguageWithoutDialect())) {
				return this.getUserLanguageWithoutDialect(this.getUserLanguageWithoutDialect());
			} else if (this.getUserLanguageWithoutDialect() === 'nb') {
				return 'no';
			}

			// Otherwise, return English
			return config.defaultLanguage;
		};

		this.getUserCountryFromLocale = function() {
			var userLocale = window.navigator.language.toLowerCase();
			var userInfo = userLocale.split('-');

			return userInfo[1];
		};

		this.isLanguageSupported = function(language) {
			var config = this.loadConfig();

			return ($.inArray(language, config.locale.languagesWithDialect) >= 0);
		};

		this.isLanguageSupportedWithoutDialect = function(language) {
			var config = this.loadConfig();

			return ($.inArray(language, config.locale.languagesWithoutDialect) >= 0);
		};

		this.isLanguageRTL = function(languageWithoutDialect) {
			if (languageWithoutDialect === 'ar' || languageWithoutDialect === 'he') {
				return true;
			}

			return false;
		};

		/* Update the extension icon depending on the signed in status, user type and notification items */
		this.updateIcon = function() {
			var config = this.loadConfig();

			if (this.isUserSignedIn()) {
				chrome.browserAction.setIcon({path: {
					19: config.imagesMDPIFolder + '/icons/bdot_icon.png',
					38: config.imagesHDPIFolder + '/icons/bdot_icon.png'
				}});
			} else {
				chrome.browserAction.setIcon({path: {
					19: config.imagesMDPIFolder + '/icons/bdot_icon_rev.png',
					38: config.imagesHDPIFolder + '/icons/bdot_icon_rev.png'
				}});
			}

			// Use branding colors (set badge background to Booking.com bright red)
			chrome.browserAction.setBadgeBackgroundColor({color:'#E52923'});

			// Calculate number of unread notifs
			var extensionData = this.getExtensionData(),
				notifications = ( extensionData.userNotifications && extensionData.userNotifications.notifications ? extensionData.userNotifications.notifications : undefined );

			var value = 0;

			if (notifications && notifications.length) {
				notifications.forEach( function( item, i, arr ) {
					var increment = true;

					if(B.track.getVariant(2) && arr[i].b_is_seen) {
						increment = false;
					}

					if(arr[i].b_is_dismissed !== 1 && increment) {
						value++;
					}
				});
			}

			// Set the badge text if there has been a value specified
			if (value !== 0) {
				chrome.browserAction.setBadgeText({text: value.toString()});
			} else {
				// No number, no text
				chrome.browserAction.setBadgeText({text: ''});
			}
		};

		this.hasFirstRun = function(force) {
			var extensionData = this.getExtensionData();

			if (typeof extensionData.hasFirstRun === 'undefined' || (typeof extensionData.hasFirstRun !== 'undefined' && extensionData.hasFirstRun === false) || force === true) {
				extensionData.hasFirstRun = true;

				this.setExtensionData(extensionData);

				return false;
			}

			return extensionData.hasFirstRun;
		};

		this.clearFirstRun = function() {
			var extensionData = this.getExtensionData();

			extensionData.hasFirstRun = false;
			this.setExtensionData(extensionData);
		}
	};
})(window);

$(function(){
	window.LightAutocomplete = function(element, options, config, api, xy) {
		var self = this,
			xhr,
			timeout,
			term,
			autocomplete = $('<ul id="autocomplete-results" class="autocomplete-results"></ul>'),
			destinationType = $('#destinationType'),
			destinationId = $('#destinationId'),
			defaults = {
				url: '/autocomplete',
				min_length: 2,
				delay: 300,
				params: typeof(autocomplete_vars) !== 'undefined' ? autocomplete_vars.search_autocomplete_params : {},
				supportKeyNavigation: 0,
				keepFocusUponSelection: 0,
				useCache: 1,
				disableAutocorrect: 1,
				enableBlurEventHandler: 1,
				autocompleteItem: '.autocomplete-item',
				autocompleteItemClass: 'autocomplete-item',
				autocompleteActiveItem: '.autocomplete-item-active',
				autocompleteActiveItemClass: 'autocomplete-item-active',
			};
		// This is a black list of keys that will NOT trigger autocomplete
		var keymap = {
			9: 'tab',
			13: 'enter',
			16: 'shift',
			17: 'ctrl',
			18: 'alt',
			20: 'capslock',
			27: 'esc',
			32: 'space',
			33: 'pageup',
			34: 'pagedown',
			35: 'end',
			36: 'home',
			37: 'left',
			38: 'up',
			39: 'right',
			40: 'down',
			45: 'ins',
			91: 'meta',
			93: 'meta',
			224: 'meta'
		};

		var navigationKeymap = {
			9: 'tab',
			13: 'enter',
			27: 'esc',
			38: 'up',
			40: 'down'
		};

		// Add the F keys to the keymap
		for (var i = 1; i < 20; ++i) {
			keymap[111 + i] = 'f' + i;
		}

		var init = function(options) {
			self.update(options);
			self.autocomplete = autocomplete;
			self.targetInput = element;
			self.navigationKeymap = navigationKeymap;
			self.listenToMouseHovers = true;

			// Override the jQuery on with delegate
			if(!$.fn.on) {
				$.fn.on = function(event, selector, callback){
					return ( !selector || $.isFunction(selector) ) ?
						this.bind(event, selector || callback) : this.delegate(selector, event, callback);
				};
			}
			if(self.settings.autocompleteWrapperClasses) {
				autocomplete.addClass(self.settings.autocompleteWrapperClasses);
			}
			element
				.on('input focus', function(){
					fetch_results();
				})
				.on('keyup', function( event ){
					var keyCode = event.which,
						isEnterKey = navigationKeymap[keyCode] === 'enter',
						isTabKey = navigationKeymap[keyCode] === 'tab';

					// Detect if event is a navigation key (arrow up/down)
					if(self.settings.supportKeyNavigation && navigationKeymap[event.which] && self.handleKeyboardNavigation) {
						event.preventDefault();
						self.handleKeyboardNavigation(event);
					}
				})
				.attr('autocorrect', 'off')
				.data('autocompleteSelected', false)
				.after(autocomplete);

			if(self.settings.enableBlurEventHandler) {
				element.on('blur', function(e) {
					var results = autocomplete.find(self.settings.autocompleteItem);
					
					//if (results.length) return;

					if(results.length) {
						var activeItem = autocomplete.find(self.settings.autocompleteActiveItem);
						var activeItemPresent = activeItem.length;

						if(activeItemPresent ) {
							self.select_result.call(activeItem[0]);
						} else {
							self.select_result.call(results[0]);
						}
					}

					autocomplete.hide().empty();
					if (xhr) xhr.abort();
					return;
				});
			}

			autocomplete
				.on('click', self.settings.autocompleteItem, self.select_result)
				.on('mouseenter', self.settings.autocompleteItem, function(e) {
					if(!self.listenToMouseHovers) {
						e.preventDefault();
						return;
					}
					$(this).addClass(self.settings.autocompleteActiveItemClass);
				})
				.on('mouseleave', self.settings.autocompleteItem, function(e) {
					if(!self.listenToMouseHovers) {
						e.preventDefault();
						return;
					}
					autocomplete.find(self.settings.autocompleteActiveItem).removeClass(self.settings.autocompleteActiveItemClass);
				});
		};

		self.select_result = function() {
			var $this = $(this),
				itemId = $this.data('item-id'),
				item = $this.data('autocomplete-item');

			self.current_item = item;
			term = self.current_item.name ? self.current_item.name : self.current_item;

			element.val(term).removeClass('has-autocomplete');

			if(!self.settings.keepFocusUponSelection) {
				element
					.attr('disabled', 'true')
					.blur();
			}

			// Hide the autocomplete
			autocomplete.hide();
			
			// Set flag to selected autocomplete value
			element.data('autocompleteSelected', true);


			// Set the destination type and ID;
			// ----------
			// WARNING: ufi needs to match city (when sent to searchresults.html)

			if (item.type === 'ufi') {
				destinationType.val('city');
			} else {
				destinationType.val(item.type);
			}

			if (item.numericId) {
				destinationId.val(item.numericId);
			} else {
				destinationId.val(item.id);
			}
			
			// This needs to use the global event dispatcher that has been discussed on dev.clientside
			element.trigger('AUTOCOMPLETE:item_selected', {
				label: term,
				id: itemId
			});
			window.setTimeout(function(){ element.removeAttr('disabled'); }, 1);
		};

		var parseResults = function(results, resultsInCache) {
			var items = 0;
			autocomplete.empty();

			if(!resultsInCache) {
				self.setResultInCache(term, results);
			}

			$.each(results, function(i, item) {
				items++;
				autocomplete.append(self.render_item(item, i));
			});

			if (items > 0) {
				autocomplete.show();
				element.addClass('has-autocomplete');
			} else {
				if(self.settings.showEmptyResultSetMsg) {
					// Call render item with empty set so it will trigger the no item msg
					autocomplete.append(self.render_item([]));
					autocomplete.show();
				} else {
					autocomplete.hide();
				}
				element.removeClass('has-autocomplete');
			}
		};

		var request_results = function() {
			var APIContext = api,
				xyClient = xy,
				extensionData = APIContext.getExtensionData(),
				successFn = ( typeof(successCallback) === 'function' ? successCallback : undefined ),
				errorFn = ( typeof(errorCallback) === 'function' ? errorCallback : undefined ),
				threadName = 'autocomplete',
				value = element.val(),
				cachedResults,
				resultsInCache = false,
				additionalParams = {};

			if (!(extensionData.loginStatus && extensionData.loginStatus.key)) return;

			// Store original value for further retrieval
			self.originalValue = value;

			if (value == term && self.settings.min_length > 0) return;

			// Overwrite the autocomplete selected flag, as the user has (probably) changed the text
 			element.data('autocompleteSelected', false);

 			// Clear the destination type and ID fields, as we're not going to use them (the user
 			// has typed something else)
 			destinationType.val('');
 			destinationId.val('');

			if (value.length < self.settings.min_length) {
				autocomplete.hide().empty();
				element.removeClass('has-autocomplete');
				if (xhr) xhr.abort();
				return;
			}

			term = value;

			if(self.settings.useCache && self.cachePresent) {
				cachedResults = self.getCachedResult(term);
				if(cachedResults) {
					parseResults(cachedResults, true);
					resultsInCache = true;
					return;
				}
			}
			
			var params = $.extend({},self.settings.params , {term: term}),
				paramOnEmptyString = self.settings.sendParamOnEmptyString ? self.settings.sendParamOnEmptyString : {};

			if(term === '' && paramOnEmptyString.name && paramOnEmptyString.value) {
				params[paramOnEmptyString.name] = paramOnEmptyString.value;
			}

			clearTimeout(timeout);

			var successCallback = function(response) {
				if (response && (typeof response === 'object') && response.hasOwnProperty('autocomplete')) {
					var thread = response['autocomplete'];

					if ('%search%' in thread) {
						parseResults(thread['%search%'], false);
					}
				}
			};

			var errorCallback = function(response) {
				var currentError,
					shownError;
				
				if( response && response.responseJSON && response.responseJSON.errors && response.responseJSON.errors[0] ) {
					error = response.responseJSON.errors[0].text;
					if( extensionContext.localData.errorMessages && extensionContext.localData.errorMessages[error] ) {
						shownError = extensionContext.localData.errorMessages[error];
					} else if( config.errorMessages && config.errorMessages[error] ) {
						shownError = config.errorMessages[error];
					}

					if(shownError) {
						extensionContext.showErrorMessages(new Array(shownError));
					}

				}
				extensionContext.hideLoadingOverlay();
			};

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

			xyClient.search('%search%',{
				"domain": "geo",
				"search": {
					"autocomplete": {
						"type": "autocomplete",
						"string": element.val(),
						"language": api.getUserLanguage() || "en"
					}
				},
				"sort": ["elastic_search_score"],
				"page": {
					"offset": 0,
					"count": 5
				},
				"objects" : {
					"dataset": "hashes",
					"name": {"to": "name"},
					"type": {"to": "dest_type"},
					"id": {"to": "dest_id"},
					"numericId": {"to": "numeric_id"}
				}
			}, successCallback, errorCallback);

			xyClient.go();
		};

		var fetch_results = function() {

			clearTimeout( timeout );

			timeout = setTimeout(function() {
				request_results.call(self);
			} , self.settings.delay );
		};

		self.update = function(options) {
			options = options || {};
			self.settings = $.extend({}, defaults, options);
		};

		self.render_item = function(item, index) {
			var label = '';

			if (typeof item.name === 'undefined') return;

			return $('<li class="autocomplete-item ' + item.type + '" role="menuitem" data-index="' + index + '"><a tabindex="-1" class="clearfix"><i class="autocomplete-icon"></i><span>' + item.name + '</span></a></li>').data('autocomplete-item', item).data('item-id', index);
		};

		self.getCachedResult = function(searchTerm) {
			return this.cachedItems[searchTerm];
		};

		self.setResultInCache = function(searchTerm, results, overridePastResults) {
			if(overridePastResults || !this.cachedItems[searchTerm]) {
				this.cachedItems[searchTerm] = results;
			}
		};

		self.cachePresent = true;

		self.cachedItems = {};

		self.handleKeyboardNavigation = function(event) {
			if(!event) return;
		
			var keyCode = event.which,
				results,
				activeItem,
				activeItemIndex,
				followingItem,
				navigationKeymap = this.navigationKeymap,
				isDownKey = navigationKeymap[keyCode] === 'down',
				isUpKey = navigationKeymap[keyCode] === 'up',
				isEnterKey = navigationKeymap[keyCode] === 'enter',
				isTabKey = navigationKeymap[keyCode] === 'tab',
				currentScrollTop,
				itemHeight,
				autocomplete = this.autocomplete,
				autocompleteHeight,
				currentOffset,
				element = this.targetInput;
		
			// If autocomplete is shown, then check for navigation keys
			if( autocomplete.is(':visible') ) {
				// Escape key only needs autocomplete to be shown
				if(navigationKeymap[keyCode] === 'esc') {
					autocomplete.hide();
					element.val(this.originalValue).removeClass('has-autocomplete');
				} else {
					results = autocomplete.find(self.settings.autocompleteItem);
					if(results.length) {
						activeItem = autocomplete.find(self.settings.autocompleteActiveItem);
						activeItemPresent = activeItem.length;

						if(isEnterKey || isTabKey) {
							event.preventDefault();
							if(activeItemPresent ) {
								this.select_result.call(activeItem[0]);
							} else {
								this.select_result.call(results[0]);
							}
						} else if(activeItemPresent) {
						// We have an active item on the list
							activeItemIndex = activeItem.data('index');
							
							if(isDownKey) {
								activeItemIndex += 1;
							} else {
								activeItemIndex -= 1;
							}
							followingItem = $(results.get(activeItemIndex));
							// There is a next element on the list, we mark is as active and remove the current active item class
							if( activeItemIndex >= 0 && followingItem.length) {
								activeItem.removeClass(self.settings.autocompleteActiveItemClass);
								autocompleteHeight = autocomplete.outerHeight();
								
								itemHeight = followingItem.addClass(self.settings.autocompleteActiveItemClass).outerHeight();
								currentScrollTop = autocomplete.scrollTop();
								currentOffset = (itemHeight + 1) * activeItemIndex;
								// Item is hidden in the upper part of autocomplete, we have to scroll up
								if( currentOffset < currentScrollTop ) {
									this.listenToMouseHovers = false;

									//autocomplete.scrollTop(currentOffset);
									autocomplete.animate({
										scrollTop: currentOffset
									},
									{
										duration: 1,
										complete: function() {
											//listenToMouseHovers = true;
											if(this.listenToMouseHoversTimeout) {
												clearTimeout(this.listenToMouseHoversTimeout);
											}
											setTimeout(function() {
												this.listenToMouseHovers = true;
											}, 150);
										}
									});
								// Item is hidden in the lower part of autocomplete, we have to scroll down
								} else if( currentOffset > (currentScrollTop + autocompleteHeight) ) {
									this.listenToMouseHovers = false;
									//autocomplete.scrollTop(currentOffset + itemHeight - autocompleteHeight);
									
									autocomplete.animate({
										scrollTop: (currentOffset + itemHeight - autocompleteHeight)
									},
									{
										duration: 1,
										complete: function() {
											if(this.listenToMouseHoversTimeout) {
												clearTimeout(this.listenToMouseHoversTimeout);
											}
											//listenToMouseHovers = true;
											setTimeout(function() {
												this.listenToMouseHovers = true;
											}, 150);
										}
									});
								}
								element.val(followingItem.data('autocomplete-item').name);
							} else {
								// If there are no active items, either we are going to start scrolling in the list, or we have reached the end and have to get back to the input
								// There is an item, so we have to remove all active classes and restore original input value
								if(activeItemPresent) {
									activeItem.removeClass(self.settings.autocompleteActiveItemClass);
									element.val(this.originalValue);
								}
							}
						// We are going to start scrolling in the list, so we have to highlight the first element on the list
						} else {
							
							if(isDownKey) {
								activeItemIndex = 0;
								activeItem = $(results.get(activeItemIndex));
								autocomplete.scrollTop(0);
							} else {
								activeItemIndex = results.length - 1;
								activeItem = $(results.get(activeItemIndex));
								autocomplete.scrollTop(activeItem.outerHeight() * activeItemIndex);
							}
							
							element.val(activeItem.addClass(self.settings.autocompleteActiveItemClass).data('autocomplete-item').name);
						}
					}
				}				
			}
		};


		init(options);
	};

	$.fn.LightAutocomplete = function(options, config, api, xy) {
		return this.each(function(){
			var element = $(this),
				instance = $(this).data('lightAutocomplete');

			if (instance) {
				instance.update(options);
			} else {
				instance = new window.LightAutocomplete(element, options, config, api, xy);
				element.data('lightAutocomplete', instance);
			}
		});
	};
});



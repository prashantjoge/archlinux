window.B = window.B || {};

var config = new window.Config();

/**
 * Current experiments on window.exps:
 *
 * 0: tfl_browser_extension_0
 * 1: tfl_browser_extension_1
 * 2: tfl_browser_extension_2
 * 3: tfl_browser_extension_3
 * 4: tfl_browser_extension_4
 * 5: lp_browser_extension_search_tab_first
 *
 * Experiments are defined at:
 *   lib/Bookings/Apache/LightAction/Book.pm
 *
 * Search for this LightAction:
 *   get_browser_extension_exp_hashes
 *
 * In theory you could open config.js and point to your book KVM
 * but I'm getting Access-Control-Allow-Origin errors. Only on the KVM, not live.
 * The only way I found to test the LightAction and make sure it's returning the correct experiments is:
 *
 * curl -X POST -H "Origin: booking.com" -H "X-Booking-AID: 100000" "https://$USER-book.dev.booking.com/get_browser_extension_exp_hashes"
 *
 * If you wanna force some experiment variant just to test, look at the end of
 * the file popup.js, on the callback of '/get_browser_extension_exp_hashes' ajax call.
 * I don't know if it's the only way, but that's the way I found.
 */

window.B.track = {
	_queue : [],

	_isQueueResolved : false,

	_isTracked : {},

	createIframe: function() {
		$('body').append('<iframe class="hidden" id="ab-testing-iframe" sandbox="allow-same-origin allow-scripts" src="' + config.secureRootURL + '/general.html?tmpl=genius/chrome-extension/iframe"></iframe>');
	},

	postMessage: function(win, data) {
		if(!this._isTracked[data.id]) {
			var result = win.postMessage(
				data,
				config.secureRootURL
			);

			this._isTracked[data.id] = 1;
		}
	},

	_isIframeLoadEventSet: false,

	setIframeLoadEvent: function() {
		var that = this;

		var win = document.getElementById("ab-testing-iframe").contentWindow;

		$('#ab-testing-iframe').load(function(){
			var i;
			for(i = 0; i < that._queue.length; i++) {
				that.postMessage(win, that._queue[i]);
			}
			that._isQueueResolved = true;

			$('.spinner').remove();
			$('#chrome-extension-loader').remove();
			that._isIframeLoadEventSet = true;
		});
	},

	_innerTracking: function(payload) {
		if(!this._isIframeLoadEventSet) {
			var index = this._queue.map(function(e) { return e.id; }).indexOf(payload.id)
			if(index == -1) {
				this._queue.push(payload);
			}
			this.setIframeLoadEvent();
		} else {
			var win = document.getElementById("ab-testing-iframe").contentWindow;
			this.postMessage(win, payload);
		}
	},

	exp: function(id) {
		if(window.exps === undefined || !window.exps[id]) return;
		var expHash = window.exps[id][0];
		var payload = {
			hash: expHash,
			id: expHash
		};

		if(expHash !== undefined) this._innerTracking(payload);
	},

	stage: function(id, stage) {
		if(window.exps === undefined || !window.exps[id]) return;
		var expHash = window.exps[id][0];
		var payload = {
			hash: expHash,
			id: expHash + "|" + stage,
			stage: stage
		};

		if (expHash !== undefined &&
			stage !== undefined) this._innerTracking(payload);
	},

	getVariant: function(index) {
		if(window.exps === undefined || !window.exps[index]) return;
		return parseInt(window.exps[index][1]);
	},

	customGoal: function(id, customGoal) {
		if(window.exps === undefined || !window.exps[id]) return;
		var expHash = window.exps[id][0];
		var payload = {
			hash: expHash,
			id: expHash + "_" + customGoal,
			customGoal: customGoal
		};

		if (expHash !== undefined &&
			customGoal !== undefined) this._innerTracking(payload);
	},

	loopQueue: function() {
		var that = this;
		if(!this._isQueueResolved) {
			this.setIframeLoadEvent();
			setTimeout(function() {
				that.loopQueue();
			}, 500);
		}
	},

	init: function() {
		this.createIframe();
		this.loopQueue();
	}
};

window.onload = function() {
	setTimeout(function() {window.B.track.init();},0);
}


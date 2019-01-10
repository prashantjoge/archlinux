window.B = window.B || {};

// TODO add base 64 as B.tools object?

(function (window, $, B) {

	B.XY  = B.XY || {};

	B.XY.Client = function() {

		var //callbacks = {},
				threads = {},
				thread_callbacks = {},
				thread_name = '%foo%',
				base64,
				XYContext = this;


		// TODO these vars can be private
		this.init = function (opts) {
			if ( 'url'      in opts ) { this.url        = opts.url;         }
			if ( 'ticket'   in opts ) { this.ticket     = opts.ticket;      }
			if ( 'username' in opts ) { this.username   = opts.username;    }
			if ( 'password' in opts ) { this.password   = opts.password;    }

			base64 = new Base64();
		};

		this.thread = function (name) {
			thread_name = name;
			// Create empty list of commands for this thread
			threads[name] = [];

			thread_callbacks[name] = {};
		};

		this.cmd = function (cmd, tag, args, successCallback, errorCallback) {
			if(! thread_name) thread_name = '%foo%';

			var currentThreadCallbacks = thread_callbacks[thread_name] || {};

			if( !currentThreadCallbacks[cmd] ) {
				currentThreadCallbacks[cmd] = {
					success: [],
					error: []
				};
			}

			threads[thread_name].push ( {
				"command" : cmd,
				"tag"     : tag,
				"input"   : args
			} );

			if( successCallback && typeof(successCallback) === 'function' ) {
				currentThreadCallbacks[cmd].success.push(successCallback);
			}

			if( errorCallback && typeof(errorCallback) === 'function' ) {
				currentThreadCallbacks[cmd].error.push(errorCallback);
			}

			thread_callbacks[thread_name] = currentThreadCallbacks;
		};

		this.search = function ( tag, args, successCallback, errorCallback ) {
			this.cmd( "search", tag, args, successCallback, errorCallback );
		};

		var runThreadCallbacks = function( data, calledThreads, type ) {
			var callbackType = 'success',
				currentThreadCallbacks,
				callbacks,
				thread,
				command,
				callback,
				runCallback;

			if( type === 'error' ) {
				callbackType = type;
			}

			runCallback = function(val, i, array){

				callback = callbacks[i];

				if(typeof(callback) === 'function') {
					callback.apply(XYContext, data);
				}

			};

			calledThreads = ( Object.keys( calledThreads ) ).join('|');

			for( thread in thread_callbacks) {

				currentThreadCallbacks = thread_callbacks[thread];

				for( command in currentThreadCallbacks ) {
					if( currentThreadCallbacks[command] && currentThreadCallbacks[command][callbackType] && ( calledThreads.indexOf( thread ) !== -1 ) ) {
						callbacks = currentThreadCallbacks[command][callbackType];

						if( $.isArray( callbacks ) ) {

							callbacks.forEach( runCallback );
						}
					}	
				}

			}

		};

		this.go = function () {
			var xy = this,
				passedThreads = threads;

			if ( 'ticket' in this ) {
				passedThreads.context = [{
					command: 'take_ticket',
					input: this.ticket
				}];
			}

			$.ajax({
				type: 'POST',
				url: this.url,
				data: JSON.stringify(passedThreads),
				dataType: 'json',
				beforeSend: function (request) {
					if ( 'username' in xy && 'password' in xy) {
						request.withCredentials = true;
						request.setRequestHeader('Authorization',
							'Basic ' + base64.encode( xy.username + ':' + xy.password) );
					}
				},
				success: function( response,text,xhr ) {
					runThreadCallbacks( arguments, passedThreads );
				},
				error: function( xhr, status, errorThrown ) {
					runThreadCallbacks( arguments, passedThreads, 'error' );
				}
			});

			threads = {};
		};

		var Base64 = function() {
			var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					a256 = '',
					r64 = [256],
					r256 = [256],
					i = 0;

			var UTF8 = {

					/**
					 * Encode multi-byte Unicode string into utf-8 multiple single-byte characters
					 * (BMP / basic multilingual plane only)
					 *
					 * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
					 *
					 * @param {String} strUni Unicode string to be encoded as UTF-8
					 * @returns {String} encoded string
					 */
					encode: function(strUni) {
							// use regular expressions & String.replace callback function for better efficiency
							// than procedural approaches
							var strUtf = strUni.replace(/[\u0080-\u07ff]/g, // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
							function(c) {
									var cc = c.charCodeAt(0);
									return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
							})
							.replace(/[\u0800-\uffff]/g, // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
							function(c) {
									var cc = c.charCodeAt(0);
									return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
							});
							return strUtf;
					},

					/**
					 * Decode utf-8 encoded string back into multi-byte Unicode characters
					 *
					 * @param {String} strUtf UTF-8 string to be decoded back to Unicode
					 * @returns {String} decoded string
					 */
					decode: function(strUtf) {
							// note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
							var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
							function(c) { // (note parentheses for precence)
									var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
									return String.fromCharCode(cc);
							})
							.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, // 2-byte chars
							function(c) { // (note parentheses for precence)
									var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
									return String.fromCharCode(cc);
							});
							return strUni;
					}
			};

			while(i < 256) {
					var c = String.fromCharCode(i);
					a256 += c;
					r256[i] = i;
					r64[i] = b64.indexOf(c);
					++i;
			}

			var code = function (s, discard, alpha, beta, w1, w2) {
					s = String(s);
					var buffer = 0,
							i = 0,
							length = s.length,
							result = '',
							bitsInBuffer = 0;

					while(i < length) {
							var c = s.charCodeAt(i);
							c = c < 256 ? alpha[c] : -1;

							buffer = (buffer << w1) + c;
							bitsInBuffer += w1;

							while(bitsInBuffer >= w2) {
									bitsInBuffer -= w2;
									var tmp = buffer >> bitsInBuffer;
									result += beta.charAt(tmp);
									buffer ^= tmp << bitsInBuffer;
							}
							++i;
					}
					if(!discard && bitsInBuffer > 0) result += beta.charAt(buffer << (w2 - bitsInBuffer));
					return result;
			}

			this.encode = function(plain, utf8encode) {
				plain = Plugin.raw === false || Plugin.utf8encode || utf8encode ? UTF8.encode(plain) : plain;
				plain = code(plain, false, r256, b64, 8, 6);
				return plain + '===='.slice((plain.length % 4) || 4);
			};

			this.decode = function(coded, utf8decode) {
				coded = String(coded).split('=');
				var i = coded.length;
				do {--i;
						coded[i] = code(coded[i], true, r64, a256, 6, 8);
				} while (i > 0);
				coded = coded.join('');
				return Plugin.raw === false || Plugin.utf8decode || utf8decode ? UTF8.decode(coded) : coded;
			};
		};
	};
})(window, jQuery, window.B);
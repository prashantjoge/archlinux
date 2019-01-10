(function($) {
	var FormValidator = function() {
		var validatorContext = this,
			errors = [],
			errorTracking = [],
			validationMethods = {
				required: function( val ) {
					return !!val;
				},
				age: function(val) {
					var age;

					if (typeof val !== 'undefined') {
						age = parseInt(val);
						return ((age >= 0) && (age <= 17));
					}

					return;
				},
				maxValue: function(val, maxValue) {
					return (val <= maxValue);
				}
			};

		this.validate = function(form, validateOnBlur) {
			var validForm = true,
				errors = [],
				errorTracking = [],
				fieldsToValidate = 'input[data-validation]';

			if (typeof validateOnBlur !== 'undefined' && validateOnBlur === true) {
				fieldsToValidate += '[data-validate-on-blur="true"]';
			}

			$(form).find(fieldsToValidate).each( function() {
				var $this = $(this),
					inputValue = $this.val(),
					currentValidation = $this.data( 'validation' ),
					errorTrackingCategory = $this.data('trackingCategory'),
					errorTrackingAction = $this.data('trackingAction'),
					errorTrackingLabel = $this.data('trackingLabel'),
					highlightFields = $this.data('validationFields');

				$this.parent().removeClass( 'invalid' );

				if (typeof highlightFields !== 'undefined' && highlightFields !== '') {
					$(highlightFields).parent().removeClass('invalid');
				}

				if( currentValidation ) {
					currentValidation = currentValidation.split( '|' );
				}

				currentValidation.forEach( function(val, i, validations) {
					var validation,
						errorMsg;

					// Validations are of format: validationMethod{error message}
					// e.g. data-validation="required{Please enter an email address}"
					validation = val.split( '{' );
					errorMsg = validation[1];

					if (errorMsg) {
						errorMsg = errorMsg.slice(0, -1);
					}

					validation = validation[0];

					if( validationMethods[validation] && typeof( validationMethods[validation] ) === 'function' ) {
						var maxValue;

						if (validation === 'maxValue') {
							maxValue = $this.data('validationMaxValue');
						}

						if( ! ( validationMethods[validation].call(validatorContext, inputValue, maxValue) ) ) {
							validForm = false;

							if (validation === 'maxValue') {
								$(highlightFields).parent().addClass('invalid');
							} else {
								$this.parent().addClass('invalid');
							}
							

							// We don't want the same error to appear more than once even if it refers to multiple fields
							if ($.inArray(errorMsg, errors) === -1) {
								errors.push( errorMsg );

								var error = {};
								error['category'] = errorTrackingCategory;
								error['action'] = errorTrackingAction;
								error['label'] = errorTrackingLabel;

								errorTracking.push(error);
							}
						}
					}
				});
			});

			return {
				valid: validForm,
				errors: errors,
				tracking: errorTracking
			};
		};
	};

	window.B = window.B || {};
	window.B.formValidator = new FormValidator();
})(jQuery);
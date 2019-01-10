// namespace check
$.datepicker = $.datepicker || {};
$.datepicker.regional = $.datepicker.regional || {};
$.datepicker.setDefaults = $.datepicker.setDefaults || function(){};

// Get locale information from translations
var localeInformation = JSON.parse(chrome.i18n.getMessage('localeInformation'));

// Configure date picker
(function(){
	$.datepicker.regional['locale'] = {
		closeText: 'Done', /* Not used */
		prevText: '&nbsp;&lt;&nbsp;', 
		nextText: '&nbsp;&gt;&nbsp;', 
		currentText: localeInformation.currentText,
		monthNames: Array.prototype.slice.call(localeInformation.monthNames),
		monthNamesShort: Array.prototype.slice.call(localeInformation.monthNamesShort),
		dayNames: localeInformation.dayNames,
		dayNamesShort: localeInformation.dayNamesShort,
		dayNamesMin: localeInformation.dayNamesMin,
		weekHeader: localeInformation.weekHeader,
		dateFormat: 'dd/mm/yy',
		firstDay: GeniusExtension.getWeekStartDay(GeniusExtension.getUserCountryFromLocale()),
		isRTL: GeniusExtension.isLanguageRTL(),
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['locale']);
	i18n_date_format = null;
})();

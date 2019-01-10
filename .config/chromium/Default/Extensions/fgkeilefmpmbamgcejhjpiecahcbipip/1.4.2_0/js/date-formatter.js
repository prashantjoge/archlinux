'use strict';

(function (window) {
	window.DateFormatter = window.DateFormatter || function () {
		this.date = function (date, format) {
			// Get locale information from translations
			var localeInformation = JSON.parse(chrome.i18n.getMessage('localeInformation'));

			var dateParts,
				dayIndex,
				weekDay,
				monthIndex,
				month,
				template = localeInformation.dateFormats[format || 'short_date'],
				dateMilliSecond;

				if (typeof date === 'string') {
					dateMilliSecond = isNaN(Date.parse(date)) ?
						Date.parse(date.replace( /-/g , '/' )) :
						Date.parse(date);

					if (!isNaN(dateMilliSecond)) {
						date = new Date(dateMilliSecond);
					}
				}

				if ( !(template && date instanceof Date && isFinite(date)) ) {
					return false;
				}

			dayIndex = date.getDay();

			// Reassign "backend" Sunday to "frontend" Sunday
			localeInformation.weekDays[0] = localeInformation.weekDays[7];

			weekDay = localeInformation.weekDays[dayIndex];
			monthIndex = date.getMonth() + 1;
			month = localeInformation.months[monthIndex];

			dateParts = {
				day_of_month:		date.getDate(),
				weekday:			weekDay.name,
				short_weekday:		weekDay['short'],
				month:				monthIndex,
				month_name:			month.name,
				short_month_name:	month.short_name,
				full_year:			date.getFullYear()
			};

			return $.trim(template.replace(/{([^{}]*)}/g, function (a, b) {
				var r = dateParts[b];
				return typeof r === 'string' || typeof r === 'number' ? r : a;
			}));
		};
	}
})(window);
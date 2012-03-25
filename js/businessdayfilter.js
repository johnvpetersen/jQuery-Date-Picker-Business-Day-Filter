/*!
 * jQuery Date Picker Business Day Filter Plugin v1.0.0
 * https://github.com/johnvpetersen/jQuery-Date-Picker-Business-Day-Filter
 *
 * Copyright 2011, John V. Petersen
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes jquery-1.6.2.js
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 
 * Includes jQuery UI 1.8.16
 *
 * Copyright 2011, (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 *
 * Date: Sun Aug 28 11:18:00 2011 -0400

 * Date: Sun March 25 11:39:00 2011 -0400
 * Fixed limitation where the plugin could only act on one object. Now, it will act on an array of items.
 * Also fixed bug where the initial value of the textbox was getting removed.


 */ 

(function ($) {
    $.fn.businessdayfilter = function (options) {

        var classList = $(this[0]).attr('class').split(" ");

        if ($.inArray("hasDatepicker", classList) == -1) {
            return;
        }

        var settings = {
            holidayList: null,
            disableWeekends: false
        };

        if (options) {
            $.extend(settings, options);
        }

        if (settings.holidayList == null && settings.disableWeekends == false) return;


        if (settings.holidayList != null) {

            var holidays = new Array();
            var count = -1;

            $.each(settings.holidayList, function (key, item) {
                count++;
                if (item.holiday.date != null) {
                    holidays[count] = item.holiday.date;
                } else {
                    console.log("Error processing your holiday list. Review the example provided and make sure each object as a date attribute. Holiday object must conform to the following: {\"holiday\":{\"name\":\"New Years Day\",\"date\":\"1-1-2011\"}}")
                }
            });

        }
        

	var datePickers = $(this);

	$.each(datePickers,function(key,value){

	var datePicker = $(value);
	var datePickerValue = datePicker.val();

        datePicker
	  .data('disableWeekends', settings.disableWeekends)
          .data('holidays', holidays)
          .datepicker("option", "beforeShowDay", function (date) {

            if (date.getDay() == 0 || date.getDay() == 6) return [!($(this).data('disableWeekends'))];

            if ($(this).data('holidays') == null) return [true]

            var dateString = (date.getMonth() + 1).toString() + "-" + date.getDate().toString() + "-" + date.getFullYear().toString();

            if ($.inArray(dateString, $(this).data('holidays')) > -1) return [false];

            return [true];
        })
	.val(datePickerValue);

	});	

    };
})(jQuery);


 

	
		
		



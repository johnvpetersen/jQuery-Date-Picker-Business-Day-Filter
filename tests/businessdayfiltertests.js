/*!
 * jQuery Date Picker Business Day Filter Plugin Tests v1.0.0
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
 * Date: Sat Aug 27 12:25:00 2011 -0400
 */

function loadBusinessDayFilter() {
	 module("When the business day filter has been loaded");
	 
	 
	 var holidayList = [
			{"holiday":{"name":"New Years Day","date":"1-1-2011"}},
			{"holiday":{"name":"Martin Luther King Jr. Day","date":"1-17-2011"}},
			{"holiday":{"name":"Presidents Day","date":"2-21-2011"}},
			{"holiday":{"name":"Memorial Day","date":"5-30-2011"}},
			{"holiday":{"name":"Indpendence Day","date":"7-4-2011"}},
			{"holiday":{"name":"Labor Day","date":"9-5-2011"}},
			{"holiday":{"name":"Columbus Day","date":"10-11-2011"}},
			{"holiday":{"name":"Veterans Day","date":"11-11-2011"}},
			{"holiday":{"name":"Thanksgiving Day","date":"11-24-2011"}},
			{"holiday":{"name":"Christmas Day","date":"12-25-2011"}}
			];
			
	var dateEntry = $('<input id="dateEntry" type="text" style="width: 75px;">');	
	$(dateEntry).datepicker().businessdayfilter({holidayList: holidayList, disableWeekends: true});	

    var disableWeekends = $(dateEntry).datepicker().data("disableWeekends");
    var holidays = $(dateEntry).datepicker().data("holidays");
	
	 
	 test("Given that holidays have been provided and the disable weekends is set to true", function () {
        expect(2);
        equal(disableWeekends,true, "The disable weekends data element will be properly set.");
        equal(holidays.length,10, "The holiday array data element will be properly set.");
		
    });

}
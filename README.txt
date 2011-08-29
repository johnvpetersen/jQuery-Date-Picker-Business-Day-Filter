Full source code can be found at:

https://github.com/johnvpetersen/jQuery-Date-Picker-Business-Day-Filter

Business day filter plugin add on to the standard jQueryUI Date 
Picker widget. 

The date picker is awesome, but the way it deals with holidays and disabled dates is, IMHO, a bit clumsy. I've always thought the date picker should accept an array of holidays as an option and then it would simply disable the dates. I think this is much more straightforward and more re-usable than always having to specify a beforeShowDate function call back.

The code is pretty straightforward. Once your scripts referenced, the following code will get you on your way:

<code>
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
	  
$("#dateEntry").datepicker().businessdayfilter({holidayList: holidayList, disableWeekends: true});

</code>

As you can see, a simple jSON format is used to specify your holidays. You can easily source the jSON from another source such as an HTTP endpoint. The only caveat is that you must have a "date" attribute. You can add any other # of attributes as the plugin ignores them. 

I also went ahead and added an option to suppress weekends. The screenshot in the root of the project 

Enjoy, 

< JVP >
twitter: @johnvpetersen

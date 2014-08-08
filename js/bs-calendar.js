/**
 * @name Bootstrap Calendar
 * @author Jacek Zyœk (jzysk)
 * @version beta
 * @date 2014-08-06
 * @dependencies:
 *     - jquery-1.11.1.min.js or newer
 *     - handlebars-v1.3.0.js or newer
 * @recommended:
 *     - Bootstrap 3 (css + js)
 *     - LESS
 */

(function (env) {
    var calendar = function (options) {
        var selector = null;
        var debug = false;
        var persistenceType = 'localStorage';
        var persistenceModule = null;
        var year = null;
        var month = null;
        var render = true;

        /**
         * Initializes calendar object
         * @constructor
         */
        var _init = function () {
            var o = options;

            // Dependency check
            var error = 'Calendar cannot be initialized. Dependency required: ';

            if (env.Handlebars == undefined) {
                throw new Error(error + 'Handlebars.js');
            }
            if (env.jQuery == undefined) {
                throw new Error(error + 'jQuery.js');
            }

            // Options check
            if (typeof o == 'string') {
                selector = o;
            }
            else if (typeof o == 'object') {
                selector = o.selector;
                if (o.debug != undefined) {
                    debug = o.debug;
                }

                // Initialize persistence module
                if (o.persist != undefined) {
                    persistenceType = o.persist;

                    if (persistenceType != 'localStorage' &&
                        persistenceType != 'ajax') {
                        throw new Error('Invalid persistence type');
                    }

                    switch (persistenceType) {
                        case 'localStorage':
                            persistenceModule = new LocalStoragePersistence();
                            persistenceModule.readAll();
                            break;
                        case 'ajax':
                            persistenceModule = new AjaxPersistence();
                            persistenceModule.readAll();
                            break;
                    }
                }
            }
            else {
                throw new Error('Invalid options');
            }

            if (selector == undefined || selector == null) {
                throw new Error('Invalid selector');
            }

            if (debug) {
                for (var i = 0; i < 12; i++) {
                    for (var j = 1; j <= 31; j++) {
                        for (var k = 0; k < 1; k++) {
                            _addEvent(2014, i, j, 'Jan Kowalski', 'Swimming', undefined, i * j * k);
                        }
                    }
                }
            }

            // Validate and set year/month
            if (o.year == undefined || o.month == undefined &&
                typeof o.year != 'number' || typeof o.month != 'number') {
                var currentDate = new Date();
                year = currentDate.getFullYear();
                month = currentDate.getMonth();
            } else {
                _setYearAndMonth(o.year, o.month);
            }

            // Render
            if (o.render != undefined) {
                render = o.render;
            }

            if (render) {
                _render();
            }
        };

        var CalendarEvents = function () {
            return new Array(); //todo
        };

        /**
          * Validates and creates objects and array containers
          * for specific year, month and day
          */
        var _initializeDayForEvents = function (year, month, day) {
            if (events == undefined || !events instanceof Object) {
                events = new CalendarEvents();
            }
            if (events[year] == undefined) {
                events[year] = {};
            }
            if (events[year][month] == undefined) {
                events[year][month] = {};
            }
            if (events[year][month][day] == undefined) {
                events[year][month][day] = [];
            }
        };

        var _anyEvents = function(year, month, day) {
            if (events instanceof Object &&
                events[year] != undefined &&
                events[year][month] != undefined &&
                events[year][month][day] != undefined &&
                events[year][month][day].length > 0) {
                return true;
            } else {
                return false;
            }
        }

        /**
          * Adds new event for specific date
          */
        var _addEvent = function (year, month, day, person, eventName, color, eventId) {

            if (color == undefined) {
                color = getRandomColor();
            }
            if (eventId == undefined) {
                eventId = new Date().getTime();
            }

            _initializeDayForEvents(year, month, day);

            events[year][month][day].push({
                eventId: eventId,
                person: person,
                eventName: eventName,
                color: color,
            });
        }

        var _removeEvent = function (year, month, day, eventId) {
            if (_anyEvents(year, month, day)) {
                var eventContainer = events[year][month][day];
                for (var i = 0; i < eventContainer.length; i++) {
                    var event = eventContainer[i];
                    if (event.eventId == eventId) {
                        eventContainer.splice(i, 1);
                    }
                }
            }
        }

        /**
         * Returns text values for week days
         */
        var _getWeekDays = function () {
            return [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        };

        var events = new CalendarEvents();

        //events.push({
        //    year: 2014,
        //    month: 7,
        //    day: 13,
        //    person: 'Jan Kowalski',
        //    eventName: 'Koniec treningu',
        //    color: '#AACCBB',
        //});
        //events.push({
        //    year: 2014,
        //    month: 7,
        //    day: 3,
        //    person: 'Tomasz Nowak',
        //    eventName: 'Poczatek treningu',
        //    color: '#BBCCDD',
        //});

        /**
          * Returns array of events for specific date
          * based on global calendar event array
          */
        var _getEventsForDate = function (year, month, day) {
            if (events instanceof Object &&
                events[year] != undefined &&
                events[year][month] != undefined &&
                events[year][month][day] != undefined) {
                return events[year][month][day];
            } else {
                return [];
            }
        };

        /**
         * Generates data for specific year and month and attaches events to days
         */
        var _getDataForMonthAndYear = function (year, month) {
            var date = new Date(year, month);
            var monthValue = date.getMonth();
            var weeks = [];

            var week = {
                days: [],
            };

            var pushed = 0;
            var _pushDay = function (_day) {
                pushed++;
                week.days.push(_day);
            };
            var _pushWeek = function (_week) {
                weeks.push(week);
                week = {
                    days: [],
                };
            }

            var previousDay = new Date(date);
            previousDay.setDate(previousDay.getDate() - 1);

            var offset = previousDay.getDay();
            
            for (var i = 0; i < offset; i++) {
                _pushDay({});
            }


            var dayValue = date.getDate();
            do {
                if (pushed % 7 == 0) {
                    _pushWeek(week);
                }

                var day = {
                    date_string: date.toDateString(),
                    bg_color: '#DEDEDE',
                    dayValue: dayValue,
                };
                
                var events = _getEventsForDate(year, month, dayValue);
                day.events = events;

                _pushDay(day);

                dayValue++;
                date = new Date(year, month, dayValue);

                dayValue = date.getDate();
            }
            while (dayValue > 1);

            if (week.days.length > 0) {
                    
                _pushWeek(week);
            }


            return weeks;
        };
        
        var _setYearAndMonth = function (_year, _month) {
            year = _year;
            month = _month;
        }

        /**
         * Renders calendar
         */
        var _render = function (_year, _month) {
            if (_year != undefined && _month != undefined) {
                _setYearAndMonth(_year, _month);
            }

            var cal = $(selector);

            var currentString = year;

            if (month < 9) {
                currentString += " 0" + (month + 1);
            } else {
                currentString += " " + (month + 1);
            }

            var data = {
                current_year_month: currentString,
                weekdays: _getWeekDays(),
                weeks: _getDataForMonthAndYear(year, month),
            };

            var src = $('#calendar-block').html();
            var template = Handlebars.compile(src);

            var html = template(data);

            cal.html(html);
        };

        var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        /**
          * Returns string with random hexadecimal color value
          * e.g. #A3BC90
          */
        var getRandomColor = function () {
            var str = '#';

            for (var i = 0; i < 6; i++) {
                var ran = Math.floor(Math.random() * hexValues.length);
                str += hexValues[ran];
            };

            return str;
        };

        var LocalStoragePersistence = function () {
            if (localStorage == undefined) {
                return;
            }

            this.saveAll = function () {
                if (events instanceof Object) {
                    localStorage.setItem('events', JSON.stringify(events));
                } else {
                    localStorage.removeItem('events');
                }
            };
            this.readAll = function () {
                var temp = localStorage.getItem('events');
                if (temp != undefined) {
                    events = JSON.parse(temp);
                }
                else {
                    events = new CalendarEvents();
                }
            }

            return this;
        };

        var AjaxPersistence = function () {
            // fake
            //todo
            this.saveAll = function () {
                console.log('saved');
            };

            this.readAll = function () {
                console.log('read');
            };

            this.clearAll = function () {
                console.log('cleared');
            };

            return this;
        }

        // Initialization
        _init();

        /**
         * Public interface
         */
        return {
            render: _render,
            addEvent: _addEvent,
            removeEvent: _removeEvent,
            getEvents: function () {
                return events;
            },
            saveEvents: function () {
                if (persistenceModule != null) {
                    persistenceModule.saveAll();
                }
            },
            clearEvents: function () {
                events = new CalendarEvents();
                if (persistenceModule != null) {
                    persistenceModule.clearAll();
                }
            },
        };
    };
    
    // Expose calendar function to environment
    env.Calendar = calendar;
})(window);